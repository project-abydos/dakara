// tslint:disable:max-line-length

import { Injectable } from '@angular/core';

export interface IDoDAcronym {
    abbr: string;
    def: string;
    src?: string;
}

const DICTIONARY: IDoDAcronym[] = [
    {
        abbr: 'A',
        def: 'analog',
        src: 'JP 1-02'
    },
    {
        abbr: 'A&P',
        def: 'administrative and personnel; analysis and production',
        src: '1-02'
    },
    {
        abbr: 'A-1',
        def: 'director of manpower, personnel, and services (Air Force) ',
        src: '1-02'
    },
    {
        abbr: 'A-2',
        def: 'intelligence staff officer (Air Force)',
        src: '1-02'
    },
    {
        abbr: 'A-3',
        def: 'operations directorate (COMAFFOR staff); operations staff officer (Air Force)',
        src: '1-02'
    },
    {
        abbr: 'A-4',
        def: 'director of logistics (Air Force)',
        src: '1-02'
    },
    {
        abbr: 'A-5',
        def: 'plans directorate (COMAFFOR staff)',
        src: '1-02'
    },
    {
        abbr: 'A-6',
        def: 'communications staff officer (Air Force)',
        src: '1-02'
    },
    {
        abbr: 'A-7',
        def: 'director of installations and mission support (Air Force)',
        src: '1-02'
    },
    {
        abbr: 'A-Space',
        def: 'Analytic Space',
        src: '1-02'
    },
    {
        abbr: 'A/C',
        def: 'aircraft',
        src: 'JP 1-02'
    },
    {
        abbr: 'A/D',
        def: 'analog-to-digital',
        src: 'JP 1-02'
    },
    {
        abbr: 'A/DACG',
        def: 'arrival/departure airfield control group',
        src: '1-02'
    },
    {
        abbr: 'A/DCG',
        def: 'arrival/departure control group',
        src: 'JP 1-02'
    },
    {
        abbr: 'A/E',
        def: 'ammunition/explosives',
        src: '1-02'
    },
    {
        abbr: 'A/ETF',
        def: 'automated/electronic target folder',
        src: 'JP 1-02'
    },
    {
        abbr: 'A/G',
        def: 'air to ground',
        src: 'JP 1-02'
    },
    {
        abbr: 'A/M',
        def: 'approach and moor',
        src: 'JP 1-02'
    },
    {
        abbr: 'A/NM',
        def: 'administrative/network management',
        src: 'JP 1-02'
    },
    {
        abbr: 'A/S',
        def: 'anti-spoofing',
        src: '1-02'
    },
    {
        abbr: 'A2',
        def: 'antiaccess',
        src: '1-02'
    },
    {
        abbr: 'A2C2',
        def: 'Army airspace command and control',
        src: 'JP 1-02'
    },
    {
        abbr: 'AA',
        def: 'assessment agent; avenue of approach',
        src: '1-02'
    },
    {
        abbr: 'AA&E',
        def: 'arms, ammunition, and explosives',
        src: '1-02'
    },
    {
        abbr: 'AAA',
        def: 'antiaircraft artillery; arrival and assembly area; assign alternate area',
        src: '1-02'
    },
    {
        abbr: 'AABB',
        def: 'American Association of Blood Banks',
        src: 'JP 1-02'
    },
    {
        abbr: 'AABWS',
        def: 'amphibious assault bulk water system',
        src: 'JP 1-02'
    },
    {
        abbr: 'AAC',
        def: 'activity address code\t',
        src: 'JP 4-02'
    },
    {
        abbr: 'AACG',
        def: 'arrival airfield control group',
        src: 'JP 1-02'
    },
    {
        abbr: 'AADC',
        def: 'area air defense commander',
        src: '1-02'
    },
    {
        abbr: 'AADP',
        def: 'area air defense plan',
        src: '1-02'
    },
    {
        abbr: 'AAFES',
        def: 'Army and Air Force Exchange Service',
        src: 'JP 1-02'
    },
    {
        abbr: 'AAFIF',
        def: 'automated air facility information file',
        src: 'JP 1-02'
    },
    {
        abbr: 'AAFS',
        def: 'amphibious assault fuel system',
        src: '1-02'
    },
    {
        abbr: 'AAFSF',
        def: 'amphibious assault fuel supply facility',
        src: 'JP 1-02'
    },
    {
        abbr: 'AAG',
        def: 'aeronautical assignment group',
        src: '1-02'
    },
    {
        abbr: 'AAGS',
        def: 'Army air-ground system',
        src: '1-02'
    },
    {
        abbr: 'AAI',
        def: 'air-to-air interface',
        src: 'JP 1-02'
    },
    {
        abbr: 'AAM',
        def: 'air-to-air missile',
        src: 'JP 1-02'
    },
    {
        abbr: 'AAMDC',
        def: 'United States Army Air and Missile Defense Command',
        src: '1-02'
    },
    {
        abbr: 'AAOE',
        def: 'arrival and assembly operations element',
        src: 'JP 1-02'
    },
    {
        abbr: 'AAOG',
        def: 'arrival and assembly operations group',
        src: 'JP 1-02'
    },
    {
        abbr: 'AAP',
        def: 'Allied administrative publication; assign alternate parent',
        src: 'JP 1-02'
    },
    {
        abbr: 'AAR',
        def: 'after action report; after action review; air-to-air refueling area',
        src: '1-02'
    },
    {
        abbr: 'AAS',
        def: 'amphibious assault ship',
        src: '1-02'
    },
    {
        abbr: 'AAST',
        def: 'aeromedical evacuation administrative support team',
        src: 'JP 4-02'
    },
    {
        abbr: 'AAT',
        def: 'automatic analog test; aviation advisory team',
        src: 'JP 1-02'
    },
    {
        abbr: 'AATCC',
        def: 'amphibious air traffic control center',
        src: '1-02'
    },
    {
        abbr: 'AAU',
        def: 'analog applique unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'AAV',
        def: 'amphibious assault vehicle',
        src: 'JP 1-02'
    },
    {
        abbr: 'AAW',
        def: 'antiair warfare',
        src: 'JP 1-02'
    },
    {
        abbr: 'AB',
        def: 'air base ',
        src: '1-02'
    },
    {
        abbr: 'ABCA',
        def: 'American, British, Canadian, Australian, and New Zealand',
        src: '1-02'
    },
    {
        abbr: 'ABCS',
        def: 'Army Battle Command System',
        src: 'JP 1-02'
    },
    {
        abbr: 'ABD',
        def: 'airbase defense',
        src: 'JP 1-02'
    },
    {
        abbr: 'ABFC',
        def: 'advanced base functional component',
        src: '1-02'
    },
    {
        abbr: 'ABFDS',
        def: 'aerial bulk fuel delivery system'
    },
    {
        abbr: 'ABFS',
        def: 'amphibious bulk fuel system',
        src: 'JP 1-02'
    },
    {
        abbr: 'ABGD',
        def: 'air base ground defense',
        src: 'JP 1-02'
    },
    {
        abbr: 'ABIS',
        def: 'Automated Biometric Identification System',
        src: '1-02'
    },
    {
        abbr: 'ABL',
        def: 'airborne laser',
        src: 'JP 1-02'
    },
    {
        abbr: 'ABLTS',
        def: 'amphibious bulk liquid transfer system',
        src: '1-02'
    },
    {
        abbr: 'ABM',
        def: 'antiballistic missile',
        src: 'JP 1-02'
    },
    {
        abbr: 'ABN',
        def: 'airborne',
        src: 'JP 1-02'
    },
    {
        abbr: 'ABNCP',
        def: 'Airborne Command Post',
        src: 'JP 1-02'
    },
    {
        abbr: 'ABO',
        def: 'air base operability; blood typing system',
        src: 'JP 1-02'
    },
    {
        abbr: 'ABP',
        def: 'air battle plan',
        src: '1-02'
    },
    {
        abbr: 'AC',
        def: 'Active Component; alternating current',
        src: '1-02'
    },
    {
        abbr: 'AC-130',
        def: 'Hercules',
        src: 'JP 1-02'
    },
    {
        abbr: 'AC/S, C4I',
        def: 'Assistant Chief of Staff, Command, Control, Communications, Computers, and Intelligence (USMC)',
        src: 'JP 1-02'
    },
    {
        abbr: 'AC2',
        def: 'airspace command and control',
        src: '1-02'
    },
    {
        abbr: 'ACA',
        def: 'air clearance authority; airlift clearance authority; airspace control authority; airspace coordination area',
        src: '1-02'
    },
    {
        abbr: 'ACAA',
        def: 'automatic chemical agent alarm',
        src: 'JP 1-02'
    },
    {
        abbr: 'ACAPS',
        def: 'area communications electronics capabilities',
        src: 'JP 1-02'
    },
    {
        abbr: 'ACAT',
        def: 'aeromedical evacuation command augmentation team',
        src: 'JP 4-02'
    },
    {
        abbr: 'ACB',
        def: 'amphibious construction battalion',
        src: 'JP 1-02'
    },
    {
        abbr: 'ACC',
        def: 'Air Combat Command; air component commander; area coordination center; Army Contracting Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'ACCE',
        def: 'air component coordination element',
        src: '1-02'
    },
    {
        abbr: 'ACCON',
        def: 'acoustic condition',
        src: 'JP 1-02'
    },
    {
        abbr: 'ACCS',
        def: 'air command and control system',
        src: 'JP 1-02'
    },
    {
        abbr: 'ACCSA',
        def: 'Allied Communications and Computer Security Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'ACD',
        def: 'automated cargo documentation',
        src: '1-02'
    },
    {
        abbr: 'ACDO',
        def: 'assistant command duty officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'ACE',
        def: 'airborne command element (USAF); air combat element (NATO); Allied Command Europe; aviation combat element (USMC)',
        src: '1-02'
    },
    {
        abbr: 'ACEOI',
        def: 'automated communications-electronics operating instructions',
        src: '1-02'
    },
    {
        abbr: 'ACF',
        def: 'air contingency force',
        src: 'JP 1-02'
    },
    {
        abbr: 'ACI',
        def: 'assign call inhibit',
        src: 'JP 1-02'
    },
    {
        abbr: 'ACIC',
        def: 'Army Counterintelligence Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'ACINT',
        def: 'acoustic intelligence',
        src: 'JP 1-02'
    },
    {
        abbr: 'ACK',
        def: 'acknowledgement',
        src: 'JP 1-02'
    },
    {
        abbr: 'ACL',
        def: 'access control list; allowable cabin load',
        src: '1-02'
    },
    {
        abbr: 'ACLANT',
        def: 'Allied Command Atlantic',
        src: 'JP 1-02'
    },
    {
        abbr: 'ACLP',
        def: 'affiliated contingency load planning',
        src: '1-02'
    },
    {
        abbr: 'ACM',
        def: 'advanced conventional munitions; advanced cruise missile; air combat maneuver; air contingency Marine air-ground task force (MAGTF); airspace coordinating measure',
        src: '1-02'
    },
    {
        abbr: 'ACMREQ',
        def: 'airspace control means request; airspace coordination measures request',
        src: 'JP 1-02'
    },
    {
        abbr: 'ACN',
        def: 'assign commercial network',
        src: 'JP 1-02'
    },
    {
        abbr: 'ACO',
        def: 'administrative contracting officer; airspace control order',
        src: '1-02'
    },
    {
        abbr: 'ACOA',
        def: 'adaptive course of action',
        src: '1-02'
    },
    {
        abbr: 'ACOC',
        def: 'area communications operations center',
        src: '1-02'
    },
    {
        abbr: 'ACOCC',
        def: 'air combat operations command center',
        src: 'JP 1-02'
    },
    {
        abbr: 'ACOS',
        def: 'assistant chief of staff',
        src: '1-02'
    },
    {
        abbr: 'ACP',
        def: 'access control point; air commander\'s pointer; airspace control plan; Allied communications publication; assign common pool',
        src: '1-02'
    },
    {
        abbr: 'ACR',
        def: 'armored cavalry regiment (Army); assign channel reassignment',
        src: 'JP 1-02'
    },
    {
        abbr: 'ACS',
        def: 'agile combat support; air-capable ship; airspace control system; auxiliary crane ship',
        src: '1-02'
    },
    {
        abbr: 'ACSA',
        def: 'acquisition and cross-servicing agreement; Allied Communications Security Agency',
        src: '1-02'
    },
    {
        abbr: 'ACT',
        def: 'activity; advance civilian team; Allied Command Transformation',
        src: '1-02'
    },
    {
        abbr: 'ACU',
        def: 'assault craft unit',
        src: '1-02'
    },
    {
        abbr: 'ACV',
        def: 'aircraft cockpit video; armored combat vehicle',
        src: '1-02'
    },
    {
        abbr: 'ACW',
        def: 'advanced conventional weapons',
        src: 'JP 1-02'
    },
    {
        abbr: 'AD',
        def: 'active duty; advanced deployability; air defense; area denial; automatic distribution; priority add-on',
        src: '1-02'
    },
    {
        abbr: 'ADA',
        def: 'aerial damage assessment; air defense artillery',
        src: '1-02'
    },
    {
        abbr: 'ADAFCO',
        def: 'air defense artillery fire control officer',
        src: '1-02'
    },
    {
        abbr: 'ADAL',
        def: 'authorized dental allowance list',
        src: 'JP 1-02'
    },
    {
        abbr: 'ADAM',
        def: 'air defense airspace management',
        src: '1-02'
    },
    {
        abbr: 'ADAM/BAE',
        def: 'air defense airspace management/brigade aviation element',
        src: '1-02'
    },
    {
        abbr: 'ADAMS',
        def: 'Allied Deployment and Movement System',
        src: '1-02'
    },
    {
        abbr: 'ADANS',
        def: 'Air Mobility Command Deployment Analysis System',
        src: 'JP 1-02'
    },
    {
        abbr: 'ADC',
        def: 'air defense commander; area damage control',
        src: '1-02'
    },
    {
        abbr: 'ADCAP',
        def: 'advanced capability',
        src: 'JP 1-02'
    },
    {
        abbr: 'ADCI/MS',
        def: 'Associate Director of Central Intelligence for Military Support',
        src: 'JP 1-02'
    },
    {
        abbr: 'ADCON',
        def: 'administrative control',
        src: '1-02'
    },
    {
        abbr: 'ADD',
        def: 'assign on-line diagnostic',
        src: 'JP 1-02'
    },
    {
        abbr: 'ADDO',
        def: 'Assistant Deputy Director for Operations',
        src: 'JP 1-02'
    },
    {
        abbr: 'ADDO(MS)',
        def: 'Assistant Deputy Director for Operations/Military Support',
        src: 'JP 1-02'
    },
    {
        abbr: 'ADE',
        def: 'airdrop damage estimate; assign digit editing',
        src: '1-02'
    },
    {
        abbr: 'ADF',
        def: 'automatic direction finding',
        src: 'JP 1-02'
    },
    {
        abbr: 'ADIZ',
        def: 'air defense identification zone',
        src: 'JP 1-02'
    },
    {
        abbr: 'ADKC/RCU',
        def: 'Automatic Key Distribution Center/Rekeying Control Unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'ADL',
        def: 'advanced distributed learning; assign XX (SL) routing',
        src: '1-02'
    },
    {
        abbr: 'ADMIN',
        def: 'administration',
        src: 'JP 1-02'
    },
    {
        abbr: 'ADN',
        def: 'Allied Command Europe desired ground zero number',
        src: 'JP 1-02'
    },
    {
        abbr: 'ADNET',
        def: 'anti-drug network',
        src: 'JP 1-02'
    },
    {
        abbr: 'ADOC',
        def: 'air defense operations center',
        src: 'JP 1-02'
    },
    {
        abbr: 'ADP',
        def: 'air defense plan; Army doctrine publication; automated data processing',
        src: '1-02'
    },
    {
        abbr: 'ADPE',
        def: 'automated data processing equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'ADPS',
        def: 'automatic data processing system',
        src: 'JP 1-02'
    },
    {
        abbr: 'ADR',
        def: 'accident data recorder; aircraft damage repair; airfield damage repair',
        src: '1-02'
    },
    {
        abbr: 'ADRA',
        def: 'Adventist Development and Relief Agency',
        src: '1-02'
    },
    {
        abbr: 'ADRP',
        def: 'Army doctrine reference publication',
        src: '1-02'
    },
    {
        abbr: 'ADS',
        def: 'air defense section; air defense sector; amphibian discharge site; authoritative data source',
        src: '1-02'
    },
    {
        abbr: 'ADSIA',
        def: 'Allied Data Systems Interoperability Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'ADSW',
        def: 'active duty for special work',
        src: 'JP 1-02'
    },
    {
        abbr: 'ADT',
        def: 'active duty for training; assign digital transmission group; automatic digital tester',
        src: 'JP 1-02'
    },
    {
        abbr: 'ADUSD(TP)',
        def: 'Assistant Deputy Under Secretary of Defense, Transportation Policy',
        src: '1-02'
    },
    {
        abbr: 'ADVON',
        def: 'advanced echelon',
        src: '1-02'
    },
    {
        abbr: 'ADW',
        def: 'air defense warnings',
        src: '1-02'
    },
    {
        abbr: 'ADWC',
        def: 'air defense warning condition',
        src: '1-02'
    },
    {
        abbr: 'ADZ',
        def: 'amphibious defense zone',
        src: 'JP 1-02'
    },
    {
        abbr: 'AE',
        def: 'aeromedical evacuation; assault echelon; attenuation equalizer',
        src: '1-02'
    },
    {
        abbr: 'AEC',
        def: 'aeromedical evacuation crew',
        src: 'JP 4-02'
    },
    {
        abbr: 'AECA',
        def: 'Arms Export Control Act',
        src: '1-02'
    },
    {
        abbr: 'AECM',
        def: 'aeromedical evacuation crew member',
        src: 'JP 1-02'
    },
    {
        abbr: 'AECS',
        def: 'aeromedical evacuation command squadron',
        src: 'JP 4-02'
    },
    {
        abbr: 'AECT',
        def: 'aeromedical evacuation control team',
        src: '1-02'
    },
    {
        abbr: 'AEG',
        def: 'air expeditionary group',
        src: 'JP 1-02'
    },
    {
        abbr: 'AEHF',
        def: 'advanced extremely high frequency',
        src: '1-02'
    },
    {
        abbr: 'AELT',
        def: 'aeromedical evacuation liaison team',
        src: '1-02'
    },
    {
        abbr: 'AEOS',
        def: 'aeromedical evacuation operations squadron',
        src: 'JP 1-02'
    },
    {
        abbr: 'AEOT',
        def: 'aeromedical evacuation operations team',
        src: '1-02'
    },
    {
        abbr: 'AEPS',
        def: 'aircrew escape propulsion system',
        src: 'JP 1-02'
    },
    {
        abbr: 'AEPST',
        def: 'aeromedical evacuation plans and strategy team',
        src: 'JP 4-02'
    },
    {
        abbr: 'AES',
        def: 'aeromedical evacuation squadron',
        src: '1-02'
    },
    {
        abbr: 'AESC',
        def: 'aeromedical evacuation support cell',
        src: '1-02'
    },
    {
        abbr: 'AET',
        def: 'airport emergency team',
        src: '1-02'
    },
    {
        abbr: 'AETC',
        def: 'Air Education and Training Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'AETF',
        def: 'air expeditionary task force',
        src: '1-02'
    },
    {
        abbr: 'AEU',
        def: 'assign essential user bypass',
        src: 'JP 1-02'
    },
    {
        abbr: 'AEW',
        def: 'airborne early warning',
        src: '1-02'
    },
    {
        abbr: 'AF',
        def: 'Air Force; Air Force (form); amphibious force',
        src: '1-02'
    },
    {
        abbr: 'AF/A2',
        def: 'Air Force Director of Intelligence, Surveillance, and Reconnaissance',
        src: '1-02'
    },
    {
        abbr: 'AF/DP',
        def: 'Deputy Chief of Staff for Personnel, United States Air Force',
        src: 'JP 1-02'
    },
    {
        abbr: 'AF/IL',
        def: 'Deputy Chief of Staff for Installations and Logistics, USAF',
        src: 'JP 1-02'
    },
    {
        abbr: 'AF/XO',
        def: 'Deputy Chief of Staff for Plans and Operations, United States Air Force',
        src: 'JP 1-02'
    },
    {
        abbr: 'AF/XOI',
        def: 'Air Force Director of Intelligence, Surveillance, and Reconnaissance',
        src: 'JP 1-02'
    },
    {
        abbr: 'AF/XOO',
        def: 'Director of Operations, United States Air Force',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFAARS',
        def: 'Air Force After Action Reporting System',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFARN',
        def: 'Air Force air request net',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFATDS',
        def: 'Advanced Field Artillery Tactical Data System',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFB',
        def: 'Air Force base',
        src: '1-02'
    },
    {
        abbr: 'AFC',
        def: 'area frequency coordinator; automatic frequency control',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFCA',
        def: 'Air Force Communications Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFCAP',
        def: 'Air Force contract augmentation program; Armed Forces contract augmentation program',
        src: '1-02'
    },
    {
        abbr: 'AFCB',
        def: 'Armed Forces Chaplains Board',
        src: '1-02'
    },
    {
        abbr: 'AFCC',
        def: 'Air Force Component Commander',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFCCC',
        def: 'Air Force Combat Climatology Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFCEC',
        def: 'Air Force Civil Engineer Center',
        src: '1-02'
    },
    {
        abbr: 'AFCEE',
        def: 'Air Force Center for Engineering and the Environment',
        src: '1-02'
    },
    {
        abbr: 'AFCENT',
        def: 'Allied Forces Central Europe (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFCERT',
        def: 'Air Force computer emergency response team',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFCESA',
        def: 'Air Force Civil Engineering Support Agency',
        src: '1-02'
    },
    {
        abbr: 'AFD',
        def: 'assign fixed directory',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFDA',
        def: 'Air Force doctrine annex',
        src: '1-02'
    },
    {
        abbr: 'AFDC',
        def: 'Air Force Doctrine Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFDD',
        def: 'Air Force doctrine document',
        src: '1-02'
    },
    {
        abbr: 'AFDIGS',
        def: 'Air Force digital graphics system',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFDIL',
        def: 'Armed Forces DNA Identification Laboratory',
        src: 'JP 4-06'
    },
    {
        abbr: 'AFDIS',
        def: 'Air Force Weather Agency Dial In Subsystem',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFE',
        def: 'Armed Forces Entertainment',
        src: '1-02'
    },
    {
        abbr: 'AFEES',
        def: 'Armed Forces Examining and Entrance Station',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFFIS',
        def: 'Air Facilities File Information System',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFFMA',
        def: 'Air Force Frequency Management Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFFOR',
        def: 'Air Force forces',
        src: '1-02'
    },
    {
        abbr: 'AFH',
        def: 'Air Force handbook',
        src: 'JP 3-40'
    },
    {
        abbr: 'AFHSC',
        def: 'Armed Forces Health Surveillance Center',
        src: '1-02'
    },
    {
        abbr: 'AFI',
        def: 'Air Force instruction',
        src: '1-02'
    },
    {
        abbr: 'AFIAA',
        def: 'Air Force Intelligence Analysis Agency',
        src: '1-02'
    },
    {
        abbr: 'AFICA',
        def: 'Air Force Installation Contracting Agency',
        src: '1-02'
    },
    {
        abbr: 'AFID',
        def: 'anti-fratricide identification device',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFIP',
        def: 'Armed Forces Institute of Pathology',
        src: '1-02'
    },
    {
        abbr: 'AFIRB',
        def: 'Armed Forces Identification Review Board',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFIS',
        def: 'American Forces Information Service',
        src: 'JP 3-61'
    },
    {
        abbr: 'AFISRA',
        def: 'Air Force Intelligence, Surveillance, and Reconnaissance Agency',
        src: '1-02'
    },
    {
        abbr: 'AFIWC',
        def: 'Air Force Information Warfare Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFJI',
        def: 'Air Force joint instruction',
        src: 'JP 4-01.6'
    },
    {
        abbr: 'AFJMAN',
        def: 'Air Force Joint Manual',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFLC',
        def: 'Air Force Logistics Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFLE',
        def: 'Air Force liaison element',
        src: '1-02'
    },
    {
        abbr: 'AFLNO',
        def: 'Air Force liaison officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFMAN',
        def: 'Air Force manual',
        src: '1-02'
    },
    {
        abbr: 'AFMC',
        def: 'Air Force Materiel Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFMD',
        def: 'Air Force Mission Directive',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFME',
        def: 'Armed Forces Medical Examiner',
        src: '1-02'
    },
    {
        abbr: 'AFMES',
        def: 'Armed Forces Medical Examiner System',
        src: '1-02'
    },
    {
        abbr: 'AFMIC',
        def: 'Armed Forces Medical Intelligence Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFMLO',
        def: 'Air Force Medical Logistics Office',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFMS',
        def: 'Air Force Medical Service',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFNORTH',
        def: 'Air Force North; Allied Forces Northern Europe (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFNORTHWEST',
        def: 'Allied Forces North West Europe (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFNSEP',
        def: 'Air Force National Security and Emergency Preparedness Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFO',
        def: 'advance force operations',
        src: '1-02'
    },
    {
        abbr: 'AFOA',
        def: 'Air Force Operations Activity ',
        src: '1-02'
    },
    {
        abbr: 'AFOE',
        def: 'assault follow-on echelon',
        src: '1-02'
    },
    {
        abbr: 'AFOSI',
        def: 'Air Force Office of Special Investigations',
        src: '1-02'
    },
    {
        abbr: 'AFPAM',
        def: 'Air Force pamphlet',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFPC',
        def: 'Air Force Personnel Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFPD',
        def: 'Air Force policy directive',
        src: '1-02'
    },
    {
        abbr: 'AFPEO',
        def: 'Armed Forces Professional Entertainment Overseas',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFR',
        def: 'Air Force Reserve; assign frequency for network reporting',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFRAT',
        def: 'Air Force Radiation Assessment Team',
        src: '1-02'
    },
    {
        abbr: 'AFRC',
        def: 'Air Force Reserve Command; Armed Forces Recreation Center',
        src: '1-02'
    },
    {
        abbr: 'AFRCC',
        def: 'Air Force rescue coordination center',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFRL',
        def: 'Air Force Research Laboratory',
        src: 'JP 4-10'
    },
    {
        abbr: 'AFRRI',
        def: 'Armed Forces Radiobiology Research Institute',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFRTS',
        def: 'American Forces Radio and Television Service',
        src: '1-02'
    },
    {
        abbr: 'AFS',
        def: 'aeronautical fixed service',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFSATCOM',
        def: 'Air Force satellite communications (system)',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFSB',
        def: 'afloat forward staging base; Army field support brigade',
        src: '1-02'
    },
    {
        abbr: 'AFSC',
        def: 'Armed Forces Staff College; Army Field Support Center; United States Air Force specialty code',
        src: '1-02'
    },
    {
        abbr: 'AFSCN',
        def: 'Air Force Satellite Control Network',
        src: '1-02'
    },
    {
        abbr: 'AFSMO',
        def: 'Air Force Spectrum Management Office',
        src: '1-02'
    },
    {
        abbr: 'AFSOAC',
        def: 'Air Force special operations air component',
        src: '1-02'
    },
    {
        abbr: 'AFSOAD',
        def: 'Air Force special operations air detachment',
        src: '1-02'
    },
    {
        abbr: 'AFSOAE',
        def: 'Air Force special operations air element',
        src: '1-02'
    },
    {
        abbr: 'AFSOC',
        def: 'Air Force Special Operations Command',
        src: '1-02'
    },
    {
        abbr: 'AFSOCC',
        def: 'Air Force special operations control center',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFSOF',
        def: 'Air Force special operations forces',
        src: '1-02'
    },
    {
        abbr: 'AFSOUTH',
        def: 'Allied Forces, South (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFSPACE',
        def: 'United States Space Command Air Force',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFSPC',
        def: 'Air Force Space Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFSPOC',
        def: 'Air Force Space Operations Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFSTRAT',
        def: 'Air Forces Strategic',
        src: '1-02'
    },
    {
        abbr: 'AFTAC',
        def: 'Air Force Technical Applications Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFTH',
        def: 'Air Force Theater Hospital',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFTN',
        def: 'Aeronautical Fixed Telecommunications Network',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFTO',
        def: 'Air Force technical order',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFTRANS',
        def: 'Air Force Transportation Component',
        src: '1-02'
    },
    {
        abbr: 'AFTTP',
        def: 'Air Force tactics, techniques, and procedures; Air Force technical training publication',
        src: '1-02'
    },
    {
        abbr: 'AFTTP(I)',
        def: 'Air Force tactics, techniques, and procedures (instruction)',
        src: '1-02'
    },
    {
        abbr: 'AFW',
        def: 'Air Force Weather',
        src: '1-02'
    },
    {
        abbr: 'AFWA',
        def: 'Air Force Weather Agency',
        src: '1-02'
    },
    {
        abbr: 'AFWCF',
        def: 'Air Force working capital fund',
        src: 'JP 1-02'
    },
    {
        abbr: 'AFWIN',
        def: 'Air Force Weather Information Network',
        src: 'JP 1-02'
    },
    {
        abbr: 'AG',
        def: 'adjutant general (Army)',
        src: 'JP 1-02'
    },
    {
        abbr: 'AGARD',
        def: 'Advisory Group for Aerospace Research and Development',
        src: 'JP 1-02'
    },
    {
        abbr: 'AGE',
        def: 'aerospace ground equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'AGIL',
        def: 'airborne general illumination lightself',
        src: 'JP 1-02'
    },
    {
        abbr: 'AGL',
        def: 'above ground level',
        src: '1-02'
    },
    {
        abbr: 'AGM-28A',
        def: 'Hound Dog',
        src: 'JP 1-02'
    },
    {
        abbr: 'AGM-65',
        def: 'Maverick',
        src: 'JP 1-02'
    },
    {
        abbr: 'AGM-69',
        def: 'short range attack missile',
        src: 'JP 1-02'
    },
    {
        abbr: 'AGR',
        def: 'Active Guard and Reserve',
        src: 'JP 1-02'
    },
    {
        abbr: 'AGS',
        def: 'aviation ground support',
        src: '1-02'
    },
    {
        abbr: 'AHA',
        def: 'alert holding area',
        src: '1-02'
    },
    {
        abbr: 'AHD',
        def: 'antihandling device',
        src: 'JP 3-15'
    },
    {
        abbr: 'AI',
        def: 'acquisition instruction; airborne interceptor; air interdiction; area of interest',
        src: '1-02'
    },
    {
        abbr: 'AIA',
        def: 'Air Intelligence Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'AIASA',
        def: 'annual integrated assessment for security assistance',
        src: 'JP 1-02'
    },
    {
        abbr: 'AIC',
        def: 'air intercept controller; assign individual compressed dial; Atlantic Intelligence Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'AICF/USA',
        def: 'Action Internationale Contre La Faim (International Action Against Hunger)',
        src: 'JP 1-02'
    },
    {
        abbr: 'AIDS',
        def: 'acquired immunodeficiency syndrome',
        src: '1-02'
    },
    {
        abbr: 'AIF',
        def: 'automated installation intelligence file',
        src: 'JP 1-02'
    },
    {
        abbr: 'AIFA',
        def: 'AAFES Imprest Fund Activity',
        src: 'JP 1-02'
    },
    {
        abbr: 'AIG',
        def: 'addressee indicator group',
        src: 'JP 1-02'
    },
    {
        abbr: 'AIIRS',
        def: 'automated intelligence information reporting system',
        src: 'JP 1-02'
    },
    {
        abbr: 'AIK',
        def: 'assistance in kind',
        src: '1-02'
    },
    {
        abbr: 'AIM',
        def: 'Airman\'s Information Manual',
        src: 'JP 1-02'
    },
    {
        abbr: 'AIM-54A',
        def: 'Phoenix',
        src: 'JP 1-02'
    },
    {
        abbr: 'AIM-7',
        def: 'Sparrow',
        src: 'JP 1-02'
    },
    {
        abbr: 'AIM-9',
        def: 'Sidewinder',
        src: 'JP 1-02'
    },
    {
        abbr: 'AIMD',
        def: 'aircraft intermediate maintenance department',
        src: '1-02'
    },
    {
        abbr: 'AIMT',
        def: 'air interdiction of maritime targets',
        src: '1-02'
    },
    {
        abbr: 'AIP',
        def: 'aeronautical information publication',
        src: '1-02'
    },
    {
        abbr: 'AIQC',
        def: 'antiterrorism instructor qualification course',
        src: 'JP 1-02'
    },
    {
        abbr: 'AIRBAT',
        def: 'Airborne Intelligence, Surveillance, and Reconnaissance Requirements-Based Allocation Tool',
        src: 'JP 2-01'
    },
    {
        abbr: 'AIRCENT',
        def: 'Allied Air Forces Central Europe (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'AIRES',
        def: 'advanced imagery requirements exploitation system',
        src: 'JP 1-02'
    },
    {
        abbr: 'AIREVACCONFIRM',
        def: 'air evacuation confirmation',
        src: 'JP 1-02'
    },
    {
        abbr: 'AIREVACREQ',
        def: 'air evacuation request',
        src: 'JP 1-02'
    },
    {
        abbr: 'AIREVACRESP',
        def: 'air evacuation response',
        src: 'JP 1-02'
    },
    {
        abbr: 'AIRNORTHWEST',
        def: 'Allied Air Forces North West Europe (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'AIRREQRECON',
        def: 'air request reconnaissance',
        src: 'JP 1-02'
    },
    {
        abbr: 'AIRSOUTH',
        def: 'Allied Air Forces Southern Europe (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'AIRSUPREQ',
        def: 'air support request',
        src: '1-02'
    },
    {
        abbr: 'AIS',
        def: 'automated information system',
        src: '1-02'
    },
    {
        abbr: 'AIT',
        def: 'aeromedical isolation team; automated information technology; automatic identification technology',
        src: '1-02'
    },
    {
        abbr: 'AIU',
        def: 'Automatic Digital Network Interface Unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'AJ',
        def: 'anti-jam',
        src: '1-02'
    },
    {
        abbr: 'AJ/CM',
        def: 'anti-jam control modem',
        src: 'JP 1-02'
    },
    {
        abbr: 'AJBPO',
        def: 'area joint blood program office',
        src: '1-02'
    },
    {
        abbr: 'AJCC',
        def: 'alternate joint communications center',
        src: 'JP 1-02'
    },
    {
        abbr: 'AJF',
        def: 'allied joint force',
        src: 'JP 3-61'
    },
    {
        abbr: 'AJFP',
        def: 'adaptive joint force packaging',
        src: 'JP 1-02'
    },
    {
        abbr: 'AJMRO',
        def: 'area joint medical regulating office',
        src: 'JP 1-02'
    },
    {
        abbr: 'AJNPE',
        def: 'airborne joint nuclear planning element',
        src: 'JP 1-02'
    },
    {
        abbr: 'AJP',
        def: 'allied joint publication',
        src: '1-02'
    },
    {
        abbr: 'AK',
        def: 'commercial cargo ship',
        src: 'JP 1-02'
    },
    {
        abbr: 'AKNLDG',
        def: 'acknowledge message',
        src: 'JP 1-02'
    },
    {
        abbr: 'ALARA',
        def: 'as low as reasonably achievable',
        src: '1-02'
    },
    {
        abbr: 'ALCC',
        def: 'airlift control center',
        src: '1-02'
    },
    {
        abbr: 'ALCE',
        def: 'airlift control element',
        src: 'JP 1-02'
    },
    {
        abbr: 'ALCF',
        def: 'airlift control flight',
        src: '1-02'
    },
    {
        abbr: 'ALCG',
        def: 'analog line conditioning group',
        src: 'JP 1-02'
    },
    {
        abbr: 'ALCM',
        def: 'air-launched cruise missile',
        src: '1-02'
    },
    {
        abbr: 'ALCOM',
        def: 'United States Alaskan Command',
        src: '1-02'
    },
    {
        abbr: 'ALCON',
        def: 'all concerned',
        src: 'JP 1-02'
    },
    {
        abbr: 'ALCS',
        def: 'airlift control squadron',
        src: 'JP 1-02'
    },
    {
        abbr: 'ALCT',
        def: 'airlift control team',
        src: '1-02'
    },
    {
        abbr: 'ALD',
        def: 'airborne laser designator; available-to-load date',
        src: '1-02'
    },
    {
        abbr: 'ALE',
        def: 'airlift liaison element',
        src: 'JP 1-02'
    },
    {
        abbr: 'ALEP',
        def: 'amphibious lift enhancement program',
        src: '1-02'
    },
    {
        abbr: 'ALERFA',
        def: 'alert phase (ICAO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ALERT',
        def: 'attack and launch early reporting to theater',
        src: 'JP 1-02'
    },
    {
        abbr: 'ALERTORD',
        def: 'alert order',
        src: 'JP 5-0'
    },
    {
        abbr: 'ALLOREQ',
        def: 'air allocation request; allocation request',
        src: '1-02'
    },
    {
        abbr: 'ALLTV',
        def: 'all light level television',
        src: 'JP 1-02'
    },
    {
        abbr: 'ALMSNSCD',
        def: 'airlift mission schedule',
        src: 'JP 1-02'
    },
    {
        abbr: 'ALN',
        def: 'ammunition lot number',
        src: '1-02'
    },
    {
        abbr: 'ALNOT',
        def: 'alert notice',
        src: '1-02'
    },
    {
        abbr: 'ALO',
        def: 'air liaison officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'ALOC',
        def: 'air line of communications',
        src: '1-02'
    },
    {
        abbr: 'ALORD',
        def: 'alert launch order',
        src: 'JP 1-02'
    },
    {
        abbr: 'ALP',
        def: 'allied logistic publication',
        src: '1-02'
    },
    {
        abbr: 'ALSA',
        def: 'Air Land Sea Application (Center)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ALSE',
        def: 'aviation life support equipment',
        src: '1-02'
    },
    {
        abbr: 'ALSS',
        def: 'advanced logistic support site',
        src: '1-02'
    },
    {
        abbr: 'ALT',
        def: 'acquisition, logistics, and technology',
        src: '1-02'
    },
    {
        abbr: 'ALTD',
        def: 'airborne laser target designator',
        src: '1-02'
    },
    {
        abbr: 'ALTRV',
        def: 'altitude reservation',
        src: '1-02'
    },
    {
        abbr: 'ALTTSC',
        def: 'alternate Tomahawk strike coordinator',
        src: 'JP 1-02'
    },
    {
        abbr: 'AM',
        def: 'amplitude modulation',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMAL',
        def: 'authorized medical allowance list',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMB',
        def: 'air mobility branch; ambassador',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMBUS',
        def: 'ambulance bus',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMC',
        def: 'airborne mission coordinator; Air Mobility Command; Army Materiel Command: midpoint compromise search area',
        src: '1-02'
    },
    {
        abbr: 'AMC/SGXM',
        def: 'Air Mobility Command/Command Surgeon’s Office',
        src: '1-02'
    },
    {
        abbr: 'AMCC',
        def: 'allied movement coordination center; alternate military command center',
        src: '1-02'
    },
    {
        abbr: 'AMCIT',
        def: 'American citizen',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMCM',
        def: 'airborne mine countermeasures',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMCT',
        def: 'air mobility control team',
        src: '1-02'
    },
    {
        abbr: 'AMD',
        def: 'air and missile defense; air mobility division',
        src: '1-02'
    },
    {
        abbr: 'AMDC',
        def: 'air and missile defense commander',
        src: '1-02'
    },
    {
        abbr: 'AME',
        def: 'antenna mounted electronics',
        src: '1-02'
    },
    {
        abbr: 'AMEDD',
        def: 'Army Medical Department',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMEDDCS',
        def: 'U.S. Army Medical Department Center and School',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMedP',
        def: 'allied medical publication',
        src: '1-02'
    },
    {
        abbr: 'AMEMB',
        def: 'American Embassy',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMETL',
        def: 'agency mission-essential task list',
        src: '1-02'
    },
    {
        abbr: 'AMF(L)',
        def: 'ACE Mobile Force (Land) (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMH',
        def: 'automated message handler',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMHS',
        def: 'automated message handling system',
        src: '1-02'
    },
    {
        abbr: 'AMIO',
        def: 'alien migrant interdiction operations',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMLO',
        def: 'air mobility liaison officer',
        src: '1-02'
    },
    {
        abbr: 'AMMO',
        def: 'ammunition',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMOC',
        def: 'Air and Marine Operations Center (DHS)',
        src: '1-02'
    },
    {
        abbr: 'AMOCC',
        def: 'air mobility operations control center',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMOG',
        def: 'air mobility operations group',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMOPES',
        def: 'Army Mobilization and Operations Planning and Execution System',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMOPS',
        def: 'Army mobilization and operations planning system; Army mobilization operations system',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMOS',
        def: 'air mobility operations squadron',
        src: '1-02'
    },
    {
        abbr: 'AMOSS',
        def: 'Air and Marine Operations Surveillance System',
        src: 'JP 3-07.4'
    },
    {
        abbr: 'AMOW',
        def: 'air mobility operations wing',
        src: '1-02'
    },
    {
        abbr: 'AMP',
        def: 'amplifier; anaylsis of mobility platform',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMP-PAT',
        def: 'analysis of mobility platform suite of port analysis tools',
        src: '1-02'
    },
    {
        abbr: 'AMPE',
        def: 'automated message processing exchange',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMPN',
        def: 'amplification',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMPSSO',
        def: 'Automated Message Processing System Security Office (or Officer)',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMRAAM',
        def: 'advanced medium-range air-to-air missile',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMS',
        def: 'Aerial Measuring System (DOE); air mobility squadron; Army management structure; Asset Management System',
        src: '1-02'
    },
    {
        abbr: 'AMS-TAC',
        def: 'Automated Manifesting System-Tactical',
        src: '1-02'
    },
    {
        abbr: 'AMSS',
        def: 'air mobility support squadron',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMT',
        def: 'aerial mail terminal',
        src: '1-02'
    },
    {
        abbr: 'amu',
        def: 'atomic mass unit',
        src: '1-02'
    },
    {
        abbr: 'AMVER',
        def: 'automated mutual-assistance vessel rescue system',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMW',
        def: 'air mobility wing; amphibious warfare',
        src: 'JP 1-02'
    },
    {
        abbr: 'AMX',
        def: 'air mobility express',
        src: '1-02'
    },
    {
        abbr: 'AN',
        def: 'alphanumeric; analog nonsecure',
        src: 'JP 1-02'
    },
    {
        abbr: 'ANCA',
        def: 'Allied Naval Communications Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'ANDVT',
        def: 'advanced narrowband digital voice terminal',
        src: 'JP 1-02'
    },
    {
        abbr: 'ANG',
        def: 'Air National Guard',
        src: '1-02'
    },
    {
        abbr: 'ANGLICO',
        def: 'air-naval gunfire liaison company',
        src: '1-02'
    },
    {
        abbr: 'ANGUS',
        def: 'Air National Guard of the United States',
        src: '1-02'
    },
    {
        abbr: 'ANMCC',
        def: 'Alternate National Military Command Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'ANN',
        def: 'assign NNX routing',
        src: 'JP 1-02'
    },
    {
        abbr: 'ANR',
        def: 'Alaskan North American Aerospace Defense Command Region',
        src: '1-02'
    },
    {
        abbr: 'ANSI',
        def: 'American National Standards Institute',
        src: '1-02'
    },
    {
        abbr: 'ANX',
        def: 'assign NNXX routing',
        src: 'JP 1-02'
    },
    {
        abbr: 'ANY',
        def: 'assign NYX routing',
        src: 'JP 1-02'
    },
    {
        abbr: 'ANZUS',
        def: 'Australia-New Zealand-United States Treaty',
        src: 'JP 1-02'
    },
    {
        abbr: 'AO',
        def: 'action officer; administration officer; air officer; area of operations; aviation ordnance person',
        src: '1-02'
    },
    {
        abbr: 'AO&M',
        def: 'administration, operation, and maintenance',
        src: 'JP 1-02'
    },
    {
        abbr: 'AOA',
        def: 'amphibious objective area',
        src: '1-02'
    },
    {
        abbr: 'AOB',
        def: 'aviation operations branch',
        src: '1-02'
    },
    {
        abbr: 'AOC',
        def: 'air operations center; Army operations center',
        src: '1-02'
    },
    {
        abbr: 'AOC-E',
        def: 'Aviation Operations Center-East (USCS)',
        src: 'JP 1-02'
    },
    {
        abbr: 'AOC-W',
        def: 'Aviation Operations Center-West (USCS)',
        src: 'JP 1-02'
    },
    {
        abbr: 'AOCC',
        def: 'air operations control center',
        src: 'JP 1-02'
    },
    {
        abbr: 'AOCU',
        def: 'analog orderwire control unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'AOD',
        def: 'air operations directive; on-line diagnostic',
        src: '1-02'
    },
    {
        abbr: 'AODB',
        def: 'air operations database',
        src: '1-02'
    },
    {
        abbr: 'AOF',
        def: 'azimuth of fire'
    },
    {
        abbr: 'AOG',
        def: 'Army Operations Group',
        src: '1-02'
    },
    {
        abbr: 'AOI',
        def: 'area of interest',
        src: '1-02'
    },
    {
        abbr: 'AOP',
        def: 'air operations plan; area of probability',
        src: 'JP 1-02'
    },
    {
        abbr: 'AOR',
        def: 'area of responsibility',
        src: '1-02'
    },
    {
        abbr: 'AOSS',
        def: 'aviation ordnance safety supervisor',
        src: 'JP 1-02'
    },
    {
        abbr: 'AOTR',
        def: 'Aviation Operational Threat Response',
        src: '1-02'
    },
    {
        abbr: 'AP',
        def: 'allied publication; antipersonnel; average power',
        src: '1-02'
    },
    {
        abbr: 'APA',
        def: 'Army pre-positioned afloat',
        src: 'JP 3-31'
    },
    {
        abbr: 'APAN',
        def: 'All Partners Access Network; Asia-Pacific Area Network',
        src: '1-02'
    },
    {
        abbr: 'APC',
        def: 'aerial port commander; assign preprogrammed conference list',
        src: '1-02'
    },
    {
        abbr: 'APCC',
        def: 'alternate processing and correlation center',
        src: '1-02'
    },
    {
        abbr: 'APE',
        def: 'airfield pavement evaluation',
        src: '1-02'
    },
    {
        abbr: 'APES',
        def: 'Automated Patient Evacuation System',
        src: 'JP 4-02'
    },
    {
        abbr: 'APEX',
        def: 'Adaptive Planning and Execution',
        src: '1-02'
    },
    {
        abbr: 'APF',
        def: 'afloat pre-positioning force',
        src: '1-02'
    },
    {
        abbr: 'APG',
        def: 'aimpoint graphic',
        src: 'JP 1-02'
    },
    {
        abbr: 'APHIS',
        def: 'Animal and Plant Health Inspection Service (USDA)',
        src: '1-02'
    },
    {
        abbr: 'APIC',
        def: 'allied press information center',
        src: 'JP 1-02'
    },
    {
        abbr: 'APL',
        def: 'antipersonnel land mine',
        src: '1-02'
    },
    {
        abbr: 'APO',
        def: 'afloat pre-positioning operations; Air Force post office; Army post office',
        src: 'JP 1-02'
    },
    {
        abbr: 'APOD',
        def: 'aerial port of debarkation',
        src: '1-02'
    },
    {
        abbr: 'APOE',
        def: 'aerial port of embarkation',
        src: '1-02'
    },
    {
        abbr: 'APORT',
        def: 'aerial port',
        src: 'JP 1-02'
    },
    {
        abbr: 'APORTSREP',
        def: 'air operations bases report',
        src: 'JP 1-02'
    },
    {
        abbr: 'APP',
        def: 'allied procedural publication',
        src: '1-02'
    },
    {
        abbr: 'APPS',
        def: 'analytical photogrammetric positioning system',
        src: 'JP 1-02'
    },
    {
        abbr: 'APR',
        def: 'assign primary zone routing',
        src: 'JP 1-02'
    },
    {
        abbr: 'APS',
        def: 'aerial port squadron; Army pre-positioned stocks',
        src: '1-02'
    },
    {
        abbr: 'APS-3',
        def: 'afloat pre-positioning stocks; Army pre-positioned stocks-3',
        src: '1-02'
    },
    {
        abbr: 'APU',
        def: 'auxiliary power unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'AR',
        def: 'air refueling; Army regulation; Army reserve',
        src: '1-02'
    },
    {
        abbr: 'ARB',
        def: 'alternate recovery base; assign receive bypass lists',
        src: 'JP 1-02'
    },
    {
        abbr: 'ARBS',
        def: 'angle rate bombing system',
        src: 'JP 1-02'
    },
    {
        abbr: 'ARC',
        def: 'air Reserve Components; American Red Cross',
        src: 'JP 1-02'
    },
    {
        abbr: 'ARCENT',
        def: 'United States Army Central Command',
        src: '1-02'
    },
    {
        abbr: 'ARCT',
        def: 'air refueling control team',
        src: '1-02'
    },
    {
        abbr: 'ARDF',
        def: 'automatic radio direction finding',
        src: 'JP 1-02'
    },
    {
        abbr: 'AREC',
        def: 'air resource element coordinator',
        src: 'JP 1-02'
    },
    {
        abbr: 'ARFOR',
        def: 'Army forces',
        src: '1-02'
    },
    {
        abbr: 'ARG',
        def: 'Accident Response Group (DOE); amphibious ready group',
        src: '1-02'
    },
    {
        abbr: 'ARGO',
        def: 'automatic ranging grid overlay',
        src: 'JP 1-02'
    },
    {
        abbr: 'ARINC',
        def: 'Aeronautical Radio Incorporated',
        src: 'JP 1-02'
    },
    {
        abbr: 'ARL-M',
        def: 'airborne reconnaissance low-multifunction',
        src: 'JP 1-02'
    },
    {
        abbr: 'ARM',
        def: 'antiradiation missile',
        src: '1-02'
    },
    {
        abbr: 'ARNG',
        def: 'Army National Guard',
        src: '1-02'
    },
    {
        abbr: 'ARNGUS',
        def: 'Army National Guard of the United States',
        src: '1-02'
    },
    {
        abbr: 'ARP',
        def: 'air refueling point',
        src: 'JP 1-02'
    },
    {
        abbr: 'ARPERCEN',
        def: 'United States Army Reserve Personnel Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'ARQ',
        def: 'automatic request-repeat',
        src: 'JP 1-02'
    },
    {
        abbr: 'ARRC',
        def: 'Allied Command Europe Rapid Reaction Corps (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ARRDATE',
        def: 'arrival date',
        src: 'JP 1-02'
    },
    {
        abbr: 'ARS',
        def: 'acute radiation syndrome; air rescue service',
        src: 'JP 1-02'
    },
    {
        abbr: 'ARSOA',
        def: 'Army special operations aviation',
        src: 'JP 1-02'
    },
    {
        abbr: 'ARSOF',
        def: 'Army special operations forces',
        src: '1-02'
    },
    {
        abbr: 'ARSOTF',
        def: 'Army special operations task force',
        src: 'JP 1-02'
    },
    {
        abbr: 'ARSPACE',
        def: 'Army Space Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'ARSPOC',
        def: 'Army space operations center',
        src: 'JP 1-02'
    },
    {
        abbr: 'ART',
        def: 'air reserve technician',
        src: 'JP 1-02'
    },
    {
        abbr: 'ARTCC',
        def: 'air route traffic control center',
        src: 'JP 1-02'
    },
    {
        abbr: 'ARTS III',
        def: 'Automated Radar Tracking System',
        src: 'JP 1-02'
    },
    {
        abbr: 'ARTYMET',
        def: 'artillery meteorological',
        src: '1-02'
    },
    {
        abbr: 'AS',
        def: 'analog secure',
        src: '1-02'
    },
    {
        abbr: 'ASA',
        def: 'automatic spectrum analyzer',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASA(ALT)',
        def: 'Assistant Secretary of the Army for Acquisition, Logistics, and   Technology',
        src: 'JP 4-10'
    },
    {
        abbr: 'ASAP',
        def: 'as soon as possible',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASARS',
        def: 'Advanced Synthetic Aperture Radar System',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASAS',
        def: 'All Source Analysis System',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASAT',
        def: 'antisatellite weapon',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASB',
        def: 'naval advanced support base',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASBP',
        def: 'Armed Services Blood Program',
        src: '1-02'
    },
    {
        abbr: 'ASBPO',
        def: 'Armed Services Blood Program Office',
        src: '1-02'
    },
    {
        abbr: 'ASC',
        def: 'acting service chief; Aeronautical Systems Center; Air Systems Command; Army Sustainment Command; assign switch classmark; Automatic Digital Network switching center',
        src: '1-02'
    },
    {
        abbr: 'ASCC',
        def: 'Air Standardization Coordinating Committee; Army Service component command; Army Service component commander',
        src: '1-02'
    },
    {
        abbr: 'ASCIET',
        def: 'all Services combat identification evaluation team',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASCII',
        def: 'American Standard Code for Information Interchange',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASCOPE',
        def: 'areas, structures, capabilities, organizations, people, and events ',
        src: '1-02'
    },
    {
        abbr: 'ASCS',
        def: 'air support control section, air support coordination section',
        src: '1-02'
    },
    {
        abbr: 'ASD',
        def: 'Assistant Secretary of Defense',
        src: '1-02'
    },
    {
        abbr: 'ASD(A&L)',
        def: 'Assistant Secretary of Defense (Acquisition and Logistics)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASD(C)',
        def: 'Assistant Secretary of Defense (Comptroller)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASD(C3I)',
        def: 'Assistant Secretary of Defense (Command, Control, Communications, and Intelligence)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASD(FM&P)',
        def: 'Assistant Secretary of Defense (Force Management and Personnel)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASD(FMP)',
        def: 'Assistant Secretary of Defense (Force Management Policy)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASD(GSA)',
        def: 'Assistant Secretary of Defense for Global Strategic Affairs',
        src: '1-02'
    },
    {
        abbr: 'ASD(HA)',
        def: 'Assistant Secretary of Defense (Health Affairs)',
        src: '1-02'
    },
    {
        abbr: 'ASD(HD&ASA)',
        def: 'Assistant Secretary of Defense (Homeland Defense and Americas\' Security Affairs)',
        src: '1-02'
    },
    {
        abbr: 'ASD(HD)',
        def: 'Assistant Secretary of Defense (Homeland Defense)',
        src: 'JP 3-26'
    },
    {
        abbr: 'ASD(ISA)',
        def: 'Assistant Secretary of Defense (International Security Affairs)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASD(ISP)',
        def: 'Assistant Secretary of Defense (International Security Policy)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASD(L&MR)',
        def: 'Assistant Secretary of Defense for Logistics and Materiel Readiness',
        src: '1-02'
    },
    {
        abbr: 'ASD(LA)',
        def: 'Assistant Secretary of Defense (Legislative Affairs)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASD(NII)',
        def: 'Assistant Secretary of Defense (Networks and Information Integration)',
        src: '1-02'
    },
    {
        abbr: 'ASD(OEPP)',
        def: 'Assistant Secretary of Defense for Operational Energy Plans and Programs',
        src: '1-02'
    },
    {
        abbr: 'ASD(P&L)',
        def: 'Assistant Secretary of Defense (Production and Logistics)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASD(PA&E)',
        def: 'Assistant Secretary of Defense (Program Analysis and Evaluation)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASD(PA)',
        def: 'Assistant Secretary of Defense (Public Affairs)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASD(RA)',
        def: 'Assistant Secretary of Defense (Reserve Affairs)',
        src: '1-02'
    },
    {
        abbr: 'ASD(RSA)',
        def: 'Assistant Secretary of Defense (Regional Security Affairs)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASD(S&R)',
        def: 'Assistant Secretary of Defense (Strategy and Requirements)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASD(SO/LIC&IC)',
        def: 'Assistant Secretary of Defense for Special Operations and Low-Intensity Conflict and Interdependent Capabilities',
        src: '1-02'
    },
    {
        abbr: 'ASD(SO/LIC)',
        def: 'Assistant Secretary of Defense (Special Operations and Low-Intensity Conflict)',
        src: '1-02'
    },
    {
        abbr: 'ASDI',
        def: 'analog simple data interface',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASDIA',
        def: 'All-Source Document Index',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASE',
        def: 'aircraft survivability equipment; automated stabilization equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASF',
        def: 'aeromedical staging facility',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASG',
        def: 'Allied System for Geospatial Intelligence; area support group',
        src: '1-02'
    },
    {
        abbr: 'ASH',
        def: 'Assistant Administrator for Security and Hazardous Materials; Assistant Secretary for Health (DHHS)',
        src: '1-02'
    },
    {
        abbr: 'ASI',
        def: 'assign and display switch initialization',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASIC',
        def: 'Air and Space Interoperability Council',
        src: '1-02'
    },
    {
        abbr: 'ASIF',
        def: 'Airlift Support Industrial Fund',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASL',
        def: 'allowable supply list; archipelagic sea lane; assign switch locator (SL) routing; authorized stockage list (Army)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASLT',
        def: 'assault support landing table',
        src: '1-02'
    },
    {
        abbr: 'ASM',
        def: 'air-to-surface missile; armored scout mission; Army Spectrum Manager; automated scheduling message',
        src: '1-02'
    },
    {
        abbr: 'ASMD',
        def: 'antiship missile defense',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASMO',
        def: 'Army Spectrum Management Office',
        src: '1-02'
    },
    {
        abbr: 'ASN(RD&A)',
        def: 'Assistant Secretary of the Navy for Research, Development and   Acquisition',
        src: 'JP 4-10'
    },
    {
        abbr: 'ASO',
        def: 'advanced special operations; air support operations',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASOC',
        def: 'air support operations center',
        src: '1-02'
    },
    {
        abbr: 'ASOFDTG',
        def: 'as of date/time group',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASP',
        def: 'ammunition supply point',
        src: '1-02'
    },
    {
        abbr: 'ASPA',
        def: 'American Service-Members\' Protection Act',
        src: 'JP 3-07.1'
    },
    {
        abbr: 'ASPP',
        def: 'acquisition systems protection program',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASPPO',
        def: 'Armed Service Production Planning Office',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASPR',
        def: 'Office of Assistant Secretary for Preparedness and Response (DHHS)',
        src: '1-02'
    },
    {
        abbr: 'ASR',
        def: 'air support request; available supply rate',
        src: '1-02'
    },
    {
        abbr: 'ASSETREP',
        def: 'transportation assets report',
        src: 'JP 1-02'
    },
    {
        abbr: 'AST',
        def: 'assign secondary traffic channels',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASTS',
        def: 'aeromedical staging squadron',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASW',
        def: 'antisubmarine warfare; average surface wind',
        src: '1-02'
    },
    {
        abbr: 'ASWBPL',
        def: 'Armed Services Whole Blood Processing Laboratories',
        src: 'JP 1-02'
    },
    {
        abbr: 'ASWC',
        def: 'antisubmarine warfare commander',
        src: '1-02'
    },
    {
        abbr: 'At',
        def: 'total attainable search area',
        src: 'JP 1-02'
    },
    {
        abbr: 'AT',
        def: 'antitank; antiterrorism',
        src: '1-02'
    },
    {
        abbr: 'AT/FP',
        def: 'antiterrorism/force protection',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATA',
        def: 'Airlift Tanker Association; antiterrorism assistance',
        src: '1-02'
    },
    {
        abbr: 'ATAC',
        def: 'antiterrorism alert center (Navy)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATACC',
        def: 'advanced tactical air command center',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATACMS',
        def: 'Army Tactical Missile System',
        src: '1-02'
    },
    {
        abbr: 'ATACO',
        def: 'air tactical actions control officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATACS',
        def: 'Army Tactical Communications System',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATAF',
        def: 'Allied Tactical Air Force (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATBM',
        def: 'antitactical ballistical missile',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATC',
        def: 'Air Threat Conference; air traffic control; air transportable clinic (USAF)',
        src: '1-02'
    },
    {
        abbr: 'ATCA',
        def: 'Allied Tactical Communications Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATCAA',
        def: 'air traffic control assigned airspace',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATCC',
        def: 'Antiterrorism Coordinating Committee',
        src: '1-02'
    },
    {
        abbr: 'ATCC-SSG',
        def: 'Antiterrorism Coordinating Committee-Senior Steering Group',
        src: 'JP 3-07.2'
    },
    {
        abbr: 'ATCRBS',
        def: 'Air Traffic Control Radar Beacon System',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATCS',
        def: 'air traffic control section',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATDLS',
        def: 'Advanced Tactical Data Link System',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATDM',
        def: 'adaptive time division multiplexer',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATDS',
        def: 'airborne tactical data system',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATEP',
        def: 'Antiterrorism Enterprise Portal',
        src: '1-02'
    },
    {
        abbr: 'ATF',
        def: 'Advanced Targeting FLIR; amphibious task force; Bureau of Alcohol, Tobacco, Firearms, and Explosives (DOJ)',
        src: '1-02'
    },
    {
        abbr: 'ATG',
        def: 'amphibious task group; assign trunk group cluster',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATGM',
        def: 'antitank guided missile; antitank guided munition',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATH',
        def: 'air transportable hospital; assign thresholds',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATHS',
        def: 'Airborne Target Handover System',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATI',
        def: 'asset target interaction',
        src: '1-02'
    },
    {
        abbr: 'ATM',
        def: 'advanced trauma management; air target material; assign traffic metering',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATMCT',
        def: 'air terminal movement control team',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATMP',
        def: 'Air Target Materials Program',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATN',
        def: 'assign thresholds',
        src: '1-02'
    },
    {
        abbr: 'AtN',
        def: 'attack the network',
        src: '1-02'
    },
    {
        abbr: 'ATO',
        def: 'air tasking order; antiterrorism officer',
        src: '1-02'
    },
    {
        abbr: 'ATOC',
        def: 'air tactical operations center; air terminal operations center',
        src: '1-02'
    },
    {
        abbr: 'ATP',
        def: 'advance targeting pod; allied tactical publication; Army tactical publication',
        src: '1-02'
    },
    {
        abbr: 'ATR',
        def: 'attrition reserve',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATS',
        def: 'air traffic service; assign terminal service',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATSD(AE)',
        def: 'Assistant to the Secretary of Defense (Atomic Energy)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATSD(IO)',
        def: 'Assistant to the Secretary of Defense (Intelligence Oversight)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATSD(NCB)',
        def: 'Assistant to the Secretary of Defense for Nuclear and Chemical and Biological Defense Programs',
        src: '1-02'
    },
    {
        abbr: 'ATT',
        def: 'assign terminal type',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATTP',
        def: 'Army tactics, techniques, and procedures',
        src: '1-02'
    },
    {
        abbr: 'ATTU',
        def: 'air transportable treatment unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'ATWG',
        def: 'antiterrorism working group',
        src: 'JP 3-07.2'
    },
    {
        abbr: 'AU',
        def: 'African Union',
        src: '1-02'
    },
    {
        abbr: 'AUEL',
        def: 'automated unit equipment list',
        src: 'JP 1-02'
    },
    {
        abbr: 'AUF',
        def: 'airborne use of force',
        src: '1-02'
    },
    {
        abbr: 'AUG',
        def: 'application user group',
        src: 'JP 1-02'
    },
    {
        abbr: 'AUIC',
        def: 'active duty unit identification code',
        src: 'JP 1-02'
    },
    {
        abbr: 'AUSCANNZUKUS',
        def: 'Australian, Canadian, New Zealand, United Kingdom, United States',
        src: '1-02'
    },
    {
        abbr: 'AUTODIN',
        def: 'Automatic Digital Network',
        src: 'JP 1-02'
    },
    {
        abbr: 'AUX',
        def: 'auxiliary',
        src: 'JP 1-02'
    },
    {
        abbr: 'AV',
        def: 'air vehicle; asset visibility',
        src: '1-02'
    },
    {
        abbr: 'AV-8',
        def: 'Harrier',
        src: 'JP 1-02'
    },
    {
        abbr: 'AV/VI',
        def: 'audiovisual/visual information',
        src: 'JP 1-02'
    },
    {
        abbr: 'AVCAL',
        def: 'aviation consolidated allowance list',
        src: '1-02'
    },
    {
        abbr: 'AVDTG',
        def: 'analog via digital trunk group',
        src: 'JP 1-02'
    },
    {
        abbr: 'AVGAS',
        def: 'aviation gasoline',
        src: 'JP 1-02'
    },
    {
        abbr: 'AVIM',
        def: 'aviation intermediate maintenance',
        src: 'JP 1-02'
    },
    {
        abbr: 'AVL',
        def: 'anti-vehicle land mine; assign variable location',
        src: '1-02'
    },
    {
        abbr: 'AVOU',
        def: 'analog voice orderwire unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'AVOW',
        def: 'analog voice orderwire',
        src: 'JP 1-02'
    },
    {
        abbr: 'AVS',
        def: 'asset validation system; asset visibility system; audiovisual squadron',
        src: '1-02'
    },
    {
        abbr: 'AVUM',
        def: 'aviation unit maintenance',
        src: 'JP 1-02'
    },
    {
        abbr: 'AW',
        def: 'air warfare',
        src: '1-02'
    },
    {
        abbr: 'AWACS',
        def: 'Airborne Warning and Control System',
        src: '1-02'
    },
    {
        abbr: 'AWC',
        def: 'air warfare commander',
        src: 'JP 1-02'
    },
    {
        abbr: 'AWCAP',
        def: 'airborne weapons corrective action program',
        src: 'JP 1-02'
    },
    {
        abbr: 'AWDS',
        def: 'automated weather distribution system',
        src: 'JP 1-02'
    },
    {
        abbr: 'AWG',
        def: 'Asymmetric Warfare Group (Army)',
        src: '1-02'
    },
    {
        abbr: 'AWN',
        def: 'Automated Weather Network',
        src: 'JP 1-02'
    },
    {
        abbr: 'AWOL',
        def: 'absent without leave',
        src: 'JP 1-02'
    },
    {
        abbr: 'AWS',
        def: 'Air Weather Service',
        src: 'JP 1-02'
    },
    {
        abbr: 'AWSE',
        def: 'armament weapons support equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'AWSIM',
        def: 'air warfare simulation model',
        src: 'JP 1-02'
    },
    {
        abbr: 'AWSR',
        def: 'Air Weather Service regulation',
        src: 'JP 1-02'
    },
    {
        abbr: 'AXO',
        def: 'abandoned explosive ordnance',
        src: '1-02'
    },
    {
        abbr: 'AXX',
        def: 'assign XXX routing',
        src: 'JP 1-02'
    },
    {
        abbr: 'AZR',
        def: 'assign zone restriction lists',
        src: 'JP 1-02'
    },
    {
        abbr: 'B',
        def: 'cross-over barrier pattern',
        src: 'JP 1-02'
    },
    {
        abbr: 'B&A',
        def: 'boat and aircraft',
        src: 'JP 1-02'
    },
    {
        abbr: 'B-52',
        def: 'Stratofortress',
        src: 'JP 1-02'
    },
    {
        abbr: 'B/B',
        def: 'baseband',
        src: 'JP 1-02'
    },
    {
        abbr: 'BAE',
        def: 'brigade aviation element',
        src: '1-02'
    },
    {
        abbr: 'BAF',
        def: 'backup alert force',
        src: 'JP 1-02'
    },
    {
        abbr: 'BAG',
        def: 'baggage',
        src: 'JP 1-02'
    },
    {
        abbr: 'BAH',
        def: 'basic allowance for housing',
        src: 'JP 1-02'
    },
    {
        abbr: 'BAI',
        def: 'backup aircraft inventory; battlefield air interdiction',
        src: 'JP 1-02'
    },
    {
        abbr: 'BALO',
        def: 'battalion air liaison officer',
        src: '1-02'
    },
    {
        abbr: 'BALS',
        def: 'berthing and loading schedule',
        src: '1-02'
    },
    {
        abbr: 'BAS',
        def: 'basic allowance for subsistence; battalion aid station',
        src: 'JP 1-02'
    },
    {
        abbr: 'BATF',
        def: 'Bureau of Alcohol, Tobacco, and Firearms',
        src: 'JP 1-02'
    },
    {
        abbr: 'BB',
        def: 'breakbulk',
        src: 'JP 1-02'
    },
    {
        abbr: 'bbl',
        def: 'barrel (42 US gallons)',
        src: '1-02'
    },
    {
        abbr: 'BC',
        def: 'bottom current',
        src: 'JP 1-02'
    },
    {
        abbr: 'BCA',
        def: 'border crossing authority',
        src: '1-02'
    },
    {
        abbr: 'BCAT',
        def: 'beddown capability assessment tool',
        src: 'JP 1-02'
    },
    {
        abbr: 'BCC',
        def: 'battle control center',
        src: '1-02'
    },
    {
        abbr: 'BCD',
        def: 'battlefield coordination detachment',
        src: '1-02'
    },
    {
        abbr: 'BCG',
        def: 'beach control group',
        src: '1-02'
    },
    {
        abbr: 'BCI',
        def: 'bit count integrity',
        src: 'JP 1-02'
    },
    {
        abbr: 'BCL',
        def: 'battlefield coordination line',
        src: '1-02'
    },
    {
        abbr: 'BCN',
        def: 'beacon',
        src: 'JP 1-02'
    },
    {
        abbr: 'BCOC',
        def: 'base cluster operations center',
        src: 'JP 1-02'
    },
    {
        abbr: 'BCR',
        def: 'baseline change request',
        src: 'JP 1-02'
    },
    {
        abbr: 'BCT',
        def: 'brigade combat team',
        src: '1-02'
    },
    {
        abbr: 'BCTP',
        def: 'battle command training program',
        src: 'JP 1-02'
    },
    {
        abbr: 'BCU',
        def: 'beach clearance unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'BD',
        def: 'barge derrick',
        src: '1-02'
    },
    {
        abbr: 'BDA',
        def: 'battle damage assessment',
        src: '1-02'
    },
    {
        abbr: 'BDAREP',
        def: 'battle damage assessment report',
        src: '1-02'
    },
    {
        abbr: 'BDC',
        def: 'blood donor center',
        src: 'JP 1-02'
    },
    {
        abbr: 'BDE',
        def: 'brigade',
        src: '1-02'
    },
    {
        abbr: 'BDL',
        def: 'beach discharge lighter',
        src: 'JP 1-02'
    },
    {
        abbr: 'BDOC',
        def: 'base defense operations center',
        src: '1-02'
    },
    {
        abbr: 'BDR',
        def: 'battle damage repair',
        src: 'JP 1-02'
    },
    {
        abbr: 'BDRP',
        def: 'Biological Defense Research Program',
        src: 'JP 1-02'
    },
    {
        abbr: 'BDZ',
        def: 'base defense zone',
        src: '1-02'
    },
    {
        abbr: 'BE',
        def: 'basic encyclopedia',
        src: '1-02'
    },
    {
        abbr: 'BE number',
        def: 'basic encyclopedia number',
        src: 'JP 1-02'
    },
    {
        abbr: 'BEAR',
        def: 'base expeditionary airfield resources',
        src: '1-02'
    },
    {
        abbr: 'BEE',
        def: 'bioenvironmental engineering officer',
        src: 'JP 4-02'
    },
    {
        abbr: 'BEI',
        def: 'biometrics-enabled intelligence',
        src: '1-02'
    },
    {
        abbr: 'BEN',
        def: 'base encyclopedia number',
        src: 'JP 1-02'
    },
    {
        abbr: 'BER',
        def: 'bit error ratio',
        src: 'JP 1-02'
    },
    {
        abbr: 'BES',
        def: 'budget estimate submission',
        src: 'JP 1-02'
    },
    {
        abbr: 'BEST',
        def: 'border enforcement security task force',
        src: '1-02'
    },
    {
        abbr: 'BfV',
        def: 'Bundesamt für Verfassungsschutz (federal office for defending the Constitution)',
        src: 'JP 1-02'
    },
    {
        abbr: 'BGC',
        def: 'boat group commander',
        src: 'JP 1-02'
    },
    {
        abbr: 'BHR',
        def: 'Bureau of Humanitarian Response',
        src: 'JP 1-02'
    },
    {
        abbr: 'BI',
        def: 'battlefield injury; battle injury',
        src: '1-02'
    },
    {
        abbr: 'BIA',
        def: 'behavioral influences analysis; Bureau of Indian Affairs',
        src: '1-02'
    },
    {
        abbr: 'BIAR',
        def: 'biometric intelligence analysis report',
        src: '1-02'
    },
    {
        abbr: 'BIAS',
        def: 'Battlefield Illumination Assistance System',
        src: 'JP 1-02'
    },
    {
        abbr: 'BICES',
        def: 'battlefield information collection and exploitation system (NATO)',
        src: '1-02'
    },
    {
        abbr: 'BICON',
        def: 'double container',
        src: '1-02'
    },
    {
        abbr: 'BIDDS',
        def: 'Base Information Digital Distribution System',
        src: 'JP 1-02'
    },
    {
        abbr: 'BIDE',
        def: 'basic identity data element',
        src: 'JP 1-02'
    },
    {
        abbr: 'BIFC',
        def: 'Boise Interagency Fire Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'BIFS',
        def: 'Border Intelligence Fusion Section',
        src: '1-02'
    },
    {
        abbr: 'BIH',
        def: 'International Time Bureau (Bureau International d\'l\'Heure)',
        src: 'JP 1-02'
    },
    {
        abbr: 'BII',
        def: 'base information infrastructure',
        src: 'JP 1-02'
    },
    {
        abbr: 'BIMA',
        def: 'Biometrics Identity Management Agency',
        src: '1-02'
    },
    {
        abbr: 'BINM',
        def: 'Bureau of International Narcotics Matters',
        src: 'JP 1-02'
    },
    {
        abbr: 'BIO',
        def: 'biological; Bureau of International Organizations',
        src: 'JP 1-02'
    },
    {
        abbr: 'BIS',
        def: 'Bureau of Industry and Security',
        src: '1-02'
    },
    {
        abbr: 'BISS',
        def: 'base installation security system',
        src: 'JP 1-02'
    },
    {
        abbr: 'BIT',
        def: 'built-in test',
        src: 'JP 1-02'
    },
    {
        abbr: 'BITE',
        def: 'built-in test equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'BIU',
        def: 'beach interface unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'BKA',
        def: 'Bundeskriminalamt (federal criminal office)',
        src: 'JP 1-02'
    },
    {
        abbr: 'BL',
        def: 'biocontainment level',
        src: 'JP 1-02'
    },
    {
        abbr: 'BLCP',
        def: 'beach lighterage control point',
        src: '1-02'
    },
    {
        abbr: 'BLDREP',
        def: 'blood report',
        src: 'JP 1-02'
    },
    {
        abbr: 'BLDSHIPREP',
        def: 'blood shipment report',
        src: 'JP 1-02'
    },
    {
        abbr: 'BLM',
        def: 'Bureau of Land Management',
        src: 'JP 1-02'
    },
    {
        abbr: 'BLOS',
        def: 'beyond line-of-sight',
        src: '1-02'
    },
    {
        abbr: 'BLT',
        def: 'battalion landing team',
        src: 'JP 1-02'
    },
    {
        abbr: 'BM',
        def: 'ballistic missile; battle management; beach module',
        src: '1-02'
    },
    {
        abbr: 'BMC4I',
        def: 'Battle Management Command, Control, Communications, Computers, and Intelligence',
        src: 'JP 1-02'
    },
    {
        abbr: 'BMCT',
        def: 'begin morning civil twilight',
        src: 'JP 1-02'
    },
    {
        abbr: 'BMD',
        def: 'ballistic missile defense',
        src: '1-02'
    },
    {
        abbr: 'BMDO',
        def: 'Ballistic Missile Defense Organization',
        src: 'JP 1-02'
    },
    {
        abbr: 'BMDS',
        def: 'ballistic missile defense system',
        src: '1-02'
    },
    {
        abbr: 'BMET',
        def: 'biomedical electronics technician',
        src: '1-02'
    },
    {
        abbr: 'BMNT',
        def: 'begin morning nautical twilight',
        src: 'JP 1-02'
    },
    {
        abbr: 'BMU',
        def: 'beachmaster unit',
        src: '1-02'
    },
    {
        abbr: 'BN',
        def: 'battalion',
        src: 'JP 1-02'
    },
    {
        abbr: 'BND',
        def: 'Bundesnachrichtendienst (federal intelligence service)',
        src: 'JP 1-02'
    },
    {
        abbr: 'BOA',
        def: 'basic ordering agreement',
        src: '1-02'
    },
    {
        abbr: 'BOC',
        def: 'base operations center; bomb on coordinate',
        src: '1-02'
    },
    {
        abbr: 'BOCCA',
        def: 'Bureau of Coordination of Civil Aircraft (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'BOG',
        def: 'beach operations group',
        src: 'JP 1-02'
    },
    {
        abbr: 'BOH',
        def: 'bottom of hill',
        src: 'JP 1-02'
    },
    {
        abbr: 'BORFIC',
        def: 'Border Patrol Field Intelligence Center',
        src: 'JP 3-07.4'
    },
    {
        abbr: 'BOS',
        def: 'base operating support; battlefield operating system',
        src: '1-02'
    },
    {
        abbr: 'BOS-I',
        def: 'base operating support-integrator',
        src: '1-02'
    },
    {
        abbr: 'BOSG',
        def: 'base operations support group',
        src: 'JP 1-02'
    },
    {
        abbr: 'BOSS',
        def: 'base operating support service',
        src: '1-02'
    },
    {
        abbr: 'BOT',
        def: 'bomb on target',
        src: '1-02'
    },
    {
        abbr: 'BP',
        def: 'battle position; block parity',
        src: 'JP 1-02'
    },
    {
        abbr: 'BPA',
        def: 'blanket purchase agreement'
    },
    {
        abbr: 'BPC',
        def: 'building partnership capacity',
        src: '1-02'
    },
    {
        abbr: 'BPD',
        def: 'blood products depot',
        src: 'JP 1-02'
    },
    {
        abbr: 'BPG',
        def: 'beach party group',
        src: '1-02'
    },
    {
        abbr: 'BPI',
        def: 'bits per inch',
        src: 'JP 1-02'
    },
    {
        abbr: 'BPLAN',
        def: 'base plan',
        src: '1-02'
    },
    {
        abbr: 'BPO',
        def: 'blood program office',
        src: 'JP 1-02'
    },
    {
        abbr: 'BPPBS',
        def: 'bi-annual planning, programming, and budget system',
        src: 'JP 1-02'
    },
    {
        abbr: 'bps',
        def: 'bits per second',
        src: '1-02'
    },
    {
        abbr: 'BPSK',
        def: 'biphase shift keying',
        src: 'JP 1-02'
    },
    {
        abbr: 'BPT',
        def: 'beach party team',
        src: '1-02'
    },
    {
        abbr: 'BPWRR',
        def: 'bulk petroleum war reserve requirement',
        src: 'JP 1-02'
    },
    {
        abbr: 'BPWRS',
        def: 'bulk petroleum war reserve stocks',
        src: 'JP 1-02'
    },
    {
        abbr: 'BR',
        def: 'budget review',
        src: 'JP 1-02'
    },
    {
        abbr: 'BRAC',
        def: 'base realignment and closure',
        src: 'JP 1-02'
    },
    {
        abbr: 'BRACE',
        def: 'Base Resource and Capabillity Estimator',
        src: '1-02'
    },
    {
        abbr: 'BRC',
        def: 'base recovery course',
        src: 'JP 1-02'
    },
    {
        abbr: 'BS',
        def: 'battle staff; broadcast source',
        src: 'JP 1-02'
    },
    {
        abbr: 'BSA',
        def: 'beach support area; brigade support area',
        src: 'JP 1-02'
    },
    {
        abbr: 'BSB',
        def: 'brigade support battalion',
        src: '1-02'
    },
    {
        abbr: 'BSC',
        def: 'black station clock',
        src: 'JP 1-02'
    },
    {
        abbr: 'BSC ro',
        def: 'black station clock receive out',
        src: 'JP 1-02'
    },
    {
        abbr: 'BSCT',
        def: 'behavioral science consultation team',
        src: 'JP 4-02'
    },
    {
        abbr: 'BSD',
        def: 'blood supply detachment',
        src: 'JP 4-02'
    },
    {
        abbr: 'BSI',
        def: 'base support installation',
        src: '1-02'
    },
    {
        abbr: 'BSP',
        def: 'base support plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'BSRP',
        def: 'bureau strategic resource plan',
        src: '1-02'
    },
    {
        abbr: 'BSSG',
        def: 'brigade service support group',
        src: 'JP 1-02'
    },
    {
        abbr: 'BSU',
        def: 'blood supply unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'BSZ',
        def: 'base security zone',
        src: '1-02'
    },
    {
        abbr: 'BT',
        def: 'bathythermograph',
        src: '1-02'
    },
    {
        abbr: 'BTB',
        def: 'believed-to-be',
        src: 'JP 1-02'
    },
    {
        abbr: 'BTC',
        def: 'blood transshipment center',
        src: '1-02'
    },
    {
        abbr: 'BTG',
        def: 'basic target graphic',
        src: 'JP 1-02'
    },
    {
        abbr: 'BTOC',
        def: 'battalion tactical operations center',
        src: 'JP 1-02'
    },
    {
        abbr: 'BTS',
        def: 'Border and Transportation Security (DHS)',
        src: 'JP 3-26'
    },
    {
        abbr: 'BTU',
        def: 'beach termination unit',
        src: '1-02'
    },
    {
        abbr: 'BULK',
        def: 'bulk cargo',
        src: 'JP 1-02'
    },
    {
        abbr: 'BUMEDINST',
        def: 'Bureau of Medicine and Surgery instruction',
        src: 'JP 4-06'
    },
    {
        abbr: 'BVR',
        def: 'beyond visual range',
        src: '1-02'
    },
    {
        abbr: 'BW',
        def: 'biological warfare',
        src: '1-02'
    },
    {
        abbr: 'BWC',
        def: 'Biological Weapons Convention',
        src: 'JP 1-02'
    },
    {
        abbr: 'BZ',
        def: 'buffer zone',
        src: 'JP 1-02'
    },
    {
        abbr: 'C',
        def: 'Celsius; centigrade; clock; compromise band; coverage factor; creeping line pattern',
        src: '1-02'
    },
    {
        abbr: 'C di',
        def: 'conditioned diphase',
        src: 'JP 1-02'
    },
    {
        abbr: 'C&A',
        def: 'certification and accreditation',
        src: 'JP 1-02'
    },
    {
        abbr: 'C&E',
        def: 'communications and electronics',
        src: 'JP 1-02'
    },
    {
        abbr: 'C&LAT',
        def: 'cargo and loading analysis table',
        src: 'JP 1-02'
    },
    {
        abbr: 'C-130',
        def: 'Hercules\t',
        src: 'JP 1-02'
    },
    {
        abbr: 'C-141',
        def: 'Starlifter',
        src: 'JP 1-02'
    },
    {
        abbr: 'C-17',
        def: 'Globemaster III',
        src: 'JP 1-02'
    },
    {
        abbr: 'C-21',
        def: 'Learjet',
        src: 'JP 1-02'
    },
    {
        abbr: 'C-27',
        def: 'Spartan',
        src: 'JP 1-02'
    },
    {
        abbr: 'C-2X',
        def: 'coalition Intelligence Directorate counterintelligence and human intelligence staff element',
        src: 'JP 1-02'
    },
    {
        abbr: 'C-5',
        def: 'Galaxy',
        src: 'JP 1-02'
    },
    {
        abbr: 'C-B',
        def: 'chemical-biological',
        src: 'JP 1-02'
    },
    {
        abbr: 'C-CS',
        def: 'communication and computer systems',
        src: 'JP 1-02'
    },
    {
        abbr: 'C-E',
        def: 'communications-electronics',
        src: '1-02'
    },
    {
        abbr: 'C-IED',
        def: 'counter-improvised explosive device',
        src: '1-02'
    },
    {
        abbr: 'C-JWICS',
        def: 'Containerized Joint Worldwide Intelligence Communications System',
        src: 'JP 2-01'
    },
    {
        abbr: 'C-level',
        def: 'category level',
        src: 'JP 1-02'
    },
    {
        abbr: 'C-NAF',
        def: 'component numbered air force',
        src: '1-02'
    },
    {
        abbr: 'C-SMPP',
        def: 'Consolidated Satellite Communications Management Policies and Procedures',
        src: '1-02'
    },
    {
        abbr: 'C-SSE',
        def: 'consolidated satellite communications system expert',
        src: '1-02'
    },
    {
        abbr: 'C/A',
        def: 'course acquisition',
        src: 'JP 1-02'
    },
    {
        abbr: 'C/C',
        def: 'cabin cruiser; cast off and clear',
        src: 'JP 1-02'
    },
    {
        abbr: 'C2',
        def: 'command and control',
        src: '1-02'
    },
    {
        abbr: 'C2-attack',
        def: 'an offensive form of command and control warfare',
        src: 'JP 1-02'
    },
    {
        abbr: 'C2-protect',
        def: 'a defensive form of command and control warfare',
        src: 'JP 1-02'
    },
    {
        abbr: 'C2CRE',
        def: 'command and control chemical, biological, radiological, and nuclear response element',
        src: '1-02'
    },
    {
        abbr: 'C2E',
        def: 'command and control element',
        src: 'JP 1-02'
    },
    {
        abbr: 'C2IP',
        def: 'Command and Control Initiatives Program',
        src: 'JP 1-02'
    },
    {
        abbr: 'C2IPS',
        def: 'Command and Control Information Processing System',
        src: 'JP 1-02'
    },
    {
        abbr: 'C2P',
        def: 'command and control protection',
        src: 'JP 1-02'
    },
    {
        abbr: 'C2S',
        def: 'command and control support',
        src: 'JP 1-02'
    },
    {
        abbr: 'C3',
        def: 'command, control, and communications',
        src: 'JP 1-02'
    },
    {
        abbr: 'C3AG',
        def: 'Command, Control, and Communications Advisory Group',
        src: 'JP 1-02'
    },
    {
        abbr: 'C3CM',
        def: 'command, control, and communications countermeasures',
        src: 'JP 1-02'
    },
    {
        abbr: 'C3I',
        def: 'command, control, communications, and intelligence',
        src: 'JP 1-02'
    },
    {
        abbr: 'C3IC',
        def: 'coalition coordination, communications, and integration center',
        src: 'JP 1-02'
    },
    {
        abbr: 'C3SMP',
        def: 'Command, Control, and Communications Systems Master Plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'C4 systems',
        def: 'command, control, communications, and computer systems',
        src: 'JP 1-02'
    },
    {
        abbr: 'C4CM',
        def: 'command, control, communications, and computer countermeasures',
        src: 'JP 1-02'
    },
    {
        abbr: 'C4I',
        def: 'command, control, communications, computers, and intelligence',
        src: 'JP 1-02'
    },
    {
        abbr: 'C4IFTW',
        def: 'command, control, communications, computers, and intelligence for the Warrior',
        src: 'JP 1-02'
    },
    {
        abbr: 'C4S',
        def: 'command, control, communications, and computer systems',
        src: 'JP 1-02'
    },
    {
        abbr: 'CA',
        def: 'chaplain assistant; civil administration; civil affairs; combat assessment; coordinating altitude; credibility assessment; criticality assessment',
        src: '1-02'
    },
    {
        abbr: 'CAA',
        def: 'civil air augmentation; combat aviation advisors; command arrangement agreement',
        src: '1-02'
    },
    {
        abbr: 'CAAF',
        def: 'contractors authorized to accompany the force',
        src: '1-02'
    },
    {
        abbr: 'CAB',
        def: 'combat aviation brigade',
        src: 'JP 1-02'
    },
    {
        abbr: 'CAC',
        def: 'common access card; current actions center',
        src: 'JP 1-02'
    },
    {
        abbr: 'CACOM',
        def: 'civil affairs command',
        src: '1-02'
    },
    {
        abbr: 'CACTIS',
        def: 'community automated intelligence system',
        src: 'JP 1-02'
    },
    {
        abbr: 'CAD',
        def: 'Canadian air division; cartridge actuated device; collective address designator; contract administration delegation ',
        src: '1-02'
    },
    {
        abbr: 'CADRS',
        def: 'concern and deficiency reporting system',
        src: 'JP 1-02'
    },
    {
        abbr: 'CADS',
        def: 'containerized ammunition distribution system',
        src: '1-02'
    },
    {
        abbr: 'CAF',
        def: 'Canadian Air Force; combat air forces; commander, airborne/air assault force; commander, amphibious force',
        src: '1-02'
    },
    {
        abbr: 'CAFMS',
        def: 'computer-assisted force management system',
        src: 'JP 1-02'
    },
    {
        abbr: 'CAG',
        def: 'carrier air group; civil affairs group; collective address group',
        src: '1-02'
    },
    {
        abbr: 'CAGO',
        def: 'contractor-acquired, government-owned',
        src: '1-02'
    },
    {
        abbr: 'CAIMS',
        def: 'conventional ammunition integrated management system',
        src: 'JP 1-02'
    },
    {
        abbr: 'CAINS',
        def: 'carrier aircraft inertial navigation system',
        src: 'JP 1-02'
    },
    {
        abbr: 'CAIS',
        def: 'civil authority information support',
        src: '1-02'
    },
    {
        abbr: 'CAISE',
        def: 'civil authority information support element',
        src: '1-02'
    },
    {
        abbr: 'CAL',
        def: 'caliber; critical asset list',
        src: '1-02'
    },
    {
        abbr: 'CALA',
        def: 'Community Airborne Library Architecture',
        src: 'JP 2-03'
    },
    {
        abbr: 'CALCM',
        def: 'conventional air-launched cruise missile',
        src: 'JP 1-02'
    },
    {
        abbr: 'CALICS',
        def: 'communication, authentication, location, intentions, condition, and situation',
        src: '1-02'
    },
    {
        abbr: 'CALMS',
        def: 'computer-aided load manifesting system',
        src: 'JP 1-02'
    },
    {
        abbr: 'CAM',
        def: 'chemical agent monitor; crisis action module',
        src: 'JP 1-02'
    },
    {
        abbr: 'CAMOC',
        def: 'Caribbean Air and Marine Operations Center',
        src: '1-02'
    },
    {
        abbr: 'CAMPS',
        def: 'Consolidated Air Mobility Planning System',
        src: '1-02'
    },
    {
        abbr: 'CAMT',
        def: 'countering air and missile threats',
        src: 'JP 1-02'
    },
    {
        abbr: 'CANA',
        def: 'convulsant antidote for nerve agent',
        src: 'JP 1-02'
    },
    {
        abbr: 'CANADA COM',
        def: 'Canada Command',
        src: '1-02'
    },
    {
        abbr: 'CANR',
        def: 'Canadian North American Aerospace Defense Command Region',
        src: '1-02'
    },
    {
        abbr: 'CANUS',
        def: 'Canada-United States',
        src: 'JP 1-02'
    },
    {
        abbr: 'CANUS BDD',
        def: 'Canada-United States Basic Defense Document',
        src: '1-02'
    },
    {
        abbr: 'CANUS CDP',
        def: 'Canada-United States Combined Defense Plan',
        src: '1-02'
    },
    {
        abbr: 'CAO',
        def: 'chief administrative officer; civil affairs operations; counterair operation',
        src: '1-02'
    },
    {
        abbr: 'CAO SOP',
        def: 'standing operating procedures for coordination of atomic operations',
        src: 'JP 1-02'
    },
    {
        abbr: 'CAOC',
        def: 'combat air operations center; combined air operations center',
        src: 'JP 1-02'
    },
    {
        abbr: 'CAP',
        def: 'Civil Air Patrol; civil augmentation program; combat air patrol; configuration and alarm panel; Consolidated Appeals Process (UN); crisis action planning',
        src: '1-02'
    },
    {
        abbr: 'CAPT',
        def: 'civil affairs planning team',
        src: '1-02'
    },
    {
        abbr: 'CAR',
        def: 'Chief of the Army Reserve',
        src: 'JP 1-02'
    },
    {
        abbr: 'CARA',
        def: 'chemical, biological, radiological, nuclear, and high-yield explosives analytical and remediation activity',
        src: '1-02'
    },
    {
        abbr: 'CARDA',
        def: 'continental United States airborne reconnaissance for damage assessment; continental United States area reconnaissance for damage assessment',
        src: 'JP 1-02'
    },
    {
        abbr: 'CARE',
        def: 'Cooperative for Assistance and Relief Everywhere (CAREUSA)',
        src: 'JP 1-02'
    },
    {
        abbr: 'CARIBROC',
        def: 'Caribbean Regional Operations Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'CARP',
        def: 'computed air release point; contingency alternate route plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'CARS',
        def: 'combat arms regimental system',
        src: 'JP 1-02'
    },
    {
        abbr: 'CARVER',
        def: 'criticality, accessibility, recuperability, vulnerability, effect, and recognizability',
        src: '1-02'
    },
    {
        abbr: 'CAS',
        def: 'casualty; civil aviation security; close air support',
        src: '1-02'
    },
    {
        abbr: 'CASEVAC',
        def: 'casualty evacuation',
        src: '1-02'
    },
    {
        abbr: 'CASF',
        def: 'contingency aeromedical staging facility',
        src: '1-02'
    },
    {
        abbr: 'CASP',
        def: 'computer-aided search planning',
        src: 'JP 1-02'
    },
    {
        abbr: 'CASPER',
        def: 'contact area summary position report',
        src: 'JP 1-02'
    },
    {
        abbr: 'CASREP',
        def: 'casualty report',
        src: 'JP 1-02'
    },
    {
        abbr: 'CASREQ',
        def: 'close air support request',
        src: 'JP 1-02'
    },
    {
        abbr: 'CAT',
        def: 'category; civil affairs team; crisis action team',
        src: '1-02'
    },
    {
        abbr: 'CATCC',
        def: 'carrier air traffic control center',
        src: 'JP 1-02'
    },
    {
        abbr: 'CATF',
        def: 'commander, amphibious task force',
        src: '1-02'
    },
    {
        abbr: 'CAU',
        def: 'crypto ancillary unit; cryptographic auxiliary unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'CAVU',
        def: 'ceiling and visibility unlimited',
        src: 'JP 1-02'
    },
    {
        abbr: 'CAW',
        def: 'carrier air wing',
        src: 'JP 1-02'
    },
    {
        abbr: 'CAW/ESS',
        def: 'crisis action weather and environmental support system',
        src: 'JP 1-02'
    },
    {
        abbr: 'CAX',
        def: 'computer-assisted exercise',
        src: 'JP 1-02'
    },
    {
        abbr: 'CB',
        def: 'chemical-biological; construction battalion (SEABEES)',
        src: 'JP 1-02'
    },
    {
        abbr: 'CBBLS',
        def: 'hundreds of barrels',
        src: 'JP 1-02'
    },
    {
        abbr: 'CBCP',
        def: 'Customs and Border Clearance Program (DOD)',
        src: '1-02'
    },
    {
        abbr: 'CBD',
        def: 'chemical, biological defense',
        src: 'JP 1-02'
    },
    {
        abbr: 'CBFS',
        def: 'cesium beam frequency standard',
        src: 'JP 1-02'
    },
    {
        abbr: 'CBG',
        def: 'coalition building guide',
        src: '1-02'
    },
    {
        abbr: 'CBIRF',
        def: 'Chemical-Biological Incident Response Force',
        src: '1-02'
    },
    {
        abbr: 'CBLTU',
        def: 'common battery line terminal unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'CBMR',
        def: 'capabilities-based munitions requirements',
        src: 'JP 1-02'
    },
    {
        abbr: 'CBMU',
        def: 'construction battalion maintenance unit',
        src: '1-02'
    },
    {
        abbr: 'CBP',
        def: 'capabilities-based planning; Customs and Border Protection (DHS)',
        src: '1-02'
    },
    {
        abbr: 'CBPO',
        def: 'Consolidated Base Personnel Office',
        src: 'JP 1-02'
    },
    {
        abbr: 'CBPS',
        def: 'chemical biological protective shelter',
        src: 'JP 1-02'
    },
    {
        abbr: 'CBR',
        def: 'chemical, biological, and radiological',
        src: 'JP 1-02'
    },
    {
        abbr: 'CBRN',
        def: 'Caribbean Basin Radar Network; chemical, biological, radiological, and nuclear',
        src: '1-02'
    },
    {
        abbr: 'CBRN CM',
        def: 'chemical, biological, radiological, and nuclear consequence management',
        src: '1-02'
    },
    {
        abbr: 'CBRNE',
        def: 'chemical, biological, radiological, nuclear, and high-yield explosives',
        src: '1-02'
    },
    {
        abbr: 'CBRT',
        def: 'chemical-biological response team',
        src: 'JP 1-02'
    },
    {
        abbr: 'CBS',
        def: 'common battery signaling',
        src: 'JP 1-02'
    },
    {
        abbr: 'CBSA',
        def: 'Canadian Border Services Agency',
        src: '1-02'
    },
    {
        abbr: 'CbT',
        def: 'combating terrorism',
        src: '1-02'
    },
    {
        abbr: 'CBT',
        def: 'common battery terminal',
        src: 'JP 1-02'
    },
    {
        abbr: 'CbT-RIF',
        def: 'Combating Terrorism Readiness Initiatives Fund',
        src: '3-07.2'
    },
    {
        abbr: 'CBTZ',
        def: 'combat zone',
        src: 'JP 1-02'
    },
    {
        abbr: 'CBU',
        def: 'conference bridge unit; construction battalion unit',
        src: '1-02'
    },
    {
        abbr: 'CBW',
        def: 'chemical and biological warfare',
        src: 'JP 1-02'
    },
    {
        abbr: 'CC',
        def: 'component command (NATO); component commander; critical capability',
        src: '1-02'
    },
    {
        abbr: 'CC&D',
        def: 'camouflage, concealment, and deception',
        src: 'JP 1-02'
    },
    {
        abbr: 'CCA',
        def: 'carrier-controlled approach; central contracting authority; circuit card assembly; combat cargo assistant; container control activity; contamination control area; contingency capabilities assessment; contract construction agent',
        src: '1-02'
    },
    {
        abbr: 'CCAP',
        def: 'combatant command AFRTS planner',
        src: 'JP 3-61'
    },
    {
        abbr: 'CCAS',
        def: 'contingency contract administration services',
        src: '1-02'
    },
    {
        abbr: 'CCAS-C',
        def: 'contingency contract administration services commander',
        src: 'JP 1-02'
    },
    {
        abbr: 'CCATT',
        def: 'critical care air transport team',
        src: 'JP 4-02'
    },
    {
        abbr: 'CCB',
        def: 'Community Counterterrorism Board; configuration control board',
        src: '1-02'
    },
    {
        abbr: 'CCC',
        def: 'coalition coordination cell; coalition coordination center; crisis coordination center; critical control circuit; cross-cultural communications course',
        src: '1-02'
    },
    {
        abbr: 'CCD',
        def: 'camouflage, concealment, and deception',
        src: '1-02'
    },
    {
        abbr: 'CCDB',
        def: 'consolidated counterdrug database',
        src: '1-02'
    },
    {
        abbr: 'CCDR',
        def: 'combatant commander',
        src: '1-02'
    },
    {
        abbr: 'CCE',
        def: 'container control element; continuing criminal enterprise',
        src: 'JP 1-02'
    },
    {
        abbr: 'CCEB',
        def: 'Combined Communications-Electronics Board',
        src: '1-02'
    },
    {
        abbr: 'CCF',
        def: 'collection coordination facility',
        src: 'JP 1-02'
    },
    {
        abbr: 'CCG',
        def: 'combat communications group; crisis coordination group',
        src: '1-02'
    },
    {
        abbr: 'CCGD',
        def: 'commander, Coast Guard district',
        src: 'JP 1-02'
    },
    {
        abbr: 'CCIB',
        def: 'command center integration branch',
        src: 'JP 1-02'
    },
    {
        abbr: 'CCICA',
        def: 'command counterintelligence coordinating authority',
        src: '1-02'
    },
    {
        abbr: 'CCIF',
        def: 'Combatant Commander Initiative Fund',
        src: '1-02'
    },
    {
        abbr: 'CCIP',
        def: 'continuously computed impact point'
    },
    {
        abbr: 'CCIR',
        def: 'commander\'s critical information requirement; International Radio Consultative Committee',
        src: '1-02'
    },
    {
        abbr: 'CCIS',
        def: 'common channel interswitch signaling',
        src: 'JP 1-02'
    },
    {
        abbr: 'CCITT',
        def: 'International Telegraph and Telephone Consultative Committee',
        src: 'JP 1-02'
    },
    {
        abbr: 'CCIU',
        def: 'CEF control interface unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'CCJTF',
        def: 'commander, combined joint task force',
        src: 'JP 1-02'
    },
    {
        abbr: 'CCL',
        def: 'communications/computer link',
        src: 'JP 1-02'
    },
    {
        abbr: 'CCLI',
        def: 'commerce control list item; computer control list item',
        src: '1-02'
    },
    {
        abbr: 'CCMD',
        def: 'combatant command',
        src: '1-02'
    },
    {
        abbr: 'CCO',
        def: 'central control officer; combat cargo officer; command and control office; container control officer; contingency contracting officer',
        src: '1-02'
    },
    {
        abbr: 'CCOI',
        def: 'critical contact of interest',
        src: 'JP 3-32'
    },
    {
        abbr: 'CCP',
        def: 'casualty collection point; consolidated cryptologic program; consolidation and containerization point',
        src: '1-02'
    },
    {
        abbr: 'CCPDS',
        def: 'command center processing and display system',
        src: 'JP 1-02'
    },
    {
        abbr: 'CCR',
        def: 'closed circuit refueling',
        src: '1-02'
    },
    {
        abbr: 'CCRD',
        def: 'combatant commander\'s required delivery date',
        src: 'JP 1-02'
    },
    {
        abbr: 'CCS',
        def: 'central control ship; commander’s communication synchronization; container control site',
        src: '1-02'
    },
    {
        abbr: 'CCSA',
        def: 'combatant command support agent',
        src: '1-02'
    },
    {
        abbr: 'CCSD',
        def: 'command communications service designator; control communications service designator',
        src: 'JP 1-02'
    },
    {
        abbr: 'CCT',
        def: 'collaborative contingency targeting; combat control team',
        src: 'JP 1-02'
    },
    {
        abbr: 'CCTI',
        def: 'Chairman of the Joint Chiefs of Staff commended training issue',
        src: 'JP 1-02'
    },
    {
        abbr: 'CCTV',
        def: 'closed circuit television',
        src: 'JP 1-02'
    },
    {
        abbr: 'CCW',
        def: '1980 United Nations Convention on Conventional Weapons; continuous carrier wave',
        src: 'JP 1-02'
    },
    {
        abbr: 'CD',
        def: 'channel designator; compact disc; counterdrug; customer direct',
        src: '1-02'
    },
    {
        abbr: 'CD-ROM',
        def: 'compact disc read-only memory',
        src: '1-02'
    },
    {
        abbr: 'CDC',
        def: 'Centers for Disease Control and Prevention',
        src: '1-02'
    },
    {
        abbr: 'CDD',
        def: 'chemical decontamination detachment',
        src: '1-02'
    },
    {
        abbr: 'CDE',
        def: 'collateral damage estimation',
        src: '1-02'
    },
    {
        abbr: 'CDEMA',
        def: 'Caribbean Disaster Emergency Management Agency',
        src: '1-02'
    },
    {
        abbr: 'CDERA',
        def: 'Caribbean Disaster Emergency Response Agency',
        src: '1-02'
    },
    {
        abbr: 'CDF',
        def: 'combined distribution frame',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDHAM',
        def: 'Center for Disaster and Humanitarian Assistance Medicine',
        src: '1-02'
    },
    {
        abbr: 'CDI',
        def: 'cargo disposition instructions; conditioned diphase',
        src: '1-02'
    },
    {
        abbr: 'CDIP',
        def: 'combined defense improvement project',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDIPO',
        def: 'counterdrug intelligence preparation for operations',
        src: '1-02'
    },
    {
        abbr: 'CDLMS',
        def: 'common data link management system',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDM',
        def: 'cable driver modem',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDMGB',
        def: 'cable driver modem group buffer',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDN',
        def: 'compressed dial number',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDO',
        def: 'command duty officer; commander, detainee operations',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDOC',
        def: 'counterdrug operations center',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDOPS',
        def: 'counterdrug operations',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDP',
        def: 'commander\'s dissemination policy; landing craft air cushion departure point',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDR',
        def: 'commander; continuous data recording',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDRAFNORTH',
        def: 'Commander, Air Force North',
        src: '1-02'
    },
    {
        abbr: 'CDRAFSOF',
        def: 'commander, Air Force special operations forces',
        src: 'JP 3-05.1'
    },
    {
        abbr: 'CDRCFCOM',
        def: 'Commander, Combined Forces Command',
        src: '1-02'
    },
    {
        abbr: 'CDRESC',
        def: 'commander, electronic security command',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDREUDAC',
        def: 'Commander, European Command Defense Analysis Center (ELINT) or European Data Analysis Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDRFORSCOM',
        def: 'Commander, Forces Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDRG',
        def: 'catastrophic disaster response group (FEMA)',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDRJSOTF',
        def: 'commander, joint special operations task force',
        src: '1-02'
    },
    {
        abbr: 'CDRL',
        def: 'contract data requirements list',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDRMTMC',
        def: 'Commander, Military Traffic Management Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDRNORAD',
        def: 'Commander, North American Aerospace Defense Command',
        src: '1-02'
    },
    {
        abbr: 'CDRTSOC',
        def: 'commander, theater special operations command',
        src: '1-02'
    },
    {
        abbr: 'CDRUNC',
        def: 'Commander, United Nations Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDRUSAFRICOM',
        def: 'Commander, United States Africa Command',
        src: '1-02'
    },
    {
        abbr: 'CDRUSAINSCOM',
        def: 'Commander, United States Army Intelligence and Security Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDRUSARNORTH',
        def: 'Commander, United States Army, North',
        src: '1-02'
    },
    {
        abbr: 'CDRUSCENTCOM',
        def: 'Commander, United States Central Command',
        src: '1-02'
    },
    {
        abbr: 'CDRUSCYBERCOM',
        def: 'Commander, United States Cyber Command',
        src: '1-02'
    },
    {
        abbr: 'CDRUSELEMNORAD',
        def: 'Commander, United States Element, North American Aerospace Defense Command',
        src: '1-02'
    },
    {
        abbr: 'CDRUSEUCOM',
        def: 'Commander, United States European Command',
        src: '1-02'
    },
    {
        abbr: 'CDRUSJFCOM',
        def: 'Commander, United States Joint Forces Command',
        src: '1-02'
    },
    {
        abbr: 'CDRUSNAVEUR',
        def: 'Commander, United States Naval Forces, Europe',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDRUSNORTHCOM',
        def: 'Commander, United States Northern Command',
        src: '1-02'
    },
    {
        abbr: 'CDRUSPACOM',
        def: 'Commander, United States Pacific Command',
        src: '1-02'
    },
    {
        abbr: 'CDRUSSOCOM',
        def: 'Commander, United States Special Operations Command',
        src: '1-02'
    },
    {
        abbr: 'CDRUSSOUTHCOM',
        def: 'Commander, United States Southern Command',
        src: '1-02'
    },
    {
        abbr: 'CDRUSSTRATCOM',
        def: 'Commander, United States Strategic Command',
        src: '1-02'
    },
    {
        abbr: 'CDRUSTRANSCOM',
        def: 'Commander, United States Transportation Command',
        src: '1-02'
    },
    {
        abbr: 'CDS',
        def: 'Canadian Chief of Defence Staff; Chief of Defence Staff (Canada); container delivery system',
        src: '1-02'
    },
    {
        abbr: 'CDSO',
        def: 'counterdrug support office',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDSSC',
        def: 'continuity of operations plan designated successor service chief',
        src: 'JP 1-02'
    },
    {
        abbr: 'CDU',
        def: 'counterdrug update',
        src: 'JP 1-02'
    },
    {
        abbr: 'CE',
        def: 'casualty estimation; circular error; command element (USMC); communications-electronics; core element; counterespionage; critical element',
        src: '1-02'
    },
    {
        abbr: 'CEA',
        def: 'captured enemy ammunition',
        src: 'JP 3-15'
    },
    {
        abbr: 'CEB',
        def: 'combat engineer battalion',
        src: '1-02'
    },
    {
        abbr: 'CEC',
        def: 'civil engineer corps',
        src: 'JP 1-02'
    },
    {
        abbr: 'CECOM',
        def: 'communications-electronics command',
        src: 'JP 1-02'
    },
    {
        abbr: 'CEDI',
        def: 'commercial electronic data interface',
        src: 'JP 1-02'
    },
    {
        abbr: 'CEDREP',
        def: 'communications-electronics deployment report',
        src: 'JP 1-02'
    },
    {
        abbr: 'CEE',
        def: 'captured enemy equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'CEF',
        def: 'civil engineering file; common equipment facility',
        src: 'JP 1-02'
    },
    {
        abbr: 'CEG',
        def: 'common equipment group',
        src: 'JP 1-02'
    },
    {
        abbr: 'CEHC',
        def: 'Counter Explosive Hazards Center (Army)',
        src: '1-02'
    },
    {
        abbr: 'CEI',
        def: 'critical employment indicator',
        src: 'JP 1-02'
    },
    {
        abbr: 'CELLEX',
        def: 'cellular exploitation',
        src: '1-02'
    },
    {
        abbr: 'CEM',
        def: 'combined effects munition',
        src: 'JP 1-02'
    },
    {
        abbr: 'CEMC',
        def: 'communications-electronics management center',
        src: 'JP 1-02'
    },
    {
        abbr: 'CEMIRT',
        def: 'civil engineer maintenance, inspection, and repair team',
        src: '1-02'
    },
    {
        abbr: 'CENTRIXS',
        def: 'Combined Enterprise Regional Information Exchange System',
        src: '1-02'
    },
    {
        abbr: 'CEOI',
        def: 'communications-electronics operating instructions',
        src: 'JP 1-02'
    },
    {
        abbr: 'CEP',
        def: 'cable entrance panel; Chairman’s Exercise Program',
        src: '1-02'
    },
    {
        abbr: 'CEPOD',
        def: 'communications-electronics post-deployment report',
        src: 'JP 1-02'
    },
    {
        abbr: 'CERF',
        def: 'Central Emergency Revolving Fund (UN)',
        src: 'JP 1-02'
    },
    {
        abbr: 'CERFP',
        def: 'chemical, biological, radiological, nuclear, and high-yield explosives enhanced response force package',
        src: '1-02'
    },
    {
        abbr: 'CERP',
        def: 'Commanders\' Emergency Response Program',
        src: '1-02'
    },
    {
        abbr: 'CERT',
        def: 'computer emergency response team; contingency engineering response team',
        src: '1-02'
    },
    {
        abbr: 'CERTSUB',
        def: 'certain submarine',
        src: 'JP 1-02'
    },
    {
        abbr: 'CES',
        def: 'coast earth station',
        src: 'JP 1-02'
    },
    {
        abbr: 'CESE',
        def: 'civil engineering support equipment; communications equipment support element',
        src: 'JP 1-02'
    },
    {
        abbr: 'CESG',
        def: 'communications equipment support group',
        src: 'JP 1-02'
    },
    {
        abbr: 'CESO',
        def: 'civil engineer support office',
        src: 'JP 1-02'
    },
    {
        abbr: 'CESPG',
        def: 'civil engineering support plan group; civil engineering support planning generator',
        src: 'JP 1-02'
    },
    {
        abbr: 'CEW',
        def: 'civilian expeditionary workforce',
        src: '1-02'
    },
    {
        abbr: 'CEXC',
        def: 'combined explosives exploitation cell',
        src: '1-02'
    },
    {
        abbr: 'CF',
        def: 'Canadian forces; carrier furnished; causeway ferry; conventional forces; drift error confidence factor',
        src: '1-02'
    },
    {
        abbr: 'CF-COP',
        def: 'counterfire common operational picture',
        src: 'JP 3-09'
    },
    {
        abbr: 'CFA',
        def: 'Committee on Food Aid Policies and Programmes (UN); critical factors analysis',
        src: '1-02'
    },
    {
        abbr: 'CFACC',
        def: 'combined force air component commander',
        src: 'JP 1-02'
    },
    {
        abbr: 'CFB',
        def: 'Canadian forces base',
        src: '1-02'
    },
    {
        abbr: 'CFC',
        def: 'Combined Forces Command, Korea',
        src: 'JP 1-02'
    },
    {
        abbr: 'CFL',
        def: 'Contingency Planning Facilities List; coordinated fire line',
        src: 'JP 1-02'
    },
    {
        abbr: 'CFLCC',
        def: 'coalition forces land component commander',
        src: '1-02'
    },
    {
        abbr: 'CFM',
        def: 'cubic feet per minute',
        src: 'JP 1-02'
    },
    {
        abbr: 'CFO',
        def: 'chief financial officer',
        src: 'JP 3-28'
    },
    {
        abbr: 'CFPM',
        def: 'causeway ferry power module',
        src: '1-02'
    },
    {
        abbr: 'CFR',
        def: 'Code of Federal Regulations',
        src: '1-02'
    },
    {
        abbr: 'CFS',
        def: 'CI force protection source',
        src: 'JP 1-02'
    },
    {
        abbr: 'CFSO',
        def: 'counterintelligence force protection source operations',
        src: 'JP 1-02'
    },
    {
        abbr: 'CFST',
        def: 'coalition forces support team',
        src: '1-02'
    },
    {
        abbr: 'CG',
        def: 'Chairman\'s guidance; Coast Guard; commanding general; Comptroller General',
        src: 'JP 1-02'
    },
    {
        abbr: 'CG-652',
        def: 'Coast Guard Spectrum Management and Telecommunications Policy Division',
        src: '1-02'
    },
    {
        abbr: 'CGAS',
        def: 'Coast Guard Air Station',
        src: 'JP 1-02'
    },
    {
        abbr: 'CGAUX',
        def: 'Coast Guard Auxiliary',
        src: 'JP 1-02'
    },
    {
        abbr: 'CGC',
        def: 'Coast Guard Cutter',
        src: 'JP 1-02'
    },
    {
        abbr: 'CGCAP',
        def: 'Coast Guard capabilities plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'CGCG',
        def: 'Coast Guard Cryptologic Group ',
        src: '1-02'
    },
    {
        abbr: 'CGCIS',
        def: 'Coast Guard Counterintelligence Service',
        src: '1-02'
    },
    {
        abbr: 'CGDEFOR',
        def: 'Coast Guard defense force',
        src: '1-02'
    },
    {
        abbr: 'CGFMFLANT',
        def: 'Commanding General, Fleet Marine Forces, Atlantic',
        src: 'JP 1-02'
    },
    {
        abbr: 'CGFMFPAC',
        def: 'Commanding General, Fleet Marine Forces, Pacific',
        src: 'JP 1-02'
    },
    {
        abbr: 'CGIS',
        def: 'United States Coast Guard Investigative Service',
        src: '1-02'
    },
    {
        abbr: 'CGLSMP',
        def: 'Coast Guard logistic support and mobilization plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'CGP',
        def: 'Coast Guard publication',
        src: '1-02'
    },
    {
        abbr: 'CGRS',
        def: 'common geographic reference system',
        src: 'JP 3-09'
    },
    {
        abbr: 'CGS',
        def: 'common ground station; continental United States ground station',
        src: 'JP 1-02'
    },
    {
        abbr: 'CGUSAREUR',
        def: 'Commanding General, United States Army, Europe',
        src: 'JP 1-02'
    },
    {
        abbr: 'CH',
        def: 'channel; contingency hospital',
        src: 'JP 1-02'
    },
    {
        abbr: 'CH-53',
        def: 'Sea Stallion',
        src: 'JP 1-02'
    },
    {
        abbr: 'CHAMPUS',
        def: 'Civilian Health and Medical Program for the Uniformed  Services',
        src: 'JP 1-02'
    },
    {
        abbr: 'CHARC',
        def: 'counterintelligence and human intelligence analysis and requirements cell',
        src: 'JP 2-01.2'
    },
    {
        abbr: 'CHB',
        def: 'cargo-handling battalion',
        src: '1-02'
    },
    {
        abbr: 'CHCS',
        def: 'composite health care system',
        src: 'JP 4-02'
    },
    {
        abbr: 'CHCSS',
        def: 'Chief, Central Security Service',
        src: '1-02'
    },
    {
        abbr: 'CHE',
        def: 'cargo-handing equipment; container-handling equipment',
        src: '1-02'
    },
    {
        abbr: 'CHET',
        def: 'customs high endurance tracker',
        src: 'JP 1-02'
    },
    {
        abbr: 'CHOP',
        def: 'change of operational control',
        src: 'JP 1-02'
    },
    {
        abbr: 'CHPPM',
        def: 'US Army Center for Health Promotion and Preventive Medicine',
        src: 'JP 1-02'
    },
    {
        abbr: 'CHRIS',
        def: 'chemical hazard response information system',
        src: 'JP 1-02'
    },
    {
        abbr: 'CHRP',
        def: 'contaminated human remains pouch',
        src: '1-02'
    },
    {
        abbr: 'CHSTR',
        def: 'characteristics of transportation resources',
        src: 'JP 1-02'
    },
    {
        abbr: 'CHSTREP',
        def: 'characteristics of transportation resources report',
        src: 'JP 1-02'
    },
    {
        abbr: 'CI',
        def: 'civilian internee; counterintelligence',
        src: '1-02'
    },
    {
        abbr: 'CI/KR',
        def: 'critical infrastructure and key resources',
        src: '1-02'
    },
    {
        abbr: 'CIA',
        def: 'Central Intelligence Agency',
        src: '1-02'
    },
    {
        abbr: 'CIAP',
        def: 'Central Intelligence Agency program; central intelligence architecture plan; command intelligence architecture plan; command intelligence architecture program',
        src: '1-02'
    },
    {
        abbr: 'CIAS',
        def: 'counterintelligence analysis section',
        src: 'JP 1-02'
    },
    {
        abbr: 'CIAT',
        def: 'counterintelligence analytic team',
        src: 'JP 1-02'
    },
    {
        abbr: 'CIB',
        def: 'combined information bureau; controlled image base',
        src: '1-02'
    },
    {
        abbr: 'CIC',
        def: 'combat information center; combat intelligence center (Marine Corps); combined intelligence center; communications interface controller; content indicator code; counterintelligence center',
        src: 'JP 1-02'
    },
    {
        abbr: 'CICA',
        def: 'counterintelligence coordinating authority',
        src: '1-02'
    },
    {
        abbr: 'CICAD',
        def: 'Inter-American Drug Abuse Control Commission',
        src: 'JP 3-07.4'
    },
    {
        abbr: 'CICC',
        def: 'counterintelligence coordination cell',
        src: '1-02'
    },
    {
        abbr: 'CICR',
        def: 'counterintelligence collection requirement',
        src: '1-02'
    },
    {
        abbr: 'CID',
        def: 'combat identification; combat intelligence division; criminal investigation division',
        src: '1-02'
    },
    {
        abbr: 'CIDB',
        def: 'common intelligence database',
        src: 'JP 1-02'
    },
    {
        abbr: 'CIDC',
        def: 'Criminal Investigation Division Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'CIDNE',
        def: 'Combined Information Data Network Exchange',
        src: '1-02'
    },
    {
        abbr: 'CIE',
        def: 'collaborative information environment',
        src: '1-02'
    },
    {
        abbr: 'CIEA',
        def: 'classification, identification, and engagement area',
        src: '1-02'
    },
    {
        abbr: 'CIEG/CIEL',
        def: 'common information exchange glossary and language',
        src: 'JP 1-02'
    },
    {
        abbr: 'CIFA',
        def: 'counterintelligence field activity',
        src: 'JP 2-01.2'
    },
    {
        abbr: 'CIG',
        def: 'communications interface group',
        src: 'JP 1-02'
    },
    {
        abbr: 'CIHO',
        def: 'counterintelligence/human intelligence officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'CIIR',
        def: 'counterintelligence information report',
        src: 'JP 1-02'
    },
    {
        abbr: 'CIL',
        def: 'command information library; critical information list; critical item list',
        src: '1-02'
    },
    {
        abbr: 'CILO',
        def: 'counterintelligence liaison officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'CIM',
        def: 'civil information management; compartmented information management',
        src: '1-02'
    },
    {
        abbr: 'CIMIC',
        def: 'civil-military coorperation',
        src: '1-02'
    },
    {
        abbr: 'CIN',
        def: 'cargo increment number',
        src: 'JP 1-02'
    },
    {
        abbr: 'CIO',
        def: 'chief information officer; command intelligence officer',
        src: '1-02'
    },
    {
        abbr: 'CIOC',
        def: 'counterintelligence operations cell',
        src: '1-02'
    },
    {
        abbr: 'CIOTA',
        def: 'counterintelligence operational tasking authority',
        src: 'JP 1-02'
    },
    {
        abbr: 'CIP',
        def: 'communications interface processor; critical infrastructure protection',
        src: '1-02'
    },
    {
        abbr: 'CIPSU',
        def: 'communications interface processor pseudo line',
        src: 'JP 1-02'
    },
    {
        abbr: 'CIR',
        def: 'continuing intelligence requirement',
        src: 'JP 1-02'
    },
    {
        abbr: 'CIRM',
        def: 'International Radio-Medical Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'CIRV',
        def: 'common interswitch rekeying variable',
        src: 'JP 1-02'
    },
    {
        abbr: 'CIRVIS',
        def: 'communications instructions for reporting vital intelligence sightings',
        src: 'JP 1-02'
    },
    {
        abbr: 'CIS',
        def: 'common item support; Commonwealth of Independent States; communications interface shelter',
        src: 'JP 1-02'
    },
    {
        abbr: 'CISAR',
        def: 'catastrophic incident search and rescue',
        src: '1-02'
    },
    {
        abbr: 'CISD',
        def: 'critical incident stress debriefing',
        src: 'JP 3-07.2'
    },
    {
        abbr: 'CISO',
        def: 'counterintelligence staff office; counterintelligence support officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'CITE',
        def: 'computer intrusion technical exploitation',
        src: '1-02'
    },
    {
        abbr: 'CITP',
        def: 'counter-improvised explosive device targeting program',
        src: '1-02'
    },
    {
        abbr: 'CIV',
        def: 'civilian',
        src: 'JP 1-02'
    },
    {
        abbr: 'CIVMAR',
        def: 'civil service mariner',
        src: '1-02'
    },
    {
        abbr: 'CIVPOL',
        def: 'civilian police',
        src: '1-02'
    },
    {
        abbr: 'CIWG',
        def: 'communications interoperability working group',
        src: 'JP 1-02'
    },
    {
        abbr: 'CJ-4',
        def: 'combined-joint logistics officer',
        src: '1-02'
    },
    {
        abbr: 'CJATF',
        def: 'commander, joint amphibious task force',
        src: 'JP 1-02'
    },
    {
        abbr: 'CJB',
        def: 'Congressional Justification Book',
        src: 'JP 1-02'
    },
    {
        abbr: 'CJCS',
        def: 'Chairman of the Joint Chiefs of Staff',
        src: '1-02'
    },
    {
        abbr: 'CJCSAN',
        def: 'Chairman of the Joint Chiefs of Staff Alerting Network',
        src: 'JP 1-02'
    },
    {
        abbr: 'CJCSI',
        def: 'Chairman of the Joint Chiefs of Staff instruction',
        src: '1-02'
    },
    {
        abbr: 'CJCSM',
        def: 'Chairman of the Joint Chiefs of Staff manual',
        src: '1-02'
    },
    {
        abbr: 'CJDA',
        def: 'critical joint duty assignment',
        src: 'JP 1-02'
    },
    {
        abbr: 'CJE',
        def: 'component joint data networks operations officer equivalent',
        src: '1-02'
    },
    {
        abbr: 'CJLOTS',
        def: 'combined joint logistics over-the-shore',
        src: '1-02'
    },
    {
        abbr: 'CJMAB',
        def: 'Central Joint Mortuary Affairs Board',
        src: 'JP 4-06'
    },
    {
        abbr: 'CJMAO',
        def: 'Central Joint Mortuary Affairs Office; Chief, joint mortuary affairs office',
        src: 'JP 1-02'
    },
    {
        abbr: 'CJMISTF',
        def: 'combined joint military information support task force',
        src: '1-02'
    },
    {
        abbr: 'CJMTF',
        def: 'combined joint military information support operations task force',
        src: '1-02'
    },
    {
        abbr: 'CJOC',
        def: 'Canada Joint Operations Command',
        src: '1-02'
    },
    {
        abbr: 'CJSART',
        def: 'Criminal Justice Sector Assessment Rating Tool',
        src: '1-02'
    },
    {
        abbr: 'CJSMPT',
        def: 'Coalition Joint Spectrum Management Planning Tool',
        src: '1-02'
    },
    {
        abbr: 'CJTF',
        def: 'combined joint task force (NATO); commander, joint task force',
        src: '1-02'
    },
    {
        abbr: 'CJTF-CS',
        def: 'Commander, Joint Task Force - Civil Support',
        src: 'JP 3-41'
    },
    {
        abbr: 'CJTF-NCR',
        def: 'Commander, Joint Task Force - National Capital Region',
        src: 'JP 3-41'
    },
    {
        abbr: 'CKT',
        def: 'circuit',
        src: 'JP 1-02'
    },
    {
        abbr: 'CL',
        def: 'class',
        src: 'JP 4-02'
    },
    {
        abbr: 'CLA',
        def: 'landing craft, air cushion launch area',
        src: '1-02'
    },
    {
        abbr: 'CLASSRON',
        def: 'class squadron',
        src: '1-02'
    },
    {
        abbr: 'CLB',
        def: 'combat logistics battalion',
        src: '1-02'
    },
    {
        abbr: 'CLD',
        def: 'compact laser designator',
        src: 'JP 1-02'
    },
    {
        abbr: 'CLDP',
        def: 'Commercial Law Development Program',
        src: '1-02'
    },
    {
        abbr: 'CLEA',
        def: 'civilian law enforcement agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'CLF',
        def: 'combat logistics force; commander, landing force',
        src: '1-02'
    },
    {
        abbr: 'CLG',
        def: 'combat logistics group',
        src: 'JP 3-34'
    },
    {
        abbr: 'CLGP',
        def: 'cannon-launched guided projectile',
        src: 'JP 1-02'
    },
    {
        abbr: 'CLIA',
        def: 'Clinical Laboratory Improvement Amendments',
        src: '1-02'
    },
    {
        abbr: 'CLIPS',
        def: 'communications link interface planning system',
        src: 'JP 1-02'
    },
    {
        abbr: 'CLPSB',
        def: 'combatant commander logistic procurement support board',
        src: '1-02'
    },
    {
        abbr: 'CLPT',
        def: 'contingency load planning team',
        src: '1-02'
    },
    {
        abbr: 'CLR',
        def: 'combat logistics regiment',
        src: '1-02'
    },
    {
        abbr: 'CLS',
        def: 'contractor logistic support',
        src: '1-02'
    },
    {
        abbr: 'CLSS',
        def: 'combat logistic support squadron',
        src: 'JP 1-02'
    },
    {
        abbr: 'CLT',
        def: 'civil liaison team; combat lasing team'
    },
    {
        abbr: 'CLZ',
        def: 'craft landing zone; cushion landing zone; landing craft, air cushion landing zone',
        src: '1-02'
    },
    {
        abbr: 'Cm',
        def: 'mean coverage factor',
        src: 'JP 1-02'
    },
    {
        abbr: 'cm',
        def: 'centimeter',
        src: 'JP 4-06'
    },
    {
        abbr: 'CM',
        def: 'Chairman\'s memorandum; collection manager; combination module; configuration management; control modem; countermine; cruise missile',
        src: '1-02'
    },
    {
        abbr: 'CM R&A',
        def: 'consequence management response and assessment',
        src: 'JP 3-41'
    },
    {
        abbr: 'CM&D',
        def: 'collection management & dissemination',
        src: '1-02'
    },
    {
        abbr: 'CMA',
        def: 'collection management authority',
        src: '1-02'
    },
    {
        abbr: 'CMAA',
        def: 'cooperative military airlift agreement',
        src: '1-02'
    },
    {
        abbr: 'CMAH',
        def: 'commander of a combatant command\'s Mobile Alternate Headquarters',
        src: 'JP 1-02'
    },
    {
        abbr: 'CMAOC',
        def: 'Casualty and Mortuary Affairs Operations Center',
        src: '1-02'
    },
    {
        abbr: 'CMAT',
        def: 'consequence management advisory team',
        src: '1-02'
    },
    {
        abbr: 'Cmc',
        def: 'midpoint compromise coverage factor',
        src: 'JP 1-02'
    },
    {
        abbr: 'CMC',
        def: 'Commandant of the Marine Corps; crew management cell; Office of Civilian-Military Cooperation (USAID)',
        src: '1-02'
    },
    {
        abbr: 'CMCB',
        def: 'civil-military coordination board ',
        src: '1-02'
    },
    {
        abbr: 'CMCC',
        def: 'combined movement coordination center',
        src: '1-02'
    },
    {
        abbr: 'CMD',
        def: 'command; cruise missile defense',
        src: 'JP 1-02'
    },
    {
        abbr: 'CMDO',
        def: 'command military deception officer',
        src: '1-02'
    },
    {
        abbr: 'CME',
        def: 'civil-military engagement',
        src: '1-02'
    },
    {
        abbr: 'CMHT',
        def: 'consequence management home team',
        src: 'JP 1-02'
    },
    {
        abbr: 'CMM',
        def: 'Office of Conflict Management and Mitigation (USAID)',
        src: '1-02'
    },
    {
        abbr: 'CMMA',
        def: 'collection management mission application',
        src: '1-02'
    },
    {
        abbr: 'CMO',
        def: 'Central Measurement and Signature Intelligence (MASINT) Organization; chief medical officer; chief military observer; civil-military operations; collection management office(r); configuration management office',
        src: '1-02'
    },
    {
        abbr: 'CMOC',
        def: 'cargo movement operations center; Cheyenne Mountain Operations Center; civil-military operations center',
        src: '1-02'
    },
    {
        abbr: 'CMOS',
        def: 'cargo movement operations system; Cargo Movement Operations System (USAF); complimentary metal-oxide semiconductor',
        src: '1-02'
    },
    {
        abbr: 'CMP',
        def: 'communications message processor; contractor management plan',
        src: '1-02'
    },
    {
        abbr: 'CMPF',
        def: 'commander, maritime pre-positioned force',
        src: '1-02'
    },
    {
        abbr: 'CMPT',
        def: 'consequence management planning team',
        src: 'JP 1-02'
    },
    {
        abbr: 'CMRT',
        def: 'consequence management response team',
        src: 'JP 1-02'
    },
    {
        abbr: 'CMS',
        def: 'cockpit management system; command management system; community management staff; community security materiel system; contingency mutual support; crisis management system',
        src: 'JP 1-02'
    },
    {
        abbr: 'CMSE',
        def: 'civil-military support element',
        src: '1-02'
    },
    {
        abbr: 'CMST',
        def: 'consequence management support team',
        src: '1-02'
    },
    {
        abbr: 'CMTS',
        def: 'comments',
        src: 'JP 1-02'
    },
    {
        abbr: 'CMTU',
        def: 'cartridge magnetic tape unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'CMV',
        def: 'commercial motor vehicle',
        src: 'JP 3-07.4'
    },
    {
        abbr: 'CMX',
        def: 'crisis management exercise',
        src: 'JP 1-02'
    },
    {
        abbr: 'CNAC',
        def: 'Customs National Aviation Center (USCS)',
        src: 'JP 1-02'
    },
    {
        abbr: 'CNASP',
        def: 'chairman\'s net assessment for strategic planning',
        src: 'JP 1-02'
    },
    {
        abbr: 'CNBG',
        def: 'commander, naval beach group',
        src: '1-02'
    },
    {
        abbr: 'CNC',
        def: 'Crime and Narcotics Center (CIA)',
        src: '1-02'
    },
    {
        abbr: 'CNCE',
        def: 'communications nodal control element',
        src: 'JP 1-02'
    },
    {
        abbr: 'CNCI',
        def: 'Comprehensive National Cybersecurity Initiative',
        src: '1-02'
    },
    {
        abbr: 'CND',
        def: 'counternarcotics division',
        src: '1-02'
    },
    {
        abbr: 'CNE',
        def: 'computer network exploitation; Counter Narcotics Enforcement',
        src: '1-02'
    },
    {
        abbr: 'CNGB',
        def: 'Chief, National Guard Bureau',
        src: '1-02'
    },
    {
        abbr: 'CNIC',
        def: 'Commander, Navy Installations Command',
        src: '1-02'
    },
    {
        abbr: 'CNM',
        def: 'classified notice to mariners',
        src: '1-02'
    },
    {
        abbr: 'CNMOC',
        def: 'Commander, Naval Meteorology and Oceanography Command',
        src: '1-02'
    },
    {
        abbr: 'CNO',
        def: 'Chief of Naval Operations',
        src: '1-02'
    },
    {
        abbr: 'CNOG',
        def: 'Chairman, Nuclear Operations Group',
        src: 'JP 1-02'
    },
    {
        abbr: 'CNRF',
        def: 'Commander, Naval Reserve Forces',
        src: 'JP 1-02'
    },
    {
        abbr: 'CNSG',
        def: 'Commander, Naval Security Group',
        src: 'JP 2-01'
    },
    {
        abbr: 'CNTY',
        def: 'country',
        src: 'JP 1-02'
    },
    {
        abbr: 'CNWDI',
        def: 'critical nuclear weapons design information',
        src: 'JP 1-02'
    },
    {
        abbr: 'CO',
        def: 'commanding officer; cyberspace operations',
        src: '1-02'
    },
    {
        abbr: 'COA',
        def: 'course of action',
        src: '1-02'
    },
    {
        abbr: 'COAA',
        def: 'course-of-action analysis',
        src: 'JP 4-02'
    },
    {
        abbr: 'COAMPS',
        def: 'Coupled Ocean Atmosphere Mesoscale Prediction System',
        src: 'JP 1-02'
    },
    {
        abbr: 'COB',
        def: 'collocated operating base; contingency operating base',
        src: 'JP 1-02'
    },
    {
        abbr: 'COBOL',
        def: 'common business-oriented language',
        src: 'JP 1-02'
    },
    {
        abbr: 'COC',
        def: 'combat operations center',
        src: 'JP 1-02'
    },
    {
        abbr: 'CoC',
        def: 'Code of Conduct',
        src: 'JP 3-50'
    },
    {
        abbr: 'COCO',
        def: 'contractor-owned, contractor-operated',
        src: '1-02'
    },
    {
        abbr: 'COCOM',
        def: 'combatant command (command authority)',
        src: '1-02'
    },
    {
        abbr: 'COD',
        def: 'carrier onboard delivery; combat operations division',
        src: '1-02'
    },
    {
        abbr: 'COE',
        def: 'Army Corps of Engineers; common operating environment; concept of employment',
        src: 'JP 1-02'
    },
    {
        abbr: 'COEDMHA',
        def: 'Center for Excellence in Disaster Management and Humanitarian Assistance (USPACOM)',
        src: '1-02'
    },
    {
        abbr: 'COF',
        def: 'chief of fires; conduct of fire',
        src: '1-02'
    },
    {
        abbr: 'COFC',
        def: 'container on flatcar',
        src: 'JP 1-02'
    },
    {
        abbr: 'COG',
        def: 'center of gravity; continuity of government',
        src: '1-02'
    },
    {
        abbr: 'COGARD',
        def: 'Coast Guard',
        src: 'JP 1-02'
    },
    {
        abbr: 'COI',
        def: 'community of interest; contact of interest',
        src: '1-02'
    },
    {
        abbr: 'COIC',
        def: 'counter-improvised explosive device operations integration center; Counter-Improvised Explosive Device Operations/Intelligence Integration Center (JIEDDO)',
        src: '1-02'
    },
    {
        abbr: 'COIN',
        def: 'counterinsurgency',
        src: '1-02'
    },
    {
        abbr: 'COLDS',
        def: 'cargo offload and discharge system',
        src: 'JP 1-02'
    },
    {
        abbr: 'COLISEUM',
        def: 'community on-line intelligence system for end-users and managers',
        src: 'JP 1-02'
    },
    {
        abbr: 'COLPRO',
        def: 'collective protection',
        src: '1-02'
    },
    {
        abbr: 'COLS',
        def: 'concept of logistic support',
        src: '1-02'
    },
    {
        abbr: 'COLT',
        def: 'combat observation and lasing team',
        src: 'JP 1-02'
    },
    {
        abbr: 'COM',
        def: 'chief of mission; collection operations management; command; commander',
        src: '1-02'
    },
    {
        abbr: 'COMACC',
        def: 'Commander, Air Combat Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMAFFOR',
        def: 'commander, Air Force forces',
        src: '1-02'
    },
    {
        abbr: 'COMAFSOAC',
        def: 'commander, Air Force special operations air component',
        src: '1-02'
    },
    {
        abbr: 'COMAFSOC',
        def: 'Commander, Air Force Special Operations Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMAJF',
        def: 'commander, allied joint force',
        src: 'JP 3-61'
    },
    {
        abbr: 'COMALF',
        def: 'commander airlift forces',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMALOC',
        def: 'commercial air line of communications',
        src: '1-02'
    },
    {
        abbr: 'COMARFOR',
        def: 'commander, Army forces',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMCAM',
        def: 'combat camera',
        src: '1-02'
    },
    {
        abbr: 'COMCARGRU',
        def: 'commander, carrier group',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMCRUDESGRU',
        def: 'commander, cruiser destroyer group',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMDCAEUR',
        def: 'Commander, Defense Communications Agency Europe',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMDESRON',
        def: 'commander, destroyer squadron',
        src: '1-02'
    },
    {
        abbr: 'COMDT COGARD',
        def: 'Commandant, United States Coast Guard',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMDTINST',
        def: 'Commandant of the Coast Guard instruction',
        src: '1-02'
    },
    {
        abbr: 'COMFLTCYBERCOM',
        def: 'Commander, Fleet Cyber Command',
        src: '1-02'
    },
    {
        abbr: 'COMICEDEFOR',
        def: 'Commander United States Forces, Iceland',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMIDEASTFOR',
        def: 'Commander, Middle East Forces',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMINEWARCOM',
        def: 'Commander, Mine Warfare Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMINT',
        def: 'communications intelligence',
        src: '1-02'
    },
    {
        abbr: 'COMJCSE',
        def: 'Commander, Joint Communications Support Element',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMJIC',
        def: 'Commander, Joint Intelligence Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMLANDFOR',
        def: 'commander, land forces',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMLANTAREACOGARD',
        def: 'Commander, Coast Guard Atlantic Area',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMLOGGRU',
        def: 'combat logistics group',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMM',
        def: 'communications',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMMARFOR',
        def: 'commander, Marine Corps forces',
        src: '1-02'
    },
    {
        abbr: 'COMMARFORNORTH',
        def: 'Commander, Marine Corps Forces North',
        src: '1-02'
    },
    {
        abbr: 'COMMDZ',
        def: 'Commander, Maritime Defense Zone',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMNAV',
        def: 'Committee for European Airspace Coordination Working Group on Communications and Navigation Aids',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMNAVAIRLANT',
        def: 'Commander, Naval Air Force, Atlantic',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMNAVAIRPAC',
        def: 'Commander, Naval Air Force, Pacific',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMNAVAIRSYSCOM',
        def: 'Commander, Naval Air Systems Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMNAVCOMTELCOM',
        def: 'Commander, Naval Computer and Telecommunications Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMNAVELSG',
        def: 'Commander, Navy Expeditionary Logistics Support Group',
        src: '1-02'
    },
    {
        abbr: 'COMNAVFOR',
        def: 'commander, Navy forces',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMNAVMETOCCOM',
        def: 'Commander, Naval Meteorology and Oceanography Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMNAVSEASYSCOM',
        def: 'Commander, Naval Sea Systems Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMNAVSECGRP',
        def: 'Commander, United States Navy Security Group',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMNAVSURFLANT',
        def: 'Commander, Naval Surface Force, Atlantic',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMNAVSURFPAC',
        def: 'Commander, Naval Surface Force, Pacific',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMNET',
        def: 'communications network',
        src: '1-02'
    },
    {
        abbr: 'COMP',
        def: 'component',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMPACAF',
        def: 'Commander, Pacific Air Forces',
        src: '1-02'
    },
    {
        abbr: 'COMPACAREACOGARD',
        def: 'Commander, Coast Guard Pacific Area',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMPACFLT',
        def: 'Commander, Pacific Fleet',
        src: '1-02'
    },
    {
        abbr: 'COMPASS',
        def: 'common operational modeling, planning, and simulation strategy; Computerized Movement Planning and Status System',
        src: '1-02'
    },
    {
        abbr: 'COMPES',
        def: 'contingency operations mobility planning and execution system',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMPLAN',
        def: 'communications plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMPUSEC',
        def: 'computer security',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMSAT',
        def: 'communications satellite',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMSC',
        def: 'Commander, Military Sealift Command',
        src: '1-02'
    },
    {
        abbr: 'COMSCINST',
        def: 'Commander, Military Sealift Command instruction',
        src: '1-02'
    },
    {
        abbr: 'COMSEC',
        def: 'communications security',
        src: '1-02'
    },
    {
        abbr: 'COMSOC',
        def: 'Commander, Special Operations Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMSOCCENT',
        def: 'Commander, Special Operations Command, United States Central Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMSOCEUR',
        def: 'Commander, Special Operations Command, United States European Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMSOCPAC',
        def: 'Commander, Special Operations Command, Pacific',
        src: '1-02'
    },
    {
        abbr: 'COMSOCSOUTH',
        def: 'Commander Special Operations Command, United States Southern Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMSOF',
        def: 'commander, special operations forces',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMSTAT',
        def: 'communications status',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMSUBLANT',
        def: 'Commander Submarine Force, United States Atlantic Fleet',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMSUBPAC',
        def: 'Commander Submarine Force, United States Pacific Fleet',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMSUPNAVFOR',
        def: 'commander, supporting naval forces',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMTAC',
        def: 'tactical communications',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMTENTHFLT',
        def: 'Commander, Tenth Fleet',
        src: '1-02'
    },
    {
        abbr: 'COMUSAFE',
        def: 'Commander, United States Air Force in Europe',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMUSARCENT',
        def: 'Commander, United States Army Forces, Central Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMUSCENTAF',
        def: 'Commander, United States Air Force, Central Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMUSFLTFORCOM',
        def: 'Commander, United States Fleet Forces Command',
        src: '1-02'
    },
    {
        abbr: 'COMUSFORAZ',
        def: 'Commander United States Forces, Azores',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMUSJ',
        def: 'Commander, United States Forces Japan',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMUSK',
        def: 'Commander, United States Forces Korea',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMUSMARCENT',
        def: 'Commander, United States Marine Forces, Central Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMUSNAVCENT',
        def: 'Commander, United States Navy, Central Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'COMUSPACFLT',
        def: 'Commander, United States Pacific Fleet',
        src: '1-02'
    },
    {
        abbr: 'COMUSSOCJFCOM',
        def: 'Commander Special Operations Command, United States Joint Forces Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'CONCAP',
        def: 'construction capabilities contract (Navy); Construction Capabilities Contract Process; construction capabilities contract program',
        src: 'JP 1-02'
    },
    {
        abbr: 'CONEX',
        def: 'container express',
        src: 'JP 1-02'
    },
    {
        abbr: 'CONEXPLAN',
        def: 'contingency and exercise plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'CONOPS',
        def: 'concept of operations',
        src: '1-02'
    },
    {
        abbr: 'CONPLAN',
        def: 'concept plan; operation plan in concept format',
        src: '1-02'
    },
    {
        abbr: 'CONR',
        def: 'continental United States North American Aerospace Defense Command Region',
        src: '1-02'
    },
    {
        abbr: 'CONUS',
        def: 'continental United States',
        src: '1-02'
    },
    {
        abbr: 'CONUSA',
        def: 'Continental United States Army',
        src: 'JP 1-02'
    },
    {
        abbr: 'COOP',
        def: 'continuity of operations',
        src: '1-02'
    },
    {
        abbr: 'COP',
        def: 'common operational picture',
        src: '1-02'
    },
    {
        abbr: 'COP-CSE',
        def: 'common operational picture-combat support enabled',
        src: 'JP 1-02'
    },
    {
        abbr: 'COPG',
        def: 'chairman, operations planners group',
        src: 'JP 1-02'
    },
    {
        abbr: 'COPPERHEAD',
        def: 'name for cannon-launched guided projectile',
        src: 'JP 1-02'
    },
    {
        abbr: 'COPS',
        def: 'communications operational planning system',
        src: 'JP 1-02'
    },
    {
        abbr: 'COR',
        def: 'contracting officer representative',
        src: '1-02'
    },
    {
        abbr: 'CORE',
        def: 'contingency response program',
        src: '1-02'
    },
    {
        abbr: 'COS',
        def: 'chief of staff; chief of station; critical occupational specialty',
        src: '1-02'
    },
    {
        abbr: 'COSMIC',
        def: 'North Atlantic Treaty Organization (NATO) security category',
        src: 'JP 1-02'
    },
    {
        abbr: 'COSPAS',
        def: 'cosmicheskaya sistyema poiska avariynch sudov - space system for search of distressed vessels (Russian satellite system)',
        src: 'JP 1-02'
    },
    {
        abbr: 'COSR',
        def: 'combat and operational stress reactions',
        src: 'JP 1-02'
    },
    {
        abbr: 'COT',
        def: 'commanding officer of troops; crisis operations team',
        src: 'JP 1-02'
    },
    {
        abbr: 'COTP',
        def: 'captain of the port',
        src: 'JP 1-02'
    },
    {
        abbr: 'COTS',
        def: 'cargo offload and transfer system; commercial off-the-shelf; container offloading and transfer system',
        src: 'JP 1-02'
    },
    {
        abbr: 'COU',
        def: 'cable orderwire unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'counter C3',
        def: 'counter command, control, and communications',
        src: 'JP 1-02'
    },
    {
        abbr: 'COVCOM',
        def: 'covert communications',
        src: 'JP 1-02'
    },
    {
        abbr: 'CP',
        def: 'check point; collection point; command post; contact point; control point; counterproliferation',
        src: '1-02'
    },
    {
        abbr: 'CP&I',
        def: 'coastal patrol and interdiction',
        src: 'JP 1-02'
    },
    {
        abbr: 'CPA',
        def: 'closest point of approach',
        src: '1-02'
    },
    {
        abbr: 'CPD',
        def: 'combat plans division',
        src: '1-02'
    },
    {
        abbr: 'CPE',
        def: 'customer premise equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'CPFL',
        def: 'contingency planning facilities list',
        src: 'JP 1-02'
    },
    {
        abbr: 'CPG',
        def: 'central processor group; commander, amphibious group; Contingency Planning Guidance',
        src: 'JP 1-02'
    },
    {
        abbr: 'CPI',
        def: 'crash position indicator',
        src: 'JP 1-02'
    },
    {
        abbr: 'CPIC',
        def: 'coalition press information center',
        src: 'JP 3-61'
    },
    {
        abbr: 'CPM',
        def: 'civilian personnel manual',
        src: 'JP 1-02'
    },
    {
        abbr: 'CPO',
        def: 'chief petty officer; complete provisions only',
        src: 'JP 1-02'
    },
    {
        abbr: 'CPR',
        def: 'cardiopulmonary resuscitation',
        src: '1-02'
    },
    {
        abbr: 'CPRC',
        def: 'coalition personnel recovery center',
        src: 'JP 3-16'
    },
    {
        abbr: 'CPS',
        def: 'characters per second; collective protective shelter',
        src: 'JP 1-02'
    },
    {
        abbr: 'CPT',
        def: 'common procedural terminology',
        src: 'JP 4-02'
    },
    {
        abbr: 'CPU',
        def: 'central processing unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'CPX',
        def: 'command post exercise',
        src: 'JP 1-02'
    },
    {
        abbr: 'CR',
        def: 'civil reconnaissance; critical requirement',
        src: '1-02'
    },
    {
        abbr: 'CR-UAV',
        def: 'close-range unmanned aerial vehicle',
        src: 'JP 1-02'
    },
    {
        abbr: 'CRA',
        def: 'command relationships agreement; continuing resolution authority; coordinating review authority',
        src: '1-02'
    },
    {
        abbr: 'CRAF',
        def: 'Civil Reserve Air Fleet',
        src: '1-02'
    },
    {
        abbr: 'CRAM',
        def: 'control random access memory',
        src: 'JP 1-02'
    },
    {
        abbr: 'CRB',
        def: 'configuration review board',
        src: 'JP 1-02'
    },
    {
        abbr: 'CRC',
        def: 'circuit routing chart; Civilian Response Corps (DOS); civil response corps; coastal riverine company; control and reporting center; CONUS replacement center; COOP response cell; crisis reaction center; cyclic redundancy rate ',
        src: '1-02'
    },
    {
        abbr: 'CRD',
        def: 'capstone requirements document; chemical reconnaissance detachment',
        src: '1-02'
    },
    {
        abbr: 'CRE',
        def: 'contingency response element; control reporting element',
        src: '1-02'
    },
    {
        abbr: 'CREAPER',
        def: 'Communications and Radar Electronic Attack Planning Effectiveness Reference',
        src: '1-02'
    },
    {
        abbr: 'CREST',
        def: 'casualty and resource estimation support tool',
        src: 'JP 4-02'
    },
    {
        abbr: 'CREW',
        def: 'counter radio-controlled improvised explosive device electronic warfare',
        src: '1-02'
    },
    {
        abbr: 'CRF',
        def: 'channel reassignment function; coastal riverine force; contingency response force',
        src: '1-02'
    },
    {
        abbr: 'CRG',
        def: 'contingency response group',
        src: '1-02'
    },
    {
        abbr: 'CRI',
        def: 'collective routing indicator',
        src: 'JP 1-02'
    },
    {
        abbr: 'CRIF',
        def: 'cargo routing information file',
        src: '1-02'
    },
    {
        abbr: 'CRITIC',
        def: 'critical information; critical intelligence communication; critical message (intelligence)',
        src: '1-02'
    },
    {
        abbr: 'CRITICOMM',
        def: 'critical intelligence communications system',
        src: 'JP 1-02'
    },
    {
        abbr: 'CRM',
        def: 'collection requirements management; comment resolution matrix; crew resource management',
        src: '1-02'
    },
    {
        abbr: 'CrM',
        def: 'crisis management',
        src: '1-02'
    },
    {
        abbr: 'CRO',
        def: 'combat rescue officer',
        src: 'JP 3-50'
    },
    {
        abbr: 'CROP',
        def: 'common relevant operational picture',
        src: 'JP 3-05.1'
    },
    {
        abbr: 'CRP',
        def: 'control and reporting post',
        src: 'JP 1-02'
    },
    {
        abbr: 'CRRC',
        def: 'combat rubber raiding craft',
        src: 'JP 1-02'
    },
    {
        abbr: 'CRS',
        def: 'Catholic Relief Services; Chairman\'s readiness system; coastal radio station; community relations service; container recovery system; Coordinator for Reconstruction and Stabilization',
        src: '1-02'
    },
    {
        abbr: 'CRSG',
        def: 'country reconstruction and stabilization group',
        src: '1-02'
    },
    {
        abbr: 'CRSP',
        def: 'centralized receiving and shipping point',
        src: '1-02'
    },
    {
        abbr: 'CRT',
        def: 'cathode ray tube; chemical, biological, radiological, nuclear, and high-yield explosives response team; contingency response team',
        src: '1-02'
    },
    {
        abbr: 'CRTS',
        def: 'casualty receiving and treatment ship',
        src: 'JP 1-02'
    },
    {
        abbr: 'CRW',
        def: 'contingency response wing',
        src: '1-02'
    },
    {
        abbr: 'CRYPTO',
        def: 'cryptographic',
        src: 'JP 1-02'
    },
    {
        abbr: 'CS',
        def: 'call sign; Chaplain Service (Air Force); circuit switch; coastal station; combat service; combat support; content staging; controlled space; creeping line single-unit; critical source',
        src: '1-02'
    },
    {
        abbr: 'CSA',
        def: 'Chief of Staff, United States Army; combat support agency; container stuffing activity',
        src: '1-02'
    },
    {
        abbr: 'CSAAS',
        def: 'combat support agency assessment system',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSADR',
        def: 'combat support agency director\'s report',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSAF',
        def: 'Chief of Staff, United States Air Force',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSAM',
        def: 'computer security for acquisition managers',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSAR',
        def: 'combat search and rescue',
        src: '1-02'
    },
    {
        abbr: 'CSAR3',
        def: 'combat support agency responsiveness and readiness report',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSARTE',
        def: 'combat search and rescue task element',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSARTF',
        def: 'combat search and rescue task force',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSB',
        def: 'contracting support brigade',
        src: '1-02'
    },
    {
        abbr: 'CSB (MEB)',
        def: 'combat support brigade (maneuver enhancement brigade)',
        src: '1-02'
    },
    {
        abbr: 'CSC',
        def: 'combat support center; community support center; convoy support center; creeping line single-unit coordinated; International Convention for Safe Containers',
        src: '1-02'
    },
    {
        abbr: 'CSCC',
        def: 'coastal sea control commander',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSE',
        def: 'client server environment; combat support enhanced; combat support equipment; contingency support element; cyberspace support element',
        src: '1-02'
    },
    {
        abbr: 'CSEL',
        def: 'circuit switch select line; combat survivor evader locator; command senior enlisted leader',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSEP',
        def: 'Chairman of the Joint Chiefs of Staff-sponsored exercise program',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSG',
        def: 'carrier strike group; Chairman\'s Staff Group; coordinating subgroup; cryptologic services group; Cryptologic Support Group',
        src: '1-02'
    },
    {
        abbr: 'CSGN',
        def: 'coordinating subgroup for narcotics',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSH',
        def: 'combat support hospital',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSIF',
        def: 'communications service industrial fund',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSIP',
        def: 'contract support integration plan',
        src: 'JP 4-10'
    },
    {
        abbr: 'CSIPG',
        def: 'circuit switch interface planning guide',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSL',
        def: 'combat stores list',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSNP',
        def: 'causeway section, nonpowered',
        src: '1-02'
    },
    {
        abbr: 'CSNP(BE)',
        def: 'causeway section nonpowered (beach end)',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSNP(I)',
        def: 'causeway section, nonpowered (intermediate)',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSNP(SE)',
        def: 'causeway section, nonpowered (sea end)',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSO',
        def: 'Bureau of Conflict and Stabilization Operations (DOS); Center for Special Operations (USSOCOM); communications support organization; controlled source operation',
        src: '1-02'
    },
    {
        abbr: 'CSOA',
        def: 'combined special operations area',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSOB',
        def: 'command systems operations branch',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSOD',
        def: 'command systems operation division',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSOR',
        def: 'contract statement of requirement',
        src: '1-02'
    },
    {
        abbr: 'CSP',
        def: 'call service position; career sea pay; causeway section, powered; commence search point; contracting support plan; crisis staffing procedures (JCS); cryptologic support package',
        src: '1-02'
    },
    {
        abbr: 'CSPAR',
        def: 'combatant commander\'s preparedness assessment report',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSR',
        def: 'central source registry; combatant commander\'s summary report; commander\'s summary report; controlled supply rate',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSRF',
        def: 'common source route file',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSS',
        def: 'Central Security Service (NSA); combat service support; communications subsystem; coordinator surface search',
        src: '1-02'
    },
    {
        abbr: 'CSSA',
        def: 'combat service support area',
        src: '1-02'
    },
    {
        abbr: 'CSSAMO',
        def: 'combat service support automation management office',
        src: '1-02'
    },
    {
        abbr: 'CSSB',
        def: 'combat sustainment support battalion',
        src: '1-02'
    },
    {
        abbr: 'CSSC',
        def: 'coded switch set controller',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSSM',
        def: 'contracted support synchronization matrix',
        src: '1-02'
    },
    {
        abbr: 'CSST',
        def: 'combat service support team',
        src: 'JP 1-02'
    },
    {
        abbr: 'CSSU',
        def: 'combat service support unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'CST',
        def: 'contingency support team; customer service team',
        src: '1-02'
    },
    {
        abbr: 'CSW',
        def: 'compartment stowage worksheet; coordinate seeking weapons',
        src: 'JP 1-02'
    },
    {
        abbr: 'CT',
        def: 'computed tomography; control telemetry; counterterrorism; country team',
        src: '1-02'
    },
    {
        abbr: 'CTA',
        def: 'common table of allowance',
        src: 'JP 1-02'
    },
    {
        abbr: 'CTAF',
        def: 'counterterrorism analytical framework',
        src: '1-02'
    },
    {
        abbr: 'CTAPS',
        def: 'contingency Theater Air Control System automated planning system',
        src: 'JP 1-02'
    },
    {
        abbr: 'CTC',
        def: 'cargo transfer company (USA); counterterrorist center',
        src: 'JP 1-02'
    },
    {
        abbr: 'CTDB',
        def: 'combating terrorism database',
        src: '1-02'
    },
    {
        abbr: 'CTEP',
        def: 'combined training and education plan',
        src: '1-02'
    },
    {
        abbr: 'CTF',
        def: 'combined task force; commander, task force; counter threat finance ',
        src: '1-02'
    },
    {
        abbr: 'CTF IAMD',
        def: 'commander, task force integrated air and missile defense',
        src: '1-02'
    },
    {
        abbr: 'CTFP',
        def: 'Combating Terrorism Fellowship Program',
        src: '1-02'
    },
    {
        abbr: 'CTG',
        def: 'commander, task group',
        src: 'JP 1-02'
    },
    {
        abbr: 'CTID',
        def: 'communications transmission identifier',
        src: 'JP 1-02'
    },
    {
        abbr: 'CTIP',
        def: 'combating trafficking in persons',
        src: '1-02'
    },
    {
        abbr: 'CTKB',
        def: 'combating terrorism knowledge base',
        src: '1-02'
    },
    {
        abbr: 'CTL',
        def: 'candidate target list',
        src: '1-02'
    },
    {
        abbr: 'CTM',
        def: 'core target material',
        src: 'JP 1-02'
    },
    {
        abbr: 'CTOC',
        def: 'corps tactical operations center',
        src: 'JP 1-02'
    },
    {
        abbr: 'CTP',
        def: 'common tactical picture',
        src: '1-02'
    },
    {
        abbr: 'CTR',
        def: 'cooperative threat reduction',
        src: '1-02'
    },
    {
        abbr: 'CTRIF',
        def: 'Combating Terrorism Readiness Initiative Fund',
        src: 'JP 1-02'
    },
    {
        abbr: 'CTS',
        def: 'commodity tracking system; Contingency Tracking System; controlled technical services',
        src: '1-02'
    },
    {
        abbr: 'CTSS',
        def: 'central targeting support staff',
        src: 'JP 1-02'
    },
    {
        abbr: 'CTU',
        def: 'commander, task unit',
        src: 'JP 3-15'
    },
    {
        abbr: 'CU',
        def: 'cubic capacity; common unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'CUI',
        def: 'controlled unclassified information',
        src: '1-02'
    },
    {
        abbr: 'CUL',
        def: 'common-user logistics',
        src: '1-02'
    },
    {
        abbr: 'CULT',
        def: 'common-user land transportation',
        src: '1-02'
    },
    {
        abbr: 'CV',
        def: 'aircraft carrier; carrier; critical vulnerability; curriculum vitae',
        src: '1-02'
    },
    {
        abbr: 'CVAMP',
        def: 'Core Vulnerability Assessment Management Program',
        src: '1-02'
    },
    {
        abbr: 'CVN',
        def: 'aircraft carrier, nuclear',
        src: '1-02'
    },
    {
        abbr: 'CVR',
        def: 'cockpit voice recorder',
        src: 'JP 1-02'
    },
    {
        abbr: 'CVS',
        def: 'commercial vendor services',
        src: '1-02'
    },
    {
        abbr: 'CVSD',
        def: 'continuous variable slope delta',
        src: 'JP 1-02'
    },
    {
        abbr: 'CVT',
        def: 'criticality-vulnerability-threat',
        src: '1-02'
    },
    {
        abbr: 'CVW',
        def: 'carrier air wing; cryptovariable weekly (GPS)',
        src: '1-02'
    },
    {
        abbr: 'CVWC',
        def: 'carrier strike group air wing commander',
        src: 'JP 1-02'
    },
    {
        abbr: 'CW',
        def: 'carrier wave; chemical warfare; continuous wave',
        src: '1-02'
    },
    {
        abbr: 'CWA',
        def: 'chemical warfare agent',
        src: '1-02'
    },
    {
        abbr: 'CWC',
        def: 'Chemical Weapons Convention; composite warfare commander',
        src: '1-02'
    },
    {
        abbr: 'CWDE',
        def: 'chemical warfare defense equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'CWMD',
        def: 'countering weapons of mass destruction',
        src: '1-02'
    },
    {
        abbr: 'CWO',
        def: 'communications watch officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'CWP',
        def: 'causeway pier',
        src: '1-02'
    },
    {
        abbr: 'CWPD',
        def: 'Conventional War Plans Division, Joint Staff (J-7)',
        src: 'JP 1-02'
    },
    {
        abbr: 'CWR',
        def: 'calm water ramp',
        src: 'JP 1-02'
    },
    {
        abbr: 'CWT',
        def: 'combat weather team; customer wait time',
        src: '1-02'
    },
    {
        abbr: 'CY',
        def: 'calendar year',
        src: 'JP 1-02'
    },
    {
        abbr: 'D',
        def: 'total drift, data',
        src: 'JP 1-02'
    },
    {
        abbr: 'd',
        def: 'surface drift',
        src: 'JP 1-02'
    },
    {
        abbr: 'D&D',
        def: 'denial and deception',
        src: 'JP 2-01'
    },
    {
        abbr: 'D&F',
        def: 'determinations and findings',
        src: '1-02'
    },
    {
        abbr: 'D&M',
        def: 'detection and monitoring',
        src: '1-02'
    },
    {
        abbr: 'D&R',
        def: 'debrief and reintegrate',
        src: 'JP 4-02'
    },
    {
        abbr: 'D-2X',
        def: 'Department of Defense-level counterintelligence and human intelligence staff element ',
        src: '1-02'
    },
    {
        abbr: 'D-cell',
        def: 'deployment cell',
        src: 'JP 1-02'
    },
    {
        abbr: 'D/A',
        def: 'digital-to-analog',
        src: 'JP 1-02'
    },
    {
        abbr: 'D/C',
        def: 'downconverter',
        src: 'JP 1-02'
    },
    {
        abbr: 'D/CI&SP',
        def: 'Director, Counterintelligence and Security Programs',
        src: 'JP 1-02'
    },
    {
        abbr: 'D/CIA',
        def: 'Director, Central Intelligence Agency',
        src: '1-02'
    },
    {
        abbr: 'D/T/ID',
        def: 'detect/track/identify',
        src: '1-02'
    },
    {
        abbr: 'D3A',
        def: 'decide, detect, deliver, and assess',
        src: '1-02'
    },
    {
        abbr: 'DA',
        def: 'data adapter aerospace drift; data administrator; Department of the Army; Development Assistance; direct action; Directorate for Mission Services (DIA); double agent',
        src: '1-02'
    },
    {
        abbr: 'Da',
        def: 'aerospace drift; Development Assistance',
        src: 'JP 1-02'
    },
    {
        abbr: 'DA&M',
        def: 'Director of Administration and Management',
        src: 'JP 1-02'
    },
    {
        abbr: 'DAA',
        def: 'designated approving authority; display alternate area routing lists',
        src: 'JP 1-02'
    },
    {
        abbr: 'DAADC',
        def: 'deputy area air defense commander ',
        src: '1-02'
    },
    {
        abbr: 'DAADC(AMD)',
        def: 'deputy area air defense commander for air and missile defense',
        src: 'JP 3-01'
    },
    {
        abbr: 'DAAS',
        def: 'defense automatic addressing system',
        src: 'JP 1-02'
    },
    {
        abbr: 'DAASO',
        def: 'defense automatic addressing system office',
        src: 'JP 1-02'
    },
    {
        abbr: 'DAB',
        def: 'Defense Acquisition Board',
        src: 'JP 1-02'
    },
    {
        abbr: 'DAC',
        def: 'Defense Intelligence Agency (DIA) counterintelligence and security activity; Department of Army civilians; Development Assistance Committee (OECD)',
        src: '1-02'
    },
    {
        abbr: 'DACB',
        def: 'data adapter control block',
        src: 'JP 1-02'
    },
    {
        abbr: 'DACG',
        def: 'departure airfield control group',
        src: '1-02'
    },
    {
        abbr: 'DACM',
        def: 'data adapter control mode',
        src: 'JP 1-02'
    },
    {
        abbr: 'DADCAP',
        def: 'dawn and dusk combat air patrol',
        src: 'JP 1-02'
    },
    {
        abbr: 'DAF',
        def: 'Department of the Air Force',
        src: 'JP 1-02'
    },
    {
        abbr: 'DAFL',
        def: 'directive authority for logistics',
        src: '1-02'
    },
    {
        abbr: 'DAICC',
        def: 'domestic air interdiction coordinator center',
        src: 'JP 1-02'
    },
    {
        abbr: 'DAL',
        def: 'defended asset list',
        src: '1-02'
    },
    {
        abbr: 'DALIS',
        def: 'Disaster Assistance Logistics Information System',
        src: '1-02'
    },
    {
        abbr: 'DALS',
        def: 'downed aviator locator system',
        src: 'JP 1-02'
    },
    {
        abbr: 'DAMA',
        def: 'demand assigned multiple access',
        src: 'JP 1-02'
    },
    {
        abbr: 'DAMES',
        def: 'defense automatic addressing system (DAAS) automated message exchange system',
        src: 'JP 1-02'
    },
    {
        abbr: 'DAN',
        def: 'Diver\'s Alert Network',
        src: 'JP 1-02'
    },
    {
        abbr: 'DAO',
        def: 'defense attache office; defense attache officer; department/agency/organization',
        src: 'JP 1-02'
    },
    {
        abbr: 'DAP',
        def: 'designated acquisition program',
        src: 'JP 1-02'
    },
    {
        abbr: 'DAR',
        def: 'Defense Acquisition Regulation; distortion adaptive receiver',
        src: 'JP 1-02'
    },
    {
        abbr: 'DARO',
        def: 'Defense Airborne Reconnaissance Office',
        src: 'JP 1-02'
    },
    {
        abbr: 'DARPA',
        def: 'Defense Advanced Research Projects Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'DART',
        def: 'disaster assistance response team; downed aircraft recovery team; dynamic analysis and replanning tool',
        src: '1-02'
    },
    {
        abbr: 'DAS',
        def: 'deep air support (USMC); defense attache system; direct access subscriber; direct air support',
        src: 'JP 1-02'
    },
    {
        abbr: 'DAS3',
        def: 'decentralized automated service support system',
        src: 'JP 1-02'
    },
    {
        abbr: 'DASA',
        def: 'Department of the Army (DA) staff agencies',
        src: 'JP 1-02'
    },
    {
        abbr: 'DASC',
        def: 'direct air support center',
        src: '1-02'
    },
    {
        abbr: 'DASC(A)',
        def: 'direct air support center (airborne)',
        src: 'JP 1-02'
    },
    {
        abbr: 'DASD',
        def: 'Deputy Assistant Secretary of Defense',
        src: 'JP 1-02'
    },
    {
        abbr: 'DASD(H&RA)',
        def: 'Deputy Assistant Secretary of Defense (Humanitarian & Refugee Affairs)',
        src: 'JP 1-02'
    },
    {
        abbr: 'DASD(I)',
        def: 'Deputy Assistant Secretary of Defense (Intelligence)',
        src: 'JP 1-02'
    },
    {
        abbr: 'DASD(P&HA)',
        def: 'Deputy Assistant Secretary of Defense (Peacekeeping and Humanitarian Affairs)',
        src: 'JP 1-02'
    },
    {
        abbr: 'DASD(PS)',
        def: 'Deputy Assistant Secretary of Defense (Program Support)',
        src: '1-02'
    },
    {
        abbr: 'DASD(S&IO)',
        def: 'Deputy Assistant Secretary of Defense (Security and Information Operations)',
        src: 'JP 1-02'
    },
    {
        abbr: 'DASD-CN',
        def: 'Deputy Assistant Secretary of Defense for Counternarcotics',
        src: 'JP 3-07.4'
    },
    {
        abbr: 'DASSS',
        def: 'decentralized automated service support system',
        src: 'JP 1-02'
    },
    {
        abbr: 'DAT',
        def: 'deployment action item',
        src: 'JP 1-02'
    },
    {
        abbr: 'DATT',
        def: 'defense attache',
        src: '1-02'
    },
    {
        abbr: 'DATU',
        def: 'data adapter termination unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'DAWIA',
        def: 'Defense Acquisition Workforce Improvement Act',
        src: '1-02'
    },
    {
        abbr: 'dB',
        def: 'decibel',
        src: 'JP 1-02'
    },
    {
        abbr: 'DBA',
        def: 'database administrator',
        src: 'JP 1-02'
    },
    {
        abbr: 'DBDB',
        def: 'digital bathymetric database',
        src: '1-02'
    },
    {
        abbr: 'DBDB-V',
        def: 'digital bathymetric database variable',
        src: '1-02'
    },
    {
        abbr: 'DBG',
        def: 'database generation',
        src: 'JP 1-02'
    },
    {
        abbr: 'DBI',
        def: 'defense budget issue',
        src: 'JP 1-02'
    },
    {
        abbr: 'DBIDS',
        def: 'Defense Biometric Identification System',
        src: '1-02'
    },
    {
        abbr: 'DBMS',
        def: 'database management system; Defense-Business Management System',
        src: 'JP 1-02'
    },
    {
        abbr: 'DBSMC',
        def: 'Defense Business Systems Management Committee',
        src: '1-02'
    },
    {
        abbr: 'DBSS',
        def: 'Defense Blood Standard System',
        src: 'JP 4-02'
    },
    {
        abbr: 'DBT',
        def: 'design basis threat',
        src: '1-02'
    },
    {
        abbr: 'DC',
        def: 'Deputies Committee; direct current; Directorate of Counterintelligence (DIA); dislocated civilian',
        src: '1-02'
    },
    {
        abbr: 'DC/S for RA',
        def: 'Deputy Chief of Staff for Reserve Affairs',
        src: 'JP 1-02'
    },
    {
        abbr: 'DC3',
        def: 'Department of Defense Cyber Crime Center',
        src: '1-02'
    },
    {
        abbr: 'DCA',
        def: 'Defense Communications Agency; Defense Cooperation Agreements; defensive counterair; dual-capable aircraft',
        src: '1-02'
    },
    {
        abbr: 'DCAA',
        def: 'Defense Contract Audit Agency',
        src: '1-02'
    },
    {
        abbr: 'DCAM',
        def: 'Defense Medical Logistics Standard Support (DMLSS) customer assistance module',
        src: 'JP 4-02'
    },
    {
        abbr: 'DCAPES',
        def: 'Deliberate and Crisis Action Planning and Execution Segments',
        src: '1-02'
    },
    {
        abbr: 'DCC',
        def: 'damage control center; deployment control center',
        src: 'JP 1-02'
    },
    {
        abbr: 'DCCC',
        def: 'defense collection coordination center',
        src: '1-02'
    },
    {
        abbr: 'DCCEP',
        def: 'developing country combined exercise program',
        src: 'JP 1-02'
    },
    {
        abbr: 'DCD',
        def: 'data collection device',
        src: 'JP 1-02'
    },
    {
        abbr: 'DCE',
        def: 'defense coordinating element',
        src: '1-02'
    },
    {
        abbr: 'DCGS',
        def: 'distributed common ground/surface system',
        src: '1-02'
    },
    {
        abbr: 'DCHA',
        def: 'Bureau for Democracy, Conflict, and Humanitarian Assistance (USAID)',
        src: '1-02'
    },
    {
        abbr: 'DCHC',
        def: 'Defense Counterintelligence and Human Intelligence Center',
        src: '1-02'
    },
    {
        abbr: 'DCHE',
        def: 'Defense Counterintelligence and Human Intelligence Enterprise',
        src: '1-02'
    },
    {
        abbr: 'DCI',
        def: 'defense critical infrastructure; Director of Central Intelligence; dual channel interchange',
        src: '1-02'
    },
    {
        abbr: 'DCID',
        def: 'Director of Central Intelligence directive',
        src: 'JP 1-02'
    },
    {
        abbr: 'DCIIS',
        def: 'Defense Counterintelligence Information System',
        src: 'JP 1-02'
    },
    {
        abbr: 'DCIO',
        def: 'defense criminal investigative organization',
        src: 'JP 1-02'
    },
    {
        abbr: 'DCIP',
        def: 'Defense Critical Infrastructure Program',
        src: '1-02'
    },
    {
        abbr: 'DCIS',
        def: 'Defense Criminal Investigative Services',
        src: 'JP 1-02'
    },
    {
        abbr: 'DCISE',
        def: 'Defense Industrial Base Collaborative Information Sharing Environment',
        src: '1-02'
    },
    {
        abbr: 'DCJTF',
        def: 'deputy commander, joint task force',
        src: 'JP 1-02'
    },
    {
        abbr: 'DCM',
        def: 'data channel multiplexer; deputy chief of mission',
        src: 'JP 1-02'
    },
    {
        abbr: 'DCMA',
        def: 'Defense Contract Management Agency',
        src: '1-02'
    },
    {
        abbr: 'DCMC',
        def: 'Office of Deputy Chairman, Military Committee',
        src: 'JP 1-02'
    },
    {
        abbr: 'DCMO',
        def: 'deputy chief military observer',
        src: '1-02'
    },
    {
        abbr: 'DCNO',
        def: 'Deputy Chief of Naval Operations',
        src: 'JP 1-02'
    },
    {
        abbr: 'DCO',
        def: 'debarkation control officer; Defense Connect Online; defense coordinating officer; defensive cyberspace operations; dial central office',
        src: '1-02'
    },
    {
        abbr: 'DCO-RA',
        def: 'defensive cyberspace operations response actions',
        src: '1-02'
    },
    {
        abbr: 'DCP',
        def: 'Defense Continuity Program; detainee collection point',
        src: '1-02'
    },
    {
        abbr: 'DCPA',
        def: 'Defense Civil Preparedness Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'DCPG',
        def: 'digital clock pulse generator',
        src: 'JP 1-02'
    },
    {
        abbr: 'DCR',
        def: 'doctrine, organization, training, materiel, leadership and education, personnel, and facilities change recommendation',
        src: '1-02'
    },
    {
        abbr: 'DCRF',
        def: 'defense chemical, biological, radiological, and nuclear response force',
        src: '1-02'
    },
    {
        abbr: 'DCS',
        def: 'Defense Courier Service; deputy chief of staff; digital computer system',
        src: '1-02'
    },
    {
        abbr: 'DCSCU',
        def: 'dual capability servo control unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'DCSINT',
        def: 'Deputy Chief of Staff for Intelligence',
        src: 'JP 1-02'
    },
    {
        abbr: 'DCSLOG',
        def: 'Deputy Chief of Staff for Logistics, US Army',
        src: 'JP 1-02'
    },
    {
        abbr: 'DCSOPS',
        def: 'Deputy Chief of Staff for Operations and Plans, United States Army',
        src: 'JP 1-02'
    },
    {
        abbr: 'DCSPER',
        def: 'Deputy Chief of Staff for Personnel, United States Army',
        src: 'JP 1-02'
    },
    {
        abbr: 'DCST',
        def: 'Defense Logistics Agency (DLA) contingency support team',
        src: 'JP 1-02'
    },
    {
        abbr: 'DCTC',
        def: 'Defense Combating Terrorism Center',
        src: '1-02'
    },
    {
        abbr: 'DCTS',
        def: 'Defense Collaboration Tool Suite',
        src: 'JP 6-0'
    },
    {
        abbr: 'DCW',
        def: 'Defense Collection Watch (DIA)',
        src: '1-02'
    },
    {
        abbr: 'DD',
        def: 'Department of Defense form; destroyer (Navy ship)',
        src: '1-02'
    },
    {
        abbr: 'DDA',
        def: 'deputy development advisor; Deputy Director for Administration (CIA); designated development activity',
        src: '1-02'
    },
    {
        abbr: 'DDC',
        def: 'data distribution center; defense distribution center',
        src: 'JP 1-02'
    },
    {
        abbr: 'DDCI',
        def: 'Deputy Director of Central Intelligence (CIA)',
        src: 'JP 1-02'
    },
    {
        abbr: 'DDCI/CM',
        def: 'Deputy Director of Central Intelligence for Community Management',
        src: 'JP 2-01'
    },
    {
        abbr: 'DDED',
        def: 'defense distribution expeditionary depot',
        src: '1-02'
    },
    {
        abbr: 'DDG',
        def: 'guided missile destroyer',
        src: 'JP 1-02'
    },
    {
        abbr: 'DDI',
        def: 'Deputy Director of Intelligence (CIA); Director of Defense Intelligence',
        src: '1-02'
    },
    {
        abbr: 'DDL',
        def: 'digital data link',
        src: 'JP 1-02'
    },
    {
        abbr: 'DDM',
        def: 'Defense Logistics Agency Distribution Mapping; digital data modem',
        src: '1-02'
    },
    {
        abbr: 'DDMA',
        def: 'Defense Distribution Mapping Activity',
        src: 'JP 1-02'
    },
    {
        abbr: 'DDMS',
        def: 'Deputy Director for Military Support (NRO)',
        src: '1-02'
    },
    {
        abbr: 'DDN',
        def: 'Defense Data Network',
        src: 'JP 3-07.4'
    },
    {
        abbr: 'DDO',
        def: 'Deputy Director of Operations (CIA)',
        src: 'JP 1-02'
    },
    {
        abbr: 'DDOC',
        def: 'Deployment and Distribution Operations Center (USTRANSCOM)',
        src: '1-02'
    },
    {
        abbr: 'DDP',
        def: 'detailed deployment plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'DDR',
        def: 'disarmament, demobilization, and reintegration',
        src: '1-02'
    },
    {
        abbr: 'DDR&E',
        def: 'director of defense research and engineering',
        src: 'JP 1-02'
    },
    {
        abbr: 'DDRRR',
        def: 'disarmament, demobilization, repatriation, reintegration, and resettlement',
        src: 'JP 3-07.3'
    },
    {
        abbr: 'DDS',
        def: 'defense dissemination system; Deployable Disbursing System',
        src: '1-02'
    },
    {
        abbr: 'DDS&T',
        def: 'Deputy Director for Science & Technology (CIA)',
        src: 'JP 1-02'
    },
    {
        abbr: 'DDSBn',
        def: 'deployment and distribution support battalion',
        src: '1-02'
    },
    {
        abbr: 'DDSM',
        def: 'Defense Distinguished Service Medal',
        src: '1-02'
    },
    {
        abbr: 'DDST',
        def: 'deployment and distribution support team',
        src: '1-02'
    },
    {
        abbr: 'DDWSO',
        def: 'Deputy Director for Wargaming, Simulation, and Operations',
        src: 'JP 1-02'
    },
    {
        abbr: 'DE',
        def: 'damage expectancy; decedent effects; delay equalizer; directed energy',
        src: '1-02'
    },
    {
        abbr: 'de',
        def: 'individual drift error',
        src: 'JP 1-02'
    },
    {
        abbr: 'De',
        def: 'total drift error',
        src: 'JP 1-02'
    },
    {
        abbr: 'de max',
        def: 'maximum drift error',
        src: 'JP 1-02'
    },
    {
        abbr: 'de min',
        def: 'minimum drift error',
        src: 'JP 1-02'
    },
    {
        abbr: 'de minimax',
        def: 'minimax drift error',
        src: 'JP 1-02'
    },
    {
        abbr: 'DEA',
        def: 'Drug Enforcement Administration (DOJ)',
        src: '1-02'
    },
    {
        abbr: 'dea',
        def: 'aerospace drift error',
        src: 'JP 1-02'
    },
    {
        abbr: 'DEACN',
        def: 'Drug Enforcement Administration Communications Network',
        src: 'JP 1-02'
    },
    {
        abbr: 'DEAR',
        def: 'disease and environmental alert report',
        src: 'JP 1-02'
    },
    {
        abbr: 'DEARAS',
        def: 'Department of Defense Emergency Authorities Retrieval and Analysis System',
        src: '1-02'
    },
    {
        abbr: 'DeCA',
        def: 'Defense Commissary Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'DEERS',
        def: 'Defense Enrollment Eligibility Reporting System',
        src: '1-02'
    },
    {
        abbr: 'DEFSMAC',
        def: 'Defense Special Missile and Aerospace Center',
        src: '1-02'
    },
    {
        abbr: 'DEL',
        def: 'deployable equipment list',
        src: '1-02'
    },
    {
        abbr: 'DEMARC',
        def: 'demarcation',
        src: 'JP 1-02'
    },
    {
        abbr: 'DEMIL',
        def: 'demilitarization',
        src: 'JP 1-02'
    },
    {
        abbr: 'DeMS',
        def: 'deployment management system',
        src: 'JP 1-02'
    },
    {
        abbr: 'DEMUX',
        def: 'demultiplex',
        src: 'JP 1-02'
    },
    {
        abbr: 'DEP',
        def: 'Delayed Entry Program; deployed',
        src: 'JP 1-02'
    },
    {
        abbr: 'DEP&S',
        def: 'Drug Enforcement Plans and Support',
        src: 'JP 1-02'
    },
    {
        abbr: 'DEPCJTF',
        def: 'deputy commander, joint task force',
        src: 'JP 1-02'
    },
    {
        abbr: 'DEPID',
        def: 'deployment indicator code',
        src: 'JP 1-02'
    },
    {
        abbr: 'DEPMEDS',
        def: 'deployable medical systems',
        src: 'JP 1-02'
    },
    {
        abbr: 'DepOpsDeps',
        def: 'Service deputy operations deputies',
        src: 'JP 1-02'
    },
    {
        abbr: 'DEPORD',
        def: 'deployment order',
        src: '1-02'
    },
    {
        abbr: 'DESC',
        def: 'Defense Energy Support Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'DESCOM',
        def: 'Depot System Command (Army)',
        src: 'JP 1-02'
    },
    {
        abbr: 'DESIGAREA',
        def: 'designated area message',
        src: 'JP 1-02'
    },
    {
        abbr: 'DEST',
        def: 'destination; domestic emergency support team',
        src: 'JP 1-02'
    },
    {
        abbr: 'DET',
        def: 'detainee',
        src: '1-02'
    },
    {
        abbr: 'DETRESFA',
        def: 'distress phase (lCAO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'DEW',
        def: 'directed-energy warfare',
        src: '1-02'
    },
    {
        abbr: 'DF',
        def: 'direction finding; dispersion factor; disposition form',
        src: '1-02'
    },
    {
        abbr: 'DFARS',
        def: 'Defense Federal Acquisition Regulation Supplement',
        src: '1-02'
    },
    {
        abbr: 'DFAS',
        def: 'Defense Finance and Accounting Service',
        src: '1-02'
    },
    {
        abbr: 'DFAS-DE',
        def: 'Defense Finance and Accounting Service-Denver',
        src: 'JP 1-02'
    },
    {
        abbr: 'DFC',
        def: 'deputy force commander; detention facility commander',
        src: 'JP 1-02'
    },
    {
        abbr: 'DFE',
        def: 'Defense Intelligence Agency forward element; Defense Joint Intelligence Operations Center forward element; division force equivalent',
        src: '1-02'
    },
    {
        abbr: 'DFM',
        def: 'deterrent force module',
        src: 'JP 1-02'
    },
    {
        abbr: 'DFO',
        def: 'disaster field office (FEMA)',
        src: 'JP 1-02'
    },
    {
        abbr: 'DFR',
        def: 'Defense Fuel Region',
        src: 'JP 1-02'
    },
    {
        abbr: 'DFR/E',
        def: 'Defense Fuel Region, Europe',
        src: 'JP 1-02'
    },
    {
        abbr: 'DFR/ME',
        def: 'Defense Fuel Region, Middle East',
        src: 'JP 1-02'
    },
    {
        abbr: 'DFRIF',
        def: 'Defense Freight Railway Interchange Fleet',
        src: '1-02'
    },
    {
        abbr: 'DFSC',
        def: 'Defense Fuel Supply Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'DFSP',
        def: 'defense fuel support point',
        src: '1-02'
    },
    {
        abbr: 'DFT',
        def: 'deployment for training',
        src: 'JP 1-02'
    },
    {
        abbr: 'DG',
        def: 'defense guidance',
        src: 'JP 1-02'
    },
    {
        abbr: 'DGIAP',
        def: 'Defense General Intelligence and Applications Program',
        src: 'JP 1-02'
    },
    {
        abbr: 'DGM',
        def: 'digital group multiplex',
        src: 'JP 1-02'
    },
    {
        abbr: 'DH',
        def: 'death due to hostilities; Directorate for Human Intelligence (DIA)',
        src: 'JP 1-02'
    },
    {
        abbr: 'DHA',
        def: 'detainee holding area',
        src: '3-63'
    },
    {
        abbr: 'DHB',
        def: 'Defense Health Board',
        src: '1-02'
    },
    {
        abbr: 'DHE',
        def: 'defense human intelligence executor',
        src: '1-02'
    },
    {
        abbr: 'DHHS',
        def: 'Department of Health and Human Services',
        src: '1-02'
    },
    {
        abbr: 'DHM',
        def: 'Department of Defense human intelligence manager',
        src: 'JP 2-01.2'
    },
    {
        abbr: 'DHMO',
        def: 'Department of Defense human intelligence management office',
        src: 'JP 2-01.2'
    },
    {
        abbr: 'DHP',
        def: 'Defense Health Program',
        src: '1-02'
    },
    {
        abbr: 'DHS',
        def: 'Defense Human Intelligence (HUMINT) Service; Department of Homeland Security; Director of Health Services',
        src: '1-02'
    },
    {
        abbr: 'DI',
        def: 'Defense Intelligence Agency (DIA) Directorate for Analysis; DIA Directorate for Intelligence Production; discrete identifier; dynamic interface',
        src: 'JP 1-02'
    },
    {
        abbr: 'DI&E',
        def: 'data integration and exploitation',
        src: '1-02'
    },
    {
        abbr: 'DIA',
        def: 'Defense Intelligence Agency',
        src: '1-02'
    },
    {
        abbr: 'DIA/DHX',
        def: 'Defense Intelligence Agency, Directorate of Human Intelligence, Office of Document and Media Operations',
        src: 'JP 2-01'
    },
    {
        abbr: 'DIAC',
        def: 'Defense Intelligence Analysis Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'DIAM',
        def: 'Defense Intelligence Agency manual; Defense Intelligence Agency memorandum',
        src: 'JP 1-02'
    },
    {
        abbr: 'DIAP',
        def: 'Defense Intelligence Analysis Program; Drug Interdiction Assistance Program',
        src: '1-02'
    },
    {
        abbr: 'DIAR',
        def: 'Defense Intelligence Agency (DIA) regulation',
        src: 'JP 1-02'
    },
    {
        abbr: 'DIB',
        def: 'defense industrial base',
        src: '1-02'
    },
    {
        abbr: 'DIBITS',
        def: 'digital in-band interswitch trunk signaling',
        src: 'JP 1-02'
    },
    {
        abbr: 'DIBRS',
        def: 'defense incident-based reporting system',
        src: 'JP 1-02'
    },
    {
        abbr: 'DIBTS',
        def: 'digital in-band trunk signaling',
        src: 'JP 1-02'
    },
    {
        abbr: 'DICO',
        def: 'Data Information Coordination Office',
        src: 'JP 1-02'
    },
    {
        abbr: 'DID',
        def: 'Defense Intelligence Digest',
        src: '1-02'
    },
    {
        abbr: 'DIDHS',
        def: 'Deployable Intelligence Data Handling System',
        src: 'JP 1-02'
    },
    {
        abbr: 'DIDO',
        def: 'designated intelligence disclosure official',
        src: '1-02'
    },
    {
        abbr: 'DIDS',
        def: 'Defense Intelligence Dissemination System',
        src: 'JP 1-02'
    },
    {
        abbr: 'DIEB',
        def: 'Defense Intelligence Executive Board',
        src: 'JP 1-02'
    },
    {
        abbr: 'DIEPS',
        def: 'Digital Imagery Exploitation Production System',
        src: 'JP 1-02'
    },
    {
        abbr: 'DIG',
        def: 'digital',
        src: 'JP 1-02'
    },
    {
        abbr: 'DIGO',
        def: 'Defence Imagery and Geospatial Organisation (Australia)',
        src: '1-02'
    },
    {
        abbr: 'DII-COE',
        def: 'defense information infrastructure-common operating environment',
        src: 'JP 1-02'
    },
    {
        abbr: 'DIILS',
        def: 'Defense Institute of International Legal Studies',
        src: 'JP 1-02'
    },
    {
        abbr: 'DIJE',
        def: 'Defense Intelligence Joint Environment (United Kingdom)',
        src: '1-02'
    },
    {
        abbr: 'DILPA',
        def: 'diphase loop modem-A',
        src: 'JP 1-02'
    },
    {
        abbr: 'DIMA',
        def: 'drilling individual mobilization augmentee',
        src: 'JP 1-02'
    },
    {
        abbr: 'DIMOC',
        def: 'Defense Imagery Management Operations Center',
        src: '1-02'
    },
    {
        abbr: 'DIN',
        def: 'defense intelligence notice',
        src: 'JP 1-02'
    },
    {
        abbr: 'DINET',
        def: 'Defense Industrial Net',
        src: 'JP 1-02'
    },
    {
        abbr: 'DINFOS',
        def: 'Defense Information School',
        src: 'JP 3-61'
    },
    {
        abbr: 'DIOC',
        def: 'drug interdiction operations center',
        src: 'JP 1-02'
    },
    {
        abbr: 'DIOCC',
        def: 'Defense Intelligence Operations Coordination Center (DIA)',
        src: '1-02'
    },
    {
        abbr: 'DIPC',
        def: 'defense industrial plant equipment center',
        src: 'JP 1-02'
    },
    {
        abbr: 'DIPF',
        def: 'defense intelligence priorities framework',
        src: '1-02'
    },
    {
        abbr: 'DIPFAC',
        def: 'diplomatic facility',
        src: 'JP 1-02'
    },
    {
        abbr: 'DIPGM',
        def: 'diphase supergroup modem',
        src: 'JP 1-02'
    },
    {
        abbr: 'DIRINT',
        def: 'Director of Intelligence (USMC)',
        src: 'JP 1-02'
    },
    {
        abbr: 'DIRJIATF',
        def: 'director, joint inter-agency task force',
        src: 'JP 1-02'
    },
    {
        abbr: 'DIRLAUTH',
        def: 'direct liaison authorized',
        src: '1-02'
    },
    {
        abbr: 'DIRM',
        def: 'Directorate for Information and Resource Management',
        src: 'JP 1-02'
    },
    {
        abbr: 'DIRMOBFOR',
        def: 'director of mobility forces',
        src: '1-02'
    },
    {
        abbr: 'DIRNSA',
        def: 'Director, National Security Agency',
        src: '1-02'
    },
    {
        abbr: 'DIRSPACEFOR',
        def: 'director of space forces (USAF)',
        src: '1-02'
    },
    {
        abbr: 'DIS',
        def: 'defense information system; Defense Investigative Service; distributed interactive simulation',
        src: '1-02'
    },
    {
        abbr: 'DISA',
        def: 'Defense Information Systems Agency',
        src: '1-02'
    },
    {
        abbr: 'DISA-LO',
        def: 'Defense Information Systems Agency - liaison officer',
        src: 'JP 6-0'
    },
    {
        abbr: 'DISANMOC',
        def: 'Defense Information Systems Agency Network Management and Operations Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'DisasterAWARE',
        def: 'Disaster All-Hazard Warnings, Analysis, and Risk Evaluation System',
        src: '1-02'
    },
    {
        abbr: 'DISCOM',
        def: 'division support command (Army)',
        src: 'JP 1-02'
    },
    {
        abbr: 'DISGM',
        def: 'diphase supergroup',
        src: 'JP 1-02'
    },
    {
        abbr: 'DISN',
        def: 'Defense Information Systems Network',
        src: '1-02'
    },
    {
        abbr: 'DISN-E',
        def: 'Defense Information Systems Network - Europe',
        src: 'JP 1-02'
    },
    {
        abbr: 'DISO',
        def: 'deception in support of operations security; defense intelligence support office',
        src: '1-02'
    },
    {
        abbr: 'DISP',
        def: 'drug investigation support program (FAA)',
        src: 'JP 1-02'
    },
    {
        abbr: 'DITDS',
        def: 'defense information threat data system; defense intelligence threat data system',
        src: 'JP 1-02'
    },
    {
        abbr: 'DITSUM',
        def: 'defense intelligence terrorist summary',
        src: 'JP 1-02'
    },
    {
        abbr: 'DJIOC',
        def: 'Defense Joint Intelligence Operations Center',
        src: '1-02'
    },
    {
        abbr: 'DJS',
        def: 'Director, Joint Staff',
        src: 'JP 1-02'
    },
    {
        abbr: 'DJSM',
        def: 'Director, Joint Staff, memorandum',
        src: 'JP 1-02'
    },
    {
        abbr: 'DJTFS',
        def: 'deputy joint task force surgeon',
        src: 'JP 4-02'
    },
    {
        abbr: 'DLA',
        def: 'Defense Logistics Agency',
        src: '1-02'
    },
    {
        abbr: 'DLAM',
        def: 'Defense Logistics Agency manual',
        src: 'JP 1-02'
    },
    {
        abbr: 'DLAR',
        def: 'Defense Logistics Agency regulation',
        src: 'JP 1-02'
    },
    {
        abbr: 'DLD',
        def: 'digital liaison detachment',
        src: '1-02'
    },
    {
        abbr: 'DLEA',
        def: 'drug law enforcement agency',
        src: '1-02'
    },
    {
        abbr: 'DLED',
        def: 'dedicated loop encryption device',
        src: 'JP 1-02'
    },
    {
        abbr: 'DLIS',
        def: 'Defense Logistics Information Service',
        src: 'JP 4-02'
    },
    {
        abbr: 'DLM',
        def: 'defense logistics manual',
        src: '1-02'
    },
    {
        abbr: 'DLMS',
        def: 'Department Logistics Management System',
        src: '1-02'
    },
    {
        abbr: 'DLP',
        def: 'data link processor',
        src: 'JP 1-02'
    },
    {
        abbr: 'DLPMA',
        def: 'diphase loop modem A',
        src: 'JP 1-02'
    },
    {
        abbr: 'DLQ',
        def: 'deck landing qualification',
        src: '1-02'
    },
    {
        abbr: 'DLR',
        def: 'depot-level repairable',
        src: 'JP 1-02'
    },
    {
        abbr: 'DLSA',
        def: 'Defense Legal Services Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'DLSS',
        def: 'Defense Logistics Standard Systems',
        src: 'JP 1-02'
    },
    {
        abbr: 'DLTM',
        def: 'digital line termination module',
        src: 'JP 1-02'
    },
    {
        abbr: 'DLTU',
        def: 'digital line termination unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'DM',
        def: 'detection and monitoring; docking module',
        src: '1-02'
    },
    {
        abbr: 'DMA',
        def: 'Defense Media Activity',
        src: '1-02'
    },
    {
        abbr: 'dmax',
        def: 'maximum drift distance',
        src: 'JP 1-02'
    },
    {
        abbr: 'DMB',
        def: 'datum marker buoy',
        src: 'JP 1-02'
    },
    {
        abbr: 'DMC',
        def: 'data mode control',
        src: 'JP 1-02'
    },
    {
        abbr: 'DMD',
        def: 'digital message device',
        src: 'JP 1-02'
    },
    {
        abbr: 'DMDC',
        def: 'defense management data center; defense manpower data center',
        src: 'JP 1-02'
    },
    {
        abbr: 'DME',
        def: 'distance measuring equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'DMHS',
        def: 'Defense Message Handling System',
        src: '1-02'
    },
    {
        abbr: 'DMI',
        def: 'director military intelligence',
        src: 'JP 1-02'
    },
    {
        abbr: 'DMIGS',
        def: 'Domestic Mobile Integrated Geospatial-Intelligence System',
        src: '1-02'
    },
    {
        abbr: 'dmin',
        def: 'minimum drift distance',
        src: 'JP 1-02'
    },
    {
        abbr: 'DML',
        def: 'data manipulation language',
        src: 'JP 1-02'
    },
    {
        abbr: 'DMLSS',
        def: 'Defense Medical Logistics Standard Support',
        src: 'JP 4-02'
    },
    {
        abbr: 'DMMPO',
        def: 'Defense Medical Materiel Program Office',
        src: '1-02'
    },
    {
        abbr: 'DMO',
        def: 'directory maintenance official',
        src: 'JP 1-02'
    },
    {
        abbr: 'DMORT',
        def: 'Disaster Mortuary Operational Response Team',
        src: '1-02'
    },
    {
        abbr: 'DMOS',
        def: 'duty military occupational specialty',
        src: 'JP 1-02'
    },
    {
        abbr: 'DMPI',
        def: 'designated mean point of impact',
        src: '1-02'
    },
    {
        abbr: 'DMRD',
        def: 'defense management resource decision',
        src: 'JP 1-02'
    },
    {
        abbr: 'DMRIS',
        def: 'defense medical regulating information system',
        src: 'JP 1-02'
    },
    {
        abbr: 'DMS',
        def: 'defense message system; defense meteorological system; director of military support',
        src: 'JP 1-02'
    },
    {
        abbr: 'DMSB',
        def: 'Defense Medical Standardization Board',
        src: 'JP 1-02'
    },
    {
        abbr: 'DMSM',
        def: 'Defense Meritorious Service Medal',
        src: '1-02'
    },
    {
        abbr: 'DMSO',
        def: 'Defense Modeling and Simulation Office; director of major staff office; Division Medical Supply Office',
        src: 'JP 1-02'
    },
    {
        abbr: 'DMSP',
        def: 'Defense Meteorological Satellite Program',
        src: '1-02'
    },
    {
        abbr: 'DMSSC',
        def: 'defense medical system support center',
        src: 'JP 1-02'
    },
    {
        abbr: 'DMT',
        def: 'disaster management team (UN)',
        src: '1-02'
    },
    {
        abbr: 'DMU',
        def: 'disk memory unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'DMZ',
        def: 'demilitarized zone',
        src: 'JP 1-02'
    },
    {
        abbr: 'DN',
        def: 'digital nonsecure',
        src: 'JP 1-02'
    },
    {
        abbr: 'DNA',
        def: 'Defense Nuclear Agency; deoxyribonucleic acid',
        src: '1-02'
    },
    {
        abbr: 'DNAT',
        def: 'defense nuclear advisory team',
        src: 'JP 1-02'
    },
    {
        abbr: 'DNBI',
        def: 'disease and nonbattle injury',
        src: '1-02'
    },
    {
        abbr: 'DNC',
        def: 'digital nautical chart',
        src: '1-02'
    },
    {
        abbr: 'DND',
        def: 'Department of National Defence (Canada)',
        src: '1-02'
    },
    {
        abbr: 'DNDO',
        def: 'Domestic Nuclear Detection Office (DHS)',
        src: '1-02'
    },
    {
        abbr: 'DNGA',
        def: 'Director of National Geospatial-Intelligence Agency',
        src: 'JP 2-03'
    },
    {
        abbr: 'DNI',
        def: 'Director of National Intelligence; Director of Naval Intelligence',
        src: '1-02'
    },
    {
        abbr: 'DNIF',
        def: 'duty not involving flying',
        src: 'JP 1-02'
    },
    {
        abbr: 'DNMSP',
        def: 'driftnet monitoring support program',
        src: 'JP 1-02'
    },
    {
        abbr: 'DNSO',
        def: 'Defense Network Systems Organization',
        src: 'JP 1-02'
    },
    {
        abbr: 'DNVT',
        def: 'digital nonsecure voice terminal',
        src: 'JP 1-02'
    },
    {
        abbr: 'DNY',
        def: 'display area code (NYX) routing',
        src: 'JP 1-02'
    },
    {
        abbr: 'DOA',
        def: 'days of ammunition; dead on arrival; director of administration',
        src: '1-02'
    },
    {
        abbr: 'DOB',
        def: 'date of birth; dispersal operating base',
        src: 'JP 1-02'
    },
    {
        abbr: 'DOC',
        def: 'Department of Commerce; designed operational capability',
        src: '1-02'
    },
    {
        abbr: 'DOCC',
        def: 'deep operations coordination cell',
        src: 'JP 1-02'
    },
    {
        abbr: 'DOCDIV',
        def: 'documents division',
        src: 'JP 1-02'
    },
    {
        abbr: 'DOCEX',
        def: 'document exploitation',
        src: 'JP 1-02'
    },
    {
        abbr: 'DOCNET',
        def: 'Doctrine Networked Education and Training',
        src: 'CJCSI 5120.02'
    },
    {
        abbr: 'DOD',
        def: 'Department of Defense',
        src: '1-02'
    },
    {
        abbr: 'DOD-JIC',
        def: 'Department of Defense Joint Intelligence Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'DODAAC',
        def: 'Department of Defense activity address code',
        src: 'JP 1-02'
    },
    {
        abbr: 'DODAAD',
        def: 'Department of Defense Activity Address Directory',
        src: 'JP 1-02'
    },
    {
        abbr: 'DODAC DOD',
        def: 'ammunition code',
        src: 'JP 1-02'
    },
    {
        abbr: 'DODD',
        def: 'Department of Defense directive',
        src: '1-02'
    },
    {
        abbr: 'DODDS',
        def: 'Department of Defense Dependent Schools',
        src: 'JP 1-02'
    },
    {
        abbr: 'DODEX',
        def: 'Department of Defense intelligence system information system extension',
        src: 'JP 1-02'
    },
    {
        abbr: 'DODFMR',
        def: 'Department of Defense Financial Management Regulation',
        src: '1-02'
    },
    {
        abbr: 'DODI',
        def: 'Department of Defense instruction',
        src: '1-02'
    },
    {
        abbr: 'DODIC',
        def: 'Department of Defense identification code',
        src: '1-02'
    },
    {
        abbr: 'DODID',
        def: 'Department of Defense Intelligence Digest',
        src: 'JP 1-02'
    },
    {
        abbr: 'DODIIS',
        def: 'Department of Defense Intelligence Information System',
        src: 'JP 1-02'
    },
    {
        abbr: 'DODIN',
        def: 'Department of Defense information networks',
        src: '1-02'
    },
    {
        abbr: 'DODIPC',
        def: 'Department of Defense intelligence production community',
        src: 'JP 1-02'
    },
    {
        abbr: 'DODIPP',
        def: 'Department of Defense Intelligence Production Program',
        src: 'JP 1-02'
    },
    {
        abbr: 'DODM',
        def: 'data orderwire diphase modem; Department of Defense manual',
        src: '1-02'
    },
    {
        abbr: 'DOE',
        def: 'Department of Energy',
        src: '1-02'
    },
    {
        abbr: 'DOEHRS',
        def: 'Defense Occupational and Environmental Health Reporting System',
        src: '1-02'
    },
    {
        abbr: 'DOF',
        def: 'degree of freedom',
        src: 'JP 1-02'
    },
    {
        abbr: 'DOI',
        def: 'Defense Special Security Communications System (DSSCS) Operating Instructions; Department of the Interior',
        src: '1-02'
    },
    {
        abbr: 'DOJ',
        def: 'Department of Justice',
        src: '1-02'
    },
    {
        abbr: 'DOL',
        def: 'Department of Labor',
        src: 'JP 1-02'
    },
    {
        abbr: 'DOM',
        def: 'day of month',
        src: 'JP 1-02'
    },
    {
        abbr: 'DOMEX',
        def: 'document and media exploitation',
        src: '1-02'
    },
    {
        abbr: 'DOMS',
        def: 'director of military support',
        src: 'JP 1-02'
    },
    {
        abbr: 'DON',
        def: 'Department of the Navy',
        src: '1-02'
    },
    {
        abbr: 'DOPMA',
        def: 'Defense Officer Personnel Management Act',
        src: 'JP 1-02'
    },
    {
        abbr: 'DOR',
        def: 'date of rank',
        src: 'JP 1-02'
    },
    {
        abbr: 'DOS',
        def: 'date of separation; days of supply; denial of service; Department of State; disk operating system',
        src: '1-02'
    },
    {
        abbr: 'DOT',
        def: 'Department of Transportation',
        src: '1-02'
    },
    {
        abbr: 'DOTEO',
        def: 'Department of Transportation emergency organization',
        src: '1-02'
    },
    {
        abbr: 'DOTMLPF',
        def: 'doctrine, organization, training, materiel, leadership and education, personnel, and facilities',
        src: '1-02'
    },
    {
        abbr: 'DOW',
        def: 'data orderwire; died of wounds',
        src: 'JP 1-02'
    },
    {
        abbr: 'DOX-T',
        def: 'direct operational exchange-tactical',
        src: 'JP 1-02'
    },
    {
        abbr: 'DOY',
        def: 'day of year',
        src: 'JP 1-02'
    },
    {
        abbr: 'dp',
        def: 'parachute drift',
        src: 'JP 1-02'
    },
    {
        abbr: 'DP',
        def: 'Air Force component plans officer (staff); decisive point; Directorate for Policy Support (DIA); displaced person',
        src: '1-02'
    },
    {
        abbr: 'DPA',
        def: 'danger pay allowance; Defense Production Act',
        src: '1-02'
    },
    {
        abbr: 'DPAP',
        def: 'Defense Procurement and Acquisition Policy',
        src: '1-02'
    },
    {
        abbr: 'DPAS',
        def: 'Defense Priorities and Allocation System',
        src: '1-02'
    },
    {
        abbr: 'DPC',
        def: 'deception planning cell; Defense Planning Committee (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'DPEC',
        def: 'displaced person exploitation cell',
        src: 'JP 2-01.2'
    },
    {
        abbr: 'DPG',
        def: 'Defense Planning Guidance',
        src: '1-02'
    },
    {
        abbr: 'DPI',
        def: 'desired point of impact',
        src: 'JP 1-02'
    },
    {
        abbr: 'dpi',
        def: 'dots per inch',
        src: '1-02'
    },
    {
        abbr: 'DPICM',
        def: 'dual purpose improved conventional munitions',
        src: 'JP 1-02'
    },
    {
        abbr: 'DPKO',
        def: 'Department of Peacekeeping Operations (UN)',
        src: '1-02'
    },
    {
        abbr: 'DPLSM',
        def: 'dipulse group modem',
        src: 'JP 1-02'
    },
    {
        abbr: 'DPM',
        def: 'dissemination program manager',
        src: 'JP 1-02'
    },
    {
        abbr: 'DPMO',
        def: 'Defense Prisoner of War/Missing Personnel Office',
        src: '1-02'
    },
    {
        abbr: 'DPO',
        def: 'distribution process owner',
        src: '1-02'
    },
    {
        abbr: 'DPP',
        def: 'data patch panel; distributed production program',
        src: 'JP 1-02'
    },
    {
        abbr: 'DPPDB',
        def: 'digital point positioning database',
        src: '1-02'
    },
    {
        abbr: 'DPQ',
        def: 'defense planning questionnaire (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'DPR',
        def: 'display non-nodal routing',
        src: 'JP 1-02'
    },
    {
        abbr: 'DPRB',
        def: 'Defense Planning and Resources Board',
        src: 'JP 1-02'
    },
    {
        abbr: 'DPRE',
        def: 'displaced persons, refugees, and evacuees',
        src: 'JP 1-02'
    },
    {
        abbr: 'DPS',
        def: 'data processing system',
        src: 'JP 1-02'
    },
    {
        abbr: 'DPSC',
        def: 'Defense Personnel Support Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'DPSK',
        def: 'differential phase shift keying',
        src: 'JP 1-02'
    },
    {
        abbr: 'DR',
        def: 'dead reckoning; digital receiver; disaster relief',
        src: '1-02'
    },
    {
        abbr: 'DRB',
        def: 'Defense Resources Board',
        src: 'JP 1-02'
    },
    {
        abbr: 'DRe',
        def: 'dead reckoning error',
        src: 'JP 1-02'
    },
    {
        abbr: 'DRL',
        def: 'Bureau of Democracy, Human Rights, and Labor (DOS)',
        src: '1-02'
    },
    {
        abbr: 'DRMD',
        def: 'deployments requirements manning document',
        src: 'JP 1-02'
    },
    {
        abbr: 'DRMO',
        def: 'Defense Reutilization and Marketing Office',
        src: 'JP 1-02'
    },
    {
        abbr: 'DRMS',
        def: 'Defense Reutilization and Marketing Service; distance root-mean-square',
        src: 'JP 1-02'
    },
    {
        abbr: 'DRN',
        def: 'Disaster Response Network',
        src: '1-02'
    },
    {
        abbr: 'DRO',
        def: 'departmental requirements office; departmental requirements officer',
        src: '1-02'
    },
    {
        abbr: 'DRRS',
        def: 'Defense Readiness Reporting System',
        src: '1-02'
    },
    {
        abbr: 'DRS',
        def: 'detainee reporting system',
        src: 'JP 1-02'
    },
    {
        abbr: 'DRSN',
        def: 'Defense Red Switched Network',
        src: 'JP 6-0'
    },
    {
        abbr: 'DRT',
        def: 'dead reckoning tracer; decontamination and reconnaissance team',
        src: '1-02'
    },
    {
        abbr: 'DRTC',
        def: 'designated reporting technical control',
        src: 'JP 1-02'
    },
    {
        abbr: 'DS',
        def: 'Directorate for Information Management and Chief Information Officer (DIA); direct support; doctrine sponsor',
        src: '1-02'
    },
    {
        abbr: 'DSA',
        def: 'defense special assessment (DIA)',
        src: '1-02'
    },
    {
        abbr: 'DSAA',
        def: 'Defense Security Assistance Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSAID',
        def: 'defense sexual assault incident database',
        src: '1-02'
    },
    {
        abbr: 'DSAR',
        def: 'Defense Supply Agency regulation',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSB',
        def: 'digital in-band trunk signaling (DIBTS) signaling buffer',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSC',
        def: 'defensive space control; digital selective calling; dual-status commander',
        src: '1-02'
    },
    {
        abbr: 'DSCA',
        def: 'Defense Security Cooperation Agency; defense support of civil authorities',
        src: '1-02'
    },
    {
        abbr: 'DSCP',
        def: 'Defense Supply Center Philadelphia',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSCR',
        def: 'Defense Supply Center Richmond',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSCS',
        def: 'Defense Satellite Communications System',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSCSOC',
        def: 'Defense Satellite Communications System operations center',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSDI',
        def: 'digital simple data interface',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSE',
        def: 'direct support element',
        src: '1-02'
    },
    {
        abbr: 'DSF',
        def: 'District Stability Framework (USAID)',
        src: '1-02'
    },
    {
        abbr: 'DSG',
        def: 'digital signal generator',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSI',
        def: 'defense simulation internet',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSL',
        def: 'display switch locator (SL) routing',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSM',
        def: 'decision support matrix',
        src: '1-02'
    },
    {
        abbr: 'DSMAC',
        def: 'digital scene-matching area correlation',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSN',
        def: 'Defense Switched Network',
        src: '1-02'
    },
    {
        abbr: 'DSNET',
        def: 'Defense Secure Network',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSNET-2',
        def: 'Defense Secure Network-2',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSO',
        def: 'Defense Spectrum Organization; defensive systems officer',
        src: '1-02'
    },
    {
        abbr: 'DSOE',
        def: 'deployment schedule of events',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSP',
        def: 'Defense Satellite Program; Defense Support Program',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSPD',
        def: 'defense support to public diplomacy',
        src: '1-02'
    },
    {
        abbr: 'DSPL',
        def: 'display system programming language',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSPS',
        def: 'Director, Security Plans and Service',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSR',
        def: 'defense source registry',
        src: 'JP 2-01.2'
    },
    {
        abbr: 'DSS',
        def: 'Defense Security Service; Distribution Standard System',
        src: '1-02'
    },
    {
        abbr: 'DSS/ALOC',
        def: 'direct support system/air line of communications',
        src: '1-02'
    },
    {
        abbr: 'DSSCS',
        def: 'Defense Special Security Communications System',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSSM',
        def: 'Defense Superior Service Medal',
        src: 'JP 1-0'
    },
    {
        abbr: 'DSSO',
        def: 'data system support organization; defense systems support organization',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSSR',
        def: 'Department of State Standardized Regulation',
        src: '1-02'
    },
    {
        abbr: 'DST',
        def: 'decision support template; Defense Logistics Agency support team; deployment support team; district support team',
        src: '1-02'
    },
    {
        abbr: 'DSTP',
        def: 'Director of Strategic Target Planning',
        src: '1-02'
    },
    {
        abbr: 'DSTR',
        def: 'destroy',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSTS-G',
        def: 'Defense Information Systems Network (DISN) Satellite Transmission Services - Global',
        src: '1-02'
    },
    {
        abbr: 'DSVL',
        def: 'doppler sonar velocity log',
        src: 'JP 1-02'
    },
    {
        abbr: 'DSVT',
        def: 'digital subscriber voice terminal',
        src: 'JP 1-02'
    },
    {
        abbr: 'DT',
        def: 'Directorate for MASINT and Technical Collection (DIA)',
        src: 'JP 2-01'
    },
    {
        abbr: 'DTA',
        def: 'Defense Threat Assessment; dynamic threat assessment',
        src: '1-02'
    },
    {
        abbr: 'DTAM',
        def: 'defense terrorism awareness message',
        src: '1-02'
    },
    {
        abbr: 'DTC',
        def: 'defense transportation coordination',
        src: '1-02'
    },
    {
        abbr: 'DTCI',
        def: 'Defense Transportation Coordination Initiative',
        src: '1-02'
    },
    {
        abbr: 'DTD',
        def: 'detailed troop decontamination',
        src: '1-02'
    },
    {
        abbr: 'DTE',
        def: 'data terminal equipment; developmental test and evaluation',
        src: 'JP 1-02'
    },
    {
        abbr: 'DTED',
        def: 'digital terrain elevation data',
        src: '1-02'
    },
    {
        abbr: 'DTG',
        def: 'date-time group; digital trunk group (digital transmission group)',
        src: 'JP 1-02'
    },
    {
        abbr: 'DTIP',
        def: 'Disruptive Technology Innovations Partnership (DIA)',
        src: '1-02'
    },
    {
        abbr: 'DTL',
        def: 'designator target line',
        src: 'JP 1-02'
    },
    {
        abbr: 'DTMF',
        def: 'dual tone multi-frequency',
        src: 'JP 1-02'
    },
    {
        abbr: 'DTMR',
        def: 'defense traffic management regulation',
        src: 'JP 1-02'
    },
    {
        abbr: 'DTO',
        def: 'division transportation office; drug trafficking organization',
        src: '1-02'
    },
    {
        abbr: 'DTOC',
        def: 'division tactical operations center',
        src: 'JP 1-02'
    },
    {
        abbr: 'DTR',
        def: 'defense transportation regulation',
        src: '1-02'
    },
    {
        abbr: 'DTRA',
        def: 'Defense Threat Reduction Agency',
        src: '1-02'
    },
    {
        abbr: 'DTRACS',
        def: 'Defense Transportation Reporting and Control System',
        src: 'JP 1-02'
    },
    {
        abbr: 'DTRATCA',
        def: 'Defense Threat Reduction and Treaty Compliance Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'DTS',
        def: 'Defense Transportation System; Defense Travel System; diplomatic telecommunications service',
        src: '1-02'
    },
    {
        abbr: 'DTTS',
        def: 'Defense Transportation Tracking System',
        src: 'JP 1-02'
    },
    {
        abbr: 'DTWR',
        def: 'defense terrorism warning report',
        src: '1-02'
    },
    {
        abbr: 'DU',
        def: 'depleted uranium',
        src: '1-02'
    },
    {
        abbr: 'DUSD',
        def: 'deputy under Secretary of Defense',
        src: '1-02'
    },
    {
        abbr: 'DUSD (CI&S)',
        def: 'Deputy Under Secretary of Defense for Counterintelligence and Security',
        src: 'JP 2-01.2'
    },
    {
        abbr: 'DUSD(L&MR)',
        def: 'Deputy Under Secretary of Defense for Logistics and Materiel Readiness',
        src: 'JP 4-0'
    },
    {
        abbr: 'DUSDL',
        def: 'Deputy Under Secretary of Defense for Logistics',
        src: 'JP 1-02'
    },
    {
        abbr: 'DUSDP',
        def: 'Deputy Under Secretary of Defense for Policy',
        src: 'JP 1-02'
    },
    {
        abbr: 'DV',
        def: 'distinguished visitor',
        src: 'JP 1-02'
    },
    {
        abbr: 'DVA',
        def: 'Department of Veterans Affairs',
        src: '1-02'
    },
    {
        abbr: 'DVD',
        def: 'digital video device; digital video disc',
        src: '1-02'
    },
    {
        abbr: 'DVITS',
        def: 'Digital Video Imagery Transmission System',
        src: 'JP 1-02'
    },
    {
        abbr: 'DVOW',
        def: 'digital voice orderwire',
        src: 'JP 1-02'
    },
    {
        abbr: 'DVT',
        def: 'deployment visualization tool',
        src: 'JP 3-35'
    },
    {
        abbr: 'DWAS',
        def: 'Defense Working Capital Accounting System',
        src: '1-02'
    },
    {
        abbr: 'DWMCF',
        def: 'double-wide modular causeway ferry',
        src: 'JP 1-02'
    },
    {
        abbr: 'DWT',
        def: 'deadweight tonnage',
        src: 'JP 1-02'
    },
    {
        abbr: 'DWTS',
        def: 'Digital Wideband Transmission System',
        src: 'JP 1-02'
    },
    {
        abbr: 'DX',
        def: 'Directorate for External Relations (DIA)',
        src: '1-02'
    },
    {
        abbr: 'DZ',
        def: 'drop zone',
        src: '1-02'
    },
    {
        abbr: 'DZC',
        def: 'drop zone controller',
        src: '1-02'
    },
    {
        abbr: 'DZCO',
        def: 'drop zone control officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'DZSO',
        def: 'drop zone safety officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'DZST',
        def: 'drop zone support team',
        src: '1-02'
    },
    {
        abbr: 'DZSTL',
        def: 'drop zone support team leader',
        src: 'JP 1-02'
    },
    {
        abbr: 'E',
        def: 'total probable error',
        src: 'JP 1-02'
    },
    {
        abbr: 'E&DCP',
        def: 'evaluation and data collection plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'E&E',
        def: 'emergency and extraordinary expense authority',
        src: '1-02'
    },
    {
        abbr: 'E&EE',
        def: 'emergency and extraordinary expense',
        src: 'JP 1-02'
    },
    {
        abbr: 'E&I',
        def: 'engineering and installation',
        src: 'JP 1-02'
    },
    {
        abbr: 'E&M',
        def: 'ear and mouth; special signaling leads',
        src: 'JP 1-02'
    },
    {
        abbr: 'E-8C',
        def: 'joint surveillance, target attack radar system (JSTARS) aircraft',
        src: 'JP 1-02'
    },
    {
        abbr: 'E-ARTS',
        def: 'en route automated radar tracking system',
        src: 'JP 1-02'
    },
    {
        abbr: 'E-mail',
        def: 'electronic mail',
        src: 'JP 3-33'
    },
    {
        abbr: 'E-O TDA',
        def: 'electro-optical tactical decision aid',
        src: 'JP 1-02'
    },
    {
        abbr: 'E-Space',
        def: 'Electromagnetic-Space',
        src: '1-02'
    },
    {
        abbr: 'E-UAV',
        def: 'endurance unmanned aerial vehicle',
        src: 'JP 1-02'
    },
    {
        abbr: 'E1',
        def: 'Echelon 1',
        src: 'JP 1-02'
    },
    {
        abbr: 'E2',
        def: 'Echelon 2',
        src: 'JP 1-02'
    },
    {
        abbr: 'E3',
        def: 'Echelon 3; electromagnetic environmental effects',
        src: '1-02'
    },
    {
        abbr: 'E4',
        def: 'Echelon 4',
        src: 'JP 1-02'
    },
    {
        abbr: 'E5',
        def: 'Echelon 5',
        src: 'JP 1-02'
    },
    {
        abbr: 'EA',
        def: 'electronic attack; emergency action; evaluation agent; executive agent; executive assistant',
        src: '1-02'
    },
    {
        abbr: 'ea',
        def: 'each',
        src: 'JP 1-02'
    },
    {
        abbr: 'EAC',
        def: 'echelons above corps (ARMY); emergency action; emergency action committee',
        src: 'JP 1-02'
    },
    {
        abbr: 'EACS',
        def: 'expeditionary aeromedical evacuation crew member support',
        src: 'JP 4-02'
    },
    {
        abbr: 'EACT',
        def: 'expeditionary aeromedical evacuation coordination team',
        src: 'JP 4-02'
    },
    {
        abbr: 'EAD',
        def: 'earliest arrival date; echelons above division (Army); extended active duty',
        src: '1-02'
    },
    {
        abbr: 'EADRU',
        def: 'Euro-Atlantic disaster response unit',
        src: '1-02'
    },
    {
        abbr: 'EADS',
        def: 'Eastern Air Defense Sector',
        src: '1-02'
    },
    {
        abbr: 'EAES',
        def: 'expeditionary aeromedical evacuation squadron',
        src: '1-02'
    },
    {
        abbr: 'EAF',
        def: 'expeditionary aerospace forces; expeditionary airfield',
        src: '1-02'
    },
    {
        abbr: 'EAI',
        def: 'executive agent instruction',
        src: 'JP 3-50'
    },
    {
        abbr: 'EAM',
        def: 'emergency action message',
        src: 'JP 1-02'
    },
    {
        abbr: 'EAP',
        def: 'emergency action plan; emergency action procedures',
        src: 'JP 1-02'
    },
    {
        abbr: 'EAP-CJCS',
        def: 'emergency action procedures of the Chairman of the Joint Chiefs of Staff',
        src: 'JP 1-02'
    },
    {
        abbr: 'EAPC',
        def: 'Euro-Atlantic Partnership Council',
        src: '1-02'
    },
    {
        abbr: 'EARLY',
        def: 'evasion and recovery supplemental data report',
        src: 'JP 1-02'
    },
    {
        abbr: 'EASF',
        def: 'expeditionary aeromedical staging facility',
        src: 'JP 4-02'
    },
    {
        abbr: 'EAST',
        def: 'expeditionary aeromedical evacuation staging team',
        src: 'JP 4-02'
    },
    {
        abbr: 'EASTPAC',
        def: 'eastern Pacific Ocean',
        src: 'JP 1-02'
    },
    {
        abbr: 'EBCDIC',
        def: 'extended binary coded decimal interchange code',
        src: 'JP 1-02'
    },
    {
        abbr: 'EBS',
        def: 'environmental baseline survey',
        src: '1-02'
    },
    {
        abbr: 'EC',
        def: 'electronic combat; enemy combatant; error control; European Community',
        src: 'JP 1-02'
    },
    {
        abbr: 'ECAC',
        def: 'Electromagnetic Compatibility Analysis Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'ECB',
        def: 'echelons corps and below (Army)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ECC',
        def: 'engineer coordination cell; evacuation control center',
        src: '1-02'
    },
    {
        abbr: 'ECES',
        def: 'expeditionary civil engineer squadron',
        src: '1-02'
    },
    {
        abbr: 'ECHA',
        def: 'Executive Committee for Humanitarian Affairs (UN)',
        src: '1-02'
    },
    {
        abbr: 'ECHO',
        def: 'European Commission Directorate General for Humanitarian Aid and Civil Protection; European Community Humanitarian Aid Department',
        src: '1-02'
    },
    {
        abbr: 'ECM',
        def: 'electronic countermeasures',
        src: '1-02'
    },
    {
        abbr: 'ECN',
        def: 'electronic change notice; Minimum Essential Emergency Communications Network',
        src: 'JP 1-02'
    },
    {
        abbr: 'ECO',
        def: 'electronic combat officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'ECOSOC',
        def: 'Economic and Social Council (UN)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ECP',
        def: 'emergency command precedence; engineering change proposal; entry control point',
        src: '1-02'
    },
    {
        abbr: 'ECS',
        def: 'expeditionary combat support',
        src: '1-02'
    },
    {
        abbr: 'ECU',
        def: 'environmental control unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'ED',
        def: 'envelope delay; evaluation directive',
        src: 'JP 1-02'
    },
    {
        abbr: 'EDA',
        def: 'Economic Development Administration (DOC); excess defense articles',
        src: '1-02'
    },
    {
        abbr: 'EDC',
        def: 'estimated date of completion',
        src: 'JP 1-02'
    },
    {
        abbr: 'EDD',
        def: 'earliest delivery date',
        src: 'JP 1-02'
    },
    {
        abbr: 'EDI',
        def: 'electronic data interchange',
        src: '1-02'
    },
    {
        abbr: 'EDSS',
        def: 'equipment deployment and storage system',
        src: 'JP 1-02'
    },
    {
        abbr: 'EE',
        def: 'emergency establishment',
        src: 'JP 1-02'
    },
    {
        abbr: 'EEA',
        def: 'environmental executive agent',
        src: '1-02'
    },
    {
        abbr: 'EEBD',
        def: 'emergency escape breathing device',
        src: 'JP 1-02'
    },
    {
        abbr: 'EECT',
        def: 'end evening civil twilight',
        src: 'JP 1-02'
    },
    {
        abbr: 'EED',
        def: 'electro-explosive device; emergency-essential designation',
        src: '1-02'
    },
    {
        abbr: 'EEDAC',
        def: 'emergency essential Department of the Army civilian',
        src: 'JP 4-10'
    },
    {
        abbr: 'EEE',
        def: 'emergency and extraordinary expense',
        src: '1-02'
    },
    {
        abbr: 'EEFI',
        def: 'essential element of friendly information',
        src: '1-02'
    },
    {
        abbr: 'EEI',
        def: 'essential element of information',
        src: '1-02'
    },
    {
        abbr: 'EELV',
        def: 'evolved expendable launch vehicle',
        src: 'JP 1-02'
    },
    {
        abbr: 'EENT',
        def: 'end of evening nautical twilight',
        src: '1-02'
    },
    {
        abbr: 'EEO',
        def: 'equal employment opportunity',
        src: 'JP 1-02'
    },
    {
        abbr: 'EEPROM',
        def: 'electronic erasable programmable read-only memory',
        src: 'JP 1-02'
    },
    {
        abbr: 'EER',
        def: 'enlisted employee review; extended echo ranging',
        src: 'JP 1-02'
    },
    {
        abbr: 'EEZ',
        def: 'exclusive economic zone',
        src: '1-02'
    },
    {
        abbr: 'EFA',
        def: 'engineering field activity',
        src: 'JP 1-02'
    },
    {
        abbr: 'EFAC',
        def: 'emergency family assistance center',
        src: '1-02'
    },
    {
        abbr: 'EFD',
        def: 'engineering field division',
        src: 'JP 1-02'
    },
    {
        abbr: 'EFP',
        def: 'explosively formed projectile',
        src: '1-02'
    },
    {
        abbr: 'EFST',
        def: 'essential fire support task'
    },
    {
        abbr: 'EFT',
        def: 'electronic funds transfer',
        src: '1-02'
    },
    {
        abbr: 'EFTO',
        def: 'encrypt for transmission only',
        src: 'JP 1-02'
    },
    {
        abbr: 'EGAT',
        def: 'Bureau of Economic Growth, Agriculture, and Trade (USAID)',
        src: '1-02'
    },
    {
        abbr: 'EGM',
        def: 'Earth Gravity Model',
        src: '1-02'
    },
    {
        abbr: 'EGS',
        def: 'Earth ground station',
        src: 'JP 1-02'
    },
    {
        abbr: 'EH',
        def: 'explosive hazard',
        src: '1-02'
    },
    {
        abbr: 'EHCC',
        def: 'explosive hazards coordination cell',
        src: '1-02'
    },
    {
        abbr: 'EHDB',
        def: 'explosive hazard database',
        src: '1-02'
    },
    {
        abbr: 'EHF',
        def: 'extremely high frequency',
        src: '1-02'
    },
    {
        abbr: 'EHO',
        def: 'environmental health officer',
        src: 'JP 4-02'
    },
    {
        abbr: 'EHRA',
        def: 'environmental health risk assessment',
        src: 'JP 1-02'
    },
    {
        abbr: 'EHSA',
        def: 'environmental health site assessment',
        src: '1-02'
    },
    {
        abbr: 'EHT',
        def: 'explosive hazard team',
        src: '1-02'
    },
    {
        abbr: 'EI',
        def: 'environmental information; exercise item',
        src: '1-02'
    },
    {
        abbr: 'EIA',
        def: 'Electronic Industries Association',
        src: 'JP 1-02'
    },
    {
        abbr: 'EID',
        def: 'electrically initiated device',
        src: '1-02'
    },
    {
        abbr: 'EIS',
        def: 'Environmental Impact Statement',
        src: 'JP 1-02'
    },
    {
        abbr: 'eJMAPS',
        def: 'electronic Joint Manpower and Personnel System',
        src: '1-02'
    },
    {
        abbr: 'EJPME',
        def: 'enlisted joint professional military education',
        src: '1-02'
    },
    {
        abbr: 'ELBA',
        def: 'emergency locator beacon',
        src: 'JP 1-02'
    },
    {
        abbr: 'ELCAS',
        def: 'elevated causeway system',
        src: '1-02'
    },
    {
        abbr: 'ELCAS(M)',
        def: 'elevated causeway system (modular)',
        src: '1-02'
    },
    {
        abbr: 'ELCAS(NL)',
        def: 'elevated causeway system (Navy lighterage)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ELD',
        def: 'emitter locating data',
        src: 'JP 1-02'
    },
    {
        abbr: 'ELINT',
        def: 'electronic intelligence',
        src: '1-02'
    },
    {
        abbr: 'ELIST',
        def: 'enhanced logistics intratheater support tool',
        src: '1-02'
    },
    {
        abbr: 'ELOS',
        def: 'extended line of sight',
        src: 'JP 1-02'
    },
    {
        abbr: 'ELPP',
        def: 'equal level patch panel',
        src: 'JP 1-02'
    },
    {
        abbr: 'ELR',
        def: 'extra-long-range aircraft',
        src: 'JP 1-02'
    },
    {
        abbr: 'ELSEC',
        def: 'electronics security',
        src: 'JP 1-02'
    },
    {
        abbr: 'ELT',
        def: 'emergency locator transmitter',
        src: 'JP 1-02'
    },
    {
        abbr: 'ELV',
        def: 'expendable launch vehicle',
        src: 'JP 1-02'
    },
    {
        abbr: 'ELVA',
        def: 'emergency low-visibility approach',
        src: '1-02'
    },
    {
        abbr: 'EM',
        def: 'electromagnetic; emergency management; executive manager',
        src: '1-02'
    },
    {
        abbr: 'EMAC',
        def: 'emergency management assistance compact',
        src: '1-02'
    },
    {
        abbr: 'EMALL',
        def: 'electronic mall',
        src: 'JP 1-02'
    },
    {
        abbr: 'EMBM',
        def: 'electromagnetic battle management',
        src: '1-02'
    },
    {
        abbr: 'EMC',
        def: 'electromagnetic compatibility',
        src: '1-02'
    },
    {
        abbr: 'EMCON',
        def: 'emission control',
        src: '1-02'
    },
    {
        abbr: 'EMD',
        def: 'effective miss distance; expeditionary military information support detachment',
        src: '1-02'
    },
    {
        abbr: 'EME',
        def: 'electromagnetic environment',
        src: '1-02'
    },
    {
        abbr: 'EMEDS',
        def: 'expeditionary medical support',
        src: '1-02'
    },
    {
        abbr: 'EMF',
        def: 'expeditionary medical facility',
        src: '1-02'
    },
    {
        abbr: 'EMI',
        def: 'electromagnetic interface; electromagnetic interference',
        src: '1-02'
    },
    {
        abbr: 'EMIO',
        def: 'expanded maritime interception operations',
        src: '1-02'
    },
    {
        abbr: 'EMOE',
        def: 'electromagnetic operational environment',
        src: '1-02'
    },
    {
        abbr: 'EMP',
        def: 'electromagnetic pulse',
        src: '1-02'
    },
    {
        abbr: 'EMR hazards',
        def: 'electromagnetic radiation hazards',
        src: 'JP 1-02'
    },
    {
        abbr: 'EMS',
        def: 'electromagnetic spectrum; emergency medical services',
        src: '1-02'
    },
    {
        abbr: 'EMSC',
        def: 'electromagnetic spectrum control',
        src: '1-02'
    },
    {
        abbr: 'EMSEC',
        def: 'emanations security',
        src: 'JP 1-02'
    },
    {
        abbr: 'EMT',
        def: 'emergency medical technician; emergency medical treatment; expeditionary military information support team',
        src: '1-02'
    },
    {
        abbr: 'EMTF',
        def: 'expeditionary mobility task force',
        src: '1-02'
    },
    {
        abbr: 'EMU',
        def: 'expeditionary medical unit',
        src: '1-02'
    },
    {
        abbr: 'EMV',
        def: 'electromagnetic vulnerability',
        src: '1-02'
    },
    {
        abbr: 'ENCOM',
        def: 'engineer command (Army)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ENDEX',
        def: 'exercise termination',
        src: 'JP 1-02'
    },
    {
        abbr: 'ENL',
        def: 'enlisted',
        src: 'JP 1-02'
    },
    {
        abbr: 'ENSCE',
        def: 'enemy situation correlation element',
        src: 'JP 1-02'
    },
    {
        abbr: 'ENWGS',
        def: 'Enhanced Naval Warfare Gaming System',
        src: 'JP 1-02'
    },
    {
        abbr: 'EO',
        def: 'electro-optical; end office; equal opportunity; executive order; eyes only',
        src: '1-02'
    },
    {
        abbr: 'EO-IR',
        def: 'electro-optical-infrared',
        src: '1-02'
    },
    {
        abbr: 'EO-IR CM',
        def: 'electro-optical-infrared countermeasure',
        src: '1-02'
    },
    {
        abbr: 'EOB',
        def: 'electromagnetic order of battle; electronic order of battle; enemy order of battle',
        src: '1-02'
    },
    {
        abbr: 'EOC',
        def: 'early operational capability; emergency operating center; emergency operations center',
        src: '1-02'
    },
    {
        abbr: 'EOCA',
        def: 'explosive ordnance clearance agent',
        src: '1-02'
    },
    {
        abbr: 'EODMU-1',
        def: 'explosive ordnance disposal mobile unit one ',
        src: '1-02'
    },
    {
        abbr: 'EOI',
        def: 'electro-optic(al) imagery',
        src: 'JP 1-02'
    },
    {
        abbr: 'EOL',
        def: 'end of link',
        src: 'JP 1-02'
    },
    {
        abbr: 'EOM',
        def: 'end of message',
        src: 'JP 1-02'
    },
    {
        abbr: 'EOP',
        def: 'emergency operating procedures',
        src: 'JP 1-02'
    },
    {
        abbr: 'EOW',
        def: 'engineering orderwire',
        src: 'JP 1-02'
    },
    {
        abbr: 'EP',
        def: 'electronic protection; emergency preparedness; emergency procedures; excess property; execution planning',
        src: '1-02'
    },
    {
        abbr: 'EPA',
        def: 'Environmental Protection Agency; evasion plan of action',
        src: 'JP 1-02'
    },
    {
        abbr: 'EPBX',
        def: 'electronic private branch exchange',
        src: 'JP 1-02'
    },
    {
        abbr: 'EPC',
        def: 'Emergency Procurement Committee',
        src: 'JP 4-10'
    },
    {
        abbr: 'EPF',
        def: 'enhanced palletized load system (PLS) flatrack',
        src: 'JP 1-02'
    },
    {
        abbr: 'EPH',
        def: 'emergency planning handbook',
        src: 'JP 1-02'
    },
    {
        abbr: 'EPIC',
        def: 'El Paso Intelligence Center',
        src: '1-02'
    },
    {
        abbr: 'EPIRB',
        def: 'emergency position-indicating radio beacon',
        src: 'JP 1-02'
    },
    {
        abbr: 'EPLO',
        def: 'emergency preparedness liaison officer',
        src: '1-02'
    },
    {
        abbr: 'EPROM',
        def: 'erasable programmable read-only memory',
        src: 'JP 1-02'
    },
    {
        abbr: 'EPU',
        def: 'expeditionary port unit',
        src: '1-02'
    },
    {
        abbr: 'EPW',
        def: 'enemy prisoner of war',
        src: '1-02'
    },
    {
        abbr: 'EPW/CI',
        def: 'enemy prisoner of war/civilian internee',
        src: 'JP 1-02'
    },
    {
        abbr: 'ERC',
        def: 'emergency relief coordinator; exercise related construction',
        src: '1-02'
    },
    {
        abbr: 'ERDC',
        def: 'Engineer Research and Development Center',
        src: '1-02'
    },
    {
        abbr: 'ERG',
        def: 'Emergency Response Guidebook',
        src: '1-02'
    },
    {
        abbr: 'ERGM',
        def: 'extended range guided munitions',
        src: 'JP 1-02'
    },
    {
        abbr: 'ERO',
        def: 'engine running on or offload',
        src: 'JP 1-02'
    },
    {
        abbr: 'ERPSS',
        def: 'En Route Patient Staging System',
        src: '1-02'
    },
    {
        abbr: 'ERRO',
        def: 'Emergency Response and Recovery Office',
        src: 'JP 1-02'
    },
    {
        abbr: 'ERSD',
        def: 'estimated return to service date',
        src: 'JP 1-02'
    },
    {
        abbr: 'ERT',
        def: 'emergency response team (FEMA); engineer reconnaissance team',
        src: 'JP 1-02'
    },
    {
        abbr: 'ERT-A',
        def: 'emergency response team - advance element',
        src: 'JP 1-02'
    },
    {
        abbr: 'ERU',
        def: 'emergency response unit',
        src: '1-02'
    },
    {
        abbr: 'ERW',
        def: 'explosive remnants of war',
        src: '1-02'
    },
    {
        abbr: 'ES',
        def: 'electronic warfare support; executive secretariat',
        src: '1-02'
    },
    {
        abbr: 'ESAC',
        def: 'Electromagnetic-Space Analysis Center (NSA)',
        src: '1-02'
    },
    {
        abbr: 'ESB',
        def: 'engineer support battalion',
        src: '1-02'
    },
    {
        abbr: 'ESC',
        def: 'Electronics Systems Center; expeditionary sustainment command',
        src: '1-02'
    },
    {
        abbr: 'ESF',
        def: 'Economic Support Fund; emergency support function',
        src: '1-02'
    },
    {
        abbr: 'ESG',
        def: 'executive steering group; expeditionary strike group',
        src: '1-02'
    },
    {
        abbr: 'ESGN',
        def: 'electrically suspended gyro navigation',
        src: 'JP 1-02'
    },
    {
        abbr: 'ESI',
        def: 'extremely sensitive information',
        src: 'JP 1-02'
    },
    {
        abbr: 'ESK',
        def: 'electronic staff weather officer kit',
        src: 'JP 1-02'
    },
    {
        abbr: 'ESM',
        def: 'expeditionary site mapping',
        src: 'JP 3-34'
    },
    {
        abbr: 'ESO',
        def: 'embarkation staff officer; environmental science officer; Expeditionary Support Organization (DFAS)',
        src: '1-02'
    },
    {
        abbr: 'ESOC',
        def: 'Emergency Supply Operations Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'ESOH',
        def: 'environmental, safety, and occupational health',
        src: '1-02'
    },
    {
        abbr: 'ESORTS',
        def: 'Enhanced Status of Resources and Training System',
        src: '1-02'
    },
    {
        abbr: 'ESP',
        def: 'engineer support plan',
        src: '1-02'
    },
    {
        abbr: 'ESR',
        def: 'external supported recovery',
        src: '1-02'
    },
    {
        abbr: 'EST',
        def: 'embarked security team; emergency service team; emergency support team (FEMA); en route support team',
        src: '1-02'
    },
    {
        abbr: 'ET',
        def: 'electronics technician',
        src: '1-02'
    },
    {
        abbr: 'ETA',
        def: 'estimated time of arrival',
        src: 'JP 1-02'
    },
    {
        abbr: 'ETAC',
        def: 'emergency tactical air control',
        src: '1-02'
    },
    {
        abbr: 'ETD',
        def: 'estimated time of departure',
        src: 'JP 1-02'
    },
    {
        abbr: 'ETF',
        def: 'electronic target folder',
        src: '1-02'
    },
    {
        abbr: 'ETI',
        def: 'estimated time of intercept',
        src: 'JP 1-02'
    },
    {
        abbr: 'ETIC',
        def: 'estimated time for completion; estimated time in commission',
        src: 'JP 1-02'
    },
    {
        abbr: 'ETM',
        def: 'electronic transmission; essential tasks matrix',
        src: '1-02'
    },
    {
        abbr: 'ETO',
        def: 'Emergency Transportation Operations (DOT)',
        src: '1-02'
    },
    {
        abbr: 'ETPL',
        def: 'endorsed TEMPEST products list',
        src: 'JP 1-02'
    },
    {
        abbr: 'ETR',
        def: 'export traffic release',
        src: 'JP 1-02'
    },
    {
        abbr: 'ETS',
        def: 'European telephone system',
        src: 'JP 1-02'
    },
    {
        abbr: 'ETSS',
        def: 'extended training service specialist',
        src: 'JP 1-02'
    },
    {
        abbr: 'ETX',
        def: 'end of text',
        src: 'JP 1-02'
    },
    {
        abbr: 'EU',
        def: 'European Union',
        src: '1-02'
    },
    {
        abbr: 'EUB',
        def: 'essential user bypass',
        src: 'JP 1-02'
    },
    {
        abbr: 'EURV',
        def: 'essential user rekeying variable',
        src: 'JP 1-02'
    },
    {
        abbr: 'EUSA',
        def: 'Eighth US Army',
        src: 'JP 1-02'
    },
    {
        abbr: 'EUSC',
        def: 'effective United States control; effective United States controlled',
        src: '1-02'
    },
    {
        abbr: 'EUSCS',
        def: 'effective United States-controlled ships',
        src: '1-02'
    },
    {
        abbr: 'EVC',
        def: 'evasion chart',
        src: '1-02'
    },
    {
        abbr: 'EVE',
        def: 'equal value exchange',
        src: '1-02'
    },
    {
        abbr: 'EW',
        def: 'early warning; electronic warfare',
        src: '1-02'
    },
    {
        abbr: 'EW/GCI',
        def: 'early warning/ground-controlled intercept',
        src: 'JP 1-02'
    },
    {
        abbr: 'EWC',
        def: 'electronic warfare cell; electronic warfare coordinator',
        src: '1-02'
    },
    {
        abbr: 'EWCA',
        def: 'electronic warfare control authority',
        src: '1-02'
    },
    {
        abbr: 'EWCC',
        def: 'electronic warfare coordination cell',
        src: '1-02'
    },
    {
        abbr: 'EWCS',
        def: 'electronic warfare control ship',
        src: 'JP 1-02'
    },
    {
        abbr: 'EWD',
        def: 'Electronic Warfare Directorate (USSTRATCOM)',
        src: '1-02'
    },
    {
        abbr: 'EWE',
        def: 'electronic warfare element',
        src: '1-02'
    },
    {
        abbr: 'EWG',
        def: 'electronic warfare group',
        src: '1-02'
    },
    {
        abbr: 'EWIR',
        def: 'electronic warfare integrated reprogramming',
        src: 'JP 1-02'
    },
    {
        abbr: 'EWO',
        def: 'electronic warfare officer',
        src: '1-02'
    },
    {
        abbr: 'EXCIMS',
        def: 'Executive Council for Modeling and Simulations',
        src: 'JP 1-02'
    },
    {
        abbr: 'ExCom',
        def: 'executive committee',
        src: 'JP 1-02'
    },
    {
        abbr: 'EXDIR',
        def: 'Executive Director (CIA)',
        src: 'JP 1-02'
    },
    {
        abbr: 'EXDIR/ICA',
        def: 'Executive Director for Intelligence Community Affairs (USG)',
        src: 'JP 1-02'
    },
    {
        abbr: 'EXECSEC',
        def: 'executive secretary',
        src: 'JP 3-26'
    },
    {
        abbr: 'EXER',
        def: 'exercise',
        src: 'JP 1-02'
    },
    {
        abbr: 'EXORD',
        def: 'execute order',
        src: '1-02'
    },
    {
        abbr: 'EXPLAN',
        def: 'exercise plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'EZ',
        def: 'exchange zone',
        src: '1-02'
    },
    {
        abbr: 'EZCO',
        def: 'extraction zone control officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'EZM',
        def: 'engagement zone manager',
        src: 'JP 3-09'
    },
    {
        abbr: 'F',
        def: 'Fahrenheit; flare patterns; flash',
        src: '1-02'
    },
    {
        abbr: 'F&ES',
        def: 'fire and emergency services',
        src: 'JP 3-34'
    },
    {
        abbr: 'F/AD',
        def: 'force/activity designator',
        src: '1-02'
    },
    {
        abbr: 'F/V',
        def: 'fishing vessel',
        src: 'JP 1-02'
    },
    {
        abbr: 'F2T2EA',
        def: 'find, fix, track, target, engage, and assess',
        src: '1-02'
    },
    {
        abbr: 'F3EAD',
        def: 'find, fix, finish, exploit, analyze, and disseminate',
        src: '1-02'
    },
    {
        abbr: 'FA',
        def: 'feasibility assessment; field artillery',
        src: 'JP 1-02'
    },
    {
        abbr: 'FAA',
        def: 'Federal Aviation Administration (DOT); Foreign Assistance Act',
        src: '1-02'
    },
    {
        abbr: 'FAAO',
        def: 'Federal Aviation Administration order',
        src: '1-02'
    },
    {
        abbr: 'FAAR',
        def: 'facilitated after-action review',
        src: 'JP 1-02'
    },
    {
        abbr: 'FAC',
        def: 'forward air controller',
        src: 'JP 1-02'
    },
    {
        abbr: 'FAC(A)',
        def: 'forward air controller (airborne)',
        src: '1-02'
    },
    {
        abbr: 'FACE',
        def: 'forward aviation combat engineering',
        src: '1-02'
    },
    {
        abbr: 'FACSFAC',
        def: 'fleet area control and surveillance facility',
        src: 'JP 1-02'
    },
    {
        abbr: 'FACT',
        def: 'field advance civilian team; field assessment and coordination team',
        src: '1-02'
    },
    {
        abbr: 'FAD',
        def: 'feasible arrival date',
        src: '1-02'
    },
    {
        abbr: 'FAE',
        def: 'fuel air explosive',
        src: 'JP 1-02'
    },
    {
        abbr: 'FAH',
        def: 'foreign affairs handbook',
        src: '1-02'
    },
    {
        abbr: 'FALD',
        def: 'Field Administration and Logistics Division',
        src: 'JP 1-02'
    },
    {
        abbr: 'FALOP',
        def: 'Forward Area Limited Observing Program',
        src: '1-02'
    },
    {
        abbr: 'FAM',
        def: 'functional area manager',
        src: 'JP 1-02'
    },
    {
        abbr: 'FAMP',
        def: 'forward area minefield planning',
        src: 'JP 1-02'
    },
    {
        abbr: 'FAO',
        def: 'Food and Agriculture Organization (UN); foreign area officer',
        src: '1-02'
    },
    {
        abbr: 'FAPES',
        def: 'Force Augmentation Planning and Execution System',
        src: 'JP 1-02'
    },
    {
        abbr: 'FAR',
        def: 'Federal Acquisition Regulation; Federal Aviation Regulation; formal assessment report',
        src: '1-02'
    },
    {
        abbr: 'FARC',
        def: 'Revolutionary Armed Forces of Colombia',
        src: 'JP 3-07.4'
    },
    {
        abbr: 'FARP',
        def: 'forward arming and refueling point',
        src: '1-02'
    },
    {
        abbr: 'FAS',
        def: 'Foreign Agricultural Service (USDA); frequency assignment subcommittee; fueling at sea; functional account symbol',
        src: '1-02'
    },
    {
        abbr: 'FASCAM',
        def: 'family of scatterable mines',
        src: 'JP 1-02'
    },
    {
        abbr: 'FAST',
        def: 'field assessment surveillance team; fleet antiterrorism security team',
        src: 'JP 1-02'
    },
    {
        abbr: 'FAX',
        def: 'facsimile',
        src: '1-02'
    },
    {
        abbr: 'FB',
        def: 'forward boundary',
        src: '1-02'
    },
    {
        abbr: 'FBI',
        def: 'Federal Bureau of Investigation (DOJ)',
        src: '1-02'
    },
    {
        abbr: 'FBIS',
        def: 'Foreign Broadcast Information Service',
        src: 'JP 1-02'
    },
    {
        abbr: 'FBO',
        def: 'faith-based organization',
        src: 'JP 3-28'
    },
    {
        abbr: 'FC',
        def: 'field circular; final coordination; fires cell (Army); floating causeway; floating craft; force commander',
        src: '1-02'
    },
    {
        abbr: 'FCA',
        def: 'Foreign Claims Act; functional configuration audit',
        src: '1-02'
    },
    {
        abbr: 'FCC',
        def: 'Federal Communications Commission; Federal coordinating center; functional combatant commander',
        src: '1-02'
    },
    {
        abbr: 'FCE',
        def: 'forward command element',
        src: 'JP 1-02'
    },
    {
        abbr: 'FCG',
        def: 'foreign clearance guide',
        src: 'JP 1-02'
    },
    {
        abbr: 'FCM',
        def: 'foreign consequence management',
        src: '1-02'
    },
    {
        abbr: 'FCO',
        def: 'federal coordinating officer',
        src: '1-02'
    },
    {
        abbr: 'FCP',
        def: 'fire control party',
        src: 'JP 1-02'
    },
    {
        abbr: 'FCT',
        def: 'firepower control team',
        src: 'JP 1-02'
    },
    {
        abbr: 'FD',
        def: 'first draft; from temporary duty',
        src: '1-02'
    },
    {
        abbr: 'FDA',
        def: 'Food and Drug Administration',
        src: '1-02'
    },
    {
        abbr: 'FDBM',
        def: 'functional database manager',
        src: 'JP 1-02'
    },
    {
        abbr: 'FDC',
        def: 'fire direction center',
        src: '1-02'
    },
    {
        abbr: 'FDESC',
        def: 'force description',
        src: 'JP 1-02'
    },
    {
        abbr: 'FDL',
        def: 'fast deployment logistics',
        src: 'JP 1-02'
    },
    {
        abbr: 'FDLP',
        def: 'flight deck landing practice',
        src: 'JP 1-02'
    },
    {
        abbr: 'FDM',
        def: 'frequency division multiplexing',
        src: 'JP 1-02'
    },
    {
        abbr: 'FDO',
        def: 'fire direction officer; flexible deterrent option; flight deck officer; foreign disclosure officer',
        src: '1-02'
    },
    {
        abbr: 'FDP',
        def: 'forward distribution point',
        src: '1-02'
    },
    {
        abbr: 'FDPMU',
        def: 'forward-deployable preventive medicine unit',
        src: '1-02'
    },
    {
        abbr: 'FDR',
        def: 'foreign disaster relief',
        src: '1-02'
    },
    {
        abbr: 'FDR/FA',
        def: 'flight data recorder/fault analyzer',
        src: 'JP 1-02'
    },
    {
        abbr: 'FDS',
        def: 'fault detection system',
        src: 'JP 1-02'
    },
    {
        abbr: 'FDSL',
        def: 'fixed directory subscriber list',
        src: 'JP 1-02'
    },
    {
        abbr: 'FDSS',
        def: 'fault detection subsystem',
        src: 'JP 1-02'
    },
    {
        abbr: 'FDSSS',
        def: 'flight deck status and signaling system',
        src: 'JP 1-02'
    },
    {
        abbr: 'FDT',
        def: 'forward distribution team',
        src: 'JP 4-02'
    },
    {
        abbr: 'FDUL',
        def: 'fixed directory unit list',
        src: 'JP 1-02'
    },
    {
        abbr: 'FDX',
        def: 'full duplex',
        src: 'JP 1-02'
    },
    {
        abbr: 'FE',
        def: 'facilities engineering',
        src: 'JP 1-02'
    },
    {
        abbr: 'FEA',
        def: 'front-end analysis',
        src: '1-02'
    },
    {
        abbr: 'FEBA',
        def: 'forward edge of the battle area',
        src: 'JP 1-02'
    },
    {
        abbr: 'FEC',
        def: 'facilities engineering command; forward error correction',
        src: '1-02'
    },
    {
        abbr: 'FECC',
        def: 'fires and effects coordination cell',
        src: 'JP 3-01'
    },
    {
        abbr: 'FED-STD',
        def: 'federal standard',
        src: 'JP 1-02'
    },
    {
        abbr: 'FEI',
        def: 'forensic-enabled intelligence',
        src: '1-02'
    },
    {
        abbr: 'FEK',
        def: 'frequency exchange keying',
        src: 'JP 1-02'
    },
    {
        abbr: 'FEMA',
        def: 'Federal Emergency Management Agency (DHS)',
        src: '1-02'
    },
    {
        abbr: 'FEP',
        def: 'fleet satellite (FLTSAT) extremely high frequency (EHF) package; foreign excess property',
        src: '1-02'
    },
    {
        abbr: 'FEPP',
        def: 'federal excess personal property; foreign excess personal property',
        src: '1-02'
    },
    {
        abbr: 'FES',
        def: 'fire emergency services',
        src: '1-02'
    },
    {
        abbr: 'FEST',
        def: 'foreign emergency support team; forward engineer support team',
        src: '1-02'
    },
    {
        abbr: 'FET',
        def: 'facility engineer team',
        src: 'JP 3-34'
    },
    {
        abbr: 'FEU',
        def: 'forty-foot equivalent unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'FEZ',
        def: 'fighter engagement zone',
        src: '1-02'
    },
    {
        abbr: 'FF',
        def: 'navy fast frigate',
        src: 'JP 1-02'
    },
    {
        abbr: 'Ff',
        def: 'fatigue correction factor',
        src: 'JP 1-02'
    },
    {
        abbr: 'FFA',
        def: 'free-fire area',
        src: 'JP 1-02'
    },
    {
        abbr: 'FFC',
        def: 'force fires coordinator',
        src: '1-02'
    },
    {
        abbr: 'FFCC',
        def: 'flight ferry control center; force fires coordination center (USMC)',
        src: '1-02'
    },
    {
        abbr: 'FFD',
        def: 'foundation feature data',
        src: 'JP 1-02'
    },
    {
        abbr: 'FFE',
        def: 'field force engineering; flame field expedients',
        src: '1-02'
    },
    {
        abbr: 'FFG',
        def: 'guided missile frigate',
        src: 'JP 1-02'
    },
    {
        abbr: 'FFH',
        def: 'fast frequency hopping',
        src: 'JP 1-02'
    },
    {
        abbr: 'FFH-net',
        def: 'fast-frequency-hopping net',
        src: 'JP 1-02'
    },
    {
        abbr: 'FFHT-net',
        def: 'fast-frequency-hopping training net',
        src: 'JP 1-02'
    },
    {
        abbr: 'FFIR',
        def: 'friendly force information requirement',
        src: '1-02'
    },
    {
        abbr: 'FFP',
        def: 'Food for Peace; fresh frozen plasma; Office of Food for Peace (DOS) ',
        src: '1-02'
    },
    {
        abbr: 'FFT',
        def: 'friendly force tracking',
        src: '1-02'
    },
    {
        abbr: 'FFTU',
        def: 'forward freight terminal unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'FG',
        def: 'fighter group',
        src: 'JP 1-02'
    },
    {
        abbr: 'FGMDSS',
        def: 'Future Global Maritime Distress and Safety System',
        src: 'JP 1-02'
    },
    {
        abbr: 'FGS',
        def: 'final governing standard; Force Generation Service (UN)',
        src: '1-02'
    },
    {
        abbr: 'FH',
        def: 'fleet hospital',
        src: 'JP 1-02'
    },
    {
        abbr: 'FHA',
        def: 'Bureau for Food and Humanitarian Assistance; foreign humanitarian assistance',
        src: '1-02'
    },
    {
        abbr: 'FHC',
        def: 'family help center',
        src: 'JP 4-06'
    },
    {
        abbr: 'FHP',
        def: 'force health protection',
        src: '1-02'
    },
    {
        abbr: 'FHWA',
        def: 'Federal Highway Administration (DOT)',
        src: '1-02'
    },
    {
        abbr: 'FI',
        def: 'foreign intelligence',
        src: 'JP 3-28'
    },
    {
        abbr: 'FIA',
        def: 'functional interoperability architecture',
        src: 'JP 1-02'
    },
    {
        abbr: 'FIC',
        def: 'force indicator code',
        src: 'JP 1-02'
    },
    {
        abbr: 'FID',
        def: 'foreign internal defense',
        src: '1-02'
    },
    {
        abbr: 'FIDAF',
        def: 'foreign internal defense augmentation force',
        src: 'JP 1-02'
    },
    {
        abbr: 'FIE',
        def: 'foreign intelligence entity',
        src: '1-02'
    },
    {
        abbr: 'FIFO',
        def: 'first-in-first-out',
        src: 'JP 1-02'
    },
    {
        abbr: 'FinCEN',
        def: 'Financial Crimes Enforcement Network',
        src: '1-02'
    },
    {
        abbr: 'FIR',
        def: 'first-impressions report; flight information region',
        src: 'JP 1-02'
    },
    {
        abbr: 'FIRCAP',
        def: 'foreign intelligence requirements capabilities and priorities',
        src: 'JP 1-02'
    },
    {
        abbr: 'FIS',
        def: 'flight information service; Foreign Intelligence Service',
        src: 'JP 1-02'
    },
    {
        abbr: 'FISC',
        def: 'fleet and industrial supply center',
        src: 'JP 1-02'
    },
    {
        abbr: 'FISINT',
        def: 'foreign instrumentation signals intelligence',
        src: '1-02'
    },
    {
        abbr: 'FISS',
        def: 'foreign intelligence and security services',
        src: '1-02'
    },
    {
        abbr: 'FIST',
        def: 'fire support team; fleet imagery support terminal; fleet intelligence support team',
        src: '1-02'
    },
    {
        abbr: 'FIWC',
        def: 'fleet information warfare center',
        src: 'JP 1-02'
    },
    {
        abbr: 'FIXe',
        def: 'navigational fix error',
        src: 'JP 1-02'
    },
    {
        abbr: 'FLAR',
        def: 'forward-looking airborne radar',
        src: 'JP 1-02'
    },
    {
        abbr: 'FLC',
        def: 'fleet logistics center',
        src: '1-02'
    },
    {
        abbr: 'FLENUMMETOCCEN',
        def: 'Fleet Numerical Meteorology and Oceanography Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'FLENUMMETOCDET',
        def: 'Fleet Numerical Meteorological and Oceanographic Detachment',
        src: 'JP 1-02'
    },
    {
        abbr: 'FLETC',
        def: 'Federal Law Enforcement Training Center (DHS)',
        src: '1-02'
    },
    {
        abbr: 'FLIP',
        def: 'flight information publication; flight instruction procedures',
        src: 'JP 1-02'
    },
    {
        abbr: 'FLIR',
        def: 'forward-looking infrared',
        src: 'JP 1-02'
    },
    {
        abbr: 'FLITE',
        def: 'federal legal information through electronics',
        src: 'JP 1-04'
    },
    {
        abbr: 'FLO/FLO',
        def: 'float-on/float-off',
        src: '1-02'
    },
    {
        abbr: 'FLOLS',
        def: 'fresnel lens optical landing system',
        src: 'JP 1-02'
    },
    {
        abbr: 'FLOT',
        def: 'forward line of own troops',
        src: '1-02'
    },
    {
        abbr: 'FLP',
        def: 'force level planning',
        src: 'JP 1-02'
    },
    {
        abbr: 'FLS',
        def: 'forward logistic site',
        src: '1-02'
    },
    {
        abbr: 'FLSG',
        def: 'force logistic support group',
        src: 'JP 1-02'
    },
    {
        abbr: 'FLTCYBERCOM',
        def: 'Fleet Cyber Command (Navy)',
        src: '1-02'
    },
    {
        abbr: 'FLTSAT',
        def: 'fleet satellite',
        src: '1-02'
    },
    {
        abbr: 'FLTSATCOM',
        def: 'fleet satellite communications',
        src: 'JP 1-02'
    },
    {
        abbr: 'FM',
        def: 'field manual (Army); financial management; flare multiunit;  force module; frequency management; frequency modulation; functional manager',
        src: '1-02'
    },
    {
        abbr: 'FM/A',
        def: 'functional manager for analysis',
        src: '1-02'
    },
    {
        abbr: 'FMA-net',
        def: 'frequency management A-net',
        src: 'JP 1-02'
    },
    {
        abbr: 'FMAS',
        def: 'foreign media analysis subsystem',
        src: 'JP 1-02'
    },
    {
        abbr: 'FMAT',
        def: 'financial management augmentation team',
        src: 'JP 1-06'
    },
    {
        abbr: 'FMC',
        def: 'force movement characteristics; full mission-capable',
        src: 'JP 1-02'
    },
    {
        abbr: 'FMCH',
        def: 'fleet multichannel',
        src: 'JP 1-02'
    },
    {
        abbr: 'FMCR',
        def: 'Fleet Marine Corps Reserve',
        src: 'JP 1-02'
    },
    {
        abbr: 'FMF',
        def: 'Fleet Marine Force; foreign military financing',
        src: '1-02'
    },
    {
        abbr: 'FMFP',
        def: 'foreign military financing program',
        src: 'JP 1-02'
    },
    {
        abbr: 'FMI',
        def: 'field manual-interim',
        src: 'JP 3-15'
    },
    {
        abbr: 'FMID',
        def: 'force module identifier',
        src: 'JP 1-02'
    },
    {
        abbr: 'FMO',
        def: 'frequency management office; functional manager office',
        src: '1-02'
    },
    {
        abbr: 'FMP',
        def: 'foreign materiel program',
        src: '1-02'
    },
    {
        abbr: 'FMS',
        def: 'force module subsystem; foreign military sales',
        src: '1-02'
    },
    {
        abbr: 'FMSC',
        def: 'frequency management sub-committee',
        src: 'JP 1-02'
    },
    {
        abbr: 'FMSCA',
        def: 'Federal Motor Carrier Safety Administration',
        src: 'JP 3-07.4'
    },
    {
        abbr: 'FMT-net',
        def: 'frequency management training net',
        src: 'JP 1-02'
    },
    {
        abbr: 'FMV',
        def: 'full motion video',
        src: '1-02'
    },
    {
        abbr: 'FN',
        def: 'foreign nation',
        src: '1-02'
    },
    {
        abbr: 'FNMOC',
        def: 'Fleet Numerical Meteorology and Oceanography Center',
        src: '1-02'
    },
    {
        abbr: 'FNMOD',
        def: 'Fleet Numerical Meteorological and Oceanographic Detachment',
        src: 'JP 2-03'
    },
    {
        abbr: 'FNOC',
        def: 'Fleet Numerical Oceanographic Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'FNS',
        def: 'foreign nation support',
        src: '1-02'
    },
    {
        abbr: 'FO',
        def: 'fiber optic; flash override; forward observer',
        src: 'JP 1-02'
    },
    {
        abbr: 'FOB',
        def: 'forward operating base',
        src: '1-02'
    },
    {
        abbr: 'FOC',
        def: 'full operational capability; future operations cell',
        src: 'JP 1-02'
    },
    {
        abbr: 'FOD',
        def: 'field operations division; foreign object damage',
        src: '1-02'
    },
    {
        abbr: 'FOFW',
        def: 'fiber optic field wire',
        src: 'JP 1-02'
    },
    {
        abbr: 'FOG',
        def: 'Field Operations Guide for Disaster Assessment and Response',
        src: '1-02'
    },
    {
        abbr: 'FOI',
        def: 'fault detection isolation',
        src: 'JP 1-02'
    },
    {
        abbr: 'FOIA',
        def: 'Freedom of Information Act',
        src: 'JP 1-02'
    },
    {
        abbr: 'FOIU',
        def: 'fiber optic interface unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'FOL',
        def: 'fiber optic link',
        src: '1-02'
    },
    {
        abbr: 'FON',
        def: 'freedom of navigation (operations)',
        src: 'JP 1-02'
    },
    {
        abbr: 'FORCE',
        def: 'fuels operational readiness capability equipment (Air Force)',
        src: '1-02'
    },
    {
        abbr: 'FORMICA',
        def: 'foreign military intelligence collection activities',
        src: '1-02'
    },
    {
        abbr: 'FORSCOM',
        def: 'United States Army Forces Command',
        src: '1-02'
    },
    {
        abbr: 'FORSTAT',
        def: 'force status and identity report',
        src: 'JP 1-02'
    },
    {
        abbr: 'FOS',
        def: 'full operational status',
        src: 'JP 1-02'
    },
    {
        abbr: 'FOT',
        def: 'follow-on operational test',
        src: 'JP 1-02'
    },
    {
        abbr: 'FOUO',
        def: 'for official use only',
        src: 'JP 1-02'
    },
    {
        abbr: 'FP',
        def: 'force protection; frequency panel',
        src: '1-02'
    },
    {
        abbr: 'FPA',
        def: 'foreign policy advisor',
        src: '1-02'
    },
    {
        abbr: 'FPC',
        def: 'final planning conference; future plans cell',
        src: '1-02'
    },
    {
        abbr: 'FPCON',
        def: 'force protection condition',
        src: '1-02'
    },
    {
        abbr: 'FPD',
        def: 'force protection detachment; foreign post differential',
        src: '1-02'
    },
    {
        abbr: 'FPF',
        def: 'final protective fire'
    },
    {
        abbr: 'FPM',
        def: 'Federal personnel manual',
        src: 'JP 1-02'
    },
    {
        abbr: 'FPO',
        def: 'fleet post office',
        src: 'JP 1-02'
    },
    {
        abbr: 'FPOC',
        def: 'focal point operations center',
        src: 'JP 3-05.1'
    },
    {
        abbr: 'FPS',
        def: 'Federal Protective Service; force protection source',
        src: '1-02'
    },
    {
        abbr: 'FPTAS',
        def: 'flight path threat analysis simulation',
        src: '1-02'
    },
    {
        abbr: 'FPTS',
        def: 'forward propagation by tropospheric scatter',
        src: 'JP 1-02'
    },
    {
        abbr: 'FPWG',
        def: 'force protection working group',
        src: '1-02'
    },
    {
        abbr: 'FR',
        def: 'final report; frequency response',
        src: 'JP 1-02'
    },
    {
        abbr: 'FRA',
        def: 'Federal Railroad Administration (DOT)',
        src: '1-02'
    },
    {
        abbr: 'FRAG',
        def: 'fragmentation code',
        src: 'JP 1-02'
    },
    {
        abbr: 'FRAGORD',
        def: 'fragmentary order',
        src: '1-02'
    },
    {
        abbr: 'FRC',
        def: 'federal resource coordinator; forward resuscitative care',
        src: 'JP 1-02'
    },
    {
        abbr: 'FRD',
        def: 'formerly restricted data',
        src: 'JP 1-02'
    },
    {
        abbr: 'FREQ',
        def: 'frequency',
        src: 'JP 1-02'
    },
    {
        abbr: 'FRERP',
        def: 'Federal Radiological Emergency Response Plan',
        src: 'JP 3-08'
    },
    {
        abbr: 'FRF',
        def: 'fragment retention film',
        src: 'JP 3-07.2'
    },
    {
        abbr: 'FRMAC',
        def: 'Federal Radiological Monitoring and Assessment Center (DOE)',
        src: 'JP 1-02'
    },
    {
        abbr: 'FRN',
        def: 'force requirement number',
        src: '1-02'
    },
    {
        abbr: 'FRO',
        def: 'flexible response option',
        src: '1-02'
    },
    {
        abbr: 'FROG',
        def: 'free rocket over ground',
        src: 'JP 1-02'
    },
    {
        abbr: 'FRP',
        def: 'Federal response plan (USG)',
        src: 'JP 3-08'
    },
    {
        abbr: 'FRRS',
        def: 'frequency resource record system',
        src: 'JP 1-02'
    },
    {
        abbr: 'FRTP',
        def: 'fleet response training plan',
        src: '1-02'
    },
    {
        abbr: 'FS',
        def: 'fighter squadron; file separator; file server; flare single-unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'fs',
        def: 'search radius safety factor',
        src: 'JP 1-02'
    },
    {
        abbr: 'FSA',
        def: 'fire support area',
        src: '1-02'
    },
    {
        abbr: 'FSB',
        def: 'fire support base; forward staging base; forward support base; forward support battalion',
        src: 'JP 1-02'
    },
    {
        abbr: 'FSC',
        def: 'fire support cell; fire support coordinator (USMC)',
        src: '1-02'
    },
    {
        abbr: 'FSCC',
        def: 'fire support coordination center (USMC)',
        src: '1-02'
    },
    {
        abbr: 'FSCL',
        def: 'fire support coordination line',
        src: '1-02'
    },
    {
        abbr: 'FSCM',
        def: 'fire support coordination measure',
        src: '1-02'
    },
    {
        abbr: 'FSCOORD',
        def: 'fire support coordinator (Army)',
        src: '1-02'
    },
    {
        abbr: 'FSE',
        def: 'fire support element',
        src: '1-02'
    },
    {
        abbr: 'FSEM',
        def: 'fire support execution matrix'
    },
    {
        abbr: 'FSF',
        def: 'foreign security forces',
        src: '1-02'
    },
    {
        abbr: 'FSI',
        def: 'Foreign Service Institute',
        src: '1-02'
    },
    {
        abbr: 'FSK',
        def: 'frequency shift key',
        src: 'JP 1-02'
    },
    {
        abbr: 'FSN',
        def: 'foreign service national',
        src: 'JP 1-02'
    },
    {
        abbr: 'FSO',
        def: 'fire support officer; flight safety officer; foreign service officer',
        src: '1-02'
    },
    {
        abbr: 'FSP',
        def: 'functional support plan',
        src: '1-02'
    },
    {
        abbr: 'FSR',
        def: 'field service representative',
        src: '1-02'
    },
    {
        abbr: 'FSRT',
        def: 'fatality search and recovery team',
        src: '1-02'
    },
    {
        abbr: 'FSS',
        def: 'fast sealift ship; fire support station; flight service station',
        src: '1-02'
    },
    {
        abbr: 'FSSG',
        def: 'force service support group (USMC)',
        src: 'JP 1-02'
    },
    {
        abbr: 'FSST',
        def: 'forward space support to theater',
        src: 'JP 1-02'
    },
    {
        abbr: 'FST',
        def: 'fleet surgical team',
        src: 'JP 1-02'
    },
    {
        abbr: 'FSU',
        def: 'former Soviet Union; forward support unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'FSW',
        def: 'feet of seawater',
        src: '1-02'
    },
    {
        abbr: 'ft',
        def: 'feet; foot',
        src: 'JP 1-02'
    },
    {
        abbr: 'ft3',
        def: 'cubic feet',
        src: 'JP 1-02'
    },
    {
        abbr: 'FTC',
        def: 'Federal Trade Commission',
        src: 'JP 1-02'
    },
    {
        abbr: 'FTCA',
        def: 'Foreign Tort Claims Act',
        src: 'JP 1-02'
    },
    {
        abbr: 'FTN',
        def: 'force tracking number',
        src: '1-02'
    },
    {
        abbr: 'FTP',
        def: 'file transfer protocol',
        src: 'JP 1-02'
    },
    {
        abbr: 'FTRG',
        def: 'fleet tactical readiness group',
        src: 'JP 1-02'
    },
    {
        abbr: 'FTS',
        def: 'Federal Telecommunications System; Federal telephone service; file transfer service',
        src: 'JP 1-02'
    },
    {
        abbr: 'FTU',
        def: 'field training unit; freight terminal unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'FUAC',
        def: 'functional area code',
        src: 'JP 1-02'
    },
    {
        abbr: 'FUNCPLAN',
        def: 'functional plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'Fv',
        def: 'aircraft speed correction factor',
        src: 'JP 1-02'
    },
    {
        abbr: 'FVT',
        def: 'Force Validation Tool',
        src: 'JP 1-02'
    },
    {
        abbr: 'FW',
        def: 'fighter wing; fixed-wing; weather correction factor',
        src: '1-02'
    },
    {
        abbr: 'FWA',
        def: 'fraud, waste, and abuse',
        src: '1-02'
    },
    {
        abbr: 'FWC',
        def: 'fleet weather center',
        src: '1-02'
    },
    {
        abbr: 'FWD',
        def: 'forward',
        src: 'JP 1-02'
    },
    {
        abbr: 'FWDA',
        def: 'friendly weapon danger area',
        src: 'JP 1-02'
    },
    {
        abbr: 'FWF',
        def: 'former warring factions',
        src: 'JP 1-02'
    },
    {
        abbr: 'FY',
        def: 'fiscal year',
        src: '1-02'
    },
    {
        abbr: 'FYDP',
        def: 'Future Years Defense Program',
        src: 'JP 1-02'
    },
    {
        abbr: 'G-1',
        def: 'Army or Marine Corps component manpower or personnel staff officer (Army division or higher staff, Marine Corps brigade or higher staff)',
        src: 'JP 1-02'
    },
    {
        abbr: 'G-2',
        def: 'Army Deputy Chief of Staff for Intelligence; Army or Marine Corps component intelligence staff officer (Army division or higher staff, Marine Corps brigade or higher staff)',
        src: '1-02'
    },
    {
        abbr: 'G-2X',
        def: 'Army counterintelligence and human intelligence staff element',
        src: '1-02'
    },
    {
        abbr: 'G-3',
        def: 'Army or Marine Corps component operations staff officer (Army division or higher staff, Marine Corps brigade or higher staff); assistant chief of staff, operations',
        src: '1-02'
    },
    {
        abbr: 'G-4',
        def: 'Army or Marine Corps component logistics staff officer (Army division or higher staff, Marine Corps brigade or higher staff); Assistant Chief of Staff for Logistics',
        src: 'JP 1-02'
    },
    {
        abbr: 'G-5',
        def: 'assistant chief of staff, plans',
        src: '1-02'
    },
    {
        abbr: 'G-6',
        def: 'Army or Marine Corps component command, control, communications, and computer systems staff officer; assistant chief of staff for communications; signal staff officer (Army)',
        src: '1-02'
    },
    {
        abbr: 'G-7',
        def: 'Army component information operations staff officer; assistant chief of staff, information engagement, information operations staff officer (ARFOR)',
        src: '1-02'
    },
    {
        abbr: 'G/A',
        def: 'ground to air',
        src: 'JP 1-02'
    },
    {
        abbr: 'G/VLLD',
        def: 'ground/vehicle laser locator designator',
        src: 'JP 1-02'
    },
    {
        abbr: 'GA',
        def: 'geospatial analyst; Tabun, a nerve agent',
        src: '1-02'
    },
    {
        abbr: 'GAA',
        def: 'general agency agreement; geospatial intelligence assessment activity',
        src: 'JP 1-02'
    },
    {
        abbr: 'GAFS',
        def: 'General Accounting and Finance System',
        src: '1-02'
    },
    {
        abbr: 'GAMSS',
        def: 'Global Air Mobility Support System',
        src: '1-02'
    },
    {
        abbr: 'GAO',
        def: 'General Accounting Office; Government Accountability Office',
        src: '1-02'
    },
    {
        abbr: 'GAR',
        def: 'gateway access request',
        src: '1-02'
    },
    {
        abbr: 'GARS',
        def: 'Global Area Reference System',
        src: '1-02'
    },
    {
        abbr: 'GAT',
        def: 'governmental assistance team',
        src: '1-02'
    },
    {
        abbr: 'GATB',
        def: 'guidance, apportionment, and targeting board',
        src: 'JP 1-02'
    },
    {
        abbr: 'GATES',
        def: 'Global Air Transportation Execution System',
        src: '1-02'
    },
    {
        abbr: 'GB',
        def: 'group buffer; Sarin, a nerve agent',
        src: 'JP 1-02'
    },
    {
        abbr: 'GBI',
        def: 'ground-based interceptor',
        src: '1-02'
    },
    {
        abbr: 'GBL',
        def: 'government bill of lading',
        src: 'JP 1-02'
    },
    {
        abbr: 'GBMD',
        def: 'global ballistic missile defense',
        src: '1-02'
    },
    {
        abbr: 'GBR',
        def: 'ground-based radar',
        src: 'JP 1-02'
    },
    {
        abbr: 'GBS',
        def: 'Global Broadcast Service; Global Broadcast System',
        src: '1-02'
    },
    {
        abbr: 'GBU',
        def: 'guided bomb unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'GC',
        def: 'general counsel; Geneva Convention; Geneva Convention Relative to the Protection of Civilian Persons in Time of War',
        src: '1-02'
    },
    {
        abbr: 'GC3A',
        def: 'global command, control, and communications assessment',
        src: 'JP 1-02'
    },
    {
        abbr: 'GC4A',
        def: 'global command, control, communications, and computer assessment',
        src: 'JP 1-02'
    },
    {
        abbr: 'GCA',
        def: 'ground controlled approach',
        src: 'JP 1-02'
    },
    {
        abbr: 'GCC',
        def: 'geographic combatant commander; global contingency construction',
        src: '1-02'
    },
    {
        abbr: 'GCCC',
        def: 'global contingency construction contract',
        src: '1-02'
    },
    {
        abbr: 'GCCMAC',
        def: 'Global Contingency Construction Multiple Award Contract (Navy)',
        src: '1-02'
    },
    {
        abbr: 'GCCS',
        def: 'Global Command and Control System',
        src: '1-02'
    },
    {
        abbr: 'GCCS-A',
        def: 'Global Command and Control System-Army',
        src: '1-02'
    },
    {
        abbr: 'GCCS-I3',
        def: 'Global Command and Control System Integrated Imagery and Intelligence',
        src: '1-02'
    },
    {
        abbr: 'GCCS-J',
        def: 'Global Command and Control System-Joint',
        src: '1-02'
    },
    {
        abbr: 'GCCS-M',
        def: 'Global Command and Control System-Maritime',
        src: '1-02'
    },
    {
        abbr: 'GCE',
        def: 'ground combat element (USMC)',
        src: '1-02'
    },
    {
        abbr: 'GCI',
        def: 'ground control intercept',
        src: '1-02'
    },
    {
        abbr: 'GCM',
        def: 'global container manager; Global Information Grid (GIG) Content Management',
        src: '1-02'
    },
    {
        abbr: 'GCP',
        def: 'global campaign plan; ground commander\'s pointer',
        src: '1-02'
    },
    {
        abbr: 'GCRI',
        def: 'general collective routing indicator (RI)',
        src: 'JP 1-02'
    },
    {
        abbr: 'GCS',
        def: 'ground control station',
        src: 'JP 1-02'
    },
    {
        abbr: 'GCSC',
        def: 'global contingency service contract',
        src: '1-02'
    },
    {
        abbr: 'GCSMAC',
        def: 'Global Contingency Services Multiple Award Contract (Navy)',
        src: '1-02'
    },
    {
        abbr: 'GCSS',
        def: 'Global Combat Support System',
        src: '1-02'
    },
    {
        abbr: 'GCSS-J',
        def: 'Global Combat Support System-Joint',
        src: '1-02'
    },
    {
        abbr: 'GCTN',
        def: 'global combating terrorism network',
        src: '1-02'
    },
    {
        abbr: 'GD',
        def: 'Soman, a nerve agent',
        src: 'JP 1-02'
    },
    {
        abbr: 'GDF',
        def: 'gridded data field; Guidance for Development of the Force',
        src: '1-02'
    },
    {
        abbr: 'GDIP',
        def: 'General Defense Intelligence Program',
        src: 'JP 1-02'
    },
    {
        abbr: 'GDIPP',
        def: 'General Defense Intelligence Proposed Program',
        src: 'JP 1-02'
    },
    {
        abbr: 'GDP',
        def: 'General Defense Plan (SACEUR); gross domestic product',
        src: 'JP 1-02'
    },
    {
        abbr: 'GDSS',
        def: 'Global Decision Support System',
        src: '1-02'
    },
    {
        abbr: 'GE',
        def: 'general engineering\t',
        src: '1-02'
    },
    {
        abbr: 'GEF',
        def: 'Guidance for Employment of the Force',
        src: '1-02'
    },
    {
        abbr: 'GEM',
        def: 'Global Information Grid (GIG) Enterprise Management',
        src: 'JP 6-0'
    },
    {
        abbr: 'GENADMIN',
        def: 'general admin (message)',
        src: 'JP 1-02'
    },
    {
        abbr: 'GENSER',
        def: 'general service (message)',
        src: 'JP 1-02'
    },
    {
        abbr: 'GENTEXT',
        def: 'general text',
        src: 'JP 1-02'
    },
    {
        abbr: 'GEO',
        def: 'geosynchronous Earth orbit',
        src: '1-02'
    },
    {
        abbr: 'GEOCODE',
        def: 'geographic code',
        src: 'JP 1-02'
    },
    {
        abbr: 'GEOFILE',
        def: 'geolocation code file; standard specified geographic location file',
        src: 'JP 1-02'
    },
    {
        abbr: 'GEOINT',
        def: 'geospatial intelligence',
        src: '1-02'
    },
    {
        abbr: 'GEOLOC',
        def: 'geographic location; geographic location code',
        src: 'JP 1-02'
    },
    {
        abbr: 'GEOREF',
        def: 'geographic reference; world geographic reference system',
        src: 'JP 1-02'
    },
    {
        abbr: 'GETS',
        def: 'geospatial enterprise tasking, processing, exploitation, and dissemination service',
        src: '1-02'
    },
    {
        abbr: 'GF',
        def: 'a nerve agent',
        src: 'JP 1-02'
    },
    {
        abbr: 'GFE',
        def: 'government-furnished equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'GFI',
        def: 'government-furnished information',
        src: 'JP 1-02'
    },
    {
        abbr: 'GFM',
        def: 'global force management; global freight management; government-furnished material',
        src: '1-02'
    },
    {
        abbr: 'GFMAP',
        def: 'Global Force Management Allocation Plan',
        src: '1-02'
    },
    {
        abbr: 'GFMB',
        def: 'Global Force Management Board',
        src: '1-02'
    },
    {
        abbr: 'GFMIG',
        def: 'Global Force Management Implementation Guidance',
        src: '1-02'
    },
    {
        abbr: 'GFMPL',
        def: 'Graphics Fleet Mission Program Library',
        src: 'JP 1-02'
    },
    {
        abbr: 'GFOAR',
        def: 'global family of operation plans assessment report',
        src: 'JP 1-02'
    },
    {
        abbr: 'GFP',
        def: 'government-furnished property',
        src: '1-02'
    },
    {
        abbr: 'GFS',
        def: 'global fleet station; government-furnished support',
        src: '1-02'
    },
    {
        abbr: 'GFU',
        def: 'group framing unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'GHz',
        def: 'gigahertz',
        src: 'JP 1-02'
    },
    {
        abbr: 'GI',
        def: 'geomatics and imagery',
        src: '1-02'
    },
    {
        abbr: 'GI&S',
        def: 'geospatial information and services',
        src: '1-02'
    },
    {
        abbr: 'GIAC',
        def: 'graphic input aggregate control',
        src: 'JP 1-02'
    },
    {
        abbr: 'GIANT',
        def: 'Global Positioning System Interference and Navigation Tool',
        src: '1-02'
    },
    {
        abbr: 'GIBCO',
        def: 'geospatial intelligence base for contingency operations',
        src: '1-02'
    },
    {
        abbr: 'GIC',
        def: 'international loading gauge',
        src: 'JP 1-02'
    },
    {
        abbr: 'GIE',
        def: 'global information environment',
        src: 'JP 3-61'
    },
    {
        abbr: 'GIG',
        def: 'Global Information Grid',
        src: 'JP 1-02'
    },
    {
        abbr: 'GIMS',
        def: 'Geospatial Intelligence Information Management Services',
        src: '1-02'
    },
    {
        abbr: 'GIO',
        def: 'Geospatial Intelligence Organisation (New Zealand)',
        src: '1-02'
    },
    {
        abbr: 'GIP',
        def: 'gridded installation photograph',
        src: 'JP 1-02'
    },
    {
        abbr: 'GIS',
        def: 'geographic information system; geospatial information systems',
        src: 'JP 1-02'
    },
    {
        abbr: 'GL',
        def: 'government-leased',
        src: '1-02'
    },
    {
        abbr: 'GLCM',
        def: 'ground-launched cruise missile',
        src: '1-02'
    },
    {
        abbr: 'GLINT',
        def: 'gated laser intensifier',
        src: 'JP 1-02'
    },
    {
        abbr: 'GLO',
        def: 'ground liaison officer',
        src: '1-02'
    },
    {
        abbr: 'GLOC',
        def: 'ground line of communications',
        src: '1-02'
    },
    {
        abbr: 'GLTD',
        def: 'ground laser target designator'
    },
    {
        abbr: 'GM',
        def: 'group modem',
        src: 'JP 1-02'
    },
    {
        abbr: 'GMD',
        def: 'global missile defense; ground-based midcourse defense; group mux and/or demux',
        src: '1-02'
    },
    {
        abbr: 'GMDSS',
        def: 'Global Maritime Distress and Safety System',
        src: 'JP 1-02'
    },
    {
        abbr: 'GMF',
        def: 'ground mobile force',
        src: 'JP 1-02'
    },
    {
        abbr: 'GMFP',
        def: 'global military force policy',
        src: 'JP 2-01'
    },
    {
        abbr: 'GMI',
        def: 'general military intelligence',
        src: '1-02'
    },
    {
        abbr: 'GMLRS',
        def: 'Global Positioning System Multiple Launch Rocket System',
        src: '1-02'
    },
    {
        abbr: 'GMP',
        def: 'global maritime partnership',
        src: '1-02'
    },
    {
        abbr: 'GMR',
        def: 'graduated mobilization response; ground mobile radar',
        src: 'JP 1-02'
    },
    {
        abbr: 'GMRS',
        def: 'global mobility readiness squadron',
        src: '1-02'
    },
    {
        abbr: 'GMS',
        def: 'global mobility squadron',
        src: '1-02'
    },
    {
        abbr: 'GMSC',
        def: 'Global Mission Support Center (USSOCOM)',
        src: '1-02'
    },
    {
        abbr: 'GMTI',
        def: 'ground moving target indicator',
        src: 'JP 1-02'
    },
    {
        abbr: 'GNA',
        def: 'Global Information Grid (GIG) Network Assurance',
        src: '1-02'
    },
    {
        abbr: 'GNC',
        def: 'Global Network Operations Center',
        src: '1-02'
    },
    {
        abbr: 'GNCC',
        def: 'global network operations (NETOPS) control center',
        src: '1-02'
    },
    {
        abbr: 'GND',
        def: 'Global Information Grid (GIG) Network Defense',
        src: 'JP 6-0'
    },
    {
        abbr: 'GNSC',
        def: 'global network operations (NETOPS) support center',
        src: '1-02'
    },
    {
        abbr: 'GNSS',
        def: 'global navigation satellite system',
        src: '1-02'
    },
    {
        abbr: 'GO',
        def: 'government-owned',
        src: '1-02'
    },
    {
        abbr: 'GOCO',
        def: 'government-owned, contractor-operated',
        src: 'JP 1-02'
    },
    {
        abbr: 'GOES',
        def: 'geostationary operational environmental satellite',
        src: 'JP 1-02'
    },
    {
        abbr: 'GOGO',
        def: 'government-owned, government-operated',
        src: 'JP 1-02'
    },
    {
        abbr: 'GOS',
        def: 'grade of service',
        src: 'JP 1-02'
    },
    {
        abbr: 'GOSG',
        def: 'general officer steering group',
        src: 'JP 1-02'
    },
    {
        abbr: 'GOTS',
        def: 'government off-the-shelf',
        src: 'JP 1-02'
    },
    {
        abbr: 'GP',
        def: 'general purpose; group',
        src: 'JP 1-02'
    },
    {
        abbr: 'GPC',
        def: 'geospatial planning cell; government purchase card',
        src: '1-02'
    },
    {
        abbr: 'GPD',
        def: 'gallons per day',
        src: 'JP 1-02'
    },
    {
        abbr: 'GPE',
        def: 'geospatial intelligence preparation of the environment',
        src: '1-02'
    },
    {
        abbr: 'GPEE',
        def: 'general purpose encryption equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'GPL',
        def: 'Geospatial Product Library',
        src: '1-02'
    },
    {
        abbr: 'GPM',
        def: 'gallons per minute; global pallet manager',
        src: '1-02'
    },
    {
        abbr: 'GPMDM',
        def: 'group modem',
        src: 'JP 1-02'
    },
    {
        abbr: 'GPMIC',
        def: 'Global Patient Movement Integration Center',
        src: '1-02'
    },
    {
        abbr: 'GPMJAB',
        def: 'Global Patient Movement Joint Advisory Board',
        src: '1-02'
    },
    {
        abbr: 'GPMRC',
        def: 'Global Patient Movement Requirements Center',
        src: '1-02'
    },
    {
        abbr: 'GPS',
        def: 'Global Positioning System',
        src: '1-02'
    },
    {
        abbr: 'GPSOC',
        def: 'Global Positioning System Operations Center',
        src: '1-02'
    },
    {
        abbr: 'GPW',
        def: 'Geneva Convention Relative to the Treatment of Prisoners of War',
        src: '1-02'
    },
    {
        abbr: 'GR',
        def: 'graduated response',
        src: 'JP 1-02'
    },
    {
        abbr: 'GRASP',
        def: 'general retrieval and sort processor',
        src: 'JP 1-02'
    },
    {
        abbr: 'GRCA',
        def: 'ground reference coverage area',
        src: 'JP 1-02'
    },
    {
        abbr: 'GRG',
        def: 'gridded reference graphic',
        src: 'JP 1-02'
    },
    {
        abbr: 'GRL',
        def: 'global reach laydown',
        src: 'JP 1-02'
    },
    {
        abbr: 'GRREG',
        def: 'graves registration',
        src: 'JP 1-02'
    },
    {
        abbr: 'GS',
        def: 'general service; general support; group separator',
        src: '1-02'
    },
    {
        abbr: 'GS-R',
        def: 'general support-reinforcing',
        src: 'JP 1-02'
    },
    {
        abbr: 'GSA',
        def: 'General Services Administration',
        src: '1-02'
    },
    {
        abbr: 'GSE',
        def: 'ground support equipment',
        src: '1-02'
    },
    {
        abbr: 'GSI',
        def: 'glide slope indicator',
        src: 'JP 1-02'
    },
    {
        abbr: 'GSM',
        def: 'ground station module',
        src: 'JP 1-02'
    },
    {
        abbr: 'GSO',
        def: 'general services officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'GSORTS',
        def: 'Global Status of Resources and Training System',
        src: '1-02'
    },
    {
        abbr: 'GSR',
        def: 'general support-reinforcing; ground surveillance radar',
        src: '1-02'
    },
    {
        abbr: 'GSSA',
        def: 'general supply support area',
        src: 'JP 1-02'
    },
    {
        abbr: 'GSSC',
        def: 'global satellite communications (SATCOM) support center',
        src: '1-02'
    },
    {
        abbr: 'GST',
        def: 'geospatial support team',
        src: '1-02'
    },
    {
        abbr: 'gt',
        def: 'gross ton',
        src: 'JP 1-02'
    },
    {
        abbr: 'GTA',
        def: 'graphic training aid',
        src: '1-02'
    },
    {
        abbr: 'GTAS',
        def: 'ground-to-air signals',
        src: 'JP 3-50'
    },
    {
        abbr: 'GTL',
        def: 'gun-target line',
        src: 'JP 1-02'
    },
    {
        abbr: 'GTM',
        def: 'global transportation management',
        src: '1-02'
    },
    {
        abbr: 'GUARD',
        def: 'US National Guard and Air Guard',
        src: 'JP 1-02'
    },
    {
        abbr: 'GUARDS',
        def: 'General Unified Ammunition Reporting Data System',
        src: 'JP 1-02'
    },
    {
        abbr: 'GWC',
        def: 'global weather central',
        src: 'JP 1-02'
    },
    {
        abbr: 'GWEN',
        def: 'Ground Wave Emergency Network',
        src: 'JP 1-02'
    },
    {
        abbr: 'GWOT',
        def: 'global war on terrorism',
        src: '1-02'
    },
    {
        abbr: 'GWS',
        def: 'Geneva Convention for the Amelioration of the Condition of the Wounded and Sick in Armed Forces in the Field',
        src: '1-02'
    },
    {
        abbr: 'GWS Sea',
        def: 'Geneva Convention for the Amelioration of the Condition of the Wounded, Sick, and Shipwrecked Members of the Armed Forces at Sea',
        src: '1-02'
    },
    {
        abbr: 'H&I',
        def: 'harassing and interdicting',
        src: 'JP 1-02'
    },
    {
        abbr: 'H&S',
        def: 'headquarters and service',
        src: 'JP 1-02'
    },
    {
        abbr: 'HA',
        def: 'holding area; humanitarian assistance',
        src: '1-02'
    },
    {
        abbr: 'HAARS',
        def: 'high-altitude airdrop resupply system',
        src: 'JP 1-02'
    },
    {
        abbr: 'HAC',
        def: 'helicopter aircraft commander; human intelligence analysis cell',
        src: '1-02'
    },
    {
        abbr: 'HACC',
        def: 'humanitarian assistance coordination center',
        src: '1-02'
    },
    {
        abbr: 'HAHO',
        def: 'high-altitude high-opening parachute technique',
        src: 'JP 1-02'
    },
    {
        abbr: 'HAP',
        def: 'humanitarian assistance program',
        src: '1-02'
    },
    {
        abbr: 'HAP-EP',
        def: 'humanitarian assistance program-excess property',
        src: 'JP 4-02'
    },
    {
        abbr: 'HARC',
        def: 'human intelligence analysis and reporting cell',
        src: '1-02'
    },
    {
        abbr: 'HARM',
        def: 'high-speed antiradiation missile',
        src: 'JP 1-02'
    },
    {
        abbr: 'HARP',
        def: 'high altitude release point',
        src: 'JP 1-02'
    },
    {
        abbr: 'HAST',
        def: 'humanitarian assistance survey team',
        src: '1-02'
    },
    {
        abbr: 'HATR',
        def: 'hazardous air traffic report',
        src: 'JP 1-02'
    },
    {
        abbr: 'HAZ',
        def: 'hazardous cargo',
        src: 'JP 1-02'
    },
    {
        abbr: 'HAZMAT',
        def: 'hazardous materials',
        src: '1-02'
    },
    {
        abbr: 'HB',
        def: 'heavy boat',
        src: 'JP 1-02'
    },
    {
        abbr: 'HBCT',
        def: 'heavy brigade combat team',
        src: 'JP 3-34'
    },
    {
        abbr: 'HC',
        def: 'Directorate for Human Capital (DIA)',
        src: '1-02'
    },
    {
        abbr: 'HCA',
        def: 'head of contracting activity; humanitarian and civic assistance',
        src: '1-02'
    },
    {
        abbr: 'HCAS',
        def: 'hostile casualty',
        src: 'JP 1-02'
    },
    {
        abbr: 'HCL',
        def: 'hydrochloride',
        src: 'JP 1-02'
    },
    {
        abbr: 'HCO',
        def: 'helicopter control officer',
        src: '1-02'
    },
    {
        abbr: 'HCP',
        def: 'hardcopy printer',
        src: 'JP 1-02'
    },
    {
        abbr: 'HCS',
        def: 'helicopter combat support (Navy); helicopter coordination section',
        src: '1-02'
    },
    {
        abbr: 'HCT',
        def: 'human intelligence (HUMINT) collection team',
        src: 'JP 2-01.2'
    },
    {
        abbr: 'HD',
        def: 'a mustard agent; harbor defense; harmonic distortion; homeland defense',
        src: '1-02'
    },
    {
        abbr: 'HDC',
        def: 'harbor defense commander',
        src: '1-02'
    },
    {
        abbr: 'HDCU',
        def: 'harbor defense command unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'HDM',
        def: 'humanitarian demining',
        src: '1-02'
    },
    {
        abbr: 'HDO',
        def: 'humanitarian demining operations',
        src: '1-02'
    },
    {
        abbr: 'HDPLX',
        def: 'half duplex',
        src: 'JP 1-02'
    },
    {
        abbr: 'HDR',
        def: 'humanitarian daily ration',
        src: '1-02'
    },
    {
        abbr: 'HDTC',
        def: 'Humanitarian Demining Training Center',
        src: '1-02'
    },
    {
        abbr: 'HE',
        def: 'heavy equipment; high explosives',
        src: '1-02'
    },
    {
        abbr: 'HEAT',
        def: 'helicopter external air transport; high explosive antitank',
        src: 'JP 1-02'
    },
    {
        abbr: 'HEC',
        def: 'helicopter element coordinator',
        src: 'JP 1-02'
    },
    {
        abbr: 'HEFOE',
        def: 'hydraulic electrical fuel oxygen engine',
        src: 'JP 1-02'
    },
    {
        abbr: 'HEI',
        def: 'high explosives incendiary',
        src: 'JP 1-02'
    },
    {
        abbr: 'HEL-H',
        def: 'heavy helicopter',
        src: 'JP 1-02'
    },
    {
        abbr: 'HEL-L',
        def: 'light helicopter',
        src: 'JP 1-02'
    },
    {
        abbr: 'HEL-M',
        def: 'medium helicopter',
        src: 'JP 1-02'
    },
    {
        abbr: 'HELO',
        def: 'helicopter',
        src: 'JP 1-02'
    },
    {
        abbr: 'HEMP',
        def: 'high-altitude electromagnetic pulse',
        src: '1-02'
    },
    {
        abbr: 'HEMTT',
        def: 'heavy expanded mobile tactical truck',
        src: 'JP 1-02'
    },
    {
        abbr: 'HEO',
        def: 'highly elliptical orbit',
        src: '1-02'
    },
    {
        abbr: 'HEPA',
        def: 'high efficiency particulate air',
        src: '1-02'
    },
    {
        abbr: 'HERF',
        def: 'hazards of electromagnetic radiation to fuels',
        src: '1-02'
    },
    {
        abbr: 'HERO',
        def: 'electromagnetic radiation hazards; hazards of electromagnetic radiation to ordnance',
        src: '1-02'
    },
    {
        abbr: 'HERP',
        def: 'hazards of electromagnetic radiation to personnel',
        src: '1-02'
    },
    {
        abbr: 'HET',
        def: 'heavy equipment transporter; human intelligence exploitation team',
        src: '1-02'
    },
    {
        abbr: 'HEWSweb',
        def: 'Humanitarian Early Warning Service',
        src: '1-02'
    },
    {
        abbr: 'HF',
        def: 'high frequency',
        src: '1-02'
    },
    {
        abbr: 'HFA',
        def: 'human factors analysis',
        src: '1-02'
    },
    {
        abbr: 'HFDF',
        def: 'high-frequency direction finding',
        src: '1-02'
    },
    {
        abbr: 'HFP',
        def: 'hostile fire pay',
        src: '1-02'
    },
    {
        abbr: 'HFRB',
        def: 'high frequency regional broadcast',
        src: 'JP 1-02'
    },
    {
        abbr: 'HH',
        def: 'homing pattern',
        src: 'JP 1-02'
    },
    {
        abbr: 'HHC',
        def: 'headquarters and headquarters company',
        src: '1-02'
    },
    {
        abbr: 'HHD',
        def: 'headquarters and headquarters detachment',
        src: 'JP 1-02'
    },
    {
        abbr: 'HHQ',
        def: 'higher headquarters'
    },
    {
        abbr: 'HHS',
        def: 'Department of Health and Human Services',
        src: 'JP 3-27'
    },
    {
        abbr: 'HIC',
        def: 'humanitarian information center',
        src: '1-02'
    },
    {
        abbr: 'HICAP',
        def: 'high-capacity firefighting foam station',
        src: 'JP 1-02'
    },
    {
        abbr: 'HIDACZ',
        def: 'high-density airspace control zone',
        src: '1-02'
    },
    {
        abbr: 'HIDTA',
        def: 'high-intensity drug trafficking area',
        src: 'JP 1-02'
    },
    {
        abbr: 'HIFR',
        def: 'helicopter in-flight refueling',
        src: '1-02'
    },
    {
        abbr: 'HIMAD',
        def: 'high-to-medium-altitude air defense',
        src: '1-02'
    },
    {
        abbr: 'HIMARS',
        def: 'High Mobility Artillery Rocket System',
        src: 'JP 3-09'
    },
    {
        abbr: 'HIMEZ',
        def: 'high-altitude missile engagement zone',
        src: '1-02'
    },
    {
        abbr: 'HIRSS',
        def: 'hover infrared suppressor subsystem',
        src: 'JP 1-02'
    },
    {
        abbr: 'HIRTA',
        def: 'high intensity radio transmission area',
        src: '1-02'
    },
    {
        abbr: 'HIU',
        def: 'humanitarian information unit (DOS)',
        src: '1-02'
    },
    {
        abbr: 'HIV',
        def: 'human immunodeficiency virus',
        src: '1-02'
    },
    {
        abbr: 'HJ',
        def: 'crypto key change',
        src: 'JP 1-02'
    },
    {
        abbr: 'HLPS',
        def: 'heavy-lift pre-position ship',
        src: 'JP 1-02'
    },
    {
        abbr: 'HM',
        def: 'hazardous material',
        src: 'JP 1-02'
    },
    {
        abbr: 'HMA',
        def: 'humanitarian mine action',
        src: '1-02'
    },
    {
        abbr: 'HMH',
        def: 'Marine heavy helicopter squadron',
        src: 'JP 1-02'
    },
    {
        abbr: 'HMIRS',
        def: 'Hazardous Material Information Resource System',
        src: '1-02'
    },
    {
        abbr: 'HMIS',
        def: 'Hazardous Material Information System',
        src: 'JP 1-02'
    },
    {
        abbr: 'HMLA',
        def: 'Marine light/attack helicopter squadron',
        src: 'JP 1-02'
    },
    {
        abbr: 'HMM',
        def: 'Marine medium helicopter squadron',
        src: 'JP 1-02'
    },
    {
        abbr: 'HMMWV',
        def: 'high mobility multipurpose wheeled vehicle',
        src: 'JP 1-02'
    },
    {
        abbr: 'HMOD',
        def: 'harbormaster operations detachment',
        src: 'JP 4-01.6'
    },
    {
        abbr: 'HMW',
        def: 'health, morale, and welfare',
        src: 'JP 1-02'
    },
    {
        abbr: 'HN',
        def: 'host nation',
        src: '1-02'
    },
    {
        abbr: 'HNC',
        def: 'host-nation coordination',
        src: '1-02'
    },
    {
        abbr: 'HNCC',
        def: 'host nation coordination center',
        src: '1-02'
    },
    {
        abbr: 'HNS',
        def: 'host-nation support',
        src: '1-02'
    },
    {
        abbr: 'HNSCC',
        def: 'host-nation support coordination cell',
        src: '1-02'
    },
    {
        abbr: 'HNSF',
        def: 'host-nation security forces',
        src: '1-02'
    },
    {
        abbr: 'HOB',
        def: 'height of burst',
        src: 'JP 1-02'
    },
    {
        abbr: 'HOC',
        def: 'human intelligence operations cell; humanitarian operations center',
        src: '1-02'
    },
    {
        abbr: 'HOCC',
        def: 'humanitarian operations coordination center',
        src: 'JP 1-02'
    },
    {
        abbr: 'HOD',
        def: 'head of delegation',
        src: 'JP 1-02'
    },
    {
        abbr: 'HOGE',
        def: 'hover out of ground effect',
        src: 'JP 1-02'
    },
    {
        abbr: 'HOIS',
        def: 'hostile intelligence service',
        src: 'JP 1-02'
    },
    {
        abbr: 'HOM',
        def: 'head of mission',
        src: '1-02'
    },
    {
        abbr: 'HOSTAC',
        def: 'helicopter operations from ships other than aircraft carriers (USN publication)',
        src: 'JP 1-02'
    },
    {
        abbr: 'HPA',
        def: 'high power amplifier',
        src: 'JP 1-02'
    },
    {
        abbr: 'HPM',
        def: 'high-power microwave',
        src: '1-02'
    },
    {
        abbr: 'HPMSK',
        def: 'high priority mission support kit',
        src: 'JP 1-02'
    },
    {
        abbr: 'HPT',
        def: 'high-payoff target',
        src: '1-02'
    },
    {
        abbr: 'HQ',
        def: 'HAVE QUICK; headquarters',
        src: '1-02'
    },
    {
        abbr: 'HQCOMDT',
        def: 'headquarters commandant',
        src: '1-02'
    },
    {
        abbr: 'HQDA',
        def: 'Headquarters, Department of the Army',
        src: 'JP 1-02'
    },
    {
        abbr: 'HQFM-net',
        def: 'HAVE QUICK frequency modulation net',
        src: 'JP 1-02'
    },
    {
        abbr: 'HQFMT-net',
        def: 'HAVE QUICK frequency modulation training net',
        src: 'JP 1-02'
    },
    {
        abbr: 'HQMC',
        def: 'Headquarters, Marine Corps',
        src: '1-02'
    },
    {
        abbr: 'HR',
        def: 'helicopter request; hostage rescue',
        src: 'JP 1-02'
    },
    {
        abbr: 'HRB',
        def: 'high-risk billet',
        src: 'JP 3-07.2'
    },
    {
        abbr: 'HRC',
        def: 'high-risk-of-capture; Human Resources Command',
        src: '1-02'
    },
    {
        abbr: 'HRF',
        def: 'homeland response force',
        src: '1-02'
    },
    {
        abbr: 'HRJTF',
        def: 'humanitarian relief joint task force',
        src: 'JP 1-02'
    },
    {
        abbr: 'HRO',
        def: 'humanitarian relief organizations',
        src: 'JP 1-02'
    },
    {
        abbr: 'HRP',
        def: 'high-risk personnel; human remains pouch',
        src: '1-02'
    },
    {
        abbr: 'HRS',
        def: 'horizon reference system',
        src: 'JP 1-02'
    },
    {
        abbr: 'HRT',
        def: 'health response team; hostage rescue team',
        src: '1-02'
    },
    {
        abbr: 'HS',
        def: 'health services; helicopter antisubmarine (Navy); homeland security; homing single-unit',
        src: '1-02'
    },
    {
        abbr: 'HSAC',
        def: 'Homeland Security Advisory Council',
        src: '1-02'
    },
    {
        abbr: 'HSAS',
        def: 'Homeland Security Advisory System',
        src: 'JP 3-07.2'
    },
    {
        abbr: 'HSB',
        def: 'high speed boat',
        src: 'JP 1-02'
    },
    {
        abbr: 'HSC',
        def: 'helicopter sea combat (Navy); Homeland Security Council',
        src: '1-02'
    },
    {
        abbr: 'HSC/PC',
        def: 'Homeland Security Council Principals Committee',
        src: 'JP 3-08'
    },
    {
        abbr: 'HSC/PCC',
        def: 'Homeland Security Council Policy Coordination Committee',
        src: 'JP 3-08'
    },
    {
        abbr: 'HSCDM',
        def: 'high speed cable driver modem',
        src: 'JP 1-02'
    },
    {
        abbr: 'HSD',
        def: 'health service delivery; human intelligence support detachment',
        src: '1-02'
    },
    {
        abbr: 'HSE',
        def: 'headquarters support element; human intelligence support element (DIA)',
        src: 'JP 1-02'
    },
    {
        abbr: 'HSEP',
        def: 'hospital surgical expansion package (USAF)',
        src: 'JP 1-02'
    },
    {
        abbr: 'HSI',
        def: 'hyperspectral imagery; Office of Homeland Security Investigations (DHS)',
        src: '1-02'
    },
    {
        abbr: 'HSIN',
        def: 'Homeland Security Information Network (DHS)',
        src: '1-02'
    },
    {
        abbr: 'HSIP',
        def: 'Homeland Security Infrastructure Program',
        src: '1-02'
    },
    {
        abbr: 'HSM',
        def: 'humanitarian service medal',
        src: 'JP 1-02'
    },
    {
        abbr: 'HSPD',
        def: 'homeland security Presidential directive',
        src: '1-02'
    },
    {
        abbr: 'HSPR',
        def: 'high speed pulse restorer',
        src: 'JP 1-02'
    },
    {
        abbr: 'HSS',
        def: 'health service support',
        src: '1-02'
    },
    {
        abbr: 'HSSDB',
        def: 'high speed serial data buffer',
        src: 'JP 1-02'
    },
    {
        abbr: 'HST',
        def: 'helicopter support team',
        src: 'JP 1-02'
    },
    {
        abbr: 'HSV',
        def: 'high-speed vessel',
        src: '1-02'
    },
    {
        abbr: 'HT',
        def: 'hatch team',
        src: 'JP 1-02'
    },
    {
        abbr: 'HTERRCAS',
        def: 'hostile terrorist casualty',
        src: 'JP 1-02'
    },
    {
        abbr: 'HTG',
        def: 'hard target graphic',
        src: 'JP 1-02'
    },
    {
        abbr: 'HTH',
        def: 'high test hypochlorite',
        src: 'JP 1-02'
    },
    {
        abbr: 'HU',
        def: 'hospital unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'HUD',
        def: 'head-up display',
        src: 'JP 1-02'
    },
    {
        abbr: 'HUMINT',
        def: 'human intelligence',
        src: '1-02'
    },
    {
        abbr: 'HUMRO',
        def: 'humanitarian relief operation',
        src: 'JP 1-02'
    },
    {
        abbr: 'HUMRO OCP',
        def: 'humanitarian relief operation operational capability package',
        src: '1-02'
    },
    {
        abbr: 'HUS',
        def: 'hardened unique storage',
        src: 'JP 1-02'
    },
    {
        abbr: 'HVA',
        def: 'high-value asset',
        src: '1-02'
    },
    {
        abbr: 'HVAA',
        def: 'high value airborne asset',
        src: '1-02'
    },
    {
        abbr: 'HVAC',
        def: 'heating, ventilation, and air conditioning',
        src: 'JP 1-02'
    },
    {
        abbr: 'HVCDS',
        def: 'high-velocity container delivery system',
        src: '1-02'
    },
    {
        abbr: 'HVI',
        def: 'high-value individual',
        src: '1-02'
    },
    {
        abbr: 'HVT',
        def: 'high-value target',
        src: '1-02'
    },
    {
        abbr: 'HW',
        def: 'hazardous waste',
        src: '1-02'
    },
    {
        abbr: 'HWM',
        def: 'high water mark',
        src: 'JP 1-02'
    },
    {
        abbr: 'HYE',
        def: 'high-yield explosives',
        src: '1-02'
    },
    {
        abbr: 'Hz',
        def: 'hertz',
        src: '1-02'
    },
    {
        abbr: 'I',
        def: 'immediate; individual',
        src: 'JP 1-02'
    },
    {
        abbr: 'I&A',
        def: 'Office of Intelligence and Analysis (DHS)',
        src: '1-02'
    },
    {
        abbr: 'I/B',
        def: 'inboard',
        src: 'JP 1-02'
    },
    {
        abbr: 'I/O',
        def: 'input/output',
        src: 'JP 1-02'
    },
    {
        abbr: 'I/R',
        def: 'internment/resettlement',
        src: '1-02'
    },
    {
        abbr: 'I/R BN',
        def: 'internment/resettlement battalion',
        src: 'JP 1-02'
    },
    {
        abbr: 'I/T',
        def: 'interpreter and translator',
        src: '1-02'
    },
    {
        abbr: 'I2',
        def: 'identity intelligence',
        src: '1-02'
    },
    {
        abbr: 'I2WD',
        def: 'Intelligence and Information Warfare Division (Army)',
        src: '1-02'
    },
    {
        abbr: 'IA',
        def: 'imagery analyst; implementing arrangement; individual augmentee; information assurance',
        src: '1-02'
    },
    {
        abbr: 'IAA',
        def: 'incident area assessment; incident awareness and assessment',
        src: '1-02'
    },
    {
        abbr: 'IAC',
        def: 'Interagency Advisory Council',
        src: 'JP 3-41'
    },
    {
        abbr: 'IACG',
        def: 'interagency coordination group',
        src: '1-02'
    },
    {
        abbr: 'IADB',
        def: 'Inter-American Defense Board',
        src: 'JP 1-02'
    },
    {
        abbr: 'IADS',
        def: 'integrated air defense system',
        src: '1-02'
    },
    {
        abbr: 'IAEA',
        def: 'International Atomic Energy Agency (UN)',
        src: 'JP 1-02'
    },
    {
        abbr: 'IAF',
        def: 'initial approach fix',
        src: 'JP 1-02'
    },
    {
        abbr: 'IAIP',
        def: 'Information Analysis and Infrastructure Protection',
        src: 'JP 2-01'
    },
    {
        abbr: 'IAM',
        def: 'inertially aided munition',
        src: '1-02'
    },
    {
        abbr: 'IAMD',
        def: 'integrated air and missile defense',
        src: '1-02'
    },
    {
        abbr: 'IAMSAR',
        def: 'International Aeronautical and Maritime Search and Rescue manual',
        src: '1-02'
    },
    {
        abbr: 'IAP',
        def: 'incident action plan; international airport',
        src: '1-02'
    },
    {
        abbr: 'IAPP',
        def: 'Interagency Partnership Program',
        src: '1-02'
    },
    {
        abbr: 'IAR',
        def: 'interoperability assessment report',
        src: 'JP 1-02'
    },
    {
        abbr: 'IAS',
        def: 'International Assistance System',
        src: '1-02'
    },
    {
        abbr: 'IASC',
        def: 'Inter-Agency Standing Committee (UN); interim acting service chief',
        src: '1-02'
    },
    {
        abbr: 'IATA',
        def: 'International Air Transport Association',
        src: 'JP 1-02'
    },
    {
        abbr: 'IATACS',
        def: 'Improved Army Tactical Communications System',
        src: 'JP 1-02'
    },
    {
        abbr: 'IATO',
        def: 'interim authority to operate',
        src: 'JP 1-02'
    },
    {
        abbr: 'IAVM',
        def: 'information assurance vulnerability management',
        src: 'JP 6-0'
    },
    {
        abbr: 'IAW',
        def: 'in accordance with',
        src: '1-02'
    },
    {
        abbr: 'IBB',
        def: 'International Broadcasting Bureau',
        src: 'JP 1-02'
    },
    {
        abbr: 'IBCT',
        def: 'infantry brigade combat team',
        src: 'JP 3-34'
    },
    {
        abbr: 'IBES',
        def: 'intelligence budget estimate submission',
        src: 'JP 1-02'
    },
    {
        abbr: 'IBET',
        def: 'integrated border enforcement team',
        src: '1-02'
    },
    {
        abbr: 'IBM',
        def: 'International Business Machines',
        src: 'JP 1-02'
    },
    {
        abbr: 'IBS',
        def: 'Integrated Booking System; integrated broadcast service; Integrated Broadcast System',
        src: '1-02'
    },
    {
        abbr: 'IBS-I',
        def: 'Integrated Broadcast Service-Interactive ',
        src: '1-02'
    },
    {
        abbr: 'IBS-S',
        def: 'Integrated Broadcast Service-Simplex',
        src: '1-02'
    },
    {
        abbr: 'IBU',
        def: 'inshore boat unit',
        src: 'JP 4-01.6'
    },
    {
        abbr: 'IC',
        def: 'incident commander; intelligence community; intercept',
        src: '1-02'
    },
    {
        abbr: 'IC/EXCOM',
        def: 'Intelligence Community Executive Committee',
        src: 'JP 1-02'
    },
    {
        abbr: 'IC3',
        def: 'integrated command, control, and communications',
        src: '1-02'
    },
    {
        abbr: 'ICAD',
        def: 'individual concern and deficiency',
        src: 'JP 1-02'
    },
    {
        abbr: 'ICAF',
        def: 'Interagency Conflict Assessment Framework',
        src: '1-02'
    },
    {
        abbr: 'ICAO',
        def: 'International Civil Aviation Organization',
        src: '1-02'
    },
    {
        abbr: 'ICAT',
        def: 'interagency conflict assessment team',
        src: '1-02'
    },
    {
        abbr: 'ICBM',
        def: 'intercontinental ballistic missile',
        src: '1-02'
    },
    {
        abbr: 'ICC',
        def: 'information confidence convention; information coordination center; Intelligence Coordination Center (USCG); International Criminal Court; Interstate Commerce Commission',
        src: '1-02'
    },
    {
        abbr: 'ICD',
        def: 'international classifications of diseases; International Cooperation and Development Program (USDA)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ICDC',
        def: 'Intelligence Community Deputies Committee',
        src: 'JP 2-01'
    },
    {
        abbr: 'ICDS',
        def: 'improved container delivery system',
        src: '1-02'
    },
    {
        abbr: 'ICE',
        def: 'Immigration and Customs Enforcement',
        src: '1-02'
    },
    {
        abbr: 'ICEDEFOR',
        def: 'Iceland Defense Forces',
        src: 'JP 1-02'
    },
    {
        abbr: 'ICEPP',
        def: 'Incident Communications Emergency Policy and Procedures',
        src: '1-02'
    },
    {
        abbr: 'ICG',
        def: 'interagency core group',
        src: 'JP 1-02'
    },
    {
        abbr: 'ICIS',
        def: 'integrated consumable item support',
        src: '1-02'
    },
    {
        abbr: 'ICITAP',
        def: 'International Criminal Investigative Training Assistance Program (DOJ)',
        src: '1-02'
    },
    {
        abbr: 'ICM',
        def: 'image city map; improved conventional munitions; integrated collection management',
        src: '1-02'
    },
    {
        abbr: 'ICN',
        def: 'idle channel noise; interface control net',
        src: 'JP 1-02'
    },
    {
        abbr: 'ICNIA',
        def: 'integrated communications, navigation, and identification avionics',
        src: 'JP 1-02'
    },
    {
        abbr: 'ICOD',
        def: 'intelligence cutoff data',
        src: 'JP 1-02'
    },
    {
        abbr: 'ICODES',
        def: 'integrated computerized deployment system',
        src: '1-02'
    },
    {
        abbr: 'ICON',
        def: 'imagery communications and operations node; intermediate coordination node',
        src: 'JP 1-02'
    },
    {
        abbr: 'ICP',
        def: 'intertheater communications security package; interface change proposal; inventory control point',
        src: '1-02'
    },
    {
        abbr: 'ICPC',
        def: 'Intelligence Community Principals Committee',
        src: 'JP 1-02'
    },
    {
        abbr: 'ICR',
        def: 'Intelligence Collection Requirements',
        src: 'JP 1-02'
    },
    {
        abbr: 'ICRC',
        def: 'International Committee of the Red Cross',
        src: '1-02'
    },
    {
        abbr: 'ICRI',
        def: 'interswitch collective routing indicator',
        src: 'JP 1-02'
    },
    {
        abbr: 'ICS',
        def: 'incident command system; internal communications system; inter-Service chaplain support',
        src: '1-02'
    },
    {
        abbr: 'ICSAR',
        def: 'interagency committee on search and rescue',
        src: 'JP 1-02'
    },
    {
        abbr: 'ICSF',
        def: 'integrated command communications system framework',
        src: 'JP 3-35'
    },
    {
        abbr: 'ICT',
        def: 'information and communications technology',
        src: '1-02'
    },
    {
        abbr: 'ICU',
        def: 'intensive care unit; interface control unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'ICVA',
        def: 'International Council of Voluntary Agencies',
        src: 'JP 1-02'
    },
    {
        abbr: 'ICW',
        def: 'in coordination with',
        src: '1-02'
    },
    {
        abbr: 'ID',
        def: 'identification; identifier; initiating directive',
        src: '1-02'
    },
    {
        abbr: 'ID/IQ',
        def: 'indefinite delivery/indefinite quantity',
        src: 'JP 4-10'
    },
    {
        abbr: 'IDAD',
        def: 'internal defense and development',
        src: '1-02'
    },
    {
        abbr: 'IDB',
        def: 'integrated database',
        src: 'JP 1-02'
    },
    {
        abbr: 'IDCA',
        def: 'International Development Cooperation Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'IDDF',
        def: 'intermediate data distribution facility',
        src: 'JP 1-02'
    },
    {
        abbr: 'IDEAS',
        def: 'Intelligence Data Elements Authorized Standards',
        src: 'JP 1-02'
    },
    {
        abbr: 'IDEX',
        def: 'imagery data exploitation system',
        src: 'JP 1-02'
    },
    {
        abbr: 'IDF',
        def: 'intermediate distribution frame',
        src: 'JP 1-02'
    },
    {
        abbr: 'IDL',
        def: 'integrated distribution lane',
        src: '1-02'
    },
    {
        abbr: 'IDM',
        def: 'improved data modem; information dissemination management',
        src: 'JP 1-02'
    },
    {
        abbr: 'IDNDR',
        def: 'International Decade for Natural Disaster Reduction (UN)',
        src: 'JP 1-02'
    },
    {
        abbr: 'IDO',
        def: 'installation deployment officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'IDP',
        def: 'imagery derived product; imminent danger pay; internally displaced person',
        src: '1-02'
    },
    {
        abbr: 'IDRA',
        def: 'infectious disease risk assessment',
        src: 'JP 1-02'
    },
    {
        abbr: 'IDS',
        def: 'individual deployment site; integrated deployment system; interface design standards; intrusion detection system',
        src: 'JP 1-02'
    },
    {
        abbr: 'IDSRS',
        def: 'Integrated Defense Source Registration System',
        src: '1-02'
    },
    {
        abbr: 'IDSS',
        def: 'interoperability decision support system',
        src: 'JP 1-02'
    },
    {
        abbr: 'IDT',
        def: 'inactive duty training',
        src: 'JP 1-02'
    },
    {
        abbr: 'IDZ',
        def: 'inner defense zone',
        src: 'JP 1-02'
    },
    {
        abbr: 'IEB',
        def: 'intelligence exploitation base',
        src: 'JP 2-01.2'
    },
    {
        abbr: 'IED',
        def: 'improvised explosive device',
        src: '1-02'
    },
    {
        abbr: 'IEDD',
        def: 'improvised explosive device defeat',
        src: 'JP 3-15'
    },
    {
        abbr: 'IEEE',
        def: 'Institute of Electrical and Electronics Engineers',
        src: '1-02'
    },
    {
        abbr: 'IEL',
        def: 'illustrative evaluation scenario',
        src: 'JP 1-02'
    },
    {
        abbr: 'IEM',
        def: 'installation emergency management',
        src: '1-02'
    },
    {
        abbr: 'IEMATS',
        def: 'improved emergency message automatic transmission system',
        src: 'JP 1-02'
    },
    {
        abbr: 'IER',
        def: 'information exchange requirement',
        src: 'JP 1-02'
    },
    {
        abbr: 'IES',
        def: 'imagery exploitation system',
        src: 'JP 1-02'
    },
    {
        abbr: 'IESS',
        def: 'imagery exploitation support system',
        src: 'JP 1-02'
    },
    {
        abbr: 'IEW',
        def: 'intelligence and electronic warfare',
        src: 'JP 1-02'
    },
    {
        abbr: 'IF',
        def: 'intermediate frequency',
        src: 'JP 1-02'
    },
    {
        abbr: 'IFC',
        def: 'intelligence fusion center',
        src: 'JP 1-02'
    },
    {
        abbr: 'IFCS',
        def: 'improved fire control system',
        src: 'JP 1-02'
    },
    {
        abbr: 'IFF',
        def: 'identification, friend or foe',
        src: '1-02'
    },
    {
        abbr: 'IFF/SIF',
        def: 'identification, friend or foe/selective identification feature',
        src: 'JP 1-02'
    },
    {
        abbr: 'IFFN',
        def: 'identification, friend, foe, or neutral',
        src: 'JP 1-02'
    },
    {
        abbr: 'IFO',
        def: 'integrated financial operations',
        src: '1-02'
    },
    {
        abbr: 'IFP',
        def: 'integrated force package',
        src: '1-02'
    },
    {
        abbr: 'IFR',
        def: 'instrument flight rules',
        src: '1-02'
    },
    {
        abbr: 'IFRC',
        def: 'International Federation of Red Cross and Red Crescent Societies',
        src: '1-02'
    },
    {
        abbr: 'IFSAR',
        def: 'interferometric synthetic aperture radar',
        src: 'JP 1-02'
    },
    {
        abbr: 'IG',
        def: 'inspector general',
        src: '1-02'
    },
    {
        abbr: 'IGC',
        def: 'Integrated Data Environment/Global Transportation Network Convergence',
        src: '1-02'
    },
    {
        abbr: 'IGL',
        def: 'intelligence gain/loss',
        src: '1-02'
    },
    {
        abbr: 'IGO',
        def: 'intergovernmental organization',
        src: '1-02'
    },
    {
        abbr: 'IGSM',
        def: 'interim ground station module (JSTARS)',
        src: 'JP 1-02'
    },
    {
        abbr: 'IHADSS',
        def: 'integrated helmet and display sight system (Army)',
        src: 'JP 1-02'
    },
    {
        abbr: 'IHC',
        def: 'international humanitarian community',
        src: '1-02'
    },
    {
        abbr: 'IHO',
        def: 'industrial hygiene officer',
        src: 'JP 4-02'
    },
    {
        abbr: 'IHS',
        def: 'international health specialist',
        src: '1-02'
    },
    {
        abbr: 'IIB',
        def: 'interagency information bureau',
        src: 'JP 1-02'
    },
    {
        abbr: 'IICL',
        def: 'Institute of International Container Lessons',
        src: 'JP 1-02'
    },
    {
        abbr: 'IICT',
        def: 'Interagency Intelligence Committee on Counterterrorism',
        src: '1-02'
    },
    {
        abbr: 'IIM',
        def: 'intelligence information management',
        src: 'JP 1-02'
    },
    {
        abbr: 'IIP',
        def: 'Bureau of International Information Programs (DOS); interagency implementation plan; international information program; interoperability improvement program',
        src: '1-02'
    },
    {
        abbr: 'IIR',
        def: 'imagery interpretation report; imagery infared; intelligence information report',
        src: 'JP 1-02'
    },
    {
        abbr: 'IJC3S',
        def: 'initial joint command, control, and communications system; Integrated Joint Command, Control, and Communications System',
        src: 'JP 1-02'
    },
    {
        abbr: 'IL',
        def: 'intermediate location',
        src: 'JP 1-02'
    },
    {
        abbr: 'ILAB',
        def: 'Bureau of International Labor Affairs (DOL)',
        src: '1-02'
    },
    {
        abbr: 'ILO',
        def: 'in lieu of; International Labor Organization (UN)',
        src: '1-02'
    },
    {
        abbr: 'ILOC',
        def: 'integrated line of communications',
        src: '1-02'
    },
    {
        abbr: 'ILS',
        def: 'integrated logistic support',
        src: 'JP 1-02'
    },
    {
        abbr: 'IM',
        def: 'information management; intermediate module',
        src: '1-02'
    },
    {
        abbr: 'IMA',
        def: 'individual mobilization augmentee',
        src: '1-02'
    },
    {
        abbr: 'IMAAC',
        def: 'Interagency Modeling and Atmospheric Assessment Center',
        src: '1-02'
    },
    {
        abbr: 'IMC',
        def: 'instrument meteorological conditions; International Medical Corps',
        src: '1-02'
    },
    {
        abbr: 'IMDC',
        def: 'isolated, missing, detained, or captured',
        src: 'JP 3-50'
    },
    {
        abbr: 'IMDG',
        def: 'international maritime dangerous goods (UN)',
        src: '1-02'
    },
    {
        abbr: 'IMET',
        def: 'international military education and training',
        src: '1-02'
    },
    {
        abbr: 'IMETS',
        def: 'Integrated Meteorological System',
        src: 'JP 1-02'
    },
    {
        abbr: 'IMF',
        def: 'International Monetary Fund (UN)',
        src: 'JP 1-02'
    },
    {
        abbr: 'IMI',
        def: 'international military information',
        src: 'JP 1-02'
    },
    {
        abbr: 'IMINT',
        def: 'imagery intelligence',
        src: '1-02'
    },
    {
        abbr: 'IMIT',
        def: 'international military information team',
        src: 'JP 1-02'
    },
    {
        abbr: 'IMLTU',
        def: 'intermatrix line termination unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'IMM',
        def: 'integrated materiel management; intelligence mission management',
        src: '1-02'
    },
    {
        abbr: 'IMMDELREQ',
        def: 'immediate delivery required',
        src: 'JP 1-02'
    },
    {
        abbr: 'IMO',
        def: 'information management officer; International Maritime Organization',
        src: '1-02'
    },
    {
        abbr: 'IMOSAR',
        def: 'International Maritime Organization (IMO) search and rescue manual',
        src: 'JP 1-02'
    },
    {
        abbr: 'IMOSS',
        def: 'interim mobile oceanographic support system',
        src: 'JP 1-02'
    },
    {
        abbr: 'IMP',
        def: 'implementation; information management plan; inventory management plan',
        src: '1-02'
    },
    {
        abbr: 'IMPP',
        def: 'integrated mission planning process',
        src: '1-02'
    },
    {
        abbr: 'IMPT',
        def: 'incident management planning team; integrated mission planning team',
        src: '1-02'
    },
    {
        abbr: 'IMRL',
        def: 'individual material requirements list',
        src: '1-02'
    },
    {
        abbr: 'IMS',
        def: 'information management system; interagency management system; Interagency Management System for Reconstruction and Stabilization; international military staff; international military standardization ',
        src: '1-02'
    },
    {
        abbr: 'IMSP',
        def: 'information management support plan',
        src: '1-02'
    },
    {
        abbr: 'IMSU',
        def: 'installation medical support unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'IMTF',
        def: 'integrated mission task force',
        src: '1-02'
    },
    {
        abbr: 'IMU',
        def: 'inertial measuring unit; intermatrix unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'IN',
        def: 'Air Force component intelligence officer (staff); impulse noise; instructor',
        src: 'JP 1-02'
    },
    {
        abbr: 'INCERFA',
        def: 'uncertainty phase (ICAO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'INCNR',
        def: 'increment number',
        src: 'JP 1-02'
    },
    {
        abbr: 'INCSEA',
        def: 'incidents at sea',
        src: 'JP 1-02'
    },
    {
        abbr: 'IND',
        def: 'improvised nuclear device',
        src: '1-02'
    },
    {
        abbr: 'INDRAC',
        def: 'Interagency Combating Weapons of Mass Destruction Database of Responsibilities, Authorities, and Capabilities',
        src: '1-02'
    },
    {
        abbr: 'INF',
        def: 'infantry',
        src: 'JP 1-02'
    },
    {
        abbr: 'INFOCON',
        def: 'information operations condition',
        src: 'JP 1-02'
    },
    {
        abbr: 'INID',
        def: 'intercept network in dialing',
        src: 'JP 1-02'
    },
    {
        abbr: 'INJILL',
        def: 'injured or ill',
        src: 'JP 1-02'
    },
    {
        abbr: 'INL',
        def: 'Bureau of International Narcotics and Law Enforcement Affairs (DOS)',
        src: '1-02'
    },
    {
        abbr: 'INLS',
        def: 'improved Navy lighterage system',
        src: '1-02'
    },
    {
        abbr: 'INM',
        def: 'international narcotics matters',
        src: 'JP 1-02'
    },
    {
        abbr: 'INMARSAT',
        def: 'international maritime satellite',
        src: 'JP 1-02'
    },
    {
        abbr: 'INR',
        def: 'Bureau of Intelligence and Research (DOS)',
        src: '1-02'
    },
    {
        abbr: 'INREQ',
        def: 'information request',
        src: 'JP 1-02'
    },
    {
        abbr: 'INRP',
        def: 'Initial National Response Plan',
        src: 'JP 3-08'
    },
    {
        abbr: 'INS',
        def: 'Immigration and Naturalization Service; inertial navigation system; insert code',
        src: '1-02'
    },
    {
        abbr: 'INSARAG',
        def: 'International Search and Rescue Advisory Group',
        src: '1-02'
    },
    {
        abbr: 'INSCOM',
        def: 'United States Army Intelligence and Security Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'INTAC',
        def: 'individual terrorism awareness course',
        src: 'JP 1-02'
    },
    {
        abbr: 'INTACS',
        def: 'integrated tactical communications system',
        src: 'JP 1-02'
    },
    {
        abbr: 'INTELSAT',
        def: 'International Telecommunications Satellite Organization',
        src: 'JP 1-02'
    },
    {
        abbr: 'INTELSITSUM',
        def: 'intelligence situation summary',
        src: 'JP 1-02'
    },
    {
        abbr: 'InterAction',
        def: 'American Council for Voluntary International Action',
        src: '1-02'
    },
    {
        abbr: 'INTERCO',
        def: 'International Code of Signals',
        src: 'JP 1-02'
    },
    {
        abbr: 'INTERPOL',
        def: 'International Criminal Police Organization',
        src: 'JP 1-02'
    },
    {
        abbr: 'INTERPOL-USNCB',
        def: 'International Criminal Police Organization United States National Central Bureau (DOJ)',
        src: 'JP 1-02'
    },
    {
        abbr: 'INTREP',
        def: 'intelligence report',
        src: 'JP 1-02'
    },
    {
        abbr: 'INU',
        def: 'inertial navigation unit; integration unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'INV',
        def: 'invalid',
        src: 'JP 1-02'
    },
    {
        abbr: 'INVOL',
        def: 'involuntary',
        src: 'JP 1-02'
    },
    {
        abbr: 'IO',
        def: 'information objectives; information operations; intelligence oversight',
        src: '1-02'
    },
    {
        abbr: 'IO force',
        def: 'information operations force',
        src: '1-02'
    },
    {
        abbr: 'IOB',
        def: 'intelligence oversight board',
        src: '1-02'
    },
    {
        abbr: 'IOC',
        def: 'Industrial Operations Command; initial operational capability; intelligence operations center; investigations operations center',
        src: 'JP 1-02'
    },
    {
        abbr: 'IOCB',
        def: 'information operations coordination board',
        src: '1-02'
    },
    {
        abbr: 'IOI',
        def: 'injured other than hostilities or illness',
        src: 'JP 1-02'
    },
    {
        abbr: 'IOII',
        def: 'information operations intelligence integration',
        src: '1-02'
    },
    {
        abbr: 'IOM',
        def: 'installation, operation, and maintenance; International Organization for Migration',
        src: '1-02'
    },
    {
        abbr: 'IOP',
        def: 'interface operating procedure',
        src: 'JP 1-02'
    },
    {
        abbr: 'IOSS',
        def: 'Interagency Operations Security Support Staff',
        src: '1-02'
    },
    {
        abbr: 'IOT',
        def: 'information operations team',
        src: '1-02'
    },
    {
        abbr: 'IOU',
        def: 'input/output unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'IOW',
        def: 'information operations wing',
        src: '1-02'
    },
    {
        abbr: 'IOWG',
        def: 'information operations working group',
        src: '1-02'
    },
    {
        abbr: 'IP',
        def: 'initial point; initial position; instructor pilot; intelligence planning; internet protocol',
        src: '1-02'
    },
    {
        abbr: 'IPA',
        def: 'intelligence production agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'IPB',
        def: 'intelligence preparation of the battlespace',
        src: '1-02'
    },
    {
        abbr: 'IPBD',
        def: 'intelligence program budget decision',
        src: 'JP 1-02'
    },
    {
        abbr: 'IPC',
        def: 'initial planning conference; integration planning cell; interagency planning cell; interagency policy committee',
        src: '1-02'
    },
    {
        abbr: 'IPDM',
        def: 'intelligence program decision memorandum',
        src: 'JP 1-02'
    },
    {
        abbr: 'IPDP',
        def: 'inland petroleum distribution plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'IPDS',
        def: 'imagery processing and dissemination system; inland petroleum distribution system (Army)',
        src: '1-02'
    },
    {
        abbr: 'IPE',
        def: 'individual protective equipment; industrial plant equipment',
        src: '1-02'
    },
    {
        abbr: 'IPG',
        def: 'isolated personnel guidance',
        src: '1-02'
    },
    {
        abbr: 'IPI',
        def: 'indigenous populations and institutions',
        src: '1-02'
    },
    {
        abbr: 'IPL',
        def: 'imagery product library; integrated priority list',
        src: 'JP 1-02'
    },
    {
        abbr: 'IPO',
        def: 'International Program Office',
        src: 'JP 1-02'
    },
    {
        abbr: 'IPOE',
        def: 'intelligence preparation of the operational environment',
        src: 'JP 3-01'
    },
    {
        abbr: 'IPOM',
        def: 'intelligence program objective memorandum',
        src: 'JP 1-02'
    },
    {
        abbr: 'IPP',
        def: 'impact point prediction; industrial preparedness program',
        src: 'JP 1-02'
    },
    {
        abbr: 'IPR',
        def: 'in-progress review; intelligence production requirement',
        src: '1-02'
    },
    {
        abbr: 'IPR F',
        def: 'plan approval in-progress review',
        src: '1-02'
    },
    {
        abbr: 'IPRG',
        def: 'intelligence program review group',
        src: 'JP 1-02'
    },
    {
        abbr: 'IPS',
        def: 'illustrative planning scenario; Integrated Planning System (DHS); Interim Polar System; interoperability planning system',
        src: '1-02'
    },
    {
        abbr: 'IPSG',
        def: 'intelligence program support group',
        src: 'JP 1-02'
    },
    {
        abbr: 'IPSP',
        def: 'intelligence priorities for strategic planning',
        src: 'JP 1-02'
    },
    {
        abbr: 'IPT',
        def: 'integrated planning team; integrated process team; Integrated Product Team; intelligence planning team',
        src: '1-02'
    },
    {
        abbr: 'IR',
        def: 'incident report; information rate; information requirement; infrared; intelligence requirement',
        src: '1-02'
    },
    {
        abbr: 'IR pointer',
        def: 'infrared pointer',
        src: 'JP 1-02'
    },
    {
        abbr: 'IRA',
        def: 'Provisional Irish Republican Army',
        src: '1-02'
    },
    {
        abbr: 'IRAC',
        def: 'Interdepartment Radio Advisory Committee (DOC)',
        src: '1-02'
    },
    {
        abbr: 'IRBM',
        def: 'intermediate-range ballistic missile',
        src: '1-02'
    },
    {
        abbr: 'IRC',
        def: 'information-related capability; International Red Cross; International Rescue Committee; internet relay chat',
        src: '1-02'
    },
    {
        abbr: 'IRCCM',
        def: 'infrared counter countermeasures',
        src: 'JP 1-02'
    },
    {
        abbr: 'IRCM',
        def: 'infrared countermeasures',
        src: 'JP 1-02'
    },
    {
        abbr: 'IRDS',
        def: 'infrared detection set',
        src: 'JP 1-02'
    },
    {
        abbr: 'IRF',
        def: 'Immediate Reaction Forces (NATO); incident response force',
        src: '1-02'
    },
    {
        abbr: 'IRINT',
        def: 'infrared intelligence',
        src: 'JP 1-02'
    },
    {
        abbr: 'IRISA',
        def: 'Intelligence Report Index Summary File',
        src: 'JP 1-02'
    },
    {
        abbr: 'IRO',
        def: 'international relief organization',
        src: 'JP 1-02'
    },
    {
        abbr: 'IRR',
        def: 'Individual Ready Reserve; integrated readiness report',
        src: '1-02'
    },
    {
        abbr: 'IRS',
        def: 'Internal Revenue Service',
        src: '1-02'
    },
    {
        abbr: 'IRSCC',
        def: 'interagency remote sensing coordination cell',
        src: '1-02'
    },
    {
        abbr: 'IRST',
        def: 'infrared search and track',
        src: 'JP 1-02'
    },
    {
        abbr: 'IRSTS',
        def: 'infrared search and track sensor; Infrared Search and Track System',
        src: 'JP 1-02'
    },
    {
        abbr: 'IRT',
        def: 'Initial Response Team',
        src: 'JP 1-02'
    },
    {
        abbr: 'IRTPA',
        def: 'Intelligence Reform and Terrorism Prevention Act',
        src: '1-02'
    },
    {
        abbr: 'IS',
        def: 'information superiority; information system; interswitch',
        src: '1-02'
    },
    {
        abbr: 'ISA',
        def: 'individual Service augmentee; international standardization agreement; inter-Service agreement',
        src: '1-02'
    },
    {
        abbr: 'ISAC',
        def: 'information sharing and analysis center',
        src: '1-02'
    },
    {
        abbr: 'ISAF',
        def: 'International Security Assistance Force',
        src: '1-02'
    },
    {
        abbr: 'ISB',
        def: 'intermediate staging base',
        src: '1-02'
    },
    {
        abbr: 'ISDB',
        def: 'integrated satellite communications (SATCOM) database',
        src: 'JP 1-02'
    },
    {
        abbr: 'ISDDC',
        def: 'Integrated Mission Support for Surface Deployment and Distribution Command',
        src: '1-02'
    },
    {
        abbr: 'ISE',
        def: 'Information Sharing Environment; intelligence support element',
        src: '1-02'
    },
    {
        abbr: 'ISG',
        def: 'information synchronization group; isolated soldier guidance',
        src: '1-02'
    },
    {
        abbr: 'ISI2R',
        def: 'identify, separate, isolate, influence, and reintegrate',
        src: '1-02'
    },
    {
        abbr: 'ISMCS',
        def: 'international station meteorological climatic summary',
        src: 'JP 1-02'
    },
    {
        abbr: 'ISMMP',
        def: 'integrated continental United States (CONUS) medical mobilization plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'ISN',
        def: 'Bureau of International Security and Nonproliferation (DOS); internment serial number ',
        src: '1-02'
    },
    {
        abbr: 'ISO',
        def: 'International Organization for Standardization; isolation',
        src: '1-02'
    },
    {
        abbr: 'ISOO',
        def: 'Information Security Oversight Office',
        src: 'JP 1-02'
    },
    {
        abbr: 'ISOPAK',
        def: 'International Organization for Standardization package',
        src: '1-02'
    },
    {
        abbr: 'ISOPREP',
        def: 'isolated personnel report',
        src: 'JP 1-02'
    },
    {
        abbr: 'ISP',
        def: 'internet service provider',
        src: 'JP 1-02'
    },
    {
        abbr: 'ISR',
        def: 'intelligence, surveillance, and reconnaissance',
        src: '1-02'
    },
    {
        abbr: 'ISR WG',
        def: 'Intelligence, Surveillance, and Reconnaissance Wing',
        src: '1-02'
    },
    {
        abbr: 'ISRD',
        def: 'intelligence, surveillance, and reconnaissance division',
        src: '1-02'
    },
    {
        abbr: 'ISS',
        def: 'in-system select',
        src: 'JP 4-02'
    },
    {
        abbr: 'ISSA',
        def: 'inter-Service support agreement',
        src: 'JP 1-02'
    },
    {
        abbr: 'ISSG',
        def: 'Intelligence Senior Steering Group',
        src: 'JP 2-01'
    },
    {
        abbr: 'ISSM',
        def: 'information system security manager',
        src: 'JP 1-02'
    },
    {
        abbr: 'ISSO',
        def: 'information systems security organization',
        src: 'JP 1-02'
    },
    {
        abbr: 'IST',
        def: 'integrated system test; interswitch trunk',
        src: 'JP 1-02'
    },
    {
        abbr: 'ISU',
        def: 'internal airlift or helicopter slingable container unit',
        src: '1-02'
    },
    {
        abbr: 'IT',
        def: 'information system technician; information technology',
        src: '1-02'
    },
    {
        abbr: 'ITA',
        def: 'international telegraphic alphabet; International Trade Administration (DOC)',
        src: '1-02'
    },
    {
        abbr: 'ITAC',
        def: 'intelligence and threat analysis center (Army)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ITALD',
        def: 'improved tactical air-launched decoy',
        src: 'JP 1-02'
    },
    {
        abbr: 'ITAR',
        def: 'international traffic in arms regulation (coassembly)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ITF',
        def: 'intelligence task force (DIA)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ITG',
        def: 'infrared target graphic',
        src: 'JP 1-02'
    },
    {
        abbr: 'ITL',
        def: 'intelligence task list',
        src: '1-02'
    },
    {
        abbr: 'ITO',
        def: 'installation transportation officer',
        src: '1-02'
    },
    {
        abbr: 'ITRO',
        def: 'inter-Service training organization',
        src: 'JP 1-02'
    },
    {
        abbr: 'ITU',
        def: 'International Telecommunications Union',
        src: '1-02'
    },
    {
        abbr: 'ITV',
        def: 'in-transit visibility',
        src: '1-02'
    },
    {
        abbr: 'ITW/AA',
        def: 'integrated tactical warning and attack assessment',
        src: '1-02'
    },
    {
        abbr: 'IUWG',
        def: 'inshore undersea warfare group',
        src: 'JP 1-02'
    },
    {
        abbr: 'IV',
        def: 'intravenous',
        src: 'JP 1-02'
    },
    {
        abbr: 'IVR',
        def: 'initial voice report',
        src: 'JP 1-02'
    },
    {
        abbr: 'IVSN',
        def: 'Initial Voice Switched Network',
        src: 'JP 1-02'
    },
    {
        abbr: 'IW',
        def: 'irregular warfare',
        src: '1-02'
    },
    {
        abbr: 'IW-D',
        def: 'defensive information warfare',
        src: 'JP 1-02'
    },
    {
        abbr: 'IWC',
        def: 'information operations warfare commander',
        src: '1-02'
    },
    {
        abbr: 'IWG',
        def: 'intelligence working group; interagency working group',
        src: 'JP 1-02'
    },
    {
        abbr: 'IWSC',
        def: 'Information Warfare Support Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'IWW',
        def: 'inland waterway',
        src: '1-02'
    },
    {
        abbr: 'IWWS',
        def: 'inland waterway system',
        src: '1-02'
    },
    {
        abbr: 'J-1',
        def: 'manpower and personnel directorate of a joint staff; manpower and personnel staff section',
        src: '1-02'
    },
    {
        abbr: 'J-2',
        def: 'intelligence directorate of a joint staff; intelligence staff section',
        src: '1-02'
    },
    {
        abbr: 'J-2A',
        def: 'deputy directorate for administration of a joint staff',
        src: 'JP 1-02'
    },
    {
        abbr: 'J-2E',
        def: 'joint force exploitation staff element',
        src: '1-02'
    },
    {
        abbr: 'J-2J',
        def: 'deputy directorate for support of a joint staff',
        src: 'JP 2-01'
    },
    {
        abbr: 'J-2M',
        def: 'deputy directorate for crisis management of a joint staff',
        src: 'JP 2-01'
    },
    {
        abbr: 'J-2O',
        def: 'deputy directorate for crisis operations of a joint staff',
        src: 'JP 1-02'
    },
    {
        abbr: 'J-2P',
        def: 'deputy directorate for assessment, doctrine, requirements, and capabilities of a joint staff',
        src: 'JP 2-01'
    },
    {
        abbr: 'J-2T',
        def: 'Deputy Directorate for Targeting, Joint Staff Intelligence Directorate',
        src: 'JP 1-02'
    },
    {
        abbr: 'J-2T-1',
        def: 'joint staff target operations division',
        src: 'JP 2-01'
    },
    {
        abbr: 'J-2T-2',
        def: 'Target Plans Division',
        src: 'JP 2-01'
    },
    {
        abbr: 'J-2X',
        def: 'joint force counterintelligence and human intelligence staff element',
        src: '1-02'
    },
    {
        abbr: 'J-3',
        def: 'operations directorate of a joint staff; operations staff section',
        src: '1-02'
    },
    {
        abbr: 'J-31',
        def: 'Joint Force Coordinator (Joint Staff)',
        src: '1-02'
    },
    {
        abbr: 'J-35',
        def: 'future operations cell',
        src: '1-02'
    },
    {
        abbr: 'J-39 DDGO',
        def: 'Joint Staff, Deputy Director for Global Operations',
        src: '1-02'
    },
    {
        abbr: 'J-4',
        def: 'logistics directorate of a joint staff; logistics staff section',
        src: '1-02'
    },
    {
        abbr: 'J-5',
        def: 'plans directorate of a joint staff; plans staff section',
        src: '1-02'
    },
    {
        abbr: 'J-6',
        def: 'communications system directorate of a joint staff; command, control, communications, and computer systems staff section',
        src: '1-02'
    },
    {
        abbr: 'J-7',
        def: 'engineering staff section of a joint staff; Joint Staff Directorate for Joint Force Development; operational plans and interoperability directorate of a joint staff',
        src: '1-02'
    },
    {
        abbr: 'J-7/JED',
        def: 'exercises and training directorate of a joint staff',
        src: 'JP 3-32'
    },
    {
        abbr: 'J-8',
        def: 'Joint Staff Directorate for Force Structure, Resource, and Assessment; force structure, resource, and assessment directorate of a joint staff',
        src: '1-02'
    },
    {
        abbr: 'J-9',
        def: 'civil-military operations directorate of a joint staff; civil-military operations staff section',
        src: '1-02'
    },
    {
        abbr: 'J-A',
        def: 'judge advocate directorate of a joint staff',
        src: '1-02'
    },
    {
        abbr: 'J2-CI',
        def: 'Joint Counterintelligence Office',
        src: 'JP 1-02'
    },
    {
        abbr: 'JA',
        def: 'judge advocate',
        src: 'JP 1-02'
    },
    {
        abbr: 'JA/ATT',
        def: 'joint airborne and air transportability training',
        src: '1-02'
    },
    {
        abbr: 'JAARS',
        def: 'Joint After-Action Reporting System',
        src: 'JP 1-02'
    },
    {
        abbr: 'JAAT',
        def: 'joint air attack team',
        src: 'JP 1-02'
    },
    {
        abbr: 'JAC',
        def: 'joint analysis center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JACC',
        def: 'joint airspace control center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JACC/CP',
        def: 'joint airborne communications center/command post',
        src: 'JP 1-02'
    },
    {
        abbr: 'JACCC',
        def: 'joint airlift coordination and control cell',
        src: 'JP 1-02'
    },
    {
        abbr: 'JACCE',
        def: 'joint air component coordination element',
        src: '1-02'
    },
    {
        abbr: 'JACS',
        def: 'joint automated communication-electronics operating instructions system',
        src: '1-02'
    },
    {
        abbr: 'JADO',
        def: 'joint air defense operations',
        src: 'JP 1-02'
    },
    {
        abbr: 'JADOC',
        def: 'Joint Air Defense Operations Center (NORAD)',
        src: '1-02'
    },
    {
        abbr: 'JADOCS',
        def: 'Joint Automated Deep Operations Coordination System',
        src: '1-02'
    },
    {
        abbr: 'JAFWIN',
        def: 'JWICS Air Force weather information network',
        src: 'JP 1-02'
    },
    {
        abbr: 'JAG',
        def: 'judge advocate general',
        src: '1-02'
    },
    {
        abbr: 'JAGIC',
        def: 'joint air-ground integration center',
        src: '1-02'
    },
    {
        abbr: 'JAGMAN',
        def: 'Manual of the Judge Advocate General (US Navy)',
        src: 'JP 1-04'
    },
    {
        abbr: 'JAI',
        def: 'joint administrative instruction; joint airdrop inspection',
        src: 'JP 1-02'
    },
    {
        abbr: 'JAIC',
        def: 'joint air intelligence center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JAIEG',
        def: 'joint atomic information exchange group',
        src: 'JP 1-02'
    },
    {
        abbr: 'JAMMS',
        def: 'Joint Asset Movement Management System',
        src: '1-02'
    },
    {
        abbr: 'JAMPS',
        def: 'Joint Interoperability of Tactical Command and Control Systems (JINTACCS) automated message preparation system',
        src: 'JP 1-02'
    },
    {
        abbr: 'JANAP',
        def: 'Joint Army, Navy, Air Force publication',
        src: 'JP 1-02'
    },
    {
        abbr: 'JAO',
        def: 'joint air operations',
        src: 'JP 1-02'
    },
    {
        abbr: 'JAOC',
        def: 'joint air operations center',
        src: '1-02'
    },
    {
        abbr: 'JAOP',
        def: 'joint air operations plan',
        src: '1-02'
    },
    {
        abbr: 'JAPO',
        def: 'joint area petroleum office',
        src: 'JP 1-02'
    },
    {
        abbr: 'JAR',
        def: 'joint activity report',
        src: 'JP 1-02'
    },
    {
        abbr: 'JARCC',
        def: 'joint air reconnaissance control center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JARN',
        def: 'joint air request net',
        src: '1-02'
    },
    {
        abbr: 'JARS',
        def: 'joint automated readiness system',
        src: 'JP 1-02'
    },
    {
        abbr: 'JASC',
        def: 'joint action steering committee',
        src: 'JP 1-02'
    },
    {
        abbr: 'JASSM',
        def: 'joint air-to-surface standoff missile',
        src: '1-02'
    },
    {
        abbr: 'JAT',
        def: 'joint acceptance test; joint assessment team',
        src: '1-02'
    },
    {
        abbr: 'JAT Guide',
        def: 'Joint Antiterrorism Program Manager\'s Guide',
        src: 'JP 3-07.2'
    },
    {
        abbr: 'JATACS',
        def: 'joint advanced tactical cryptological support',
        src: 'JP 1-02'
    },
    {
        abbr: 'JAWS',
        def: 'Joint Munitions Effectiveness Manual (JMEM)/air-to-surface weaponeering system',
        src: 'JP 1-02'
    },
    {
        abbr: 'JBP',
        def: 'Joint Blood Program',
        src: 'JP 1-02'
    },
    {
        abbr: 'JBPO',
        def: 'joint blood program office',
        src: '1-02'
    },
    {
        abbr: 'JC2WC',
        def: 'joint command and control warfare center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JCA',
        def: 'jamming control authority; joint capability area',
        src: '1-02'
    },
    {
        abbr: 'JCASO',
        def: 'Joint Contingency Acquisition Support Office (DLA)',
        src: '1-02'
    },
    {
        abbr: 'JCASREP',
        def: 'joint casualty report',
        src: 'JP 1-02'
    },
    {
        abbr: 'JCAT',
        def: 'joint crisis action team',
        src: 'JP 1-02'
    },
    {
        abbr: 'JCC',
        def: 'joint collaboration cell; joint command center; joint contracting center; joint course catalog; joint cyberspace center',
        src: '1-02'
    },
    {
        abbr: 'JCCA',
        def: 'joint combat capability assessment',
        src: '1-02'
    },
    {
        abbr: 'JCCB',
        def: 'Joint Configuration Control Board',
        src: 'JP 1-02'
    },
    {
        abbr: 'JCCC',
        def: 'joint combat camera center; joint communications control center',
        src: '1-02'
    },
    {
        abbr: 'JCCP',
        def: 'joint casualty collection point',
        src: 'JP 1-02'
    },
    {
        abbr: 'JCCSE',
        def: 'Joint Continental United States Communications Support Environment',
        src: '1-02'
    },
    {
        abbr: 'JCE',
        def: 'Joint Intelligence Virtual Architecture (JIVA) Collaborative Environment',
        src: 'JP 2-01'
    },
    {
        abbr: 'JCEOI',
        def: 'joint communications-electronics operating instructions',
        src: '1-02'
    },
    {
        abbr: 'JCET',
        def: 'joint combined exchange training; joint combined exercise for training',
        src: 'JP 3-05'
    },
    {
        abbr: 'JCEWR',
        def: 'joint coordination of electronic warfare reprogramming',
        src: '1-02'
    },
    {
        abbr: 'JCEWS',
        def: 'joint force commander\'s electronic warfare staff',
        src: '1-02'
    },
    {
        abbr: 'JCGRO',
        def: 'joint central graves registration office',
        src: 'JP 1-02'
    },
    {
        abbr: 'JCIDO',
        def: 'Joint Combat Identification Office',
        src: 'JP 1-02'
    },
    {
        abbr: 'JCIOC',
        def: 'joint counterintelligence operations center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JCISA',
        def: 'Joint Command Information Systems Activity',
        src: 'JP 6-0'
    },
    {
        abbr: 'JCISB',
        def: 'Joint Counterintelligence Support Branch',
        src: 'JP 1-02'
    },
    {
        abbr: 'JCIU',
        def: 'joint counterintelligence unit',
        src: '1-02'
    },
    {
        abbr: 'JCLL',
        def: 'joint center for lessons learned',
        src: 'JP 1-02'
    },
    {
        abbr: 'JCMA',
        def: 'joint communications security monitoring activity',
        src: '1-02'
    },
    {
        abbr: 'JCMB',
        def: 'joint collection management board ',
        src: '1-02'
    },
    {
        abbr: 'JCMC',
        def: 'joint crisis management capability',
        src: 'JP 1-02'
    },
    {
        abbr: 'JCMEB',
        def: 'joint civil-military engineer board',
        src: '1-02'
    },
    {
        abbr: 'JCMEC',
        def: 'Joint Captured Materiel Exploitation Center (DIA)',
        src: '1-02'
    },
    {
        abbr: 'JCMO',
        def: 'joint communications security management office',
        src: '1-02'
    },
    {
        abbr: 'JCMOTF',
        def: 'joint civil-military operations task force',
        src: '1-02'
    },
    {
        abbr: 'JCMPO',
        def: 'Joint Cruise Missile Project Office',
        src: 'JP 1-02'
    },
    {
        abbr: 'JCMS',
        def: 'Joint Construction Management System',
        src: '1-02'
    },
    {
        abbr: 'JCMT',
        def: 'joint collection management tools',
        src: 'JP 1-02'
    },
    {
        abbr: 'JCN',
        def: 'joint communications network',
        src: 'JP 1-02'
    },
    {
        abbr: 'JCRM',
        def: 'Joint Capabilities Requirements Manager',
        src: '1-02'
    },
    {
        abbr: 'JCS',
        def: 'Joint Chiefs of Staff',
        src: '1-02'
    },
    {
        abbr: 'JCSAN',
        def: 'Joint Chiefs of Staff Alerting Network',
        src: 'JP 1-02'
    },
    {
        abbr: 'JCSAR',
        def: 'joint combat search and rescue',
        src: 'JP 1-02'
    },
    {
        abbr: 'JCSB',
        def: 'joint contracting support board',
        src: '1-02'
    },
    {
        abbr: 'JCSC',
        def: 'joint communications satellite center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JCSE',
        def: 'joint communications support element; Joint Communications Support Element (USTRANSCOM)',
        src: '1-02'
    },
    {
        abbr: 'JCSM',
        def: 'Joint Chiefs of Staff memorandum',
        src: 'JP 1-02'
    },
    {
        abbr: 'JCSP',
        def: 'joint contracting support plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'JCSS',
        def: 'joint communications support squadron',
        src: 'JP 1-02'
    },
    {
        abbr: 'JCTN',
        def: 'joint composite track network',
        src: 'JP 1-02'
    },
    {
        abbr: 'JDA',
        def: 'joint duty assignment',
        src: 'JP 1-02'
    },
    {
        abbr: 'JDAAP',
        def: 'Joint Doctrine Awareness Action Plan',
        src: 'CJCSI 5120.02'
    },
    {
        abbr: 'JDAL',
        def: 'Joint Duty Assignment List',
        src: 'JP 1-02'
    },
    {
        abbr: 'JDAM',
        def: 'Joint Direct Attack Munition',
        src: 'JP 1-02'
    },
    {
        abbr: 'JDAMIS',
        def: 'Joint Duty Assignment Management Information System',
        src: 'JP 1-02'
    },
    {
        abbr: 'JDAT',
        def: 'joint deployable analysis team',
        src: '1-02'
    },
    {
        abbr: 'JDC',
        def: 'joint deployment community; Joint Doctrine Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JDD',
        def: 'joint doctrine distribution',
        src: '1-02'
    },
    {
        abbr: 'JDDC',
        def: 'joint doctrine development community',
        src: '1-02'
    },
    {
        abbr: 'JDDE',
        def: 'joint deployment and distribution enterprise',
        src: '1-02'
    },
    {
        abbr: 'JDDOC',
        def: 'joint deployment and distribution operations center',
        src: '1-02'
    },
    {
        abbr: 'JDDT',
        def: 'joint doctrine development tool',
        src: '1-02'
    },
    {
        abbr: 'JDEC',
        def: 'joint document exploitation center',
        src: '1-02'
    },
    {
        abbr: 'JDEIS',
        def: 'Joint Doctrine, Education, and Training Electronic Information System',
        src: '1-02'
    },
    {
        abbr: 'JDIG',
        def: 'Joint Drug Intelligence Group',
        src: 'JP 1-02'
    },
    {
        abbr: 'JDIGS',
        def: 'Joint Digital Information Gathering System',
        src: '1-02'
    },
    {
        abbr: 'JDISS',
        def: 'joint deployable intelligence support system',
        src: '1-02'
    },
    {
        abbr: 'JDN',
        def: 'joint data network',
        src: '1-02'
    },
    {
        abbr: 'JDNC',
        def: 'joint data network operations cell',
        src: '1-02'
    },
    {
        abbr: 'JDNO',
        def: 'joint data network operations officer',
        src: '1-02'
    },
    {
        abbr: 'JDOG',
        def: 'joint detention operations group',
        src: 'JP 2-01'
    },
    {
        abbr: 'JDOMS',
        def: 'Joint Director of Military Support',
        src: '1-02'
    },
    {
        abbr: 'JDPC',
        def: 'Joint Doctrine Planning Conference',
        src: '1-02'
    },
    {
        abbr: 'JDPI',
        def: 'joint desired point of impact',
        src: '1-02'
    },
    {
        abbr: 'JDPO',
        def: 'joint deployment process owner',
        src: '1-02'
    },
    {
        abbr: 'JDSS',
        def: 'Joint Decision Support System',
        src: 'JP 1-02'
    },
    {
        abbr: 'JDSSC',
        def: 'Joint Data Systems Support Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JDTC',
        def: 'Joint Deployment Training Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JE',
        def: 'joint experimentation',
        src: 'JP 3-13'
    },
    {
        abbr: 'JEAP',
        def: 'Joint Electronic Intelligence (ELINT) Analysis Program',
        src: 'JP 1-02'
    },
    {
        abbr: 'JECC',
        def: 'Joint Enabling Capabilities Command (USTRANSCOM)',
        src: '1-02'
    },
    {
        abbr: 'JECE',
        def: 'Joint Elimination Coordination Element',
        src: '1-02'
    },
    {
        abbr: 'JECG',
        def: 'joint exercise control group',
        src: 'JP 1-02'
    },
    {
        abbr: 'JECPO',
        def: 'Joint Electronic Commerce Program Office',
        src: 'JP 1-02'
    },
    {
        abbr: 'JEDD',
        def: 'Joint Education and Doctrine Division',
        src: '1-02'
    },
    {
        abbr: 'JEEP',
        def: 'joint emergency evacuation plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'JEFF',
        def: 'Joint Expeditionary Forensic Facility (Army)',
        src: '1-02'
    },
    {
        abbr: 'JEL',
        def: 'Joint Electronic Library',
        src: '1-02'
    },
    {
        abbr: 'JEM',
        def: 'joint exercise manual',
        src: 'JP 1-02'
    },
    {
        abbr: 'JEMB',
        def: 'joint environmental management board',
        src: '1-02'
    },
    {
        abbr: 'JEMP',
        def: 'joint exercise management package',
        src: 'JP 1-02'
    },
    {
        abbr: 'JEMSMO',
        def: 'joint electromagnetic spectrum management operations',
        src: '1-02'
    },
    {
        abbr: 'JEMSO',
        def: 'joint electromagnetic spectrum operations',
        src: '1-02'
    },
    {
        abbr: 'JENM',
        def: 'joint enterprise network manager',
        src: '1-02'
    },
    {
        abbr: 'JEP',
        def: 'Joint Exercise Program',
        src: '1-02'
    },
    {
        abbr: 'JEPES',
        def: 'Joint Engineer Planning and Execution System',
        src: '1-02'
    },
    {
        abbr: 'JET',
        def: 'joint expeditionary team; Joint Operation Planning and Execution System editing tool',
        src: '1-02'
    },
    {
        abbr: 'JEWC',
        def: 'Joint Electronic Warfare Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JEWCS',
        def: 'Joint Electronic Warfare Core Staff (NATO)',
        src: '1-02'
    },
    {
        abbr: 'JEZ',
        def: 'joint engagement zone',
        src: '1-02'
    },
    {
        abbr: 'JFA',
        def: 'joint field activity',
        src: 'JP 1-02'
    },
    {
        abbr: 'JFACC',
        def: 'joint force air component commander',
        src: '1-02'
    },
    {
        abbr: 'JFAST',
        def: 'Joint Flow and Analysis System for Transportation',
        src: '1-02'
    },
    {
        abbr: 'JFC',
        def: 'joint force commander',
        src: '1-02'
    },
    {
        abbr: 'JFCC',
        def: 'joint functional component command',
        src: 'JP 1-02'
    },
    {
        abbr: 'JFCC NW',
        def: 'Joint Functional Component Command for Network Warfare \t\t',
        src: 'JP 3-14'
    },
    {
        abbr: 'JFCC-GS',
        def: 'Joint Functional Component Command for Global Strike',
        src: '1-02'
    },
    {
        abbr: 'JFCC-IMD',
        def: 'Joint Functional Component Command for Integrated Missile Defense',
        src: '1-02'
    },
    {
        abbr: 'JFCC-ISR',
        def: 'Joint Functional Component Command for Intelligence, Surveillance, and Reconnaissance (USSTRATCOM)',
        src: '1-02'
    },
    {
        abbr: 'JFCC-Space',
        def: 'Joint Functional Component Command for Space (USSTRATCOM)',
        src: '1-02'
    },
    {
        abbr: 'JFCH',
        def: 'joint force chaplain',
        src: '1-02'
    },
    {
        abbr: 'JFE',
        def: 'joint fires element',
        src: '1-02'
    },
    {
        abbr: 'JFHQ',
        def: 'joint force headquarters',
        src: '1-02'
    },
    {
        abbr: 'JFHQ-NCR',
        def: 'Joint Force Headquarters-National Capital Region',
        src: '1-02'
    },
    {
        abbr: 'JFHQ-State',
        def: 'joint force headquarters-state',
        src: '1-02'
    },
    {
        abbr: 'JFIIT',
        def: 'Joint Fires Integration and Interoperability Team',
        src: 'JP 3-01'
    },
    {
        abbr: 'JFIP',
        def: 'Japanese facilities improvement project',
        src: 'JP 1-02'
    },
    {
        abbr: 'JFLCC',
        def: 'joint force land component commander',
        src: '1-02'
    },
    {
        abbr: 'JFMC',
        def: 'joint fleet mail center',
        src: '1-02'
    },
    {
        abbr: 'JFMCC',
        def: 'joint force maritime component commander',
        src: '1-02'
    },
    {
        abbr: 'JFMO',
        def: 'joint frequency management office',
        src: '1-02'
    },
    {
        abbr: 'JFO',
        def: 'joint field office; joint fires observer',
        src: '1-02'
    },
    {
        abbr: 'JFP',
        def: 'joint force package (packaging); joint force provider; Joint Frequency Panel (MCEB)',
        src: '1-02'
    },
    {
        abbr: 'JFRB',
        def: 'Joint Foreign Release Board',
        src: 'JP 1-02'
    },
    {
        abbr: 'JFRG',
        def: 'joint force requirements generator',
        src: 'JP 1-02'
    },
    {
        abbr: 'JFRG II',
        def: 'joint force requirements generator II',
        src: '1-02'
    },
    {
        abbr: 'JFS',
        def: 'joint force surgeon',
        src: '1-02'
    },
    {
        abbr: 'JFSOC',
        def: 'joint force special operations component'
    },
    {
        abbr: 'JFSOCC',
        def: 'joint force special operations component commander',
        src: '1-02'
    },
    {
        abbr: 'JFTR',
        def: 'joint Federal travel regulations',
        src: '1-02'
    },
    {
        abbr: 'JFUB',
        def: 'joint facilities utilization board',
        src: '1-02'
    },
    {
        abbr: 'JGWE',
        def: 'joint global warning enterprise',
        src: '1-02'
    },
    {
        abbr: 'JHMCS',
        def: 'joint helmet-mounted cueing system',
        src: '1-02'
    },
    {
        abbr: 'JHSV',
        def: 'joint high-speed vessel',
        src: '1-02'
    },
    {
        abbr: 'JI',
        def: 'joint inspection',
        src: 'JP 1-02'
    },
    {
        abbr: 'JIA',
        def: 'joint individual augmentation; joint individual augmentee',
        src: '1-02'
    },
    {
        abbr: 'JIACG',
        def: 'joint interagency coordination group',
        src: '1-02'
    },
    {
        abbr: 'JIADS',
        def: 'joint integrated air defense system',
        src: 'JP 1-02'
    },
    {
        abbr: 'JIATF',
        def: 'joint interagency task force',
        src: '1-02'
    },
    {
        abbr: 'JIATF-E',
        def: 'joint interagency task force - East',
        src: 'JP 1-02'
    },
    {
        abbr: 'JIATF-S',
        def: 'Joint Interagency Task Force-South',
        src: '1-02'
    },
    {
        abbr: 'JIATF-W',
        def: 'Joint Interagency Task Force-West',
        src: '1-02'
    },
    {
        abbr: 'JIC',
        def: 'joint information center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JICC',
        def: 'joint information coordination center; joint interface control cell',
        src: '1-02'
    },
    {
        abbr: 'JICO',
        def: 'joint interface control officer',
        src: '1-02'
    },
    {
        abbr: 'JICPAC',
        def: 'Joint Intelligence Center, Pacific',
        src: 'JP 1-02'
    },
    {
        abbr: 'JICTRANS',
        def: 'Joint Intelligence Center for Transportation',
        src: 'JP 1-02'
    },
    {
        abbr: 'JIDC',
        def: 'joint intelligence and debriefing center; joint interrogation and debriefing center',
        src: '1-02'
    },
    {
        abbr: 'JIEDDO',
        def: 'Joint Improvised Explosive Device Defeat Organization ',
        src: '1-02'
    },
    {
        abbr: 'JIEE',
        def: 'Joint Information Exchange Environment',
        src: '1-02'
    },
    {
        abbr: 'JIEO',
        def: 'joint interoperability engineering organization',
        src: 'JP 1-02'
    },
    {
        abbr: 'JIEP',
        def: 'joint intelligence estimate for planning',
        src: 'JP 1-02'
    },
    {
        abbr: 'JIES',
        def: 'joint interoperability evaluation system',
        src: 'JP 1-02'
    },
    {
        abbr: 'JIG',
        def: 'joint interrogation group',
        src: 'JP 2-01'
    },
    {
        abbr: 'JILE',
        def: 'joint intelligence liaison element',
        src: 'JP 1-02'
    },
    {
        abbr: 'JIMB',
        def: 'joint information management board',
        src: '1-02'
    },
    {
        abbr: 'JIMP',
        def: 'joint implementation master plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'JIMPP',
        def: 'joint industrial mobilization planning process',
        src: '1-02'
    },
    {
        abbr: 'JIMS',
        def: 'joint information management system',
        src: 'JP 1-02'
    },
    {
        abbr: 'JINTACCS',
        def: 'Joint Interoperability of Tactical Command and Control Systems',
        src: 'JP 1-02'
    },
    {
        abbr: 'JIO',
        def: 'joint interrogation operations',
        src: 'JP 2-01'
    },
    {
        abbr: 'JIOC',
        def: 'joint information operations center; joint intelligence operations center',
        src: '1-02'
    },
    {
        abbr: 'JIOC-SOUTH',
        def: 'Joint Intelligence Operations Center, South',
        src: '1-02'
    },
    {
        abbr: 'JIOC-TRANS',
        def: 'Joint Intelligence Operations Center - Transportation',
        src: '1-02'
    },
    {
        abbr: 'JIOCPAC',
        def: 'Joint Intelligence Operations Center, Pacific',
        src: '1-02'
    },
    {
        abbr: 'JIOP',
        def: 'joint interface operational procedures',
        src: 'JP 1-02'
    },
    {
        abbr: 'JIOP-MTF',
        def: 'joint interface operating procedures-message text formats',
        src: 'JP 1-02'
    },
    {
        abbr: 'JIOWC',
        def: 'Joint Information Operations Warfare Center',
        src: '1-02'
    },
    {
        abbr: 'JIPC',
        def: 'joint imagery production complex',
        src: 'JP 1-02'
    },
    {
        abbr: 'JIPCL',
        def: 'joint integrated prioritized collection list',
        src: '1-02'
    },
    {
        abbr: 'JIPOE',
        def: 'joint intelligence preparation of the operational environment',
        src: '1-02'
    },
    {
        abbr: 'JIPTL',
        def: 'joint integrated prioritized target list',
        src: '1-02'
    },
    {
        abbr: 'JIS',
        def: 'joint information system',
        src: '1-02'
    },
    {
        abbr: 'JISE',
        def: 'joint intelligence support element',
        src: '1-02'
    },
    {
        abbr: 'JITC',
        def: 'joint interoperability test command',
        src: 'JP 1-02'
    },
    {
        abbr: 'JITF-CT',
        def: 'Joint Intelligence Task Force for Combating Terrorism',
        src: '1-02'
    },
    {
        abbr: 'JIVA',
        def: 'Joint Intelligence Virtual Architecture',
        src: 'JP 2-01'
    },
    {
        abbr: 'JIVU',
        def: 'Joint Intelligence Virtual University',
        src: '1-02'
    },
    {
        abbr: 'JKDDC',
        def: 'Joint Knowledge Development and Distribution Capability',
        src: '1-02'
    },
    {
        abbr: 'JKnIFE',
        def: 'Joint Improvised Explosive Device Defeat Organization Knowledge and Information Fusion Exchange ',
        src: '1-02'
    },
    {
        abbr: 'JLCC',
        def: 'joint lighterage control center; joint logistics coordination center',
        src: '1-02'
    },
    {
        abbr: 'JLE',
        def: 'joint logistics environment',
        src: '1-02'
    },
    {
        abbr: 'JLEnt',
        def: 'joint logistics enterprise',
        src: '1-02'
    },
    {
        abbr: 'JLLIS',
        def: 'Joint Lessons Learned Information System',
        src: '1-02'
    },
    {
        abbr: 'JLLP',
        def: 'Joint Lessons Learned Program',
        src: '1-02'
    },
    {
        abbr: 'JLNCHREP',
        def: 'joint launch report',
        src: 'JP 1-02'
    },
    {
        abbr: 'JLOA',
        def: 'joint logistics over-the-shore operation area',
        src: '1-02'
    },
    {
        abbr: 'JLOC',
        def: 'joint logistics operations center',
        src: '1-02'
    },
    {
        abbr: 'JLOTS',
        def: 'joint logistics over-the-shore',
        src: '1-02'
    },
    {
        abbr: 'JLRC',
        def: 'joint logistics readiness center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JLSB',
        def: 'joint line of communications security board',
        src: '1-02'
    },
    {
        abbr: 'JLSE',
        def: 'joint legal support element',
        src: 'JP 1-04'
    },
    {
        abbr: 'JM&S',
        def: 'joint modeling and simulation',
        src: 'JP 1-02'
    },
    {
        abbr: 'JMAARS',
        def: 'joint model after-action review system',
        src: 'JP 1-02'
    },
    {
        abbr: 'JMAC',
        def: 'Joint Mortuary Affairs Center (Army)',
        src: '1-02'
    },
    {
        abbr: 'JMAG',
        def: 'Joint METOC Advisory Group',
        src: 'JP 1-02'
    },
    {
        abbr: 'JMAO',
        def: 'joint mortuary affairs office; joint mortuary affairs officer',
        src: '1-02'
    },
    {
        abbr: 'JMAR',
        def: 'joint medical asset repository',
        src: 'JP 4-02'
    },
    {
        abbr: 'JMAS',
        def: 'joint manpower automation system',
        src: 'JP 1-02'
    },
    {
        abbr: 'JMAT',
        def: 'joint medical analysis tool; joint mobility assistance team',
        src: '1-02'
    },
    {
        abbr: 'JMB',
        def: 'joint meteorology and oceanography board',
        src: 'JP 3-59'
    },
    {
        abbr: 'JMC',
        def: 'joint military command; joint movement center',
        src: '1-02'
    },
    {
        abbr: 'JMCC',
        def: 'joint meteorological and oceanographic coordination cell',
        src: '1-02'
    },
    {
        abbr: 'JMCG',
        def: 'joint movement control group',
        src: '1-02'
    },
    {
        abbr: 'JMCIS',
        def: 'Joint Maritime Command Information System',
        src: '1-02'
    },
    {
        abbr: 'JMCO',
        def: 'joint meteorological and oceanographic coordination organization',
        src: '1-02'
    },
    {
        abbr: 'JMCOMS',
        def: 'joint maritime communications system',
        src: 'JP 1-02'
    },
    {
        abbr: 'JMD',
        def: 'joint manning document',
        src: '1-02'
    },
    {
        abbr: 'JMeDSAF',
        def: 'joint medical semi-automated forces',
        src: 'JP 4-02'
    },
    {
        abbr: 'JMEEL',
        def: 'joint mission-essential equipment list',
        src: '1-02'
    },
    {
        abbr: 'JMEM',
        def: 'Joint Munitions Effectiveness Manual',
        src: '1-02'
    },
    {
        abbr: 'JMET',
        def: 'joint mission-essential task',
        src: '1-02'
    },
    {
        abbr: 'JMETL',
        def: 'joint mission-essential task list',
        src: '1-02'
    },
    {
        abbr: 'JMIC',
        def: 'Joint Military Intelligence College; joint modular intermodal container',
        src: '1-02'
    },
    {
        abbr: 'JMICS',
        def: 'Joint Worldwide Intelligence Communications System mobile integrated communications system',
        src: '1-02'
    },
    {
        abbr: 'JMIE',
        def: 'joint maritime information element',
        src: 'JP 1-02'
    },
    {
        abbr: 'JMIP',
        def: 'joint military intelligence program',
        src: 'JP 1-02'
    },
    {
        abbr: 'JMISC',
        def: 'Joint Military Information Support Command',
        src: '1-02'
    },
    {
        abbr: 'JMISTF',
        def: 'joint military information support task force',
        src: '1-02'
    },
    {
        abbr: 'JMITC',
        def: 'Joint Military Intelligence Training Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JMLO',
        def: 'joint medical logistics officer',
        src: 'JP 4-02'
    },
    {
        abbr: 'JMMC',
        def: 'Joint Material Management Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JMMT',
        def: 'joint military mail terminal',
        src: '1-02'
    },
    {
        abbr: 'JMNA',
        def: 'joint military net assessment',
        src: 'JP 1-02'
    },
    {
        abbr: 'JMO',
        def: 'joint maritime operations; joint meteorological and oceanographic officer; joint munitions office',
        src: '1-02'
    },
    {
        abbr: 'JMO(AIR)',
        def: 'joint maritime operations (air)',
        src: 'JP 1-02'
    },
    {
        abbr: 'JMOC',
        def: 'joint medical operations center',
        src: '1-02'
    },
    {
        abbr: 'JMP',
        def: 'joint manpower program',
        src: 'JP 1-02'
    },
    {
        abbr: 'JMPA',
        def: 'joint military postal activity; joint military satellite communications (MILSATCOM) panel administrator',
        src: 'JP 1-02'
    },
    {
        abbr: 'JMPAB',
        def: 'Joint Materiel Priorities and Allocation Board',
        src: '1-02'
    },
    {
        abbr: 'JMPT',
        def: 'Joint Medical Planning Tool',
        src: '1-02'
    },
    {
        abbr: 'JMRC',
        def: 'joint mobile relay center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JMRO',
        def: 'Joint Medical Regulating Office',
        src: 'JP 1-02'
    },
    {
        abbr: 'JMRR',
        def: 'Joint Monthly Readiness Review',
        src: '1-02'
    },
    {
        abbr: 'JMSEP',
        def: 'joint modeling and simulation executive panel',
        src: 'JP 1-02'
    },
    {
        abbr: 'JMSWG',
        def: 'Joint Multi-Tactical Digital Information Link (Multi-TADIL) Standards Working Group',
        src: 'JP 1-02'
    },
    {
        abbr: 'JMT',
        def: 'joint military training',
        src: 'JP 1-02'
    },
    {
        abbr: 'JMTCA',
        def: 'joint munitions transportation coordinating activity',
        src: '1-02'
    },
    {
        abbr: 'JMTCSS',
        def: 'Joint Maritime Tactical Communications Switching System',
        src: 'JP 1-02'
    },
    {
        abbr: 'JMTG',
        def: 'joint military information support operations task group',
        src: '1-02'
    },
    {
        abbr: 'JMUA',
        def: 'Joint Meritorious Unit Award',
        src: 'JP 1-02'
    },
    {
        abbr: 'JMV',
        def: 'joint METOC viewer',
        src: 'JP 1-02'
    },
    {
        abbr: 'JMWG',
        def: 'joint medical working group',
        src: '1-02'
    },
    {
        abbr: 'JNCC',
        def: 'joint network operations control center',
        src: '1-02'
    },
    {
        abbr: 'JNMS',
        def: 'joint network management system',
        src: '1-02'
    },
    {
        abbr: 'JNOCC',
        def: 'Joint Operation Planning and Execution System (JOPES) Network Operation Control Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JNPE',
        def: 'joint nuclear planning element',
        src: 'JP 1-02'
    },
    {
        abbr: 'JNSC',
        def: 'Joint Navigation Warfare Center Navigation Warfare Support Cell',
        src: '1-02'
    },
    {
        abbr: 'JNWC',
        def: 'Joint Navigation Warfare Center',
        src: '1-02'
    },
    {
        abbr: 'JOA',
        def: 'joint operations area',
        src: '1-02'
    },
    {
        abbr: 'JOAF',
        def: 'joint operations area forecast',
        src: '1-02'
    },
    {
        abbr: 'JOC',
        def: 'joint operations center; joint oversight committee',
        src: '1-02'
    },
    {
        abbr: 'JOCC',
        def: 'joint operations command center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JOERAD',
        def: 'joint spectrum center ordnance electomagnetic environmental effects risk assessment database',
        src: '1-02'
    },
    {
        abbr: 'JOG',
        def: 'joint operations graphic',
        src: '1-02'
    },
    {
        abbr: 'JOGS',
        def: 'joint operation graphics system',
        src: 'JP 1-02'
    },
    {
        abbr: 'JOPES',
        def: 'Joint Operation Planning and Execution System',
        src: '1-02'
    },
    {
        abbr: 'JOPESIR',
        def: 'Joint Operation Planning and Execution System Incident Reporting System',
        src: 'JP 1-02'
    },
    {
        abbr: 'JOPESREP',
        def: 'Joint Operation Planning and Execution System Reporting System',
        src: 'JP 1-02'
    },
    {
        abbr: 'JOPG',
        def: 'joint operations planning group',
        src: '1-02'
    },
    {
        abbr: 'JOPP',
        def: 'joint operation planning process',
        src: '1-02'
    },
    {
        abbr: 'JOPPA',
        def: 'joint operation planning process for air',
        src: '1-02'
    },
    {
        abbr: 'JOR',
        def: 'joint operational requirement',
        src: 'JP 1-02'
    },
    {
        abbr: 'JORD',
        def: 'joint operational requirements document',
        src: 'JP 1-02'
    },
    {
        abbr: 'JOSE',
        def: 'joint operations security support element',
        src: '1-02'
    },
    {
        abbr: 'JOSG',
        def: 'joint operational steering group',
        src: 'JP 1-02'
    },
    {
        abbr: 'JOT&E',
        def: 'joint operational test and evaluation',
        src: 'JP 1-02'
    },
    {
        abbr: 'JOTC',
        def: 'joint operations tasking center',
        src: '1-02'
    },
    {
        abbr: 'JOTS',
        def: 'Joint Operational Tactical System',
        src: 'JP 1-02'
    },
    {
        abbr: 'JP',
        def: 'joint publication',
        src: '1-02'
    },
    {
        abbr: 'JP4',
        def: 'jet propulsion fuel, type 4',
        src: '1-02'
    },
    {
        abbr: 'JP5',
        def: 'jet propulsion fuel, type 5',
        src: '1-02'
    },
    {
        abbr: 'JP8',
        def: 'jet propulsion fuel, type 8',
        src: '1-02'
    },
    {
        abbr: 'JPAC',
        def: 'joint planning augmentation cell; Joint POW/MIA Accounting Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'JPADS',
        def: 'joint precision airdrop system',
        src: '1-02'
    },
    {
        abbr: 'JPAG',
        def: 'Joint Planning Advisory Group',
        src: '1-02'
    },
    {
        abbr: 'JPARR',
        def: 'joint personnel accountability reconciliation and reporting',
        src: '1-02'
    },
    {
        abbr: 'JPASE',
        def: 'joint public affairs support element; Joint Public Affairs Support Element (USTRANSCOM)',
        src: '1-02'
    },
    {
        abbr: 'JPATS',
        def: 'joint primary aircraft training system',
        src: 'JP 1-02'
    },
    {
        abbr: 'JPAV',
        def: 'joint personnel asset visibility',
        src: 'JP 1-02'
    },
    {
        abbr: 'JPC',
        def: 'joint planning cell; joint postal cell',
        src: 'JP 1-02'
    },
    {
        abbr: 'JPD',
        def: 'joint planning document',
        src: 'JP 1-02'
    },
    {
        abbr: 'JPEC',
        def: 'joint planning and execution community',
        src: '1-02'
    },
    {
        abbr: 'JPED',
        def: 'joint personal effects depot',
        src: '1-02'
    },
    {
        abbr: 'JPEG',
        def: 'Joint Photographic Experts Group',
        src: '1-02'
    },
    {
        abbr: 'JPERSTAT',
        def: 'joint personnel status and casualty report',
        src: '1-02'
    },
    {
        abbr: 'JPG',
        def: 'joint planning group',
        src: '1-02'
    },
    {
        abbr: 'JPME',
        def: 'joint professional military education',
        src: '1-02'
    },
    {
        abbr: 'JPMRC',
        def: 'joint patient movement requirements center',
        src: '1-02'
    },
    {
        abbr: 'JPMT',
        def: 'joint patient movement team',
        src: 'JP 1-02'
    },
    {
        abbr: 'JPN',
        def: 'joint planning network',
        src: 'JP 1-02'
    },
    {
        abbr: 'JPO',
        def: 'joint petroleum office; Joint Program Office',
        src: '1-02'
    },
    {
        abbr: 'JPO-STC',
        def: 'Joint Program Office for Special Technology Countermeasures',
        src: 'JP 1-02'
    },
    {
        abbr: 'JPOC',
        def: 'joint personnel operations center; joint planning orientation course',
        src: '1-02'
    },
    {
        abbr: 'JPOI',
        def: 'joint program of instruction',
        src: 'JP 1-02'
    },
    {
        abbr: 'JPOM',
        def: 'joint preparation and onward movement',
        src: 'JP 1-02'
    },
    {
        abbr: 'JPRA',
        def: 'Joint Personnel Recovery Agency',
        src: '1-02'
    },
    {
        abbr: 'JPRC',
        def: 'joint personnel reception center; joint personnel recovery center',
        src: '1-02'
    },
    {
        abbr: 'JPRSP',
        def: 'joint personnel recovery support product',
        src: '1-02'
    },
    {
        abbr: 'JPS',
        def: 'joint processing system',
        src: 'JP 1-02'
    },
    {
        abbr: 'JPSE',
        def: 'Joint Planning Support Element (USTRANSCOM)',
        src: '1-02'
    },
    {
        abbr: 'JPTTA',
        def: 'joint personnel training and tracking activity',
        src: '1-02'
    },
    {
        abbr: 'JQR',
        def: 'joint qualification requirements',
        src: 'JP 1-02'
    },
    {
        abbr: 'JQRR',
        def: 'joint quarterly readiness review',
        src: 'JP 6-0'
    },
    {
        abbr: 'JRADS',
        def: 'Joint Resource Assessment Data System',
        src: 'JP 1-02'
    },
    {
        abbr: 'JRB',
        def: 'Joint Requirements Oversight Council (JROC) Review Board',
        src: 'JP 1-02'
    },
    {
        abbr: 'JRC',
        def: 'joint reconnaissance center',
        src: '1-02'
    },
    {
        abbr: 'JRCC',
        def: 'joint reception coordination center',
        src: '1-02'
    },
    {
        abbr: 'JRERP',
        def: 'Joint Radiological Emergency Response Plan',
        src: '1-02'
    },
    {
        abbr: 'JRFL',
        def: 'joint restricted frequency list',
        src: '1-02'
    },
    {
        abbr: 'JRG',
        def: 'joint review group',
        src: 'JP 1-02'
    },
    {
        abbr: 'JRIC',
        def: 'joint reserve intelligence center',
        src: '1-02'
    },
    {
        abbr: 'JRIP',
        def: 'Joint Reserve Intelligence Program',
        src: '1-02'
    },
    {
        abbr: 'JRMB',
        def: 'Joint Requirements and Management Board',
        src: 'JP 1-02'
    },
    {
        abbr: 'JROC',
        def: 'Joint Requirements Oversight Council',
        src: '1-02'
    },
    {
        abbr: 'JRRB',
        def: 'joint requirements review board',
        src: '1-02'
    },
    {
        abbr: 'JRS',
        def: 'joint reporting structure',
        src: 'JP 1-02'
    },
    {
        abbr: 'JRSC',
        def: 'jam-resistant secure communications; joint rescue sub-center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JRSOI',
        def: 'joint reception, staging, onward movement, and integration',
        src: '1-02'
    },
    {
        abbr: 'JRTC',
        def: 'joint readiness training center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JRX',
        def: 'joint readiness exercise',
        src: 'JP 1-02'
    },
    {
        abbr: 'JS',
        def: 'Joint Staff; the Joint Staff',
        src: '1-02'
    },
    {
        abbr: 'JSA',
        def: 'joint security area',
        src: '1-02'
    },
    {
        abbr: 'JSAC',
        def: 'joint strike analysis cell; joint strike analysis center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JSAM',
        def: 'joint security assistance memorandum; Joint Service Achievement Medal; joint standoff surface attack missile',
        src: 'JP 1-02'
    },
    {
        abbr: 'JSAN',
        def: 'Joint Staff automation for the nineties',
        src: 'JP 1-02'
    },
    {
        abbr: 'JSAP',
        def: 'Joint Staff action package',
        src: '1-02'
    },
    {
        abbr: 'JSAS',
        def: 'joint strike analysis system',
        src: 'JP 1-02'
    },
    {
        abbr: 'JSC',
        def: 'joint security coordinator; Joint Spectrum Center',
        src: '1-02'
    },
    {
        abbr: 'JSCAT',
        def: 'joint staff crisis action team',
        src: 'JP 1-02'
    },
    {
        abbr: 'JSCC',
        def: 'joint security coordination center; joint Services coordination committee',
        src: '1-02'
    },
    {
        abbr: 'JSCM',
        def: 'Joint Service Commendation Medal',
        src: '1-02'
    },
    {
        abbr: 'JSCP',
        def: 'Joint Strategic Capabilities Plan',
        src: '1-02'
    },
    {
        abbr: 'JSDS',
        def: 'Joint Staff doctrine sponsor',
        src: '1-02'
    },
    {
        abbr: 'JSEC',
        def: 'joint strategic exploitation center',
        src: 'JP 2-01.2'
    },
    {
        abbr: 'JSETS',
        def: 'Joint Search and Rescue Satellite-Aided Tracking Electronic Tracking System',
        src: '1-02'
    },
    {
        abbr: 'JSF',
        def: 'joint support force',
        src: '1-02'
    },
    {
        abbr: 'JSHO',
        def: 'joint shipboard helicopter operations',
        src: 'JP 3-04'
    },
    {
        abbr: 'JSIDS',
        def: 'joint Services imagery digitizing system',
        src: 'JP 1-02'
    },
    {
        abbr: 'JSIR',
        def: 'joint spectrum interference resolution',
        src: '1-02'
    },
    {
        abbr: 'JSISC',
        def: 'Joint Staff Information Service Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JSIT',
        def: 'Joint Operation Planning and Execution System (JOPES) information trace',
        src: 'JP 3-35'
    },
    {
        abbr: 'JSIVA',
        def: 'Joint Staff Integrated Vulnerability Assessment',
        src: '1-02'
    },
    {
        abbr: 'JSM',
        def: 'Joint Staff Manual',
        src: 'JP 1-02'
    },
    {
        abbr: 'JSME',
        def: 'joint spectrum management element',
        src: '1-02'
    },
    {
        abbr: 'JSMS',
        def: 'joint spectrum management system',
        src: 'JP 1-02'
    },
    {
        abbr: 'JSO',
        def: 'joint security operations',
        src: '1-02'
    },
    {
        abbr: 'JSOA',
        def: 'joint special operations area',
        src: '1-02'
    },
    {
        abbr: 'JSOAC',
        def: 'joint special operations air component; joint special operations aviation component',
        src: '1-02'
    },
    {
        abbr: 'JSOACC',
        def: 'joint special operations air component commander',
        src: '1-02'
    },
    {
        abbr: 'JSOC',
        def: 'joint special operations command',
        src: '1-02'
    },
    {
        abbr: 'JSOFI',
        def: 'Joint Special Operations Forces Institute',
        src: 'JP 1-02'
    },
    {
        abbr: 'JSOTF',
        def: 'joint special operations task force',
        src: '1-02'
    },
    {
        abbr: 'JSOU',
        def: 'Joint Special Operations University',
        src: '1-02'
    },
    {
        abbr: 'JSOW',
        def: 'joint stand-off weapon',
        src: 'JP 1-02'
    },
    {
        abbr: 'JSPA',
        def: 'joint satellite communications panel administrator',
        src: '1-02'
    },
    {
        abbr: 'JSPD',
        def: 'joint strategic planning document',
        src: 'JP 1-02'
    },
    {
        abbr: 'JSPDSA',
        def: 'joint strategic planning document supporting analyses',
        src: 'JP 1-02'
    },
    {
        abbr: 'JSPOC',
        def: 'Joint Space Operations Center',
        src: '1-02'
    },
    {
        abbr: 'JSPS',
        def: 'Joint Strategic Planning System',
        src: '1-02'
    },
    {
        abbr: 'JSR',
        def: 'joint strategy review',
        src: '1-02'
    },
    {
        abbr: 'JSRC',
        def: 'joint subregional command (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'JSS',
        def: 'joint surveillance system',
        src: 'JP 1-02'
    },
    {
        abbr: 'JSSA',
        def: 'joint Services survival, evasion, resistance, and escape (SERE) agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'JSSIS',
        def: 'joint staff support information system',
        src: 'JP 1-02'
    },
    {
        abbr: 'JSST',
        def: 'joint space support team',
        src: 'JP 1-02'
    },
    {
        abbr: 'JSTAR',
        def: 'joint system threat assessment report',
        src: 'JP 1-02'
    },
    {
        abbr: 'JSTARS',
        def: 'Joint Surveillance Target Attack Radar System',
        src: '1-02'
    },
    {
        abbr: 'JSTE',
        def: 'joint system training exercise',
        src: 'JP 1-02'
    },
    {
        abbr: 'JSTO',
        def: 'joint space tasking order',
        src: '3-14'
    },
    {
        abbr: 'JT&E',
        def: 'joint test and evaluation',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTA',
        def: 'joint technical architecture',
        src: '1-02'
    },
    {
        abbr: 'JTAC',
        def: 'joint terminal attack controller; Joint Terrorism Analysis Center',
        src: '1-02'
    },
    {
        abbr: 'JTACE',
        def: 'joint technical advisory chemical, biological, radiological, and nuclear element',
        src: '1-02'
    },
    {
        abbr: 'JTADS',
        def: 'Joint Tactical Air Defense System (Army); Joint Tactical Display System',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTAGS',
        def: 'joint tactical ground station (Army); joint tactical ground station (Army and Navy); joint tactical ground system',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTAIC',
        def: 'Joint Technical Analysis and Integration Cell (Army)',
        src: '1-02'
    },
    {
        abbr: 'JTAO',
        def: 'joint tactical air operations',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTAR',
        def: 'joint tactical air strike request',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTASC',
        def: 'joint training analysis and simulation center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTASG',
        def: 'Joint Targeting Automation Steering Group',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTAV-IT',
        def: 'joint total asset visibility-in theater',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTB',
        def: 'Joint Transportation Board',
        src: '1-02'
    },
    {
        abbr: 'JTC',
        def: 'joint technical committee; Joint Training Confederation',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTCB',
        def: 'joint targeting coordination board',
        src: '1-02'
    },
    {
        abbr: 'JTCC',
        def: 'joint transportation coordination cell; joint transportation coordination center; joint transportation corporate information management center',
        src: '1-02'
    },
    {
        abbr: 'JTCOIC',
        def: 'Joint Training Counter-Improvised Explosive Device Operations Integration Center',
        src: '1-02'
    },
    {
        abbr: 'JTD',
        def: 'joint table of distribution; joint theater distribution',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTDC',
        def: 'joint track data coordinator',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTF',
        def: 'joint task force',
        src: '1-02'
    },
    {
        abbr: 'JTF HQ',
        def: 'joint task force headquarters',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTF-6',
        def: 'joint task force-6',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTF-AK',
        def: 'Joint Task Force-Alaska',
        src: '1-02'
    },
    {
        abbr: 'JTF-B',
        def: 'joint task force-Bravo',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTF-CM',
        def: 'joint task force - consequence management',
        src: '1-02'
    },
    {
        abbr: 'JTF-CS',
        def: 'Joint Task Force-Civil Support',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTF-E',
        def: 'joint task force - elimination',
        src: '1-02'
    },
    {
        abbr: 'JTF-GNO',
        def: 'Joint Task Force-Global Network Operations',
        src: '1-02'
    },
    {
        abbr: 'JTF-GTMO',
        def: 'Joint Task Force-Guantanamo',
        src: 'JP 2-01'
    },
    {
        abbr: 'JTF-HD',
        def: 'Joint Task Force-Homeland Defense',
        src: '1-02'
    },
    {
        abbr: 'JTF-MAO',
        def: 'joint task force - mortuary affairs office',
        src: 'JP 4-06'
    },
    {
        abbr: 'JTF-N',
        def: 'Joint Task Force-North',
        src: '1-02'
    },
    {
        abbr: 'JTF-PO',
        def: 'joint task force-port opening',
        src: '1-02'
    },
    {
        abbr: 'JTF-State',
        def: 'joint task force-state',
        src: '1-02'
    },
    {
        abbr: 'JTFCEM',
        def: 'joint task force contingency engineering management',
        src: '1-02'
    },
    {
        abbr: 'JTFP',
        def: 'Joint Tactical Fusion Program',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTFS',
        def: 'joint task force surgeon',
        src: 'JP 4-02'
    },
    {
        abbr: 'JTIC',
        def: 'joint transportation intelligence center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTIDS',
        def: 'Joint Tactical Information Distribution System',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTL',
        def: 'joint target list',
        src: '1-02'
    },
    {
        abbr: 'JTLM',
        def: 'joint theater logistics management',
        src: '1-02'
    },
    {
        abbr: 'JTLS',
        def: 'joint theater-level simulation',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTM',
        def: 'joint training manual',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTMD',
        def: 'joint table of mobilization and distribution; Joint Terminology Master Database',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTMP',
        def: 'joint training master plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTMS',
        def: 'joint theater movement staff; joint training master schedule',
        src: '1-02'
    },
    {
        abbr: 'JTP',
        def: 'joint test publication; joint training plan',
        src: '1-02'
    },
    {
        abbr: 'JTR',
        def: 'joint travel regulations',
        src: '1-02'
    },
    {
        abbr: 'JTRB',
        def: 'joint telecommunication resources board',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTS',
        def: 'Joint Targeting School; Joint Training System',
        src: '1-02'
    },
    {
        abbr: 'JTSCC',
        def: 'joint theater support contracting command',
        src: '1-02'
    },
    {
        abbr: 'JTSSCCB',
        def: 'Joint Tactical Switched Systems Configuration Control Board',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTSST',
        def: 'joint training system support team',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTT',
        def: 'joint targeting toolbox; joint training team',
        src: 'JP 1-02'
    },
    {
        abbr: 'JTTF',
        def: 'joint terrorism task force',
        src: '1-02'
    },
    {
        abbr: 'JTWG',
        def: 'joint targeting working group',
        src: '1-02'
    },
    {
        abbr: 'JUH-MTF',
        def: 'Joint User Handbook-Message Text Formats',
        src: 'JP 1-02'
    },
    {
        abbr: 'JUIC',
        def: 'joint unit identification code',
        src: 'JP 1-02'
    },
    {
        abbr: 'JUO',
        def: 'joint urban operation',
        src: '1-02'
    },
    {
        abbr: 'JUON',
        def: 'joint urgent operational need',
        src: '1-02'
    },
    {
        abbr: 'JUSMAG',
        def: 'Joint United States Military Advisory Group',
        src: 'JP 1-02'
    },
    {
        abbr: 'JUWTF',
        def: 'joint unconventional warfare task force',
        src: 'JP 1-02'
    },
    {
        abbr: 'JV',
        def: 'Joint Vision',
        src: 'JP 1-02'
    },
    {
        abbr: 'JV 2020',
        def: 'Joint Vision 2020',
        src: 'JP 1-02'
    },
    {
        abbr: 'JVB',
        def: 'joint visitors bureau',
        src: '1-02'
    },
    {
        abbr: 'JVIDS',
        def: 'Joint Visual Integrated Display System',
        src: 'JP 1-02'
    },
    {
        abbr: 'JVSEAS',
        def: 'Joint Virtual Security Environment Assessment System',
        src: 'JP 1-02'
    },
    {
        abbr: 'JWAC',
        def: 'Joint Warfare Analysis Center',
        src: '1-02'
    },
    {
        abbr: 'JWARS',
        def: 'Joint Warfare Analysis and Requirements System',
        src: 'JP 1-02'
    },
    {
        abbr: 'JWC',
        def: 'Joint Warfare Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JWFC',
        def: 'Joint Warfighting Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'JWG',
        def: 'joint working group',
        src: '1-02'
    },
    {
        abbr: 'JWICS',
        def: 'Joint Worldwide Intelligence Communications System',
        src: '1-02'
    },
    {
        abbr: 'JWID',
        def: 'joint warrior interoperability demonstration',
        src: 'JP 1-02'
    },
    {
        abbr: 'k',
        def: 'thousand',
        src: '1-02'
    },
    {
        abbr: 'K-Kill',
        def: 'catastrophic kill',
        src: 'JP 3-15'
    },
    {
        abbr: 'Ka',
        def: 'Kurtz-above band',
        src: 'JP 6-0'
    },
    {
        abbr: 'KAL',
        def: 'key assets list',
        src: 'JP 1-02'
    },
    {
        abbr: 'KAPP',
        def: 'Key Assets Protection Program',
        src: 'JP 1-02'
    },
    {
        abbr: 'kb',
        def: 'kilobit',
        src: 'JP 1-02'
    },
    {
        abbr: 'kbps',
        def: 'kilobits per second',
        src: 'JP 1-02'
    },
    {
        abbr: 'KC-135',
        def: 'Stratotanker\t',
        src: 'JP 1-02'
    },
    {
        abbr: 'KDE',
        def: 'key doctrine element',
        src: '1-02'
    },
    {
        abbr: 'KEK',
        def: 'key encryption key',
        src: 'JP 1-02'
    },
    {
        abbr: 'KG',
        def: 'key generator',
        src: 'JP 1-02'
    },
    {
        abbr: 'kg',
        def: 'kilogram',
        src: 'JP 1-02'
    },
    {
        abbr: 'kHz',
        def: 'kilohertz',
        src: 'JP 1-02'
    },
    {
        abbr: 'KLE',
        def: 'key leader engagement',
        src: '1-02'
    },
    {
        abbr: 'KLIP',
        def: 'key doctrine element-linked information package',
        src: '1-02'
    },
    {
        abbr: 'km',
        def: 'kilometer',
        src: 'JP 1-02'
    },
    {
        abbr: 'KMC',
        def: 'knowledge management center',
        src: 'JP 3-32'
    },
    {
        abbr: 'KNP',
        def: 'Korean National Police',
        src: 'JP 1-02'
    },
    {
        abbr: 'KP',
        def: 'key pulse',
        src: 'JP 1-02'
    },
    {
        abbr: 'kph',
        def: 'kilometers per hour',
        src: '1-02'
    },
    {
        abbr: 'KPP',
        def: 'key performance parameter',
        src: '1-02'
    },
    {
        abbr: 'KQ ID',
        def: 'tactical location identifier',
        src: '1-02'
    },
    {
        abbr: 'kt',
        def: 'kiloton(s); knot (nautical miles per hour)',
        src: 'JP 1-02'
    },
    {
        abbr: 'Ku',
        def: 'Kurtz-under band',
        src: 'JP 6-0'
    },
    {
        abbr: 'kVA',
        def: 'kilo Volt-Amps',
        src: 'JP 3-34'
    },
    {
        abbr: 'KVG',
        def: 'key variable generator',
        src: 'JP 1-02'
    },
    {
        abbr: 'kW',
        def: 'kilowatt',
        src: 'JP 1-02'
    },
    {
        abbr: 'KWOC',
        def: 'keyword-out-of-context',
        src: 'JP 1-02'
    },
    {
        abbr: 'L',
        def: 'length',
        src: 'JP 1-02'
    },
    {
        abbr: 'l',
        def: 'search subarea length',
        src: 'JP 1-02'
    },
    {
        abbr: 'L-EWE',
        def: 'land-electronic warfare element',
        src: '1-02'
    },
    {
        abbr: 'L/T',
        def: 'long ton',
        src: 'JP 1-02'
    },
    {
        abbr: 'LA',
        def: 'lead agent; legal adviser; line amplifier; loop key generator (LKG) adapter',
        src: '1-02'
    },
    {
        abbr: 'LAADS',
        def: 'low altitude air defense system',
        src: 'JP 1-02'
    },
    {
        abbr: 'LAAM',
        def: 'light anti-aircraft missile',
        src: 'JP 1-02'
    },
    {
        abbr: 'LABS',
        def: 'laser airborne bathymetry system',
        src: 'JP 1-02'
    },
    {
        abbr: 'LACV',
        def: 'lighter, air cushioned vehicle',
        src: 'JP 1-02'
    },
    {
        abbr: 'LAD',
        def: 'latest arrival date; launch area denied',
        src: '1-02'
    },
    {
        abbr: 'LAMPS',
        def: 'Light Airborne Multipurpose System (helicopter)',
        src: 'JP 1-02'
    },
    {
        abbr: 'LAN',
        def: 'local area network',
        src: 'JP 1-02'
    },
    {
        abbr: 'LANDCENT',
        def: 'Allied Land Forces Central Europe (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'LANDSAT',
        def: 'land satellite',
        src: 'JP 1-02'
    },
    {
        abbr: 'LANDSOUTH',
        def: 'Allied Land Forces Southern Europe (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'LANTIRN',
        def: 'low-altitude navigation and targeting infrared for night',
        src: 'JP 1-02'
    },
    {
        abbr: 'LAO',
        def: 'limited attack option',
        src: 'JP 1-02'
    },
    {
        abbr: 'LARC',
        def: 'lighter, amphibious resupply, cargo',
        src: '1-02'
    },
    {
        abbr: 'LARC-V',
        def: 'lighter, amphibious resupply, cargo, 5 ton',
        src: '1-02'
    },
    {
        abbr: 'LARS',
        def: 'lightweight airborne recovery system',
        src: 'JP 1-02'
    },
    {
        abbr: 'LASH',
        def: 'lighter aboard ship',
        src: 'JP 1-02'
    },
    {
        abbr: 'LAT',
        def: 'latitude',
        src: 'JP 1-02'
    },
    {
        abbr: 'LAV',
        def: 'light armored vehicle',
        src: 'JP 1-02'
    },
    {
        abbr: 'lb',
        def: 'pound',
        src: '1-02'
    },
    {
        abbr: 'LBR',
        def: 'Laser Beam Rider\t',
        src: 'JP 1-02'
    },
    {
        abbr: 'lbs.',
        def: 'pounds',
        src: '1-02'
    },
    {
        abbr: 'LC',
        def: 'lake current; legal counsel',
        src: 'JP 1-02'
    },
    {
        abbr: 'LCAC',
        def: 'landing craft, air cushion',
        src: '1-02'
    },
    {
        abbr: 'LCADS',
        def: 'low-cost aerial delivery system',
        src: '1-02'
    },
    {
        abbr: 'LCAP',
        def: 'low combat air patrol',
        src: 'JP 1-02'
    },
    {
        abbr: 'LCB',
        def: 'line of constant bearing',
        src: 'JP 1-02'
    },
    {
        abbr: 'LCC',
        def: 'amphibious command ship; land component commander; launch control center; lighterage control center; link communications circuit; logistics component command',
        src: '1-02'
    },
    {
        abbr: 'LCCS',
        def: 'landing craft control ship',
        src: 'JP 1-02'
    },
    {
        abbr: 'LCE',
        def: 'logistics capability estimator; logistics combat element (USMC)',
        src: '1-02'
    },
    {
        abbr: 'LCES',
        def: 'line conditioning equipment scanner',
        src: 'JP 1-02'
    },
    {
        abbr: 'LCM',
        def: 'landing craft, mechanized; letter-class mail; life-cycle management',
        src: '1-02'
    },
    {
        abbr: 'LCMC',
        def: 'life cycle management command',
        src: 'JP 4-10'
    },
    {
        abbr: 'LCO',
        def: 'landing craft air cushion control officer; lighterage control officer',
        src: '1-02'
    },
    {
        abbr: 'LCP',
        def: 'lighterage control point',
        src: 'JP 1-02'
    },
    {
        abbr: 'LCPL',
        def: 'landing craft, personnel, light',
        src: '1-02'
    },
    {
        abbr: 'LCS',
        def: 'landing craft air cushion control ship',
        src: '1-02'
    },
    {
        abbr: 'LCSR',
        def: 'life cycle systems readiness',
        src: 'JP 4-0'
    },
    {
        abbr: 'LCU',
        def: 'landing craft, utility; launch correlation unit',
        src: '1-02'
    },
    {
        abbr: 'LCVP',
        def: 'landing craft, vehicle, personnel',
        src: 'JP 1-02'
    },
    {
        abbr: 'LD',
        def: 'line of departure',
        src: 'JP 1-02'
    },
    {
        abbr: 'LDA',
        def: 'limited depository account',
        src: '1-02'
    },
    {
        abbr: 'LDF',
        def: 'lightweight digital facsimile',
        src: 'JP 1-02'
    },
    {
        abbr: 'LDI',
        def: 'line driver interface',
        src: 'JP 1-02'
    },
    {
        abbr: 'LDO',
        def: 'laser designator operator',
        src: 'JP 1-02'
    },
    {
        abbr: 'LDR',
        def: 'leader; low data rate',
        src: 'JP 1-02'
    },
    {
        abbr: 'LE',
        def: 'law enforcement; low-order explosives',
        src: '1-02'
    },
    {
        abbr: 'LEA',
        def: 'law enforcement agency',
        src: '1-02'
    },
    {
        abbr: 'LEAP',
        def: 'Light ExoAtmospheric Projectile',
        src: 'JP 1-02'
    },
    {
        abbr: 'LEASAT',
        def: 'leased satellite',
        src: 'JP 1-02'
    },
    {
        abbr: 'LEAU',
        def: 'Law Enforcement Assistance Unit (FAA)',
        src: 'JP 1-02'
    },
    {
        abbr: 'LECIC',
        def: 'Law Enforcement and Counterintelligence Center (DOD)',
        src: 'JP 1-02'
    },
    {
        abbr: 'LED',
        def: 'law enforcement desk; light emitting diode',
        src: 'JP 1-02'
    },
    {
        abbr: 'LEDET',
        def: 'law enforcement detachment (USCG)',
        src: '1-02'
    },
    {
        abbr: 'LEGAT',
        def: 'legal attaché',
        src: 'JP 3-07.4'
    },
    {
        abbr: 'LEIP',
        def: 'Law Enforcement Intelligence Program (USCG)',
        src: '1-02'
    },
    {
        abbr: 'LEMP',
        def: 'low-altitude electromagnetic pulse',
        src: '1-02'
    },
    {
        abbr: 'LEO',
        def: 'law enforcement operations; low Earth orbit',
        src: '1-02'
    },
    {
        abbr: 'LEP',
        def: 'laser eye protection; law enforcement professional; linear error probable',
        src: '1-02'
    },
    {
        abbr: 'LERSM',
        def: 'lower echelon reporting and surveillance module',
        src: 'JP 4-02'
    },
    {
        abbr: 'LERTCON',
        def: 'alert condition',
        src: 'JP 1-02'
    },
    {
        abbr: 'LES',
        def: 'law enforcement sensitive; leave and earnings statement; Lincoln Laboratories Experimental Satellite',
        src: 'JP 1-02'
    },
    {
        abbr: 'LESO',
        def: 'Law Enforcement Support Office',
        src: 'JP 3-07.4'
    },
    {
        abbr: 'LET',
        def: 'light equipment transport',
        src: 'JP 1-02'
    },
    {
        abbr: 'LF',
        def: 'landing force; low frequency',
        src: '1-02'
    },
    {
        abbr: 'LFA',
        def: 'lead federal agency',
        src: '1-02'
    },
    {
        abbr: 'LFOC',
        def: 'landing force operations center',
        src: '1-02'
    },
    {
        abbr: 'LFORM',
        def: 'landing force operational reserve material',
        src: 'JP 1-02'
    },
    {
        abbr: 'LFSP',
        def: 'landing force support party',
        src: '1-02'
    },
    {
        abbr: 'LfV',
        def: 'Landesamt für Verfassungsschutz (regional authority for constitutional protection)',
        src: 'JP 1-02'
    },
    {
        abbr: 'LG',
        def: 'deputy chief of staff for logistics',
        src: 'JP 1-02'
    },
    {
        abbr: 'LGB',
        def: 'laser-guided bomb',
        src: 'JP 1-02'
    },
    {
        abbr: 'LGM',
        def: 'laser-guided missile; loop group multiplexer',
        src: 'JP 1-02'
    },
    {
        abbr: 'LGM-30',
        def: 'Minuteman',
        src: 'JP 1-02'
    },
    {
        abbr: 'LGW',
        def: 'laser-guided weapon',
        src: 'JP 1-02'
    },
    {
        abbr: 'LHA',
        def: 'amphibious assault ship (general purpose)',
        src: '1-02'
    },
    {
        abbr: 'LHD',
        def: 'amphibious assault ship (multipurpose)',
        src: '1-02'
    },
    {
        abbr: 'LHT',
        def: 'line-haul tractor',
        src: 'JP 1-02'
    },
    {
        abbr: 'LIDAR',
        def: 'light detection and ranging',
        src: 'JP 2-0'
    },
    {
        abbr: 'LIF',
        def: 'light interference filter',
        src: 'JP 1-02'
    },
    {
        abbr: 'LIMDIS',
        def: 'limited distribution',
        src: 'JP 1-02'
    },
    {
        abbr: 'LIMFAC',
        def: 'limiting factor',
        src: 'JP 1-02'
    },
    {
        abbr: 'LIPS',
        def: 'Logistics Information Processing System',
        src: '1-02'
    },
    {
        abbr: 'LIS',
        def: 'logistics information system',
        src: 'JP 1-02'
    },
    {
        abbr: 'LIWA',
        def: 'land information warfare activity',
        src: 'JP 1-02'
    },
    {
        abbr: 'LKG',
        def: 'loop key generator',
        src: 'JP 1-02'
    },
    {
        abbr: 'LKP',
        def: 'last known position',
        src: 'JP 1-02'
    },
    {
        abbr: 'LL',
        def: 'lessons learned',
        src: '1-02'
    },
    {
        abbr: 'LLLGB',
        def: 'low-level laser-guided bomb',
        src: 'JP 1-02'
    },
    {
        abbr: 'LLLTV',
        def: 'low-light level television',
        src: 'JP 1-02'
    },
    {
        abbr: 'LLSO',
        def: 'low-level source operation',
        src: 'JP 1-02'
    },
    {
        abbr: 'LLTR',
        def: 'low-level transit route',
        src: 'JP 1-02'
    },
    {
        abbr: 'LM',
        def: 'loop modem',
        src: 'JP 1-02'
    },
    {
        abbr: 'LMARS',
        def: 'Logistics Metrics Analysis Reporting System',
        src: '1-02'
    },
    {
        abbr: 'LMAV',
        def: 'laser MAVERICK',
        src: 'JP 1-02'
    },
    {
        abbr: 'LMF',
        def: 'language media format',
        src: 'JP 1-02'
    },
    {
        abbr: 'LMSR',
        def: 'large, medium-speed roll-on/roll-off',
        src: '1-02'
    },
    {
        abbr: 'LN',
        def: 'lead nation; local national',
        src: '1-02'
    },
    {
        abbr: 'LNA',
        def: 'low voice amplifier',
        src: 'JP 1-02'
    },
    {
        abbr: 'LNI',
        def: 'Library of National Intelligence',
        src: '1-02'
    },
    {
        abbr: 'LNO',
        def: 'liaison officer',
        src: '1-02'
    },
    {
        abbr: 'LO',
        def: 'low observable',
        src: 'JP 3-09'
    },
    {
        abbr: 'LO/LO',
        def: 'lift-on/lift-off',
        src: '1-02'
    },
    {
        abbr: 'LO/RO',
        def: 'lift-on/roll-off',
        src: '1-02'
    },
    {
        abbr: 'LOA',
        def: 'Lead Operational Authority; letter of assist; letter of authorization; letter of offer and acceptance; lodgment operational area; logistics over-the-shore operation area',
        src: '1-02'
    },
    {
        abbr: 'LOAC',
        def: 'law of armed conflict',
        src: '1-02'
    },
    {
        abbr: 'LOAL',
        def: 'lock-on after launch',
        src: 'JP 1-02'
    },
    {
        abbr: 'LOBL',
        def: 'lock-on before launch',
        src: 'JP 1-02'
    },
    {
        abbr: 'LOC',
        def: 'line of communications; logistics operations center',
        src: '1-02'
    },
    {
        abbr: 'LOC ACC',
        def: 'location accuracy',
        src: 'JP 1-02'
    },
    {
        abbr: 'LOCAP',
        def: 'low combat air patrol',
        src: 'JP 1-02'
    },
    {
        abbr: 'LOCE',
        def: 'Linked Operational Intelligence Centers Europe; Linked Operations-Intelligence Centers Europe',
        src: 'JP 1-02'
    },
    {
        abbr: 'LOD',
        def: 'line of departure',
        src: '1-02'
    },
    {
        abbr: 'LOE',
        def: 'letter of evaluation; line of effort',
        src: '1-02'
    },
    {
        abbr: 'LOG',
        def: 'logistics',
        src: 'JP 1-02'
    },
    {
        abbr: 'LOGAIR',
        def: 'logistics aircraft',
        src: 'JP 1-02'
    },
    {
        abbr: 'LOGAIS',
        def: 'logistics automated information system',
        src: 'JP 1-02'
    },
    {
        abbr: 'LOGCAP',
        def: 'logistics civil augmentation program (Army)',
        src: '1-02'
    },
    {
        abbr: 'LOGCAT',
        def: 'logistics capability assessment tool',
        src: 'JP 1-02'
    },
    {
        abbr: 'LOGDET',
        def: 'logistics detail',
        src: 'JP 1-02'
    },
    {
        abbr: 'LOGEX',
        def: 'logistics exercise',
        src: 'JP 1-02'
    },
    {
        abbr: 'LOGFAC',
        def: 'Logistics Feasibility Assessment Capability',
        src: 'JP 1-02'
    },
    {
        abbr: 'LOGFOR',
        def: 'logistics force packaging system',
        src: 'JP 1-02'
    },
    {
        abbr: 'LOGMARS',
        def: 'logistics applications of automated marking and reading symbols',
        src: 'JP 1-02'
    },
    {
        abbr: 'LOGMOD',
        def: 'logistics module',
        src: 'JP 1-02'
    },
    {
        abbr: 'LOGPLAN',
        def: 'logistics planning system',
        src: 'JP 1-02'
    },
    {
        abbr: 'LOGSAFE',
        def: 'logistic sustainment analysis and feasibility estimator',
        src: 'JP 1-02'
    },
    {
        abbr: 'LOI',
        def: 'letter of instruction; loss of input',
        src: '1-02'
    },
    {
        abbr: 'LOMEZ',
        def: 'low-altitude missile engagement zone',
        src: '1-02'
    },
    {
        abbr: 'LONG',
        def: 'longitude',
        src: 'JP 1-02'
    },
    {
        abbr: 'LOO',
        def: 'line of operation',
        src: '1-02'
    },
    {
        abbr: 'LOP',
        def: 'line of position',
        src: 'JP 1-02'
    },
    {
        abbr: 'LORAN',
        def: 'long-range aid to navigation',
        src: 'JP 1-02'
    },
    {
        abbr: 'LOROP',
        def: 'long range oblique photography',
        src: 'JP 1-02'
    },
    {
        abbr: 'LOS',
        def: 'line of sight',
        src: '1-02'
    },
    {
        abbr: 'LOTS',
        def: 'logistics over-the-shore',
        src: '1-02'
    },
    {
        abbr: 'LOX',
        def: 'liquid oxygen',
        src: 'JP 4-02'
    },
    {
        abbr: 'LP',
        def: 'listening post',
        src: 'JP 1-02'
    },
    {
        abbr: 'LPD',
        def: 'amphibious transport dock; low probability of detection',
        src: '1-02'
    },
    {
        abbr: 'LPH',
        def: 'amphibious assault ship, landing platform helicopter',
        src: 'JP 1-02'
    },
    {
        abbr: 'LPI',
        def: 'low probability of intercept',
        src: '1-02'
    },
    {
        abbr: 'LPSB',
        def: 'logistics procurement support board',
        src: 'JP 1-02'
    },
    {
        abbr: 'LPU',
        def: 'line printer unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'LPV',
        def: 'laser-protective visor',
        src: 'JP 1-02'
    },
    {
        abbr: 'LRC',
        def: 'logistics readiness center',
        src: '1-02'
    },
    {
        abbr: 'LRD',
        def: 'laser range finder-detector',
        src: 'JP 1-02'
    },
    {
        abbr: 'LRF',
        def: 'laser range finder'
    },
    {
        abbr: 'LRF/D',
        def: 'laser range finder/detector',
        src: 'JP 1-02'
    },
    {
        abbr: 'LRG',
        def: 'long-range aircraft',
        src: 'JP 1-02'
    },
    {
        abbr: 'LRM',
        def: 'low rate multiplexer',
        src: 'JP 1-02'
    },
    {
        abbr: 'LRN',
        def: 'Laboratory Response Network (DHHS)',
        src: '1-02'
    },
    {
        abbr: 'LRO',
        def: 'lighterage repair officer',
        src: '1-02'
    },
    {
        abbr: 'LRP',
        def: 'load and roll pallet',
        src: '1-02'
    },
    {
        abbr: 'LRRP',
        def: 'long range reconnaissance patrol',
        src: 'JP 1-02'
    },
    {
        abbr: 'LRS',
        def: 'launch and recovery site',
        src: 'JP 1-02'
    },
    {
        abbr: 'LRST',
        def: 'long-range surveillance team',
        src: '1-02'
    },
    {
        abbr: 'LRSU',
        def: 'long-range surveillance unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'LRT',
        def: 'logistics response time',
        src: '1-02'
    },
    {
        abbr: 'LSA',
        def: 'logistic support analysis; logistics supportability analysis',
        src: '1-02'
    },
    {
        abbr: 'LSB',
        def: 'landing support battalion; lower sideband',
        src: 'JP 1-02'
    },
    {
        abbr: 'LSC',
        def: 'lead Service for contracting',
        src: '1-02'
    },
    {
        abbr: 'LSCC',
        def: 'lead Service for contracting coordination',
        src: '1-02'
    },
    {
        abbr: 'LSCDM',
        def: 'low speed cable driver modem',
        src: 'JP 1-02'
    },
    {
        abbr: 'LSD',
        def: 'dock landing ship; least significant digit',
        src: '1-02'
    },
    {
        abbr: 'LSE',
        def: 'landing signalman enlisted; logistic support element',
        src: '1-02'
    },
    {
        abbr: 'LSO',
        def: 'landing safety officer; landing signals officer',
        src: '1-02'
    },
    {
        abbr: 'LSPR',
        def: 'low speed pulse restorer',
        src: 'JP 1-02'
    },
    {
        abbr: 'LSS',
        def: 'laser spot search; local sensor subsystem; logistics support system',
        src: '1-02'
    },
    {
        abbr: 'LST',
        def: 'laser spot tracker; tank landing ship',
        src: '1-02'
    },
    {
        abbr: 'LSU',
        def: 'logistics civil augmentation program support unit',
        src: 'JP 4-10'
    },
    {
        abbr: 'LSV',
        def: 'logistics support vessel',
        src: '1-02'
    },
    {
        abbr: 'LT',
        def: 'large tug; local terminal; long ton',
        src: '1-02'
    },
    {
        abbr: 'LTD',
        def: 'laser target designator',
        src: 'JP 1-02'
    },
    {
        abbr: 'LTD/R',
        def: 'laser target designator/ranger',
        src: 'JP 1-02'
    },
    {
        abbr: 'LTF',
        def: 'logistics task force',
        src: '1-02'
    },
    {
        abbr: 'LTG',
        def: 'local timing generator',
        src: 'JP 1-02'
    },
    {
        abbr: 'LTIOV',
        def: 'latest time information is of value',
        src: '1-02'
    },
    {
        abbr: 'LTL',
        def: 'laser-to-target line',
        src: '1-02'
    },
    {
        abbr: 'LTON',
        def: 'long ton',
        src: 'JP 1-02'
    },
    {
        abbr: 'LTS',
        def: 'low-altitude navigation and targeting infrared for night (LANTIRN) targeting system',
        src: 'JP 1-02'
    },
    {
        abbr: 'LTT',
        def: 'loss to theater',
        src: 'JP 1-02'
    },
    {
        abbr: 'LTU',
        def: 'line termination unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'LUT',
        def: 'local user terminal',
        src: 'JP 1-02'
    },
    {
        abbr: 'LVS',
        def: 'Logistics Vehicle System (USMC)',
        src: 'JP 1-02'
    },
    {
        abbr: 'LW',
        def: 'leeway',
        src: 'JP 1-02'
    },
    {
        abbr: 'LWR',
        def: 'Lutheran World Relief',
        src: 'JP 1-02'
    },
    {
        abbr: 'LZ',
        def: 'landing zone',
        src: '1-02'
    },
    {
        abbr: 'LZCO',
        def: 'landing zone control officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'M',
        def: 'million',
        src: '1-02'
    },
    {
        abbr: 'M&E',
        def: 'monitoring and evaluation',
        src: '1-02'
    },
    {
        abbr: 'M&S',
        def: 'modeling and simulation',
        src: 'JP 1-02'
    },
    {
        abbr: 'M-DARC',
        def: 'military direct access radar channel',
        src: 'JP 1-02'
    },
    {
        abbr: 'M-Kill',
        def: 'mobility kill',
        src: 'JP 3-15'
    },
    {
        abbr: 'M/ATMP',
        def: 'Missiles/Air Target Materials Program',
        src: 'JP 1-02'
    },
    {
        abbr: 'M/CM/S',
        def: 'mobility, countermobility, and/or survivability',
        src: 'JP 1-02'
    },
    {
        abbr: 'M88A1',
        def: 'recovery vehicle',
        src: 'JP 1-02'
    },
    {
        abbr: 'mA',
        def: 'milliampere(s)',
        src: '1-02'
    },
    {
        abbr: 'MA',
        def: 'master; medical attendant; military action; mortuary affairs',
        src: '1-02'
    },
    {
        abbr: 'MAAG',
        def: 'military assistance advisory group',
        src: 'JP 1-02'
    },
    {
        abbr: 'MAAP',
        def: 'master air attack plan',
        src: '1-02'
    },
    {
        abbr: 'MAC',
        def: 'mobility assault company; Mortuary Affairs Center',
        src: '1-02'
    },
    {
        abbr: 'MACB',
        def: 'multinational acquisition and contracting board',
        src: '1-02'
    },
    {
        abbr: 'MACCS',
        def: 'Marine air command and control system',
        src: '1-02'
    },
    {
        abbr: 'MACG',
        def: 'Marine air control group',
        src: 'JP 1-02'
    },
    {
        abbr: 'MACOM',
        def: 'major command (Army)',
        src: 'JP 1-02'
    },
    {
        abbr: 'MACP',
        def: 'mortuary affairs collection point',
        src: 'JP 1-02'
    },
    {
        abbr: 'MACRMS',
        def: 'mortuary affairs contaminated remains mitigation site',
        src: '1-02'
    },
    {
        abbr: 'MACS',
        def: 'Marine air control squadron',
        src: '1-02'
    },
    {
        abbr: 'MACSAT',
        def: 'multiple access commercial satellite',
        src: 'JP 1-02'
    },
    {
        abbr: 'MAD',
        def: 'Militärischer Abschirmdienst (military protection service); military air distress',
        src: 'JP 1-02'
    },
    {
        abbr: 'MADCP',
        def: 'mortuary affairs decontamination collection point',
        src: 'JP 1-02'
    },
    {
        abbr: 'MADS',
        def: 'military information support operations automated data system',
        src: '1-02'
    },
    {
        abbr: 'MAEB',
        def: 'mean area of effectiveness for blast',
        src: 'JP 1-02'
    },
    {
        abbr: 'MAEF',
        def: 'mean area of effectiveness for fragments',
        src: 'JP 1-02'
    },
    {
        abbr: 'MAF',
        def: 'mobility air forces',
        src: '1-02'
    },
    {
        abbr: 'MAFC',
        def: 'Marine air-ground task force (MAGTF) all-source fusion center',
        src: 'JP 1-02'
    },
    {
        abbr: 'MAG',
        def: 'Marine aircraft group; maritime assessment group; military assignment group',
        src: '1-02'
    },
    {
        abbr: 'MAGTF',
        def: 'Marine air-ground task force',
        src: '1-02'
    },
    {
        abbr: 'MAGTFACE',
        def: 'Marine air-ground task force aviation combat element',
        src: 'JP 1-02'
    },
    {
        abbr: 'MAJCOM',
        def: 'major command (USAF)',
        src: 'JP 1-02'
    },
    {
        abbr: 'MANFOR',
        def: 'manpower force packaging system',
        src: 'JP 1-02'
    },
    {
        abbr: 'MANPADS',
        def: 'man-portable air defense system',
        src: '1-02'
    },
    {
        abbr: 'MANPER',
        def: 'manpower and personnel module',
        src: 'JP 1-02'
    },
    {
        abbr: 'MAOC-N',
        def: 'Maritime Analysis and Operations Center-Narcotics',
        src: '1-02'
    },
    {
        abbr: 'MAP',
        def: 'Military Assistance Program; missed approach point; missed approach procedure',
        src: 'JP 1-02'
    },
    {
        abbr: 'MAR',
        def: 'METOC assistance request',
        src: 'JP 1-02'
    },
    {
        abbr: 'MARAD',
        def: 'Maritime Administration',
        src: '1-02'
    },
    {
        abbr: 'MARAD RRF',
        def: 'Maritime Administration Ready Reserve Force',
        src: '1-02'
    },
    {
        abbr: 'MARCORLOGCOM',
        def: 'Marine Corps Logistics Command',
        src: '1-02'
    },
    {
        abbr: 'MARCORMATCOM',
        def: 'Marine Corps Materiel Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'MARCORSYSCOM',
        def: 'Marine Corps Systems Command',
        src: 'JP 4-10'
    },
    {
        abbr: 'MARDIV',
        def: 'Marine division',
        src: 'JP 1-02'
    },
    {
        abbr: 'MARFOR',
        def: 'Marine Corps forces',
        src: '1-02'
    },
    {
        abbr: 'MARFOREUR',
        def: 'Marine Corps Forces, Europe',
        src: 'JP 1-02'
    },
    {
        abbr: 'MARFORLANT',
        def: 'Marine Forces, Atlantic',
        src: 'JP 1-02'
    },
    {
        abbr: 'MARFORNORTH',
        def: 'Marine Corps Forces, North',
        src: '1-02'
    },
    {
        abbr: 'MARFORPAC',
        def: 'Marine Forces, Pacific',
        src: 'JP 1-02'
    },
    {
        abbr: 'MARFORSOUTH',
        def: 'Marine Corps Forces, South',
        src: '1-02'
    },
    {
        abbr: 'MARFORSTRAT',
        def: 'United States Marine Corps Forces, United States Strategic Command',
        src: '1-02'
    },
    {
        abbr: 'MARINCEN',
        def: 'Maritime Intelligence Center',
        src: '1-02'
    },
    {
        abbr: 'Marine TACC',
        def: 'Marine Corps tactical air command center',
        src: '1-02'
    },
    {
        abbr: 'MARLE',
        def: 'Marine liaison element',
        src: '1-02'
    },
    {
        abbr: 'MARLO',
        def: 'Marine liaison officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'MARO',
        def: 'mass atrocity response operations',
        src: '1-02'
    },
    {
        abbr: 'MAROP',
        def: 'marine operators',
        src: 'JP 1-02'
    },
    {
        abbr: 'MARPOL',
        def: 'International Convention for the Prevention of Pollution from Ships',
        src: 'JP 1-02'
    },
    {
        abbr: 'MARS',
        def: 'Military Auxiliary Radio System',
        src: '1-02'
    },
    {
        abbr: 'MARSA',
        def: 'military assumes responsibility for separation of aircraft',
        src: 'JP 1-02'
    },
    {
        abbr: 'MARSOC',
        def: 'United States Marine Corps Forces, Special Operations Command',
        src: '1-02'
    },
    {
        abbr: 'MARSOF',
        def: 'Marine Corps special operations forces',
        src: '1-02'
    },
    {
        abbr: 'MART',
        def: 'mobile Automatic Digital Network (AUTODIN) remote terminal',
        src: 'JP 1-02'
    },
    {
        abbr: 'MARTS',
        def: 'Mortuary Affairs Reporting and Tracking System',
        src: '1-02'
    },
    {
        abbr: 'MAS',
        def: 'maritime air support; military information support operations automated system',
        src: '1-02'
    },
    {
        abbr: 'MASCAL',
        def: 'mass casualty',
        src: '1-02'
    },
    {
        abbr: 'MASF',
        def: 'mobile aeromedical staging facility',
        src: '1-02'
    },
    {
        abbr: 'MASH',
        def: 'mobile Army surgical hospital',
        src: 'JP 1-02'
    },
    {
        abbr: 'MASINT',
        def: 'measurement and signature intelligence',
        src: '1-02'
    },
    {
        abbr: 'MASLO',
        def: 'measurement and signature intelligence liaison officer',
        src: '1-02'
    },
    {
        abbr: 'MAST',
        def: 'military assistance to safety and traffic; mobile ashore support terminal',
        src: 'JP 1-02'
    },
    {
        abbr: 'MAT',
        def: 'medical analysis tool',
        src: '1-02'
    },
    {
        abbr: 'MATCALS',
        def: 'Marine air traffic control and landing system',
        src: 'JP 1-02'
    },
    {
        abbr: 'MATCS',
        def: 'Marine air traffic control squadron',
        src: 'JP 3-59'
    },
    {
        abbr: 'MAW',
        def: 'Marine aircraft wing',
        src: 'JP 1-02'
    },
    {
        abbr: 'MAX',
        def: 'maximum',
        src: 'JP 1-02'
    },
    {
        abbr: 'MAXORD',
        def: 'maximum ordinate'
    },
    {
        abbr: 'MB',
        def: 'medium boat; megabyte; military information support operations battalion',
        src: '1-02'
    },
    {
        abbr: 'MBBLs',
        def: 'thousands of barrels',
        src: 'JP 1-02'
    },
    {
        abbr: 'MBCDM',
        def: 'medical biological chemical defense materiel',
        src: 'JP 4-02'
    },
    {
        abbr: 'MBI',
        def: 'major budget issue',
        src: 'JP 1-02'
    },
    {
        abbr: 'Mbps',
        def: 'megabytes per second',
        src: 'JP 1-02'
    },
    {
        abbr: 'Mbs',
        def: 'megabits per second',
        src: 'JP 1-02'
    },
    {
        abbr: 'MC',
        def: 'Military Committee (NATO); military community; mission-critical',
        src: '1-02'
    },
    {
        abbr: 'MC-130',
        def: 'Combat Talon (I and II)\t',
        src: 'JP 1-02'
    },
    {
        abbr: 'MC/FI',
        def: 'mass casualty/fatality incident',
        src: '1-02'
    },
    {
        abbr: 'MCA',
        def: 'mail control activity; maximum calling area; military civic action; mission concept approval; movement control agency',
        src: '1-02'
    },
    {
        abbr: 'MCAG',
        def: 'maritime civil affairs group',
        src: 'JP 3-57'
    },
    {
        abbr: 'MCAP',
        def: 'maximum calling area precedence',
        src: 'JP 1-02'
    },
    {
        abbr: 'MCAS',
        def: 'Marine Corps air station',
        src: 'JP 1-02'
    },
    {
        abbr: 'MCAST',
        def: 'maritime civil affairs and security training',
        src: '1-02'
    },
    {
        abbr: 'MCAT',
        def: 'maritime civil affairs team',
        src: '1-02'
    },
    {
        abbr: 'MCB',
        def: 'movement control battalion',
        src: '1-02'
    },
    {
        abbr: 'MCBAT',
        def: 'medical chemical biological advisory team',
        src: 'JP 1-02'
    },
    {
        abbr: 'MCC',
        def: 'Marine component commander; maritime component commander; master control center; military cooperation committee; military coordinating committee; military counterintelligence collections; mission control center; mobility control center; movement control center',
        src: '1-02'
    },
    {
        abbr: 'MCCC',
        def: 'mobile consolidated command center',
        src: 'JP 1-02'
    },
    {
        abbr: 'MCCDC',
        def: 'Marine Corps Combat Development Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'MCCISWG',
        def: 'military command, control, and information systems working group',
        src: 'JP 1-02'
    },
    {
        abbr: 'MCD',
        def: 'medical crew director',
        src: 'JP 1-02'
    },
    {
        abbr: 'MCDA',
        def: 'military and civil defense assets (UN)',
        src: 'JP 1-02'
    },
    {
        abbr: 'MCDP',
        def: 'Marine Corps doctrine publication',
        src: '1-02'
    },
    {
        abbr: 'MCDS',
        def: 'modular cargo delivery system',
        src: 'JP 1-02'
    },
    {
        abbr: 'MCEB',
        def: 'Military Communications-Electronics Board',
        src: '1-02'
    },
    {
        abbr: 'MCEWG',
        def: 'Military Communications-Electronics Working Group',
        src: 'JP 1-02'
    },
    {
        abbr: 'MCI',
        def: 'multinational communications integration',
        src: '1-02'
    },
    {
        abbr: 'MCIA',
        def: 'Marine Corps Intelligence Activity',
        src: '1-02'
    },
    {
        abbr: 'MCIO',
        def: 'military criminal investigative organization',
        src: '1-02'
    },
    {
        abbr: 'MCIOC',
        def: 'Marine Corps Information Operations Center',
        src: '1-02'
    },
    {
        abbr: 'MCIP',
        def: 'Marine Corps interim publication; military command inspection program; military customs inspection program',
        src: '1-02'
    },
    {
        abbr: 'MCJSB',
        def: 'Military Committee Joint Standardization Board',
        src: '1-02'
    },
    {
        abbr: 'MCM',
        def: 'Manual for Courts-Martial; military classification manual; mine countermeasures',
        src: '1-02'
    },
    {
        abbr: 'MCMC',
        def: 'mine countermeasures commander',
        src: '1-02'
    },
    {
        abbr: 'MCMG',
        def: 'Military Committee Meteorological Group (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'MCMO',
        def: 'medical civil-military operations',
        src: '1-02'
    },
    {
        abbr: 'MCMOPS',
        def: 'mine countermeasures operations',
        src: '1-02'
    },
    {
        abbr: 'MCMREP',
        def: 'mine countermeasure report',
        src: 'JP 3-15'
    },
    {
        abbr: 'MCMRON',
        def: 'mine countermeasures squadron',
        src: '1-02'
    },
    {
        abbr: 'MCO',
        def: 'major combat operation; Mapping Customer Operations (Defense Logistics Agency); Marine Corps order',
        src: '1-02'
    },
    {
        abbr: 'MCOO',
        def: 'modified combined obstacle overlay',
        src: '1-02'
    },
    {
        abbr: 'MCRP',
        def: 'Marine Corps reference publication',
        src: '1-02'
    },
    {
        abbr: 'MCS',
        def: 'maneuver control system; Military Capabilities Study; mine countermeasures ship; modular causeway system',
        src: '1-02'
    },
    {
        abbr: 'MCSB',
        def: 'Marine Cryptologic Support Battalion ',
        src: '1-02'
    },
    {
        abbr: 'MCSF',
        def: 'mobile cryptologic support facility',
        src: 'JP 1-02'
    },
    {
        abbr: 'MCSFB',
        def: 'Marine Corps security force battalion',
        src: 'JP 3-68'
    },
    {
        abbr: 'MCSFR',
        def: 'Marine Corps security force regiment',
        src: '1-02'
    },
    {
        abbr: 'MCT',
        def: 'movement control team',
        src: '1-02'
    },
    {
        abbr: 'MCTC',
        def: 'Midwest Counterdrug Training Center',
        src: 'JP 3-07.4'
    },
    {
        abbr: 'MCTFT',
        def: 'Multijurisdictional Counterdrug Task Force Training',
        src: 'JP 3-07.4'
    },
    {
        abbr: 'MCTOG',
        def: 'Marine Corps Tactics and Operations Group',
        src: '1-02'
    },
    {
        abbr: 'MCU',
        def: 'maintenance communications unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'MCW',
        def: 'modulated carrier wave',
        src: 'JP 1-02'
    },
    {
        abbr: 'MCWL',
        def: 'Marine Corps Warfighting Lab',
        src: '1-02'
    },
    {
        abbr: 'MCWP',
        def: 'Marine Corps warfighting publication',
        src: '1-02'
    },
    {
        abbr: 'MCX',
        def: 'Marine Corps Exchange',
        src: 'JP 1-02'
    },
    {
        abbr: 'MDA',
        def: 'Magen David Adom (Israeli equivalent of the Red Cross); maritime domain awareness; Missile Defense Agency',
        src: '1-02'
    },
    {
        abbr: 'MDBS',
        def: 'blood support medical detachment',
        src: '1-02'
    },
    {
        abbr: 'MDCI',
        def: 'multidiscipline counterintelligence',
        src: 'JP 1-02'
    },
    {
        abbr: 'MDCO',
        def: 'Military Department counterintelligence organization',
        src: '1-02'
    },
    {
        abbr: 'MDDOC',
        def: 'Marine air-ground task force deployment and distribution operations center',
        src: '1-02'
    },
    {
        abbr: 'MDF',
        def: 'Main Defense Forces (NATO); main distribution frame',
        src: 'JP 1-02'
    },
    {
        abbr: 'MDITDS',
        def: 'migration defense intelligence threat data system; Modernized Defense Intelligence Threat Data System',
        src: 'JP 1-02'
    },
    {
        abbr: 'MDMA',
        def: 'methylenedioxymethamphetamine',
        src: 'JP 3-07.4'
    },
    {
        abbr: 'MDR',
        def: 'medium data rate',
        src: 'JP 1-02'
    },
    {
        abbr: 'MDRO',
        def: 'mission disaster response officer',
        src: '1-02'
    },
    {
        abbr: 'MDS',
        def: 'Message Dissemination Subsystem; mission design series',
        src: 'JP 1-02'
    },
    {
        abbr: 'MDSS II',
        def: 'Marine air-ground task force Deployment Support System II',
        src: '1-02'
    },
    {
        abbr: 'MDSU',
        def: 'mobile diving and salvage unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'MDU',
        def: 'military information support operations distribution unit',
        src: '1-02'
    },
    {
        abbr: 'MDW',
        def: 'Military District of Washington',
        src: 'JP 1-02'
    },
    {
        abbr: 'MDZ',
        def: 'maritime defense zone',
        src: 'JP 1-02'
    },
    {
        abbr: 'ME/C',
        def: 'medical examiner and/or coroner',
        src: 'JP 4-06'
    },
    {
        abbr: 'MEA',
        def: 'munitions effect assessment; munitions effectiveness assessment',
        src: '1-02'
    },
    {
        abbr: 'MEAS',
        def: 'military information support operations effects analysis subsystem',
        src: '1-02'
    },
    {
        abbr: 'MEB',
        def: 'Marine expeditionary brigade',
        src: '1-02'
    },
    {
        abbr: 'MEBU',
        def: 'mission essential backup',
        src: 'JP 1-02'
    },
    {
        abbr: 'MEC',
        def: 'medium endurance cutter',
        src: 'JP 1-02'
    },
    {
        abbr: 'MED',
        def: 'manipulative electronic deception',
        src: 'JP 1-02'
    },
    {
        abbr: 'MEDAL',
        def: 'Mine Warfare Environmental Decision Aids Library',
        src: 'JP 3-15'
    },
    {
        abbr: 'MEDCAP',
        def: 'medical civic action program',
        src: 'JP 1-02'
    },
    {
        abbr: 'MEDCC',
        def: 'medical coordination cell',
        src: '1-02'
    },
    {
        abbr: 'MEDCOM',
        def: 'medical command; US Army Medical Command',
        src: '1-02'
    },
    {
        abbr: 'MEDCOM (DS)',
        def: 'medical command (deployment support) (Army)',
        src: '1-02'
    },
    {
        abbr: 'MEDEVAC',
        def: 'medical evacuation',
        src: '1-02'
    },
    {
        abbr: 'MEDINT',
        def: 'medical intelligence',
        src: '1-02'
    },
    {
        abbr: 'MEDLOG',
        def: 'medical logistics (USAF AIS)',
        src: 'JP 1-02'
    },
    {
        abbr: 'MEDLOG JR',
        def: 'medical logistics, junior (USAF)',
        src: 'JP 1-02'
    },
    {
        abbr: 'MEDLOG support',
        def: 'medical logistics support',
        src: '1-02'
    },
    {
        abbr: 'MEDLOGCO',
        def: 'medical logistics company',
        src: 'JP 1-02'
    },
    {
        abbr: 'MEDMOB',
        def: 'Medical Mobilization Planning and Execution System',
        src: 'JP 1-02'
    },
    {
        abbr: 'MEDNEO',
        def: 'medical noncombatant evacuation operation',
        src: 'JP 1-02'
    },
    {
        abbr: 'MEDREG',
        def: 'medical regulating',
        src: 'JP 4-02'
    },
    {
        abbr: 'MEDREGREP',
        def: 'medical regulating report',
        src: 'JP 1-02'
    },
    {
        abbr: 'MEDRETE',
        def: 'medical readiness training exercise',
        src: 'JP 1-02'
    },
    {
        abbr: 'MEDS',
        def: 'meteorological data system',
        src: 'JP 1-02'
    },
    {
        abbr: 'MEDSOM',
        def: 'medical supply, optical, and maintenance unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'MEDSTAT',
        def: 'medical status',
        src: 'JP 1-02'
    },
    {
        abbr: 'MEF',
        def: 'Marine expeditionary force',
        src: '1-02'
    },
    {
        abbr: 'MEFPAKA',
        def: 'manpower and equipment force packaging',
        src: 'JP 1-02'
    },
    {
        abbr: 'MEJA',
        def: 'Military Extraterritorial Jurisdiction Act',
        src: '1-02'
    },
    {
        abbr: 'MEL',
        def: 'maintenance expenditure limit; minimum equipment list',
        src: 'JP 1-02'
    },
    {
        abbr: 'MEO',
        def: 'medium Earth orbit; military equal opportunity',
        src: '1-02'
    },
    {
        abbr: 'MEP',
        def: 'mobile electric power',
        src: 'JP 1-02'
    },
    {
        abbr: 'MEPCOM',
        def: 'military entrance processing command',
        src: 'JP 1-02'
    },
    {
        abbr: 'MEPES',
        def: 'Medical Planning and Execution System',
        src: 'JP 1-02'
    },
    {
        abbr: 'MEPRS',
        def: 'Military Entrance Processing and Reporting System',
        src: 'JP 1-02'
    },
    {
        abbr: 'MERCO',
        def: 'merchant ship reporting and control',
        src: 'JP 1-02'
    },
    {
        abbr: 'MERSHIPS',
        def: 'merchant ships',
        src: 'JP 1-02'
    },
    {
        abbr: 'MES',
        def: 'medical equipment set',
        src: 'JP 4-02'
    },
    {
        abbr: 'MESAR',
        def: 'minimum-essential security assistance requirements',
        src: 'JP 1-02'
    },
    {
        abbr: 'MESF',
        def: 'maritime expeditionary security force',
        src: '1-02'
    },
    {
        abbr: 'MESFC',
        def: 'maritime expeditionary security force commander',
        src: '1-02'
    },
    {
        abbr: 'MESO',
        def: 'maritime expeditionary security operations',
        src: '1-02'
    },
    {
        abbr: 'MET',
        def: 'medium equipment transporter; mobile environmental team',
        src: 'JP 1-02'
    },
    {
        abbr: 'METAR',
        def: 'meteorological airfield report; meteorological aviation report',
        src: 'JP 1-02'
    },
    {
        abbr: 'METARS',
        def: 'routine aviation weather report (roughly translated from French; international standard code format for hourly surface weather observations)',
        src: 'JP 1-02'
    },
    {
        abbr: 'METCON',
        def: 'control of meteorological information (roughly translated from French); meteorological control (Navy)',
        src: 'JP 1-02'
    },
    {
        abbr: 'METL',
        def: 'mission-essential task list',
        src: '1-02'
    },
    {
        abbr: 'METMF',
        def: 'meteorological mobile facility',
        src: 'JP 1-02'
    },
    {
        abbr: 'METMF(R)',
        def: 'meteorological mobile facility (replacement)',
        src: 'JP 1-02'
    },
    {
        abbr: 'METOC',
        def: 'meteorological and oceanographic',
        src: '1-02'
    },
    {
        abbr: 'METSAT',
        def: 'meteorological satellite',
        src: 'JP 1-02'
    },
    {
        abbr: 'METT-T',
        def: 'mission, enemy, terrain and weather, troops and support available--time available',
        src: '1-02'
    },
    {
        abbr: 'METT-TC',
        def: 'mission, enemy, terrain and weather, troops and support available-time available and civil considerations (Army)',
        src: 'JP 1-02'
    },
    {
        abbr: 'METWATCH',
        def: 'meteorological watch',
        src: '1-02'
    },
    {
        abbr: 'MEU',
        def: 'Marine expeditionary unit',
        src: '1-02'
    },
    {
        abbr: 'MEVA',
        def: 'mission essential vulnerable area',
        src: '1-02'
    },
    {
        abbr: 'MEWSG',
        def: 'Multi-Service Electronic Warfare Support Group (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'MEZ',
        def: 'missile engagement zone',
        src: '1-02'
    },
    {
        abbr: 'MF',
        def: 'medium frequency; mobile facility; multi-frequency',
        src: 'JP 1-02'
    },
    {
        abbr: 'MFC',
        def: 'multinational force commander',
        src: 'JP 1-02'
    },
    {
        abbr: 'MFDS',
        def: 'Modular Fuel Delivery System',
        src: 'JP 1-02'
    },
    {
        abbr: 'MFE',
        def: 'manpower force element; mobile field exchange',
        src: '1-02'
    },
    {
        abbr: 'MFFIMS',
        def: 'mass fatality field information management system',
        src: 'JP 1-02'
    },
    {
        abbr: 'MFO',
        def: 'multinational force and observers',
        src: 'JP 1-02'
    },
    {
        abbr: 'MFP',
        def: 'major force program',
        src: 'JP 1-02'
    },
    {
        abbr: 'MFPC',
        def: 'maritime future plans center',
        src: 'JP 3-32'
    },
    {
        abbr: 'MFPF',
        def: 'minefield planning folder',
        src: 'JP 1-02'
    },
    {
        abbr: 'MFS',
        def: 'multifunction switch',
        src: 'JP 1-02'
    },
    {
        abbr: 'MG',
        def: 'military information support operations group',
        src: '1-02'
    },
    {
        abbr: 'MGB',
        def: 'medium girder bridge',
        src: 'JP 1-02'
    },
    {
        abbr: 'MGM',
        def: 'master group multiplexer',
        src: 'JP 1-02'
    },
    {
        abbr: 'MGRS',
        def: 'military grid reference system',
        src: '1-02'
    },
    {
        abbr: 'MGS',
        def: 'mobile ground system',
        src: 'JP 1-02'
    },
    {
        abbr: 'MGT',
        def: 'management',
        src: 'JP 1-02'
    },
    {
        abbr: 'MGW',
        def: 'maximum gross weight',
        src: '1-02'
    },
    {
        abbr: 'MHC',
        def: 'management headquarters ceiling',
        src: 'JP 1-02'
    },
    {
        abbr: 'MHD',
        def: 'maritime homeland defense',
        src: '1-02'
    },
    {
        abbr: 'MHE',
        def: 'materials handling equipment',
        src: '1-02'
    },
    {
        abbr: 'MHS',
        def: 'maritime homeland security; Military Health System',
        src: '1-02'
    },
    {
        abbr: 'MHU',
        def: 'modular heat unit',
        src: 'JP 4-06'
    },
    {
        abbr: 'MHW',
        def: 'mean high water',
        src: 'JP 1-02'
    },
    {
        abbr: 'MHz',
        def: 'megahertz',
        src: '1-02'
    },
    {
        abbr: 'MI',
        def: 'military intelligence; movement instructions',
        src: '1-02'
    },
    {
        abbr: 'MIA',
        def: 'missing in action',
        src: '1-02'
    },
    {
        abbr: 'MIAC',
        def: 'maritime intelligence and analysis center',
        src: 'JP 3-32'
    },
    {
        abbr: 'MIB',
        def: 'Military Intelligence Board',
        src: '1-02'
    },
    {
        abbr: 'MIC',
        def: 'Multinational Interoperability Council',
        src: '1-02'
    },
    {
        abbr: 'MICAP',
        def: 'mission capable/mission capability',
        src: 'JP 1-02'
    },
    {
        abbr: 'MICON',
        def: 'mission concept',
        src: 'JP 1-02'
    },
    {
        abbr: 'MICRO-MICS',
        def: 'micro-medical inventory control system',
        src: 'JP 1-02'
    },
    {
        abbr: 'MICRO-SNAP',
        def: 'micro-shipboard non-tactical automated data processing system',
        src: 'JP 1-02'
    },
    {
        abbr: 'MIDAS',
        def: 'model for intertheater deployment by air and sea',
        src: '1-02'
    },
    {
        abbr: 'MIDB',
        def: 'modernized integrated database; modernized intelligence database',
        src: '1-02'
    },
    {
        abbr: 'MIDDS-T',
        def: 'Meteorological and Oceanographic (METOC) Integrated Data Display System-Tactical',
        src: 'JP 1-02'
    },
    {
        abbr: 'MIF',
        def: 'maritime interception force',
        src: 'JP 1-02'
    },
    {
        abbr: 'MIJI',
        def: 'meaconing, interference, jamming, and intrusion',
        src: 'JP 1-02'
    },
    {
        abbr: 'MIL-STD',
        def: 'military standard',
        src: '1-02'
    },
    {
        abbr: 'MILAIR',
        def: 'military airlift',
        src: '1-02'
    },
    {
        abbr: 'MILALOC',
        def: 'military air line of communications',
        src: '1-02'
    },
    {
        abbr: 'MILCON',
        def: 'military construction',
        src: '1-02'
    },
    {
        abbr: 'MILDEC',
        def: 'military deception',
        src: '1-02'
    },
    {
        abbr: 'MILDEP',
        def: 'Military Department',
        src: 'JP 1-02'
    },
    {
        abbr: 'MILGP',
        def: 'military group (assigned to American Embassy in host nation)',
        src: 'JP 1-02'
    },
    {
        abbr: 'MILOB',
        def: 'military observer',
        src: 'JP 1-02'
    },
    {
        abbr: 'MILOC',
        def: 'military oceanography group (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'MILPERS',
        def: 'military personnel',
        src: 'JP 1-02'
    },
    {
        abbr: 'MILSATCOM',
        def: 'military satellite communications',
        src: '1-02'
    },
    {
        abbr: 'MILSPEC',
        def: 'military specification',
        src: '1-02'
    },
    {
        abbr: 'MILSTAMP',
        def: 'military standard transportation and movement procedures',
        src: 'JP 1-02'
    },
    {
        abbr: 'MILSTAR',
        def: 'military strategic and tactical relay system',
        src: 'JP 1-02'
    },
    {
        abbr: 'MILSTRAP',
        def: 'military standard transaction reporting and accounting procedure',
        src: 'JP 1-02'
    },
    {
        abbr: 'MILSTRIP',
        def: 'military standard requisitioning and issue procedure',
        src: '1-02'
    },
    {
        abbr: 'MILTECH',
        def: 'military technician',
        src: 'JP 1-02'
    },
    {
        abbr: 'MILU',
        def: 'multinational integrated logistic unit',
        src: '1-02'
    },
    {
        abbr: 'MILVAN',
        def: 'military van (container)',
        src: 'JP 1-02'
    },
    {
        abbr: 'MIM',
        def: 'maintenance instruction manual',
        src: 'JP 1-02'
    },
    {
        abbr: 'MIMP',
        def: 'Mobilization Information Management Plan',
        src: '1-02'
    },
    {
        abbr: 'MINEOPS',
        def: 'joint minelaying operations',
        src: 'JP 1-02'
    },
    {
        abbr: 'MIO',
        def: 'maritime interception operations',
        src: '1-02'
    },
    {
        abbr: 'MIO-9',
        def: 'information operations threat analysis division (DIA)',
        src: 'JP 2-01.2'
    },
    {
        abbr: 'MIOC',
        def: 'maritime interception operations commander',
        src: '1-02'
    },
    {
        abbr: 'MIP',
        def: 'military intelligence program',
        src: '1-02'
    },
    {
        abbr: 'MIPE',
        def: 'mobile intelligence processing element',
        src: 'JP 1-02'
    },
    {
        abbr: 'MIPOE',
        def: 'medical intelligence preparation of the operational environment',
        src: '1-02'
    },
    {
        abbr: 'MIPR',
        def: 'military interdepartmental purchase request',
        src: '1-02'
    },
    {
        abbr: 'MIRCS',
        def: 'mobile integrated remains collection system',
        src: '1-02'
    },
    {
        abbr: 'MIS',
        def: 'maritime intelligence summary; military information support',
        src: '1-02'
    },
    {
        abbr: 'MISAS',
        def: 'military information support automated system',
        src: '1-02'
    },
    {
        abbr: 'MISCAP',
        def: 'mission capability',
        src: 'JP 1-02'
    },
    {
        abbr: 'MISG',
        def: 'military information support group',
        src: '1-02'
    },
    {
        abbr: 'MISO',
        def: 'military information support operations',
        src: '1-02'
    },
    {
        abbr: 'MISREP',
        def: 'mission report',
        src: '1-02'
    },
    {
        abbr: 'MIST',
        def: 'military information support team',
        src: 'JP 1-02'
    },
    {
        abbr: 'MISTF',
        def: 'military information support task force',
        src: '1-02'
    },
    {
        abbr: 'MITAM',
        def: 'mission tasking matrix',
        src: '1-02'
    },
    {
        abbr: 'MITASK',
        def: 'mission tasking',
        src: 'JP 1-02'
    },
    {
        abbr: 'MITO',
        def: 'minimum interval takeoff',
        src: 'JP 1-02'
    },
    {
        abbr: 'MITT',
        def: 'mobile integrated tactical terminal',
        src: 'JP 1-02'
    },
    {
        abbr: 'MIUW',
        def: 'mobile inshore undersea warfare',
        src: 'JP 1-02'
    },
    {
        abbr: 'MIW',
        def: 'mine warfare',
        src: '1-02'
    },
    {
        abbr: 'MIWC',
        def: 'mine warfare commander',
        src: '1-02'
    },
    {
        abbr: 'MIWG',
        def: 'multinational interoperability working group',
        src: '1-02'
    },
    {
        abbr: 'MJCS',
        def: 'Joint Chiefs of Staff memorandum',
        src: 'JP 1-02'
    },
    {
        abbr: 'MJLC',
        def: 'multinational joint logistic center',
        src: '1-02'
    },
    {
        abbr: 'MLA',
        def: 'mission load allowance',
        src: 'JP 1-02'
    },
    {
        abbr: 'MLAYREP',
        def: 'mine laying report',
        src: 'JP 3-15'
    },
    {
        abbr: 'MLE',
        def: 'maritime law enforcement',
        src: 'JP 1-02'
    },
    {
        abbr: 'MLEA',
        def: 'Maritime Law Enforcement Academy',
        src: '1-02'
    },
    {
        abbr: 'MLEM',
        def: 'Maritime Law Enforcement Manual',
        src: '1-02'
    },
    {
        abbr: 'MLG',
        def: 'Marine logistics group',
        src: '1-02'
    },
    {
        abbr: 'MLI',
        def: 'munitions list item',
        src: '1-02'
    },
    {
        abbr: 'MLMC',
        def: 'medical logistics management center',
        src: '1-02'
    },
    {
        abbr: 'MLO',
        def: 'military liaison office',
        src: 'JP 1-02'
    },
    {
        abbr: 'MLP',
        def: 'message load plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'MLPP',
        def: 'multilevel precedence and preemption',
        src: 'JP 1-02'
    },
    {
        abbr: 'MLPS',
        def: 'Medical Logistics Proponent Subcommittee',
        src: 'JP 4-02'
    },
    {
        abbr: 'MLRS',
        def: 'multiple launch rocket system',
        src: '1-02'
    },
    {
        abbr: 'MLS',
        def: 'microwave landing system; multilevel security',
        src: 'JP 1-02'
    },
    {
        abbr: 'MLSA',
        def: 'mutual logistics support agreement',
        src: 'JP 4-10'
    },
    {
        abbr: 'MLW',
        def: 'mean low water',
        src: 'JP 1-02'
    },
    {
        abbr: 'MMA',
        def: 'military mission area',
        src: '1-02'
    },
    {
        abbr: 'MMAC',
        def: 'military mine action center',
        src: '1-02'
    },
    {
        abbr: 'MMC',
        def: 'materiel management center',
        src: 'JP 1-02'
    },
    {
        abbr: 'MMG',
        def: 'Department of Defense Master Mobilization Guide',
        src: '1-02'
    },
    {
        abbr: 'MMI',
        def: 'man/machine interface',
        src: 'JP 1-02'
    },
    {
        abbr: 'MMIS',
        def: 'military information support operations management information subsystem',
        src: '1-02'
    },
    {
        abbr: 'MMLS',
        def: 'mobile microwave landing system',
        src: 'JP 1-02'
    },
    {
        abbr: 'MMS',
        def: 'mast-mounted sight',
        src: 'JP 1-02'
    },
    {
        abbr: 'MMT',
        def: 'military mail terminal',
        src: 'JP 1-0'
    },
    {
        abbr: 'MNC',
        def: 'multinational corporation',
        src: '1-02'
    },
    {
        abbr: 'MNCC',
        def: 'multinational coordination center',
        src: '1-02'
    },
    {
        abbr: 'MNF',
        def: 'multinational force',
        src: '1-02'
    },
    {
        abbr: 'MNFACC',
        def: 'multinational force air component commander',
        src: '1-02'
    },
    {
        abbr: 'MNFC',
        def: 'multinational force commander',
        src: '1-02'
    },
    {
        abbr: 'MNFLCC',
        def: 'multinational force land component commander',
        src: '1-02'
    },
    {
        abbr: 'MNFMCC',
        def: 'multinational force maritime component commander',
        src: '1-02'
    },
    {
        abbr: 'MNFSOCC',
        def: 'multinational force special operations component commander',
        src: '1-02'
    },
    {
        abbr: 'MNJLC',
        def: 'multinational joint logistics component',
        src: '1-02'
    },
    {
        abbr: 'MNL',
        def: 'master net list; multinational logistics',
        src: '1-02'
    },
    {
        abbr: 'MNLC',
        def: 'multinational logistic center',
        src: '1-02'
    },
    {
        abbr: 'MNP',
        def: 'master navigation plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'MNS',
        def: 'mine neutralization system (USN); mission needs statement',
        src: 'JP 1-02'
    },
    {
        abbr: 'MNTF',
        def: 'multinational task force',
        src: '1-02'
    },
    {
        abbr: 'MO',
        def: 'month',
        src: '1-02'
    },
    {
        abbr: 'MOA',
        def: 'memorandum of agreement; military operating area',
        src: '1-02'
    },
    {
        abbr: 'MOADS',
        def: 'maneuver-oriented ammunition distribution system',
        src: 'JP 1-02'
    },
    {
        abbr: 'MOB',
        def: 'main operating base; mobilization',
        src: '1-02'
    },
    {
        abbr: 'MOBCON',
        def: 'mobilization control',
        src: 'JP 1-02'
    },
    {
        abbr: 'MOBREP',
        def: 'military manpower mobilization and accession status report; mobilization report',
        src: '1-02'
    },
    {
        abbr: 'MOC',
        def: 'maritime operations center; media operations center',
        src: '1-02'
    },
    {
        abbr: 'MOCC',
        def: 'measurement and signature intelligence (MASINT) operations coordination center; mobile operations control center',
        src: 'JP 1-02'
    },
    {
        abbr: 'MOD',
        def: 'Minister of Defense; ministry of defense; modification',
        src: '1-02'
    },
    {
        abbr: 'MOD T-AGOS',
        def: 'modified tactical auxiliary general ocean surveillance',
        src: 'JP 1-02'
    },
    {
        abbr: 'MODEM',
        def: 'modulator/demodulator',
        src: 'JP 1-02'
    },
    {
        abbr: 'MODLOC',
        def: 'miscellaneous operational details, local operations',
        src: 'JP 1-02'
    },
    {
        abbr: 'MOE',
        def: 'measure of effectiveness',
        src: '1-02'
    },
    {
        abbr: 'MOEI',
        def: 'measure of effectiveness indicator',
        src: '1-02'
    },
    {
        abbr: 'MOG',
        def: 'maximum (aircraft) on ground; movement on ground (aircraft); multinational observer group',
        src: '1-02'
    },
    {
        abbr: 'MOGAS',
        def: 'motor gasoline',
        src: 'JP 1-02'
    },
    {
        abbr: 'MOLE',
        def: 'multichannel operational line evaluator',
        src: 'JP 1-02'
    },
    {
        abbr: 'MOMAT',
        def: 'mobility matting',
        src: 'JP 1-02'
    },
    {
        abbr: 'MOMSS',
        def: 'mode and message selection system',
        src: 'JP 1-02'
    },
    {
        abbr: 'MOP',
        def: 'measure of performance; memorandum of policy',
        src: '1-02'
    },
    {
        abbr: 'MOPP',
        def: 'mission-oriented protective posture',
        src: '1-02'
    },
    {
        abbr: 'MOR',
        def: 'memorandum of record',
        src: 'JP 1-02'
    },
    {
        abbr: 'MOS',
        def: 'military occupational specialty',
        src: 'JP 1-02'
    },
    {
        abbr: 'MOSC',
        def: 'meteorological and oceanographic operations support community',
        src: '1-02'
    },
    {
        abbr: 'MOTR',
        def: 'maritime operational threat response',
        src: '1-02'
    },
    {
        abbr: 'MOU',
        def: 'memorandum of understanding',
        src: '1-02'
    },
    {
        abbr: 'MOUT',
        def: 'military operations in urban terrain; military operations on urbanized terrain',
        src: 'JP 1-02'
    },
    {
        abbr: 'MOVREP',
        def: 'movement report',
        src: 'JP 1-02'
    },
    {
        abbr: 'MOW',
        def: 'maintenance orderwire',
        src: 'JP 1-02'
    },
    {
        abbr: 'MP',
        def: 'military police (Army and Marine); multinational publication',
        src: '1-02'
    },
    {
        abbr: 'MPA',
        def: 'maritime patrol aircraft; mission and payload assessment; mission planning agent',
        src: 'JP 1-02'
    },
    {
        abbr: 'MPAT',
        def: 'military patient administration team; Multinational Planning Augmentation Team',
        src: '1-02'
    },
    {
        abbr: 'MPC',
        def: 'mid-planning conference; military personnel center',
        src: 'JP 1-02'
    },
    {
        abbr: 'MPE/S',
        def: 'maritime pre-positioning equipment and supplies',
        src: 'JP 1-02'
    },
    {
        abbr: 'MPF',
        def: 'maritime pre-positioning force',
        src: '1-02'
    },
    {
        abbr: 'MPFUB',
        def: 'maritime pre-positioning force utility boat',
        src: '1-02'
    },
    {
        abbr: 'MPG',
        def: 'maritime planning group; mensurated point graphic',
        src: 'JP 1-02'
    },
    {
        abbr: 'mph',
        def: 'miles per hour',
        src: 'JP 1-02'
    },
    {
        abbr: 'MPICE',
        def: 'measuring progress in conflict environments',
        src: '1-02'
    },
    {
        abbr: 'MPLAN',
        def: 'Marine Corps Mobilization Management Plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'MPM',
        def: 'medical planning module',
        src: 'JP 1-02'
    },
    {
        abbr: 'MPNTP',
        def: 'Master Positioning Navigation and Timing Plan',
        src: '1-02'
    },
    {
        abbr: 'MPO',
        def: 'military post office',
        src: 'JP 1-02'
    },
    {
        abbr: 'MPP',
        def: 'maritime procedural publication',
        src: '1-02'
    },
    {
        abbr: 'MPR',
        def: 'maritime patrol and reconnaissance',
        src: '1-02'
    },
    {
        abbr: 'MPRS',
        def: 'multipoint refueling system',
        src: '1-02'
    },
    {
        abbr: 'MPS',
        def: 'maritime pre-positioning ship; message processor shelter; Military Planning Service (UN); Military Postal Service',
        src: '1-02'
    },
    {
        abbr: 'MPSA',
        def: 'Military Postal Service Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'MPSRON',
        def: 'maritime pre-positioning ships squadron',
        src: '1-02'
    },
    {
        abbr: 'MR',
        def: 'milliradian; mobile reserve',
        src: 'JP 1-02'
    },
    {
        abbr: 'MRAALS',
        def: 'Marine remote area approach and landing system',
        src: 'JP 1-02'
    },
    {
        abbr: 'MRAT',
        def: 'medical radiobiology advisory team',
        src: 'JP 1-02'
    },
    {
        abbr: 'MRBM',
        def: 'medium-range ballistic missile',
        src: '1-02'
    },
    {
        abbr: 'MRCI',
        def: 'maximum rescue coverage intercept',
        src: 'JP 1-02'
    },
    {
        abbr: 'MRE',
        def: 'meal, ready to eat',
        src: 'JP 1-02'
    },
    {
        abbr: 'MRG',
        def: 'movement requirements generator',
        src: 'JP 1-02'
    },
    {
        abbr: 'MRI',
        def: 'magnetic resonance imaging',
        src: 'JP 4-02'
    },
    {
        abbr: 'MRMC',
        def: 'US Army Medical Research and Materiel Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'MRO',
        def: 'mass rescue operation; materiel release order; medical regulating office; medical regulating officer',
        src: '1-02'
    },
    {
        abbr: 'MROC',
        def: 'multicommand required operational capability',
        src: 'JP 1-02'
    },
    {
        abbr: 'MRR',
        def: 'minimum-risk route',
        src: '1-02'
    },
    {
        abbr: 'MRRR',
        def: 'mobility requirement resource roster',
        src: 'JP 1-02'
    },
    {
        abbr: 'MRS',
        def: 'measurement and signature intelligence (MASINT) requirements system; meteorological radar subsystem; movement report system',
        src: 'JP 1-02'
    },
    {
        abbr: 'MRSA',
        def: 'Materiel Readiness Support Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'MRT',
        def: 'maintenance recovery team',
        src: '1-02'
    },
    {
        abbr: 'MRU',
        def: 'mountain rescue unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'MRX',
        def: 'mission readiness exercise',
        src: '1-02'
    },
    {
        abbr: 'MS',
        def: 'message switch',
        src: 'JP 1-02'
    },
    {
        abbr: 'ms',
        def: 'millisecond',
        src: 'JP 1-02'
    },
    {
        abbr: 'MS-DOS',
        def: 'Microsoft disk operating system',
        src: 'JP 1-02'
    },
    {
        abbr: 'MSA',
        def: 'Maritime Security Act',
        src: '1-02'
    },
    {
        abbr: 'MSC',
        def: 'major subordinate command; maritime support center; Military Sealift Command; military staff committee; mission support confirmation',
        src: '1-02'
    },
    {
        abbr: 'MSCA',
        def: 'military support to civilian authorities',
        src: '1-02'
    },
    {
        abbr: 'MSCD',
        def: 'military support to civil defense',
        src: 'JP 1-02'
    },
    {
        abbr: 'MSCO',
        def: 'Military Sealift Command Office',
        src: '1-02'
    },
    {
        abbr: 'MSD',
        def: 'marginal support date; mobile security division',
        src: 'JP 1-02'
    },
    {
        abbr: 'MSE',
        def: 'mission support element; mobile subscriber equipment',
        src: '1-02'
    },
    {
        abbr: 'MSECR',
        def: 'HIS 6000 security module',
        src: 'JP 1-02'
    },
    {
        abbr: 'MSEL',
        def: 'master scenario events list',
        src: 'JP 1-02'
    },
    {
        abbr: 'MSF',
        def: 'Medicins Sans Frontieres ("Doctors Without Borders"); mission support force; mobile security force; multiplex signal format',
        src: 'JP 1-02'
    },
    {
        abbr: 'MSG',
        def: 'Marine security guard; message',
        src: '1-02'
    },
    {
        abbr: 'MSGID',
        def: 'message identification',
        src: 'JP 1-02'
    },
    {
        abbr: 'MSHARPP',
        def: 'mission, symbolism, history, accessibility, recognizability, population, and proximity',
        src: '1-02'
    },
    {
        abbr: 'MSI',
        def: 'modified surface index; multispectral imagery',
        src: '1-02'
    },
    {
        abbr: 'MSIC',
        def: 'Missile and Space Intelligence Center',
        src: '1-02'
    },
    {
        abbr: 'MSIS',
        def: 'Marine safety information system',
        src: 'JP 1-02'
    },
    {
        abbr: 'MSK',
        def: 'mission support kit',
        src: 'JP 1-02'
    },
    {
        abbr: 'MSL',
        def: 'master station log; military shipping label ',
        src: '1-02'
    },
    {
        abbr: 'MSNAP',
        def: 'merchant ship naval augmentation program',
        src: 'JP 1-02'
    },
    {
        abbr: 'MSO',
        def: 'map support office; marine safety office(r); maritime security operations; military satellite communications (MILSATCOM) systems organization; military source operation; military strategic objective; military support operations',
        src: '1-02'
    },
    {
        abbr: 'MSOAG',
        def: 'Marine special operations advisor group',
        src: '1-02'
    },
    {
        abbr: 'MSOC',
        def: 'Marine special operations company',
        src: 'JP 3-05.1'
    },
    {
        abbr: 'MSOR',
        def: 'Marine Special Operations Regiment',
        src: '1-02'
    },
    {
        abbr: 'MSP',
        def: 'maritime security program; mission support plan; mobile sensor platform',
        src: '1-02'
    },
    {
        abbr: 'MSPES',
        def: 'mobilization stationing, planning, and execution system',
        src: 'JP 1-02'
    },
    {
        abbr: 'MSPS',
        def: 'military information support operations studies program subsystem; mobilization stationing and planning system',
        src: '1-02'
    },
    {
        abbr: 'MSR',
        def: 'main supply route; maritime support request; mission support request',
        src: '1-02'
    },
    {
        abbr: 'MSRON',
        def: 'maritime expeditionary security squadron',
        src: '1-02'
    },
    {
        abbr: 'MSRP',
        def: 'mission strategic resource plan',
        src: '1-02'
    },
    {
        abbr: 'MSRR',
        def: 'modeling and simulation resource repository',
        src: 'JP 1-02'
    },
    {
        abbr: 'MSRT',
        def: 'Maritime Security Response Team (USCG)',
        src: '1-02'
    },
    {
        abbr: 'MSRV',
        def: 'message switch rekeying variable',
        src: 'JP 1-02'
    },
    {
        abbr: 'MSS',
        def: 'medical surveillance system; meteorological satellite subsystem',
        src: 'JP 1-02'
    },
    {
        abbr: 'MSSG',
        def: 'Marine expeditionary unit (MEU) service support group',
        src: 'JP 1-02'
    },
    {
        abbr: 'MST',
        def: 'Marine expeditionary force (MEF) weather support team; meteorological and oceanographic support team; mission support team',
        src: 'JP 1-02'
    },
    {
        abbr: 'MT',
        def: 'military technician; ministry team',
        src: '1-02'
    },
    {
        abbr: 'MT Bn',
        def: 'motor transport battalion',
        src: 'JP 1-02'
    },
    {
        abbr: 'MT/D',
        def: 'measurement tons per day',
        src: 'JP 1-02'
    },
    {
        abbr: 'MTA',
        def: 'military training agreement',
        src: 'JP 1-02'
    },
    {
        abbr: 'MTAC',
        def: 'Multiple Threat Alert Center (DON)',
        src: '1-02'
    },
    {
        abbr: 'MTBF',
        def: 'mean time between failures',
        src: 'JP 1-02'
    },
    {
        abbr: 'MTCR',
        def: 'missile technology control regime',
        src: '1-02'
    },
    {
        abbr: 'mtDNA',
        def: 'mitochondrial deoxyribonucleic acid',
        src: '1-02'
    },
    {
        abbr: 'MTF',
        def: 'medical treatment facility; message text format; military information support operations task force',
        src: '1-02'
    },
    {
        abbr: 'MTG',
        def: 'master timing generator; military information support operations task group',
        src: '1-02'
    },
    {
        abbr: 'MTI',
        def: 'moving target indicator',
        src: 'JP 1-02'
    },
    {
        abbr: 'MTIC',
        def: 'Military Targeting Intelligence Committee',
        src: 'JP 1-02'
    },
    {
        abbr: 'MTL',
        def: 'mission tasking letter',
        src: 'JP 1-02'
    },
    {
        abbr: 'MTMS',
        def: 'maritime tactical message system',
        src: 'JP 1-02'
    },
    {
        abbr: 'MTN',
        def: 'multi-tactical data link network',
        src: '1-02'
    },
    {
        abbr: 'MTO',
        def: 'message to observer; mission type order',
        src: 'JP 1-02'
    },
    {
        abbr: 'MTOE',
        def: 'modified table of organization and equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'MTON',
        def: 'measurement ton',
        src: '1-02'
    },
    {
        abbr: 'MTP',
        def: 'Marine tactical publication; maritime task plan; mission tasking packet',
        src: '1-02'
    },
    {
        abbr: 'MTS',
        def: 'Movement Tracking System',
        src: 'JP 1-02'
    },
    {
        abbr: 'MTS/SOF-IRIS',
        def: 'multifunction system',
        src: 'JP 1-02'
    },
    {
        abbr: 'MTT',
        def: 'magnetic tape transport',
        src: '1-02'
    },
    {
        abbr: 'MTTP',
        def: 'multi-Service tactics, techniques, and procedures',
        src: 'JP 3-11'
    },
    {
        abbr: 'MTW',
        def: 'major theater war',
        src: 'JP 1-02'
    },
    {
        abbr: 'MTX',
        def: 'message text format',
        src: 'JP 1-02'
    },
    {
        abbr: 'MU',
        def: 'marry up',
        src: 'JP 1-02'
    },
    {
        abbr: 'MUL',
        def: 'master urgency list (DOD)',
        src: 'JP 1-02'
    },
    {
        abbr: 'MULE',
        def: 'modular universal laser equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'MUOS',
        def: 'Mobile Users Object System',
        src: '1-02'
    },
    {
        abbr: 'MUREP',
        def: 'munitions report',
        src: 'JP 1-02'
    },
    {
        abbr: 'MUSARC',
        def: 'major United States Army reserve commands',
        src: 'JP 1-02'
    },
    {
        abbr: 'MUSE',
        def: 'mobile utilities support equipment',
        src: '1-02'
    },
    {
        abbr: 'MUST',
        def: 'medical unit, self contained, transportable',
        src: 'JP 1-02'
    },
    {
        abbr: 'MUX',
        def: 'multiplex',
        src: 'JP 1-02'
    },
    {
        abbr: 'MV',
        def: 'merchant vessel; motor vessel',
        src: 'JP 1-02'
    },
    {
        abbr: 'mV',
        def: 'millivolt',
        src: 'JP 1-02'
    },
    {
        abbr: 'MWBP',
        def: 'missile warning bypass',
        src: 'JP 1-02'
    },
    {
        abbr: 'MWC',
        def: 'Missile Warning Center (NORAD)',
        src: 'JP 1-02'
    },
    {
        abbr: 'MWD',
        def: 'military working dog',
        src: '1-02'
    },
    {
        abbr: 'MWDT',
        def: 'military working dog team',
        src: 'JP 1-02'
    },
    {
        abbr: 'MWF',
        def: 'medical working file',
        src: 'JP 1-02'
    },
    {
        abbr: 'MWG',
        def: 'mobilization working group',
        src: '1-02'
    },
    {
        abbr: 'MWOD',
        def: 'multiple word-of-day',
        src: 'JP 1-02'
    },
    {
        abbr: 'MWR',
        def: 'missile warning receiver; morale, welfare, and recreation',
        src: '1-02'
    },
    {
        abbr: 'MWSG',
        def: 'Marine wing support group',
        src: '1-02'
    },
    {
        abbr: 'MWSS',
        def: 'Marine wing support squadron',
        src: '1-02'
    },
    {
        abbr: 'MWT',
        def: 'modular warping tug',
        src: '1-02'
    },
    {
        abbr: 'N',
        def: 'number of required track spacings; number of search and rescue units (SRUs)',
        src: 'JP 1-02'
    },
    {
        abbr: 'N-1',
        def: 'Navy component manpower or personnel staff officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'N-2',
        def: 'Director of Naval Intelligence; Navy component intelligence staff officer',
        src: '1-02'
    },
    {
        abbr: 'N-3',
        def: 'Navy component operations staff officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'N-4',
        def: 'Navy component logistics staff officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'N-5',
        def: 'Navy component plans staff officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'N-6',
        def: 'Navy component communications staff officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'N-Sp/CC',
        def: 'North American Aerospace Defense Command (NORAD)-US Space Command/Command Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'N-TFS',
        def: 'New Tactical Forecast System',
        src: 'JP 1-02'
    },
    {
        abbr: 'NA',
        def: 'nation assistance',
        src: '1-02'
    },
    {
        abbr: 'NA5CRO',
        def: 'non-Article 5 crisis response operation (NATO)',
        src: '1-02'
    },
    {
        abbr: 'NAAG',
        def: 'North Atlantic Treaty Organization (NATO) Army Armaments Group',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAC',
        def: 'North American Aerospace Defense Command (NORAD) Air Center; North Atlantic Council (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'NACE',
        def: 'National Military Command System (NMCS) Automated Control Executive',
        src: 'JP 1-02'
    },
    {
        abbr: 'NACISA',
        def: 'North Atlantic Treaty Organization (NATO) Communications and Information Systems Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'NACISC',
        def: 'North Atlantic Treaty Organization (NATO) Communications and Information Systems Committee',
        src: 'JP 1-02'
    },
    {
        abbr: 'NACSEM',
        def: 'National Communications Security/Emanations Security (COMSEC/EMSEC) Information Memorandum',
        src: 'JP 1-02'
    },
    {
        abbr: 'NACSI',
        def: 'national communications security (COMSEC) instruction',
        src: 'JP 1-02'
    },
    {
        abbr: 'NACSIM',
        def: 'national communications security (COMSEC) information memorandum',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAD 83',
        def: 'North American Datum 1983',
        src: '1-02'
    },
    {
        abbr: 'NADEFCOL',
        def: 'North Atlantic Treaty Organization (NATO) Defense College',
        src: 'JP 1-02'
    },
    {
        abbr: 'NADEP',
        def: 'naval aircraft depot',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAE',
        def: 'Navy acquisition executive',
        src: '1-02'
    },
    {
        abbr: 'NAEC-ENG',
        def: 'Naval Air Engineering Center - Engineering',
        src: '1-02'
    },
    {
        abbr: 'NAF',
        def: 'naval air facility; nonappropriated funds; numbered air force',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAFAG',
        def: 'North Atlantic Treaty Organization (NATO) Air Force Armaments Group',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAI',
        def: 'named area of interest',
        src: '1-02'
    },
    {
        abbr: 'NAIC',
        def: 'National Air Intelligence Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAK',
        def: 'negative acknowledgement',
        src: 'JP 1-02'
    },
    {
        abbr: 'NALC',
        def: 'Navy ammunition logistics code',
        src: '1-02'
    },
    {
        abbr: 'NALE',
        def: 'naval and amphibious liaison element',
        src: '1-02'
    },
    {
        abbr: 'NALSS',
        def: 'naval advanced logistic support site',
        src: '1-02'
    },
    {
        abbr: 'NAMP',
        def: 'North Atlantic Treaty Organization (NATO) Annual Manpower Plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAMS',
        def: 'National Air Mobility System',
        src: '1-02'
    },
    {
        abbr: 'NAMTO',
        def: 'Navy material transportation office',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAOC',
        def: 'national airborne operations center (E-4B aircraft)',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAPCAP',
        def: 'North Atlantic Treaty Organization (NATO) Allied Pre-Committed Civil Aircraft Program',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAPMA',
        def: 'North Atlantic Treaty Organization (NATO) Airborne Early Warning and Control Program Management Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAPMIS',
        def: 'Navy Preventive Medicine Information System',
        src: 'JP 4-02'
    },
    {
        abbr: 'NAR',
        def: 'nonconventional assisted recovery; notice of ammunition reclassification',
        src: '1-02'
    },
    {
        abbr: 'NARAC',
        def: 'national atmospheric release advisory capability; National Atmospheric Release Advisory Center (DOE)',
        src: '1-02'
    },
    {
        abbr: 'NARC',
        def: 'non-automatic relay center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NARP',
        def: 'Nuclear Weapon Accident Response Procedures',
        src: '1-02'
    },
    {
        abbr: 'NAS',
        def: 'naval air station',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAS computer',
        def: 'national airspace system computer',
        src: 'JP 1-02'
    },
    {
        abbr: 'NASA',
        def: 'National Aeronautics and Space Administration',
        src: '1-02'
    },
    {
        abbr: 'NASAR',
        def: 'National Association for Search and Rescue',
        src: 'JP 1-02'
    },
    {
        abbr: 'NASIC',
        def: 'National Air and Space Intelligence Center',
        src: '1-02'
    },
    {
        abbr: 'NAT',
        def: 'nonair-transportable (cargo)',
        src: 'JP 1-02'
    },
    {
        abbr: 'NATO',
        def: 'North Atlantic Treaty Organization',
        src: '1-02'
    },
    {
        abbr: 'NATOPS',
        def: 'Naval Air Training and Operating Procedures Standardization',
        src: '1-02'
    },
    {
        abbr: 'NAU',
        def: 'Narcotics Assistance Unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVAID',
        def: 'navigation aid',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVAIDS',
        def: 'navigational aids',
        src: '1-02'
    },
    {
        abbr: 'NAVAIR',
        def: 'naval air; Naval Air Systems Command',
        src: '1-02'
    },
    {
        abbr: 'NAVAIRSYSCOM',
        def: 'Naval Air Systems Command (Also called NAVAIR)',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVATAC',
        def: 'Navy Antiterrorism Analysis Center; Navy Antiterrorist Alert Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVCHAPDET',
        def: 'naval cargo handling and port group detachment',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVCHAPGRU',
        def: 'Navy cargo handling and port group',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVCOMSTA',
        def: 'naval communications station',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVCYBERFOR',
        def: 'Navy Cyber Forces',
        src: '1-02'
    },
    {
        abbr: 'NAVELSG',
        def: 'Navy expeditionary logistic support group',
        src: '1-02'
    },
    {
        abbr: 'NAVEODTECHDIV',
        def: 'Naval Explosives Ordnance Disposal Technology Division',
        src: '1-02'
    },
    {
        abbr: 'NAVEURMETOCCEN',
        def: 'Naval Europe Meteorology and Oceanography Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVFAC',
        def: 'Naval Facilities Engineering Command',
        src: '1-02'
    },
    {
        abbr: 'NAVFAC-X',
        def: 'Naval Facilities Engineering Command-expeditionary',
        src: 'JP 3-34'
    },
    {
        abbr: 'NAVFACENGCOM',
        def: 'Navy Facilities Engineering Command',
        src: '1-02'
    },
    {
        abbr: 'NAVFAX',
        def: 'Navy facsimile',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVFOR',
        def: 'Navy forces',
        src: '1-02'
    },
    {
        abbr: 'NAVICECEN',
        def: 'Naval Ice Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVLANTMETOCCEN',
        def: 'Naval Atlantic Meteorology and Oceanography Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVMAG',
        def: 'naval magazine',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVMED',
        def: 'Navy Medical; Navy medicine',
        src: 'JP 3-41'
    },
    {
        abbr: 'NAVMEDCOMINST',
        def: 'Navy medical command instruction',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVMEDLOGCOM',
        def: 'Navy Medical Logistics Command',
        src: '1-02'
    },
    {
        abbr: 'NAVMEDP',
        def: 'Navy medical pamphlet',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVMETOCCOM',
        def: 'Naval Meteorology and Oceanography Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVMTO',
        def: 'naval military transportation office; Navy Material Transportation Office',
        src: '1-02'
    },
    {
        abbr: 'NAVOCEANO',
        def: 'Naval Oceanographic Office',
        src: '1-02'
    },
    {
        abbr: 'NAVORD',
        def: 'naval ordnance',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVORDSTA',
        def: 'naval ordnance station',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVPACMETOCCEN',
        def: 'Naval Pacific Meteorology and Oceanography Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVSAFECEN',
        def: 'naval safety center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVSAT',
        def: 'navigation satellite',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVSEA',
        def: 'Naval Sea Systems Command',
        src: '1-02'
    },
    {
        abbr: 'NAVSEAINST',
        def: 'Naval Sea Systems Command instruction',
        src: '1-02'
    },
    {
        abbr: 'NAVSEALOGCEN',
        def: 'naval sea logistics center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVSEASYSCOM',
        def: 'Naval Sea Systems Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVSO',
        def: 'United States Navy Forces, Southern Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVSOC',
        def: 'Naval Satellite Operations Center; naval special operations command',
        src: '1-02'
    },
    {
        abbr: 'NAVSOF',
        def: 'Navy special operations forces',
        src: '1-02'
    },
    {
        abbr: 'NAVSPACECOM',
        def: 'Naval Space Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVSPECWARCOM',
        def: 'Naval Special Warfare Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVSPOC',
        def: 'Naval Space Operations Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVSUP',
        def: 'Naval Supply Systems Command',
        src: '1-02'
    },
    {
        abbr: 'NAVSUPINST',
        def: 'Navy Support Instruction',
        src: 'JP 1-02'
    },
    {
        abbr: 'NAVSUPSYSCOM',
        def: 'Naval Supply Systems Command',
        src: 'JP 4-10'
    },
    {
        abbr: 'NAVWAR',
        def: 'navigation warfare',
        src: '1-02'
    },
    {
        abbr: 'Navy TACC',
        def: 'Navy tactical air control center',
        src: '1-02'
    },
    {
        abbr: 'NAWCAD',
        def: 'Naval Air Warfare Center, Aircraft Division',
        src: '1-02'
    },
    {
        abbr: 'NB',
        def: 'narrowband',
        src: 'JP 1-02'
    },
    {
        abbr: 'NBC',
        def: 'nuclear, biological, and chemical',
        src: '1-02'
    },
    {
        abbr: 'NBCCS',
        def: 'nuclear, biological, and chemical (NBC) contamination survivability',
        src: 'JP 1-02'
    },
    {
        abbr: 'NBDP',
        def: 'narrow band direct printing',
        src: 'JP 1-02'
    },
    {
        abbr: 'NBG',
        def: 'naval beach group',
        src: '1-02'
    },
    {
        abbr: 'NBI',
        def: 'nonbattle injury',
        src: '1-02'
    },
    {
        abbr: 'NBS',
        def: 'National Bureau of Standards',
        src: 'JP 1-02'
    },
    {
        abbr: 'NBST',
        def: 'narrowband secure terminal',
        src: 'JP 1-02'
    },
    {
        abbr: 'NBVC',
        def: 'Naval Base Ventura County',
        src: '1-02'
    },
    {
        abbr: 'NC3A',
        def: 'nuclear command, control, and communications (C3) assessment',
        src: 'JP 1-02'
    },
    {
        abbr: 'NCAA',
        def: 'North Atlantic Treaty Organization (NATO) Civil Airlift Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'NCAGS',
        def: 'naval cooperation and guidance for shipping',
        src: '1-02'
    },
    {
        abbr: 'NCAPS',
        def: 'naval coordination and protection of shipping',
        src: '1-02'
    },
    {
        abbr: 'NCB',
        def: 'national central bureau; naval construction brigade; noncompliant boarding',
        src: '1-02'
    },
    {
        abbr: 'NCC',
        def: 'National Coordinating Center; naval component commander; Navy component command; Navy component commander; network control center; North American Aerospace Defense Command (NORAD) Command Center',
        src: '1-02'
    },
    {
        abbr: 'NCCS',
        def: 'Nuclear Command and Control System',
        src: '1-02'
    },
    {
        abbr: 'NCD',
        def: 'net control device',
        src: 'JP 1-02'
    },
    {
        abbr: 'NCDC',
        def: 'National Climatic Data Center',
        src: '1-02'
    },
    {
        abbr: 'NCES',
        def: 'Net-Centric Enterprise Services',
        src: '1-02'
    },
    {
        abbr: 'NCESGR',
        def: 'National Committee of Employer Support for the Guard and Reserve',
        src: '1-02'
    },
    {
        abbr: 'NCF',
        def: 'naval construction force',
        src: '1-02'
    },
    {
        abbr: 'NCFSU',
        def: 'naval construction force support unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'NCHB',
        def: 'Navy cargo-handling battalion',
        src: '1-02'
    },
    {
        abbr: 'NCIC',
        def: 'National Crime Information Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NCIJTF-AG',
        def: 'National Cyber Investigative Joint Task Force-Analytical Group (DOD)',
        src: '1-02'
    },
    {
        abbr: 'NCIS',
        def: 'Naval Criminal Investigative Service',
        src: '1-02'
    },
    {
        abbr: 'NCISRA',
        def: 'Naval Criminal Investigative Service resident agent',
        src: 'JP 1-02'
    },
    {
        abbr: 'NCISRO',
        def: 'Naval Criminal Investigative Service regional office',
        src: 'JP 1-02'
    },
    {
        abbr: 'NCISRU',
        def: 'Naval Criminal Investigative Service resident unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'NCIX',
        def: 'National Counterintelligence Executive',
        src: 'JP 1-02'
    },
    {
        abbr: 'NCMI',
        def: 'National Center for Medical Intelligence',
        src: '1-02'
    },
    {
        abbr: 'NCMP',
        def: 'Navy Capabilities and Mobilization Plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'NCO',
        def: 'noncombat operations; noncommissioned officer',
        src: '1-02'
    },
    {
        abbr: 'NCOB',
        def: 'National Counterintelligence Operations Board',
        src: 'JP 1-02'
    },
    {
        abbr: 'NCOIC',
        def: 'noncommissioned officer in charge',
        src: 'JP 1-02'
    },
    {
        abbr: 'NCOS',
        def: 'naval control of shipping',
        src: '1-02'
    },
    {
        abbr: 'NCP',
        def: 'National Oil and Hazardous Substances Pollution Contingency Plan',
        src: 'JP 3-08'
    },
    {
        abbr: 'NCPC',
        def: 'National Counterprolification Center',
        src: '1-02'
    },
    {
        abbr: 'NCR',
        def: 'national cryptologic representative; National Capital Region (US); National Security Agency/Central Security Service representative; naval construction regiment',
        src: '1-02'
    },
    {
        abbr: 'NCR-IADS',
        def: 'National Capital Region-Integrated Air Defense System',
        src: '1-02'
    },
    {
        abbr: 'NCRCC',
        def: 'National Capital Region Coordination Center; United States Northern Command Rescue Coordination Center',
        src: '1-02'
    },
    {
        abbr: 'NCRCG',
        def: 'National Cyber Response Coordination Group',
        src: 'JP 1-02'
    },
    {
        abbr: 'NCRDEF',
        def: 'national cryptologic representative defense',
        src: 'JP 1-02'
    },
    {
        abbr: 'NCS',
        def: 'National Clandestine Service; National Communications System; naval control of shipping',
        src: '1-02'
    },
    {
        abbr: 'NCSC',
        def: 'National Computer Security Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NCSD',
        def: 'National Cyber Security Division (DHS)',
        src: '1-02'
    },
    {
        abbr: 'NCSE',
        def: 'national intelligence support team (NIST) communicatons support element',
        src: 'JP 1-02'
    },
    {
        abbr: 'NCT',
        def: 'network control terminal',
        src: 'JP 1-02'
    },
    {
        abbr: 'NCTAMS',
        def: 'naval computer and telecommunications area master station',
        src: 'JP 1-02'
    },
    {
        abbr: 'NCTC',
        def: 'National Counterterrorism Center; North East Counterdrug Training Center',
        src: '1-02'
    },
    {
        abbr: 'NCTS',
        def: 'naval computer and telecommunications station',
        src: 'JP 1-02'
    },
    {
        abbr: 'NCWS',
        def: 'naval coastal warfare squadron',
        src: 'JP 3-10'
    },
    {
        abbr: 'NDAA',
        def: 'national defense authorization act',
        src: '1-02'
    },
    {
        abbr: 'NDAF',
        def: 'Navy, Defense Logistics Agency, Air Force',
        src: 'JP 4-01.2'
    },
    {
        abbr: 'NDB',
        def: 'nondirectional beacon',
        src: 'JP 1-02'
    },
    {
        abbr: 'NDCS',
        def: 'national drug control strategy',
        src: '1-02'
    },
    {
        abbr: 'NDDOC',
        def: 'North American Aerospace Defense Command and United States Northern Command Deployment and Distribution Operations Cell',
        src: '1-02'
    },
    {
        abbr: 'NDHQ',
        def: 'National Defence Headquarters, Canada',
        src: '1-02'
    },
    {
        abbr: 'NDIC',
        def: 'National Defense Intelligence College; National Drug Intelligence Center',
        src: '1-02'
    },
    {
        abbr: 'NDL',
        def: 'national desired ground zero list',
        src: 'JP 1-02'
    },
    {
        abbr: 'NDMC',
        def: 'North Atlantic Treaty Organization (NATO) Defense Manpower Committee',
        src: 'JP 1-02'
    },
    {
        abbr: 'NDMS',
        def: 'National Disaster Medical System (DHHS)',
        src: '1-02'
    },
    {
        abbr: 'NDOC',
        def: 'National Defense Operations Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NDP',
        def: 'national disclosure policy',
        src: '1-02'
    },
    {
        abbr: 'NDPB',
        def: 'National Drug Policy Board',
        src: 'JP 1-02'
    },
    {
        abbr: 'NDPC',
        def: 'National Disclosure Policy Committee',
        src: 'JP 1-02'
    },
    {
        abbr: 'NDRC',
        def: 'National Detainee Reporting Center',
        src: '1-02'
    },
    {
        abbr: 'NDRF',
        def: 'National Defense Reserve Fleet',
        src: '1-02'
    },
    {
        abbr: 'NDS',
        def: 'national defense strategy',
        src: '1-02'
    },
    {
        abbr: 'NDSF',
        def: 'National Defense Sealift Fund',
        src: 'JP 1-02'
    },
    {
        abbr: 'NDT',
        def: 'nuclear disablement team',
        src: '1-02'
    },
    {
        abbr: 'NDU',
        def: 'National Defense University',
        src: 'JP 1-02'
    },
    {
        abbr: 'NEA',
        def: 'Northeast Asia',
        src: 'JP 1-02'
    },
    {
        abbr: 'NEAT',
        def: 'naval embarked advisory team',
        src: 'JP 1-02'
    },
    {
        abbr: 'NEC',
        def: 'National Economic Council',
        src: '1-02'
    },
    {
        abbr: 'NECC',
        def: 'Navy Expeditionary Combat Command',
        src: '1-02'
    },
    {
        abbr: 'NEIC',
        def: 'Navy Expeditionary Intelligence Command',
        src: '1-02'
    },
    {
        abbr: 'NELR',
        def: 'Navy expeditionary logistics regiment',
        src: '1-02'
    },
    {
        abbr: 'NEMT',
        def: 'National Emergency Management Team',
        src: 'JP 1-02'
    },
    {
        abbr: 'NEO',
        def: 'noncombatant evacuation operation',
        src: '1-02'
    },
    {
        abbr: 'NEOCC',
        def: 'noncombatant evacuation operation coordination center',
        src: 'JP 3-68'
    },
    {
        abbr: 'NEP',
        def: 'National Exercise Program',
        src: '1-02'
    },
    {
        abbr: 'NEPA',
        def: 'National Environmental Policy Act',
        src: 'JP 1-02'
    },
    {
        abbr: 'NEREP',
        def: 'Nuclear Execution and Reporting Plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'NES',
        def: 'National Exploitation System',
        src: 'JP 1-02'
    },
    {
        abbr: 'NESDIS',
        def: 'National Environmental Satellite, Data and Information Service (DOC)',
        src: 'JP 1-02'
    },
    {
        abbr: 'NEST',
        def: 'nuclear emergency support team (DOE)',
        src: '1-02'
    },
    {
        abbr: 'NETOPS',
        def: 'network operations',
        src: '1-02'
    },
    {
        abbr: 'NETS',
        def: 'Nationwide Emergency Telecommunications System',
        src: 'JP 1-02'
    },
    {
        abbr: 'NETT',
        def: 'new equipment training team',
        src: 'JP 1-02'
    },
    {
        abbr: 'NETWARCOM',
        def: 'Naval Network Warfare Command',
        src: 'JP 3-14'
    },
    {
        abbr: 'NEW',
        def: 'net explosive weight',
        src: '1-02'
    },
    {
        abbr: 'NEWAC',
        def: 'North Atlantic Treaty Organization (NATO) Electronic Warfare Advisory Committee',
        src: 'JP 1-02'
    },
    {
        abbr: 'NEWCS',
        def: 'NATO electronic warfare core staff',
        src: 'JP 3-13.1'
    },
    {
        abbr: 'NEXCOM',
        def: 'Navy Exchange Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'NFA',
        def: 'no-fire area',
        src: 'JP 1-02'
    },
    {
        abbr: 'NFC',
        def: 'numbered fleet commander',
        src: '1-02'
    },
    {
        abbr: 'NFD',
        def: 'nodal fault diagnostics',
        src: 'JP 1-02'
    },
    {
        abbr: 'NFELC',
        def: 'Naval Facilities Expeditionary Logistics Center',
        src: '1-02'
    },
    {
        abbr: 'NFESC',
        def: 'Naval Facilities Engineering Service Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NFI',
        def: 'national foreign intelligence',
        src: 'JP 2-01.2'
    },
    {
        abbr: 'NFIB',
        def: 'National Foreign Intelligence Board',
        src: 'JP 1-02'
    },
    {
        abbr: 'NFIP',
        def: 'National Flood Insurance Program (FEMA); National Foreign Intelligence Program',
        src: 'JP 1-02'
    },
    {
        abbr: 'NFLIR',
        def: 'navigation forward-looking infrared',
        src: 'JP 1-02'
    },
    {
        abbr: 'NFLS',
        def: 'naval forward logistic site',
        src: '1-02'
    },
    {
        abbr: 'NFN',
        def: 'national file number',
        src: 'JP 2-01.2'
    },
    {
        abbr: 'NFO',
        def: 'naval flight officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'NG',
        def: 'National Guard',
        src: '1-02'
    },
    {
        abbr: 'NG JFHQ-State',
        def: 'National Guard joint force headquarters-state',
        src: '1-02'
    },
    {
        abbr: 'NGA',
        def: 'National Geospatial-Intelligence Agency',
        src: '1-02'
    },
    {
        abbr: 'NGB',
        def: 'National Guard Bureau',
        src: '1-02'
    },
    {
        abbr: 'NGB-OC',
        def: 'National Guard Bureau-Office of the Chaplain',
        src: '1-02'
    },
    {
        abbr: 'NGCC',
        def: 'National Guard coordination center',
        src: '1-02'
    },
    {
        abbr: 'NGCDP',
        def: 'National Guard Counterdrug Program',
        src: '1-02'
    },
    {
        abbr: 'NGCSP',
        def: 'National Guard Counterdrug Support Program',
        src: '1-02'
    },
    {
        abbr: 'NGF',
        def: 'naval gun fire',
        src: 'JP 1-02'
    },
    {
        abbr: 'NGFS',
        def: 'naval gunfire support',
        src: 'JP 1-02'
    },
    {
        abbr: 'NGIC',
        def: 'National Ground Intelligence Center',
        src: '1-02'
    },
    {
        abbr: 'NGLO',
        def: 'naval gunfire liaison officer'
    },
    {
        abbr: 'NGO',
        def: 'nongovernmental organization',
        src: '1-02'
    },
    {
        abbr: 'NGP',
        def: 'National Geospatial-Intelligence Agency Program',
        src: 'JP 2-01'
    },
    {
        abbr: 'NGRF',
        def: 'National Guard reaction force',
        src: 'JP 3-28'
    },
    {
        abbr: 'NI',
        def: 'national identification (number); noted item',
        src: 'JP 1-02'
    },
    {
        abbr: 'NIBRS',
        def: 'National Incident-Based Reporting System',
        src: 'JP 1-02'
    },
    {
        abbr: 'NIC',
        def: 'National Intelligence Council; naval intelligence center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NICC',
        def: 'National Intelligence Coordination Center',
        src: '1-02'
    },
    {
        abbr: 'NICCL',
        def: 'National Incident Communications Conference Line',
        src: '1-02'
    },
    {
        abbr: 'NICCP',
        def: 'National Interdiction Command and Control Plan',
        src: '1-02'
    },
    {
        abbr: 'NICI',
        def: 'National Interagency Counternarcotics Institute',
        src: 'JP 1-02'
    },
    {
        abbr: 'NID',
        def: 'naval intelligence database',
        src: 'JP 1-02'
    },
    {
        abbr: 'NIDMS',
        def: 'National Military Command System (NMCS) Information for Decision Makers System',
        src: 'JP 1-02'
    },
    {
        abbr: 'NIDS',
        def: 'National Military Command Center (NMCC) information display system',
        src: 'JP 1-02'
    },
    {
        abbr: 'NIE',
        def: 'national intelligence estimate',
        src: 'JP 1-02'
    },
    {
        abbr: 'NIEX',
        def: 'no-notice interoperability exercise',
        src: 'JP 1-02'
    },
    {
        abbr: 'NIEXPG',
        def: 'No-Notice Interoperability Exercise Planning Group',
        src: 'JP 1-02'
    },
    {
        abbr: 'NIIB',
        def: 'National Geospatial Intelligence Agency imagery intelligence brief',
        src: 'JP 2-03'
    },
    {
        abbr: 'NIL',
        def: 'National Information Library',
        src: '1-02'
    },
    {
        abbr: 'NIMCAMP',
        def: 'National Information Management and Communications Master Plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'NIMS',
        def: 'National Incident Management System',
        src: '1-02'
    },
    {
        abbr: 'NIOC',
        def: 'Navy Information Operations Command',
        src: '1-02'
    },
    {
        abbr: 'NIP',
        def: 'National Intelligence Program',
        src: '1-02'
    },
    {
        abbr: 'NIPF',
        def: 'National Intelligence Priority Framework',
        src: '1-02'
    },
    {
        abbr: 'NIPRNET',
        def: 'Nonsecure Internet Protocol Router Network',
        src: '1-02'
    },
    {
        abbr: 'NIPS',
        def: 'Naval Intelligence Processing System',
        src: 'JP 1-02'
    },
    {
        abbr: 'NIRT',
        def: 'Nuclear Incident Response Team',
        src: '1-02'
    },
    {
        abbr: 'NISH',
        def: 'noncombatant evacuation operation (NEO) intelligence support handbook',
        src: 'JP 1-02'
    },
    {
        abbr: 'NISP',
        def: 'national intelligence support plan; Nuclear Weapons Intelligence Support Plan',
        src: '1-02'
    },
    {
        abbr: 'NIST',
        def: 'National Institute of Standards and Technology',
        src: '1-02'
    },
    {
        abbr: 'NIT',
        def: 'nuclear incident team',
        src: '1-02'
    },
    {
        abbr: 'NITES',
        def: 'Navy Integrated Tactical Environmental System',
        src: 'JP 1-02'
    },
    {
        abbr: 'NITF',
        def: 'national imagery transmission format',
        src: 'JP 1-02'
    },
    {
        abbr: 'NIU',
        def: 'North Atlantic Treaty Organization (NATO) interface unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'NIWA',
        def: 'naval information warfare activity',
        src: 'JP 1-02'
    },
    {
        abbr: 'NJOIC',
        def: 'National Joint Operations and Intelligence Center',
        src: '1-02'
    },
    {
        abbr: 'NJTTF',
        def: 'National Joint Terrorism Task Force',
        src: '1-02'
    },
    {
        abbr: 'NL',
        def: 'Navy lighterage',
        src: 'JP 1-02'
    },
    {
        abbr: 'NLO',
        def: 'naval liaison officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'NLT',
        def: 'not later than',
        src: 'JP 1-02'
    },
    {
        abbr: 'NLW',
        def: 'nonlethal weapon',
        src: '1-02'
    },
    {
        abbr: 'nm',
        def: 'nautical mile',
        src: '1-02'
    },
    {
        abbr: 'NM',
        def: 'network management',
        src: 'JP 1-02'
    },
    {
        abbr: 'NMAWC',
        def: 'Naval Mine and Anti-Submarine Warfare Command',
        src: 'JP 3-15'
    },
    {
        abbr: 'NMB',
        def: 'North Atlantic Treaty Organization (NATO) military body',
        src: 'JP 1-02'
    },
    {
        abbr: 'NMC',
        def: 'Navy Munitions Command',
        src: '1-02'
    },
    {
        abbr: 'NMCB',
        def: 'naval mobile construction battalion',
        src: '1-02'
    },
    {
        abbr: 'NMCC',
        def: 'National Military Command Center',
        src: '1-02'
    },
    {
        abbr: 'NMCS',
        def: 'National Military Command System; not mission capable, supply',
        src: '1-02'
    },
    {
        abbr: 'NMCSO',
        def: 'Navy and Marine Corps spectrum office',
        src: '1-02'
    },
    {
        abbr: 'NMD',
        def: 'national missile defense',
        src: 'JP 1-02'
    },
    {
        abbr: 'NMEC',
        def: 'National Media Exploitation Center',
        src: '1-02'
    },
    {
        abbr: 'NMIC',
        def: 'National Maritime Intelligence Center',
        src: '1-02'
    },
    {
        abbr: 'NMIO',
        def: 'National Maritime Intelligence-Integration Office',
        src: '1-02'
    },
    {
        abbr: 'NMIST',
        def: 'National Military Intelligence Support Team (DIA)',
        src: 'JP 1-02'
    },
    {
        abbr: 'NMO',
        def: 'National Measurement and Signature Intelligence Office',
        src: '1-02'
    },
    {
        abbr: 'NMOC',
        def: 'network management operations center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NMOSW',
        def: 'Naval METOC Operational Support Web',
        src: 'JP 1-02'
    },
    {
        abbr: 'NMP',
        def: 'national media pool',
        src: 'JP 3-61'
    },
    {
        abbr: 'NMPS',
        def: 'Navy mobilization processing site',
        src: 'JP 1-02'
    },
    {
        abbr: 'NMR',
        def: 'news media representative',
        src: 'JP 1-02'
    },
    {
        abbr: 'NMRC',
        def: 'Naval Medical Research Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NMS',
        def: 'national military strategy',
        src: '1-02'
    },
    {
        abbr: 'NMS-CO',
        def: 'National Military Strategy for Cyberspace Operations',
        src: '1-02'
    },
    {
        abbr: 'NMS-CWMD',
        def: 'National Military Strategy to Combat Weapons of Mass Destruction',
        src: '1-02'
    },
    {
        abbr: 'NMSA',
        def: 'North Atlantic Treaty Organization (NATO) Mutual Support Act',
        src: 'JP 1-02'
    },
    {
        abbr: 'NMSC',
        def: 'Navy and Marine Corps Spectrum Center',
        src: '1-02'
    },
    {
        abbr: 'NMSP-WOT',
        def: 'National Military Strategic Plan for the War on Terrorism',
        src: '1-02'
    },
    {
        abbr: 'NNAG',
        def: 'North Atlantic Treaty Organization (NATO) Naval Armaments Group',
        src: 'JP 1-02'
    },
    {
        abbr: 'NNSA',
        def: 'National Nuclear Security Administration (DOE)',
        src: '1-02'
    },
    {
        abbr: 'NNWC',
        def: 'Naval Network Warfare Command',
        src: '1-02'
    },
    {
        abbr: 'NOAA',
        def: 'National Oceanic and Atmospheric Administration',
        src: '1-02'
    },
    {
        abbr: 'NOACT',
        def: 'Navy overseas air cargo terminal',
        src: 'JP 1-02'
    },
    {
        abbr: 'NOC',
        def: 'National Operations Center (DHS); network operations center',
        src: '1-02'
    },
    {
        abbr: 'NOCONTRACT',
        def: 'not releasable to contractors or consultants',
        src: 'JP 1-02'
    },
    {
        abbr: 'NODDS',
        def: 'Naval Oceanographic Data Distribution System',
        src: 'JP 1-02'
    },
    {
        abbr: 'NOE',
        def: 'nap-of-the-earth'
    },
    {
        abbr: 'NOEA',
        def: 'nuclear operations emergency action',
        src: 'JP 1-02'
    },
    {
        abbr: 'NOFORN',
        def: 'not releasable to foreign nationals',
        src: 'JP 1-02'
    },
    {
        abbr: 'NOG',
        def: 'Nuclear Operations Group',
        src: 'JP 1-02'
    },
    {
        abbr: 'NOGAPS',
        def: 'Navy Operational Global Atmospheric Prediction System',
        src: 'JP 1-02'
    },
    {
        abbr: 'NOHD',
        def: 'nominal ocular hazard distance',
        src: 'JP 1-02'
    },
    {
        abbr: 'NOIC',
        def: 'Naval Operational Intelligence Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NOK',
        def: 'next of kin',
        src: 'JP 1-02'
    },
    {
        abbr: 'NOLSC',
        def: 'Naval Operational Logistics Support Center',
        src: '1-02'
    },
    {
        abbr: 'NOMS',
        def: 'Nuclear Operations Monitoring System',
        src: 'JP 1-02'
    },
    {
        abbr: 'NOMWC',
        def: 'Navy Oceanographic Mine Warfare Center',
        src: '1-02'
    },
    {
        abbr: 'NOP',
        def: 'nuclear operations',
        src: 'JP 1-02'
    },
    {
        abbr: 'NOPLAN',
        def: 'no operation plan available or prepared',
        src: 'JP 1-02'
    },
    {
        abbr: 'NORAD',
        def: 'North American Aerospace Defense Command',
        src: '1-02'
    },
    {
        abbr: 'NORM',
        def: 'normal; not operationally ready, maintenance',
        src: 'JP 1-02'
    },
    {
        abbr: 'NORS',
        def: 'not operationally ready, supply',
        src: 'JP 1-02'
    },
    {
        abbr: 'NOSC',
        def: 'network operations and security center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NOSSA',
        def: 'Navy Ordnance Safety and Security Activity',
        src: '1-02'
    },
    {
        abbr: 'NOTMAR',
        def: 'notice to mariners',
        src: 'JP 1-02'
    },
    {
        abbr: 'NP',
        def: 'nonproliferation',
        src: 'JP 3-40'
    },
    {
        abbr: 'NPC',
        def: 'Nonproliferation Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NPES',
        def: 'Nuclear Planning and Execution System',
        src: 'JP 1-02'
    },
    {
        abbr: 'NPG',
        def: 'nonunit personnel generator',
        src: 'JP 1-02'
    },
    {
        abbr: 'NPOESS',
        def: 'National Polar-orbiting Operational Environmental Satellite System',
        src: 'JP 3-14'
    },
    {
        abbr: 'NPPD',
        def: 'National Protection and Programs Directorate (DHS)',
        src: '1-02'
    },
    {
        abbr: 'NPS',
        def: 'National Park Service; nonprior service; Nuclear Planning System',
        src: '1-02'
    },
    {
        abbr: 'NPT',
        def: 'national pipe thread; Treaty on the Nonproliferation of Nuclear Weapons',
        src: '1-02'
    },
    {
        abbr: 'NPWIC',
        def: 'National Prisoner of War Information Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NQ',
        def: 'nonquota',
        src: 'JP 1-02'
    },
    {
        abbr: 'NR',
        def: 'North Atlantic Treaty Organization (NATO) restricted; number',
        src: 'JP 1-02'
    },
    {
        abbr: 'NRAT',
        def: 'nuclear/radiological advisory team',
        src: '1-02'
    },
    {
        abbr: 'NRC',
        def: 'National Response Center (USCG); non-unit-related cargo',
        src: '1-02'
    },
    {
        abbr: 'NRCHB',
        def: 'Naval Reserve cargo-handling battalion',
        src: '1-02'
    },
    {
        abbr: 'NRCHF',
        def: 'Naval Reserve cargo handling force',
        src: 'JP 1-02'
    },
    {
        abbr: 'NRCHTB',
        def: 'Naval Reserve cargo handling training battalion',
        src: 'JP 1-02'
    },
    {
        abbr: 'NRF',
        def: 'National Response Framework',
        src: '1-02'
    },
    {
        abbr: 'NRFI',
        def: 'not ready for issue',
        src: 'JP 1-02'
    },
    {
        abbr: 'NRG',
        def: 'notional requirements generator',
        src: 'JP 1-02'
    },
    {
        abbr: 'NRL',
        def: 'nuclear weapons (NUWEP) reconnaissance list',
        src: 'JP 1-02'
    },
    {
        abbr: 'NRO',
        def: 'National Reconnaissance Office',
        src: '1-02'
    },
    {
        abbr: 'NROC',
        def: 'Northern Regional Operations Center (CARIBROC-CBRN)',
        src: 'JP 1-02'
    },
    {
        abbr: 'NRP',
        def: 'National Response Plan; non-unit-related personnel',
        src: 'JP 1-02'
    },
    {
        abbr: 'NRPC',
        def: 'Naval Reserve Personnel Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NRT',
        def: 'near real time',
        src: '1-02'
    },
    {
        abbr: 'NRTD',
        def: 'near-real-time dissemination',
        src: 'JP 1-02'
    },
    {
        abbr: 'NRZ',
        def: 'non-return-to-zero',
        src: 'JP 1-02'
    },
    {
        abbr: 'NS',
        def: 'nuclear survivability',
        src: 'JP 1-02'
    },
    {
        abbr: 'NS-CWMD',
        def: 'National Strategy to Combat Weapons of Mass Destruction',
        src: '1-02'
    },
    {
        abbr: 'NSA',
        def: 'national security act; National Security Agency; national security area; national shipping authority; North Atlantic Treaty Organization (NATO) Standardization Agency',
        src: '1-02'
    },
    {
        abbr: 'NSA/CSS',
        def: 'National Security Agency/Central Security Service',
        src: '1-02'
    },
    {
        abbr: 'NSARC',
        def: 'National Search and Rescue Committee',
        src: '1-02'
    },
    {
        abbr: 'NSAT',
        def: 'United States Northern Command situational awareness team',
        src: '1-02'
    },
    {
        abbr: 'NSAWC',
        def: 'Naval Strike and Air Warfare Center',
        src: '1-02'
    },
    {
        abbr: 'NSC',
        def: 'National Security Council',
        src: '1-02'
    },
    {
        abbr: 'NSC/DC',
        def: 'National Security Council/Deputies Committee',
        src: '1-02'
    },
    {
        abbr: 'NSC/IPC',
        def: 'National Security Council/interagency policy committee',
        src: '1-02'
    },
    {
        abbr: 'NSC/IWG',
        def: 'National Security Council/Interagency Working Group',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSC/PC',
        def: 'National Security Council/Principals Committee',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSC/PCC',
        def: 'National Security Council Policy Coordinating Committee',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSCID',
        def: 'National Security Council intelligence directive',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSCS',
        def: 'National Security Council System',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSCT1',
        def: 'Naval Special Clearance Team One',
        src: 'JP 3-15'
    },
    {
        abbr: 'NSD',
        def: 'National Security Directive; National Security Division (FBI)',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSDA',
        def: 'non-self deployment aircraft',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSDD',
        def: 'national security decision directive',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSDM',
        def: 'national security decision memorandum',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSDS-E',
        def: 'Navy Satellite Display System-Enhanced',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSE',
        def: 'Navy support element',
        src: '1-02'
    },
    {
        abbr: 'NSEP',
        def: 'national security emergency preparedness',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSF',
        def: 'National Science Foundation; national security forces; National Strike Force (USCG)',
        src: '1-02'
    },
    {
        abbr: 'NSFS',
        def: 'naval surface fire support',
        src: '1-02'
    },
    {
        abbr: 'NSG',
        def: 'National System for Geospatial Intelligence; north-seeking gyro',
        src: '1-02'
    },
    {
        abbr: 'NSGI',
        def: 'National System for Geospatial Intelligence',
        src: 'JP 2-01'
    },
    {
        abbr: 'NSHS',
        def: 'National Strategy for Homeland Security',
        src: '1-02'
    },
    {
        abbr: 'NSL',
        def: 'no-strike list',
        src: '1-02'
    },
    {
        abbr: 'NSM',
        def: 'national search and rescue (SAR) manual',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSMS',
        def: 'National Strategy for Maritime Security',
        src: '1-02'
    },
    {
        abbr: 'NSN',
        def: 'national stock number',
        src: '1-02'
    },
    {
        abbr: 'NSO',
        def: 'non-Single Integrated Operational Plan (SIOP) option',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSOC',
        def: 'National Security Operations Center; National Signals Intelligence (SIGINT) Operations Center; Navy Satellite Operations Center',
        src: '1-02'
    },
    {
        abbr: 'NSOOC',
        def: 'North Atlantic Treaty Organization (NATO) Staff Officer Orientation Course',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSP',
        def: 'national search and rescue plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSPD',
        def: 'national security Presidential directive',
        src: '1-02'
    },
    {
        abbr: 'NSPI',
        def: 'National Strategy for Pandemic Influenza',
        src: '1-02'
    },
    {
        abbr: 'NSRL',
        def: 'national signals intelligence (SIGINT) requirements list',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSS',
        def: 'National Search and Rescue Supplement; national security strategy; national security system; non-self-sustaining',
        src: '1-02'
    },
    {
        abbr: 'NSSA',
        def: 'National Security Space Architect',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSSE',
        def: 'national special security event',
        src: '1-02'
    },
    {
        abbr: 'NSST',
        def: 'naval space support team',
        src: 'JP 1-02'
    },
    {
        abbr: 'NST',
        def: 'National Geospatial-Intelligence Agency support team',
        src: '1-02'
    },
    {
        abbr: 'NSTAC',
        def: 'National Security Telecommunications Advisory Committee',
        src: 'JP 6-0'
    },
    {
        abbr: 'NSTISSC',
        def: 'National Security Telecommunications and Information Systems Security Committee',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSTL',
        def: 'national strategic targets list',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSTS',
        def: 'National Secure Telephone System',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSW',
        def: 'naval special warfare',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSWCDD',
        def: 'Naval Surface Warfare Center Dahlgren Division',
        src: '1-02'
    },
    {
        abbr: 'NSWCOM',
        def: 'Naval Special Warfare Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSWG',
        def: 'naval special warfare group',
        src: 'JP 1-02'
    },
    {
        abbr: 'NSWTF',
        def: 'naval special warfare task force'
    },
    {
        abbr: 'NSWTG',
        def: 'naval special warfare task group',
        src: '1-02'
    },
    {
        abbr: 'NSWTU',
        def: 'naval special warfare task unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'NT',
        def: 'nodal terminal',
        src: 'JP 1-02'
    },
    {
        abbr: 'NTACS',
        def: 'Navy tactical air control system',
        src: '1-02'
    },
    {
        abbr: 'NTAP',
        def: 'National Track Analysis Program',
        src: 'JP 1-02'
    },
    {
        abbr: 'NTB',
        def: 'national target base',
        src: 'JP 1-02'
    },
    {
        abbr: 'NTBC',
        def: 'National Military Joint Intelligence Center Targeting and Battle Damage Assessment Cell',
        src: 'JP 2-01'
    },
    {
        abbr: 'NTC',
        def: 'National Training Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NTCS-A',
        def: 'Navy Tactical Command System-Afloat',
        src: '1-02'
    },
    {
        abbr: 'NTDS',
        def: 'naval tactical data system',
        src: 'JP 1-02'
    },
    {
        abbr: 'NTF',
        def: 'nuclear task force',
        src: 'JP 1-02'
    },
    {
        abbr: 'NTIA',
        def: 'National Telecommunications and Information Administration',
        src: '1-02'
    },
    {
        abbr: 'NTIC',
        def: 'Navy Tactical Intelligence Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'NTISS',
        def: 'National Telecommunications and Information Security System',
        src: 'JP 1-02'
    },
    {
        abbr: 'NTISSI',
        def: 'National Telecommunications and Information Security System (NTISS) Instruction',
        src: 'JP 1-02'
    },
    {
        abbr: 'NTISSP',
        def: 'National Telecommunications and Information Security System (NTISS) Policy',
        src: 'JP 1-02'
    },
    {
        abbr: 'NTM',
        def: 'national or multinational technical means of verification; notice to mariners',
        src: '1-02'
    },
    {
        abbr: 'NTMPDE',
        def: 'National Telecommunications Master Plan for Drug Enforcement',
        src: 'JP 1-02'
    },
    {
        abbr: 'NTMS',
        def: 'national telecommunications management structure',
        src: 'JP 1-02'
    },
    {
        abbr: 'NTPS',
        def: 'near-term pre-positioned ships',
        src: 'JP 1-02'
    },
    {
        abbr: 'NTRP',
        def: 'Navy tactical reference publication',
        src: '1-02'
    },
    {
        abbr: 'NTS',
        def: 'night targeting system; noncombatant evacuation operations tracking system',
        src: '1-02'
    },
    {
        abbr: 'NTSB',
        def: 'National Transportation Safety Board',
        src: 'JP 1-02'
    },
    {
        abbr: 'NTSS',
        def: 'National Time-Sensitive System',
        src: 'JP 1-02'
    },
    {
        abbr: 'NTTP',
        def: 'Navy tactics, techniques, and procedures',
        src: '1-02'
    },
    {
        abbr: 'NTU',
        def: 'new threat upgrade',
        src: 'JP 1-02'
    },
    {
        abbr: 'NUC',
        def: 'non-unit-related cargo; nuclear',
        src: 'JP 1-02'
    },
    {
        abbr: 'NUDET',
        def: 'nuclear detonation',
        src: 'JP 1-02'
    },
    {
        abbr: 'NUFEA',
        def: 'Navy-unique fleet essential aircraft',
        src: '1-02'
    },
    {
        abbr: 'NUP',
        def: 'non-unit-related personnel',
        src: 'JP 1-02'
    },
    {
        abbr: 'NURP',
        def: 'non-unit-related personnel',
        src: '1-02'
    },
    {
        abbr: 'NUWEP',
        def: 'policy guidance for the employment of nuclear weapons',
        src: 'JP 1-02'
    },
    {
        abbr: 'NVD',
        def: 'night vision device',
        src: '1-02'
    },
    {
        abbr: 'NVDT',
        def: 'National Geospatial-Intelligence Agency voluntary deployment team',
        src: '1-02'
    },
    {
        abbr: 'NVG',
        def: 'night vision goggle(s)',
        src: '1-02'
    },
    {
        abbr: 'NVS',
        def: 'night vision system',
        src: 'JP 1-02'
    },
    {
        abbr: 'NW',
        def: 'network warfare; not waiverable',
        src: 'JP 1-02'
    },
    {
        abbr: 'NWARS',
        def: 'National Wargaming System',
        src: 'JP 1-02'
    },
    {
        abbr: 'NWB',
        def: 'normal wideband',
        src: 'JP 1-02'
    },
    {
        abbr: 'NWBLTU',
        def: 'normal wideband line termination unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'NWDC',
        def: 'Navy Warfare Development Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'NWFP',
        def: 'Northwest Frontier Province (Pakistan)',
        src: 'JP 1-02'
    },
    {
        abbr: 'NWP',
        def: 'Navy warfare publication; numerical weather prediction',
        src: '1-02'
    },
    {
        abbr: 'NWREP',
        def: 'nuclear weapons report',
        src: 'JP 1-02'
    },
    {
        abbr: 'NWS',
        def: 'National Weather Service',
        src: '1-02'
    },
    {
        abbr: 'NWT',
        def: 'normal wideband terminal',
        src: 'JP 1-02'
    },
    {
        abbr: 'O',
        def: 'contour pattern',
        src: 'JP 1-02'
    },
    {
        abbr: 'O&I',
        def: 'operations and intelligence',
        src: '1-02'
    },
    {
        abbr: 'O&M',
        def: 'operation and maintenance',
        src: '1-02'
    },
    {
        abbr: 'O/B',
        def: 'outboard',
        src: 'JP 1-02'
    },
    {
        abbr: 'OA',
        def: 'objective area; operating assembly; operational area; Operations Aerology shipboard METOC division',
        src: '1-02'
    },
    {
        abbr: 'OADR',
        def: 'originating agency\'s determination required',
        src: 'JP 1-02'
    },
    {
        abbr: 'OAE',
        def: 'operational area evaluation',
        src: 'JP 1-02'
    },
    {
        abbr: 'OAF',
        def: 'Operation ALLIED FORCE',
        src: 'JP 1-02'
    },
    {
        abbr: 'OAFME',
        def: 'Office of the Armed Forces Medical Examiner',
        src: 'JP 1-02'
    },
    {
        abbr: 'OAG',
        def: 'operations advisory group',
        src: 'JP 1-02'
    },
    {
        abbr: 'OAI',
        def: 'oceanographic area of interest',
        src: '1-02'
    },
    {
        abbr: 'OAJCG',
        def: 'Operation Alliance joint control group',
        src: 'JP 1-02'
    },
    {
        abbr: 'OAM',
        def: 'Office of Air and Marine (DHS)',
        src: '1-02'
    },
    {
        abbr: 'OAP',
        def: 'offset aimpoint',
        src: 'JP 1-02'
    },
    {
        abbr: 'OAR',
        def: 'Chairman of the Joint Chiefs of Staff operation plans assessment report',
        src: 'JP 1-02'
    },
    {
        abbr: 'OAS',
        def: 'offensive air support; Organization of American States',
        src: 'JP 1-02'
    },
    {
        abbr: 'OASD',
        def: 'Office of the Assistant Secretary of Defense',
        src: 'JP 1-02'
    },
    {
        abbr: 'OASD(NII/CIO)',
        def: 'Office of the Assistant Secretary of Defense (Networks and Information Integration/Chief Information Officer)',
        src: '1-02'
    },
    {
        abbr: 'OASD(PA)',
        def: 'Office of the Assistant Secretary of Defense (Public Affairs)',
        src: '1-02'
    },
    {
        abbr: 'OASD(RA)',
        def: 'Office of the Assistant Secretary of Defense (Reserve Affairs)',
        src: '1-02'
    },
    {
        abbr: 'OAU',
        def: 'Organization of African Unity',
        src: 'JP 1-02'
    },
    {
        abbr: 'OB',
        def: 'operating base; order of battle',
        src: '1-02'
    },
    {
        abbr: 'OBA',
        def: 'oxygen breathing apparatus',
        src: 'JP 1-02'
    },
    {
        abbr: 'OBFS',
        def: 'offshore bulk fuel system',
        src: '1-02'
    },
    {
        abbr: 'OBST',
        def: 'obstacle',
        src: 'JP 1-02'
    },
    {
        abbr: 'OBSTINT',
        def: 'obstacle intelligence',
        src: '1-02'
    },
    {
        abbr: 'OC',
        def: 'oleoresin capsicum; operations center',
        src: '1-02'
    },
    {
        abbr: 'OCA',
        def: 'offensive counterair; operational control authority',
        src: '1-02'
    },
    {
        abbr: 'OCBD',
        def: 'Office of Capacity Building and Development (USDA)',
        src: '1-02'
    },
    {
        abbr: 'OCC',
        def: 'Operations Computer Center (USCG)',
        src: 'JP 1-02'
    },
    {
        abbr: 'OCD',
        def: 'orderwire clock distributor',
        src: 'JP 1-02'
    },
    {
        abbr: 'OCDETF',
        def: 'Organized Crime and Drug Enforcement Task Force',
        src: '1-02'
    },
    {
        abbr: 'OCE',
        def: 'officer conducting the exercise',
        src: 'JP 1-02'
    },
    {
        abbr: 'OCEANCON',
        def: 'control of oceanographic information',
        src: 'JP 1-02'
    },
    {
        abbr: 'OCHA',
        def: 'Office for the Coordination of Humanitarian Affairs'
    },
    {
        abbr: 'OCIE',
        def: 'organizational clothing and individual equipment',
        src: '1-02'
    },
    {
        abbr: 'OCJCS',
        def: 'Office of the Chairman of the Joint Chiefs of Staff',
        src: 'JP 1-02'
    },
    {
        abbr: 'OCJCS-PA',
        def: 'Office of the Chairman of the Joint Chiefs of Staff-Public Affairs',
        src: 'JP 1-02'
    },
    {
        abbr: 'OCMI',
        def: 'officer in charge, Marine Inspection',
        src: 'JP 1-02'
    },
    {
        abbr: 'OCO',
        def: 'offensive cyberspace operations; offload control officer',
        src: '1-02'
    },
    {
        abbr: 'OCONUS',
        def: 'outside the continental United States',
        src: '1-02'
    },
    {
        abbr: 'OCOP',
        def: 'outline contingency operation plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'OCP',
        def: 'operational capability package; operational configuration processing',
        src: '1-02'
    },
    {
        abbr: 'OCR',
        def: 'Office of Collateral Responsibility',
        src: 'JP 1-02'
    },
    {
        abbr: 'OCS',
        def: 'operational contract support',
        src: '1-02'
    },
    {
        abbr: 'OCSIC',
        def: 'operational contract support integration cell',
        src: '1-02'
    },
    {
        abbr: 'OCU',
        def: 'orderwire control unit (Types I, II, and III)',
        src: 'JP 1-02'
    },
    {
        abbr: 'OCU-1',
        def: 'orderwire control unit-1',
        src: 'JP 1-02'
    },
    {
        abbr: 'OD',
        def: 'operational detachment; other detainee',
        src: 'JP 1-02'
    },
    {
        abbr: 'ODA',
        def: 'operational detachment-Alpha',
        src: 'JP 1-02'
    },
    {
        abbr: 'ODATE',
        def: 'organization date',
        src: 'JP 1-02'
    },
    {
        abbr: 'ODB',
        def: 'operational detachment-Bravo',
        src: 'JP 1-02'
    },
    {
        abbr: 'ODC',
        def: 'Office of Defense Cooperation',
        src: 'JP 1-02'
    },
    {
        abbr: 'ODCSLOG',
        def: 'Office of the Deputy Chief of Staff for Logistics (Army)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ODCSOPS',
        def: 'Office of the Deputy Chief of Staff for Operations and Plans (Army)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ODCSPER',
        def: 'Office of the Deputy Chief of Staff for Personnel (Army)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ODIN',
        def: 'Operational Digital Network',
        src: 'JP 1-02'
    },
    {
        abbr: 'ODJS',
        def: 'Office of the Director, Joint Staff',
        src: 'JP 1-02'
    },
    {
        abbr: 'ODNI',
        def: 'Office of the Director of National Intelligence',
        src: '1-02'
    },
    {
        abbr: 'ODR',
        def: 'Office of Defense representative',
        src: 'JP 1-02'
    },
    {
        abbr: 'ODZ',
        def: 'outer defense zone',
        src: 'JP 1-02'
    },
    {
        abbr: 'OE',
        def: 'operational environment',
        src: '1-02'
    },
    {
        abbr: 'OE&AS',
        def: 'organization for embarkation and assignment to shipping',
        src: '1-02'
    },
    {
        abbr: 'OEBGD',
        def: 'Overseas Environmental Baseline Guidance Document',
        src: '1-02'
    },
    {
        abbr: 'OECD',
        def: 'Organisation for Economic Co-operation and Development',
        src: '1-02'
    },
    {
        abbr: 'OEF',
        def: 'Operation ENDURING FREEDOM',
        src: '1-02'
    },
    {
        abbr: 'OEG',
        def: 'operational experts group; operational exposure guidance; operations security executive group',
        src: '1-02'
    },
    {
        abbr: 'OEH',
        def: 'occupational and environmental health',
        src: '1-02'
    },
    {
        abbr: 'OEM',
        def: 'original equipment manufacturer',
        src: 'JP 4-02'
    },
    {
        abbr: 'OER',
        def: 'officer evaluation report; operational electronic intelligence (ELINT) requirements',
        src: 'JP 1-02'
    },
    {
        abbr: 'OES',
        def: 'office of emergency services',
        src: 'JP 1-02'
    },
    {
        abbr: 'OET',
        def: 'Office of Emergency Transportation (DOT)',
        src: 'JP 1-02'
    },
    {
        abbr: 'OF',
        def: 'officer (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'OFAC',
        def: 'Office of Foreign Assets Control (TREAS)',
        src: '1-02'
    },
    {
        abbr: 'OFCO',
        def: 'offensive counterintelligence operation',
        src: 'JP 1-02'
    },
    {
        abbr: 'OFDA',
        def: 'Office of United States Foreign Disaster Assistance (USAID)',
        src: '1-02'
    },
    {
        abbr: 'OFHIS',
        def: 'operational fleet hospital information system',
        src: 'JP 1-02'
    },
    {
        abbr: 'OFOESA',
        def: 'Office of Field Operational and External Support Activities',
        src: 'JP 1-02'
    },
    {
        abbr: 'OFSC',
        def: 'Organizational and Force Structure Construct',
        src: '1-02'
    },
    {
        abbr: 'OGS',
        def: 'overseas ground station',
        src: 'JP 1-02'
    },
    {
        abbr: 'OH',
        def: 'overhead',
        src: 'JP 1-02'
    },
    {
        abbr: 'OHDACA',
        def: 'Overseas Humanitarian, Disaster, and Civic Aid (DSCA)',
        src: '1-02'
    },
    {
        abbr: 'OHDM',
        def: 'Office of Humanitarian Assistance, Disaster Relief, and Mine Action',
        src: '1-02'
    },
    {
        abbr: 'OI',
        def: 'Office of Intelligence (USCS); operating instruction; operational interest',
        src: '1-02'
    },
    {
        abbr: 'OI&A',
        def: 'Office of Intelligence and Analysis (DHS)',
        src: '1-02'
    },
    {
        abbr: 'OIA',
        def: 'Office of International Affairs (TREAS)',
        src: '1-02'
    },
    {
        abbr: 'OIC',
        def: 'officer in charge',
        src: '1-02'
    },
    {
        abbr: 'OICC',
        def: 'officer in charge of construction; operational intelligence coordination center',
        src: '1-02'
    },
    {
        abbr: 'OID',
        def: 'operation order (OPORD) identification',
        src: 'JP 1-02'
    },
    {
        abbr: 'OIF',
        def: 'Operation IRAQI FREEDOM',
        src: '1-02'
    },
    {
        abbr: 'OIIL',
        def: 'Office of Intelligence and Investigative Liaison (CBP)',
        src: '1-02'
    },
    {
        abbr: 'OIR',
        def: 'operational intelligence requirements; other intelligence requirements',
        src: 'JP 1-02'
    },
    {
        abbr: 'OJT',
        def: 'on-the-job training',
        src: 'JP 1-02'
    },
    {
        abbr: 'OL',
        def: 'operating location',
        src: 'JP 1-02'
    },
    {
        abbr: 'OLD',
        def: 'on-line tests and diagnostics',
        src: 'JP 1-02'
    },
    {
        abbr: 'OLS',
        def: 'operational linescan system; optical landing system',
        src: 'JP 1-02'
    },
    {
        abbr: 'OM',
        def: 'contour multiunit',
        src: 'JP 1-02'
    },
    {
        abbr: 'OMA',
        def: 'Office of Military Affairs (CIA and USAID)',
        src: '1-02'
    },
    {
        abbr: 'OMB',
        def: 'Office of Management and Budget; operations management branch',
        src: '1-02'
    },
    {
        abbr: 'OMC',
        def: 'Office of Military Cooperation; optical memory card',
        src: 'JP 1-02'
    },
    {
        abbr: 'OMF',
        def: 'officer master file',
        src: 'JP 1-02'
    },
    {
        abbr: 'OMS',
        def: 'Office of Mission Support',
        src: 'JP 3-07.3'
    },
    {
        abbr: 'OMSPH',
        def: 'Office of Medicine, Science, and Public Health (DHHS)',
        src: '1-02'
    },
    {
        abbr: 'OMT',
        def: 'operations management team; orthogonal mode transducer',
        src: 'JP 1-02'
    },
    {
        abbr: 'OMT/OMTP',
        def: 'operational maintenance test(ing)/test plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'ONDCP',
        def: 'Office of National Drug Control Policy',
        src: 'JP 1-02'
    },
    {
        abbr: 'ONE',
        def: 'Operation NOBLE EAGLE',
        src: '1-02'
    },
    {
        abbr: 'ONI',
        def: 'Office of Naval Intelligence',
        src: '1-02'
    },
    {
        abbr: 'OOB',
        def: 'order of battle',
        src: 'JP 1-02'
    },
    {
        abbr: 'OOD',
        def: 'officer of the deck',
        src: '1-02'
    },
    {
        abbr: 'OODA',
        def: 'observe, orient, decide, act',
        src: '1-02'
    },
    {
        abbr: 'OOS',
        def: 'out of service',
        src: 'JP 1-02'
    },
    {
        abbr: 'OP',
        def: 'observation post; operational publication (USN); ordnance publication',
        src: '1-02'
    },
    {
        abbr: 'OPARS',
        def: 'Optimum Path Aircraft Routing System',
        src: 'JP 1-02'
    },
    {
        abbr: 'OPBAT',
        def: 'Operation Bahamas, Turks, and Caicos',
        src: 'JP 1-02'
    },
    {
        abbr: 'OPC',
        def: 'Ocean Prediction Center (DOC)',
        src: '1-02'
    },
    {
        abbr: 'OPCEN',
        def: 'operations center (USCG)',
        src: 'JP 1-02'
    },
    {
        abbr: 'OPCOM',
        def: 'operational command (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'OPCON',
        def: 'operational control',
        src: '1-02'
    },
    {
        abbr: 'OPDAT',
        def: 'Office of Overseas Prosecutorial Development, Assistance, and Training (DOJ)',
        src: '1-02'
    },
    {
        abbr: 'OPDEC',
        def: 'operational deception',
        src: 'JP 1-02'
    },
    {
        abbr: 'OPDS',
        def: 'offshore petroleum discharge system (USN)',
        src: '1-02'
    },
    {
        abbr: 'OPDS-Future',
        def: 'offshore petroleum discharge system-future (USN)',
        src: '1-02'
    },
    {
        abbr: 'OPDS-L',
        def: 'offshore petroleum discharge system-legacy (USN)',
        src: '1-02'
    },
    {
        abbr: 'OPE',
        def: 'operational preparation of the environment',
        src: '1-02'
    },
    {
        abbr: 'OPELINT',
        def: 'operational electronic intelligence',
        src: '1-02'
    },
    {
        abbr: 'OPEO',
        def: 'Office of Preparedness and Emergency Operations (DHHS)',
        src: '1-02'
    },
    {
        abbr: 'OPFOR',
        def: 'opposing force; opposition force',
        src: '1-02'
    },
    {
        abbr: 'OPG',
        def: 'operations planning group',
        src: 'JP 1-02'
    },
    {
        abbr: 'OPGEN',
        def: 'operation general matter',
        src: '1-02'
    },
    {
        abbr: 'OPIR',
        def: 'overhead persistent infrared',
        src: '1-02'
    },
    {
        abbr: 'OPLAN',
        def: 'operation plan',
        src: '1-02'
    },
    {
        abbr: 'OPLAW',
        def: 'operational law',
        src: 'JP 1-02'
    },
    {
        abbr: 'OPM',
        def: 'Office of Personnel Management; operations per minute',
        src: 'JP 1-02'
    },
    {
        abbr: 'OPMG',
        def: 'Office of the Provost Marshal General',
        src: 'JP 1-02'
    },
    {
        abbr: 'OPNAVINST',
        def: 'Chief of Naval Operations instruction',
        src: '1-02'
    },
    {
        abbr: 'OPORD',
        def: 'operation order',
        src: '1-02'
    },
    {
        abbr: 'OPP',
        def: 'orderwire patch panel',
        src: '1-02'
    },
    {
        abbr: 'OPR',
        def: 'office of primary responsibility',
        src: 'JP 1-02'
    },
    {
        abbr: 'OPREP',
        def: 'operational report',
        src: 'JP 1-02'
    },
    {
        abbr: 'OPROJ',
        def: 'operational project',
        src: '1-02'
    },
    {
        abbr: 'OPS',
        def: 'operational project stock; operations; operations center',
        src: 'JP 1-02'
    },
    {
        abbr: 'OPSCOM',
        def: 'Operations Committee',
        src: 'JP 2-03'
    },
    {
        abbr: 'OPSDEPS',
        def: 'Service Operations Deputies',
        src: 'JP 1-02'
    },
    {
        abbr: 'OPSEC',
        def: 'operations security',
        src: '1-02'
    },
    {
        abbr: 'OPSTK',
        def: 'operational stock',
        src: 'JP 1-02'
    },
    {
        abbr: 'OPSUM',
        def: 'operation summary',
        src: 'JP 1-02'
    },
    {
        abbr: 'OPT',
        def: 'operational planning team',
        src: 'JP 1-02'
    },
    {
        abbr: 'OPTAR',
        def: 'operating target',
        src: 'JP 1-02'
    },
    {
        abbr: 'OPTASK',
        def: 'operation task',
        src: '1-02'
    },
    {
        abbr: 'OPTASKLINK',
        def: 'operations task link',
        src: '1-02'
    },
    {
        abbr: 'OPTEMPO',
        def: 'operating tempo',
        src: '1-02'
    },
    {
        abbr: 'OPTINT',
        def: 'optical intelligence',
        src: 'JP 1-02'
    },
    {
        abbr: 'OPZONE',
        def: 'operation zone',
        src: 'JP 1-02'
    },
    {
        abbr: 'OR',
        def: 'operational readiness; other rank(s) (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ORBAT',
        def: 'order of battle',
        src: 'JP 1-02'
    },
    {
        abbr: 'ORCON',
        def: 'originator controlled',
        src: 'JP 1-02'
    },
    {
        abbr: 'ORDREF',
        def: 'order reference',
        src: 'JP 1-02'
    },
    {
        abbr: 'ORDTYP',
        def: 'order type',
        src: 'JP 1-02'
    },
    {
        abbr: 'ORG',
        def: 'origin (GELOC)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ORIG',
        def: 'origin',
        src: 'JP 1-02'
    },
    {
        abbr: 'ORM',
        def: 'operational risk management',
        src: 'JP 4-02'
    },
    {
        abbr: 'ORP',
        def: 'ocean reception point',
        src: '1-02'
    },
    {
        abbr: 'ORS',
        def: 'operationally responsive space',
        src: '1-02'
    },
    {
        abbr: 'ORSA',
        def: 'operations research and systems analysis',
        src: '1-02'
    },
    {
        abbr: 'OS',
        def: 'operating system',
        src: 'JP 1-02'
    },
    {
        abbr: 'OSA',
        def: 'operational support airlift',
        src: '1-02'
    },
    {
        abbr: 'OSAT',
        def: 'out-of-service analog test',
        src: 'JP 1-02'
    },
    {
        abbr: 'OSC',
        def: 'offensive space control; on-scene commander; on-site commander; Open Source Center (CIA); operational support command; operations support center',
        src: '1-02'
    },
    {
        abbr: 'OSCE',
        def: 'Organization for Security and Cooperation in Europe',
        src: '1-02'
    },
    {
        abbr: 'OSD',
        def: 'Office of the Secretary of Defense',
        src: '1-02'
    },
    {
        abbr: 'OSD/DMDPO',
        def: 'Office of the Secretary of Defense, Defense Military Deception Program Office',
        src: '1-02'
    },
    {
        abbr: 'OSE',
        def: 'on scene endurance; operations support element',
        src: 'JP 1-02'
    },
    {
        abbr: 'OSEI',
        def: 'operational significant event imagery',
        src: '1-02'
    },
    {
        abbr: 'OSG',
        def: 'operational support group',
        src: 'JP 1-02'
    },
    {
        abbr: 'OSI',
        def: 'open system interconnection; operational subsystem interface',
        src: 'JP 1-02'
    },
    {
        abbr: 'OSIA',
        def: 'on-site inspection activity',
        src: 'JP 1-02'
    },
    {
        abbr: 'OSINT',
        def: 'open-source information; open-source intelligence',
        src: '1-02'
    },
    {
        abbr: 'OSIS',
        def: 'open-source information system',
        src: 'JP 1-02'
    },
    {
        abbr: 'OSM',
        def: 'Office of Spectrum Management (NTIA)',
        src: '1-02'
    },
    {
        abbr: 'OSO',
        def: 'operational support office',
        src: 'JP 1-02'
    },
    {
        abbr: 'OSOCC',
        def: 'on-site operations coordination center',
        src: '1-02'
    },
    {
        abbr: 'OSP',
        def: 'operations support package',
        src: 'JP 1-02'
    },
    {
        abbr: 'OSPG',
        def: 'overseas security policy group',
        src: 'JP 1-02'
    },
    {
        abbr: 'OSRI',
        def: 'originating station routing indicator',
        src: 'JP 1-02'
    },
    {
        abbr: 'OSV',
        def: 'ocean station vessel',
        src: 'JP 1-02'
    },
    {
        abbr: 'OT',
        def: 'operational test',
        src: 'JP 1-02'
    },
    {
        abbr: 'OT&E',
        def: 'operational test and evaluation',
        src: 'JP 1-02'
    },
    {
        abbr: 'OTA',
        def: 'Office of Technical Assistance (TREAS)',
        src: '1-02'
    },
    {
        abbr: 'OTC',
        def: 'officer in tactical command; over the counter',
        src: '1-02'
    },
    {
        abbr: 'OTG',
        def: 'operational target graphic',
        src: 'JP 1-02'
    },
    {
        abbr: 'OTH',
        def: 'other; over the horizon',
        src: 'JP 1-02'
    },
    {
        abbr: 'OTH-B',
        def: 'over-the-horizon backscatter (radar)',
        src: 'JP 1-02'
    },
    {
        abbr: 'OTHT',
        def: 'over-the-horizon targeting',
        src: 'JP 1-02'
    },
    {
        abbr: 'OTI',
        def: 'Office of Transition Initiatives (USAID)',
        src: '1-02'
    },
    {
        abbr: 'OTS',
        def: 'Officer Training School; one-time source',
        src: 'JP 1-02'
    },
    {
        abbr: 'OUB',
        def: 'offshore petroleum discharge system utility boat',
        src: '1-02'
    },
    {
        abbr: 'OUSD',
        def: 'Office of the Under Secretary of Defense',
        src: 'JP 1-02'
    },
    {
        abbr: 'OUSD(AT&L)',
        def: 'Office of the Under Secretary of Defense (Acquisition, Technology, and Logistics)',
        src: 'JP 1-02'
    },
    {
        abbr: 'OUSD(C)',
        def: 'Office of the Under Secretary of Defense (Comptroller)',
        src: '1-02'
    },
    {
        abbr: 'OUSD(C/CFO)',
        def: 'Office of the Under Secretary of Defense (Comptroller/Chief Financial Officer)',
        src: '1-02'
    },
    {
        abbr: 'OUSD(I)',
        def: 'Office of the Under Secretary of Defense (Intelligence)',
        src: '1-02'
    },
    {
        abbr: 'OUSD(P)',
        def: 'Office of the Under Secretary of Defense for Policy',
        src: '1-02'
    },
    {
        abbr: 'OUT',
        def: 'outsize cargo',
        src: 'JP 1-02'
    },
    {
        abbr: 'OVE',
        def: 'on-vehicle equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'OVER',
        def: 'oversize cargo',
        src: 'JP 1-02'
    },
    {
        abbr: 'OVM',
        def: 'Operation VIGILANT MARINER',
        src: '1-02'
    },
    {
        abbr: 'OW',
        def: 'orderwire',
        src: 'JP 1-02'
    },
    {
        abbr: 'OWS',
        def: 'operational weather squadron',
        src: '1-02'
    },
    {
        abbr: 'P',
        def: 'parallel pattern; priority; publication',
        src: '1-02'
    },
    {
        abbr: 'P,C,&H',
        def: 'packing, crating, and handling',
        src: 'JP 1-02'
    },
    {
        abbr: 'p-p',
        def: 'peak-to-peak',
        src: 'JP 1-02'
    },
    {
        abbr: 'P-STATIC',
        def: 'precipitation static',
        src: 'JP 1-02'
    },
    {
        abbr: 'P/M/C',
        def: 'passengers/mail/cargo',
        src: 'JP 1-02'
    },
    {
        abbr: 'P/O',
        def: 'part of',
        src: 'JP 1-02'
    },
    {
        abbr: 'P/P',
        def: 'patch panel',
        src: 'JP 1-02'
    },
    {
        abbr: 'PA',
        def: 'parent relay; physician assistant; primary agency; probability of arrival; public affairs',
        src: '1-02'
    },
    {
        abbr: 'PAA',
        def: 'position area of artillery',
        src: '1-02'
    },
    {
        abbr: 'PABX',
        def: 'private automatic branch exchange (telephone)',
        src: 'JP 1-02'
    },
    {
        abbr: 'PACAF',
        def: 'Pacific Air Forces',
        src: 'JP 1-02'
    },
    {
        abbr: 'PAD',
        def: 'patient administration director; positional adjustment; precision aircraft direction',
        src: 'JP 1-02'
    },
    {
        abbr: 'PADD',
        def: 'person authorized to direct disposition of human remains',
        src: 'JP 1-02'
    },
    {
        abbr: 'PADRU',
        def: 'Pan American Disaster Response Unit',
        src: '1-02'
    },
    {
        abbr: 'PADS',
        def: 'position azimuth determining system',
        src: 'JP 1-02'
    },
    {
        abbr: 'PAG',
        def: 'public affairs guidance',
        src: '1-02'
    },
    {
        abbr: 'PAL',
        def: 'personnel allowance list; program assembler language',
        src: '1-02'
    },
    {
        abbr: 'PALCON',
        def: 'pallet container',
        src: '1-02'
    },
    {
        abbr: 'PALS',
        def: 'precision approach landing system',
        src: 'JP 1-02'
    },
    {
        abbr: 'PAM',
        def: 'preventive and aerospace medicine; pulse amplitude modulation ',
        src: '1-02'
    },
    {
        abbr: 'PaM',
        def: 'passage material',
        src: '1-02'
    },
    {
        abbr: 'PANS',
        def: 'procedures for air navigation services',
        src: 'JP 1-02'
    },
    {
        abbr: 'PAO',
        def: 'public affairs office; public affairs officer',
        src: '1-02'
    },
    {
        abbr: 'PAR',
        def: 'performance assessment report; population at risk; precision approach radar',
        src: 'JP 1-02'
    },
    {
        abbr: 'PARC',
        def: 'principal assistant for contracting',
        src: 'JP 3-33'
    },
    {
        abbr: 'PARKHILL',
        def: 'high frequency cryptological device',
        src: 'JP 1-02'
    },
    {
        abbr: 'PARPRO',
        def: 'peacetime application of reconnaissance programs',
        src: 'JP 1-02'
    },
    {
        abbr: 'PARS',
        def: 'Personnel and Accountability System',
        src: '1-02'
    },
    {
        abbr: 'PAS',
        def: 'personnel accounting symbol',
        src: 'JP 1-02'
    },
    {
        abbr: 'PAT',
        def: 'public affairs team',
        src: 'JP 1-02'
    },
    {
        abbr: 'PAV',
        def: 'policy assessment visit',
        src: 'JP 1-02'
    },
    {
        abbr: 'PAWS',
        def: 'phased array warning system',
        src: 'JP 1-02'
    },
    {
        abbr: 'PAX',
        def: 'passengers; public affairs plans',
        src: '1-02'
    },
    {
        abbr: 'PB',
        def: 'particle beam; patrol boat; peace building; President\'s budget',
        src: '1-02'
    },
    {
        abbr: 'PB4T',
        def: 'planning board for training',
        src: 'JP 3-04'
    },
    {
        abbr: 'PBA',
        def: 'performance-based agreement; production base analysis',
        src: 'JP 1-02'
    },
    {
        abbr: 'PBCR',
        def: 'portable bar code recorder',
        src: 'JP 1-02'
    },
    {
        abbr: 'PBD',
        def: 'program budget decision',
        src: 'JP 1-02'
    },
    {
        abbr: 'PBIED',
        def: 'person-borne improvised explosive device',
        src: '1-02'
    },
    {
        abbr: 'PBOS',
        def: 'Planning Board for Ocean Shipping',
        src: '1-02'
    },
    {
        abbr: 'Pc',
        def: 'cumulative probability of detection',
        src: 'JP 1-02'
    },
    {
        abbr: 'PC',
        def: 'patrol craft; personal computer; pilot in command; preliminary coordination; Principals Committee',
        src: '1-02'
    },
    {
        abbr: 'PC&S',
        def: 'post, camp, and station',
        src: '1-02'
    },
    {
        abbr: 'PC-LITE',
        def: 'processor, laptop imagery transmission equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'PCA',
        def: 'Posse Comitatus Act',
        src: '1-02'
    },
    {
        abbr: 'PCC',
        def: 'policy coordination committee; primary control center',
        src: '1-02'
    },
    {
        abbr: 'PCF',
        def: 'personnel control facility',
        src: 'JP 1-02'
    },
    {
        abbr: 'PCL',
        def: 'positive control launch',
        src: 'JP 1-02'
    },
    {
        abbr: 'PCM',
        def: 'pulse code modulation',
        src: 'JP 1-02'
    },
    {
        abbr: 'PCO',
        def: 'primary control officer; procuring contracting officer',
        src: '1-02'
    },
    {
        abbr: 'PCRTS',
        def: 'primary casualty receiving and treatment ship',
        src: 'JP 1-02'
    },
    {
        abbr: 'PCS',
        def: 'permanent change of station; personal communications system; primary control ship; processing subsystem; processor controlled strapping',
        src: 'JP 1-02'
    },
    {
        abbr: 'PCT',
        def: 'personnel control team',
        src: 'JP 1-02'
    },
    {
        abbr: 'PCTC',
        def: 'pure car and truck carrier',
        src: '1-02'
    },
    {
        abbr: 'PCZ',
        def: 'physical control zone',
        src: 'JP 1-02'
    },
    {
        abbr: 'Pd',
        def: 'drift compensated parallelogram pattern',
        src: 'JP 1-02'
    },
    {
        abbr: 'PD',
        def: 'position description; Presidential directive; priority designator; probability of damage; probability of detection; procedures description; program definition; program directive; program director; public diplomacy',
        src: '1-02'
    },
    {
        abbr: 'PDA',
        def: 'preliminary damage assessment',
        src: 'JP 3-08'
    },
    {
        abbr: 'PDAI',
        def: 'primary development/test aircraft inventory',
        src: 'JP 1-02'
    },
    {
        abbr: 'PDC',
        def: 'Pacific Disaster Center',
        src: '1-02'
    },
    {
        abbr: 'PDD',
        def: 'Presidential decision directive',
        src: 'JP 1-02'
    },
    {
        abbr: 'PDDA',
        def: 'power driven decontamination apparatus',
        src: 'JP 1-02'
    },
    {
        abbr: 'PDDG',
        def: 'program directive development group',
        src: 'JP 1-02'
    },
    {
        abbr: 'PDG',
        def: 'positional data graphic',
        src: 'JP 1-02'
    },
    {
        abbr: 'PDM',
        def: 'program decision memorandum',
        src: 'JP 1-02'
    },
    {
        abbr: 'PDOP',
        def: 'position dilution of precision',
        src: 'JP 1-02'
    },
    {
        abbr: 'PDS',
        def: 'position determining system; primary distribution site; protected distribution system',
        src: 'JP 1-02'
    },
    {
        abbr: 'PDSC',
        def: 'public diplomacy and strategic communication',
        src: '1-02'
    },
    {
        abbr: 'PDSS',
        def: 'predeployment site survey',
        src: '1-02'
    },
    {
        abbr: 'PDT',
        def: 'partnership development team',
        src: '1-02'
    },
    {
        abbr: 'PDUSD(P&R)',
        def: 'Principal Deputy Under Secretary of Defense (Personnel and Readiness)',
        src: '1-02'
    },
    {
        abbr: 'PE',
        def: 'peace enforcement; peacetime establishment; personal effects; preparation of the environment; program element',
        src: '1-02'
    },
    {
        abbr: 'PEAD',
        def: 'Presidential emergency action document',
        src: 'JP 1-02'
    },
    {
        abbr: 'PEC',
        def: 'program element code',
        src: 'JP 1-02'
    },
    {
        abbr: 'PECK',
        def: 'patient evacuation contingency kit',
        src: 'JP 1-02'
    },
    {
        abbr: 'PECP',
        def: 'precision engagement collaboration process',
        src: 'JP 1-02'
    },
    {
        abbr: 'PED',
        def: 'processing, exploitation, and dissemination',
        src: '1-02'
    },
    {
        abbr: 'PEDB',
        def: 'planning and execution database',
        src: 'JP 1-02'
    },
    {
        abbr: 'PEGEO',
        def: 'personnel geographic location',
        src: 'JP 1-02'
    },
    {
        abbr: 'PEI',
        def: 'principal end item',
        src: 'JP 1-02'
    },
    {
        abbr: 'PEIO',
        def: 'personnel effects inventory officer',
        src: '1-02'
    },
    {
        abbr: 'PEM',
        def: 'program element monitor',
        src: 'JP 1-02'
    },
    {
        abbr: 'PEO',
        def: 'peace enforcement operations; program executive office; program executive officer',
        src: '1-02'
    },
    {
        abbr: 'PEP',
        def: 'personnel exchange program',
        src: 'JP 1-02'
    },
    {
        abbr: 'PER',
        def: 'personnel',
        src: 'JP 1-02'
    },
    {
        abbr: 'PERE',
        def: 'person eligible to receive effects',
        src: 'JP 1-02'
    },
    {
        abbr: 'PERID',
        def: 'period',
        src: 'JP 1-02'
    },
    {
        abbr: 'PERMA',
        def: 'planning, embarkation, rehearsal, movement, and action',
        src: '1-02'
    },
    {
        abbr: 'PERMREP',
        def: 'permanent representative (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'PERSCO',
        def: 'personnel support for contingency operations',
        src: 'JP 1-02'
    },
    {
        abbr: 'PERSCOM',
        def: 'personnel command (Army)',
        src: 'JP 1-02'
    },
    {
        abbr: 'PERSINS',
        def: 'personnel information system',
        src: 'JP 1-02'
    },
    {
        abbr: 'PES',
        def: 'preparedness evaluation system',
        src: 'JP 1-02'
    },
    {
        abbr: 'PFA',
        def: 'primary federal agency',
        src: 'JP 4-06'
    },
    {
        abbr: 'PFD',
        def: 'personal flotation device',
        src: 'JP 1-02'
    },
    {
        abbr: 'PFDB',
        def: 'planning factors database',
        src: 'JP 1-02'
    },
    {
        abbr: 'PFIAB',
        def: 'President\'s Foreign Intelligence Advisory Board',
        src: 'JP 1-02'
    },
    {
        abbr: 'PFID',
        def: 'positive friendly identification',
        src: 'JP 1-02'
    },
    {
        abbr: 'PFO',
        def: 'principal federal offical',
        src: '1-02'
    },
    {
        abbr: 'PfP',
        def: 'Partnership for Peace (NATO)',
        src: '1-02'
    },
    {
        abbr: 'PGI',
        def: 'procedures, guidance, and information',
        src: '1-02'
    },
    {
        abbr: 'PGM',
        def: 'precision-guided munition',
        src: '1-02'
    },
    {
        abbr: 'pH',
        def: 'potential of hydrogen',
        src: 'JP 4-06'
    },
    {
        abbr: 'PHEO',
        def: 'public health emergency officer',
        src: 'JP 3-11'
    },
    {
        abbr: 'PHIBCB',
        def: 'amphibious construction battalion',
        src: '1-02'
    },
    {
        abbr: 'PHIBGRU',
        def: 'amphibious group',
        src: 'JP 1-02'
    },
    {
        abbr: 'PHIBOP',
        def: 'amphibious operation',
        src: 'JP 1-02'
    },
    {
        abbr: 'PHIBRON',
        def: 'amphibious squadron',
        src: 'JP 1-02'
    },
    {
        abbr: 'PHIT',
        def: 'port handling/in-land transportation',
        src: '1-02'
    },
    {
        abbr: 'PHO',
        def: 'posthostilities operations',
        src: 'JP 1-02'
    },
    {
        abbr: 'PHS',
        def: 'Public Health Service',
        src: 'JP 1-02'
    },
    {
        abbr: 'PI',
        def: 'pandemic influenza; point of impact; probability of incapacitation; procedural item; purposeful interference',
        src: '1-02'
    },
    {
        abbr: 'PIAB',
        def: 'President’s Intelligence Advisory Board',
        src: '1-02'
    },
    {
        abbr: 'PIC',
        def: 'parent indicator code; payment in cash; person identification code; pilot in command; press information center (NATO)',
        src: '1-02'
    },
    {
        abbr: 'PID',
        def: 'plan identification number; positive identification',
        src: '1-02'
    },
    {
        abbr: 'PIDD',
        def: 'planned inactivation or discontinued date',
        src: 'JP 1-02'
    },
    {
        abbr: 'PIF',
        def: 'problem identification flag',
        src: 'JP 1-02'
    },
    {
        abbr: 'PII',
        def: 'pre-incident indicators',
        src: 'JP 1-02'
    },
    {
        abbr: 'PIM',
        def: 'pretrained individual manpower',
        src: 'JP 1-02'
    },
    {
        abbr: 'PIN',
        def: 'personnel increment number',
        src: 'JP 1-02'
    },
    {
        abbr: 'PINS',
        def: 'precise integrated navigation system',
        src: 'JP 1-02'
    },
    {
        abbr: 'PIO',
        def: 'press information officer; public information officer',
        src: '1-02'
    },
    {
        abbr: 'PIPS',
        def: 'plans integration partitioning system',
        src: 'JP 1-02'
    },
    {
        abbr: 'PIR',
        def: 'priority intelligence requirement',
        src: '1-02'
    },
    {
        abbr: 'PIREP',
        def: 'pilot report',
        src: '1-02'
    },
    {
        abbr: 'PIRT',
        def: 'purposeful interference response team',
        src: '1-02'
    },
    {
        abbr: 'PIW',
        def: 'person in water',
        src: 'JP 1-02'
    },
    {
        abbr: 'PJ',
        def: 'pararescue jumper',
        src: 'JP 1-02'
    },
    {
        abbr: 'PK',
        def: 'peacekeeping; probability of kill',
        src: '1-02'
    },
    {
        abbr: 'PKG-POL',
        def: 'packaged petroleum, oils, and lubricants',
        src: 'JP 1-02'
    },
    {
        abbr: 'PKI',
        def: 'public key infrastructure',
        src: 'JP 1-02'
    },
    {
        abbr: 'PKO',
        def: 'peacekeeping operations',
        src: '1-02'
    },
    {
        abbr: 'PKP',
        def: 'purple k powder',
        src: 'JP 1-02'
    },
    {
        abbr: 'PKSOI',
        def: 'Peacekeeping and Stability Operations Institute',
        src: '1-02'
    },
    {
        abbr: 'PL',
        def: 'phase line; public law',
        src: 'JP 1-02'
    },
    {
        abbr: 'PLA',
        def: 'plain language address',
        src: 'JP 1-02'
    },
    {
        abbr: 'PLAD',
        def: 'plain language address directory',
        src: '1-02'
    },
    {
        abbr: 'PLANORD',
        def: 'planning order',
        src: 'JP 1-02'
    },
    {
        abbr: 'PLAT',
        def: 'pilot\'s landing aid television',
        src: 'JP 1-02'
    },
    {
        abbr: 'PLB',
        def: 'personal locator beacon',
        src: 'JP 1-02'
    },
    {
        abbr: 'PLC',
        def: 'power line conditioner',
        src: 'JP 1-02'
    },
    {
        abbr: 'PLGR',
        def: 'precise lightweight global positioning system (GPS) receiver',
        src: 'JP 1-02'
    },
    {
        abbr: 'PLL',
        def: 'phase locked loop',
        src: 'JP 1-02'
    },
    {
        abbr: 'PLL/ASL',
        def: 'prescribed load list/authorized stock level',
        src: 'JP 1-02'
    },
    {
        abbr: 'PLRS',
        def: 'position location reporting system',
        src: 'JP 1-02'
    },
    {
        abbr: 'PLS',
        def: 'palletized load system; personal locator system; pillars of logistic support: precision locator system',
        src: '1-02'
    },
    {
        abbr: 'PLT',
        def: 'platoon; program library tape',
        src: 'JP 1-02'
    },
    {
        abbr: 'PM',
        def: 'Bureau of Political-Military Affairs (DOS); parallel track multiunit; passage material; patient movement; peacemaking; political-military affairs; preventive medicine; program management; program manager; provost marshal',
        src: '1-02'
    },
    {
        abbr: 'PMA',
        def: 'political/military assessment',
        src: 'JP 1-02'
    },
    {
        abbr: 'PMAA',
        def: 'Production Management Alternative Architecture',
        src: 'JP 2-03'
    },
    {
        abbr: 'PMAI',
        def: 'primary mission aircraft inventory',
        src: 'JP 1-02'
    },
    {
        abbr: 'PMC',
        def: 'parallel multiunit circle; private military company',
        src: '1-02'
    },
    {
        abbr: 'PMCF',
        def: 'post maintenance check flight',
        src: '1-02'
    },
    {
        abbr: 'PMCT',
        def: 'port movement control team',
        src: 'JP 1-02'
    },
    {
        abbr: 'PMD',
        def: 'program management directive',
        src: 'JP 1-02'
    },
    {
        abbr: 'PME',
        def: 'professional military education',
        src: '1-02'
    },
    {
        abbr: 'PMEL',
        def: 'precision measurement equipment laboratory',
        src: 'JP 1-02'
    },
    {
        abbr: 'PMESII',
        def: 'political, military, economic, social, information, and infrastructure',
        src: '1-02'
    },
    {
        abbr: 'PMGM',
        def: 'program manager\'s guidance memorandum',
        src: 'JP 1-02'
    },
    {
        abbr: 'PMI',
        def: 'patient movement item; prevention of mutual interference',
        src: '1-02'
    },
    {
        abbr: 'PMITS',
        def: 'Patient Movement Item Tracking System',
        src: '1-02'
    },
    {
        abbr: 'PMN',
        def: 'parallel track multiunit non-return',
        src: 'JP 1-02'
    },
    {
        abbr: 'PMO',
        def: 'production management office(r); program management office',
        src: '1-02'
    },
    {
        abbr: 'PMOS',
        def: 'primary military occupational specialty',
        src: 'JP 1-02'
    },
    {
        abbr: 'PMR',
        def: 'parallel track multiunit return; patient movement request; patient movement requirement',
        src: 'JP 1-02'
    },
    {
        abbr: 'PMRC',
        def: 'patient movement requirements center',
        src: '1-02'
    },
    {
        abbr: 'PMS',
        def: 'portable meteorological subsystem',
        src: 'JP 1-02'
    },
    {
        abbr: 'PN',
        def: 'partner nation; pseudonoise',
        src: '1-02'
    },
    {
        abbr: 'PNA',
        def: 'postal net alert',
        src: '1-02'
    },
    {
        abbr: 'PNID',
        def: 'precedence network in dialing',
        src: 'JP 1-02'
    },
    {
        abbr: 'PNT',
        def: 'positioning, navigation, and timing',
        src: '1-02'
    },
    {
        abbr: 'PNVS',
        def: 'pilot night vision system',
        src: 'JP 1-02'
    },
    {
        abbr: 'PO',
        def: 'peace operations; petty officer',
        src: '1-02'
    },
    {
        abbr: 'POA',
        def: 'plan of action',
        src: 'JP 1-02'
    },
    {
        abbr: 'POAI',
        def: 'primary other aircraft inventory',
        src: 'JP 1-02'
    },
    {
        abbr: 'POB',
        def: 'persons on board',
        src: '1-02'
    },
    {
        abbr: 'POC',
        def: 'point of contact',
        src: '1-02'
    },
    {
        abbr: 'POCD',
        def: 'port operations cargo detachment',
        src: 'JP 4-01.6'
    },
    {
        abbr: 'POD',
        def: 'plan of the day; port of debarkation; probability of detection',
        src: '1-02'
    },
    {
        abbr: 'POE',
        def: 'port of embarkation; port of entry',
        src: '1-02'
    },
    {
        abbr: 'POES',
        def: 'polar operational environment satellite',
        src: '1-02'
    },
    {
        abbr: 'POF',
        def: 'priority of fires'
    },
    {
        abbr: 'POG',
        def: 'port operations group',
        src: '1-02'
    },
    {
        abbr: 'POI',
        def: 'program of instruction',
        src: '1-02'
    },
    {
        abbr: 'POL',
        def: 'petroleum, oils, and lubricants',
        src: '1-02'
    },
    {
        abbr: 'POLAD',
        def: 'policy advisor; political advisor ',
        src: '1-02'
    },
    {
        abbr: 'POLCAP',
        def: 'bulk petroleum capabilities report',
        src: 'JP 1-02'
    },
    {
        abbr: 'POLMIL',
        def: 'political-military',
        src: 'JP 1-02'
    },
    {
        abbr: 'POM',
        def: 'program objective memorandum',
        src: 'JP 1-02'
    },
    {
        abbr: 'POMCUS',
        def: 'pre-positioning of materiel configured to unit sets',
        src: 'JP 1-02'
    },
    {
        abbr: 'POMSO',
        def: 'Plans, Operations, and Military Support Office(r) (NG)',
        src: 'JP 1-02'
    },
    {
        abbr: 'POP',
        def: 'performance oriented packaging',
        src: 'JP 1-02'
    },
    {
        abbr: 'POPS',
        def: 'port operational performance simulator',
        src: 'JP 1-02'
    },
    {
        abbr: 'POR',
        def: 'proposed operational requirement',
        src: 'JP 1-02'
    },
    {
        abbr: 'PORTS',
        def: 'portable remote telecommunications system',
        src: 'JP 1-02'
    },
    {
        abbr: 'PORTSIM',
        def: 'port simulation model',
        src: '1-02'
    },
    {
        abbr: 'POS',
        def: 'peacetime operating stocks; point of sale; probability of success',
        src: '1-02'
    },
    {
        abbr: 'POSF',
        def: 'port of support file',
        src: 'JP 1-02'
    },
    {
        abbr: 'POSSUB',
        def: 'possible submarine',
        src: 'JP 1-02'
    },
    {
        abbr: 'POSTMOB',
        def: 'post mobilization',
        src: 'JP 1-02'
    },
    {
        abbr: 'POTUS',
        def: 'President of the United States',
        src: 'JP 1-02'
    },
    {
        abbr: 'POV',
        def: 'privately owned vehicle',
        src: 'JP 1-02'
    },
    {
        abbr: 'POW',
        def: 'prisoner of war',
        src: '1-02'
    },
    {
        abbr: 'PPA',
        def: 'personnel information system (PERSINS) personnel activity',
        src: 'JP 1-02'
    },
    {
        abbr: 'PPAG',
        def: 'proposed public affairs guidance',
        src: 'JP 1-02'
    },
    {
        abbr: 'PPBE',
        def: 'Planning, Programming, Budgeting, and Execution',
        src: '1-02'
    },
    {
        abbr: 'PPD',
        def: 'Presidential policy directive; program planning document',
        src: '1-02'
    },
    {
        abbr: 'PPDB',
        def: 'point positioning database',
        src: 'JP 1-02'
    },
    {
        abbr: 'PPE',
        def: 'personal protective equipment',
        src: '1-02'
    },
    {
        abbr: 'PPF',
        def: 'personnel processing file',
        src: 'JP 3-50'
    },
    {
        abbr: 'Pplan',
        def: 'programming plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'PPLI',
        def: 'precise participant location and identification',
        src: '1-02'
    },
    {
        abbr: 'ppm',
        def: 'parts per million',
        src: 'JP 1-02'
    },
    {
        abbr: 'PPP',
        def: 'power projection platform; primary patch panel; priority placement program',
        src: 'JP 1-02'
    },
    {
        abbr: 'PPR',
        def: 'prior permission required',
        src: 'JP 1-02'
    },
    {
        abbr: 'PPS',
        def: 'precise positioning service',
        src: '1-02'
    },
    {
        abbr: 'PPTO',
        def: 'petroleum pipeline and terminal operating',
        src: '1-02'
    },
    {
        abbr: 'PR',
        def: 'personnel recovery; Phoenix Raven; primary zone; production requirement; program review',
        src: '1-02'
    },
    {
        abbr: 'PRA',
        def: 'patient reception area; primary review authority',
        src: '1-02'
    },
    {
        abbr: 'PRANG',
        def: 'Puerto Rican Air National Guard',
        src: 'JP 1-02'
    },
    {
        abbr: 'PRBS',
        def: 'pseudorandom binary sequence',
        src: 'JP 1-02'
    },
    {
        abbr: 'PRC',
        def: 'populace and resources control; Presidential Reserve Call-up',
        src: '1-02'
    },
    {
        abbr: 'PRCC',
        def: 'personnel recovery coordination cell; personnel recovery coordination center',
        src: '1-02'
    },
    {
        abbr: 'PRCS',
        def: 'personnel recovery coordination section',
        src: '1-02'
    },
    {
        abbr: 'PRD',
        def: 'personnel readiness division; Presidential review directive',
        src: 'JP 1-02'
    },
    {
        abbr: 'PRDO',
        def: 'personnel recovery duty officer',
        src: '1-02'
    },
    {
        abbr: 'PREMOB',
        def: 'pre-mobilization',
        src: 'JP 1-02'
    },
    {
        abbr: 'PREPO',
        def: 'pre-positioned force, equipment, or supplies; pre-positioning',
        src: '1-02'
    },
    {
        abbr: 'PREREP',
        def: 'pre-arrival report',
        src: '1-02'
    },
    {
        abbr: 'PRF',
        def: 'personnel resources file; pulse repetition frequency',
        src: '1-02'
    },
    {
        abbr: 'PRG',
        def: 'personnel recovery guidance; program review group',
        src: '1-02'
    },
    {
        abbr: 'PRI',
        def: 'movement priority for forces having the same latest arrival date (LAD); priority; progressive routing indicator',
        src: 'JP 1-02'
    },
    {
        abbr: 'PRIFLY',
        def: 'primary flight control',
        src: '1-02'
    },
    {
        abbr: 'Prime BEEF',
        def: 'Prime Base Engineer Emergency Force',
        src: '1-02'
    },
    {
        abbr: 'PRISM',
        def: 'Planning Tool for Resource, Integration, Synchronization, and Management',
        src: '1-02'
    },
    {
        abbr: 'PRM',
        def: 'Bureau of Population, Refugees, and Migration (DOS); Presidential review memorandum',
        src: '1-02'
    },
    {
        abbr: 'PRMFL',
        def: 'perm file',
        src: 'JP 1-02'
    },
    {
        abbr: 'PRMS',
        def: 'personnel recovery mission software',
        src: '1-02'
    },
    {
        abbr: 'PRN',
        def: 'pseudorandom noise',
        src: 'JP 1-02'
    },
    {
        abbr: 'PRO',
        def: 'personnel recovery officer',
        src: 'JP 3-50'
    },
    {
        abbr: 'PROBSUB',
        def: 'probable submarine',
        src: 'JP 1-02'
    },
    {
        abbr: 'PROC',
        def: 'processor; Puerto Rican Operations Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'PROFIS',
        def: 'professional officer filler information system',
        src: 'JP 1-02'
    },
    {
        abbr: 'PROM',
        def: 'programmable read-only memory',
        src: 'JP 1-02'
    },
    {
        abbr: 'PROPIN',
        def: 'caution - proprietary information involved',
        src: 'JP 1-02'
    },
    {
        abbr: 'PROVORG',
        def: 'providing organization',
        src: 'JP 1-02'
    },
    {
        abbr: 'proword',
        def: 'procedure word',
        src: 'JP 1-02'
    },
    {
        abbr: 'PRP',
        def: 'personnel reliability program; Personnel Retrieval and Processing',
        src: '1-02'
    },
    {
        abbr: 'PRRIS',
        def: 'Puerto Rican radar integration system',
        src: 'JP 1-02'
    },
    {
        abbr: 'PRSL',
        def: 'primary zone/switch location',
        src: 'JP 1-02'
    },
    {
        abbr: 'PRT',
        def: 'patient reception team; provincial reconstruction team',
        src: '1-02'
    },
    {
        abbr: 'PRTF',
        def: 'personnel recovery task force',
        src: '1-02'
    },
    {
        abbr: 'PRU',
        def: 'pararescue unit; primary reporting unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'PS',
        def: 'parallel track single-unit; port security; processing subsystem',
        src: '1-02'
    },
    {
        abbr: 'PS/HD',
        def: 'port security/harbor defense',
        src: '1-02'
    },
    {
        abbr: 'PSA',
        def: 'port support activity; principal staff assistant',
        src: '1-02'
    },
    {
        abbr: 'PSB',
        def: 'poststrike base',
        src: 'JP 1-02'
    },
    {
        abbr: 'PSC',
        def: 'port security company; principal subordinate command; private security contractor',
        src: '1-02'
    },
    {
        abbr: 'PSD',
        def: 'planning systems division; port security detachment',
        src: '1-02'
    },
    {
        abbr: 'PSE',
        def: 'peculiar support equipment ',
        src: '1-02'
    },
    {
        abbr: 'PSHDGRU',
        def: 'port security and harbor defense group',
        src: 'JP 1-02'
    },
    {
        abbr: 'PSI',
        def: 'Proliferation Security Initiative',
        src: '1-02'
    },
    {
        abbr: 'psi',
        def: 'pounds per square inch',
        src: '1-02'
    },
    {
        abbr: 'PSK',
        def: 'phase-shift keying',
        src: '1-02'
    },
    {
        abbr: 'PSL',
        def: 'parallel track single-unit long-range aid to navigation (LORAN)',
        src: 'JP 1-02'
    },
    {
        abbr: 'PSMS',
        def: 'Personnel Status Monitoring System',
        src: 'JP 1-02'
    },
    {
        abbr: 'PSN',
        def: 'packet switching node; public switch network',
        src: 'JP 1-02'
    },
    {
        abbr: 'PSO',
        def: 'peace support operations (NATO); post security officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'PSP',
        def: 'perforated steel planking; portable sensor platform; power support platform',
        src: 'JP 1-02'
    },
    {
        abbr: 'PSS',
        def: 'parallel single-unit spiral; personnel services support',
        src: 'JP 1-02'
    },
    {
        abbr: 'PSTN',
        def: 'public switched telephone network',
        src: 'JP 1-02'
    },
    {
        abbr: 'PSU',
        def: 'port security unit',
        src: '1-02'
    },
    {
        abbr: 'PSV',
        def: 'psuedosynthetic video',
        src: 'JP 1-02'
    },
    {
        abbr: 'PTA',
        def: 'position, time, altitude',
        src: 'JP 1-02'
    },
    {
        abbr: 'PTAI',
        def: 'primary training aircraft inventory',
        src: 'JP 1-02'
    },
    {
        abbr: 'PTC',
        def: 'peace through confrontation; primary traffic channel',
        src: 'JP 1-02'
    },
    {
        abbr: 'PTDO',
        def: 'prepare to deploy order',
        src: 'JP 5-0'
    },
    {
        abbr: 'PTM',
        def: 'personnel transport module',
        src: '1-02'
    },
    {
        abbr: 'PTT',
        def: 'postal telephone and telegraph; public telephone and telegraph; push-to-talk',
        src: 'JP 1-02'
    },
    {
        abbr: 'PTTI',
        def: 'precise time and time interval',
        src: 'JP 1-02'
    },
    {
        abbr: 'pub',
        def: 'publication',
        src: 'JP 1-02'
    },
    {
        abbr: 'PUK',
        def: 'packup kit',
        src: 'JP 1-02'
    },
    {
        abbr: 'PUL',
        def: 'parent unit level',
        src: 'JP 1-02'
    },
    {
        abbr: 'PV',
        def: 'prime vendor',
        src: '1-02'
    },
    {
        abbr: 'PVNTMED',
        def: 'preventive medicine',
        src: '1-02'
    },
    {
        abbr: 'PVT',
        def: 'positioning, velocity, and timing',
        src: 'JP 1-02'
    },
    {
        abbr: 'PW',
        def: 'prisoner of war',
        src: 'JP 1-02'
    },
    {
        abbr: 'pW',
        def: 'picowatt',
        src: 'JP 1-02'
    },
    {
        abbr: 'PWB',
        def: 'printed wiring board (assembly)',
        src: 'JP 1-02'
    },
    {
        abbr: 'PWD',
        def: 'programmed warhead detonation',
        src: 'JP 1-02'
    },
    {
        abbr: 'PWF',
        def: 'personnel working file',
        src: 'JP 1-02'
    },
    {
        abbr: 'PWG',
        def: 'protection working group',
        src: '1-02'
    },
    {
        abbr: 'PWIS',
        def: 'Prisoner of War Information System',
        src: 'JP 1-02'
    },
    {
        abbr: 'PWR',
        def: 'pre-positioned wartime reserves',
        src: 'JP 1-02'
    },
    {
        abbr: 'PWRMR',
        def: 'pre-positioned war materiel requirement',
        src: 'JP 1-02'
    },
    {
        abbr: 'PWRMS',
        def: 'pre-positioned war reserve materiel stock',
        src: 'JP 1-02'
    },
    {
        abbr: 'PWRR',
        def: 'petroleum war reserve requirements'
    },
    {
        abbr: 'PWRS',
        def: 'petroleum war reserve stocks; pre-positioned war reserve stock',
        src: 'JP 1-02'
    },
    {
        abbr: 'PWS',
        def: 'performance work statement',
        src: '1-02'
    },
    {
        abbr: 'PZ',
        def: 'pickup zone',
        src: 'JP 1-02'
    },
    {
        abbr: 'QA',
        def: 'quality assurance',
        src: 'JP 1-02'
    },
    {
        abbr: 'QAM',
        def: 'quadrature amplitude modulation',
        src: 'JP 1-02'
    },
    {
        abbr: 'QAR',
        def: 'quality assurance representative',
        src: '1-02'
    },
    {
        abbr: 'QAT',
        def: 'quality assurance team',
        src: 'JP 1-02'
    },
    {
        abbr: 'QC',
        def: 'quality control',
        src: 'JP 1-02'
    },
    {
        abbr: 'QD',
        def: 'quality distance',
        src: 'JP 1-02'
    },
    {
        abbr: 'QDR',
        def: 'quadrennial defense review; quality deficiency report',
        src: '1-02'
    },
    {
        abbr: 'QEEM',
        def: 'quick erect expandable mast',
        src: 'JP 1-02'
    },
    {
        abbr: 'QHDA',
        def: 'qualified hazardous duty area',
        src: '1-02'
    },
    {
        abbr: 'QIP',
        def: 'quick impact project',
        src: '1-02'
    },
    {
        abbr: 'QM',
        def: 'quartermaster',
        src: '1-02'
    },
    {
        abbr: 'QPSK',
        def: 'quadrature phase shift keying',
        src: 'JP 1-02'
    },
    {
        abbr: 'QRA',
        def: 'quick reaction antenna',
        src: 'JP 1-02'
    },
    {
        abbr: 'QRCT',
        def: 'quick reaction communications terminal',
        src: 'JP 1-02'
    },
    {
        abbr: 'QRE',
        def: 'quick reaction element',
        src: 'JP 1-02'
    },
    {
        abbr: 'QRF',
        def: 'quick reaction force; quick response force',
        src: '1-02'
    },
    {
        abbr: 'QRG',
        def: 'quick response graphic',
        src: 'JP 1-02'
    },
    {
        abbr: 'QRP',
        def: 'quick response posture',
        src: 'JP 1-02'
    },
    {
        abbr: 'QRS',
        def: 'quick reaction strike',
        src: 'JP 1-02'
    },
    {
        abbr: 'QRSA',
        def: 'quick reaction satellite antenna',
        src: 'JP 1-02'
    },
    {
        abbr: 'QRT',
        def: 'quick reaction team',
        src: 'JP 1-02'
    },
    {
        abbr: 'QS',
        def: 'quality surveillance',
        src: '1-02'
    },
    {
        abbr: 'QSR',
        def: 'quality surveillance representative'
    },
    {
        abbr: 'QSTAG',
        def: 'quadripartite standardization agreement',
        src: '1-02'
    },
    {
        abbr: 'QTY',
        def: 'quantity',
        src: 'JP 1-02'
    },
    {
        abbr: 'QUADCON',
        def: 'quadruple container',
        src: '1-02'
    },
    {
        abbr: 'R',
        def: 'routine',
        src: '1-02'
    },
    {
        abbr: 'R&D',
        def: 'research and development',
        src: '1-02'
    },
    {
        abbr: 'R&R',
        def: 'rest and recuperation',
        src: '1-02'
    },
    {
        abbr: 'R&S',
        def: 'reconnaissance and surveillance; reconstruction and stabilization',
        src: '1-02'
    },
    {
        abbr: 'R-AFF',
        def: 'regimental affiliation',
        src: 'JP 1-02'
    },
    {
        abbr: 'R/O',
        def: 'receive only',
        src: 'JP 1-02'
    },
    {
        abbr: 'R/T',
        def: 'receiver/transmitter',
        src: 'JP 1-02'
    },
    {
        abbr: 'R2P2',
        def: 'rapid response planning process',
        src: 'JP 1-02'
    },
    {
        abbr: 'RA',
        def: 'response action; risk analysis; risk assessment',
        src: '1-02'
    },
    {
        abbr: 'RAA',
        def: 'redeployment assembly area',
        src: 'JP 1-02'
    },
    {
        abbr: 'RABFAC',
        def: 'radar beacon forward air controller',
        src: 'JP 1-02'
    },
    {
        abbr: 'RAC',
        def: 'responsible analytic center',
        src: 'Jp 3-60'
    },
    {
        abbr: 'RAC-OT',
        def: 'readiness assessment system - output tool',
        src: 'JP 3-35'
    },
    {
        abbr: 'RAD',
        def: 'routine aerial distribution',
        src: '1-02'
    },
    {
        abbr: 'RADAY',
        def: 'radio day',
        src: 'JP 1-02'
    },
    {
        abbr: 'RADBN',
        def: 'radio battalion',
        src: '1-02'
    },
    {
        abbr: 'RADC',
        def: 'regional air defense commander',
        src: '1-02'
    },
    {
        abbr: 'RADCON',
        def: 'radiological control team',
        src: 'JP 1-02'
    },
    {
        abbr: 'RADF',
        def: 'radarfind',
        src: 'JP 1-02'
    },
    {
        abbr: 'RADHAZ',
        def: 'electromagnetic radiation hazards',
        src: 'JP 1-02'
    },
    {
        abbr: 'RADS',
        def: 'rapid area distribution support (USAF)',
        src: 'JP 1-02'
    },
    {
        abbr: 'RAE',
        def: 'right of assistance entry',
        src: 'JP 1-02'
    },
    {
        abbr: 'RAF',
        def: 'Royal Air Force (UK)',
        src: 'JP 1-02'
    },
    {
        abbr: 'RAM',
        def: 'raised angle marker; random access memory; random antiterrorism measure',
        src: '1-02'
    },
    {
        abbr: 'RAMCC',
        def: 'regional air movement control center',
        src: '1-02'
    },
    {
        abbr: 'RAOB',
        def: 'rawindsonde observation',
        src: 'JP 1-02'
    },
    {
        abbr: 'RAOC',
        def: 'rear area operations center; regional air operations center',
        src: 'JP 1-02'
    },
    {
        abbr: 'RAP',
        def: 'Radiological Assistance Program (DOE); rear area protection; Remedial Action Projects Program (JCS)',
        src: '1-02'
    },
    {
        abbr: 'RAS',
        def: 'replenishment at sea',
        src: '1-02'
    },
    {
        abbr: 'RAS-OT',
        def: 'readiness assessment system-output tool',
        src: '1-02'
    },
    {
        abbr: 'RAST',
        def: 'recovery assistance, securing, and traversing systems',
        src: 'JP 1-02'
    },
    {
        abbr: 'RASU',
        def: 'random access storage unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'RATE',
        def: 'refine, adapt, terminate, execute',
        src: '1-02'
    },
    {
        abbr: 'RATT',
        def: 'radio teletype',
        src: 'JP 1-02'
    },
    {
        abbr: 'RB',
        def: 'short-range coastal or river boat',
        src: '1-02'
    },
    {
        abbr: 'RB std',
        def: 'rubidium standard',
        src: 'JP 1-02'
    },
    {
        abbr: 'RBA',
        def: 'reimbursable budget authority',
        src: '1-02'
    },
    {
        abbr: 'RBC',
        def: 'red blood cell',
        src: '1-02'
    },
    {
        abbr: 'RBE',
        def: 'remain-behind equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'RBECS',
        def: 'Revised Battlefield Electronic Communications, Electronics, Intelligence, and Operations (CEIO) System',
        src: 'JP 1-02'
    },
    {
        abbr: 'RBI',
        def: 'RED/BLACK Isolator',
        src: 'JP 1-02'
    },
    {
        abbr: 'RC',
        def: 'receive clock; regional coordinator; Reserve Component; resident coordinator (UN); river current',
        src: '1-02'
    },
    {
        abbr: 'RC NORTH',
        def: 'Regional Command North (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'RC SOUTH',
        def: 'Regional Command South (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'RCA',
        def: 'riot control agent',
        src: '1-02'
    },
    {
        abbr: 'RCAT',
        def: 'regional counterdrug analysis team',
        src: 'JP 1-02'
    },
    {
        abbr: 'RCC',
        def: 'regional contracting center; relocation coordination center; rescue coordination center',
        src: '1-02'
    },
    {
        abbr: 'RCCPDS',
        def: 'Reserve Component common personnel data system',
        src: 'JP 1-02'
    },
    {
        abbr: 'RCD',
        def: 'regional collection detachment',
        src: '1-02'
    },
    {
        abbr: 'RCEM',
        def: 'regional contingency engineering management',
        src: '1-02'
    },
    {
        abbr: 'RCHB',
        def: 'reserve cargo handling battalion',
        src: 'JP 1-02'
    },
    {
        abbr: 'RCIED',
        def: 'radio-controlled improvised explosive device',
        src: '1-02'
    },
    {
        abbr: 'RCM',
        def: 'Rules for Courts-Martial',
        src: '1-02'
    },
    {
        abbr: 'RCMP',
        def: 'Royal Canadian Mounted Police',
        src: '1-02'
    },
    {
        abbr: 'RCO',
        def: 'regional contracting office',
        src: '1-02'
    },
    {
        abbr: 'RCP',
        def: 'resynchronization control panel',
        src: 'JP 1-02'
    },
    {
        abbr: 'RCS',
        def: 'radar cross section',
        src: 'JP 1-02'
    },
    {
        abbr: 'RCSP',
        def: 'remote call service position',
        src: 'JP 1-02'
    },
    {
        abbr: 'RCT',
        def: 'regimental combat team; rescue coordination team (Navy)',
        src: '1-02'
    },
    {
        abbr: 'RCTA',
        def: 'Regional Counterdrug Training Academy',
        src: 'JP 3-07.4'
    },
    {
        abbr: 'RCU',
        def: 'rate changes unit; remote control unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'RCVR',
        def: 'receiver',
        src: 'JP 1-02'
    },
    {
        abbr: 'RD',
        def: 'receive data; ringdown',
        src: 'JP 1-02'
    },
    {
        abbr: 'RDA',
        def: 'research, development, and acquisition',
        src: 'JP 1-02'
    },
    {
        abbr: 'RDCFP',
        def: 'Regional Defense Counterterrorism Fellowship Program',
        src: 'JP 3-07.1'
    },
    {
        abbr: 'RDCTFP',
        def: 'Regional Defense Combating Terrorism Fellowship Program',
        src: '1-02'
    },
    {
        abbr: 'RDD',
        def: 'radiological dispersal device; required delivery date',
        src: '1-02'
    },
    {
        abbr: 'RDECOM',
        def: 'US Army Research, Development, and Engineering Command',
        src: 'JP 4-06'
    },
    {
        abbr: 'RDF',
        def: 'radio direction finder; rapid deployment force',
        src: 'JP 1-02'
    },
    {
        abbr: 'RDO',
        def: 'request for deployment order',
        src: 'JP 1-02'
    },
    {
        abbr: 'RDT&E',
        def: 'research, development, test and evaluation',
        src: 'JP 1-02'
    },
    {
        abbr: 'REAC/TS',
        def: 'radiation emergency assistance center/training site (DOE)',
        src: '1-02'
    },
    {
        abbr: 'REACT',
        def: 'rapid execution and combat targeting',
        src: 'JP 1-02'
    },
    {
        abbr: 'READY',
        def: 'resource augmentation duty program',
        src: 'JP 1-02'
    },
    {
        abbr: 'RECA',
        def: 'Residual Capability Assessment',
        src: 'JP 1-02'
    },
    {
        abbr: 'RECAS',
        def: 'residual capability assessment system',
        src: 'JP 1-02'
    },
    {
        abbr: 'RECAT',
        def: 'residual capability assessment team',
        src: 'JP 1-02'
    },
    {
        abbr: 'RECCE',
        def: 'reconnaissance',
        src: 'JP 1-02'
    },
    {
        abbr: 'RECMOB',
        def: 'reconstitution-mobilization',
        src: 'JP 1-02'
    },
    {
        abbr: 'RECON',
        def: 'reconnaissance',
        src: 'JP 1-02'
    },
    {
        abbr: 'RED',
        def: 'radiological exposure device',
        src: '1-02'
    },
    {
        abbr: 'RED HORSE',
        def: 'Rapid Engineer Deployable Heavy Operational Repair Squadron Engineer',
        src: '1-02'
    },
    {
        abbr: 'REF',
        def: 'Rapid Equipping Force (Army); reference(s)',
        src: '1-02'
    },
    {
        abbr: 'REGT',
        def: 'regiment',
        src: 'JP 1-02'
    },
    {
        abbr: 'REL',
        def: 'relative',
        src: 'JP 1-02'
    },
    {
        abbr: 'RELCAN',
        def: 'releasable to Canada',
        src: 'JP 1-02'
    },
    {
        abbr: 'REMT',
        def: 'regional emergency management team',
        src: 'JP 1-02'
    },
    {
        abbr: 'REMUS',
        def: 'remote environmental monitoring unit system',
        src: 'JP 3-15'
    },
    {
        abbr: 'REPOL',
        def: 'bulk petroleum contingency report; petroleum damage and deficiency report; reporting emergency petroleum, oils, and lubricants',
        src: 'JP 1-02'
    },
    {
        abbr: 'REPSHIP',
        def: 'report of shipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'REPUNIT',
        def: 'reporting unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'REQCONF',
        def: 'request confirmation',
        src: 'JP 1-02'
    },
    {
        abbr: 'REQSTATASK',
        def: 'air mission request status tasking',
        src: 'JP 1-02'
    },
    {
        abbr: 'RES',
        def: 'radiation exposure status',
        src: '1-02'
    },
    {
        abbr: 'RESA',
        def: 'research, evaluation, and system analysis',
        src: 'JP 1-02'
    },
    {
        abbr: 'RESCAP',
        def: 'rescue combat air patrol',
        src: 'JP 1-02'
    },
    {
        abbr: 'RESCORT',
        def: 'rescue escort',
        src: 'JP 1-02'
    },
    {
        abbr: 'RESPROD',
        def: 'responsible production',
        src: 'JP 1-02'
    },
    {
        abbr: 'RET',
        def: 'retired',
        src: 'JP 1-02'
    },
    {
        abbr: 'RF',
        def: 'radio frequency; reserve force; response force',
        src: '1-02'
    },
    {
        abbr: 'RF/EMPINT',
        def: 'radio frequency/electromagnetic pulse intelligence',
        src: 'JP 1-02'
    },
    {
        abbr: 'RFA',
        def: 'radio frequency authorization; request for assistance; restrictive fire area',
        src: '1-02'
    },
    {
        abbr: 'RFC',
        def: 'request for capabilities; response force commander; revision final coordination',
        src: '1-02'
    },
    {
        abbr: 'RFD',
        def: 'revision first draft',
        src: '1-02'
    },
    {
        abbr: 'RFF',
        def: 'request for feedback; request for forces',
        src: '1-02'
    },
    {
        abbr: 'RFI',
        def: 'radio frequency interference; ready for issue; request for information',
        src: '1-02'
    },
    {
        abbr: 'RFID',
        def: 'radio frequency identification',
        src: '1-02'
    },
    {
        abbr: 'RFL',
        def: 'restrictive fire line',
        src: 'JP 1-02'
    },
    {
        abbr: 'RFP',
        def: 'request for proposal',
        src: 'JP 1-02'
    },
    {
        abbr: 'RFS',
        def: 'request for service; request for support',
        src: '1-02'
    },
    {
        abbr: 'RFW',
        def: 'request for waiver',
        src: 'JP 1-02'
    },
    {
        abbr: 'RG',
        def: 'reconstitution group',
        src: 'JP 1-02'
    },
    {
        abbr: 'RGR',
        def: 'Rangers',
        src: 'JP 1-02'
    },
    {
        abbr: 'RGS',
        def: 'remote geospatial intelligence services',
        src: '1-02'
    },
    {
        abbr: 'RH',
        def: 'reentry home',
        src: 'JP 1-02'
    },
    {
        abbr: 'Rh',
        def: 'Rhesus',
        src: '1-02'
    },
    {
        abbr: 'RHIB',
        def: 'rigid hull inflatable boat',
        src: '1-02'
    },
    {
        abbr: 'RI',
        def: 'Refugees International; routing indicator',
        src: '1-02'
    },
    {
        abbr: 'RIB',
        def: 'rubberized inflatable boat',
        src: 'JP 1-02'
    },
    {
        abbr: 'RIC',
        def: 'routing indicator code',
        src: 'JP 1-02'
    },
    {
        abbr: 'RICO',
        def: 'regional interface control officer',
        src: '1-02'
    },
    {
        abbr: 'RIG',
        def: 'recognition identification group\t',
        src: 'JP 1-02'
    },
    {
        abbr: 'RIK',
        def: 'replacement in kind',
        src: '1-02'
    },
    {
        abbr: 'RIMS',
        def: 'registrant information management system',
        src: 'JP 1-02'
    },
    {
        abbr: 'RIP',
        def: 'register of intelligence publications',
        src: 'JP 1-02'
    },
    {
        abbr: 'RIS',
        def: 'reconnaissance information system',
        src: 'JP 1-02'
    },
    {
        abbr: 'RISOP',
        def: 'red integrated strategic offensive plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'RISTA',
        def: 'reconnaissance, intelligence, surveillance, and target acquisition',
        src: 'JP 1-02'
    },
    {
        abbr: 'RIT',
        def: 'remote imagery transceiver',
        src: 'JP 1-02'
    },
    {
        abbr: 'RIVRON',
        def: 'riverine squadron',
        src: '1-02'
    },
    {
        abbr: 'RJTD',
        def: 'reconstitution joint table of distribution',
        src: 'JP 1-02'
    },
    {
        abbr: 'RLD',
        def: 'ready-to-load date',
        src: '1-02'
    },
    {
        abbr: 'RLE',
        def: 'rail liaison element',
        src: 'JP 1-02'
    },
    {
        abbr: 'RLG',
        def: 'regional liaison group; ring laser gyro',
        src: 'JP 1-02'
    },
    {
        abbr: 'RLGM',
        def: 'remote loop group multiplexer',
        src: 'JP 1-02'
    },
    {
        abbr: 'RLGM/CD',
        def: 'remote loop group multiplexer/cable driver',
        src: 'JP 1-02'
    },
    {
        abbr: 'RLP',
        def: 'remote line printer',
        src: 'JP 1-02'
    },
    {
        abbr: 'RM',
        def: 'ramp module; recovery mechanism; resource management; risk management',
        src: '1-02'
    },
    {
        abbr: 'RMC',
        def: 'remote multiplexer combiner; rescue mission commander; Resource Management Committee (CSIF); returned to military control',
        src: 'JP 1-02'
    },
    {
        abbr: 'RMKS',
        def: 'remarks',
        src: 'JP 1-02'
    },
    {
        abbr: 'RMO',
        def: 'regional Marine officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'RMP',
        def: 'religious ministry professional',
        src: 'JP 3-28'
    },
    {
        abbr: 'RMS',
        def: 'requirements management system; root-mean-square',
        src: 'JP 1-02'
    },
    {
        abbr: 'RMT',
        def: 'response management team',
        src: '1-02'
    },
    {
        abbr: 'RMU',
        def: 'receiver matrix unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'RNAV',
        def: 'area navigation',
        src: 'JP 1-02'
    },
    {
        abbr: 'RNP',
        def: 'remote network processor',
        src: 'JP 1-02'
    },
    {
        abbr: 'Ro',
        def: 'search radius rounded to next highest whole number',
        src: 'JP 1-02'
    },
    {
        abbr: 'RO/RO',
        def: 'roll-on/roll-off',
        src: '1-02'
    },
    {
        abbr: 'ROA',
        def: 'restricted operations area',
        src: 'JP 1-02'
    },
    {
        abbr: 'ROC',
        def: 'regional operations center; rehearsal of concept; required operational capability',
        src: '1-02'
    },
    {
        abbr: 'ROCU',
        def: 'remote orderwire control unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'ROE',
        def: 'rules of engagement',
        src: '1-02'
    },
    {
        abbr: 'ROEX',
        def: 'rules of engagement exercise',
        src: 'JP 1-02'
    },
    {
        abbr: 'ROG',
        def: 'railhead operations group',
        src: 'JP 1-02'
    },
    {
        abbr: 'ROICC',
        def: 'resident officer in charge of construction',
        src: '1-02'
    },
    {
        abbr: 'ROK',
        def: 'Republic of Korea',
        src: 'JP 1-02'
    },
    {
        abbr: 'ROM',
        def: 'read-only memory; restriction of movement; rough order of magnitude',
        src: '1-02'
    },
    {
        abbr: 'ROMO',
        def: 'range of military operations',
        src: '1-02'
    },
    {
        abbr: 'RON',
        def: 'remain overnight',
        src: 'JP 1-02'
    },
    {
        abbr: 'ROS',
        def: 'reduced operating status',
        src: '1-02'
    },
    {
        abbr: 'ROTC',
        def: 'Reserve Officer Training Corps',
        src: 'JP 1-02'
    },
    {
        abbr: 'ROTHR',
        def: 'relocatable over-the-horizon backscatter radar (USN)',
        src: 'JP 1-02'
    },
    {
        abbr: 'ROWPU',
        def: 'reverse osmosis water purification unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'ROZ',
        def: 'restricted operations zone',
        src: '1-02'
    },
    {
        abbr: 'RP',
        def: 'reconstitution priority; release point (road); religious program specialist; retained personnel',
        src: '1-02'
    },
    {
        abbr: 'RPG',
        def: 'rocket propelled grenade',
        src: '1-02'
    },
    {
        abbr: 'RPM',
        def: 'revolutions per minute',
        src: '1-02'
    },
    {
        abbr: 'RPO',
        def: 'rendezvous and proximity operations',
        src: '1-02'
    },
    {
        abbr: 'RPOE',
        def: 'rapid port opening element',
        src: '1-02'
    },
    {
        abbr: 'RPPO',
        def: 'Requirements, Plans, and Policy Office',
        src: 'JP 2-01'
    },
    {
        abbr: 'RPT',
        def: 'report',
        src: 'JP 1-02'
    },
    {
        abbr: 'RPTOR',
        def: 'reporting organization',
        src: 'JP 1-02'
    },
    {
        abbr: 'RPV',
        def: 'remotely piloted vehicle',
        src: 'JP 1-02'
    },
    {
        abbr: 'RQMT',
        def: 'requirement',
        src: 'JP 1-02'
    },
    {
        abbr: 'RQT',
        def: 'rapid query tool',
        src: '1-02'
    },
    {
        abbr: 'RR',
        def: 'reattack recommendation',
        src: 'JP 1-02'
    },
    {
        abbr: 'RRC',
        def: 'regional reporting center',
        src: 'JP 1-02'
    },
    {
        abbr: 'RRCC',
        def: 'regional response coordination center',
        src: 'JP 3-41'
    },
    {
        abbr: 'RRDF',
        def: 'roll-on/roll-off discharge facility',
        src: '1-02'
    },
    {
        abbr: 'RRF',
        def: 'rapid reaction force; rapid response force; Ready Reserve Fleet; Ready Reserve Force',
        src: '1-02'
    },
    {
        abbr: 'RRPP',
        def: 'rapid response planning process',
        src: 'JP 1-02'
    },
    {
        abbr: 'RS',
        def: 'rate synthesizer; religious support; requirement submission',
        src: '1-02'
    },
    {
        abbr: 'RSA',
        def: 'retrograde storage area',
        src: 'JP 1-02'
    },
    {
        abbr: 'RSC',
        def: 'red station clock; regional service center; rescue sub-center',
        src: 'JP 1-02'
    },
    {
        abbr: 'RSD',
        def: 'reporting of supply discrepancy',
        src: 'JP 1-02'
    },
    {
        abbr: 'RSE',
        def: 'retrograde support element',
        src: 'JP 1-02'
    },
    {
        abbr: 'RSG',
        def: 'reference signal generator',
        src: 'JP 1-02'
    },
    {
        abbr: 'RSI',
        def: 'rationalization, standardization, and interoperability',
        src: '1-02'
    },
    {
        abbr: 'RSL',
        def: 'received signal level',
        src: 'JP 1-02'
    },
    {
        abbr: 'RSN',
        def: 'role specialist nation',
        src: '1-02'
    },
    {
        abbr: 'RSO',
        def: 'reception, staging, and onward movement; regional security officer; remote split operations',
        src: '1-02'
    },
    {
        abbr: 'RSOC',
        def: 'regional signals intelligence (SIGINT) operations center',
        src: 'JP 1-02'
    },
    {
        abbr: 'RSOI',
        def: 'reception, staging, onward movement, and integration',
        src: '1-02'
    },
    {
        abbr: 'RSP',
        def: 'recognized surface picture; Red Switch Project (DOD); religious support policy',
        src: '1-02'
    },
    {
        abbr: 'RSPA',
        def: 'Research and Special Programs Administration',
        src: 'JP 1-02'
    },
    {
        abbr: 'RSS',
        def: 'radio subsystem; really simple syndication; remote sensors subsystem; root-sum-squared',
        src: '1-02'
    },
    {
        abbr: 'RSSC',
        def: 'regional satellite communications support center; regional satellite support cell; regional signals intelligence (SIGINT) support center (NSA); regional space support center',
        src: '1-02'
    },
    {
        abbr: 'RSSC-LO',
        def: 'regional satellite communications support center liaison officer; regional space support center liaison officer',
        src: '1-02'
    },
    {
        abbr: 'RST',
        def: 'religious support team',
        src: '1-02'
    },
    {
        abbr: 'RSTA',
        def: 'reconnaissance, surveillance, and target acquisition',
        src: 'JP 1-02'
    },
    {
        abbr: 'RSTV',
        def: 'real-time synthetic video',
        src: 'JP 1-02'
    },
    {
        abbr: 'RSU',
        def: 'rapid support unit; rear support unit; remote switching unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'RT',
        def: 'recovery team; remote terminal; rough terrain',
        src: '1-02'
    },
    {
        abbr: 'RTA',
        def: 'residual threat assessment',
        src: 'JP 1-02'
    },
    {
        abbr: 'RTB',
        def: 'return to base',
        src: 'JP 1-02'
    },
    {
        abbr: 'RTCC',
        def: 'rough terrain container crane',
        src: '1-02'
    },
    {
        abbr: 'RTCH',
        def: 'rough terrain container handler',
        src: '1-02'
    },
    {
        abbr: 'RTD',
        def: 'returned to duty',
        src: 'JP 1-02'
    },
    {
        abbr: 'RTF',
        def: 'regional task force; return to force',
        src: 'JP 1-02'
    },
    {
        abbr: 'RTFL',
        def: 'rough terrain forklift',
        src: 'JP 1-02'
    },
    {
        abbr: 'RTG',
        def: 'radar target graphic',
        src: 'JP 1-02'
    },
    {
        abbr: 'RTL',
        def: 'restricted target list',
        src: '1-02'
    },
    {
        abbr: 'RTLP',
        def: 'receiver test level point',
        src: 'JP 1-02'
    },
    {
        abbr: 'RTM',
        def: 'real-time mode',
        src: 'JP 1-02'
    },
    {
        abbr: 'RTOC',
        def: 'rear tactical operations center',
        src: 'JP 1-02'
    },
    {
        abbr: 'RTS',
        def: 'remote transfer switch',
        src: 'JP 1-02'
    },
    {
        abbr: 'RTTY',
        def: 'radio teletype',
        src: 'JP 1-02'
    },
    {
        abbr: 'RU',
        def: 'release unit; rescue unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'RUF',
        def: 'rules for the use of force',
        src: '1-02'
    },
    {
        abbr: 'RUIC',
        def: 'Reserve unit identification number',
        src: 'JP 1-02'
    },
    {
        abbr: 'RUSCOM',
        def: 'rapid ultrahigh frequency (UHF) satellite communications',
        src: 'JP 1-02'
    },
    {
        abbr: 'RV',
        def: 'long-range seagoing rescue vessel; rekeying variable; rendezvous',
        src: '1-02'
    },
    {
        abbr: 'RVR',
        def: 'runway visibility recorder',
        src: 'JP 1-02'
    },
    {
        abbr: 'RVT',
        def: 'remote video terminal',
        src: 'JP 1-02'
    },
    {
        abbr: 'RW',
        def: 'rotary-wing',
        src: '1-02'
    },
    {
        abbr: 'RWCM',
        def: 'regional wartime construction manager',
        src: 'JP 1-02'
    },
    {
        abbr: 'RWR',
        def: 'radar warning receiver',
        src: 'JP 1-02'
    },
    {
        abbr: 'RWS',
        def: 'rawinsonde subsystem',
        src: 'JP 1-02'
    },
    {
        abbr: 'RX',
        def: 'receive; receiver',
        src: 'JP 1-02'
    },
    {
        abbr: 'RZ',
        def: 'return-to-zero',
        src: '1-02'
    },
    {
        abbr: 'S&F',
        def: 'store-and-forward',
        src: 'JP 1-02'
    },
    {
        abbr: 'S&R',
        def: 'search and recovery',
        src: 'JP 4-06'
    },
    {
        abbr: 'S&T',
        def: 'science and technology; scientific and technical',
        src: '1-02'
    },
    {
        abbr: 'S&TI',
        def: 'scientific and technical intelligence',
        src: '1-02'
    },
    {
        abbr: 'S-1',
        def: 'battalion or brigade manpower and personnel staff officer (Marine Corps battalion or regiment)',
        src: '1-02'
    },
    {
        abbr: 'S-2',
        def: 'battalion or brigade intelligence staff officer (Army, Marine Corps battalion or regiment)',
        src: '1-02'
    },
    {
        abbr: 'S-3',
        def: 'battalion or brigade operations staff officer (Army; Marine Corps battalion or regiment)',
        src: '1-02'
    },
    {
        abbr: 'S-4',
        def: 'battalion or brigade logistics staff officer (Army; Marine Corps battalion or regiment)',
        src: 'JP 1-02'
    },
    {
        abbr: 'S-Team',
        def: 'staff augmentation team',
        src: '1-02'
    },
    {
        abbr: 'S/CRS',
        def: 'Office of the Coordinator for Reconstruction and Stabilization (DOS)',
        src: '1-02'
    },
    {
        abbr: 'S/CT',
        def: 'Office of the Coordinator for Counterterrorism (DOS)',
        src: '1-02'
    },
    {
        abbr: 'S/EWCC',
        def: 'signals intelligence/electronic warfare coordination center',
        src: 'JP 1-02'
    },
    {
        abbr: 'S/N',
        def: 'signal to noise',
        src: 'JP 1-02'
    },
    {
        abbr: 'S/RM',
        def: 'sustainment, restoration, and modernization',
        src: '1-02'
    },
    {
        abbr: 'S/RTF',
        def: 'search and recovery task force',
        src: 'JP 1-02'
    },
    {
        abbr: 'S/S',
        def: 'steamship',
        src: 'JP 1-02'
    },
    {
        abbr: 'S/T',
        def: 'short ton',
        src: 'JP 1-02'
    },
    {
        abbr: 'S/V',
        def: 'sailboat',
        src: 'JP 1-02'
    },
    {
        abbr: 'SA',
        def: 'security assistance; selective availability (GPS); senior adviser; situational awareness; staging area; stand-alone switch',
        src: '1-02'
    },
    {
        abbr: 'SAA',
        def: 'senior airfield authority',
        src: '1-02'
    },
    {
        abbr: 'SAAFR',
        def: 'standard use Army aircraft flight route',
        src: 'JP 1-02'
    },
    {
        abbr: 'SAAM',
        def: 'special assignment airlift mission',
        src: '1-02'
    },
    {
        abbr: 'SAB',
        def: 'scientific advisory board (USAF)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SABER',
        def: 'situational awareness beacon with reply',
        src: 'JP 1-02'
    },
    {
        abbr: 'SAC',
        def: 'special actions cell; special agent in charge; supporting arms coordinator',
        src: '1-02'
    },
    {
        abbr: 'SACC',
        def: 'supporting arms coordination center (USMC)',
        src: '1-02'
    },
    {
        abbr: 'SACEUR',
        def: 'Supreme Allied Commander, Europe (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SACLANT',
        def: 'Supreme Allied Command, Atlantic',
        src: 'JP 1-02'
    },
    {
        abbr: 'SACS',
        def: 'secure telephone unit (STU) access control system',
        src: 'JP 1-02'
    },
    {
        abbr: 'SACT',
        def: 'Supreme Allied Commander Transformation',
        src: 'JP 3-08'
    },
    {
        abbr: 'SADC',
        def: 'sector air defense commander',
        src: '1-02'
    },
    {
        abbr: 'SADL',
        def: 'situation awareness data link',
        src: '1-02'
    },
    {
        abbr: 'SADO',
        def: 'senior air defense officer',
        src: '1-02'
    },
    {
        abbr: 'SAF',
        def: 'Secretary of the Air Force',
        src: 'JP 1-02'
    },
    {
        abbr: 'SAFE',
        def: 'secure analyst file environment; selected area for evasion; sexual assault forensic examination',
        src: '1-02'
    },
    {
        abbr: 'SAFE-CP',
        def: 'selected area for evasion-contact point',
        src: 'JP 1-02'
    },
    {
        abbr: 'SAFWIN',
        def: 'secure Air Force weather information network',
        src: 'JP 1-02'
    },
    {
        abbr: 'SAG',
        def: 'surface action group',
        src: 'JP 1-02'
    },
    {
        abbr: 'SAI',
        def: 'sea-to-air interface; single agency item',
        src: 'JP 1-02'
    },
    {
        abbr: 'SAL',
        def: 'small arms locker',
        src: 'JP 1-02'
    },
    {
        abbr: 'SAL-GP',
        def: 'semiactive laser-guided projectile (USN)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SALM',
        def: 'single-anchor leg mooring',
        src: '1-02'
    },
    {
        abbr: 'SALT',
        def: 'supporting arms liaison team',
        src: 'JP 1-02'
    },
    {
        abbr: 'SALTS',
        def: 'streamlined automated logistics transfer system; streamlined automated logistics transmission system',
        src: 'JP 1-02'
    },
    {
        abbr: 'SALUTE',
        def: 'size, activity, location, unit, time, and equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'SAM',
        def: 'special airlift mission; surface-to-air missile',
        src: '1-02'
    },
    {
        abbr: 'SAMM',
        def: 'security assistance management manual',
        src: 'JP 1-02'
    },
    {
        abbr: 'SAMS',
        def: 'School of Advanced Military Studies',
        src: 'JP 1-02'
    },
    {
        abbr: 'SAO',
        def: 'security assistance office; security assistance officer; selected attack option',
        src: '1-02'
    },
    {
        abbr: 'SAOC',
        def: 'sector air operations center',
        src: 'JP 1-02'
    },
    {
        abbr: 'SAP',
        def: 'special access program',
        src: 'JP 1-02'
    },
    {
        abbr: 'SAPI',
        def: 'special access program for intelligence',
        src: 'JP 1-02'
    },
    {
        abbr: 'SAPO',
        def: 'subarea petroleum office',
        src: '1-02'
    },
    {
        abbr: 'SAPR',
        def: 'sexual assault prevention and response',
        src: '1-02'
    },
    {
        abbr: 'SAR',
        def: 'satellite access request; search and rescue; site access request; special access requirement; suspicious activity report; synthetic aperture radar',
        src: '1-02'
    },
    {
        abbr: 'SARC',
        def: 'sexual assault response coordinator; surveillance and reconnaissance center',
        src: 'JP 1-02'
    },
    {
        abbr: 'SARDOT',
        def: 'search and rescue point',
        src: '1-02'
    },
    {
        abbr: 'SARIR',
        def: 'search and rescue incident report',
        src: 'JP 1-02'
    },
    {
        abbr: 'SARMIS',
        def: 'search and rescue management information system',
        src: 'JP 1-02'
    },
    {
        abbr: 'SARNEG',
        def: 'search and rescue numerical encryption group',
        src: 'JP 3-50'
    },
    {
        abbr: 'SAROPS',
        def: 'Search and Rescue Optimal Planning System',
        src: '1-02'
    },
    {
        abbr: 'SARREQ',
        def: 'search and rescue request',
        src: 'JP 1-02'
    },
    {
        abbr: 'SARSAT',
        def: 'search and rescue satellite-aided tracking',
        src: '1-02'
    },
    {
        abbr: 'SARSIT',
        def: 'search and rescue situation summary report',
        src: 'JP 1-02'
    },
    {
        abbr: 'SARTEL',
        def: 'search and rescue (SAR) telephone (private hotline)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SARTF',
        def: 'search and rescue task force',
        src: 'JP 1-02'
    },
    {
        abbr: 'SAS',
        def: 'sealed authenticator system; special ammunition storage',
        src: 'JP 1-02'
    },
    {
        abbr: 'SASP',
        def: 'special ammunition supply point',
        src: 'JP 1-02'
    },
    {
        abbr: 'SASS',
        def: 'supporting arms special staff',
        src: 'JP 1-02'
    },
    {
        abbr: 'SASSY',
        def: 'supported activities supply systems',
        src: 'JP 1-02'
    },
    {
        abbr: 'SAT',
        def: 'satellite',
        src: '1-02'
    },
    {
        abbr: 'SATCOM',
        def: 'satellite communications',
        src: '1-02'
    },
    {
        abbr: 'SAW',
        def: 'surface acoustic wave',
        src: 'JP 1-02'
    },
    {
        abbr: 'SB',
        def: 'standby base',
        src: 'JP 1-02'
    },
    {
        abbr: 'SBCT',
        def: 'Stryker brigade combat team',
        src: 'JP 3-34'
    },
    {
        abbr: 'SBL',
        def: 'space-based laser',
        src: 'JP 1-02'
    },
    {
        abbr: 'SBPO',
        def: 'Service blood program officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'SBRPT',
        def: 'subordinate reporting organization',
        src: 'JP 1-02'
    },
    {
        abbr: 'SBS',
        def: 'senior battle staff; support battle staff',
        src: 'JP 1-02'
    },
    {
        abbr: 'SBSO',
        def: 'sustainment brigade special operations',
        src: 'JP 3-05.1'
    },
    {
        abbr: 'SBSS',
        def: 'science-based stockpile stewardship',
        src: 'JP 1-02'
    },
    {
        abbr: 'SBU',
        def: 'sensitive but unclassified; special boat unit',
        src: '1-02'
    },
    {
        abbr: 'SC',
        def: 'sea current; search and rescue coordinator; security cooperation; station clock; strategic communication',
        src: '1-02'
    },
    {
        abbr: 'SC ATLANTIC',
        def: 'Strategic Command, Atlantic (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SC EUROPE',
        def: 'Strategic Command, Europe (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SCA',
        def: 'sociocultural analysis; space coordinating authority; support to civil administration',
        src: '1-02'
    },
    {
        abbr: 'SCAR',
        def: 'strike coordination and reconnaissance',
        src: '1-02'
    },
    {
        abbr: 'SCAS',
        def: 'stability control augment system',
        src: 'JP 1-02'
    },
    {
        abbr: 'SCATANA',
        def: 'security control of air traffic and navigation aids',
        src: 'JP 1-02'
    },
    {
        abbr: 'SCATMINE',
        def: 'scatterable mine',
        src: 'JP 3-15'
    },
    {
        abbr: 'SCATMINEWARN',
        def: 'scatterable minefield warning',
        src: 'JP 1-02'
    },
    {
        abbr: 'SCC',
        def: 'security classification code; service cryptologic component; shipping coordination center; Standards Coordinating Committee',
        src: '1-02'
    },
    {
        abbr: 'SCC-WMD',
        def: 'United States Strategic Command Center for Combating Weapons of Mass Destruction ',
        src: '1-02'
    },
    {
        abbr: 'SCDL',
        def: 'surveillance control data link',
        src: 'JP 1-02'
    },
    {
        abbr: 'SCE',
        def: 'Service cryptologic element',
        src: 'JP 1-02'
    },
    {
        abbr: 'SCF(UK)',
        def: 'Save the Children Fund (United Kingdom)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SCF(US)',
        def: 'Save the Children Federation (United States)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SCG',
        def: 'Security Cooperation Guidance; switching controller group',
        src: 'JP 1-02'
    },
    {
        abbr: 'SCHBT',
        def: 'shape, clear, hold, build, and transition',
        src: '1-02'
    },
    {
        abbr: 'SCI',
        def: 'security and counterintelligence interviews; sensitive compartmented information',
        src: '1-02'
    },
    {
        abbr: 'SCIF',
        def: 'sensitive compartmented information facility',
        src: '1-02'
    },
    {
        abbr: 'SCL',
        def: 'standard conventional load'
    },
    {
        abbr: 'SCM',
        def: 'security countermeasure; Service container manager',
        src: '1-02'
    },
    {
        abbr: 'SCMP',
        def: 'strategic command, control, and communications (C3) master plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'SCNE',
        def: 'self-contained navigation equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'SCO',
        def: 'secondary control officer; security cooperation organization; senior contracting official; state coordinating officer',
        src: '1-02'
    },
    {
        abbr: 'SCOC',
        def: 'systems control and operations concept',
        src: 'JP 1-02'
    },
    {
        abbr: 'SCONUM',
        def: 'ship control number',
        src: 'JP 1-02'
    },
    {
        abbr: 'SCP',
        def: 'secure conferencing project; security cooperation plan; service control point; system change proposal',
        src: '1-02'
    },
    {
        abbr: 'SCPT',
        def: 'strategic connectivity performance test',
        src: 'JP 1-02'
    },
    {
        abbr: 'SCRB',
        def: 'software configuration review board',
        src: 'JP 1-02'
    },
    {
        abbr: 'SCT',
        def: 'shipping coordination team; single channel transponder',
        src: 'JP 1-02'
    },
    {
        abbr: 'SCT-UR',
        def: 'single channel transponder ultrahigh frequency (UHF) receiver',
        src: 'JP 1-02'
    },
    {
        abbr: 'SCTIS',
        def: 'single channel transponder injection system',
        src: 'JP 1-02'
    },
    {
        abbr: 'SCTS',
        def: 'single channel transponder system',
        src: 'JP 1-02'
    },
    {
        abbr: 'SCUD',
        def: 'surface-to-surface missile system',
        src: 'JP 1-02'
    },
    {
        abbr: 'SD',
        def: 'strategy division',
        src: '1-02'
    },
    {
        abbr: 'SDA',
        def: 'senior development advisor; Seventh-Day Adventist (ADRA)',
        src: '1-02'
    },
    {
        abbr: 'SDB',
        def: 'Satellite Communications Database',
        src: '1-02'
    },
    {
        abbr: 'SDDC',
        def: 'Surface Deployment and Distribution Command',
        src: '1-02'
    },
    {
        abbr: 'SDDCTEA',
        def: 'Surface Deployment and Distribution Command Transportation Engineering Agency',
        src: '1-02'
    },
    {
        abbr: 'SDF',
        def: 'self defense force',
        src: 'JP 1-02'
    },
    {
        abbr: 'SDIO',
        def: 'Strategic Defense Initiative Organization',
        src: 'JP 1-02'
    },
    {
        abbr: 'SDLS',
        def: 'satellite data link standards',
        src: 'JP 1-02'
    },
    {
        abbr: 'SDMX',
        def: 'space division matrix',
        src: 'JP 1-02'
    },
    {
        abbr: 'SDN',
        def: 'system development notification',
        src: 'JP 1-02'
    },
    {
        abbr: 'SDNRIU',
        def: 'secure digital net radio interface unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'SDO',
        def: 'senior defense official; ship\'s debarkation officer',
        src: '1-02'
    },
    {
        abbr: 'SDO/DATT',
        def: 'senior defense official/defense attaché',
        src: '1-02'
    },
    {
        abbr: 'SDP',
        def: 'strategic distribution platform',
        src: '1-02'
    },
    {
        abbr: 'SDR',
        def: 'system design review',
        src: 'JP 1-02'
    },
    {
        abbr: 'SDSG',
        def: 'space division switching group',
        src: 'JP 1-02'
    },
    {
        abbr: 'SDSM',
        def: 'space division switching matrix',
        src: 'JP 1-02'
    },
    {
        abbr: 'SDV',
        def: 'SEAL team delivery vehicle; submerged delivery vehicle',
        src: '1-02'
    },
    {
        abbr: 'SDZ',
        def: 'self-defense zone',
        src: '1-02'
    },
    {
        abbr: 'SE',
        def: 'site exploitation; spherical error',
        src: '1-02'
    },
    {
        abbr: 'SEA',
        def: 'Southeast Asia',
        src: 'JP 3-34'
    },
    {
        abbr: 'SEABEE',
        def: 'sea barge',
        src: '1-02'
    },
    {
        abbr: 'Seabee',
        def: 'Navy construction engineer',
        src: '1-02'
    },
    {
        abbr: 'SEAD',
        def: 'suppression of enemy air defenses',
        src: '1-02'
    },
    {
        abbr: 'SEC',
        def: 'submarine element coordinator',
        src: 'JP 1-02'
    },
    {
        abbr: 'SECAF',
        def: 'Secretary of the Air Force',
        src: 'JP 1-02'
    },
    {
        abbr: 'SECARMY',
        def: 'Secretary of the Army',
        src: '1-02'
    },
    {
        abbr: 'SecDef',
        def: 'Secretary of Defense',
        src: '1-02'
    },
    {
        abbr: 'SECDHS',
        def: 'Secretary of the Department of Homeland Security',
        src: 'JP 4-05'
    },
    {
        abbr: 'SECHS',
        def: 'Secretary of Homeland Security',
        src: '1-02'
    },
    {
        abbr: 'SECNAV',
        def: 'Secretary of the Navy',
        src: 'JP 1-02'
    },
    {
        abbr: 'SECNAVINST',
        def: 'Secretary of the Navy instruction',
        src: 'JP 1-02'
    },
    {
        abbr: 'SECOMP',
        def: 'secure en route communications package',
        src: 'JP 1-02'
    },
    {
        abbr: 'SECORD',
        def: 'secure cord switchboard',
        src: 'JP 1-02'
    },
    {
        abbr: 'SECRA',
        def: 'secondary radar data only',
        src: 'JP 1-02'
    },
    {
        abbr: 'SECSTATE',
        def: 'Secretary of State',
        src: '1-02'
    },
    {
        abbr: 'SECTRANS',
        def: 'Secretary of Transportation',
        src: '1-02'
    },
    {
        abbr: 'SED',
        def: 'signals external data',
        src: 'JP 1-02'
    },
    {
        abbr: 'SEDAS',
        def: 'spurious emission detection acquisition system',
        src: 'JP 1-02'
    },
    {
        abbr: 'SEF',
        def: 'sealift enhancement feature',
        src: 'JP 1-02'
    },
    {
        abbr: 'SEI',
        def: 'specific emitter identification',
        src: 'JP 1-02'
    },
    {
        abbr: 'SEL',
        def: 'senior enlisted leader',
        src: '1-02'
    },
    {
        abbr: 'SEL REL',
        def: 'selective release',
        src: 'JP 1-02'
    },
    {
        abbr: 'SELRES',
        def: 'Selected Reserve',
        src: 'JP 1-02'
    },
    {
        abbr: 'SEMA',
        def: 'special electronic mission aircraft',
        src: 'JP 1-02'
    },
    {
        abbr: 'SEMS',
        def: 'standard embarkation management system',
        src: 'JP 1-02'
    },
    {
        abbr: 'SEO/SEP',
        def: 'special enforcement operation/special enforcement program',
        src: 'JP 1-02'
    },
    {
        abbr: 'SEP',
        def: 'signal entrance panel; spherical error probable',
        src: 'JP 1-02'
    },
    {
        abbr: 'SEPLO',
        def: 'state emergency preparedness liaison officer',
        src: '1-02'
    },
    {
        abbr: 'SERE',
        def: 'survival, evasion, resistance, and escape',
        src: '1-02'
    },
    {
        abbr: 'SERER',
        def: 'survival, evasion, resistance, escape, recovery',
        src: 'JP 1-02'
    },
    {
        abbr: 'SES',
        def: 'senior executive service',
        src: 'JP 3-07.2'
    },
    {
        abbr: 'SETA',
        def: 'system engineering and technical assistance',
        src: 'JP 1-02'
    },
    {
        abbr: 'SEW',
        def: 'shared early warning',
        src: '1-02'
    },
    {
        abbr: 'SEWG',
        def: 'Special Events Working Group',
        src: 'JP 3-28'
    },
    {
        abbr: 'SEWOC',
        def: 'signals intelligence/electronic warfare operations centre (NATO)',
        src: '1-02'
    },
    {
        abbr: 'SEWS',
        def: 'satellite early warning system',
        src: 'JP 1-02'
    },
    {
        abbr: 'SF',
        def: 'security force; security forces (Air Force or Navy); single frequency; special forces; standard form',
        src: '1-02'
    },
    {
        abbr: 'SFA',
        def: 'security force assistance',
        src: '1-02'
    },
    {
        abbr: 'SFAF',
        def: 'standard frequency action format',
        src: '1-02'
    },
    {
        abbr: 'SFAT',
        def: 'spectrum flyaway team',
        src: '1-02'
    },
    {
        abbr: 'SFC',
        def: 'single-fuel concept',
        src: '1-02'
    },
    {
        abbr: 'SFCP',
        def: 'shore fire control party',
        src: 'JP 1-02'
    },
    {
        abbr: 'SFG',
        def: 'security forces group; special forces group',
        src: 'JP 1-02'
    },
    {
        abbr: 'SFI',
        def: 'spectral composition',
        src: 'JP 1-02'
    },
    {
        abbr: 'SFLEO',
        def: 'senior federal law enforcement official',
        src: 'JP 3-28'
    },
    {
        abbr: 'SFMS',
        def: 'special forces medical sergeant',
        src: 'JP 1-02'
    },
    {
        abbr: 'SFOD-A/B/C',
        def: 'special forces operational detachment-A/B/C',
        src: 'JP 1-02'
    },
    {
        abbr: 'SFOR',
        def: 'Stabilization Force',
        src: 'JP 1-02'
    },
    {
        abbr: 'SFS',
        def: 'security forces squadron',
        src: 'JP 1-02'
    },
    {
        abbr: 'SG',
        def: 'steering group; strike group; supergroup; surgeon general',
        src: '1-02'
    },
    {
        abbr: 'SGEMP',
        def: 'system-generated electromagnetic pulse',
        src: 'JP 1-02'
    },
    {
        abbr: 'SGS',
        def: 'strategic guidance statement',
        src: '1-02'
    },
    {
        abbr: 'SGSA',
        def: 'squadron group systems advisor',
        src: 'JP 1-02'
    },
    {
        abbr: 'SGXM',
        def: 'Headquarters, Air Mobility Command/Surgeon',
        src: '1-02'
    },
    {
        abbr: 'SHAPE',
        def: 'Supreme Headquarters Allied Powers, Europe',
        src: 'JP 1-02'
    },
    {
        abbr: 'SHD',
        def: 'special handling designator',
        src: 'JP 1-02'
    },
    {
        abbr: 'SHF',
        def: 'super-high frequency',
        src: '1-02'
    },
    {
        abbr: 'SHORAD',
        def: 'short-range air defense',
        src: '1-02'
    },
    {
        abbr: 'SHORADEZ',
        def: 'short-range air defense engagement zone',
        src: '1-02'
    },
    {
        abbr: 'SI',
        def: 'special intelligence; United States Strategic Command strategic instruction',
        src: '1-02'
    },
    {
        abbr: 'SIA',
        def: 'station of initial assignment',
        src: 'JP 1-02'
    },
    {
        abbr: 'SIAGL',
        def: 'survey instrument azimuth gyroscope lightweight',
        src: 'JP 1-02'
    },
    {
        abbr: 'SIC',
        def: 'subject identification code; supporting intelligence center',
        src: '1-02'
    },
    {
        abbr: 'SICO',
        def: 'sector interface control officer',
        src: '1-02'
    },
    {
        abbr: 'SID',
        def: 'standard instrument departure',
        src: '1-02'
    },
    {
        abbr: 'SIDAC',
        def: 'single integrated damage analysis capability',
        src: 'JP 1-02'
    },
    {
        abbr: 'SIDL',
        def: 'standard intelligence documents list',
        src: 'JP 1-02'
    },
    {
        abbr: 'SIDO',
        def: 'senior intelligence duty officer',
        src: '1-02'
    },
    {
        abbr: 'SIDS',
        def: 'secondary imagery dissemination system',
        src: 'JP 1-02'
    },
    {
        abbr: 'SIF',
        def: 'selective identification feature; strategic internment facility',
        src: 'JP 1-02'
    },
    {
        abbr: 'SIG',
        def: 'signal',
        src: 'JP 1-02'
    },
    {
        abbr: 'SIGINT',
        def: 'signals intelligence',
        src: '1-02'
    },
    {
        abbr: 'SIGSEC',
        def: 'signal security',
        src: 'JP 1-02'
    },
    {
        abbr: 'SII',
        def: 'statement of intelligence interest',
        src: '1-02'
    },
    {
        abbr: 'SIM',
        def: 'system impact message',
        src: '1-02'
    },
    {
        abbr: 'SIMLM',
        def: 'single integrated medical logistics management; single integrated medical logistics manager',
        src: '1-02'
    },
    {
        abbr: 'SINCGARS',
        def: 'single-channel ground and airborne radio system',
        src: 'JP 1-02'
    },
    {
        abbr: 'SINS',
        def: 'ship\'s inertial navigation system',
        src: 'JP 1-02'
    },
    {
        abbr: 'SIO',
        def: 'senior intelligence officer',
        src: '1-02'
    },
    {
        abbr: 'SIOC',
        def: 'Strategic Information and Operations Center (FBI)',
        src: '1-02'
    },
    {
        abbr: 'SIOP',
        def: 'Single Integrated Operational Plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'SIOP-ESI',
        def: 'Single Integrated Operational Plan-Extremely Sensitive Information',
        src: 'JP 1-02'
    },
    {
        abbr: 'SIPRNET',
        def: 'SECRET Internet Protocol Router Network',
        src: '1-02'
    },
    {
        abbr: 'SIR',
        def: 'serious incident report; specific information requirement; Strategic Military Intelligence Review',
        src: '1-02'
    },
    {
        abbr: 'SIRADS',
        def: 'stored imagery repository and dissemination system',
        src: 'JP 1-02'
    },
    {
        abbr: 'SIRMO',
        def: 'senior information resources management official',
        src: 'JP 1-02'
    },
    {
        abbr: 'SIS',
        def: 'special information systems',
        src: 'JP 1-02'
    },
    {
        abbr: 'SIT',
        def: 'special interest target',
        src: 'JP 1-02'
    },
    {
        abbr: 'SITREP',
        def: 'situation report',
        src: '1-02'
    },
    {
        abbr: 'SIV',
        def: 'special interest vessel',
        src: 'JP 1-02'
    },
    {
        abbr: 'SJA',
        def: 'staff judge advocate',
        src: '1-02'
    },
    {
        abbr: 'SJFHQ',
        def: 'standing joint force headquarters',
        src: 'JP 3-13'
    },
    {
        abbr: 'SJFHQ(CE)',
        def: 'standing joint force headquarters (core element)',
        src: '1-02'
    },
    {
        abbr: 'SJFHQ-E',
        def: 'standing joint force headquarters - elimination',
        src: '1-02'
    },
    {
        abbr: 'SJFHQ-N',
        def: 'Standing Joint Force Headquarters - North',
        src: '1-02'
    },
    {
        abbr: 'SJS',
        def: 'Secretary, Joint Staff',
        src: 'JP 1-02'
    },
    {
        abbr: 'SKE',
        def: 'station-keeping equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'SL',
        def: 'sea level; switch locator',
        src: 'JP 1-02'
    },
    {
        abbr: 'SLA',
        def: 'service level agreement; special leave accrual ',
        src: '1-02'
    },
    {
        abbr: 'SLAM',
        def: 'stand-off land attack missile',
        src: 'JP 1-02'
    },
    {
        abbr: 'SLBM',
        def: 'submarine-launched ballistic missile',
        src: 'JP 1-02'
    },
    {
        abbr: 'SLC',
        def: 'satellite laser communications; single line concept',
        src: 'JP 1-02'
    },
    {
        abbr: 'SLCM',
        def: 'sea-launched cruise missile',
        src: '1-02'
    },
    {
        abbr: 'SLCP',
        def: 'ship lighterage control point; ship\'s loading characteristics pamphlet',
        src: '1-02'
    },
    {
        abbr: 'SLD',
        def: 'system link designator',
        src: 'JP 1-02'
    },
    {
        abbr: 'SLEP',
        def: 'service life extension program',
        src: 'JP 1-02'
    },
    {
        abbr: 'SLGR',
        def: 'small, lightweight ground receiver (GPS)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SLIT',
        def: 'serial-lot item tracking',
        src: 'JP 1-02'
    },
    {
        abbr: 'SLO',
        def: 'space liaison officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'SLOC',
        def: 'sea line of communications',
        src: '1-02'
    },
    {
        abbr: 'SLRP',
        def: 'survey, liaison, and reconnaissance party',
        src: '1-02'
    },
    {
        abbr: 'SLWT',
        def: 'side loadable warping tug',
        src: '1-02'
    },
    {
        abbr: 'SM',
        def: 'Secretary, Joint Staff, memorandum; Service manager; spectrum management; staff memorandum; system manager',
        src: '1-02'
    },
    {
        abbr: 'SMA',
        def: 'special military information support operations assessment',
        src: '1-02'
    },
    {
        abbr: 'SMART',
        def: 'special medical augmentation response team',
        src: 'JP 1-02'
    },
    {
        abbr: 'SMART-AIT',
        def: 'special medical augmentation response - aeromedical isolation team',
        src: 'JP 3-41'
    },
    {
        abbr: 'SMB',
        def: 'spectrum management branch',
        src: '1-02'
    },
    {
        abbr: 'SMC',
        def: 'midpoint compromise track spacing; search and rescue mission coordinator; system master catalog',
        src: 'JP 1-02'
    },
    {
        abbr: 'SMCA',
        def: 'single manager for conventional ammunition',
        src: '1-02'
    },
    {
        abbr: 'SMCC',
        def: 'strategic mobile command center',
        src: 'JP 1-02'
    },
    {
        abbr: 'SMCM',
        def: 'surface mine countermeasures',
        src: 'JP 1-02'
    },
    {
        abbr: 'SMCOO',
        def: 'spectrum management concept of operations',
        src: 'JP 1-02'
    },
    {
        abbr: 'SMCR',
        def: 'Selected Marine Corps Reserve',
        src: 'JP 1-02'
    },
    {
        abbr: 'SMD',
        def: 'strategic missile defense',
        src: 'JP 1-02'
    },
    {
        abbr: 'SMDC',
        def: 'Space & Missile Defense Command (Army)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SMDC/ARSTRAT',
        def: 'United States Army Space and Missile Defense Command/United States Army Forces Strategic Command',
        src: 'JP 3-14'
    },
    {
        abbr: 'SME',
        def: 'subject matter expert',
        src: '1-02'
    },
    {
        abbr: 'SMEB',
        def: 'significant military exercise brief',
        src: 'JP 1-02'
    },
    {
        abbr: 'SMEO',
        def: 'small end office',
        src: 'JP 1-02'
    },
    {
        abbr: 'SMFT',
        def: 'semi-trailer mounted fabric tank',
        src: 'JP 1-02'
    },
    {
        abbr: 'SMI',
        def: 'security management infrastructure',
        src: 'JP 1-02'
    },
    {
        abbr: 'SMIO',
        def: 'search and rescue (SAR) mission information officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'SMO',
        def: 'senior meteorological and oceanographic officer; strategic mobility office(r); support to military operations',
        src: '1-02'
    },
    {
        abbr: 'SMP',
        def: 'sub-motor pool',
        src: 'JP 1-02'
    },
    {
        abbr: 'SMPT',
        def: 'School of Military Packaging Technology',
        src: 'JP 1-02'
    },
    {
        abbr: 'SMRC',
        def: 'Specialized Medical Response Capabilities',
        src: '1-02'
    },
    {
        abbr: 'SMRI',
        def: 'service message routing indicator',
        src: 'JP 1-02'
    },
    {
        abbr: 'SMS',
        def: 'single mobility system; special military information support operations study',
        src: '1-02'
    },
    {
        abbr: 'SMTP',
        def: 'simple message transfer protocol',
        src: 'JP 1-02'
    },
    {
        abbr: 'SMU',
        def: 'special mission unit; supported activities supply system (SASSY) management unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'SN',
        def: 'serial number',
        src: '1-02'
    },
    {
        abbr: 'SNCO',
        def: 'staff noncommissioned officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'SNF',
        def: 'strategic nuclear forces',
        src: '1-02'
    },
    {
        abbr: 'SNIE',
        def: 'special national intelligence estimates',
        src: 'JP 1-02'
    },
    {
        abbr: 'SNLC',
        def: 'Senior North Atlantic Treaty Organization (NATO) Logisticians Conference',
        src: 'JP 1-02'
    },
    {
        abbr: 'SNM',
        def: 'system notification message',
        src: 'JP 1-02'
    },
    {
        abbr: 'SNOI',
        def: 'signal not of interest',
        src: 'JP 1-02'
    },
    {
        abbr: 'SO',
        def: 'safety observer',
        src: '1-02'
    },
    {
        abbr: 'SOA',
        def: 'separate operating agency; special operations aviation (Army); status of action; sustained operations ashore',
        src: '1-02'
    },
    {
        abbr: 'SOAF',
        def: 'status of action file',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOAGS',
        def: 'special operations air-ground system',
        src: '1-02'
    },
    {
        abbr: 'SOC',
        def: 'security operations center; special operations commander; special operations component',
        src: '1-02'
    },
    {
        abbr: 'SOCA',
        def: 'special operations communications assembly',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOCC',
        def: 'Sector Operations Control Center (NORAD)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOCCE',
        def: 'special operations command and control element',
        src: '1-02'
    },
    {
        abbr: 'SOCCENT',
        def: 'Special Operations Component, United States Central Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOCCET',
        def: 'special operations critical care evacuation team',
        src: 'JP 4-02'
    },
    {
        abbr: 'SOCEUR',
        def: 'Special Operations Component, United States European Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOCEX',
        def: 'special operations capable exercise',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOCJFCOM',
        def: 'Special Operations Command, Joint Forces Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOCM',
        def: 'special operations combat medic',
        src: '1-02'
    },
    {
        abbr: 'SOCOORD',
        def: 'special operations coordination element',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOCP',
        def: 'special operations communication package',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOCPAC',
        def: 'Special Operations Command, Pacific',
        src: '1-02'
    },
    {
        abbr: 'SOCRATES',
        def: 'Special Operations Command, Research, Analysis, and Threat Evaluation System',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOCSOUTH',
        def: 'Special Operations Component, United States Southern Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOD',
        def: 'special operations division; strategy and options decision (Planning, Programming, and Budgeting System)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SODARS',
        def: 'special operations debrief and retrieval system',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOE',
        def: 'special operations executive',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOF',
        def: 'special operations forces; supervisor of flying',
        src: '1-02'
    },
    {
        abbr: 'SOF-CF',
        def: 'special operations forces-conventional forces',
        src: '1-02'
    },
    {
        abbr: 'SOFA',
        def: 'status-of-forces agreement',
        src: '1-02'
    },
    {
        abbr: 'SOFAR',
        def: 'sound fixing and ranging',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOFLAM',
        def: 'special operations laser marker',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOFLE',
        def: 'special operations forces liaison element',
        src: '1-02'
    },
    {
        abbr: 'SOFME',
        def: 'special operations forces medical element',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOFSA',
        def: 'special operations forces support activity',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOG',
        def: 'special operations group',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOI',
        def: 'signal of interest; signal operating instructions; space object identification',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOIC',
        def: 'senior officer of the intelligence community',
        src: '1-02'
    },
    {
        abbr: 'SOJTF',
        def: 'special operations joint task force',
        src: '1-02'
    },
    {
        abbr: 'SOLAS',
        def: 'safety of life at sea',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOLE',
        def: 'special operations liaison element',
        src: '1-02'
    },
    {
        abbr: 'SOLIS',
        def: 'signals intelligence (SIGINT) On-line Information System',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOLL',
        def: 'special operations low-level',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOLO',
        def: 'special operations liaison officer',
        src: '1-02'
    },
    {
        abbr: 'SOM',
        def: 'satellite communications (SATCOM) operational manager; start of message; system operational manager',
        src: '1-02'
    },
    {
        abbr: 'SOMA',
        def: 'status of mission agreement',
        src: '1-02'
    },
    {
        abbr: 'SOMARDS',
        def: 'Standard Operation and Maintenance Army Research and Development System',
        src: '1-02'
    },
    {
        abbr: 'SOMARDS NT',
        def: 'Standard Operation and Maintenance Army Research and Development System Non-Technical',
        src: '1-02'
    },
    {
        abbr: 'SoO',
        def: 'ship of opportunity',
        src: 'JP 3-15'
    },
    {
        abbr: 'SOOP',
        def: 'Center for Operations, Plans, and Policy'
    },
    {
        abbr: 'SOP',
        def: 'standard operating procedure',
        src: '1-02'
    },
    {
        abbr: 'SOR',
        def: 'statement of requirement',
        src: 'JP 1-02'
    },
    {
        abbr: 'SORTIEALOT',
        def: 'sortie allotment message',
        src: '1-02'
    },
    {
        abbr: 'SORTS',
        def: 'Status of Resources and Training System',
        src: '1-02'
    },
    {
        abbr: 'SOS',
        def: 'special operations squadron',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOSB',
        def: 'special operations support battalion',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOSC',
        def: 'special operations support command (theater army)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOSCOM',
        def: 'special operations support command',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOSE',
        def: 'special operations staff element',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOSG',
        def: 'station operations support group',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOSR',
        def: 'suppress, obscure, secure, and reduce',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOST',
        def: 'special operations support team',
        src: '1-02'
    },
    {
        abbr: 'SOTA',
        def: 'signals intelligence operational tasking authority',
        src: '1-02'
    },
    {
        abbr: 'SOTF',
        def: 'special operations task force',
        src: '1-02'
    },
    {
        abbr: 'SOTSE',
        def: 'special operations theater support element',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOUTHAF',
        def: 'Southern Command Air Forces',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOUTHROC',
        def: 'Southern Region Operational Center (USSOUTHCOM)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOW',
        def: 'special operations wing; standoff weapon; statement of work',
        src: 'JP 1-02'
    },
    {
        abbr: 'SOWT',
        def: 'special operations weather team',
        src: 'JP 1-02'
    },
    {
        abbr: 'SP',
        def: 'security police',
        src: 'JP 1-02'
    },
    {
        abbr: 'SPACEAF',
        def: 'Space Air Forces',
        src: 'JP 1-02'
    },
    {
        abbr: 'SPACECON',
        def: 'control of space information',
        src: 'JP 1-02'
    },
    {
        abbr: 'SPCC',
        def: 'ships parts control center (USN)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SPE',
        def: 'senior procurement executive',
        src: '1-02'
    },
    {
        abbr: 'SPEAR',
        def: 'strike protection evaluation and antiair research',
        src: 'JP 1-02'
    },
    {
        abbr: 'SPEC',
        def: 'specified',
        src: 'JP 1-02'
    },
    {
        abbr: 'SPECAT',
        def: 'special category',
        src: 'JP 1-02'
    },
    {
        abbr: 'SPECWAR',
        def: 'special warfare',
        src: 'JP 1-02'
    },
    {
        abbr: 'SPG',
        def: 'Strategic Planning Guidance',
        src: '1-02'
    },
    {
        abbr: 'SPI',
        def: 'special investigative (USAF)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SPINS',
        def: 'special instructions',
        src: '1-02'
    },
    {
        abbr: 'SPINTCOMM',
        def: 'special intelligence communications handling system',
        src: 'JP 1-02'
    },
    {
        abbr: 'SPIREP',
        def: 'spot intelligence report',
        src: '1-02'
    },
    {
        abbr: 'SPLX',
        def: 'simplex',
        src: 'JP 1-02'
    },
    {
        abbr: 'SPM',
        def: 'service postal manager; single point mooring; single port manager',
        src: '1-02'
    },
    {
        abbr: 'SPMAGTF',
        def: 'special purpose Marine air-ground task force',
        src: '1-02'
    },
    {
        abbr: 'SPO',
        def: 'system program office',
        src: 'JP 1-02'
    },
    {
        abbr: 'SPOC',
        def: 'search and rescue (SAR) points of contact; space command operations center',
        src: 'JP 1-02'
    },
    {
        abbr: 'SPOD',
        def: 'seaport of debarkation',
        src: '1-02'
    },
    {
        abbr: 'SPOE',
        def: 'seaport of embarkation',
        src: '1-02'
    },
    {
        abbr: 'SPOT',
        def: 'Synchronized Predeployment and Operational Tracker',
        src: '1-02'
    },
    {
        abbr: 'SPOTREP',
        def: 'spot report',
        src: 'JP 1-02'
    },
    {
        abbr: 'SPP',
        def: 'Security and Prosperity Partnership of North America; shared production program; State Partnership Program (NG)',
        src: '1-02'
    },
    {
        abbr: 'SPR',
        def: 'software problem report',
        src: 'JP 1-02'
    },
    {
        abbr: 'SPRINT',
        def: 'special psychiatric rapid intervention team',
        src: 'JP 1-02'
    },
    {
        abbr: 'SPS',
        def: 'standard positioning service',
        src: '1-02'
    },
    {
        abbr: 'SPSC',
        def: 'system planning and system control',
        src: 'JP 1-02'
    },
    {
        abbr: 'SPTCONF',
        def: 'support confirmation',
        src: 'JP 1-02'
    },
    {
        abbr: 'SPTD CMD',
        def: 'supported command',
        src: 'JP 1-02'
    },
    {
        abbr: 'SPTG CMD',
        def: 'supporting command',
        src: 'JP 1-02'
    },
    {
        abbr: 'SPTREQ',
        def: 'support request',
        src: 'JP 1-02'
    },
    {
        abbr: 'sqft',
        def: 'square feet',
        src: 'JP 1-02'
    },
    {
        abbr: 'SR',
        def: 'special reconnaissance',
        src: '1-02'
    },
    {
        abbr: 'SR-UAV',
        def: 'short-range unmanned aerial vehicle',
        src: 'JP 1-02'
    },
    {
        abbr: 'SRA',
        def: 'specialized-repair activity',
        src: 'JP 1-02'
    },
    {
        abbr: 'SRAM',
        def: 'short-range air-to-surface attack missile; system replacement and modernization',
        src: 'JP 1-02'
    },
    {
        abbr: 'SRB',
        def: 'software release bulletin; system review board (JOPES)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SRBM',
        def: 'short-range ballistic missile',
        src: '1-02'
    },
    {
        abbr: 'SRC',
        def: 'security risk category; service reception center; Single Integrated Operational Plan (SIOP) response cell; standard requirements code; survival recovery center',
        src: 'JP 1-02'
    },
    {
        abbr: 'SRCC',
        def: 'service reserve coordination center',
        src: 'JP 1-02'
    },
    {
        abbr: 'SRF',
        def: 'secure Reserve force',
        src: 'JP 1-02'
    },
    {
        abbr: 'SRG',
        def: 'Seabee readiness group; short-range aircraft',
        src: '1-02'
    },
    {
        abbr: 'SRI',
        def: 'surveillance, reconnaissance, and intelligence (Marine Corps)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SRIG',
        def: 'surveillance, reconnaissance, and intelligence group (USMC)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SROC',
        def: 'Senior Readiness Oversight Council; Southern Region Operational Center, United States Southern Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'SROE',
        def: 'standing rules of engagement',
        src: '1-02'
    },
    {
        abbr: 'SRP',
        def: 'sealift reserve program; Single Integrated Operational Plan (SIOP) reconnaissance plan',
        src: '1-02'
    },
    {
        abbr: 'SRP/PDS',
        def: 'stabilization reference package/position determining system',
        src: 'JP 1-02'
    },
    {
        abbr: 'SRR',
        def: 'search and rescue region',
        src: 'JP 1-02'
    },
    {
        abbr: 'SRS',
        def: 'search and rescue sector',
        src: 'JP 1-02'
    },
    {
        abbr: 'SRSG',
        def: 'special representative of the Secretary-General',
        src: '1-02'
    },
    {
        abbr: 'SRT',
        def: 'scheduled return time; special reaction team; standard remote terminal; strategic relocatable target',
        src: 'JP 1-02'
    },
    {
        abbr: 'SRTD',
        def: 'signals research and target development',
        src: 'JP 1-02'
    },
    {
        abbr: 'SRU',
        def: 'search and rescue unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'SRUF',
        def: 'standing rules for the use of force',
        src: '1-02'
    },
    {
        abbr: 'SRWBR',
        def: 'short range wide band radio',
        src: 'JP 1-02'
    },
    {
        abbr: 'SS',
        def: 'submarine',
        src: 'JP 1-02'
    },
    {
        abbr: 'SS (number)',
        def: 'sea state (number)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SSA',
        def: 'software support activity; space situational awareness; special support activity (NSA); strapdown sensor assembly; supply support activity; supply support area',
        src: '1-02'
    },
    {
        abbr: 'SSB',
        def: 'single side band; support services branch; surveillance support branch',
        src: 'JP 1-02'
    },
    {
        abbr: 'SSB-SC',
        def: 'single sideband-suppressed carrier',
        src: 'JP 1-02'
    },
    {
        abbr: 'SSC',
        def: 'small scale contingency; special security center; surveillance support center',
        src: '1-02'
    },
    {
        abbr: 'SSCO',
        def: 'shipper\'s service control office',
        src: '1-02'
    },
    {
        abbr: 'SSCRA',
        def: 'Soldiers and Sailors Civil Relief Act',
        src: 'JP 1-02'
    },
    {
        abbr: 'SSD',
        def: 'strategic studies detachment',
        src: '1-02'
    },
    {
        abbr: 'SSE',
        def: 'satellite communications (SATCOM) systems expert; space support element',
        src: '1-02'
    },
    {
        abbr: 'SSF',
        def: 'software support facility',
        src: 'JP 1-02'
    },
    {
        abbr: 'SSI',
        def: 'standing signal instruction',
        src: 'JP 1-02'
    },
    {
        abbr: 'SSM',
        def: 'surface-to-surface missile',
        src: '1-02'
    },
    {
        abbr: 'SSMI',
        def: 'special sensor microwave imager',
        src: 'JP 1-02'
    },
    {
        abbr: 'SSMS',
        def: 'single shelter message switch',
        src: 'JP 1-02'
    },
    {
        abbr: 'SSN',
        def: 'attack submarine, nuclear; Social Security number; space surveillance network',
        src: 'JP 1-02'
    },
    {
        abbr: 'SSO',
        def: 'special security office(r); spot security office',
        src: 'JP 1-02'
    },
    {
        abbr: 'SSP',
        def: 'signals intelligence (SIGINT) support plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'SSPM',
        def: 'single-service postal manager',
        src: '1-02'
    },
    {
        abbr: 'SSPO',
        def: 'strategic systems program office',
        src: 'JP 1-02'
    },
    {
        abbr: 'SSR',
        def: 'security sector reform',
        src: '1-02'
    },
    {
        abbr: 'SSS',
        def: 'Selective Service System; shelter subsystem',
        src: '1-02'
    },
    {
        abbr: 'SSSC',
        def: 'surface, subsurface search surveillance coordination',
        src: 'JP 1-02'
    },
    {
        abbr: 'SST',
        def: 'special support team (National Security Agency)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SSTR',
        def: 'stability, security, transition, and reconstruction',
        src: 'JP 3-0'
    },
    {
        abbr: 'SSWG',
        def: 'space support working group',
        src: '1-02'
    },
    {
        abbr: 'ST',
        def: 'short ton; small tug; strike team',
        src: '1-02'
    },
    {
        abbr: 'ST&E',
        def: 'security test and evaluation',
        src: 'JP 1-02'
    },
    {
        abbr: 'STA',
        def: 'system tape A',
        src: 'JP 1-02'
    },
    {
        abbr: 'STA clk',
        def: 'station clock',
        src: 'JP 1-02'
    },
    {
        abbr: 'STAB',
        def: 'space tactical awareness brief',
        src: 'JP 1-02'
    },
    {
        abbr: 'STAMMIS',
        def: 'standard Army multi-command management information system',
        src: 'JP 1-02'
    },
    {
        abbr: 'STAMP',
        def: 'standard air munitions package (USAF)',
        src: 'JP 1-02'
    },
    {
        abbr: 'STANAG',
        def: 'standardization agreement (NATO)',
        src: '1-02'
    },
    {
        abbr: 'STANAVFORLANT',
        def: 'Standing Naval Forces, Atlantic (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'STAR',
        def: 'scheduled theater airlift route;  sensitive target approval and review; standard attribute reference; standard terminal arrival route; surface-to-air recovery; system threat assessment report',
        src: '1-02'
    },
    {
        abbr: 'STARC',
        def: 'state area coordinators',
        src: 'JP 1-02'
    },
    {
        abbr: 'STARS',
        def: 'Standard Accounting and Reporting System',
        src: '1-02'
    },
    {
        abbr: 'START',
        def: 'Strategic Arms Reduction Treaty',
        src: 'JP 1-02'
    },
    {
        abbr: 'STARTEX',
        def: 'start of exercise',
        src: 'JP 1-02'
    },
    {
        abbr: 'STB',
        def: 'super tropical bleach',
        src: 'JP 1-02'
    },
    {
        abbr: 'STC',
        def: 'secondary traffic channel',
        src: 'JP 1-02'
    },
    {
        abbr: 'STD',
        def: 'sexually transmitted disease',
        src: 'JP 4-02'
    },
    {
        abbr: 'STDM',
        def: 'synchronous time division multiplexer',
        src: 'JP 1-02'
    },
    {
        abbr: 'STE',
        def: 'secure telephone equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'STEL STU III',
        def: 'Stanford telecommunications (secure telephone)',
        src: 'JP 1-02'
    },
    {
        abbr: 'STEP',
        def: 'software test and evaluation program; standardized tactical entry point; standard tool for employment planning',
        src: '1-02'
    },
    {
        abbr: 'STG',
        def: 'seasonal target graphic',
        src: 'JP 1-02'
    },
    {
        abbr: 'STICS',
        def: 'scalable transportable intelligence communications system',
        src: 'JP 1-02'
    },
    {
        abbr: 'STO',
        def: 'special technical operations',
        src: '1-02'
    },
    {
        abbr: 'STOC',
        def: 'special technical operations coordinator',
        src: 'JP 1-02'
    },
    {
        abbr: 'STOD',
        def: 'special technical operations division',
        src: 'JP 1-02'
    },
    {
        abbr: 'STOL',
        def: 'short takeoff and landing',
        src: 'JP 1-02'
    },
    {
        abbr: 'STOMPS',
        def: 'stand-alone tactical operational message processing system',
        src: 'JP 1-02'
    },
    {
        abbr: 'STON',
        def: 'short ton',
        src: '1-02'
    },
    {
        abbr: 'STP',
        def: 'security technical procedure',
        src: 'JP 1-02'
    },
    {
        abbr: 'STR',
        def: 'strength',
        src: 'JP 1-02'
    },
    {
        abbr: 'STRAPP',
        def: 'standard tanks, racks and pylons packages (USAF)',
        src: 'JP 1-02'
    },
    {
        abbr: 'STRATOPS',
        def: 'strategic operations division',
        src: 'JP 1-02'
    },
    {
        abbr: 'STREAM',
        def: 'standard tensioned replenishment alongside method',
        src: 'JP 1-02'
    },
    {
        abbr: 'STS',
        def: 'special tactics squadron',
        src: 'JP 1-02'
    },
    {
        abbr: 'STT',
        def: 'small tactical terminal; special tactics team',
        src: '1-02'
    },
    {
        abbr: 'STU',
        def: 'secure telephone unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'STU-III',
        def: 'secure telephone unit III',
        src: 'JP 1-02'
    },
    {
        abbr: 'STW',
        def: 'strike warfare',
        src: '1-02'
    },
    {
        abbr: 'STWC',
        def: 'strike warfare commander',
        src: '1-02'
    },
    {
        abbr: 'STX',
        def: 'start of text',
        src: 'JP 1-02'
    },
    {
        abbr: 'SU',
        def: 'search unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'sub-JIB',
        def: 'subordinate-joint information bureau',
        src: 'JP 1-02'
    },
    {
        abbr: 'sub-PIC',
        def: 'subordinate-press information center',
        src: 'JP 3-61'
    },
    {
        abbr: 'SUBJ',
        def: 'subject',
        src: 'JP 1-02'
    },
    {
        abbr: 'SUBOPAUTH',
        def: 'submarine operating authority',
        src: '1-02'
    },
    {
        abbr: 'SUBROC',
        def: 'submarine rocket',
        src: 'JP 1-02'
    },
    {
        abbr: 'SUC',
        def: 'surf current',
        src: 'JP 1-02'
    },
    {
        abbr: 'SUIC',
        def: 'service unit identification code',
        src: 'JP 1-02'
    },
    {
        abbr: 'SUMMITS',
        def: 'scenario unrestricted mobility model of intratheater simulation',
        src: 'JP 1-02'
    },
    {
        abbr: 'SUPE',
        def: 'supervisory commands program',
        src: 'JP 1-02'
    },
    {
        abbr: 'SUPP',
        def: 'supplement',
        src: '1-02'
    },
    {
        abbr: 'SUPPO',
        def: 'supply officer',
        src: '1-02'
    },
    {
        abbr: 'SURG',
        def: 'surgeon',
        src: 'JP 1-02'
    },
    {
        abbr: 'SUROBS',
        def: 'surf observation',
        src: '1-02'
    },
    {
        abbr: 'SURPIC',
        def: 'surface picture',
        src: 'JP 1-02'
    },
    {
        abbr: 'SUST BDE',
        def: 'sustainment brigade',
        src: '1-02'
    },
    {
        abbr: 'SUW',
        def: 'surface warfare',
        src: '1-02'
    },
    {
        abbr: 'SUWC',
        def: 'surface warfare commander',
        src: '1-02'
    },
    {
        abbr: 'SVC',
        def: 'Service; stored value card',
        src: '1-02'
    },
    {
        abbr: 'SVIP',
        def: 'secure voice improvement program',
        src: 'JP 1-02'
    },
    {
        abbr: 'SVLTU',
        def: 'service line termination unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'SVR',
        def: 'surface vessel radar',
        src: 'JP 1-02'
    },
    {
        abbr: 'SVS',
        def: 'secure voice system',
        src: 'JP 1-02'
    },
    {
        abbr: 'Sw',
        def: 'switch',
        src: 'JP 1-02'
    },
    {
        abbr: 'SWA',
        def: 'Southwest Asia',
        src: 'JP 1-02'
    },
    {
        abbr: 'SWAT',
        def: 'special weapons and tactics',
        src: 'JP 1-02'
    },
    {
        abbr: 'SWBD',
        def: 'switchboard',
        src: 'JP 1-02'
    },
    {
        abbr: 'SWC',
        def: 'strike warfare commander; swell/wave current',
        src: 'JP 1-02'
    },
    {
        abbr: 'SWI',
        def: 'special weather intelligence',
        src: 'JP 1-02'
    },
    {
        abbr: 'SWO',
        def: 'staff weather officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'SWORD',
        def: 'submarine warfare operations research division',
        src: 'JP 1-02'
    },
    {
        abbr: 'SWPC',
        def: 'Space Weather Prediction Center',
        src: '1-02'
    },
    {
        abbr: 'SWSOCC',
        def: 'Southwest Sector Operation Control Center North American Aerospace Defense Command (NORAD)',
        src: 'JP 1-02'
    },
    {
        abbr: 'SWXS',
        def: 'Space Weather Squadron',
        src: 'JP 1-02'
    },
    {
        abbr: 'SXXI',
        def: 'SPECTRUM XXI',
        src: '1-02'
    },
    {
        abbr: 'SXXI-O',
        def: 'SPECTRUM XXI-Online',
        src: '1-02'
    },
    {
        abbr: 'SYDP',
        def: 'six year defense plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'SYG',
        def: 'Secretary-General (UN)',
        src: '1-02'
    },
    {
        abbr: 'SYNC',
        def: 'synchronization',
        src: 'JP 1-02'
    },
    {
        abbr: 'SYS',
        def: 'system',
        src: 'JP 1-02'
    },
    {
        abbr: 'SYSCOM',
        def: 'systems command',
        src: '1-02'
    },
    {
        abbr: 'SYSCON',
        def: 'systems control',
        src: 'JP 1-02'
    },
    {
        abbr: 'SZ',
        def: 'surf zone',
        src: '1-02'
    },
    {
        abbr: 'T',
        def: 'search time available; short ton; trackline pattern',
        src: 'JP 1-02'
    },
    {
        abbr: 'T&DE',
        def: 'test and diagnostic equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'T&E',
        def: 'test and evaluation',
        src: 'JP 1-02'
    },
    {
        abbr: 'T-ACS',
        def: 'auxiliary crane ship',
        src: '1-02'
    },
    {
        abbr: 'T-AGOS',
        def: 'tactical auxiliary general ocean surveillance',
        src: 'JP 1-02'
    },
    {
        abbr: 'T-AH',
        def: 'hospital ship',
        src: 'JP 1-02'
    },
    {
        abbr: 'T-AKR',
        def: 'fast logistics ship',
        src: 'JP 1-02'
    },
    {
        abbr: 'T-ASA',
        def: 'Television Audio Support Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'T-AVB',
        def: 'aviation logistics support ship',
        src: 'JP 1-02'
    },
    {
        abbr: 'T-JMC',
        def: 'theater-joint movement center',
        src: 'JP 1-02'
    },
    {
        abbr: 'T-JTB',
        def: 'theater-joint transportation board',
        src: '1-02'
    },
    {
        abbr: 'T-net',
        def: 'training net',
        src: 'JP 1-02'
    },
    {
        abbr: 'T/M/S',
        def: 'type, model, and/or series',
        src: '1-02'
    },
    {
        abbr: 'T/O',
        def: 'table of organization',
        src: 'JP 1-02'
    },
    {
        abbr: 'T2',
        def: 'technology transfer',
        src: 'JP 1-02'
    },
    {
        abbr: 'TA',
        def: 'target acquisition; target audience; technical arrangement; theater Army; threat assessment',
        src: '1-02'
    },
    {
        abbr: 'TA/CP',
        def: 'technology assessment/control plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAA',
        def: 'tactical assembly area; target audience analysis',
        src: '1-02'
    },
    {
        abbr: 'TAACOM',
        def: 'theater Army area command',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAADS',
        def: 'The Army Authorization Document System',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAAMDCOORD',
        def: 'theater Army air and missile defense coordinator',
        src: '1-02'
    },
    {
        abbr: 'TAB',
        def: 'tactical air base',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAC',
        def: 'tactical advanced computer; terminal access controller; terminal attack control; terminal attack controller',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAC(A)',
        def: 'tactical air coordinator (airborne)',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAC-D',
        def: 'tactical deception',
        src: '1-02'
    },
    {
        abbr: 'TACAIR',
        def: 'tactical air',
        src: '1-02'
    },
    {
        abbr: 'TACAMO',
        def: 'take charge and move out (E-6A/B aircraft)',
        src: 'JP 1-02'
    },
    {
        abbr: 'TACAN',
        def: 'tactical air navigation',
        src: '1-02'
    },
    {
        abbr: 'TACC',
        def: 'tanker airlift control center',
        src: '1-02'
    },
    {
        abbr: 'TACDAR',
        def: 'tactical detection and reporting',
        src: 'JP 1-02'
    },
    {
        abbr: 'TACINTEL',
        def: 'tactical intelligence',
        src: 'JP 1-02'
    },
    {
        abbr: 'TACLAN',
        def: 'tactical local area network',
        src: 'JP 1-02'
    },
    {
        abbr: 'TACLOG',
        def: 'tactical-logistical',
        src: '1-02'
    },
    {
        abbr: 'TACM',
        def: 'tactical air command manual',
        src: 'JP 1-02'
    },
    {
        abbr: 'TACO',
        def: 'theater allied contracting office',
        src: 'JP 1-02'
    },
    {
        abbr: 'TACON',
        def: 'tactical control',
        src: '1-02'
    },
    {
        abbr: 'TACOPDAT',
        def: 'tactical operational data',
        src: '1-02'
    },
    {
        abbr: 'TACP',
        def: 'tactical air control party',
        src: '1-02'
    },
    {
        abbr: 'TACRON',
        def: 'tactical air control squadron',
        src: 'JP 1-02'
    },
    {
        abbr: 'TACS',
        def: 'tactical air control system; theater air control system',
        src: '1-02'
    },
    {
        abbr: 'TACSAT',
        def: 'tactical satellite',
        src: '1-02'
    },
    {
        abbr: 'TACSIM',
        def: 'tactical simulation',
        src: 'JP 1-02'
    },
    {
        abbr: 'TACSTANS',
        def: 'tactical standards',
        src: 'JP 1-02'
    },
    {
        abbr: 'TACT',
        def: 'tactical aviation control team',
        src: '1-02'
    },
    {
        abbr: 'TACTRAGRULANT',
        def: 'Tactical Training Group, Atlantic',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAD',
        def: 'tactical air direction; temporary additional duty (non-unit-related personnel); theater air defense; time available for delivery',
        src: 'JP 1-02'
    },
    {
        abbr: 'TADC',
        def: 'tactical air direction center',
        src: '1-02'
    },
    {
        abbr: 'TADCS',
        def: 'tactical airborne digital camera system',
        src: 'JP 1-02'
    },
    {
        abbr: 'TADS',
        def: 'Tactical Air Defense System; target acquisition system and designation sight',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAES',
        def: 'theater aeromedical evacuation system',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAF',
        def: 'tactical air force',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAFDS',
        def: 'tactical airfield fuel dispensing system',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAFIM',
        def: 'technical architecture framework for information management',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAFS',
        def: 'tactical aerodrome forecasts',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAFT',
        def: 'technical assistance field team',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAG',
        def: 'technical assessment group; technical assistance group; the adjutant general; Tomahawk land-attack missile aimpoint graphic',
        src: '1-02'
    },
    {
        abbr: 'TAGS',
        def: 'theater air-ground system',
        src: '1-02'
    },
    {
        abbr: 'TAI',
        def: 'target area of interest; total active inventory',
        src: '1-02'
    },
    {
        abbr: 'TAIS',
        def: 'transportation automated information systems',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAK',
        def: 'cargo ship',
        src: 'JP 1-02'
    },
    {
        abbr: 'TALD',
        def: 'tactical air-launched decoy',
        src: 'JP 1-02'
    },
    {
        abbr: 'TALON',
        def: 'Threat and Local Observation Notice',
        src: 'JP 3-07.2'
    },
    {
        abbr: 'TAMCA',
        def: 'theater Army movement control agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAMCO',
        def: 'theater Army movement control center',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAMD',
        def: 'theater air and missile defense',
        src: 'JP 3-09'
    },
    {
        abbr: 'TAMMC',
        def: 'theater army material management command',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAMMIS',
        def: 'theater Army medical management information system',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAMS',
        def: 'transportation analysis, modeling, and simulation',
        src: 'JP 1-02'
    },
    {
        abbr: 'tanalt',
        def: 'tangent altitude',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAO',
        def: 'tactical action officer; tactical air officer',
        src: '1-02'
    },
    {
        abbr: 'TAOC',
        def: 'tactical air operations center (USMC)',
        src: '1-02'
    },
    {
        abbr: 'TAP',
        def: 'troopship',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAR',
        def: 'tactical air request; Training and Administration of the Reserve',
        src: 'JP 1-02'
    },
    {
        abbr: 'TARBS',
        def: 'transportable amplitude modulation and frequency modulation radio broadcast system'
    },
    {
        abbr: 'TARBUL',
        def: 'target bulletin',
        src: 'JP 1-02'
    },
    {
        abbr: 'TARE',
        def: 'tactical record evaluation',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAREX',
        def: 'target exploitation; target plans and operations',
        src: 'JP 1-02'
    },
    {
        abbr: 'TARS',
        def: 'tethered aerostat radar system',
        src: 'JP 1-02'
    },
    {
        abbr: 'TARWI',
        def: 'target weather and intelligence',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAS',
        def: 'tactical atmospheric summary; true air speed',
        src: 'JP 1-02'
    },
    {
        abbr: 'TASCID',
        def: 'tactical Automatic Digital Network (AUTODIN) satellite compensation interface device',
        src: 'JP 1-02'
    },
    {
        abbr: 'TASCO',
        def: 'tactical automatic switch control officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'TASIP',
        def: 'tailored analytic intelligence support to individual electronic warfare and command and control warfare projects',
        src: 'JP 1-02'
    },
    {
        abbr: 'TASKORD',
        def: 'tasking order',
        src: 'JP 1-02'
    },
    {
        abbr: 'TASMO',
        def: 'tactical air support for maritime operations',
        src: 'JP 1-02'
    },
    {
        abbr: 'TASOSC',
        def: 'theater Army special operations support command',
        src: 'JP 1-02'
    },
    {
        abbr: 'TASS',
        def: 'tactical automated security system; tactical automated switch system',
        src: 'JP 1-02'
    },
    {
        abbr: 'TASWC',
        def: 'theater antisubmarine warfare commander',
        src: '1-02'
    },
    {
        abbr: 'TAT',
        def: 'tactical analysis team; technical assistance team',
        src: '1-02'
    },
    {
        abbr: 'TATC',
        def: 'tactical air traffic control',
        src: 'JP 1-02'
    },
    {
        abbr: 'TAW',
        def: 'tactical airlift wing',
        src: 'JP 1-02'
    },
    {
        abbr: 'TBC',
        def: 'theater business clearance',
        src: '1-02'
    },
    {
        abbr: 'TBD',
        def: 'to be determined',
        src: 'JP 1-02'
    },
    {
        abbr: 'TBM',
        def: 'tactical ballistic missile; theater ballistic missile',
        src: 'JP 1-02'
    },
    {
        abbr: 'TBMCS',
        def: 'theater battle management core system',
        src: '1-02'
    },
    {
        abbr: 'TBMD',
        def: 'theater ballistic missile defense',
        src: 'JP 1-02'
    },
    {
        abbr: 'TBP',
        def: 'to be published',
        src: 'JP 1-02'
    },
    {
        abbr: 'TBSL',
        def: 'to be supplied later',
        src: 'JP 1-02'
    },
    {
        abbr: 'TBTC',
        def: 'transportable blood transshipment center',
        src: 'JP 1-02'
    },
    {
        abbr: 'TC',
        def: 'tidal current; transmit clock and/or telemetry combiner; training circular; Transportation Corps (Army)',
        src: 'JP 1-02'
    },
    {
        abbr: 'TC-ACCIS',
        def: 'Transportation Coordinator\'s Automated Command and Control Information System',
        src: 'JP 1-02'
    },
    {
        abbr: 'TC-AIMS',
        def: 'Transportation Coordinator\'s Automated Information for Movement System',
        src: 'JP 1-02'
    },
    {
        abbr: 'TC-AIMS II',
        def: 'Transportation Coordinator\'s Automated Information for Movement System II',
        src: '1-02'
    },
    {
        abbr: 'TCA',
        def: 'terminal control area; time of closest approach; traditional combatant commander activity',
        src: '1-02'
    },
    {
        abbr: 'TCAM',
        def: 'theater Army medical management information system (TAMMIS) customer assistance module',
        src: 'JP 4-02'
    },
    {
        abbr: 'TCC',
        def: 'transmission control code; transportation component command',
        src: '1-02'
    },
    {
        abbr: 'TCCF',
        def: 'tactical communications control facility',
        src: 'JP 1-02'
    },
    {
        abbr: 'TCEM',
        def: 'theater contingency engineering management',
        src: '1-02'
    },
    {
        abbr: 'TCF',
        def: 'tactical combat force; technical control facility',
        src: 'JP 1-02'
    },
    {
        abbr: 'TCM',
        def: 'theater construction manager; theater container manager',
        src: '1-02'
    },
    {
        abbr: 'TCMD',
        def: 'transportation control and movement document',
        src: '1-02'
    },
    {
        abbr: 'TCN',
        def: 'third country national; transportation control number; troop contributing nations',
        src: '1-02'
    },
    {
        abbr: 'TCO',
        def: 'termination contracting officer; transnational criminal organization',
        src: '1-02'
    },
    {
        abbr: 'TCP',
        def: 'theater campaign plan',
        src: '1-02'
    },
    {
        abbr: 'TCPED',
        def: 'tasking, collection, processing, exploitation, and dissemination',
        src: '1-02'
    },
    {
        abbr: 'TCS',
        def: 'theater communications system',
        src: '1-02'
    },
    {
        abbr: 'TCSEC',
        def: 'trusted computer system evaluation criteria',
        src: 'JP 1-02'
    },
    {
        abbr: 'TCSP',
        def: 'theater consolidation and shipping point',
        src: '1-02'
    },
    {
        abbr: 'TD',
        def: 'temporary duty; theater distribution; tie down; timing distributor; total drift; transmit data',
        src: '1-02'
    },
    {
        abbr: 'TDA',
        def: 'Table of Distribution and Allowance',
        src: 'JP 1-02'
    },
    {
        abbr: 'TDAD',
        def: 'Table of Distribution and Allowance (TDA) designation',
        src: 'JP 1-02'
    },
    {
        abbr: 'TDBM',
        def: 'technical database management',
        src: 'JP 1-02'
    },
    {
        abbr: 'TDBSS',
        def: 'Theater Defense Blood Standard System',
        src: 'JP 4-02'
    },
    {
        abbr: 'TDC',
        def: 'target development cell',
        src: '1-02'
    },
    {
        abbr: 'TDD',
        def: 'target desired ground zero (DGZ) designator; time-definite delivery',
        src: '1-02'
    },
    {
        abbr: 'TDF',
        def: 'tactical digital facsimile',
        src: 'JP 1-02'
    },
    {
        abbr: 'TDIC',
        def: 'time division interface controller',
        src: 'JP 1-02'
    },
    {
        abbr: 'TDIG',
        def: 'time division interface group',
        src: 'JP 1-02'
    },
    {
        abbr: 'TDIM',
        def: 'time division interface module',
        src: 'JP 1-02'
    },
    {
        abbr: 'TDL',
        def: 'tactical data link',
        src: '1-02'
    },
    {
        abbr: 'TDM',
        def: 'time division multiplexed',
        src: 'JP 1-02'
    },
    {
        abbr: 'TDMA',
        def: 'time division multiple access',
        src: 'JP 1-02'
    },
    {
        abbr: 'TDMC',
        def: 'theater distribution management cell'
    },
    {
        abbr: 'TDMF',
        def: 'time division matrix function',
        src: 'JP 1-02'
    },
    {
        abbr: 'TDMM',
        def: 'time division memory module',
        src: 'JP 1-02'
    },
    {
        abbr: 'TDMX',
        def: 'time division matrix',
        src: 'JP 1-02'
    },
    {
        abbr: 'TDN',
        def: 'tactical data network; target development nomination',
        src: '1-02'
    },
    {
        abbr: 'TDP',
        def: 'theater distribution plan',
        src: '1-02'
    },
    {
        abbr: 'TDR',
        def: 'transportation discrepancy report',
        src: 'JP 1-02'
    },
    {
        abbr: 'TDRC',
        def: 'theater detainee reporting center',
        src: 'JP 1-02'
    },
    {
        abbr: 'TDSG',
        def: 'time division switching group',
        src: 'JP 1-02'
    },
    {
        abbr: 'TDSGM',
        def: 'time division switching group modified',
        src: 'JP 1-02'
    },
    {
        abbr: 'TDT',
        def: 'theater display terminal',
        src: 'JP 1-02'
    },
    {
        abbr: 'TDY',
        def: 'temporary duty',
        src: '1-02'
    },
    {
        abbr: 'TE',
        def: 'transaction editor',
        src: 'JP 1-02'
    },
    {
        abbr: 'TEA',
        def: 'Transportation Engineering Agency',
        src: '1-02'
    },
    {
        abbr: 'TEC',
        def: 'theater engineer command',
        src: '1-02'
    },
    {
        abbr: 'tech',
        def: 'technical',
        src: 'JP 1-02'
    },
    {
        abbr: 'TECHCON',
        def: 'technical control',
        src: 'JP 1-02'
    },
    {
        abbr: 'TECHDOC',
        def: 'technical documentation',
        src: 'JP 1-02'
    },
    {
        abbr: 'TECHELINT',
        def: 'technical electronic intelligence',
        src: '1-02'
    },
    {
        abbr: 'TECHEVAL',
        def: 'technical evaluation',
        src: 'JP 1-02'
    },
    {
        abbr: 'TECHINT',
        def: 'technical intelligence',
        src: '1-02'
    },
    {
        abbr: 'TECHOPDAT',
        def: 'technical operational data',
        src: 'JP 1-02'
    },
    {
        abbr: 'TECS II',
        def: 'Treasury Enforcement Communications System',
        src: 'JP 1-02'
    },
    {
        abbr: 'TED',
        def: 'trunk encryption device',
        src: 'JP 1-02'
    },
    {
        abbr: 'TEDAC',
        def: 'Terrorist Explosive Device Analytical Center (FBI)',
        src: '1-02'
    },
    {
        abbr: 'TEK',
        def: 'TeleEngineering Kit',
        src: 'JP 3-34'
    },
    {
        abbr: 'TEL',
        def: 'transporter-erector-launcher',
        src: '1-02'
    },
    {
        abbr: 'TELEX',
        def: 'teletype',
        src: 'JP 1-02'
    },
    {
        abbr: 'TELINT',
        def: 'telemetry intelligence',
        src: 'JP 1-02'
    },
    {
        abbr: 'TELNET',
        def: 'telecommunication network',
        src: 'JP 1-02'
    },
    {
        abbr: 'TEMPER',
        def: 'tent extendible modular personnel',
        src: '1-02'
    },
    {
        abbr: 'TENCAP',
        def: 'tactical exploitation of national capabilities program',
        src: '1-02'
    },
    {
        abbr: 'TEO',
        def: 'team embarkation officer',
        src: '1-02'
    },
    {
        abbr: 'TEOB',
        def: 'tactical electronic order of battle',
        src: 'JP 1-02'
    },
    {
        abbr: 'TEP',
        def: 'test and evaluation plan; theater engagement plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'TERCOM',
        def: 'terrain contour matching',
        src: 'JP 1-02'
    },
    {
        abbr: 'TERF',
        def: 'terrain flight',
        src: 'JP 1-02'
    },
    {
        abbr: 'TERPES',
        def: 'tactical electronic reconnaissance processing and evaluation system',
        src: 'JP 1-02'
    },
    {
        abbr: 'TERPROM',
        def: 'terrain profile matching',
        src: 'JP 1-02'
    },
    {
        abbr: 'TERS',
        def: 'tactical event reporting system',
        src: 'JP 1-02'
    },
    {
        abbr: 'TES',
        def: 'theater event system',
        src: '1-02'
    },
    {
        abbr: 'TESS',
        def: 'Tactical Environmental Support System',
        src: 'JP 1-02'
    },
    {
        abbr: 'TET',
        def: 'targeting effects team',
        src: '1-02'
    },
    {
        abbr: 'TETK',
        def: 'TeleEngineering Toolkit',
        src: '1-02'
    },
    {
        abbr: 'TEU',
        def: 'technical escort unit; twenty-foot equivalent unit',
        src: '1-02'
    },
    {
        abbr: 'TEWLS',
        def: 'Theater Enterprise Wide Logistics System',
        src: 'JP 4-02'
    },
    {
        abbr: 'TF',
        def: 'task force',
        src: '1-02'
    },
    {
        abbr: 'TFA',
        def: 'toxic free area',
        src: 'JP 1-02'
    },
    {
        abbr: 'TFADS',
        def: 'Table Formatted Aeronautic Data Set',
        src: 'JP 1-02'
    },
    {
        abbr: 'TFC',
        def: 'threat finance cell',
        src: '1-02'
    },
    {
        abbr: 'TFCICA',
        def: 'task force counterintelligence coordinating authority',
        src: '1-02'
    },
    {
        abbr: 'TFE',
        def: 'tactical field exchange; threat finance exploitation; transportation feasibility estimator',
        src: '1-02'
    },
    {
        abbr: 'TFF',
        def: 'total force fitness',
        src: '1-02'
    },
    {
        abbr: 'TFLIR',
        def: 'targeting forward-looking infrared',
        src: 'JP 1-02'
    },
    {
        abbr: 'TFMS-M',
        def: 'Transportation Financial Management System-Military',
        src: '1-02'
    },
    {
        abbr: 'TFR',
        def: 'temporary flight restriction',
        src: 'JP 1-02'
    },
    {
        abbr: 'TFS',
        def: 'tactical fighter squadron; Tactical Forecast System',
        src: 'JP 1-02'
    },
    {
        abbr: 'TG',
        def: 'task group',
        src: 'JP 1-02'
    },
    {
        abbr: 'TGC',
        def: 'trunk group cluster',
        src: 'JP 1-02'
    },
    {
        abbr: 'TGEN',
        def: 'table generate',
        src: 'JP 1-02'
    },
    {
        abbr: 'TGM',
        def: 'terminally guided munitions; trunk group multiplexer',
        src: '1-02'
    },
    {
        abbr: 'TGMOW',
        def: 'transmission group module and/or orderwire',
        src: 'JP 1-02'
    },
    {
        abbr: 'TGO',
        def: 'terminal guidance operations',
        src: '1-02'
    },
    {
        abbr: 'TGT',
        def: 'target',
        src: 'JP 1-02'
    },
    {
        abbr: 'TGTINFOREP',
        def: 'target information report',
        src: 'JP 1-02'
    },
    {
        abbr: 'TGU',
        def: 'trunk compatibility unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'THAAD',
        def: 'Terminal High Altitude Area Defense',
        src: '1-02'
    },
    {
        abbr: 'THREATCON',
        def: 'terrorist threat condition',
        src: 'JP 1-02'
    },
    {
        abbr: 'THT',
        def: 'tactical human intelligence team',
        src: '1-02'
    },
    {
        abbr: 'THX',
        def: 'theater express',
        src: '1-02'
    },
    {
        abbr: 'TI',
        def: 'threat identification; training instructor',
        src: 'JP 1-02'
    },
    {
        abbr: 'TIA',
        def: 'theater intelligence assessment',
        src: '1-02'
    },
    {
        abbr: 'TIAP',
        def: 'theater intelligence architecture program',
        src: 'JP 1-02'
    },
    {
        abbr: 'TIB',
        def: 'theater intelligence brigade; toxic industrial biological',
        src: '1-02'
    },
    {
        abbr: 'TIBS',
        def: 'tactical information broadcast service',
        src: 'JP 1-02'
    },
    {
        abbr: 'TIC',
        def: 'target information center; toxic industrial chemical',
        src: '1-02'
    },
    {
        abbr: 'TIDE',
        def: 'Terrorist Identities Datamart Environment',
        src: '1-02'
    },
    {
        abbr: 'TIDP',
        def: 'technical interface design plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'TIDS',
        def: 'tactical imagery dissemination system',
        src: 'JP 1-02'
    },
    {
        abbr: 'TIF',
        def: 'theater internment facility',
        src: 'JP 1-02'
    },
    {
        abbr: 'TIFF',
        def: 'tagged image file format',
        src: 'JP 1-02'
    },
    {
        abbr: 'TII',
        def: 'total inactive inventory',
        src: 'JP 1-02'
    },
    {
        abbr: 'TIM',
        def: 'theater information management; toxic industrial material',
        src: '1-02'
    },
    {
        abbr: 'TIO',
        def: 'target intelligence officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'TIP',
        def: 'target intelligence package; trafficking in persons',
        src: '1-02'
    },
    {
        abbr: 'TIPG',
        def: 'telephone interface planning guide',
        src: 'JP 1-02'
    },
    {
        abbr: 'TIPI',
        def: 'tactical information processing interpretation',
        src: '1-02'
    },
    {
        abbr: 'TIPS',
        def: 'tactical optical surveillance system (TOSS) imagery processing system',
        src: 'JP 1-02'
    },
    {
        abbr: 'TIR',
        def: 'toxic industrial radiological',
        src: 'JP 3-41'
    },
    {
        abbr: 'TIROS',
        def: 'television infrared observation satellite',
        src: 'JP 1-02'
    },
    {
        abbr: 'TIS',
        def: 'technical interface specification; thermal imaging system',
        src: 'JP 1-02'
    },
    {
        abbr: 'TISG',
        def: 'technical interoperability standards group',
        src: 'JP 1-02'
    },
    {
        abbr: 'TISS',
        def: 'thermal imaging sensor system',
        src: 'JP 1-02'
    },
    {
        abbr: 'TJAG',
        def: 'the judge advocate general',
        src: 'JP 1-04'
    },
    {
        abbr: 'TJTN',
        def: 'theater joint tactical network',
        src: 'JP 6-0'
    },
    {
        abbr: 'TL',
        def: 'team leader',
        src: 'JP 1-02'
    },
    {
        abbr: 'TLA',
        def: 'theater logistics analysis',
        src: '1-02'
    },
    {
        abbr: 'TLAM',
        def: 'Tomahawk land-attack missile',
        src: '1-02'
    },
    {
        abbr: 'TLAM/N',
        def: 'Tomahawk land attack missile/nuclear',
        src: 'JP 1-02'
    },
    {
        abbr: 'TLAMM',
        def: 'theater lead agent for medical materiel',
        src: '1-02'
    },
    {
        abbr: 'TLC',
        def: 'traffic load control',
        src: 'JP 1-02'
    },
    {
        abbr: 'TLE',
        def: 'target location error'
    },
    {
        abbr: 'TLM',
        def: 'target list management; topographic line map',
        src: '1-02'
    },
    {
        abbr: 'TLO',
        def: 'theater logistics overview',
        src: '1-02'
    },
    {
        abbr: 'TLP',
        def: 'transmission level point',
        src: 'JP 1-02'
    },
    {
        abbr: 'TLR',
        def: 'trailer',
        src: 'JP 1-02'
    },
    {
        abbr: 'TLX',
        def: 'teletype',
        src: 'JP 1-02'
    },
    {
        abbr: 'TM',
        def: 'tactical missile; target materials; team member; technical manual; TROPO modem',
        src: '1-02'
    },
    {
        abbr: 'TMAO',
        def: 'theater mortuary affairs office; theater mortuary affairs officer',
        src: '1-02'
    },
    {
        abbr: 'TMB',
        def: 'tactical military information support operations battalion',
        src: '1-02'
    },
    {
        abbr: 'TMD',
        def: 'tactical munitions dispenser; theater missile defense',
        src: 'JP 1-02'
    },
    {
        abbr: 'TMEP',
        def: 'theater mortuary evacuation point',
        src: 'JP 1-02'
    },
    {
        abbr: 'TMG',
        def: 'timing',
        src: 'JP 1-02'
    },
    {
        abbr: 'TMIP',
        def: 'theater medical information program',
        src: 'JP 4-02'
    },
    {
        abbr: 'TMIS',
        def: 'theater medical information system',
        src: 'JP 1-02'
    },
    {
        abbr: 'TML',
        def: 'terminal',
        src: 'JP 1-02'
    },
    {
        abbr: 'TMLMC',
        def: 'theater medical logistic management center',
        src: 'JP 4-02'
    },
    {
        abbr: 'TMMMC',
        def: 'theater medical materiel management center',
        src: 'JP 1-02'
    },
    {
        abbr: 'TMN',
        def: 'trackline multiunit non-return',
        src: 'JP 1-02'
    },
    {
        abbr: 'TMO',
        def: 'traffic management office; transportation management office',
        src: 'JP 1-02'
    },
    {
        abbr: 'TMP',
        def: 'target materials program; telecommunications management program; theater manpower forces',
        src: 'JP 1-02'
    },
    {
        abbr: 'TMR',
        def: 'trackline multiunit return',
        src: 'JP 1-02'
    },
    {
        abbr: 'TMT',
        def: 'time-phased force and deployment data management tool',
        src: '1-02'
    },
    {
        abbr: 'TNAPS',
        def: 'tactical network analysis and planning system',
        src: 'JP 1-02'
    },
    {
        abbr: 'TNAPS+',
        def: 'tactical network analysis and planning system plus',
        src: 'JP 1-02'
    },
    {
        abbr: 'TNC',
        def: 'theater network operations center',
        src: '1-02'
    },
    {
        abbr: 'TNCC',
        def: 'theater network operations control center',
        src: '1-02'
    },
    {
        abbr: 'TNCO',
        def: 'transnational criminal organization',
        src: 'JP 3-07.4'
    },
    {
        abbr: 'TNF',
        def: 'theater nuclear force',
        src: 'JP 1-02'
    },
    {
        abbr: 'TNL',
        def: 'target nomination list',
        src: '1-02'
    },
    {
        abbr: 'TO',
        def: 'technical order; theater of operations',
        src: 'JP 1-02'
    },
    {
        abbr: 'TO&E',
        def: 'table of organization and equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'TOA',
        def: 'table of allowance',
        src: '1-02'
    },
    {
        abbr: 'TOC',
        def: 'tactical operations center; tanker airlift control center (TALCE) operations center',
        src: '1-02'
    },
    {
        abbr: 'TOCU',
        def: 'tropospheric scatter (TROPO) orderwire control unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'TOD',
        def: 'tactical ocean data; time of day',
        src: '1-02'
    },
    {
        abbr: 'TOE',
        def: 'table of organization and equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'TOF',
        def: 'time of flight',
        src: 'JP 1-02'
    },
    {
        abbr: 'TOFC',
        def: 'trailer on flatcar',
        src: 'JP 1-02'
    },
    {
        abbr: 'TOH',
        def: 'top of hill',
        src: 'JP 1-02'
    },
    {
        abbr: 'TOI',
        def: 'track of interest',
        src: '1-02'
    },
    {
        abbr: 'TOPINT',
        def: 'technical operational intelligence',
        src: '1-02'
    },
    {
        abbr: 'TOR',
        def: 'term of reference; time of receipt',
        src: '1-02'
    },
    {
        abbr: 'TOS',
        def: 'time on station',
        src: 'JP 1-02'
    },
    {
        abbr: 'TOSS',
        def: 'tactical optical surveillance system',
        src: 'JP 1-02'
    },
    {
        abbr: 'TOT',
        def: 'time on target',
        src: 'JP 1-02'
    },
    {
        abbr: 'TOW',
        def: 'tube launched, optically tracked, wire guided',
        src: 'JP 1-02'
    },
    {
        abbr: 'TP',
        def: 'technical publication; transportation priority; turn point',
        src: '1-02'
    },
    {
        abbr: 'TPC',
        def: 'tactical pilotage chart',
        src: '1-02'
    },
    {
        abbr: 'TPC/PC',
        def: 'tactical pilotage chart and/or pilotage chart',
        src: 'JP 1-02'
    },
    {
        abbr: 'TPE',
        def: 'theater provided equipment',
        src: '1-02'
    },
    {
        abbr: 'TPED',
        def: 'tasking, processing, exploitation, and dissemination; theater personal effects depot',
        src: '1-02'
    },
    {
        abbr: 'TPERS',
        def: 'type personnel element',
        src: 'JP 1-02'
    },
    {
        abbr: 'TPFDD',
        def: 'time-phased force and deployment data',
        src: '1-02'
    },
    {
        abbr: 'TPFDL',
        def: 'time-phased force and deployment list',
        src: '1-02'
    },
    {
        abbr: 'TPL',
        def: 'technical publications list; telephone private line',
        src: 'JP 1-02'
    },
    {
        abbr: 'TPME',
        def: 'task, purpose, method, and effects'
    },
    {
        abbr: 'TPMRC',
        def: 'theater patient movement requirements center',
        src: '1-02'
    },
    {
        abbr: 'TPO',
        def: 'task performance observation',
        src: 'JP 1-02'
    },
    {
        abbr: 'TPRC',
        def: 'theater planning response cell',
        src: 'JP 1-02'
    },
    {
        abbr: 'TPT',
        def: 'tactical petroleum terminal',
        src: 'JP 1-02'
    },
    {
        abbr: 'TPTRL',
        def: 'time-phased transportation requirements list',
        src: 'JP 1-02'
    },
    {
        abbr: 'TPU',
        def: 'tank pump unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'TQ',
        def: 'tactical questioning',
        src: '1-02'
    },
    {
        abbr: 'TRA',
        def: 'technical review authority',
        src: '1-02'
    },
    {
        abbr: 'TRAC2ES',
        def: 'United States Transportation Command Regulating and Command and Control Evacuation System',
        src: '1-02'
    },
    {
        abbr: 'TRACON',
        def: 'terminal radar approach control facility',
        src: 'JP 1-02'
    },
    {
        abbr: 'TRADOC',
        def: 'United States Army Training and Doctrine Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'TRAM',
        def: 'target recognition attack multisensor',
        src: 'JP 1-02'
    },
    {
        abbr: 'Trans BDE',
        def: 'transportation brigade',
        src: '1-02'
    },
    {
        abbr: 'Trans Det RPO',
        def: 'transportation detachment rapid port opening',
        src: '1-02'
    },
    {
        abbr: 'TRANSEC',
        def: 'transmission security',
        src: 'JP 1-02'
    },
    {
        abbr: 'TRAP',
        def: 'tactical recovery of aircraft and personnel (Marine Corps); tactical related applications; tanks, racks, adapters, and pylons; terrorism research and analysis program',
        src: 'JP 1-02'
    },
    {
        abbr: 'TRC',
        def: 'tactical radio communication; threat reduction cooperation; transmission release code',
        src: '1-02'
    },
    {
        abbr: 'TRCC',
        def: 'tactical record communications center',
        src: 'JP 1-02'
    },
    {
        abbr: 'TRE',
        def: 'tactical receive equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'TREAS',
        def: 'Department of the Treasury',
        src: 'JP 1-02'
    },
    {
        abbr: 'TREE',
        def: 'transient radiation effects on electronics',
        src: 'JP 1-02'
    },
    {
        abbr: 'TRI-TAC',
        def: 'Tri-Service Tactical Communications Program',
        src: 'JP 1-02'
    },
    {
        abbr: 'TRIADS',
        def: 'Tri-Wall Aerial Distribution System',
        src: '1-02'
    },
    {
        abbr: 'TRICON',
        def: 'triple container',
        src: '1-02'
    },
    {
        abbr: 'TRK',
        def: 'truck; trunk',
        src: 'JP 1-02'
    },
    {
        abbr: 'TRNG',
        def: 'training',
        src: 'JP 1-02'
    },
    {
        abbr: 'TRO',
        def: 'training and readiness oversight',
        src: '1-02'
    },
    {
        abbr: 'TROPO',
        def: 'troposphere; tropospheric scatter',
        src: 'JP 1-02'
    },
    {
        abbr: 'TRP',
        def: 'target reference point',
        src: '1-02'
    },
    {
        abbr: 'TRS',
        def: 'tactical reconnaissance squadron',
        src: 'JP 1-02'
    },
    {
        abbr: 'TS',
        def: 'terminal service; time-sensitive; top secret',
        src: '1-02'
    },
    {
        abbr: 'TSA',
        def: 'target system analysis; theater storage area; Transportation Security Administration (DHS); travel security advisory',
        src: '1-02'
    },
    {
        abbr: 'TSB',
        def: 'technical support branch; trunk signaling buffer',
        src: 'JP 1-02'
    },
    {
        abbr: 'TSBn',
        def: 'transportation support battalion (USMC)',
        src: 'JP 1-02'
    },
    {
        abbr: 'TSC',
        def: 'theater security cooperation; theater support command; theater sustainment command (Army)',
        src: '1-02'
    },
    {
        abbr: 'TSCIF',
        def: 'tactical sensitive compartmented information facility',
        src: 'JP 1-02'
    },
    {
        abbr: 'TSCM',
        def: 'technical surveillance countermeasures',
        src: 'JP 1-02'
    },
    {
        abbr: 'TSCO',
        def: 'target selection confusion of the operator; top secret control officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'TSCP',
        def: 'theater security cooperation plan'
    },
    {
        abbr: 'TSCR',
        def: 'time sensitive collection requirement',
        src: 'JP 2-01.2'
    },
    {
        abbr: 'TSE',
        def: 'tactical support element',
        src: 'JP 1-02'
    },
    {
        abbr: 'TSEC',
        def: 'transmission security',
        src: 'JP 1-02'
    },
    {
        abbr: 'TSG',
        def: 'targeting support group; test signal generator',
        src: 'JP 1-02'
    },
    {
        abbr: 'TSGCE',
        def: 'tri-Service group on communications and electronics',
        src: 'JP 1-02'
    },
    {
        abbr: 'TSGCEE',
        def: 'tri-Service group on communications and electronic equipment (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'TSM',
        def: 'trunk signaling message',
        src: 'JP 1-02'
    },
    {
        abbr: 'TSN',
        def: 'trackline single-unit non-return; track supervision net',
        src: 'JP 1-02'
    },
    {
        abbr: 'TSO',
        def: 'technical standard order; telecommunications service order',
        src: 'JP 1-02'
    },
    {
        abbr: 'TSOC',
        def: 'tactical special operations command; theater special operations command',
        src: '1-02'
    },
    {
        abbr: 'TSP',
        def: 'telecommunications service priority',
        src: 'JP 1-02'
    },
    {
        abbr: 'TSR',
        def: 'telecommunications service request; theater source registry; theater support representative; trackline single-unit return',
        src: 'JP 1-02'
    },
    {
        abbr: 'TSS',
        def: 'tactical shelter system; target sensing system; timesharing system; time signal set; traffic service station',
        src: '1-02'
    },
    {
        abbr: 'TSSP',
        def: 'tactical satellite signal processor',
        src: 'JP 1-02'
    },
    {
        abbr: 'TSSR',
        def: 'tropospheric scatter (TROPO)-satellite support radio',
        src: 'JP 1-02'
    },
    {
        abbr: 'TST',
        def: 'tactical support team; terminal support team; theater support team; time-sensitive target',
        src: '1-02'
    },
    {
        abbr: 'TSWA',
        def: 'temporary secure working area',
        src: 'JP 1-02'
    },
    {
        abbr: 'TT',
        def: 'terminal transfer',
        src: 'JP 1-02'
    },
    {
        abbr: 'TT&C',
        def: 'telemetry, tracking, and commanding',
        src: '1-02'
    },
    {
        abbr: 'TTAN',
        def: 'transportation tracking account number',
        src: '1-02'
    },
    {
        abbr: 'TTB',
        def: 'transportation terminal battalion',
        src: 'JP 1-02'
    },
    {
        abbr: 'TTD',
        def: 'tactical terrain data; technical task directive',
        src: '1-02'
    },
    {
        abbr: 'TTFACOR',
        def: 'targets, threats, friendlies, artillery, clearance, ordnance, restrictions',
        src: '1-02'
    },
    {
        abbr: 'TTG',
        def: 'thermally tempered glass',
        src: 'JP 3-07.2'
    },
    {
        abbr: 'TTL',
        def: 'tagging, tracking, and locating; transistor-transistor logic',
        src: '1-02'
    },
    {
        abbr: 'TTM',
        def: 'threat training manual; training target material',
        src: 'JP 1-02'
    },
    {
        abbr: 'TTN',
        def: 'transportation tracking number',
        src: '1-02'
    },
    {
        abbr: 'TTP',
        def: 'tactics, techniques, and procedures; trailer transfer point',
        src: '1-02'
    },
    {
        abbr: 'TTR',
        def: 'tactical training range',
        src: 'JP 1-02'
    },
    {
        abbr: 'TTT',
        def: 'time to target',
        src: 'JP 1-02'
    },
    {
        abbr: 'TTU',
        def: 'transportation terminal unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'TTY',
        def: 'teletype',
        src: 'JP 1-02'
    },
    {
        abbr: 'TUBA',
        def: 'transition unit box assembly',
        src: 'JP 1-02'
    },
    {
        abbr: 'TUCHA',
        def: 'type unit characteristics file',
        src: 'JP 1-02'
    },
    {
        abbr: 'TUCHAREP',
        def: 'type unit characteristics report',
        src: 'JP 1-02'
    },
    {
        abbr: 'TUDET',
        def: 'type unit equipment detail file',
        src: 'JP 1-02'
    },
    {
        abbr: 'TV',
        def: 'television',
        src: '1-02'
    },
    {
        abbr: 'TVA',
        def: 'Tennessee Valley Authority',
        src: 'JP 1-02'
    },
    {
        abbr: 'TW&A',
        def: 'threat warning and assessment',
        src: '1-02'
    },
    {
        abbr: 'TWC',
        def: 'Office for Counterterrorism Analysis (DIA); total water current',
        src: 'JP 1-02'
    },
    {
        abbr: 'TWCF',
        def: 'Transportation Working Capital Fund',
        src: '1-02'
    },
    {
        abbr: 'TWCM',
        def: 'theater wartime construction manager',
        src: 'JP 1-02'
    },
    {
        abbr: 'TWD',
        def: 'transnational warfare counterdrug analysis',
        src: 'JP 1-02'
    },
    {
        abbr: 'TWDS',
        def: 'tactical water distribution system',
        src: '1-02'
    },
    {
        abbr: 'TWI',
        def: 'Office for Information Warfare Support (DIA)',
        src: 'JP 1-02'
    },
    {
        abbr: 'TWPL',
        def: 'teletypewriter private line',
        src: 'JP 1-02'
    },
    {
        abbr: 'TWX',
        def: 'teletypewriter exchange',
        src: 'JP 1-02'
    },
    {
        abbr: 'TX',
        def: 'transmitter; transmit',
        src: 'JP 1-02'
    },
    {
        abbr: 'TYCOM',
        def: 'type commander',
        src: '1-02'
    },
    {
        abbr: 'U',
        def: 'wind speed',
        src: 'JP 1-02'
    },
    {
        abbr: 'U/C',
        def: 'unit cost; upconverter',
        src: 'JP 1-02'
    },
    {
        abbr: 'UA',
        def: 'unmanned aircraft',
        src: '1-02'
    },
    {
        abbr: 'UAOBS',
        def: 'upper air observation',
        src: 'JP 1-02'
    },
    {
        abbr: 'UAR',
        def: 'unconventional assisted recovery',
        src: 'JP 1-02'
    },
    {
        abbr: 'UARCC',
        def: 'unconventional assisted recovery coordination cell',
        src: 'JP 1-02'
    },
    {
        abbr: 'UAS',
        def: 'unmanned aircraft system',
        src: '1-02'
    },
    {
        abbr: 'UAV',
        def: 'unmanned aerial vehicle',
        src: '1-02'
    },
    {
        abbr: 'UCFF',
        def: 'Unit Type Code Consumption Factors File',
        src: 'JP 1-02'
    },
    {
        abbr: 'UCMJ',
        def: 'Uniform Code of Military Justice',
        src: '1-02'
    },
    {
        abbr: 'UCP',
        def: 'Unified Command Plan',
        src: '1-02'
    },
    {
        abbr: 'UCT',
        def: 'underwater construction team',
        src: '1-02'
    },
    {
        abbr: 'UDAC',
        def: 'unauthorized disclosure analysis center',
        src: 'JP 1-02'
    },
    {
        abbr: 'UDC',
        def: 'unit descriptor code',
        src: 'JP 1-02'
    },
    {
        abbr: 'UDESC',
        def: 'unit description',
        src: 'JP 1-02'
    },
    {
        abbr: 'UDL',
        def: 'unit deployment list; unit designation list',
        src: '1-02'
    },
    {
        abbr: 'UDP',
        def: 'unit deployment program',
        src: 'JP 1-02'
    },
    {
        abbr: 'UDT',
        def: 'underwater demolition team',
        src: 'JP 1-02'
    },
    {
        abbr: 'UE',
        def: 'unit equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'UEWR',
        def: 'upgraded early warning radar',
        src: '1-02'
    },
    {
        abbr: 'UFAC',
        def: 'Underground Facilities Analysis Center',
        src: '1-02'
    },
    {
        abbr: 'UFC',
        def: 'Unified Facilities Criteria',
        src: '1-02'
    },
    {
        abbr: 'UFO',
        def: 'ultrahigh frequency follow-on',
        src: '1-02'
    },
    {
        abbr: 'UFR',
        def: 'unfunded requirement',
        src: 'JP 3-07.2'
    },
    {
        abbr: 'UGA',
        def: 'ungoverned area',
        src: '1-02'
    },
    {
        abbr: 'UGIRH',
        def: 'Urban Generic Information Requirements Handbook',
        src: '1-02'
    },
    {
        abbr: 'UGM-84A',
        def: 'Harpoon',
        src: 'JP 1-02'
    },
    {
        abbr: 'UGM-96A',
        def: 'Trident I',
        src: 'JP 1-02'
    },
    {
        abbr: 'UGO',
        def: 'unified geospatial-intelligence operations',
        src: '1-02'
    },
    {
        abbr: 'UHF',
        def: 'ultrahigh frequency',
        src: '1-02'
    },
    {
        abbr: 'UHV',
        def: 'Upper Huallaga Valley',
        src: 'JP 1-02'
    },
    {
        abbr: 'UIC',
        def: 'unit identification code',
        src: 'JP 1-02'
    },
    {
        abbr: 'UICIO',
        def: 'unit identification code information officer',
        src: 'JP 1-02'
    },
    {
        abbr: 'UIRV',
        def: 'unique interswitch rekeying variable',
        src: 'JP 1-02'
    },
    {
        abbr: 'UIS',
        def: 'unit identification system',
        src: 'JP 1-02'
    },
    {
        abbr: 'UJTL',
        def: 'Universal Joint Task List',
        src: '1-02'
    },
    {
        abbr: 'UK',
        def: 'United Kingdom',
        src: '1-02'
    },
    {
        abbr: 'UK(I)',
        def: 'United Kingdom and Ireland',
        src: 'JP 1-02'
    },
    {
        abbr: 'ULC',
        def: 'unit level code',
        src: 'JP 1-02'
    },
    {
        abbr: 'ULF',
        def: 'ultra low frequency',
        src: 'JP 1-02'
    },
    {
        abbr: 'ULLS',
        def: 'unit level logistics system',
        src: 'JP 4-02'
    },
    {
        abbr: 'ULN',
        def: 'unit line number',
        src: '1-02'
    },
    {
        abbr: 'ULSD',
        def: 'ultra-low sulfur diesel',
        src: '1-02'
    },
    {
        abbr: 'UMCC',
        def: 'unit movement control center',
        src: '1-02'
    },
    {
        abbr: 'UMCM',
        def: 'underwater mine countermeasures',
        src: 'JP 3-15'
    },
    {
        abbr: 'UMD',
        def: 'unit manning document; unit movement data',
        src: 'JP 1-02'
    },
    {
        abbr: 'UMIB',
        def: 'urgent marine information broadcast',
        src: 'JP 1-02'
    },
    {
        abbr: 'UMMIPS',
        def: 'uniform material movement and issue priority system',
        src: 'JP 1-02'
    },
    {
        abbr: 'UMO',
        def: 'unit movement officer',
        src: '1-02'
    },
    {
        abbr: 'UMPR',
        def: 'unit manpower personnel record',
        src: 'JP 1-02'
    },
    {
        abbr: 'UMT',
        def: 'unit ministry team',
        src: 'JP 1-02'
    },
    {
        abbr: 'UN',
        def: 'United Nations',
        src: '1-02'
    },
    {
        abbr: 'UN CMCoord',
        def: 'United Nations humanitarian civil-military coordination',
        src: '1-02'
    },
    {
        abbr: 'UN-DMT',
        def: 'United Nations disaster management team',
        src: '1-02'
    },
    {
        abbr: 'UNAMIR',
        def: 'United Nations Assistance Mission in Rwanda',
        src: 'JP 1-02'
    },
    {
        abbr: 'UNC',
        def: 'United Nations Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'UNCLOS',
        def: 'United Nations Convention on the Law of the Sea',
        src: '1-02'
    },
    {
        abbr: 'UNCTAD',
        def: 'United Nations Conference on Trade and Development',
        src: 'JP 1-02'
    },
    {
        abbr: 'UND',
        def: 'urgency of need designator',
        src: '1-02'
    },
    {
        abbr: 'UNDAC',
        def: 'United Nations disaster assessment and coordination',
        src: '1-02'
    },
    {
        abbr: 'UNDFS',
        def: 'United Nations Department of Field Support',
        src: '1-02'
    },
    {
        abbr: 'UNDHA',
        def: 'United Nations Department of Humanitarian Affairs',
        src: 'JP 1-02'
    },
    {
        abbr: 'UNDP',
        def: 'United Nations development programme',
        src: '1-02'
    },
    {
        abbr: 'UNDPKO',
        def: 'United Nations Department for Peacekeeping Operations',
        src: '1-02'
    },
    {
        abbr: 'UNEF',
        def: 'United Nations emergency force',
        src: 'JP 1-02'
    },
    {
        abbr: 'UNEP',
        def: 'United Nations environment programme',
        src: '1-02'
    },
    {
        abbr: 'UNESCO',
        def: 'United Nations Educational, Scientific, and Cultural Organization',
        src: 'JP 1-02'
    },
    {
        abbr: 'UNHAS',
        def: 'United Nations Humanitarian Air Service',
        src: '1-02'
    },
    {
        abbr: 'UNHCHR',
        def: 'United Nations High Commissioner for Human Rights',
        src: '1-02'
    },
    {
        abbr: 'UNHCR',
        def: 'United Nations Office of the High Commissioner for Refugees',
        src: '1-02'
    },
    {
        abbr: 'UNHQ',
        def: 'United Nations Headquarters',
        src: '1-02'
    },
    {
        abbr: 'UNICEF',
        def: 'United Nations Children\'s Fund',
        src: '1-02'
    },
    {
        abbr: 'UNIFIL',
        def: 'United Nations Interim Force in Lebanon',
        src: 'JP 1-02'
    },
    {
        abbr: 'UNIL',
        def: 'unclassified national information library',
        src: 'JP 2-03'
    },
    {
        abbr: 'UNITAF',
        def: 'unified task force',
        src: '1-02'
    },
    {
        abbr: 'UNITAR',
        def: 'United Nations Institute for Training and Research',
        src: 'JP 1-02'
    },
    {
        abbr: 'UNITREP',
        def: 'unit status and identity report',
        src: 'JP 1-02'
    },
    {
        abbr: 'UNJLC',
        def: 'United Nations Joint Logistic Centre',
        src: '1-02'
    },
    {
        abbr: 'UNLOC',
        def: 'United Nations logistic course',
        src: 'JP 1-02'
    },
    {
        abbr: 'UNMEM',
        def: 'United Nations military expert on mission',
        src: '1-02'
    },
    {
        abbr: 'UNMIH',
        def: 'United Nations Mission in Haiti',
        src: 'JP 1-02'
    },
    {
        abbr: 'UNMILPOC',
        def: 'United Nations military police course',
        src: 'JP 1-02'
    },
    {
        abbr: 'UNMOC',
        def: 'United Naitons military observers course',
        src: 'JP 1-02'
    },
    {
        abbr: 'UNMOVCC',
        def: 'United Nations movement control course',
        src: 'JP 1-02'
    },
    {
        abbr: 'UNO',
        def: 'unit number',
        src: 'JP 1-02'
    },
    {
        abbr: 'UNOCHA',
        def: 'United Nations Office for the Coordination of Humanitarian Affairs',
        src: '1-02'
    },
    {
        abbr: 'UNODC',
        def: 'United Nations Office on Drugs and Crime',
        src: 'JP 3-07.4'
    },
    {
        abbr: 'UNODIR',
        def: 'unless otherwise directed',
        src: 'JP 1-02'
    },
    {
        abbr: 'UNOSOM',
        def: 'United Nations Operations in Somalia',
        src: '1-02'
    },
    {
        abbr: 'UNPA',
        def: 'United Nations Participation Act',
        src: '1-02'
    },
    {
        abbr: 'UNPROFOR',
        def: 'United Nations protection force',
        src: '1-02'
    },
    {
        abbr: 'UNREP',
        def: 'underway replenishment',
        src: 'JP 1-02'
    },
    {
        abbr: 'UNREP CONSOL',
        def: 'underway replenishment consolidation',
        src: 'JP 1-02'
    },
    {
        abbr: 'UNRWA',
        def: 'United Nations Relief and Works Agency for Palestine Refugees in the Near East',
        src: 'JP 1-02'
    },
    {
        abbr: 'UNSC',
        def: 'United Nations Security Council',
        src: '1-02'
    },
    {
        abbr: 'UNSCR',
        def: 'United Nations Security Council resolution',
        src: '1-02'
    },
    {
        abbr: 'UNSG',
        def: 'United Nations Secretary-General',
        src: '1-02'
    },
    {
        abbr: 'UNSOC',
        def: 'United Nations staff officers course',
        src: 'JP 1-02'
    },
    {
        abbr: 'UNTAC',
        def: 'United Nations Transition Authority in Cambodia',
        src: 'JP 1-02'
    },
    {
        abbr: 'UNTSO',
        def: 'United Nations Truce and Supervision Organization',
        src: 'JP 1-02'
    },
    {
        abbr: 'UNV',
        def: 'United Nations volunteer',
        src: 'JP 1-02'
    },
    {
        abbr: 'UOF',
        def: 'use of force',
        src: 'JP 1-02'
    },
    {
        abbr: 'UON',
        def: 'urgent operational need',
        src: '1-02'
    },
    {
        abbr: 'UP&TT',
        def: 'unit personnel and tonnage table',
        src: 'JP 1-02'
    },
    {
        abbr: 'URDB',
        def: 'user requirements database',
        src: 'JP 1-02'
    },
    {
        abbr: 'URL',
        def: 'uniform resource locater',
        src: '1-02'
    },
    {
        abbr: 'USA',
        def: 'United States Army',
        src: '1-02'
    },
    {
        abbr: 'USAB',
        def: 'United States Army barracks',
        src: 'JP 1-02'
    },
    {
        abbr: 'USACCSA',
        def: 'United States Army Command and Control Support Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'USACE',
        def: 'United States Army Corps of Engineers',
        src: '1-02'
    },
    {
        abbr: 'USACFSC',
        def: 'United States Army Community and Family Support Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'USACHPPM',
        def: 'United States Army Center for Health Promotion and Preventive Medicine',
        src: '1-02'
    },
    {
        abbr: 'USACIDC',
        def: 'United States Army Criminal Investigation Command',
        src: '1-02'
    },
    {
        abbr: 'USAEDS',
        def: 'United States Atomic Energy Detection System',
        src: '1-02'
    },
    {
        abbr: 'USAF',
        def: 'United States Air Force',
        src: '1-02'
    },
    {
        abbr: 'USAFE',
        def: 'United States Air Forces in Europe',
        src: 'JP 1-02'
    },
    {
        abbr: 'USAFEP',
        def: 'United States Air Force, Europe pamphlet',
        src: 'JP 1-02'
    },
    {
        abbr: 'USAFLANT',
        def: 'United States Air Force, Atlantic Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'USAFR',
        def: 'United States Air Force Reserve',
        src: 'JP 1-02'
    },
    {
        abbr: 'USAFRICOM',
        def: 'United States Africa Command',
        src: '1-02'
    },
    {
        abbr: 'USAFSOC',
        def: 'United States Air Force, Special Operations Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'USAFSOF',
        def: 'United States Air Force, Special Operations Forces',
        src: 'JP 1-02'
    },
    {
        abbr: 'USAFSOS',
        def: 'United States Air Force Special Operations School',
        src: '1-02'
    },
    {
        abbr: 'USAID',
        def: 'United States Agency for International Development',
        src: '1-02'
    },
    {
        abbr: 'USAITAC',
        def: 'United States Army Intelligence Threat Analysis Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'USAJFKSWC',
        def: 'United States Army John F. Kennedy Special Warfare Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'USAMC',
        def: 'United States Army Materiel Command',
        src: '1-02'
    },
    {
        abbr: 'USAMMA',
        def: 'United States Army Medical Materiel Agency',
        src: '1-02'
    },
    {
        abbr: 'USAMPS',
        def: 'United States Army Military Police School',
        src: 'JP 1-02'
    },
    {
        abbr: 'USAMRICD',
        def: 'United States Army Medical Research Institute of Chemical Defense',
        src: '1-02'
    },
    {
        abbr: 'USAMRIID',
        def: 'United States Army Medical Research Institute of Infectious Diseases',
        src: '1-02'
    },
    {
        abbr: 'USAMRMC',
        def: 'United States Army Medical Research and Materiel Command',
        src: '1-02'
    },
    {
        abbr: 'USANCA',
        def: 'United States Army Nuclear and Combating Weapons of Mass Destruction Agency',
        src: 'JP 3-11'
    },
    {
        abbr: 'USAO',
        def: 'United States Attorney Office',
        src: 'JP 1-02'
    },
    {
        abbr: 'USAR',
        def: 'United States Army Reserve',
        src: '1-02'
    },
    {
        abbr: 'USARCENT',
        def: 'United States Army, Central Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'USARDECOM',
        def: 'United States Army Research, Development, and Engineering Command',
        src: '1-02'
    },
    {
        abbr: 'USAREUR',
        def: 'United States Army, European Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'USARIEM',
        def: 'United States Army Research Institute of Environmental Medicine',
        src: 'JP 4-02'
    },
    {
        abbr: 'USARJ',
        def: 'United States Army, Japan',
        src: 'JP 1-02'
    },
    {
        abbr: 'USARNORTH',
        def: 'United States Army, North',
        src: '1-02'
    },
    {
        abbr: 'USARPAC',
        def: 'United States Army, Pacific Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'USARSO',
        def: 'United States Army, Southern Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'USASMDC/ARSTRAT',
        def: 'United States Army Space and Missile Defense Command/Army Forces Strategic Command',
        src: '1-02'
    },
    {
        abbr: 'USASOC',
        def: 'United States Army Special Operations Command',
        src: '1-02'
    },
    {
        abbr: 'USB',
        def: 'upper side band',
        src: 'JP 1-02'
    },
    {
        abbr: 'USBP',
        def: 'United States Border Patrol',
        src: 'JP 1-02'
    },
    {
        abbr: 'USC',
        def: 'United States Code; universal service contract',
        src: '1-02'
    },
    {
        abbr: 'USCENTAF',
        def: 'United States Central Command Air Forces',
        src: 'JP 1-02'
    },
    {
        abbr: 'USCENTCOM',
        def: 'United States Central Command',
        src: '1-02'
    },
    {
        abbr: 'USCG',
        def: 'United States Coast Guard',
        src: '1-02'
    },
    {
        abbr: 'USCGR',
        def: 'United States Coast Guard Reserve',
        src: '1-02'
    },
    {
        abbr: 'USCIS',
        def: 'United States Citizenship and Immigration Services',
        src: '1-02'
    },
    {
        abbr: 'USCS',
        def: 'United States Cryptologic System; United States Customs Service',
        src: 'JP 1-02'
    },
    {
        abbr: 'USCYBERCOM',
        def: 'United States Cyber Command',
        src: '1-02'
    },
    {
        abbr: 'USD(A&T)',
        def: 'Under Secretary of Defense for Acquisition and Technology',
        src: 'JP 1-02'
    },
    {
        abbr: 'USD(AT&L)',
        def: 'Under Secretary of Defense for Acquisition, Technology, and Logistics',
        src: '1-02'
    },
    {
        abbr: 'USD(C/CFO)',
        def: 'Under Secretary of Defense (Comptroller)',
        src: '1-02'
    },
    {
        abbr: 'USD(I)',
        def: 'Under Secretary of Defense for Intelligence',
        src: '1-02'
    },
    {
        abbr: 'USD(P&R)',
        def: 'Under Secretary of Defense for Personnel and Readiness',
        src: '1-02'
    },
    {
        abbr: 'USD(P)',
        def: 'Under Secretary of Defense for Policy',
        src: '1-02'
    },
    {
        abbr: 'USD(R&E)',
        def: 'Under Secretary of Defense for Research and Engineering',
        src: 'JP 1-02'
    },
    {
        abbr: 'USDA',
        def: 'United States Department of Agriculture',
        src: '1-02'
    },
    {
        abbr: 'USDAO',
        def: 'United States defense attache office',
        src: '1-02'
    },
    {
        abbr: 'USDELMC',
        def: 'United States Delegation to the NATO Military Committee',
        src: 'JP 1-02'
    },
    {
        abbr: 'USELEMCMOC',
        def: 'United States Element Cheyenne Mountain Operations Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'USELEMNORAD',
        def: 'United States Element, North American Aerospace Defense Command',
        src: '1-02'
    },
    {
        abbr: 'USERID',
        def: 'user identification',
        src: 'JP 1-02'
    },
    {
        abbr: 'USERRA',
        def: 'Uniformed Services Employment and Reemployment Rights Act ',
        src: '1-02'
    },
    {
        abbr: 'USEUCOM',
        def: 'United States European Command',
        src: '1-02'
    },
    {
        abbr: 'USFF',
        def: 'United States Fleet Forces Command',
        src: '1-02'
    },
    {
        abbr: 'USFJ',
        def: 'United States Forces, Japan',
        src: 'JP 1-02'
    },
    {
        abbr: 'USFK',
        def: 'United States Forces, Korea',
        src: 'JP 1-02'
    },
    {
        abbr: 'USFORAZORES',
        def: 'United States Forces, Azores',
        src: 'JP 1-02'
    },
    {
        abbr: 'USFS',
        def: 'United States Forest Service',
        src: 'JP 1-02'
    },
    {
        abbr: 'USFWS',
        def: 'United States Fish and Wildlife Service',
        src: 'JP 1-02'
    },
    {
        abbr: 'USG',
        def: 'United States Government',
        src: '1-02'
    },
    {
        abbr: 'USGS',
        def: 'United States Geological Survey',
        src: '1-02'
    },
    {
        abbr: 'USIA',
        def: 'United States Information Agency',
        src: 'JP 1-02'
    },
    {
        abbr: 'USIC',
        def: 'United States interdiction coordinator',
        src: 'JP 1-02'
    },
    {
        abbr: 'USIS',
        def: 'United States Information Service',
        src: 'JP 1-02'
    },
    {
        abbr: 'USJFCOM',
        def: 'United States Joint Forces Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'USLANTFLT',
        def: 'United States Atlantic Fleet',
        src: 'JP 1-02'
    },
    {
        abbr: 'USLO',
        def: 'United States liaison office; United States liaison officer',
        src: '1-02'
    },
    {
        abbr: 'USMARFORCENT',
        def: 'United States Marine Component, Central Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'USMARFORLANT',
        def: 'United States Marine Component, Atlantic Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'USMARFORNORTH',
        def: 'United States Marine Corps Forces North',
        src: '1-02'
    },
    {
        abbr: 'USMARFORPAC',
        def: 'United States Marine Component, Pacific Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'USMARFORSOUTH',
        def: 'United States Marine Component, Southern Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'USMC',
        def: 'United States Marine Corps',
        src: '1-02'
    },
    {
        abbr: 'USMCEB',
        def: 'United States Military Communications-Electronics Board',
        src: 'JP 1-02'
    },
    {
        abbr: 'USMCR',
        def: 'United States Marine Corps Reserve',
        src: 'JP 1-02'
    },
    {
        abbr: 'USMER',
        def: 'United States merchant ship vessel locator reporting system',
        src: 'JP 1-02'
    },
    {
        abbr: 'USMILGP',
        def: 'United States military group',
        src: 'JP 1-02'
    },
    {
        abbr: 'USMILREP',
        def: 'United States military representative',
        src: 'JP 1-02'
    },
    {
        abbr: 'USML',
        def: 'United States Munitions List',
        src: '1-02'
    },
    {
        abbr: 'USMOG-W',
        def: 'United States Military Observer Group - Washington',
        src: '1-02'
    },
    {
        abbr: 'USMS',
        def: 'United States Marshals Service',
        src: 'JP 1-02'
    },
    {
        abbr: 'USMTF',
        def: 'United States message text format',
        src: '1-02'
    },
    {
        abbr: 'USMTM',
        def: 'United States military training mission',
        src: 'JP 1-02'
    },
    {
        abbr: 'USN',
        def: 'United States Navy',
        src: '1-02'
    },
    {
        abbr: 'USNAVCENT',
        def: 'United States Naval Forces, Central Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'USNAVEUR',
        def: 'United States Naval Forces, Europe',
        src: 'JP 1-02'
    },
    {
        abbr: 'USNAVSO',
        def: 'US Naval Forces Southern Command',
        src: '1-02'
    },
    {
        abbr: 'USNCB',
        def: 'United States National Central Bureau (INTERPOL)',
        src: 'JP 1-02'
    },
    {
        abbr: 'USNMR',
        def: 'United States National Military representative',
        src: 'JP 1-02'
    },
    {
        abbr: 'USNMTG',
        def: 'United States North Atlantic Treaty Organization (NATO) Military Terminology Group',
        src: 'JP 1-02'
    },
    {
        abbr: 'USNO',
        def: 'United States Naval Observatory',
        src: '1-02'
    },
    {
        abbr: 'USNORTHCOM',
        def: 'United States Northern Command',
        src: '1-02'
    },
    {
        abbr: 'USNR',
        def: 'United States Navy Reserve',
        src: 'JP 1-02'
    },
    {
        abbr: 'USNS',
        def: 'United States Naval Ship',
        src: '1-02'
    },
    {
        abbr: 'USPACAF',
        def: 'United States Air Forces, Pacific Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'USPACFLT',
        def: 'United States Pacific Fleet',
        src: 'JP 1-02'
    },
    {
        abbr: 'USPACOM',
        def: 'United States Pacific Command',
        src: '1-02'
    },
    {
        abbr: 'USPFO(P&C)',
        def: 'United States Property and Fiscal Office (Purchasing and \t\t\t\t\tContracting)',
        src: 'JP 4-10'
    },
    {
        abbr: 'USPHS',
        def: 'United States Public Health Service',
        src: '1-02'
    },
    {
        abbr: 'USPS',
        def: 'United States Postal Service',
        src: '1-02'
    },
    {
        abbr: 'USREPMC',
        def: 'United States representative to the military committee (NATO)',
        src: 'JP 1-02'
    },
    {
        abbr: 'USSOCOM',
        def: 'United States Special Operations Command',
        src: '1-02'
    },
    {
        abbr: 'USSOUTHAF',
        def: 'United States Air Force, Southern Command',
        src: 'JP 1-02'
    },
    {
        abbr: 'USSOUTHCOM',
        def: 'United States Southern Command',
        src: '1-02'
    },
    {
        abbr: 'USSS',
        def: 'United States Secret Service (TREAS); United States Signals Intelligence (SIGINT) System',
        src: 'JP 1-02'
    },
    {
        abbr: 'USSTRATCOM',
        def: 'United States Strategic Command',
        src: '1-02'
    },
    {
        abbr: 'USTRANSCOM',
        def: 'United States Transportation Command',
        src: '1-02'
    },
    {
        abbr: 'USUN',
        def: 'United States Mission to the United Nations',
        src: '1-02'
    },
    {
        abbr: 'USW',
        def: 'undersea warfare',
        src: '1-02'
    },
    {
        abbr: 'USW/USWC',
        def: 'undersea warfare and/or undersea warfare commander',
        src: 'JP 1-02'
    },
    {
        abbr: 'USYG',
        def: 'under secretary general',
        src: '1-02'
    },
    {
        abbr: 'UT1',
        def: 'unit trainer; Universal Time',
        src: 'JP 1-02'
    },
    {
        abbr: 'UTC',
        def: 'Coordinated Universal Time; unit type code',
        src: '1-02'
    },
    {
        abbr: 'UTM',
        def: 'universal transverse mercator',
        src: 'JP 1-02'
    },
    {
        abbr: 'UTO',
        def: 'unit table of organization',
        src: 'JP 1-02'
    },
    {
        abbr: 'UTR',
        def: 'underwater tracking range',
        src: 'JP 1-02'
    },
    {
        abbr: 'UUV',
        def: 'unmanned underwater vehicle; unmanned underwater vessel',
        src: '1-02'
    },
    {
        abbr: 'UVEPROM',
        def: 'ultraviolet erasable programmable read-only memory',
        src: 'JP 1-02'
    },
    {
        abbr: 'UW',
        def: 'unconventional warfare',
        src: '1-02'
    },
    {
        abbr: 'UWOA',
        def: 'unconventional warfare operating area',
        src: 'JP 1-02'
    },
    {
        abbr: 'UXO',
        def: 'unexploded explosive ordnance; unexploded ordnance',
        src: '1-02'
    },
    {
        abbr: 'V',
        def: 'search and rescue unit ground speed; sector pattern; volt',
        src: 'JP 1-02'
    },
    {
        abbr: 'v',
        def: 'velocity of target drift',
        src: 'JP 1-02'
    },
    {
        abbr: 'V&A',
        def: 'valuation and availability',
        src: '1-02'
    },
    {
        abbr: 'V/STOL',
        def: 'vertical and/or short takeoff and landing aircraft',
        src: 'JP 1-02'
    },
    {
        abbr: 'VA',
        def: 'Veterans Administration; victim advocate; vulnerability assessment',
        src: '1-02'
    },
    {
        abbr: 'VAAP',
        def: 'vulnerability assessment and assistance program',
        src: '1-02'
    },
    {
        abbr: 'VAC',
        def: 'volts, alternating current',
        src: 'JP 1-02'
    },
    {
        abbr: 'VARVAL',
        def: 'vessel arrival data, list of vessels available to marine safety offices and captains of the port',
        src: 'JP 1-02'
    },
    {
        abbr: 'VAT B',
        def: 'visibility (in miles), amount (of clouds, in eighths), (height of cloud) top (in thousands of feet), (height of cloud) base (in thousands of feet)',
        src: 'JP 1-02'
    },
    {
        abbr: 'VBIED',
        def: 'vehicle-borne improvised explosive device',
        src: '1-02'
    },
    {
        abbr: 'VBS',
        def: 'visit, board, search',
        src: 'JP 1-02'
    },
    {
        abbr: 'VBSS',
        def: 'visit, board, search, and seizure',
        src: '1-02'
    },
    {
        abbr: 'VCC',
        def: 'voice communications circuit',
        src: 'JP 1-02'
    },
    {
        abbr: 'VCG',
        def: 'virtual coordination group',
        src: 'JP 1-02'
    },
    {
        abbr: 'VCJCS',
        def: 'Vice Chairman of the Joint Chiefs of Staff',
        src: '1-02'
    },
    {
        abbr: 'VCNOG',
        def: 'Vice Chairman, Nuclear Operations Group',
        src: 'JP 1-02'
    },
    {
        abbr: 'VCO',
        def: 'voltage controlled oscillator',
        src: 'JP 1-02'
    },
    {
        abbr: 'VCOPG',
        def: 'Vice Chairman, Operations Planners Group',
        src: 'JP 1-02'
    },
    {
        abbr: 'VCR',
        def: 'violent crime report',
        src: 'JP 1-02'
    },
    {
        abbr: 'VCXO',
        def: 'voltage controlled crystal oscillator; voltage controlled oscillator',
        src: 'JP 1-02'
    },
    {
        abbr: 'VDC',
        def: 'volts, direct current',
        src: 'JP 1-02'
    },
    {
        abbr: 'VDJS',
        def: 'Vice Director, Joint Staff',
        src: 'JP 1-02'
    },
    {
        abbr: 'VDL',
        def: 'video downlink',
        src: '1-02'
    },
    {
        abbr: 'VDR',
        def: 'voice digitization rate',
        src: 'JP 1-02'
    },
    {
        abbr: 'VDS',
        def: 'video subsystem',
        src: 'JP 1-02'
    },
    {
        abbr: 'VDSD',
        def: 'visual distress signaling device',
        src: 'JP 1-02'
    },
    {
        abbr: 'VDU',
        def: 'visual display unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'VDUC',
        def: 'visual display unit controller',
        src: 'JP 1-02'
    },
    {
        abbr: 'VE',
        def: 'vertical error',
        src: '1-02'
    },
    {
        abbr: 'VEE',
        def: 'Venezuelan equine encephalitis',
        src: '1-02'
    },
    {
        abbr: 'VEH',
        def: 'vehicle; vehicular cargo',
        src: 'JP 1-02'
    },
    {
        abbr: 'VEO',
        def: 'violent extremist organization',
        src: '1-02'
    },
    {
        abbr: 'VERTREP',
        def: 'vertical replenishment',
        src: '1-02'
    },
    {
        abbr: 'VF',
        def: 'voice frequency',
        src: 'JP 1-02'
    },
    {
        abbr: 'VFR',
        def: 'visual flight rules',
        src: 'JP 1-02'
    },
    {
        abbr: 'VFS',
        def: 'validating flight surgeon',
        src: 'JP 4-02'
    },
    {
        abbr: 'VFTG',
        def: 'voice frequency telegraph',
        src: 'JP 1-02'
    },
    {
        abbr: 'VHF',
        def: 'very high frequency',
        src: '1-02'
    },
    {
        abbr: 'VI',
        def: 'visual information',
        src: '1-02'
    },
    {
        abbr: 'VICE',
        def: 'advice',
        src: 'JP 1-02'
    },
    {
        abbr: 'VID',
        def: 'visual identification; visual identification information display',
        src: '1-02'
    },
    {
        abbr: 'VINSON',
        def: 'encrypted ultrahigh frequency communications system',
        src: 'JP 1-02'
    },
    {
        abbr: 'VIP',
        def: 'very important person; visual information processor',
        src: 'JP 1-02'
    },
    {
        abbr: 'VIRS',
        def: 'verbally initiated release system',
        src: 'JP 1-02'
    },
    {
        abbr: 'VIS',
        def: 'visual imaging system',
        src: 'JP 1-02'
    },
    {
        abbr: 'VISA',
        def: 'Voluntary Intermodal Sealift Agreement',
        src: '1-02'
    },
    {
        abbr: 'VISOBS',
        def: 'visual observer',
        src: 'JP 1-02'
    },
    {
        abbr: 'VIXS',
        def: 'video information exchange system',
        src: 'JP 1-02'
    },
    {
        abbr: 'VLA',
        def: 'vertical line array; visual landing aid',
        src: 'JP 1-02'
    },
    {
        abbr: 'VLF',
        def: 'very low frequency',
        src: 'JP 1-02'
    },
    {
        abbr: 'VLR',
        def: 'very-long-range aircraft',
        src: 'JP 1-02'
    },
    {
        abbr: 'VMap',
        def: 'vector map',
        src: '1-02'
    },
    {
        abbr: 'VMAQ',
        def: 'Marine tactical electronic warfare squadron',
        src: '1-02'
    },
    {
        abbr: 'VMC',
        def: 'visual meteorological conditions',
        src: '1-02'
    },
    {
        abbr: 'VMF',
        def: 'variable message format',
        src: 'JP 1-02'
    },
    {
        abbr: 'VMGR',
        def: 'Marine aerial refueler and transport squadron',
        src: 'JP 1-02'
    },
    {
        abbr: 'VMI',
        def: 'vendor managed inventory',
        src: 'JP 1-02'
    },
    {
        abbr: 'VNTK',
        def: 'target vulnerability indicator designating degree of hardness; susceptibility of blast; and K-factor',
        src: 'JP 1-02'
    },
    {
        abbr: 'VO',
        def: 'validation office',
        src: 'JP 1-02'
    },
    {
        abbr: 'VOCODER',
        def: 'voice encoder',
        src: 'JP 1-02'
    },
    {
        abbr: 'VOCU',
        def: 'voice orderwire control unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'VOD',
        def: 'vertical onboard delivery',
        src: 'JP 1-02'
    },
    {
        abbr: 'vol',
        def: 'volume',
        src: 'JP 1-02'
    },
    {
        abbr: 'VOL',
        def: 'volunteer',
        src: 'JP 1-02'
    },
    {
        abbr: 'VOLS',
        def: 'vertical optical landing system',
        src: 'JP 1-02'
    },
    {
        abbr: 'VOR',
        def: 'very high frequency omnidirectional range station',
        src: 'JP 1-02'
    },
    {
        abbr: 'VORTAC',
        def: 'very high frequency omnidirectional range station and/or tactical air navigation',
        src: 'JP 1-02'
    },
    {
        abbr: 'VOX',
        def: 'voice actuation (keying)',
        src: 'JP 1-02'
    },
    {
        abbr: 'VP',
        def: 'video processor',
        src: 'JP 1-02'
    },
    {
        abbr: 'VPB',
        def: 'version planning board',
        src: 'JP 1-02'
    },
    {
        abbr: 'VPD',
        def: 'version planning document',
        src: 'JP 1-02'
    },
    {
        abbr: 'VPV',
        def: 'virtual prime vendor',
        src: '1-02'
    },
    {
        abbr: 'VS',
        def: 'sector single-unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'VS&PT',
        def: 'vehicle summary and priority table',
        src: 'JP 1-02'
    },
    {
        abbr: 'VSG',
        def: 'virtual support group',
        src: 'JP 1-02'
    },
    {
        abbr: 'VSP',
        def: 'voice selection panel',
        src: 'JP 1-02'
    },
    {
        abbr: 'VSR',
        def: 'sector single-unit radar',
        src: 'JP 1-02'
    },
    {
        abbr: 'VSW',
        def: 'very shallow water',
        src: 'JP 1-02'
    },
    {
        abbr: 'VTA',
        def: 'voluntary tanker agreement',
        src: '1-02'
    },
    {
        abbr: 'VTC',
        def: 'video teleconferencing',
        src: '1-02'
    },
    {
        abbr: 'VTOL',
        def: 'vertical takeoff and landing',
        src: 'JP 1-02'
    },
    {
        abbr: 'VTOL-UAS',
        def: 'vertical takeoff and landing unmanned aircraft system',
        src: '1-02'
    },
    {
        abbr: 'VTOL-UAV',
        def: 'vertical takeoff and landing unmanned aerial vehicle',
        src: '1-02'
    },
    {
        abbr: 'VTS',
        def: 'vessel traffic service',
        src: 'JP 1-02'
    },
    {
        abbr: 'VTT',
        def: 'video teletraining',
        src: 'JP 1-02'
    },
    {
        abbr: 'VU',
        def: 'volume unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'VV&A',
        def: 'verification, validation, and accreditation',
        src: 'JP 1-02'
    },
    {
        abbr: 'VV&C',
        def: 'verification, validation, and certification',
        src: 'JP 1-02'
    },
    {
        abbr: 'VX',
        def: 'nerve agent (O-Ethyl S-Diisopropylaminomethyl Methylphosphonothiolate)',
        src: 'JP 1-02'
    },
    {
        abbr: 'W',
        def: 'sweep width',
        src: 'JP 1-02'
    },
    {
        abbr: 'w',
        def: 'search subarea width',
        src: 'JP 1-02'
    },
    {
        abbr: 'WAAR',
        def: 'Wartime Aircraft Activity Report',
        src: 'JP 1-02'
    },
    {
        abbr: 'WACBE',
        def: 'World Area Code Basic Encyclopedia',
        src: 'JP 1-02'
    },
    {
        abbr: 'WADS',
        def: 'Western Air Defense Sector',
        src: '1-02'
    },
    {
        abbr: 'WAGB',
        def: 'icebreaker (USCG)',
        src: 'JP 1-02'
    },
    {
        abbr: 'WAI',
        def: 'weather area of interest',
        src: '1-02'
    },
    {
        abbr: 'WAN',
        def: 'wide-area network',
        src: 'JP 1-02'
    },
    {
        abbr: 'WANGO',
        def: 'World Association of Non-Governmental Organizations ',
        src: '1-02'
    },
    {
        abbr: 'WARM',
        def: 'wartime reserve mode',
        src: '1-02'
    },
    {
        abbr: 'WARNORD',
        def: 'warning order',
        src: '1-02'
    },
    {
        abbr: 'WARP',
        def: 'web-based access and retrieval portal',
        src: '1-02'
    },
    {
        abbr: 'WAS',
        def: 'wide area surveillance',
        src: 'JP 1-02'
    },
    {
        abbr: 'WASP',
        def: 'war air service program',
        src: 'JP 1-02'
    },
    {
        abbr: 'WATCHCON',
        def: 'watch condition',
        src: 'JP 1-02'
    },
    {
        abbr: 'WB',
        def: 'wideband',
        src: 'JP 1-02'
    },
    {
        abbr: 'WBGTI',
        def: 'wet bulb globe temperature index',
        src: '1-02'
    },
    {
        abbr: 'WBIED',
        def: 'waterborne improvised explosive device',
        src: '1-02'
    },
    {
        abbr: 'WC',
        def: 'wind current',
        src: 'JP 1-02'
    },
    {
        abbr: 'WCA',
        def: 'water clearance authority',
        src: 'JP 1-02'
    },
    {
        abbr: 'WCCS',
        def: 'Wing Command and Control System',
        src: 'JP 1-02'
    },
    {
        abbr: 'WCDO',
        def: 'War Consumables Distribution Objective',
        src: 'JP 1-02'
    },
    {
        abbr: 'WCE',
        def: 'weapons of mass destruction coordination element',
        src: '1-02'
    },
    {
        abbr: 'WCO',
        def: 'World Customs Organization',
        src: '1-02'
    },
    {
        abbr: 'WCS',
        def: 'weapons control status',
        src: '1-02'
    },
    {
        abbr: 'WDCO',
        def: 'well deck control officer',
        src: '1-02'
    },
    {
        abbr: 'WDT',
        def: 'warning and display terminal',
        src: 'JP 1-02'
    },
    {
        abbr: 'WEAX',
        def: 'weather facsimile',
        src: 'JP 1-02'
    },
    {
        abbr: 'Web SM',
        def: 'Web scheduling and movement',
        src: '1-02'
    },
    {
        abbr: 'WES',
        def: 'weapon engagement status',
        src: 'JP 1-02'
    },
    {
        abbr: 'WETM',
        def: 'weather team',
        src: 'JP 1-02'
    },
    {
        abbr: 'WEU',
        def: 'Western European Union',
        src: 'JP 1-02'
    },
    {
        abbr: 'WEZ',
        def: 'weapon engagement zone',
        src: '1-02'
    },
    {
        abbr: 'WFE',
        def: 'warfighting environment',
        src: 'JP 1-02'
    },
    {
        abbr: 'WFP',
        def: 'World Food Programme (UN)',
        src: '1-02'
    },
    {
        abbr: 'WG',
        def: 'working group',
        src: '1-02'
    },
    {
        abbr: 'WGS',
        def: 'Wideband Global Satellite Communications; World Geodetic System',
        src: '1-02'
    },
    {
        abbr: 'WGS 84',
        def: 'World Geodetic System 1984',
        src: '1-02'
    },
    {
        abbr: 'WH',
        def: 'wounded due to hostilities',
        src: 'JP 1-02'
    },
    {
        abbr: 'WHEC',
        def: 'high-endurance cutter (USCG)',
        src: 'JP 1-02'
    },
    {
        abbr: 'WHNRS',
        def: 'wartime host-nation religious support',
        src: 'JP 1-02'
    },
    {
        abbr: 'WHNS',
        def: 'wartime host-nation support',
        src: 'JP 1-02'
    },
    {
        abbr: 'WHNSIMS',
        def: 'Wartime Host Nation Support Information Management System',
        src: 'JP 1-02'
    },
    {
        abbr: 'WHO',
        def: 'World Health Organization (UN)',
        src: '1-02'
    },
    {
        abbr: 'WIA',
        def: 'wounded in action',
        src: '1-02'
    },
    {
        abbr: 'WISDIM',
        def: 'Warfighting and Intelligence Systems Dictionary for Information Management',
        src: 'JP 1-02'
    },
    {
        abbr: 'WISP',
        def: 'Wartime Information Security Program',
        src: 'JP 1-02'
    },
    {
        abbr: 'WIT',
        def: 'weapons intelligence team',
        src: '1-02'
    },
    {
        abbr: 'WLG',
        def: 'Washington Liaison Group',
        src: 'JP 1-02'
    },
    {
        abbr: 'WMD',
        def: 'weapons of mass destruction',
        src: '1-02'
    },
    {
        abbr: 'WMD CM',
        def: 'weapons of mass destruction consequence management',
        src: '1-02'
    },
    {
        abbr: 'WMD-CST',
        def: 'weapons of mass destruction-civil support team',
        src: '1-02'
    },
    {
        abbr: 'WMD-E',
        def: 'weapons of mass destruction-elimination',
        src: '1-02'
    },
    {
        abbr: 'WMEC',
        def: 'Coast Guard medium-endurance cutter',
        src: 'JP 1-02'
    },
    {
        abbr: 'WMO',
        def: 'World Meteorological Organization',
        src: '1-02'
    },
    {
        abbr: 'WMP',
        def: 'Air Force War and Mobilization Plan; War and Mobilization Plan',
        src: 'JP 1-02'
    },
    {
        abbr: 'WOC',
        def: 'wing operations center (USAF)',
        src: 'JP 1-02'
    },
    {
        abbr: 'WOD',
        def: 'wind-over deck; word-of-day',
        src: '1-02'
    },
    {
        abbr: 'WORM',
        def: 'write once read many',
        src: 'JP 1-02'
    },
    {
        abbr: 'WOT',
        def: 'war on terrorism',
        src: 'JP 3-0'
    },
    {
        abbr: 'WP',
        def: 'white phosphorous; working party; Working Party (NATO)',
        src: '1-02'
    },
    {
        abbr: 'WPA',
        def: 'water jet propulsion assembly',
        src: 'JP 1-02'
    },
    {
        abbr: 'WPAL',
        def: 'wartime personnel allowance list',
        src: 'JP 1-02'
    },
    {
        abbr: 'WPARR',
        def: 'War Plans Additive Requirements Roster',
        src: 'JP 1-02'
    },
    {
        abbr: 'WPB',
        def: 'Coast Guard patrol boat',
        src: 'JP 1-02'
    },
    {
        abbr: 'WPC',
        def: 'Washington Planning Center',
        src: 'JP 1-02'
    },
    {
        abbr: 'WPM',
        def: 'words per minute',
        src: 'JP 1-02'
    },
    {
        abbr: 'WPN',
        def: 'weapon',
        src: 'JP 1-02'
    },
    {
        abbr: 'WPR',
        def: 'War Powers Resolution',
        src: '1-02'
    },
    {
        abbr: 'WR',
        def: 'war reserve; weapon radius',
        src: 'JP 1-02'
    },
    {
        abbr: 'WRA',
        def: 'Office of Weapons Removal and Abatement (DOS); weapons release authority',
        src: '1-02'
    },
    {
        abbr: 'WRAIR',
        def: 'Walter Reed Army Institute of Research',
        src: 'JP 4-02'
    },
    {
        abbr: 'WRC',
        def: 'World Radiocommunication Conference',
        src: 'JP 1-02'
    },
    {
        abbr: 'WRL',
        def: 'weapons release line',
        src: 'JP 1-02'
    },
    {
        abbr: 'WRM',
        def: 'war reserve materiel',
        src: '1-02'
    },
    {
        abbr: 'WRMS',
        def: 'war reserve materiel stock',
        src: 'JP 1-02'
    },
    {
        abbr: 'WRR',
        def: 'weapons response range (as well as wpns release rg)',
        src: 'JP 1-02'
    },
    {
        abbr: 'WRS',
        def: 'war reserve stock',
        src: '1-02'
    },
    {
        abbr: 'WRSA',
        def: 'war reserve stocks for allies',
        src: '1-02'
    },
    {
        abbr: 'WRSK',
        def: 'war readiness spares kit; war reserve spares kit',
        src: 'JP 1-02'
    },
    {
        abbr: 'WS',
        def: 'weather squadron',
        src: '1-02'
    },
    {
        abbr: 'WSE',
        def: 'weapon support equipment',
        src: 'JP 1-02'
    },
    {
        abbr: 'WSES',
        def: 'surface effect ship (USCG)',
        src: 'JP 1-02'
    },
    {
        abbr: 'WSESRB',
        def: 'Weapon System Explosive Safety Review Board',
        src: '1-02'
    },
    {
        abbr: 'WSM',
        def: 'waterspace management',
        src: '1-02'
    },
    {
        abbr: 'WSR',
        def: 'weapon system reliability',
        src: 'JP 1-02'
    },
    {
        abbr: 'WSV',
        def: 'weapons system video',
        src: '1-02'
    },
    {
        abbr: 'WT',
        def: 'warping tug; weight',
        src: '1-02'
    },
    {
        abbr: 'WTCA',
        def: 'water terminal clearance authority',
        src: 'JP 1-02'
    },
    {
        abbr: 'WTCT',
        def: 'weapons of mass destruction technical collection team',
        src: 'JP 2-01.2'
    },
    {
        abbr: 'WTI',
        def: 'weapons technical intelligence',
        src: '1-02'
    },
    {
        abbr: 'WTLO',
        def: 'water terminal logistic office',
        src: 'JP 1-02'
    },
    {
        abbr: 'Wu',
        def: 'uncorrected sweep width',
        src: 'JP 1-02'
    },
    {
        abbr: 'WVRD',
        def: 'World Vision Relief and Development, Inc.',
        src: 'JP 1-02'
    },
    {
        abbr: 'WWABNCP',
        def: 'worldwide airborne command post',
        src: 'JP 1-02'
    },
    {
        abbr: 'WWII',
        def: 'World War II',
        src: 'JP 1-02'
    },
    {
        abbr: 'WWSVCS',
        def: 'Worldwide Secure Voice Conferencing System',
        src: 'JP 1-02'
    },
    {
        abbr: 'WWX',
        def: 'worldwide express',
        src: '1-02'
    },
    {
        abbr: 'WX',
        def: 'weather',
        src: 'JP 1-02'
    },
    {
        abbr: 'X',
        def: 'initial position error',
        src: 'JP 1-02'
    },
    {
        abbr: 'XCDS',
        def: 'Extracted Container Delivery System',
        src: '1-02'
    },
    {
        abbr: 'XCVR',
        def: 'transceiver',
        src: 'JP 1-02'
    },
    {
        abbr: 'XMPP',
        def: 'extensible messaging and presence protocol',
        src: '1-02'
    },
    {
        abbr: 'XO',
        def: 'executive officer',
        src: '1-02'
    },
    {
        abbr: 'XSB',
        def: 'barrier single unit',
        src: 'JP 1-02'
    },
    {
        abbr: 'Y',
        def: 'search and rescue unit (SRU) error',
        src: 'JP 1-02'
    },
    {
        abbr: 'YR',
        def: 'year',
        src: 'JP 1-02'
    },
    {
        abbr: 'Z',
        def: 'zulu',
        src: 'JP 1-02'
    },
    {
        abbr: 'z',
        def: 'effort',
        src: 'JP 1-02'
    },
    {
        abbr: 'ZF',
        def: 'zone of fire',
        src: '1-02'
    },
    {
        abbr: 'Zt',
        def: 'total available effort',
        src: 'JP 1-02'
    },
    {
        abbr: 'ZULU',
        def: 'time zone indicator for Universal Time',
        src: 'JP 1-02'
    }
];

@Injectable({
    providedIn: 'root'
})
export class DodAcronymsService {

    constructor() { }

    all(): IDoDAcronym[] {
        return DICTIONARY;
    }

    lookup(abbreviation: string): IDoDAcronym[] {
        console.log(`lookup ${abbreviation}`);
        return DICTIONARY.filter(acronym => acronym.abbr.indexOf(abbreviation) === 0);
    }
}
