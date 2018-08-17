const Gherkin = require('gherkin');
const fs = require('fs');
const config = require(__dirname + '/../package.json').config;

export interface GherkinDocument {
  feature: Feature;
}

export interface Feature {
  keyword?: string;
  name?: string;
  description?: string;
  children?: Child[];
}

export interface Child {
  keyword?: string;
  name?: string;
  steps?: Child[];
  children?: Child[];
  text?: string;
}

const sourceFile = process.argv[2];
const destinationPath = config && config.g2m && config.g2m.destinationPath;

if (!sourceFile) {
  console.error('You must include a source file');
  process.exit();
}

if (!destinationPath) {
  console.error('You must include the config:{g2m:{destinationPath:""}} option in your package.json');
  process.exit();
}

const data = fs.readFileSync(sourceFile, 'utf8');
const parser = new Gherkin.Parser();
const gherkinDocument: GherkinDocument = parser.parse(data);

function generateMochaBlock(_keyword: string = '', text: string = '', _children: Child[] = []) {

  const mochaAction = GherkinToMochaMap(_keyword);
  const mochaText =
    (_keyword ? _keyword.trim() + ':' : '') +
    (_keyword && text && ' ') +
    text.trim().replace(/\n/g, '').replace(/'/g, '\\\'');

  const generatedChildren = _children.map(child =>
    generateMochaBlock(child.keyword, child.name || child.text, child.children || child.steps)
  ).join('\n');

  return `${mochaAction}('${mochaText}', () => {
    ${generatedChildren}
  });`;

}

function GherkinToMochaMap(_keyword: string): string {
  return {
    Given: 'specify',
    And: 'specify',
    Background: 'beforeEach',
    Scenario: 'suite',
    When: 'specify',
    Then: 'test',
    Feature: 'describe',
    But: 'test',
    Example: 'context'
  }[_keyword.trim()] || 'context';
}

const { keyword, name, description, children } = gherkinDocument.feature;
const generatedCode = generateMochaBlock(keyword, name, [{ name: description, children }]);
const destinationFile = sourceFile.match(/[\\\/]([\w\-\.]+)\..*$/)[1];

fs.writeFileSync(destinationPath + '/' + destinationFile + '.spec.ts', generatedCode);

process.exit();
