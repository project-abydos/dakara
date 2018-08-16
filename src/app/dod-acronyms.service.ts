// tslint:disable:max-line-length

import { Injectable } from '@angular/core';

interface IDoDAcronym {
    def: string;
    src?: string;
}
interface IDoDAcronymList {
    [abbrv: string]: IDoDAcronym;
}

const DICTIONARY: IDoDAcronymList = {
    '1MC': {
        def: 'general announcing system',
        src: '1-02'
    },
    '1NCD': {
        def: '1st Naval Construction Division',
        src: '1-02'
    },
    '1st IOC': {
        def: '1st Information Operations Command (Land)',
        src: 'JP 2-01'
    },
    '2-D': {
        def: 'two-dimensional',
        src: '1-02'
    },
    '2E': {
        def: 'Role 2 enhanced',
        src: '1-02'
    },
    '2LM': {
        def: 'Role 2 light maneuver',
        src: '1-02'
    },
    '3-D': {
        def: 'three-dimensional',
        src: '1-02'
    },
    '618 AOC (TACC)': {
        def: '618 Air Operations Center (Tanker Airlift Control Center) ',
        src: '1-02'
    },
    'A': {
        def: 'analog',
        src: 'JP 1-02'
    },
    'A&P': {
        def: 'administrative and personnel; analysis and production',
        src: '1-02'
    },
    'A-1': {
        def: 'director of manpower, personnel, and services (Air Force) ',
        src: '1-02'
    },
    'A-2': {
        def: 'intelligence staff officer (Air Force)',
        src: '1-02'
    },
    'A-3': {
        def: 'operations directorate (COMAFFOR staff); operations staff officer (Air Force)',
        src: '1-02'
    },
    'A-4': {
        def: 'director of logistics (Air Force)',
        src: '1-02'
    },
    'A-5': {
        def: 'plans directorate (COMAFFOR staff)',
        src: '1-02'
    },
    'A-6': {
        def: 'communications staff officer (Air Force)',
        src: '1-02'
    },
    'A-7': {
        def: 'director of installations and mission support (Air Force)',
        src: '1-02'
    },
    'A-Space': {
        def: 'Analytic Space',
        src: '1-02'
    },
    'A/C': {
        def: 'aircraft',
        src: 'JP 1-02'
    },
    'A/D': {
        def: 'analog-to-digital',
        src: 'JP 1-02'
    },
    'A/DACG': {
        def: 'arrival/departure airfield control group',
        src: '1-02'
    },
    'A/DCG': {
        def: 'arrival/departure control group',
        src: 'JP 1-02'
    },
    'A/E': {
        def: 'ammunition/explosives',
        src: '1-02'
    },
    'A/ETF': {
        def: 'automated/electronic target folder',
        src: 'JP 1-02'
    },
    'A/G': {
        def: 'air to ground',
        src: 'JP 1-02'
    },
    'A/M': {
        def: 'approach and moor',
        src: 'JP 1-02'
    },
    'A/NM': {
        def: 'administrative/network management',
        src: 'JP 1-02'
    },
    'A/S': {
        def: 'anti-spoofing',
        src: '1-02'
    },
    'A2': {
        def: 'antiaccess',
        src: '1-02'
    },
    'A2C2': {
        def: 'Army airspace command and control',
        src: 'JP 1-02'
    },
    'AA': {
        def: 'assessment agent; avenue of approach',
        src: '1-02'
    },
    'AA&E': {
        def: 'arms, ammunition, and explosives',
        src: '1-02'
    },
    'AAA': {
        def: 'antiaircraft artillery; arrival and assembly area; assign alternate area',
        src: '1-02'
    },
    'AABB': {
        def: 'American Association of Blood Banks',
        src: 'JP 1-02'
    },
    'AABWS': {
        def: 'amphibious assault bulk water system',
        src: 'JP 1-02'
    },
    'AAC': {
        def: 'activity address code\t',
        src: 'JP 4-02'
    },
    'AACG': {
        def: 'arrival airfield control group',
        src: 'JP 1-02'
    },
    'AADC': {
        def: 'area air defense commander',
        src: '1-02'
    },
    'AADP': {
        def: 'area air defense plan',
        src: '1-02'
    },
    'AAFES': {
        def: 'Army and Air Force Exchange Service',
        src: 'JP 1-02'
    },
    'AAFIF': {
        def: 'automated air facility information file',
        src: 'JP 1-02'
    },
    'AAFS': {
        def: 'amphibious assault fuel system',
        src: '1-02'
    },
    'AAFSF': {
        def: 'amphibious assault fuel supply facility',
        src: 'JP 1-02'
    },
    'AAG': {
        def: 'aeronautical assignment group',
        src: '1-02'
    },
    'AAGS': {
        def: 'Army air-ground system',
        src: '1-02'
    },
    'AAI': {
        def: 'air-to-air interface',
        src: 'JP 1-02'
    },
    'AAM': {
        def: 'air-to-air missile',
        src: 'JP 1-02'
    },
    'AAMDC': {
        def: 'United States Army Air and Missile Defense Command',
        src: '1-02'
    },
    'AAOE': {
        def: 'arrival and assembly operations element',
        src: 'JP 1-02'
    },
    'AAOG': {
        def: 'arrival and assembly operations group',
        src: 'JP 1-02'
    },
    'AAP': {
        def: 'Allied administrative publication; assign alternate parent',
        src: 'JP 1-02'
    },
    'AAR': {
        def: 'after action report; after action review; air-to-air refueling area',
        src: '1-02'
    },
    'AAS': {
        def: 'amphibious assault ship',
        src: '1-02'
    },
    'AAST': {
        def: 'aeromedical evacuation administrative support team',
        src: 'JP 4-02'
    },
    'AAT': {
        def: 'automatic analog test; aviation advisory team',
        src: 'JP 1-02'
    },
    'AATCC': {
        def: 'amphibious air traffic control center',
        src: '1-02'
    },
    'AAU': {
        def: 'analog applique unit',
        src: 'JP 1-02'
    },
    'AAV': {
        def: 'amphibious assault vehicle',
        src: 'JP 1-02'
    },
    'AAW': {
        def: 'antiair warfare',
        src: 'JP 1-02'
    },
    'AB': {
        def: 'air base ',
        src: '1-02'
    },
    'ABCA': {
        def: 'American, British, Canadian, Australian, and New Zealand',
        src: '1-02'
    },
    'ABCS': {
        def: 'Army Battle Command System',
        src: 'JP 1-02'
    },
    'ABD': {
        def: 'airbase defense',
        src: 'JP 1-02'
    },
    'ABFC': {
        def: 'advanced base functional component',
        src: '1-02'
    },
    'ABFDS': {
        def: 'aerial bulk fuel delivery system'
    },
    'ABFS': {
        def: 'amphibious bulk fuel system',
        src: 'JP 1-02'
    },
    'ABGD': {
        def: 'air base ground defense',
        src: 'JP 1-02'
    },
    'ABIS': {
        def: 'Automated Biometric Identification System',
        src: '1-02'
    },
    'ABL': {
        def: 'airborne laser',
        src: 'JP 1-02'
    },
    'ABLTS': {
        def: 'amphibious bulk liquid transfer system',
        src: '1-02'
    },
    'ABM': {
        def: 'antiballistic missile',
        src: 'JP 1-02'
    },
    'ABN': {
        def: 'airborne',
        src: 'JP 1-02'
    },
    'ABNCP': {
        def: 'Airborne Command Post',
        src: 'JP 1-02'
    },
    'ABO': {
        def: 'air base operability; blood typing system',
        src: 'JP 1-02'
    },
    'ABP': {
        def: 'air battle plan',
        src: '1-02'
    },
    'AC': {
        def: 'Active Component; alternating current',
        src: '1-02'
    },
    'AC-130': {
        def: 'Hercules',
        src: 'JP 1-02'
    },
    'AC/S, C4I': {
        def: 'Assistant Chief of Staff, Command, Control, Communications, Computers, and Intelligence (USMC)',
        src: 'JP 1-02'
    },
    'AC2': {
        def: 'airspace command and control',
        src: '1-02'
    },
    'ACA': {
        def: 'air clearance authority; airlift clearance authority; airspace control authority; airspace coordination area',
        src: '1-02'
    },
    'ACAA': {
        def: 'automatic chemical agent alarm',
        src: 'JP 1-02'
    },
    'ACAPS': {
        def: 'area communications electronics capabilities',
        src: 'JP 1-02'
    },
    'ACAT': {
        def: 'aeromedical evacuation command augmentation team',
        src: 'JP 4-02'
    },
    'ACB': {
        def: 'amphibious construction battalion',
        src: 'JP 1-02'
    },
    'ACC': {
        def: 'Air Combat Command; air component commander; area coordination center; Army Contracting Command',
        src: 'JP 1-02'
    },
    'ACCE': {
        def: 'air component coordination element',
        src: '1-02'
    },
    'ACCON': {
        def: 'acoustic condition',
        src: 'JP 1-02'
    },
    'ACCS': {
        def: 'air command and control system',
        src: 'JP 1-02'
    },
    'ACCSA': {
        def: 'Allied Communications and Computer Security Agency',
        src: 'JP 1-02'
    },
    'ACD': {
        def: 'automated cargo documentation',
        src: '1-02'
    },
    'ACDO': {
        def: 'assistant command duty officer',
        src: 'JP 1-02'
    },
    'ACE': {
        def: 'airborne command element (USAF); air combat element (NATO); Allied Command Europe; aviation combat element (USMC)',
        src: '1-02'
    },
    'ACEOI': {
        def: 'automated communications-electronics operating instructions',
        src: '1-02'
    },
    'ACF': {
        def: 'air contingency force',
        src: 'JP 1-02'
    },
    'ACI': {
        def: 'assign call inhibit',
        src: 'JP 1-02'
    },
    'ACIC': {
        def: 'Army Counterintelligence Center',
        src: 'JP 1-02'
    },
    'ACINT': {
        def: 'acoustic intelligence',
        src: 'JP 1-02'
    },
    'ACK': {
        def: 'acknowledgement',
        src: 'JP 1-02'
    },
    'ACL': {
        def: 'access control list; allowable cabin load',
        src: '1-02'
    },
    'ACLANT': {
        def: 'Allied Command Atlantic',
        src: 'JP 1-02'
    },
    'ACLP': {
        def: 'affiliated contingency load planning',
        src: '1-02'
    },
    'ACM': {
        def: 'advanced conventional munitions; advanced cruise missile; air combat maneuver; air contingency Marine air-ground task force (MAGTF); airspace coordinating measure',
        src: '1-02'
    },
    'ACMREQ': {
        def: 'airspace control means request; airspace coordination measures request',
        src: 'JP 1-02'
    },
    'ACN': {
        def: 'assign commercial network',
        src: 'JP 1-02'
    },
    'ACO': {
        def: 'administrative contracting officer; airspace control order',
        src: '1-02'
    },
    'ACOA': {
        def: 'adaptive course of action',
        src: '1-02'
    },
    'ACOC': {
        def: 'area communications operations center',
        src: '1-02'
    },
    'ACOCC': {
        def: 'air combat operations command center',
        src: 'JP 1-02'
    },
    'ACOS': {
        def: 'assistant chief of staff',
        src: '1-02'
    },
    'ACP': {
        def: 'access control point; air commander\'s pointer; airspace control plan; Allied communications publication; assign common pool',
        src: '1-02'
    },
    'ACR': {
        def: 'armored cavalry regiment (Army); assign channel reassignment',
        src: 'JP 1-02'
    },
    'ACS': {
        def: 'agile combat support; air-capable ship; airspace control system; auxiliary crane ship',
        src: '1-02'
    },
    'ACSA': {
        def: 'acquisition and cross-servicing agreement; Allied Communications Security Agency',
        src: '1-02'
    },
    'ACT': {
        def: 'activity; advance civilian team; Allied Command Transformation',
        src: '1-02'
    },
    'ACU': {
        def: 'assault craft unit',
        src: '1-02'
    },
    'ACV': {
        def: 'aircraft cockpit video; armored combat vehicle',
        src: '1-02'
    },
    'ACW': {
        def: 'advanced conventional weapons',
        src: 'JP 1-02'
    },
    'AD': {
        def: 'active duty; advanced deployability; air defense; area denial; automatic distribution; priority add-on',
        src: '1-02'
    },
    'ADA': {
        def: 'aerial damage assessment; air defense artillery',
        src: '1-02'
    },
    'ADAFCO': {
        def: 'air defense artillery fire control officer',
        src: '1-02'
    },
    'ADAL': {
        def: 'authorized dental allowance list',
        src: 'JP 1-02'
    },
    'ADAM': {
        def: 'air defense airspace management',
        src: '1-02'
    },
    'ADAM/BAE': {
        def: 'air defense airspace management/brigade aviation element',
        src: '1-02'
    },
    'ADAMS': {
        def: 'Allied Deployment and Movement System',
        src: '1-02'
    },
    'ADANS': {
        def: 'Air Mobility Command Deployment Analysis System',
        src: 'JP 1-02'
    },
    'ADC': {
        def: 'air defense commander; area damage control',
        src: '1-02'
    },
    'ADCAP': {
        def: 'advanced capability',
        src: 'JP 1-02'
    },
    'ADCI/MS': {
        def: 'Associate Director of Central Intelligence for Military Support',
        src: 'JP 1-02'
    },
    'ADCON': {
        def: 'administrative control',
        src: '1-02'
    },
    'ADD': {
        def: 'assign on-line diagnostic',
        src: 'JP 1-02'
    },
    'ADDO': {
        def: 'Assistant Deputy Director for Operations',
        src: 'JP 1-02'
    },
    'ADDO(MS)': {
        def: 'Assistant Deputy Director for Operations/Military Support',
        src: 'JP 1-02'
    },
    'ADE': {
        def: 'airdrop damage estimate; assign digit editing',
        src: '1-02'
    },
    'ADF': {
        def: 'automatic direction finding',
        src: 'JP 1-02'
    },
    'ADIZ': {
        def: 'air defense identification zone',
        src: 'JP 1-02'
    },
    'ADKC/RCU': {
        def: 'Automatic Key Distribution Center/Rekeying Control Unit',
        src: 'JP 1-02'
    },
    'ADL': {
        def: 'advanced distributed learning; assign XX (SL) routing',
        src: '1-02'
    },
    'ADMIN': {
        def: 'administration',
        src: 'JP 1-02'
    },
    'ADN': {
        def: 'Allied Command Europe desired ground zero number',
        src: 'JP 1-02'
    },
    'ADNET': {
        def: 'anti-drug network',
        src: 'JP 1-02'
    },
    'ADOC': {
        def: 'air defense operations center',
        src: 'JP 1-02'
    },
    'ADP': {
        def: 'air defense plan; Army doctrine publication; automated data processing',
        src: '1-02'
    },
    'ADPE': {
        def: 'automated data processing equipment',
        src: 'JP 1-02'
    },
    'ADPS': {
        def: 'automatic data processing system',
        src: 'JP 1-02'
    },
    'ADR': {
        def: 'accident data recorder; aircraft damage repair; airfield damage repair',
        src: '1-02'
    },
    'ADRA': {
        def: 'Adventist Development and Relief Agency',
        src: '1-02'
    },
    'ADRP': {
        def: 'Army doctrine reference publication',
        src: '1-02'
    },
    'ADS': {
        def: 'air defense section; air defense sector; amphibian discharge site; authoritative data source',
        src: '1-02'
    },
    'ADSIA': {
        def: 'Allied Data Systems Interoperability Agency',
        src: 'JP 1-02'
    },
    'ADSW': {
        def: 'active duty for special work',
        src: 'JP 1-02'
    },
    'ADT': {
        def: 'active duty for training; assign digital transmission group; automatic digital tester',
        src: 'JP 1-02'
    },
    'ADUSD(TP)': {
        def: 'Assistant Deputy Under Secretary of Defense, Transportation Policy',
        src: '1-02'
    },
    'ADVON': {
        def: 'advanced echelon',
        src: '1-02'
    },
    'ADW': {
        def: 'air defense warnings',
        src: '1-02'
    },
    'ADWC': {
        def: 'air defense warning condition',
        src: '1-02'
    },
    'ADZ': {
        def: 'amphibious defense zone',
        src: 'JP 1-02'
    },
    'AE': {
        def: 'aeromedical evacuation; assault echelon; attenuation equalizer',
        src: '1-02'
    },
    'AEC': {
        def: 'aeromedical evacuation crew',
        src: 'JP 4-02'
    },
    'AECA': {
        def: 'Arms Export Control Act',
        src: '1-02'
    },
    'AECM': {
        def: 'aeromedical evacuation crew member',
        src: 'JP 1-02'
    },
    'AECS': {
        def: 'aeromedical evacuation command squadron',
        src: 'JP 4-02'
    },
    'AECT': {
        def: 'aeromedical evacuation control team',
        src: '1-02'
    },
    'AEG': {
        def: 'air expeditionary group',
        src: 'JP 1-02'
    },
    'AEHF': {
        def: 'advanced extremely high frequency',
        src: '1-02'
    },
    'AELT': {
        def: 'aeromedical evacuation liaison team',
        src: '1-02'
    },
    'AEOS': {
        def: 'aeromedical evacuation operations squadron',
        src: 'JP 1-02'
    },
    'AEOT': {
        def: 'aeromedical evacuation operations team',
        src: '1-02'
    },
    'AEPS': {
        def: 'aircrew escape propulsion system',
        src: 'JP 1-02'
    },
    'AEPST': {
        def: 'aeromedical evacuation plans and strategy team',
        src: 'JP 4-02'
    },
    'AES': {
        def: 'aeromedical evacuation squadron',
        src: '1-02'
    },
    'AESC': {
        def: 'aeromedical evacuation support cell',
        src: '1-02'
    },
    'AET': {
        def: 'airport emergency team',
        src: '1-02'
    },
    'AETC': {
        def: 'Air Education and Training Command',
        src: 'JP 1-02'
    },
    'AETF': {
        def: 'air expeditionary task force',
        src: '1-02'
    },
    'AEU': {
        def: 'assign essential user bypass',
        src: 'JP 1-02'
    },
    'AEW': {
        def: 'airborne early warning',
        src: '1-02'
    },
    'AF': {
        def: 'Air Force; Air Force (form); amphibious force',
        src: '1-02'
    },
    'AF/A2': {
        def: 'Air Force Director of Intelligence, Surveillance, and Reconnaissance',
        src: '1-02'
    },
    'AF/DP': {
        def: 'Deputy Chief of Staff for Personnel, United States Air Force',
        src: 'JP 1-02'
    },
    'AF/IL': {
        def: 'Deputy Chief of Staff for Installations and Logistics, USAF',
        src: 'JP 1-02'
    },
    'AF/XO': {
        def: 'Deputy Chief of Staff for Plans and Operations, United States Air Force',
        src: 'JP 1-02'
    },
    'AF/XOI': {
        def: 'Air Force Director of Intelligence, Surveillance, and Reconnaissance',
        src: 'JP 1-02'
    },
    'AF/XOO': {
        def: 'Director of Operations, United States Air Force',
        src: 'JP 1-02'
    },
    'AFAARS': {
        def: 'Air Force After Action Reporting System',
        src: 'JP 1-02'
    },
    'AFARN': {
        def: 'Air Force air request net',
        src: 'JP 1-02'
    },
    'AFATDS': {
        def: 'Advanced Field Artillery Tactical Data System',
        src: 'JP 1-02'
    },
    'AFB': {
        def: 'Air Force base',
        src: '1-02'
    },
    'AFC': {
        def: 'area frequency coordinator; automatic frequency control',
        src: 'JP 1-02'
    },
    'AFCA': {
        def: 'Air Force Communications Agency',
        src: 'JP 1-02'
    },
    'AFCAP': {
        def: 'Air Force contract augmentation program; Armed Forces contract augmentation program',
        src: '1-02'
    },
    'AFCB': {
        def: 'Armed Forces Chaplains Board',
        src: '1-02'
    },
    'AFCC': {
        def: 'Air Force Component Commander',
        src: 'JP 1-02'
    },
    'AFCCC': {
        def: 'Air Force Combat Climatology Center',
        src: 'JP 1-02'
    },
    'AFCEC': {
        def: 'Air Force Civil Engineer Center',
        src: '1-02'
    },
    'AFCEE': {
        def: 'Air Force Center for Engineering and the Environment',
        src: '1-02'
    },
    'AFCENT': {
        def: 'Allied Forces Central Europe (NATO)',
        src: 'JP 1-02'
    },
    'AFCERT': {
        def: 'Air Force computer emergency response team',
        src: 'JP 1-02'
    },
    'AFCESA': {
        def: 'Air Force Civil Engineering Support Agency',
        src: '1-02'
    },
    'AFD': {
        def: 'assign fixed directory',
        src: 'JP 1-02'
    },
    'AFDA': {
        def: 'Air Force doctrine annex',
        src: '1-02'
    },
    'AFDC': {
        def: 'Air Force Doctrine Center',
        src: 'JP 1-02'
    },
    'AFDD': {
        def: 'Air Force doctrine document',
        src: '1-02'
    },
    'AFDIGS': {
        def: 'Air Force digital graphics system',
        src: 'JP 1-02'
    },
    'AFDIL': {
        def: 'Armed Forces DNA Identification Laboratory',
        src: 'JP 4-06'
    },
    'AFDIS': {
        def: 'Air Force Weather Agency Dial In Subsystem',
        src: 'JP 1-02'
    },
    'AFE': {
        def: 'Armed Forces Entertainment',
        src: '1-02'
    },
    'AFEES': {
        def: 'Armed Forces Examining and Entrance Station',
        src: 'JP 1-02'
    },
    'AFFIS': {
        def: 'Air Facilities File Information System',
        src: 'JP 1-02'
    },
    'AFFMA': {
        def: 'Air Force Frequency Management Agency',
        src: 'JP 1-02'
    },
    'AFFOR': {
        def: 'Air Force forces',
        src: '1-02'
    },
    'AFH': {
        def: 'Air Force handbook',
        src: 'JP 3-40'
    },
    'AFHSC': {
        def: 'Armed Forces Health Surveillance Center',
        src: '1-02'
    },
    'AFI': {
        def: 'Air Force instruction',
        src: '1-02'
    },
    'AFIAA': {
        def: 'Air Force Intelligence Analysis Agency',
        src: '1-02'
    },
    'AFICA': {
        def: 'Air Force Installation Contracting Agency',
        src: '1-02'
    },
    'AFID': {
        def: 'anti-fratricide identification device',
        src: 'JP 1-02'
    },
    'AFIP': {
        def: 'Armed Forces Institute of Pathology',
        src: '1-02'
    },
    'AFIRB': {
        def: 'Armed Forces Identification Review Board',
        src: 'JP 1-02'
    },
    'AFIS': {
        def: 'American Forces Information Service',
        src: 'JP 3-61'
    },
    'AFISRA': {
        def: 'Air Force Intelligence, Surveillance, and Reconnaissance Agency',
        src: '1-02'
    },
    'AFIWC': {
        def: 'Air Force Information Warfare Center',
        src: 'JP 1-02'
    },
    'AFJI': {
        def: 'Air Force joint instruction',
        src: 'JP 4-01.6'
    },
    'AFJMAN': {
        def: 'Air Force Joint Manual',
        src: 'JP 1-02'
    },
    'AFLC': {
        def: 'Air Force Logistics Command',
        src: 'JP 1-02'
    },
    'AFLE': {
        def: 'Air Force liaison element',
        src: '1-02'
    },
    'AFLNO': {
        def: 'Air Force liaison officer',
        src: 'JP 1-02'
    },
    'AFMAN': {
        def: 'Air Force manual',
        src: '1-02'
    },
    'AFMC': {
        def: 'Air Force Materiel Command',
        src: 'JP 1-02'
    },
    'AFMD': {
        def: 'Air Force Mission Directive',
        src: 'JP 1-02'
    },
    'AFME': {
        def: 'Armed Forces Medical Examiner',
        src: '1-02'
    },
    'AFMES': {
        def: 'Armed Forces Medical Examiner System',
        src: '1-02'
    },
    'AFMIC': {
        def: 'Armed Forces Medical Intelligence Center',
        src: 'JP 1-02'
    },
    'AFMLO': {
        def: 'Air Force Medical Logistics Office',
        src: 'JP 1-02'
    },
    'AFMS': {
        def: 'Air Force Medical Service',
        src: 'JP 1-02'
    },
    'AFNORTH': {
        def: 'Air Force North; Allied Forces Northern Europe (NATO)',
        src: 'JP 1-02'
    },
    'AFNORTHWEST': {
        def: 'Allied Forces North West Europe (NATO)',
        src: 'JP 1-02'
    },
    'AFNSEP': {
        def: 'Air Force National Security and Emergency Preparedness Agency',
        src: 'JP 1-02'
    },
    'AFO': {
        def: 'advance force operations',
        src: '1-02'
    },
    'AFOA': {
        def: 'Air Force Operations Activity ',
        src: '1-02'
    },
    'AFOE': {
        def: 'assault follow-on echelon',
        src: '1-02'
    },
    'AFOSI': {
        def: 'Air Force Office of Special Investigations',
        src: '1-02'
    },
    'AFPAM': {
        def: 'Air Force pamphlet',
        src: 'JP 1-02'
    },
    'AFPC': {
        def: 'Air Force Personnel Center',
        src: 'JP 1-02'
    },
    'AFPD': {
        def: 'Air Force policy directive',
        src: '1-02'
    },
    'AFPEO': {
        def: 'Armed Forces Professional Entertainment Overseas',
        src: 'JP 1-02'
    },
    'AFR': {
        def: 'Air Force Reserve; assign frequency for network reporting',
        src: 'JP 1-02'
    },
    'AFRAT': {
        def: 'Air Force Radiation Assessment Team',
        src: '1-02'
    },
    'AFRC': {
        def: 'Air Force Reserve Command; Armed Forces Recreation Center',
        src: '1-02'
    },
    'AFRCC': {
        def: 'Air Force rescue coordination center',
        src: 'JP 1-02'
    },
    'AFRL': {
        def: 'Air Force Research Laboratory',
        src: 'JP 4-10'
    },
    'AFRRI': {
        def: 'Armed Forces Radiobiology Research Institute',
        src: 'JP 1-02'
    },
    'AFRTS': {
        def: 'American Forces Radio and Television Service',
        src: '1-02'
    },
    'AFS': {
        def: 'aeronautical fixed service',
        src: 'JP 1-02'
    },
    'AFSATCOM': {
        def: 'Air Force satellite communications (system)',
        src: 'JP 1-02'
    },
    'AFSB': {
        def: 'afloat forward staging base; Army field support brigade',
        src: '1-02'
    },
    'AFSC': {
        def: 'Armed Forces Staff College; Army Field Support Center; United States Air Force specialty code',
        src: '1-02'
    },
    'AFSCN': {
        def: 'Air Force Satellite Control Network',
        src: '1-02'
    },
    'AFSMO': {
        def: 'Air Force Spectrum Management Office',
        src: '1-02'
    },
    'AFSOAC': {
        def: 'Air Force special operations air component',
        src: '1-02'
    },
    'AFSOAD': {
        def: 'Air Force special operations air detachment',
        src: '1-02'
    },
    'AFSOAE': {
        def: 'Air Force special operations air element',
        src: '1-02'
    },
    'AFSOC': {
        def: 'Air Force Special Operations Command',
        src: '1-02'
    },
    'AFSOCC': {
        def: 'Air Force special operations control center',
        src: 'JP 1-02'
    },
    'AFSOF': {
        def: 'Air Force special operations forces',
        src: '1-02'
    },
    'AFSOUTH': {
        def: 'Allied Forces, South (NATO)',
        src: 'JP 1-02'
    },
    'AFSPACE': {
        def: 'United States Space Command Air Force',
        src: 'JP 1-02'
    },
    'AFSPC': {
        def: 'Air Force Space Command',
        src: 'JP 1-02'
    },
    'AFSPOC': {
        def: 'Air Force Space Operations Center',
        src: 'JP 1-02'
    },
    'AFSTRAT': {
        def: 'Air Forces Strategic',
        src: '1-02'
    },
    'AFTAC': {
        def: 'Air Force Technical Applications Center',
        src: 'JP 1-02'
    },
    'AFTH': {
        def: 'Air Force Theater Hospital',
        src: 'JP 1-02'
    },
    'AFTN': {
        def: 'Aeronautical Fixed Telecommunications Network',
        src: 'JP 1-02'
    },
    'AFTO': {
        def: 'Air Force technical order',
        src: 'JP 1-02'
    },
    'AFTRANS': {
        def: 'Air Force Transportation Component',
        src: '1-02'
    },
    'AFTTP': {
        def: 'Air Force tactics, techniques, and procedures; Air Force technical training publication',
        src: '1-02'
    },
    'AFTTP(I)': {
        def: 'Air Force tactics, techniques, and procedures (instruction)',
        src: '1-02'
    },
    'AFW': {
        def: 'Air Force Weather',
        src: '1-02'
    },
    'AFWA': {
        def: 'Air Force Weather Agency',
        src: '1-02'
    },
    'AFWCF': {
        def: 'Air Force working capital fund',
        src: 'JP 1-02'
    },
    'AFWIN': {
        def: 'Air Force Weather Information Network',
        src: 'JP 1-02'
    },
    'AG': {
        def: 'adjutant general (Army)',
        src: 'JP 1-02'
    },
    'AGARD': {
        def: 'Advisory Group for Aerospace Research and Development',
        src: 'JP 1-02'
    },
    'AGE': {
        def: 'aerospace ground equipment',
        src: 'JP 1-02'
    },
    'AGIL': {
        def: 'airborne general illumination lightself',
        src: 'JP 1-02'
    },
    'AGL': {
        def: 'above ground level',
        src: '1-02'
    },
    'AGM-28A': {
        def: 'Hound Dog',
        src: 'JP 1-02'
    },
    'AGM-65': {
        def: 'Maverick',
        src: 'JP 1-02'
    },
    'AGM-69': {
        def: 'short range attack missile',
        src: 'JP 1-02'
    },
    'AGR': {
        def: 'Active Guard and Reserve',
        src: 'JP 1-02'
    },
    'AGS': {
        def: 'aviation ground support',
        src: '1-02'
    },
    'AHA': {
        def: 'alert holding area',
        src: '1-02'
    },
    'AHD': {
        def: 'antihandling device',
        src: 'JP 3-15'
    },
    'AI': {
        def: 'acquisition instruction; airborne interceptor; air interdiction; area of interest',
        src: '1-02'
    },
    'AIA': {
        def: 'Air Intelligence Agency',
        src: 'JP 1-02'
    },
    'AIASA': {
        def: 'annual integrated assessment for security assistance',
        src: 'JP 1-02'
    },
    'AIC': {
        def: 'air intercept controller; assign individual compressed dial; Atlantic Intelligence Command',
        src: 'JP 1-02'
    },
    'AICF/USA': {
        def: 'Action Internationale Contre La Faim (International Action Against Hunger)',
        src: 'JP 1-02'
    },
    'AIDS': {
        def: 'acquired immunodeficiency syndrome',
        src: '1-02'
    },
    'AIF': {
        def: 'automated installation intelligence file',
        src: 'JP 1-02'
    },
    'AIFA': {
        def: 'AAFES Imprest Fund Activity',
        src: 'JP 1-02'
    },
    'AIG': {
        def: 'addressee indicator group',
        src: 'JP 1-02'
    },
    'AIIRS': {
        def: 'automated intelligence information reporting system',
        src: 'JP 1-02'
    },
    'AIK': {
        def: 'assistance in kind',
        src: '1-02'
    },
    'AIM': {
        def: 'Airman\'s Information Manual',
        src: 'JP 1-02'
    },
    'AIM-54A': {
        def: 'Phoenix',
        src: 'JP 1-02'
    },
    'AIM-7': {
        def: 'Sparrow',
        src: 'JP 1-02'
    },
    'AIM-9': {
        def: 'Sidewinder',
        src: 'JP 1-02'
    },
    'AIMD': {
        def: 'aircraft intermediate maintenance department',
        src: '1-02'
    },
    'AIMT': {
        def: 'air interdiction of maritime targets',
        src: '1-02'
    },
    'AIP': {
        def: 'aeronautical information publication',
        src: '1-02'
    },
    'AIQC': {
        def: 'antiterrorism instructor qualification course',
        src: 'JP 1-02'
    },
    'AIRBAT': {
        def: 'Airborne Intelligence, Surveillance, and Reconnaissance Requirements-Based Allocation Tool',
        src: 'JP 2-01'
    },
    'AIRCENT': {
        def: 'Allied Air Forces Central Europe (NATO)',
        src: 'JP 1-02'
    },
    'AIRES': {
        def: 'advanced imagery requirements exploitation system',
        src: 'JP 1-02'
    },
    'AIREVACCONFIRM': {
        def: 'air evacuation confirmation',
        src: 'JP 1-02'
    },
    'AIREVACREQ': {
        def: 'air evacuation request',
        src: 'JP 1-02'
    },
    'AIREVACRESP': {
        def: 'air evacuation response',
        src: 'JP 1-02'
    },
    'AIRNORTHWEST': {
        def: 'Allied Air Forces North West Europe (NATO)',
        src: 'JP 1-02'
    },
    'AIRREQRECON': {
        def: 'air request reconnaissance',
        src: 'JP 1-02'
    },
    'AIRSOUTH': {
        def: 'Allied Air Forces Southern Europe (NATO)',
        src: 'JP 1-02'
    },
    'AIRSUPREQ': {
        def: 'air support request',
        src: '1-02'
    },
    'AIS': {
        def: 'automated information system',
        src: '1-02'
    },
    'AIT': {
        def: 'aeromedical isolation team; automated information technology; automatic identification technology',
        src: '1-02'
    },
    'AIU': {
        def: 'Automatic Digital Network Interface Unit',
        src: 'JP 1-02'
    },
    'AJ': {
        def: 'anti-jam',
        src: '1-02'
    },
    'AJ/CM': {
        def: 'anti-jam control modem',
        src: 'JP 1-02'
    },
    'AJBPO': {
        def: 'area joint blood program office',
        src: '1-02'
    },
    'AJCC': {
        def: 'alternate joint communications center',
        src: 'JP 1-02'
    },
    'AJF': {
        def: 'allied joint force',
        src: 'JP 3-61'
    },
    'AJFP': {
        def: 'adaptive joint force packaging',
        src: 'JP 1-02'
    },
    'AJMRO': {
        def: 'area joint medical regulating office',
        src: 'JP 1-02'
    },
    'AJNPE': {
        def: 'airborne joint nuclear planning element',
        src: 'JP 1-02'
    },
    'AJP': {
        def: 'allied joint publication',
        src: '1-02'
    },
    'AK': {
        def: 'commercial cargo ship',
        src: 'JP 1-02'
    },
    'AKNLDG': {
        def: 'acknowledge message',
        src: 'JP 1-02'
    },
    'ALARA': {
        def: 'as low as reasonably achievable',
        src: '1-02'
    },
    'ALCC': {
        def: 'airlift control center',
        src: '1-02'
    },
    'ALCE': {
        def: 'airlift control element',
        src: 'JP 1-02'
    },
    'ALCF': {
        def: 'airlift control flight',
        src: '1-02'
    },
    'ALCG': {
        def: 'analog line conditioning group',
        src: 'JP 1-02'
    },
    'ALCM': {
        def: 'air-launched cruise missile',
        src: '1-02'
    },
    'ALCOM': {
        def: 'United States Alaskan Command',
        src: '1-02'
    },
    'ALCON': {
        def: 'all concerned',
        src: 'JP 1-02'
    },
    'ALCS': {
        def: 'airlift control squadron',
        src: 'JP 1-02'
    },
    'ALCT': {
        def: 'airlift control team',
        src: '1-02'
    },
    'ALD': {
        def: 'airborne laser designator; available-to-load date',
        src: '1-02'
    },
    'ALE': {
        def: 'airlift liaison element',
        src: 'JP 1-02'
    },
    'ALEP': {
        def: 'amphibious lift enhancement program',
        src: '1-02'
    },
    'ALERFA': {
        def: 'alert phase (ICAO)',
        src: 'JP 1-02'
    },
    'ALERT': {
        def: 'attack and launch early reporting to theater',
        src: 'JP 1-02'
    },
    'ALERTORD': {
        def: 'alert order',
        src: 'JP 5-0'
    },
    'ALLOREQ': {
        def: 'air allocation request; allocation request',
        src: '1-02'
    },
    'ALLTV': {
        def: 'all light level television',
        src: 'JP 1-02'
    },
    'ALMSNSCD': {
        def: 'airlift mission schedule',
        src: 'JP 1-02'
    },
    'ALN': {
        def: 'ammunition lot number',
        src: '1-02'
    },
    'ALNOT': {
        def: 'alert notice',
        src: '1-02'
    },
    'ALO': {
        def: 'air liaison officer',
        src: 'JP 1-02'
    },
    'ALOC': {
        def: 'air line of communications',
        src: '1-02'
    },
    'ALORD': {
        def: 'alert launch order',
        src: 'JP 1-02'
    },
    'ALP': {
        def: 'allied logistic publication',
        src: '1-02'
    },
    'ALSA': {
        def: 'Air Land Sea Application (Center)',
        src: 'JP 1-02'
    },
    'ALSE': {
        def: 'aviation life support equipment',
        src: '1-02'
    },
    'ALSS': {
        def: 'advanced logistic support site',
        src: '1-02'
    },
    'ALT': {
        def: 'acquisition, logistics, and technology',
        src: '1-02'
    },
    'ALTD': {
        def: 'airborne laser target designator',
        src: '1-02'
    },
    'ALTRV': {
        def: 'altitude reservation',
        src: '1-02'
    },
    'ALTTSC': {
        def: 'alternate Tomahawk strike coordinator',
        src: 'JP 1-02'
    },
    'AM': {
        def: 'amplitude modulation',
        src: 'JP 1-02'
    },
    'AMAL': {
        def: 'authorized medical allowance list',
        src: 'JP 1-02'
    },
    'AMB': {
        def: 'air mobility branch; ambassador',
        src: 'JP 1-02'
    },
    'AMBUS': {
        def: 'ambulance bus',
        src: 'JP 1-02'
    },
    'AMC': {
        def: 'airborne mission coordinator; Air Mobility Command; Army Materiel Command: midpoint compromise search area',
        src: '1-02'
    },
    'AMC/SGXM': {
        def: 'Air Mobility Command/Command Surgeon’s Office',
        src: '1-02'
    },
    'AMCC': {
        def: 'allied movement coordination center; alternate military command center',
        src: '1-02'
    },
    'AMCIT': {
        def: 'American citizen',
        src: 'JP 1-02'
    },
    'AMCM': {
        def: 'airborne mine countermeasures',
        src: 'JP 1-02'
    },
    'AMCT': {
        def: 'air mobility control team',
        src: '1-02'
    },
    'AMD': {
        def: 'air and missile defense; air mobility division',
        src: '1-02'
    },
    'AMDC': {
        def: 'air and missile defense commander',
        src: '1-02'
    },
    'AME': {
        def: 'antenna mounted electronics',
        src: '1-02'
    },
    'AMEDD': {
        def: 'Army Medical Department',
        src: 'JP 1-02'
    },
    'AMEDDCS': {
        def: 'U.S. Army Medical Department Center and School',
        src: 'JP 1-02'
    },
    'AMedP': {
        def: 'allied medical publication',
        src: '1-02'
    },
    'AMEMB': {
        def: 'American Embassy',
        src: 'JP 1-02'
    },
    'AMETL': {
        def: 'agency mission-essential task list',
        src: '1-02'
    },
    'AMF(L)': {
        def: 'ACE Mobile Force (Land) (NATO)',
        src: 'JP 1-02'
    },
    'AMH': {
        def: 'automated message handler',
        src: 'JP 1-02'
    },
    'AMHS': {
        def: 'automated message handling system',
        src: '1-02'
    },
    'AMIO': {
        def: 'alien migrant interdiction operations',
        src: 'JP 1-02'
    },
    'AMLO': {
        def: 'air mobility liaison officer',
        src: '1-02'
    },
    'AMMO': {
        def: 'ammunition',
        src: 'JP 1-02'
    },
    'AMOC': {
        def: 'Air and Marine Operations Center (DHS)',
        src: '1-02'
    },
    'AMOCC': {
        def: 'air mobility operations control center',
        src: 'JP 1-02'
    },
    'AMOG': {
        def: 'air mobility operations group',
        src: 'JP 1-02'
    },
    'AMOPES': {
        def: 'Army Mobilization and Operations Planning and Execution System',
        src: 'JP 1-02'
    },
    'AMOPS': {
        def: 'Army mobilization and operations planning system; Army mobilization operations system',
        src: 'JP 1-02'
    },
    'AMOS': {
        def: 'air mobility operations squadron',
        src: '1-02'
    },
    'AMOSS': {
        def: 'Air and Marine Operations Surveillance System',
        src: 'JP 3-07.4'
    },
    'AMOW': {
        def: 'air mobility operations wing',
        src: '1-02'
    },
    'AMP': {
        def: 'amplifier; anaylsis of mobility platform',
        src: 'JP 1-02'
    },
    'AMP-PAT': {
        def: 'analysis of mobility platform suite of port analysis tools',
        src: '1-02'
    },
    'AMPE': {
        def: 'automated message processing exchange',
        src: 'JP 1-02'
    },
    'AMPN': {
        def: 'amplification',
        src: 'JP 1-02'
    },
    'AMPSSO': {
        def: 'Automated Message Processing System Security Office (or Officer)',
        src: 'JP 1-02'
    },
    'AMRAAM': {
        def: 'advanced medium-range air-to-air missile',
        src: 'JP 1-02'
    },
    'AMS': {
        def: 'Aerial Measuring System (DOE); air mobility squadron; Army management structure; Asset Management System',
        src: '1-02'
    },
    'AMS-TAC': {
        def: 'Automated Manifesting System-Tactical',
        src: '1-02'
    },
    'AMSS': {
        def: 'air mobility support squadron',
        src: 'JP 1-02'
    },
    'AMT': {
        def: 'aerial mail terminal',
        src: '1-02'
    },
    'amu': {
        def: 'atomic mass unit',
        src: '1-02'
    },
    'AMVER': {
        def: 'automated mutual-assistance vessel rescue system',
        src: 'JP 1-02'
    },
    'AMW': {
        def: 'air mobility wing; amphibious warfare',
        src: 'JP 1-02'
    },
    'AMX': {
        def: 'air mobility express',
        src: '1-02'
    },
    'AN': {
        def: 'alphanumeric; analog nonsecure',
        src: 'JP 1-02'
    },
    'ANCA': {
        def: 'Allied Naval Communications Agency',
        src: 'JP 1-02'
    },
    'ANDVT': {
        def: 'advanced narrowband digital voice terminal',
        src: 'JP 1-02'
    },
    'ANG': {
        def: 'Air National Guard',
        src: '1-02'
    },
    'ANGLICO': {
        def: 'air-naval gunfire liaison company',
        src: '1-02'
    },
    'ANGUS': {
        def: 'Air National Guard of the United States',
        src: '1-02'
    },
    'ANMCC': {
        def: 'Alternate National Military Command Center',
        src: 'JP 1-02'
    },
    'ANN': {
        def: 'assign NNX routing',
        src: 'JP 1-02'
    },
    'ANR': {
        def: 'Alaskan North American Aerospace Defense Command Region',
        src: '1-02'
    },
    'ANSI': {
        def: 'American National Standards Institute',
        src: '1-02'
    },
    'ANX': {
        def: 'assign NNXX routing',
        src: 'JP 1-02'
    },
    'ANY': {
        def: 'assign NYX routing',
        src: 'JP 1-02'
    },
    'ANZUS': {
        def: 'Australia-New Zealand-United States Treaty',
        src: 'JP 1-02'
    },
    'AO': {
        def: 'action officer; administration officer; air officer; area of operations; aviation ordnance person',
        src: '1-02'
    },
    'AO&M': {
        def: 'administration, operation, and maintenance',
        src: 'JP 1-02'
    },
    'AOA': {
        def: 'amphibious objective area',
        src: '1-02'
    },
    'AOB': {
        def: 'aviation operations branch',
        src: '1-02'
    },
    'AOC': {
        def: 'air operations center; Army operations center',
        src: '1-02'
    },
    'AOC-E': {
        def: 'Aviation Operations Center-East (USCS)',
        src: 'JP 1-02'
    },
    'AOC-W': {
        def: 'Aviation Operations Center-West (USCS)',
        src: 'JP 1-02'
    },
    'AOCC': {
        def: 'air operations control center',
        src: 'JP 1-02'
    },
    'AOCU': {
        def: 'analog orderwire control unit',
        src: 'JP 1-02'
    },
    'AOD': {
        def: 'air operations directive; on-line diagnostic',
        src: '1-02'
    },
    'AODB': {
        def: 'air operations database',
        src: '1-02'
    },
    'AOF': {
        def: 'azimuth of fire'
    },
    'AOG': {
        def: 'Army Operations Group',
        src: '1-02'
    },
    'AOI': {
        def: 'area of interest',
        src: '1-02'
    },
    'AOP': {
        def: 'air operations plan; area of probability',
        src: 'JP 1-02'
    },
    'AOR': {
        def: 'area of responsibility',
        src: '1-02'
    },
    'AOSS': {
        def: 'aviation ordnance safety supervisor',
        src: 'JP 1-02'
    },
    'AOTR': {
        def: 'Aviation Operational Threat Response',
        src: '1-02'
    },
    'AP': {
        def: 'allied publication; antipersonnel; average power',
        src: '1-02'
    },
    'APA': {
        def: 'Army pre-positioned afloat',
        src: 'JP 3-31'
    },
    'APAN': {
        def: 'All Partners Access Network; Asia-Pacific Area Network',
        src: '1-02'
    },
    'APC': {
        def: 'aerial port commander; assign preprogrammed conference list',
        src: '1-02'
    },
    'APCC': {
        def: 'alternate processing and correlation center',
        src: '1-02'
    },
    'APE': {
        def: 'airfield pavement evaluation',
        src: '1-02'
    },
    'APES': {
        def: 'Automated Patient Evacuation System',
        src: 'JP 4-02'
    },
    'APEX': {
        def: 'Adaptive Planning and Execution',
        src: '1-02'
    },
    'APF': {
        def: 'afloat pre-positioning force',
        src: '1-02'
    },
    'APG': {
        def: 'aimpoint graphic',
        src: 'JP 1-02'
    },
    'APHIS': {
        def: 'Animal and Plant Health Inspection Service (USDA)',
        src: '1-02'
    },
    'APIC': {
        def: 'allied press information center',
        src: 'JP 1-02'
    },
    'APL': {
        def: 'antipersonnel land mine',
        src: '1-02'
    },
    'APO': {
        def: 'afloat pre-positioning operations; Air Force post office; Army post office',
        src: 'JP 1-02'
    },
    'APOD': {
        def: 'aerial port of debarkation',
        src: '1-02'
    },
    'APOE': {
        def: 'aerial port of embarkation',
        src: '1-02'
    },
    'APORT': {
        def: 'aerial port',
        src: 'JP 1-02'
    },
    'APORTSREP': {
        def: 'air operations bases report',
        src: 'JP 1-02'
    },
    'APP': {
        def: 'allied procedural publication',
        src: '1-02'
    },
    'APPS': {
        def: 'analytical photogrammetric positioning system',
        src: 'JP 1-02'
    },
    'APR': {
        def: 'assign primary zone routing',
        src: 'JP 1-02'
    },
    'APS': {
        def: 'aerial port squadron; Army pre-positioned stocks',
        src: '1-02'
    },
    'APS-3': {
        def: 'afloat pre-positioning stocks; Army pre-positioned stocks-3',
        src: '1-02'
    },
    'APU': {
        def: 'auxiliary power unit',
        src: 'JP 1-02'
    },
    'AR': {
        def: 'air refueling; Army regulation; Army reserve',
        src: '1-02'
    },
    'ARB': {
        def: 'alternate recovery base; assign receive bypass lists',
        src: 'JP 1-02'
    },
    'ARBS': {
        def: 'angle rate bombing system',
        src: 'JP 1-02'
    },
    'ARC': {
        def: 'air Reserve Components; American Red Cross',
        src: 'JP 1-02'
    },
    'ARCENT': {
        def: 'United States Army Central Command',
        src: '1-02'
    },
    'ARCT': {
        def: 'air refueling control team',
        src: '1-02'
    },
    'ARDF': {
        def: 'automatic radio direction finding',
        src: 'JP 1-02'
    },
    'AREC': {
        def: 'air resource element coordinator',
        src: 'JP 1-02'
    },
    'ARFOR': {
        def: 'Army forces',
        src: '1-02'
    },
    'ARG': {
        def: 'Accident Response Group (DOE); amphibious ready group',
        src: '1-02'
    },
    'ARGO': {
        def: 'automatic ranging grid overlay',
        src: 'JP 1-02'
    },
    'ARINC': {
        def: 'Aeronautical Radio Incorporated',
        src: 'JP 1-02'
    },
    'ARL-M': {
        def: 'airborne reconnaissance low-multifunction',
        src: 'JP 1-02'
    },
    'ARM': {
        def: 'antiradiation missile',
        src: '1-02'
    },
    'ARNG': {
        def: 'Army National Guard',
        src: '1-02'
    },
    'ARNGUS': {
        def: 'Army National Guard of the United States',
        src: '1-02'
    },
    'ARP': {
        def: 'air refueling point',
        src: 'JP 1-02'
    },
    'ARPERCEN': {
        def: 'United States Army Reserve Personnel Center',
        src: 'JP 1-02'
    },
    'ARQ': {
        def: 'automatic request-repeat',
        src: 'JP 1-02'
    },
    'ARRC': {
        def: 'Allied Command Europe Rapid Reaction Corps (NATO)',
        src: 'JP 1-02'
    },
    'ARRDATE': {
        def: 'arrival date',
        src: 'JP 1-02'
    },
    'ARS': {
        def: 'acute radiation syndrome; air rescue service',
        src: 'JP 1-02'
    },
    'ARSOA': {
        def: 'Army special operations aviation',
        src: 'JP 1-02'
    },
    'ARSOF': {
        def: 'Army special operations forces',
        src: '1-02'
    },
    'ARSOTF': {
        def: 'Army special operations task force',
        src: 'JP 1-02'
    },
    'ARSPACE': {
        def: 'Army Space Command',
        src: 'JP 1-02'
    },
    'ARSPOC': {
        def: 'Army space operations center',
        src: 'JP 1-02'
    },
    'ART': {
        def: 'air reserve technician',
        src: 'JP 1-02'
    },
    'ARTCC': {
        def: 'air route traffic control center',
        src: 'JP 1-02'
    },
    'ARTS III': {
        def: 'Automated Radar Tracking System',
        src: 'JP 1-02'
    },
    'ARTYMET': {
        def: 'artillery meteorological',
        src: '1-02'
    },
    'AS': {
        def: 'analog secure',
        src: '1-02'
    },
    'ASA': {
        def: 'automatic spectrum analyzer',
        src: 'JP 1-02'
    },
    'ASA(ALT)': {
        def: 'Assistant Secretary of the Army for Acquisition, Logistics, and   Technology',
        src: 'JP 4-10'
    },
    'ASAP': {
        def: 'as soon as possible',
        src: 'JP 1-02'
    },
    'ASARS': {
        def: 'Advanced Synthetic Aperture Radar System',
        src: 'JP 1-02'
    },
    'ASAS': {
        def: 'All Source Analysis System',
        src: 'JP 1-02'
    },
    'ASAT': {
        def: 'antisatellite weapon',
        src: 'JP 1-02'
    },
    'ASB': {
        def: 'naval advanced support base',
        src: 'JP 1-02'
    },
    'ASBP': {
        def: 'Armed Services Blood Program',
        src: '1-02'
    },
    'ASBPO': {
        def: 'Armed Services Blood Program Office',
        src: '1-02'
    },
    'ASC': {
        def: 'acting service chief; Aeronautical Systems Center; Air Systems Command; Army Sustainment Command; assign switch classmark; Automatic Digital Network switching center',
        src: '1-02'
    },
    'ASCC': {
        def: 'Air Standardization Coordinating Committee; Army Service component command; Army Service component commander',
        src: '1-02'
    },
    'ASCIET': {
        def: 'all Services combat identification evaluation team',
        src: 'JP 1-02'
    },
    'ASCII': {
        def: 'American Standard Code for Information Interchange',
        src: 'JP 1-02'
    },
    'ASCOPE': {
        def: 'areas, structures, capabilities, organizations, people, and events ',
        src: '1-02'
    },
    'ASCS': {
        def: 'air support control section, air support coordination section',
        src: '1-02'
    },
    'ASD': {
        def: 'Assistant Secretary of Defense',
        src: '1-02'
    },
    'ASD(A&L)': {
        def: 'Assistant Secretary of Defense (Acquisition and Logistics)',
        src: 'JP 1-02'
    },
    'ASD(C)': {
        def: 'Assistant Secretary of Defense (Comptroller)',
        src: 'JP 1-02'
    },
    'ASD(C3I)': {
        def: 'Assistant Secretary of Defense (Command, Control, Communications, and Intelligence)',
        src: 'JP 1-02'
    },
    'ASD(FM&P)': {
        def: 'Assistant Secretary of Defense (Force Management and Personnel)',
        src: 'JP 1-02'
    },
    'ASD(FMP)': {
        def: 'Assistant Secretary of Defense (Force Management Policy)',
        src: 'JP 1-02'
    },
    'ASD(GSA)': {
        def: 'Assistant Secretary of Defense for Global Strategic Affairs',
        src: '1-02'
    },
    'ASD(HA)': {
        def: 'Assistant Secretary of Defense (Health Affairs)',
        src: '1-02'
    },
    'ASD(HD&ASA)': {
        def: 'Assistant Secretary of Defense (Homeland Defense and Americas\' Security Affairs)',
        src: '1-02'
    },
    'ASD(HD)': {
        def: 'Assistant Secretary of Defense (Homeland Defense)',
        src: 'JP 3-26'
    },
    'ASD(ISA)': {
        def: 'Assistant Secretary of Defense (International Security Affairs)',
        src: 'JP 1-02'
    },
    'ASD(ISP)': {
        def: 'Assistant Secretary of Defense (International Security Policy)',
        src: 'JP 1-02'
    },
    'ASD(L&MR)': {
        def: 'Assistant Secretary of Defense for Logistics and Materiel Readiness',
        src: '1-02'
    },
    'ASD(LA)': {
        def: 'Assistant Secretary of Defense (Legislative Affairs)',
        src: 'JP 1-02'
    },
    'ASD(NII)': {
        def: 'Assistant Secretary of Defense (Networks and Information Integration)',
        src: '1-02'
    },
    'ASD(OEPP)': {
        def: 'Assistant Secretary of Defense for Operational Energy Plans and Programs',
        src: '1-02'
    },
    'ASD(P&L)': {
        def: 'Assistant Secretary of Defense (Production and Logistics)',
        src: 'JP 1-02'
    },
    'ASD(PA&E)': {
        def: 'Assistant Secretary of Defense (Program Analysis and Evaluation)',
        src: 'JP 1-02'
    },
    'ASD(PA)': {
        def: 'Assistant Secretary of Defense (Public Affairs)',
        src: 'JP 1-02'
    },
    'ASD(RA)': {
        def: 'Assistant Secretary of Defense (Reserve Affairs)',
        src: '1-02'
    },
    'ASD(RSA)': {
        def: 'Assistant Secretary of Defense (Regional Security Affairs)',
        src: 'JP 1-02'
    },
    'ASD(S&R)': {
        def: 'Assistant Secretary of Defense (Strategy and Requirements)',
        src: 'JP 1-02'
    },
    'ASD(SO/LIC&IC)': {
        def: 'Assistant Secretary of Defense for Special Operations and Low-Intensity Conflict and Interdependent Capabilities',
        src: '1-02'
    },
    'ASD(SO/LIC)': {
        def: 'Assistant Secretary of Defense (Special Operations and Low-Intensity Conflict)',
        src: '1-02'
    },
    'ASDI': {
        def: 'analog simple data interface',
        src: 'JP 1-02'
    },
    'ASDIA': {
        def: 'All-Source Document Index',
        src: 'JP 1-02'
    },
    'ASE': {
        def: 'aircraft survivability equipment; automated stabilization equipment',
        src: 'JP 1-02'
    },
    'ASF': {
        def: 'aeromedical staging facility',
        src: 'JP 1-02'
    },
    'ASG': {
        def: 'Allied System for Geospatial Intelligence; area support group',
        src: '1-02'
    },
    'ASH': {
        def: 'Assistant Administrator for Security and Hazardous Materials; Assistant Secretary for Health (DHHS)',
        src: '1-02'
    },
    'ASI': {
        def: 'assign and display switch initialization',
        src: 'JP 1-02'
    },
    'ASIC': {
        def: 'Air and Space Interoperability Council',
        src: '1-02'
    },
    'ASIF': {
        def: 'Airlift Support Industrial Fund',
        src: 'JP 1-02'
    },
    'ASL': {
        def: 'allowable supply list; archipelagic sea lane; assign switch locator (SL) routing; authorized stockage list (Army)',
        src: 'JP 1-02'
    },
    'ASLT': {
        def: 'assault support landing table',
        src: '1-02'
    },
    'ASM': {
        def: 'air-to-surface missile; armored scout mission; Army Spectrum Manager; automated scheduling message',
        src: '1-02'
    },
    'ASMD': {
        def: 'antiship missile defense',
        src: 'JP 1-02'
    },
    'ASMO': {
        def: 'Army Spectrum Management Office',
        src: '1-02'
    },
    'ASN(RD&A)': {
        def: 'Assistant Secretary of the Navy for Research, Development and   Acquisition',
        src: 'JP 4-10'
    },
    'ASO': {
        def: 'advanced special operations; air support operations',
        src: 'JP 1-02'
    },
    'ASOC': {
        def: 'air support operations center',
        src: '1-02'
    },
    'ASOFDTG': {
        def: 'as of date/time group',
        src: 'JP 1-02'
    },
    'ASP': {
        def: 'ammunition supply point',
        src: '1-02'
    },
    'ASPA': {
        def: 'American Service-Members\' Protection Act',
        src: 'JP 3-07.1'
    },
    'ASPP': {
        def: 'acquisition systems protection program',
        src: 'JP 1-02'
    },
    'ASPPO': {
        def: 'Armed Service Production Planning Office',
        src: 'JP 1-02'
    },
    'ASPR': {
        def: 'Office of Assistant Secretary for Preparedness and Response (DHHS)',
        src: '1-02'
    },
    'ASR': {
        def: 'air support request; available supply rate',
        src: '1-02'
    },
    'ASSETREP': {
        def: 'transportation assets report',
        src: 'JP 1-02'
    },
    'AST': {
        def: 'assign secondary traffic channels',
        src: 'JP 1-02'
    },
    'ASTS': {
        def: 'aeromedical staging squadron',
        src: 'JP 1-02'
    },
    'ASW': {
        def: 'antisubmarine warfare; average surface wind',
        src: '1-02'
    },
    'ASWBPL': {
        def: 'Armed Services Whole Blood Processing Laboratories',
        src: 'JP 1-02'
    },
    'ASWC': {
        def: 'antisubmarine warfare commander',
        src: '1-02'
    },
    'At': {
        def: 'total attainable search area',
        src: 'JP 1-02'
    },
    'AT': {
        def: 'antitank; antiterrorism',
        src: '1-02'
    },
    'AT/FP': {
        def: 'antiterrorism/force protection',
        src: 'JP 1-02'
    },
    'ATA': {
        def: 'Airlift Tanker Association; antiterrorism assistance',
        src: '1-02'
    },
    'ATAC': {
        def: 'antiterrorism alert center (Navy)',
        src: 'JP 1-02'
    },
    'ATACC': {
        def: 'advanced tactical air command center',
        src: 'JP 1-02'
    },
    'ATACMS': {
        def: 'Army Tactical Missile System',
        src: '1-02'
    },
    'ATACO': {
        def: 'air tactical actions control officer',
        src: 'JP 1-02'
    },
    'ATACS': {
        def: 'Army Tactical Communications System',
        src: 'JP 1-02'
    },
    'ATAF': {
        def: 'Allied Tactical Air Force (NATO)',
        src: 'JP 1-02'
    },
    'ATBM': {
        def: 'antitactical ballistical missile',
        src: 'JP 1-02'
    },
    'ATC': {
        def: 'Air Threat Conference; air traffic control; air transportable clinic (USAF)',
        src: '1-02'
    },
    'ATCA': {
        def: 'Allied Tactical Communications Agency',
        src: 'JP 1-02'
    },
    'ATCAA': {
        def: 'air traffic control assigned airspace',
        src: 'JP 1-02'
    },
    'ATCC': {
        def: 'Antiterrorism Coordinating Committee',
        src: '1-02'
    },
    'ATCC-SSG': {
        def: 'Antiterrorism Coordinating Committee-Senior Steering Group',
        src: 'JP 3-07.2'
    },
    'ATCRBS': {
        def: 'Air Traffic Control Radar Beacon System',
        src: 'JP 1-02'
    },
    'ATCS': {
        def: 'air traffic control section',
        src: 'JP 1-02'
    },
    'ATDLS': {
        def: 'Advanced Tactical Data Link System',
        src: 'JP 1-02'
    },
    'ATDM': {
        def: 'adaptive time division multiplexer',
        src: 'JP 1-02'
    },
    'ATDS': {
        def: 'airborne tactical data system',
        src: 'JP 1-02'
    },
    'ATEP': {
        def: 'Antiterrorism Enterprise Portal',
        src: '1-02'
    },
    'ATF': {
        def: 'Advanced Targeting FLIR; amphibious task force; Bureau of Alcohol, Tobacco, Firearms, and Explosives (DOJ)',
        src: '1-02'
    },
    'ATG': {
        def: 'amphibious task group; assign trunk group cluster',
        src: 'JP 1-02'
    },
    'ATGM': {
        def: 'antitank guided missile; antitank guided munition',
        src: 'JP 1-02'
    },
    'ATH': {
        def: 'air transportable hospital; assign thresholds',
        src: 'JP 1-02'
    },
    'ATHS': {
        def: 'Airborne Target Handover System',
        src: 'JP 1-02'
    },
    'ATI': {
        def: 'asset target interaction',
        src: '1-02'
    },
    'ATM': {
        def: 'advanced trauma management; air target material; assign traffic metering',
        src: 'JP 1-02'
    },
    'ATMCT': {
        def: 'air terminal movement control team',
        src: 'JP 1-02'
    },
    'ATMP': {
        def: 'Air Target Materials Program',
        src: 'JP 1-02'
    },
    'ATN': {
        def: 'assign thresholds',
        src: '1-02'
    },
    'AtN': {
        def: 'attack the network',
        src: '1-02'
    },
    'ATO': {
        def: 'air tasking order; antiterrorism officer',
        src: '1-02'
    },
    'ATOC': {
        def: 'air tactical operations center; air terminal operations center',
        src: '1-02'
    },
    'ATP': {
        def: 'advance targeting pod; allied tactical publication; Army tactical publication',
        src: '1-02'
    },
    'ATR': {
        def: 'attrition reserve',
        src: 'JP 1-02'
    },
    'ATS': {
        def: 'air traffic service; assign terminal service',
        src: 'JP 1-02'
    },
    'ATSD(AE)': {
        def: 'Assistant to the Secretary of Defense (Atomic Energy)',
        src: 'JP 1-02'
    },
    'ATSD(IO)': {
        def: 'Assistant to the Secretary of Defense (Intelligence Oversight)',
        src: 'JP 1-02'
    },
    'ATSD(NCB)': {
        def: 'Assistant to the Secretary of Defense for Nuclear and Chemical and Biological Defense Programs',
        src: '1-02'
    },
    'ATT': {
        def: 'assign terminal type',
        src: 'JP 1-02'
    },
    'ATTP': {
        def: 'Army tactics, techniques, and procedures',
        src: '1-02'
    },
    'ATTU': {
        def: 'air transportable treatment unit',
        src: 'JP 1-02'
    },
    'ATWG': {
        def: 'antiterrorism working group',
        src: 'JP 3-07.2'
    },
    'AU': {
        def: 'African Union',
        src: '1-02'
    },
    'AUEL': {
        def: 'automated unit equipment list',
        src: 'JP 1-02'
    },
    'AUF': {
        def: 'airborne use of force',
        src: '1-02'
    },
    'AUG': {
        def: 'application user group',
        src: 'JP 1-02'
    },
    'AUIC': {
        def: 'active duty unit identification code',
        src: 'JP 1-02'
    },
    'AUSCANNZUKUS': {
        def: 'Australian, Canadian, New Zealand, United Kingdom, United States',
        src: '1-02'
    },
    'AUTODIN': {
        def: 'Automatic Digital Network',
        src: 'JP 1-02'
    },
    'AUX': {
        def: 'auxiliary',
        src: 'JP 1-02'
    },
    'AV': {
        def: 'air vehicle; asset visibility',
        src: '1-02'
    },
    'AV-8': {
        def: 'Harrier',
        src: 'JP 1-02'
    },
    'AV/VI': {
        def: 'audiovisual/visual information',
        src: 'JP 1-02'
    },
    'AVCAL': {
        def: 'aviation consolidated allowance list',
        src: '1-02'
    },
    'AVDTG': {
        def: 'analog via digital trunk group',
        src: 'JP 1-02'
    },
    'AVGAS': {
        def: 'aviation gasoline',
        src: 'JP 1-02'
    },
    'AVIM': {
        def: 'aviation intermediate maintenance',
        src: 'JP 1-02'
    },
    'AVL': {
        def: 'anti-vehicle land mine; assign variable location',
        src: '1-02'
    },
    'AVOU': {
        def: 'analog voice orderwire unit',
        src: 'JP 1-02'
    },
    'AVOW': {
        def: 'analog voice orderwire',
        src: 'JP 1-02'
    },
    'AVS': {
        def: 'asset validation system; asset visibility system; audiovisual squadron',
        src: '1-02'
    },
    'AVUM': {
        def: 'aviation unit maintenance',
        src: 'JP 1-02'
    },
    'AW': {
        def: 'air warfare',
        src: '1-02'
    },
    'AWACS': {
        def: 'Airborne Warning and Control System',
        src: '1-02'
    },
    'AWC': {
        def: 'air warfare commander',
        src: 'JP 1-02'
    },
    'AWCAP': {
        def: 'airborne weapons corrective action program',
        src: 'JP 1-02'
    },
    'AWDS': {
        def: 'automated weather distribution system',
        src: 'JP 1-02'
    },
    'AWG': {
        def: 'Asymmetric Warfare Group (Army)',
        src: '1-02'
    },
    'AWN': {
        def: 'Automated Weather Network',
        src: 'JP 1-02'
    },
    'AWOL': {
        def: 'absent without leave',
        src: 'JP 1-02'
    },
    'AWS': {
        def: 'Air Weather Service',
        src: 'JP 1-02'
    },
    'AWSE': {
        def: 'armament weapons support equipment',
        src: 'JP 1-02'
    },
    'AWSIM': {
        def: 'air warfare simulation model',
        src: 'JP 1-02'
    },
    'AWSR': {
        def: 'Air Weather Service regulation',
        src: 'JP 1-02'
    },
    'AXO': {
        def: 'abandoned explosive ordnance',
        src: '1-02'
    },
    'AXX': {
        def: 'assign XXX routing',
        src: 'JP 1-02'
    },
    'AZR': {
        def: 'assign zone restriction lists',
        src: 'JP 1-02'
    },
    'B': {
        def: 'cross-over barrier pattern',
        src: 'JP 1-02'
    },
    'B&A': {
        def: 'boat and aircraft',
        src: 'JP 1-02'
    },
    'B-52': {
        def: 'Stratofortress',
        src: 'JP 1-02'
    },
    'B/B': {
        def: 'baseband',
        src: 'JP 1-02'
    },
    'BAE': {
        def: 'brigade aviation element',
        src: '1-02'
    },
    'BAF': {
        def: 'backup alert force',
        src: 'JP 1-02'
    },
    'BAG': {
        def: 'baggage',
        src: 'JP 1-02'
    },
    'BAH': {
        def: 'basic allowance for housing',
        src: 'JP 1-02'
    },
    'BAI': {
        def: 'backup aircraft inventory; battlefield air interdiction',
        src: 'JP 1-02'
    },
    'BALO': {
        def: 'battalion air liaison officer',
        src: '1-02'
    },
    'BALS': {
        def: 'berthing and loading schedule',
        src: '1-02'
    },
    'BAS': {
        def: 'basic allowance for subsistence; battalion aid station',
        src: 'JP 1-02'
    },
    'BATF': {
        def: 'Bureau of Alcohol, Tobacco, and Firearms',
        src: 'JP 1-02'
    },
    'BB': {
        def: 'breakbulk',
        src: 'JP 1-02'
    },
    'bbl': {
        def: 'barrel (42 US gallons)',
        src: '1-02'
    },
    'BC': {
        def: 'bottom current',
        src: 'JP 1-02'
    },
    'BCA': {
        def: 'border crossing authority',
        src: '1-02'
    },
    'BCAT': {
        def: 'beddown capability assessment tool',
        src: 'JP 1-02'
    },
    'BCC': {
        def: 'battle control center',
        src: '1-02'
    },
    'BCD': {
        def: 'battlefield coordination detachment',
        src: '1-02'
    },
    'BCG': {
        def: 'beach control group',
        src: '1-02'
    },
    'BCI': {
        def: 'bit count integrity',
        src: 'JP 1-02'
    },
    'BCL': {
        def: 'battlefield coordination line',
        src: '1-02'
    },
    'BCN': {
        def: 'beacon',
        src: 'JP 1-02'
    },
    'BCOC': {
        def: 'base cluster operations center',
        src: 'JP 1-02'
    },
    'BCR': {
        def: 'baseline change request',
        src: 'JP 1-02'
    },
    'BCT': {
        def: 'brigade combat team',
        src: '1-02'
    },
    'BCTP': {
        def: 'battle command training program',
        src: 'JP 1-02'
    },
    'BCU': {
        def: 'beach clearance unit',
        src: 'JP 1-02'
    },
    'BD': {
        def: 'barge derrick',
        src: '1-02'
    },
    'BDA': {
        def: 'battle damage assessment',
        src: '1-02'
    },
    'BDAREP': {
        def: 'battle damage assessment report',
        src: '1-02'
    },
    'BDC': {
        def: 'blood donor center',
        src: 'JP 1-02'
    },
    'BDE': {
        def: 'brigade',
        src: '1-02'
    },
    'BDL': {
        def: 'beach discharge lighter',
        src: 'JP 1-02'
    },
    'BDOC': {
        def: 'base defense operations center',
        src: '1-02'
    },
    'BDR': {
        def: 'battle damage repair',
        src: 'JP 1-02'
    },
    'BDRP': {
        def: 'Biological Defense Research Program',
        src: 'JP 1-02'
    },
    'BDZ': {
        def: 'base defense zone',
        src: '1-02'
    },
    'BE': {
        def: 'basic encyclopedia',
        src: '1-02'
    },
    'BE number': {
        def: 'basic encyclopedia number',
        src: 'JP 1-02'
    },
    'BEAR': {
        def: 'base expeditionary airfield resources',
        src: '1-02'
    },
    'BEE': {
        def: 'bioenvironmental engineering officer',
        src: 'JP 4-02'
    },
    'BEI': {
        def: 'biometrics-enabled intelligence',
        src: '1-02'
    },
    'BEN': {
        def: 'base encyclopedia number',
        src: 'JP 1-02'
    },
    'BER': {
        def: 'bit error ratio',
        src: 'JP 1-02'
    },
    'BES': {
        def: 'budget estimate submission',
        src: 'JP 1-02'
    },
    'BEST': {
        def: 'border enforcement security task force',
        src: '1-02'
    },
    'BfV': {
        def: 'Bundesamt für Verfassungsschutz (federal office for defending the Constitution)',
        src: 'JP 1-02'
    },
    'BGC': {
        def: 'boat group commander',
        src: 'JP 1-02'
    },
    'BHR': {
        def: 'Bureau of Humanitarian Response',
        src: 'JP 1-02'
    },
    'BI': {
        def: 'battlefield injury; battle injury',
        src: '1-02'
    },
    'BIA': {
        def: 'behavioral influences analysis; Bureau of Indian Affairs',
        src: '1-02'
    },
    'BIAR': {
        def: 'biometric intelligence analysis report',
        src: '1-02'
    },
    'BIAS': {
        def: 'Battlefield Illumination Assistance System',
        src: 'JP 1-02'
    },
    'BICES': {
        def: 'battlefield information collection and exploitation system (NATO)',
        src: '1-02'
    },
    'BICON': {
        def: 'double container',
        src: '1-02'
    },
    'BIDDS': {
        def: 'Base Information Digital Distribution System',
        src: 'JP 1-02'
    },
    'BIDE': {
        def: 'basic identity data element',
        src: 'JP 1-02'
    },
    'BIFC': {
        def: 'Boise Interagency Fire Center',
        src: 'JP 1-02'
    },
    'BIFS': {
        def: 'Border Intelligence Fusion Section',
        src: '1-02'
    },
    'BIH': {
        def: 'International Time Bureau (Bureau International d\'l\'Heure)',
        src: 'JP 1-02'
    },
    'BII': {
        def: 'base information infrastructure',
        src: 'JP 1-02'
    },
    'BIMA': {
        def: 'Biometrics Identity Management Agency',
        src: '1-02'
    },
    'BINM': {
        def: 'Bureau of International Narcotics Matters',
        src: 'JP 1-02'
    },
    'BIO': {
        def: 'biological; Bureau of International Organizations',
        src: 'JP 1-02'
    },
    'BIS': {
        def: 'Bureau of Industry and Security',
        src: '1-02'
    },
    'BISS': {
        def: 'base installation security system',
        src: 'JP 1-02'
    },
    'BIT': {
        def: 'built-in test',
        src: 'JP 1-02'
    },
    'BITE': {
        def: 'built-in test equipment',
        src: 'JP 1-02'
    },
    'BIU': {
        def: 'beach interface unit',
        src: 'JP 1-02'
    },
    'BKA': {
        def: 'Bundeskriminalamt (federal criminal office)',
        src: 'JP 1-02'
    },
    'BL': {
        def: 'biocontainment level',
        src: 'JP 1-02'
    },
    'BLCP': {
        def: 'beach lighterage control point',
        src: '1-02'
    },
    'BLDREP': {
        def: 'blood report',
        src: 'JP 1-02'
    },
    'BLDSHIPREP': {
        def: 'blood shipment report',
        src: 'JP 1-02'
    },
    'BLM': {
        def: 'Bureau of Land Management',
        src: 'JP 1-02'
    },
    'BLOS': {
        def: 'beyond line-of-sight',
        src: '1-02'
    },
    'BLT': {
        def: 'battalion landing team',
        src: 'JP 1-02'
    },
    'BM': {
        def: 'ballistic missile; battle management; beach module',
        src: '1-02'
    },
    'BMC4I': {
        def: 'Battle Management Command, Control, Communications, Computers, and Intelligence',
        src: 'JP 1-02'
    },
    'BMCT': {
        def: 'begin morning civil twilight',
        src: 'JP 1-02'
    },
    'BMD': {
        def: 'ballistic missile defense',
        src: '1-02'
    },
    'BMDO': {
        def: 'Ballistic Missile Defense Organization',
        src: 'JP 1-02'
    },
    'BMDS': {
        def: 'ballistic missile defense system',
        src: '1-02'
    },
    'BMET': {
        def: 'biomedical electronics technician',
        src: '1-02'
    },
    'BMNT': {
        def: 'begin morning nautical twilight',
        src: 'JP 1-02'
    },
    'BMU': {
        def: 'beachmaster unit',
        src: '1-02'
    },
    'BN': {
        def: 'battalion',
        src: 'JP 1-02'
    },
    'BND': {
        def: 'Bundesnachrichtendienst (federal intelligence service)',
        src: 'JP 1-02'
    },
    'BOA': {
        def: 'basic ordering agreement',
        src: '1-02'
    },
    'BOC': {
        def: 'base operations center; bomb on coordinate',
        src: '1-02'
    },
    'BOCCA': {
        def: 'Bureau of Coordination of Civil Aircraft (NATO)',
        src: 'JP 1-02'
    },
    'BOG': {
        def: 'beach operations group',
        src: 'JP 1-02'
    },
    'BOH': {
        def: 'bottom of hill',
        src: 'JP 1-02'
    },
    'BORFIC': {
        def: 'Border Patrol Field Intelligence Center',
        src: 'JP 3-07.4'
    },
    'BOS': {
        def: 'base operating support; battlefield operating system',
        src: '1-02'
    },
    'BOS-I': {
        def: 'base operating support-integrator',
        src: '1-02'
    },
    'BOSG': {
        def: 'base operations support group',
        src: 'JP 1-02'
    },
    'BOSS': {
        def: 'base operating support service',
        src: '1-02'
    },
    'BOT': {
        def: 'bomb on target',
        src: '1-02'
    },
    'BP': {
        def: 'battle position; block parity',
        src: 'JP 1-02'
    },
    'BPA': {
        def: 'blanket purchase agreement'
    },
    'BPC': {
        def: 'building partnership capacity',
        src: '1-02'
    },
    'BPD': {
        def: 'blood products depot',
        src: 'JP 1-02'
    },
    'BPG': {
        def: 'beach party group',
        src: '1-02'
    },
    'BPI': {
        def: 'bits per inch',
        src: 'JP 1-02'
    },
    'BPLAN': {
        def: 'base plan',
        src: '1-02'
    },
    'BPO': {
        def: 'blood program office',
        src: 'JP 1-02'
    },
    'BPPBS': {
        def: 'bi-annual planning, programming, and budget system',
        src: 'JP 1-02'
    },
    'bps': {
        def: 'bits per second',
        src: '1-02'
    },
    'BPSK': {
        def: 'biphase shift keying',
        src: 'JP 1-02'
    },
    'BPT': {
        def: 'beach party team',
        src: '1-02'
    },
    'BPWRR': {
        def: 'bulk petroleum war reserve requirement',
        src: 'JP 1-02'
    },
    'BPWRS': {
        def: 'bulk petroleum war reserve stocks',
        src: 'JP 1-02'
    },
    'BR': {
        def: 'budget review',
        src: 'JP 1-02'
    },
    'BRAC': {
        def: 'base realignment and closure',
        src: 'JP 1-02'
    },
    'BRACE': {
        def: 'Base Resource and Capabillity Estimator',
        src: '1-02'
    },
    'BRC': {
        def: 'base recovery course',
        src: 'JP 1-02'
    },
    'BS': {
        def: 'battle staff; broadcast source',
        src: 'JP 1-02'
    },
    'BSA': {
        def: 'beach support area; brigade support area',
        src: 'JP 1-02'
    },
    'BSB': {
        def: 'brigade support battalion',
        src: '1-02'
    },
    'BSC': {
        def: 'black station clock',
        src: 'JP 1-02'
    },
    'BSC ro': {
        def: 'black station clock receive out',
        src: 'JP 1-02'
    },
    'BSCT': {
        def: 'behavioral science consultation team',
        src: 'JP 4-02'
    },
    'BSD': {
        def: 'blood supply detachment',
        src: 'JP 4-02'
    },
    'BSI': {
        def: 'base support installation',
        src: '1-02'
    },
    'BSP': {
        def: 'base support plan',
        src: 'JP 1-02'
    },
    'BSRP': {
        def: 'bureau strategic resource plan',
        src: '1-02'
    },
    'BSSG': {
        def: 'brigade service support group',
        src: 'JP 1-02'
    },
    'BSU': {
        def: 'blood supply unit',
        src: 'JP 1-02'
    },
    'BSZ': {
        def: 'base security zone',
        src: '1-02'
    },
    'BT': {
        def: 'bathythermograph',
        src: '1-02'
    },
    'BTB': {
        def: 'believed-to-be',
        src: 'JP 1-02'
    },
    'BTC': {
        def: 'blood transshipment center',
        src: '1-02'
    },
    'BTG': {
        def: 'basic target graphic',
        src: 'JP 1-02'
    },
    'BTOC': {
        def: 'battalion tactical operations center',
        src: 'JP 1-02'
    },
    'BTS': {
        def: 'Border and Transportation Security (DHS)',
        src: 'JP 3-26'
    },
    'BTU': {
        def: 'beach termination unit',
        src: '1-02'
    },
    'BULK': {
        def: 'bulk cargo',
        src: 'JP 1-02'
    },
    'BUMEDINST': {
        def: 'Bureau of Medicine and Surgery instruction',
        src: 'JP 4-06'
    },
    'BVR': {
        def: 'beyond visual range',
        src: '1-02'
    },
    'BW': {
        def: 'biological warfare',
        src: '1-02'
    },
    'BWC': {
        def: 'Biological Weapons Convention',
        src: 'JP 1-02'
    },
    'BZ': {
        def: 'buffer zone',
        src: 'JP 1-02'
    },
    'C': {
        def: 'Celsius; centigrade; clock; compromise band; coverage factor; creeping line pattern',
        src: '1-02'
    },
    'C di': {
        def: 'conditioned diphase',
        src: 'JP 1-02'
    },
    'C&A': {
        def: 'certification and accreditation',
        src: 'JP 1-02'
    },
    'C&E': {
        def: 'communications and electronics',
        src: 'JP 1-02'
    },
    'C&LAT': {
        def: 'cargo and loading analysis table',
        src: 'JP 1-02'
    },
    'C-130': {
        def: 'Hercules\t',
        src: 'JP 1-02'
    },
    'C-141': {
        def: 'Starlifter',
        src: 'JP 1-02'
    },
    'C-17': {
        def: 'Globemaster III',
        src: 'JP 1-02'
    },
    'C-21': {
        def: 'Learjet',
        src: 'JP 1-02'
    },
    'C-27': {
        def: 'Spartan',
        src: 'JP 1-02'
    },
    'C-2X': {
        def: 'coalition Intelligence Directorate counterintelligence and human intelligence staff element',
        src: 'JP 1-02'
    },
    'C-5': {
        def: 'Galaxy',
        src: 'JP 1-02'
    },
    'C-B': {
        def: 'chemical-biological',
        src: 'JP 1-02'
    },
    'C-CS': {
        def: 'communication and computer systems',
        src: 'JP 1-02'
    },
    'C-E': {
        def: 'communications-electronics',
        src: '1-02'
    },
    'C-IED': {
        def: 'counter-improvised explosive device',
        src: '1-02'
    },
    'C-JWICS': {
        def: 'Containerized Joint Worldwide Intelligence Communications System',
        src: 'JP 2-01'
    },
    'C-level': {
        def: 'category level',
        src: 'JP 1-02'
    },
    'C-NAF': {
        def: 'component numbered air force',
        src: '1-02'
    },
    'C-SMPP': {
        def: 'Consolidated Satellite Communications Management Policies and Procedures',
        src: '1-02'
    },
    'C-SSE': {
        def: 'consolidated satellite communications system expert',
        src: '1-02'
    },
    'C/A': {
        def: 'course acquisition',
        src: 'JP 1-02'
    },
    'C/C': {
        def: 'cabin cruiser; cast off and clear',
        src: 'JP 1-02'
    },
    'C2': {
        def: 'command and control',
        src: '1-02'
    },
    'C2-attack': {
        def: 'an offensive form of command and control warfare',
        src: 'JP 1-02'
    },
    'C2-protect': {
        def: 'a defensive form of command and control warfare',
        src: 'JP 1-02'
    },
    'C2CRE': {
        def: 'command and control chemical, biological, radiological, and nuclear response element',
        src: '1-02'
    },
    'C2E': {
        def: 'command and control element',
        src: 'JP 1-02'
    },
    'C2IP': {
        def: 'Command and Control Initiatives Program',
        src: 'JP 1-02'
    },
    'C2IPS': {
        def: 'Command and Control Information Processing System',
        src: 'JP 1-02'
    },
    'C2P': {
        def: 'command and control protection',
        src: 'JP 1-02'
    },
    'C2S': {
        def: 'command and control support',
        src: 'JP 1-02'
    },
    'C3': {
        def: 'command, control, and communications',
        src: 'JP 1-02'
    },
    'C3AG': {
        def: 'Command, Control, and Communications Advisory Group',
        src: 'JP 1-02'
    },
    'C3CM': {
        def: 'command, control, and communications countermeasures',
        src: 'JP 1-02'
    },
    'C3I': {
        def: 'command, control, communications, and intelligence',
        src: 'JP 1-02'
    },
    'C3IC': {
        def: 'coalition coordination, communications, and integration center',
        src: 'JP 1-02'
    },
    'C3SMP': {
        def: 'Command, Control, and Communications Systems Master Plan',
        src: 'JP 1-02'
    },
    'C4 systems': {
        def: 'command, control, communications, and computer systems',
        src: 'JP 1-02'
    },
    'C4CM': {
        def: 'command, control, communications, and computer countermeasures',
        src: 'JP 1-02'
    },
    'C4I': {
        def: 'command, control, communications, computers, and intelligence',
        src: 'JP 1-02'
    },
    'C4IFTW': {
        def: 'command, control, communications, computers, and intelligence for the Warrior',
        src: 'JP 1-02'
    },
    'C4S': {
        def: 'command, control, communications, and computer systems',
        src: 'JP 1-02'
    },
    'CA': {
        def: 'chaplain assistant; civil administration; civil affairs; combat assessment; coordinating altitude; credibility assessment; criticality assessment',
        src: '1-02'
    },
    'CAA': {
        def: 'civil air augmentation; combat aviation advisors; command arrangement agreement',
        src: '1-02'
    },
    'CAAF': {
        def: 'contractors authorized to accompany the force',
        src: '1-02'
    },
    'CAB': {
        def: 'combat aviation brigade',
        src: 'JP 1-02'
    },
    'CAC': {
        def: 'common access card; current actions center',
        src: 'JP 1-02'
    },
    'CACOM': {
        def: 'civil affairs command',
        src: '1-02'
    },
    'CACTIS': {
        def: 'community automated intelligence system',
        src: 'JP 1-02'
    },
    'CAD': {
        def: 'Canadian air division; cartridge actuated device; collective address designator; contract administration delegation ',
        src: '1-02'
    },
    'CADRS': {
        def: 'concern and deficiency reporting system',
        src: 'JP 1-02'
    },
    'CADS': {
        def: 'containerized ammunition distribution system',
        src: '1-02'
    },
    'CAF': {
        def: 'Canadian Air Force; combat air forces; commander, airborne/air assault force; commander, amphibious force',
        src: '1-02'
    },
    'CAFMS': {
        def: 'computer-assisted force management system',
        src: 'JP 1-02'
    },
    'CAG': {
        def: 'carrier air group; civil affairs group; collective address group',
        src: '1-02'
    },
    'CAGO': {
        def: 'contractor-acquired, government-owned',
        src: '1-02'
    },
    'CAIMS': {
        def: 'conventional ammunition integrated management system',
        src: 'JP 1-02'
    },
    'CAINS': {
        def: 'carrier aircraft inertial navigation system',
        src: 'JP 1-02'
    },
    'CAIS': {
        def: 'civil authority information support',
        src: '1-02'
    },
    'CAISE': {
        def: 'civil authority information support element',
        src: '1-02'
    },
    'CAL': {
        def: 'caliber; critical asset list',
        src: '1-02'
    },
    'CALA': {
        def: 'Community Airborne Library Architecture',
        src: 'JP 2-03'
    },
    'CALCM': {
        def: 'conventional air-launched cruise missile',
        src: 'JP 1-02'
    },
    'CALICS': {
        def: 'communication, authentication, location, intentions, condition, and situation',
        src: '1-02'
    },
    'CALMS': {
        def: 'computer-aided load manifesting system',
        src: 'JP 1-02'
    },
    'CAM': {
        def: 'chemical agent monitor; crisis action module',
        src: 'JP 1-02'
    },
    'CAMOC': {
        def: 'Caribbean Air and Marine Operations Center',
        src: '1-02'
    },
    'CAMPS': {
        def: 'Consolidated Air Mobility Planning System',
        src: '1-02'
    },
    'CAMT': {
        def: 'countering air and missile threats',
        src: 'JP 1-02'
    },
    'CANA': {
        def: 'convulsant antidote for nerve agent',
        src: 'JP 1-02'
    },
    'CANADA COM': {
        def: 'Canada Command',
        src: '1-02'
    },
    'CANR': {
        def: 'Canadian North American Aerospace Defense Command Region',
        src: '1-02'
    },
    'CANUS': {
        def: 'Canada-United States',
        src: 'JP 1-02'
    },
    'CANUS BDD': {
        def: 'Canada-United States Basic Defense Document',
        src: '1-02'
    },
    'CANUS CDP': {
        def: 'Canada-United States Combined Defense Plan',
        src: '1-02'
    },
    'CAO': {
        def: 'chief administrative officer; civil affairs operations; counterair operation',
        src: '1-02'
    },
    'CAO SOP': {
        def: 'standing operating procedures for coordination of atomic operations',
        src: 'JP 1-02'
    },
    'CAOC': {
        def: 'combat air operations center; combined air operations center',
        src: 'JP 1-02'
    },
    'CAP': {
        def: 'Civil Air Patrol; civil augmentation program; combat air patrol; configuration and alarm panel; Consolidated Appeals Process (UN); crisis action planning',
        src: '1-02'
    },
    'CAPT': {
        def: 'civil affairs planning team',
        src: '1-02'
    },
    'CAR': {
        def: 'Chief of the Army Reserve',
        src: 'JP 1-02'
    },
    'CARA': {
        def: 'chemical, biological, radiological, nuclear, and high-yield explosives analytical and remediation activity',
        src: '1-02'
    },
    'CARDA': {
        def: 'continental United States airborne reconnaissance for damage assessment; continental United States area reconnaissance for damage assessment',
        src: 'JP 1-02'
    },
    'CARE': {
        def: 'Cooperative for Assistance and Relief Everywhere (CAREUSA)',
        src: 'JP 1-02'
    },
    'CARIBROC': {
        def: 'Caribbean Regional Operations Center',
        src: 'JP 1-02'
    },
    'CARP': {
        def: 'computed air release point; contingency alternate route plan',
        src: 'JP 1-02'
    },
    'CARS': {
        def: 'combat arms regimental system',
        src: 'JP 1-02'
    },
    'CARVER': {
        def: 'criticality, accessibility, recuperability, vulnerability, effect, and recognizability',
        src: '1-02'
    },
    'CAS': {
        def: 'casualty; civil aviation security; close air support',
        src: '1-02'
    },
    'CASEVAC': {
        def: 'casualty evacuation',
        src: '1-02'
    },
    'CASF': {
        def: 'contingency aeromedical staging facility',
        src: '1-02'
    },
    'CASP': {
        def: 'computer-aided search planning',
        src: 'JP 1-02'
    },
    'CASPER': {
        def: 'contact area summary position report',
        src: 'JP 1-02'
    },
    'CASREP': {
        def: 'casualty report',
        src: 'JP 1-02'
    },
    'CASREQ': {
        def: 'close air support request',
        src: 'JP 1-02'
    },
    'CAT': {
        def: 'category; civil affairs team; crisis action team',
        src: '1-02'
    },
    'CATCC': {
        def: 'carrier air traffic control center',
        src: 'JP 1-02'
    },
    'CATF': {
        def: 'commander, amphibious task force',
        src: '1-02'
    },
    'CAU': {
        def: 'crypto ancillary unit; cryptographic auxiliary unit',
        src: 'JP 1-02'
    },
    'CAVU': {
        def: 'ceiling and visibility unlimited',
        src: 'JP 1-02'
    },
    'CAW': {
        def: 'carrier air wing',
        src: 'JP 1-02'
    },
    'CAW/ESS': {
        def: 'crisis action weather and environmental support system',
        src: 'JP 1-02'
    },
    'CAX': {
        def: 'computer-assisted exercise',
        src: 'JP 1-02'
    },
    'CB': {
        def: 'chemical-biological; construction battalion (SEABEES)',
        src: 'JP 1-02'
    },
    'CBBLS': {
        def: 'hundreds of barrels',
        src: 'JP 1-02'
    },
    'CBCP': {
        def: 'Customs and Border Clearance Program (DOD)',
        src: '1-02'
    },
    'CBD': {
        def: 'chemical, biological defense',
        src: 'JP 1-02'
    },
    'CBFS': {
        def: 'cesium beam frequency standard',
        src: 'JP 1-02'
    },
    'CBG': {
        def: 'coalition building guide',
        src: '1-02'
    },
    'CBIRF': {
        def: 'Chemical-Biological Incident Response Force',
        src: '1-02'
    },
    'CBLTU': {
        def: 'common battery line terminal unit',
        src: 'JP 1-02'
    },
    'CBMR': {
        def: 'capabilities-based munitions requirements',
        src: 'JP 1-02'
    },
    'CBMU': {
        def: 'construction battalion maintenance unit',
        src: '1-02'
    },
    'CBP': {
        def: 'capabilities-based planning; Customs and Border Protection (DHS)',
        src: '1-02'
    },
    'CBPO': {
        def: 'Consolidated Base Personnel Office',
        src: 'JP 1-02'
    },
    'CBPS': {
        def: 'chemical biological protective shelter',
        src: 'JP 1-02'
    },
    'CBR': {
        def: 'chemical, biological, and radiological',
        src: 'JP 1-02'
    },
    'CBRN': {
        def: 'Caribbean Basin Radar Network; chemical, biological, radiological, and nuclear',
        src: '1-02'
    },
    'CBRN CM': {
        def: 'chemical, biological, radiological, and nuclear consequence management',
        src: '1-02'
    },
    'CBRNE': {
        def: 'chemical, biological, radiological, nuclear, and high-yield explosives',
        src: '1-02'
    },
    'CBRT': {
        def: 'chemical-biological response team',
        src: 'JP 1-02'
    },
    'CBS': {
        def: 'common battery signaling',
        src: 'JP 1-02'
    },
    'CBSA': {
        def: 'Canadian Border Services Agency',
        src: '1-02'
    },
    'CbT': {
        def: 'combating terrorism',
        src: '1-02'
    },
    'CBT': {
        def: 'common battery terminal',
        src: 'JP 1-02'
    },
    'CbT-RIF': {
        def: 'Combating Terrorism Readiness Initiatives Fund',
        src: '3-07.2'
    },
    'CBTZ': {
        def: 'combat zone',
        src: 'JP 1-02'
    },
    'CBU': {
        def: 'conference bridge unit; construction battalion unit',
        src: '1-02'
    },
    'CBW': {
        def: 'chemical and biological warfare',
        src: 'JP 1-02'
    },
    'CC': {
        def: 'component command (NATO); component commander; critical capability',
        src: '1-02'
    },
    'CC&D': {
        def: 'camouflage, concealment, and deception',
        src: 'JP 1-02'
    },
    'CCA': {
        def: 'carrier-controlled approach; central contracting authority; circuit card assembly; combat cargo assistant; container control activity; contamination control area; contingency capabilities assessment; contract construction agent',
        src: '1-02'
    },
    'CCAP': {
        def: 'combatant command AFRTS planner',
        src: 'JP 3-61'
    },
    'CCAS': {
        def: 'contingency contract administration services',
        src: '1-02'
    },
    'CCAS-C': {
        def: 'contingency contract administration services commander',
        src: 'JP 1-02'
    },
    'CCATT': {
        def: 'critical care air transport team',
        src: 'JP 4-02'
    },
    'CCB': {
        def: 'Community Counterterrorism Board; configuration control board',
        src: '1-02'
    },
    'CCC': {
        def: 'coalition coordination cell; coalition coordination center; crisis coordination center; critical control circuit; cross-cultural communications course',
        src: '1-02'
    },
    'CCD': {
        def: 'camouflage, concealment, and deception',
        src: '1-02'
    },
    'CCDB': {
        def: 'consolidated counterdrug database',
        src: '1-02'
    },
    'CCDR': {
        def: 'combatant commander',
        src: '1-02'
    },
    'CCE': {
        def: 'container control element; continuing criminal enterprise',
        src: 'JP 1-02'
    },
    'CCEB': {
        def: 'Combined Communications-Electronics Board',
        src: '1-02'
    },
    'CCF': {
        def: 'collection coordination facility',
        src: 'JP 1-02'
    },
    'CCG': {
        def: 'combat communications group; crisis coordination group',
        src: '1-02'
    },
    'CCGD': {
        def: 'commander, Coast Guard district',
        src: 'JP 1-02'
    },
    'CCIB': {
        def: 'command center integration branch',
        src: 'JP 1-02'
    },
    'CCICA': {
        def: 'command counterintelligence coordinating authority',
        src: '1-02'
    },
    'CCIF': {
        def: 'Combatant Commander Initiative Fund',
        src: '1-02'
    },
    'CCIP': {
        def: 'continuously computed impact point'
    },
    'CCIR': {
        def: 'commander\'s critical information requirement; International Radio Consultative Committee',
        src: '1-02'
    },
    'CCIS': {
        def: 'common channel interswitch signaling',
        src: 'JP 1-02'
    },
    'CCITT': {
        def: 'International Telegraph and Telephone Consultative Committee',
        src: 'JP 1-02'
    },
    'CCIU': {
        def: 'CEF control interface unit',
        src: 'JP 1-02'
    },
    'CCJTF': {
        def: 'commander, combined joint task force',
        src: 'JP 1-02'
    },
    'CCL': {
        def: 'communications/computer link',
        src: 'JP 1-02'
    },
    'CCLI': {
        def: 'commerce control list item; computer control list item',
        src: '1-02'
    },
    'CCMD': {
        def: 'combatant command',
        src: '1-02'
    },
    'CCO': {
        def: 'central control officer; combat cargo officer; command and control office; container control officer; contingency contracting officer',
        src: '1-02'
    },
    'CCOI': {
        def: 'critical contact of interest',
        src: 'JP 3-32'
    },
    'CCP': {
        def: 'casualty collection point; consolidated cryptologic program; consolidation and containerization point',
        src: '1-02'
    },
    'CCPDS': {
        def: 'command center processing and display system',
        src: 'JP 1-02'
    },
    'CCR': {
        def: 'closed circuit refueling',
        src: '1-02'
    },
    'CCRD': {
        def: 'combatant commander\'s required delivery date',
        src: 'JP 1-02'
    },
    'CCS': {
        def: 'central control ship; commander’s communication synchronization; container control site',
        src: '1-02'
    },
    'CCSA': {
        def: 'combatant command support agent',
        src: '1-02'
    },
    'CCSD': {
        def: 'command communications service designator; control communications service designator',
        src: 'JP 1-02'
    },
    'CCT': {
        def: 'collaborative contingency targeting; combat control team',
        src: 'JP 1-02'
    },
    'CCTI': {
        def: 'Chairman of the Joint Chiefs of Staff commended training issue',
        src: 'JP 1-02'
    },
    'CCTV': {
        def: 'closed circuit television',
        src: 'JP 1-02'
    },
    'CCW': {
        def: '1980 United Nations Convention on Conventional Weapons; continuous carrier wave',
        src: 'JP 1-02'
    },
    'CD': {
        def: 'channel designator; compact disc; counterdrug; customer direct',
        src: '1-02'
    },
    'CD-ROM': {
        def: 'compact disc read-only memory',
        src: '1-02'
    },
    'CDC': {
        def: 'Centers for Disease Control and Prevention',
        src: '1-02'
    },
    'CDD': {
        def: 'chemical decontamination detachment',
        src: '1-02'
    },
    'CDE': {
        def: 'collateral damage estimation',
        src: '1-02'
    },
    'CDEMA': {
        def: 'Caribbean Disaster Emergency Management Agency',
        src: '1-02'
    },
    'CDERA': {
        def: 'Caribbean Disaster Emergency Response Agency',
        src: '1-02'
    },
    'CDF': {
        def: 'combined distribution frame',
        src: 'JP 1-02'
    },
    'CDHAM': {
        def: 'Center for Disaster and Humanitarian Assistance Medicine',
        src: '1-02'
    },
    'CDI': {
        def: 'cargo disposition instructions; conditioned diphase',
        src: '1-02'
    },
    'CDIP': {
        def: 'combined defense improvement project',
        src: 'JP 1-02'
    },
    'CDIPO': {
        def: 'counterdrug intelligence preparation for operations',
        src: '1-02'
    },
    'CDLMS': {
        def: 'common data link management system',
        src: 'JP 1-02'
    },
    'CDM': {
        def: 'cable driver modem',
        src: 'JP 1-02'
    },
    'CDMGB': {
        def: 'cable driver modem group buffer',
        src: 'JP 1-02'
    },
    'CDN': {
        def: 'compressed dial number',
        src: 'JP 1-02'
    },
    'CDO': {
        def: 'command duty officer; commander, detainee operations',
        src: 'JP 1-02'
    },
    'CDOC': {
        def: 'counterdrug operations center',
        src: 'JP 1-02'
    },
    'CDOPS': {
        def: 'counterdrug operations',
        src: 'JP 1-02'
    },
    'CDP': {
        def: 'commander\'s dissemination policy; landing craft air cushion departure point',
        src: 'JP 1-02'
    },
    'CDR': {
        def: 'commander; continuous data recording',
        src: 'JP 1-02'
    },
    'CDRAFNORTH': {
        def: 'Commander, Air Force North',
        src: '1-02'
    },
    'CDRAFSOF': {
        def: 'commander, Air Force special operations forces',
        src: 'JP 3-05.1'
    },
    'CDRCFCOM': {
        def: 'Commander, Combined Forces Command',
        src: '1-02'
    },
    'CDRESC': {
        def: 'commander, electronic security command',
        src: 'JP 1-02'
    },
    'CDREUDAC': {
        def: 'Commander, European Command Defense Analysis Center (ELINT) or European Data Analysis Center',
        src: 'JP 1-02'
    },
    'CDRFORSCOM': {
        def: 'Commander, Forces Command',
        src: 'JP 1-02'
    },
    'CDRG': {
        def: 'catastrophic disaster response group (FEMA)',
        src: 'JP 1-02'
    },
    'CDRJSOTF': {
        def: 'commander, joint special operations task force',
        src: '1-02'
    },
    'CDRL': {
        def: 'contract data requirements list',
        src: 'JP 1-02'
    },
    'CDRMTMC': {
        def: 'Commander, Military Traffic Management Command',
        src: 'JP 1-02'
    },
    'CDRNORAD': {
        def: 'Commander, North American Aerospace Defense Command',
        src: '1-02'
    },
    'CDRTSOC': {
        def: 'commander, theater special operations command',
        src: '1-02'
    },
    'CDRUNC': {
        def: 'Commander, United Nations Command',
        src: 'JP 1-02'
    },
    'CDRUSAFRICOM': {
        def: 'Commander, United States Africa Command',
        src: '1-02'
    },
    'CDRUSAINSCOM': {
        def: 'Commander, United States Army Intelligence and Security Command',
        src: 'JP 1-02'
    },
    'CDRUSARNORTH': {
        def: 'Commander, United States Army, North',
        src: '1-02'
    },
    'CDRUSCENTCOM': {
        def: 'Commander, United States Central Command',
        src: '1-02'
    },
    'CDRUSCYBERCOM': {
        def: 'Commander, United States Cyber Command',
        src: '1-02'
    },
    'CDRUSELEMNORAD': {
        def: 'Commander, United States Element, North American Aerospace Defense Command',
        src: '1-02'
    },
    'CDRUSEUCOM': {
        def: 'Commander, United States European Command',
        src: '1-02'
    },
    'CDRUSJFCOM': {
        def: 'Commander, United States Joint Forces Command',
        src: '1-02'
    },
    'CDRUSNAVEUR': {
        def: 'Commander, United States Naval Forces, Europe',
        src: 'JP 1-02'
    },
    'CDRUSNORTHCOM': {
        def: 'Commander, United States Northern Command',
        src: '1-02'
    },
    'CDRUSPACOM': {
        def: 'Commander, United States Pacific Command',
        src: '1-02'
    },
    'CDRUSSOCOM': {
        def: 'Commander, United States Special Operations Command',
        src: '1-02'
    },
    'CDRUSSOUTHCOM': {
        def: 'Commander, United States Southern Command',
        src: '1-02'
    },
    'CDRUSSTRATCOM': {
        def: 'Commander, United States Strategic Command',
        src: '1-02'
    },
    'CDRUSTRANSCOM': {
        def: 'Commander, United States Transportation Command',
        src: '1-02'
    },
    'CDS': {
        def: 'Canadian Chief of Defence Staff; Chief of Defence Staff (Canada); container delivery system',
        src: '1-02'
    },
    'CDSO': {
        def: 'counterdrug support office',
        src: 'JP 1-02'
    },
    'CDSSC': {
        def: 'continuity of operations plan designated successor service chief',
        src: 'JP 1-02'
    },
    'CDU': {
        def: 'counterdrug update',
        src: 'JP 1-02'
    },
    'CE': {
        def: 'casualty estimation; circular error; command element (USMC); communications-electronics; core element; counterespionage; critical element',
        src: '1-02'
    },
    'CEA': {
        def: 'captured enemy ammunition',
        src: 'JP 3-15'
    },
    'CEB': {
        def: 'combat engineer battalion',
        src: '1-02'
    },
    'CEC': {
        def: 'civil engineer corps',
        src: 'JP 1-02'
    },
    'CECOM': {
        def: 'communications-electronics command',
        src: 'JP 1-02'
    },
    'CEDI': {
        def: 'commercial electronic data interface',
        src: 'JP 1-02'
    },
    'CEDREP': {
        def: 'communications-electronics deployment report',
        src: 'JP 1-02'
    },
    'CEE': {
        def: 'captured enemy equipment',
        src: 'JP 1-02'
    },
    'CEF': {
        def: 'civil engineering file; common equipment facility',
        src: 'JP 1-02'
    },
    'CEG': {
        def: 'common equipment group',
        src: 'JP 1-02'
    },
    'CEHC': {
        def: 'Counter Explosive Hazards Center (Army)',
        src: '1-02'
    },
    'CEI': {
        def: 'critical employment indicator',
        src: 'JP 1-02'
    },
    'CELLEX': {
        def: 'cellular exploitation',
        src: '1-02'
    },
    'CEM': {
        def: 'combined effects munition',
        src: 'JP 1-02'
    },
    'CEMC': {
        def: 'communications-electronics management center',
        src: 'JP 1-02'
    },
    'CEMIRT': {
        def: 'civil engineer maintenance, inspection, and repair team',
        src: '1-02'
    },
    'CENTRIXS': {
        def: 'Combined Enterprise Regional Information Exchange System',
        src: '1-02'
    },
    'CEOI': {
        def: 'communications-electronics operating instructions',
        src: 'JP 1-02'
    },
    'CEP': {
        def: 'cable entrance panel; Chairman’s Exercise Program',
        src: '1-02'
    },
    'CEPOD': {
        def: 'communications-electronics post-deployment report',
        src: 'JP 1-02'
    },
    'CERF': {
        def: 'Central Emergency Revolving Fund (UN)',
        src: 'JP 1-02'
    },
    'CERFP': {
        def: 'chemical, biological, radiological, nuclear, and high-yield explosives enhanced response force package',
        src: '1-02'
    },
    'CERP': {
        def: 'Commanders\' Emergency Response Program',
        src: '1-02'
    },
    'CERT': {
        def: 'computer emergency response team; contingency engineering response team',
        src: '1-02'
    },
    'CERTSUB': {
        def: 'certain submarine',
        src: 'JP 1-02'
    },
    'CES': {
        def: 'coast earth station',
        src: 'JP 1-02'
    },
    'CESE': {
        def: 'civil engineering support equipment; communications equipment support element',
        src: 'JP 1-02'
    },
    'CESG': {
        def: 'communications equipment support group',
        src: 'JP 1-02'
    },
    'CESO': {
        def: 'civil engineer support office',
        src: 'JP 1-02'
    },
    'CESPG': {
        def: 'civil engineering support plan group; civil engineering support planning generator',
        src: 'JP 1-02'
    },
    'CEW': {
        def: 'civilian expeditionary workforce',
        src: '1-02'
    },
    'CEXC': {
        def: 'combined explosives exploitation cell',
        src: '1-02'
    },
    'CF': {
        def: 'Canadian forces; carrier furnished; causeway ferry; conventional forces; drift error confidence factor',
        src: '1-02'
    },
    'CF-COP': {
        def: 'counterfire common operational picture',
        src: 'JP 3-09'
    },
    'CFA': {
        def: 'Committee on Food Aid Policies and Programmes (UN); critical factors analysis',
        src: '1-02'
    },
    'CFACC': {
        def: 'combined force air component commander',
        src: 'JP 1-02'
    },
    'CFB': {
        def: 'Canadian forces base',
        src: '1-02'
    },
    'CFC': {
        def: 'Combined Forces Command, Korea',
        src: 'JP 1-02'
    },
    'CFL': {
        def: 'Contingency Planning Facilities List; coordinated fire line',
        src: 'JP 1-02'
    },
    'CFLCC': {
        def: 'coalition forces land component commander',
        src: '1-02'
    },
    'CFM': {
        def: 'cubic feet per minute',
        src: 'JP 1-02'
    },
    'CFO': {
        def: 'chief financial officer',
        src: 'JP 3-28'
    },
    'CFPM': {
        def: 'causeway ferry power module',
        src: '1-02'
    },
    'CFR': {
        def: 'Code of Federal Regulations',
        src: '1-02'
    },
    'CFS': {
        def: 'CI force protection source',
        src: 'JP 1-02'
    },
    'CFSO': {
        def: 'counterintelligence force protection source operations',
        src: 'JP 1-02'
    },
    'CFST': {
        def: 'coalition forces support team',
        src: '1-02'
    },
    'CG': {
        def: 'Chairman\'s guidance; Coast Guard; commanding general; Comptroller General',
        src: 'JP 1-02'
    },
    'CG-652': {
        def: 'Coast Guard Spectrum Management and Telecommunications Policy Division',
        src: '1-02'
    },
    'CGAS': {
        def: 'Coast Guard Air Station',
        src: 'JP 1-02'
    },
    'CGAUX': {
        def: 'Coast Guard Auxiliary',
        src: 'JP 1-02'
    },
    'CGC': {
        def: 'Coast Guard Cutter',
        src: 'JP 1-02'
    },
    'CGCAP': {
        def: 'Coast Guard capabilities plan',
        src: 'JP 1-02'
    },
    'CGCG': {
        def: 'Coast Guard Cryptologic Group ',
        src: '1-02'
    },
    'CGCIS': {
        def: 'Coast Guard Counterintelligence Service',
        src: '1-02'
    },
    'CGDEFOR': {
        def: 'Coast Guard defense force',
        src: '1-02'
    },
    'CGFMFLANT': {
        def: 'Commanding General, Fleet Marine Forces, Atlantic',
        src: 'JP 1-02'
    },
    'CGFMFPAC': {
        def: 'Commanding General, Fleet Marine Forces, Pacific',
        src: 'JP 1-02'
    },
    'CGIS': {
        def: 'United States Coast Guard Investigative Service',
        src: '1-02'
    },
    'CGLSMP': {
        def: 'Coast Guard logistic support and mobilization plan',
        src: 'JP 1-02'
    },
    'CGP': {
        def: 'Coast Guard publication',
        src: '1-02'
    },
    'CGRS': {
        def: 'common geographic reference system',
        src: 'JP 3-09'
    },
    'CGS': {
        def: 'common ground station; continental United States ground station',
        src: 'JP 1-02'
    },
    'CGUSAREUR': {
        def: 'Commanding General, United States Army, Europe',
        src: 'JP 1-02'
    },
    'CH': {
        def: 'channel; contingency hospital',
        src: 'JP 1-02'
    },
    'CH-53': {
        def: 'Sea Stallion',
        src: 'JP 1-02'
    },
    'CHAMPUS': {
        def: 'Civilian Health and Medical Program for the Uniformed  Services',
        src: 'JP 1-02'
    },
    'CHARC': {
        def: 'counterintelligence and human intelligence analysis and requirements cell',
        src: 'JP 2-01.2'
    },
    'CHB': {
        def: 'cargo-handling battalion',
        src: '1-02'
    },
    'CHCS': {
        def: 'composite health care system',
        src: 'JP 4-02'
    },
    'CHCSS': {
        def: 'Chief, Central Security Service',
        src: '1-02'
    },
    'CHE': {
        def: 'cargo-handing equipment; container-handling equipment',
        src: '1-02'
    },
    'CHET': {
        def: 'customs high endurance tracker',
        src: 'JP 1-02'
    },
    'CHOP': {
        def: 'change of operational control',
        src: 'JP 1-02'
    },
    'CHPPM': {
        def: 'US Army Center for Health Promotion and Preventive Medicine',
        src: 'JP 1-02'
    },
    'CHRIS': {
        def: 'chemical hazard response information system',
        src: 'JP 1-02'
    },
    'CHRP': {
        def: 'contaminated human remains pouch',
        src: '1-02'
    },
    'CHSTR': {
        def: 'characteristics of transportation resources',
        src: 'JP 1-02'
    },
    'CHSTREP': {
        def: 'characteristics of transportation resources report',
        src: 'JP 1-02'
    },
    'CI': {
        def: 'civilian internee; counterintelligence',
        src: '1-02'
    },
    'CI/KR': {
        def: 'critical infrastructure and key resources',
        src: '1-02'
    },
    'CIA': {
        def: 'Central Intelligence Agency',
        src: '1-02'
    },
    'CIAP': {
        def: 'Central Intelligence Agency program; central intelligence architecture plan; command intelligence architecture plan; command intelligence architecture program',
        src: '1-02'
    },
    'CIAS': {
        def: 'counterintelligence analysis section',
        src: 'JP 1-02'
    },
    'CIAT': {
        def: 'counterintelligence analytic team',
        src: 'JP 1-02'
    },
    'CIB': {
        def: 'combined information bureau; controlled image base',
        src: '1-02'
    },
    'CIC': {
        def: 'combat information center; combat intelligence center (Marine Corps); combined intelligence center; communications interface controller; content indicator code; counterintelligence center',
        src: 'JP 1-02'
    },
    'CICA': {
        def: 'counterintelligence coordinating authority',
        src: '1-02'
    },
    'CICAD': {
        def: 'Inter-American Drug Abuse Control Commission',
        src: 'JP 3-07.4'
    },
    'CICC': {
        def: 'counterintelligence coordination cell',
        src: '1-02'
    },
    'CICR': {
        def: 'counterintelligence collection requirement',
        src: '1-02'
    },
    'CID': {
        def: 'combat identification; combat intelligence division; criminal investigation division',
        src: '1-02'
    },
    'CIDB': {
        def: 'common intelligence database',
        src: 'JP 1-02'
    },
    'CIDC': {
        def: 'Criminal Investigation Division Command',
        src: 'JP 1-02'
    },
    'CIDNE': {
        def: 'Combined Information Data Network Exchange',
        src: '1-02'
    },
    'CIE': {
        def: 'collaborative information environment',
        src: '1-02'
    },
    'CIEA': {
        def: 'classification, identification, and engagement area',
        src: '1-02'
    },
    'CIEG/CIEL': {
        def: 'common information exchange glossary and language',
        src: 'JP 1-02'
    },
    'CIFA': {
        def: 'counterintelligence field activity',
        src: 'JP 2-01.2'
    },
    'CIG': {
        def: 'communications interface group',
        src: 'JP 1-02'
    },
    'CIHO': {
        def: 'counterintelligence/human intelligence officer',
        src: 'JP 1-02'
    },
    'CIIR': {
        def: 'counterintelligence information report',
        src: 'JP 1-02'
    },
    'CIL': {
        def: 'command information library; critical information list; critical item list',
        src: '1-02'
    },
    'CILO': {
        def: 'counterintelligence liaison officer',
        src: 'JP 1-02'
    },
    'CIM': {
        def: 'civil information management; compartmented information management',
        src: '1-02'
    },
    'CIMIC': {
        def: 'civil-military coorperation',
        src: '1-02'
    },
    'CIN': {
        def: 'cargo increment number',
        src: 'JP 1-02'
    },
    'CIO': {
        def: 'chief information officer; command intelligence officer',
        src: '1-02'
    },
    'CIOC': {
        def: 'counterintelligence operations cell',
        src: '1-02'
    },
    'CIOTA': {
        def: 'counterintelligence operational tasking authority',
        src: 'JP 1-02'
    },
    'CIP': {
        def: 'communications interface processor; critical infrastructure protection',
        src: '1-02'
    },
    'CIPSU': {
        def: 'communications interface processor pseudo line',
        src: 'JP 1-02'
    },
    'CIR': {
        def: 'continuing intelligence requirement',
        src: 'JP 1-02'
    },
    'CIRM': {
        def: 'International Radio-Medical Center',
        src: 'JP 1-02'
    },
    'CIRV': {
        def: 'common interswitch rekeying variable',
        src: 'JP 1-02'
    },
    'CIRVIS': {
        def: 'communications instructions for reporting vital intelligence sightings',
        src: 'JP 1-02'
    },
    'CIS': {
        def: 'common item support; Commonwealth of Independent States; communications interface shelter',
        src: 'JP 1-02'
    },
    'CISAR': {
        def: 'catastrophic incident search and rescue',
        src: '1-02'
    },
    'CISD': {
        def: 'critical incident stress debriefing',
        src: 'JP 3-07.2'
    },
    'CISO': {
        def: 'counterintelligence staff office; counterintelligence support officer',
        src: 'JP 1-02'
    },
    'CITE': {
        def: 'computer intrusion technical exploitation',
        src: '1-02'
    },
    'CITP': {
        def: 'counter-improvised explosive device targeting program',
        src: '1-02'
    },
    'CIV': {
        def: 'civilian',
        src: 'JP 1-02'
    },
    'CIVMAR': {
        def: 'civil service mariner',
        src: '1-02'
    },
    'CIVPOL': {
        def: 'civilian police',
        src: '1-02'
    },
    'CIWG': {
        def: 'communications interoperability working group',
        src: 'JP 1-02'
    },
    'CJ-4': {
        def: 'combined-joint logistics officer',
        src: '1-02'
    },
    'CJATF': {
        def: 'commander, joint amphibious task force',
        src: 'JP 1-02'
    },
    'CJB': {
        def: 'Congressional Justification Book',
        src: 'JP 1-02'
    },
    'CJCS': {
        def: 'Chairman of the Joint Chiefs of Staff',
        src: '1-02'
    },
    'CJCSAN': {
        def: 'Chairman of the Joint Chiefs of Staff Alerting Network',
        src: 'JP 1-02'
    },
    'CJCSI': {
        def: 'Chairman of the Joint Chiefs of Staff instruction',
        src: '1-02'
    },
    'CJCSM': {
        def: 'Chairman of the Joint Chiefs of Staff manual',
        src: '1-02'
    },
    'CJDA': {
        def: 'critical joint duty assignment',
        src: 'JP 1-02'
    },
    'CJE': {
        def: 'component joint data networks operations officer equivalent',
        src: '1-02'
    },
    'CJLOTS': {
        def: 'combined joint logistics over-the-shore',
        src: '1-02'
    },
    'CJMAB': {
        def: 'Central Joint Mortuary Affairs Board',
        src: 'JP 4-06'
    },
    'CJMAO': {
        def: 'Central Joint Mortuary Affairs Office; Chief, joint mortuary affairs office',
        src: 'JP 1-02'
    },
    'CJMISTF': {
        def: 'combined joint military information support task force',
        src: '1-02'
    },
    'CJMTF': {
        def: 'combined joint military information support operations task force',
        src: '1-02'
    },
    'CJOC': {
        def: 'Canada Joint Operations Command',
        src: '1-02'
    },
    'CJSART': {
        def: 'Criminal Justice Sector Assessment Rating Tool',
        src: '1-02'
    },
    'CJSMPT': {
        def: 'Coalition Joint Spectrum Management Planning Tool',
        src: '1-02'
    },
    'CJTF': {
        def: 'combined joint task force (NATO); commander, joint task force',
        src: '1-02'
    },
    'CJTF-CS': {
        def: 'Commander, Joint Task Force - Civil Support',
        src: 'JP 3-41'
    },
    'CJTF-NCR': {
        def: 'Commander, Joint Task Force - National Capital Region',
        src: 'JP 3-41'
    },
    'CKT': {
        def: 'circuit',
        src: 'JP 1-02'
    },
    'CL': {
        def: 'class',
        src: 'JP 4-02'
    },
    'CLA': {
        def: 'landing craft, air cushion launch area',
        src: '1-02'
    },
    'CLASSRON': {
        def: 'class squadron',
        src: '1-02'
    },
    'CLB': {
        def: 'combat logistics battalion',
        src: '1-02'
    },
    'CLD': {
        def: 'compact laser designator',
        src: 'JP 1-02'
    },
    'CLDP': {
        def: 'Commercial Law Development Program',
        src: '1-02'
    },
    'CLEA': {
        def: 'civilian law enforcement agency',
        src: 'JP 1-02'
    },
    'CLF': {
        def: 'combat logistics force; commander, landing force',
        src: '1-02'
    },
    'CLG': {
        def: 'combat logistics group',
        src: 'JP 3-34'
    },
    'CLGP': {
        def: 'cannon-launched guided projectile',
        src: 'JP 1-02'
    },
    'CLIA': {
        def: 'Clinical Laboratory Improvement Amendments',
        src: '1-02'
    },
    'CLIPS': {
        def: 'communications link interface planning system',
        src: 'JP 1-02'
    },
    'CLPSB': {
        def: 'combatant commander logistic procurement support board',
        src: '1-02'
    },
    'CLPT': {
        def: 'contingency load planning team',
        src: '1-02'
    },
    'CLR': {
        def: 'combat logistics regiment',
        src: '1-02'
    },
    'CLS': {
        def: 'contractor logistic support',
        src: '1-02'
    },
    'CLSS': {
        def: 'combat logistic support squadron',
        src: 'JP 1-02'
    },
    'CLT': {
        def: 'civil liaison team; combat lasing team'
    },
    'CLZ': {
        def: 'craft landing zone; cushion landing zone; landing craft, air cushion landing zone',
        src: '1-02'
    },
    'Cm': {
        def: 'mean coverage factor',
        src: 'JP 1-02'
    },
    'cm': {
        def: 'centimeter',
        src: 'JP 4-06'
    },
    'CM': {
        def: 'Chairman\'s memorandum; collection manager; combination module; configuration management; control modem; countermine; cruise missile',
        src: '1-02'
    },
    'CM R&A': {
        def: 'consequence management response and assessment',
        src: 'JP 3-41'
    },
    'CM&D': {
        def: 'collection management & dissemination',
        src: '1-02'
    },
    'CMA': {
        def: 'collection management authority',
        src: '1-02'
    },
    'CMAA': {
        def: 'cooperative military airlift agreement',
        src: '1-02'
    },
    'CMAH': {
        def: 'commander of a combatant command\'s Mobile Alternate Headquarters',
        src: 'JP 1-02'
    },
    'CMAOC': {
        def: 'Casualty and Mortuary Affairs Operations Center',
        src: '1-02'
    },
    'CMAT': {
        def: 'consequence management advisory team',
        src: '1-02'
    },
    'Cmc': {
        def: 'midpoint compromise coverage factor',
        src: 'JP 1-02'
    },
    'CMC': {
        def: 'Commandant of the Marine Corps; crew management cell; Office of Civilian-Military Cooperation (USAID)',
        src: '1-02'
    },
    'CMCB': {
        def: 'civil-military coordination board ',
        src: '1-02'
    },
    'CMCC': {
        def: 'combined movement coordination center',
        src: '1-02'
    },
    'CMD': {
        def: 'command; cruise missile defense',
        src: 'JP 1-02'
    },
    'CMDO': {
        def: 'command military deception officer',
        src: '1-02'
    },
    'CME': {
        def: 'civil-military engagement',
        src: '1-02'
    },
    'CMHT': {
        def: 'consequence management home team',
        src: 'JP 1-02'
    },
    'CMM': {
        def: 'Office of Conflict Management and Mitigation (USAID)',
        src: '1-02'
    },
    'CMMA': {
        def: 'collection management mission application',
        src: '1-02'
    },
    'CMO': {
        def: 'Central Measurement and Signature Intelligence (MASINT) Organization; chief medical officer; chief military observer; civil-military operations; collection management office(r); configuration management office',
        src: '1-02'
    },
    'CMOC': {
        def: 'cargo movement operations center; Cheyenne Mountain Operations Center; civil-military operations center',
        src: '1-02'
    },
    'CMOS': {
        def: 'cargo movement operations system; Cargo Movement Operations System (USAF); complimentary metal-oxide semiconductor',
        src: '1-02'
    },
    'CMP': {
        def: 'communications message processor; contractor management plan',
        src: '1-02'
    },
    'CMPF': {
        def: 'commander, maritime pre-positioned force',
        src: '1-02'
    },
    'CMPT': {
        def: 'consequence management planning team',
        src: 'JP 1-02'
    },
    'CMRT': {
        def: 'consequence management response team',
        src: 'JP 1-02'
    },
    'CMS': {
        def: 'cockpit management system; command management system; community management staff; community security materiel system; contingency mutual support; crisis management system',
        src: 'JP 1-02'
    },
    'CMSE': {
        def: 'civil-military support element',
        src: '1-02'
    },
    'CMST': {
        def: 'consequence management support team',
        src: '1-02'
    },
    'CMTS': {
        def: 'comments',
        src: 'JP 1-02'
    },
    'CMTU': {
        def: 'cartridge magnetic tape unit',
        src: 'JP 1-02'
    },
    'CMV': {
        def: 'commercial motor vehicle',
        src: 'JP 3-07.4'
    },
    'CMX': {
        def: 'crisis management exercise',
        src: 'JP 1-02'
    },
    'CNAC': {
        def: 'Customs National Aviation Center (USCS)',
        src: 'JP 1-02'
    },
    'CNASP': {
        def: 'chairman\'s net assessment for strategic planning',
        src: 'JP 1-02'
    },
    'CNBG': {
        def: 'commander, naval beach group',
        src: '1-02'
    },
    'CNC': {
        def: 'Crime and Narcotics Center (CIA)',
        src: '1-02'
    },
    'CNCE': {
        def: 'communications nodal control element',
        src: 'JP 1-02'
    },
    'CNCI': {
        def: 'Comprehensive National Cybersecurity Initiative',
        src: '1-02'
    },
    'CND': {
        def: 'counternarcotics division',
        src: '1-02'
    },
    'CNE': {
        def: 'computer network exploitation; Counter Narcotics Enforcement',
        src: '1-02'
    },
    'CNGB': {
        def: 'Chief, National Guard Bureau',
        src: '1-02'
    },
    'CNIC': {
        def: 'Commander, Navy Installations Command',
        src: '1-02'
    },
    'CNM': {
        def: 'classified notice to mariners',
        src: '1-02'
    },
    'CNMOC': {
        def: 'Commander, Naval Meteorology and Oceanography Command',
        src: '1-02'
    },
    'CNO': {
        def: 'Chief of Naval Operations',
        src: '1-02'
    },
    'CNOG': {
        def: 'Chairman, Nuclear Operations Group',
        src: 'JP 1-02'
    },
    'CNRF': {
        def: 'Commander, Naval Reserve Forces',
        src: 'JP 1-02'
    },
    'CNSG': {
        def: 'Commander, Naval Security Group',
        src: 'JP 2-01'
    },
    'CNTY': {
        def: 'country',
        src: 'JP 1-02'
    },
    'CNWDI': {
        def: 'critical nuclear weapons design information',
        src: 'JP 1-02'
    },
    'CO': {
        def: 'commanding officer; cyberspace operations',
        src: '1-02'
    },
    'COA': {
        def: 'course of action',
        src: '1-02'
    },
    'COAA': {
        def: 'course-of-action analysis',
        src: 'JP 4-02'
    },
    'COAMPS': {
        def: 'Coupled Ocean Atmosphere Mesoscale Prediction System',
        src: 'JP 1-02'
    },
    'COB': {
        def: 'collocated operating base; contingency operating base',
        src: 'JP 1-02'
    },
    'COBOL': {
        def: 'common business-oriented language',
        src: 'JP 1-02'
    },
    'COC': {
        def: 'combat operations center',
        src: 'JP 1-02'
    },
    'CoC': {
        def: 'Code of Conduct',
        src: 'JP 3-50'
    },
    'COCO': {
        def: 'contractor-owned, contractor-operated',
        src: '1-02'
    },
    'COCOM': {
        def: 'combatant command (command authority)',
        src: '1-02'
    },
    'COD': {
        def: 'carrier onboard delivery; combat operations division',
        src: '1-02'
    },
    'COE': {
        def: 'Army Corps of Engineers; common operating environment; concept of employment',
        src: 'JP 1-02'
    },
    'COEDMHA': {
        def: 'Center for Excellence in Disaster Management and Humanitarian Assistance (USPACOM)',
        src: '1-02'
    },
    'COF': {
        def: 'chief of fires; conduct of fire',
        src: '1-02'
    },
    'COFC': {
        def: 'container on flatcar',
        src: 'JP 1-02'
    },
    'COG': {
        def: 'center of gravity; continuity of government',
        src: '1-02'
    },
    'COGARD': {
        def: 'Coast Guard',
        src: 'JP 1-02'
    },
    'COI': {
        def: 'community of interest; contact of interest',
        src: '1-02'
    },
    'COIC': {
        def: 'counter-improvised explosive device operations integration center; Counter-Improvised Explosive Device Operations/Intelligence Integration Center (JIEDDO)',
        src: '1-02'
    },
    'COIN': {
        def: 'counterinsurgency',
        src: '1-02'
    },
    'COLDS': {
        def: 'cargo offload and discharge system',
        src: 'JP 1-02'
    },
    'COLISEUM': {
        def: 'community on-line intelligence system for end-users and managers',
        src: 'JP 1-02'
    },
    'COLPRO': {
        def: 'collective protection',
        src: '1-02'
    },
    'COLS': {
        def: 'concept of logistic support',
        src: '1-02'
    },
    'COLT': {
        def: 'combat observation and lasing team',
        src: 'JP 1-02'
    },
    'COM': {
        def: 'chief of mission; collection operations management; command; commander',
        src: '1-02'
    },
    'COMACC': {
        def: 'Commander, Air Combat Command',
        src: 'JP 1-02'
    },
    'COMAFFOR': {
        def: 'commander, Air Force forces',
        src: '1-02'
    },
    'COMAFSOAC': {
        def: 'commander, Air Force special operations air component',
        src: '1-02'
    },
    'COMAFSOC': {
        def: 'Commander, Air Force Special Operations Command',
        src: 'JP 1-02'
    },
    'COMAJF': {
        def: 'commander, allied joint force',
        src: 'JP 3-61'
    },
    'COMALF': {
        def: 'commander airlift forces',
        src: 'JP 1-02'
    },
    'COMALOC': {
        def: 'commercial air line of communications',
        src: '1-02'
    },
    'COMARFOR': {
        def: 'commander, Army forces',
        src: 'JP 1-02'
    },
    'COMCAM': {
        def: 'combat camera',
        src: '1-02'
    },
    'COMCARGRU': {
        def: 'commander, carrier group',
        src: 'JP 1-02'
    },
    'COMCRUDESGRU': {
        def: 'commander, cruiser destroyer group',
        src: 'JP 1-02'
    },
    'COMDCAEUR': {
        def: 'Commander, Defense Communications Agency Europe',
        src: 'JP 1-02'
    },
    'COMDESRON': {
        def: 'commander, destroyer squadron',
        src: '1-02'
    },
    'COMDT COGARD': {
        def: 'Commandant, United States Coast Guard',
        src: 'JP 1-02'
    },
    'COMDTINST': {
        def: 'Commandant of the Coast Guard instruction',
        src: '1-02'
    },
    'COMFLTCYBERCOM': {
        def: 'Commander, Fleet Cyber Command',
        src: '1-02'
    },
    'COMICEDEFOR': {
        def: 'Commander United States Forces, Iceland',
        src: 'JP 1-02'
    },
    'COMIDEASTFOR': {
        def: 'Commander, Middle East Forces',
        src: 'JP 1-02'
    },
    'COMINEWARCOM': {
        def: 'Commander, Mine Warfare Command',
        src: 'JP 1-02'
    },
    'COMINT': {
        def: 'communications intelligence',
        src: '1-02'
    },
    'COMJCSE': {
        def: 'Commander, Joint Communications Support Element',
        src: 'JP 1-02'
    },
    'COMJIC': {
        def: 'Commander, Joint Intelligence Center',
        src: 'JP 1-02'
    },
    'COMLANDFOR': {
        def: 'commander, land forces',
        src: 'JP 1-02'
    },
    'COMLANTAREACOGARD': {
        def: 'Commander, Coast Guard Atlantic Area',
        src: 'JP 1-02'
    },
    'COMLOGGRU': {
        def: 'combat logistics group',
        src: 'JP 1-02'
    },
    'COMM': {
        def: 'communications',
        src: 'JP 1-02'
    },
    'COMMARFOR': {
        def: 'commander, Marine Corps forces',
        src: '1-02'
    },
    'COMMARFORNORTH': {
        def: 'Commander, Marine Corps Forces North',
        src: '1-02'
    },
    'COMMDZ': {
        def: 'Commander, Maritime Defense Zone',
        src: 'JP 1-02'
    },
    'COMNAV': {
        def: 'Committee for European Airspace Coordination Working Group on Communications and Navigation Aids',
        src: 'JP 1-02'
    },
    'COMNAVAIRLANT': {
        def: 'Commander, Naval Air Force, Atlantic',
        src: 'JP 1-02'
    },
    'COMNAVAIRPAC': {
        def: 'Commander, Naval Air Force, Pacific',
        src: 'JP 1-02'
    },
    'COMNAVAIRSYSCOM': {
        def: 'Commander, Naval Air Systems Command',
        src: 'JP 1-02'
    },
    'COMNAVCOMTELCOM': {
        def: 'Commander, Naval Computer and Telecommunications Command',
        src: 'JP 1-02'
    },
    'COMNAVELSG': {
        def: 'Commander, Navy Expeditionary Logistics Support Group',
        src: '1-02'
    },
    'COMNAVFOR': {
        def: 'commander, Navy forces',
        src: 'JP 1-02'
    },
    'COMNAVMETOCCOM': {
        def: 'Commander, Naval Meteorology and Oceanography Command',
        src: 'JP 1-02'
    },
    'COMNAVSEASYSCOM': {
        def: 'Commander, Naval Sea Systems Command',
        src: 'JP 1-02'
    },
    'COMNAVSECGRP': {
        def: 'Commander, United States Navy Security Group',
        src: 'JP 1-02'
    },
    'COMNAVSURFLANT': {
        def: 'Commander, Naval Surface Force, Atlantic',
        src: 'JP 1-02'
    },
    'COMNAVSURFPAC': {
        def: 'Commander, Naval Surface Force, Pacific',
        src: 'JP 1-02'
    },
    'COMNET': {
        def: 'communications network',
        src: '1-02'
    },
    'COMP': {
        def: 'component',
        src: 'JP 1-02'
    },
    'COMPACAF': {
        def: 'Commander, Pacific Air Forces',
        src: '1-02'
    },
    'COMPACAREACOGARD': {
        def: 'Commander, Coast Guard Pacific Area',
        src: 'JP 1-02'
    },
    'COMPACFLT': {
        def: 'Commander, Pacific Fleet',
        src: '1-02'
    },
    'COMPASS': {
        def: 'common operational modeling, planning, and simulation strategy; Computerized Movement Planning and Status System',
        src: '1-02'
    },
    'COMPES': {
        def: 'contingency operations mobility planning and execution system',
        src: 'JP 1-02'
    },
    'COMPLAN': {
        def: 'communications plan',
        src: 'JP 1-02'
    },
    'COMPUSEC': {
        def: 'computer security',
        src: 'JP 1-02'
    },
    'COMSAT': {
        def: 'communications satellite',
        src: 'JP 1-02'
    },
    'COMSC': {
        def: 'Commander, Military Sealift Command',
        src: '1-02'
    },
    'COMSCINST': {
        def: 'Commander, Military Sealift Command instruction',
        src: '1-02'
    },
    'COMSEC': {
        def: 'communications security',
        src: '1-02'
    },
    'COMSOC': {
        def: 'Commander, Special Operations Command',
        src: 'JP 1-02'
    },
    'COMSOCCENT': {
        def: 'Commander, Special Operations Command, United States Central Command',
        src: 'JP 1-02'
    },
    'COMSOCEUR': {
        def: 'Commander, Special Operations Command, United States European Command',
        src: 'JP 1-02'
    },
    'COMSOCPAC': {
        def: 'Commander, Special Operations Command, Pacific',
        src: '1-02'
    },
    'COMSOCSOUTH': {
        def: 'Commander Special Operations Command, United States Southern Command',
        src: 'JP 1-02'
    },
    'COMSOF': {
        def: 'commander, special operations forces',
        src: 'JP 1-02'
    },
    'COMSTAT': {
        def: 'communications status',
        src: 'JP 1-02'
    },
    'COMSUBLANT': {
        def: 'Commander Submarine Force, United States Atlantic Fleet',
        src: 'JP 1-02'
    },
    'COMSUBPAC': {
        def: 'Commander Submarine Force, United States Pacific Fleet',
        src: 'JP 1-02'
    },
    'COMSUPNAVFOR': {
        def: 'commander, supporting naval forces',
        src: 'JP 1-02'
    },
    'COMTAC': {
        def: 'tactical communications',
        src: 'JP 1-02'
    },
    'COMTENTHFLT': {
        def: 'Commander, Tenth Fleet',
        src: '1-02'
    },
    'COMUSAFE': {
        def: 'Commander, United States Air Force in Europe',
        src: 'JP 1-02'
    },
    'COMUSARCENT': {
        def: 'Commander, United States Army Forces, Central Command',
        src: 'JP 1-02'
    },
    'COMUSCENTAF': {
        def: 'Commander, United States Air Force, Central Command',
        src: 'JP 1-02'
    },
    'COMUSFLTFORCOM': {
        def: 'Commander, United States Fleet Forces Command',
        src: '1-02'
    },
    'COMUSFORAZ': {
        def: 'Commander United States Forces, Azores',
        src: 'JP 1-02'
    },
    'COMUSJ': {
        def: 'Commander, United States Forces Japan',
        src: 'JP 1-02'
    },
    'COMUSK': {
        def: 'Commander, United States Forces Korea',
        src: 'JP 1-02'
    },
    'COMUSMARCENT': {
        def: 'Commander, United States Marine Forces, Central Command',
        src: 'JP 1-02'
    },
    'COMUSNAVCENT': {
        def: 'Commander, United States Navy, Central Command',
        src: 'JP 1-02'
    },
    'COMUSPACFLT': {
        def: 'Commander, United States Pacific Fleet',
        src: '1-02'
    },
    'COMUSSOCJFCOM': {
        def: 'Commander Special Operations Command, United States Joint Forces Command',
        src: 'JP 1-02'
    },
    'CONCAP': {
        def: 'construction capabilities contract (Navy); Construction Capabilities Contract Process; construction capabilities contract program',
        src: 'JP 1-02'
    },
    'CONEX': {
        def: 'container express',
        src: 'JP 1-02'
    },
    'CONEXPLAN': {
        def: 'contingency and exercise plan',
        src: 'JP 1-02'
    },
    'CONOPS': {
        def: 'concept of operations',
        src: '1-02'
    },
    'CONPLAN': {
        def: 'concept plan; operation plan in concept format',
        src: '1-02'
    },
    'CONR': {
        def: 'continental United States North American Aerospace Defense Command Region',
        src: '1-02'
    },
    'CONUS': {
        def: 'continental United States',
        src: '1-02'
    },
    'CONUSA': {
        def: 'Continental United States Army',
        src: 'JP 1-02'
    },
    'COOP': {
        def: 'continuity of operations',
        src: '1-02'
    },
    'COP': {
        def: 'common operational picture',
        src: '1-02'
    },
    'COP-CSE': {
        def: 'common operational picture-combat support enabled',
        src: 'JP 1-02'
    },
    'COPG': {
        def: 'chairman, operations planners group',
        src: 'JP 1-02'
    },
    'COPPERHEAD': {
        def: 'name for cannon-launched guided projectile',
        src: 'JP 1-02'
    },
    'COPS': {
        def: 'communications operational planning system',
        src: 'JP 1-02'
    },
    'COR': {
        def: 'contracting officer representative',
        src: '1-02'
    },
    'CORE': {
        def: 'contingency response program',
        src: '1-02'
    },
    'COS': {
        def: 'chief of staff; chief of station; critical occupational specialty',
        src: '1-02'
    },
    'COSMIC': {
        def: 'North Atlantic Treaty Organization (NATO) security category',
        src: 'JP 1-02'
    },
    'COSPAS': {
        def: 'cosmicheskaya sistyema poiska avariynch sudov - space system for search of distressed vessels (Russian satellite system)',
        src: 'JP 1-02'
    },
    'COSR': {
        def: 'combat and operational stress reactions',
        src: 'JP 1-02'
    },
    'COT': {
        def: 'commanding officer of troops; crisis operations team',
        src: 'JP 1-02'
    },
    'COTP': {
        def: 'captain of the port',
        src: 'JP 1-02'
    },
    'COTS': {
        def: 'cargo offload and transfer system; commercial off-the-shelf; container offloading and transfer system',
        src: 'JP 1-02'
    },
    'COU': {
        def: 'cable orderwire unit',
        src: 'JP 1-02'
    },
    'counter C3': {
        def: 'counter command, control, and communications',
        src: 'JP 1-02'
    },
    'COVCOM': {
        def: 'covert communications',
        src: 'JP 1-02'
    },
    'CP': {
        def: 'check point; collection point; command post; contact point; control point; counterproliferation',
        src: '1-02'
    },
    'CP&I': {
        def: 'coastal patrol and interdiction',
        src: 'JP 1-02'
    },
    'CPA': {
        def: 'closest point of approach',
        src: '1-02'
    },
    'CPD': {
        def: 'combat plans division',
        src: '1-02'
    },
    'CPE': {
        def: 'customer premise equipment',
        src: 'JP 1-02'
    },
    'CPFL': {
        def: 'contingency planning facilities list',
        src: 'JP 1-02'
    },
    'CPG': {
        def: 'central processor group; commander, amphibious group; Contingency Planning Guidance',
        src: 'JP 1-02'
    },
    'CPI': {
        def: 'crash position indicator',
        src: 'JP 1-02'
    },
    'CPIC': {
        def: 'coalition press information center',
        src: 'JP 3-61'
    },
    'CPM': {
        def: 'civilian personnel manual',
        src: 'JP 1-02'
    },
    'CPO': {
        def: 'chief petty officer; complete provisions only',
        src: 'JP 1-02'
    },
    'CPR': {
        def: 'cardiopulmonary resuscitation',
        src: '1-02'
    },
    'CPRC': {
        def: 'coalition personnel recovery center',
        src: 'JP 3-16'
    },
    'CPS': {
        def: 'characters per second; collective protective shelter',
        src: 'JP 1-02'
    },
    'CPT': {
        def: 'common procedural terminology',
        src: 'JP 4-02'
    },
    'CPU': {
        def: 'central processing unit',
        src: 'JP 1-02'
    },
    'CPX': {
        def: 'command post exercise',
        src: 'JP 1-02'
    },
    'CR': {
        def: 'civil reconnaissance; critical requirement',
        src: '1-02'
    },
    'CR-UAV': {
        def: 'close-range unmanned aerial vehicle',
        src: 'JP 1-02'
    },
    'CRA': {
        def: 'command relationships agreement; continuing resolution authority; coordinating review authority',
        src: '1-02'
    },
    'CRAF': {
        def: 'Civil Reserve Air Fleet',
        src: '1-02'
    },
    'CRAM': {
        def: 'control random access memory',
        src: 'JP 1-02'
    },
    'CRB': {
        def: 'configuration review board',
        src: 'JP 1-02'
    },
    'CRC': {
        def: 'circuit routing chart; Civilian Response Corps (DOS); civil response corps; coastal riverine company; control and reporting center; CONUS replacement center; COOP response cell; crisis reaction center; cyclic redundancy rate ',
        src: '1-02'
    },
    'CRD': {
        def: 'capstone requirements document; chemical reconnaissance detachment',
        src: '1-02'
    },
    'CRE': {
        def: 'contingency response element; control reporting element',
        src: '1-02'
    },
    'CREAPER': {
        def: 'Communications and Radar Electronic Attack Planning Effectiveness Reference',
        src: '1-02'
    },
    'CREST': {
        def: 'casualty and resource estimation support tool',
        src: 'JP 4-02'
    },
    'CREW': {
        def: 'counter radio-controlled improvised explosive device electronic warfare',
        src: '1-02'
    },
    'CRF': {
        def: 'channel reassignment function; coastal riverine force; contingency response force',
        src: '1-02'
    },
    'CRG': {
        def: 'contingency response group',
        src: '1-02'
    },
    'CRI': {
        def: 'collective routing indicator',
        src: 'JP 1-02'
    },
    'CRIF': {
        def: 'cargo routing information file',
        src: '1-02'
    },
    'CRITIC': {
        def: 'critical information; critical intelligence communication; critical message (intelligence)',
        src: '1-02'
    },
    'CRITICOMM': {
        def: 'critical intelligence communications system',
        src: 'JP 1-02'
    },
    'CRM': {
        def: 'collection requirements management; comment resolution matrix; crew resource management',
        src: '1-02'
    },
    'CrM': {
        def: 'crisis management',
        src: '1-02'
    },
    'CRO': {
        def: 'combat rescue officer',
        src: 'JP 3-50'
    },
    'CROP': {
        def: 'common relevant operational picture',
        src: 'JP 3-05.1'
    },
    'CRP': {
        def: 'control and reporting post',
        src: 'JP 1-02'
    },
    'CRRC': {
        def: 'combat rubber raiding craft',
        src: 'JP 1-02'
    },
    'CRS': {
        def: 'Catholic Relief Services; Chairman\'s readiness system; coastal radio station; community relations service; container recovery system; Coordinator for Reconstruction and Stabilization',
        src: '1-02'
    },
    'CRSG': {
        def: 'country reconstruction and stabilization group',
        src: '1-02'
    },
    'CRSP': {
        def: 'centralized receiving and shipping point',
        src: '1-02'
    },
    'CRT': {
        def: 'cathode ray tube; chemical, biological, radiological, nuclear, and high-yield explosives response team; contingency response team',
        src: '1-02'
    },
    'CRTS': {
        def: 'casualty receiving and treatment ship',
        src: 'JP 1-02'
    },
    'CRW': {
        def: 'contingency response wing',
        src: '1-02'
    },
    'CRYPTO': {
        def: 'cryptographic',
        src: 'JP 1-02'
    },
    'CS': {
        def: 'call sign; Chaplain Service (Air Force); circuit switch; coastal station; combat service; combat support; content staging; controlled space; creeping line single-unit; critical source',
        src: '1-02'
    },
    'CSA': {
        def: 'Chief of Staff, United States Army; combat support agency; container stuffing activity',
        src: '1-02'
    },
    'CSAAS': {
        def: 'combat support agency assessment system',
        src: 'JP 1-02'
    },
    'CSADR': {
        def: 'combat support agency director\'s report',
        src: 'JP 1-02'
    },
    'CSAF': {
        def: 'Chief of Staff, United States Air Force',
        src: 'JP 1-02'
    },
    'CSAM': {
        def: 'computer security for acquisition managers',
        src: 'JP 1-02'
    },
    'CSAR': {
        def: 'combat search and rescue',
        src: '1-02'
    },
    'CSAR3': {
        def: 'combat support agency responsiveness and readiness report',
        src: 'JP 1-02'
    },
    'CSARTE': {
        def: 'combat search and rescue task element',
        src: 'JP 1-02'
    },
    'CSARTF': {
        def: 'combat search and rescue task force',
        src: 'JP 1-02'
    },
    'CSB': {
        def: 'contracting support brigade',
        src: '1-02'
    },
    'CSB (MEB)': {
        def: 'combat support brigade (maneuver enhancement brigade)',
        src: '1-02'
    },
    'CSC': {
        def: 'combat support center; community support center; convoy support center; creeping line single-unit coordinated; International Convention for Safe Containers',
        src: '1-02'
    },
    'CSCC': {
        def: 'coastal sea control commander',
        src: 'JP 1-02'
    },
    'CSE': {
        def: 'client server environment; combat support enhanced; combat support equipment; contingency support element; cyberspace support element',
        src: '1-02'
    },
    'CSEL': {
        def: 'circuit switch select line; combat survivor evader locator; command senior enlisted leader',
        src: 'JP 1-02'
    },
    'CSEP': {
        def: 'Chairman of the Joint Chiefs of Staff-sponsored exercise program',
        src: 'JP 1-02'
    },
    'CSG': {
        def: 'carrier strike group; Chairman\'s Staff Group; coordinating subgroup; cryptologic services group; Cryptologic Support Group',
        src: '1-02'
    },
    'CSGN': {
        def: 'coordinating subgroup for narcotics',
        src: 'JP 1-02'
    },
    'CSH': {
        def: 'combat support hospital',
        src: 'JP 1-02'
    },
    'CSIF': {
        def: 'communications service industrial fund',
        src: 'JP 1-02'
    },
    'CSIP': {
        def: 'contract support integration plan',
        src: 'JP 4-10'
    },
    'CSIPG': {
        def: 'circuit switch interface planning guide',
        src: 'JP 1-02'
    },
    'CSL': {
        def: 'combat stores list',
        src: 'JP 1-02'
    },
    'CSNP': {
        def: 'causeway section, nonpowered',
        src: '1-02'
    },
    'CSNP(BE)': {
        def: 'causeway section nonpowered (beach end)',
        src: 'JP 1-02'
    },
    'CSNP(I)': {
        def: 'causeway section, nonpowered (intermediate)',
        src: 'JP 1-02'
    },
    'CSNP(SE)': {
        def: 'causeway section, nonpowered (sea end)',
        src: 'JP 1-02'
    },
    'CSO': {
        def: 'Bureau of Conflict and Stabilization Operations (DOS); Center for Special Operations (USSOCOM); communications support organization; controlled source operation',
        src: '1-02'
    },
    'CSOA': {
        def: 'combined special operations area',
        src: 'JP 1-02'
    },
    'CSOB': {
        def: 'command systems operations branch',
        src: 'JP 1-02'
    },
    'CSOD': {
        def: 'command systems operation division',
        src: 'JP 1-02'
    },
    'CSOR': {
        def: 'contract statement of requirement',
        src: '1-02'
    },
    'CSP': {
        def: 'call service position; career sea pay; causeway section, powered; commence search point; contracting support plan; crisis staffing procedures (JCS); cryptologic support package',
        src: '1-02'
    },
    'CSPAR': {
        def: 'combatant commander\'s preparedness assessment report',
        src: 'JP 1-02'
    },
    'CSR': {
        def: 'central source registry; combatant commander\'s summary report; commander\'s summary report; controlled supply rate',
        src: 'JP 1-02'
    },
    'CSRF': {
        def: 'common source route file',
        src: 'JP 1-02'
    },
    'CSS': {
        def: 'Central Security Service (NSA); combat service support; communications subsystem; coordinator surface search',
        src: '1-02'
    },
    'CSSA': {
        def: 'combat service support area',
        src: '1-02'
    },
    'CSSAMO': {
        def: 'combat service support automation management office',
        src: '1-02'
    },
    'CSSB': {
        def: 'combat sustainment support battalion',
        src: '1-02'
    },
    'CSSC': {
        def: 'coded switch set controller',
        src: 'JP 1-02'
    },
    'CSSM': {
        def: 'contracted support synchronization matrix',
        src: '1-02'
    },
    'CSST': {
        def: 'combat service support team',
        src: 'JP 1-02'
    },
    'CSSU': {
        def: 'combat service support unit',
        src: 'JP 1-02'
    },
    'CST': {
        def: 'contingency support team; customer service team',
        src: '1-02'
    },
    'CSW': {
        def: 'compartment stowage worksheet; coordinate seeking weapons',
        src: 'JP 1-02'
    },
    'CT': {
        def: 'computed tomography; control telemetry; counterterrorism; country team',
        src: '1-02'
    },
    'CTA': {
        def: 'common table of allowance',
        src: 'JP 1-02'
    },
    'CTAF': {
        def: 'counterterrorism analytical framework',
        src: '1-02'
    },
    'CTAPS': {
        def: 'contingency Theater Air Control System automated planning system',
        src: 'JP 1-02'
    },
    'CTC': {
        def: 'cargo transfer company (USA); counterterrorist center',
        src: 'JP 1-02'
    },
    'CTDB': {
        def: 'combating terrorism database',
        src: '1-02'
    },
    'CTEP': {
        def: 'combined training and education plan',
        src: '1-02'
    },
    'CTF': {
        def: 'combined task force; commander, task force; counter threat finance ',
        src: '1-02'
    },
    'CTF IAMD': {
        def: 'commander, task force integrated air and missile defense',
        src: '1-02'
    },
    'CTFP': {
        def: 'Combating Terrorism Fellowship Program',
        src: '1-02'
    },
    'CTG': {
        def: 'commander, task group',
        src: 'JP 1-02'
    },
    'CTID': {
        def: 'communications transmission identifier',
        src: 'JP 1-02'
    },
    'CTIP': {
        def: 'combating trafficking in persons',
        src: '1-02'
    },
    'CTKB': {
        def: 'combating terrorism knowledge base',
        src: '1-02'
    },
    'CTL': {
        def: 'candidate target list',
        src: '1-02'
    },
    'CTM': {
        def: 'core target material',
        src: 'JP 1-02'
    },
    'CTOC': {
        def: 'corps tactical operations center',
        src: 'JP 1-02'
    },
    'CTP': {
        def: 'common tactical picture',
        src: '1-02'
    },
    'CTR': {
        def: 'cooperative threat reduction',
        src: '1-02'
    },
    'CTRIF': {
        def: 'Combating Terrorism Readiness Initiative Fund',
        src: 'JP 1-02'
    },
    'CTS': {
        def: 'commodity tracking system; Contingency Tracking System; controlled technical services',
        src: '1-02'
    },
    'CTSS': {
        def: 'central targeting support staff',
        src: 'JP 1-02'
    },
    'CTU': {
        def: 'commander, task unit',
        src: 'JP 3-15'
    },
    'CU': {
        def: 'cubic capacity; common unit',
        src: 'JP 1-02'
    },
    'CUI': {
        def: 'controlled unclassified information',
        src: '1-02'
    },
    'CUL': {
        def: 'common-user logistics',
        src: '1-02'
    },
    'CULT': {
        def: 'common-user land transportation',
        src: '1-02'
    },
    'CV': {
        def: 'aircraft carrier; carrier; critical vulnerability; curriculum vitae',
        src: '1-02'
    },
    'CVAMP': {
        def: 'Core Vulnerability Assessment Management Program',
        src: '1-02'
    },
    'CVN': {
        def: 'aircraft carrier, nuclear',
        src: '1-02'
    },
    'CVR': {
        def: 'cockpit voice recorder',
        src: 'JP 1-02'
    },
    'CVS': {
        def: 'commercial vendor services',
        src: '1-02'
    },
    'CVSD': {
        def: 'continuous variable slope delta',
        src: 'JP 1-02'
    },
    'CVT': {
        def: 'criticality-vulnerability-threat',
        src: '1-02'
    },
    'CVW': {
        def: 'carrier air wing; cryptovariable weekly (GPS)',
        src: '1-02'
    },
    'CVWC': {
        def: 'carrier strike group air wing commander',
        src: 'JP 1-02'
    },
    'CW': {
        def: 'carrier wave; chemical warfare; continuous wave',
        src: '1-02'
    },
    'CWA': {
        def: 'chemical warfare agent',
        src: '1-02'
    },
    'CWC': {
        def: 'Chemical Weapons Convention; composite warfare commander',
        src: '1-02'
    },
    'CWDE': {
        def: 'chemical warfare defense equipment',
        src: 'JP 1-02'
    },
    'CWMD': {
        def: 'countering weapons of mass destruction',
        src: '1-02'
    },
    'CWO': {
        def: 'communications watch officer',
        src: 'JP 1-02'
    },
    'CWP': {
        def: 'causeway pier',
        src: '1-02'
    },
    'CWPD': {
        def: 'Conventional War Plans Division, Joint Staff (J-7)',
        src: 'JP 1-02'
    },
    'CWR': {
        def: 'calm water ramp',
        src: 'JP 1-02'
    },
    'CWT': {
        def: 'combat weather team; customer wait time',
        src: '1-02'
    },
    'CY': {
        def: 'calendar year',
        src: 'JP 1-02'
    },
    'D': {
        def: 'total drift, data',
        src: 'JP 1-02'
    },
    'd': {
        def: 'surface drift',
        src: 'JP 1-02'
    },
    'D&D': {
        def: 'denial and deception',
        src: 'JP 2-01'
    },
    'D&F': {
        def: 'determinations and findings',
        src: '1-02'
    },
    'D&M': {
        def: 'detection and monitoring',
        src: '1-02'
    },
    'D&R': {
        def: 'debrief and reintegrate',
        src: 'JP 4-02'
    },
    'D-2X': {
        def: 'Department of Defense-level counterintelligence and human intelligence staff element ',
        src: '1-02'
    },
    'D-cell': {
        def: 'deployment cell',
        src: 'JP 1-02'
    },
    'D/A': {
        def: 'digital-to-analog',
        src: 'JP 1-02'
    },
    'D/C': {
        def: 'downconverter',
        src: 'JP 1-02'
    },
    'D/CI&SP': {
        def: 'Director, Counterintelligence and Security Programs',
        src: 'JP 1-02'
    },
    'D/CIA': {
        def: 'Director, Central Intelligence Agency',
        src: '1-02'
    },
    'D/T/ID': {
        def: 'detect/track/identify',
        src: '1-02'
    },
    'D3A': {
        def: 'decide, detect, deliver, and assess',
        src: '1-02'
    },
    'DA': {
        def: 'data adapter aerospace drift; data administrator; Department of the Army; Development Assistance; direct action; Directorate for Mission Services (DIA); double agent',
        src: '1-02'
    },
    'Da': {
        def: 'aerospace drift; Development Assistance',
        src: 'JP 1-02'
    },
    'DA&M': {
        def: 'Director of Administration and Management',
        src: 'JP 1-02'
    },
    'DAA': {
        def: 'designated approving authority; display alternate area routing lists',
        src: 'JP 1-02'
    },
    'DAADC': {
        def: 'deputy area air defense commander ',
        src: '1-02'
    },
    'DAADC(AMD)': {
        def: 'deputy area air defense commander for air and missile defense',
        src: 'JP 3-01'
    },
    'DAAS': {
        def: 'defense automatic addressing system',
        src: 'JP 1-02'
    },
    'DAASO': {
        def: 'defense automatic addressing system office',
        src: 'JP 1-02'
    },
    'DAB': {
        def: 'Defense Acquisition Board',
        src: 'JP 1-02'
    },
    'DAC': {
        def: 'Defense Intelligence Agency (DIA) counterintelligence and security activity; Department of Army civilians; Development Assistance Committee (OECD)',
        src: '1-02'
    },
    'DACB': {
        def: 'data adapter control block',
        src: 'JP 1-02'
    },
    'DACG': {
        def: 'departure airfield control group',
        src: '1-02'
    },
    'DACM': {
        def: 'data adapter control mode',
        src: 'JP 1-02'
    },
    'DADCAP': {
        def: 'dawn and dusk combat air patrol',
        src: 'JP 1-02'
    },
    'DAF': {
        def: 'Department of the Air Force',
        src: 'JP 1-02'
    },
    'DAFL': {
        def: 'directive authority for logistics',
        src: '1-02'
    },
    'DAICC': {
        def: 'domestic air interdiction coordinator center',
        src: 'JP 1-02'
    },
    'DAL': {
        def: 'defended asset list',
        src: '1-02'
    },
    'DALIS': {
        def: 'Disaster Assistance Logistics Information System',
        src: '1-02'
    },
    'DALS': {
        def: 'downed aviator locator system',
        src: 'JP 1-02'
    },
    'DAMA': {
        def: 'demand assigned multiple access',
        src: 'JP 1-02'
    },
    'DAMES': {
        def: 'defense automatic addressing system (DAAS) automated message exchange system',
        src: 'JP 1-02'
    },
    'DAN': {
        def: 'Diver\'s Alert Network',
        src: 'JP 1-02'
    },
    'DAO': {
        def: 'defense attache office; defense attache officer; department/agency/organization',
        src: 'JP 1-02'
    },
    'DAP': {
        def: 'designated acquisition program',
        src: 'JP 1-02'
    },
    'DAR': {
        def: 'Defense Acquisition Regulation; distortion adaptive receiver',
        src: 'JP 1-02'
    },
    'DARO': {
        def: 'Defense Airborne Reconnaissance Office',
        src: 'JP 1-02'
    },
    'DARPA': {
        def: 'Defense Advanced Research Projects Agency',
        src: 'JP 1-02'
    },
    'DART': {
        def: 'disaster assistance response team; downed aircraft recovery team; dynamic analysis and replanning tool',
        src: '1-02'
    },
    'DAS': {
        def: 'deep air support (USMC); defense attache system; direct access subscriber; direct air support',
        src: 'JP 1-02'
    },
    'DAS3': {
        def: 'decentralized automated service support system',
        src: 'JP 1-02'
    },
    'DASA': {
        def: 'Department of the Army (DA) staff agencies',
        src: 'JP 1-02'
    },
    'DASC': {
        def: 'direct air support center',
        src: '1-02'
    },
    'DASC(A)': {
        def: 'direct air support center (airborne)',
        src: 'JP 1-02'
    },
    'DASD': {
        def: 'Deputy Assistant Secretary of Defense',
        src: 'JP 1-02'
    },
    'DASD(H&RA)': {
        def: 'Deputy Assistant Secretary of Defense (Humanitarian & Refugee Affairs)',
        src: 'JP 1-02'
    },
    'DASD(I)': {
        def: 'Deputy Assistant Secretary of Defense (Intelligence)',
        src: 'JP 1-02'
    },
    'DASD(P&HA)': {
        def: 'Deputy Assistant Secretary of Defense (Peacekeeping and Humanitarian Affairs)',
        src: 'JP 1-02'
    },
    'DASD(PS)': {
        def: 'Deputy Assistant Secretary of Defense (Program Support)',
        src: '1-02'
    },
    'DASD(S&IO)': {
        def: 'Deputy Assistant Secretary of Defense (Security and Information Operations)',
        src: 'JP 1-02'
    },
    'DASD-CN': {
        def: 'Deputy Assistant Secretary of Defense for Counternarcotics',
        src: 'JP 3-07.4'
    },
    'DASSS': {
        def: 'decentralized automated service support system',
        src: 'JP 1-02'
    },
    'DAT': {
        def: 'deployment action item',
        src: 'JP 1-02'
    },
    'DATT': {
        def: 'defense attache',
        src: '1-02'
    },
    'DATU': {
        def: 'data adapter termination unit',
        src: 'JP 1-02'
    },
    'DAWIA': {
        def: 'Defense Acquisition Workforce Improvement Act',
        src: '1-02'
    },
    'dB': {
        def: 'decibel',
        src: 'JP 1-02'
    },
    'DBA': {
        def: 'database administrator',
        src: 'JP 1-02'
    },
    'DBDB': {
        def: 'digital bathymetric database',
        src: '1-02'
    },
    'DBDB-V': {
        def: 'digital bathymetric database variable',
        src: '1-02'
    },
    'DBG': {
        def: 'database generation',
        src: 'JP 1-02'
    },
    'DBI': {
        def: 'defense budget issue',
        src: 'JP 1-02'
    },
    'DBIDS': {
        def: 'Defense Biometric Identification System',
        src: '1-02'
    },
    'DBMS': {
        def: 'database management system; Defense-Business Management System',
        src: 'JP 1-02'
    },
    'DBSMC': {
        def: 'Defense Business Systems Management Committee',
        src: '1-02'
    },
    'DBSS': {
        def: 'Defense Blood Standard System',
        src: 'JP 4-02'
    },
    'DBT': {
        def: 'design basis threat',
        src: '1-02'
    },
    'DC': {
        def: 'Deputies Committee; direct current; Directorate of Counterintelligence (DIA); dislocated civilian',
        src: '1-02'
    },
    'DC/S for RA': {
        def: 'Deputy Chief of Staff for Reserve Affairs',
        src: 'JP 1-02'
    },
    'DC3': {
        def: 'Department of Defense Cyber Crime Center',
        src: '1-02'
    },
    'DCA': {
        def: 'Defense Communications Agency; Defense Cooperation Agreements; defensive counterair; dual-capable aircraft',
        src: '1-02'
    },
    'DCAA': {
        def: 'Defense Contract Audit Agency',
        src: '1-02'
    },
    'DCAM': {
        def: 'Defense Medical Logistics Standard Support (DMLSS) customer assistance module',
        src: 'JP 4-02'
    },
    'DCAPES': {
        def: 'Deliberate and Crisis Action Planning and Execution Segments',
        src: '1-02'
    },
    'DCC': {
        def: 'damage control center; deployment control center',
        src: 'JP 1-02'
    },
    'DCCC': {
        def: 'defense collection coordination center',
        src: '1-02'
    },
    'DCCEP': {
        def: 'developing country combined exercise program',
        src: 'JP 1-02'
    },
    'DCD': {
        def: 'data collection device',
        src: 'JP 1-02'
    },
    'DCE': {
        def: 'defense coordinating element',
        src: '1-02'
    },
    'DCGS': {
        def: 'distributed common ground/surface system',
        src: '1-02'
    },
    'DCHA': {
        def: 'Bureau for Democracy, Conflict, and Humanitarian Assistance (USAID)',
        src: '1-02'
    },
    'DCHC': {
        def: 'Defense Counterintelligence and Human Intelligence Center',
        src: '1-02'
    },
    'DCHE': {
        def: 'Defense Counterintelligence and Human Intelligence Enterprise',
        src: '1-02'
    },
    'DCI': {
        def: 'defense critical infrastructure; Director of Central Intelligence; dual channel interchange',
        src: '1-02'
    },
    'DCID': {
        def: 'Director of Central Intelligence directive',
        src: 'JP 1-02'
    },
    'DCIIS': {
        def: 'Defense Counterintelligence Information System',
        src: 'JP 1-02'
    },
    'DCIO': {
        def: 'defense criminal investigative organization',
        src: 'JP 1-02'
    },
    'DCIP': {
        def: 'Defense Critical Infrastructure Program',
        src: '1-02'
    },
    'DCIS': {
        def: 'Defense Criminal Investigative Services',
        src: 'JP 1-02'
    },
    'DCISE': {
        def: 'Defense Industrial Base Collaborative Information Sharing Environment',
        src: '1-02'
    },
    'DCJTF': {
        def: 'deputy commander, joint task force',
        src: 'JP 1-02'
    },
    'DCM': {
        def: 'data channel multiplexer; deputy chief of mission',
        src: 'JP 1-02'
    },
    'DCMA': {
        def: 'Defense Contract Management Agency',
        src: '1-02'
    },
    'DCMC': {
        def: 'Office of Deputy Chairman, Military Committee',
        src: 'JP 1-02'
    },
    'DCMO': {
        def: 'deputy chief military observer',
        src: '1-02'
    },
    'DCNO': {
        def: 'Deputy Chief of Naval Operations',
        src: 'JP 1-02'
    },
    'DCO': {
        def: 'debarkation control officer; Defense Connect Online; defense coordinating officer; defensive cyberspace operations; dial central office',
        src: '1-02'
    },
    'DCO-RA': {
        def: 'defensive cyberspace operations response actions',
        src: '1-02'
    },
    'DCP': {
        def: 'Defense Continuity Program; detainee collection point',
        src: '1-02'
    },
    'DCPA': {
        def: 'Defense Civil Preparedness Agency',
        src: 'JP 1-02'
    },
    'DCPG': {
        def: 'digital clock pulse generator',
        src: 'JP 1-02'
    },
    'DCR': {
        def: 'doctrine, organization, training, materiel, leadership and education, personnel, and facilities change recommendation',
        src: '1-02'
    },
    'DCRF': {
        def: 'defense chemical, biological, radiological, and nuclear response force',
        src: '1-02'
    },
    'DCS': {
        def: 'Defense Courier Service; deputy chief of staff; digital computer system',
        src: '1-02'
    },
    'DCSCU': {
        def: 'dual capability servo control unit',
        src: 'JP 1-02'
    },
    'DCSINT': {
        def: 'Deputy Chief of Staff for Intelligence',
        src: 'JP 1-02'
    },
    'DCSLOG': {
        def: 'Deputy Chief of Staff for Logistics, US Army',
        src: 'JP 1-02'
    },
    'DCSOPS': {
        def: 'Deputy Chief of Staff for Operations and Plans, United States Army',
        src: 'JP 1-02'
    },
    'DCSPER': {
        def: 'Deputy Chief of Staff for Personnel, United States Army',
        src: 'JP 1-02'
    },
    'DCST': {
        def: 'Defense Logistics Agency (DLA) contingency support team',
        src: 'JP 1-02'
    },
    'DCTC': {
        def: 'Defense Combating Terrorism Center',
        src: '1-02'
    },
    'DCTS': {
        def: 'Defense Collaboration Tool Suite',
        src: 'JP 6-0'
    },
    'DCW': {
        def: 'Defense Collection Watch (DIA)',
        src: '1-02'
    },
    'DD': {
        def: 'Department of Defense form; destroyer (Navy ship)',
        src: '1-02'
    },
    'DDA': {
        def: 'deputy development advisor; Deputy Director for Administration (CIA); designated development activity',
        src: '1-02'
    },
    'DDC': {
        def: 'data distribution center; defense distribution center',
        src: 'JP 1-02'
    },
    'DDCI': {
        def: 'Deputy Director of Central Intelligence (CIA)',
        src: 'JP 1-02'
    },
    'DDCI/CM': {
        def: 'Deputy Director of Central Intelligence for Community Management',
        src: 'JP 2-01'
    },
    'DDED': {
        def: 'defense distribution expeditionary depot',
        src: '1-02'
    },
    'DDG': {
        def: 'guided missile destroyer',
        src: 'JP 1-02'
    },
    'DDI': {
        def: 'Deputy Director of Intelligence (CIA); Director of Defense Intelligence',
        src: '1-02'
    },
    'DDL': {
        def: 'digital data link',
        src: 'JP 1-02'
    },
    'DDM': {
        def: 'Defense Logistics Agency Distribution Mapping; digital data modem',
        src: '1-02'
    },
    'DDMA': {
        def: 'Defense Distribution Mapping Activity',
        src: 'JP 1-02'
    },
    'DDMS': {
        def: 'Deputy Director for Military Support (NRO)',
        src: '1-02'
    },
    'DDN': {
        def: 'Defense Data Network',
        src: 'JP 3-07.4'
    },
    'DDO': {
        def: 'Deputy Director of Operations (CIA)',
        src: 'JP 1-02'
    },
    'DDOC': {
        def: 'Deployment and Distribution Operations Center (USTRANSCOM)',
        src: '1-02'
    },
    'DDP': {
        def: 'detailed deployment plan',
        src: 'JP 1-02'
    },
    'DDR': {
        def: 'disarmament, demobilization, and reintegration',
        src: '1-02'
    },
    'DDR&E': {
        def: 'director of defense research and engineering',
        src: 'JP 1-02'
    },
    'DDRRR': {
        def: 'disarmament, demobilization, repatriation, reintegration, and resettlement',
        src: 'JP 3-07.3'
    },
    'DDS': {
        def: 'defense dissemination system; Deployable Disbursing System',
        src: '1-02'
    },
    'DDS&T': {
        def: 'Deputy Director for Science & Technology (CIA)',
        src: 'JP 1-02'
    },
    'DDSBn': {
        def: 'deployment and distribution support battalion',
        src: '1-02'
    },
    'DDSM': {
        def: 'Defense Distinguished Service Medal',
        src: '1-02'
    },
    'DDST': {
        def: 'deployment and distribution support team',
        src: '1-02'
    },
    'DDWSO': {
        def: 'Deputy Director for Wargaming, Simulation, and Operations',
        src: 'JP 1-02'
    },
    'DE': {
        def: 'damage expectancy; decedent effects; delay equalizer; directed energy',
        src: '1-02'
    },
    'de': {
        def: 'individual drift error',
        src: 'JP 1-02'
    },
    'De': {
        def: 'total drift error',
        src: 'JP 1-02'
    },
    'de max': {
        def: 'maximum drift error',
        src: 'JP 1-02'
    },
    'de min': {
        def: 'minimum drift error',
        src: 'JP 1-02'
    },
    'de minimax': {
        def: 'minimax drift error',
        src: 'JP 1-02'
    },
    'DEA': {
        def: 'Drug Enforcement Administration (DOJ)',
        src: '1-02'
    },
    'dea': {
        def: 'aerospace drift error',
        src: 'JP 1-02'
    },
    'DEACN': {
        def: 'Drug Enforcement Administration Communications Network',
        src: 'JP 1-02'
    },
    'DEAR': {
        def: 'disease and environmental alert report',
        src: 'JP 1-02'
    },
    'DEARAS': {
        def: 'Department of Defense Emergency Authorities Retrieval and Analysis System',
        src: '1-02'
    },
    'DeCA': {
        def: 'Defense Commissary Agency',
        src: 'JP 1-02'
    },
    'DEERS': {
        def: 'Defense Enrollment Eligibility Reporting System',
        src: '1-02'
    },
    'DEFSMAC': {
        def: 'Defense Special Missile and Aerospace Center',
        src: '1-02'
    },
    'DEL': {
        def: 'deployable equipment list',
        src: '1-02'
    },
    'DEMARC': {
        def: 'demarcation',
        src: 'JP 1-02'
    },
    'DEMIL': {
        def: 'demilitarization',
        src: 'JP 1-02'
    },
    'DeMS': {
        def: 'deployment management system',
        src: 'JP 1-02'
    },
    'DEMUX': {
        def: 'demultiplex',
        src: 'JP 1-02'
    },
    'DEP': {
        def: 'Delayed Entry Program; deployed',
        src: 'JP 1-02'
    },
    'DEP&S': {
        def: 'Drug Enforcement Plans and Support',
        src: 'JP 1-02'
    },
    'DEPCJTF': {
        def: 'deputy commander, joint task force',
        src: 'JP 1-02'
    },
    'DEPID': {
        def: 'deployment indicator code',
        src: 'JP 1-02'
    },
    'DEPMEDS': {
        def: 'deployable medical systems',
        src: 'JP 1-02'
    },
    'DepOpsDeps': {
        def: 'Service deputy operations deputies',
        src: 'JP 1-02'
    },
    'DEPORD': {
        def: 'deployment order',
        src: '1-02'
    },
    'DESC': {
        def: 'Defense Energy Support Center',
        src: 'JP 1-02'
    },
    'DESCOM': {
        def: 'Depot System Command (Army)',
        src: 'JP 1-02'
    },
    'DESIGAREA': {
        def: 'designated area message',
        src: 'JP 1-02'
    },
    'DEST': {
        def: 'destination; domestic emergency support team',
        src: 'JP 1-02'
    },
    'DET': {
        def: 'detainee',
        src: '1-02'
    },
    'DETRESFA': {
        def: 'distress phase (lCAO)',
        src: 'JP 1-02'
    },
    'DEW': {
        def: 'directed-energy warfare',
        src: '1-02'
    },
    'DF': {
        def: 'direction finding; dispersion factor; disposition form',
        src: '1-02'
    },
    'DFARS': {
        def: 'Defense Federal Acquisition Regulation Supplement',
        src: '1-02'
    },
    'DFAS': {
        def: 'Defense Finance and Accounting Service',
        src: '1-02'
    },
    'DFAS-DE': {
        def: 'Defense Finance and Accounting Service-Denver',
        src: 'JP 1-02'
    },
    'DFC': {
        def: 'deputy force commander; detention facility commander',
        src: 'JP 1-02'
    },
    'DFE': {
        def: 'Defense Intelligence Agency forward element; Defense Joint Intelligence Operations Center forward element; division force equivalent',
        src: '1-02'
    },
    'DFM': {
        def: 'deterrent force module',
        src: 'JP 1-02'
    },
    'DFO': {
        def: 'disaster field office (FEMA)',
        src: 'JP 1-02'
    },
    'DFR': {
        def: 'Defense Fuel Region',
        src: 'JP 1-02'
    },
    'DFR/E': {
        def: 'Defense Fuel Region, Europe',
        src: 'JP 1-02'
    },
    'DFR/ME': {
        def: 'Defense Fuel Region, Middle East',
        src: 'JP 1-02'
    },
    'DFRIF': {
        def: 'Defense Freight Railway Interchange Fleet',
        src: '1-02'
    },
    'DFSC': {
        def: 'Defense Fuel Supply Center',
        src: 'JP 1-02'
    },
    'DFSP': {
        def: 'defense fuel support point',
        src: '1-02'
    },
    'DFT': {
        def: 'deployment for training',
        src: 'JP 1-02'
    },
    'DG': {
        def: 'defense guidance',
        src: 'JP 1-02'
    },
    'DGIAP': {
        def: 'Defense General Intelligence and Applications Program',
        src: 'JP 1-02'
    },
    'DGM': {
        def: 'digital group multiplex',
        src: 'JP 1-02'
    },
    'DH': {
        def: 'death due to hostilities; Directorate for Human Intelligence (DIA)',
        src: 'JP 1-02'
    },
    'DHA': {
        def: 'detainee holding area',
        src: '3-63'
    },
    'DHB': {
        def: 'Defense Health Board',
        src: '1-02'
    },
    'DHE': {
        def: 'defense human intelligence executor',
        src: '1-02'
    },
    'DHHS': {
        def: 'Department of Health and Human Services',
        src: '1-02'
    },
    'DHM': {
        def: 'Department of Defense human intelligence manager',
        src: 'JP 2-01.2'
    },
    'DHMO': {
        def: 'Department of Defense human intelligence management office',
        src: 'JP 2-01.2'
    },
    'DHP': {
        def: 'Defense Health Program',
        src: '1-02'
    },
    'DHS': {
        def: 'Defense Human Intelligence (HUMINT) Service; Department of Homeland Security; Director of Health Services',
        src: '1-02'
    },
    'DI': {
        def: 'Defense Intelligence Agency (DIA) Directorate for Analysis; DIA Directorate for Intelligence Production; discrete identifier; dynamic interface',
        src: 'JP 1-02'
    },
    'DI&E': {
        def: 'data integration and exploitation',
        src: '1-02'
    },
    'DIA': {
        def: 'Defense Intelligence Agency',
        src: '1-02'
    },
    'DIA/DHX': {
        def: 'Defense Intelligence Agency, Directorate of Human Intelligence, Office of Document and Media Operations',
        src: 'JP 2-01'
    },
    'DIAC': {
        def: 'Defense Intelligence Analysis Center',
        src: 'JP 1-02'
    },
    'DIAM': {
        def: 'Defense Intelligence Agency manual; Defense Intelligence Agency memorandum',
        src: 'JP 1-02'
    },
    'DIAP': {
        def: 'Defense Intelligence Analysis Program; Drug Interdiction Assistance Program',
        src: '1-02'
    },
    'DIAR': {
        def: 'Defense Intelligence Agency (DIA) regulation',
        src: 'JP 1-02'
    },
    'DIB': {
        def: 'defense industrial base',
        src: '1-02'
    },
    'DIBITS': {
        def: 'digital in-band interswitch trunk signaling',
        src: 'JP 1-02'
    },
    'DIBRS': {
        def: 'defense incident-based reporting system',
        src: 'JP 1-02'
    },
    'DIBTS': {
        def: 'digital in-band trunk signaling',
        src: 'JP 1-02'
    },
    'DICO': {
        def: 'Data Information Coordination Office',
        src: 'JP 1-02'
    },
    'DID': {
        def: 'Defense Intelligence Digest',
        src: '1-02'
    },
    'DIDHS': {
        def: 'Deployable Intelligence Data Handling System',
        src: 'JP 1-02'
    },
    'DIDO': {
        def: 'designated intelligence disclosure official',
        src: '1-02'
    },
    'DIDS': {
        def: 'Defense Intelligence Dissemination System',
        src: 'JP 1-02'
    },
    'DIEB': {
        def: 'Defense Intelligence Executive Board',
        src: 'JP 1-02'
    },
    'DIEPS': {
        def: 'Digital Imagery Exploitation Production System',
        src: 'JP 1-02'
    },
    'DIG': {
        def: 'digital',
        src: 'JP 1-02'
    },
    'DIGO': {
        def: 'Defence Imagery and Geospatial Organisation (Australia)',
        src: '1-02'
    },
    'DII-COE': {
        def: 'defense information infrastructure-common operating environment',
        src: 'JP 1-02'
    },
    'DIILS': {
        def: 'Defense Institute of International Legal Studies',
        src: 'JP 1-02'
    },
    'DIJE': {
        def: 'Defense Intelligence Joint Environment (United Kingdom)',
        src: '1-02'
    },
    'DILPA': {
        def: 'diphase loop modem-A',
        src: 'JP 1-02'
    },
    'DIMA': {
        def: 'drilling individual mobilization augmentee',
        src: 'JP 1-02'
    },
    'DIMOC': {
        def: 'Defense Imagery Management Operations Center',
        src: '1-02'
    },
    'DIN': {
        def: 'defense intelligence notice',
        src: 'JP 1-02'
    },
    'DINET': {
        def: 'Defense Industrial Net',
        src: 'JP 1-02'
    },
    'DINFOS': {
        def: 'Defense Information School',
        src: 'JP 3-61'
    },
    'DIOC': {
        def: 'drug interdiction operations center',
        src: 'JP 1-02'
    },
    'DIOCC': {
        def: 'Defense Intelligence Operations Coordination Center (DIA)',
        src: '1-02'
    },
    'DIPC': {
        def: 'defense industrial plant equipment center',
        src: 'JP 1-02'
    },
    'DIPF': {
        def: 'defense intelligence priorities framework',
        src: '1-02'
    },
    'DIPFAC': {
        def: 'diplomatic facility',
        src: 'JP 1-02'
    },
    'DIPGM': {
        def: 'diphase supergroup modem',
        src: 'JP 1-02'
    },
    'DIRINT': {
        def: 'Director of Intelligence (USMC)',
        src: 'JP 1-02'
    },
    'DIRJIATF': {
        def: 'director, joint inter-agency task force',
        src: 'JP 1-02'
    },
    'DIRLAUTH': {
        def: 'direct liaison authorized',
        src: '1-02'
    },
    'DIRM': {
        def: 'Directorate for Information and Resource Management',
        src: 'JP 1-02'
    },
    'DIRMOBFOR': {
        def: 'director of mobility forces',
        src: '1-02'
    },
    'DIRNSA': {
        def: 'Director, National Security Agency',
        src: '1-02'
    },
    'DIRSPACEFOR': {
        def: 'director of space forces (USAF)',
        src: '1-02'
    },
    'DIS': {
        def: 'defense information system; Defense Investigative Service; distributed interactive simulation',
        src: '1-02'
    },
    'DISA': {
        def: 'Defense Information Systems Agency',
        src: '1-02'
    },
    'DISA-LO': {
        def: 'Defense Information Systems Agency - liaison officer',
        src: 'JP 6-0'
    },
    'DISANMOC': {
        def: 'Defense Information Systems Agency Network Management and Operations Center',
        src: 'JP 1-02'
    },
    'DisasterAWARE': {
        def: 'Disaster All-Hazard Warnings, Analysis, and Risk Evaluation System',
        src: '1-02'
    },
    'DISCOM': {
        def: 'division support command (Army)',
        src: 'JP 1-02'
    },
    'DISGM': {
        def: 'diphase supergroup',
        src: 'JP 1-02'
    },
    'DISN': {
        def: 'Defense Information Systems Network',
        src: '1-02'
    },
    'DISN-E': {
        def: 'Defense Information Systems Network - Europe',
        src: 'JP 1-02'
    },
    'DISO': {
        def: 'deception in support of operations security; defense intelligence support office',
        src: '1-02'
    },
    'DISP': {
        def: 'drug investigation support program (FAA)',
        src: 'JP 1-02'
    },
    'DITDS': {
        def: 'defense information threat data system; defense intelligence threat data system',
        src: 'JP 1-02'
    },
    'DITSUM': {
        def: 'defense intelligence terrorist summary',
        src: 'JP 1-02'
    },
    'DJIOC': {
        def: 'Defense Joint Intelligence Operations Center',
        src: '1-02'
    },
    'DJS': {
        def: 'Director, Joint Staff',
        src: 'JP 1-02'
    },
    'DJSM': {
        def: 'Director, Joint Staff, memorandum',
        src: 'JP 1-02'
    },
    'DJTFS': {
        def: 'deputy joint task force surgeon',
        src: 'JP 4-02'
    },
    'DLA': {
        def: 'Defense Logistics Agency',
        src: '1-02'
    },
    'DLAM': {
        def: 'Defense Logistics Agency manual',
        src: 'JP 1-02'
    },
    'DLAR': {
        def: 'Defense Logistics Agency regulation',
        src: 'JP 1-02'
    },
    'DLD': {
        def: 'digital liaison detachment',
        src: '1-02'
    },
    'DLEA': {
        def: 'drug law enforcement agency',
        src: '1-02'
    },
    'DLED': {
        def: 'dedicated loop encryption device',
        src: 'JP 1-02'
    },
    'DLIS': {
        def: 'Defense Logistics Information Service',
        src: 'JP 4-02'
    },
    'DLM': {
        def: 'defense logistics manual',
        src: '1-02'
    },
    'DLMS': {
        def: 'Department Logistics Management System',
        src: '1-02'
    },
    'DLP': {
        def: 'data link processor',
        src: 'JP 1-02'
    },
    'DLPMA': {
        def: 'diphase loop modem A',
        src: 'JP 1-02'
    },
    'DLQ': {
        def: 'deck landing qualification',
        src: '1-02'
    },
    'DLR': {
        def: 'depot-level repairable',
        src: 'JP 1-02'
    },
    'DLSA': {
        def: 'Defense Legal Services Agency',
        src: 'JP 1-02'
    },
    'DLSS': {
        def: 'Defense Logistics Standard Systems',
        src: 'JP 1-02'
    },
    'DLTM': {
        def: 'digital line termination module',
        src: 'JP 1-02'
    },
    'DLTU': {
        def: 'digital line termination unit',
        src: 'JP 1-02'
    },
    'DM': {
        def: 'detection and monitoring; docking module',
        src: '1-02'
    },
    'DMA': {
        def: 'Defense Media Activity',
        src: '1-02'
    },
    'dmax': {
        def: 'maximum drift distance',
        src: 'JP 1-02'
    },
    'DMB': {
        def: 'datum marker buoy',
        src: 'JP 1-02'
    },
    'DMC': {
        def: 'data mode control',
        src: 'JP 1-02'
    },
    'DMD': {
        def: 'digital message device',
        src: 'JP 1-02'
    },
    'DMDC': {
        def: 'defense management data center; defense manpower data center',
        src: 'JP 1-02'
    },
    'DME': {
        def: 'distance measuring equipment',
        src: 'JP 1-02'
    },
    'DMHS': {
        def: 'Defense Message Handling System',
        src: '1-02'
    },
    'DMI': {
        def: 'director military intelligence',
        src: 'JP 1-02'
    },
    'DMIGS': {
        def: 'Domestic Mobile Integrated Geospatial-Intelligence System',
        src: '1-02'
    },
    'dmin': {
        def: 'minimum drift distance',
        src: 'JP 1-02'
    },
    'DML': {
        def: 'data manipulation language',
        src: 'JP 1-02'
    },
    'DMLSS': {
        def: 'Defense Medical Logistics Standard Support',
        src: 'JP 4-02'
    },
    'DMMPO': {
        def: 'Defense Medical Materiel Program Office',
        src: '1-02'
    },
    'DMO': {
        def: 'directory maintenance official',
        src: 'JP 1-02'
    },
    'DMORT': {
        def: 'Disaster Mortuary Operational Response Team',
        src: '1-02'
    },
    'DMOS': {
        def: 'duty military occupational specialty',
        src: 'JP 1-02'
    },
    'DMPI': {
        def: 'designated mean point of impact',
        src: '1-02'
    },
    'DMRD': {
        def: 'defense management resource decision',
        src: 'JP 1-02'
    },
    'DMRIS': {
        def: 'defense medical regulating information system',
        src: 'JP 1-02'
    },
    'DMS': {
        def: 'defense message system; defense meteorological system; director of military support',
        src: 'JP 1-02'
    },
    'DMSB': {
        def: 'Defense Medical Standardization Board',
        src: 'JP 1-02'
    },
    'DMSM': {
        def: 'Defense Meritorious Service Medal',
        src: '1-02'
    },
    'DMSO': {
        def: 'Defense Modeling and Simulation Office; director of major staff office; Division Medical Supply Office',
        src: 'JP 1-02'
    },
    'DMSP': {
        def: 'Defense Meteorological Satellite Program',
        src: '1-02'
    },
    'DMSSC': {
        def: 'defense medical system support center',
        src: 'JP 1-02'
    },
    'DMT': {
        def: 'disaster management team (UN)',
        src: '1-02'
    },
    'DMU': {
        def: 'disk memory unit',
        src: 'JP 1-02'
    },
    'DMZ': {
        def: 'demilitarized zone',
        src: 'JP 1-02'
    },
    'DN': {
        def: 'digital nonsecure',
        src: 'JP 1-02'
    },
    'DNA': {
        def: 'Defense Nuclear Agency; deoxyribonucleic acid',
        src: '1-02'
    },
    'DNAT': {
        def: 'defense nuclear advisory team',
        src: 'JP 1-02'
    },
    'DNBI': {
        def: 'disease and nonbattle injury',
        src: '1-02'
    },
    'DNC': {
        def: 'digital nautical chart',
        src: '1-02'
    },
    'DND': {
        def: 'Department of National Defence (Canada)',
        src: '1-02'
    },
    'DNDO': {
        def: 'Domestic Nuclear Detection Office (DHS)',
        src: '1-02'
    },
    'DNGA': {
        def: 'Director of National Geospatial-Intelligence Agency',
        src: 'JP 2-03'
    },
    'DNI': {
        def: 'Director of National Intelligence; Director of Naval Intelligence',
        src: '1-02'
    },
    'DNIF': {
        def: 'duty not involving flying',
        src: 'JP 1-02'
    },
    'DNMSP': {
        def: 'driftnet monitoring support program',
        src: 'JP 1-02'
    },
    'DNSO': {
        def: 'Defense Network Systems Organization',
        src: 'JP 1-02'
    },
    'DNVT': {
        def: 'digital nonsecure voice terminal',
        src: 'JP 1-02'
    },
    'DNY': {
        def: 'display area code (NYX) routing',
        src: 'JP 1-02'
    },
    'DOA': {
        def: 'days of ammunition; dead on arrival; director of administration',
        src: '1-02'
    },
    'DOB': {
        def: 'date of birth; dispersal operating base',
        src: 'JP 1-02'
    },
    'DOC': {
        def: 'Department of Commerce; designed operational capability',
        src: '1-02'
    },
    'DOCC': {
        def: 'deep operations coordination cell',
        src: 'JP 1-02'
    },
    'DOCDIV': {
        def: 'documents division',
        src: 'JP 1-02'
    },
    'DOCEX': {
        def: 'document exploitation',
        src: 'JP 1-02'
    },
    'DOCNET': {
        def: 'Doctrine Networked Education and Training',
        src: 'CJCSI 5120.02'
    },
    'DOD': {
        def: 'Department of Defense',
        src: '1-02'
    },
    'DOD-JIC': {
        def: 'Department of Defense Joint Intelligence Center',
        src: 'JP 1-02'
    },
    'DODAAC': {
        def: 'Department of Defense activity address code',
        src: 'JP 1-02'
    },
    'DODAAD': {
        def: 'Department of Defense Activity Address Directory',
        src: 'JP 1-02'
    },
    'DODAC DOD': {
        def: 'ammunition code',
        src: 'JP 1-02'
    },
    'DODD': {
        def: 'Department of Defense directive',
        src: '1-02'
    },
    'DODDS': {
        def: 'Department of Defense Dependent Schools',
        src: 'JP 1-02'
    },
    'DODEX': {
        def: 'Department of Defense intelligence system information system extension',
        src: 'JP 1-02'
    },
    'DODFMR': {
        def: 'Department of Defense Financial Management Regulation',
        src: '1-02'
    },
    'DODI': {
        def: 'Department of Defense instruction',
        src: '1-02'
    },
    'DODIC': {
        def: 'Department of Defense identification code',
        src: '1-02'
    },
    'DODID': {
        def: 'Department of Defense Intelligence Digest',
        src: 'JP 1-02'
    },
    'DODIIS': {
        def: 'Department of Defense Intelligence Information System',
        src: 'JP 1-02'
    },
    'DODIN': {
        def: 'Department of Defense information networks',
        src: '1-02'
    },
    'DODIPC': {
        def: 'Department of Defense intelligence production community',
        src: 'JP 1-02'
    },
    'DODIPP': {
        def: 'Department of Defense Intelligence Production Program',
        src: 'JP 1-02'
    },
    'DODM': {
        def: 'data orderwire diphase modem; Department of Defense manual',
        src: '1-02'
    },
    'DOE': {
        def: 'Department of Energy',
        src: '1-02'
    },
    'DOEHRS': {
        def: 'Defense Occupational and Environmental Health Reporting System',
        src: '1-02'
    },
    'DOF': {
        def: 'degree of freedom',
        src: 'JP 1-02'
    },
    'DOI': {
        def: 'Defense Special Security Communications System (DSSCS) Operating Instructions; Department of the Interior',
        src: '1-02'
    },
    'DOJ': {
        def: 'Department of Justice',
        src: '1-02'
    },
    'DOL': {
        def: 'Department of Labor',
        src: 'JP 1-02'
    },
    'DOM': {
        def: 'day of month',
        src: 'JP 1-02'
    },
    'DOMEX': {
        def: 'document and media exploitation',
        src: '1-02'
    },
    'DOMS': {
        def: 'director of military support',
        src: 'JP 1-02'
    },
    'DON': {
        def: 'Department of the Navy',
        src: '1-02'
    },
    'DOPMA': {
        def: 'Defense Officer Personnel Management Act',
        src: 'JP 1-02'
    },
    'DOR': {
        def: 'date of rank',
        src: 'JP 1-02'
    },
    'DOS': {
        def: 'date of separation; days of supply; denial of service; Department of State; disk operating system',
        src: '1-02'
    },
    'DOT': {
        def: 'Department of Transportation',
        src: '1-02'
    },
    'DOTEO': {
        def: 'Department of Transportation emergency organization',
        src: '1-02'
    },
    'DOTMLPF': {
        def: 'doctrine, organization, training, materiel, leadership and education, personnel, and facilities',
        src: '1-02'
    },
    'DOW': {
        def: 'data orderwire; died of wounds',
        src: 'JP 1-02'
    },
    'DOX-T': {
        def: 'direct operational exchange-tactical',
        src: 'JP 1-02'
    },
    'DOY': {
        def: 'day of year',
        src: 'JP 1-02'
    },
    'dp': {
        def: 'parachute drift',
        src: 'JP 1-02'
    },
    'DP': {
        def: 'Air Force component plans officer (staff); decisive point; Directorate for Policy Support (DIA); displaced person',
        src: '1-02'
    },
    'DPA': {
        def: 'danger pay allowance; Defense Production Act',
        src: '1-02'
    },
    'DPAP': {
        def: 'Defense Procurement and Acquisition Policy',
        src: '1-02'
    },
    'DPAS': {
        def: 'Defense Priorities and Allocation System',
        src: '1-02'
    },
    'DPC': {
        def: 'deception planning cell; Defense Planning Committee (NATO)',
        src: 'JP 1-02'
    },
    'DPEC': {
        def: 'displaced person exploitation cell',
        src: 'JP 2-01.2'
    },
    'DPG': {
        def: 'Defense Planning Guidance',
        src: '1-02'
    },
    'DPI': {
        def: 'desired point of impact',
        src: 'JP 1-02'
    },
    'dpi': {
        def: 'dots per inch',
        src: '1-02'
    },
    'DPICM': {
        def: 'dual purpose improved conventional munitions',
        src: 'JP 1-02'
    },
    'DPKO': {
        def: 'Department of Peacekeeping Operations (UN)',
        src: '1-02'
    },
    'DPLSM': {
        def: 'dipulse group modem',
        src: 'JP 1-02'
    },
    'DPM': {
        def: 'dissemination program manager',
        src: 'JP 1-02'
    },
    'DPMO': {
        def: 'Defense Prisoner of War/Missing Personnel Office',
        src: '1-02'
    },
    'DPO': {
        def: 'distribution process owner',
        src: '1-02'
    },
    'DPP': {
        def: 'data patch panel; distributed production program',
        src: 'JP 1-02'
    },
    'DPPDB': {
        def: 'digital point positioning database',
        src: '1-02'
    },
    'DPQ': {
        def: 'defense planning questionnaire (NATO)',
        src: 'JP 1-02'
    },
    'DPR': {
        def: 'display non-nodal routing',
        src: 'JP 1-02'
    },
    'DPRB': {
        def: 'Defense Planning and Resources Board',
        src: 'JP 1-02'
    },
    'DPRE': {
        def: 'displaced persons, refugees, and evacuees',
        src: 'JP 1-02'
    },
    'DPS': {
        def: 'data processing system',
        src: 'JP 1-02'
    },
    'DPSC': {
        def: 'Defense Personnel Support Center',
        src: 'JP 1-02'
    },
    'DPSK': {
        def: 'differential phase shift keying',
        src: 'JP 1-02'
    },
    'DR': {
        def: 'dead reckoning; digital receiver; disaster relief',
        src: '1-02'
    },
    'DRB': {
        def: 'Defense Resources Board',
        src: 'JP 1-02'
    },
    'DRe': {
        def: 'dead reckoning error',
        src: 'JP 1-02'
    },
    'DRL': {
        def: 'Bureau of Democracy, Human Rights, and Labor (DOS)',
        src: '1-02'
    },
    'DRMD': {
        def: 'deployments requirements manning document',
        src: 'JP 1-02'
    },
    'DRMO': {
        def: 'Defense Reutilization and Marketing Office',
        src: 'JP 1-02'
    },
    'DRMS': {
        def: 'Defense Reutilization and Marketing Service; distance root-mean-square',
        src: 'JP 1-02'
    },
    'DRN': {
        def: 'Disaster Response Network',
        src: '1-02'
    },
    'DRO': {
        def: 'departmental requirements office; departmental requirements officer',
        src: '1-02'
    },
    'DRRS': {
        def: 'Defense Readiness Reporting System',
        src: '1-02'
    },
    'DRS': {
        def: 'detainee reporting system',
        src: 'JP 1-02'
    },
    'DRSN': {
        def: 'Defense Red Switched Network',
        src: 'JP 6-0'
    },
    'DRT': {
        def: 'dead reckoning tracer; decontamination and reconnaissance team',
        src: '1-02'
    },
    'DRTC': {
        def: 'designated reporting technical control',
        src: 'JP 1-02'
    },
    'DS': {
        def: 'Directorate for Information Management and Chief Information Officer (DIA); direct support; doctrine sponsor',
        src: '1-02'
    },
    'DSA': {
        def: 'defense special assessment (DIA)',
        src: '1-02'
    },
    'DSAA': {
        def: 'Defense Security Assistance Agency',
        src: 'JP 1-02'
    },
    'DSAID': {
        def: 'defense sexual assault incident database',
        src: '1-02'
    },
    'DSAR': {
        def: 'Defense Supply Agency regulation',
        src: 'JP 1-02'
    },
    'DSB': {
        def: 'digital in-band trunk signaling (DIBTS) signaling buffer',
        src: 'JP 1-02'
    },
    'DSC': {
        def: 'defensive space control; digital selective calling; dual-status commander',
        src: '1-02'
    },
    'DSCA': {
        def: 'Defense Security Cooperation Agency; defense support of civil authorities',
        src: '1-02'
    },
    'DSCP': {
        def: 'Defense Supply Center Philadelphia',
        src: 'JP 1-02'
    },
    'DSCR': {
        def: 'Defense Supply Center Richmond',
        src: 'JP 1-02'
    },
    'DSCS': {
        def: 'Defense Satellite Communications System',
        src: 'JP 1-02'
    },
    'DSCSOC': {
        def: 'Defense Satellite Communications System operations center',
        src: 'JP 1-02'
    },
    'DSDI': {
        def: 'digital simple data interface',
        src: 'JP 1-02'
    },
    'DSE': {
        def: 'direct support element',
        src: '1-02'
    },
    'DSF': {
        def: 'District Stability Framework (USAID)',
        src: '1-02'
    },
    'DSG': {
        def: 'digital signal generator',
        src: 'JP 1-02'
    },
    'DSI': {
        def: 'defense simulation internet',
        src: 'JP 1-02'
    },
    'DSL': {
        def: 'display switch locator (SL) routing',
        src: 'JP 1-02'
    },
    'DSM': {
        def: 'decision support matrix',
        src: '1-02'
    },
    'DSMAC': {
        def: 'digital scene-matching area correlation',
        src: 'JP 1-02'
    },
    'DSN': {
        def: 'Defense Switched Network',
        src: '1-02'
    },
    'DSNET': {
        def: 'Defense Secure Network',
        src: 'JP 1-02'
    },
    'DSNET-2': {
        def: 'Defense Secure Network-2',
        src: 'JP 1-02'
    },
    'DSO': {
        def: 'Defense Spectrum Organization; defensive systems officer',
        src: '1-02'
    },
    'DSOE': {
        def: 'deployment schedule of events',
        src: 'JP 1-02'
    },
    'DSP': {
        def: 'Defense Satellite Program; Defense Support Program',
        src: 'JP 1-02'
    },
    'DSPD': {
        def: 'defense support to public diplomacy',
        src: '1-02'
    },
    'DSPL': {
        def: 'display system programming language',
        src: 'JP 1-02'
    },
    'DSPS': {
        def: 'Director, Security Plans and Service',
        src: 'JP 1-02'
    },
    'DSR': {
        def: 'defense source registry',
        src: 'JP 2-01.2'
    },
    'DSS': {
        def: 'Defense Security Service; Distribution Standard System',
        src: '1-02'
    },
    'DSS/ALOC': {
        def: 'direct support system/air line of communications',
        src: '1-02'
    },
    'DSSCS': {
        def: 'Defense Special Security Communications System',
        src: 'JP 1-02'
    },
    'DSSM': {
        def: 'Defense Superior Service Medal',
        src: 'JP 1-0'
    },
    'DSSO': {
        def: 'data system support organization; defense systems support organization',
        src: 'JP 1-02'
    },
    'DSSR': {
        def: 'Department of State Standardized Regulation',
        src: '1-02'
    },
    'DST': {
        def: 'decision support template; Defense Logistics Agency support team; deployment support team; district support team',
        src: '1-02'
    },
    'DSTP': {
        def: 'Director of Strategic Target Planning',
        src: '1-02'
    },
    'DSTR': {
        def: 'destroy',
        src: 'JP 1-02'
    },
    'DSTS-G': {
        def: 'Defense Information Systems Network (DISN) Satellite Transmission Services - Global',
        src: '1-02'
    },
    'DSVL': {
        def: 'doppler sonar velocity log',
        src: 'JP 1-02'
    },
    'DSVT': {
        def: 'digital subscriber voice terminal',
        src: 'JP 1-02'
    },
    'DT': {
        def: 'Directorate for MASINT and Technical Collection (DIA)',
        src: 'JP 2-01'
    },
    'DTA': {
        def: 'Defense Threat Assessment; dynamic threat assessment',
        src: '1-02'
    },
    'DTAM': {
        def: 'defense terrorism awareness message',
        src: '1-02'
    },
    'DTC': {
        def: 'defense transportation coordination',
        src: '1-02'
    },
    'DTCI': {
        def: 'Defense Transportation Coordination Initiative',
        src: '1-02'
    },
    'DTD': {
        def: 'detailed troop decontamination',
        src: '1-02'
    },
    'DTE': {
        def: 'data terminal equipment; developmental test and evaluation',
        src: 'JP 1-02'
    },
    'DTED': {
        def: 'digital terrain elevation data',
        src: '1-02'
    },
    'DTG': {
        def: 'date-time group; digital trunk group (digital transmission group)',
        src: 'JP 1-02'
    },
    'DTIP': {
        def: 'Disruptive Technology Innovations Partnership (DIA)',
        src: '1-02'
    },
    'DTL': {
        def: 'designator target line',
        src: 'JP 1-02'
    },
    'DTMF': {
        def: 'dual tone multi-frequency',
        src: 'JP 1-02'
    },
    'DTMR': {
        def: 'defense traffic management regulation',
        src: 'JP 1-02'
    },
    'DTO': {
        def: 'division transportation office; drug trafficking organization',
        src: '1-02'
    },
    'DTOC': {
        def: 'division tactical operations center',
        src: 'JP 1-02'
    },
    'DTR': {
        def: 'defense transportation regulation',
        src: '1-02'
    },
    'DTRA': {
        def: 'Defense Threat Reduction Agency',
        src: '1-02'
    },
    'DTRACS': {
        def: 'Defense Transportation Reporting and Control System',
        src: 'JP 1-02'
    },
    'DTRATCA': {
        def: 'Defense Threat Reduction and Treaty Compliance Agency',
        src: 'JP 1-02'
    },
    'DTS': {
        def: 'Defense Transportation System; Defense Travel System; diplomatic telecommunications service',
        src: '1-02'
    },
    'DTTS': {
        def: 'Defense Transportation Tracking System',
        src: 'JP 1-02'
    },
    'DTWR': {
        def: 'defense terrorism warning report',
        src: '1-02'
    },
    'DU': {
        def: 'depleted uranium',
        src: '1-02'
    },
    'DUSD': {
        def: 'deputy under Secretary of Defense',
        src: '1-02'
    },
    'DUSD (CI&S)': {
        def: 'Deputy Under Secretary of Defense for Counterintelligence and Security',
        src: 'JP 2-01.2'
    },
    'DUSD(L&MR)': {
        def: 'Deputy Under Secretary of Defense for Logistics and Materiel Readiness',
        src: 'JP 4-0'
    },
    'DUSDL': {
        def: 'Deputy Under Secretary of Defense for Logistics',
        src: 'JP 1-02'
    },
    'DUSDP': {
        def: 'Deputy Under Secretary of Defense for Policy',
        src: 'JP 1-02'
    },
    'DV': {
        def: 'distinguished visitor',
        src: 'JP 1-02'
    },
    'DVA': {
        def: 'Department of Veterans Affairs',
        src: '1-02'
    },
    'DVD': {
        def: 'digital video device; digital video disc',
        src: '1-02'
    },
    'DVITS': {
        def: 'Digital Video Imagery Transmission System',
        src: 'JP 1-02'
    },
    'DVOW': {
        def: 'digital voice orderwire',
        src: 'JP 1-02'
    },
    'DVT': {
        def: 'deployment visualization tool',
        src: 'JP 3-35'
    },
    'DWAS': {
        def: 'Defense Working Capital Accounting System',
        src: '1-02'
    },
    'DWMCF': {
        def: 'double-wide modular causeway ferry',
        src: 'JP 1-02'
    },
    'DWT': {
        def: 'deadweight tonnage',
        src: 'JP 1-02'
    },
    'DWTS': {
        def: 'Digital Wideband Transmission System',
        src: 'JP 1-02'
    },
    'DX': {
        def: 'Directorate for External Relations (DIA)',
        src: '1-02'
    },
    'DZ': {
        def: 'drop zone',
        src: '1-02'
    },
    'DZC': {
        def: 'drop zone controller',
        src: '1-02'
    },
    'DZCO': {
        def: 'drop zone control officer',
        src: 'JP 1-02'
    },
    'DZSO': {
        def: 'drop zone safety officer',
        src: 'JP 1-02'
    },
    'DZST': {
        def: 'drop zone support team',
        src: '1-02'
    },
    'DZSTL': {
        def: 'drop zone support team leader',
        src: 'JP 1-02'
    },
    'E': {
        def: 'total probable error',
        src: 'JP 1-02'
    },
    'E&DCP': {
        def: 'evaluation and data collection plan',
        src: 'JP 1-02'
    },
    'E&E': {
        def: 'emergency and extraordinary expense authority',
        src: '1-02'
    },
    'E&EE': {
        def: 'emergency and extraordinary expense',
        src: 'JP 1-02'
    },
    'E&I': {
        def: 'engineering and installation',
        src: 'JP 1-02'
    },
    'E&M': {
        def: 'ear and mouth; special signaling leads',
        src: 'JP 1-02'
    },
    'E-8C': {
        def: 'joint surveillance, target attack radar system (JSTARS) aircraft',
        src: 'JP 1-02'
    },
    'E-ARTS': {
        def: 'en route automated radar tracking system',
        src: 'JP 1-02'
    },
    'E-mail': {
        def: 'electronic mail',
        src: 'JP 3-33'
    },
    'E-O TDA': {
        def: 'electro-optical tactical decision aid',
        src: 'JP 1-02'
    },
    'E-Space': {
        def: 'Electromagnetic-Space',
        src: '1-02'
    },
    'E-UAV': {
        def: 'endurance unmanned aerial vehicle',
        src: 'JP 1-02'
    },
    'E1': {
        def: 'Echelon 1',
        src: 'JP 1-02'
    },
    'E2': {
        def: 'Echelon 2',
        src: 'JP 1-02'
    },
    'E3': {
        def: 'Echelon 3; electromagnetic environmental effects',
        src: '1-02'
    },
    'E4': {
        def: 'Echelon 4',
        src: 'JP 1-02'
    },
    'E5': {
        def: 'Echelon 5',
        src: 'JP 1-02'
    },
    'EA': {
        def: 'electronic attack; emergency action; evaluation agent; executive agent; executive assistant',
        src: '1-02'
    },
    'ea': {
        def: 'each',
        src: 'JP 1-02'
    },
    'EAC': {
        def: 'echelons above corps (ARMY); emergency action; emergency action committee',
        src: 'JP 1-02'
    },
    'EACS': {
        def: 'expeditionary aeromedical evacuation crew member support',
        src: 'JP 4-02'
    },
    'EACT': {
        def: 'expeditionary aeromedical evacuation coordination team',
        src: 'JP 4-02'
    },
    'EAD': {
        def: 'earliest arrival date; echelons above division (Army); extended active duty',
        src: '1-02'
    },
    'EADRU': {
        def: 'Euro-Atlantic disaster response unit',
        src: '1-02'
    },
    'EADS': {
        def: 'Eastern Air Defense Sector',
        src: '1-02'
    },
    'EAES': {
        def: 'expeditionary aeromedical evacuation squadron',
        src: '1-02'
    },
    'EAF': {
        def: 'expeditionary aerospace forces; expeditionary airfield',
        src: '1-02'
    },
    'EAI': {
        def: 'executive agent instruction',
        src: 'JP 3-50'
    },
    'EAM': {
        def: 'emergency action message',
        src: 'JP 1-02'
    },
    'EAP': {
        def: 'emergency action plan; emergency action procedures',
        src: 'JP 1-02'
    },
    'EAP-CJCS': {
        def: 'emergency action procedures of the Chairman of the Joint Chiefs of Staff',
        src: 'JP 1-02'
    },
    'EAPC': {
        def: 'Euro-Atlantic Partnership Council',
        src: '1-02'
    },
    'EARLY': {
        def: 'evasion and recovery supplemental data report',
        src: 'JP 1-02'
    },
    'EASF': {
        def: 'expeditionary aeromedical staging facility',
        src: 'JP 4-02'
    },
    'EAST': {
        def: 'expeditionary aeromedical evacuation staging team',
        src: 'JP 4-02'
    },
    'EASTPAC': {
        def: 'eastern Pacific Ocean',
        src: 'JP 1-02'
    },
    'EBCDIC': {
        def: 'extended binary coded decimal interchange code',
        src: 'JP 1-02'
    },
    'EBS': {
        def: 'environmental baseline survey',
        src: '1-02'
    },
    'EC': {
        def: 'electronic combat; enemy combatant; error control; European Community',
        src: 'JP 1-02'
    },
    'ECAC': {
        def: 'Electromagnetic Compatibility Analysis Center',
        src: 'JP 1-02'
    },
    'ECB': {
        def: 'echelons corps and below (Army)',
        src: 'JP 1-02'
    },
    'ECC': {
        def: 'engineer coordination cell; evacuation control center',
        src: '1-02'
    },
    'ECES': {
        def: 'expeditionary civil engineer squadron',
        src: '1-02'
    },
    'ECHA': {
        def: 'Executive Committee for Humanitarian Affairs (UN)',
        src: '1-02'
    },
    'ECHO': {
        def: 'European Commission Directorate General for Humanitarian Aid and Civil Protection; European Community Humanitarian Aid Department',
        src: '1-02'
    },
    'ECM': {
        def: 'electronic countermeasures',
        src: '1-02'
    },
    'ECN': {
        def: 'electronic change notice; Minimum Essential Emergency Communications Network',
        src: 'JP 1-02'
    },
    'ECO': {
        def: 'electronic combat officer',
        src: 'JP 1-02'
    },
    'ECOSOC': {
        def: 'Economic and Social Council (UN)',
        src: 'JP 1-02'
    },
    'ECP': {
        def: 'emergency command precedence; engineering change proposal; entry control point',
        src: '1-02'
    },
    'ECS': {
        def: 'expeditionary combat support',
        src: '1-02'
    },
    'ECU': {
        def: 'environmental control unit',
        src: 'JP 1-02'
    },
    'ED': {
        def: 'envelope delay; evaluation directive',
        src: 'JP 1-02'
    },
    'EDA': {
        def: 'Economic Development Administration (DOC); excess defense articles',
        src: '1-02'
    },
    'EDC': {
        def: 'estimated date of completion',
        src: 'JP 1-02'
    },
    'EDD': {
        def: 'earliest delivery date',
        src: 'JP 1-02'
    },
    'EDI': {
        def: 'electronic data interchange',
        src: '1-02'
    },
    'EDSS': {
        def: 'equipment deployment and storage system',
        src: 'JP 1-02'
    },
    'EE': {
        def: 'emergency establishment',
        src: 'JP 1-02'
    },
    'EEA': {
        def: 'environmental executive agent',
        src: '1-02'
    },
    'EEBD': {
        def: 'emergency escape breathing device',
        src: 'JP 1-02'
    },
    'EECT': {
        def: 'end evening civil twilight',
        src: 'JP 1-02'
    },
    'EED': {
        def: 'electro-explosive device; emergency-essential designation',
        src: '1-02'
    },
    'EEDAC': {
        def: 'emergency essential Department of the Army civilian',
        src: 'JP 4-10'
    },
    'EEE': {
        def: 'emergency and extraordinary expense',
        src: '1-02'
    },
    'EEFI': {
        def: 'essential element of friendly information',
        src: '1-02'
    },
    'EEI': {
        def: 'essential element of information',
        src: '1-02'
    },
    'EELV': {
        def: 'evolved expendable launch vehicle',
        src: 'JP 1-02'
    },
    'EENT': {
        def: 'end of evening nautical twilight',
        src: '1-02'
    },
    'EEO': {
        def: 'equal employment opportunity',
        src: 'JP 1-02'
    },
    'EEPROM': {
        def: 'electronic erasable programmable read-only memory',
        src: 'JP 1-02'
    },
    'EER': {
        def: 'enlisted employee review; extended echo ranging',
        src: 'JP 1-02'
    },
    'EEZ': {
        def: 'exclusive economic zone',
        src: '1-02'
    },
    'EFA': {
        def: 'engineering field activity',
        src: 'JP 1-02'
    },
    'EFAC': {
        def: 'emergency family assistance center',
        src: '1-02'
    },
    'EFD': {
        def: 'engineering field division',
        src: 'JP 1-02'
    },
    'EFP': {
        def: 'explosively formed projectile',
        src: '1-02'
    },
    'EFST': {
        def: 'essential fire support task'
    },
    'EFT': {
        def: 'electronic funds transfer',
        src: '1-02'
    },
    'EFTO': {
        def: 'encrypt for transmission only',
        src: 'JP 1-02'
    },
    'EGAT': {
        def: 'Bureau of Economic Growth, Agriculture, and Trade (USAID)',
        src: '1-02'
    },
    'EGM': {
        def: 'Earth Gravity Model',
        src: '1-02'
    },
    'EGS': {
        def: 'Earth ground station',
        src: 'JP 1-02'
    },
    'EH': {
        def: 'explosive hazard',
        src: '1-02'
    },
    'EHCC': {
        def: 'explosive hazards coordination cell',
        src: '1-02'
    },
    'EHDB': {
        def: 'explosive hazard database',
        src: '1-02'
    },
    'EHF': {
        def: 'extremely high frequency',
        src: '1-02'
    },
    'EHO': {
        def: 'environmental health officer',
        src: 'JP 4-02'
    },
    'EHRA': {
        def: 'environmental health risk assessment',
        src: 'JP 1-02'
    },
    'EHSA': {
        def: 'environmental health site assessment',
        src: '1-02'
    },
    'EHT': {
        def: 'explosive hazard team',
        src: '1-02'
    },
    'EI': {
        def: 'environmental information; exercise item',
        src: '1-02'
    },
    'EIA': {
        def: 'Electronic Industries Association',
        src: 'JP 1-02'
    },
    'EID': {
        def: 'electrically initiated device',
        src: '1-02'
    },
    'EIS': {
        def: 'Environmental Impact Statement',
        src: 'JP 1-02'
    },
    'eJMAPS': {
        def: 'electronic Joint Manpower and Personnel System',
        src: '1-02'
    },
    'EJPME': {
        def: 'enlisted joint professional military education',
        src: '1-02'
    },
    'ELBA': {
        def: 'emergency locator beacon',
        src: 'JP 1-02'
    },
    'ELCAS': {
        def: 'elevated causeway system',
        src: '1-02'
    },
    'ELCAS(M)': {
        def: 'elevated causeway system (modular)',
        src: '1-02'
    },
    'ELCAS(NL)': {
        def: 'elevated causeway system (Navy lighterage)',
        src: 'JP 1-02'
    },
    'ELD': {
        def: 'emitter locating data',
        src: 'JP 1-02'
    },
    'ELINT': {
        def: 'electronic intelligence',
        src: '1-02'
    },
    'ELIST': {
        def: 'enhanced logistics intratheater support tool',
        src: '1-02'
    },
    'ELOS': {
        def: 'extended line of sight',
        src: 'JP 1-02'
    },
    'ELPP': {
        def: 'equal level patch panel',
        src: 'JP 1-02'
    },
    'ELR': {
        def: 'extra-long-range aircraft',
        src: 'JP 1-02'
    },
    'ELSEC': {
        def: 'electronics security',
        src: 'JP 1-02'
    },
    'ELT': {
        def: 'emergency locator transmitter',
        src: 'JP 1-02'
    },
    'ELV': {
        def: 'expendable launch vehicle',
        src: 'JP 1-02'
    },
    'ELVA': {
        def: 'emergency low-visibility approach',
        src: '1-02'
    },
    'EM': {
        def: 'electromagnetic; emergency management; executive manager',
        src: '1-02'
    },
    'EMAC': {
        def: 'emergency management assistance compact',
        src: '1-02'
    },
    'EMALL': {
        def: 'electronic mall',
        src: 'JP 1-02'
    },
    'EMBM': {
        def: 'electromagnetic battle management',
        src: '1-02'
    },
    'EMC': {
        def: 'electromagnetic compatibility',
        src: '1-02'
    },
    'EMCON': {
        def: 'emission control',
        src: '1-02'
    },
    'EMD': {
        def: 'effective miss distance; expeditionary military information support detachment',
        src: '1-02'
    },
    'EME': {
        def: 'electromagnetic environment',
        src: '1-02'
    },
    'EMEDS': {
        def: 'expeditionary medical support',
        src: '1-02'
    },
    'EMF': {
        def: 'expeditionary medical facility',
        src: '1-02'
    },
    'EMI': {
        def: 'electromagnetic interface; electromagnetic interference',
        src: '1-02'
    },
    'EMIO': {
        def: 'expanded maritime interception operations',
        src: '1-02'
    },
    'EMOE': {
        def: 'electromagnetic operational environment',
        src: '1-02'
    },
    'EMP': {
        def: 'electromagnetic pulse',
        src: '1-02'
    },
    'EMR hazards': {
        def: 'electromagnetic radiation hazards',
        src: 'JP 1-02'
    },
    'EMS': {
        def: 'electromagnetic spectrum; emergency medical services',
        src: '1-02'
    },
    'EMSC': {
        def: 'electromagnetic spectrum control',
        src: '1-02'
    },
    'EMSEC': {
        def: 'emanations security',
        src: 'JP 1-02'
    },
    'EMT': {
        def: 'emergency medical technician; emergency medical treatment; expeditionary military information support team',
        src: '1-02'
    },
    'EMTF': {
        def: 'expeditionary mobility task force',
        src: '1-02'
    },
    'EMU': {
        def: 'expeditionary medical unit',
        src: '1-02'
    },
    'EMV': {
        def: 'electromagnetic vulnerability',
        src: '1-02'
    },
    'ENCOM': {
        def: 'engineer command (Army)',
        src: 'JP 1-02'
    },
    'ENDEX': {
        def: 'exercise termination',
        src: 'JP 1-02'
    },
    'ENL': {
        def: 'enlisted',
        src: 'JP 1-02'
    },
    'ENSCE': {
        def: 'enemy situation correlation element',
        src: 'JP 1-02'
    },
    'ENWGS': {
        def: 'Enhanced Naval Warfare Gaming System',
        src: 'JP 1-02'
    },
    'EO': {
        def: 'electro-optical; end office; equal opportunity; executive order; eyes only',
        src: '1-02'
    },
    'EO-IR': {
        def: 'electro-optical-infrared',
        src: '1-02'
    },
    'EO-IR CM': {
        def: 'electro-optical-infrared countermeasure',
        src: '1-02'
    },
    'EOB': {
        def: 'electromagnetic order of battle; electronic order of battle; enemy order of battle',
        src: '1-02'
    },
    'EOC': {
        def: 'early operational capability; emergency operating center; emergency operations center',
        src: '1-02'
    },
    'EOCA': {
        def: 'explosive ordnance clearance agent',
        src: '1-02'
    },
    'EODMU-1': {
        def: 'explosive ordnance disposal mobile unit one ',
        src: '1-02'
    },
    'EOI': {
        def: 'electro-optic(al) imagery',
        src: 'JP 1-02'
    },
    'EOL': {
        def: 'end of link',
        src: 'JP 1-02'
    },
    'EOM': {
        def: 'end of message',
        src: 'JP 1-02'
    },
    'EOP': {
        def: 'emergency operating procedures',
        src: 'JP 1-02'
    },
    'EOW': {
        def: 'engineering orderwire',
        src: 'JP 1-02'
    },
    'EP': {
        def: 'electronic protection; emergency preparedness; emergency procedures; excess property; execution planning',
        src: '1-02'
    },
    'EPA': {
        def: 'Environmental Protection Agency; evasion plan of action',
        src: 'JP 1-02'
    },
    'EPBX': {
        def: 'electronic private branch exchange',
        src: 'JP 1-02'
    },
    'EPC': {
        def: 'Emergency Procurement Committee',
        src: 'JP 4-10'
    },
    'EPF': {
        def: 'enhanced palletized load system (PLS) flatrack',
        src: 'JP 1-02'
    },
    'EPH': {
        def: 'emergency planning handbook',
        src: 'JP 1-02'
    },
    'EPIC': {
        def: 'El Paso Intelligence Center',
        src: '1-02'
    },
    'EPIRB': {
        def: 'emergency position-indicating radio beacon',
        src: 'JP 1-02'
    },
    'EPLO': {
        def: 'emergency preparedness liaison officer',
        src: '1-02'
    },
    'EPROM': {
        def: 'erasable programmable read-only memory',
        src: 'JP 1-02'
    },
    'EPU': {
        def: 'expeditionary port unit',
        src: '1-02'
    },
    'EPW': {
        def: 'enemy prisoner of war',
        src: '1-02'
    },
    'EPW/CI': {
        def: 'enemy prisoner of war/civilian internee',
        src: 'JP 1-02'
    },
    'ERC': {
        def: 'emergency relief coordinator; exercise related construction',
        src: '1-02'
    },
    'ERDC': {
        def: 'Engineer Research and Development Center',
        src: '1-02'
    },
    'ERG': {
        def: 'Emergency Response Guidebook',
        src: '1-02'
    },
    'ERGM': {
        def: 'extended range guided munitions',
        src: 'JP 1-02'
    },
    'ERO': {
        def: 'engine running on or offload',
        src: 'JP 1-02'
    },
    'ERPSS': {
        def: 'En Route Patient Staging System',
        src: '1-02'
    },
    'ERRO': {
        def: 'Emergency Response and Recovery Office',
        src: 'JP 1-02'
    },
    'ERSD': {
        def: 'estimated return to service date',
        src: 'JP 1-02'
    },
    'ERT': {
        def: 'emergency response team (FEMA); engineer reconnaissance team',
        src: 'JP 1-02'
    },
    'ERT-A': {
        def: 'emergency response team - advance element',
        src: 'JP 1-02'
    },
    'ERU': {
        def: 'emergency response unit',
        src: '1-02'
    },
    'ERW': {
        def: 'explosive remnants of war',
        src: '1-02'
    },
    'ES': {
        def: 'electronic warfare support; executive secretariat',
        src: '1-02'
    },
    'ESAC': {
        def: 'Electromagnetic-Space Analysis Center (NSA)',
        src: '1-02'
    },
    'ESB': {
        def: 'engineer support battalion',
        src: '1-02'
    },
    'ESC': {
        def: 'Electronics Systems Center; expeditionary sustainment command',
        src: '1-02'
    },
    'ESF': {
        def: 'Economic Support Fund; emergency support function',
        src: '1-02'
    },
    'ESG': {
        def: 'executive steering group; expeditionary strike group',
        src: '1-02'
    },
    'ESGN': {
        def: 'electrically suspended gyro navigation',
        src: 'JP 1-02'
    },
    'ESI': {
        def: 'extremely sensitive information',
        src: 'JP 1-02'
    },
    'ESK': {
        def: 'electronic staff weather officer kit',
        src: 'JP 1-02'
    },
    'ESM': {
        def: 'expeditionary site mapping',
        src: 'JP 3-34'
    },
    'ESO': {
        def: 'embarkation staff officer; environmental science officer; Expeditionary Support Organization (DFAS)',
        src: '1-02'
    },
    'ESOC': {
        def: 'Emergency Supply Operations Center',
        src: 'JP 1-02'
    },
    'ESOH': {
        def: 'environmental, safety, and occupational health',
        src: '1-02'
    },
    'ESORTS': {
        def: 'Enhanced Status of Resources and Training System',
        src: '1-02'
    },
    'ESP': {
        def: 'engineer support plan',
        src: '1-02'
    },
    'ESR': {
        def: 'external supported recovery',
        src: '1-02'
    },
    'EST': {
        def: 'embarked security team; emergency service team; emergency support team (FEMA); en route support team',
        src: '1-02'
    },
    'ET': {
        def: 'electronics technician',
        src: '1-02'
    },
    'ETA': {
        def: 'estimated time of arrival',
        src: 'JP 1-02'
    },
    'ETAC': {
        def: 'emergency tactical air control',
        src: '1-02'
    },
    'ETD': {
        def: 'estimated time of departure',
        src: 'JP 1-02'
    },
    'ETF': {
        def: 'electronic target folder',
        src: '1-02'
    },
    'ETI': {
        def: 'estimated time of intercept',
        src: 'JP 1-02'
    },
    'ETIC': {
        def: 'estimated time for completion; estimated time in commission',
        src: 'JP 1-02'
    },
    'ETM': {
        def: 'electronic transmission; essential tasks matrix',
        src: '1-02'
    },
    'ETO': {
        def: 'Emergency Transportation Operations (DOT)',
        src: '1-02'
    },
    'ETPL': {
        def: 'endorsed TEMPEST products list',
        src: 'JP 1-02'
    },
    'ETR': {
        def: 'export traffic release',
        src: 'JP 1-02'
    },
    'ETS': {
        def: 'European telephone system',
        src: 'JP 1-02'
    },
    'ETSS': {
        def: 'extended training service specialist',
        src: 'JP 1-02'
    },
    'ETX': {
        def: 'end of text',
        src: 'JP 1-02'
    },
    'EU': {
        def: 'European Union',
        src: '1-02'
    },
    'EUB': {
        def: 'essential user bypass',
        src: 'JP 1-02'
    },
    'EURV': {
        def: 'essential user rekeying variable',
        src: 'JP 1-02'
    },
    'EUSA': {
        def: 'Eighth US Army',
        src: 'JP 1-02'
    },
    'EUSC': {
        def: 'effective United States control; effective United States controlled',
        src: '1-02'
    },
    'EUSCS': {
        def: 'effective United States-controlled ships',
        src: '1-02'
    },
    'EVC': {
        def: 'evasion chart',
        src: '1-02'
    },
    'EVE': {
        def: 'equal value exchange',
        src: '1-02'
    },
    'EW': {
        def: 'early warning; electronic warfare',
        src: '1-02'
    },
    'EW/GCI': {
        def: 'early warning/ground-controlled intercept',
        src: 'JP 1-02'
    },
    'EWC': {
        def: 'electronic warfare cell; electronic warfare coordinator',
        src: '1-02'
    },
    'EWCA': {
        def: 'electronic warfare control authority',
        src: '1-02'
    },
    'EWCC': {
        def: 'electronic warfare coordination cell',
        src: '1-02'
    },
    'EWCS': {
        def: 'electronic warfare control ship',
        src: 'JP 1-02'
    },
    'EWD': {
        def: 'Electronic Warfare Directorate (USSTRATCOM)',
        src: '1-02'
    },
    'EWE': {
        def: 'electronic warfare element',
        src: '1-02'
    },
    'EWG': {
        def: 'electronic warfare group',
        src: '1-02'
    },
    'EWIR': {
        def: 'electronic warfare integrated reprogramming',
        src: 'JP 1-02'
    },
    'EWO': {
        def: 'electronic warfare officer',
        src: '1-02'
    },
    'EXCIMS': {
        def: 'Executive Council for Modeling and Simulations',
        src: 'JP 1-02'
    },
    'ExCom': {
        def: 'executive committee',
        src: 'JP 1-02'
    },
    'EXDIR': {
        def: 'Executive Director (CIA)',
        src: 'JP 1-02'
    },
    'EXDIR/ICA': {
        def: 'Executive Director for Intelligence Community Affairs (USG)',
        src: 'JP 1-02'
    },
    'EXECSEC': {
        def: 'executive secretary',
        src: 'JP 3-26'
    },
    'EXER': {
        def: 'exercise',
        src: 'JP 1-02'
    },
    'EXORD': {
        def: 'execute order',
        src: '1-02'
    },
    'EXPLAN': {
        def: 'exercise plan',
        src: 'JP 1-02'
    },
    'EZ': {
        def: 'exchange zone',
        src: '1-02'
    },
    'EZCO': {
        def: 'extraction zone control officer',
        src: 'JP 1-02'
    },
    'EZM': {
        def: 'engagement zone manager',
        src: 'JP 3-09'
    },
    'F': {
        def: 'Fahrenheit; flare patterns; flash',
        src: '1-02'
    },
    'F&ES': {
        def: 'fire and emergency services',
        src: 'JP 3-34'
    },
    'F/AD': {
        def: 'force/activity designator',
        src: '1-02'
    },
    'F/V': {
        def: 'fishing vessel',
        src: 'JP 1-02'
    },
    'F2T2EA': {
        def: 'find, fix, track, target, engage, and assess',
        src: '1-02'
    },
    'F3EAD': {
        def: 'find, fix, finish, exploit, analyze, and disseminate',
        src: '1-02'
    },
    'FA': {
        def: 'feasibility assessment; field artillery',
        src: 'JP 1-02'
    },
    'FAA': {
        def: 'Federal Aviation Administration (DOT); Foreign Assistance Act',
        src: '1-02'
    },
    'FAAO': {
        def: 'Federal Aviation Administration order',
        src: '1-02'
    },
    'FAAR': {
        def: 'facilitated after-action review',
        src: 'JP 1-02'
    },
    'FAC': {
        def: 'forward air controller',
        src: 'JP 1-02'
    },
    'FAC(A)': {
        def: 'forward air controller (airborne)',
        src: '1-02'
    },
    'FACE': {
        def: 'forward aviation combat engineering',
        src: '1-02'
    },
    'FACSFAC': {
        def: 'fleet area control and surveillance facility',
        src: 'JP 1-02'
    },
    'FACT': {
        def: 'field advance civilian team; field assessment and coordination team',
        src: '1-02'
    },
    'FAD': {
        def: 'feasible arrival date',
        src: '1-02'
    },
    'FAE': {
        def: 'fuel air explosive',
        src: 'JP 1-02'
    },
    'FAH': {
        def: 'foreign affairs handbook',
        src: '1-02'
    },
    'FALD': {
        def: 'Field Administration and Logistics Division',
        src: 'JP 1-02'
    },
    'FALOP': {
        def: 'Forward Area Limited Observing Program',
        src: '1-02'
    },
    'FAM': {
        def: 'functional area manager',
        src: 'JP 1-02'
    },
    'FAMP': {
        def: 'forward area minefield planning',
        src: 'JP 1-02'
    },
    'FAO': {
        def: 'Food and Agriculture Organization (UN); foreign area officer',
        src: '1-02'
    },
    'FAPES': {
        def: 'Force Augmentation Planning and Execution System',
        src: 'JP 1-02'
    },
    'FAR': {
        def: 'Federal Acquisition Regulation; Federal Aviation Regulation; formal assessment report',
        src: '1-02'
    },
    'FARC': {
        def: 'Revolutionary Armed Forces of Colombia',
        src: 'JP 3-07.4'
    },
    'FARP': {
        def: 'forward arming and refueling point',
        src: '1-02'
    },
    'FAS': {
        def: 'Foreign Agricultural Service (USDA); frequency assignment subcommittee; fueling at sea; functional account symbol',
        src: '1-02'
    },
    'FASCAM': {
        def: 'family of scatterable mines',
        src: 'JP 1-02'
    },
    'FAST': {
        def: 'field assessment surveillance team; fleet antiterrorism security team',
        src: 'JP 1-02'
    },
    'FAX': {
        def: 'facsimile',
        src: '1-02'
    },
    'FB': {
        def: 'forward boundary',
        src: '1-02'
    },
    'FBI': {
        def: 'Federal Bureau of Investigation (DOJ)',
        src: '1-02'
    },
    'FBIS': {
        def: 'Foreign Broadcast Information Service',
        src: 'JP 1-02'
    },
    'FBO': {
        def: 'faith-based organization',
        src: 'JP 3-28'
    },
    'FC': {
        def: 'field circular; final coordination; fires cell (Army); floating causeway; floating craft; force commander',
        src: '1-02'
    },
    'FCA': {
        def: 'Foreign Claims Act; functional configuration audit',
        src: '1-02'
    },
    'FCC': {
        def: 'Federal Communications Commission; Federal coordinating center; functional combatant commander',
        src: '1-02'
    },
    'FCE': {
        def: 'forward command element',
        src: 'JP 1-02'
    },
    'FCG': {
        def: 'foreign clearance guide',
        src: 'JP 1-02'
    },
    'FCM': {
        def: 'foreign consequence management',
        src: '1-02'
    },
    'FCO': {
        def: 'federal coordinating officer',
        src: '1-02'
    },
    'FCP': {
        def: 'fire control party',
        src: 'JP 1-02'
    },
    'FCT': {
        def: 'firepower control team',
        src: 'JP 1-02'
    },
    'FD': {
        def: 'first draft; from temporary duty',
        src: '1-02'
    },
    'FDA': {
        def: 'Food and Drug Administration',
        src: '1-02'
    },
    'FDBM': {
        def: 'functional database manager',
        src: 'JP 1-02'
    },
    'FDC': {
        def: 'fire direction center',
        src: '1-02'
    },
    'FDESC': {
        def: 'force description',
        src: 'JP 1-02'
    },
    'FDL': {
        def: 'fast deployment logistics',
        src: 'JP 1-02'
    },
    'FDLP': {
        def: 'flight deck landing practice',
        src: 'JP 1-02'
    },
    'FDM': {
        def: 'frequency division multiplexing',
        src: 'JP 1-02'
    },
    'FDO': {
        def: 'fire direction officer; flexible deterrent option; flight deck officer; foreign disclosure officer',
        src: '1-02'
    },
    'FDP': {
        def: 'forward distribution point',
        src: '1-02'
    },
    'FDPMU': {
        def: 'forward-deployable preventive medicine unit',
        src: '1-02'
    },
    'FDR': {
        def: 'foreign disaster relief',
        src: '1-02'
    },
    'FDR/FA': {
        def: 'flight data recorder/fault analyzer',
        src: 'JP 1-02'
    },
    'FDS': {
        def: 'fault detection system',
        src: 'JP 1-02'
    },
    'FDSL': {
        def: 'fixed directory subscriber list',
        src: 'JP 1-02'
    },
    'FDSS': {
        def: 'fault detection subsystem',
        src: 'JP 1-02'
    },
    'FDSSS': {
        def: 'flight deck status and signaling system',
        src: 'JP 1-02'
    },
    'FDT': {
        def: 'forward distribution team',
        src: 'JP 4-02'
    },
    'FDUL': {
        def: 'fixed directory unit list',
        src: 'JP 1-02'
    },
    'FDX': {
        def: 'full duplex',
        src: 'JP 1-02'
    },
    'FE': {
        def: 'facilities engineering',
        src: 'JP 1-02'
    },
    'FEA': {
        def: 'front-end analysis',
        src: '1-02'
    },
    'FEBA': {
        def: 'forward edge of the battle area',
        src: 'JP 1-02'
    },
    'FEC': {
        def: 'facilities engineering command; forward error correction',
        src: '1-02'
    },
    'FECC': {
        def: 'fires and effects coordination cell',
        src: 'JP 3-01'
    },
    'FED-STD': {
        def: 'federal standard',
        src: 'JP 1-02'
    },
    'FEI': {
        def: 'forensic-enabled intelligence',
        src: '1-02'
    },
    'FEK': {
        def: 'frequency exchange keying',
        src: 'JP 1-02'
    },
    'FEMA': {
        def: 'Federal Emergency Management Agency (DHS)',
        src: '1-02'
    },
    'FEP': {
        def: 'fleet satellite (FLTSAT) extremely high frequency (EHF) package; foreign excess property',
        src: '1-02'
    },
    'FEPP': {
        def: 'federal excess personal property; foreign excess personal property',
        src: '1-02'
    },
    'FES': {
        def: 'fire emergency services',
        src: '1-02'
    },
    'FEST': {
        def: 'foreign emergency support team; forward engineer support team',
        src: '1-02'
    },
    'FET': {
        def: 'facility engineer team',
        src: 'JP 3-34'
    },
    'FEU': {
        def: 'forty-foot equivalent unit',
        src: 'JP 1-02'
    },
    'FEZ': {
        def: 'fighter engagement zone',
        src: '1-02'
    },
    'FF': {
        def: 'navy fast frigate',
        src: 'JP 1-02'
    },
    'Ff': {
        def: 'fatigue correction factor',
        src: 'JP 1-02'
    },
    'FFA': {
        def: 'free-fire area',
        src: 'JP 1-02'
    },
    'FFC': {
        def: 'force fires coordinator',
        src: '1-02'
    },
    'FFCC': {
        def: 'flight ferry control center; force fires coordination center (USMC)',
        src: '1-02'
    },
    'FFD': {
        def: 'foundation feature data',
        src: 'JP 1-02'
    },
    'FFE': {
        def: 'field force engineering; flame field expedients',
        src: '1-02'
    },
    'FFG': {
        def: 'guided missile frigate',
        src: 'JP 1-02'
    },
    'FFH': {
        def: 'fast frequency hopping',
        src: 'JP 1-02'
    },
    'FFH-net': {
        def: 'fast-frequency-hopping net',
        src: 'JP 1-02'
    },
    'FFHT-net': {
        def: 'fast-frequency-hopping training net',
        src: 'JP 1-02'
    },
    'FFIR': {
        def: 'friendly force information requirement',
        src: '1-02'
    },
    'FFP': {
        def: 'Food for Peace; fresh frozen plasma; Office of Food for Peace (DOS) ',
        src: '1-02'
    },
    'FFT': {
        def: 'friendly force tracking',
        src: '1-02'
    },
    'FFTU': {
        def: 'forward freight terminal unit',
        src: 'JP 1-02'
    },
    'FG': {
        def: 'fighter group',
        src: 'JP 1-02'
    },
    'FGMDSS': {
        def: 'Future Global Maritime Distress and Safety System',
        src: 'JP 1-02'
    },
    'FGS': {
        def: 'final governing standard; Force Generation Service (UN)',
        src: '1-02'
    },
    'FH': {
        def: 'fleet hospital',
        src: 'JP 1-02'
    },
    'FHA': {
        def: 'Bureau for Food and Humanitarian Assistance; foreign humanitarian assistance',
        src: '1-02'
    },
    'FHC': {
        def: 'family help center',
        src: 'JP 4-06'
    },
    'FHP': {
        def: 'force health protection',
        src: '1-02'
    },
    'FHWA': {
        def: 'Federal Highway Administration (DOT)',
        src: '1-02'
    },
    'FI': {
        def: 'foreign intelligence',
        src: 'JP 3-28'
    },
    'FIA': {
        def: 'functional interoperability architecture',
        src: 'JP 1-02'
    },
    'FIC': {
        def: 'force indicator code',
        src: 'JP 1-02'
    },
    'FID': {
        def: 'foreign internal defense',
        src: '1-02'
    },
    'FIDAF': {
        def: 'foreign internal defense augmentation force',
        src: 'JP 1-02'
    },
    'FIE': {
        def: 'foreign intelligence entity',
        src: '1-02'
    },
    'FIFO': {
        def: 'first-in-first-out',
        src: 'JP 1-02'
    },
    'FinCEN': {
        def: 'Financial Crimes Enforcement Network',
        src: '1-02'
    },
    'FIR': {
        def: 'first-impressions report; flight information region',
        src: 'JP 1-02'
    },
    'FIRCAP': {
        def: 'foreign intelligence requirements capabilities and priorities',
        src: 'JP 1-02'
    },
    'FIS': {
        def: 'flight information service; Foreign Intelligence Service',
        src: 'JP 1-02'
    },
    'FISC': {
        def: 'fleet and industrial supply center',
        src: 'JP 1-02'
    },
    'FISINT': {
        def: 'foreign instrumentation signals intelligence',
        src: '1-02'
    },
    'FISS': {
        def: 'foreign intelligence and security services',
        src: '1-02'
    },
    'FIST': {
        def: 'fire support team; fleet imagery support terminal; fleet intelligence support team',
        src: '1-02'
    },
    'FIWC': {
        def: 'fleet information warfare center',
        src: 'JP 1-02'
    },
    'FIXe': {
        def: 'navigational fix error',
        src: 'JP 1-02'
    },
    'FLAR': {
        def: 'forward-looking airborne radar',
        src: 'JP 1-02'
    },
    'FLC': {
        def: 'fleet logistics center',
        src: '1-02'
    },
    'FLENUMMETOCCEN': {
        def: 'Fleet Numerical Meteorology and Oceanography Center',
        src: 'JP 1-02'
    },
    'FLENUMMETOCDET': {
        def: 'Fleet Numerical Meteorological and Oceanographic Detachment',
        src: 'JP 1-02'
    },
    'FLETC': {
        def: 'Federal Law Enforcement Training Center (DHS)',
        src: '1-02'
    },
    'FLIP': {
        def: 'flight information publication; flight instruction procedures',
        src: 'JP 1-02'
    },
    'FLIR': {
        def: 'forward-looking infrared',
        src: 'JP 1-02'
    },
    'FLITE': {
        def: 'federal legal information through electronics',
        src: 'JP 1-04'
    },
    'FLO/FLO': {
        def: 'float-on/float-off',
        src: '1-02'
    },
    'FLOLS': {
        def: 'fresnel lens optical landing system',
        src: 'JP 1-02'
    },
    'FLOT': {
        def: 'forward line of own troops',
        src: '1-02'
    },
    'FLP': {
        def: 'force level planning',
        src: 'JP 1-02'
    },
    'FLS': {
        def: 'forward logistic site',
        src: '1-02'
    },
    'FLSG': {
        def: 'force logistic support group',
        src: 'JP 1-02'
    },
    'FLTCYBERCOM': {
        def: 'Fleet Cyber Command (Navy)',
        src: '1-02'
    },
    'FLTSAT': {
        def: 'fleet satellite',
        src: '1-02'
    },
    'FLTSATCOM': {
        def: 'fleet satellite communications',
        src: 'JP 1-02'
    },
    'FM': {
        def: 'field manual (Army); financial management; flare multiunit;  force module; frequency management; frequency modulation; functional manager',
        src: '1-02'
    },
    'FM/A': {
        def: 'functional manager for analysis',
        src: '1-02'
    },
    'FMA-net': {
        def: 'frequency management A-net',
        src: 'JP 1-02'
    },
    'FMAS': {
        def: 'foreign media analysis subsystem',
        src: 'JP 1-02'
    },
    'FMAT': {
        def: 'financial management augmentation team',
        src: 'JP 1-06'
    },
    'FMC': {
        def: 'force movement characteristics; full mission-capable',
        src: 'JP 1-02'
    },
    'FMCH': {
        def: 'fleet multichannel',
        src: 'JP 1-02'
    },
    'FMCR': {
        def: 'Fleet Marine Corps Reserve',
        src: 'JP 1-02'
    },
    'FMF': {
        def: 'Fleet Marine Force; foreign military financing',
        src: '1-02'
    },
    'FMFP': {
        def: 'foreign military financing program',
        src: 'JP 1-02'
    },
    'FMI': {
        def: 'field manual-interim',
        src: 'JP 3-15'
    },
    'FMID': {
        def: 'force module identifier',
        src: 'JP 1-02'
    },
    'FMO': {
        def: 'frequency management office; functional manager office',
        src: '1-02'
    },
    'FMP': {
        def: 'foreign materiel program',
        src: '1-02'
    },
    'FMS': {
        def: 'force module subsystem; foreign military sales',
        src: '1-02'
    },
    'FMSC': {
        def: 'frequency management sub-committee',
        src: 'JP 1-02'
    },
    'FMSCA': {
        def: 'Federal Motor Carrier Safety Administration',
        src: 'JP 3-07.4'
    },
    'FMT-net': {
        def: 'frequency management training net',
        src: 'JP 1-02'
    },
    'FMV': {
        def: 'full motion video',
        src: '1-02'
    },
    'FN': {
        def: 'foreign nation',
        src: '1-02'
    },
    'FNMOC': {
        def: 'Fleet Numerical Meteorology and Oceanography Center',
        src: '1-02'
    },
    'FNMOD': {
        def: 'Fleet Numerical Meteorological and Oceanographic Detachment',
        src: 'JP 2-03'
    },
    'FNOC': {
        def: 'Fleet Numerical Oceanographic Command',
        src: 'JP 1-02'
    },
    'FNS': {
        def: 'foreign nation support',
        src: '1-02'
    },
    'FO': {
        def: 'fiber optic; flash override; forward observer',
        src: 'JP 1-02'
    },
    'FOB': {
        def: 'forward operating base',
        src: '1-02'
    },
    'FOC': {
        def: 'full operational capability; future operations cell',
        src: 'JP 1-02'
    },
    'FOD': {
        def: 'field operations division; foreign object damage',
        src: '1-02'
    },
    'FOFW': {
        def: 'fiber optic field wire',
        src: 'JP 1-02'
    },
    'FOG': {
        def: 'Field Operations Guide for Disaster Assessment and Response',
        src: '1-02'
    },
    'FOI': {
        def: 'fault detection isolation',
        src: 'JP 1-02'
    },
    'FOIA': {
        def: 'Freedom of Information Act',
        src: 'JP 1-02'
    },
    'FOIU': {
        def: 'fiber optic interface unit',
        src: 'JP 1-02'
    },
    'FOL': {
        def: 'fiber optic link',
        src: '1-02'
    },
    'FON': {
        def: 'freedom of navigation (operations)',
        src: 'JP 1-02'
    },
    'FORCE': {
        def: 'fuels operational readiness capability equipment (Air Force)',
        src: '1-02'
    },
    'FORMICA': {
        def: 'foreign military intelligence collection activities',
        src: '1-02'
    },
    'FORSCOM': {
        def: 'United States Army Forces Command',
        src: '1-02'
    },
    'FORSTAT': {
        def: 'force status and identity report',
        src: 'JP 1-02'
    },
    'FOS': {
        def: 'full operational status',
        src: 'JP 1-02'
    },
    'FOT': {
        def: 'follow-on operational test',
        src: 'JP 1-02'
    },
    'FOUO': {
        def: 'for official use only',
        src: 'JP 1-02'
    },
    'FP': {
        def: 'force protection; frequency panel',
        src: '1-02'
    },
    'FPA': {
        def: 'foreign policy advisor',
        src: '1-02'
    },
    'FPC': {
        def: 'final planning conference; future plans cell',
        src: '1-02'
    },
    'FPCON': {
        def: 'force protection condition',
        src: '1-02'
    },
    'FPD': {
        def: 'force protection detachment; foreign post differential',
        src: '1-02'
    },
    'FPF': {
        def: 'final protective fire'
    },
    'FPM': {
        def: 'Federal personnel manual',
        src: 'JP 1-02'
    },
    'FPO': {
        def: 'fleet post office',
        src: 'JP 1-02'
    },
    'FPOC': {
        def: 'focal point operations center',
        src: 'JP 3-05.1'
    },
    'FPS': {
        def: 'Federal Protective Service; force protection source',
        src: '1-02'
    },
    'FPTAS': {
        def: 'flight path threat analysis simulation',
        src: '1-02'
    },
    'FPTS': {
        def: 'forward propagation by tropospheric scatter',
        src: 'JP 1-02'
    },
    'FPWG': {
        def: 'force protection working group',
        src: '1-02'
    },
    'FR': {
        def: 'final report; frequency response',
        src: 'JP 1-02'
    },
    'FRA': {
        def: 'Federal Railroad Administration (DOT)',
        src: '1-02'
    },
    'FRAG': {
        def: 'fragmentation code',
        src: 'JP 1-02'
    },
    'FRAGORD': {
        def: 'fragmentary order',
        src: '1-02'
    },
    'FRC': {
        def: 'federal resource coordinator; forward resuscitative care',
        src: 'JP 1-02'
    },
    'FRD': {
        def: 'formerly restricted data',
        src: 'JP 1-02'
    },
    'FREQ': {
        def: 'frequency',
        src: 'JP 1-02'
    },
    'FRERP': {
        def: 'Federal Radiological Emergency Response Plan',
        src: 'JP 3-08'
    },
    'FRF': {
        def: 'fragment retention film',
        src: 'JP 3-07.2'
    },
    'FRMAC': {
        def: 'Federal Radiological Monitoring and Assessment Center (DOE)',
        src: 'JP 1-02'
    },
    'FRN': {
        def: 'force requirement number',
        src: '1-02'
    },
    'FRO': {
        def: 'flexible response option',
        src: '1-02'
    },
    'FROG': {
        def: 'free rocket over ground',
        src: 'JP 1-02'
    },
    'FRP': {
        def: 'Federal response plan (USG)',
        src: 'JP 3-08'
    },
    'FRRS': {
        def: 'frequency resource record system',
        src: 'JP 1-02'
    },
    'FRTP': {
        def: 'fleet response training plan',
        src: '1-02'
    },
    'FS': {
        def: 'fighter squadron; file separator; file server; flare single-unit',
        src: 'JP 1-02'
    },
    'fs': {
        def: 'search radius safety factor',
        src: 'JP 1-02'
    },
    'FSA': {
        def: 'fire support area',
        src: '1-02'
    },
    'FSB': {
        def: 'fire support base; forward staging base; forward support base; forward support battalion',
        src: 'JP 1-02'
    },
    'FSC': {
        def: 'fire support cell; fire support coordinator (USMC)',
        src: '1-02'
    },
    'FSCC': {
        def: 'fire support coordination center (USMC)',
        src: '1-02'
    },
    'FSCL': {
        def: 'fire support coordination line',
        src: '1-02'
    },
    'FSCM': {
        def: 'fire support coordination measure',
        src: '1-02'
    },
    'FSCOORD': {
        def: 'fire support coordinator (Army)',
        src: '1-02'
    },
    'FSE': {
        def: 'fire support element',
        src: '1-02'
    },
    'FSEM': {
        def: 'fire support execution matrix'
    },
    'FSF': {
        def: 'foreign security forces',
        src: '1-02'
    },
    'FSI': {
        def: 'Foreign Service Institute',
        src: '1-02'
    },
    'FSK': {
        def: 'frequency shift key',
        src: 'JP 1-02'
    },
    'FSN': {
        def: 'foreign service national',
        src: 'JP 1-02'
    },
    'FSO': {
        def: 'fire support officer; flight safety officer; foreign service officer',
        src: '1-02'
    },
    'FSP': {
        def: 'functional support plan',
        src: '1-02'
    },
    'FSR': {
        def: 'field service representative',
        src: '1-02'
    },
    'FSRT': {
        def: 'fatality search and recovery team',
        src: '1-02'
    },
    'FSS': {
        def: 'fast sealift ship; fire support station; flight service station',
        src: '1-02'
    },
    'FSSG': {
        def: 'force service support group (USMC)',
        src: 'JP 1-02'
    },
    'FSST': {
        def: 'forward space support to theater',
        src: 'JP 1-02'
    },
    'FST': {
        def: 'fleet surgical team',
        src: 'JP 1-02'
    },
    'FSU': {
        def: 'former Soviet Union; forward support unit',
        src: 'JP 1-02'
    },
    'FSW': {
        def: 'feet of seawater',
        src: '1-02'
    },
    'ft': {
        def: 'feet; foot',
        src: 'JP 1-02'
    },
    'ft3': {
        def: 'cubic feet',
        src: 'JP 1-02'
    },
    'FTC': {
        def: 'Federal Trade Commission',
        src: 'JP 1-02'
    },
    'FTCA': {
        def: 'Foreign Tort Claims Act',
        src: 'JP 1-02'
    },
    'FTN': {
        def: 'force tracking number',
        src: '1-02'
    },
    'FTP': {
        def: 'file transfer protocol',
        src: 'JP 1-02'
    },
    'FTRG': {
        def: 'fleet tactical readiness group',
        src: 'JP 1-02'
    },
    'FTS': {
        def: 'Federal Telecommunications System; Federal telephone service; file transfer service',
        src: 'JP 1-02'
    },
    'FTU': {
        def: 'field training unit; freight terminal unit',
        src: 'JP 1-02'
    },
    'FUAC': {
        def: 'functional area code',
        src: 'JP 1-02'
    },
    'FUNCPLAN': {
        def: 'functional plan',
        src: 'JP 1-02'
    },
    'Fv': {
        def: 'aircraft speed correction factor',
        src: 'JP 1-02'
    },
    'FVT': {
        def: 'Force Validation Tool',
        src: 'JP 1-02'
    },
    'FW': {
        def: 'fighter wing; fixed-wing; weather correction factor',
        src: '1-02'
    },
    'FWA': {
        def: 'fraud, waste, and abuse',
        src: '1-02'
    },
    'FWC': {
        def: 'fleet weather center',
        src: '1-02'
    },
    'FWD': {
        def: 'forward',
        src: 'JP 1-02'
    },
    'FWDA': {
        def: 'friendly weapon danger area',
        src: 'JP 1-02'
    },
    'FWF': {
        def: 'former warring factions',
        src: 'JP 1-02'
    },
    'FY': {
        def: 'fiscal year',
        src: '1-02'
    },
    'FYDP': {
        def: 'Future Years Defense Program',
        src: 'JP 1-02'
    },
    'G-1': {
        def: 'Army or Marine Corps component manpower or personnel staff officer (Army division or higher staff, Marine Corps brigade or higher staff)',
        src: 'JP 1-02'
    },
    'G-2': {
        def: 'Army Deputy Chief of Staff for Intelligence; Army or Marine Corps component intelligence staff officer (Army division or higher staff, Marine Corps brigade or higher staff)',
        src: '1-02'
    },
    'G-2X': {
        def: 'Army counterintelligence and human intelligence staff element',
        src: '1-02'
    },
    'G-3': {
        def: 'Army or Marine Corps component operations staff officer (Army division or higher staff, Marine Corps brigade or higher staff); assistant chief of staff, operations',
        src: '1-02'
    },
    'G-4': {
        def: 'Army or Marine Corps component logistics staff officer (Army division or higher staff, Marine Corps brigade or higher staff); Assistant Chief of Staff for Logistics',
        src: 'JP 1-02'
    },
    'G-5': {
        def: 'assistant chief of staff, plans',
        src: '1-02'
    },
    'G-6': {
        def: 'Army or Marine Corps component command, control, communications, and computer systems staff officer; assistant chief of staff for communications; signal staff officer (Army)',
        src: '1-02'
    },
    'G-7': {
        def: 'Army component information operations staff officer; assistant chief of staff, information engagement, information operations staff officer (ARFOR)',
        src: '1-02'
    },
    'G/A': {
        def: 'ground to air',
        src: 'JP 1-02'
    },
    'G/VLLD': {
        def: 'ground/vehicle laser locator designator',
        src: 'JP 1-02'
    },
    'GA': {
        def: 'geospatial analyst; Tabun, a nerve agent',
        src: '1-02'
    },
    'GAA': {
        def: 'general agency agreement; geospatial intelligence assessment activity',
        src: 'JP 1-02'
    },
    'GAFS': {
        def: 'General Accounting and Finance System',
        src: '1-02'
    },
    'GAMSS': {
        def: 'Global Air Mobility Support System',
        src: '1-02'
    },
    'GAO': {
        def: 'General Accounting Office; Government Accountability Office',
        src: '1-02'
    },
    'GAR': {
        def: 'gateway access request',
        src: '1-02'
    },
    'GARS': {
        def: 'Global Area Reference System',
        src: '1-02'
    },
    'GAT': {
        def: 'governmental assistance team',
        src: '1-02'
    },
    'GATB': {
        def: 'guidance, apportionment, and targeting board',
        src: 'JP 1-02'
    },
    'GATES': {
        def: 'Global Air Transportation Execution System',
        src: '1-02'
    },
    'GB': {
        def: 'group buffer; Sarin, a nerve agent',
        src: 'JP 1-02'
    },
    'GBI': {
        def: 'ground-based interceptor',
        src: '1-02'
    },
    'GBL': {
        def: 'government bill of lading',
        src: 'JP 1-02'
    },
    'GBMD': {
        def: 'global ballistic missile defense',
        src: '1-02'
    },
    'GBR': {
        def: 'ground-based radar',
        src: 'JP 1-02'
    },
    'GBS': {
        def: 'Global Broadcast Service; Global Broadcast System',
        src: '1-02'
    },
    'GBU': {
        def: 'guided bomb unit',
        src: 'JP 1-02'
    },
    'GC': {
        def: 'general counsel; Geneva Convention; Geneva Convention Relative to the Protection of Civilian Persons in Time of War',
        src: '1-02'
    },
    'GC3A': {
        def: 'global command, control, and communications assessment',
        src: 'JP 1-02'
    },
    'GC4A': {
        def: 'global command, control, communications, and computer assessment',
        src: 'JP 1-02'
    },
    'GCA': {
        def: 'ground controlled approach',
        src: 'JP 1-02'
    },
    'GCC': {
        def: 'geographic combatant commander; global contingency construction',
        src: '1-02'
    },
    'GCCC': {
        def: 'global contingency construction contract',
        src: '1-02'
    },
    'GCCMAC': {
        def: 'Global Contingency Construction Multiple Award Contract (Navy)',
        src: '1-02'
    },
    'GCCS': {
        def: 'Global Command and Control System',
        src: '1-02'
    },
    'GCCS-A': {
        def: 'Global Command and Control System-Army',
        src: '1-02'
    },
    'GCCS-I3': {
        def: 'Global Command and Control System Integrated Imagery and Intelligence',
        src: '1-02'
    },
    'GCCS-J': {
        def: 'Global Command and Control System-Joint',
        src: '1-02'
    },
    'GCCS-M': {
        def: 'Global Command and Control System-Maritime',
        src: '1-02'
    },
    'GCE': {
        def: 'ground combat element (USMC)',
        src: '1-02'
    },
    'GCI': {
        def: 'ground control intercept',
        src: '1-02'
    },
    'GCM': {
        def: 'global container manager; Global Information Grid (GIG) Content Management',
        src: '1-02'
    },
    'GCP': {
        def: 'global campaign plan; ground commander\'s pointer',
        src: '1-02'
    },
    'GCRI': {
        def: 'general collective routing indicator (RI)',
        src: 'JP 1-02'
    },
    'GCS': {
        def: 'ground control station',
        src: 'JP 1-02'
    },
    'GCSC': {
        def: 'global contingency service contract',
        src: '1-02'
    },
    'GCSMAC': {
        def: 'Global Contingency Services Multiple Award Contract (Navy)',
        src: '1-02'
    },
    'GCSS': {
        def: 'Global Combat Support System',
        src: '1-02'
    },
    'GCSS-J': {
        def: 'Global Combat Support System-Joint',
        src: '1-02'
    },
    'GCTN': {
        def: 'global combating terrorism network',
        src: '1-02'
    },
    'GD': {
        def: 'Soman, a nerve agent',
        src: 'JP 1-02'
    },
    'GDF': {
        def: 'gridded data field; Guidance for Development of the Force',
        src: '1-02'
    },
    'GDIP': {
        def: 'General Defense Intelligence Program',
        src: 'JP 1-02'
    },
    'GDIPP': {
        def: 'General Defense Intelligence Proposed Program',
        src: 'JP 1-02'
    },
    'GDP': {
        def: 'General Defense Plan (SACEUR); gross domestic product',
        src: 'JP 1-02'
    },
    'GDSS': {
        def: 'Global Decision Support System',
        src: '1-02'
    },
    'GE': {
        def: 'general engineering\t',
        src: '1-02'
    },
    'GEF': {
        def: 'Guidance for Employment of the Force',
        src: '1-02'
    },
    'GEM': {
        def: 'Global Information Grid (GIG) Enterprise Management',
        src: 'JP 6-0'
    },
    'GENADMIN': {
        def: 'general admin (message)',
        src: 'JP 1-02'
    },
    'GENSER': {
        def: 'general service (message)',
        src: 'JP 1-02'
    },
    'GENTEXT': {
        def: 'general text',
        src: 'JP 1-02'
    },
    'GEO': {
        def: 'geosynchronous Earth orbit',
        src: '1-02'
    },
    'GEOCODE': {
        def: 'geographic code',
        src: 'JP 1-02'
    },
    'GEOFILE': {
        def: 'geolocation code file; standard specified geographic location file',
        src: 'JP 1-02'
    },
    'GEOINT': {
        def: 'geospatial intelligence',
        src: '1-02'
    },
    'GEOLOC': {
        def: 'geographic location; geographic location code',
        src: 'JP 1-02'
    },
    'GEOREF': {
        def: 'geographic reference; world geographic reference system',
        src: 'JP 1-02'
    },
    'GETS': {
        def: 'geospatial enterprise tasking, processing, exploitation, and dissemination service',
        src: '1-02'
    },
    'GF': {
        def: 'a nerve agent',
        src: 'JP 1-02'
    },
    'GFE': {
        def: 'government-furnished equipment',
        src: 'JP 1-02'
    },
    'GFI': {
        def: 'government-furnished information',
        src: 'JP 1-02'
    },
    'GFM': {
        def: 'global force management; global freight management; government-furnished material',
        src: '1-02'
    },
    'GFMAP': {
        def: 'Global Force Management Allocation Plan',
        src: '1-02'
    },
    'GFMB': {
        def: 'Global Force Management Board',
        src: '1-02'
    },
    'GFMIG': {
        def: 'Global Force Management Implementation Guidance',
        src: '1-02'
    },
    'GFMPL': {
        def: 'Graphics Fleet Mission Program Library',
        src: 'JP 1-02'
    },
    'GFOAR': {
        def: 'global family of operation plans assessment report',
        src: 'JP 1-02'
    },
    'GFP': {
        def: 'government-furnished property',
        src: '1-02'
    },
    'GFS': {
        def: 'global fleet station; government-furnished support',
        src: '1-02'
    },
    'GFU': {
        def: 'group framing unit',
        src: 'JP 1-02'
    },
    'GHz': {
        def: 'gigahertz',
        src: 'JP 1-02'
    },
    'GI': {
        def: 'geomatics and imagery',
        src: '1-02'
    },
    'GI&S': {
        def: 'geospatial information and services',
        src: '1-02'
    },
    'GIAC': {
        def: 'graphic input aggregate control',
        src: 'JP 1-02'
    },
    'GIANT': {
        def: 'Global Positioning System Interference and Navigation Tool',
        src: '1-02'
    },
    'GIBCO': {
        def: 'geospatial intelligence base for contingency operations',
        src: '1-02'
    },
    'GIC': {
        def: 'international loading gauge',
        src: 'JP 1-02'
    },
    'GIE': {
        def: 'global information environment',
        src: 'JP 3-61'
    },
    'GIG': {
        def: 'Global Information Grid',
        src: 'JP 1-02'
    },
    'GIMS': {
        def: 'Geospatial Intelligence Information Management Services',
        src: '1-02'
    },
    'GIO': {
        def: 'Geospatial Intelligence Organisation (New Zealand)',
        src: '1-02'
    },
    'GIP': {
        def: 'gridded installation photograph',
        src: 'JP 1-02'
    },
    'GIS': {
        def: 'geographic information system; geospatial information systems',
        src: 'JP 1-02'
    },
    'GL': {
        def: 'government-leased',
        src: '1-02'
    },
    'GLCM': {
        def: 'ground-launched cruise missile',
        src: '1-02'
    },
    'GLINT': {
        def: 'gated laser intensifier',
        src: 'JP 1-02'
    },
    'GLO': {
        def: 'ground liaison officer',
        src: '1-02'
    },
    'GLOC': {
        def: 'ground line of communications',
        src: '1-02'
    },
    'GLTD': {
        def: 'ground laser target designator'
    },
    'GM': {
        def: 'group modem',
        src: 'JP 1-02'
    },
    'GMD': {
        def: 'global missile defense; ground-based midcourse defense; group mux and/or demux',
        src: '1-02'
    },
    'GMDSS': {
        def: 'Global Maritime Distress and Safety System',
        src: 'JP 1-02'
    },
    'GMF': {
        def: 'ground mobile force',
        src: 'JP 1-02'
    },
    'GMFP': {
        def: 'global military force policy',
        src: 'JP 2-01'
    },
    'GMI': {
        def: 'general military intelligence',
        src: '1-02'
    },
    'GMLRS': {
        def: 'Global Positioning System Multiple Launch Rocket System',
        src: '1-02'
    },
    'GMP': {
        def: 'global maritime partnership',
        src: '1-02'
    },
    'GMR': {
        def: 'graduated mobilization response; ground mobile radar',
        src: 'JP 1-02'
    },
    'GMRS': {
        def: 'global mobility readiness squadron',
        src: '1-02'
    },
    'GMS': {
        def: 'global mobility squadron',
        src: '1-02'
    },
    'GMSC': {
        def: 'Global Mission Support Center (USSOCOM)',
        src: '1-02'
    },
    'GMTI': {
        def: 'ground moving target indicator',
        src: 'JP 1-02'
    },
    'GNA': {
        def: 'Global Information Grid (GIG) Network Assurance',
        src: '1-02'
    },
    'GNC': {
        def: 'Global Network Operations Center',
        src: '1-02'
    },
    'GNCC': {
        def: 'global network operations (NETOPS) control center',
        src: '1-02'
    },
    'GND': {
        def: 'Global Information Grid (GIG) Network Defense',
        src: 'JP 6-0'
    },
    'GNSC': {
        def: 'global network operations (NETOPS) support center',
        src: '1-02'
    },
    'GNSS': {
        def: 'global navigation satellite system',
        src: '1-02'
    },
    'GO': {
        def: 'government-owned',
        src: '1-02'
    },
    'GOCO': {
        def: 'government-owned, contractor-operated',
        src: 'JP 1-02'
    },
    'GOES': {
        def: 'geostationary operational environmental satellite',
        src: 'JP 1-02'
    },
    'GOGO': {
        def: 'government-owned, government-operated',
        src: 'JP 1-02'
    },
    'GOS': {
        def: 'grade of service',
        src: 'JP 1-02'
    },
    'GOSG': {
        def: 'general officer steering group',
        src: 'JP 1-02'
    },
    'GOTS': {
        def: 'government off-the-shelf',
        src: 'JP 1-02'
    },
    'GP': {
        def: 'general purpose; group',
        src: 'JP 1-02'
    },
    'GPC': {
        def: 'geospatial planning cell; government purchase card',
        src: '1-02'
    },
    'GPD': {
        def: 'gallons per day',
        src: 'JP 1-02'
    },
    'GPE': {
        def: 'geospatial intelligence preparation of the environment',
        src: '1-02'
    },
    'GPEE': {
        def: 'general purpose encryption equipment',
        src: 'JP 1-02'
    },
    'GPL': {
        def: 'Geospatial Product Library',
        src: '1-02'
    },
    'GPM': {
        def: 'gallons per minute; global pallet manager',
        src: '1-02'
    },
    'GPMDM': {
        def: 'group modem',
        src: 'JP 1-02'
    },
    'GPMIC': {
        def: 'Global Patient Movement Integration Center',
        src: '1-02'
    },
    'GPMJAB': {
        def: 'Global Patient Movement Joint Advisory Board',
        src: '1-02'
    },
    'GPMRC': {
        def: 'Global Patient Movement Requirements Center',
        src: '1-02'
    },
    'GPS': {
        def: 'Global Positioning System',
        src: '1-02'
    },
    'GPSOC': {
        def: 'Global Positioning System Operations Center',
        src: '1-02'
    },
    'GPW': {
        def: 'Geneva Convention Relative to the Treatment of Prisoners of War',
        src: '1-02'
    },
    'GR': {
        def: 'graduated response',
        src: 'JP 1-02'
    },
    'GRASP': {
        def: 'general retrieval and sort processor',
        src: 'JP 1-02'
    },
    'GRCA': {
        def: 'ground reference coverage area',
        src: 'JP 1-02'
    },
    'GRG': {
        def: 'gridded reference graphic',
        src: 'JP 1-02'
    },
    'GRL': {
        def: 'global reach laydown',
        src: 'JP 1-02'
    },
    'GRREG': {
        def: 'graves registration',
        src: 'JP 1-02'
    },
    'GS': {
        def: 'general service; general support; group separator',
        src: '1-02'
    },
    'GS-R': {
        def: 'general support-reinforcing',
        src: 'JP 1-02'
    },
    'GSA': {
        def: 'General Services Administration',
        src: '1-02'
    },
    'GSE': {
        def: 'ground support equipment',
        src: '1-02'
    },
    'GSI': {
        def: 'glide slope indicator',
        src: 'JP 1-02'
    },
    'GSM': {
        def: 'ground station module',
        src: 'JP 1-02'
    },
    'GSO': {
        def: 'general services officer',
        src: 'JP 1-02'
    },
    'GSORTS': {
        def: 'Global Status of Resources and Training System',
        src: '1-02'
    },
    'GSR': {
        def: 'general support-reinforcing; ground surveillance radar',
        src: '1-02'
    },
    'GSSA': {
        def: 'general supply support area',
        src: 'JP 1-02'
    },
    'GSSC': {
        def: 'global satellite communications (SATCOM) support center',
        src: '1-02'
    },
    'GST': {
        def: 'geospatial support team',
        src: '1-02'
    },
    'gt': {
        def: 'gross ton',
        src: 'JP 1-02'
    },
    'GTA': {
        def: 'graphic training aid',
        src: '1-02'
    },
    'GTAS': {
        def: 'ground-to-air signals',
        src: 'JP 3-50'
    },
    'GTL': {
        def: 'gun-target line',
        src: 'JP 1-02'
    },
    'GTM': {
        def: 'global transportation management',
        src: '1-02'
    },
    'GUARD': {
        def: 'US National Guard and Air Guard',
        src: 'JP 1-02'
    },
    'GUARDS': {
        def: 'General Unified Ammunition Reporting Data System',
        src: 'JP 1-02'
    },
    'GWC': {
        def: 'global weather central',
        src: 'JP 1-02'
    },
    'GWEN': {
        def: 'Ground Wave Emergency Network',
        src: 'JP 1-02'
    },
    'GWOT': {
        def: 'global war on terrorism',
        src: '1-02'
    },
    'GWS': {
        def: 'Geneva Convention for the Amelioration of the Condition of the Wounded and Sick in Armed Forces in the Field',
        src: '1-02'
    },
    'GWS Sea': {
        def: 'Geneva Convention for the Amelioration of the Condition of the Wounded, Sick, and Shipwrecked Members of the Armed Forces at Sea',
        src: '1-02'
    },
    'H&I': {
        def: 'harassing and interdicting',
        src: 'JP 1-02'
    },
    'H&S': {
        def: 'headquarters and service',
        src: 'JP 1-02'
    },
    'HA': {
        def: 'holding area; humanitarian assistance',
        src: '1-02'
    },
    'HAARS': {
        def: 'high-altitude airdrop resupply system',
        src: 'JP 1-02'
    },
    'HAC': {
        def: 'helicopter aircraft commander; human intelligence analysis cell',
        src: '1-02'
    },
    'HACC': {
        def: 'humanitarian assistance coordination center',
        src: '1-02'
    },
    'HAHO': {
        def: 'high-altitude high-opening parachute technique',
        src: 'JP 1-02'
    },
    'HAP': {
        def: 'humanitarian assistance program',
        src: '1-02'
    },
    'HAP-EP': {
        def: 'humanitarian assistance program-excess property',
        src: 'JP 4-02'
    },
    'HARC': {
        def: 'human intelligence analysis and reporting cell',
        src: '1-02'
    },
    'HARM': {
        def: 'high-speed antiradiation missile',
        src: 'JP 1-02'
    },
    'HARP': {
        def: 'high altitude release point',
        src: 'JP 1-02'
    },
    'HAST': {
        def: 'humanitarian assistance survey team',
        src: '1-02'
    },
    'HATR': {
        def: 'hazardous air traffic report',
        src: 'JP 1-02'
    },
    'HAZ': {
        def: 'hazardous cargo',
        src: 'JP 1-02'
    },
    'HAZMAT': {
        def: 'hazardous materials',
        src: '1-02'
    },
    'HB': {
        def: 'heavy boat',
        src: 'JP 1-02'
    },
    'HBCT': {
        def: 'heavy brigade combat team',
        src: 'JP 3-34'
    },
    'HC': {
        def: 'Directorate for Human Capital (DIA)',
        src: '1-02'
    },
    'HCA': {
        def: 'head of contracting activity; humanitarian and civic assistance',
        src: '1-02'
    },
    'HCAS': {
        def: 'hostile casualty',
        src: 'JP 1-02'
    },
    'HCL': {
        def: 'hydrochloride',
        src: 'JP 1-02'
    },
    'HCO': {
        def: 'helicopter control officer',
        src: '1-02'
    },
    'HCP': {
        def: 'hardcopy printer',
        src: 'JP 1-02'
    },
    'HCS': {
        def: 'helicopter combat support (Navy); helicopter coordination section',
        src: '1-02'
    },
    'HCT': {
        def: 'human intelligence (HUMINT) collection team',
        src: 'JP 2-01.2'
    },
    'HD': {
        def: 'a mustard agent; harbor defense; harmonic distortion; homeland defense',
        src: '1-02'
    },
    'HDC': {
        def: 'harbor defense commander',
        src: '1-02'
    },
    'HDCU': {
        def: 'harbor defense command unit',
        src: 'JP 1-02'
    },
    'HDM': {
        def: 'humanitarian demining',
        src: '1-02'
    },
    'HDO': {
        def: 'humanitarian demining operations',
        src: '1-02'
    },
    'HDPLX': {
        def: 'half duplex',
        src: 'JP 1-02'
    },
    'HDR': {
        def: 'humanitarian daily ration',
        src: '1-02'
    },
    'HDTC': {
        def: 'Humanitarian Demining Training Center',
        src: '1-02'
    },
    'HE': {
        def: 'heavy equipment; high explosives',
        src: '1-02'
    },
    'HEAT': {
        def: 'helicopter external air transport; high explosive antitank',
        src: 'JP 1-02'
    },
    'HEC': {
        def: 'helicopter element coordinator',
        src: 'JP 1-02'
    },
    'HEFOE': {
        def: 'hydraulic electrical fuel oxygen engine',
        src: 'JP 1-02'
    },
    'HEI': {
        def: 'high explosives incendiary',
        src: 'JP 1-02'
    },
    'HEL-H': {
        def: 'heavy helicopter',
        src: 'JP 1-02'
    },
    'HEL-L': {
        def: 'light helicopter',
        src: 'JP 1-02'
    },
    'HEL-M': {
        def: 'medium helicopter',
        src: 'JP 1-02'
    },
    'HELO': {
        def: 'helicopter',
        src: 'JP 1-02'
    },
    'HEMP': {
        def: 'high-altitude electromagnetic pulse',
        src: '1-02'
    },
    'HEMTT': {
        def: 'heavy expanded mobile tactical truck',
        src: 'JP 1-02'
    },
    'HEO': {
        def: 'highly elliptical orbit',
        src: '1-02'
    },
    'HEPA': {
        def: 'high efficiency particulate air',
        src: '1-02'
    },
    'HERF': {
        def: 'hazards of electromagnetic radiation to fuels',
        src: '1-02'
    },
    'HERO': {
        def: 'electromagnetic radiation hazards; hazards of electromagnetic radiation to ordnance',
        src: '1-02'
    },
    'HERP': {
        def: 'hazards of electromagnetic radiation to personnel',
        src: '1-02'
    },
    'HET': {
        def: 'heavy equipment transporter; human intelligence exploitation team',
        src: '1-02'
    },
    'HEWSweb': {
        def: 'Humanitarian Early Warning Service',
        src: '1-02'
    },
    'HF': {
        def: 'high frequency',
        src: '1-02'
    },
    'HFA': {
        def: 'human factors analysis',
        src: '1-02'
    },
    'HFDF': {
        def: 'high-frequency direction finding',
        src: '1-02'
    },
    'HFP': {
        def: 'hostile fire pay',
        src: '1-02'
    },
    'HFRB': {
        def: 'high frequency regional broadcast',
        src: 'JP 1-02'
    },
    'HH': {
        def: 'homing pattern',
        src: 'JP 1-02'
    },
    'HHC': {
        def: 'headquarters and headquarters company',
        src: '1-02'
    },
    'HHD': {
        def: 'headquarters and headquarters detachment',
        src: 'JP 1-02'
    },
    'HHQ': {
        def: 'higher headquarters'
    },
    'HHS': {
        def: 'Department of Health and Human Services',
        src: 'JP 3-27'
    },
    'HIC': {
        def: 'humanitarian information center',
        src: '1-02'
    },
    'HICAP': {
        def: 'high-capacity firefighting foam station',
        src: 'JP 1-02'
    },
    'HIDACZ': {
        def: 'high-density airspace control zone',
        src: '1-02'
    },
    'HIDTA': {
        def: 'high-intensity drug trafficking area',
        src: 'JP 1-02'
    },
    'HIFR': {
        def: 'helicopter in-flight refueling',
        src: '1-02'
    },
    'HIMAD': {
        def: 'high-to-medium-altitude air defense',
        src: '1-02'
    },
    'HIMARS': {
        def: 'High Mobility Artillery Rocket System',
        src: 'JP 3-09'
    },
    'HIMEZ': {
        def: 'high-altitude missile engagement zone',
        src: '1-02'
    },
    'HIRSS': {
        def: 'hover infrared suppressor subsystem',
        src: 'JP 1-02'
    },
    'HIRTA': {
        def: 'high intensity radio transmission area',
        src: '1-02'
    },
    'HIU': {
        def: 'humanitarian information unit (DOS)',
        src: '1-02'
    },
    'HIV': {
        def: 'human immunodeficiency virus',
        src: '1-02'
    },
    'HJ': {
        def: 'crypto key change',
        src: 'JP 1-02'
    },
    'HLPS': {
        def: 'heavy-lift pre-position ship',
        src: 'JP 1-02'
    },
    'HM': {
        def: 'hazardous material',
        src: 'JP 1-02'
    },
    'HMA': {
        def: 'humanitarian mine action',
        src: '1-02'
    },
    'HMH': {
        def: 'Marine heavy helicopter squadron',
        src: 'JP 1-02'
    },
    'HMIRS': {
        def: 'Hazardous Material Information Resource System',
        src: '1-02'
    },
    'HMIS': {
        def: 'Hazardous Material Information System',
        src: 'JP 1-02'
    },
    'HMLA': {
        def: 'Marine light/attack helicopter squadron',
        src: 'JP 1-02'
    },
    'HMM': {
        def: 'Marine medium helicopter squadron',
        src: 'JP 1-02'
    },
    'HMMWV': {
        def: 'high mobility multipurpose wheeled vehicle',
        src: 'JP 1-02'
    },
    'HMOD': {
        def: 'harbormaster operations detachment',
        src: 'JP 4-01.6'
    },
    'HMW': {
        def: 'health, morale, and welfare',
        src: 'JP 1-02'
    },
    'HN': {
        def: 'host nation',
        src: '1-02'
    },
    'HNC': {
        def: 'host-nation coordination',
        src: '1-02'
    },
    'HNCC': {
        def: 'host nation coordination center',
        src: '1-02'
    },
    'HNS': {
        def: 'host-nation support',
        src: '1-02'
    },
    'HNSCC': {
        def: 'host-nation support coordination cell',
        src: '1-02'
    },
    'HNSF': {
        def: 'host-nation security forces',
        src: '1-02'
    },
    'HOB': {
        def: 'height of burst',
        src: 'JP 1-02'
    },
    'HOC': {
        def: 'human intelligence operations cell; humanitarian operations center',
        src: '1-02'
    },
    'HOCC': {
        def: 'humanitarian operations coordination center',
        src: 'JP 1-02'
    },
    'HOD': {
        def: 'head of delegation',
        src: 'JP 1-02'
    },
    'HOGE': {
        def: 'hover out of ground effect',
        src: 'JP 1-02'
    },
    'HOIS': {
        def: 'hostile intelligence service',
        src: 'JP 1-02'
    },
    'HOM': {
        def: 'head of mission',
        src: '1-02'
    },
    'HOSTAC': {
        def: 'helicopter operations from ships other than aircraft carriers (USN publication)',
        src: 'JP 1-02'
    },
    'HPA': {
        def: 'high power amplifier',
        src: 'JP 1-02'
    },
    'HPM': {
        def: 'high-power microwave',
        src: '1-02'
    },
    'HPMSK': {
        def: 'high priority mission support kit',
        src: 'JP 1-02'
    },
    'HPT': {
        def: 'high-payoff target',
        src: '1-02'
    },
    'HQ': {
        def: 'HAVE QUICK; headquarters',
        src: '1-02'
    },
    'HQCOMDT': {
        def: 'headquarters commandant',
        src: '1-02'
    },
    'HQDA': {
        def: 'Headquarters, Department of the Army',
        src: 'JP 1-02'
    },
    'HQFM-net': {
        def: 'HAVE QUICK frequency modulation net',
        src: 'JP 1-02'
    },
    'HQFMT-net': {
        def: 'HAVE QUICK frequency modulation training net',
        src: 'JP 1-02'
    },
    'HQMC': {
        def: 'Headquarters, Marine Corps',
        src: '1-02'
    },
    'HR': {
        def: 'helicopter request; hostage rescue',
        src: 'JP 1-02'
    },
    'HRB': {
        def: 'high-risk billet',
        src: 'JP 3-07.2'
    },
    'HRC': {
        def: 'high-risk-of-capture; Human Resources Command',
        src: '1-02'
    },
    'HRF': {
        def: 'homeland response force',
        src: '1-02'
    },
    'HRJTF': {
        def: 'humanitarian relief joint task force',
        src: 'JP 1-02'
    },
    'HRO': {
        def: 'humanitarian relief organizations',
        src: 'JP 1-02'
    },
    'HRP': {
        def: 'high-risk personnel; human remains pouch',
        src: '1-02'
    },
    'HRS': {
        def: 'horizon reference system',
        src: 'JP 1-02'
    },
    'HRT': {
        def: 'health response team; hostage rescue team',
        src: '1-02'
    },
    'HS': {
        def: 'health services; helicopter antisubmarine (Navy); homeland security; homing single-unit',
        src: '1-02'
    },
    'HSAC': {
        def: 'Homeland Security Advisory Council',
        src: '1-02'
    },
    'HSAS': {
        def: 'Homeland Security Advisory System',
        src: 'JP 3-07.2'
    },
    'HSB': {
        def: 'high speed boat',
        src: 'JP 1-02'
    },
    'HSC': {
        def: 'helicopter sea combat (Navy); Homeland Security Council',
        src: '1-02'
    },
    'HSC/PC': {
        def: 'Homeland Security Council Principals Committee',
        src: 'JP 3-08'
    },
    'HSC/PCC': {
        def: 'Homeland Security Council Policy Coordination Committee',
        src: 'JP 3-08'
    },
    'HSCDM': {
        def: 'high speed cable driver modem',
        src: 'JP 1-02'
    },
    'HSD': {
        def: 'health service delivery; human intelligence support detachment',
        src: '1-02'
    },
    'HSE': {
        def: 'headquarters support element; human intelligence support element (DIA)',
        src: 'JP 1-02'
    },
    'HSEP': {
        def: 'hospital surgical expansion package (USAF)',
        src: 'JP 1-02'
    },
    'HSI': {
        def: 'hyperspectral imagery; Office of Homeland Security Investigations (DHS)',
        src: '1-02'
    },
    'HSIN': {
        def: 'Homeland Security Information Network (DHS)',
        src: '1-02'
    },
    'HSIP': {
        def: 'Homeland Security Infrastructure Program',
        src: '1-02'
    },
    'HSM': {
        def: 'humanitarian service medal',
        src: 'JP 1-02'
    },
    'HSPD': {
        def: 'homeland security Presidential directive',
        src: '1-02'
    },
    'HSPR': {
        def: 'high speed pulse restorer',
        src: 'JP 1-02'
    },
    'HSS': {
        def: 'health service support',
        src: '1-02'
    },
    'HSSDB': {
        def: 'high speed serial data buffer',
        src: 'JP 1-02'
    },
    'HST': {
        def: 'helicopter support team',
        src: 'JP 1-02'
    },
    'HSV': {
        def: 'high-speed vessel',
        src: '1-02'
    },
    'HT': {
        def: 'hatch team',
        src: 'JP 1-02'
    },
    'HTERRCAS': {
        def: 'hostile terrorist casualty',
        src: 'JP 1-02'
    },
    'HTG': {
        def: 'hard target graphic',
        src: 'JP 1-02'
    },
    'HTH': {
        def: 'high test hypochlorite',
        src: 'JP 1-02'
    },
    'HU': {
        def: 'hospital unit',
        src: 'JP 1-02'
    },
    'HUD': {
        def: 'head-up display',
        src: 'JP 1-02'
    },
    'HUMINT': {
        def: 'human intelligence',
        src: '1-02'
    },
    'HUMRO': {
        def: 'humanitarian relief operation',
        src: 'JP 1-02'
    },
    'HUMRO OCP': {
        def: 'humanitarian relief operation operational capability package',
        src: '1-02'
    },
    'HUS': {
        def: 'hardened unique storage',
        src: 'JP 1-02'
    },
    'HVA': {
        def: 'high-value asset',
        src: '1-02'
    },
    'HVAA': {
        def: 'high value airborne asset',
        src: '1-02'
    },
    'HVAC': {
        def: 'heating, ventilation, and air conditioning',
        src: 'JP 1-02'
    },
    'HVCDS': {
        def: 'high-velocity container delivery system',
        src: '1-02'
    },
    'HVI': {
        def: 'high-value individual',
        src: '1-02'
    },
    'HVT': {
        def: 'high-value target',
        src: '1-02'
    },
    'HW': {
        def: 'hazardous waste',
        src: '1-02'
    },
    'HWM': {
        def: 'high water mark',
        src: 'JP 1-02'
    },
    'HYE': {
        def: 'high-yield explosives',
        src: '1-02'
    },
    'Hz': {
        def: 'hertz',
        src: '1-02'
    },
    'I': {
        def: 'immediate; individual',
        src: 'JP 1-02'
    },
    'I&A': {
        def: 'Office of Intelligence and Analysis (DHS)',
        src: '1-02'
    },
    'I/B': {
        def: 'inboard',
        src: 'JP 1-02'
    },
    'I/O': {
        def: 'input/output',
        src: 'JP 1-02'
    },
    'I/R': {
        def: 'internment/resettlement',
        src: '1-02'
    },
    'I/R BN': {
        def: 'internment/resettlement battalion',
        src: 'JP 1-02'
    },
    'I/T': {
        def: 'interpreter and translator',
        src: '1-02'
    },
    'I2': {
        def: 'identity intelligence',
        src: '1-02'
    },
    'I2WD': {
        def: 'Intelligence and Information Warfare Division (Army)',
        src: '1-02'
    },
    'IA': {
        def: 'imagery analyst; implementing arrangement; individual augmentee; information assurance',
        src: '1-02'
    },
    'IAA': {
        def: 'incident area assessment; incident awareness and assessment',
        src: '1-02'
    },
    'IAC': {
        def: 'Interagency Advisory Council',
        src: 'JP 3-41'
    },
    'IACG': {
        def: 'interagency coordination group',
        src: '1-02'
    },
    'IADB': {
        def: 'Inter-American Defense Board',
        src: 'JP 1-02'
    },
    'IADS': {
        def: 'integrated air defense system',
        src: '1-02'
    },
    'IAEA': {
        def: 'International Atomic Energy Agency (UN)',
        src: 'JP 1-02'
    },
    'IAF': {
        def: 'initial approach fix',
        src: 'JP 1-02'
    },
    'IAIP': {
        def: 'Information Analysis and Infrastructure Protection',
        src: 'JP 2-01'
    },
    'IAM': {
        def: 'inertially aided munition',
        src: '1-02'
    },
    'IAMD': {
        def: 'integrated air and missile defense',
        src: '1-02'
    },
    'IAMSAR': {
        def: 'International Aeronautical and Maritime Search and Rescue manual',
        src: '1-02'
    },
    'IAP': {
        def: 'incident action plan; international airport',
        src: '1-02'
    },
    'IAPP': {
        def: 'Interagency Partnership Program',
        src: '1-02'
    },
    'IAR': {
        def: 'interoperability assessment report',
        src: 'JP 1-02'
    },
    'IAS': {
        def: 'International Assistance System',
        src: '1-02'
    },
    'IASC': {
        def: 'Inter-Agency Standing Committee (UN); interim acting service chief',
        src: '1-02'
    },
    'IATA': {
        def: 'International Air Transport Association',
        src: 'JP 1-02'
    },
    'IATACS': {
        def: 'Improved Army Tactical Communications System',
        src: 'JP 1-02'
    },
    'IATO': {
        def: 'interim authority to operate',
        src: 'JP 1-02'
    },
    'IAVM': {
        def: 'information assurance vulnerability management',
        src: 'JP 6-0'
    },
    'IAW': {
        def: 'in accordance with',
        src: '1-02'
    },
    'IBB': {
        def: 'International Broadcasting Bureau',
        src: 'JP 1-02'
    },
    'IBCT': {
        def: 'infantry brigade combat team',
        src: 'JP 3-34'
    },
    'IBES': {
        def: 'intelligence budget estimate submission',
        src: 'JP 1-02'
    },
    'IBET': {
        def: 'integrated border enforcement team',
        src: '1-02'
    },
    'IBM': {
        def: 'International Business Machines',
        src: 'JP 1-02'
    },
    'IBS': {
        def: 'Integrated Booking System; integrated broadcast service; Integrated Broadcast System',
        src: '1-02'
    },
    'IBS-I': {
        def: 'Integrated Broadcast Service-Interactive ',
        src: '1-02'
    },
    'IBS-S': {
        def: 'Integrated Broadcast Service-Simplex',
        src: '1-02'
    },
    'IBU': {
        def: 'inshore boat unit',
        src: 'JP 4-01.6'
    },
    'IC': {
        def: 'incident commander; intelligence community; intercept',
        src: '1-02'
    },
    'IC/EXCOM': {
        def: 'Intelligence Community Executive Committee',
        src: 'JP 1-02'
    },
    'IC3': {
        def: 'integrated command, control, and communications',
        src: '1-02'
    },
    'ICAD': {
        def: 'individual concern and deficiency',
        src: 'JP 1-02'
    },
    'ICAF': {
        def: 'Interagency Conflict Assessment Framework',
        src: '1-02'
    },
    'ICAO': {
        def: 'International Civil Aviation Organization',
        src: '1-02'
    },
    'ICAT': {
        def: 'interagency conflict assessment team',
        src: '1-02'
    },
    'ICBM': {
        def: 'intercontinental ballistic missile',
        src: '1-02'
    },
    'ICC': {
        def: 'information confidence convention; information coordination center; Intelligence Coordination Center (USCG); International Criminal Court; Interstate Commerce Commission',
        src: '1-02'
    },
    'ICD': {
        def: 'international classifications of diseases; International Cooperation and Development Program (USDA)',
        src: 'JP 1-02'
    },
    'ICDC': {
        def: 'Intelligence Community Deputies Committee',
        src: 'JP 2-01'
    },
    'ICDS': {
        def: 'improved container delivery system',
        src: '1-02'
    },
    'ICE': {
        def: 'Immigration and Customs Enforcement',
        src: '1-02'
    },
    'ICEDEFOR': {
        def: 'Iceland Defense Forces',
        src: 'JP 1-02'
    },
    'ICEPP': {
        def: 'Incident Communications Emergency Policy and Procedures',
        src: '1-02'
    },
    'ICG': {
        def: 'interagency core group',
        src: 'JP 1-02'
    },
    'ICIS': {
        def: 'integrated consumable item support',
        src: '1-02'
    },
    'ICITAP': {
        def: 'International Criminal Investigative Training Assistance Program (DOJ)',
        src: '1-02'
    },
    'ICM': {
        def: 'image city map; improved conventional munitions; integrated collection management',
        src: '1-02'
    },
    'ICN': {
        def: 'idle channel noise; interface control net',
        src: 'JP 1-02'
    },
    'ICNIA': {
        def: 'integrated communications, navigation, and identification avionics',
        src: 'JP 1-02'
    },
    'ICOD': {
        def: 'intelligence cutoff data',
        src: 'JP 1-02'
    },
    'ICODES': {
        def: 'integrated computerized deployment system',
        src: '1-02'
    },
    'ICON': {
        def: 'imagery communications and operations node; intermediate coordination node',
        src: 'JP 1-02'
    },
    'ICP': {
        def: 'intertheater communications security package; interface change proposal; inventory control point',
        src: '1-02'
    },
    'ICPC': {
        def: 'Intelligence Community Principals Committee',
        src: 'JP 1-02'
    },
    'ICR': {
        def: 'Intelligence Collection Requirements',
        src: 'JP 1-02'
    },
    'ICRC': {
        def: 'International Committee of the Red Cross',
        src: '1-02'
    },
    'ICRI': {
        def: 'interswitch collective routing indicator',
        src: 'JP 1-02'
    },
    'ICS': {
        def: 'incident command system; internal communications system; inter-Service chaplain support',
        src: '1-02'
    },
    'ICSAR': {
        def: 'interagency committee on search and rescue',
        src: 'JP 1-02'
    },
    'ICSF': {
        def: 'integrated command communications system framework',
        src: 'JP 3-35'
    },
    'ICT': {
        def: 'information and communications technology',
        src: '1-02'
    },
    'ICU': {
        def: 'intensive care unit; interface control unit',
        src: 'JP 1-02'
    },
    'ICVA': {
        def: 'International Council of Voluntary Agencies',
        src: 'JP 1-02'
    },
    'ICW': {
        def: 'in coordination with',
        src: '1-02'
    },
    'ID': {
        def: 'identification; identifier; initiating directive',
        src: '1-02'
    },
    'ID/IQ': {
        def: 'indefinite delivery/indefinite quantity',
        src: 'JP 4-10'
    },
    'IDAD': {
        def: 'internal defense and development',
        src: '1-02'
    },
    'IDB': {
        def: 'integrated database',
        src: 'JP 1-02'
    },
    'IDCA': {
        def: 'International Development Cooperation Agency',
        src: 'JP 1-02'
    },
    'IDDF': {
        def: 'intermediate data distribution facility',
        src: 'JP 1-02'
    },
    'IDEAS': {
        def: 'Intelligence Data Elements Authorized Standards',
        src: 'JP 1-02'
    },
    'IDEX': {
        def: 'imagery data exploitation system',
        src: 'JP 1-02'
    },
    'IDF': {
        def: 'intermediate distribution frame',
        src: 'JP 1-02'
    },
    'IDL': {
        def: 'integrated distribution lane',
        src: '1-02'
    },
    'IDM': {
        def: 'improved data modem; information dissemination management',
        src: 'JP 1-02'
    },
    'IDNDR': {
        def: 'International Decade for Natural Disaster Reduction (UN)',
        src: 'JP 1-02'
    },
    'IDO': {
        def: 'installation deployment officer',
        src: 'JP 1-02'
    },
    'IDP': {
        def: 'imagery derived product; imminent danger pay; internally displaced person',
        src: '1-02'
    },
    'IDRA': {
        def: 'infectious disease risk assessment',
        src: 'JP 1-02'
    },
    'IDS': {
        def: 'individual deployment site; integrated deployment system; interface design standards; intrusion detection system',
        src: 'JP 1-02'
    },
    'IDSRS': {
        def: 'Integrated Defense Source Registration System',
        src: '1-02'
    },
    'IDSS': {
        def: 'interoperability decision support system',
        src: 'JP 1-02'
    },
    'IDT': {
        def: 'inactive duty training',
        src: 'JP 1-02'
    },
    'IDZ': {
        def: 'inner defense zone',
        src: 'JP 1-02'
    },
    'IEB': {
        def: 'intelligence exploitation base',
        src: 'JP 2-01.2'
    },
    'IED': {
        def: 'improvised explosive device',
        src: '1-02'
    },
    'IEDD': {
        def: 'improvised explosive device defeat',
        src: 'JP 3-15'
    },
    'IEEE': {
        def: 'Institute of Electrical and Electronics Engineers',
        src: '1-02'
    },
    'IEL': {
        def: 'illustrative evaluation scenario',
        src: 'JP 1-02'
    },
    'IEM': {
        def: 'installation emergency management',
        src: '1-02'
    },
    'IEMATS': {
        def: 'improved emergency message automatic transmission system',
        src: 'JP 1-02'
    },
    'IER': {
        def: 'information exchange requirement',
        src: 'JP 1-02'
    },
    'IES': {
        def: 'imagery exploitation system',
        src: 'JP 1-02'
    },
    'IESS': {
        def: 'imagery exploitation support system',
        src: 'JP 1-02'
    },
    'IEW': {
        def: 'intelligence and electronic warfare',
        src: 'JP 1-02'
    },
    'IF': {
        def: 'intermediate frequency',
        src: 'JP 1-02'
    },
    'IFC': {
        def: 'intelligence fusion center',
        src: 'JP 1-02'
    },
    'IFCS': {
        def: 'improved fire control system',
        src: 'JP 1-02'
    },
    'IFF': {
        def: 'identification, friend or foe',
        src: '1-02'
    },
    'IFF/SIF': {
        def: 'identification, friend or foe/selective identification feature',
        src: 'JP 1-02'
    },
    'IFFN': {
        def: 'identification, friend, foe, or neutral',
        src: 'JP 1-02'
    },
    'IFO': {
        def: 'integrated financial operations',
        src: '1-02'
    },
    'IFP': {
        def: 'integrated force package',
        src: '1-02'
    },
    'IFR': {
        def: 'instrument flight rules',
        src: '1-02'
    },
    'IFRC': {
        def: 'International Federation of Red Cross and Red Crescent Societies',
        src: '1-02'
    },
    'IFSAR': {
        def: 'interferometric synthetic aperture radar',
        src: 'JP 1-02'
    },
    'IG': {
        def: 'inspector general',
        src: '1-02'
    },
    'IGC': {
        def: 'Integrated Data Environment/Global Transportation Network Convergence',
        src: '1-02'
    },
    'IGL': {
        def: 'intelligence gain/loss',
        src: '1-02'
    },
    'IGO': {
        def: 'intergovernmental organization',
        src: '1-02'
    },
    'IGSM': {
        def: 'interim ground station module (JSTARS)',
        src: 'JP 1-02'
    },
    'IHADSS': {
        def: 'integrated helmet and display sight system (Army)',
        src: 'JP 1-02'
    },
    'IHC': {
        def: 'international humanitarian community',
        src: '1-02'
    },
    'IHO': {
        def: 'industrial hygiene officer',
        src: 'JP 4-02'
    },
    'IHS': {
        def: 'international health specialist',
        src: '1-02'
    },
    'IIB': {
        def: 'interagency information bureau',
        src: 'JP 1-02'
    },
    'IICL': {
        def: 'Institute of International Container Lessons',
        src: 'JP 1-02'
    },
    'IICT': {
        def: 'Interagency Intelligence Committee on Counterterrorism',
        src: '1-02'
    },
    'IIM': {
        def: 'intelligence information management',
        src: 'JP 1-02'
    },
    'IIP': {
        def: 'Bureau of International Information Programs (DOS); interagency implementation plan; international information program; interoperability improvement program',
        src: '1-02'
    },
    'IIR': {
        def: 'imagery interpretation report; imagery infared; intelligence information report',
        src: 'JP 1-02'
    },
    'IJC3S': {
        def: 'initial joint command, control, and communications system; Integrated Joint Command, Control, and Communications System',
        src: 'JP 1-02'
    },
    'IL': {
        def: 'intermediate location',
        src: 'JP 1-02'
    },
    'ILAB': {
        def: 'Bureau of International Labor Affairs (DOL)',
        src: '1-02'
    },
    'ILO': {
        def: 'in lieu of; International Labor Organization (UN)',
        src: '1-02'
    },
    'ILOC': {
        def: 'integrated line of communications',
        src: '1-02'
    },
    'ILS': {
        def: 'integrated logistic support',
        src: 'JP 1-02'
    },
    'IM': {
        def: 'information management; intermediate module',
        src: '1-02'
    },
    'IMA': {
        def: 'individual mobilization augmentee',
        src: '1-02'
    },
    'IMAAC': {
        def: 'Interagency Modeling and Atmospheric Assessment Center',
        src: '1-02'
    },
    'IMC': {
        def: 'instrument meteorological conditions; International Medical Corps',
        src: '1-02'
    },
    'IMDC': {
        def: 'isolated, missing, detained, or captured',
        src: 'JP 3-50'
    },
    'IMDG': {
        def: 'international maritime dangerous goods (UN)',
        src: '1-02'
    },
    'IMET': {
        def: 'international military education and training',
        src: '1-02'
    },
    'IMETS': {
        def: 'Integrated Meteorological System',
        src: 'JP 1-02'
    },
    'IMF': {
        def: 'International Monetary Fund (UN)',
        src: 'JP 1-02'
    },
    'IMI': {
        def: 'international military information',
        src: 'JP 1-02'
    },
    'IMINT': {
        def: 'imagery intelligence',
        src: '1-02'
    },
    'IMIT': {
        def: 'international military information team',
        src: 'JP 1-02'
    },
    'IMLTU': {
        def: 'intermatrix line termination unit',
        src: 'JP 1-02'
    },
    'IMM': {
        def: 'integrated materiel management; intelligence mission management',
        src: '1-02'
    },
    'IMMDELREQ': {
        def: 'immediate delivery required',
        src: 'JP 1-02'
    },
    'IMO': {
        def: 'information management officer; International Maritime Organization',
        src: '1-02'
    },
    'IMOSAR': {
        def: 'International Maritime Organization (IMO) search and rescue manual',
        src: 'JP 1-02'
    },
    'IMOSS': {
        def: 'interim mobile oceanographic support system',
        src: 'JP 1-02'
    },
    'IMP': {
        def: 'implementation; information management plan; inventory management plan',
        src: '1-02'
    },
    'IMPP': {
        def: 'integrated mission planning process',
        src: '1-02'
    },
    'IMPT': {
        def: 'incident management planning team; integrated mission planning team',
        src: '1-02'
    },
    'IMRL': {
        def: 'individual material requirements list',
        src: '1-02'
    },
    'IMS': {
        def: 'information management system; interagency management system; Interagency Management System for Reconstruction and Stabilization; international military staff; international military standardization ',
        src: '1-02'
    },
    'IMSP': {
        def: 'information management support plan',
        src: '1-02'
    },
    'IMSU': {
        def: 'installation medical support unit',
        src: 'JP 1-02'
    },
    'IMTF': {
        def: 'integrated mission task force',
        src: '1-02'
    },
    'IMU': {
        def: 'inertial measuring unit; intermatrix unit',
        src: 'JP 1-02'
    },
    'IN': {
        def: 'Air Force component intelligence officer (staff); impulse noise; instructor',
        src: 'JP 1-02'
    },
    'INCERFA': {
        def: 'uncertainty phase (ICAO)',
        src: 'JP 1-02'
    },
    'INCNR': {
        def: 'increment number',
        src: 'JP 1-02'
    },
    'INCSEA': {
        def: 'incidents at sea',
        src: 'JP 1-02'
    },
    'IND': {
        def: 'improvised nuclear device',
        src: '1-02'
    },
    'INDRAC': {
        def: 'Interagency Combating Weapons of Mass Destruction Database of Responsibilities, Authorities, and Capabilities',
        src: '1-02'
    },
    'INF': {
        def: 'infantry',
        src: 'JP 1-02'
    },
    'INFOCON': {
        def: 'information operations condition',
        src: 'JP 1-02'
    },
    'INID': {
        def: 'intercept network in dialing',
        src: 'JP 1-02'
    },
    'INJILL': {
        def: 'injured or ill',
        src: 'JP 1-02'
    },
    'INL': {
        def: 'Bureau of International Narcotics and Law Enforcement Affairs (DOS)',
        src: '1-02'
    },
    'INLS': {
        def: 'improved Navy lighterage system',
        src: '1-02'
    },
    'INM': {
        def: 'international narcotics matters',
        src: 'JP 1-02'
    },
    'INMARSAT': {
        def: 'international maritime satellite',
        src: 'JP 1-02'
    },
    'INR': {
        def: 'Bureau of Intelligence and Research (DOS)',
        src: '1-02'
    },
    'INREQ': {
        def: 'information request',
        src: 'JP 1-02'
    },
    'INRP': {
        def: 'Initial National Response Plan',
        src: 'JP 3-08'
    },
    'INS': {
        def: 'Immigration and Naturalization Service; inertial navigation system; insert code',
        src: '1-02'
    },
    'INSARAG': {
        def: 'International Search and Rescue Advisory Group',
        src: '1-02'
    },
    'INSCOM': {
        def: 'United States Army Intelligence and Security Command',
        src: 'JP 1-02'
    },
    'INTAC': {
        def: 'individual terrorism awareness course',
        src: 'JP 1-02'
    },
    'INTACS': {
        def: 'integrated tactical communications system',
        src: 'JP 1-02'
    },
    'INTELSAT': {
        def: 'International Telecommunications Satellite Organization',
        src: 'JP 1-02'
    },
    'INTELSITSUM': {
        def: 'intelligence situation summary',
        src: 'JP 1-02'
    },
    'InterAction': {
        def: 'American Council for Voluntary International Action',
        src: '1-02'
    },
    'INTERCO': {
        def: 'International Code of Signals',
        src: 'JP 1-02'
    },
    'INTERPOL': {
        def: 'International Criminal Police Organization',
        src: 'JP 1-02'
    },
    'INTERPOL-USNCB': {
        def: 'International Criminal Police Organization United States National Central Bureau (DOJ)',
        src: 'JP 1-02'
    },
    'INTREP': {
        def: 'intelligence report',
        src: 'JP 1-02'
    },
    'INU': {
        def: 'inertial navigation unit; integration unit',
        src: 'JP 1-02'
    },
    'INV': {
        def: 'invalid',
        src: 'JP 1-02'
    },
    'INVOL': {
        def: 'involuntary',
        src: 'JP 1-02'
    },
    'IO': {
        def: 'information objectives; information operations; intelligence oversight',
        src: '1-02'
    },
    'IO force': {
        def: 'information operations force',
        src: '1-02'
    },
    'IOB': {
        def: 'intelligence oversight board',
        src: '1-02'
    },
    'IOC': {
        def: 'Industrial Operations Command; initial operational capability; intelligence operations center; investigations operations center',
        src: 'JP 1-02'
    },
    'IOCB': {
        def: 'information operations coordination board',
        src: '1-02'
    },
    'IOI': {
        def: 'injured other than hostilities or illness',
        src: 'JP 1-02'
    },
    'IOII': {
        def: 'information operations intelligence integration',
        src: '1-02'
    },
    'IOM': {
        def: 'installation, operation, and maintenance; International Organization for Migration',
        src: '1-02'
    },
    'IOP': {
        def: 'interface operating procedure',
        src: 'JP 1-02'
    },
    'IOSS': {
        def: 'Interagency Operations Security Support Staff',
        src: '1-02'
    },
    'IOT': {
        def: 'information operations team',
        src: '1-02'
    },
    'IOU': {
        def: 'input/output unit',
        src: 'JP 1-02'
    },
    'IOW': {
        def: 'information operations wing',
        src: '1-02'
    },
    'IOWG': {
        def: 'information operations working group',
        src: '1-02'
    },
    'IP': {
        def: 'initial point; initial position; instructor pilot; intelligence planning; internet protocol',
        src: '1-02'
    },
    'IPA': {
        def: 'intelligence production agency',
        src: 'JP 1-02'
    },
    'IPB': {
        def: 'intelligence preparation of the battlespace',
        src: '1-02'
    },
    'IPBD': {
        def: 'intelligence program budget decision',
        src: 'JP 1-02'
    },
    'IPC': {
        def: 'initial planning conference; integration planning cell; interagency planning cell; interagency policy committee',
        src: '1-02'
    },
    'IPDM': {
        def: 'intelligence program decision memorandum',
        src: 'JP 1-02'
    },
    'IPDP': {
        def: 'inland petroleum distribution plan',
        src: 'JP 1-02'
    },
    'IPDS': {
        def: 'imagery processing and dissemination system; inland petroleum distribution system (Army)',
        src: '1-02'
    },
    'IPE': {
        def: 'individual protective equipment; industrial plant equipment',
        src: '1-02'
    },
    'IPG': {
        def: 'isolated personnel guidance',
        src: '1-02'
    },
    'IPI': {
        def: 'indigenous populations and institutions',
        src: '1-02'
    },
    'IPL': {
        def: 'imagery product library; integrated priority list',
        src: 'JP 1-02'
    },
    'IPO': {
        def: 'International Program Office',
        src: 'JP 1-02'
    },
    'IPOE': {
        def: 'intelligence preparation of the operational environment',
        src: 'JP 3-01'
    },
    'IPOM': {
        def: 'intelligence program objective memorandum',
        src: 'JP 1-02'
    },
    'IPP': {
        def: 'impact point prediction; industrial preparedness program',
        src: 'JP 1-02'
    },
    'IPR': {
        def: 'in-progress review; intelligence production requirement',
        src: '1-02'
    },
    'IPR F': {
        def: 'plan approval in-progress review',
        src: '1-02'
    },
    'IPRG': {
        def: 'intelligence program review group',
        src: 'JP 1-02'
    },
    'IPS': {
        def: 'illustrative planning scenario; Integrated Planning System (DHS); Interim Polar System; interoperability planning system',
        src: '1-02'
    },
    'IPSG': {
        def: 'intelligence program support group',
        src: 'JP 1-02'
    },
    'IPSP': {
        def: 'intelligence priorities for strategic planning',
        src: 'JP 1-02'
    },
    'IPT': {
        def: 'integrated planning team; integrated process team; Integrated Product Team; intelligence planning team',
        src: '1-02'
    },
    'IR': {
        def: 'incident report; information rate; information requirement; infrared; intelligence requirement',
        src: '1-02'
    },
    'IR pointer': {
        def: 'infrared pointer',
        src: 'JP 1-02'
    },
    'IRA': {
        def: 'Provisional Irish Republican Army',
        src: '1-02'
    },
    'IRAC': {
        def: 'Interdepartment Radio Advisory Committee (DOC)',
        src: '1-02'
    },
    'IRBM': {
        def: 'intermediate-range ballistic missile',
        src: '1-02'
    },
    'IRC': {
        def: 'information-related capability; International Red Cross; International Rescue Committee; internet relay chat',
        src: '1-02'
    },
    'IRCCM': {
        def: 'infrared counter countermeasures',
        src: 'JP 1-02'
    },
    'IRCM': {
        def: 'infrared countermeasures',
        src: 'JP 1-02'
    },
    'IRDS': {
        def: 'infrared detection set',
        src: 'JP 1-02'
    },
    'IRF': {
        def: 'Immediate Reaction Forces (NATO); incident response force',
        src: '1-02'
    },
    'IRINT': {
        def: 'infrared intelligence',
        src: 'JP 1-02'
    },
    'IRISA': {
        def: 'Intelligence Report Index Summary File',
        src: 'JP 1-02'
    },
    'IRO': {
        def: 'international relief organization',
        src: 'JP 1-02'
    },
    'IRR': {
        def: 'Individual Ready Reserve; integrated readiness report',
        src: '1-02'
    },
    'IRS': {
        def: 'Internal Revenue Service',
        src: '1-02'
    },
    'IRSCC': {
        def: 'interagency remote sensing coordination cell',
        src: '1-02'
    },
    'IRST': {
        def: 'infrared search and track',
        src: 'JP 1-02'
    },
    'IRSTS': {
        def: 'infrared search and track sensor; Infrared Search and Track System',
        src: 'JP 1-02'
    },
    'IRT': {
        def: 'Initial Response Team',
        src: 'JP 1-02'
    },
    'IRTPA': {
        def: 'Intelligence Reform and Terrorism Prevention Act',
        src: '1-02'
    },
    'IS': {
        def: 'information superiority; information system; interswitch',
        src: '1-02'
    },
    'ISA': {
        def: 'individual Service augmentee; international standardization agreement; inter-Service agreement',
        src: '1-02'
    },
    'ISAC': {
        def: 'information sharing and analysis center',
        src: '1-02'
    },
    'ISAF': {
        def: 'International Security Assistance Force',
        src: '1-02'
    },
    'ISB': {
        def: 'intermediate staging base',
        src: '1-02'
    },
    'ISDB': {
        def: 'integrated satellite communications (SATCOM) database',
        src: 'JP 1-02'
    },
    'ISDDC': {
        def: 'Integrated Mission Support for Surface Deployment and Distribution Command',
        src: '1-02'
    },
    'ISE': {
        def: 'Information Sharing Environment; intelligence support element',
        src: '1-02'
    },
    'ISG': {
        def: 'information synchronization group; isolated soldier guidance',
        src: '1-02'
    },
    'ISI2R': {
        def: 'identify, separate, isolate, influence, and reintegrate',
        src: '1-02'
    },
    'ISMCS': {
        def: 'international station meteorological climatic summary',
        src: 'JP 1-02'
    },
    'ISMMP': {
        def: 'integrated continental United States (CONUS) medical mobilization plan',
        src: 'JP 1-02'
    },
    'ISN': {
        def: 'Bureau of International Security and Nonproliferation (DOS); internment serial number ',
        src: '1-02'
    },
    'ISO': {
        def: 'International Organization for Standardization; isolation',
        src: '1-02'
    },
    'ISOO': {
        def: 'Information Security Oversight Office',
        src: 'JP 1-02'
    },
    'ISOPAK': {
        def: 'International Organization for Standardization package',
        src: '1-02'
    },
    'ISOPREP': {
        def: 'isolated personnel report',
        src: 'JP 1-02'
    },
    'ISP': {
        def: 'internet service provider',
        src: 'JP 1-02'
    },
    'ISR': {
        def: 'intelligence, surveillance, and reconnaissance',
        src: '1-02'
    },
    'ISR WG': {
        def: 'Intelligence, Surveillance, and Reconnaissance Wing',
        src: '1-02'
    },
    'ISRD': {
        def: 'intelligence, surveillance, and reconnaissance division',
        src: '1-02'
    },
    'ISS': {
        def: 'in-system select',
        src: 'JP 4-02'
    },
    'ISSA': {
        def: 'inter-Service support agreement',
        src: 'JP 1-02'
    },
    'ISSG': {
        def: 'Intelligence Senior Steering Group',
        src: 'JP 2-01'
    },
    'ISSM': {
        def: 'information system security manager',
        src: 'JP 1-02'
    },
    'ISSO': {
        def: 'information systems security organization',
        src: 'JP 1-02'
    },
    'IST': {
        def: 'integrated system test; interswitch trunk',
        src: 'JP 1-02'
    },
    'ISU': {
        def: 'internal airlift or helicopter slingable container unit',
        src: '1-02'
    },
    'IT': {
        def: 'information system technician; information technology',
        src: '1-02'
    },
    'ITA': {
        def: 'international telegraphic alphabet; International Trade Administration (DOC)',
        src: '1-02'
    },
    'ITAC': {
        def: 'intelligence and threat analysis center (Army)',
        src: 'JP 1-02'
    },
    'ITALD': {
        def: 'improved tactical air-launched decoy',
        src: 'JP 1-02'
    },
    'ITAR': {
        def: 'international traffic in arms regulation (coassembly)',
        src: 'JP 1-02'
    },
    'ITF': {
        def: 'intelligence task force (DIA)',
        src: 'JP 1-02'
    },
    'ITG': {
        def: 'infrared target graphic',
        src: 'JP 1-02'
    },
    'ITL': {
        def: 'intelligence task list',
        src: '1-02'
    },
    'ITO': {
        def: 'installation transportation officer',
        src: '1-02'
    },
    'ITRO': {
        def: 'inter-Service training organization',
        src: 'JP 1-02'
    },
    'ITU': {
        def: 'International Telecommunications Union',
        src: '1-02'
    },
    'ITV': {
        def: 'in-transit visibility',
        src: '1-02'
    },
    'ITW/AA': {
        def: 'integrated tactical warning and attack assessment',
        src: '1-02'
    },
    'IUWG': {
        def: 'inshore undersea warfare group',
        src: 'JP 1-02'
    },
    'IV': {
        def: 'intravenous',
        src: 'JP 1-02'
    },
    'IVR': {
        def: 'initial voice report',
        src: 'JP 1-02'
    },
    'IVSN': {
        def: 'Initial Voice Switched Network',
        src: 'JP 1-02'
    },
    'IW': {
        def: 'irregular warfare',
        src: '1-02'
    },
    'IW-D': {
        def: 'defensive information warfare',
        src: 'JP 1-02'
    },
    'IWC': {
        def: 'information operations warfare commander',
        src: '1-02'
    },
    'IWG': {
        def: 'intelligence working group; interagency working group',
        src: 'JP 1-02'
    },
    'IWSC': {
        def: 'Information Warfare Support Center',
        src: 'JP 1-02'
    },
    'IWW': {
        def: 'inland waterway',
        src: '1-02'
    },
    'IWWS': {
        def: 'inland waterway system',
        src: '1-02'
    },
    'J-1': {
        def: 'manpower and personnel directorate of a joint staff; manpower and personnel staff section',
        src: '1-02'
    },
    'J-2': {
        def: 'intelligence directorate of a joint staff; intelligence staff section',
        src: '1-02'
    },
    'J-2A': {
        def: 'deputy directorate for administration of a joint staff',
        src: 'JP 1-02'
    },
    'J-2E': {
        def: 'joint force exploitation staff element',
        src: '1-02'
    },
    'J-2J': {
        def: 'deputy directorate for support of a joint staff',
        src: 'JP 2-01'
    },
    'J-2M': {
        def: 'deputy directorate for crisis management of a joint staff',
        src: 'JP 2-01'
    },
    'J-2O': {
        def: 'deputy directorate for crisis operations of a joint staff',
        src: 'JP 1-02'
    },
    'J-2P': {
        def: 'deputy directorate for assessment, doctrine, requirements, and capabilities of a joint staff',
        src: 'JP 2-01'
    },
    'J-2T': {
        def: 'Deputy Directorate for Targeting, Joint Staff Intelligence Directorate',
        src: 'JP 1-02'
    },
    'J-2T-1': {
        def: 'joint staff target operations division',
        src: 'JP 2-01'
    },
    'J-2T-2': {
        def: 'Target Plans Division',
        src: 'JP 2-01'
    },
    'J-2X': {
        def: 'joint force counterintelligence and human intelligence staff element',
        src: '1-02'
    },
    'J-3': {
        def: 'operations directorate of a joint staff; operations staff section',
        src: '1-02'
    },
    'J-31': {
        def: 'Joint Force Coordinator (Joint Staff)',
        src: '1-02'
    },
    'J-35': {
        def: 'future operations cell',
        src: '1-02'
    },
    'J-39 DDGO': {
        def: 'Joint Staff, Deputy Director for Global Operations',
        src: '1-02'
    },
    'J-4': {
        def: 'logistics directorate of a joint staff; logistics staff section',
        src: '1-02'
    },
    'J-5': {
        def: 'plans directorate of a joint staff; plans staff section',
        src: '1-02'
    },
    'J-6': {
        def: 'communications system directorate of a joint staff; command, control, communications, and computer systems staff section',
        src: '1-02'
    },
    'J-7': {
        def: 'engineering staff section of a joint staff; Joint Staff Directorate for Joint Force Development; operational plans and interoperability directorate of a joint staff',
        src: '1-02'
    },
    'J-7/JED': {
        def: 'exercises and training directorate of a joint staff',
        src: 'JP 3-32'
    },
    'J-8': {
        def: 'Joint Staff Directorate for Force Structure, Resource, and Assessment; force structure, resource, and assessment directorate of a joint staff',
        src: '1-02'
    },
    'J-9': {
        def: 'civil-military operations directorate of a joint staff; civil-military operations staff section',
        src: '1-02'
    },
    'J-A': {
        def: 'judge advocate directorate of a joint staff',
        src: '1-02'
    },
    'J2-CI': {
        def: 'Joint Counterintelligence Office',
        src: 'JP 1-02'
    },
    'JA': {
        def: 'judge advocate',
        src: 'JP 1-02'
    },
    'JA/ATT': {
        def: 'joint airborne and air transportability training',
        src: '1-02'
    },
    'JAARS': {
        def: 'Joint After-Action Reporting System',
        src: 'JP 1-02'
    },
    'JAAT': {
        def: 'joint air attack team',
        src: 'JP 1-02'
    },
    'JAC': {
        def: 'joint analysis center',
        src: 'JP 1-02'
    },
    'JACC': {
        def: 'joint airspace control center',
        src: 'JP 1-02'
    },
    'JACC/CP': {
        def: 'joint airborne communications center/command post',
        src: 'JP 1-02'
    },
    'JACCC': {
        def: 'joint airlift coordination and control cell',
        src: 'JP 1-02'
    },
    'JACCE': {
        def: 'joint air component coordination element',
        src: '1-02'
    },
    'JACS': {
        def: 'joint automated communication-electronics operating instructions system',
        src: '1-02'
    },
    'JADO': {
        def: 'joint air defense operations',
        src: 'JP 1-02'
    },
    'JADOC': {
        def: 'Joint Air Defense Operations Center (NORAD)',
        src: '1-02'
    },
    'JADOCS': {
        def: 'Joint Automated Deep Operations Coordination System',
        src: '1-02'
    },
    'JAFWIN': {
        def: 'JWICS Air Force weather information network',
        src: 'JP 1-02'
    },
    'JAG': {
        def: 'judge advocate general',
        src: '1-02'
    },
    'JAGIC': {
        def: 'joint air-ground integration center',
        src: '1-02'
    },
    'JAGMAN': {
        def: 'Manual of the Judge Advocate General (US Navy)',
        src: 'JP 1-04'
    },
    'JAI': {
        def: 'joint administrative instruction; joint airdrop inspection',
        src: 'JP 1-02'
    },
    'JAIC': {
        def: 'joint air intelligence center',
        src: 'JP 1-02'
    },
    'JAIEG': {
        def: 'joint atomic information exchange group',
        src: 'JP 1-02'
    },
    'JAMMS': {
        def: 'Joint Asset Movement Management System',
        src: '1-02'
    },
    'JAMPS': {
        def: 'Joint Interoperability of Tactical Command and Control Systems (JINTACCS) automated message preparation system',
        src: 'JP 1-02'
    },
    'JANAP': {
        def: 'Joint Army, Navy, Air Force publication',
        src: 'JP 1-02'
    },
    'JAO': {
        def: 'joint air operations',
        src: 'JP 1-02'
    },
    'JAOC': {
        def: 'joint air operations center',
        src: '1-02'
    },
    'JAOP': {
        def: 'joint air operations plan',
        src: '1-02'
    },
    'JAPO': {
        def: 'joint area petroleum office',
        src: 'JP 1-02'
    },
    'JAR': {
        def: 'joint activity report',
        src: 'JP 1-02'
    },
    'JARCC': {
        def: 'joint air reconnaissance control center',
        src: 'JP 1-02'
    },
    'JARN': {
        def: 'joint air request net',
        src: '1-02'
    },
    'JARS': {
        def: 'joint automated readiness system',
        src: 'JP 1-02'
    },
    'JASC': {
        def: 'joint action steering committee',
        src: 'JP 1-02'
    },
    'JASSM': {
        def: 'joint air-to-surface standoff missile',
        src: '1-02'
    },
    'JAT': {
        def: 'joint acceptance test; joint assessment team',
        src: '1-02'
    },
    'JAT Guide': {
        def: 'Joint Antiterrorism Program Manager\'s Guide',
        src: 'JP 3-07.2'
    },
    'JATACS': {
        def: 'joint advanced tactical cryptological support',
        src: 'JP 1-02'
    },
    'JAWS': {
        def: 'Joint Munitions Effectiveness Manual (JMEM)/air-to-surface weaponeering system',
        src: 'JP 1-02'
    },
    'JBP': {
        def: 'Joint Blood Program',
        src: 'JP 1-02'
    },
    'JBPO': {
        def: 'joint blood program office',
        src: '1-02'
    },
    'JC2WC': {
        def: 'joint command and control warfare center',
        src: 'JP 1-02'
    },
    'JCA': {
        def: 'jamming control authority; joint capability area',
        src: '1-02'
    },
    'JCASO': {
        def: 'Joint Contingency Acquisition Support Office (DLA)',
        src: '1-02'
    },
    'JCASREP': {
        def: 'joint casualty report',
        src: 'JP 1-02'
    },
    'JCAT': {
        def: 'joint crisis action team',
        src: 'JP 1-02'
    },
    'JCC': {
        def: 'joint collaboration cell; joint command center; joint contracting center; joint course catalog; joint cyberspace center',
        src: '1-02'
    },
    'JCCA': {
        def: 'joint combat capability assessment',
        src: '1-02'
    },
    'JCCB': {
        def: 'Joint Configuration Control Board',
        src: 'JP 1-02'
    },
    'JCCC': {
        def: 'joint combat camera center; joint communications control center',
        src: '1-02'
    },
    'JCCP': {
        def: 'joint casualty collection point',
        src: 'JP 1-02'
    },
    'JCCSE': {
        def: 'Joint Continental United States Communications Support Environment',
        src: '1-02'
    },
    'JCE': {
        def: 'Joint Intelligence Virtual Architecture (JIVA) Collaborative Environment',
        src: 'JP 2-01'
    },
    'JCEOI': {
        def: 'joint communications-electronics operating instructions',
        src: '1-02'
    },
    'JCET': {
        def: 'joint combined exchange training; joint combined exercise for training',
        src: 'JP 3-05'
    },
    'JCEWR': {
        def: 'joint coordination of electronic warfare reprogramming',
        src: '1-02'
    },
    'JCEWS': {
        def: 'joint force commander\'s electronic warfare staff',
        src: '1-02'
    },
    'JCGRO': {
        def: 'joint central graves registration office',
        src: 'JP 1-02'
    },
    'JCIDO': {
        def: 'Joint Combat Identification Office',
        src: 'JP 1-02'
    },
    'JCIOC': {
        def: 'joint counterintelligence operations center',
        src: 'JP 1-02'
    },
    'JCISA': {
        def: 'Joint Command Information Systems Activity',
        src: 'JP 6-0'
    },
    'JCISB': {
        def: 'Joint Counterintelligence Support Branch',
        src: 'JP 1-02'
    },
    'JCIU': {
        def: 'joint counterintelligence unit',
        src: '1-02'
    },
    'JCLL': {
        def: 'joint center for lessons learned',
        src: 'JP 1-02'
    },
    'JCMA': {
        def: 'joint communications security monitoring activity',
        src: '1-02'
    },
    'JCMB': {
        def: 'joint collection management board ',
        src: '1-02'
    },
    'JCMC': {
        def: 'joint crisis management capability',
        src: 'JP 1-02'
    },
    'JCMEB': {
        def: 'joint civil-military engineer board',
        src: '1-02'
    },
    'JCMEC': {
        def: 'Joint Captured Materiel Exploitation Center (DIA)',
        src: '1-02'
    },
    'JCMO': {
        def: 'joint communications security management office',
        src: '1-02'
    },
    'JCMOTF': {
        def: 'joint civil-military operations task force',
        src: '1-02'
    },
    'JCMPO': {
        def: 'Joint Cruise Missile Project Office',
        src: 'JP 1-02'
    },
    'JCMS': {
        def: 'Joint Construction Management System',
        src: '1-02'
    },
    'JCMT': {
        def: 'joint collection management tools',
        src: 'JP 1-02'
    },
    'JCN': {
        def: 'joint communications network',
        src: 'JP 1-02'
    },
    'JCRM': {
        def: 'Joint Capabilities Requirements Manager',
        src: '1-02'
    },
    'JCS': {
        def: 'Joint Chiefs of Staff',
        src: '1-02'
    },
    'JCSAN': {
        def: 'Joint Chiefs of Staff Alerting Network',
        src: 'JP 1-02'
    },
    'JCSAR': {
        def: 'joint combat search and rescue',
        src: 'JP 1-02'
    },
    'JCSB': {
        def: 'joint contracting support board',
        src: '1-02'
    },
    'JCSC': {
        def: 'joint communications satellite center',
        src: 'JP 1-02'
    },
    'JCSE': {
        def: 'joint communications support element; Joint Communications Support Element (USTRANSCOM)',
        src: '1-02'
    },
    'JCSM': {
        def: 'Joint Chiefs of Staff memorandum',
        src: 'JP 1-02'
    },
    'JCSP': {
        def: 'joint contracting support plan',
        src: 'JP 1-02'
    },
    'JCSS': {
        def: 'joint communications support squadron',
        src: 'JP 1-02'
    },
    'JCTN': {
        def: 'joint composite track network',
        src: 'JP 1-02'
    },
    'JDA': {
        def: 'joint duty assignment',
        src: 'JP 1-02'
    },
    'JDAAP': {
        def: 'Joint Doctrine Awareness Action Plan',
        src: 'CJCSI 5120.02'
    },
    'JDAL': {
        def: 'Joint Duty Assignment List',
        src: 'JP 1-02'
    },
    'JDAM': {
        def: 'Joint Direct Attack Munition',
        src: 'JP 1-02'
    },
    'JDAMIS': {
        def: 'Joint Duty Assignment Management Information System',
        src: 'JP 1-02'
    },
    'JDAT': {
        def: 'joint deployable analysis team',
        src: '1-02'
    },
    'JDC': {
        def: 'joint deployment community; Joint Doctrine Center',
        src: 'JP 1-02'
    },
    'JDD': {
        def: 'joint doctrine distribution',
        src: '1-02'
    },
    'JDDC': {
        def: 'joint doctrine development community',
        src: '1-02'
    },
    'JDDE': {
        def: 'joint deployment and distribution enterprise',
        src: '1-02'
    },
    'JDDOC': {
        def: 'joint deployment and distribution operations center',
        src: '1-02'
    },
    'JDDT': {
        def: 'joint doctrine development tool',
        src: '1-02'
    },
    'JDEC': {
        def: 'joint document exploitation center',
        src: '1-02'
    },
    'JDEIS': {
        def: 'Joint Doctrine, Education, and Training Electronic Information System',
        src: '1-02'
    },
    'JDIG': {
        def: 'Joint Drug Intelligence Group',
        src: 'JP 1-02'
    },
    'JDIGS': {
        def: 'Joint Digital Information Gathering System',
        src: '1-02'
    },
    'JDISS': {
        def: 'joint deployable intelligence support system',
        src: '1-02'
    },
    'JDN': {
        def: 'joint data network',
        src: '1-02'
    },
    'JDNC': {
        def: 'joint data network operations cell',
        src: '1-02'
    },
    'JDNO': {
        def: 'joint data network operations officer',
        src: '1-02'
    },
    'JDOG': {
        def: 'joint detention operations group',
        src: 'JP 2-01'
    },
    'JDOMS': {
        def: 'Joint Director of Military Support',
        src: '1-02'
    },
    'JDPC': {
        def: 'Joint Doctrine Planning Conference',
        src: '1-02'
    },
    'JDPI': {
        def: 'joint desired point of impact',
        src: '1-02'
    },
    'JDPO': {
        def: 'joint deployment process owner',
        src: '1-02'
    },
    'JDSS': {
        def: 'Joint Decision Support System',
        src: 'JP 1-02'
    },
    'JDSSC': {
        def: 'Joint Data Systems Support Center',
        src: 'JP 1-02'
    },
    'JDTC': {
        def: 'Joint Deployment Training Center',
        src: 'JP 1-02'
    },
    'JE': {
        def: 'joint experimentation',
        src: 'JP 3-13'
    },
    'JEAP': {
        def: 'Joint Electronic Intelligence (ELINT) Analysis Program',
        src: 'JP 1-02'
    },
    'JECC': {
        def: 'Joint Enabling Capabilities Command (USTRANSCOM)',
        src: '1-02'
    },
    'JECE': {
        def: 'Joint Elimination Coordination Element',
        src: '1-02'
    },
    'JECG': {
        def: 'joint exercise control group',
        src: 'JP 1-02'
    },
    'JECPO': {
        def: 'Joint Electronic Commerce Program Office',
        src: 'JP 1-02'
    },
    'JEDD': {
        def: 'Joint Education and Doctrine Division',
        src: '1-02'
    },
    'JEEP': {
        def: 'joint emergency evacuation plan',
        src: 'JP 1-02'
    },
    'JEFF': {
        def: 'Joint Expeditionary Forensic Facility (Army)',
        src: '1-02'
    },
    'JEL': {
        def: 'Joint Electronic Library',
        src: '1-02'
    },
    'JEM': {
        def: 'joint exercise manual',
        src: 'JP 1-02'
    },
    'JEMB': {
        def: 'joint environmental management board',
        src: '1-02'
    },
    'JEMP': {
        def: 'joint exercise management package',
        src: 'JP 1-02'
    },
    'JEMSMO': {
        def: 'joint electromagnetic spectrum management operations',
        src: '1-02'
    },
    'JEMSO': {
        def: 'joint electromagnetic spectrum operations',
        src: '1-02'
    },
    'JENM': {
        def: 'joint enterprise network manager',
        src: '1-02'
    },
    'JEP': {
        def: 'Joint Exercise Program',
        src: '1-02'
    },
    'JEPES': {
        def: 'Joint Engineer Planning and Execution System',
        src: '1-02'
    },
    'JET': {
        def: 'joint expeditionary team; Joint Operation Planning and Execution System editing tool',
        src: '1-02'
    },
    'JEWC': {
        def: 'Joint Electronic Warfare Center',
        src: 'JP 1-02'
    },
    'JEWCS': {
        def: 'Joint Electronic Warfare Core Staff (NATO)',
        src: '1-02'
    },
    'JEZ': {
        def: 'joint engagement zone',
        src: '1-02'
    },
    'JFA': {
        def: 'joint field activity',
        src: 'JP 1-02'
    },
    'JFACC': {
        def: 'joint force air component commander',
        src: '1-02'
    },
    'JFAST': {
        def: 'Joint Flow and Analysis System for Transportation',
        src: '1-02'
    },
    'JFC': {
        def: 'joint force commander',
        src: '1-02'
    },
    'JFCC': {
        def: 'joint functional component command',
        src: 'JP 1-02'
    },
    'JFCC NW': {
        def: 'Joint Functional Component Command for Network Warfare \t\t',
        src: 'JP 3-14'
    },
    'JFCC-GS': {
        def: 'Joint Functional Component Command for Global Strike',
        src: '1-02'
    },
    'JFCC-IMD': {
        def: 'Joint Functional Component Command for Integrated Missile Defense',
        src: '1-02'
    },
    'JFCC-ISR': {
        def: 'Joint Functional Component Command for Intelligence, Surveillance, and Reconnaissance (USSTRATCOM)',
        src: '1-02'
    },
    'JFCC-Space': {
        def: 'Joint Functional Component Command for Space (USSTRATCOM)',
        src: '1-02'
    },
    'JFCH': {
        def: 'joint force chaplain',
        src: '1-02'
    },
    'JFE': {
        def: 'joint fires element',
        src: '1-02'
    },
    'JFHQ': {
        def: 'joint force headquarters',
        src: '1-02'
    },
    'JFHQ-NCR': {
        def: 'Joint Force Headquarters-National Capital Region',
        src: '1-02'
    },
    'JFHQ-State': {
        def: 'joint force headquarters-state',
        src: '1-02'
    },
    'JFIIT': {
        def: 'Joint Fires Integration and Interoperability Team',
        src: 'JP 3-01'
    },
    'JFIP': {
        def: 'Japanese facilities improvement project',
        src: 'JP 1-02'
    },
    'JFLCC': {
        def: 'joint force land component commander',
        src: '1-02'
    },
    'JFMC': {
        def: 'joint fleet mail center',
        src: '1-02'
    },
    'JFMCC': {
        def: 'joint force maritime component commander',
        src: '1-02'
    },
    'JFMO': {
        def: 'joint frequency management office',
        src: '1-02'
    },
    'JFO': {
        def: 'joint field office; joint fires observer',
        src: '1-02'
    },
    'JFP': {
        def: 'joint force package (packaging); joint force provider; Joint Frequency Panel (MCEB)',
        src: '1-02'
    },
    'JFRB': {
        def: 'Joint Foreign Release Board',
        src: 'JP 1-02'
    },
    'JFRG': {
        def: 'joint force requirements generator',
        src: 'JP 1-02'
    },
    'JFRG II': {
        def: 'joint force requirements generator II',
        src: '1-02'
    },
    'JFS': {
        def: 'joint force surgeon',
        src: '1-02'
    },
    'JFSOC': {
        def: 'joint force special operations component'
    },
    'JFSOCC': {
        def: 'joint force special operations component commander',
        src: '1-02'
    },
    'JFTR': {
        def: 'joint Federal travel regulations',
        src: '1-02'
    },
    'JFUB': {
        def: 'joint facilities utilization board',
        src: '1-02'
    },
    'JGWE': {
        def: 'joint global warning enterprise',
        src: '1-02'
    },
    'JHMCS': {
        def: 'joint helmet-mounted cueing system',
        src: '1-02'
    },
    'JHSV': {
        def: 'joint high-speed vessel',
        src: '1-02'
    },
    'JI': {
        def: 'joint inspection',
        src: 'JP 1-02'
    },
    'JIA': {
        def: 'joint individual augmentation; joint individual augmentee',
        src: '1-02'
    },
    'JIACG': {
        def: 'joint interagency coordination group',
        src: '1-02'
    },
    'JIADS': {
        def: 'joint integrated air defense system',
        src: 'JP 1-02'
    },
    'JIATF': {
        def: 'joint interagency task force',
        src: '1-02'
    },
    'JIATF-E': {
        def: 'joint interagency task force - East',
        src: 'JP 1-02'
    },
    'JIATF-S': {
        def: 'Joint Interagency Task Force-South',
        src: '1-02'
    },
    'JIATF-W': {
        def: 'Joint Interagency Task Force-West',
        src: '1-02'
    },
    'JIC': {
        def: 'joint information center',
        src: 'JP 1-02'
    },
    'JICC': {
        def: 'joint information coordination center; joint interface control cell',
        src: '1-02'
    },
    'JICO': {
        def: 'joint interface control officer',
        src: '1-02'
    },
    'JICPAC': {
        def: 'Joint Intelligence Center, Pacific',
        src: 'JP 1-02'
    },
    'JICTRANS': {
        def: 'Joint Intelligence Center for Transportation',
        src: 'JP 1-02'
    },
    'JIDC': {
        def: 'joint intelligence and debriefing center; joint interrogation and debriefing center',
        src: '1-02'
    },
    'JIEDDO': {
        def: 'Joint Improvised Explosive Device Defeat Organization ',
        src: '1-02'
    },
    'JIEE': {
        def: 'Joint Information Exchange Environment',
        src: '1-02'
    },
    'JIEO': {
        def: 'joint interoperability engineering organization',
        src: 'JP 1-02'
    },
    'JIEP': {
        def: 'joint intelligence estimate for planning',
        src: 'JP 1-02'
    },
    'JIES': {
        def: 'joint interoperability evaluation system',
        src: 'JP 1-02'
    },
    'JIG': {
        def: 'joint interrogation group',
        src: 'JP 2-01'
    },
    'JILE': {
        def: 'joint intelligence liaison element',
        src: 'JP 1-02'
    },
    'JIMB': {
        def: 'joint information management board',
        src: '1-02'
    },
    'JIMP': {
        def: 'joint implementation master plan',
        src: 'JP 1-02'
    },
    'JIMPP': {
        def: 'joint industrial mobilization planning process',
        src: '1-02'
    },
    'JIMS': {
        def: 'joint information management system',
        src: 'JP 1-02'
    },
    'JINTACCS': {
        def: 'Joint Interoperability of Tactical Command and Control Systems',
        src: 'JP 1-02'
    },
    'JIO': {
        def: 'joint interrogation operations',
        src: 'JP 2-01'
    },
    'JIOC': {
        def: 'joint information operations center; joint intelligence operations center',
        src: '1-02'
    },
    'JIOC-SOUTH': {
        def: 'Joint Intelligence Operations Center, South',
        src: '1-02'
    },
    'JIOC-TRANS': {
        def: 'Joint Intelligence Operations Center - Transportation',
        src: '1-02'
    },
    'JIOCPAC': {
        def: 'Joint Intelligence Operations Center, Pacific',
        src: '1-02'
    },
    'JIOP': {
        def: 'joint interface operational procedures',
        src: 'JP 1-02'
    },
    'JIOP-MTF': {
        def: 'joint interface operating procedures-message text formats',
        src: 'JP 1-02'
    },
    'JIOWC': {
        def: 'Joint Information Operations Warfare Center',
        src: '1-02'
    },
    'JIPC': {
        def: 'joint imagery production complex',
        src: 'JP 1-02'
    },
    'JIPCL': {
        def: 'joint integrated prioritized collection list',
        src: '1-02'
    },
    'JIPOE': {
        def: 'joint intelligence preparation of the operational environment',
        src: '1-02'
    },
    'JIPTL': {
        def: 'joint integrated prioritized target list',
        src: '1-02'
    },
    'JIS': {
        def: 'joint information system',
        src: '1-02'
    },
    'JISE': {
        def: 'joint intelligence support element',
        src: '1-02'
    },
    'JITC': {
        def: 'joint interoperability test command',
        src: 'JP 1-02'
    },
    'JITF-CT': {
        def: 'Joint Intelligence Task Force for Combating Terrorism',
        src: '1-02'
    },
    'JIVA': {
        def: 'Joint Intelligence Virtual Architecture',
        src: 'JP 2-01'
    },
    'JIVU': {
        def: 'Joint Intelligence Virtual University',
        src: '1-02'
    },
    'JKDDC': {
        def: 'Joint Knowledge Development and Distribution Capability',
        src: '1-02'
    },
    'JKnIFE': {
        def: 'Joint Improvised Explosive Device Defeat Organization Knowledge and Information Fusion Exchange ',
        src: '1-02'
    },
    'JLCC': {
        def: 'joint lighterage control center; joint logistics coordination center',
        src: '1-02'
    },
    'JLE': {
        def: 'joint logistics environment',
        src: '1-02'
    },
    'JLEnt': {
        def: 'joint logistics enterprise',
        src: '1-02'
    },
    'JLLIS': {
        def: 'Joint Lessons Learned Information System',
        src: '1-02'
    },
    'JLLP': {
        def: 'Joint Lessons Learned Program',
        src: '1-02'
    },
    'JLNCHREP': {
        def: 'joint launch report',
        src: 'JP 1-02'
    },
    'JLOA': {
        def: 'joint logistics over-the-shore operation area',
        src: '1-02'
    },
    'JLOC': {
        def: 'joint logistics operations center',
        src: '1-02'
    },
    'JLOTS': {
        def: 'joint logistics over-the-shore',
        src: '1-02'
    },
    'JLRC': {
        def: 'joint logistics readiness center',
        src: 'JP 1-02'
    },
    'JLSB': {
        def: 'joint line of communications security board',
        src: '1-02'
    },
    'JLSE': {
        def: 'joint legal support element',
        src: 'JP 1-04'
    },
    'JM&S': {
        def: 'joint modeling and simulation',
        src: 'JP 1-02'
    },
    'JMAARS': {
        def: 'joint model after-action review system',
        src: 'JP 1-02'
    },
    'JMAC': {
        def: 'Joint Mortuary Affairs Center (Army)',
        src: '1-02'
    },
    'JMAG': {
        def: 'Joint METOC Advisory Group',
        src: 'JP 1-02'
    },
    'JMAO': {
        def: 'joint mortuary affairs office; joint mortuary affairs officer',
        src: '1-02'
    },
    'JMAR': {
        def: 'joint medical asset repository',
        src: 'JP 4-02'
    },
    'JMAS': {
        def: 'joint manpower automation system',
        src: 'JP 1-02'
    },
    'JMAT': {
        def: 'joint medical analysis tool; joint mobility assistance team',
        src: '1-02'
    },
    'JMB': {
        def: 'joint meteorology and oceanography board',
        src: 'JP 3-59'
    },
    'JMC': {
        def: 'joint military command; joint movement center',
        src: '1-02'
    },
    'JMCC': {
        def: 'joint meteorological and oceanographic coordination cell',
        src: '1-02'
    },
    'JMCG': {
        def: 'joint movement control group',
        src: '1-02'
    },
    'JMCIS': {
        def: 'Joint Maritime Command Information System',
        src: '1-02'
    },
    'JMCO': {
        def: 'joint meteorological and oceanographic coordination organization',
        src: '1-02'
    },
    'JMCOMS': {
        def: 'joint maritime communications system',
        src: 'JP 1-02'
    },
    'JMD': {
        def: 'joint manning document',
        src: '1-02'
    },
    'JMeDSAF': {
        def: 'joint medical semi-automated forces',
        src: 'JP 4-02'
    },
    'JMEEL': {
        def: 'joint mission-essential equipment list',
        src: '1-02'
    },
    'JMEM': {
        def: 'Joint Munitions Effectiveness Manual',
        src: '1-02'
    },
    'JMET': {
        def: 'joint mission-essential task',
        src: '1-02'
    },
    'JMETL': {
        def: 'joint mission-essential task list',
        src: '1-02'
    },
    'JMIC': {
        def: 'Joint Military Intelligence College; joint modular intermodal container',
        src: '1-02'
    },
    'JMICS': {
        def: 'Joint Worldwide Intelligence Communications System mobile integrated communications system',
        src: '1-02'
    },
    'JMIE': {
        def: 'joint maritime information element',
        src: 'JP 1-02'
    },
    'JMIP': {
        def: 'joint military intelligence program',
        src: 'JP 1-02'
    },
    'JMISC': {
        def: 'Joint Military Information Support Command',
        src: '1-02'
    },
    'JMISTF': {
        def: 'joint military information support task force',
        src: '1-02'
    },
    'JMITC': {
        def: 'Joint Military Intelligence Training Center',
        src: 'JP 1-02'
    },
    'JMLO': {
        def: 'joint medical logistics officer',
        src: 'JP 4-02'
    },
    'JMMC': {
        def: 'Joint Material Management Center',
        src: 'JP 1-02'
    },
    'JMMT': {
        def: 'joint military mail terminal',
        src: '1-02'
    },
    'JMNA': {
        def: 'joint military net assessment',
        src: 'JP 1-02'
    },
    'JMO': {
        def: 'joint maritime operations; joint meteorological and oceanographic officer; joint munitions office',
        src: '1-02'
    },
    'JMO(AIR)': {
        def: 'joint maritime operations (air)',
        src: 'JP 1-02'
    },
    'JMOC': {
        def: 'joint medical operations center',
        src: '1-02'
    },
    'JMP': {
        def: 'joint manpower program',
        src: 'JP 1-02'
    },
    'JMPA': {
        def: 'joint military postal activity; joint military satellite communications (MILSATCOM) panel administrator',
        src: 'JP 1-02'
    },
    'JMPAB': {
        def: 'Joint Materiel Priorities and Allocation Board',
        src: '1-02'
    },
    'JMPT': {
        def: 'Joint Medical Planning Tool',
        src: '1-02'
    },
    'JMRC': {
        def: 'joint mobile relay center',
        src: 'JP 1-02'
    },
    'JMRO': {
        def: 'Joint Medical Regulating Office',
        src: 'JP 1-02'
    },
    'JMRR': {
        def: 'Joint Monthly Readiness Review',
        src: '1-02'
    },
    'JMSEP': {
        def: 'joint modeling and simulation executive panel',
        src: 'JP 1-02'
    },
    'JMSWG': {
        def: 'Joint Multi-Tactical Digital Information Link (Multi-TADIL) Standards Working Group',
        src: 'JP 1-02'
    },
    'JMT': {
        def: 'joint military training',
        src: 'JP 1-02'
    },
    'JMTCA': {
        def: 'joint munitions transportation coordinating activity',
        src: '1-02'
    },
    'JMTCSS': {
        def: 'Joint Maritime Tactical Communications Switching System',
        src: 'JP 1-02'
    },
    'JMTG': {
        def: 'joint military information support operations task group',
        src: '1-02'
    },
    'JMUA': {
        def: 'Joint Meritorious Unit Award',
        src: 'JP 1-02'
    },
    'JMV': {
        def: 'joint METOC viewer',
        src: 'JP 1-02'
    },
    'JMWG': {
        def: 'joint medical working group',
        src: '1-02'
    },
    'JNCC': {
        def: 'joint network operations control center',
        src: '1-02'
    },
    'JNMS': {
        def: 'joint network management system',
        src: '1-02'
    },
    'JNOCC': {
        def: 'Joint Operation Planning and Execution System (JOPES) Network Operation Control Center',
        src: 'JP 1-02'
    },
    'JNPE': {
        def: 'joint nuclear planning element',
        src: 'JP 1-02'
    },
    'JNSC': {
        def: 'Joint Navigation Warfare Center Navigation Warfare Support Cell',
        src: '1-02'
    },
    'JNWC': {
        def: 'Joint Navigation Warfare Center',
        src: '1-02'
    },
    'JOA': {
        def: 'joint operations area',
        src: '1-02'
    },
    'JOAF': {
        def: 'joint operations area forecast',
        src: '1-02'
    },
    'JOC': {
        def: 'joint operations center; joint oversight committee',
        src: '1-02'
    },
    'JOCC': {
        def: 'joint operations command center',
        src: 'JP 1-02'
    },
    'JOERAD': {
        def: 'joint spectrum center ordnance electomagnetic environmental effects risk assessment database',
        src: '1-02'
    },
    'JOG': {
        def: 'joint operations graphic',
        src: '1-02'
    },
    'JOGS': {
        def: 'joint operation graphics system',
        src: 'JP 1-02'
    },
    'JOPES': {
        def: 'Joint Operation Planning and Execution System',
        src: '1-02'
    },
    'JOPESIR': {
        def: 'Joint Operation Planning and Execution System Incident Reporting System',
        src: 'JP 1-02'
    },
    'JOPESREP': {
        def: 'Joint Operation Planning and Execution System Reporting System',
        src: 'JP 1-02'
    },
    'JOPG': {
        def: 'joint operations planning group',
        src: '1-02'
    },
    'JOPP': {
        def: 'joint operation planning process',
        src: '1-02'
    },
    'JOPPA': {
        def: 'joint operation planning process for air',
        src: '1-02'
    },
    'JOR': {
        def: 'joint operational requirement',
        src: 'JP 1-02'
    },
    'JORD': {
        def: 'joint operational requirements document',
        src: 'JP 1-02'
    },
    'JOSE': {
        def: 'joint operations security support element',
        src: '1-02'
    },
    'JOSG': {
        def: 'joint operational steering group',
        src: 'JP 1-02'
    },
    'JOT&E': {
        def: 'joint operational test and evaluation',
        src: 'JP 1-02'
    },
    'JOTC': {
        def: 'joint operations tasking center',
        src: '1-02'
    },
    'JOTS': {
        def: 'Joint Operational Tactical System',
        src: 'JP 1-02'
    },
    'JP': {
        def: 'joint publication',
        src: '1-02'
    },
    'JP4': {
        def: 'jet propulsion fuel, type 4',
        src: '1-02'
    },
    'JP5': {
        def: 'jet propulsion fuel, type 5',
        src: '1-02'
    },
    'JP8': {
        def: 'jet propulsion fuel, type 8',
        src: '1-02'
    },
    'JPAC': {
        def: 'joint planning augmentation cell; Joint POW/MIA Accounting Command',
        src: 'JP 1-02'
    },
    'JPADS': {
        def: 'joint precision airdrop system',
        src: '1-02'
    },
    'JPAG': {
        def: 'Joint Planning Advisory Group',
        src: '1-02'
    },
    'JPARR': {
        def: 'joint personnel accountability reconciliation and reporting',
        src: '1-02'
    },
    'JPASE': {
        def: 'joint public affairs support element; Joint Public Affairs Support Element (USTRANSCOM)',
        src: '1-02'
    },
    'JPATS': {
        def: 'joint primary aircraft training system',
        src: 'JP 1-02'
    },
    'JPAV': {
        def: 'joint personnel asset visibility',
        src: 'JP 1-02'
    },
    'JPC': {
        def: 'joint planning cell; joint postal cell',
        src: 'JP 1-02'
    },
    'JPD': {
        def: 'joint planning document',
        src: 'JP 1-02'
    },
    'JPEC': {
        def: 'joint planning and execution community',
        src: '1-02'
    },
    'JPED': {
        def: 'joint personal effects depot',
        src: '1-02'
    },
    'JPEG': {
        def: 'Joint Photographic Experts Group',
        src: '1-02'
    },
    'JPERSTAT': {
        def: 'joint personnel status and casualty report',
        src: '1-02'
    },
    'JPG': {
        def: 'joint planning group',
        src: '1-02'
    },
    'JPME': {
        def: 'joint professional military education',
        src: '1-02'
    },
    'JPMRC': {
        def: 'joint patient movement requirements center',
        src: '1-02'
    },
    'JPMT': {
        def: 'joint patient movement team',
        src: 'JP 1-02'
    },
    'JPN': {
        def: 'joint planning network',
        src: 'JP 1-02'
    },
    'JPO': {
        def: 'joint petroleum office; Joint Program Office',
        src: '1-02'
    },
    'JPO-STC': {
        def: 'Joint Program Office for Special Technology Countermeasures',
        src: 'JP 1-02'
    },
    'JPOC': {
        def: 'joint personnel operations center; joint planning orientation course',
        src: '1-02'
    },
    'JPOI': {
        def: 'joint program of instruction',
        src: 'JP 1-02'
    },
    'JPOM': {
        def: 'joint preparation and onward movement',
        src: 'JP 1-02'
    },
    'JPRA': {
        def: 'Joint Personnel Recovery Agency',
        src: '1-02'
    },
    'JPRC': {
        def: 'joint personnel reception center; joint personnel recovery center',
        src: '1-02'
    },
    'JPRSP': {
        def: 'joint personnel recovery support product',
        src: '1-02'
    },
    'JPS': {
        def: 'joint processing system',
        src: 'JP 1-02'
    },
    'JPSE': {
        def: 'Joint Planning Support Element (USTRANSCOM)',
        src: '1-02'
    },
    'JPTTA': {
        def: 'joint personnel training and tracking activity',
        src: '1-02'
    },
    'JQR': {
        def: 'joint qualification requirements',
        src: 'JP 1-02'
    },
    'JQRR': {
        def: 'joint quarterly readiness review',
        src: 'JP 6-0'
    },
    'JRADS': {
        def: 'Joint Resource Assessment Data System',
        src: 'JP 1-02'
    },
    'JRB': {
        def: 'Joint Requirements Oversight Council (JROC) Review Board',
        src: 'JP 1-02'
    },
    'JRC': {
        def: 'joint reconnaissance center',
        src: '1-02'
    },
    'JRCC': {
        def: 'joint reception coordination center',
        src: '1-02'
    },
    'JRERP': {
        def: 'Joint Radiological Emergency Response Plan',
        src: '1-02'
    },
    'JRFL': {
        def: 'joint restricted frequency list',
        src: '1-02'
    },
    'JRG': {
        def: 'joint review group',
        src: 'JP 1-02'
    },
    'JRIC': {
        def: 'joint reserve intelligence center',
        src: '1-02'
    },
    'JRIP': {
        def: 'Joint Reserve Intelligence Program',
        src: '1-02'
    },
    'JRMB': {
        def: 'Joint Requirements and Management Board',
        src: 'JP 1-02'
    },
    'JROC': {
        def: 'Joint Requirements Oversight Council',
        src: '1-02'
    },
    'JRRB': {
        def: 'joint requirements review board',
        src: '1-02'
    },
    'JRS': {
        def: 'joint reporting structure',
        src: 'JP 1-02'
    },
    'JRSC': {
        def: 'jam-resistant secure communications; joint rescue sub-center',
        src: 'JP 1-02'
    },
    'JRSOI': {
        def: 'joint reception, staging, onward movement, and integration',
        src: '1-02'
    },
    'JRTC': {
        def: 'joint readiness training center',
        src: 'JP 1-02'
    },
    'JRX': {
        def: 'joint readiness exercise',
        src: 'JP 1-02'
    },
    'JS': {
        def: 'Joint Staff; the Joint Staff',
        src: '1-02'
    },
    'JSA': {
        def: 'joint security area',
        src: '1-02'
    },
    'JSAC': {
        def: 'joint strike analysis cell; joint strike analysis center',
        src: 'JP 1-02'
    },
    'JSAM': {
        def: 'joint security assistance memorandum; Joint Service Achievement Medal; joint standoff surface attack missile',
        src: 'JP 1-02'
    },
    'JSAN': {
        def: 'Joint Staff automation for the nineties',
        src: 'JP 1-02'
    },
    'JSAP': {
        def: 'Joint Staff action package',
        src: '1-02'
    },
    'JSAS': {
        def: 'joint strike analysis system',
        src: 'JP 1-02'
    },
    'JSC': {
        def: 'joint security coordinator; Joint Spectrum Center',
        src: '1-02'
    },
    'JSCAT': {
        def: 'joint staff crisis action team',
        src: 'JP 1-02'
    },
    'JSCC': {
        def: 'joint security coordination center; joint Services coordination committee',
        src: '1-02'
    },
    'JSCM': {
        def: 'Joint Service Commendation Medal',
        src: '1-02'
    },
    'JSCP': {
        def: 'Joint Strategic Capabilities Plan',
        src: '1-02'
    },
    'JSDS': {
        def: 'Joint Staff doctrine sponsor',
        src: '1-02'
    },
    'JSEC': {
        def: 'joint strategic exploitation center',
        src: 'JP 2-01.2'
    },
    'JSETS': {
        def: 'Joint Search and Rescue Satellite-Aided Tracking Electronic Tracking System',
        src: '1-02'
    },
    'JSF': {
        def: 'joint support force',
        src: '1-02'
    },
    'JSHO': {
        def: 'joint shipboard helicopter operations',
        src: 'JP 3-04'
    },
    'JSIDS': {
        def: 'joint Services imagery digitizing system',
        src: 'JP 1-02'
    },
    'JSIR': {
        def: 'joint spectrum interference resolution',
        src: '1-02'
    },
    'JSISC': {
        def: 'Joint Staff Information Service Center',
        src: 'JP 1-02'
    },
    'JSIT': {
        def: 'Joint Operation Planning and Execution System (JOPES) information trace',
        src: 'JP 3-35'
    },
    'JSIVA': {
        def: 'Joint Staff Integrated Vulnerability Assessment',
        src: '1-02'
    },
    'JSM': {
        def: 'Joint Staff Manual',
        src: 'JP 1-02'
    },
    'JSME': {
        def: 'joint spectrum management element',
        src: '1-02'
    },
    'JSMS': {
        def: 'joint spectrum management system',
        src: 'JP 1-02'
    },
    'JSO': {
        def: 'joint security operations',
        src: '1-02'
    },
    'JSOA': {
        def: 'joint special operations area',
        src: '1-02'
    },
    'JSOAC': {
        def: 'joint special operations air component; joint special operations aviation component',
        src: '1-02'
    },
    'JSOACC': {
        def: 'joint special operations air component commander',
        src: '1-02'
    },
    'JSOC': {
        def: 'joint special operations command',
        src: '1-02'
    },
    'JSOFI': {
        def: 'Joint Special Operations Forces Institute',
        src: 'JP 1-02'
    },
    'JSOTF': {
        def: 'joint special operations task force',
        src: '1-02'
    },
    'JSOU': {
        def: 'Joint Special Operations University',
        src: '1-02'
    },
    'JSOW': {
        def: 'joint stand-off weapon',
        src: 'JP 1-02'
    },
    'JSPA': {
        def: 'joint satellite communications panel administrator',
        src: '1-02'
    },
    'JSPD': {
        def: 'joint strategic planning document',
        src: 'JP 1-02'
    },
    'JSPDSA': {
        def: 'joint strategic planning document supporting analyses',
        src: 'JP 1-02'
    },
    'JSPOC': {
        def: 'Joint Space Operations Center',
        src: '1-02'
    },
    'JSPS': {
        def: 'Joint Strategic Planning System',
        src: '1-02'
    },
    'JSR': {
        def: 'joint strategy review',
        src: '1-02'
    },
    'JSRC': {
        def: 'joint subregional command (NATO)',
        src: 'JP 1-02'
    },
    'JSS': {
        def: 'joint surveillance system',
        src: 'JP 1-02'
    },
    'JSSA': {
        def: 'joint Services survival, evasion, resistance, and escape (SERE) agency',
        src: 'JP 1-02'
    },
    'JSSIS': {
        def: 'joint staff support information system',
        src: 'JP 1-02'
    },
    'JSST': {
        def: 'joint space support team',
        src: 'JP 1-02'
    },
    'JSTAR': {
        def: 'joint system threat assessment report',
        src: 'JP 1-02'
    },
    'JSTARS': {
        def: 'Joint Surveillance Target Attack Radar System',
        src: '1-02'
    },
    'JSTE': {
        def: 'joint system training exercise',
        src: 'JP 1-02'
    },
    'JSTO': {
        def: 'joint space tasking order',
        src: '3-14'
    },
    'JT&E': {
        def: 'joint test and evaluation',
        src: 'JP 1-02'
    },
    'JTA': {
        def: 'joint technical architecture',
        src: '1-02'
    },
    'JTAC': {
        def: 'joint terminal attack controller; Joint Terrorism Analysis Center',
        src: '1-02'
    },
    'JTACE': {
        def: 'joint technical advisory chemical, biological, radiological, and nuclear element',
        src: '1-02'
    },
    'JTADS': {
        def: 'Joint Tactical Air Defense System (Army); Joint Tactical Display System',
        src: 'JP 1-02'
    },
    'JTAGS': {
        def: 'joint tactical ground station (Army); joint tactical ground station (Army and Navy); joint tactical ground system',
        src: 'JP 1-02'
    },
    'JTAIC': {
        def: 'Joint Technical Analysis and Integration Cell (Army)',
        src: '1-02'
    },
    'JTAO': {
        def: 'joint tactical air operations',
        src: 'JP 1-02'
    },
    'JTAR': {
        def: 'joint tactical air strike request',
        src: 'JP 1-02'
    },
    'JTASC': {
        def: 'joint training analysis and simulation center',
        src: 'JP 1-02'
    },
    'JTASG': {
        def: 'Joint Targeting Automation Steering Group',
        src: 'JP 1-02'
    },
    'JTAV-IT': {
        def: 'joint total asset visibility-in theater',
        src: 'JP 1-02'
    },
    'JTB': {
        def: 'Joint Transportation Board',
        src: '1-02'
    },
    'JTC': {
        def: 'joint technical committee; Joint Training Confederation',
        src: 'JP 1-02'
    },
    'JTCB': {
        def: 'joint targeting coordination board',
        src: '1-02'
    },
    'JTCC': {
        def: 'joint transportation coordination cell; joint transportation coordination center; joint transportation corporate information management center',
        src: '1-02'
    },
    'JTCOIC': {
        def: 'Joint Training Counter-Improvised Explosive Device Operations Integration Center',
        src: '1-02'
    },
    'JTD': {
        def: 'joint table of distribution; joint theater distribution',
        src: 'JP 1-02'
    },
    'JTDC': {
        def: 'joint track data coordinator',
        src: 'JP 1-02'
    },
    'JTF': {
        def: 'joint task force',
        src: '1-02'
    },
    'JTF HQ': {
        def: 'joint task force headquarters',
        src: 'JP 1-02'
    },
    'JTF-6': {
        def: 'joint task force-6',
        src: 'JP 1-02'
    },
    'JTF-AK': {
        def: 'Joint Task Force-Alaska',
        src: '1-02'
    },
    'JTF-B': {
        def: 'joint task force-Bravo',
        src: 'JP 1-02'
    },
    'JTF-CM': {
        def: 'joint task force - consequence management',
        src: '1-02'
    },
    'JTF-CS': {
        def: 'Joint Task Force-Civil Support',
        src: 'JP 1-02'
    },
    'JTF-E': {
        def: 'joint task force - elimination',
        src: '1-02'
    },
    'JTF-GNO': {
        def: 'Joint Task Force-Global Network Operations',
        src: '1-02'
    },
    'JTF-GTMO': {
        def: 'Joint Task Force-Guantanamo',
        src: 'JP 2-01'
    },
    'JTF-HD': {
        def: 'Joint Task Force-Homeland Defense',
        src: '1-02'
    },
    'JTF-MAO': {
        def: 'joint task force - mortuary affairs office',
        src: 'JP 4-06'
    },
    'JTF-N': {
        def: 'Joint Task Force-North',
        src: '1-02'
    },
    'JTF-PO': {
        def: 'joint task force-port opening',
        src: '1-02'
    },
    'JTF-State': {
        def: 'joint task force-state',
        src: '1-02'
    },
    'JTFCEM': {
        def: 'joint task force contingency engineering management',
        src: '1-02'
    },
    'JTFP': {
        def: 'Joint Tactical Fusion Program',
        src: 'JP 1-02'
    },
    'JTFS': {
        def: 'joint task force surgeon',
        src: 'JP 4-02'
    },
    'JTIC': {
        def: 'joint transportation intelligence center',
        src: 'JP 1-02'
    },
    'JTIDS': {
        def: 'Joint Tactical Information Distribution System',
        src: 'JP 1-02'
    },
    'JTL': {
        def: 'joint target list',
        src: '1-02'
    },
    'JTLM': {
        def: 'joint theater logistics management',
        src: '1-02'
    },
    'JTLS': {
        def: 'joint theater-level simulation',
        src: 'JP 1-02'
    },
    'JTM': {
        def: 'joint training manual',
        src: 'JP 1-02'
    },
    'JTMD': {
        def: 'joint table of mobilization and distribution; Joint Terminology Master Database',
        src: 'JP 1-02'
    },
    'JTMP': {
        def: 'joint training master plan',
        src: 'JP 1-02'
    },
    'JTMS': {
        def: 'joint theater movement staff; joint training master schedule',
        src: '1-02'
    },
    'JTP': {
        def: 'joint test publication; joint training plan',
        src: '1-02'
    },
    'JTR': {
        def: 'joint travel regulations',
        src: '1-02'
    },
    'JTRB': {
        def: 'joint telecommunication resources board',
        src: 'JP 1-02'
    },
    'JTS': {
        def: 'Joint Targeting School; Joint Training System',
        src: '1-02'
    },
    'JTSCC': {
        def: 'joint theater support contracting command',
        src: '1-02'
    },
    'JTSSCCB': {
        def: 'Joint Tactical Switched Systems Configuration Control Board',
        src: 'JP 1-02'
    },
    'JTSST': {
        def: 'joint training system support team',
        src: 'JP 1-02'
    },
    'JTT': {
        def: 'joint targeting toolbox; joint training team',
        src: 'JP 1-02'
    },
    'JTTF': {
        def: 'joint terrorism task force',
        src: '1-02'
    },
    'JTWG': {
        def: 'joint targeting working group',
        src: '1-02'
    },
    'JUH-MTF': {
        def: 'Joint User Handbook-Message Text Formats',
        src: 'JP 1-02'
    },
    'JUIC': {
        def: 'joint unit identification code',
        src: 'JP 1-02'
    },
    'JUO': {
        def: 'joint urban operation',
        src: '1-02'
    },
    'JUON': {
        def: 'joint urgent operational need',
        src: '1-02'
    },
    'JUSMAG': {
        def: 'Joint United States Military Advisory Group',
        src: 'JP 1-02'
    },
    'JUWTF': {
        def: 'joint unconventional warfare task force',
        src: 'JP 1-02'
    },
    'JV': {
        def: 'Joint Vision',
        src: 'JP 1-02'
    },
    'JV 2020': {
        def: 'Joint Vision 2020',
        src: 'JP 1-02'
    },
    'JVB': {
        def: 'joint visitors bureau',
        src: '1-02'
    },
    'JVIDS': {
        def: 'Joint Visual Integrated Display System',
        src: 'JP 1-02'
    },
    'JVSEAS': {
        def: 'Joint Virtual Security Environment Assessment System',
        src: 'JP 1-02'
    },
    'JWAC': {
        def: 'Joint Warfare Analysis Center',
        src: '1-02'
    },
    'JWARS': {
        def: 'Joint Warfare Analysis and Requirements System',
        src: 'JP 1-02'
    },
    'JWC': {
        def: 'Joint Warfare Center',
        src: 'JP 1-02'
    },
    'JWFC': {
        def: 'Joint Warfighting Center',
        src: 'JP 1-02'
    },
    'JWG': {
        def: 'joint working group',
        src: '1-02'
    },
    'JWICS': {
        def: 'Joint Worldwide Intelligence Communications System',
        src: '1-02'
    },
    'JWID': {
        def: 'joint warrior interoperability demonstration',
        src: 'JP 1-02'
    },
    'k': {
        def: 'thousand',
        src: '1-02'
    },
    'K-Kill': {
        def: 'catastrophic kill',
        src: 'JP 3-15'
    },
    'Ka': {
        def: 'Kurtz-above band',
        src: 'JP 6-0'
    },
    'KAL': {
        def: 'key assets list',
        src: 'JP 1-02'
    },
    'KAPP': {
        def: 'Key Assets Protection Program',
        src: 'JP 1-02'
    },
    'kb': {
        def: 'kilobit',
        src: 'JP 1-02'
    },
    'kbps': {
        def: 'kilobits per second',
        src: 'JP 1-02'
    },
    'KC-135': {
        def: 'Stratotanker\t',
        src: 'JP 1-02'
    },
    'KDE': {
        def: 'key doctrine element',
        src: '1-02'
    },
    'KEK': {
        def: 'key encryption key',
        src: 'JP 1-02'
    },
    'KG': {
        def: 'key generator',
        src: 'JP 1-02'
    },
    'kg': {
        def: 'kilogram',
        src: 'JP 1-02'
    },
    'kHz': {
        def: 'kilohertz',
        src: 'JP 1-02'
    },
    'KLE': {
        def: 'key leader engagement',
        src: '1-02'
    },
    'KLIP': {
        def: 'key doctrine element-linked information package',
        src: '1-02'
    },
    'km': {
        def: 'kilometer',
        src: 'JP 1-02'
    },
    'KMC': {
        def: 'knowledge management center',
        src: 'JP 3-32'
    },
    'KNP': {
        def: 'Korean National Police',
        src: 'JP 1-02'
    },
    'KP': {
        def: 'key pulse',
        src: 'JP 1-02'
    },
    'kph': {
        def: 'kilometers per hour',
        src: '1-02'
    },
    'KPP': {
        def: 'key performance parameter',
        src: '1-02'
    },
    'KQ ID': {
        def: 'tactical location identifier',
        src: '1-02'
    },
    'kt': {
        def: 'kiloton(s); knot (nautical miles per hour)',
        src: 'JP 1-02'
    },
    'Ku': {
        def: 'Kurtz-under band',
        src: 'JP 6-0'
    },
    'kVA': {
        def: 'kilo Volt-Amps',
        src: 'JP 3-34'
    },
    'KVG': {
        def: 'key variable generator',
        src: 'JP 1-02'
    },
    'kW': {
        def: 'kilowatt',
        src: 'JP 1-02'
    },
    'KWOC': {
        def: 'keyword-out-of-context',
        src: 'JP 1-02'
    },
    'L': {
        def: 'length',
        src: 'JP 1-02'
    },
    'l': {
        def: 'search subarea length',
        src: 'JP 1-02'
    },
    'L-EWE': {
        def: 'land-electronic warfare element',
        src: '1-02'
    },
    'L/T': {
        def: 'long ton',
        src: 'JP 1-02'
    },
    'LA': {
        def: 'lead agent; legal adviser; line amplifier; loop key generator (LKG) adapter',
        src: '1-02'
    },
    'LAADS': {
        def: 'low altitude air defense system',
        src: 'JP 1-02'
    },
    'LAAM': {
        def: 'light anti-aircraft missile',
        src: 'JP 1-02'
    },
    'LABS': {
        def: 'laser airborne bathymetry system',
        src: 'JP 1-02'
    },
    'LACV': {
        def: 'lighter, air cushioned vehicle',
        src: 'JP 1-02'
    },
    'LAD': {
        def: 'latest arrival date; launch area denied',
        src: '1-02'
    },
    'LAMPS': {
        def: 'Light Airborne Multipurpose System (helicopter)',
        src: 'JP 1-02'
    },
    'LAN': {
        def: 'local area network',
        src: 'JP 1-02'
    },
    'LANDCENT': {
        def: 'Allied Land Forces Central Europe (NATO)',
        src: 'JP 1-02'
    },
    'LANDSAT': {
        def: 'land satellite',
        src: 'JP 1-02'
    },
    'LANDSOUTH': {
        def: 'Allied Land Forces Southern Europe (NATO)',
        src: 'JP 1-02'
    },
    'LANTIRN': {
        def: 'low-altitude navigation and targeting infrared for night',
        src: 'JP 1-02'
    },
    'LAO': {
        def: 'limited attack option',
        src: 'JP 1-02'
    },
    'LARC': {
        def: 'lighter, amphibious resupply, cargo',
        src: '1-02'
    },
    'LARC-V': {
        def: 'lighter, amphibious resupply, cargo, 5 ton',
        src: '1-02'
    },
    'LARS': {
        def: 'lightweight airborne recovery system',
        src: 'JP 1-02'
    },
    'LASH': {
        def: 'lighter aboard ship',
        src: 'JP 1-02'
    },
    'LAT': {
        def: 'latitude',
        src: 'JP 1-02'
    },
    'LAV': {
        def: 'light armored vehicle',
        src: 'JP 1-02'
    },
    'lb': {
        def: 'pound',
        src: '1-02'
    },
    'LBR': {
        def: 'Laser Beam Rider\t',
        src: 'JP 1-02'
    },
    'lbs.': {
        def: 'pounds',
        src: '1-02'
    },
    'LC': {
        def: 'lake current; legal counsel',
        src: 'JP 1-02'
    },
    'LCAC': {
        def: 'landing craft, air cushion',
        src: '1-02'
    },
    'LCADS': {
        def: 'low-cost aerial delivery system',
        src: '1-02'
    },
    'LCAP': {
        def: 'low combat air patrol',
        src: 'JP 1-02'
    },
    'LCB': {
        def: 'line of constant bearing',
        src: 'JP 1-02'
    },
    'LCC': {
        def: 'amphibious command ship; land component commander; launch control center; lighterage control center; link communications circuit; logistics component command',
        src: '1-02'
    },
    'LCCS': {
        def: 'landing craft control ship',
        src: 'JP 1-02'
    },
    'LCE': {
        def: 'logistics capability estimator; logistics combat element (USMC)',
        src: '1-02'
    },
    'LCES': {
        def: 'line conditioning equipment scanner',
        src: 'JP 1-02'
    },
    'LCM': {
        def: 'landing craft, mechanized; letter-class mail; life-cycle management',
        src: '1-02'
    },
    'LCMC': {
        def: 'life cycle management command',
        src: 'JP 4-10'
    },
    'LCO': {
        def: 'landing craft air cushion control officer; lighterage control officer',
        src: '1-02'
    },
    'LCP': {
        def: 'lighterage control point',
        src: 'JP 1-02'
    },
    'LCPL': {
        def: 'landing craft, personnel, light',
        src: '1-02'
    },
    'LCS': {
        def: 'landing craft air cushion control ship',
        src: '1-02'
    },
    'LCSR': {
        def: 'life cycle systems readiness',
        src: 'JP 4-0'
    },
    'LCU': {
        def: 'landing craft, utility; launch correlation unit',
        src: '1-02'
    },
    'LCVP': {
        def: 'landing craft, vehicle, personnel',
        src: 'JP 1-02'
    },
    'LD': {
        def: 'line of departure',
        src: 'JP 1-02'
    },
    'LDA': {
        def: 'limited depository account',
        src: '1-02'
    },
    'LDF': {
        def: 'lightweight digital facsimile',
        src: 'JP 1-02'
    },
    'LDI': {
        def: 'line driver interface',
        src: 'JP 1-02'
    },
    'LDO': {
        def: 'laser designator operator',
        src: 'JP 1-02'
    },
    'LDR': {
        def: 'leader; low data rate',
        src: 'JP 1-02'
    },
    'LE': {
        def: 'law enforcement; low-order explosives',
        src: '1-02'
    },
    'LEA': {
        def: 'law enforcement agency',
        src: '1-02'
    },
    'LEAP': {
        def: 'Light ExoAtmospheric Projectile',
        src: 'JP 1-02'
    },
    'LEASAT': {
        def: 'leased satellite',
        src: 'JP 1-02'
    },
    'LEAU': {
        def: 'Law Enforcement Assistance Unit (FAA)',
        src: 'JP 1-02'
    },
    'LECIC': {
        def: 'Law Enforcement and Counterintelligence Center (DOD)',
        src: 'JP 1-02'
    },
    'LED': {
        def: 'law enforcement desk; light emitting diode',
        src: 'JP 1-02'
    },
    'LEDET': {
        def: 'law enforcement detachment (USCG)',
        src: '1-02'
    },
    'LEGAT': {
        def: 'legal attaché',
        src: 'JP 3-07.4'
    },
    'LEIP': {
        def: 'Law Enforcement Intelligence Program (USCG)',
        src: '1-02'
    },
    'LEMP': {
        def: 'low-altitude electromagnetic pulse',
        src: '1-02'
    },
    'LEO': {
        def: 'law enforcement operations; low Earth orbit',
        src: '1-02'
    },
    'LEP': {
        def: 'laser eye protection; law enforcement professional; linear error probable',
        src: '1-02'
    },
    'LERSM': {
        def: 'lower echelon reporting and surveillance module',
        src: 'JP 4-02'
    },
    'LERTCON': {
        def: 'alert condition',
        src: 'JP 1-02'
    },
    'LES': {
        def: 'law enforcement sensitive; leave and earnings statement; Lincoln Laboratories Experimental Satellite',
        src: 'JP 1-02'
    },
    'LESO': {
        def: 'Law Enforcement Support Office',
        src: 'JP 3-07.4'
    },
    'LET': {
        def: 'light equipment transport',
        src: 'JP 1-02'
    },
    'LF': {
        def: 'landing force; low frequency',
        src: '1-02'
    },
    'LFA': {
        def: 'lead federal agency',
        src: '1-02'
    },
    'LFOC': {
        def: 'landing force operations center',
        src: '1-02'
    },
    'LFORM': {
        def: 'landing force operational reserve material',
        src: 'JP 1-02'
    },
    'LFSP': {
        def: 'landing force support party',
        src: '1-02'
    },
    'LfV': {
        def: 'Landesamt für Verfassungsschutz (regional authority for constitutional protection)',
        src: 'JP 1-02'
    },
    'LG': {
        def: 'deputy chief of staff for logistics',
        src: 'JP 1-02'
    },
    'LGB': {
        def: 'laser-guided bomb',
        src: 'JP 1-02'
    },
    'LGM': {
        def: 'laser-guided missile; loop group multiplexer',
        src: 'JP 1-02'
    },
    'LGM-30': {
        def: 'Minuteman',
        src: 'JP 1-02'
    },
    'LGW': {
        def: 'laser-guided weapon',
        src: 'JP 1-02'
    },
    'LHA': {
        def: 'amphibious assault ship (general purpose)',
        src: '1-02'
    },
    'LHD': {
        def: 'amphibious assault ship (multipurpose)',
        src: '1-02'
    },
    'LHT': {
        def: 'line-haul tractor',
        src: 'JP 1-02'
    },
    'LIDAR': {
        def: 'light detection and ranging',
        src: 'JP 2-0'
    },
    'LIF': {
        def: 'light interference filter',
        src: 'JP 1-02'
    },
    'LIMDIS': {
        def: 'limited distribution',
        src: 'JP 1-02'
    },
    'LIMFAC': {
        def: 'limiting factor',
        src: 'JP 1-02'
    },
    'LIPS': {
        def: 'Logistics Information Processing System',
        src: '1-02'
    },
    'LIS': {
        def: 'logistics information system',
        src: 'JP 1-02'
    },
    'LIWA': {
        def: 'land information warfare activity',
        src: 'JP 1-02'
    },
    'LKG': {
        def: 'loop key generator',
        src: 'JP 1-02'
    },
    'LKP': {
        def: 'last known position',
        src: 'JP 1-02'
    },
    'LL': {
        def: 'lessons learned',
        src: '1-02'
    },
    'LLLGB': {
        def: 'low-level laser-guided bomb',
        src: 'JP 1-02'
    },
    'LLLTV': {
        def: 'low-light level television',
        src: 'JP 1-02'
    },
    'LLSO': {
        def: 'low-level source operation',
        src: 'JP 1-02'
    },
    'LLTR': {
        def: 'low-level transit route',
        src: 'JP 1-02'
    },
    'LM': {
        def: 'loop modem',
        src: 'JP 1-02'
    },
    'LMARS': {
        def: 'Logistics Metrics Analysis Reporting System',
        src: '1-02'
    },
    'LMAV': {
        def: 'laser MAVERICK',
        src: 'JP 1-02'
    },
    'LMF': {
        def: 'language media format',
        src: 'JP 1-02'
    },
    'LMSR': {
        def: 'large, medium-speed roll-on/roll-off',
        src: '1-02'
    },
    'LN': {
        def: 'lead nation; local national',
        src: '1-02'
    },
    'LNA': {
        def: 'low voice amplifier',
        src: 'JP 1-02'
    },
    'LNI': {
        def: 'Library of National Intelligence',
        src: '1-02'
    },
    'LNO': {
        def: 'liaison officer',
        src: '1-02'
    },
    'LO': {
        def: 'low observable',
        src: 'JP 3-09'
    },
    'LO/LO': {
        def: 'lift-on/lift-off',
        src: '1-02'
    },
    'LO/RO': {
        def: 'lift-on/roll-off',
        src: '1-02'
    },
    'LOA': {
        def: 'Lead Operational Authority; letter of assist; letter of authorization; letter of offer and acceptance; lodgment operational area; logistics over-the-shore operation area',
        src: '1-02'
    },
    'LOAC': {
        def: 'law of armed conflict',
        src: '1-02'
    },
    'LOAL': {
        def: 'lock-on after launch',
        src: 'JP 1-02'
    },
    'LOBL': {
        def: 'lock-on before launch',
        src: 'JP 1-02'
    },
    'LOC': {
        def: 'line of communications; logistics operations center',
        src: '1-02'
    },
    'LOC ACC': {
        def: 'location accuracy',
        src: 'JP 1-02'
    },
    'LOCAP': {
        def: 'low combat air patrol',
        src: 'JP 1-02'
    },
    'LOCE': {
        def: 'Linked Operational Intelligence Centers Europe; Linked Operations-Intelligence Centers Europe',
        src: 'JP 1-02'
    },
    'LOD': {
        def: 'line of departure',
        src: '1-02'
    },
    'LOE': {
        def: 'letter of evaluation; line of effort',
        src: '1-02'
    },
    'LOG': {
        def: 'logistics',
        src: 'JP 1-02'
    },
    'LOGAIR': {
        def: 'logistics aircraft',
        src: 'JP 1-02'
    },
    'LOGAIS': {
        def: 'logistics automated information system',
        src: 'JP 1-02'
    },
    'LOGCAP': {
        def: 'logistics civil augmentation program (Army)',
        src: '1-02'
    },
    'LOGCAT': {
        def: 'logistics capability assessment tool',
        src: 'JP 1-02'
    },
    'LOGDET': {
        def: 'logistics detail',
        src: 'JP 1-02'
    },
    'LOGEX': {
        def: 'logistics exercise',
        src: 'JP 1-02'
    },
    'LOGFAC': {
        def: 'Logistics Feasibility Assessment Capability',
        src: 'JP 1-02'
    },
    'LOGFOR': {
        def: 'logistics force packaging system',
        src: 'JP 1-02'
    },
    'LOGMARS': {
        def: 'logistics applications of automated marking and reading symbols',
        src: 'JP 1-02'
    },
    'LOGMOD': {
        def: 'logistics module',
        src: 'JP 1-02'
    },
    'LOGPLAN': {
        def: 'logistics planning system',
        src: 'JP 1-02'
    },
    'LOGSAFE': {
        def: 'logistic sustainment analysis and feasibility estimator',
        src: 'JP 1-02'
    },
    'LOI': {
        def: 'letter of instruction; loss of input',
        src: '1-02'
    },
    'LOMEZ': {
        def: 'low-altitude missile engagement zone',
        src: '1-02'
    },
    'LONG': {
        def: 'longitude',
        src: 'JP 1-02'
    },
    'LOO': {
        def: 'line of operation',
        src: '1-02'
    },
    'LOP': {
        def: 'line of position',
        src: 'JP 1-02'
    },
    'LORAN': {
        def: 'long-range aid to navigation',
        src: 'JP 1-02'
    },
    'LOROP': {
        def: 'long range oblique photography',
        src: 'JP 1-02'
    },
    'LOS': {
        def: 'line of sight',
        src: '1-02'
    },
    'LOTS': {
        def: 'logistics over-the-shore',
        src: '1-02'
    },
    'LOX': {
        def: 'liquid oxygen',
        src: 'JP 4-02'
    },
    'LP': {
        def: 'listening post',
        src: 'JP 1-02'
    },
    'LPD': {
        def: 'amphibious transport dock; low probability of detection',
        src: '1-02'
    },
    'LPH': {
        def: 'amphibious assault ship, landing platform helicopter',
        src: 'JP 1-02'
    },
    'LPI': {
        def: 'low probability of intercept',
        src: '1-02'
    },
    'LPSB': {
        def: 'logistics procurement support board',
        src: 'JP 1-02'
    },
    'LPU': {
        def: 'line printer unit',
        src: 'JP 1-02'
    },
    'LPV': {
        def: 'laser-protective visor',
        src: 'JP 1-02'
    },
    'LRC': {
        def: 'logistics readiness center',
        src: '1-02'
    },
    'LRD': {
        def: 'laser range finder-detector',
        src: 'JP 1-02'
    },
    'LRF': {
        def: 'laser range finder'
    },
    'LRF/D': {
        def: 'laser range finder/detector',
        src: 'JP 1-02'
    },
    'LRG': {
        def: 'long-range aircraft',
        src: 'JP 1-02'
    },
    'LRM': {
        def: 'low rate multiplexer',
        src: 'JP 1-02'
    },
    'LRN': {
        def: 'Laboratory Response Network (DHHS)',
        src: '1-02'
    },
    'LRO': {
        def: 'lighterage repair officer',
        src: '1-02'
    },
    'LRP': {
        def: 'load and roll pallet',
        src: '1-02'
    },
    'LRRP': {
        def: 'long range reconnaissance patrol',
        src: 'JP 1-02'
    },
    'LRS': {
        def: 'launch and recovery site',
        src: 'JP 1-02'
    },
    'LRST': {
        def: 'long-range surveillance team',
        src: '1-02'
    },
    'LRSU': {
        def: 'long-range surveillance unit',
        src: 'JP 1-02'
    },
    'LRT': {
        def: 'logistics response time',
        src: '1-02'
    },
    'LSA': {
        def: 'logistic support analysis; logistics supportability analysis',
        src: '1-02'
    },
    'LSB': {
        def: 'landing support battalion; lower sideband',
        src: 'JP 1-02'
    },
    'LSC': {
        def: 'lead Service for contracting',
        src: '1-02'
    },
    'LSCC': {
        def: 'lead Service for contracting coordination',
        src: '1-02'
    },
    'LSCDM': {
        def: 'low speed cable driver modem',
        src: 'JP 1-02'
    },
    'LSD': {
        def: 'dock landing ship; least significant digit',
        src: '1-02'
    },
    'LSE': {
        def: 'landing signalman enlisted; logistic support element',
        src: '1-02'
    },
    'LSO': {
        def: 'landing safety officer; landing signals officer',
        src: '1-02'
    },
    'LSPR': {
        def: 'low speed pulse restorer',
        src: 'JP 1-02'
    },
    'LSS': {
        def: 'laser spot search; local sensor subsystem; logistics support system',
        src: '1-02'
    },
    'LST': {
        def: 'laser spot tracker; tank landing ship',
        src: '1-02'
    },
    'LSU': {
        def: 'logistics civil augmentation program support unit',
        src: 'JP 4-10'
    },
    'LSV': {
        def: 'logistics support vessel',
        src: '1-02'
    },
    'LT': {
        def: 'large tug; local terminal; long ton',
        src: '1-02'
    },
    'LTD': {
        def: 'laser target designator',
        src: 'JP 1-02'
    },
    'LTD/R': {
        def: 'laser target designator/ranger',
        src: 'JP 1-02'
    },
    'LTF': {
        def: 'logistics task force',
        src: '1-02'
    },
    'LTG': {
        def: 'local timing generator',
        src: 'JP 1-02'
    },
    'LTIOV': {
        def: 'latest time information is of value',
        src: '1-02'
    },
    'LTL': {
        def: 'laser-to-target line',
        src: '1-02'
    },
    'LTON': {
        def: 'long ton',
        src: 'JP 1-02'
    },
    'LTS': {
        def: 'low-altitude navigation and targeting infrared for night (LANTIRN) targeting system',
        src: 'JP 1-02'
    },
    'LTT': {
        def: 'loss to theater',
        src: 'JP 1-02'
    },
    'LTU': {
        def: 'line termination unit',
        src: 'JP 1-02'
    },
    'LUT': {
        def: 'local user terminal',
        src: 'JP 1-02'
    },
    'LVS': {
        def: 'Logistics Vehicle System (USMC)',
        src: 'JP 1-02'
    },
    'LW': {
        def: 'leeway',
        src: 'JP 1-02'
    },
    'LWR': {
        def: 'Lutheran World Relief',
        src: 'JP 1-02'
    },
    'LZ': {
        def: 'landing zone',
        src: '1-02'
    },
    'LZCO': {
        def: 'landing zone control officer',
        src: 'JP 1-02'
    },
    'M': {
        def: 'million',
        src: '1-02'
    },
    'M&E': {
        def: 'monitoring and evaluation',
        src: '1-02'
    },
    'M&S': {
        def: 'modeling and simulation',
        src: 'JP 1-02'
    },
    'M-DARC': {
        def: 'military direct access radar channel',
        src: 'JP 1-02'
    },
    'M-Kill': {
        def: 'mobility kill',
        src: 'JP 3-15'
    },
    'M/ATMP': {
        def: 'Missiles/Air Target Materials Program',
        src: 'JP 1-02'
    },
    'M/CM/S': {
        def: 'mobility, countermobility, and/or survivability',
        src: 'JP 1-02'
    },
    'M88A1': {
        def: 'recovery vehicle',
        src: 'JP 1-02'
    },
    'mA': {
        def: 'milliampere(s)',
        src: '1-02'
    },
    'MA': {
        def: 'master; medical attendant; military action; mortuary affairs',
        src: '1-02'
    },
    'MAAG': {
        def: 'military assistance advisory group',
        src: 'JP 1-02'
    },
    'MAAP': {
        def: 'master air attack plan',
        src: '1-02'
    },
    'MAC': {
        def: 'mobility assault company; Mortuary Affairs Center',
        src: '1-02'
    },
    'MACB': {
        def: 'multinational acquisition and contracting board',
        src: '1-02'
    },
    'MACCS': {
        def: 'Marine air command and control system',
        src: '1-02'
    },
    'MACG': {
        def: 'Marine air control group',
        src: 'JP 1-02'
    },
    'MACOM': {
        def: 'major command (Army)',
        src: 'JP 1-02'
    },
    'MACP': {
        def: 'mortuary affairs collection point',
        src: 'JP 1-02'
    },
    'MACRMS': {
        def: 'mortuary affairs contaminated remains mitigation site',
        src: '1-02'
    },
    'MACS': {
        def: 'Marine air control squadron',
        src: '1-02'
    },
    'MACSAT': {
        def: 'multiple access commercial satellite',
        src: 'JP 1-02'
    },
    'MAD': {
        def: 'Militärischer Abschirmdienst (military protection service); military air distress',
        src: 'JP 1-02'
    },
    'MADCP': {
        def: 'mortuary affairs decontamination collection point',
        src: 'JP 1-02'
    },
    'MADS': {
        def: 'military information support operations automated data system',
        src: '1-02'
    },
    'MAEB': {
        def: 'mean area of effectiveness for blast',
        src: 'JP 1-02'
    },
    'MAEF': {
        def: 'mean area of effectiveness for fragments',
        src: 'JP 1-02'
    },
    'MAF': {
        def: 'mobility air forces',
        src: '1-02'
    },
    'MAFC': {
        def: 'Marine air-ground task force (MAGTF) all-source fusion center',
        src: 'JP 1-02'
    },
    'MAG': {
        def: 'Marine aircraft group; maritime assessment group; military assignment group',
        src: '1-02'
    },
    'MAGTF': {
        def: 'Marine air-ground task force',
        src: '1-02'
    },
    'MAGTFACE': {
        def: 'Marine air-ground task force aviation combat element',
        src: 'JP 1-02'
    },
    'MAJCOM': {
        def: 'major command (USAF)',
        src: 'JP 1-02'
    },
    'MANFOR': {
        def: 'manpower force packaging system',
        src: 'JP 1-02'
    },
    'MANPADS': {
        def: 'man-portable air defense system',
        src: '1-02'
    },
    'MANPER': {
        def: 'manpower and personnel module',
        src: 'JP 1-02'
    },
    'MAOC-N': {
        def: 'Maritime Analysis and Operations Center-Narcotics',
        src: '1-02'
    },
    'MAP': {
        def: 'Military Assistance Program; missed approach point; missed approach procedure',
        src: 'JP 1-02'
    },
    'MAR': {
        def: 'METOC assistance request',
        src: 'JP 1-02'
    },
    'MARAD': {
        def: 'Maritime Administration',
        src: '1-02'
    },
    'MARAD RRF': {
        def: 'Maritime Administration Ready Reserve Force',
        src: '1-02'
    },
    'MARCORLOGCOM': {
        def: 'Marine Corps Logistics Command',
        src: '1-02'
    },
    'MARCORMATCOM': {
        def: 'Marine Corps Materiel Command',
        src: 'JP 1-02'
    },
    'MARCORSYSCOM': {
        def: 'Marine Corps Systems Command',
        src: 'JP 4-10'
    },
    'MARDIV': {
        def: 'Marine division',
        src: 'JP 1-02'
    },
    'MARFOR': {
        def: 'Marine Corps forces',
        src: '1-02'
    },
    'MARFOREUR': {
        def: 'Marine Corps Forces, Europe',
        src: 'JP 1-02'
    },
    'MARFORLANT': {
        def: 'Marine Forces, Atlantic',
        src: 'JP 1-02'
    },
    'MARFORNORTH': {
        def: 'Marine Corps Forces, North',
        src: '1-02'
    },
    'MARFORPAC': {
        def: 'Marine Forces, Pacific',
        src: 'JP 1-02'
    },
    'MARFORSOUTH': {
        def: 'Marine Corps Forces, South',
        src: '1-02'
    },
    'MARFORSTRAT': {
        def: 'United States Marine Corps Forces, United States Strategic Command',
        src: '1-02'
    },
    'MARINCEN': {
        def: 'Maritime Intelligence Center',
        src: '1-02'
    },
    'Marine TACC': {
        def: 'Marine Corps tactical air command center',
        src: '1-02'
    },
    'MARLE': {
        def: 'Marine liaison element',
        src: '1-02'
    },
    'MARLO': {
        def: 'Marine liaison officer',
        src: 'JP 1-02'
    },
    'MARO': {
        def: 'mass atrocity response operations',
        src: '1-02'
    },
    'MAROP': {
        def: 'marine operators',
        src: 'JP 1-02'
    },
    'MARPOL': {
        def: 'International Convention for the Prevention of Pollution from Ships',
        src: 'JP 1-02'
    },
    'MARS': {
        def: 'Military Auxiliary Radio System',
        src: '1-02'
    },
    'MARSA': {
        def: 'military assumes responsibility for separation of aircraft',
        src: 'JP 1-02'
    },
    'MARSOC': {
        def: 'United States Marine Corps Forces, Special Operations Command',
        src: '1-02'
    },
    'MARSOF': {
        def: 'Marine Corps special operations forces',
        src: '1-02'
    },
    'MART': {
        def: 'mobile Automatic Digital Network (AUTODIN) remote terminal',
        src: 'JP 1-02'
    },
    'MARTS': {
        def: 'Mortuary Affairs Reporting and Tracking System',
        src: '1-02'
    },
    'MAS': {
        def: 'maritime air support; military information support operations automated system',
        src: '1-02'
    },
    'MASCAL': {
        def: 'mass casualty',
        src: '1-02'
    },
    'MASF': {
        def: 'mobile aeromedical staging facility',
        src: '1-02'
    },
    'MASH': {
        def: 'mobile Army surgical hospital',
        src: 'JP 1-02'
    },
    'MASINT': {
        def: 'measurement and signature intelligence',
        src: '1-02'
    },
    'MASLO': {
        def: 'measurement and signature intelligence liaison officer',
        src: '1-02'
    },
    'MAST': {
        def: 'military assistance to safety and traffic; mobile ashore support terminal',
        src: 'JP 1-02'
    },
    'MAT': {
        def: 'medical analysis tool',
        src: '1-02'
    },
    'MATCALS': {
        def: 'Marine air traffic control and landing system',
        src: 'JP 1-02'
    },
    'MATCS': {
        def: 'Marine air traffic control squadron',
        src: 'JP 3-59'
    },
    'MAW': {
        def: 'Marine aircraft wing',
        src: 'JP 1-02'
    },
    'MAX': {
        def: 'maximum',
        src: 'JP 1-02'
    },
    'MAXORD': {
        def: 'maximum ordinate'
    },
    'MB': {
        def: 'medium boat; megabyte; military information support operations battalion',
        src: '1-02'
    },
    'MBBLs': {
        def: 'thousands of barrels',
        src: 'JP 1-02'
    },
    'MBCDM': {
        def: 'medical biological chemical defense materiel',
        src: 'JP 4-02'
    },
    'MBI': {
        def: 'major budget issue',
        src: 'JP 1-02'
    },
    'Mbps': {
        def: 'megabytes per second',
        src: 'JP 1-02'
    },
    'Mbs': {
        def: 'megabits per second',
        src: 'JP 1-02'
    },
    'MC': {
        def: 'Military Committee (NATO); military community; mission-critical',
        src: '1-02'
    },
    'MC-130': {
        def: 'Combat Talon (I and II)\t',
        src: 'JP 1-02'
    },
    'MC/FI': {
        def: 'mass casualty/fatality incident',
        src: '1-02'
    },
    'MCA': {
        def: 'mail control activity; maximum calling area; military civic action; mission concept approval; movement control agency',
        src: '1-02'
    },
    'MCAG': {
        def: 'maritime civil affairs group',
        src: 'JP 3-57'
    },
    'MCAP': {
        def: 'maximum calling area precedence',
        src: 'JP 1-02'
    },
    'MCAS': {
        def: 'Marine Corps air station',
        src: 'JP 1-02'
    },
    'MCAST': {
        def: 'maritime civil affairs and security training',
        src: '1-02'
    },
    'MCAT': {
        def: 'maritime civil affairs team',
        src: '1-02'
    },
    'MCB': {
        def: 'movement control battalion',
        src: '1-02'
    },
    'MCBAT': {
        def: 'medical chemical biological advisory team',
        src: 'JP 1-02'
    },
    'MCC': {
        def: 'Marine component commander; maritime component commander; master control center; military cooperation committee; military coordinating committee; military counterintelligence collections; mission control center; mobility control center; movement control center',
        src: '1-02'
    },
    'MCCC': {
        def: 'mobile consolidated command center',
        src: 'JP 1-02'
    },
    'MCCDC': {
        def: 'Marine Corps Combat Development Command',
        src: 'JP 1-02'
    },
    'MCCISWG': {
        def: 'military command, control, and information systems working group',
        src: 'JP 1-02'
    },
    'MCD': {
        def: 'medical crew director',
        src: 'JP 1-02'
    },
    'MCDA': {
        def: 'military and civil defense assets (UN)',
        src: 'JP 1-02'
    },
    'MCDP': {
        def: 'Marine Corps doctrine publication',
        src: '1-02'
    },
    'MCDS': {
        def: 'modular cargo delivery system',
        src: 'JP 1-02'
    },
    'MCEB': {
        def: 'Military Communications-Electronics Board',
        src: '1-02'
    },
    'MCEWG': {
        def: 'Military Communications-Electronics Working Group',
        src: 'JP 1-02'
    },
    'MCI': {
        def: 'multinational communications integration',
        src: '1-02'
    },
    'MCIA': {
        def: 'Marine Corps Intelligence Activity',
        src: '1-02'
    },
    'MCIO': {
        def: 'military criminal investigative organization',
        src: '1-02'
    },
    'MCIOC': {
        def: 'Marine Corps Information Operations Center',
        src: '1-02'
    },
    'MCIP': {
        def: 'Marine Corps interim publication; military command inspection program; military customs inspection program',
        src: '1-02'
    },
    'MCJSB': {
        def: 'Military Committee Joint Standardization Board',
        src: '1-02'
    },
    'MCM': {
        def: 'Manual for Courts-Martial; military classification manual; mine countermeasures',
        src: '1-02'
    },
    'MCMC': {
        def: 'mine countermeasures commander',
        src: '1-02'
    },
    'MCMG': {
        def: 'Military Committee Meteorological Group (NATO)',
        src: 'JP 1-02'
    },
    'MCMO': {
        def: 'medical civil-military operations',
        src: '1-02'
    },
    'MCMOPS': {
        def: 'mine countermeasures operations',
        src: '1-02'
    },
    'MCMREP': {
        def: 'mine countermeasure report',
        src: 'JP 3-15'
    },
    'MCMRON': {
        def: 'mine countermeasures squadron',
        src: '1-02'
    },
    'MCO': {
        def: 'major combat operation; Mapping Customer Operations (Defense Logistics Agency); Marine Corps order',
        src: '1-02'
    },
    'MCOO': {
        def: 'modified combined obstacle overlay',
        src: '1-02'
    },
    'MCRP': {
        def: 'Marine Corps reference publication',
        src: '1-02'
    },
    'MCS': {
        def: 'maneuver control system; Military Capabilities Study; mine countermeasures ship; modular causeway system',
        src: '1-02'
    },
    'MCSB': {
        def: 'Marine Cryptologic Support Battalion ',
        src: '1-02'
    },
    'MCSF': {
        def: 'mobile cryptologic support facility',
        src: 'JP 1-02'
    },
    'MCSFB': {
        def: 'Marine Corps security force battalion',
        src: 'JP 3-68'
    },
    'MCSFR': {
        def: 'Marine Corps security force regiment',
        src: '1-02'
    },
    'MCT': {
        def: 'movement control team',
        src: '1-02'
    },
    'MCTC': {
        def: 'Midwest Counterdrug Training Center',
        src: 'JP 3-07.4'
    },
    'MCTFT': {
        def: 'Multijurisdictional Counterdrug Task Force Training',
        src: 'JP 3-07.4'
    },
    'MCTOG': {
        def: 'Marine Corps Tactics and Operations Group',
        src: '1-02'
    },
    'MCU': {
        def: 'maintenance communications unit',
        src: 'JP 1-02'
    },
    'MCW': {
        def: 'modulated carrier wave',
        src: 'JP 1-02'
    },
    'MCWL': {
        def: 'Marine Corps Warfighting Lab',
        src: '1-02'
    },
    'MCWP': {
        def: 'Marine Corps warfighting publication',
        src: '1-02'
    },
    'MCX': {
        def: 'Marine Corps Exchange',
        src: 'JP 1-02'
    },
    'MDA': {
        def: 'Magen David Adom (Israeli equivalent of the Red Cross); maritime domain awareness; Missile Defense Agency',
        src: '1-02'
    },
    'MDBS': {
        def: 'blood support medical detachment',
        src: '1-02'
    },
    'MDCI': {
        def: 'multidiscipline counterintelligence',
        src: 'JP 1-02'
    },
    'MDCO': {
        def: 'Military Department counterintelligence organization',
        src: '1-02'
    },
    'MDDOC': {
        def: 'Marine air-ground task force deployment and distribution operations center',
        src: '1-02'
    },
    'MDF': {
        def: 'Main Defense Forces (NATO); main distribution frame',
        src: 'JP 1-02'
    },
    'MDITDS': {
        def: 'migration defense intelligence threat data system; Modernized Defense Intelligence Threat Data System',
        src: 'JP 1-02'
    },
    'MDMA': {
        def: 'methylenedioxymethamphetamine',
        src: 'JP 3-07.4'
    },
    'MDR': {
        def: 'medium data rate',
        src: 'JP 1-02'
    },
    'MDRO': {
        def: 'mission disaster response officer',
        src: '1-02'
    },
    'MDS': {
        def: 'Message Dissemination Subsystem; mission design series',
        src: 'JP 1-02'
    },
    'MDSS II': {
        def: 'Marine air-ground task force Deployment Support System II',
        src: '1-02'
    },
    'MDSU': {
        def: 'mobile diving and salvage unit',
        src: 'JP 1-02'
    },
    'MDU': {
        def: 'military information support operations distribution unit',
        src: '1-02'
    },
    'MDW': {
        def: 'Military District of Washington',
        src: 'JP 1-02'
    },
    'MDZ': {
        def: 'maritime defense zone',
        src: 'JP 1-02'
    },
    'ME/C': {
        def: 'medical examiner and/or coroner',
        src: 'JP 4-06'
    },
    'MEA': {
        def: 'munitions effect assessment; munitions effectiveness assessment',
        src: '1-02'
    },
    'MEAS': {
        def: 'military information support operations effects analysis subsystem',
        src: '1-02'
    },
    'MEB': {
        def: 'Marine expeditionary brigade',
        src: '1-02'
    },
    'MEBU': {
        def: 'mission essential backup',
        src: 'JP 1-02'
    },
    'MEC': {
        def: 'medium endurance cutter',
        src: 'JP 1-02'
    },
    'MED': {
        def: 'manipulative electronic deception',
        src: 'JP 1-02'
    },
    'MEDAL': {
        def: 'Mine Warfare Environmental Decision Aids Library',
        src: 'JP 3-15'
    },
    'MEDCAP': {
        def: 'medical civic action program',
        src: 'JP 1-02'
    },
    'MEDCC': {
        def: 'medical coordination cell',
        src: '1-02'
    },
    'MEDCOM': {
        def: 'medical command; US Army Medical Command',
        src: '1-02'
    },
    'MEDCOM (DS)': {
        def: 'medical command (deployment support) (Army)',
        src: '1-02'
    },
    'MEDEVAC': {
        def: 'medical evacuation',
        src: '1-02'
    },
    'MEDINT': {
        def: 'medical intelligence',
        src: '1-02'
    },
    'MEDLOG': {
        def: 'medical logistics (USAF AIS)',
        src: 'JP 1-02'
    },
    'MEDLOG JR': {
        def: 'medical logistics, junior (USAF)',
        src: 'JP 1-02'
    },
    'MEDLOG support': {
        def: 'medical logistics support',
        src: '1-02'
    },
    'MEDLOGCO': {
        def: 'medical logistics company',
        src: 'JP 1-02'
    },
    'MEDMOB': {
        def: 'Medical Mobilization Planning and Execution System',
        src: 'JP 1-02'
    },
    'MEDNEO': {
        def: 'medical noncombatant evacuation operation',
        src: 'JP 1-02'
    },
    'MEDREG': {
        def: 'medical regulating',
        src: 'JP 4-02'
    },
    'MEDREGREP': {
        def: 'medical regulating report',
        src: 'JP 1-02'
    },
    'MEDRETE': {
        def: 'medical readiness training exercise',
        src: 'JP 1-02'
    },
    'MEDS': {
        def: 'meteorological data system',
        src: 'JP 1-02'
    },
    'MEDSOM': {
        def: 'medical supply, optical, and maintenance unit',
        src: 'JP 1-02'
    },
    'MEDSTAT': {
        def: 'medical status',
        src: 'JP 1-02'
    },
    'MEF': {
        def: 'Marine expeditionary force',
        src: '1-02'
    },
    'MEFPAKA': {
        def: 'manpower and equipment force packaging',
        src: 'JP 1-02'
    },
    'MEJA': {
        def: 'Military Extraterritorial Jurisdiction Act',
        src: '1-02'
    },
    'MEL': {
        def: 'maintenance expenditure limit; minimum equipment list',
        src: 'JP 1-02'
    },
    'MEO': {
        def: 'medium Earth orbit; military equal opportunity',
        src: '1-02'
    },
    'MEP': {
        def: 'mobile electric power',
        src: 'JP 1-02'
    },
    'MEPCOM': {
        def: 'military entrance processing command',
        src: 'JP 1-02'
    },
    'MEPES': {
        def: 'Medical Planning and Execution System',
        src: 'JP 1-02'
    },
    'MEPRS': {
        def: 'Military Entrance Processing and Reporting System',
        src: 'JP 1-02'
    },
    'MERCO': {
        def: 'merchant ship reporting and control',
        src: 'JP 1-02'
    },
    'MERSHIPS': {
        def: 'merchant ships',
        src: 'JP 1-02'
    },
    'MES': {
        def: 'medical equipment set',
        src: 'JP 4-02'
    },
    'MESAR': {
        def: 'minimum-essential security assistance requirements',
        src: 'JP 1-02'
    },
    'MESF': {
        def: 'maritime expeditionary security force',
        src: '1-02'
    },
    'MESFC': {
        def: 'maritime expeditionary security force commander',
        src: '1-02'
    },
    'MESO': {
        def: 'maritime expeditionary security operations',
        src: '1-02'
    },
    'MET': {
        def: 'medium equipment transporter; mobile environmental team',
        src: 'JP 1-02'
    },
    'METAR': {
        def: 'meteorological airfield report; meteorological aviation report',
        src: 'JP 1-02'
    },
    'METARS': {
        def: 'routine aviation weather report (roughly translated from French; international standard code format for hourly surface weather observations)',
        src: 'JP 1-02'
    },
    'METCON': {
        def: 'control of meteorological information (roughly translated from French); meteorological control (Navy)',
        src: 'JP 1-02'
    },
    'METL': {
        def: 'mission-essential task list',
        src: '1-02'
    },
    'METMF': {
        def: 'meteorological mobile facility',
        src: 'JP 1-02'
    },
    'METMF(R)': {
        def: 'meteorological mobile facility (replacement)',
        src: 'JP 1-02'
    },
    'METOC': {
        def: 'meteorological and oceanographic',
        src: '1-02'
    },
    'METSAT': {
        def: 'meteorological satellite',
        src: 'JP 1-02'
    },
    'METT-T': {
        def: 'mission, enemy, terrain and weather, troops and support available--time available',
        src: '1-02'
    },
    'METT-TC': {
        def: 'mission, enemy, terrain and weather, troops and support available-time available and civil considerations (Army)',
        src: 'JP 1-02'
    },
    'METWATCH': {
        def: 'meteorological watch',
        src: '1-02'
    },
    'MEU': {
        def: 'Marine expeditionary unit',
        src: '1-02'
    },
    'MEVA': {
        def: 'mission essential vulnerable area',
        src: '1-02'
    },
    'MEWSG': {
        def: 'Multi-Service Electronic Warfare Support Group (NATO)',
        src: 'JP 1-02'
    },
    'MEZ': {
        def: 'missile engagement zone',
        src: '1-02'
    },
    'MF': {
        def: 'medium frequency; mobile facility; multi-frequency',
        src: 'JP 1-02'
    },
    'MFC': {
        def: 'multinational force commander',
        src: 'JP 1-02'
    },
    'MFDS': {
        def: 'Modular Fuel Delivery System',
        src: 'JP 1-02'
    },
    'MFE': {
        def: 'manpower force element; mobile field exchange',
        src: '1-02'
    },
    'MFFIMS': {
        def: 'mass fatality field information management system',
        src: 'JP 1-02'
    },
    'MFO': {
        def: 'multinational force and observers',
        src: 'JP 1-02'
    },
    'MFP': {
        def: 'major force program',
        src: 'JP 1-02'
    },
    'MFPC': {
        def: 'maritime future plans center',
        src: 'JP 3-32'
    },
    'MFPF': {
        def: 'minefield planning folder',
        src: 'JP 1-02'
    },
    'MFS': {
        def: 'multifunction switch',
        src: 'JP 1-02'
    },
    'MG': {
        def: 'military information support operations group',
        src: '1-02'
    },
    'MGB': {
        def: 'medium girder bridge',
        src: 'JP 1-02'
    },
    'MGM': {
        def: 'master group multiplexer',
        src: 'JP 1-02'
    },
    'MGRS': {
        def: 'military grid reference system',
        src: '1-02'
    },
    'MGS': {
        def: 'mobile ground system',
        src: 'JP 1-02'
    },
    'MGT': {
        def: 'management',
        src: 'JP 1-02'
    },
    'MGW': {
        def: 'maximum gross weight',
        src: '1-02'
    },
    'MHC': {
        def: 'management headquarters ceiling',
        src: 'JP 1-02'
    },
    'MHD': {
        def: 'maritime homeland defense',
        src: '1-02'
    },
    'MHE': {
        def: 'materials handling equipment',
        src: '1-02'
    },
    'MHS': {
        def: 'maritime homeland security; Military Health System',
        src: '1-02'
    },
    'MHU': {
        def: 'modular heat unit',
        src: 'JP 4-06'
    },
    'MHW': {
        def: 'mean high water',
        src: 'JP 1-02'
    },
    'MHz': {
        def: 'megahertz',
        src: '1-02'
    },
    'MI': {
        def: 'military intelligence; movement instructions',
        src: '1-02'
    },
    'MIA': {
        def: 'missing in action',
        src: '1-02'
    },
    'MIAC': {
        def: 'maritime intelligence and analysis center',
        src: 'JP 3-32'
    },
    'MIB': {
        def: 'Military Intelligence Board',
        src: '1-02'
    },
    'MIC': {
        def: 'Multinational Interoperability Council',
        src: '1-02'
    },
    'MICAP': {
        def: 'mission capable/mission capability',
        src: 'JP 1-02'
    },
    'MICON': {
        def: 'mission concept',
        src: 'JP 1-02'
    },
    'MICRO-MICS': {
        def: 'micro-medical inventory control system',
        src: 'JP 1-02'
    },
    'MICRO-SNAP': {
        def: 'micro-shipboard non-tactical automated data processing system',
        src: 'JP 1-02'
    },
    'MIDAS': {
        def: 'model for intertheater deployment by air and sea',
        src: '1-02'
    },
    'MIDB': {
        def: 'modernized integrated database; modernized intelligence database',
        src: '1-02'
    },
    'MIDDS-T': {
        def: 'Meteorological and Oceanographic (METOC) Integrated Data Display System-Tactical',
        src: 'JP 1-02'
    },
    'MIF': {
        def: 'maritime interception force',
        src: 'JP 1-02'
    },
    'MIJI': {
        def: 'meaconing, interference, jamming, and intrusion',
        src: 'JP 1-02'
    },
    'MIL-STD': {
        def: 'military standard',
        src: '1-02'
    },
    'MILAIR': {
        def: 'military airlift',
        src: '1-02'
    },
    'MILALOC': {
        def: 'military air line of communications',
        src: '1-02'
    },
    'MILCON': {
        def: 'military construction',
        src: '1-02'
    },
    'MILDEC': {
        def: 'military deception',
        src: '1-02'
    },
    'MILDEP': {
        def: 'Military Department',
        src: 'JP 1-02'
    },
    'MILGP': {
        def: 'military group (assigned to American Embassy in host nation)',
        src: 'JP 1-02'
    },
    'MILOB': {
        def: 'military observer',
        src: 'JP 1-02'
    },
    'MILOC': {
        def: 'military oceanography group (NATO)',
        src: 'JP 1-02'
    },
    'MILPERS': {
        def: 'military personnel',
        src: 'JP 1-02'
    },
    'MILSATCOM': {
        def: 'military satellite communications',
        src: '1-02'
    },
    'MILSPEC': {
        def: 'military specification',
        src: '1-02'
    },
    'MILSTAMP': {
        def: 'military standard transportation and movement procedures',
        src: 'JP 1-02'
    },
    'MILSTAR': {
        def: 'military strategic and tactical relay system',
        src: 'JP 1-02'
    },
    'MILSTRAP': {
        def: 'military standard transaction reporting and accounting procedure',
        src: 'JP 1-02'
    },
    'MILSTRIP': {
        def: 'military standard requisitioning and issue procedure',
        src: '1-02'
    },
    'MILTECH': {
        def: 'military technician',
        src: 'JP 1-02'
    },
    'MILU': {
        def: 'multinational integrated logistic unit',
        src: '1-02'
    },
    'MILVAN': {
        def: 'military van (container)',
        src: 'JP 1-02'
    },
    'MIM': {
        def: 'maintenance instruction manual',
        src: 'JP 1-02'
    },
    'MIMP': {
        def: 'Mobilization Information Management Plan',
        src: '1-02'
    },
    'MINEOPS': {
        def: 'joint minelaying operations',
        src: 'JP 1-02'
    },
    'MIO': {
        def: 'maritime interception operations',
        src: '1-02'
    },
    'MIO-9': {
        def: 'information operations threat analysis division (DIA)',
        src: 'JP 2-01.2'
    },
    'MIOC': {
        def: 'maritime interception operations commander',
        src: '1-02'
    },
    'MIP': {
        def: 'military intelligence program',
        src: '1-02'
    },
    'MIPE': {
        def: 'mobile intelligence processing element',
        src: 'JP 1-02'
    },
    'MIPOE': {
        def: 'medical intelligence preparation of the operational environment',
        src: '1-02'
    },
    'MIPR': {
        def: 'military interdepartmental purchase request',
        src: '1-02'
    },
    'MIRCS': {
        def: 'mobile integrated remains collection system',
        src: '1-02'
    },
    'MIS': {
        def: 'maritime intelligence summary; military information support',
        src: '1-02'
    },
    'MISAS': {
        def: 'military information support automated system',
        src: '1-02'
    },
    'MISCAP': {
        def: 'mission capability',
        src: 'JP 1-02'
    },
    'MISG': {
        def: 'military information support group',
        src: '1-02'
    },
    'MISO': {
        def: 'military information support operations',
        src: '1-02'
    },
    'MISREP': {
        def: 'mission report',
        src: '1-02'
    },
    'MIST': {
        def: 'military information support team',
        src: 'JP 1-02'
    },
    'MISTF': {
        def: 'military information support task force',
        src: '1-02'
    },
    'MITAM': {
        def: 'mission tasking matrix',
        src: '1-02'
    },
    'MITASK': {
        def: 'mission tasking',
        src: 'JP 1-02'
    },
    'MITO': {
        def: 'minimum interval takeoff',
        src: 'JP 1-02'
    },
    'MITT': {
        def: 'mobile integrated tactical terminal',
        src: 'JP 1-02'
    },
    'MIUW': {
        def: 'mobile inshore undersea warfare',
        src: 'JP 1-02'
    },
    'MIW': {
        def: 'mine warfare',
        src: '1-02'
    },
    'MIWC': {
        def: 'mine warfare commander',
        src: '1-02'
    },
    'MIWG': {
        def: 'multinational interoperability working group',
        src: '1-02'
    },
    'MJCS': {
        def: 'Joint Chiefs of Staff memorandum',
        src: 'JP 1-02'
    },
    'MJLC': {
        def: 'multinational joint logistic center',
        src: '1-02'
    },
    'MLA': {
        def: 'mission load allowance',
        src: 'JP 1-02'
    },
    'MLAYREP': {
        def: 'mine laying report',
        src: 'JP 3-15'
    },
    'MLE': {
        def: 'maritime law enforcement',
        src: 'JP 1-02'
    },
    'MLEA': {
        def: 'Maritime Law Enforcement Academy',
        src: '1-02'
    },
    'MLEM': {
        def: 'Maritime Law Enforcement Manual',
        src: '1-02'
    },
    'MLG': {
        def: 'Marine logistics group',
        src: '1-02'
    },
    'MLI': {
        def: 'munitions list item',
        src: '1-02'
    },
    'MLMC': {
        def: 'medical logistics management center',
        src: '1-02'
    },
    'MLO': {
        def: 'military liaison office',
        src: 'JP 1-02'
    },
    'MLP': {
        def: 'message load plan',
        src: 'JP 1-02'
    },
    'MLPP': {
        def: 'multilevel precedence and preemption',
        src: 'JP 1-02'
    },
    'MLPS': {
        def: 'Medical Logistics Proponent Subcommittee',
        src: 'JP 4-02'
    },
    'MLRS': {
        def: 'multiple launch rocket system',
        src: '1-02'
    },
    'MLS': {
        def: 'microwave landing system; multilevel security',
        src: 'JP 1-02'
    },
    'MLSA': {
        def: 'mutual logistics support agreement',
        src: 'JP 4-10'
    },
    'MLW': {
        def: 'mean low water',
        src: 'JP 1-02'
    },
    'MMA': {
        def: 'military mission area',
        src: '1-02'
    },
    'MMAC': {
        def: 'military mine action center',
        src: '1-02'
    },
    'MMC': {
        def: 'materiel management center',
        src: 'JP 1-02'
    },
    'MMG': {
        def: 'Department of Defense Master Mobilization Guide',
        src: '1-02'
    },
    'MMI': {
        def: 'man/machine interface',
        src: 'JP 1-02'
    },
    'MMIS': {
        def: 'military information support operations management information subsystem',
        src: '1-02'
    },
    'MMLS': {
        def: 'mobile microwave landing system',
        src: 'JP 1-02'
    },
    'MMS': {
        def: 'mast-mounted sight',
        src: 'JP 1-02'
    },
    'MMT': {
        def: 'military mail terminal',
        src: 'JP 1-0'
    },
    'MNC': {
        def: 'multinational corporation',
        src: '1-02'
    },
    'MNCC': {
        def: 'multinational coordination center',
        src: '1-02'
    },
    'MNF': {
        def: 'multinational force',
        src: '1-02'
    },
    'MNFACC': {
        def: 'multinational force air component commander',
        src: '1-02'
    },
    'MNFC': {
        def: 'multinational force commander',
        src: '1-02'
    },
    'MNFLCC': {
        def: 'multinational force land component commander',
        src: '1-02'
    },
    'MNFMCC': {
        def: 'multinational force maritime component commander',
        src: '1-02'
    },
    'MNFSOCC': {
        def: 'multinational force special operations component commander',
        src: '1-02'
    },
    'MNJLC': {
        def: 'multinational joint logistics component',
        src: '1-02'
    },
    'MNL': {
        def: 'master net list; multinational logistics',
        src: '1-02'
    },
    'MNLC': {
        def: 'multinational logistic center',
        src: '1-02'
    },
    'MNP': {
        def: 'master navigation plan',
        src: 'JP 1-02'
    },
    'MNS': {
        def: 'mine neutralization system (USN); mission needs statement',
        src: 'JP 1-02'
    },
    'MNTF': {
        def: 'multinational task force',
        src: '1-02'
    },
    'MO': {
        def: 'month',
        src: '1-02'
    },
    'MOA': {
        def: 'memorandum of agreement; military operating area',
        src: '1-02'
    },
    'MOADS': {
        def: 'maneuver-oriented ammunition distribution system',
        src: 'JP 1-02'
    },
    'MOB': {
        def: 'main operating base; mobilization',
        src: '1-02'
    },
    'MOBCON': {
        def: 'mobilization control',
        src: 'JP 1-02'
    },
    'MOBREP': {
        def: 'military manpower mobilization and accession status report; mobilization report',
        src: '1-02'
    },
    'MOC': {
        def: 'maritime operations center; media operations center',
        src: '1-02'
    },
    'MOCC': {
        def: 'measurement and signature intelligence (MASINT) operations coordination center; mobile operations control center',
        src: 'JP 1-02'
    },
    'MOD': {
        def: 'Minister of Defense; ministry of defense; modification',
        src: '1-02'
    },
    'MOD T-AGOS': {
        def: 'modified tactical auxiliary general ocean surveillance',
        src: 'JP 1-02'
    },
    'MODEM': {
        def: 'modulator/demodulator',
        src: 'JP 1-02'
    },
    'MODLOC': {
        def: 'miscellaneous operational details, local operations',
        src: 'JP 1-02'
    },
    'MOE': {
        def: 'measure of effectiveness',
        src: '1-02'
    },
    'MOEI': {
        def: 'measure of effectiveness indicator',
        src: '1-02'
    },
    'MOG': {
        def: 'maximum (aircraft) on ground; movement on ground (aircraft); multinational observer group',
        src: '1-02'
    },
    'MOGAS': {
        def: 'motor gasoline',
        src: 'JP 1-02'
    },
    'MOLE': {
        def: 'multichannel operational line evaluator',
        src: 'JP 1-02'
    },
    'MOMAT': {
        def: 'mobility matting',
        src: 'JP 1-02'
    },
    'MOMSS': {
        def: 'mode and message selection system',
        src: 'JP 1-02'
    },
    'MOP': {
        def: 'measure of performance; memorandum of policy',
        src: '1-02'
    },
    'MOPP': {
        def: 'mission-oriented protective posture',
        src: '1-02'
    },
    'MOR': {
        def: 'memorandum of record',
        src: 'JP 1-02'
    },
    'MOS': {
        def: 'military occupational specialty',
        src: 'JP 1-02'
    },
    'MOSC': {
        def: 'meteorological and oceanographic operations support community',
        src: '1-02'
    },
    'MOTR': {
        def: 'maritime operational threat response',
        src: '1-02'
    },
    'MOU': {
        def: 'memorandum of understanding',
        src: '1-02'
    },
    'MOUT': {
        def: 'military operations in urban terrain; military operations on urbanized terrain',
        src: 'JP 1-02'
    },
    'MOVREP': {
        def: 'movement report',
        src: 'JP 1-02'
    },
    'MOW': {
        def: 'maintenance orderwire',
        src: 'JP 1-02'
    },
    'MP': {
        def: 'military police (Army and Marine); multinational publication',
        src: '1-02'
    },
    'MPA': {
        def: 'maritime patrol aircraft; mission and payload assessment; mission planning agent',
        src: 'JP 1-02'
    },
    'MPAT': {
        def: 'military patient administration team; Multinational Planning Augmentation Team',
        src: '1-02'
    },
    'MPC': {
        def: 'mid-planning conference; military personnel center',
        src: 'JP 1-02'
    },
    'MPE/S': {
        def: 'maritime pre-positioning equipment and supplies',
        src: 'JP 1-02'
    },
    'MPF': {
        def: 'maritime pre-positioning force',
        src: '1-02'
    },
    'MPFUB': {
        def: 'maritime pre-positioning force utility boat',
        src: '1-02'
    },
    'MPG': {
        def: 'maritime planning group; mensurated point graphic',
        src: 'JP 1-02'
    },
    'mph': {
        def: 'miles per hour',
        src: 'JP 1-02'
    },
    'MPICE': {
        def: 'measuring progress in conflict environments',
        src: '1-02'
    },
    'MPLAN': {
        def: 'Marine Corps Mobilization Management Plan',
        src: 'JP 1-02'
    },
    'MPM': {
        def: 'medical planning module',
        src: 'JP 1-02'
    },
    'MPNTP': {
        def: 'Master Positioning Navigation and Timing Plan',
        src: '1-02'
    },
    'MPO': {
        def: 'military post office',
        src: 'JP 1-02'
    },
    'MPP': {
        def: 'maritime procedural publication',
        src: '1-02'
    },
    'MPR': {
        def: 'maritime patrol and reconnaissance',
        src: '1-02'
    },
    'MPRS': {
        def: 'multipoint refueling system',
        src: '1-02'
    },
    'MPS': {
        def: 'maritime pre-positioning ship; message processor shelter; Military Planning Service (UN); Military Postal Service',
        src: '1-02'
    },
    'MPSA': {
        def: 'Military Postal Service Agency',
        src: 'JP 1-02'
    },
    'MPSRON': {
        def: 'maritime pre-positioning ships squadron',
        src: '1-02'
    },
    'MR': {
        def: 'milliradian; mobile reserve',
        src: 'JP 1-02'
    },
    'MRAALS': {
        def: 'Marine remote area approach and landing system',
        src: 'JP 1-02'
    },
    'MRAT': {
        def: 'medical radiobiology advisory team',
        src: 'JP 1-02'
    },
    'MRBM': {
        def: 'medium-range ballistic missile',
        src: '1-02'
    },
    'MRCI': {
        def: 'maximum rescue coverage intercept',
        src: 'JP 1-02'
    },
    'MRE': {
        def: 'meal, ready to eat',
        src: 'JP 1-02'
    },
    'MRG': {
        def: 'movement requirements generator',
        src: 'JP 1-02'
    },
    'MRI': {
        def: 'magnetic resonance imaging',
        src: 'JP 4-02'
    },
    'MRMC': {
        def: 'US Army Medical Research and Materiel Command',
        src: 'JP 1-02'
    },
    'MRO': {
        def: 'mass rescue operation; materiel release order; medical regulating office; medical regulating officer',
        src: '1-02'
    },
    'MROC': {
        def: 'multicommand required operational capability',
        src: 'JP 1-02'
    },
    'MRR': {
        def: 'minimum-risk route',
        src: '1-02'
    },
    'MRRR': {
        def: 'mobility requirement resource roster',
        src: 'JP 1-02'
    },
    'MRS': {
        def: 'measurement and signature intelligence (MASINT) requirements system; meteorological radar subsystem; movement report system',
        src: 'JP 1-02'
    },
    'MRSA': {
        def: 'Materiel Readiness Support Agency',
        src: 'JP 1-02'
    },
    'MRT': {
        def: 'maintenance recovery team',
        src: '1-02'
    },
    'MRU': {
        def: 'mountain rescue unit',
        src: 'JP 1-02'
    },
    'MRX': {
        def: 'mission readiness exercise',
        src: '1-02'
    },
    'MS': {
        def: 'message switch',
        src: 'JP 1-02'
    },
    'ms': {
        def: 'millisecond',
        src: 'JP 1-02'
    },
    'MS-DOS': {
        def: 'Microsoft disk operating system',
        src: 'JP 1-02'
    },
    'MSA': {
        def: 'Maritime Security Act',
        src: '1-02'
    },
    'MSC': {
        def: 'major subordinate command; maritime support center; Military Sealift Command; military staff committee; mission support confirmation',
        src: '1-02'
    },
    'MSCA': {
        def: 'military support to civilian authorities',
        src: '1-02'
    },
    'MSCD': {
        def: 'military support to civil defense',
        src: 'JP 1-02'
    },
    'MSCO': {
        def: 'Military Sealift Command Office',
        src: '1-02'
    },
    'MSD': {
        def: 'marginal support date; mobile security division',
        src: 'JP 1-02'
    },
    'MSE': {
        def: 'mission support element; mobile subscriber equipment',
        src: '1-02'
    },
    'MSECR': {
        def: 'HIS 6000 security module',
        src: 'JP 1-02'
    },
    'MSEL': {
        def: 'master scenario events list',
        src: 'JP 1-02'
    },
    'MSF': {
        def: 'Medicins Sans Frontieres ("Doctors Without Borders"); mission support force; mobile security force; multiplex signal format',
        src: 'JP 1-02'
    },
    'MSG': {
        def: 'Marine security guard; message',
        src: '1-02'
    },
    'MSGID': {
        def: 'message identification',
        src: 'JP 1-02'
    },
    'MSHARPP': {
        def: 'mission, symbolism, history, accessibility, recognizability, population, and proximity',
        src: '1-02'
    },
    'MSI': {
        def: 'modified surface index; multispectral imagery',
        src: '1-02'
    },
    'MSIC': {
        def: 'Missile and Space Intelligence Center',
        src: '1-02'
    },
    'MSIS': {
        def: 'Marine safety information system',
        src: 'JP 1-02'
    },
    'MSK': {
        def: 'mission support kit',
        src: 'JP 1-02'
    },
    'MSL': {
        def: 'master station log; military shipping label ',
        src: '1-02'
    },
    'MSNAP': {
        def: 'merchant ship naval augmentation program',
        src: 'JP 1-02'
    },
    'MSO': {
        def: 'map support office; marine safety office(r); maritime security operations; military satellite communications (MILSATCOM) systems organization; military source operation; military strategic objective; military support operations',
        src: '1-02'
    },
    'MSOAG': {
        def: 'Marine special operations advisor group',
        src: '1-02'
    },
    'MSOC': {
        def: 'Marine special operations company',
        src: 'JP 3-05.1'
    },
    'MSOR': {
        def: 'Marine Special Operations Regiment',
        src: '1-02'
    },
    'MSP': {
        def: 'maritime security program; mission support plan; mobile sensor platform',
        src: '1-02'
    },
    'MSPES': {
        def: 'mobilization stationing, planning, and execution system',
        src: 'JP 1-02'
    },
    'MSPS': {
        def: 'military information support operations studies program subsystem; mobilization stationing and planning system',
        src: '1-02'
    },
    'MSR': {
        def: 'main supply route; maritime support request; mission support request',
        src: '1-02'
    },
    'MSRON': {
        def: 'maritime expeditionary security squadron',
        src: '1-02'
    },
    'MSRP': {
        def: 'mission strategic resource plan',
        src: '1-02'
    },
    'MSRR': {
        def: 'modeling and simulation resource repository',
        src: 'JP 1-02'
    },
    'MSRT': {
        def: 'Maritime Security Response Team (USCG)',
        src: '1-02'
    },
    'MSRV': {
        def: 'message switch rekeying variable',
        src: 'JP 1-02'
    },
    'MSS': {
        def: 'medical surveillance system; meteorological satellite subsystem',
        src: 'JP 1-02'
    },
    'MSSG': {
        def: 'Marine expeditionary unit (MEU) service support group',
        src: 'JP 1-02'
    },
    'MST': {
        def: 'Marine expeditionary force (MEF) weather support team; meteorological and oceanographic support team; mission support team',
        src: 'JP 1-02'
    },
    'MT': {
        def: 'military technician; ministry team',
        src: '1-02'
    },
    'MT Bn': {
        def: 'motor transport battalion',
        src: 'JP 1-02'
    },
    'MT/D': {
        def: 'measurement tons per day',
        src: 'JP 1-02'
    },
    'MTA': {
        def: 'military training agreement',
        src: 'JP 1-02'
    },
    'MTAC': {
        def: 'Multiple Threat Alert Center (DON)',
        src: '1-02'
    },
    'MTBF': {
        def: 'mean time between failures',
        src: 'JP 1-02'
    },
    'MTCR': {
        def: 'missile technology control regime',
        src: '1-02'
    },
    'mtDNA': {
        def: 'mitochondrial deoxyribonucleic acid',
        src: '1-02'
    },
    'MTF': {
        def: 'medical treatment facility; message text format; military information support operations task force',
        src: '1-02'
    },
    'MTG': {
        def: 'master timing generator; military information support operations task group',
        src: '1-02'
    },
    'MTI': {
        def: 'moving target indicator',
        src: 'JP 1-02'
    },
    'MTIC': {
        def: 'Military Targeting Intelligence Committee',
        src: 'JP 1-02'
    },
    'MTL': {
        def: 'mission tasking letter',
        src: 'JP 1-02'
    },
    'MTMS': {
        def: 'maritime tactical message system',
        src: 'JP 1-02'
    },
    'MTN': {
        def: 'multi-tactical data link network',
        src: '1-02'
    },
    'MTO': {
        def: 'message to observer; mission type order',
        src: 'JP 1-02'
    },
    'MTOE': {
        def: 'modified table of organization and equipment',
        src: 'JP 1-02'
    },
    'MTON': {
        def: 'measurement ton',
        src: '1-02'
    },
    'MTP': {
        def: 'Marine tactical publication; maritime task plan; mission tasking packet',
        src: '1-02'
    },
    'MTS': {
        def: 'Movement Tracking System',
        src: 'JP 1-02'
    },
    'MTS/SOF-IRIS': {
        def: 'multifunction system',
        src: 'JP 1-02'
    },
    'MTT': {
        def: 'magnetic tape transport',
        src: '1-02'
    },
    'MTTP': {
        def: 'multi-Service tactics, techniques, and procedures',
        src: 'JP 3-11'
    },
    'MTW': {
        def: 'major theater war',
        src: 'JP 1-02'
    },
    'MTX': {
        def: 'message text format',
        src: 'JP 1-02'
    },
    'MU': {
        def: 'marry up',
        src: 'JP 1-02'
    },
    'MUL': {
        def: 'master urgency list (DOD)',
        src: 'JP 1-02'
    },
    'MULE': {
        def: 'modular universal laser equipment',
        src: 'JP 1-02'
    },
    'MUOS': {
        def: 'Mobile Users Object System',
        src: '1-02'
    },
    'MUREP': {
        def: 'munitions report',
        src: 'JP 1-02'
    },
    'MUSARC': {
        def: 'major United States Army reserve commands',
        src: 'JP 1-02'
    },
    'MUSE': {
        def: 'mobile utilities support equipment',
        src: '1-02'
    },
    'MUST': {
        def: 'medical unit, self contained, transportable',
        src: 'JP 1-02'
    },
    'MUX': {
        def: 'multiplex',
        src: 'JP 1-02'
    },
    'MV': {
        def: 'merchant vessel; motor vessel',
        src: 'JP 1-02'
    },
    'mV': {
        def: 'millivolt',
        src: 'JP 1-02'
    },
    'MWBP': {
        def: 'missile warning bypass',
        src: 'JP 1-02'
    },
    'MWC': {
        def: 'Missile Warning Center (NORAD)',
        src: 'JP 1-02'
    },
    'MWD': {
        def: 'military working dog',
        src: '1-02'
    },
    'MWDT': {
        def: 'military working dog team',
        src: 'JP 1-02'
    },
    'MWF': {
        def: 'medical working file',
        src: 'JP 1-02'
    },
    'MWG': {
        def: 'mobilization working group',
        src: '1-02'
    },
    'MWOD': {
        def: 'multiple word-of-day',
        src: 'JP 1-02'
    },
    'MWR': {
        def: 'missile warning receiver; morale, welfare, and recreation',
        src: '1-02'
    },
    'MWSG': {
        def: 'Marine wing support group',
        src: '1-02'
    },
    'MWSS': {
        def: 'Marine wing support squadron',
        src: '1-02'
    },
    'MWT': {
        def: 'modular warping tug',
        src: '1-02'
    },
    'N': {
        def: 'number of required track spacings; number of search and rescue units (SRUs)',
        src: 'JP 1-02'
    },
    'N-1': {
        def: 'Navy component manpower or personnel staff officer',
        src: 'JP 1-02'
    },
    'N-2': {
        def: 'Director of Naval Intelligence; Navy component intelligence staff officer',
        src: '1-02'
    },
    'N-3': {
        def: 'Navy component operations staff officer',
        src: 'JP 1-02'
    },
    'N-4': {
        def: 'Navy component logistics staff officer',
        src: 'JP 1-02'
    },
    'N-5': {
        def: 'Navy component plans staff officer',
        src: 'JP 1-02'
    },
    'N-6': {
        def: 'Navy component communications staff officer',
        src: 'JP 1-02'
    },
    'N-Sp/CC': {
        def: 'North American Aerospace Defense Command (NORAD)-US Space Command/Command Center',
        src: 'JP 1-02'
    },
    'N-TFS': {
        def: 'New Tactical Forecast System',
        src: 'JP 1-02'
    },
    'NA': {
        def: 'nation assistance',
        src: '1-02'
    },
    'NA5CRO': {
        def: 'non-Article 5 crisis response operation (NATO)',
        src: '1-02'
    },
    'NAAG': {
        def: 'North Atlantic Treaty Organization (NATO) Army Armaments Group',
        src: 'JP 1-02'
    },
    'NAC': {
        def: 'North American Aerospace Defense Command (NORAD) Air Center; North Atlantic Council (NATO)',
        src: 'JP 1-02'
    },
    'NACE': {
        def: 'National Military Command System (NMCS) Automated Control Executive',
        src: 'JP 1-02'
    },
    'NACISA': {
        def: 'North Atlantic Treaty Organization (NATO) Communications and Information Systems Agency',
        src: 'JP 1-02'
    },
    'NACISC': {
        def: 'North Atlantic Treaty Organization (NATO) Communications and Information Systems Committee',
        src: 'JP 1-02'
    },
    'NACSEM': {
        def: 'National Communications Security/Emanations Security (COMSEC/EMSEC) Information Memorandum',
        src: 'JP 1-02'
    },
    'NACSI': {
        def: 'national communications security (COMSEC) instruction',
        src: 'JP 1-02'
    },
    'NACSIM': {
        def: 'national communications security (COMSEC) information memorandum',
        src: 'JP 1-02'
    },
    'NAD 83': {
        def: 'North American Datum 1983',
        src: '1-02'
    },
    'NADEFCOL': {
        def: 'North Atlantic Treaty Organization (NATO) Defense College',
        src: 'JP 1-02'
    },
    'NADEP': {
        def: 'naval aircraft depot',
        src: 'JP 1-02'
    },
    'NAE': {
        def: 'Navy acquisition executive',
        src: '1-02'
    },
    'NAEC-ENG': {
        def: 'Naval Air Engineering Center - Engineering',
        src: '1-02'
    },
    'NAF': {
        def: 'naval air facility; nonappropriated funds; numbered air force',
        src: 'JP 1-02'
    },
    'NAFAG': {
        def: 'North Atlantic Treaty Organization (NATO) Air Force Armaments Group',
        src: 'JP 1-02'
    },
    'NAI': {
        def: 'named area of interest',
        src: '1-02'
    },
    'NAIC': {
        def: 'National Air Intelligence Center',
        src: 'JP 1-02'
    },
    'NAK': {
        def: 'negative acknowledgement',
        src: 'JP 1-02'
    },
    'NALC': {
        def: 'Navy ammunition logistics code',
        src: '1-02'
    },
    'NALE': {
        def: 'naval and amphibious liaison element',
        src: '1-02'
    },
    'NALSS': {
        def: 'naval advanced logistic support site',
        src: '1-02'
    },
    'NAMP': {
        def: 'North Atlantic Treaty Organization (NATO) Annual Manpower Plan',
        src: 'JP 1-02'
    },
    'NAMS': {
        def: 'National Air Mobility System',
        src: '1-02'
    },
    'NAMTO': {
        def: 'Navy material transportation office',
        src: 'JP 1-02'
    },
    'NAOC': {
        def: 'national airborne operations center (E-4B aircraft)',
        src: 'JP 1-02'
    },
    'NAPCAP': {
        def: 'North Atlantic Treaty Organization (NATO) Allied Pre-Committed Civil Aircraft Program',
        src: 'JP 1-02'
    },
    'NAPMA': {
        def: 'North Atlantic Treaty Organization (NATO) Airborne Early Warning and Control Program Management Agency',
        src: 'JP 1-02'
    },
    'NAPMIS': {
        def: 'Navy Preventive Medicine Information System',
        src: 'JP 4-02'
    },
    'NAR': {
        def: 'nonconventional assisted recovery; notice of ammunition reclassification',
        src: '1-02'
    },
    'NARAC': {
        def: 'national atmospheric release advisory capability; National Atmospheric Release Advisory Center (DOE)',
        src: '1-02'
    },
    'NARC': {
        def: 'non-automatic relay center',
        src: 'JP 1-02'
    },
    'NARP': {
        def: 'Nuclear Weapon Accident Response Procedures',
        src: '1-02'
    },
    'NAS': {
        def: 'naval air station',
        src: 'JP 1-02'
    },
    'NAS computer': {
        def: 'national airspace system computer',
        src: 'JP 1-02'
    },
    'NASA': {
        def: 'National Aeronautics and Space Administration',
        src: '1-02'
    },
    'NASAR': {
        def: 'National Association for Search and Rescue',
        src: 'JP 1-02'
    },
    'NASIC': {
        def: 'National Air and Space Intelligence Center',
        src: '1-02'
    },
    'NAT': {
        def: 'nonair-transportable (cargo)',
        src: 'JP 1-02'
    },
    'NATO': {
        def: 'North Atlantic Treaty Organization',
        src: '1-02'
    },
    'NATOPS': {
        def: 'Naval Air Training and Operating Procedures Standardization',
        src: '1-02'
    },
    'NAU': {
        def: 'Narcotics Assistance Unit',
        src: 'JP 1-02'
    },
    'NAVAID': {
        def: 'navigation aid',
        src: 'JP 1-02'
    },
    'NAVAIDS': {
        def: 'navigational aids',
        src: '1-02'
    },
    'NAVAIR': {
        def: 'naval air; Naval Air Systems Command',
        src: '1-02'
    },
    'NAVAIRSYSCOM': {
        def: 'Naval Air Systems Command (Also called NAVAIR)',
        src: 'JP 1-02'
    },
    'NAVATAC': {
        def: 'Navy Antiterrorism Analysis Center; Navy Antiterrorist Alert Center',
        src: 'JP 1-02'
    },
    'NAVCHAPDET': {
        def: 'naval cargo handling and port group detachment',
        src: 'JP 1-02'
    },
    'NAVCHAPGRU': {
        def: 'Navy cargo handling and port group',
        src: 'JP 1-02'
    },
    'NAVCOMSTA': {
        def: 'naval communications station',
        src: 'JP 1-02'
    },
    'NAVCYBERFOR': {
        def: 'Navy Cyber Forces',
        src: '1-02'
    },
    'NAVELSG': {
        def: 'Navy expeditionary logistic support group',
        src: '1-02'
    },
    'NAVEODTECHDIV': {
        def: 'Naval Explosives Ordnance Disposal Technology Division',
        src: '1-02'
    },
    'NAVEURMETOCCEN': {
        def: 'Naval Europe Meteorology and Oceanography Center',
        src: 'JP 1-02'
    },
    'NAVFAC': {
        def: 'Naval Facilities Engineering Command',
        src: '1-02'
    },
    'NAVFAC-X': {
        def: 'Naval Facilities Engineering Command-expeditionary',
        src: 'JP 3-34'
    },
    'NAVFACENGCOM': {
        def: 'Navy Facilities Engineering Command',
        src: '1-02'
    },
    'NAVFAX': {
        def: 'Navy facsimile',
        src: 'JP 1-02'
    },
    'NAVFOR': {
        def: 'Navy forces',
        src: '1-02'
    },
    'NAVICECEN': {
        def: 'Naval Ice Center',
        src: 'JP 1-02'
    },
    'NAVLANTMETOCCEN': {
        def: 'Naval Atlantic Meteorology and Oceanography Center',
        src: 'JP 1-02'
    },
    'NAVMAG': {
        def: 'naval magazine',
        src: 'JP 1-02'
    },
    'NAVMED': {
        def: 'Navy Medical; Navy medicine',
        src: 'JP 3-41'
    },
    'NAVMEDCOMINST': {
        def: 'Navy medical command instruction',
        src: 'JP 1-02'
    },
    'NAVMEDLOGCOM': {
        def: 'Navy Medical Logistics Command',
        src: '1-02'
    },
    'NAVMEDP': {
        def: 'Navy medical pamphlet',
        src: 'JP 1-02'
    },
    'NAVMETOCCOM': {
        def: 'Naval Meteorology and Oceanography Command',
        src: 'JP 1-02'
    },
    'NAVMTO': {
        def: 'naval military transportation office; Navy Material Transportation Office',
        src: '1-02'
    },
    'NAVOCEANO': {
        def: 'Naval Oceanographic Office',
        src: '1-02'
    },
    'NAVORD': {
        def: 'naval ordnance',
        src: 'JP 1-02'
    },
    'NAVORDSTA': {
        def: 'naval ordnance station',
        src: 'JP 1-02'
    },
    'NAVPACMETOCCEN': {
        def: 'Naval Pacific Meteorology and Oceanography Center',
        src: 'JP 1-02'
    },
    'NAVSAFECEN': {
        def: 'naval safety center',
        src: 'JP 1-02'
    },
    'NAVSAT': {
        def: 'navigation satellite',
        src: 'JP 1-02'
    },
    'NAVSEA': {
        def: 'Naval Sea Systems Command',
        src: '1-02'
    },
    'NAVSEAINST': {
        def: 'Naval Sea Systems Command instruction',
        src: '1-02'
    },
    'NAVSEALOGCEN': {
        def: 'naval sea logistics center',
        src: 'JP 1-02'
    },
    'NAVSEASYSCOM': {
        def: 'Naval Sea Systems Command',
        src: 'JP 1-02'
    },
    'NAVSO': {
        def: 'United States Navy Forces, Southern Command',
        src: 'JP 1-02'
    },
    'NAVSOC': {
        def: 'Naval Satellite Operations Center; naval special operations command',
        src: '1-02'
    },
    'NAVSOF': {
        def: 'Navy special operations forces',
        src: '1-02'
    },
    'NAVSPACECOM': {
        def: 'Naval Space Command',
        src: 'JP 1-02'
    },
    'NAVSPECWARCOM': {
        def: 'Naval Special Warfare Command',
        src: 'JP 1-02'
    },
    'NAVSPOC': {
        def: 'Naval Space Operations Center',
        src: 'JP 1-02'
    },
    'NAVSUP': {
        def: 'Naval Supply Systems Command',
        src: '1-02'
    },
    'NAVSUPINST': {
        def: 'Navy Support Instruction',
        src: 'JP 1-02'
    },
    'NAVSUPSYSCOM': {
        def: 'Naval Supply Systems Command',
        src: 'JP 4-10'
    },
    'NAVWAR': {
        def: 'navigation warfare',
        src: '1-02'
    },
    'Navy TACC': {
        def: 'Navy tactical air control center',
        src: '1-02'
    },
    'NAWCAD': {
        def: 'Naval Air Warfare Center, Aircraft Division',
        src: '1-02'
    },
    'NB': {
        def: 'narrowband',
        src: 'JP 1-02'
    },
    'NBC': {
        def: 'nuclear, biological, and chemical',
        src: '1-02'
    },
    'NBCCS': {
        def: 'nuclear, biological, and chemical (NBC) contamination survivability',
        src: 'JP 1-02'
    },
    'NBDP': {
        def: 'narrow band direct printing',
        src: 'JP 1-02'
    },
    'NBG': {
        def: 'naval beach group',
        src: '1-02'
    },
    'NBI': {
        def: 'nonbattle injury',
        src: '1-02'
    },
    'NBS': {
        def: 'National Bureau of Standards',
        src: 'JP 1-02'
    },
    'NBST': {
        def: 'narrowband secure terminal',
        src: 'JP 1-02'
    },
    'NBVC': {
        def: 'Naval Base Ventura County',
        src: '1-02'
    },
    'NC3A': {
        def: 'nuclear command, control, and communications (C3) assessment',
        src: 'JP 1-02'
    },
    'NCAA': {
        def: 'North Atlantic Treaty Organization (NATO) Civil Airlift Agency',
        src: 'JP 1-02'
    },
    'NCAGS': {
        def: 'naval cooperation and guidance for shipping',
        src: '1-02'
    },
    'NCAPS': {
        def: 'naval coordination and protection of shipping',
        src: '1-02'
    },
    'NCB': {
        def: 'national central bureau; naval construction brigade; noncompliant boarding',
        src: '1-02'
    },
    'NCC': {
        def: 'National Coordinating Center; naval component commander; Navy component command; Navy component commander; network control center; North American Aerospace Defense Command (NORAD) Command Center',
        src: '1-02'
    },
    'NCCS': {
        def: 'Nuclear Command and Control System',
        src: '1-02'
    },
    'NCD': {
        def: 'net control device',
        src: 'JP 1-02'
    },
    'NCDC': {
        def: 'National Climatic Data Center',
        src: '1-02'
    },
    'NCES': {
        def: 'Net-Centric Enterprise Services',
        src: '1-02'
    },
    'NCESGR': {
        def: 'National Committee of Employer Support for the Guard and Reserve',
        src: '1-02'
    },
    'NCF': {
        def: 'naval construction force',
        src: '1-02'
    },
    'NCFSU': {
        def: 'naval construction force support unit',
        src: 'JP 1-02'
    },
    'NCHB': {
        def: 'Navy cargo-handling battalion',
        src: '1-02'
    },
    'NCIC': {
        def: 'National Crime Information Center',
        src: 'JP 1-02'
    },
    'NCIJTF-AG': {
        def: 'National Cyber Investigative Joint Task Force-Analytical Group (DOD)',
        src: '1-02'
    },
    'NCIS': {
        def: 'Naval Criminal Investigative Service',
        src: '1-02'
    },
    'NCISRA': {
        def: 'Naval Criminal Investigative Service resident agent',
        src: 'JP 1-02'
    },
    'NCISRO': {
        def: 'Naval Criminal Investigative Service regional office',
        src: 'JP 1-02'
    },
    'NCISRU': {
        def: 'Naval Criminal Investigative Service resident unit',
        src: 'JP 1-02'
    },
    'NCIX': {
        def: 'National Counterintelligence Executive',
        src: 'JP 1-02'
    },
    'NCMI': {
        def: 'National Center for Medical Intelligence',
        src: '1-02'
    },
    'NCMP': {
        def: 'Navy Capabilities and Mobilization Plan',
        src: 'JP 1-02'
    },
    'NCO': {
        def: 'noncombat operations; noncommissioned officer',
        src: '1-02'
    },
    'NCOB': {
        def: 'National Counterintelligence Operations Board',
        src: 'JP 1-02'
    },
    'NCOIC': {
        def: 'noncommissioned officer in charge',
        src: 'JP 1-02'
    },
    'NCOS': {
        def: 'naval control of shipping',
        src: '1-02'
    },
    'NCP': {
        def: 'National Oil and Hazardous Substances Pollution Contingency Plan',
        src: 'JP 3-08'
    },
    'NCPC': {
        def: 'National Counterprolification Center',
        src: '1-02'
    },
    'NCR': {
        def: 'national cryptologic representative; National Capital Region (US); National Security Agency/Central Security Service representative; naval construction regiment',
        src: '1-02'
    },
    'NCR-IADS': {
        def: 'National Capital Region-Integrated Air Defense System',
        src: '1-02'
    },
    'NCRCC': {
        def: 'National Capital Region Coordination Center; United States Northern Command Rescue Coordination Center',
        src: '1-02'
    },
    'NCRCG': {
        def: 'National Cyber Response Coordination Group',
        src: 'JP 1-02'
    },
    'NCRDEF': {
        def: 'national cryptologic representative defense',
        src: 'JP 1-02'
    },
    'NCS': {
        def: 'National Clandestine Service; National Communications System; naval control of shipping',
        src: '1-02'
    },
    'NCSC': {
        def: 'National Computer Security Center',
        src: 'JP 1-02'
    },
    'NCSD': {
        def: 'National Cyber Security Division (DHS)',
        src: '1-02'
    },
    'NCSE': {
        def: 'national intelligence support team (NIST) communicatons support element',
        src: 'JP 1-02'
    },
    'NCT': {
        def: 'network control terminal',
        src: 'JP 1-02'
    },
    'NCTAMS': {
        def: 'naval computer and telecommunications area master station',
        src: 'JP 1-02'
    },
    'NCTC': {
        def: 'National Counterterrorism Center; North East Counterdrug Training Center',
        src: '1-02'
    },
    'NCTS': {
        def: 'naval computer and telecommunications station',
        src: 'JP 1-02'
    },
    'NCWS': {
        def: 'naval coastal warfare squadron',
        src: 'JP 3-10'
    },
    'NDAA': {
        def: 'national defense authorization act',
        src: '1-02'
    },
    'NDAF': {
        def: 'Navy, Defense Logistics Agency, Air Force',
        src: 'JP 4-01.2'
    },
    'NDB': {
        def: 'nondirectional beacon',
        src: 'JP 1-02'
    },
    'NDCS': {
        def: 'national drug control strategy',
        src: '1-02'
    },
    'NDDOC': {
        def: 'North American Aerospace Defense Command and United States Northern Command Deployment and Distribution Operations Cell',
        src: '1-02'
    },
    'NDHQ': {
        def: 'National Defence Headquarters, Canada',
        src: '1-02'
    },
    'NDIC': {
        def: 'National Defense Intelligence College; National Drug Intelligence Center',
        src: '1-02'
    },
    'NDL': {
        def: 'national desired ground zero list',
        src: 'JP 1-02'
    },
    'NDMC': {
        def: 'North Atlantic Treaty Organization (NATO) Defense Manpower Committee',
        src: 'JP 1-02'
    },
    'NDMS': {
        def: 'National Disaster Medical System (DHHS)',
        src: '1-02'
    },
    'NDOC': {
        def: 'National Defense Operations Center',
        src: 'JP 1-02'
    },
    'NDP': {
        def: 'national disclosure policy',
        src: '1-02'
    },
    'NDPB': {
        def: 'National Drug Policy Board',
        src: 'JP 1-02'
    },
    'NDPC': {
        def: 'National Disclosure Policy Committee',
        src: 'JP 1-02'
    },
    'NDRC': {
        def: 'National Detainee Reporting Center',
        src: '1-02'
    },
    'NDRF': {
        def: 'National Defense Reserve Fleet',
        src: '1-02'
    },
    'NDS': {
        def: 'national defense strategy',
        src: '1-02'
    },
    'NDSF': {
        def: 'National Defense Sealift Fund',
        src: 'JP 1-02'
    },
    'NDT': {
        def: 'nuclear disablement team',
        src: '1-02'
    },
    'NDU': {
        def: 'National Defense University',
        src: 'JP 1-02'
    },
    'NEA': {
        def: 'Northeast Asia',
        src: 'JP 1-02'
    },
    'NEAT': {
        def: 'naval embarked advisory team',
        src: 'JP 1-02'
    },
    'NEC': {
        def: 'National Economic Council',
        src: '1-02'
    },
    'NECC': {
        def: 'Navy Expeditionary Combat Command',
        src: '1-02'
    },
    'NEIC': {
        def: 'Navy Expeditionary Intelligence Command',
        src: '1-02'
    },
    'NELR': {
        def: 'Navy expeditionary logistics regiment',
        src: '1-02'
    },
    'NEMT': {
        def: 'National Emergency Management Team',
        src: 'JP 1-02'
    },
    'NEO': {
        def: 'noncombatant evacuation operation',
        src: '1-02'
    },
    'NEOCC': {
        def: 'noncombatant evacuation operation coordination center',
        src: 'JP 3-68'
    },
    'NEP': {
        def: 'National Exercise Program',
        src: '1-02'
    },
    'NEPA': {
        def: 'National Environmental Policy Act',
        src: 'JP 1-02'
    },
    'NEREP': {
        def: 'Nuclear Execution and Reporting Plan',
        src: 'JP 1-02'
    },
    'NES': {
        def: 'National Exploitation System',
        src: 'JP 1-02'
    },
    'NESDIS': {
        def: 'National Environmental Satellite, Data and Information Service (DOC)',
        src: 'JP 1-02'
    },
    'NEST': {
        def: 'nuclear emergency support team (DOE)',
        src: '1-02'
    },
    'NETOPS': {
        def: 'network operations',
        src: '1-02'
    },
    'NETS': {
        def: 'Nationwide Emergency Telecommunications System',
        src: 'JP 1-02'
    },
    'NETT': {
        def: 'new equipment training team',
        src: 'JP 1-02'
    },
    'NETWARCOM': {
        def: 'Naval Network Warfare Command',
        src: 'JP 3-14'
    },
    'NEW': {
        def: 'net explosive weight',
        src: '1-02'
    },
    'NEWAC': {
        def: 'North Atlantic Treaty Organization (NATO) Electronic Warfare Advisory Committee',
        src: 'JP 1-02'
    },
    'NEWCS': {
        def: 'NATO electronic warfare core staff',
        src: 'JP 3-13.1'
    },
    'NEXCOM': {
        def: 'Navy Exchange Command',
        src: 'JP 1-02'
    },
    'NFA': {
        def: 'no-fire area',
        src: 'JP 1-02'
    },
    'NFC': {
        def: 'numbered fleet commander',
        src: '1-02'
    },
    'NFD': {
        def: 'nodal fault diagnostics',
        src: 'JP 1-02'
    },
    'NFELC': {
        def: 'Naval Facilities Expeditionary Logistics Center',
        src: '1-02'
    },
    'NFESC': {
        def: 'Naval Facilities Engineering Service Center',
        src: 'JP 1-02'
    },
    'NFI': {
        def: 'national foreign intelligence',
        src: 'JP 2-01.2'
    },
    'NFIB': {
        def: 'National Foreign Intelligence Board',
        src: 'JP 1-02'
    },
    'NFIP': {
        def: 'National Flood Insurance Program (FEMA); National Foreign Intelligence Program',
        src: 'JP 1-02'
    },
    'NFLIR': {
        def: 'navigation forward-looking infrared',
        src: 'JP 1-02'
    },
    'NFLS': {
        def: 'naval forward logistic site',
        src: '1-02'
    },
    'NFN': {
        def: 'national file number',
        src: 'JP 2-01.2'
    },
    'NFO': {
        def: 'naval flight officer',
        src: 'JP 1-02'
    },
    'NG': {
        def: 'National Guard',
        src: '1-02'
    },
    'NG JFHQ-State': {
        def: 'National Guard joint force headquarters-state',
        src: '1-02'
    },
    'NGA': {
        def: 'National Geospatial-Intelligence Agency',
        src: '1-02'
    },
    'NGB': {
        def: 'National Guard Bureau',
        src: '1-02'
    },
    'NGB-OC': {
        def: 'National Guard Bureau-Office of the Chaplain',
        src: '1-02'
    },
    'NGCC': {
        def: 'National Guard coordination center',
        src: '1-02'
    },
    'NGCDP': {
        def: 'National Guard Counterdrug Program',
        src: '1-02'
    },
    'NGCSP': {
        def: 'National Guard Counterdrug Support Program',
        src: '1-02'
    },
    'NGF': {
        def: 'naval gun fire',
        src: 'JP 1-02'
    },
    'NGFS': {
        def: 'naval gunfire support',
        src: 'JP 1-02'
    },
    'NGIC': {
        def: 'National Ground Intelligence Center',
        src: '1-02'
    },
    'NGLO': {
        def: 'naval gunfire liaison officer'
    },
    'NGO': {
        def: 'nongovernmental organization',
        src: '1-02'
    },
    'NGP': {
        def: 'National Geospatial-Intelligence Agency Program',
        src: 'JP 2-01'
    },
    'NGRF': {
        def: 'National Guard reaction force',
        src: 'JP 3-28'
    },
    'NI': {
        def: 'national identification (number); noted item',
        src: 'JP 1-02'
    },
    'NIBRS': {
        def: 'National Incident-Based Reporting System',
        src: 'JP 1-02'
    },
    'NIC': {
        def: 'National Intelligence Council; naval intelligence center',
        src: 'JP 1-02'
    },
    'NICC': {
        def: 'National Intelligence Coordination Center',
        src: '1-02'
    },
    'NICCL': {
        def: 'National Incident Communications Conference Line',
        src: '1-02'
    },
    'NICCP': {
        def: 'National Interdiction Command and Control Plan',
        src: '1-02'
    },
    'NICI': {
        def: 'National Interagency Counternarcotics Institute',
        src: 'JP 1-02'
    },
    'NID': {
        def: 'naval intelligence database',
        src: 'JP 1-02'
    },
    'NIDMS': {
        def: 'National Military Command System (NMCS) Information for Decision Makers System',
        src: 'JP 1-02'
    },
    'NIDS': {
        def: 'National Military Command Center (NMCC) information display system',
        src: 'JP 1-02'
    },
    'NIE': {
        def: 'national intelligence estimate',
        src: 'JP 1-02'
    },
    'NIEX': {
        def: 'no-notice interoperability exercise',
        src: 'JP 1-02'
    },
    'NIEXPG': {
        def: 'No-Notice Interoperability Exercise Planning Group',
        src: 'JP 1-02'
    },
    'NIIB': {
        def: 'National Geospatial Intelligence Agency imagery intelligence brief',
        src: 'JP 2-03'
    },
    'NIL': {
        def: 'National Information Library',
        src: '1-02'
    },
    'NIMCAMP': {
        def: 'National Information Management and Communications Master Plan',
        src: 'JP 1-02'
    },
    'NIMS': {
        def: 'National Incident Management System',
        src: '1-02'
    },
    'NIOC': {
        def: 'Navy Information Operations Command',
        src: '1-02'
    },
    'NIP': {
        def: 'National Intelligence Program',
        src: '1-02'
    },
    'NIPF': {
        def: 'National Intelligence Priority Framework',
        src: '1-02'
    },
    'NIPRNET': {
        def: 'Nonsecure Internet Protocol Router Network',
        src: '1-02'
    },
    'NIPS': {
        def: 'Naval Intelligence Processing System',
        src: 'JP 1-02'
    },
    'NIRT': {
        def: 'Nuclear Incident Response Team',
        src: '1-02'
    },
    'NISH': {
        def: 'noncombatant evacuation operation (NEO) intelligence support handbook',
        src: 'JP 1-02'
    },
    'NISP': {
        def: 'national intelligence support plan; Nuclear Weapons Intelligence Support Plan',
        src: '1-02'
    },
    'NIST': {
        def: 'National Institute of Standards and Technology',
        src: '1-02'
    },
    'NIT': {
        def: 'nuclear incident team',
        src: '1-02'
    },
    'NITES': {
        def: 'Navy Integrated Tactical Environmental System',
        src: 'JP 1-02'
    },
    'NITF': {
        def: 'national imagery transmission format',
        src: 'JP 1-02'
    },
    'NIU': {
        def: 'North Atlantic Treaty Organization (NATO) interface unit',
        src: 'JP 1-02'
    },
    'NIWA': {
        def: 'naval information warfare activity',
        src: 'JP 1-02'
    },
    'NJOIC': {
        def: 'National Joint Operations and Intelligence Center',
        src: '1-02'
    },
    'NJTTF': {
        def: 'National Joint Terrorism Task Force',
        src: '1-02'
    },
    'NL': {
        def: 'Navy lighterage',
        src: 'JP 1-02'
    },
    'NLO': {
        def: 'naval liaison officer',
        src: 'JP 1-02'
    },
    'NLT': {
        def: 'not later than',
        src: 'JP 1-02'
    },
    'NLW': {
        def: 'nonlethal weapon',
        src: '1-02'
    },
    'nm': {
        def: 'nautical mile',
        src: '1-02'
    },
    'NM': {
        def: 'network management',
        src: 'JP 1-02'
    },
    'NMAWC': {
        def: 'Naval Mine and Anti-Submarine Warfare Command',
        src: 'JP 3-15'
    },
    'NMB': {
        def: 'North Atlantic Treaty Organization (NATO) military body',
        src: 'JP 1-02'
    },
    'NMC': {
        def: 'Navy Munitions Command',
        src: '1-02'
    },
    'NMCB': {
        def: 'naval mobile construction battalion',
        src: '1-02'
    },
    'NMCC': {
        def: 'National Military Command Center',
        src: '1-02'
    },
    'NMCS': {
        def: 'National Military Command System; not mission capable, supply',
        src: '1-02'
    },
    'NMCSO': {
        def: 'Navy and Marine Corps spectrum office',
        src: '1-02'
    },
    'NMD': {
        def: 'national missile defense',
        src: 'JP 1-02'
    },
    'NMEC': {
        def: 'National Media Exploitation Center',
        src: '1-02'
    },
    'NMIC': {
        def: 'National Maritime Intelligence Center',
        src: '1-02'
    },
    'NMIO': {
        def: 'National Maritime Intelligence-Integration Office',
        src: '1-02'
    },
    'NMIST': {
        def: 'National Military Intelligence Support Team (DIA)',
        src: 'JP 1-02'
    },
    'NMO': {
        def: 'National Measurement and Signature Intelligence Office',
        src: '1-02'
    },
    'NMOC': {
        def: 'network management operations center',
        src: 'JP 1-02'
    },
    'NMOSW': {
        def: 'Naval METOC Operational Support Web',
        src: 'JP 1-02'
    },
    'NMP': {
        def: 'national media pool',
        src: 'JP 3-61'
    },
    'NMPS': {
        def: 'Navy mobilization processing site',
        src: 'JP 1-02'
    },
    'NMR': {
        def: 'news media representative',
        src: 'JP 1-02'
    },
    'NMRC': {
        def: 'Naval Medical Research Center',
        src: 'JP 1-02'
    },
    'NMS': {
        def: 'national military strategy',
        src: '1-02'
    },
    'NMS-CO': {
        def: 'National Military Strategy for Cyberspace Operations',
        src: '1-02'
    },
    'NMS-CWMD': {
        def: 'National Military Strategy to Combat Weapons of Mass Destruction',
        src: '1-02'
    },
    'NMSA': {
        def: 'North Atlantic Treaty Organization (NATO) Mutual Support Act',
        src: 'JP 1-02'
    },
    'NMSC': {
        def: 'Navy and Marine Corps Spectrum Center',
        src: '1-02'
    },
    'NMSP-WOT': {
        def: 'National Military Strategic Plan for the War on Terrorism',
        src: '1-02'
    },
    'NNAG': {
        def: 'North Atlantic Treaty Organization (NATO) Naval Armaments Group',
        src: 'JP 1-02'
    },
    'NNSA': {
        def: 'National Nuclear Security Administration (DOE)',
        src: '1-02'
    },
    'NNWC': {
        def: 'Naval Network Warfare Command',
        src: '1-02'
    },
    'NOAA': {
        def: 'National Oceanic and Atmospheric Administration',
        src: '1-02'
    },
    'NOACT': {
        def: 'Navy overseas air cargo terminal',
        src: 'JP 1-02'
    },
    'NOC': {
        def: 'National Operations Center (DHS); network operations center',
        src: '1-02'
    },
    'NOCONTRACT': {
        def: 'not releasable to contractors or consultants',
        src: 'JP 1-02'
    },
    'NODDS': {
        def: 'Naval Oceanographic Data Distribution System',
        src: 'JP 1-02'
    },
    'NOE': {
        def: 'nap-of-the-earth'
    },
    'NOEA': {
        def: 'nuclear operations emergency action',
        src: 'JP 1-02'
    },
    'NOFORN': {
        def: 'not releasable to foreign nationals',
        src: 'JP 1-02'
    },
    'NOG': {
        def: 'Nuclear Operations Group',
        src: 'JP 1-02'
    },
    'NOGAPS': {
        def: 'Navy Operational Global Atmospheric Prediction System',
        src: 'JP 1-02'
    },
    'NOHD': {
        def: 'nominal ocular hazard distance',
        src: 'JP 1-02'
    },
    'NOIC': {
        def: 'Naval Operational Intelligence Center',
        src: 'JP 1-02'
    },
    'NOK': {
        def: 'next of kin',
        src: 'JP 1-02'
    },
    'NOLSC': {
        def: 'Naval Operational Logistics Support Center',
        src: '1-02'
    },
    'NOMS': {
        def: 'Nuclear Operations Monitoring System',
        src: 'JP 1-02'
    },
    'NOMWC': {
        def: 'Navy Oceanographic Mine Warfare Center',
        src: '1-02'
    },
    'NOP': {
        def: 'nuclear operations',
        src: 'JP 1-02'
    },
    'NOPLAN': {
        def: 'no operation plan available or prepared',
        src: 'JP 1-02'
    },
    'NORAD': {
        def: 'North American Aerospace Defense Command',
        src: '1-02'
    },
    'NORM': {
        def: 'normal; not operationally ready, maintenance',
        src: 'JP 1-02'
    },
    'NORS': {
        def: 'not operationally ready, supply',
        src: 'JP 1-02'
    },
    'NOSC': {
        def: 'network operations and security center',
        src: 'JP 1-02'
    },
    'NOSSA': {
        def: 'Navy Ordnance Safety and Security Activity',
        src: '1-02'
    },
    'NOTMAR': {
        def: 'notice to mariners',
        src: 'JP 1-02'
    },
    'NP': {
        def: 'nonproliferation',
        src: 'JP 3-40'
    },
    'NPC': {
        def: 'Nonproliferation Center',
        src: 'JP 1-02'
    },
    'NPES': {
        def: 'Nuclear Planning and Execution System',
        src: 'JP 1-02'
    },
    'NPG': {
        def: 'nonunit personnel generator',
        src: 'JP 1-02'
    },
    'NPOESS': {
        def: 'National Polar-orbiting Operational Environmental Satellite System',
        src: 'JP 3-14'
    },
    'NPPD': {
        def: 'National Protection and Programs Directorate (DHS)',
        src: '1-02'
    },
    'NPS': {
        def: 'National Park Service; nonprior service; Nuclear Planning System',
        src: '1-02'
    },
    'NPT': {
        def: 'national pipe thread; Treaty on the Nonproliferation of Nuclear Weapons',
        src: '1-02'
    },
    'NPWIC': {
        def: 'National Prisoner of War Information Center',
        src: 'JP 1-02'
    },
    'NQ': {
        def: 'nonquota',
        src: 'JP 1-02'
    },
    'NR': {
        def: 'North Atlantic Treaty Organization (NATO) restricted; number',
        src: 'JP 1-02'
    },
    'NRAT': {
        def: 'nuclear/radiological advisory team',
        src: '1-02'
    },
    'NRC': {
        def: 'National Response Center (USCG); non-unit-related cargo',
        src: '1-02'
    },
    'NRCHB': {
        def: 'Naval Reserve cargo-handling battalion',
        src: '1-02'
    },
    'NRCHF': {
        def: 'Naval Reserve cargo handling force',
        src: 'JP 1-02'
    },
    'NRCHTB': {
        def: 'Naval Reserve cargo handling training battalion',
        src: 'JP 1-02'
    },
    'NRF': {
        def: 'National Response Framework',
        src: '1-02'
    },
    'NRFI': {
        def: 'not ready for issue',
        src: 'JP 1-02'
    },
    'NRG': {
        def: 'notional requirements generator',
        src: 'JP 1-02'
    },
    'NRL': {
        def: 'nuclear weapons (NUWEP) reconnaissance list',
        src: 'JP 1-02'
    },
    'NRO': {
        def: 'National Reconnaissance Office',
        src: '1-02'
    },
    'NROC': {
        def: 'Northern Regional Operations Center (CARIBROC-CBRN)',
        src: 'JP 1-02'
    },
    'NRP': {
        def: 'National Response Plan; non-unit-related personnel',
        src: 'JP 1-02'
    },
    'NRPC': {
        def: 'Naval Reserve Personnel Center',
        src: 'JP 1-02'
    },
    'NRT': {
        def: 'near real time',
        src: '1-02'
    },
    'NRTD': {
        def: 'near-real-time dissemination',
        src: 'JP 1-02'
    },
    'NRZ': {
        def: 'non-return-to-zero',
        src: 'JP 1-02'
    },
    'NS': {
        def: 'nuclear survivability',
        src: 'JP 1-02'
    },
    'NS-CWMD': {
        def: 'National Strategy to Combat Weapons of Mass Destruction',
        src: '1-02'
    },
    'NSA': {
        def: 'national security act; National Security Agency; national security area; national shipping authority; North Atlantic Treaty Organization (NATO) Standardization Agency',
        src: '1-02'
    },
    'NSA/CSS': {
        def: 'National Security Agency/Central Security Service',
        src: '1-02'
    },
    'NSARC': {
        def: 'National Search and Rescue Committee',
        src: '1-02'
    },
    'NSAT': {
        def: 'United States Northern Command situational awareness team',
        src: '1-02'
    },
    'NSAWC': {
        def: 'Naval Strike and Air Warfare Center',
        src: '1-02'
    },
    'NSC': {
        def: 'National Security Council',
        src: '1-02'
    },
    'NSC/DC': {
        def: 'National Security Council/Deputies Committee',
        src: '1-02'
    },
    'NSC/IPC': {
        def: 'National Security Council/interagency policy committee',
        src: '1-02'
    },
    'NSC/IWG': {
        def: 'National Security Council/Interagency Working Group',
        src: 'JP 1-02'
    },
    'NSC/PC': {
        def: 'National Security Council/Principals Committee',
        src: 'JP 1-02'
    },
    'NSC/PCC': {
        def: 'National Security Council Policy Coordinating Committee',
        src: 'JP 1-02'
    },
    'NSCID': {
        def: 'National Security Council intelligence directive',
        src: 'JP 1-02'
    },
    'NSCS': {
        def: 'National Security Council System',
        src: 'JP 1-02'
    },
    'NSCT1': {
        def: 'Naval Special Clearance Team One',
        src: 'JP 3-15'
    },
    'NSD': {
        def: 'National Security Directive; National Security Division (FBI)',
        src: 'JP 1-02'
    },
    'NSDA': {
        def: 'non-self deployment aircraft',
        src: 'JP 1-02'
    },
    'NSDD': {
        def: 'national security decision directive',
        src: 'JP 1-02'
    },
    'NSDM': {
        def: 'national security decision memorandum',
        src: 'JP 1-02'
    },
    'NSDS-E': {
        def: 'Navy Satellite Display System-Enhanced',
        src: 'JP 1-02'
    },
    'NSE': {
        def: 'Navy support element',
        src: '1-02'
    },
    'NSEP': {
        def: 'national security emergency preparedness',
        src: 'JP 1-02'
    },
    'NSF': {
        def: 'National Science Foundation; national security forces; National Strike Force (USCG)',
        src: '1-02'
    },
    'NSFS': {
        def: 'naval surface fire support',
        src: '1-02'
    },
    'NSG': {
        def: 'National System for Geospatial Intelligence; north-seeking gyro',
        src: '1-02'
    },
    'NSGI': {
        def: 'National System for Geospatial Intelligence',
        src: 'JP 2-01'
    },
    'NSHS': {
        def: 'National Strategy for Homeland Security',
        src: '1-02'
    },
    'NSL': {
        def: 'no-strike list',
        src: '1-02'
    },
    'NSM': {
        def: 'national search and rescue (SAR) manual',
        src: 'JP 1-02'
    },
    'NSMS': {
        def: 'National Strategy for Maritime Security',
        src: '1-02'
    },
    'NSN': {
        def: 'national stock number',
        src: '1-02'
    },
    'NSO': {
        def: 'non-Single Integrated Operational Plan (SIOP) option',
        src: 'JP 1-02'
    },
    'NSOC': {
        def: 'National Security Operations Center; National Signals Intelligence (SIGINT) Operations Center; Navy Satellite Operations Center',
        src: '1-02'
    },
    'NSOOC': {
        def: 'North Atlantic Treaty Organization (NATO) Staff Officer Orientation Course',
        src: 'JP 1-02'
    },
    'NSP': {
        def: 'national search and rescue plan',
        src: 'JP 1-02'
    },
    'NSPD': {
        def: 'national security Presidential directive',
        src: '1-02'
    },
    'NSPI': {
        def: 'National Strategy for Pandemic Influenza',
        src: '1-02'
    },
    'NSRL': {
        def: 'national signals intelligence (SIGINT) requirements list',
        src: 'JP 1-02'
    },
    'NSS': {
        def: 'National Search and Rescue Supplement; national security strategy; national security system; non-self-sustaining',
        src: '1-02'
    },
    'NSSA': {
        def: 'National Security Space Architect',
        src: 'JP 1-02'
    },
    'NSSE': {
        def: 'national special security event',
        src: '1-02'
    },
    'NSST': {
        def: 'naval space support team',
        src: 'JP 1-02'
    },
    'NST': {
        def: 'National Geospatial-Intelligence Agency support team',
        src: '1-02'
    },
    'NSTAC': {
        def: 'National Security Telecommunications Advisory Committee',
        src: 'JP 6-0'
    },
    'NSTISSC': {
        def: 'National Security Telecommunications and Information Systems Security Committee',
        src: 'JP 1-02'
    },
    'NSTL': {
        def: 'national strategic targets list',
        src: 'JP 1-02'
    },
    'NSTS': {
        def: 'National Secure Telephone System',
        src: 'JP 1-02'
    },
    'NSW': {
        def: 'naval special warfare',
        src: 'JP 1-02'
    },
    'NSWCDD': {
        def: 'Naval Surface Warfare Center Dahlgren Division',
        src: '1-02'
    },
    'NSWCOM': {
        def: 'Naval Special Warfare Command',
        src: 'JP 1-02'
    },
    'NSWG': {
        def: 'naval special warfare group',
        src: 'JP 1-02'
    },
    'NSWTF': {
        def: 'naval special warfare task force'
    },
    'NSWTG': {
        def: 'naval special warfare task group',
        src: '1-02'
    },
    'NSWTU': {
        def: 'naval special warfare task unit',
        src: 'JP 1-02'
    },
    'NT': {
        def: 'nodal terminal',
        src: 'JP 1-02'
    },
    'NTACS': {
        def: 'Navy tactical air control system',
        src: '1-02'
    },
    'NTAP': {
        def: 'National Track Analysis Program',
        src: 'JP 1-02'
    },
    'NTB': {
        def: 'national target base',
        src: 'JP 1-02'
    },
    'NTBC': {
        def: 'National Military Joint Intelligence Center Targeting and Battle Damage Assessment Cell',
        src: 'JP 2-01'
    },
    'NTC': {
        def: 'National Training Center',
        src: 'JP 1-02'
    },
    'NTCS-A': {
        def: 'Navy Tactical Command System-Afloat',
        src: '1-02'
    },
    'NTDS': {
        def: 'naval tactical data system',
        src: 'JP 1-02'
    },
    'NTF': {
        def: 'nuclear task force',
        src: 'JP 1-02'
    },
    'NTIA': {
        def: 'National Telecommunications and Information Administration',
        src: '1-02'
    },
    'NTIC': {
        def: 'Navy Tactical Intelligence Center',
        src: 'JP 1-02'
    },
    'NTISS': {
        def: 'National Telecommunications and Information Security System',
        src: 'JP 1-02'
    },
    'NTISSI': {
        def: 'National Telecommunications and Information Security System (NTISS) Instruction',
        src: 'JP 1-02'
    },
    'NTISSP': {
        def: 'National Telecommunications and Information Security System (NTISS) Policy',
        src: 'JP 1-02'
    },
    'NTM': {
        def: 'national or multinational technical means of verification; notice to mariners',
        src: '1-02'
    },
    'NTMPDE': {
        def: 'National Telecommunications Master Plan for Drug Enforcement',
        src: 'JP 1-02'
    },
    'NTMS': {
        def: 'national telecommunications management structure',
        src: 'JP 1-02'
    },
    'NTPS': {
        def: 'near-term pre-positioned ships',
        src: 'JP 1-02'
    },
    'NTRP': {
        def: 'Navy tactical reference publication',
        src: '1-02'
    },
    'NTS': {
        def: 'night targeting system; noncombatant evacuation operations tracking system',
        src: '1-02'
    },
    'NTSB': {
        def: 'National Transportation Safety Board',
        src: 'JP 1-02'
    },
    'NTSS': {
        def: 'National Time-Sensitive System',
        src: 'JP 1-02'
    },
    'NTTP': {
        def: 'Navy tactics, techniques, and procedures',
        src: '1-02'
    },
    'NTU': {
        def: 'new threat upgrade',
        src: 'JP 1-02'
    },
    'NUC': {
        def: 'non-unit-related cargo; nuclear',
        src: 'JP 1-02'
    },
    'NUDET': {
        def: 'nuclear detonation',
        src: 'JP 1-02'
    },
    'NUFEA': {
        def: 'Navy-unique fleet essential aircraft',
        src: '1-02'
    },
    'NUP': {
        def: 'non-unit-related personnel',
        src: 'JP 1-02'
    },
    'NURP': {
        def: 'non-unit-related personnel',
        src: '1-02'
    },
    'NUWEP': {
        def: 'policy guidance for the employment of nuclear weapons',
        src: 'JP 1-02'
    },
    'NVD': {
        def: 'night vision device',
        src: '1-02'
    },
    'NVDT': {
        def: 'National Geospatial-Intelligence Agency voluntary deployment team',
        src: '1-02'
    },
    'NVG': {
        def: 'night vision goggle(s)',
        src: '1-02'
    },
    'NVS': {
        def: 'night vision system',
        src: 'JP 1-02'
    },
    'NW': {
        def: 'network warfare; not waiverable',
        src: 'JP 1-02'
    },
    'NWARS': {
        def: 'National Wargaming System',
        src: 'JP 1-02'
    },
    'NWB': {
        def: 'normal wideband',
        src: 'JP 1-02'
    },
    'NWBLTU': {
        def: 'normal wideband line termination unit',
        src: 'JP 1-02'
    },
    'NWDC': {
        def: 'Navy Warfare Development Command',
        src: 'JP 1-02'
    },
    'NWFP': {
        def: 'Northwest Frontier Province (Pakistan)',
        src: 'JP 1-02'
    },
    'NWP': {
        def: 'Navy warfare publication; numerical weather prediction',
        src: '1-02'
    },
    'NWREP': {
        def: 'nuclear weapons report',
        src: 'JP 1-02'
    },
    'NWS': {
        def: 'National Weather Service',
        src: '1-02'
    },
    'NWT': {
        def: 'normal wideband terminal',
        src: 'JP 1-02'
    },
    'O': {
        def: 'contour pattern',
        src: 'JP 1-02'
    },
    'O&I': {
        def: 'operations and intelligence',
        src: '1-02'
    },
    'O&M': {
        def: 'operation and maintenance',
        src: '1-02'
    },
    'O/B': {
        def: 'outboard',
        src: 'JP 1-02'
    },
    'OA': {
        def: 'objective area; operating assembly; operational area; Operations Aerology shipboard METOC division',
        src: '1-02'
    },
    'OADR': {
        def: 'originating agency\'s determination required',
        src: 'JP 1-02'
    },
    'OAE': {
        def: 'operational area evaluation',
        src: 'JP 1-02'
    },
    'OAF': {
        def: 'Operation ALLIED FORCE',
        src: 'JP 1-02'
    },
    'OAFME': {
        def: 'Office of the Armed Forces Medical Examiner',
        src: 'JP 1-02'
    },
    'OAG': {
        def: 'operations advisory group',
        src: 'JP 1-02'
    },
    'OAI': {
        def: 'oceanographic area of interest',
        src: '1-02'
    },
    'OAJCG': {
        def: 'Operation Alliance joint control group',
        src: 'JP 1-02'
    },
    'OAM': {
        def: 'Office of Air and Marine (DHS)',
        src: '1-02'
    },
    'OAP': {
        def: 'offset aimpoint',
        src: 'JP 1-02'
    },
    'OAR': {
        def: 'Chairman of the Joint Chiefs of Staff operation plans assessment report',
        src: 'JP 1-02'
    },
    'OAS': {
        def: 'offensive air support; Organization of American States',
        src: 'JP 1-02'
    },
    'OASD': {
        def: 'Office of the Assistant Secretary of Defense',
        src: 'JP 1-02'
    },
    'OASD(NII/CIO)': {
        def: 'Office of the Assistant Secretary of Defense (Networks and Information Integration/Chief Information Officer)',
        src: '1-02'
    },
    'OASD(PA)': {
        def: 'Office of the Assistant Secretary of Defense (Public Affairs)',
        src: '1-02'
    },
    'OASD(RA)': {
        def: 'Office of the Assistant Secretary of Defense (Reserve Affairs)',
        src: '1-02'
    },
    'OAU': {
        def: 'Organization of African Unity',
        src: 'JP 1-02'
    },
    'OB': {
        def: 'operating base; order of battle',
        src: '1-02'
    },
    'OBA': {
        def: 'oxygen breathing apparatus',
        src: 'JP 1-02'
    },
    'OBFS': {
        def: 'offshore bulk fuel system',
        src: '1-02'
    },
    'OBST': {
        def: 'obstacle',
        src: 'JP 1-02'
    },
    'OBSTINT': {
        def: 'obstacle intelligence',
        src: '1-02'
    },
    'OC': {
        def: 'oleoresin capsicum; operations center',
        src: '1-02'
    },
    'OCA': {
        def: 'offensive counterair; operational control authority',
        src: '1-02'
    },
    'OCBD': {
        def: 'Office of Capacity Building and Development (USDA)',
        src: '1-02'
    },
    'OCC': {
        def: 'Operations Computer Center (USCG)',
        src: 'JP 1-02'
    },
    'OCD': {
        def: 'orderwire clock distributor',
        src: 'JP 1-02'
    },
    'OCDETF': {
        def: 'Organized Crime and Drug Enforcement Task Force',
        src: '1-02'
    },
    'OCE': {
        def: 'officer conducting the exercise',
        src: 'JP 1-02'
    },
    'OCEANCON': {
        def: 'control of oceanographic information',
        src: 'JP 1-02'
    },
    'OCHA': {
        def: 'Office for the Coordination of Humanitarian Affairs'
    },
    'OCIE': {
        def: 'organizational clothing and individual equipment',
        src: '1-02'
    },
    'OCJCS': {
        def: 'Office of the Chairman of the Joint Chiefs of Staff',
        src: 'JP 1-02'
    },
    'OCJCS-PA': {
        def: 'Office of the Chairman of the Joint Chiefs of Staff-Public Affairs',
        src: 'JP 1-02'
    },
    'OCMI': {
        def: 'officer in charge, Marine Inspection',
        src: 'JP 1-02'
    },
    'OCO': {
        def: 'offensive cyberspace operations; offload control officer',
        src: '1-02'
    },
    'OCONUS': {
        def: 'outside the continental United States',
        src: '1-02'
    },
    'OCOP': {
        def: 'outline contingency operation plan',
        src: 'JP 1-02'
    },
    'OCP': {
        def: 'operational capability package; operational configuration processing',
        src: '1-02'
    },
    'OCR': {
        def: 'Office of Collateral Responsibility',
        src: 'JP 1-02'
    },
    'OCS': {
        def: 'operational contract support',
        src: '1-02'
    },
    'OCSIC': {
        def: 'operational contract support integration cell',
        src: '1-02'
    },
    'OCU': {
        def: 'orderwire control unit (Types I, II, and III)',
        src: 'JP 1-02'
    },
    'OCU-1': {
        def: 'orderwire control unit-1',
        src: 'JP 1-02'
    },
    'OD': {
        def: 'operational detachment; other detainee',
        src: 'JP 1-02'
    },
    'ODA': {
        def: 'operational detachment-Alpha',
        src: 'JP 1-02'
    },
    'ODATE': {
        def: 'organization date',
        src: 'JP 1-02'
    },
    'ODB': {
        def: 'operational detachment-Bravo',
        src: 'JP 1-02'
    },
    'ODC': {
        def: 'Office of Defense Cooperation',
        src: 'JP 1-02'
    },
    'ODCSLOG': {
        def: 'Office of the Deputy Chief of Staff for Logistics (Army)',
        src: 'JP 1-02'
    },
    'ODCSOPS': {
        def: 'Office of the Deputy Chief of Staff for Operations and Plans (Army)',
        src: 'JP 1-02'
    },
    'ODCSPER': {
        def: 'Office of the Deputy Chief of Staff for Personnel (Army)',
        src: 'JP 1-02'
    },
    'ODIN': {
        def: 'Operational Digital Network',
        src: 'JP 1-02'
    },
    'ODJS': {
        def: 'Office of the Director, Joint Staff',
        src: 'JP 1-02'
    },
    'ODNI': {
        def: 'Office of the Director of National Intelligence',
        src: '1-02'
    },
    'ODR': {
        def: 'Office of Defense representative',
        src: 'JP 1-02'
    },
    'ODZ': {
        def: 'outer defense zone',
        src: 'JP 1-02'
    },
    'OE': {
        def: 'operational environment',
        src: '1-02'
    },
    'OE&AS': {
        def: 'organization for embarkation and assignment to shipping',
        src: '1-02'
    },
    'OEBGD': {
        def: 'Overseas Environmental Baseline Guidance Document',
        src: '1-02'
    },
    'OECD': {
        def: 'Organisation for Economic Co-operation and Development',
        src: '1-02'
    },
    'OEF': {
        def: 'Operation ENDURING FREEDOM',
        src: '1-02'
    },
    'OEG': {
        def: 'operational experts group; operational exposure guidance; operations security executive group',
        src: '1-02'
    },
    'OEH': {
        def: 'occupational and environmental health',
        src: '1-02'
    },
    'OEM': {
        def: 'original equipment manufacturer',
        src: 'JP 4-02'
    },
    'OER': {
        def: 'officer evaluation report; operational electronic intelligence (ELINT) requirements',
        src: 'JP 1-02'
    },
    'OES': {
        def: 'office of emergency services',
        src: 'JP 1-02'
    },
    'OET': {
        def: 'Office of Emergency Transportation (DOT)',
        src: 'JP 1-02'
    },
    'OF': {
        def: 'officer (NATO)',
        src: 'JP 1-02'
    },
    'OFAC': {
        def: 'Office of Foreign Assets Control (TREAS)',
        src: '1-02'
    },
    'OFCO': {
        def: 'offensive counterintelligence operation',
        src: 'JP 1-02'
    },
    'OFDA': {
        def: 'Office of United States Foreign Disaster Assistance (USAID)',
        src: '1-02'
    },
    'OFHIS': {
        def: 'operational fleet hospital information system',
        src: 'JP 1-02'
    },
    'OFOESA': {
        def: 'Office of Field Operational and External Support Activities',
        src: 'JP 1-02'
    },
    'OFSC': {
        def: 'Organizational and Force Structure Construct',
        src: '1-02'
    },
    'OGS': {
        def: 'overseas ground station',
        src: 'JP 1-02'
    },
    'OH': {
        def: 'overhead',
        src: 'JP 1-02'
    },
    'OHDACA': {
        def: 'Overseas Humanitarian, Disaster, and Civic Aid (DSCA)',
        src: '1-02'
    },
    'OHDM': {
        def: 'Office of Humanitarian Assistance, Disaster Relief, and Mine Action',
        src: '1-02'
    },
    'OI': {
        def: 'Office of Intelligence (USCS); operating instruction; operational interest',
        src: '1-02'
    },
    'OI&A': {
        def: 'Office of Intelligence and Analysis (DHS)',
        src: '1-02'
    },
    'OIA': {
        def: 'Office of International Affairs (TREAS)',
        src: '1-02'
    },
    'OIC': {
        def: 'officer in charge',
        src: '1-02'
    },
    'OICC': {
        def: 'officer in charge of construction; operational intelligence coordination center',
        src: '1-02'
    },
    'OID': {
        def: 'operation order (OPORD) identification',
        src: 'JP 1-02'
    },
    'OIF': {
        def: 'Operation IRAQI FREEDOM',
        src: '1-02'
    },
    'OIIL': {
        def: 'Office of Intelligence and Investigative Liaison (CBP)',
        src: '1-02'
    },
    'OIR': {
        def: 'operational intelligence requirements; other intelligence requirements',
        src: 'JP 1-02'
    },
    'OJT': {
        def: 'on-the-job training',
        src: 'JP 1-02'
    },
    'OL': {
        def: 'operating location',
        src: 'JP 1-02'
    },
    'OLD': {
        def: 'on-line tests and diagnostics',
        src: 'JP 1-02'
    },
    'OLS': {
        def: 'operational linescan system; optical landing system',
        src: 'JP 1-02'
    },
    'OM': {
        def: 'contour multiunit',
        src: 'JP 1-02'
    },
    'OMA': {
        def: 'Office of Military Affairs (CIA and USAID)',
        src: '1-02'
    },
    'OMB': {
        def: 'Office of Management and Budget; operations management branch',
        src: '1-02'
    },
    'OMC': {
        def: 'Office of Military Cooperation; optical memory card',
        src: 'JP 1-02'
    },
    'OMF': {
        def: 'officer master file',
        src: 'JP 1-02'
    },
    'OMS': {
        def: 'Office of Mission Support',
        src: 'JP 3-07.3'
    },
    'OMSPH': {
        def: 'Office of Medicine, Science, and Public Health (DHHS)',
        src: '1-02'
    },
    'OMT': {
        def: 'operations management team; orthogonal mode transducer',
        src: 'JP 1-02'
    },
    'OMT/OMTP': {
        def: 'operational maintenance test(ing)/test plan',
        src: 'JP 1-02'
    },
    'ONDCP': {
        def: 'Office of National Drug Control Policy',
        src: 'JP 1-02'
    },
    'ONE': {
        def: 'Operation NOBLE EAGLE',
        src: '1-02'
    },
    'ONI': {
        def: 'Office of Naval Intelligence',
        src: '1-02'
    },
    'OOB': {
        def: 'order of battle',
        src: 'JP 1-02'
    },
    'OOD': {
        def: 'officer of the deck',
        src: '1-02'
    },
    'OODA': {
        def: 'observe, orient, decide, act',
        src: '1-02'
    },
    'OOS': {
        def: 'out of service',
        src: 'JP 1-02'
    },
    'OP': {
        def: 'observation post; operational publication (USN); ordnance publication',
        src: '1-02'
    },
    'OPARS': {
        def: 'Optimum Path Aircraft Routing System',
        src: 'JP 1-02'
    },
    'OPBAT': {
        def: 'Operation Bahamas, Turks, and Caicos',
        src: 'JP 1-02'
    },
    'OPC': {
        def: 'Ocean Prediction Center (DOC)',
        src: '1-02'
    },
    'OPCEN': {
        def: 'operations center (USCG)',
        src: 'JP 1-02'
    },
    'OPCOM': {
        def: 'operational command (NATO)',
        src: 'JP 1-02'
    },
    'OPCON': {
        def: 'operational control',
        src: '1-02'
    },
    'OPDAT': {
        def: 'Office of Overseas Prosecutorial Development, Assistance, and Training (DOJ)',
        src: '1-02'
    },
    'OPDEC': {
        def: 'operational deception',
        src: 'JP 1-02'
    },
    'OPDS': {
        def: 'offshore petroleum discharge system (USN)',
        src: '1-02'
    },
    'OPDS-Future': {
        def: 'offshore petroleum discharge system-future (USN)',
        src: '1-02'
    },
    'OPDS-L': {
        def: 'offshore petroleum discharge system-legacy (USN)',
        src: '1-02'
    },
    'OPE': {
        def: 'operational preparation of the environment',
        src: '1-02'
    },
    'OPELINT': {
        def: 'operational electronic intelligence',
        src: '1-02'
    },
    'OPEO': {
        def: 'Office of Preparedness and Emergency Operations (DHHS)',
        src: '1-02'
    },
    'OPFOR': {
        def: 'opposing force; opposition force',
        src: '1-02'
    },
    'OPG': {
        def: 'operations planning group',
        src: 'JP 1-02'
    },
    'OPGEN': {
        def: 'operation general matter',
        src: '1-02'
    },
    'OPIR': {
        def: 'overhead persistent infrared',
        src: '1-02'
    },
    'OPLAN': {
        def: 'operation plan',
        src: '1-02'
    },
    'OPLAW': {
        def: 'operational law',
        src: 'JP 1-02'
    },
    'OPM': {
        def: 'Office of Personnel Management; operations per minute',
        src: 'JP 1-02'
    },
    'OPMG': {
        def: 'Office of the Provost Marshal General',
        src: 'JP 1-02'
    },
    'OPNAVINST': {
        def: 'Chief of Naval Operations instruction',
        src: '1-02'
    },
    'OPORD': {
        def: 'operation order',
        src: '1-02'
    },
    'OPP': {
        def: 'orderwire patch panel',
        src: '1-02'
    },
    'OPR': {
        def: 'office of primary responsibility',
        src: 'JP 1-02'
    },
    'OPREP': {
        def: 'operational report',
        src: 'JP 1-02'
    },
    'OPROJ': {
        def: 'operational project',
        src: '1-02'
    },
    'OPS': {
        def: 'operational project stock; operations; operations center',
        src: 'JP 1-02'
    },
    'OPSCOM': {
        def: 'Operations Committee',
        src: 'JP 2-03'
    },
    'OPSDEPS': {
        def: 'Service Operations Deputies',
        src: 'JP 1-02'
    },
    'OPSEC': {
        def: 'operations security',
        src: '1-02'
    },
    'OPSTK': {
        def: 'operational stock',
        src: 'JP 1-02'
    },
    'OPSUM': {
        def: 'operation summary',
        src: 'JP 1-02'
    },
    'OPT': {
        def: 'operational planning team',
        src: 'JP 1-02'
    },
    'OPTAR': {
        def: 'operating target',
        src: 'JP 1-02'
    },
    'OPTASK': {
        def: 'operation task',
        src: '1-02'
    },
    'OPTASKLINK': {
        def: 'operations task link',
        src: '1-02'
    },
    'OPTEMPO': {
        def: 'operating tempo',
        src: '1-02'
    },
    'OPTINT': {
        def: 'optical intelligence',
        src: 'JP 1-02'
    },
    'OPZONE': {
        def: 'operation zone',
        src: 'JP 1-02'
    },
    'OR': {
        def: 'operational readiness; other rank(s) (NATO)',
        src: 'JP 1-02'
    },
    'ORBAT': {
        def: 'order of battle',
        src: 'JP 1-02'
    },
    'ORCON': {
        def: 'originator controlled',
        src: 'JP 1-02'
    },
    'ORDREF': {
        def: 'order reference',
        src: 'JP 1-02'
    },
    'ORDTYP': {
        def: 'order type',
        src: 'JP 1-02'
    },
    'ORG': {
        def: 'origin (GELOC)',
        src: 'JP 1-02'
    },
    'ORIG': {
        def: 'origin',
        src: 'JP 1-02'
    },
    'ORM': {
        def: 'operational risk management',
        src: 'JP 4-02'
    },
    'ORP': {
        def: 'ocean reception point',
        src: '1-02'
    },
    'ORS': {
        def: 'operationally responsive space',
        src: '1-02'
    },
    'ORSA': {
        def: 'operations research and systems analysis',
        src: '1-02'
    },
    'OS': {
        def: 'operating system',
        src: 'JP 1-02'
    },
    'OSA': {
        def: 'operational support airlift',
        src: '1-02'
    },
    'OSAT': {
        def: 'out-of-service analog test',
        src: 'JP 1-02'
    },
    'OSC': {
        def: 'offensive space control; on-scene commander; on-site commander; Open Source Center (CIA); operational support command; operations support center',
        src: '1-02'
    },
    'OSCE': {
        def: 'Organization for Security and Cooperation in Europe',
        src: '1-02'
    },
    'OSD': {
        def: 'Office of the Secretary of Defense',
        src: '1-02'
    },
    'OSD/DMDPO': {
        def: 'Office of the Secretary of Defense, Defense Military Deception Program Office',
        src: '1-02'
    },
    'OSE': {
        def: 'on scene endurance; operations support element',
        src: 'JP 1-02'
    },
    'OSEI': {
        def: 'operational significant event imagery',
        src: '1-02'
    },
    'OSG': {
        def: 'operational support group',
        src: 'JP 1-02'
    },
    'OSI': {
        def: 'open system interconnection; operational subsystem interface',
        src: 'JP 1-02'
    },
    'OSIA': {
        def: 'on-site inspection activity',
        src: 'JP 1-02'
    },
    'OSINT': {
        def: 'open-source information; open-source intelligence',
        src: '1-02'
    },
    'OSIS': {
        def: 'open-source information system',
        src: 'JP 1-02'
    },
    'OSM': {
        def: 'Office of Spectrum Management (NTIA)',
        src: '1-02'
    },
    'OSO': {
        def: 'operational support office',
        src: 'JP 1-02'
    },
    'OSOCC': {
        def: 'on-site operations coordination center',
        src: '1-02'
    },
    'OSP': {
        def: 'operations support package',
        src: 'JP 1-02'
    },
    'OSPG': {
        def: 'overseas security policy group',
        src: 'JP 1-02'
    },
    'OSRI': {
        def: 'originating station routing indicator',
        src: 'JP 1-02'
    },
    'OSV': {
        def: 'ocean station vessel',
        src: 'JP 1-02'
    },
    'OT': {
        def: 'operational test',
        src: 'JP 1-02'
    },
    'OT&E': {
        def: 'operational test and evaluation',
        src: 'JP 1-02'
    },
    'OTA': {
        def: 'Office of Technical Assistance (TREAS)',
        src: '1-02'
    },
    'OTC': {
        def: 'officer in tactical command; over the counter',
        src: '1-02'
    },
    'OTG': {
        def: 'operational target graphic',
        src: 'JP 1-02'
    },
    'OTH': {
        def: 'other; over the horizon',
        src: 'JP 1-02'
    },
    'OTH-B': {
        def: 'over-the-horizon backscatter (radar)',
        src: 'JP 1-02'
    },
    'OTHT': {
        def: 'over-the-horizon targeting',
        src: 'JP 1-02'
    },
    'OTI': {
        def: 'Office of Transition Initiatives (USAID)',
        src: '1-02'
    },
    'OTS': {
        def: 'Officer Training School; one-time source',
        src: 'JP 1-02'
    },
    'OUB': {
        def: 'offshore petroleum discharge system utility boat',
        src: '1-02'
    },
    'OUSD': {
        def: 'Office of the Under Secretary of Defense',
        src: 'JP 1-02'
    },
    'OUSD(AT&L)': {
        def: 'Office of the Under Secretary of Defense (Acquisition, Technology, and Logistics)',
        src: 'JP 1-02'
    },
    'OUSD(C)': {
        def: 'Office of the Under Secretary of Defense (Comptroller)',
        src: '1-02'
    },
    'OUSD(C/CFO)': {
        def: 'Office of the Under Secretary of Defense (Comptroller/Chief Financial Officer)',
        src: '1-02'
    },
    'OUSD(I)': {
        def: 'Office of the Under Secretary of Defense (Intelligence)',
        src: '1-02'
    },
    'OUSD(P)': {
        def: 'Office of the Under Secretary of Defense for Policy',
        src: '1-02'
    },
    'OUT': {
        def: 'outsize cargo',
        src: 'JP 1-02'
    },
    'OVE': {
        def: 'on-vehicle equipment',
        src: 'JP 1-02'
    },
    'OVER': {
        def: 'oversize cargo',
        src: 'JP 1-02'
    },
    'OVM': {
        def: 'Operation VIGILANT MARINER',
        src: '1-02'
    },
    'OW': {
        def: 'orderwire',
        src: 'JP 1-02'
    },
    'OWS': {
        def: 'operational weather squadron',
        src: '1-02'
    },
    'P': {
        def: 'parallel pattern; priority; publication',
        src: '1-02'
    },
    'P,C,&H': {
        def: 'packing, crating, and handling',
        src: 'JP 1-02'
    },
    'p-p': {
        def: 'peak-to-peak',
        src: 'JP 1-02'
    },
    'P-STATIC': {
        def: 'precipitation static',
        src: 'JP 1-02'
    },
    'P/M/C': {
        def: 'passengers/mail/cargo',
        src: 'JP 1-02'
    },
    'P/O': {
        def: 'part of',
        src: 'JP 1-02'
    },
    'P/P': {
        def: 'patch panel',
        src: 'JP 1-02'
    },
    'PA': {
        def: 'parent relay; physician assistant; primary agency; probability of arrival; public affairs',
        src: '1-02'
    },
    'PAA': {
        def: 'position area of artillery',
        src: '1-02'
    },
    'PABX': {
        def: 'private automatic branch exchange (telephone)',
        src: 'JP 1-02'
    },
    'PACAF': {
        def: 'Pacific Air Forces',
        src: 'JP 1-02'
    },
    'PAD': {
        def: 'patient administration director; positional adjustment; precision aircraft direction',
        src: 'JP 1-02'
    },
    'PADD': {
        def: 'person authorized to direct disposition of human remains',
        src: 'JP 1-02'
    },
    'PADRU': {
        def: 'Pan American Disaster Response Unit',
        src: '1-02'
    },
    'PADS': {
        def: 'position azimuth determining system',
        src: 'JP 1-02'
    },
    'PAG': {
        def: 'public affairs guidance',
        src: '1-02'
    },
    'PAL': {
        def: 'personnel allowance list; program assembler language',
        src: '1-02'
    },
    'PALCON': {
        def: 'pallet container',
        src: '1-02'
    },
    'PALS': {
        def: 'precision approach landing system',
        src: 'JP 1-02'
    },
    'PAM': {
        def: 'preventive and aerospace medicine; pulse amplitude modulation ',
        src: '1-02'
    },
    'PaM': {
        def: 'passage material',
        src: '1-02'
    },
    'PANS': {
        def: 'procedures for air navigation services',
        src: 'JP 1-02'
    },
    'PAO': {
        def: 'public affairs office; public affairs officer',
        src: '1-02'
    },
    'PAR': {
        def: 'performance assessment report; population at risk; precision approach radar',
        src: 'JP 1-02'
    },
    'PARC': {
        def: 'principal assistant for contracting',
        src: 'JP 3-33'
    },
    'PARKHILL': {
        def: 'high frequency cryptological device',
        src: 'JP 1-02'
    },
    'PARPRO': {
        def: 'peacetime application of reconnaissance programs',
        src: 'JP 1-02'
    },
    'PARS': {
        def: 'Personnel and Accountability System',
        src: '1-02'
    },
    'PAS': {
        def: 'personnel accounting symbol',
        src: 'JP 1-02'
    },
    'PAT': {
        def: 'public affairs team',
        src: 'JP 1-02'
    },
    'PAV': {
        def: 'policy assessment visit',
        src: 'JP 1-02'
    },
    'PAWS': {
        def: 'phased array warning system',
        src: 'JP 1-02'
    },
    'PAX': {
        def: 'passengers; public affairs plans',
        src: '1-02'
    },
    'PB': {
        def: 'particle beam; patrol boat; peace building; President\'s budget',
        src: '1-02'
    },
    'PB4T': {
        def: 'planning board for training',
        src: 'JP 3-04'
    },
    'PBA': {
        def: 'performance-based agreement; production base analysis',
        src: 'JP 1-02'
    },
    'PBCR': {
        def: 'portable bar code recorder',
        src: 'JP 1-02'
    },
    'PBD': {
        def: 'program budget decision',
        src: 'JP 1-02'
    },
    'PBIED': {
        def: 'person-borne improvised explosive device',
        src: '1-02'
    },
    'PBOS': {
        def: 'Planning Board for Ocean Shipping',
        src: '1-02'
    },
    'Pc': {
        def: 'cumulative probability of detection',
        src: 'JP 1-02'
    },
    'PC': {
        def: 'patrol craft; personal computer; pilot in command; preliminary coordination; Principals Committee',
        src: '1-02'
    },
    'PC&S': {
        def: 'post, camp, and station',
        src: '1-02'
    },
    'PC-LITE': {
        def: 'processor, laptop imagery transmission equipment',
        src: 'JP 1-02'
    },
    'PCA': {
        def: 'Posse Comitatus Act',
        src: '1-02'
    },
    'PCC': {
        def: 'policy coordination committee; primary control center',
        src: '1-02'
    },
    'PCF': {
        def: 'personnel control facility',
        src: 'JP 1-02'
    },
    'PCL': {
        def: 'positive control launch',
        src: 'JP 1-02'
    },
    'PCM': {
        def: 'pulse code modulation',
        src: 'JP 1-02'
    },
    'PCO': {
        def: 'primary control officer; procuring contracting officer',
        src: '1-02'
    },
    'PCRTS': {
        def: 'primary casualty receiving and treatment ship',
        src: 'JP 1-02'
    },
    'PCS': {
        def: 'permanent change of station; personal communications system; primary control ship; processing subsystem; processor controlled strapping',
        src: 'JP 1-02'
    },
    'PCT': {
        def: 'personnel control team',
        src: 'JP 1-02'
    },
    'PCTC': {
        def: 'pure car and truck carrier',
        src: '1-02'
    },
    'PCZ': {
        def: 'physical control zone',
        src: 'JP 1-02'
    },
    'Pd': {
        def: 'drift compensated parallelogram pattern',
        src: 'JP 1-02'
    },
    'PD': {
        def: 'position description; Presidential directive; priority designator; probability of damage; probability of detection; procedures description; program definition; program directive; program director; public diplomacy',
        src: '1-02'
    },
    'PDA': {
        def: 'preliminary damage assessment',
        src: 'JP 3-08'
    },
    'PDAI': {
        def: 'primary development/test aircraft inventory',
        src: 'JP 1-02'
    },
    'PDC': {
        def: 'Pacific Disaster Center',
        src: '1-02'
    },
    'PDD': {
        def: 'Presidential decision directive',
        src: 'JP 1-02'
    },
    'PDDA': {
        def: 'power driven decontamination apparatus',
        src: 'JP 1-02'
    },
    'PDDG': {
        def: 'program directive development group',
        src: 'JP 1-02'
    },
    'PDG': {
        def: 'positional data graphic',
        src: 'JP 1-02'
    },
    'PDM': {
        def: 'program decision memorandum',
        src: 'JP 1-02'
    },
    'PDOP': {
        def: 'position dilution of precision',
        src: 'JP 1-02'
    },
    'PDS': {
        def: 'position determining system; primary distribution site; protected distribution system',
        src: 'JP 1-02'
    },
    'PDSC': {
        def: 'public diplomacy and strategic communication',
        src: '1-02'
    },
    'PDSS': {
        def: 'predeployment site survey',
        src: '1-02'
    },
    'PDT': {
        def: 'partnership development team',
        src: '1-02'
    },
    'PDUSD(P&R)': {
        def: 'Principal Deputy Under Secretary of Defense (Personnel and Readiness)',
        src: '1-02'
    },
    'PE': {
        def: 'peace enforcement; peacetime establishment; personal effects; preparation of the environment; program element',
        src: '1-02'
    },
    'PEAD': {
        def: 'Presidential emergency action document',
        src: 'JP 1-02'
    },
    'PEC': {
        def: 'program element code',
        src: 'JP 1-02'
    },
    'PECK': {
        def: 'patient evacuation contingency kit',
        src: 'JP 1-02'
    },
    'PECP': {
        def: 'precision engagement collaboration process',
        src: 'JP 1-02'
    },
    'PED': {
        def: 'processing, exploitation, and dissemination',
        src: '1-02'
    },
    'PEDB': {
        def: 'planning and execution database',
        src: 'JP 1-02'
    },
    'PEGEO': {
        def: 'personnel geographic location',
        src: 'JP 1-02'
    },
    'PEI': {
        def: 'principal end item',
        src: 'JP 1-02'
    },
    'PEIO': {
        def: 'personnel effects inventory officer',
        src: '1-02'
    },
    'PEM': {
        def: 'program element monitor',
        src: 'JP 1-02'
    },
    'PEO': {
        def: 'peace enforcement operations; program executive office; program executive officer',
        src: '1-02'
    },
    'PEP': {
        def: 'personnel exchange program',
        src: 'JP 1-02'
    },
    'PER': {
        def: 'personnel',
        src: 'JP 1-02'
    },
    'PERE': {
        def: 'person eligible to receive effects',
        src: 'JP 1-02'
    },
    'PERID': {
        def: 'period',
        src: 'JP 1-02'
    },
    'PERMA': {
        def: 'planning, embarkation, rehearsal, movement, and action',
        src: '1-02'
    },
    'PERMREP': {
        def: 'permanent representative (NATO)',
        src: 'JP 1-02'
    },
    'PERSCO': {
        def: 'personnel support for contingency operations',
        src: 'JP 1-02'
    },
    'PERSCOM': {
        def: 'personnel command (Army)',
        src: 'JP 1-02'
    },
    'PERSINS': {
        def: 'personnel information system',
        src: 'JP 1-02'
    },
    'PES': {
        def: 'preparedness evaluation system',
        src: 'JP 1-02'
    },
    'PFA': {
        def: 'primary federal agency',
        src: 'JP 4-06'
    },
    'PFD': {
        def: 'personal flotation device',
        src: 'JP 1-02'
    },
    'PFDB': {
        def: 'planning factors database',
        src: 'JP 1-02'
    },
    'PFIAB': {
        def: 'President\'s Foreign Intelligence Advisory Board',
        src: 'JP 1-02'
    },
    'PFID': {
        def: 'positive friendly identification',
        src: 'JP 1-02'
    },
    'PFO': {
        def: 'principal federal offical',
        src: '1-02'
    },
    'PfP': {
        def: 'Partnership for Peace (NATO)',
        src: '1-02'
    },
    'PGI': {
        def: 'procedures, guidance, and information',
        src: '1-02'
    },
    'PGM': {
        def: 'precision-guided munition',
        src: '1-02'
    },
    'pH': {
        def: 'potential of hydrogen',
        src: 'JP 4-06'
    },
    'PHEO': {
        def: 'public health emergency officer',
        src: 'JP 3-11'
    },
    'PHIBCB': {
        def: 'amphibious construction battalion',
        src: '1-02'
    },
    'PHIBGRU': {
        def: 'amphibious group',
        src: 'JP 1-02'
    },
    'PHIBOP': {
        def: 'amphibious operation',
        src: 'JP 1-02'
    },
    'PHIBRON': {
        def: 'amphibious squadron',
        src: 'JP 1-02'
    },
    'PHIT': {
        def: 'port handling/in-land transportation',
        src: '1-02'
    },
    'PHO': {
        def: 'posthostilities operations',
        src: 'JP 1-02'
    },
    'PHS': {
        def: 'Public Health Service',
        src: 'JP 1-02'
    },
    'PI': {
        def: 'pandemic influenza; point of impact; probability of incapacitation; procedural item; purposeful interference',
        src: '1-02'
    },
    'PIAB': {
        def: 'President’s Intelligence Advisory Board',
        src: '1-02'
    },
    'PIC': {
        def: 'parent indicator code; payment in cash; person identification code; pilot in command; press information center (NATO)',
        src: '1-02'
    },
    'PID': {
        def: 'plan identification number; positive identification',
        src: '1-02'
    },
    'PIDD': {
        def: 'planned inactivation or discontinued date',
        src: 'JP 1-02'
    },
    'PIF': {
        def: 'problem identification flag',
        src: 'JP 1-02'
    },
    'PII': {
        def: 'pre-incident indicators',
        src: 'JP 1-02'
    },
    'PIM': {
        def: 'pretrained individual manpower',
        src: 'JP 1-02'
    },
    'PIN': {
        def: 'personnel increment number',
        src: 'JP 1-02'
    },
    'PINS': {
        def: 'precise integrated navigation system',
        src: 'JP 1-02'
    },
    'PIO': {
        def: 'press information officer; public information officer',
        src: '1-02'
    },
    'PIPS': {
        def: 'plans integration partitioning system',
        src: 'JP 1-02'
    },
    'PIR': {
        def: 'priority intelligence requirement',
        src: '1-02'
    },
    'PIREP': {
        def: 'pilot report',
        src: '1-02'
    },
    'PIRT': {
        def: 'purposeful interference response team',
        src: '1-02'
    },
    'PIW': {
        def: 'person in water',
        src: 'JP 1-02'
    },
    'PJ': {
        def: 'pararescue jumper',
        src: 'JP 1-02'
    },
    'PK': {
        def: 'peacekeeping; probability of kill',
        src: '1-02'
    },
    'PKG-POL': {
        def: 'packaged petroleum, oils, and lubricants',
        src: 'JP 1-02'
    },
    'PKI': {
        def: 'public key infrastructure',
        src: 'JP 1-02'
    },
    'PKO': {
        def: 'peacekeeping operations',
        src: '1-02'
    },
    'PKP': {
        def: 'purple k powder',
        src: 'JP 1-02'
    },
    'PKSOI': {
        def: 'Peacekeeping and Stability Operations Institute',
        src: '1-02'
    },
    'PL': {
        def: 'phase line; public law',
        src: 'JP 1-02'
    },
    'PLA': {
        def: 'plain language address',
        src: 'JP 1-02'
    },
    'PLAD': {
        def: 'plain language address directory',
        src: '1-02'
    },
    'PLANORD': {
        def: 'planning order',
        src: 'JP 1-02'
    },
    'PLAT': {
        def: 'pilot\'s landing aid television',
        src: 'JP 1-02'
    },
    'PLB': {
        def: 'personal locator beacon',
        src: 'JP 1-02'
    },
    'PLC': {
        def: 'power line conditioner',
        src: 'JP 1-02'
    },
    'PLGR': {
        def: 'precise lightweight global positioning system (GPS) receiver',
        src: 'JP 1-02'
    },
    'PLL': {
        def: 'phase locked loop',
        src: 'JP 1-02'
    },
    'PLL/ASL': {
        def: 'prescribed load list/authorized stock level',
        src: 'JP 1-02'
    },
    'PLRS': {
        def: 'position location reporting system',
        src: 'JP 1-02'
    },
    'PLS': {
        def: 'palletized load system; personal locator system; pillars of logistic support: precision locator system',
        src: '1-02'
    },
    'PLT': {
        def: 'platoon; program library tape',
        src: 'JP 1-02'
    },
    'PM': {
        def: 'Bureau of Political-Military Affairs (DOS); parallel track multiunit; passage material; patient movement; peacemaking; political-military affairs; preventive medicine; program management; program manager; provost marshal',
        src: '1-02'
    },
    'PMA': {
        def: 'political/military assessment',
        src: 'JP 1-02'
    },
    'PMAA': {
        def: 'Production Management Alternative Architecture',
        src: 'JP 2-03'
    },
    'PMAI': {
        def: 'primary mission aircraft inventory',
        src: 'JP 1-02'
    },
    'PMC': {
        def: 'parallel multiunit circle; private military company',
        src: '1-02'
    },
    'PMCF': {
        def: 'post maintenance check flight',
        src: '1-02'
    },
    'PMCT': {
        def: 'port movement control team',
        src: 'JP 1-02'
    },
    'PMD': {
        def: 'program management directive',
        src: 'JP 1-02'
    },
    'PME': {
        def: 'professional military education',
        src: '1-02'
    },
    'PMEL': {
        def: 'precision measurement equipment laboratory',
        src: 'JP 1-02'
    },
    'PMESII': {
        def: 'political, military, economic, social, information, and infrastructure',
        src: '1-02'
    },
    'PMGM': {
        def: 'program manager\'s guidance memorandum',
        src: 'JP 1-02'
    },
    'PMI': {
        def: 'patient movement item; prevention of mutual interference',
        src: '1-02'
    },
    'PMITS': {
        def: 'Patient Movement Item Tracking System',
        src: '1-02'
    },
    'PMN': {
        def: 'parallel track multiunit non-return',
        src: 'JP 1-02'
    },
    'PMO': {
        def: 'production management office(r); program management office',
        src: '1-02'
    },
    'PMOS': {
        def: 'primary military occupational specialty',
        src: 'JP 1-02'
    },
    'PMR': {
        def: 'parallel track multiunit return; patient movement request; patient movement requirement',
        src: 'JP 1-02'
    },
    'PMRC': {
        def: 'patient movement requirements center',
        src: '1-02'
    },
    'PMS': {
        def: 'portable meteorological subsystem',
        src: 'JP 1-02'
    },
    'PN': {
        def: 'partner nation; pseudonoise',
        src: '1-02'
    },
    'PNA': {
        def: 'postal net alert',
        src: '1-02'
    },
    'PNID': {
        def: 'precedence network in dialing',
        src: 'JP 1-02'
    },
    'PNT': {
        def: 'positioning, navigation, and timing',
        src: '1-02'
    },
    'PNVS': {
        def: 'pilot night vision system',
        src: 'JP 1-02'
    },
    'PO': {
        def: 'peace operations; petty officer',
        src: '1-02'
    },
    'POA': {
        def: 'plan of action',
        src: 'JP 1-02'
    },
    'POAI': {
        def: 'primary other aircraft inventory',
        src: 'JP 1-02'
    },
    'POB': {
        def: 'persons on board',
        src: '1-02'
    },
    'POC': {
        def: 'point of contact',
        src: '1-02'
    },
    'POCD': {
        def: 'port operations cargo detachment',
        src: 'JP 4-01.6'
    },
    'POD': {
        def: 'plan of the day; port of debarkation; probability of detection',
        src: '1-02'
    },
    'POE': {
        def: 'port of embarkation; port of entry',
        src: '1-02'
    },
    'POES': {
        def: 'polar operational environment satellite',
        src: '1-02'
    },
    'POF': {
        def: 'priority of fires'
    },
    'POG': {
        def: 'port operations group',
        src: '1-02'
    },
    'POI': {
        def: 'program of instruction',
        src: '1-02'
    },
    'POL': {
        def: 'petroleum, oils, and lubricants',
        src: '1-02'
    },
    'POLAD': {
        def: 'policy advisor; political advisor ',
        src: '1-02'
    },
    'POLCAP': {
        def: 'bulk petroleum capabilities report',
        src: 'JP 1-02'
    },
    'POLMIL': {
        def: 'political-military',
        src: 'JP 1-02'
    },
    'POM': {
        def: 'program objective memorandum',
        src: 'JP 1-02'
    },
    'POMCUS': {
        def: 'pre-positioning of materiel configured to unit sets',
        src: 'JP 1-02'
    },
    'POMSO': {
        def: 'Plans, Operations, and Military Support Office(r) (NG)',
        src: 'JP 1-02'
    },
    'POP': {
        def: 'performance oriented packaging',
        src: 'JP 1-02'
    },
    'POPS': {
        def: 'port operational performance simulator',
        src: 'JP 1-02'
    },
    'POR': {
        def: 'proposed operational requirement',
        src: 'JP 1-02'
    },
    'PORTS': {
        def: 'portable remote telecommunications system',
        src: 'JP 1-02'
    },
    'PORTSIM': {
        def: 'port simulation model',
        src: '1-02'
    },
    'POS': {
        def: 'peacetime operating stocks; point of sale; probability of success',
        src: '1-02'
    },
    'POSF': {
        def: 'port of support file',
        src: 'JP 1-02'
    },
    'POSSUB': {
        def: 'possible submarine',
        src: 'JP 1-02'
    },
    'POSTMOB': {
        def: 'post mobilization',
        src: 'JP 1-02'
    },
    'POTUS': {
        def: 'President of the United States',
        src: 'JP 1-02'
    },
    'POV': {
        def: 'privately owned vehicle',
        src: 'JP 1-02'
    },
    'POW': {
        def: 'prisoner of war',
        src: '1-02'
    },
    'PPA': {
        def: 'personnel information system (PERSINS) personnel activity',
        src: 'JP 1-02'
    },
    'PPAG': {
        def: 'proposed public affairs guidance',
        src: 'JP 1-02'
    },
    'PPBE': {
        def: 'Planning, Programming, Budgeting, and Execution',
        src: '1-02'
    },
    'PPD': {
        def: 'Presidential policy directive; program planning document',
        src: '1-02'
    },
    'PPDB': {
        def: 'point positioning database',
        src: 'JP 1-02'
    },
    'PPE': {
        def: 'personal protective equipment',
        src: '1-02'
    },
    'PPF': {
        def: 'personnel processing file',
        src: 'JP 3-50'
    },
    'Pplan': {
        def: 'programming plan',
        src: 'JP 1-02'
    },
    'PPLI': {
        def: 'precise participant location and identification',
        src: '1-02'
    },
    'ppm': {
        def: 'parts per million',
        src: 'JP 1-02'
    },
    'PPP': {
        def: 'power projection platform; primary patch panel; priority placement program',
        src: 'JP 1-02'
    },
    'PPR': {
        def: 'prior permission required',
        src: 'JP 1-02'
    },
    'PPS': {
        def: 'precise positioning service',
        src: '1-02'
    },
    'PPTO': {
        def: 'petroleum pipeline and terminal operating',
        src: '1-02'
    },
    'PR': {
        def: 'personnel recovery; Phoenix Raven; primary zone; production requirement; program review',
        src: '1-02'
    },
    'PRA': {
        def: 'patient reception area; primary review authority',
        src: '1-02'
    },
    'PRANG': {
        def: 'Puerto Rican Air National Guard',
        src: 'JP 1-02'
    },
    'PRBS': {
        def: 'pseudorandom binary sequence',
        src: 'JP 1-02'
    },
    'PRC': {
        def: 'populace and resources control; Presidential Reserve Call-up',
        src: '1-02'
    },
    'PRCC': {
        def: 'personnel recovery coordination cell; personnel recovery coordination center',
        src: '1-02'
    },
    'PRCS': {
        def: 'personnel recovery coordination section',
        src: '1-02'
    },
    'PRD': {
        def: 'personnel readiness division; Presidential review directive',
        src: 'JP 1-02'
    },
    'PRDO': {
        def: 'personnel recovery duty officer',
        src: '1-02'
    },
    'PREMOB': {
        def: 'pre-mobilization',
        src: 'JP 1-02'
    },
    'PREPO': {
        def: 'pre-positioned force, equipment, or supplies; pre-positioning',
        src: '1-02'
    },
    'PREREP': {
        def: 'pre-arrival report',
        src: '1-02'
    },
    'PRF': {
        def: 'personnel resources file; pulse repetition frequency',
        src: '1-02'
    },
    'PRG': {
        def: 'personnel recovery guidance; program review group',
        src: '1-02'
    },
    'PRI': {
        def: 'movement priority for forces having the same latest arrival date (LAD); priority; progressive routing indicator',
        src: 'JP 1-02'
    },
    'PRIFLY': {
        def: 'primary flight control',
        src: '1-02'
    },
    'Prime BEEF': {
        def: 'Prime Base Engineer Emergency Force',
        src: '1-02'
    },
    'PRISM': {
        def: 'Planning Tool for Resource, Integration, Synchronization, and Management',
        src: '1-02'
    },
    'PRM': {
        def: 'Bureau of Population, Refugees, and Migration (DOS); Presidential review memorandum',
        src: '1-02'
    },
    'PRMFL': {
        def: 'perm file',
        src: 'JP 1-02'
    },
    'PRMS': {
        def: 'personnel recovery mission software',
        src: '1-02'
    },
    'PRN': {
        def: 'pseudorandom noise',
        src: 'JP 1-02'
    },
    'PRO': {
        def: 'personnel recovery officer',
        src: 'JP 3-50'
    },
    'PROBSUB': {
        def: 'probable submarine',
        src: 'JP 1-02'
    },
    'PROC': {
        def: 'processor; Puerto Rican Operations Center',
        src: 'JP 1-02'
    },
    'PROFIS': {
        def: 'professional officer filler information system',
        src: 'JP 1-02'
    },
    'PROM': {
        def: 'programmable read-only memory',
        src: 'JP 1-02'
    },
    'PROPIN': {
        def: 'caution - proprietary information involved',
        src: 'JP 1-02'
    },
    'PROVORG': {
        def: 'providing organization',
        src: 'JP 1-02'
    },
    'proword': {
        def: 'procedure word',
        src: 'JP 1-02'
    },
    'PRP': {
        def: 'personnel reliability program; Personnel Retrieval and Processing',
        src: '1-02'
    },
    'PRRIS': {
        def: 'Puerto Rican radar integration system',
        src: 'JP 1-02'
    },
    'PRSL': {
        def: 'primary zone/switch location',
        src: 'JP 1-02'
    },
    'PRT': {
        def: 'patient reception team; provincial reconstruction team',
        src: '1-02'
    },
    'PRTF': {
        def: 'personnel recovery task force',
        src: '1-02'
    },
    'PRU': {
        def: 'pararescue unit; primary reporting unit',
        src: 'JP 1-02'
    },
    'PS': {
        def: 'parallel track single-unit; port security; processing subsystem',
        src: '1-02'
    },
    'PS/HD': {
        def: 'port security/harbor defense',
        src: '1-02'
    },
    'PSA': {
        def: 'port support activity; principal staff assistant',
        src: '1-02'
    },
    'PSB': {
        def: 'poststrike base',
        src: 'JP 1-02'
    },
    'PSC': {
        def: 'port security company; principal subordinate command; private security contractor',
        src: '1-02'
    },
    'PSD': {
        def: 'planning systems division; port security detachment',
        src: '1-02'
    },
    'PSE': {
        def: 'peculiar support equipment ',
        src: '1-02'
    },
    'PSHDGRU': {
        def: 'port security and harbor defense group',
        src: 'JP 1-02'
    },
    'PSI': {
        def: 'Proliferation Security Initiative',
        src: '1-02'
    },
    'psi': {
        def: 'pounds per square inch',
        src: '1-02'
    },
    'PSK': {
        def: 'phase-shift keying',
        src: '1-02'
    },
    'PSL': {
        def: 'parallel track single-unit long-range aid to navigation (LORAN)',
        src: 'JP 1-02'
    },
    'PSMS': {
        def: 'Personnel Status Monitoring System',
        src: 'JP 1-02'
    },
    'PSN': {
        def: 'packet switching node; public switch network',
        src: 'JP 1-02'
    },
    'PSO': {
        def: 'peace support operations (NATO); post security officer',
        src: 'JP 1-02'
    },
    'PSP': {
        def: 'perforated steel planking; portable sensor platform; power support platform',
        src: 'JP 1-02'
    },
    'PSS': {
        def: 'parallel single-unit spiral; personnel services support',
        src: 'JP 1-02'
    },
    'PSTN': {
        def: 'public switched telephone network',
        src: 'JP 1-02'
    },
    'PSU': {
        def: 'port security unit',
        src: '1-02'
    },
    'PSV': {
        def: 'psuedosynthetic video',
        src: 'JP 1-02'
    },
    'PTA': {
        def: 'position, time, altitude',
        src: 'JP 1-02'
    },
    'PTAI': {
        def: 'primary training aircraft inventory',
        src: 'JP 1-02'
    },
    'PTC': {
        def: 'peace through confrontation; primary traffic channel',
        src: 'JP 1-02'
    },
    'PTDO': {
        def: 'prepare to deploy order',
        src: 'JP 5-0'
    },
    'PTM': {
        def: 'personnel transport module',
        src: '1-02'
    },
    'PTT': {
        def: 'postal telephone and telegraph; public telephone and telegraph; push-to-talk',
        src: 'JP 1-02'
    },
    'PTTI': {
        def: 'precise time and time interval',
        src: 'JP 1-02'
    },
    'pub': {
        def: 'publication',
        src: 'JP 1-02'
    },
    'PUK': {
        def: 'packup kit',
        src: 'JP 1-02'
    },
    'PUL': {
        def: 'parent unit level',
        src: 'JP 1-02'
    },
    'PV': {
        def: 'prime vendor',
        src: '1-02'
    },
    'PVNTMED': {
        def: 'preventive medicine',
        src: '1-02'
    },
    'PVT': {
        def: 'positioning, velocity, and timing',
        src: 'JP 1-02'
    },
    'PW': {
        def: 'prisoner of war',
        src: 'JP 1-02'
    },
    'pW': {
        def: 'picowatt',
        src: 'JP 1-02'
    },
    'PWB': {
        def: 'printed wiring board (assembly)',
        src: 'JP 1-02'
    },
    'PWD': {
        def: 'programmed warhead detonation',
        src: 'JP 1-02'
    },
    'PWF': {
        def: 'personnel working file',
        src: 'JP 1-02'
    },
    'PWG': {
        def: 'protection working group',
        src: '1-02'
    },
    'PWIS': {
        def: 'Prisoner of War Information System',
        src: 'JP 1-02'
    },
    'PWR': {
        def: 'pre-positioned wartime reserves',
        src: 'JP 1-02'
    },
    'PWRMR': {
        def: 'pre-positioned war materiel requirement',
        src: 'JP 1-02'
    },
    'PWRMS': {
        def: 'pre-positioned war reserve materiel stock',
        src: 'JP 1-02'
    },
    'PWRR': {
        def: 'petroleum war reserve requirements'
    },
    'PWRS': {
        def: 'petroleum war reserve stocks; pre-positioned war reserve stock',
        src: 'JP 1-02'
    },
    'PWS': {
        def: 'performance work statement',
        src: '1-02'
    },
    'PZ': {
        def: 'pickup zone',
        src: 'JP 1-02'
    },
    'QA': {
        def: 'quality assurance',
        src: 'JP 1-02'
    },
    'QAM': {
        def: 'quadrature amplitude modulation',
        src: 'JP 1-02'
    },
    'QAR': {
        def: 'quality assurance representative',
        src: '1-02'
    },
    'QAT': {
        def: 'quality assurance team',
        src: 'JP 1-02'
    },
    'QC': {
        def: 'quality control',
        src: 'JP 1-02'
    },
    'QD': {
        def: 'quality distance',
        src: 'JP 1-02'
    },
    'QDR': {
        def: 'quadrennial defense review; quality deficiency report',
        src: '1-02'
    },
    'QEEM': {
        def: 'quick erect expandable mast',
        src: 'JP 1-02'
    },
    'QHDA': {
        def: 'qualified hazardous duty area',
        src: '1-02'
    },
    'QIP': {
        def: 'quick impact project',
        src: '1-02'
    },
    'QM': {
        def: 'quartermaster',
        src: '1-02'
    },
    'QPSK': {
        def: 'quadrature phase shift keying',
        src: 'JP 1-02'
    },
    'QRA': {
        def: 'quick reaction antenna',
        src: 'JP 1-02'
    },
    'QRCT': {
        def: 'quick reaction communications terminal',
        src: 'JP 1-02'
    },
    'QRE': {
        def: 'quick reaction element',
        src: 'JP 1-02'
    },
    'QRF': {
        def: 'quick reaction force; quick response force',
        src: '1-02'
    },
    'QRG': {
        def: 'quick response graphic',
        src: 'JP 1-02'
    },
    'QRP': {
        def: 'quick response posture',
        src: 'JP 1-02'
    },
    'QRS': {
        def: 'quick reaction strike',
        src: 'JP 1-02'
    },
    'QRSA': {
        def: 'quick reaction satellite antenna',
        src: 'JP 1-02'
    },
    'QRT': {
        def: 'quick reaction team',
        src: 'JP 1-02'
    },
    'QS': {
        def: 'quality surveillance',
        src: '1-02'
    },
    'QSR': {
        def: 'quality surveillance representative'
    },
    'QSTAG': {
        def: 'quadripartite standardization agreement',
        src: '1-02'
    },
    'QTY': {
        def: 'quantity',
        src: 'JP 1-02'
    },
    'QUADCON': {
        def: 'quadruple container',
        src: '1-02'
    },
    'R': {
        def: 'routine',
        src: '1-02'
    },
    'R&D': {
        def: 'research and development',
        src: '1-02'
    },
    'R&R': {
        def: 'rest and recuperation',
        src: '1-02'
    },
    'R&S': {
        def: 'reconnaissance and surveillance; reconstruction and stabilization',
        src: '1-02'
    },
    'R-AFF': {
        def: 'regimental affiliation',
        src: 'JP 1-02'
    },
    'R/O': {
        def: 'receive only',
        src: 'JP 1-02'
    },
    'R/T': {
        def: 'receiver/transmitter',
        src: 'JP 1-02'
    },
    'R2P2': {
        def: 'rapid response planning process',
        src: 'JP 1-02'
    },
    'RA': {
        def: 'response action; risk analysis; risk assessment',
        src: '1-02'
    },
    'RAA': {
        def: 'redeployment assembly area',
        src: 'JP 1-02'
    },
    'RABFAC': {
        def: 'radar beacon forward air controller',
        src: 'JP 1-02'
    },
    'RAC': {
        def: 'responsible analytic center',
        src: 'Jp 3-60'
    },
    'RAC-OT': {
        def: 'readiness assessment system - output tool',
        src: 'JP 3-35'
    },
    'RAD': {
        def: 'routine aerial distribution',
        src: '1-02'
    },
    'RADAY': {
        def: 'radio day',
        src: 'JP 1-02'
    },
    'RADBN': {
        def: 'radio battalion',
        src: '1-02'
    },
    'RADC': {
        def: 'regional air defense commander',
        src: '1-02'
    },
    'RADCON': {
        def: 'radiological control team',
        src: 'JP 1-02'
    },
    'RADF': {
        def: 'radarfind',
        src: 'JP 1-02'
    },
    'RADHAZ': {
        def: 'electromagnetic radiation hazards',
        src: 'JP 1-02'
    },
    'RADS': {
        def: 'rapid area distribution support (USAF)',
        src: 'JP 1-02'
    },
    'RAE': {
        def: 'right of assistance entry',
        src: 'JP 1-02'
    },
    'RAF': {
        def: 'Royal Air Force (UK)',
        src: 'JP 1-02'
    },
    'RAM': {
        def: 'raised angle marker; random access memory; random antiterrorism measure',
        src: '1-02'
    },
    'RAMCC': {
        def: 'regional air movement control center',
        src: '1-02'
    },
    'RAOB': {
        def: 'rawindsonde observation',
        src: 'JP 1-02'
    },
    'RAOC': {
        def: 'rear area operations center; regional air operations center',
        src: 'JP 1-02'
    },
    'RAP': {
        def: 'Radiological Assistance Program (DOE); rear area protection; Remedial Action Projects Program (JCS)',
        src: '1-02'
    },
    'RAS': {
        def: 'replenishment at sea',
        src: '1-02'
    },
    'RAS-OT': {
        def: 'readiness assessment system-output tool',
        src: '1-02'
    },
    'RAST': {
        def: 'recovery assistance, securing, and traversing systems',
        src: 'JP 1-02'
    },
    'RASU': {
        def: 'random access storage unit',
        src: 'JP 1-02'
    },
    'RATE': {
        def: 'refine, adapt, terminate, execute',
        src: '1-02'
    },
    'RATT': {
        def: 'radio teletype',
        src: 'JP 1-02'
    },
    'RB': {
        def: 'short-range coastal or river boat',
        src: '1-02'
    },
    'RB std': {
        def: 'rubidium standard',
        src: 'JP 1-02'
    },
    'RBA': {
        def: 'reimbursable budget authority',
        src: '1-02'
    },
    'RBC': {
        def: 'red blood cell',
        src: '1-02'
    },
    'RBE': {
        def: 'remain-behind equipment',
        src: 'JP 1-02'
    },
    'RBECS': {
        def: 'Revised Battlefield Electronic Communications, Electronics, Intelligence, and Operations (CEIO) System',
        src: 'JP 1-02'
    },
    'RBI': {
        def: 'RED/BLACK Isolator',
        src: 'JP 1-02'
    },
    'RC': {
        def: 'receive clock; regional coordinator; Reserve Component; resident coordinator (UN); river current',
        src: '1-02'
    },
    'RC NORTH': {
        def: 'Regional Command North (NATO)',
        src: 'JP 1-02'
    },
    'RC SOUTH': {
        def: 'Regional Command South (NATO)',
        src: 'JP 1-02'
    },
    'RCA': {
        def: 'riot control agent',
        src: '1-02'
    },
    'RCAT': {
        def: 'regional counterdrug analysis team',
        src: 'JP 1-02'
    },
    'RCC': {
        def: 'regional contracting center; relocation coordination center; rescue coordination center',
        src: '1-02'
    },
    'RCCPDS': {
        def: 'Reserve Component common personnel data system',
        src: 'JP 1-02'
    },
    'RCD': {
        def: 'regional collection detachment',
        src: '1-02'
    },
    'RCEM': {
        def: 'regional contingency engineering management',
        src: '1-02'
    },
    'RCHB': {
        def: 'reserve cargo handling battalion',
        src: 'JP 1-02'
    },
    'RCIED': {
        def: 'radio-controlled improvised explosive device',
        src: '1-02'
    },
    'RCM': {
        def: 'Rules for Courts-Martial',
        src: '1-02'
    },
    'RCMP': {
        def: 'Royal Canadian Mounted Police',
        src: '1-02'
    },
    'RCO': {
        def: 'regional contracting office',
        src: '1-02'
    },
    'RCP': {
        def: 'resynchronization control panel',
        src: 'JP 1-02'
    },
    'RCS': {
        def: 'radar cross section',
        src: 'JP 1-02'
    },
    'RCSP': {
        def: 'remote call service position',
        src: 'JP 1-02'
    },
    'RCT': {
        def: 'regimental combat team; rescue coordination team (Navy)',
        src: '1-02'
    },
    'RCTA': {
        def: 'Regional Counterdrug Training Academy',
        src: 'JP 3-07.4'
    },
    'RCU': {
        def: 'rate changes unit; remote control unit',
        src: 'JP 1-02'
    },
    'RCVR': {
        def: 'receiver',
        src: 'JP 1-02'
    },
    'RD': {
        def: 'receive data; ringdown',
        src: 'JP 1-02'
    },
    'RDA': {
        def: 'research, development, and acquisition',
        src: 'JP 1-02'
    },
    'RDCFP': {
        def: 'Regional Defense Counterterrorism Fellowship Program',
        src: 'JP 3-07.1'
    },
    'RDCTFP': {
        def: 'Regional Defense Combating Terrorism Fellowship Program',
        src: '1-02'
    },
    'RDD': {
        def: 'radiological dispersal device; required delivery date',
        src: '1-02'
    },
    'RDECOM': {
        def: 'US Army Research, Development, and Engineering Command',
        src: 'JP 4-06'
    },
    'RDF': {
        def: 'radio direction finder; rapid deployment force',
        src: 'JP 1-02'
    },
    'RDO': {
        def: 'request for deployment order',
        src: 'JP 1-02'
    },
    'RDT&E': {
        def: 'research, development, test and evaluation',
        src: 'JP 1-02'
    },
    'REAC/TS': {
        def: 'radiation emergency assistance center/training site (DOE)',
        src: '1-02'
    },
    'REACT': {
        def: 'rapid execution and combat targeting',
        src: 'JP 1-02'
    },
    'READY': {
        def: 'resource augmentation duty program',
        src: 'JP 1-02'
    },
    'RECA': {
        def: 'Residual Capability Assessment',
        src: 'JP 1-02'
    },
    'RECAS': {
        def: 'residual capability assessment system',
        src: 'JP 1-02'
    },
    'RECAT': {
        def: 'residual capability assessment team',
        src: 'JP 1-02'
    },
    'RECCE': {
        def: 'reconnaissance',
        src: 'JP 1-02'
    },
    'RECMOB': {
        def: 'reconstitution-mobilization',
        src: 'JP 1-02'
    },
    'RECON': {
        def: 'reconnaissance',
        src: 'JP 1-02'
    },
    'RED': {
        def: 'radiological exposure device',
        src: '1-02'
    },
    'RED HORSE': {
        def: 'Rapid Engineer Deployable Heavy Operational Repair Squadron Engineer',
        src: '1-02'
    },
    'REF': {
        def: 'Rapid Equipping Force (Army); reference(s)',
        src: '1-02'
    },
    'REGT': {
        def: 'regiment',
        src: 'JP 1-02'
    },
    'REL': {
        def: 'relative',
        src: 'JP 1-02'
    },
    'RELCAN': {
        def: 'releasable to Canada',
        src: 'JP 1-02'
    },
    'REMT': {
        def: 'regional emergency management team',
        src: 'JP 1-02'
    },
    'REMUS': {
        def: 'remote environmental monitoring unit system',
        src: 'JP 3-15'
    },
    'REPOL': {
        def: 'bulk petroleum contingency report; petroleum damage and deficiency report; reporting emergency petroleum, oils, and lubricants',
        src: 'JP 1-02'
    },
    'REPSHIP': {
        def: 'report of shipment',
        src: 'JP 1-02'
    },
    'REPUNIT': {
        def: 'reporting unit',
        src: 'JP 1-02'
    },
    'REQCONF': {
        def: 'request confirmation',
        src: 'JP 1-02'
    },
    'REQSTATASK': {
        def: 'air mission request status tasking',
        src: 'JP 1-02'
    },
    'RES': {
        def: 'radiation exposure status',
        src: '1-02'
    },
    'RESA': {
        def: 'research, evaluation, and system analysis',
        src: 'JP 1-02'
    },
    'RESCAP': {
        def: 'rescue combat air patrol',
        src: 'JP 1-02'
    },
    'RESCORT': {
        def: 'rescue escort',
        src: 'JP 1-02'
    },
    'RESPROD': {
        def: 'responsible production',
        src: 'JP 1-02'
    },
    'RET': {
        def: 'retired',
        src: 'JP 1-02'
    },
    'RF': {
        def: 'radio frequency; reserve force; response force',
        src: '1-02'
    },
    'RF/EMPINT': {
        def: 'radio frequency/electromagnetic pulse intelligence',
        src: 'JP 1-02'
    },
    'RFA': {
        def: 'radio frequency authorization; request for assistance; restrictive fire area',
        src: '1-02'
    },
    'RFC': {
        def: 'request for capabilities; response force commander; revision final coordination',
        src: '1-02'
    },
    'RFD': {
        def: 'revision first draft',
        src: '1-02'
    },
    'RFF': {
        def: 'request for feedback; request for forces',
        src: '1-02'
    },
    'RFI': {
        def: 'radio frequency interference; ready for issue; request for information',
        src: '1-02'
    },
    'RFID': {
        def: 'radio frequency identification',
        src: '1-02'
    },
    'RFL': {
        def: 'restrictive fire line',
        src: 'JP 1-02'
    },
    'RFP': {
        def: 'request for proposal',
        src: 'JP 1-02'
    },
    'RFS': {
        def: 'request for service; request for support',
        src: '1-02'
    },
    'RFW': {
        def: 'request for waiver',
        src: 'JP 1-02'
    },
    'RG': {
        def: 'reconstitution group',
        src: 'JP 1-02'
    },
    'RGR': {
        def: 'Rangers',
        src: 'JP 1-02'
    },
    'RGS': {
        def: 'remote geospatial intelligence services',
        src: '1-02'
    },
    'RH': {
        def: 'reentry home',
        src: 'JP 1-02'
    },
    'Rh': {
        def: 'Rhesus',
        src: '1-02'
    },
    'RHIB': {
        def: 'rigid hull inflatable boat',
        src: '1-02'
    },
    'RI': {
        def: 'Refugees International; routing indicator',
        src: '1-02'
    },
    'RIB': {
        def: 'rubberized inflatable boat',
        src: 'JP 1-02'
    },
    'RIC': {
        def: 'routing indicator code',
        src: 'JP 1-02'
    },
    'RICO': {
        def: 'regional interface control officer',
        src: '1-02'
    },
    'RIG': {
        def: 'recognition identification group\t',
        src: 'JP 1-02'
    },
    'RIK': {
        def: 'replacement in kind',
        src: '1-02'
    },
    'RIMS': {
        def: 'registrant information management system',
        src: 'JP 1-02'
    },
    'RIP': {
        def: 'register of intelligence publications',
        src: 'JP 1-02'
    },
    'RIS': {
        def: 'reconnaissance information system',
        src: 'JP 1-02'
    },
    'RISOP': {
        def: 'red integrated strategic offensive plan',
        src: 'JP 1-02'
    },
    'RISTA': {
        def: 'reconnaissance, intelligence, surveillance, and target acquisition',
        src: 'JP 1-02'
    },
    'RIT': {
        def: 'remote imagery transceiver',
        src: 'JP 1-02'
    },
    'RIVRON': {
        def: 'riverine squadron',
        src: '1-02'
    },
    'RJTD': {
        def: 'reconstitution joint table of distribution',
        src: 'JP 1-02'
    },
    'RLD': {
        def: 'ready-to-load date',
        src: '1-02'
    },
    'RLE': {
        def: 'rail liaison element',
        src: 'JP 1-02'
    },
    'RLG': {
        def: 'regional liaison group; ring laser gyro',
        src: 'JP 1-02'
    },
    'RLGM': {
        def: 'remote loop group multiplexer',
        src: 'JP 1-02'
    },
    'RLGM/CD': {
        def: 'remote loop group multiplexer/cable driver',
        src: 'JP 1-02'
    },
    'RLP': {
        def: 'remote line printer',
        src: 'JP 1-02'
    },
    'RM': {
        def: 'ramp module; recovery mechanism; resource management; risk management',
        src: '1-02'
    },
    'RMC': {
        def: 'remote multiplexer combiner; rescue mission commander; Resource Management Committee (CSIF); returned to military control',
        src: 'JP 1-02'
    },
    'RMKS': {
        def: 'remarks',
        src: 'JP 1-02'
    },
    'RMO': {
        def: 'regional Marine officer',
        src: 'JP 1-02'
    },
    'RMP': {
        def: 'religious ministry professional',
        src: 'JP 3-28'
    },
    'RMS': {
        def: 'requirements management system; root-mean-square',
        src: 'JP 1-02'
    },
    'RMT': {
        def: 'response management team',
        src: '1-02'
    },
    'RMU': {
        def: 'receiver matrix unit',
        src: 'JP 1-02'
    },
    'RNAV': {
        def: 'area navigation',
        src: 'JP 1-02'
    },
    'RNP': {
        def: 'remote network processor',
        src: 'JP 1-02'
    },
    'Ro': {
        def: 'search radius rounded to next highest whole number',
        src: 'JP 1-02'
    },
    'RO/RO': {
        def: 'roll-on/roll-off',
        src: '1-02'
    },
    'ROA': {
        def: 'restricted operations area',
        src: 'JP 1-02'
    },
    'ROC': {
        def: 'regional operations center; rehearsal of concept; required operational capability',
        src: '1-02'
    },
    'ROCU': {
        def: 'remote orderwire control unit',
        src: 'JP 1-02'
    },
    'ROE': {
        def: 'rules of engagement',
        src: '1-02'
    },
    'ROEX': {
        def: 'rules of engagement exercise',
        src: 'JP 1-02'
    },
    'ROG': {
        def: 'railhead operations group',
        src: 'JP 1-02'
    },
    'ROICC': {
        def: 'resident officer in charge of construction',
        src: '1-02'
    },
    'ROK': {
        def: 'Republic of Korea',
        src: 'JP 1-02'
    },
    'ROM': {
        def: 'read-only memory; restriction of movement; rough order of magnitude',
        src: '1-02'
    },
    'ROMO': {
        def: 'range of military operations',
        src: '1-02'
    },
    'RON': {
        def: 'remain overnight',
        src: 'JP 1-02'
    },
    'ROS': {
        def: 'reduced operating status',
        src: '1-02'
    },
    'ROTC': {
        def: 'Reserve Officer Training Corps',
        src: 'JP 1-02'
    },
    'ROTHR': {
        def: 'relocatable over-the-horizon backscatter radar (USN)',
        src: 'JP 1-02'
    },
    'ROWPU': {
        def: 'reverse osmosis water purification unit',
        src: 'JP 1-02'
    },
    'ROZ': {
        def: 'restricted operations zone',
        src: '1-02'
    },
    'RP': {
        def: 'reconstitution priority; release point (road); religious program specialist; retained personnel',
        src: '1-02'
    },
    'RPG': {
        def: 'rocket propelled grenade',
        src: '1-02'
    },
    'RPM': {
        def: 'revolutions per minute',
        src: '1-02'
    },
    'RPO': {
        def: 'rendezvous and proximity operations',
        src: '1-02'
    },
    'RPOE': {
        def: 'rapid port opening element',
        src: '1-02'
    },
    'RPPO': {
        def: 'Requirements, Plans, and Policy Office',
        src: 'JP 2-01'
    },
    'RPT': {
        def: 'report',
        src: 'JP 1-02'
    },
    'RPTOR': {
        def: 'reporting organization',
        src: 'JP 1-02'
    },
    'RPV': {
        def: 'remotely piloted vehicle',
        src: 'JP 1-02'
    },
    'RQMT': {
        def: 'requirement',
        src: 'JP 1-02'
    },
    'RQT': {
        def: 'rapid query tool',
        src: '1-02'
    },
    'RR': {
        def: 'reattack recommendation',
        src: 'JP 1-02'
    },
    'RRC': {
        def: 'regional reporting center',
        src: 'JP 1-02'
    },
    'RRCC': {
        def: 'regional response coordination center',
        src: 'JP 3-41'
    },
    'RRDF': {
        def: 'roll-on/roll-off discharge facility',
        src: '1-02'
    },
    'RRF': {
        def: 'rapid reaction force; rapid response force; Ready Reserve Fleet; Ready Reserve Force',
        src: '1-02'
    },
    'RRPP': {
        def: 'rapid response planning process',
        src: 'JP 1-02'
    },
    'RS': {
        def: 'rate synthesizer; religious support; requirement submission',
        src: '1-02'
    },
    'RSA': {
        def: 'retrograde storage area',
        src: 'JP 1-02'
    },
    'RSC': {
        def: 'red station clock; regional service center; rescue sub-center',
        src: 'JP 1-02'
    },
    'RSD': {
        def: 'reporting of supply discrepancy',
        src: 'JP 1-02'
    },
    'RSE': {
        def: 'retrograde support element',
        src: 'JP 1-02'
    },
    'RSG': {
        def: 'reference signal generator',
        src: 'JP 1-02'
    },
    'RSI': {
        def: 'rationalization, standardization, and interoperability',
        src: '1-02'
    },
    'RSL': {
        def: 'received signal level',
        src: 'JP 1-02'
    },
    'RSN': {
        def: 'role specialist nation',
        src: '1-02'
    },
    'RSO': {
        def: 'reception, staging, and onward movement; regional security officer; remote split operations',
        src: '1-02'
    },
    'RSOC': {
        def: 'regional signals intelligence (SIGINT) operations center',
        src: 'JP 1-02'
    },
    'RSOI': {
        def: 'reception, staging, onward movement, and integration',
        src: '1-02'
    },
    'RSP': {
        def: 'recognized surface picture; Red Switch Project (DOD); religious support policy',
        src: '1-02'
    },
    'RSPA': {
        def: 'Research and Special Programs Administration',
        src: 'JP 1-02'
    },
    'RSS': {
        def: 'radio subsystem; really simple syndication; remote sensors subsystem; root-sum-squared',
        src: '1-02'
    },
    'RSSC': {
        def: 'regional satellite communications support center; regional satellite support cell; regional signals intelligence (SIGINT) support center (NSA); regional space support center',
        src: '1-02'
    },
    'RSSC-LO': {
        def: 'regional satellite communications support center liaison officer; regional space support center liaison officer',
        src: '1-02'
    },
    'RST': {
        def: 'religious support team',
        src: '1-02'
    },
    'RSTA': {
        def: 'reconnaissance, surveillance, and target acquisition',
        src: 'JP 1-02'
    },
    'RSTV': {
        def: 'real-time synthetic video',
        src: 'JP 1-02'
    },
    'RSU': {
        def: 'rapid support unit; rear support unit; remote switching unit',
        src: 'JP 1-02'
    },
    'RT': {
        def: 'recovery team; remote terminal; rough terrain',
        src: '1-02'
    },
    'RTA': {
        def: 'residual threat assessment',
        src: 'JP 1-02'
    },
    'RTB': {
        def: 'return to base',
        src: 'JP 1-02'
    },
    'RTCC': {
        def: 'rough terrain container crane',
        src: '1-02'
    },
    'RTCH': {
        def: 'rough terrain container handler',
        src: '1-02'
    },
    'RTD': {
        def: 'returned to duty',
        src: 'JP 1-02'
    },
    'RTF': {
        def: 'regional task force; return to force',
        src: 'JP 1-02'
    },
    'RTFL': {
        def: 'rough terrain forklift',
        src: 'JP 1-02'
    },
    'RTG': {
        def: 'radar target graphic',
        src: 'JP 1-02'
    },
    'RTL': {
        def: 'restricted target list',
        src: '1-02'
    },
    'RTLP': {
        def: 'receiver test level point',
        src: 'JP 1-02'
    },
    'RTM': {
        def: 'real-time mode',
        src: 'JP 1-02'
    },
    'RTOC': {
        def: 'rear tactical operations center',
        src: 'JP 1-02'
    },
    'RTS': {
        def: 'remote transfer switch',
        src: 'JP 1-02'
    },
    'RTTY': {
        def: 'radio teletype',
        src: 'JP 1-02'
    },
    'RU': {
        def: 'release unit; rescue unit',
        src: 'JP 1-02'
    },
    'RUF': {
        def: 'rules for the use of force',
        src: '1-02'
    },
    'RUIC': {
        def: 'Reserve unit identification number',
        src: 'JP 1-02'
    },
    'RUSCOM': {
        def: 'rapid ultrahigh frequency (UHF) satellite communications',
        src: 'JP 1-02'
    },
    'RV': {
        def: 'long-range seagoing rescue vessel; rekeying variable; rendezvous',
        src: '1-02'
    },
    'RVR': {
        def: 'runway visibility recorder',
        src: 'JP 1-02'
    },
    'RVT': {
        def: 'remote video terminal',
        src: 'JP 1-02'
    },
    'RW': {
        def: 'rotary-wing',
        src: '1-02'
    },
    'RWCM': {
        def: 'regional wartime construction manager',
        src: 'JP 1-02'
    },
    'RWR': {
        def: 'radar warning receiver',
        src: 'JP 1-02'
    },
    'RWS': {
        def: 'rawinsonde subsystem',
        src: 'JP 1-02'
    },
    'RX': {
        def: 'receive; receiver',
        src: 'JP 1-02'
    },
    'RZ': {
        def: 'return-to-zero',
        src: '1-02'
    },
    'S&F': {
        def: 'store-and-forward',
        src: 'JP 1-02'
    },
    'S&R': {
        def: 'search and recovery',
        src: 'JP 4-06'
    },
    'S&T': {
        def: 'science and technology; scientific and technical',
        src: '1-02'
    },
    'S&TI': {
        def: 'scientific and technical intelligence',
        src: '1-02'
    },
    'S-1': {
        def: 'battalion or brigade manpower and personnel staff officer (Marine Corps battalion or regiment)',
        src: '1-02'
    },
    'S-2': {
        def: 'battalion or brigade intelligence staff officer (Army, Marine Corps battalion or regiment)',
        src: '1-02'
    },
    'S-3': {
        def: 'battalion or brigade operations staff officer (Army; Marine Corps battalion or regiment)',
        src: '1-02'
    },
    'S-4': {
        def: 'battalion or brigade logistics staff officer (Army; Marine Corps battalion or regiment)',
        src: 'JP 1-02'
    },
    'S-Team': {
        def: 'staff augmentation team',
        src: '1-02'
    },
    'S/CRS': {
        def: 'Office of the Coordinator for Reconstruction and Stabilization (DOS)',
        src: '1-02'
    },
    'S/CT': {
        def: 'Office of the Coordinator for Counterterrorism (DOS)',
        src: '1-02'
    },
    'S/EWCC': {
        def: 'signals intelligence/electronic warfare coordination center',
        src: 'JP 1-02'
    },
    'S/N': {
        def: 'signal to noise',
        src: 'JP 1-02'
    },
    'S/RM': {
        def: 'sustainment, restoration, and modernization',
        src: '1-02'
    },
    'S/RTF': {
        def: 'search and recovery task force',
        src: 'JP 1-02'
    },
    'S/S': {
        def: 'steamship',
        src: 'JP 1-02'
    },
    'S/T': {
        def: 'short ton',
        src: 'JP 1-02'
    },
    'S/V': {
        def: 'sailboat',
        src: 'JP 1-02'
    },
    'SA': {
        def: 'security assistance; selective availability (GPS); senior adviser; situational awareness; staging area; stand-alone switch',
        src: '1-02'
    },
    'SAA': {
        def: 'senior airfield authority',
        src: '1-02'
    },
    'SAAFR': {
        def: 'standard use Army aircraft flight route',
        src: 'JP 1-02'
    },
    'SAAM': {
        def: 'special assignment airlift mission',
        src: '1-02'
    },
    'SAB': {
        def: 'scientific advisory board (USAF)',
        src: 'JP 1-02'
    },
    'SABER': {
        def: 'situational awareness beacon with reply',
        src: 'JP 1-02'
    },
    'SAC': {
        def: 'special actions cell; special agent in charge; supporting arms coordinator',
        src: '1-02'
    },
    'SACC': {
        def: 'supporting arms coordination center (USMC)',
        src: '1-02'
    },
    'SACEUR': {
        def: 'Supreme Allied Commander, Europe (NATO)',
        src: 'JP 1-02'
    },
    'SACLANT': {
        def: 'Supreme Allied Command, Atlantic',
        src: 'JP 1-02'
    },
    'SACS': {
        def: 'secure telephone unit (STU) access control system',
        src: 'JP 1-02'
    },
    'SACT': {
        def: 'Supreme Allied Commander Transformation',
        src: 'JP 3-08'
    },
    'SADC': {
        def: 'sector air defense commander',
        src: '1-02'
    },
    'SADL': {
        def: 'situation awareness data link',
        src: '1-02'
    },
    'SADO': {
        def: 'senior air defense officer',
        src: '1-02'
    },
    'SAF': {
        def: 'Secretary of the Air Force',
        src: 'JP 1-02'
    },
    'SAFE': {
        def: 'secure analyst file environment; selected area for evasion; sexual assault forensic examination',
        src: '1-02'
    },
    'SAFE-CP': {
        def: 'selected area for evasion-contact point',
        src: 'JP 1-02'
    },
    'SAFWIN': {
        def: 'secure Air Force weather information network',
        src: 'JP 1-02'
    },
    'SAG': {
        def: 'surface action group',
        src: 'JP 1-02'
    },
    'SAI': {
        def: 'sea-to-air interface; single agency item',
        src: 'JP 1-02'
    },
    'SAL': {
        def: 'small arms locker',
        src: 'JP 1-02'
    },
    'SAL-GP': {
        def: 'semiactive laser-guided projectile (USN)',
        src: 'JP 1-02'
    },
    'SALM': {
        def: 'single-anchor leg mooring',
        src: '1-02'
    },
    'SALT': {
        def: 'supporting arms liaison team',
        src: 'JP 1-02'
    },
    'SALTS': {
        def: 'streamlined automated logistics transfer system; streamlined automated logistics transmission system',
        src: 'JP 1-02'
    },
    'SALUTE': {
        def: 'size, activity, location, unit, time, and equipment',
        src: 'JP 1-02'
    },
    'SAM': {
        def: 'special airlift mission; surface-to-air missile',
        src: '1-02'
    },
    'SAMM': {
        def: 'security assistance management manual',
        src: 'JP 1-02'
    },
    'SAMS': {
        def: 'School of Advanced Military Studies',
        src: 'JP 1-02'
    },
    'SAO': {
        def: 'security assistance office; security assistance officer; selected attack option',
        src: '1-02'
    },
    'SAOC': {
        def: 'sector air operations center',
        src: 'JP 1-02'
    },
    'SAP': {
        def: 'special access program',
        src: 'JP 1-02'
    },
    'SAPI': {
        def: 'special access program for intelligence',
        src: 'JP 1-02'
    },
    'SAPO': {
        def: 'subarea petroleum office',
        src: '1-02'
    },
    'SAPR': {
        def: 'sexual assault prevention and response',
        src: '1-02'
    },
    'SAR': {
        def: 'satellite access request; search and rescue; site access request; special access requirement; suspicious activity report; synthetic aperture radar',
        src: '1-02'
    },
    'SARC': {
        def: 'sexual assault response coordinator; surveillance and reconnaissance center',
        src: 'JP 1-02'
    },
    'SARDOT': {
        def: 'search and rescue point',
        src: '1-02'
    },
    'SARIR': {
        def: 'search and rescue incident report',
        src: 'JP 1-02'
    },
    'SARMIS': {
        def: 'search and rescue management information system',
        src: 'JP 1-02'
    },
    'SARNEG': {
        def: 'search and rescue numerical encryption group',
        src: 'JP 3-50'
    },
    'SAROPS': {
        def: 'Search and Rescue Optimal Planning System',
        src: '1-02'
    },
    'SARREQ': {
        def: 'search and rescue request',
        src: 'JP 1-02'
    },
    'SARSAT': {
        def: 'search and rescue satellite-aided tracking',
        src: '1-02'
    },
    'SARSIT': {
        def: 'search and rescue situation summary report',
        src: 'JP 1-02'
    },
    'SARTEL': {
        def: 'search and rescue (SAR) telephone (private hotline)',
        src: 'JP 1-02'
    },
    'SARTF': {
        def: 'search and rescue task force',
        src: 'JP 1-02'
    },
    'SAS': {
        def: 'sealed authenticator system; special ammunition storage',
        src: 'JP 1-02'
    },
    'SASP': {
        def: 'special ammunition supply point',
        src: 'JP 1-02'
    },
    'SASS': {
        def: 'supporting arms special staff',
        src: 'JP 1-02'
    },
    'SASSY': {
        def: 'supported activities supply systems',
        src: 'JP 1-02'
    },
    'SAT': {
        def: 'satellite',
        src: '1-02'
    },
    'SATCOM': {
        def: 'satellite communications',
        src: '1-02'
    },
    'SAW': {
        def: 'surface acoustic wave',
        src: 'JP 1-02'
    },
    'SB': {
        def: 'standby base',
        src: 'JP 1-02'
    },
    'SBCT': {
        def: 'Stryker brigade combat team',
        src: 'JP 3-34'
    },
    'SBL': {
        def: 'space-based laser',
        src: 'JP 1-02'
    },
    'SBPO': {
        def: 'Service blood program officer',
        src: 'JP 1-02'
    },
    'SBRPT': {
        def: 'subordinate reporting organization',
        src: 'JP 1-02'
    },
    'SBS': {
        def: 'senior battle staff; support battle staff',
        src: 'JP 1-02'
    },
    'SBSO': {
        def: 'sustainment brigade special operations',
        src: 'JP 3-05.1'
    },
    'SBSS': {
        def: 'science-based stockpile stewardship',
        src: 'JP 1-02'
    },
    'SBU': {
        def: 'sensitive but unclassified; special boat unit',
        src: '1-02'
    },
    'SC': {
        def: 'sea current; search and rescue coordinator; security cooperation; station clock; strategic communication',
        src: '1-02'
    },
    'SC ATLANTIC': {
        def: 'Strategic Command, Atlantic (NATO)',
        src: 'JP 1-02'
    },
    'SC EUROPE': {
        def: 'Strategic Command, Europe (NATO)',
        src: 'JP 1-02'
    },
    'SCA': {
        def: 'sociocultural analysis; space coordinating authority; support to civil administration',
        src: '1-02'
    },
    'SCAR': {
        def: 'strike coordination and reconnaissance',
        src: '1-02'
    },
    'SCAS': {
        def: 'stability control augment system',
        src: 'JP 1-02'
    },
    'SCATANA': {
        def: 'security control of air traffic and navigation aids',
        src: 'JP 1-02'
    },
    'SCATMINE': {
        def: 'scatterable mine',
        src: 'JP 3-15'
    },
    'SCATMINEWARN': {
        def: 'scatterable minefield warning',
        src: 'JP 1-02'
    },
    'SCC': {
        def: 'security classification code; service cryptologic component; shipping coordination center; Standards Coordinating Committee',
        src: '1-02'
    },
    'SCC-WMD': {
        def: 'United States Strategic Command Center for Combating Weapons of Mass Destruction ',
        src: '1-02'
    },
    'SCDL': {
        def: 'surveillance control data link',
        src: 'JP 1-02'
    },
    'SCE': {
        def: 'Service cryptologic element',
        src: 'JP 1-02'
    },
    'SCF(UK)': {
        def: 'Save the Children Fund (United Kingdom)',
        src: 'JP 1-02'
    },
    'SCF(US)': {
        def: 'Save the Children Federation (United States)',
        src: 'JP 1-02'
    },
    'SCG': {
        def: 'Security Cooperation Guidance; switching controller group',
        src: 'JP 1-02'
    },
    'SCHBT': {
        def: 'shape, clear, hold, build, and transition',
        src: '1-02'
    },
    'SCI': {
        def: 'security and counterintelligence interviews; sensitive compartmented information',
        src: '1-02'
    },
    'SCIF': {
        def: 'sensitive compartmented information facility',
        src: '1-02'
    },
    'SCL': {
        def: 'standard conventional load'
    },
    'SCM': {
        def: 'security countermeasure; Service container manager',
        src: '1-02'
    },
    'SCMP': {
        def: 'strategic command, control, and communications (C3) master plan',
        src: 'JP 1-02'
    },
    'SCNE': {
        def: 'self-contained navigation equipment',
        src: 'JP 1-02'
    },
    'SCO': {
        def: 'secondary control officer; security cooperation organization; senior contracting official; state coordinating officer',
        src: '1-02'
    },
    'SCOC': {
        def: 'systems control and operations concept',
        src: 'JP 1-02'
    },
    'SCONUM': {
        def: 'ship control number',
        src: 'JP 1-02'
    },
    'SCP': {
        def: 'secure conferencing project; security cooperation plan; service control point; system change proposal',
        src: '1-02'
    },
    'SCPT': {
        def: 'strategic connectivity performance test',
        src: 'JP 1-02'
    },
    'SCRB': {
        def: 'software configuration review board',
        src: 'JP 1-02'
    },
    'SCT': {
        def: 'shipping coordination team; single channel transponder',
        src: 'JP 1-02'
    },
    'SCT-UR': {
        def: 'single channel transponder ultrahigh frequency (UHF) receiver',
        src: 'JP 1-02'
    },
    'SCTIS': {
        def: 'single channel transponder injection system',
        src: 'JP 1-02'
    },
    'SCTS': {
        def: 'single channel transponder system',
        src: 'JP 1-02'
    },
    'SCUD': {
        def: 'surface-to-surface missile system',
        src: 'JP 1-02'
    },
    'SD': {
        def: 'strategy division',
        src: '1-02'
    },
    'SDA': {
        def: 'senior development advisor; Seventh-Day Adventist (ADRA)',
        src: '1-02'
    },
    'SDB': {
        def: 'Satellite Communications Database',
        src: '1-02'
    },
    'SDDC': {
        def: 'Surface Deployment and Distribution Command',
        src: '1-02'
    },
    'SDDCTEA': {
        def: 'Surface Deployment and Distribution Command Transportation Engineering Agency',
        src: '1-02'
    },
    'SDF': {
        def: 'self defense force',
        src: 'JP 1-02'
    },
    'SDIO': {
        def: 'Strategic Defense Initiative Organization',
        src: 'JP 1-02'
    },
    'SDLS': {
        def: 'satellite data link standards',
        src: 'JP 1-02'
    },
    'SDMX': {
        def: 'space division matrix',
        src: 'JP 1-02'
    },
    'SDN': {
        def: 'system development notification',
        src: 'JP 1-02'
    },
    'SDNRIU': {
        def: 'secure digital net radio interface unit',
        src: 'JP 1-02'
    },
    'SDO': {
        def: 'senior defense official; ship\'s debarkation officer',
        src: '1-02'
    },
    'SDO/DATT': {
        def: 'senior defense official/defense attaché',
        src: '1-02'
    },
    'SDP': {
        def: 'strategic distribution platform',
        src: '1-02'
    },
    'SDR': {
        def: 'system design review',
        src: 'JP 1-02'
    },
    'SDSG': {
        def: 'space division switching group',
        src: 'JP 1-02'
    },
    'SDSM': {
        def: 'space division switching matrix',
        src: 'JP 1-02'
    },
    'SDV': {
        def: 'SEAL team delivery vehicle; submerged delivery vehicle',
        src: '1-02'
    },
    'SDZ': {
        def: 'self-defense zone',
        src: '1-02'
    },
    'SE': {
        def: 'site exploitation; spherical error',
        src: '1-02'
    },
    'SEA': {
        def: 'Southeast Asia',
        src: 'JP 3-34'
    },
    'SEABEE': {
        def: 'sea barge',
        src: '1-02'
    },
    'Seabee': {
        def: 'Navy construction engineer',
        src: '1-02'
    },
    'SEAD': {
        def: 'suppression of enemy air defenses',
        src: '1-02'
    },
    'SEC': {
        def: 'submarine element coordinator',
        src: 'JP 1-02'
    },
    'SECAF': {
        def: 'Secretary of the Air Force',
        src: 'JP 1-02'
    },
    'SECARMY': {
        def: 'Secretary of the Army',
        src: '1-02'
    },
    'SecDef': {
        def: 'Secretary of Defense',
        src: '1-02'
    },
    'SECDHS': {
        def: 'Secretary of the Department of Homeland Security',
        src: 'JP 4-05'
    },
    'SECHS': {
        def: 'Secretary of Homeland Security',
        src: '1-02'
    },
    'SECNAV': {
        def: 'Secretary of the Navy',
        src: 'JP 1-02'
    },
    'SECNAVINST': {
        def: 'Secretary of the Navy instruction',
        src: 'JP 1-02'
    },
    'SECOMP': {
        def: 'secure en route communications package',
        src: 'JP 1-02'
    },
    'SECORD': {
        def: 'secure cord switchboard',
        src: 'JP 1-02'
    },
    'SECRA': {
        def: 'secondary radar data only',
        src: 'JP 1-02'
    },
    'SECSTATE': {
        def: 'Secretary of State',
        src: '1-02'
    },
    'SECTRANS': {
        def: 'Secretary of Transportation',
        src: '1-02'
    },
    'SED': {
        def: 'signals external data',
        src: 'JP 1-02'
    },
    'SEDAS': {
        def: 'spurious emission detection acquisition system',
        src: 'JP 1-02'
    },
    'SEF': {
        def: 'sealift enhancement feature',
        src: 'JP 1-02'
    },
    'SEI': {
        def: 'specific emitter identification',
        src: 'JP 1-02'
    },
    'SEL': {
        def: 'senior enlisted leader',
        src: '1-02'
    },
    'SEL REL': {
        def: 'selective release',
        src: 'JP 1-02'
    },
    'SELRES': {
        def: 'Selected Reserve',
        src: 'JP 1-02'
    },
    'SEMA': {
        def: 'special electronic mission aircraft',
        src: 'JP 1-02'
    },
    'SEMS': {
        def: 'standard embarkation management system',
        src: 'JP 1-02'
    },
    'SEO/SEP': {
        def: 'special enforcement operation/special enforcement program',
        src: 'JP 1-02'
    },
    'SEP': {
        def: 'signal entrance panel; spherical error probable',
        src: 'JP 1-02'
    },
    'SEPLO': {
        def: 'state emergency preparedness liaison officer',
        src: '1-02'
    },
    'SERE': {
        def: 'survival, evasion, resistance, and escape',
        src: '1-02'
    },
    'SERER': {
        def: 'survival, evasion, resistance, escape, recovery',
        src: 'JP 1-02'
    },
    'SES': {
        def: 'senior executive service',
        src: 'JP 3-07.2'
    },
    'SETA': {
        def: 'system engineering and technical assistance',
        src: 'JP 1-02'
    },
    'SEW': {
        def: 'shared early warning',
        src: '1-02'
    },
    'SEWG': {
        def: 'Special Events Working Group',
        src: 'JP 3-28'
    },
    'SEWOC': {
        def: 'signals intelligence/electronic warfare operations centre (NATO)',
        src: '1-02'
    },
    'SEWS': {
        def: 'satellite early warning system',
        src: 'JP 1-02'
    },
    'SF': {
        def: 'security force; security forces (Air Force or Navy); single frequency; special forces; standard form',
        src: '1-02'
    },
    'SFA': {
        def: 'security force assistance',
        src: '1-02'
    },
    'SFAF': {
        def: 'standard frequency action format',
        src: '1-02'
    },
    'SFAT': {
        def: 'spectrum flyaway team',
        src: '1-02'
    },
    'SFC': {
        def: 'single-fuel concept',
        src: '1-02'
    },
    'SFCP': {
        def: 'shore fire control party',
        src: 'JP 1-02'
    },
    'SFG': {
        def: 'security forces group; special forces group',
        src: 'JP 1-02'
    },
    'SFI': {
        def: 'spectral composition',
        src: 'JP 1-02'
    },
    'SFLEO': {
        def: 'senior federal law enforcement official',
        src: 'JP 3-28'
    },
    'SFMS': {
        def: 'special forces medical sergeant',
        src: 'JP 1-02'
    },
    'SFOD-A/B/C': {
        def: 'special forces operational detachment-A/B/C',
        src: 'JP 1-02'
    },
    'SFOR': {
        def: 'Stabilization Force',
        src: 'JP 1-02'
    },
    'SFS': {
        def: 'security forces squadron',
        src: 'JP 1-02'
    },
    'SG': {
        def: 'steering group; strike group; supergroup; surgeon general',
        src: '1-02'
    },
    'SGEMP': {
        def: 'system-generated electromagnetic pulse',
        src: 'JP 1-02'
    },
    'SGS': {
        def: 'strategic guidance statement',
        src: '1-02'
    },
    'SGSA': {
        def: 'squadron group systems advisor',
        src: 'JP 1-02'
    },
    'SGXM': {
        def: 'Headquarters, Air Mobility Command/Surgeon',
        src: '1-02'
    },
    'SHAPE': {
        def: 'Supreme Headquarters Allied Powers, Europe',
        src: 'JP 1-02'
    },
    'SHD': {
        def: 'special handling designator',
        src: 'JP 1-02'
    },
    'SHF': {
        def: 'super-high frequency',
        src: '1-02'
    },
    'SHORAD': {
        def: 'short-range air defense',
        src: '1-02'
    },
    'SHORADEZ': {
        def: 'short-range air defense engagement zone',
        src: '1-02'
    },
    'SI': {
        def: 'special intelligence; United States Strategic Command strategic instruction',
        src: '1-02'
    },
    'SIA': {
        def: 'station of initial assignment',
        src: 'JP 1-02'
    },
    'SIAGL': {
        def: 'survey instrument azimuth gyroscope lightweight',
        src: 'JP 1-02'
    },
    'SIC': {
        def: 'subject identification code; supporting intelligence center',
        src: '1-02'
    },
    'SICO': {
        def: 'sector interface control officer',
        src: '1-02'
    },
    'SID': {
        def: 'standard instrument departure',
        src: '1-02'
    },
    'SIDAC': {
        def: 'single integrated damage analysis capability',
        src: 'JP 1-02'
    },
    'SIDL': {
        def: 'standard intelligence documents list',
        src: 'JP 1-02'
    },
    'SIDO': {
        def: 'senior intelligence duty officer',
        src: '1-02'
    },
    'SIDS': {
        def: 'secondary imagery dissemination system',
        src: 'JP 1-02'
    },
    'SIF': {
        def: 'selective identification feature; strategic internment facility',
        src: 'JP 1-02'
    },
    'SIG': {
        def: 'signal',
        src: 'JP 1-02'
    },
    'SIGINT': {
        def: 'signals intelligence',
        src: '1-02'
    },
    'SIGSEC': {
        def: 'signal security',
        src: 'JP 1-02'
    },
    'SII': {
        def: 'statement of intelligence interest',
        src: '1-02'
    },
    'SIM': {
        def: 'system impact message',
        src: '1-02'
    },
    'SIMLM': {
        def: 'single integrated medical logistics management; single integrated medical logistics manager',
        src: '1-02'
    },
    'SINCGARS': {
        def: 'single-channel ground and airborne radio system',
        src: 'JP 1-02'
    },
    'SINS': {
        def: 'ship\'s inertial navigation system',
        src: 'JP 1-02'
    },
    'SIO': {
        def: 'senior intelligence officer',
        src: '1-02'
    },
    'SIOC': {
        def: 'Strategic Information and Operations Center (FBI)',
        src: '1-02'
    },
    'SIOP': {
        def: 'Single Integrated Operational Plan',
        src: 'JP 1-02'
    },
    'SIOP-ESI': {
        def: 'Single Integrated Operational Plan-Extremely Sensitive Information',
        src: 'JP 1-02'
    },
    'SIPRNET': {
        def: 'SECRET Internet Protocol Router Network',
        src: '1-02'
    },
    'SIR': {
        def: 'serious incident report; specific information requirement; Strategic Military Intelligence Review',
        src: '1-02'
    },
    'SIRADS': {
        def: 'stored imagery repository and dissemination system',
        src: 'JP 1-02'
    },
    'SIRMO': {
        def: 'senior information resources management official',
        src: 'JP 1-02'
    },
    'SIS': {
        def: 'special information systems',
        src: 'JP 1-02'
    },
    'SIT': {
        def: 'special interest target',
        src: 'JP 1-02'
    },
    'SITREP': {
        def: 'situation report',
        src: '1-02'
    },
    'SIV': {
        def: 'special interest vessel',
        src: 'JP 1-02'
    },
    'SJA': {
        def: 'staff judge advocate',
        src: '1-02'
    },
    'SJFHQ': {
        def: 'standing joint force headquarters',
        src: 'JP 3-13'
    },
    'SJFHQ(CE)': {
        def: 'standing joint force headquarters (core element)',
        src: '1-02'
    },
    'SJFHQ-E': {
        def: 'standing joint force headquarters - elimination',
        src: '1-02'
    },
    'SJFHQ-N': {
        def: 'Standing Joint Force Headquarters - North',
        src: '1-02'
    },
    'SJS': {
        def: 'Secretary, Joint Staff',
        src: 'JP 1-02'
    },
    'SKE': {
        def: 'station-keeping equipment',
        src: 'JP 1-02'
    },
    'SL': {
        def: 'sea level; switch locator',
        src: 'JP 1-02'
    },
    'SLA': {
        def: 'service level agreement; special leave accrual ',
        src: '1-02'
    },
    'SLAM': {
        def: 'stand-off land attack missile',
        src: 'JP 1-02'
    },
    'SLBM': {
        def: 'submarine-launched ballistic missile',
        src: 'JP 1-02'
    },
    'SLC': {
        def: 'satellite laser communications; single line concept',
        src: 'JP 1-02'
    },
    'SLCM': {
        def: 'sea-launched cruise missile',
        src: '1-02'
    },
    'SLCP': {
        def: 'ship lighterage control point; ship\'s loading characteristics pamphlet',
        src: '1-02'
    },
    'SLD': {
        def: 'system link designator',
        src: 'JP 1-02'
    },
    'SLEP': {
        def: 'service life extension program',
        src: 'JP 1-02'
    },
    'SLGR': {
        def: 'small, lightweight ground receiver (GPS)',
        src: 'JP 1-02'
    },
    'SLIT': {
        def: 'serial-lot item tracking',
        src: 'JP 1-02'
    },
    'SLO': {
        def: 'space liaison officer',
        src: 'JP 1-02'
    },
    'SLOC': {
        def: 'sea line of communications',
        src: '1-02'
    },
    'SLRP': {
        def: 'survey, liaison, and reconnaissance party',
        src: '1-02'
    },
    'SLWT': {
        def: 'side loadable warping tug',
        src: '1-02'
    },
    'SM': {
        def: 'Secretary, Joint Staff, memorandum; Service manager; spectrum management; staff memorandum; system manager',
        src: '1-02'
    },
    'SMA': {
        def: 'special military information support operations assessment',
        src: '1-02'
    },
    'SMART': {
        def: 'special medical augmentation response team',
        src: 'JP 1-02'
    },
    'SMART-AIT': {
        def: 'special medical augmentation response - aeromedical isolation team',
        src: 'JP 3-41'
    },
    'SMB': {
        def: 'spectrum management branch',
        src: '1-02'
    },
    'SMC': {
        def: 'midpoint compromise track spacing; search and rescue mission coordinator; system master catalog',
        src: 'JP 1-02'
    },
    'SMCA': {
        def: 'single manager for conventional ammunition',
        src: '1-02'
    },
    'SMCC': {
        def: 'strategic mobile command center',
        src: 'JP 1-02'
    },
    'SMCM': {
        def: 'surface mine countermeasures',
        src: 'JP 1-02'
    },
    'SMCOO': {
        def: 'spectrum management concept of operations',
        src: 'JP 1-02'
    },
    'SMCR': {
        def: 'Selected Marine Corps Reserve',
        src: 'JP 1-02'
    },
    'SMD': {
        def: 'strategic missile defense',
        src: 'JP 1-02'
    },
    'SMDC': {
        def: 'Space & Missile Defense Command (Army)',
        src: 'JP 1-02'
    },
    'SMDC/ARSTRAT': {
        def: 'United States Army Space and Missile Defense Command/United States Army Forces Strategic Command',
        src: 'JP 3-14'
    },
    'SME': {
        def: 'subject matter expert',
        src: '1-02'
    },
    'SMEB': {
        def: 'significant military exercise brief',
        src: 'JP 1-02'
    },
    'SMEO': {
        def: 'small end office',
        src: 'JP 1-02'
    },
    'SMFT': {
        def: 'semi-trailer mounted fabric tank',
        src: 'JP 1-02'
    },
    'SMI': {
        def: 'security management infrastructure',
        src: 'JP 1-02'
    },
    'SMIO': {
        def: 'search and rescue (SAR) mission information officer',
        src: 'JP 1-02'
    },
    'SMO': {
        def: 'senior meteorological and oceanographic officer; strategic mobility office(r); support to military operations',
        src: '1-02'
    },
    'SMP': {
        def: 'sub-motor pool',
        src: 'JP 1-02'
    },
    'SMPT': {
        def: 'School of Military Packaging Technology',
        src: 'JP 1-02'
    },
    'SMRC': {
        def: 'Specialized Medical Response Capabilities',
        src: '1-02'
    },
    'SMRI': {
        def: 'service message routing indicator',
        src: 'JP 1-02'
    },
    'SMS': {
        def: 'single mobility system; special military information support operations study',
        src: '1-02'
    },
    'SMTP': {
        def: 'simple message transfer protocol',
        src: 'JP 1-02'
    },
    'SMU': {
        def: 'special mission unit; supported activities supply system (SASSY) management unit',
        src: 'JP 1-02'
    },
    'SN': {
        def: 'serial number',
        src: '1-02'
    },
    'SNCO': {
        def: 'staff noncommissioned officer',
        src: 'JP 1-02'
    },
    'SNF': {
        def: 'strategic nuclear forces',
        src: '1-02'
    },
    'SNIE': {
        def: 'special national intelligence estimates',
        src: 'JP 1-02'
    },
    'SNLC': {
        def: 'Senior North Atlantic Treaty Organization (NATO) Logisticians Conference',
        src: 'JP 1-02'
    },
    'SNM': {
        def: 'system notification message',
        src: 'JP 1-02'
    },
    'SNOI': {
        def: 'signal not of interest',
        src: 'JP 1-02'
    },
    'SO': {
        def: 'safety observer',
        src: '1-02'
    },
    'SOA': {
        def: 'separate operating agency; special operations aviation (Army); status of action; sustained operations ashore',
        src: '1-02'
    },
    'SOAF': {
        def: 'status of action file',
        src: 'JP 1-02'
    },
    'SOAGS': {
        def: 'special operations air-ground system',
        src: '1-02'
    },
    'SOC': {
        def: 'security operations center; special operations commander; special operations component',
        src: '1-02'
    },
    'SOCA': {
        def: 'special operations communications assembly',
        src: 'JP 1-02'
    },
    'SOCC': {
        def: 'Sector Operations Control Center (NORAD)',
        src: 'JP 1-02'
    },
    'SOCCE': {
        def: 'special operations command and control element',
        src: '1-02'
    },
    'SOCCENT': {
        def: 'Special Operations Component, United States Central Command',
        src: 'JP 1-02'
    },
    'SOCCET': {
        def: 'special operations critical care evacuation team',
        src: 'JP 4-02'
    },
    'SOCEUR': {
        def: 'Special Operations Component, United States European Command',
        src: 'JP 1-02'
    },
    'SOCEX': {
        def: 'special operations capable exercise',
        src: 'JP 1-02'
    },
    'SOCJFCOM': {
        def: 'Special Operations Command, Joint Forces Command',
        src: 'JP 1-02'
    },
    'SOCM': {
        def: 'special operations combat medic',
        src: '1-02'
    },
    'SOCOORD': {
        def: 'special operations coordination element',
        src: 'JP 1-02'
    },
    'SOCP': {
        def: 'special operations communication package',
        src: 'JP 1-02'
    },
    'SOCPAC': {
        def: 'Special Operations Command, Pacific',
        src: '1-02'
    },
    'SOCRATES': {
        def: 'Special Operations Command, Research, Analysis, and Threat Evaluation System',
        src: 'JP 1-02'
    },
    'SOCSOUTH': {
        def: 'Special Operations Component, United States Southern Command',
        src: 'JP 1-02'
    },
    'SOD': {
        def: 'special operations division; strategy and options decision (Planning, Programming, and Budgeting System)',
        src: 'JP 1-02'
    },
    'SODARS': {
        def: 'special operations debrief and retrieval system',
        src: 'JP 1-02'
    },
    'SOE': {
        def: 'special operations executive',
        src: 'JP 1-02'
    },
    'SOF': {
        def: 'special operations forces; supervisor of flying',
        src: '1-02'
    },
    'SOF-CF': {
        def: 'special operations forces-conventional forces',
        src: '1-02'
    },
    'SOFA': {
        def: 'status-of-forces agreement',
        src: '1-02'
    },
    'SOFAR': {
        def: 'sound fixing and ranging',
        src: 'JP 1-02'
    },
    'SOFLAM': {
        def: 'special operations laser marker',
        src: 'JP 1-02'
    },
    'SOFLE': {
        def: 'special operations forces liaison element',
        src: '1-02'
    },
    'SOFME': {
        def: 'special operations forces medical element',
        src: 'JP 1-02'
    },
    'SOFSA': {
        def: 'special operations forces support activity',
        src: 'JP 1-02'
    },
    'SOG': {
        def: 'special operations group',
        src: 'JP 1-02'
    },
    'SOI': {
        def: 'signal of interest; signal operating instructions; space object identification',
        src: 'JP 1-02'
    },
    'SOIC': {
        def: 'senior officer of the intelligence community',
        src: '1-02'
    },
    'SOJTF': {
        def: 'special operations joint task force',
        src: '1-02'
    },
    'SOLAS': {
        def: 'safety of life at sea',
        src: 'JP 1-02'
    },
    'SOLE': {
        def: 'special operations liaison element',
        src: '1-02'
    },
    'SOLIS': {
        def: 'signals intelligence (SIGINT) On-line Information System',
        src: 'JP 1-02'
    },
    'SOLL': {
        def: 'special operations low-level',
        src: 'JP 1-02'
    },
    'SOLO': {
        def: 'special operations liaison officer',
        src: '1-02'
    },
    'SOM': {
        def: 'satellite communications (SATCOM) operational manager; start of message; system operational manager',
        src: '1-02'
    },
    'SOMA': {
        def: 'status of mission agreement',
        src: '1-02'
    },
    'SOMARDS': {
        def: 'Standard Operation and Maintenance Army Research and Development System',
        src: '1-02'
    },
    'SOMARDS NT': {
        def: 'Standard Operation and Maintenance Army Research and Development System Non-Technical',
        src: '1-02'
    },
    'SoO': {
        def: 'ship of opportunity',
        src: 'JP 3-15'
    },
    'SOOP': {
        def: 'Center for Operations, Plans, and Policy'
    },
    'SOP': {
        def: 'standard operating procedure',
        src: '1-02'
    },
    'SOR': {
        def: 'statement of requirement',
        src: 'JP 1-02'
    },
    'SORTIEALOT': {
        def: 'sortie allotment message',
        src: '1-02'
    },
    'SORTS': {
        def: 'Status of Resources and Training System',
        src: '1-02'
    },
    'SOS': {
        def: 'special operations squadron',
        src: 'JP 1-02'
    },
    'SOSB': {
        def: 'special operations support battalion',
        src: 'JP 1-02'
    },
    'SOSC': {
        def: 'special operations support command (theater army)',
        src: 'JP 1-02'
    },
    'SOSCOM': {
        def: 'special operations support command',
        src: 'JP 1-02'
    },
    'SOSE': {
        def: 'special operations staff element',
        src: 'JP 1-02'
    },
    'SOSG': {
        def: 'station operations support group',
        src: 'JP 1-02'
    },
    'SOSR': {
        def: 'suppress, obscure, secure, and reduce',
        src: 'JP 1-02'
    },
    'SOST': {
        def: 'special operations support team',
        src: '1-02'
    },
    'SOTA': {
        def: 'signals intelligence operational tasking authority',
        src: '1-02'
    },
    'SOTF': {
        def: 'special operations task force',
        src: '1-02'
    },
    'SOTSE': {
        def: 'special operations theater support element',
        src: 'JP 1-02'
    },
    'SOUTHAF': {
        def: 'Southern Command Air Forces',
        src: 'JP 1-02'
    },
    'SOUTHROC': {
        def: 'Southern Region Operational Center (USSOUTHCOM)',
        src: 'JP 1-02'
    },
    'SOW': {
        def: 'special operations wing; standoff weapon; statement of work',
        src: 'JP 1-02'
    },
    'SOWT': {
        def: 'special operations weather team',
        src: 'JP 1-02'
    },
    'SP': {
        def: 'security police',
        src: 'JP 1-02'
    },
    'SPACEAF': {
        def: 'Space Air Forces',
        src: 'JP 1-02'
    },
    'SPACECON': {
        def: 'control of space information',
        src: 'JP 1-02'
    },
    'SPCC': {
        def: 'ships parts control center (USN)',
        src: 'JP 1-02'
    },
    'SPE': {
        def: 'senior procurement executive',
        src: '1-02'
    },
    'SPEAR': {
        def: 'strike protection evaluation and antiair research',
        src: 'JP 1-02'
    },
    'SPEC': {
        def: 'specified',
        src: 'JP 1-02'
    },
    'SPECAT': {
        def: 'special category',
        src: 'JP 1-02'
    },
    'SPECWAR': {
        def: 'special warfare',
        src: 'JP 1-02'
    },
    'SPG': {
        def: 'Strategic Planning Guidance',
        src: '1-02'
    },
    'SPI': {
        def: 'special investigative (USAF)',
        src: 'JP 1-02'
    },
    'SPINS': {
        def: 'special instructions',
        src: '1-02'
    },
    'SPINTCOMM': {
        def: 'special intelligence communications handling system',
        src: 'JP 1-02'
    },
    'SPIREP': {
        def: 'spot intelligence report',
        src: '1-02'
    },
    'SPLX': {
        def: 'simplex',
        src: 'JP 1-02'
    },
    'SPM': {
        def: 'service postal manager; single point mooring; single port manager',
        src: '1-02'
    },
    'SPMAGTF': {
        def: 'special purpose Marine air-ground task force',
        src: '1-02'
    },
    'SPO': {
        def: 'system program office',
        src: 'JP 1-02'
    },
    'SPOC': {
        def: 'search and rescue (SAR) points of contact; space command operations center',
        src: 'JP 1-02'
    },
    'SPOD': {
        def: 'seaport of debarkation',
        src: '1-02'
    },
    'SPOE': {
        def: 'seaport of embarkation',
        src: '1-02'
    },
    'SPOT': {
        def: 'Synchronized Predeployment and Operational Tracker',
        src: '1-02'
    },
    'SPOTREP': {
        def: 'spot report',
        src: 'JP 1-02'
    },
    'SPP': {
        def: 'Security and Prosperity Partnership of North America; shared production program; State Partnership Program (NG)',
        src: '1-02'
    },
    'SPR': {
        def: 'software problem report',
        src: 'JP 1-02'
    },
    'SPRINT': {
        def: 'special psychiatric rapid intervention team',
        src: 'JP 1-02'
    },
    'SPS': {
        def: 'standard positioning service',
        src: '1-02'
    },
    'SPSC': {
        def: 'system planning and system control',
        src: 'JP 1-02'
    },
    'SPTCONF': {
        def: 'support confirmation',
        src: 'JP 1-02'
    },
    'SPTD CMD': {
        def: 'supported command',
        src: 'JP 1-02'
    },
    'SPTG CMD': {
        def: 'supporting command',
        src: 'JP 1-02'
    },
    'SPTREQ': {
        def: 'support request',
        src: 'JP 1-02'
    },
    'sqft': {
        def: 'square feet',
        src: 'JP 1-02'
    },
    'SR': {
        def: 'special reconnaissance',
        src: '1-02'
    },
    'SR-UAV': {
        def: 'short-range unmanned aerial vehicle',
        src: 'JP 1-02'
    },
    'SRA': {
        def: 'specialized-repair activity',
        src: 'JP 1-02'
    },
    'SRAM': {
        def: 'short-range air-to-surface attack missile; system replacement and modernization',
        src: 'JP 1-02'
    },
    'SRB': {
        def: 'software release bulletin; system review board (JOPES)',
        src: 'JP 1-02'
    },
    'SRBM': {
        def: 'short-range ballistic missile',
        src: '1-02'
    },
    'SRC': {
        def: 'security risk category; service reception center; Single Integrated Operational Plan (SIOP) response cell; standard requirements code; survival recovery center',
        src: 'JP 1-02'
    },
    'SRCC': {
        def: 'service reserve coordination center',
        src: 'JP 1-02'
    },
    'SRF': {
        def: 'secure Reserve force',
        src: 'JP 1-02'
    },
    'SRG': {
        def: 'Seabee readiness group; short-range aircraft',
        src: '1-02'
    },
    'SRI': {
        def: 'surveillance, reconnaissance, and intelligence (Marine Corps)',
        src: 'JP 1-02'
    },
    'SRIG': {
        def: 'surveillance, reconnaissance, and intelligence group (USMC)',
        src: 'JP 1-02'
    },
    'SROC': {
        def: 'Senior Readiness Oversight Council; Southern Region Operational Center, United States Southern Command',
        src: 'JP 1-02'
    },
    'SROE': {
        def: 'standing rules of engagement',
        src: '1-02'
    },
    'SRP': {
        def: 'sealift reserve program; Single Integrated Operational Plan (SIOP) reconnaissance plan',
        src: '1-02'
    },
    'SRP/PDS': {
        def: 'stabilization reference package/position determining system',
        src: 'JP 1-02'
    },
    'SRR': {
        def: 'search and rescue region',
        src: 'JP 1-02'
    },
    'SRS': {
        def: 'search and rescue sector',
        src: 'JP 1-02'
    },
    'SRSG': {
        def: 'special representative of the Secretary-General',
        src: '1-02'
    },
    'SRT': {
        def: 'scheduled return time; special reaction team; standard remote terminal; strategic relocatable target',
        src: 'JP 1-02'
    },
    'SRTD': {
        def: 'signals research and target development',
        src: 'JP 1-02'
    },
    'SRU': {
        def: 'search and rescue unit',
        src: 'JP 1-02'
    },
    'SRUF': {
        def: 'standing rules for the use of force',
        src: '1-02'
    },
    'SRWBR': {
        def: 'short range wide band radio',
        src: 'JP 1-02'
    },
    'SS': {
        def: 'submarine',
        src: 'JP 1-02'
    },
    'SS (number)': {
        def: 'sea state (number)',
        src: 'JP 1-02'
    },
    'SSA': {
        def: 'software support activity; space situational awareness; special support activity (NSA); strapdown sensor assembly; supply support activity; supply support area',
        src: '1-02'
    },
    'SSB': {
        def: 'single side band; support services branch; surveillance support branch',
        src: 'JP 1-02'
    },
    'SSB-SC': {
        def: 'single sideband-suppressed carrier',
        src: 'JP 1-02'
    },
    'SSC': {
        def: 'small scale contingency; special security center; surveillance support center',
        src: '1-02'
    },
    'SSCO': {
        def: 'shipper\'s service control office',
        src: '1-02'
    },
    'SSCRA': {
        def: 'Soldiers and Sailors Civil Relief Act',
        src: 'JP 1-02'
    },
    'SSD': {
        def: 'strategic studies detachment',
        src: '1-02'
    },
    'SSE': {
        def: 'satellite communications (SATCOM) systems expert; space support element',
        src: '1-02'
    },
    'SSF': {
        def: 'software support facility',
        src: 'JP 1-02'
    },
    'SSI': {
        def: 'standing signal instruction',
        src: 'JP 1-02'
    },
    'SSM': {
        def: 'surface-to-surface missile',
        src: '1-02'
    },
    'SSMI': {
        def: 'special sensor microwave imager',
        src: 'JP 1-02'
    },
    'SSMS': {
        def: 'single shelter message switch',
        src: 'JP 1-02'
    },
    'SSN': {
        def: 'attack submarine, nuclear; Social Security number; space surveillance network',
        src: 'JP 1-02'
    },
    'SSO': {
        def: 'special security office(r); spot security office',
        src: 'JP 1-02'
    },
    'SSP': {
        def: 'signals intelligence (SIGINT) support plan',
        src: 'JP 1-02'
    },
    'SSPM': {
        def: 'single-service postal manager',
        src: '1-02'
    },
    'SSPO': {
        def: 'strategic systems program office',
        src: 'JP 1-02'
    },
    'SSR': {
        def: 'security sector reform',
        src: '1-02'
    },
    'SSS': {
        def: 'Selective Service System; shelter subsystem',
        src: '1-02'
    },
    'SSSC': {
        def: 'surface, subsurface search surveillance coordination',
        src: 'JP 1-02'
    },
    'SST': {
        def: 'special support team (National Security Agency)',
        src: 'JP 1-02'
    },
    'SSTR': {
        def: 'stability, security, transition, and reconstruction',
        src: 'JP 3-0'
    },
    'SSWG': {
        def: 'space support working group',
        src: '1-02'
    },
    'ST': {
        def: 'short ton; small tug; strike team',
        src: '1-02'
    },
    'ST&E': {
        def: 'security test and evaluation',
        src: 'JP 1-02'
    },
    'STA': {
        def: 'system tape A',
        src: 'JP 1-02'
    },
    'STA clk': {
        def: 'station clock',
        src: 'JP 1-02'
    },
    'STAB': {
        def: 'space tactical awareness brief',
        src: 'JP 1-02'
    },
    'STAMMIS': {
        def: 'standard Army multi-command management information system',
        src: 'JP 1-02'
    },
    'STAMP': {
        def: 'standard air munitions package (USAF)',
        src: 'JP 1-02'
    },
    'STANAG': {
        def: 'standardization agreement (NATO)',
        src: '1-02'
    },
    'STANAVFORLANT': {
        def: 'Standing Naval Forces, Atlantic (NATO)',
        src: 'JP 1-02'
    },
    'STAR': {
        def: 'scheduled theater airlift route;  sensitive target approval and review; standard attribute reference; standard terminal arrival route; surface-to-air recovery; system threat assessment report',
        src: '1-02'
    },
    'STARC': {
        def: 'state area coordinators',
        src: 'JP 1-02'
    },
    'STARS': {
        def: 'Standard Accounting and Reporting System',
        src: '1-02'
    },
    'START': {
        def: 'Strategic Arms Reduction Treaty',
        src: 'JP 1-02'
    },
    'STARTEX': {
        def: 'start of exercise',
        src: 'JP 1-02'
    },
    'STB': {
        def: 'super tropical bleach',
        src: 'JP 1-02'
    },
    'STC': {
        def: 'secondary traffic channel',
        src: 'JP 1-02'
    },
    'STD': {
        def: 'sexually transmitted disease',
        src: 'JP 4-02'
    },
    'STDM': {
        def: 'synchronous time division multiplexer',
        src: 'JP 1-02'
    },
    'STE': {
        def: 'secure telephone equipment',
        src: 'JP 1-02'
    },
    'STEL STU III': {
        def: 'Stanford telecommunications (secure telephone)',
        src: 'JP 1-02'
    },
    'STEP': {
        def: 'software test and evaluation program; standardized tactical entry point; standard tool for employment planning',
        src: '1-02'
    },
    'STG': {
        def: 'seasonal target graphic',
        src: 'JP 1-02'
    },
    'STICS': {
        def: 'scalable transportable intelligence communications system',
        src: 'JP 1-02'
    },
    'STO': {
        def: 'special technical operations',
        src: '1-02'
    },
    'STOC': {
        def: 'special technical operations coordinator',
        src: 'JP 1-02'
    },
    'STOD': {
        def: 'special technical operations division',
        src: 'JP 1-02'
    },
    'STOL': {
        def: 'short takeoff and landing',
        src: 'JP 1-02'
    },
    'STOMPS': {
        def: 'stand-alone tactical operational message processing system',
        src: 'JP 1-02'
    },
    'STON': {
        def: 'short ton',
        src: '1-02'
    },
    'STP': {
        def: 'security technical procedure',
        src: 'JP 1-02'
    },
    'STR': {
        def: 'strength',
        src: 'JP 1-02'
    },
    'STRAPP': {
        def: 'standard tanks, racks and pylons packages (USAF)',
        src: 'JP 1-02'
    },
    'STRATOPS': {
        def: 'strategic operations division',
        src: 'JP 1-02'
    },
    'STREAM': {
        def: 'standard tensioned replenishment alongside method',
        src: 'JP 1-02'
    },
    'STS': {
        def: 'special tactics squadron',
        src: 'JP 1-02'
    },
    'STT': {
        def: 'small tactical terminal; special tactics team',
        src: '1-02'
    },
    'STU': {
        def: 'secure telephone unit',
        src: 'JP 1-02'
    },
    'STU-III': {
        def: 'secure telephone unit III',
        src: 'JP 1-02'
    },
    'STW': {
        def: 'strike warfare',
        src: '1-02'
    },
    'STWC': {
        def: 'strike warfare commander',
        src: '1-02'
    },
    'STX': {
        def: 'start of text',
        src: 'JP 1-02'
    },
    'SU': {
        def: 'search unit',
        src: 'JP 1-02'
    },
    'sub-JIB': {
        def: 'subordinate-joint information bureau',
        src: 'JP 1-02'
    },
    'sub-PIC': {
        def: 'subordinate-press information center',
        src: 'JP 3-61'
    },
    'SUBJ': {
        def: 'subject',
        src: 'JP 1-02'
    },
    'SUBOPAUTH': {
        def: 'submarine operating authority',
        src: '1-02'
    },
    'SUBROC': {
        def: 'submarine rocket',
        src: 'JP 1-02'
    },
    'SUC': {
        def: 'surf current',
        src: 'JP 1-02'
    },
    'SUIC': {
        def: 'service unit identification code',
        src: 'JP 1-02'
    },
    'SUMMITS': {
        def: 'scenario unrestricted mobility model of intratheater simulation',
        src: 'JP 1-02'
    },
    'SUPE': {
        def: 'supervisory commands program',
        src: 'JP 1-02'
    },
    'SUPP': {
        def: 'supplement',
        src: '1-02'
    },
    'SUPPO': {
        def: 'supply officer',
        src: '1-02'
    },
    'SURG': {
        def: 'surgeon',
        src: 'JP 1-02'
    },
    'SUROBS': {
        def: 'surf observation',
        src: '1-02'
    },
    'SURPIC': {
        def: 'surface picture',
        src: 'JP 1-02'
    },
    'SUST BDE': {
        def: 'sustainment brigade',
        src: '1-02'
    },
    'SUW': {
        def: 'surface warfare',
        src: '1-02'
    },
    'SUWC': {
        def: 'surface warfare commander',
        src: '1-02'
    },
    'SVC': {
        def: 'Service; stored value card',
        src: '1-02'
    },
    'SVIP': {
        def: 'secure voice improvement program',
        src: 'JP 1-02'
    },
    'SVLTU': {
        def: 'service line termination unit',
        src: 'JP 1-02'
    },
    'SVR': {
        def: 'surface vessel radar',
        src: 'JP 1-02'
    },
    'SVS': {
        def: 'secure voice system',
        src: 'JP 1-02'
    },
    'Sw': {
        def: 'switch',
        src: 'JP 1-02'
    },
    'SWA': {
        def: 'Southwest Asia',
        src: 'JP 1-02'
    },
    'SWAT': {
        def: 'special weapons and tactics',
        src: 'JP 1-02'
    },
    'SWBD': {
        def: 'switchboard',
        src: 'JP 1-02'
    },
    'SWC': {
        def: 'strike warfare commander; swell/wave current',
        src: 'JP 1-02'
    },
    'SWI': {
        def: 'special weather intelligence',
        src: 'JP 1-02'
    },
    'SWO': {
        def: 'staff weather officer',
        src: 'JP 1-02'
    },
    'SWORD': {
        def: 'submarine warfare operations research division',
        src: 'JP 1-02'
    },
    'SWPC': {
        def: 'Space Weather Prediction Center',
        src: '1-02'
    },
    'SWSOCC': {
        def: 'Southwest Sector Operation Control Center North American Aerospace Defense Command (NORAD)',
        src: 'JP 1-02'
    },
    'SWXS': {
        def: 'Space Weather Squadron',
        src: 'JP 1-02'
    },
    'SXXI': {
        def: 'SPECTRUM XXI',
        src: '1-02'
    },
    'SXXI-O': {
        def: 'SPECTRUM XXI-Online',
        src: '1-02'
    },
    'SYDP': {
        def: 'six year defense plan',
        src: 'JP 1-02'
    },
    'SYG': {
        def: 'Secretary-General (UN)',
        src: '1-02'
    },
    'SYNC': {
        def: 'synchronization',
        src: 'JP 1-02'
    },
    'SYS': {
        def: 'system',
        src: 'JP 1-02'
    },
    'SYSCOM': {
        def: 'systems command',
        src: '1-02'
    },
    'SYSCON': {
        def: 'systems control',
        src: 'JP 1-02'
    },
    'SZ': {
        def: 'surf zone',
        src: '1-02'
    },
    'T': {
        def: 'search time available; short ton; trackline pattern',
        src: 'JP 1-02'
    },
    'T&DE': {
        def: 'test and diagnostic equipment',
        src: 'JP 1-02'
    },
    'T&E': {
        def: 'test and evaluation',
        src: 'JP 1-02'
    },
    'T-ACS': {
        def: 'auxiliary crane ship',
        src: '1-02'
    },
    'T-AGOS': {
        def: 'tactical auxiliary general ocean surveillance',
        src: 'JP 1-02'
    },
    'T-AH': {
        def: 'hospital ship',
        src: 'JP 1-02'
    },
    'T-AKR': {
        def: 'fast logistics ship',
        src: 'JP 1-02'
    },
    'T-ASA': {
        def: 'Television Audio Support Agency',
        src: 'JP 1-02'
    },
    'T-AVB': {
        def: 'aviation logistics support ship',
        src: 'JP 1-02'
    },
    'T-JMC': {
        def: 'theater-joint movement center',
        src: 'JP 1-02'
    },
    'T-JTB': {
        def: 'theater-joint transportation board',
        src: '1-02'
    },
    'T-net': {
        def: 'training net',
        src: 'JP 1-02'
    },
    'T/M/S': {
        def: 'type, model, and/or series',
        src: '1-02'
    },
    'T/O': {
        def: 'table of organization',
        src: 'JP 1-02'
    },
    'T2': {
        def: 'technology transfer',
        src: 'JP 1-02'
    },
    'TA': {
        def: 'target acquisition; target audience; technical arrangement; theater Army; threat assessment',
        src: '1-02'
    },
    'TA/CP': {
        def: 'technology assessment/control plan',
        src: 'JP 1-02'
    },
    'TAA': {
        def: 'tactical assembly area; target audience analysis',
        src: '1-02'
    },
    'TAACOM': {
        def: 'theater Army area command',
        src: 'JP 1-02'
    },
    'TAADS': {
        def: 'The Army Authorization Document System',
        src: 'JP 1-02'
    },
    'TAAMDCOORD': {
        def: 'theater Army air and missile defense coordinator',
        src: '1-02'
    },
    'TAB': {
        def: 'tactical air base',
        src: 'JP 1-02'
    },
    'TAC': {
        def: 'tactical advanced computer; terminal access controller; terminal attack control; terminal attack controller',
        src: 'JP 1-02'
    },
    'TAC(A)': {
        def: 'tactical air coordinator (airborne)',
        src: 'JP 1-02'
    },
    'TAC-D': {
        def: 'tactical deception',
        src: '1-02'
    },
    'TACAIR': {
        def: 'tactical air',
        src: '1-02'
    },
    'TACAMO': {
        def: 'take charge and move out (E-6A/B aircraft)',
        src: 'JP 1-02'
    },
    'TACAN': {
        def: 'tactical air navigation',
        src: '1-02'
    },
    'TACC': {
        def: 'tanker airlift control center',
        src: '1-02'
    },
    'TACDAR': {
        def: 'tactical detection and reporting',
        src: 'JP 1-02'
    },
    'TACINTEL': {
        def: 'tactical intelligence',
        src: 'JP 1-02'
    },
    'TACLAN': {
        def: 'tactical local area network',
        src: 'JP 1-02'
    },
    'TACLOG': {
        def: 'tactical-logistical',
        src: '1-02'
    },
    'TACM': {
        def: 'tactical air command manual',
        src: 'JP 1-02'
    },
    'TACO': {
        def: 'theater allied contracting office',
        src: 'JP 1-02'
    },
    'TACON': {
        def: 'tactical control',
        src: '1-02'
    },
    'TACOPDAT': {
        def: 'tactical operational data',
        src: '1-02'
    },
    'TACP': {
        def: 'tactical air control party',
        src: '1-02'
    },
    'TACRON': {
        def: 'tactical air control squadron',
        src: 'JP 1-02'
    },
    'TACS': {
        def: 'tactical air control system; theater air control system',
        src: '1-02'
    },
    'TACSAT': {
        def: 'tactical satellite',
        src: '1-02'
    },
    'TACSIM': {
        def: 'tactical simulation',
        src: 'JP 1-02'
    },
    'TACSTANS': {
        def: 'tactical standards',
        src: 'JP 1-02'
    },
    'TACT': {
        def: 'tactical aviation control team',
        src: '1-02'
    },
    'TACTRAGRULANT': {
        def: 'Tactical Training Group, Atlantic',
        src: 'JP 1-02'
    },
    'TAD': {
        def: 'tactical air direction; temporary additional duty (non-unit-related personnel); theater air defense; time available for delivery',
        src: 'JP 1-02'
    },
    'TADC': {
        def: 'tactical air direction center',
        src: '1-02'
    },
    'TADCS': {
        def: 'tactical airborne digital camera system',
        src: 'JP 1-02'
    },
    'TADS': {
        def: 'Tactical Air Defense System; target acquisition system and designation sight',
        src: 'JP 1-02'
    },
    'TAES': {
        def: 'theater aeromedical evacuation system',
        src: 'JP 1-02'
    },
    'TAF': {
        def: 'tactical air force',
        src: 'JP 1-02'
    },
    'TAFDS': {
        def: 'tactical airfield fuel dispensing system',
        src: 'JP 1-02'
    },
    'TAFIM': {
        def: 'technical architecture framework for information management',
        src: 'JP 1-02'
    },
    'TAFS': {
        def: 'tactical aerodrome forecasts',
        src: 'JP 1-02'
    },
    'TAFT': {
        def: 'technical assistance field team',
        src: 'JP 1-02'
    },
    'TAG': {
        def: 'technical assessment group; technical assistance group; the adjutant general; Tomahawk land-attack missile aimpoint graphic',
        src: '1-02'
    },
    'TAGS': {
        def: 'theater air-ground system',
        src: '1-02'
    },
    'TAI': {
        def: 'target area of interest; total active inventory',
        src: '1-02'
    },
    'TAIS': {
        def: 'transportation automated information systems',
        src: 'JP 1-02'
    },
    'TAK': {
        def: 'cargo ship',
        src: 'JP 1-02'
    },
    'TALD': {
        def: 'tactical air-launched decoy',
        src: 'JP 1-02'
    },
    'TALON': {
        def: 'Threat and Local Observation Notice',
        src: 'JP 3-07.2'
    },
    'TAMCA': {
        def: 'theater Army movement control agency',
        src: 'JP 1-02'
    },
    'TAMCO': {
        def: 'theater Army movement control center',
        src: 'JP 1-02'
    },
    'TAMD': {
        def: 'theater air and missile defense',
        src: 'JP 3-09'
    },
    'TAMMC': {
        def: 'theater army material management command',
        src: 'JP 1-02'
    },
    'TAMMIS': {
        def: 'theater Army medical management information system',
        src: 'JP 1-02'
    },
    'TAMS': {
        def: 'transportation analysis, modeling, and simulation',
        src: 'JP 1-02'
    },
    'tanalt': {
        def: 'tangent altitude',
        src: 'JP 1-02'
    },
    'TAO': {
        def: 'tactical action officer; tactical air officer',
        src: '1-02'
    },
    'TAOC': {
        def: 'tactical air operations center (USMC)',
        src: '1-02'
    },
    'TAP': {
        def: 'troopship',
        src: 'JP 1-02'
    },
    'TAR': {
        def: 'tactical air request; Training and Administration of the Reserve',
        src: 'JP 1-02'
    },
    'TARBS': {
        def: 'transportable amplitude modulation and frequency modulation radio broadcast system'
    },
    'TARBUL': {
        def: 'target bulletin',
        src: 'JP 1-02'
    },
    'TARE': {
        def: 'tactical record evaluation',
        src: 'JP 1-02'
    },
    'TAREX': {
        def: 'target exploitation; target plans and operations',
        src: 'JP 1-02'
    },
    'TARS': {
        def: 'tethered aerostat radar system',
        src: 'JP 1-02'
    },
    'TARWI': {
        def: 'target weather and intelligence',
        src: 'JP 1-02'
    },
    'TAS': {
        def: 'tactical atmospheric summary; true air speed',
        src: 'JP 1-02'
    },
    'TASCID': {
        def: 'tactical Automatic Digital Network (AUTODIN) satellite compensation interface device',
        src: 'JP 1-02'
    },
    'TASCO': {
        def: 'tactical automatic switch control officer',
        src: 'JP 1-02'
    },
    'TASIP': {
        def: 'tailored analytic intelligence support to individual electronic warfare and command and control warfare projects',
        src: 'JP 1-02'
    },
    'TASKORD': {
        def: 'tasking order',
        src: 'JP 1-02'
    },
    'TASMO': {
        def: 'tactical air support for maritime operations',
        src: 'JP 1-02'
    },
    'TASOSC': {
        def: 'theater Army special operations support command',
        src: 'JP 1-02'
    },
    'TASS': {
        def: 'tactical automated security system; tactical automated switch system',
        src: 'JP 1-02'
    },
    'TASWC': {
        def: 'theater antisubmarine warfare commander',
        src: '1-02'
    },
    'TAT': {
        def: 'tactical analysis team; technical assistance team',
        src: '1-02'
    },
    'TATC': {
        def: 'tactical air traffic control',
        src: 'JP 1-02'
    },
    'TAW': {
        def: 'tactical airlift wing',
        src: 'JP 1-02'
    },
    'TBC': {
        def: 'theater business clearance',
        src: '1-02'
    },
    'TBD': {
        def: 'to be determined',
        src: 'JP 1-02'
    },
    'TBM': {
        def: 'tactical ballistic missile; theater ballistic missile',
        src: 'JP 1-02'
    },
    'TBMCS': {
        def: 'theater battle management core system',
        src: '1-02'
    },
    'TBMD': {
        def: 'theater ballistic missile defense',
        src: 'JP 1-02'
    },
    'TBP': {
        def: 'to be published',
        src: 'JP 1-02'
    },
    'TBSL': {
        def: 'to be supplied later',
        src: 'JP 1-02'
    },
    'TBTC': {
        def: 'transportable blood transshipment center',
        src: 'JP 1-02'
    },
    'TC': {
        def: 'tidal current; transmit clock and/or telemetry combiner; training circular; Transportation Corps (Army)',
        src: 'JP 1-02'
    },
    'TC-ACCIS': {
        def: 'Transportation Coordinator\'s Automated Command and Control Information System',
        src: 'JP 1-02'
    },
    'TC-AIMS': {
        def: 'Transportation Coordinator\'s Automated Information for Movement System',
        src: 'JP 1-02'
    },
    'TC-AIMS II': {
        def: 'Transportation Coordinator\'s Automated Information for Movement System II',
        src: '1-02'
    },
    'TCA': {
        def: 'terminal control area; time of closest approach; traditional combatant commander activity',
        src: '1-02'
    },
    'TCAM': {
        def: 'theater Army medical management information system (TAMMIS) customer assistance module',
        src: 'JP 4-02'
    },
    'TCC': {
        def: 'transmission control code; transportation component command',
        src: '1-02'
    },
    'TCCF': {
        def: 'tactical communications control facility',
        src: 'JP 1-02'
    },
    'TCEM': {
        def: 'theater contingency engineering management',
        src: '1-02'
    },
    'TCF': {
        def: 'tactical combat force; technical control facility',
        src: 'JP 1-02'
    },
    'TCM': {
        def: 'theater construction manager; theater container manager',
        src: '1-02'
    },
    'TCMD': {
        def: 'transportation control and movement document',
        src: '1-02'
    },
    'TCN': {
        def: 'third country national; transportation control number; troop contributing nations',
        src: '1-02'
    },
    'TCO': {
        def: 'termination contracting officer; transnational criminal organization',
        src: '1-02'
    },
    'TCP': {
        def: 'theater campaign plan',
        src: '1-02'
    },
    'TCPED': {
        def: 'tasking, collection, processing, exploitation, and dissemination',
        src: '1-02'
    },
    'TCS': {
        def: 'theater communications system',
        src: '1-02'
    },
    'TCSEC': {
        def: 'trusted computer system evaluation criteria',
        src: 'JP 1-02'
    },
    'TCSP': {
        def: 'theater consolidation and shipping point',
        src: '1-02'
    },
    'TD': {
        def: 'temporary duty; theater distribution; tie down; timing distributor; total drift; transmit data',
        src: '1-02'
    },
    'TDA': {
        def: 'Table of Distribution and Allowance',
        src: 'JP 1-02'
    },
    'TDAD': {
        def: 'Table of Distribution and Allowance (TDA) designation',
        src: 'JP 1-02'
    },
    'TDBM': {
        def: 'technical database management',
        src: 'JP 1-02'
    },
    'TDBSS': {
        def: 'Theater Defense Blood Standard System',
        src: 'JP 4-02'
    },
    'TDC': {
        def: 'target development cell',
        src: '1-02'
    },
    'TDD': {
        def: 'target desired ground zero (DGZ) designator; time-definite delivery',
        src: '1-02'
    },
    'TDF': {
        def: 'tactical digital facsimile',
        src: 'JP 1-02'
    },
    'TDIC': {
        def: 'time division interface controller',
        src: 'JP 1-02'
    },
    'TDIG': {
        def: 'time division interface group',
        src: 'JP 1-02'
    },
    'TDIM': {
        def: 'time division interface module',
        src: 'JP 1-02'
    },
    'TDL': {
        def: 'tactical data link',
        src: '1-02'
    },
    'TDM': {
        def: 'time division multiplexed',
        src: 'JP 1-02'
    },
    'TDMA': {
        def: 'time division multiple access',
        src: 'JP 1-02'
    },
    'TDMC': {
        def: 'theater distribution management cell'
    },
    'TDMF': {
        def: 'time division matrix function',
        src: 'JP 1-02'
    },
    'TDMM': {
        def: 'time division memory module',
        src: 'JP 1-02'
    },
    'TDMX': {
        def: 'time division matrix',
        src: 'JP 1-02'
    },
    'TDN': {
        def: 'tactical data network; target development nomination',
        src: '1-02'
    },
    'TDP': {
        def: 'theater distribution plan',
        src: '1-02'
    },
    'TDR': {
        def: 'transportation discrepancy report',
        src: 'JP 1-02'
    },
    'TDRC': {
        def: 'theater detainee reporting center',
        src: 'JP 1-02'
    },
    'TDSG': {
        def: 'time division switching group',
        src: 'JP 1-02'
    },
    'TDSGM': {
        def: 'time division switching group modified',
        src: 'JP 1-02'
    },
    'TDT': {
        def: 'theater display terminal',
        src: 'JP 1-02'
    },
    'TDY': {
        def: 'temporary duty',
        src: '1-02'
    },
    'TE': {
        def: 'transaction editor',
        src: 'JP 1-02'
    },
    'TEA': {
        def: 'Transportation Engineering Agency',
        src: '1-02'
    },
    'TEC': {
        def: 'theater engineer command',
        src: '1-02'
    },
    'tech': {
        def: 'technical',
        src: 'JP 1-02'
    },
    'TECHCON': {
        def: 'technical control',
        src: 'JP 1-02'
    },
    'TECHDOC': {
        def: 'technical documentation',
        src: 'JP 1-02'
    },
    'TECHELINT': {
        def: 'technical electronic intelligence',
        src: '1-02'
    },
    'TECHEVAL': {
        def: 'technical evaluation',
        src: 'JP 1-02'
    },
    'TECHINT': {
        def: 'technical intelligence',
        src: '1-02'
    },
    'TECHOPDAT': {
        def: 'technical operational data',
        src: 'JP 1-02'
    },
    'TECS II': {
        def: 'Treasury Enforcement Communications System',
        src: 'JP 1-02'
    },
    'TED': {
        def: 'trunk encryption device',
        src: 'JP 1-02'
    },
    'TEDAC': {
        def: 'Terrorist Explosive Device Analytical Center (FBI)',
        src: '1-02'
    },
    'TEK': {
        def: 'TeleEngineering Kit',
        src: 'JP 3-34'
    },
    'TEL': {
        def: 'transporter-erector-launcher',
        src: '1-02'
    },
    'TELEX': {
        def: 'teletype',
        src: 'JP 1-02'
    },
    'TELINT': {
        def: 'telemetry intelligence',
        src: 'JP 1-02'
    },
    'TELNET': {
        def: 'telecommunication network',
        src: 'JP 1-02'
    },
    'TEMPER': {
        def: 'tent extendible modular personnel',
        src: '1-02'
    },
    'TENCAP': {
        def: 'tactical exploitation of national capabilities program',
        src: '1-02'
    },
    'TEO': {
        def: 'team embarkation officer',
        src: '1-02'
    },
    'TEOB': {
        def: 'tactical electronic order of battle',
        src: 'JP 1-02'
    },
    'TEP': {
        def: 'test and evaluation plan; theater engagement plan',
        src: 'JP 1-02'
    },
    'TERCOM': {
        def: 'terrain contour matching',
        src: 'JP 1-02'
    },
    'TERF': {
        def: 'terrain flight',
        src: 'JP 1-02'
    },
    'TERPES': {
        def: 'tactical electronic reconnaissance processing and evaluation system',
        src: 'JP 1-02'
    },
    'TERPROM': {
        def: 'terrain profile matching',
        src: 'JP 1-02'
    },
    'TERS': {
        def: 'tactical event reporting system',
        src: 'JP 1-02'
    },
    'TES': {
        def: 'theater event system',
        src: '1-02'
    },
    'TESS': {
        def: 'Tactical Environmental Support System',
        src: 'JP 1-02'
    },
    'TET': {
        def: 'targeting effects team',
        src: '1-02'
    },
    'TETK': {
        def: 'TeleEngineering Toolkit',
        src: '1-02'
    },
    'TEU': {
        def: 'technical escort unit; twenty-foot equivalent unit',
        src: '1-02'
    },
    'TEWLS': {
        def: 'Theater Enterprise Wide Logistics System',
        src: 'JP 4-02'
    },
    'TF': {
        def: 'task force',
        src: '1-02'
    },
    'TFA': {
        def: 'toxic free area',
        src: 'JP 1-02'
    },
    'TFADS': {
        def: 'Table Formatted Aeronautic Data Set',
        src: 'JP 1-02'
    },
    'TFC': {
        def: 'threat finance cell',
        src: '1-02'
    },
    'TFCICA': {
        def: 'task force counterintelligence coordinating authority',
        src: '1-02'
    },
    'TFE': {
        def: 'tactical field exchange; threat finance exploitation; transportation feasibility estimator',
        src: '1-02'
    },
    'TFF': {
        def: 'total force fitness',
        src: '1-02'
    },
    'TFLIR': {
        def: 'targeting forward-looking infrared',
        src: 'JP 1-02'
    },
    'TFMS-M': {
        def: 'Transportation Financial Management System-Military',
        src: '1-02'
    },
    'TFR': {
        def: 'temporary flight restriction',
        src: 'JP 1-02'
    },
    'TFS': {
        def: 'tactical fighter squadron; Tactical Forecast System',
        src: 'JP 1-02'
    },
    'TG': {
        def: 'task group',
        src: 'JP 1-02'
    },
    'TGC': {
        def: 'trunk group cluster',
        src: 'JP 1-02'
    },
    'TGEN': {
        def: 'table generate',
        src: 'JP 1-02'
    },
    'TGM': {
        def: 'terminally guided munitions; trunk group multiplexer',
        src: '1-02'
    },
    'TGMOW': {
        def: 'transmission group module and/or orderwire',
        src: 'JP 1-02'
    },
    'TGO': {
        def: 'terminal guidance operations',
        src: '1-02'
    },
    'TGT': {
        def: 'target',
        src: 'JP 1-02'
    },
    'TGTINFOREP': {
        def: 'target information report',
        src: 'JP 1-02'
    },
    'TGU': {
        def: 'trunk compatibility unit',
        src: 'JP 1-02'
    },
    'THAAD': {
        def: 'Terminal High Altitude Area Defense',
        src: '1-02'
    },
    'THREATCON': {
        def: 'terrorist threat condition',
        src: 'JP 1-02'
    },
    'THT': {
        def: 'tactical human intelligence team',
        src: '1-02'
    },
    'THX': {
        def: 'theater express',
        src: '1-02'
    },
    'TI': {
        def: 'threat identification; training instructor',
        src: 'JP 1-02'
    },
    'TIA': {
        def: 'theater intelligence assessment',
        src: '1-02'
    },
    'TIAP': {
        def: 'theater intelligence architecture program',
        src: 'JP 1-02'
    },
    'TIB': {
        def: 'theater intelligence brigade; toxic industrial biological',
        src: '1-02'
    },
    'TIBS': {
        def: 'tactical information broadcast service',
        src: 'JP 1-02'
    },
    'TIC': {
        def: 'target information center; toxic industrial chemical',
        src: '1-02'
    },
    'TIDE': {
        def: 'Terrorist Identities Datamart Environment',
        src: '1-02'
    },
    'TIDP': {
        def: 'technical interface design plan',
        src: 'JP 1-02'
    },
    'TIDS': {
        def: 'tactical imagery dissemination system',
        src: 'JP 1-02'
    },
    'TIF': {
        def: 'theater internment facility',
        src: 'JP 1-02'
    },
    'TIFF': {
        def: 'tagged image file format',
        src: 'JP 1-02'
    },
    'TII': {
        def: 'total inactive inventory',
        src: 'JP 1-02'
    },
    'TIM': {
        def: 'theater information management; toxic industrial material',
        src: '1-02'
    },
    'TIO': {
        def: 'target intelligence officer',
        src: 'JP 1-02'
    },
    'TIP': {
        def: 'target intelligence package; trafficking in persons',
        src: '1-02'
    },
    'TIPG': {
        def: 'telephone interface planning guide',
        src: 'JP 1-02'
    },
    'TIPI': {
        def: 'tactical information processing interpretation',
        src: '1-02'
    },
    'TIPS': {
        def: 'tactical optical surveillance system (TOSS) imagery processing system',
        src: 'JP 1-02'
    },
    'TIR': {
        def: 'toxic industrial radiological',
        src: 'JP 3-41'
    },
    'TIROS': {
        def: 'television infrared observation satellite',
        src: 'JP 1-02'
    },
    'TIS': {
        def: 'technical interface specification; thermal imaging system',
        src: 'JP 1-02'
    },
    'TISG': {
        def: 'technical interoperability standards group',
        src: 'JP 1-02'
    },
    'TISS': {
        def: 'thermal imaging sensor system',
        src: 'JP 1-02'
    },
    'TJAG': {
        def: 'the judge advocate general',
        src: 'JP 1-04'
    },
    'TJTN': {
        def: 'theater joint tactical network',
        src: 'JP 6-0'
    },
    'TL': {
        def: 'team leader',
        src: 'JP 1-02'
    },
    'TLA': {
        def: 'theater logistics analysis',
        src: '1-02'
    },
    'TLAM': {
        def: 'Tomahawk land-attack missile',
        src: '1-02'
    },
    'TLAM/N': {
        def: 'Tomahawk land attack missile/nuclear',
        src: 'JP 1-02'
    },
    'TLAMM': {
        def: 'theater lead agent for medical materiel',
        src: '1-02'
    },
    'TLC': {
        def: 'traffic load control',
        src: 'JP 1-02'
    },
    'TLE': {
        def: 'target location error'
    },
    'TLM': {
        def: 'target list management; topographic line map',
        src: '1-02'
    },
    'TLO': {
        def: 'theater logistics overview',
        src: '1-02'
    },
    'TLP': {
        def: 'transmission level point',
        src: 'JP 1-02'
    },
    'TLR': {
        def: 'trailer',
        src: 'JP 1-02'
    },
    'TLX': {
        def: 'teletype',
        src: 'JP 1-02'
    },
    'TM': {
        def: 'tactical missile; target materials; team member; technical manual; TROPO modem',
        src: '1-02'
    },
    'TMAO': {
        def: 'theater mortuary affairs office; theater mortuary affairs officer',
        src: '1-02'
    },
    'TMB': {
        def: 'tactical military information support operations battalion',
        src: '1-02'
    },
    'TMD': {
        def: 'tactical munitions dispenser; theater missile defense',
        src: 'JP 1-02'
    },
    'TMEP': {
        def: 'theater mortuary evacuation point',
        src: 'JP 1-02'
    },
    'TMG': {
        def: 'timing',
        src: 'JP 1-02'
    },
    'TMIP': {
        def: 'theater medical information program',
        src: 'JP 4-02'
    },
    'TMIS': {
        def: 'theater medical information system',
        src: 'JP 1-02'
    },
    'TML': {
        def: 'terminal',
        src: 'JP 1-02'
    },
    'TMLMC': {
        def: 'theater medical logistic management center',
        src: 'JP 4-02'
    },
    'TMMMC': {
        def: 'theater medical materiel management center',
        src: 'JP 1-02'
    },
    'TMN': {
        def: 'trackline multiunit non-return',
        src: 'JP 1-02'
    },
    'TMO': {
        def: 'traffic management office; transportation management office',
        src: 'JP 1-02'
    },
    'TMP': {
        def: 'target materials program; telecommunications management program; theater manpower forces',
        src: 'JP 1-02'
    },
    'TMR': {
        def: 'trackline multiunit return',
        src: 'JP 1-02'
    },
    'TMT': {
        def: 'time-phased force and deployment data management tool',
        src: '1-02'
    },
    'TNAPS': {
        def: 'tactical network analysis and planning system',
        src: 'JP 1-02'
    },
    'TNAPS+': {
        def: 'tactical network analysis and planning system plus',
        src: 'JP 1-02'
    },
    'TNC': {
        def: 'theater network operations center',
        src: '1-02'
    },
    'TNCC': {
        def: 'theater network operations control center',
        src: '1-02'
    },
    'TNCO': {
        def: 'transnational criminal organization',
        src: 'JP 3-07.4'
    },
    'TNF': {
        def: 'theater nuclear force',
        src: 'JP 1-02'
    },
    'TNL': {
        def: 'target nomination list',
        src: '1-02'
    },
    'TO': {
        def: 'technical order; theater of operations',
        src: 'JP 1-02'
    },
    'TO&E': {
        def: 'table of organization and equipment',
        src: 'JP 1-02'
    },
    'TOA': {
        def: 'table of allowance',
        src: '1-02'
    },
    'TOC': {
        def: 'tactical operations center; tanker airlift control center (TALCE) operations center',
        src: '1-02'
    },
    'TOCU': {
        def: 'tropospheric scatter (TROPO) orderwire control unit',
        src: 'JP 1-02'
    },
    'TOD': {
        def: 'tactical ocean data; time of day',
        src: '1-02'
    },
    'TOE': {
        def: 'table of organization and equipment',
        src: 'JP 1-02'
    },
    'TOF': {
        def: 'time of flight',
        src: 'JP 1-02'
    },
    'TOFC': {
        def: 'trailer on flatcar',
        src: 'JP 1-02'
    },
    'TOH': {
        def: 'top of hill',
        src: 'JP 1-02'
    },
    'TOI': {
        def: 'track of interest',
        src: '1-02'
    },
    'TOPINT': {
        def: 'technical operational intelligence',
        src: '1-02'
    },
    'TOR': {
        def: 'term of reference; time of receipt',
        src: '1-02'
    },
    'TOS': {
        def: 'time on station',
        src: 'JP 1-02'
    },
    'TOSS': {
        def: 'tactical optical surveillance system',
        src: 'JP 1-02'
    },
    'TOT': {
        def: 'time on target',
        src: 'JP 1-02'
    },
    'TOW': {
        def: 'tube launched, optically tracked, wire guided',
        src: 'JP 1-02'
    },
    'TP': {
        def: 'technical publication; transportation priority; turn point',
        src: '1-02'
    },
    'TPC': {
        def: 'tactical pilotage chart',
        src: '1-02'
    },
    'TPC/PC': {
        def: 'tactical pilotage chart and/or pilotage chart',
        src: 'JP 1-02'
    },
    'TPE': {
        def: 'theater provided equipment',
        src: '1-02'
    },
    'TPED': {
        def: 'tasking, processing, exploitation, and dissemination; theater personal effects depot',
        src: '1-02'
    },
    'TPERS': {
        def: 'type personnel element',
        src: 'JP 1-02'
    },
    'TPFDD': {
        def: 'time-phased force and deployment data',
        src: '1-02'
    },
    'TPFDL': {
        def: 'time-phased force and deployment list',
        src: '1-02'
    },
    'TPL': {
        def: 'technical publications list; telephone private line',
        src: 'JP 1-02'
    },
    'TPME': {
        def: 'task, purpose, method, and effects'
    },
    'TPMRC': {
        def: 'theater patient movement requirements center',
        src: '1-02'
    },
    'TPO': {
        def: 'task performance observation',
        src: 'JP 1-02'
    },
    'TPRC': {
        def: 'theater planning response cell',
        src: 'JP 1-02'
    },
    'TPT': {
        def: 'tactical petroleum terminal',
        src: 'JP 1-02'
    },
    'TPTRL': {
        def: 'time-phased transportation requirements list',
        src: 'JP 1-02'
    },
    'TPU': {
        def: 'tank pump unit',
        src: 'JP 1-02'
    },
    'TQ': {
        def: 'tactical questioning',
        src: '1-02'
    },
    'TRA': {
        def: 'technical review authority',
        src: '1-02'
    },
    'TRAC2ES': {
        def: 'United States Transportation Command Regulating and Command and Control Evacuation System',
        src: '1-02'
    },
    'TRACON': {
        def: 'terminal radar approach control facility',
        src: 'JP 1-02'
    },
    'TRADOC': {
        def: 'United States Army Training and Doctrine Command',
        src: 'JP 1-02'
    },
    'TRAM': {
        def: 'target recognition attack multisensor',
        src: 'JP 1-02'
    },
    'Trans BDE': {
        def: 'transportation brigade',
        src: '1-02'
    },
    'Trans Det RPO': {
        def: 'transportation detachment rapid port opening',
        src: '1-02'
    },
    'TRANSEC': {
        def: 'transmission security',
        src: 'JP 1-02'
    },
    'TRAP': {
        def: 'tactical recovery of aircraft and personnel (Marine Corps); tactical related applications; tanks, racks, adapters, and pylons; terrorism research and analysis program',
        src: 'JP 1-02'
    },
    'TRC': {
        def: 'tactical radio communication; threat reduction cooperation; transmission release code',
        src: '1-02'
    },
    'TRCC': {
        def: 'tactical record communications center',
        src: 'JP 1-02'
    },
    'TRE': {
        def: 'tactical receive equipment',
        src: 'JP 1-02'
    },
    'TREAS': {
        def: 'Department of the Treasury',
        src: 'JP 1-02'
    },
    'TREE': {
        def: 'transient radiation effects on electronics',
        src: 'JP 1-02'
    },
    'TRI-TAC': {
        def: 'Tri-Service Tactical Communications Program',
        src: 'JP 1-02'
    },
    'TRIADS': {
        def: 'Tri-Wall Aerial Distribution System',
        src: '1-02'
    },
    'TRICON': {
        def: 'triple container',
        src: '1-02'
    },
    'TRK': {
        def: 'truck; trunk',
        src: 'JP 1-02'
    },
    'TRNG': {
        def: 'training',
        src: 'JP 1-02'
    },
    'TRO': {
        def: 'training and readiness oversight',
        src: '1-02'
    },
    'TROPO': {
        def: 'troposphere; tropospheric scatter',
        src: 'JP 1-02'
    },
    'TRP': {
        def: 'target reference point',
        src: '1-02'
    },
    'TRS': {
        def: 'tactical reconnaissance squadron',
        src: 'JP 1-02'
    },
    'TS': {
        def: 'terminal service; time-sensitive; top secret',
        src: '1-02'
    },
    'TSA': {
        def: 'target system analysis; theater storage area; Transportation Security Administration (DHS); travel security advisory',
        src: '1-02'
    },
    'TSB': {
        def: 'technical support branch; trunk signaling buffer',
        src: 'JP 1-02'
    },
    'TSBn': {
        def: 'transportation support battalion (USMC)',
        src: 'JP 1-02'
    },
    'TSC': {
        def: 'theater security cooperation; theater support command; theater sustainment command (Army)',
        src: '1-02'
    },
    'TSCIF': {
        def: 'tactical sensitive compartmented information facility',
        src: 'JP 1-02'
    },
    'TSCM': {
        def: 'technical surveillance countermeasures',
        src: 'JP 1-02'
    },
    'TSCO': {
        def: 'target selection confusion of the operator; top secret control officer',
        src: 'JP 1-02'
    },
    'TSCP': {
        def: 'theater security cooperation plan'
    },
    'TSCR': {
        def: 'time sensitive collection requirement',
        src: 'JP 2-01.2'
    },
    'TSE': {
        def: 'tactical support element',
        src: 'JP 1-02'
    },
    'TSEC': {
        def: 'transmission security',
        src: 'JP 1-02'
    },
    'TSG': {
        def: 'targeting support group; test signal generator',
        src: 'JP 1-02'
    },
    'TSGCE': {
        def: 'tri-Service group on communications and electronics',
        src: 'JP 1-02'
    },
    'TSGCEE': {
        def: 'tri-Service group on communications and electronic equipment (NATO)',
        src: 'JP 1-02'
    },
    'TSM': {
        def: 'trunk signaling message',
        src: 'JP 1-02'
    },
    'TSN': {
        def: 'trackline single-unit non-return; track supervision net',
        src: 'JP 1-02'
    },
    'TSO': {
        def: 'technical standard order; telecommunications service order',
        src: 'JP 1-02'
    },
    'TSOC': {
        def: 'tactical special operations command; theater special operations command',
        src: '1-02'
    },
    'TSP': {
        def: 'telecommunications service priority',
        src: 'JP 1-02'
    },
    'TSR': {
        def: 'telecommunications service request; theater source registry; theater support representative; trackline single-unit return',
        src: 'JP 1-02'
    },
    'TSS': {
        def: 'tactical shelter system; target sensing system; timesharing system; time signal set; traffic service station',
        src: '1-02'
    },
    'TSSP': {
        def: 'tactical satellite signal processor',
        src: 'JP 1-02'
    },
    'TSSR': {
        def: 'tropospheric scatter (TROPO)-satellite support radio',
        src: 'JP 1-02'
    },
    'TST': {
        def: 'tactical support team; terminal support team; theater support team; time-sensitive target',
        src: '1-02'
    },
    'TSWA': {
        def: 'temporary secure working area',
        src: 'JP 1-02'
    },
    'TT': {
        def: 'terminal transfer',
        src: 'JP 1-02'
    },
    'TT&C': {
        def: 'telemetry, tracking, and commanding',
        src: '1-02'
    },
    'TTAN': {
        def: 'transportation tracking account number',
        src: '1-02'
    },
    'TTB': {
        def: 'transportation terminal battalion',
        src: 'JP 1-02'
    },
    'TTD': {
        def: 'tactical terrain data; technical task directive',
        src: '1-02'
    },
    'TTFACOR': {
        def: 'targets, threats, friendlies, artillery, clearance, ordnance, restrictions',
        src: '1-02'
    },
    'TTG': {
        def: 'thermally tempered glass',
        src: 'JP 3-07.2'
    },
    'TTL': {
        def: 'tagging, tracking, and locating; transistor-transistor logic',
        src: '1-02'
    },
    'TTM': {
        def: 'threat training manual; training target material',
        src: 'JP 1-02'
    },
    'TTN': {
        def: 'transportation tracking number',
        src: '1-02'
    },
    'TTP': {
        def: 'tactics, techniques, and procedures; trailer transfer point',
        src: '1-02'
    },
    'TTR': {
        def: 'tactical training range',
        src: 'JP 1-02'
    },
    'TTT': {
        def: 'time to target',
        src: 'JP 1-02'
    },
    'TTU': {
        def: 'transportation terminal unit',
        src: 'JP 1-02'
    },
    'TTY': {
        def: 'teletype',
        src: 'JP 1-02'
    },
    'TUBA': {
        def: 'transition unit box assembly',
        src: 'JP 1-02'
    },
    'TUCHA': {
        def: 'type unit characteristics file',
        src: 'JP 1-02'
    },
    'TUCHAREP': {
        def: 'type unit characteristics report',
        src: 'JP 1-02'
    },
    'TUDET': {
        def: 'type unit equipment detail file',
        src: 'JP 1-02'
    },
    'TV': {
        def: 'television',
        src: '1-02'
    },
    'TVA': {
        def: 'Tennessee Valley Authority',
        src: 'JP 1-02'
    },
    'TW&A': {
        def: 'threat warning and assessment',
        src: '1-02'
    },
    'TWC': {
        def: 'Office for Counterterrorism Analysis (DIA); total water current',
        src: 'JP 1-02'
    },
    'TWCF': {
        def: 'Transportation Working Capital Fund',
        src: '1-02'
    },
    'TWCM': {
        def: 'theater wartime construction manager',
        src: 'JP 1-02'
    },
    'TWD': {
        def: 'transnational warfare counterdrug analysis',
        src: 'JP 1-02'
    },
    'TWDS': {
        def: 'tactical water distribution system',
        src: '1-02'
    },
    'TWI': {
        def: 'Office for Information Warfare Support (DIA)',
        src: 'JP 1-02'
    },
    'TWPL': {
        def: 'teletypewriter private line',
        src: 'JP 1-02'
    },
    'TWX': {
        def: 'teletypewriter exchange',
        src: 'JP 1-02'
    },
    'TX': {
        def: 'transmitter; transmit',
        src: 'JP 1-02'
    },
    'TYCOM': {
        def: 'type commander',
        src: '1-02'
    },
    'U': {
        def: 'wind speed',
        src: 'JP 1-02'
    },
    'U/C': {
        def: 'unit cost; upconverter',
        src: 'JP 1-02'
    },
    'UA': {
        def: 'unmanned aircraft',
        src: '1-02'
    },
    'UAOBS': {
        def: 'upper air observation',
        src: 'JP 1-02'
    },
    'UAR': {
        def: 'unconventional assisted recovery',
        src: 'JP 1-02'
    },
    'UARCC': {
        def: 'unconventional assisted recovery coordination cell',
        src: 'JP 1-02'
    },
    'UAS': {
        def: 'unmanned aircraft system',
        src: '1-02'
    },
    'UAV': {
        def: 'unmanned aerial vehicle',
        src: '1-02'
    },
    'UCFF': {
        def: 'Unit Type Code Consumption Factors File',
        src: 'JP 1-02'
    },
    'UCMJ': {
        def: 'Uniform Code of Military Justice',
        src: '1-02'
    },
    'UCP': {
        def: 'Unified Command Plan',
        src: '1-02'
    },
    'UCT': {
        def: 'underwater construction team',
        src: '1-02'
    },
    'UDAC': {
        def: 'unauthorized disclosure analysis center',
        src: 'JP 1-02'
    },
    'UDC': {
        def: 'unit descriptor code',
        src: 'JP 1-02'
    },
    'UDESC': {
        def: 'unit description',
        src: 'JP 1-02'
    },
    'UDL': {
        def: 'unit deployment list; unit designation list',
        src: '1-02'
    },
    'UDP': {
        def: 'unit deployment program',
        src: 'JP 1-02'
    },
    'UDT': {
        def: 'underwater demolition team',
        src: 'JP 1-02'
    },
    'UE': {
        def: 'unit equipment',
        src: 'JP 1-02'
    },
    'UEWR': {
        def: 'upgraded early warning radar',
        src: '1-02'
    },
    'UFAC': {
        def: 'Underground Facilities Analysis Center',
        src: '1-02'
    },
    'UFC': {
        def: 'Unified Facilities Criteria',
        src: '1-02'
    },
    'UFO': {
        def: 'ultrahigh frequency follow-on',
        src: '1-02'
    },
    'UFR': {
        def: 'unfunded requirement',
        src: 'JP 3-07.2'
    },
    'UGA': {
        def: 'ungoverned area',
        src: '1-02'
    },
    'UGIRH': {
        def: 'Urban Generic Information Requirements Handbook',
        src: '1-02'
    },
    'UGM-84A': {
        def: 'Harpoon',
        src: 'JP 1-02'
    },
    'UGM-96A': {
        def: 'Trident I',
        src: 'JP 1-02'
    },
    'UGO': {
        def: 'unified geospatial-intelligence operations',
        src: '1-02'
    },
    'UHF': {
        def: 'ultrahigh frequency',
        src: '1-02'
    },
    'UHV': {
        def: 'Upper Huallaga Valley',
        src: 'JP 1-02'
    },
    'UIC': {
        def: 'unit identification code',
        src: 'JP 1-02'
    },
    'UICIO': {
        def: 'unit identification code information officer',
        src: 'JP 1-02'
    },
    'UIRV': {
        def: 'unique interswitch rekeying variable',
        src: 'JP 1-02'
    },
    'UIS': {
        def: 'unit identification system',
        src: 'JP 1-02'
    },
    'UJTL': {
        def: 'Universal Joint Task List',
        src: '1-02'
    },
    'UK': {
        def: 'United Kingdom',
        src: '1-02'
    },
    'UK(I)': {
        def: 'United Kingdom and Ireland',
        src: 'JP 1-02'
    },
    'ULC': {
        def: 'unit level code',
        src: 'JP 1-02'
    },
    'ULF': {
        def: 'ultra low frequency',
        src: 'JP 1-02'
    },
    'ULLS': {
        def: 'unit level logistics system',
        src: 'JP 4-02'
    },
    'ULN': {
        def: 'unit line number',
        src: '1-02'
    },
    'ULSD': {
        def: 'ultra-low sulfur diesel',
        src: '1-02'
    },
    'UMCC': {
        def: 'unit movement control center',
        src: '1-02'
    },
    'UMCM': {
        def: 'underwater mine countermeasures',
        src: 'JP 3-15'
    },
    'UMD': {
        def: 'unit manning document; unit movement data',
        src: 'JP 1-02'
    },
    'UMIB': {
        def: 'urgent marine information broadcast',
        src: 'JP 1-02'
    },
    'UMMIPS': {
        def: 'uniform material movement and issue priority system',
        src: 'JP 1-02'
    },
    'UMO': {
        def: 'unit movement officer',
        src: '1-02'
    },
    'UMPR': {
        def: 'unit manpower personnel record',
        src: 'JP 1-02'
    },
    'UMT': {
        def: 'unit ministry team',
        src: 'JP 1-02'
    },
    'UN': {
        def: 'United Nations',
        src: '1-02'
    },
    'UN CMCoord': {
        def: 'United Nations humanitarian civil-military coordination',
        src: '1-02'
    },
    'UN-DMT': {
        def: 'United Nations disaster management team',
        src: '1-02'
    },
    'UNAMIR': {
        def: 'United Nations Assistance Mission in Rwanda',
        src: 'JP 1-02'
    },
    'UNC': {
        def: 'United Nations Command',
        src: 'JP 1-02'
    },
    'UNCLOS': {
        def: 'United Nations Convention on the Law of the Sea',
        src: '1-02'
    },
    'UNCTAD': {
        def: 'United Nations Conference on Trade and Development',
        src: 'JP 1-02'
    },
    'UND': {
        def: 'urgency of need designator',
        src: '1-02'
    },
    'UNDAC': {
        def: 'United Nations disaster assessment and coordination',
        src: '1-02'
    },
    'UNDFS': {
        def: 'United Nations Department of Field Support',
        src: '1-02'
    },
    'UNDHA': {
        def: 'United Nations Department of Humanitarian Affairs',
        src: 'JP 1-02'
    },
    'UNDP': {
        def: 'United Nations development programme',
        src: '1-02'
    },
    'UNDPKO': {
        def: 'United Nations Department for Peacekeeping Operations',
        src: '1-02'
    },
    'UNEF': {
        def: 'United Nations emergency force',
        src: 'JP 1-02'
    },
    'UNEP': {
        def: 'United Nations environment programme',
        src: '1-02'
    },
    'UNESCO': {
        def: 'United Nations Educational, Scientific, and Cultural Organization',
        src: 'JP 1-02'
    },
    'UNHAS': {
        def: 'United Nations Humanitarian Air Service',
        src: '1-02'
    },
    'UNHCHR': {
        def: 'United Nations High Commissioner for Human Rights',
        src: '1-02'
    },
    'UNHCR': {
        def: 'United Nations Office of the High Commissioner for Refugees',
        src: '1-02'
    },
    'UNHQ': {
        def: 'United Nations Headquarters',
        src: '1-02'
    },
    'UNICEF': {
        def: 'United Nations Children\'s Fund',
        src: '1-02'
    },
    'UNIFIL': {
        def: 'United Nations Interim Force in Lebanon',
        src: 'JP 1-02'
    },
    'UNIL': {
        def: 'unclassified national information library',
        src: 'JP 2-03'
    },
    'UNITAF': {
        def: 'unified task force',
        src: '1-02'
    },
    'UNITAR': {
        def: 'United Nations Institute for Training and Research',
        src: 'JP 1-02'
    },
    'UNITREP': {
        def: 'unit status and identity report',
        src: 'JP 1-02'
    },
    'UNJLC': {
        def: 'United Nations Joint Logistic Centre',
        src: '1-02'
    },
    'UNLOC': {
        def: 'United Nations logistic course',
        src: 'JP 1-02'
    },
    'UNMEM': {
        def: 'United Nations military expert on mission',
        src: '1-02'
    },
    'UNMIH': {
        def: 'United Nations Mission in Haiti',
        src: 'JP 1-02'
    },
    'UNMILPOC': {
        def: 'United Nations military police course',
        src: 'JP 1-02'
    },
    'UNMOC': {
        def: 'United Naitons military observers course',
        src: 'JP 1-02'
    },
    'UNMOVCC': {
        def: 'United Nations movement control course',
        src: 'JP 1-02'
    },
    'UNO': {
        def: 'unit number',
        src: 'JP 1-02'
    },
    'UNOCHA': {
        def: 'United Nations Office for the Coordination of Humanitarian Affairs',
        src: '1-02'
    },
    'UNODC': {
        def: 'United Nations Office on Drugs and Crime',
        src: 'JP 3-07.4'
    },
    'UNODIR': {
        def: 'unless otherwise directed',
        src: 'JP 1-02'
    },
    'UNOSOM': {
        def: 'United Nations Operations in Somalia',
        src: '1-02'
    },
    'UNPA': {
        def: 'United Nations Participation Act',
        src: '1-02'
    },
    'UNPROFOR': {
        def: 'United Nations protection force',
        src: '1-02'
    },
    'UNREP': {
        def: 'underway replenishment',
        src: 'JP 1-02'
    },
    'UNREP CONSOL': {
        def: 'underway replenishment consolidation',
        src: 'JP 1-02'
    },
    'UNRWA': {
        def: 'United Nations Relief and Works Agency for Palestine Refugees in the Near East',
        src: 'JP 1-02'
    },
    'UNSC': {
        def: 'United Nations Security Council',
        src: '1-02'
    },
    'UNSCR': {
        def: 'United Nations Security Council resolution',
        src: '1-02'
    },
    'UNSG': {
        def: 'United Nations Secretary-General',
        src: '1-02'
    },
    'UNSOC': {
        def: 'United Nations staff officers course',
        src: 'JP 1-02'
    },
    'UNTAC': {
        def: 'United Nations Transition Authority in Cambodia',
        src: 'JP 1-02'
    },
    'UNTSO': {
        def: 'United Nations Truce and Supervision Organization',
        src: 'JP 1-02'
    },
    'UNV': {
        def: 'United Nations volunteer',
        src: 'JP 1-02'
    },
    'UOF': {
        def: 'use of force',
        src: 'JP 1-02'
    },
    'UON': {
        def: 'urgent operational need',
        src: '1-02'
    },
    'UP&TT': {
        def: 'unit personnel and tonnage table',
        src: 'JP 1-02'
    },
    'URDB': {
        def: 'user requirements database',
        src: 'JP 1-02'
    },
    'URL': {
        def: 'uniform resource locater',
        src: '1-02'
    },
    'USA': {
        def: 'United States Army',
        src: '1-02'
    },
    'USAB': {
        def: 'United States Army barracks',
        src: 'JP 1-02'
    },
    'USACCSA': {
        def: 'United States Army Command and Control Support Agency',
        src: 'JP 1-02'
    },
    'USACE': {
        def: 'United States Army Corps of Engineers',
        src: '1-02'
    },
    'USACFSC': {
        def: 'United States Army Community and Family Support Center',
        src: 'JP 1-02'
    },
    'USACHPPM': {
        def: 'United States Army Center for Health Promotion and Preventive Medicine',
        src: '1-02'
    },
    'USACIDC': {
        def: 'United States Army Criminal Investigation Command',
        src: '1-02'
    },
    'USAEDS': {
        def: 'United States Atomic Energy Detection System',
        src: '1-02'
    },
    'USAF': {
        def: 'United States Air Force',
        src: '1-02'
    },
    'USAFE': {
        def: 'United States Air Forces in Europe',
        src: 'JP 1-02'
    },
    'USAFEP': {
        def: 'United States Air Force, Europe pamphlet',
        src: 'JP 1-02'
    },
    'USAFLANT': {
        def: 'United States Air Force, Atlantic Command',
        src: 'JP 1-02'
    },
    'USAFR': {
        def: 'United States Air Force Reserve',
        src: 'JP 1-02'
    },
    'USAFRICOM': {
        def: 'United States Africa Command',
        src: '1-02'
    },
    'USAFSOC': {
        def: 'United States Air Force, Special Operations Command',
        src: 'JP 1-02'
    },
    'USAFSOF': {
        def: 'United States Air Force, Special Operations Forces',
        src: 'JP 1-02'
    },
    'USAFSOS': {
        def: 'United States Air Force Special Operations School',
        src: '1-02'
    },
    'USAID': {
        def: 'United States Agency for International Development',
        src: '1-02'
    },
    'USAITAC': {
        def: 'United States Army Intelligence Threat Analysis Center',
        src: 'JP 1-02'
    },
    'USAJFKSWC': {
        def: 'United States Army John F. Kennedy Special Warfare Center',
        src: 'JP 1-02'
    },
    'USAMC': {
        def: 'United States Army Materiel Command',
        src: '1-02'
    },
    'USAMMA': {
        def: 'United States Army Medical Materiel Agency',
        src: '1-02'
    },
    'USAMPS': {
        def: 'United States Army Military Police School',
        src: 'JP 1-02'
    },
    'USAMRICD': {
        def: 'United States Army Medical Research Institute of Chemical Defense',
        src: '1-02'
    },
    'USAMRIID': {
        def: 'United States Army Medical Research Institute of Infectious Diseases',
        src: '1-02'
    },
    'USAMRMC': {
        def: 'United States Army Medical Research and Materiel Command',
        src: '1-02'
    },
    'USANCA': {
        def: 'United States Army Nuclear and Combating Weapons of Mass Destruction Agency',
        src: 'JP 3-11'
    },
    'USAO': {
        def: 'United States Attorney Office',
        src: 'JP 1-02'
    },
    'USAR': {
        def: 'United States Army Reserve',
        src: '1-02'
    },
    'USARCENT': {
        def: 'United States Army, Central Command',
        src: 'JP 1-02'
    },
    'USARDECOM': {
        def: 'United States Army Research, Development, and Engineering Command',
        src: '1-02'
    },
    'USAREUR': {
        def: 'United States Army, European Command',
        src: 'JP 1-02'
    },
    'USARIEM': {
        def: 'United States Army Research Institute of Environmental Medicine',
        src: 'JP 4-02'
    },
    'USARJ': {
        def: 'United States Army, Japan',
        src: 'JP 1-02'
    },
    'USARNORTH': {
        def: 'United States Army, North',
        src: '1-02'
    },
    'USARPAC': {
        def: 'United States Army, Pacific Command',
        src: 'JP 1-02'
    },
    'USARSO': {
        def: 'United States Army, Southern Command',
        src: 'JP 1-02'
    },
    'USASMDC/ARSTRAT': {
        def: 'United States Army Space and Missile Defense Command/Army Forces Strategic Command',
        src: '1-02'
    },
    'USASOC': {
        def: 'United States Army Special Operations Command',
        src: '1-02'
    },
    'USB': {
        def: 'upper side band',
        src: 'JP 1-02'
    },
    'USBP': {
        def: 'United States Border Patrol',
        src: 'JP 1-02'
    },
    'USC': {
        def: 'United States Code; universal service contract',
        src: '1-02'
    },
    'USCENTAF': {
        def: 'United States Central Command Air Forces',
        src: 'JP 1-02'
    },
    'USCENTCOM': {
        def: 'United States Central Command',
        src: '1-02'
    },
    'USCG': {
        def: 'United States Coast Guard',
        src: '1-02'
    },
    'USCGR': {
        def: 'United States Coast Guard Reserve',
        src: '1-02'
    },
    'USCIS': {
        def: 'United States Citizenship and Immigration Services',
        src: '1-02'
    },
    'USCS': {
        def: 'United States Cryptologic System; United States Customs Service',
        src: 'JP 1-02'
    },
    'USCYBERCOM': {
        def: 'United States Cyber Command',
        src: '1-02'
    },
    'USD(A&T)': {
        def: 'Under Secretary of Defense for Acquisition and Technology',
        src: 'JP 1-02'
    },
    'USD(AT&L)': {
        def: 'Under Secretary of Defense for Acquisition, Technology, and Logistics',
        src: '1-02'
    },
    'USD(C/CFO)': {
        def: 'Under Secretary of Defense (Comptroller)',
        src: '1-02'
    },
    'USD(I)': {
        def: 'Under Secretary of Defense for Intelligence',
        src: '1-02'
    },
    'USD(P&R)': {
        def: 'Under Secretary of Defense for Personnel and Readiness',
        src: '1-02'
    },
    'USD(P)': {
        def: 'Under Secretary of Defense for Policy',
        src: '1-02'
    },
    'USD(R&E)': {
        def: 'Under Secretary of Defense for Research and Engineering',
        src: 'JP 1-02'
    },
    'USDA': {
        def: 'United States Department of Agriculture',
        src: '1-02'
    },
    'USDAO': {
        def: 'United States defense attache office',
        src: '1-02'
    },
    'USDELMC': {
        def: 'United States Delegation to the NATO Military Committee',
        src: 'JP 1-02'
    },
    'USELEMCMOC': {
        def: 'United States Element Cheyenne Mountain Operations Center',
        src: 'JP 1-02'
    },
    'USELEMNORAD': {
        def: 'United States Element, North American Aerospace Defense Command',
        src: '1-02'
    },
    'USERID': {
        def: 'user identification',
        src: 'JP 1-02'
    },
    'USERRA': {
        def: 'Uniformed Services Employment and Reemployment Rights Act ',
        src: '1-02'
    },
    'USEUCOM': {
        def: 'United States European Command',
        src: '1-02'
    },
    'USFF': {
        def: 'United States Fleet Forces Command',
        src: '1-02'
    },
    'USFJ': {
        def: 'United States Forces, Japan',
        src: 'JP 1-02'
    },
    'USFK': {
        def: 'United States Forces, Korea',
        src: 'JP 1-02'
    },
    'USFORAZORES': {
        def: 'United States Forces, Azores',
        src: 'JP 1-02'
    },
    'USFS': {
        def: 'United States Forest Service',
        src: 'JP 1-02'
    },
    'USFWS': {
        def: 'United States Fish and Wildlife Service',
        src: 'JP 1-02'
    },
    'USG': {
        def: 'United States Government',
        src: '1-02'
    },
    'USGS': {
        def: 'United States Geological Survey',
        src: '1-02'
    },
    'USIA': {
        def: 'United States Information Agency',
        src: 'JP 1-02'
    },
    'USIC': {
        def: 'United States interdiction coordinator',
        src: 'JP 1-02'
    },
    'USIS': {
        def: 'United States Information Service',
        src: 'JP 1-02'
    },
    'USJFCOM': {
        def: 'United States Joint Forces Command',
        src: 'JP 1-02'
    },
    'USLANTFLT': {
        def: 'United States Atlantic Fleet',
        src: 'JP 1-02'
    },
    'USLO': {
        def: 'United States liaison office; United States liaison officer',
        src: '1-02'
    },
    'USMARFORCENT': {
        def: 'United States Marine Component, Central Command',
        src: 'JP 1-02'
    },
    'USMARFORLANT': {
        def: 'United States Marine Component, Atlantic Command',
        src: 'JP 1-02'
    },
    'USMARFORNORTH': {
        def: 'United States Marine Corps Forces North',
        src: '1-02'
    },
    'USMARFORPAC': {
        def: 'United States Marine Component, Pacific Command',
        src: 'JP 1-02'
    },
    'USMARFORSOUTH': {
        def: 'United States Marine Component, Southern Command',
        src: 'JP 1-02'
    },
    'USMC': {
        def: 'United States Marine Corps',
        src: '1-02'
    },
    'USMCEB': {
        def: 'United States Military Communications-Electronics Board',
        src: 'JP 1-02'
    },
    'USMCR': {
        def: 'United States Marine Corps Reserve',
        src: 'JP 1-02'
    },
    'USMER': {
        def: 'United States merchant ship vessel locator reporting system',
        src: 'JP 1-02'
    },
    'USMILGP': {
        def: 'United States military group',
        src: 'JP 1-02'
    },
    'USMILREP': {
        def: 'United States military representative',
        src: 'JP 1-02'
    },
    'USML': {
        def: 'United States Munitions List',
        src: '1-02'
    },
    'USMOG-W': {
        def: 'United States Military Observer Group - Washington',
        src: '1-02'
    },
    'USMS': {
        def: 'United States Marshals Service',
        src: 'JP 1-02'
    },
    'USMTF': {
        def: 'United States message text format',
        src: '1-02'
    },
    'USMTM': {
        def: 'United States military training mission',
        src: 'JP 1-02'
    },
    'USN': {
        def: 'United States Navy',
        src: '1-02'
    },
    'USNAVCENT': {
        def: 'United States Naval Forces, Central Command',
        src: 'JP 1-02'
    },
    'USNAVEUR': {
        def: 'United States Naval Forces, Europe',
        src: 'JP 1-02'
    },
    'USNAVSO': {
        def: 'US Naval Forces Southern Command',
        src: '1-02'
    },
    'USNCB': {
        def: 'United States National Central Bureau (INTERPOL)',
        src: 'JP 1-02'
    },
    'USNMR': {
        def: 'United States National Military representative',
        src: 'JP 1-02'
    },
    'USNMTG': {
        def: 'United States North Atlantic Treaty Organization (NATO) Military Terminology Group',
        src: 'JP 1-02'
    },
    'USNO': {
        def: 'United States Naval Observatory',
        src: '1-02'
    },
    'USNORTHCOM': {
        def: 'United States Northern Command',
        src: '1-02'
    },
    'USNR': {
        def: 'United States Navy Reserve',
        src: 'JP 1-02'
    },
    'USNS': {
        def: 'United States Naval Ship',
        src: '1-02'
    },
    'USPACAF': {
        def: 'United States Air Forces, Pacific Command',
        src: 'JP 1-02'
    },
    'USPACFLT': {
        def: 'United States Pacific Fleet',
        src: 'JP 1-02'
    },
    'USPACOM': {
        def: 'United States Pacific Command',
        src: '1-02'
    },
    'USPFO(P&C)': {
        def: 'United States Property and Fiscal Office (Purchasing and \t\t\t\t\tContracting)',
        src: 'JP 4-10'
    },
    'USPHS': {
        def: 'United States Public Health Service',
        src: '1-02'
    },
    'USPS': {
        def: 'United States Postal Service',
        src: '1-02'
    },
    'USREPMC': {
        def: 'United States representative to the military committee (NATO)',
        src: 'JP 1-02'
    },
    'USSOCOM': {
        def: 'United States Special Operations Command',
        src: '1-02'
    },
    'USSOUTHAF': {
        def: 'United States Air Force, Southern Command',
        src: 'JP 1-02'
    },
    'USSOUTHCOM': {
        def: 'United States Southern Command',
        src: '1-02'
    },
    'USSS': {
        def: 'United States Secret Service (TREAS); United States Signals Intelligence (SIGINT) System',
        src: 'JP 1-02'
    },
    'USSTRATCOM': {
        def: 'United States Strategic Command',
        src: '1-02'
    },
    'USTRANSCOM': {
        def: 'United States Transportation Command',
        src: '1-02'
    },
    'USUN': {
        def: 'United States Mission to the United Nations',
        src: '1-02'
    },
    'USW': {
        def: 'undersea warfare',
        src: '1-02'
    },
    'USW/USWC': {
        def: 'undersea warfare and/or undersea warfare commander',
        src: 'JP 1-02'
    },
    'USYG': {
        def: 'under secretary general',
        src: '1-02'
    },
    'UT1': {
        def: 'unit trainer; Universal Time',
        src: 'JP 1-02'
    },
    'UTC': {
        def: 'Coordinated Universal Time; unit type code',
        src: '1-02'
    },
    'UTM': {
        def: 'universal transverse mercator',
        src: 'JP 1-02'
    },
    'UTO': {
        def: 'unit table of organization',
        src: 'JP 1-02'
    },
    'UTR': {
        def: 'underwater tracking range',
        src: 'JP 1-02'
    },
    'UUV': {
        def: 'unmanned underwater vehicle; unmanned underwater vessel',
        src: '1-02'
    },
    'UVEPROM': {
        def: 'ultraviolet erasable programmable read-only memory',
        src: 'JP 1-02'
    },
    'UW': {
        def: 'unconventional warfare',
        src: '1-02'
    },
    'UWOA': {
        def: 'unconventional warfare operating area',
        src: 'JP 1-02'
    },
    'UXO': {
        def: 'unexploded explosive ordnance; unexploded ordnance',
        src: '1-02'
    },
    'V': {
        def: 'search and rescue unit ground speed; sector pattern; volt',
        src: 'JP 1-02'
    },
    'v': {
        def: 'velocity of target drift',
        src: 'JP 1-02'
    },
    'V&A': {
        def: 'valuation and availability',
        src: '1-02'
    },
    'V/STOL': {
        def: 'vertical and/or short takeoff and landing aircraft',
        src: 'JP 1-02'
    },
    'VA': {
        def: 'Veterans Administration; victim advocate; vulnerability assessment',
        src: '1-02'
    },
    'VAAP': {
        def: 'vulnerability assessment and assistance program',
        src: '1-02'
    },
    'VAC': {
        def: 'volts, alternating current',
        src: 'JP 1-02'
    },
    'VARVAL': {
        def: 'vessel arrival data, list of vessels available to marine safety offices and captains of the port',
        src: 'JP 1-02'
    },
    'VAT B': {
        def: 'visibility (in miles), amount (of clouds, in eighths), (height of cloud) top (in thousands of feet), (height of cloud) base (in thousands of feet)',
        src: 'JP 1-02'
    },
    'VBIED': {
        def: 'vehicle-borne improvised explosive device',
        src: '1-02'
    },
    'VBS': {
        def: 'visit, board, search',
        src: 'JP 1-02'
    },
    'VBSS': {
        def: 'visit, board, search, and seizure',
        src: '1-02'
    },
    'VCC': {
        def: 'voice communications circuit',
        src: 'JP 1-02'
    },
    'VCG': {
        def: 'virtual coordination group',
        src: 'JP 1-02'
    },
    'VCJCS': {
        def: 'Vice Chairman of the Joint Chiefs of Staff',
        src: '1-02'
    },
    'VCNOG': {
        def: 'Vice Chairman, Nuclear Operations Group',
        src: 'JP 1-02'
    },
    'VCO': {
        def: 'voltage controlled oscillator',
        src: 'JP 1-02'
    },
    'VCOPG': {
        def: 'Vice Chairman, Operations Planners Group',
        src: 'JP 1-02'
    },
    'VCR': {
        def: 'violent crime report',
        src: 'JP 1-02'
    },
    'VCXO': {
        def: 'voltage controlled crystal oscillator; voltage controlled oscillator',
        src: 'JP 1-02'
    },
    'VDC': {
        def: 'volts, direct current',
        src: 'JP 1-02'
    },
    'VDJS': {
        def: 'Vice Director, Joint Staff',
        src: 'JP 1-02'
    },
    'VDL': {
        def: 'video downlink',
        src: '1-02'
    },
    'VDR': {
        def: 'voice digitization rate',
        src: 'JP 1-02'
    },
    'VDS': {
        def: 'video subsystem',
        src: 'JP 1-02'
    },
    'VDSD': {
        def: 'visual distress signaling device',
        src: 'JP 1-02'
    },
    'VDU': {
        def: 'visual display unit',
        src: 'JP 1-02'
    },
    'VDUC': {
        def: 'visual display unit controller',
        src: 'JP 1-02'
    },
    'VE': {
        def: 'vertical error',
        src: '1-02'
    },
    'VEE': {
        def: 'Venezuelan equine encephalitis',
        src: '1-02'
    },
    'VEH': {
        def: 'vehicle; vehicular cargo',
        src: 'JP 1-02'
    },
    'VEO': {
        def: 'violent extremist organization',
        src: '1-02'
    },
    'VERTREP': {
        def: 'vertical replenishment',
        src: '1-02'
    },
    'VF': {
        def: 'voice frequency',
        src: 'JP 1-02'
    },
    'VFR': {
        def: 'visual flight rules',
        src: 'JP 1-02'
    },
    'VFS': {
        def: 'validating flight surgeon',
        src: 'JP 4-02'
    },
    'VFTG': {
        def: 'voice frequency telegraph',
        src: 'JP 1-02'
    },
    'VHF': {
        def: 'very high frequency',
        src: '1-02'
    },
    'VI': {
        def: 'visual information',
        src: '1-02'
    },
    'VICE': {
        def: 'advice',
        src: 'JP 1-02'
    },
    'VID': {
        def: 'visual identification; visual identification information display',
        src: '1-02'
    },
    'VINSON': {
        def: 'encrypted ultrahigh frequency communications system',
        src: 'JP 1-02'
    },
    'VIP': {
        def: 'very important person; visual information processor',
        src: 'JP 1-02'
    },
    'VIRS': {
        def: 'verbally initiated release system',
        src: 'JP 1-02'
    },
    'VIS': {
        def: 'visual imaging system',
        src: 'JP 1-02'
    },
    'VISA': {
        def: 'Voluntary Intermodal Sealift Agreement',
        src: '1-02'
    },
    'VISOBS': {
        def: 'visual observer',
        src: 'JP 1-02'
    },
    'VIXS': {
        def: 'video information exchange system',
        src: 'JP 1-02'
    },
    'VLA': {
        def: 'vertical line array; visual landing aid',
        src: 'JP 1-02'
    },
    'VLF': {
        def: 'very low frequency',
        src: 'JP 1-02'
    },
    'VLR': {
        def: 'very-long-range aircraft',
        src: 'JP 1-02'
    },
    'VMap': {
        def: 'vector map',
        src: '1-02'
    },
    'VMAQ': {
        def: 'Marine tactical electronic warfare squadron',
        src: '1-02'
    },
    'VMC': {
        def: 'visual meteorological conditions',
        src: '1-02'
    },
    'VMF': {
        def: 'variable message format',
        src: 'JP 1-02'
    },
    'VMGR': {
        def: 'Marine aerial refueler and transport squadron',
        src: 'JP 1-02'
    },
    'VMI': {
        def: 'vendor managed inventory',
        src: 'JP 1-02'
    },
    'VNTK': {
        def: 'target vulnerability indicator designating degree of hardness; susceptibility of blast; and K-factor',
        src: 'JP 1-02'
    },
    'VO': {
        def: 'validation office',
        src: 'JP 1-02'
    },
    'VOCODER': {
        def: 'voice encoder',
        src: 'JP 1-02'
    },
    'VOCU': {
        def: 'voice orderwire control unit',
        src: 'JP 1-02'
    },
    'VOD': {
        def: 'vertical onboard delivery',
        src: 'JP 1-02'
    },
    'vol': {
        def: 'volume',
        src: 'JP 1-02'
    },
    'VOL': {
        def: 'volunteer',
        src: 'JP 1-02'
    },
    'VOLS': {
        def: 'vertical optical landing system',
        src: 'JP 1-02'
    },
    'VOR': {
        def: 'very high frequency omnidirectional range station',
        src: 'JP 1-02'
    },
    'VORTAC': {
        def: 'very high frequency omnidirectional range station and/or tactical air navigation',
        src: 'JP 1-02'
    },
    'VOX': {
        def: 'voice actuation (keying)',
        src: 'JP 1-02'
    },
    'VP': {
        def: 'video processor',
        src: 'JP 1-02'
    },
    'VPB': {
        def: 'version planning board',
        src: 'JP 1-02'
    },
    'VPD': {
        def: 'version planning document',
        src: 'JP 1-02'
    },
    'VPV': {
        def: 'virtual prime vendor',
        src: '1-02'
    },
    'VS': {
        def: 'sector single-unit',
        src: 'JP 1-02'
    },
    'VS&PT': {
        def: 'vehicle summary and priority table',
        src: 'JP 1-02'
    },
    'VSG': {
        def: 'virtual support group',
        src: 'JP 1-02'
    },
    'VSP': {
        def: 'voice selection panel',
        src: 'JP 1-02'
    },
    'VSR': {
        def: 'sector single-unit radar',
        src: 'JP 1-02'
    },
    'VSW': {
        def: 'very shallow water',
        src: 'JP 1-02'
    },
    'VTA': {
        def: 'voluntary tanker agreement',
        src: '1-02'
    },
    'VTC': {
        def: 'video teleconferencing',
        src: '1-02'
    },
    'VTOL': {
        def: 'vertical takeoff and landing',
        src: 'JP 1-02'
    },
    'VTOL-UAS': {
        def: 'vertical takeoff and landing unmanned aircraft system',
        src: '1-02'
    },
    'VTOL-UAV': {
        def: 'vertical takeoff and landing unmanned aerial vehicle',
        src: '1-02'
    },
    'VTS': {
        def: 'vessel traffic service',
        src: 'JP 1-02'
    },
    'VTT': {
        def: 'video teletraining',
        src: 'JP 1-02'
    },
    'VU': {
        def: 'volume unit',
        src: 'JP 1-02'
    },
    'VV&A': {
        def: 'verification, validation, and accreditation',
        src: 'JP 1-02'
    },
    'VV&C': {
        def: 'verification, validation, and certification',
        src: 'JP 1-02'
    },
    'VX': {
        def: 'nerve agent (O-Ethyl S-Diisopropylaminomethyl Methylphosphonothiolate)',
        src: 'JP 1-02'
    },
    'W': {
        def: 'sweep width',
        src: 'JP 1-02'
    },
    'w': {
        def: 'search subarea width',
        src: 'JP 1-02'
    },
    'WAAR': {
        def: 'Wartime Aircraft Activity Report',
        src: 'JP 1-02'
    },
    'WACBE': {
        def: 'World Area Code Basic Encyclopedia',
        src: 'JP 1-02'
    },
    'WADS': {
        def: 'Western Air Defense Sector',
        src: '1-02'
    },
    'WAGB': {
        def: 'icebreaker (USCG)',
        src: 'JP 1-02'
    },
    'WAI': {
        def: 'weather area of interest',
        src: '1-02'
    },
    'WAN': {
        def: 'wide-area network',
        src: 'JP 1-02'
    },
    'WANGO': {
        def: 'World Association of Non-Governmental Organizations ',
        src: '1-02'
    },
    'WARM': {
        def: 'wartime reserve mode',
        src: '1-02'
    },
    'WARNORD': {
        def: 'warning order',
        src: '1-02'
    },
    'WARP': {
        def: 'web-based access and retrieval portal',
        src: '1-02'
    },
    'WAS': {
        def: 'wide area surveillance',
        src: 'JP 1-02'
    },
    'WASP': {
        def: 'war air service program',
        src: 'JP 1-02'
    },
    'WATCHCON': {
        def: 'watch condition',
        src: 'JP 1-02'
    },
    'WB': {
        def: 'wideband',
        src: 'JP 1-02'
    },
    'WBGTI': {
        def: 'wet bulb globe temperature index',
        src: '1-02'
    },
    'WBIED': {
        def: 'waterborne improvised explosive device',
        src: '1-02'
    },
    'WC': {
        def: 'wind current',
        src: 'JP 1-02'
    },
    'WCA': {
        def: 'water clearance authority',
        src: 'JP 1-02'
    },
    'WCCS': {
        def: 'Wing Command and Control System',
        src: 'JP 1-02'
    },
    'WCDO': {
        def: 'War Consumables Distribution Objective',
        src: 'JP 1-02'
    },
    'WCE': {
        def: 'weapons of mass destruction coordination element',
        src: '1-02'
    },
    'WCO': {
        def: 'World Customs Organization',
        src: '1-02'
    },
    'WCS': {
        def: 'weapons control status',
        src: '1-02'
    },
    'WDCO': {
        def: 'well deck control officer',
        src: '1-02'
    },
    'WDT': {
        def: 'warning and display terminal',
        src: 'JP 1-02'
    },
    'WEAX': {
        def: 'weather facsimile',
        src: 'JP 1-02'
    },
    'Web SM': {
        def: 'Web scheduling and movement',
        src: '1-02'
    },
    'WES': {
        def: 'weapon engagement status',
        src: 'JP 1-02'
    },
    'WETM': {
        def: 'weather team',
        src: 'JP 1-02'
    },
    'WEU': {
        def: 'Western European Union',
        src: 'JP 1-02'
    },
    'WEZ': {
        def: 'weapon engagement zone',
        src: '1-02'
    },
    'WFE': {
        def: 'warfighting environment',
        src: 'JP 1-02'
    },
    'WFP': {
        def: 'World Food Programme (UN)',
        src: '1-02'
    },
    'WG': {
        def: 'working group',
        src: '1-02'
    },
    'WGS': {
        def: 'Wideband Global Satellite Communications; World Geodetic System',
        src: '1-02'
    },
    'WGS 84': {
        def: 'World Geodetic System 1984',
        src: '1-02'
    },
    'WH': {
        def: 'wounded due to hostilities',
        src: 'JP 1-02'
    },
    'WHEC': {
        def: 'high-endurance cutter (USCG)',
        src: 'JP 1-02'
    },
    'WHNRS': {
        def: 'wartime host-nation religious support',
        src: 'JP 1-02'
    },
    'WHNS': {
        def: 'wartime host-nation support',
        src: 'JP 1-02'
    },
    'WHNSIMS': {
        def: 'Wartime Host Nation Support Information Management System',
        src: 'JP 1-02'
    },
    'WHO': {
        def: 'World Health Organization (UN)',
        src: '1-02'
    },
    'WIA': {
        def: 'wounded in action',
        src: '1-02'
    },
    'WISDIM': {
        def: 'Warfighting and Intelligence Systems Dictionary for Information Management',
        src: 'JP 1-02'
    },
    'WISP': {
        def: 'Wartime Information Security Program',
        src: 'JP 1-02'
    },
    'WIT': {
        def: 'weapons intelligence team',
        src: '1-02'
    },
    'WLG': {
        def: 'Washington Liaison Group',
        src: 'JP 1-02'
    },
    'WMD': {
        def: 'weapons of mass destruction',
        src: '1-02'
    },
    'WMD CM': {
        def: 'weapons of mass destruction consequence management',
        src: '1-02'
    },
    'WMD-CST': {
        def: 'weapons of mass destruction-civil support team',
        src: '1-02'
    },
    'WMD-E': {
        def: 'weapons of mass destruction-elimination',
        src: '1-02'
    },
    'WMEC': {
        def: 'Coast Guard medium-endurance cutter',
        src: 'JP 1-02'
    },
    'WMO': {
        def: 'World Meteorological Organization',
        src: '1-02'
    },
    'WMP': {
        def: 'Air Force War and Mobilization Plan; War and Mobilization Plan',
        src: 'JP 1-02'
    },
    'WOC': {
        def: 'wing operations center (USAF)',
        src: 'JP 1-02'
    },
    'WOD': {
        def: 'wind-over deck; word-of-day',
        src: '1-02'
    },
    'WORM': {
        def: 'write once read many',
        src: 'JP 1-02'
    },
    'WOT': {
        def: 'war on terrorism',
        src: 'JP 3-0'
    },
    'WP': {
        def: 'white phosphorous; working party; Working Party (NATO)',
        src: '1-02'
    },
    'WPA': {
        def: 'water jet propulsion assembly',
        src: 'JP 1-02'
    },
    'WPAL': {
        def: 'wartime personnel allowance list',
        src: 'JP 1-02'
    },
    'WPARR': {
        def: 'War Plans Additive Requirements Roster',
        src: 'JP 1-02'
    },
    'WPB': {
        def: 'Coast Guard patrol boat',
        src: 'JP 1-02'
    },
    'WPC': {
        def: 'Washington Planning Center',
        src: 'JP 1-02'
    },
    'WPM': {
        def: 'words per minute',
        src: 'JP 1-02'
    },
    'WPN': {
        def: 'weapon',
        src: 'JP 1-02'
    },
    'WPR': {
        def: 'War Powers Resolution',
        src: '1-02'
    },
    'WR': {
        def: 'war reserve; weapon radius',
        src: 'JP 1-02'
    },
    'WRA': {
        def: 'Office of Weapons Removal and Abatement (DOS); weapons release authority',
        src: '1-02'
    },
    'WRAIR': {
        def: 'Walter Reed Army Institute of Research',
        src: 'JP 4-02'
    },
    'WRC': {
        def: 'World Radiocommunication Conference',
        src: 'JP 1-02'
    },
    'WRL': {
        def: 'weapons release line',
        src: 'JP 1-02'
    },
    'WRM': {
        def: 'war reserve materiel',
        src: '1-02'
    },
    'WRMS': {
        def: 'war reserve materiel stock',
        src: 'JP 1-02'
    },
    'WRR': {
        def: 'weapons response range (as well as wpns release rg)',
        src: 'JP 1-02'
    },
    'WRS': {
        def: 'war reserve stock',
        src: '1-02'
    },
    'WRSA': {
        def: 'war reserve stocks for allies',
        src: '1-02'
    },
    'WRSK': {
        def: 'war readiness spares kit; war reserve spares kit',
        src: 'JP 1-02'
    },
    'WS': {
        def: 'weather squadron',
        src: '1-02'
    },
    'WSE': {
        def: 'weapon support equipment',
        src: 'JP 1-02'
    },
    'WSES': {
        def: 'surface effect ship (USCG)',
        src: 'JP 1-02'
    },
    'WSESRB': {
        def: 'Weapon System Explosive Safety Review Board',
        src: '1-02'
    },
    'WSM': {
        def: 'waterspace management',
        src: '1-02'
    },
    'WSR': {
        def: 'weapon system reliability',
        src: 'JP 1-02'
    },
    'WSV': {
        def: 'weapons system video',
        src: '1-02'
    },
    'WT': {
        def: 'warping tug; weight',
        src: '1-02'
    },
    'WTCA': {
        def: 'water terminal clearance authority',
        src: 'JP 1-02'
    },
    'WTCT': {
        def: 'weapons of mass destruction technical collection team',
        src: 'JP 2-01.2'
    },
    'WTI': {
        def: 'weapons technical intelligence',
        src: '1-02'
    },
    'WTLO': {
        def: 'water terminal logistic office',
        src: 'JP 1-02'
    },
    'Wu': {
        def: 'uncorrected sweep width',
        src: 'JP 1-02'
    },
    'WVRD': {
        def: 'World Vision Relief and Development, Inc.',
        src: 'JP 1-02'
    },
    'WWABNCP': {
        def: 'worldwide airborne command post',
        src: 'JP 1-02'
    },
    'WWII': {
        def: 'World War II',
        src: 'JP 1-02'
    },
    'WWSVCS': {
        def: 'Worldwide Secure Voice Conferencing System',
        src: 'JP 1-02'
    },
    'WWX': {
        def: 'worldwide express',
        src: '1-02'
    },
    'WX': {
        def: 'weather',
        src: 'JP 1-02'
    },
    'X': {
        def: 'initial position error',
        src: 'JP 1-02'
    },
    'XCDS': {
        def: 'Extracted Container Delivery System',
        src: '1-02'
    },
    'XCVR': {
        def: 'transceiver',
        src: 'JP 1-02'
    },
    'XMPP': {
        def: 'extensible messaging and presence protocol',
        src: '1-02'
    },
    'XO': {
        def: 'executive officer',
        src: '1-02'
    },
    'XSB': {
        def: 'barrier single unit',
        src: 'JP 1-02'
    },
    'Y': {
        def: 'search and rescue unit (SRU) error',
        src: 'JP 1-02'
    },
    'YR': {
        def: 'year',
        src: 'JP 1-02'
    },
    'Z': {
        def: 'zulu',
        src: 'JP 1-02'
    },
    'z': {
        def: 'effort',
        src: 'JP 1-02'
    },
    'ZF': {
        def: 'zone of fire',
        src: '1-02'
    },
    'Zt': {
        def: 'total available effort',
        src: 'JP 1-02'
    },
    'ZULU': {
        def: 'time zone indicator for Universal Time',
        src: 'JP 1-02'
    }
};

@Injectable({
    providedIn: 'root'
})
export class DodAcronymsService {

    constructor() { }

    lookup(abbreviation: string): IDoDAcronym | boolean {
        return DICTIONARY[abbreviation] || false;
    }
}
