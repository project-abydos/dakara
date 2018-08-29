Feature: Synonym lookup
  As Sgt Snuffy I want to be able to lookup words to find better synonyms to use

  Background:
    Given I am on the dakara page
    And I have entered a bullet

  Scenario: Sgt Snuffy looks up a synonym
    Given I type in the bullet edit box
    When I select a word in the edit box
    Then I should see a list of synonyms appear below the edit box
