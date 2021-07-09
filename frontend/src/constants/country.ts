interface Country {
  name: string;
  flag: string;
  code: string;
}

export const findFlagByCode = (code: string): string => {
  const flag = countries.find((item) => item.code === code)?.flag;
  return flag || '';
};

export const countries: Country[] = [
  {
    name: 'Andorra',
    flag: '<i class="flag flag-andorra"></i>',
    code: 'ad',
  },
  {
    name: 'U.A.E',
    flag: '<i class="flag flag-uae"></i>',
    code: 'ae',
  },
  {
    name: 'Afghanistan',
    flag: '<i class="flag flag-afghanistan"></i>',
    code: 'af',
  },
  {
    name: 'Afghanistan',
    flag: '<i class="flag flag-afghanistan"></i>',
    code: 'ag',
  },
  {
    name: 'Anguilla',
    flag: '<i class="flag flag-anguilla"></i>',
    code: 'ai',
  },
  {
    name: 'Armenia',
    flag: '<i class="flag flag-armenia"></i>',
    code: 'am',
  },
  {
    name: 'Netherlands Antilles',
    flag: '<i class="flag flag-netherlands-antilles"></i>',
    code: 'an',
  },
  {
    name: 'Angola',
    flag: '<i class="flag flag-angola"></i>',
    code: 'ao',
  },
  {
    name: 'Argentina',
    flag: '<i class="flag flag-argentina"></i>',
    code: 'ar',
  },
  {
    name: 'American Samoa',
    flag: '<i class="flag flag-american-samoa"></i>',
    code: 'as',
  },
  {
    name: 'Austria',
    flag: '<i class="flag flag-austria"></i>',
    code: 'at',
  },
  {
    name: 'Australia',
    flag: '<i class="flag flag-australia"></i>',
    code: 'au',
  },
  {
    name: 'Australia',
    flag: '<i class="flag flag-australia"></i>',
    code: 'aw',
  },
  {
    name: 'Aland Islands',
    flag: '<i class="flag flag-aland-islands"></i>',
    code: 'ax',
  },
  {
    name: 'Azerbaijan',
    flag: '<i class="flag flag-azerbaijan"></i>',
    code: 'az',
  },
  {
    name: 'Bosnia',
    flag: '<i class="flag flag-bosnia"></i>',
    code: 'ba',
  },
  {
    name: 'Barbados',
    flag: '<i class="flag flag-barbados"></i>',
    code: 'bb',
  },
  {
    name: 'Bangladesh',
    flag: '<i class="flag flag-bangladesh"></i>',
    code: 'bd',
  },
  {
    name: 'Belgium',
    flag: '<i class="flag flag-belgium"></i>',
    code: 'be',
  },
  {
    name: 'Burkina Faso',
    flag: '<i class="flag flag-burkina-faso"></i>',
    code: 'bf',
  },
  {
    name: 'Bulgaria',
    flag: '<i class="flag flag-bulgaria"></i>',
    code: 'bg',
  },
  {
    name: 'Bahrain',
    flag: '<i class="flag flag-bahrain"></i>',
    code: 'bh',
  },
  {
    name: 'Burundi',
    flag: '<i class="flag flag-burundi"></i>',
    code: 'bi',
  },
  {
    name: 'Benin',
    flag: '<i class="flag flag-benin"></i>',
    code: 'bj',
  },
  {
    name: 'Bermuda',
    flag: '<i class="flag flag-bermuda"></i>',
    code: 'bm',
  },
  {
    name: 'Brunei',
    flag: '<i class="flag flag-brunei"></i>',
    code: 'bn',
  },
  {
    name: 'Bolivia',
    flag: '<i class="flag flag-bolivia"></i>',
    code: 'bo',
  },
  {
    name: 'Brazil',
    flag: '<i class="flag flag-brazil"></i>',
    code: 'br',
  },
  {
    name: 'Bahamas',
    flag: '<i class="flag flag-bahamas"></i>',
    code: 'bs',
  },
  {
    name: 'Bhutan',
    flag: '<i class="flag flag-bhutan"></i>',
    code: 'bt',
  },
  {
    name: 'Bouvet Island',
    flag: '<i class="flag flag-bouvet-island"></i>',
    code: 'bv',
  },
  {
    name: 'Botswana',
    flag: '<i class="flag flag-botswana"></i>',
    code: 'bw',
  },
  {
    name: 'Belarus',
    flag: '<i class="flag flag-belarus"></i>',
    code: 'by',
  },
  {
    name: 'Belize',
    flag: '<i class="flag flag-belize"></i>',
    code: 'bz',
  },
  {
    name: 'Canada',
    flag: '<i class="flag flag-canada"></i>',
    code: 'ca',
  },
  {
    name: 'Cocos Islands',
    flag: '<i class="flag flag-cocos-islands"></i>',
    code: 'cc',
  },
  {
    name: 'Congo',
    flag: '<i class="flag flag-congo"></i>',
    code: 'cd',
  },
  {
    name: 'Central African Republic',
    flag: '<i class="flag flag-central-african-republic"></i>',
    code: 'cf',
  },
  {
    name: 'Congo-brazzaville',
    flag: '<i class="flag flag-congo-brazzaville"></i>',
    code: 'cg',
  },
  {
    name: 'Switzerland',
    flag: '<i class="flag flag-switzerland"></i>',
    code: 'ch',
  },
  {
    name: 'Cote Divoire',
    flag: '<i class="flag flag-cote-divoire"></i>',
    code: 'ci',
  },
  {
    name: 'Cook Islands',
    flag: '<i class="flag flag-cook-islands"></i>',
    code: 'ck',
  },
  {
    name: 'Chile',
    flag: '<i class="flag flag-chile"></i>',
    code: 'cl',
  },
  {
    name: 'Cameroon',
    flag: '<i class="flag flag-cameroon"></i>',
    code: 'cm',
  },
  {
    name: 'China',
    flag: '<i class="flag flag-china"></i>',
    code: 'cn',
  },
  {
    name: 'Colombia',
    flag: '<i class="flag flag-colombia"></i>',
    code: 'co',
  },
  {
    name: 'Costa Rica',
    flag: '<i class="flag flag-costa-rica"></i>',
    code: 'cr',
  },
  {
    name: 'Serbia',
    flag: '<i class="flag flag-serbia"></i>',
    code: 'cs',
  },
  {
    name: 'Cuba',
    flag: '<i class="flag flag-cuba"></i>',
    code: 'cu',
  },
  {
    name: 'Cape Verde',
    flag: '<i class="flag flag-cape-verde"></i>',
    code: 'cv',
  },
  {
    name: 'Christmas Island',
    flag: '<i class="flag flag-christmas-island"></i>',
    code: 'cx',
  },
  {
    name: 'Cyprus',
    flag: '<i class="flag flag-cyprus"></i>',
    code: 'cy',
  },
  {
    name: 'Czech Republic',
    flag: '<i class="flag flag-czech-republic"></i>',
    code: 'cz',
  },
  {
    name: 'Germany',
    flag: '<i class="flag flag-germany"></i>',
    code: 'de',
  },
  {
    name: 'Djibouti',
    flag: '<i class="flag flag-djibouti"></i>',
    code: 'dj',
  },
  {
    name: 'Denmark',
    flag: '<i class="flag flag-denmark"></i>',
    code: 'dk',
  },
  {
    name: 'Dominica',
    flag: '<i class="flag flag-dominica"></i>',
    code: 'dm',
  },
  {
    name: 'Dominican Republic',
    flag: '<i class="flag flag-dominican-republic"></i>',
    code: 'do',
  },
  {
    name: 'Algeria',
    flag: '<i class="flag flag-algeria"></i>',
    code: 'dz',
  },
  {
    name: 'Ecuador',
    flag: '<i class="flag flag-ecuador"></i>',
    code: 'ec',
  },
  {
    name: 'Estonia',
    flag: '<i class="flag flag-estonia"></i>',
    code: 'ee',
  },
  {
    name: 'Egypt',
    flag: '<i class="flag flag-egypt"></i>',
    code: 'eg',
  },
  {
    name: 'Western Sahara',
    flag: '<i class="flag flag-western-sahara"></i>',
    code: 'eh',
  },
  {
    name: 'Eritrea',
    flag: '<i class="flag flag-eritrea"></i>',
    code: 'er',
  },
  {
    name: 'Spain',
    flag: '<i class="flag flag-spain"></i>',
    code: 'es',
  },
  {
    name: 'Ethiopia',
    flag: '<i class="flag flag-ethiopia"></i>',
    code: 'et',
  },
  {
    name: 'European Union',
    flag: '<i class="flag flag-european-union"></i>',
    code: 'eu',
  },
  {
    name: 'Finland',
    flag: '<i class="flag flag-finland"></i>',
    code: 'fi',
  },
  {
    name: 'Fiji',
    flag: '<i class="flag flag-fiji"></i>',
    code: 'fj',
  },
  {
    name: 'Falkland Islands',
    flag: '<i class="flag flag-falkland-islands"></i>',
    code: 'fk',
  },
  {
    name: 'Micronesia',
    flag: '<i class="flag flag-micronesia"></i>',
    code: 'fm',
  },
  {
    name: 'Faroe Islands',
    flag: '<i class="flag flag-faroe-islands"></i>',
    code: 'fo',
  },
  {
    name: 'France',
    flag: '<i class="flag flag-france"></i>',
    code: 'fr',
  },
  {
    name: 'Gabon',
    flag: '<i class="flag flag-gabon"></i>',
    code: 'ga',
  },
  {
    name: 'United Kingdom',
    flag: '<i class="flag flag-united-kingdom"></i>',
    code: 'uk',
  },
  {
    name: 'England',
    flag: '<i class="flag flag-england"></i>',
    code: 'eng',
  },
  {
    name: 'Scotland',
    flag: '<i class="flag flag-scotland"></i>',
    code: 'sct',
  },
  {
    name: 'Wales',
    flag: '<i class="flag flag-wales"></i>',
    code: 'wls',
  },
  {
    name: 'Grenada',
    flag: '<i class="flag flag-grenada"></i>',
    code: 'gd',
  },
  {
    name: 'Georgia',
    flag: '<i class="flag flag-georgia"></i>',
    code: 'ge',
  },
  {
    name: 'French Guiana',
    flag: '<i class="flag flag-french-guiana"></i>',
    code: 'gf',
  },
  {
    name: 'Ghana',
    flag: '<i class="flag flag-ghana"></i>',
    code: 'gh',
  },
  {
    name: 'Gibraltar',
    flag: '<i class="flag flag-gibraltar"></i>',
    code: 'gi',
  },
  {
    name: 'Greenland',
    flag: '<i class="flag flag-greenland"></i>',
    code: 'gl',
  },
  {
    name: 'Gambia',
    flag: '<i class="flag flag-gambia"></i>',
    code: 'gm',
  },
  {
    name: 'Guinea',
    flag: '<i class="flag flag-guinea"></i>',
    code: 'gn',
  },
  {
    name: 'Guadeloupe',
    flag: '<i class="flag flag-guadeloupe"></i>',
    code: 'gp',
  },
  {
    name: 'Equatorial Guinea',
    flag: '<i class="flag flag-equatorial-guinea"></i>',
    code: 'gq',
  },
  {
    name: 'Greece',
    flag: '<i class="flag flag-greece"></i>',
    code: 'gr',
  },
  {
    name: 'Sandwich Islands',
    flag: '<i class="flag flag-sandwich-islands"></i>',
    code: 'gs',
  },
  {
    name: 'Guatemala',
    flag: '<i class="flag flag-guatemala"></i>',
    code: 'gt',
  },
  {
    name: 'Guam',
    flag: '<i class="flag flag-guam"></i>',
    code: 'gu',
  },
  {
    name: 'Guinea Bissau',
    flag: '<i class="flag flag-guinea-bissau"></i>',
    code: 'gw',
  },
  {
    name: 'Guyana',
    flag: '<i class="flag flag-guyana"></i>',
    code: 'gy',
  },
  {
    name: 'Hong Kong',
    flag: '<i class="flag flag-hong-kong"></i>',
    code: 'hk',
  },
  {
    name: 'Heard Island',
    flag: '<i class="flag flag-heard-island"></i>',
    code: 'hm',
  },
  {
    name: 'Honduras',
    flag: '<i class="flag flag-honduras"></i>',
    code: 'hn',
  },
  {
    name: 'Croatia',
    flag: '<i class="flag flag-croatia"></i>',
    code: 'hr',
  },
  {
    name: 'Haiti',
    flag: '<i class="flag flag-haiti"></i>',
    code: 'ht',
  },
  {
    name: 'Hungary',
    flag: '<i class="flag flag-hungary"></i>',
    code: 'hu',
  },
  {
    name: 'Indonesia',
    flag: '<i class="flag flag-indonesia"></i>',
    code: 'id',
  },
  {
    name: 'Ireland',
    flag: '<i class="flag flag-ireland"></i>',
    code: 'ie',
  },
  {
    name: 'Israel',
    flag: '<i class="flag flag-israel"></i>',
    code: 'il',
  },
  {
    name: 'India',
    flag: '<i class="flag flag-india"></i>',
    code: 'in',
  },
  {
    name: 'Indian Ocean Territory',
    flag: '<i class="flag flag-indian-ocean-territory"></i>',
    code: 'io',
  },
  {
    name: 'Iraq',
    flag: '<i class="flag flag-iraq"></i>',
    code: 'iq',
  },
  {
    name: 'Iran',
    flag: '<i class="flag flag-iran"></i>',
    code: 'ir',
  },
  {
    name: 'Iceland',
    flag: '<i class="flag flag-iceland"></i>',
    code: 'is',
  },
  {
    name: 'Italy',
    flag: '<i class="flag flag-italy"></i>',
    code: 'it',
  },
  {
    name: 'Jamaica',
    flag: '<i class="flag flag-jamaica"></i>',
    code: 'jm',
  },
  {
    name: 'Jordan',
    flag: '<i class="flag flag-jordan"></i>',
    code: 'jo',
  },
  {
    name: 'Japan',
    flag: '<i class="flag flag-japan"></i>',
    code: 'jp',
  },
  {
    name: 'Kenya',
    flag: '<i class="flag flag-kenya"></i>',
    code: 'ke',
  },
  {
    name: 'Kyrgyzstan',
    flag: '<i class="flag flag-kyrgyzstan"></i>',
    code: 'kg',
  },
  {
    name: 'Cambodia',
    flag: '<i class="flag flag-cambodia"></i>',
    code: 'kh',
  },
  {
    name: 'Kiribati',
    flag: '<i class="flag flag-kiribati"></i>',
    code: 'ki',
  },
  {
    name: 'Comoros',
    flag: '<i class="flag flag-comoros"></i>',
    code: 'km',
  },
  {
    name: 'Saint Kitts And Nevis',
    flag: '<i class="flag flag-saint-kitts-and-nevis"></i>',
    code: 'kn',
  },
  {
    name: 'North Korea',
    flag: '<i class="flag flag-north-korea"></i>',
    code: 'kp',
  },
  {
    name: 'South Korea',
    flag: '<i class="flag flag-south-korea"></i>',
    code: 'kr',
  },
  {
    name: 'Kuwait',
    flag: '<i class="flag flag-kuwait"></i>',
    code: 'kw',
  },
  {
    name: 'Cayman Islands',
    flag: '<i class="flag flag-cayman-islands"></i>',
    code: 'ky',
  },
  {
    name: 'Kazakhstan',
    flag: '<i class="flag flag-kazakhstan"></i>',
    code: 'kz',
  },
  {
    name: 'Laos',
    flag: '<i class="flag flag-laos"></i>',
    code: 'la',
  },
  {
    name: 'Lebanon',
    flag: '<i class="flag flag-lebanon"></i>',
    code: 'lb',
  },
  {
    name: 'Saint Lucia',
    flag: '<i class="flag flag-saint-lucia"></i>',
    code: 'lc',
  },
  {
    name: 'Liechtenstein',
    flag: '<i class="flag flag-liechtenstein"></i>',
    code: 'li',
  },
  {
    name: 'Sri-lanka',
    flag: '<i class="flag flag-sri-lanka"></i>',
    code: 'lk',
  },
  {
    name: 'Liberia',
    flag: '<i class="flag flag-liberia"></i>',
    code: 'lr',
  },
  {
    name: 'Lesotho',
    flag: '<i class="flag flag-lesotho"></i>',
    code: 'ls',
  },
  {
    name: 'Lithuania',
    flag: '<i class="flag flag-lithuania"></i>',
    code: 'lt',
  },
  {
    name: 'Luxembourg',
    flag: '<i class="flag flag-luxembourg"></i>',
    code: 'lu',
  },
  {
    name: 'Latvia',
    flag: '<i class="flag flag-latvia"></i>',
    code: 'lv',
  },
  {
    name: 'Libya',
    flag: '<i class="flag flag-libya"></i>',
    code: 'ly',
  },
  {
    name: 'Morocco',
    flag: '<i class="flag flag-morocco"></i>',
    code: 'ma',
  },
  {
    name: 'Monaco',
    flag: '<i class="flag flag-monaco"></i>',
    code: 'mc',
  },
  {
    name: 'Moldova',
    flag: '<i class="flag flag-moldova"></i>',
    code: 'md',
  },
  {
    name: 'Montenegro',
    flag: '<i class="flag flag-montenegro"></i>',
    code: 'me',
  },
  {
    name: 'Madagascar',
    flag: '<i class="flag flag-madagascar"></i>',
    code: 'mg',
  },
  {
    name: 'Marshall Islands',
    flag: '<i class="flag flag-marshall-islands"></i>',
    code: 'mh',
  },
  {
    name: 'Macedonia',
    flag: '<i class="flag flag-macedonia"></i>',
    code: 'mk',
  },
  {
    name: 'Mali',
    flag: '<i class="flag flag-mali"></i>',
    code: 'ml',
  },
  {
    name: 'Burma',
    flag: '<i class="flag flag-burma"></i>',
    code: 'mm',
  },
  {
    name: 'Mongolia',
    flag: '<i class="flag flag-mongolia"></i>',
    code: 'mn',
  },
  {
    name: 'Macau',
    flag: '<i class="flag flag-macau"></i>',
    code: 'mo',
  },
  {
    name: 'Northern Mariana Islands',
    flag: '<i class="flag flag-northern-mariana-islands"></i>',
    code: 'mp',
  },
  {
    name: 'Martinique',
    flag: '<i class="flag flag-martinique"></i>',
    code: 'mq',
  },
  {
    name: 'Mauritania',
    flag: '<i class="flag flag-mauritania"></i>',
    code: 'mr',
  },
  {
    name: 'Montserrat',
    flag: '<i class="flag flag-montserrat"></i>',
    code: 'ms',
  },
  {
    name: 'Malta',
    flag: '<i class="flag flag-malta"></i>',
    code: 'mt',
  },
  {
    name: 'Mauritius',
    flag: '<i class="flag flag-mauritius"></i>',
    code: 'mu',
  },
  {
    name: 'Maldives',
    flag: '<i class="flag flag-maldives"></i>',
    code: 'mv',
  },
  {
    name: 'Malawi',
    flag: '<i class="flag flag-malawi"></i>',
    code: 'mw',
  },
  {
    name: 'Mexico',
    flag: '<i class="flag flag-mexico"></i>',
    code: 'mx',
  },
  {
    name: 'Malaysia',
    flag: '<i class="flag flag-malaysia"></i>',
    code: 'my',
  },
  {
    name: 'Mozambique',
    flag: '<i class="flag flag-mozambique"></i>',
    code: 'mz',
  },
  {
    name: 'Namibia',
    flag: '<i class="flag flag-namibia"></i>',
    code: 'na',
  },
  {
    name: 'New Caledonia',
    flag: '<i class="flag flag-new-caledonia"></i>',
    code: 'nc',
  },
  {
    name: 'Niger',
    flag: '<i class="flag flag-niger"></i>',
    code: 'ne',
  },
  {
    name: 'Norfolk Island',
    flag: '<i class="flag flag-norfolk-island"></i>',
    code: 'nf',
  },
  {
    name: 'Nigeria',
    flag: '<i class="flag flag-nigeria"></i>',
    code: 'ng',
  },
  {
    name: 'Nicaragua',
    flag: '<i class="flag flag-nicaragua"></i>',
    code: 'ni',
  },
  {
    name: 'Netherlands',
    flag: '<i class="flag flag-netherlands"></i>',
    code: 'nl',
  },
  {
    name: 'Norway',
    flag: '<i class="flag flag-norway"></i>',
    code: 'no',
  },
  {
    name: 'Nepal',
    flag: '<i class="flag flag-nepal"></i>',
    code: 'np',
  },
  {
    name: 'Nauru',
    flag: '<i class="flag flag-nauru"></i>',
    code: 'nr',
  },
  {
    name: 'Niue',
    flag: '<i class="flag flag-niue"></i>',
    code: 'nu',
  },
  {
    name: 'New Zealand',
    flag: '<i class="flag flag-new-zealand"></i>',
    code: 'nz',
  },
  {
    name: 'Oman',
    flag: '<i class="flag flag-oman"></i>',
    code: 'om',
  },
  {
    name: 'Panama',
    flag: '<i class="flag flag-panama"></i>',
    code: 'pa',
  },
  {
    name: 'Peru',
    flag: '<i class="flag flag-peru"></i>',
    code: 'pe',
  },
  {
    name: 'French Polynesia',
    flag: '<i class="flag flag-french-polynesia"></i>',
    code: 'pf',
  },
  {
    name: 'New Guinea',
    flag: '<i class="flag flag-new-guinea"></i>',
    code: 'pg',
  },
  {
    name: 'Philippines',
    flag: '<i class="flag flag-philippines"></i>',
    code: 'ph',
  },
  {
    name: 'Pakistan',
    flag: '<i class="flag flag-pakistan"></i>',
    code: 'pk',
  },
  {
    name: 'Poland',
    flag: '<i class="flag flag-poland"></i>',
    code: 'pl',
  },
  {
    name: 'Saint Pierre',
    flag: '<i class="flag flag-saint-pierre"></i>',
    code: 'pm',
  },
  {
    name: 'Pitcairn Islands',
    flag: '<i class="flag flag-pitcairn-islands"></i>',
    code: 'pn',
  },
  {
    name: 'Puerto Rico',
    flag: '<i class="flag flag-puerto-rico"></i>',
    code: 'pr',
  },
  {
    name: 'Palestine',
    flag: '<i class="flag flag-palestine"></i>',
    code: 'ps',
  },
  {
    name: 'Portugal',
    flag: '<i class="flag flag-portugal"></i>',
    code: 'pt',
  },
  {
    name: 'Palau',
    flag: '<i class="flag flag-palau"></i>',
    code: 'pw',
  },
  {
    name: 'Paraguay',
    flag: '<i class="flag flag-paraguay"></i>',
    code: 'py',
  },
  {
    name: 'Qatar',
    flag: '<i class="flag flag-qatar"></i>',
    code: 'qa',
  },
  {
    name: 'Reunion',
    flag: '<i class="flag flag-reunion"></i>',
    code: 're',
  },
  {
    name: 'Romania',
    flag: '<i class="flag flag-romania"></i>',
    code: 'ro',
  },
  {
    name: 'Serbia',
    flag: '<i class="flag flag-serbia"></i>',
    code: 'rs',
  },
  {
    name: 'Russia',
    flag: '<i class="flag flag-russia"></i>',
    code: 'ru',
  },
  {
    name: 'Rwanda',
    flag: '<i class="flag flag-rwanda"></i>',
    code: 'rw',
  },
  {
    name: 'Saudi Arabia',
    flag: '<i class="flag flag-saudi-arabia"></i>',
    code: 'sa',
  },
  {
    name: 'Solomon Islands',
    flag: '<i class="flag flag-solomon-islands"></i>',
    code: 'sb',
  },
  {
    name: 'Seychelles',
    flag: '<i class="flag flag-seychelles"></i>',
    code: 'sc',
  },
  {
    name: 'Sudan',
    flag: '<i class="flag flag-sudan"></i>',
    code: 'sd',
  },
  {
    name: 'Sweden',
    flag: '<i class="flag flag-sweden"></i>',
    code: 'se',
  },
  {
    name: 'Singapore',
    flag: '<i class="flag flag-singapore"></i>',
    code: 'sg',
  },
  {
    name: 'Saint Helena',
    flag: '<i class="flag flag-saint-helena"></i>',
    code: 'sh',
  },
  {
    name: 'Slovenia',
    flag: '<i class="flag flag-slovenia"></i>',
    code: 'si',
  },
  {
    name: 'Jan Mayen',
    flag: '<i class="flag flag-jan-mayen"></i>',
    code: 'sj',
  },
  {
    name: 'Slovakia',
    flag: '<i class="flag flag-slovakia"></i>',
    code: 'sk',
  },
  {
    name: 'Sierra Leone',
    flag: '<i class="flag flag-sierra-leone"></i>',
    code: 'sl',
  },
  {
    name: 'San Marino',
    flag: '<i class="flag flag-san-marino"></i>',
    code: 'sm',
  },
  {
    name: 'Senegal',
    flag: '<i class="flag flag-senegal"></i>',
    code: 'sn',
  },
  {
    name: 'Somalia',
    flag: '<i class="flag flag-somalia"></i>',
    code: 'so',
  },
  {
    name: 'Suriname',
    flag: '<i class="flag flag-suriname"></i>',
    code: 'sr',
  },
  {
    name: 'Sao Tome',
    flag: '<i class="flag flag-sao-tome"></i>',
    code: 'st',
  },
  {
    name: 'El Salvador',
    flag: '<i class="flag flag-el-salvador"></i>',
    code: 'sv',
  },
  {
    name: 'Syria',
    flag: '<i class="flag flag-syria"></i>',
    code: 'sy',
  },
  {
    name: 'Swaziland',
    flag: '<i class="flag flag-swaziland"></i>',
    code: 'sz',
  },
  {
    name: 'Caicos Islands',
    flag: '<i class="flag flag-caicos-islands"></i>',
    code: 'tc',
  },
  {
    name: 'Chad',
    flag: '<i class="flag flag-chad"></i>',
    code: 'td',
  },
  {
    name: 'French Territories',
    flag: '<i class="flag flag-french-territories"></i>',
    code: 'tf',
  },
  {
    name: 'Togo',
    flag: '<i class="flag flag-togo"></i>',
    code: 'tg',
  },
  {
    name: 'Thailand',
    flag: '<i class="flag flag-thailand"></i>',
    code: 'th',
  },
  {
    name: 'Tajikistan',
    flag: '<i class="flag flag-tajikistan"></i>',
    code: 'tj',
  },
  {
    name: 'Tokelau',
    flag: '<i class="flag flag-tokelau"></i>',
    code: 'tk',
  },
  {
    name: 'Timorleste',
    flag: '<i class="flag flag-timorleste"></i>',
    code: 'tl',
  },
  {
    name: 'Turkmenistan',
    flag: '<i class="flag flag-turkmenistan"></i>',
    code: 'tm',
  },
  {
    name: 'Tunisia',
    flag: '<i class="flag flag-tunisia"></i>',
    code: 'tn',
  },
  {
    name: 'Tonga',
    flag: '<i class="flag flag-tonga"></i>',
    code: 'to',
  },
  {
    name: 'Turkey',
    flag: '<i class="flag flag-turkey"></i>',
    code: 'tr',
  },
  {
    name: 'Trinidad',
    flag: '<i class="flag flag-trinidad"></i>',
    code: 'tt',
  },
  {
    name: 'Tuvalu',
    flag: '<i class="flag flag-tuvalu"></i>',
    code: 'tv',
  },
  {
    name: 'Taiwan',
    flag: '<i class="flag flag-taiwan"></i>',
    code: 'tw',
  },
  {
    name: 'Tanzania',
    flag: '<i class="flag flag-tanzania"></i>',
    code: 'tz',
  },
  {
    name: 'Ukraine',
    flag: '<i class="flag flag-ukraine"></i>',
    code: 'ua',
  },
  {
    name: 'Uganda',
    flag: '<i class="flag flag-uganda"></i>',
    code: 'ug',
  },
  {
    name: 'Us Minor Islands',
    flag: '<i class="flag flag-us-minor-islands"></i>',
    code: 'um',
  },
  {
    name: 'United States',
    flag: '<i class="flag flag-united-states"></i>',
    code: 'us',
  },
  {
    name: 'Uruguay',
    flag: '<i class="flag flag-uruguay"></i>',
    code: 'uy',
  },
  {
    name: 'Uzbekistan',
    flag: '<i class="flag flag-uzbekistan"></i>',
    code: 'uz',
  },
  {
    name: 'Vatican City',
    flag: '<i class="flag flag-vatican-city"></i>',
    code: 'va',
  },
  {
    name: 'Saint Vincent',
    flag: '<i class="flag flag-saint-vincent"></i>',
    code: 'vc',
  },
  {
    name: 'Venezuela',
    flag: '<i class="flag flag-venezuela"></i>',
    code: 've',
  },
  {
    name: 'British Virgin Islands',
    flag: '<i class="flag flag-british-virgin-islands"></i>',
    code: 'vg',
  },
  {
    name: 'Us Virgin Islands',
    flag: '<i class="flag flag-us-virgin-islands"></i>',
    code: 'vi',
  },
  {
    name: 'Việt Nam',
    flag: '<i class="flag flag-vietnam"></i>',
    code: 'vn',
  },
  {
    name: 'Vanuatu',
    flag: '<i class="flag flag-vanuatu"></i>',
    code: 'vu',
  },
  {
    name: 'Wallis And Futuna',
    flag: '<i class="flag flag-wallis-and-futuna"></i>',
    code: 'wf',
  },
  {
    name: 'Samoa',
    flag: '<i class="flag flag-samoa"></i>',
    code: 'ws',
  },
  {
    name: 'Yemen',
    flag: '<i class="flag flag-yemen"></i>',
    code: 'ye',
  },
  {
    name: 'Mayotte',
    flag: '<i class="flag flag-mayotte"></i>',
    code: 'yt',
  },
  {
    name: 'South Africa',
    flag: '<i class="flag flag-south-africa"></i>',
    code: 'za',
  },
  {
    name: 'Zambia',
    flag: '<i class="flag flag-zambia"></i>',
    code: 'zm',
  },
  {
    name: 'Zimbabwe',
    flag: '<i class="flag flag-zimbabwe"></i>',
    code: 'zw',
  },
];
