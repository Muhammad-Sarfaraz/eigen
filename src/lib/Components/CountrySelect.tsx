import React from "react"
import { Select, SelectOption } from "../../palette/elements/Select"

// This data was copied over from force & the populations (searchImportance) was extracted mostly from this
// wikipedia article https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population

export const COUNTRY_SELECT_OPTIONS: Array<SelectOption<string>> = [
  { label: "Afghanistan", value: "AF", searchImportance: 32225560, searchTerms: ["Afghanistan", "AF"] },
  { label: "Åland Islands", value: "AX", searchImportance: 29981, searchTerms: ["Åland Islands", "AX"] },
  { label: "Albania", value: "AL", searchImportance: 2845955, searchTerms: ["Albania", "AL"] },
  { label: "Algeria", value: "DZ", searchImportance: 43000000, searchTerms: ["Algeria", "DZ"] },
  { label: "American Samoa", value: "AS", searchImportance: 56700, searchTerms: ["American Samoa", "AS"] },
  { label: "Andorra", value: "AD", searchImportance: 77543, searchTerms: ["Andorra", "AD"] },
  { label: "Angola", value: "AO", searchImportance: 31127674, searchTerms: ["Angola", "AO"] },
  { label: "Anguilla", value: "AI", searchImportance: 14869, searchTerms: ["Anguilla", "AI"] },
  { label: "Antarctica", value: "AQ", searchImportance: 1000, searchTerms: ["Antarctica", "AQ"] },
  { label: "Antigua and Barbuda", value: "AG", searchImportance: 96453, searchTerms: ["Antigua and Barbuda", "AG"] },
  { label: "Argentina", value: "AR", searchImportance: 45376763, searchTerms: ["Argentina", "AR"] },
  { label: "Armenia", value: "AM", searchImportance: 2956900, searchTerms: ["Armenia", "AM"] },
  { label: "Aruba", value: "AW", searchImportance: 112190, searchTerms: ["Aruba", "AW"] },
  { label: "Australia", value: "AU", searchImportance: 25756880, searchTerms: ["Australia", "AU"] },
  { label: "Austria", value: "AT", searchImportance: 8902600, searchTerms: ["Austria", "AT"] },
  { label: "Azerbaijan", value: "AZ", searchImportance: 10067108, searchTerms: ["Azerbaijan", "AZ"] },
  { label: "Bahamas", value: "BS", searchImportance: 385340, searchTerms: ["Bahamas", "BS"] },
  { label: "Bahrain", value: "BH", searchImportance: 1543300, searchTerms: ["Bahrain", "BH"] },
  { label: "Bangladesh", value: "BD", searchImportance: 168872634, searchTerms: ["Bangladesh", "BD"] },
  { label: "Barbados", value: "BB", searchImportance: 287025, searchTerms: ["Barbados", "BB"] },
  { label: "Belarus", value: "BY", searchImportance: 9397800, searchTerms: ["Belarus", "BY"] },
  { label: "Belgium", value: "BE", searchImportance: 11528375, searchTerms: ["Belgium", "BE"] },
  { label: "Belize", value: "BZ", searchImportance: 408487, searchTerms: ["Belize", "BZ"] },
  { label: "Benin", value: "BJ", searchImportance: 11733059, searchTerms: ["Benin", "BJ"] },
  { label: "Bermuda", value: "BM", searchImportance: 64027, searchTerms: ["Bermuda", "BM"] },
  { label: "Bhutan", value: "BT", searchImportance: 741672, searchTerms: ["Bhutan", "BT"] },
  { label: "Bolivia", value: "BO", searchImportance: 11469896, searchTerms: ["Bolivia", "BO"] },
  {
    label: "Bosnia and Herzegovina",
    value: "BA",
    searchImportance: 3301000,
    searchTerms: ["Bosnia and Herzegovina", "BA"],
  },
  { label: "Botswana", value: "BW", searchImportance: 2338851, searchTerms: ["Botswana", "BW"] },
  { label: "Brazil", value: "BR", searchImportance: 211729470, searchTerms: ["Brazil", "BR"] },
  { label: "Brunei Darussalam", value: "BN", searchImportance: 459500, searchTerms: ["Brunei Darussalam", "BN"] },
  { label: "Bulgaria", value: "BG", searchImportance: 6951482, searchTerms: ["Bulgaria", "BG"] },
  { label: "Burkina Faso", value: "BF", searchImportance: 21510181, searchTerms: ["Burkina Faso", "BF"] },
  { label: "Burundi", value: "BI", searchImportance: 10953317, searchTerms: ["Burundi", "BI"] },
  { label: "Cambodia", value: "KH", searchImportance: 15288489, searchTerms: ["Cambodia", "KH"] },
  { label: "Cameroon", value: "CM", searchImportance: 26545864, searchTerms: ["Cameroon", "CM"] },
  { label: "Canada", value: "CA", searchImportance: 38083197, searchTerms: ["Canada", "CA"] },
  { label: "Cape Verde", value: "CV", searchImportance: 550483, searchTerms: ["Cape Verde", "CV"] },
  { label: "Cayman Islands", value: "KY", searchImportance: 65813, searchTerms: ["Cayman Islands", "KY"] },
  {
    label: "Central African Republic",
    value: "CF",
    searchImportance: 5496011,
    searchTerms: ["Central African Republic", "CF"],
  },
  { label: "Chad", value: "TD", searchImportance: 16244513, searchTerms: ["Chad", "TD"] },
  { label: "Chile", value: "CL", searchImportance: 19458310, searchTerms: ["Chile", "CL"] },
  { label: "China", value: "CN", searchImportance: 1403322440, searchTerms: ["China", "CN"] },
  { label: "Christmas Island", value: "CX", searchImportance: 1955, searchTerms: ["Christmas Island", "CX"] },
  {
    label: "Cocos (Keeling) Islands",
    value: "CC",
    searchImportance: 500,
    searchTerms: ["Cocos (Keeling) Islands", "CC"],
  },
  { label: "Colombia", value: "CO", searchImportance: 50372424, searchTerms: ["Colombia", "CO"] },
  { label: "Comoros", value: "KM", searchImportance: 873724, searchTerms: ["Comoros", "KM"] },
  { label: "Congo", value: "CG", searchImportance: 5518092, searchTerms: ["Congo", "CG"] },
  {
    label: "Congo, The Democratic Republic of the",
    value: "CD",
    searchImportance: 89561404,
    searchTerms: ["Congo, The Democratic Republic of the", "CD"],
  },
  { label: "Cook Islands", value: "CK", searchImportance: 15200, searchTerms: ["Cook Islands", "CK"] },
  { label: "Costa Rica", value: "CR", searchImportance: 5058007, searchTerms: ["Costa Rica", "CR"] },
  { label: "Cote D'Ivoire", value: "CI", searchImportance: 25823071, searchTerms: ["Cote D'Ivoire", "CI"] },
  { label: "Croatia", value: "HR", searchImportance: 4076246, searchTerms: ["Croatia", "HR"] },
  { label: "Cuba", value: "CU", searchImportance: 11193470, searchTerms: ["Cuba", "CU"] },
  { label: "Cyprus", value: "CY", searchImportance: 875900, searchTerms: ["Cyprus", "CY"] },
  { label: "Czech Republic", value: "CZ", searchImportance: 10693939, searchTerms: ["Czech Republic", "CZ"] },
  { label: "Denmark", value: "DK", searchImportance: 5824857, searchTerms: ["Denmark", "DK"] },
  { label: "Djibouti", value: "DJ", searchImportance: 1078373, searchTerms: ["Djibouti", "DJ"] },
  { label: "Dominica", value: "DM", searchImportance: 71808, searchTerms: ["Dominica", "DM"] },
  { label: "Dominican Republic", value: "DO", searchImportance: 10448499, searchTerms: ["Dominican Republic", "DO"] },
  { label: "Ecuador", value: "EC", searchImportance: 17516888, searchTerms: ["Ecuador", "EC"] },
  { label: "Egypt", value: "EG", searchImportance: 100554998, searchTerms: ["Egypt", "EG"] },
  { label: "El Salvador", value: "SV", searchImportance: 6486201, searchTerms: ["El Salvador", "SV"] },
  { label: "Equatorial Guinea", value: "GQ", searchImportance: 1454789, searchTerms: ["Equatorial Guinea", "GQ"] },
  { label: "Eritrea", value: "ER", searchImportance: 3497117, searchTerms: ["Eritrea", "ER"] },
  { label: "Estonia", value: "EE", searchImportance: 1328976, searchTerms: ["Estonia", "EE"] },
  { label: "Ethiopia", value: "ET", searchImportance: 98665000, searchTerms: ["Ethiopia", "ET"] },
  {
    label: "Falkland Islands (Malvinas)",
    value: "FK",
    searchImportance: 3198,
    searchTerms: ["Falkland Islands (Malvinas)", "FK"],
  },
  { label: "Faroe Islands", value: "FO", searchImportance: 52484, searchTerms: ["Faroe Islands", "FO"] },
  { label: "Fiji", value: "FJ", searchImportance: 884887, searchTerms: ["Fiji", "FJ"] },
  { label: "Finland", value: "FI", searchImportance: 5498027, searchTerms: ["Finland", "FI"] },
  { label: "France", value: "FR", searchImportance: 67067000, searchTerms: ["France", "FR"] },
  { label: "French Guiana", value: "GF", searchImportance: 290691, searchTerms: ["French Guiana", "GF"] },
  { label: "French Polynesia", value: "PF", searchImportance: 275918, searchTerms: ["French Polynesia", "PF"] },
  {
    label: "French Southern and Antarctic Lands",
    value: "TF",
    searchImportance: 150,
    searchTerms: ["French Southern and Antarctic Lands", "TF"],
  },
  { label: "Gabon", value: "GA", searchImportance: 2172579, searchTerms: ["Gabon", "GA"] },
  { label: "Gambia", value: "GM", searchImportance: 2347706, searchTerms: ["Gambia", "GM"] },
  { label: "Georgia", value: "GE", searchImportance: 3716858, searchTerms: ["Georgia", "GE"] },
  { label: "Germany", value: "DE", searchImportance: 83166711, searchTerms: ["Germany", "DE"] },
  { label: "Ghana", value: "GH", searchImportance: 30280811, searchTerms: ["Ghana", "GH"] },
  { label: "Gibraltar", value: "GI", searchImportance: 33691, searchTerms: ["Gibraltar", "GI"] },
  { label: "Greece", value: "GR", searchImportance: 10724599, searchTerms: ["Greece", "GR"] },
  { label: "Greenland", value: "GL", searchImportance: 56081, searchTerms: ["Greenland", "GL"] },
  { label: "Grenada", value: "GD", searchImportance: 112003, searchTerms: ["Grenada", "GD"] },
  { label: "Guadeloupe", value: "GP", searchImportance: 395700, searchTerms: ["Guadeloupe", "GP"] },
  { label: "Guam", value: "GU", searchImportance: 172400, searchTerms: ["Guam", "GU"] },
  { label: "Guatemala", value: "GT", searchImportance: 16604026, searchTerms: ["Guatemala", "GT"] },
  { label: "Guernsey", value: "GG", searchImportance: 63196, searchTerms: ["Guernsey", "GG"] },
  { label: "Guinea", value: "GN", searchImportance: 12218357, searchTerms: ["Guinea", "GN"] },
  { label: "Guinea-Bissau", value: "GW", searchImportance: 1604528, searchTerms: ["Guinea-Bissau", "GW"] },
  { label: "Guyana", value: "GY", searchImportance: 782766, searchTerms: ["Guyana", "GY"] },
  { label: "Haiti", value: "HT", searchImportance: 11577779, searchTerms: ["Haiti", "HT"] },
  {
    label: "Holy See (Vatican City State)",
    value: "VA",
    searchImportance: 825,
    searchTerms: ["Holy See (Vatican City State)", "VA"],
  },
  { label: "Honduras", value: "HN", searchImportance: 9304380, searchTerms: ["Honduras", "HN"] },
  { label: "Hong Kong", value: "HK", searchImportance: 7500700, searchTerms: ["Hong Kong", "HK"] },
  { label: "Hungary", value: "HU", searchImportance: 9769000, searchTerms: ["Hungary", "HU"] },
  { label: "Iceland", value: "IS", searchImportance: 366130, searchTerms: ["Iceland", "IS"] },
  { label: "India", value: "IN", searchImportance: 1364120059, searchTerms: ["India", "IN"] },
  { label: "Indonesia", value: "ID", searchImportance: 269603400, searchTerms: ["Indonesia", "ID"] },
  {
    label: "Iran, Islamic Republic Of",
    value: "IR",
    searchImportance: 83573873,
    searchTerms: ["Iran, Islamic Republic Of", "IR"],
  },
  { label: "Iraq", value: "IQ", searchImportance: 40150200, searchTerms: ["Iraq", "IQ"] },
  { label: "Ireland", value: "IE", searchImportance: 4921500, searchTerms: ["Ireland", "IE"] },
  { label: "Isle of Man", value: "IM", searchImportance: 83314, searchTerms: ["Isle of Man", "IM"] },
  { label: "Israel", value: "IL", searchImportance: 9216070, searchTerms: ["Israel", "IL"] },
  { label: "Italy", value: "IT", searchImportance: 60238522, searchTerms: ["Italy", "IT"] },
  { label: "Jamaica", value: "JM", searchImportance: 2726667, searchTerms: ["Jamaica", "JM"] },
  { label: "Japan", value: "JP", searchImportance: 125930000, searchTerms: ["Japan", "JP"] },
  { label: "Jersey", value: "JE", searchImportance: 106800, searchTerms: ["Jersey", "JE"] },
  { label: "Jordan", value: "JO", searchImportance: 10713832, searchTerms: ["Jordan", "JO"] },
  { label: "Kazakhstan", value: "KZ", searchImportance: 18729296, searchTerms: ["Kazakhstan", "KZ"] },
  { label: "Kenya", value: "KE", searchImportance: 47564296, searchTerms: ["Kenya", "KE"] },
  { label: "Kiribati", value: "KI", searchImportance: 120100, searchTerms: ["Kiribati", "KI"] },
  {
    label: "Korea, Democratic People's Republic of",
    value: "KP",
    searchImportance: 25450000,
    searchTerms: ["Korea, Democratic People's Republic of", "KP"],
  },
  { label: "Korea, Republic of", value: "KR", searchImportance: 51780579, searchTerms: ["Korea, Republic of", "KR"] },
  { label: "Kuwait", value: "KW", searchImportance: 4420110, searchTerms: ["Kuwait", "KW"] },
  { label: "Kyrgyzstan", value: "KG", searchImportance: 6533500, searchTerms: ["Kyrgyzstan", "KG"] },
  {
    label: "Lao People's Democratic Republic",
    value: "LA",
    searchImportance: 7123205,
    searchTerms: ["Lao People's Democratic Republic", "LA"],
  },
  { label: "Latvia", value: "LV", searchImportance: 1904600, searchTerms: ["Latvia", "LV"] },
  { label: "Lebanon", value: "LB", searchImportance: 6825442, searchTerms: ["Lebanon", "LB"] },
  { label: "Lesotho", value: "LS", searchImportance: 2007201, searchTerms: ["Lesotho", "LS"] },
  { label: "Liberia", value: "LR", searchImportance: 4475353, searchTerms: ["Liberia", "LR"] },
  { label: "Libya", value: "LY", searchImportance: 6871287, searchTerms: ["Libya", "LY"] },
  { label: "Liechtenstein", value: "LI", searchImportance: 38749, searchTerms: ["Liechtenstein", "LI"] },
  { label: "Lithuania", value: "LT", searchImportance: 2793353, searchTerms: ["Lithuania", "LT"] },
  { label: "Luxembourg", value: "LU", searchImportance: 626108, searchTerms: ["Luxembourg", "LU"] },
  { label: "Macau", value: "MO", searchImportance: 696100, searchTerms: ["Macau", "MO"] },
  {
    label: "North Macedonia, Republic of",
    value: "MK",
    searchImportance: 2077132,
    searchTerms: ["North Macedonia, Republic of", "MK"],
  },
  { label: "Madagascar", value: "MG", searchImportance: 26251309, searchTerms: ["Madagascar", "MG"] },
  { label: "Malawi", value: "MW", searchImportance: 19129952, searchTerms: ["Malawi", "MW"] },
  { label: "Malaysia", value: "MY", searchImportance: 32826760, searchTerms: ["Malaysia", "MY"] },
  { label: "Maldives", value: "MV", searchImportance: 374775, searchTerms: ["Maldives", "MV"] },
  { label: "Mali", value: "ML", searchImportance: 20250833, searchTerms: ["Mali", "ML"] },
  { label: "Malta", value: "MT", searchImportance: 493559, searchTerms: ["Malta", "MT"] },
  { label: "Marshall Islands", value: "MH", searchImportance: 55500, searchTerms: ["Marshall Islands", "MH"] },
  { label: "Martinique", value: "MQ", searchImportance: 30066648, searchTerms: ["Martinique", "MQ"] },
  { label: "Mauritania", value: "MR", searchImportance: 4077347, searchTerms: ["Mauritania", "MR"] },
  { label: "Mauritius", value: "MU", searchImportance: 1265475, searchTerms: ["Mauritius", "MU"] },
  { label: "Mayotte", value: "YT", searchImportance: 270372, searchTerms: ["Mayotte", "YT"] },
  { label: "Mexico", value: "MX", searchImportance: 127792286, searchTerms: ["Mexico", "MX"] },
  {
    label: "Micronesia, Federated States of",
    value: "FM",
    searchImportance: 104468,
    searchTerms: ["Micronesia, Federated States of", "FM"],
  },
  {
    label: "Moldova, Republic of",
    value: "MD",
    searchImportance: 2640400,
    searchTerms: ["Moldova, Republic of", "MD"],
  },
  { label: "Monaco", value: "MC", searchImportance: 38100, searchTerms: ["Monaco", "MC"] },
  { label: "Mongolia", value: "MN", searchImportance: 3325178, searchTerms: ["Mongolia", "MN"] },
  { label: "Montenegro", value: "ME", searchImportance: 622359, searchTerms: ["Montenegro", "ME"] },
  { label: "Montserrat", value: "MS", searchImportance: 4989, searchTerms: ["Montserrat", "MS"] },
  { label: "Morocco", value: "MA", searchImportance: 35942525, searchTerms: ["Morocco", "MA"] },
  { label: "Mozambique", value: "MZ", searchImportance: 30066648, searchTerms: ["Mozambique", "MZ"] },
  { label: "Myanmar", value: "MM", searchImportance: 54817919, searchTerms: ["Myanmar", "MM"] },
  { label: "Namibia", value: "NA", searchImportance: 2458936, searchTerms: ["Namibia", "NA"] },
  { label: "Nauru", value: "NR", searchImportance: 11000, searchTerms: ["Nauru", "NR"] },
  { label: "Nepal", value: "NP", searchImportance: 29996478, searchTerms: ["Nepal", "NP"] },
  { label: "Netherlands", value: "NL", searchImportance: 17482181, searchTerms: ["Netherlands", "NL"] },
  { label: "Netherlands Antilles", value: "AN", searchImportance: 227049, searchTerms: ["Netherlands Antilles", "AN"] },
  { label: "New Caledonia", value: "NC", searchImportance: 271407, searchTerms: ["New Caledonia", "NC"] },
  { label: "New Zealand", value: "NZ", searchImportance: 5008365, searchTerms: ["New Zealand", "NZ"] },
  { label: "Nicaragua", value: "NI", searchImportance: 6460411, searchTerms: ["Nicaragua", "NI"] },
  { label: "Niger", value: "NE", searchImportance: 22314743, searchTerms: ["Niger", "NE"] },
  { label: "Nigeria", value: "NG", searchImportance: 206139587, searchTerms: ["Nigeria", "NG"] },
  { label: "Niue", value: "NU", searchImportance: 1520, searchTerms: ["Niue", "NU"] },
  { label: "Norfolk Island", value: "NF", searchImportance: 2169, searchTerms: ["Norfolk Island", "NF"] },
  {
    label: "Northern Mariana Islands",
    value: "MP",
    searchImportance: 56200,
    searchTerms: ["Northern Mariana Islands", "MP"],
  },
  { label: "Norway", value: "NO", searchImportance: 5372355, searchTerms: ["Norway", "NO"] },
  { label: "Oman", value: "OM", searchImportance: 4645249, searchTerms: ["Oman", "OM"] },
  { label: "Pakistan", value: "PK", searchImportance: 220892331, searchTerms: ["Pakistan", "PK"] },
  { label: "Palau", value: "PW", searchImportance: 17900, searchTerms: ["Palau", "PW"] },
  {
    label: "Palestinian Territory, Occupied",
    value: "PS",
    searchImportance: 4976684,
    searchTerms: ["Palestinian Territory, Occupied", "PS"],
  },
  { label: "Panama", value: "PA", searchImportance: 4218808, searchTerms: ["Panama", "PA"] },
  { label: "Papua New Guinea", value: "PG", searchImportance: 8935000, searchTerms: ["Papua New Guinea", "PG"] },
  { label: "Paraguay", value: "PY", searchImportance: 7252672, searchTerms: ["Paraguay", "PY"] },
  { label: "Peru", value: "PE", searchImportance: 32824358, searchTerms: ["Peru", "PE"] },
  { label: "Philippines", value: "PH", searchImportance: 108829500, searchTerms: ["Philippines", "PH"] },
  { label: "Pitcairn", value: "PN", searchImportance: 50, searchTerms: ["Pitcairn", "PN"] },
  { label: "Poland", value: "PL", searchImportance: 38379000, searchTerms: ["Poland", "PL"] },
  { label: "Portugal", value: "PT", searchImportance: 10295909, searchTerms: ["Portugal", "PT"] },
  { label: "Puerto Rico", value: "PR", searchImportance: 3193694, searchTerms: ["Puerto Rico", "PR"] },
  { label: "Qatar", value: "QA", searchImportance: 2795484, searchTerms: ["Qatar", "QA"] },
  { label: "Réunion", value: "RE", searchImportance: 859959, searchTerms: ["Réunion", "RE"] },
  { label: "Romania", value: "RO", searchImportance: 19405156, searchTerms: ["Romania", "RO"] },
  { label: "Russian Federation", value: "RU", searchImportance: 146748590, searchTerms: ["Russian Federation", "RU"] },
  { label: "Rwanda", value: "RW", searchImportance: 12374397, searchTerms: ["Rwanda", "RW"] },
  { label: "Saint Helena", value: "SH", searchImportance: 6000, searchTerms: ["Saint Helena", "SH"] },
  {
    label: "Saint Kitts and Nevis",
    value: "KN",
    searchImportance: 52823,
    searchTerms: ["Saint Kitts and Nevis", "KN"],
  },
  { label: "Saint Lucia", value: "LC", searchImportance: 178696, searchTerms: ["Saint Lucia", "LC"] },
  {
    label: "Saint Pierre and Miquelon",
    value: "PM",
    searchImportance: 5997,
    searchTerms: ["Saint Pierre and Miquelon", "PM"],
  },
  {
    label: "Saint Vincent and the Grenadines",
    value: "VC",
    searchImportance: 110608,
    searchTerms: ["Saint Vincent and the Grenadines", "VC"],
  },
  { label: "Samoa", value: "WS", searchImportance: 200874, searchTerms: ["Samoa", "WS"] },
  { label: "San Marino", value: "SM", searchImportance: 33553, searchTerms: ["San Marino", "SM"] },
  {
    label: "São Tomé and Príncipe",
    value: "ST",
    searchImportance: 210240,
    searchTerms: ["São Tomé and Príncipe", "ST"],
  },
  { label: "Saudi Arabia", value: "SA", searchImportance: 34218169, searchTerms: ["Saudi Arabia", "SA"] },
  { label: "Senegal", value: "SN", searchImportance: 16705608, searchTerms: ["Senegal", "SN"] },
  { label: "Serbia", value: "RS", searchImportance: 6963764, searchTerms: ["Serbia", "RS"] },
  { label: "Seychelles", value: "SC", searchImportance: 98055, searchTerms: ["Seychelles", "SC"] },
  { label: "Sierra Leone", value: "SL", searchImportance: 7901454, searchTerms: ["Sierra Leone", "SL"] },
  { label: "Singapore", value: "SG", searchImportance: 5703600, searchTerms: ["Singapore", "SG"] },
  { label: "Slovakia", value: "SK", searchImportance: 5457873, searchTerms: ["Slovakia", "SK"] },
  { label: "Slovenia", value: "SI", searchImportance: 2095861, searchTerms: ["Slovenia", "SI"] },
  { label: "Solomon Islands", value: "SB", searchImportance: 680806, searchTerms: ["Solomon Islands", "SB"] },
  { label: "Somalia", value: "SO", searchImportance: 15893219, searchTerms: ["Somalia", "SO"] },
  { label: "South Africa", value: "ZA", searchImportance: 58775022, searchTerms: ["South Africa", "ZA"] },
  {
    label: "South Georgia and the South Sandwich Islands",
    value: "GS",
    searchImportance: 30,
    searchTerms: ["South Georgia and the South Sandwich Islands", "GS"],
  },
  { label: "Spain", value: "ES", searchImportance: 47329981, searchTerms: ["Spain", "ES"] },
  { label: "Sri Lanka", value: "LK", searchImportance: 21803000, searchTerms: ["Sri Lanka", "LK"] },
  { label: "Sudan", value: "SD", searchImportance: 42627655, searchTerms: ["Sudan", "SD"] },
  { label: "Suriname", value: "SR", searchImportance: 581372, searchTerms: ["Suriname", "SR"] },
  {
    label: "Svalbard and Jan Mayen",
    value: "SJ",
    searchImportance: 1000,
    searchTerms: ["Svalbard and Jan Mayen", "SJ"],
  },
  { label: "Eswatini", value: "SZ", searchImportance: 1093238, searchTerms: ["Eswatini", "SZ"] },
  { label: "Sweden", value: "SE", searchImportance: 10345449, searchTerms: ["Sweden", "SE"] },
  { label: "Switzerland", value: "CH", searchImportance: 8619259, searchTerms: ["Switzerland", "CH"] },
  {
    label: "Syrian Arab Republic",
    value: "SY",
    searchImportance: 17500657,
    searchTerms: ["Syrian Arab Republic", "SY"],
  },
  {
    label: "Taiwan, Province of China",
    value: "TW",
    searchImportance: 23596493,
    searchTerms: ["Taiwan, Province of China", "TW"],
  },
  { label: "Tajikistan", value: "TJ", searchImportance: 9127000, searchTerms: ["Tajikistan", "TJ"] },
  {
    label: "Tanzania, United Republic of",
    value: "TZ",
    searchImportance: 57637628,
    searchTerms: ["Tanzania, United Republic of", "TZ"],
  },
  { label: "Thailand", value: "TH", searchImportance: 66523092, searchTerms: ["Thailand", "TH"] },
  { label: "Timor-Leste", value: "TL", searchImportance: 1387149, searchTerms: ["Timor-Leste", "TL"] },
  { label: "Togo", value: "TG", searchImportance: 7538000, searchTerms: ["Togo", "TG"] },
  { label: "Tokelau", value: "TK", searchImportance: 1400, searchTerms: ["Tokelau", "TK"] },
  { label: "Tonga", value: "TO", searchImportance: 100651, searchTerms: ["Tonga", "TO"] },
  { label: "Trinidad and Tobago", value: "TT", searchImportance: 1363985, searchTerms: ["Trinidad and Tobago", "TT"] },
  { label: "Tunisia", value: "TN", searchImportance: 11722038, searchTerms: ["Tunisia", "TN"] },
  { label: "Turkey", value: "TR", searchImportance: 83154997, searchTerms: ["Turkey", "TR"] },
  { label: "Turkmenistan", value: "TM", searchImportance: 6031187, searchTerms: ["Turkmenistan", "TM"] },
  {
    label: "Turks and Caicos Islands",
    value: "TC",
    searchImportance: 42953,
    searchTerms: ["Turks and Caicos Islands", "TC"],
  },
  { label: "Tuvalu", value: "TV", searchImportance: 10200, searchTerms: ["Tuvalu", "TV"] },
  { label: "Uganda", value: "UG", searchImportance: 41590300, searchTerms: ["Uganda", "UG"] },
  { label: "Ukraine", value: "UA", searchImportance: 41806221, searchTerms: ["Ukraine", "UA"] },
  {
    label: "United Arab Emirates",
    value: "AE",
    searchImportance: 9890400,
    searchTerms: ["United Arab Emirates", "AE", "UAE"],
  },
  { label: "United Kingdom", value: "GB", searchImportance: 66796807, searchTerms: ["United Kingdom", "GB", "UK"] },
  { label: "United States", value: "US", searchImportance: 329952186, searchTerms: ["United States", "US", "USA"] },
  {
    label: "United States Minor Outlying Islands",
    value: "UM",
    searchImportance: 300,
    searchTerms: ["United States Minor Outlying Islands", "UM"],
  },
  { label: "Uruguay", value: "UY", searchImportance: 3530912, searchTerms: ["Uruguay", "UY"] },
  { label: "Uzbekistan", value: "UZ", searchImportance: 34269199, searchTerms: ["Uzbekistan", "UZ"] },
  { label: "Vanuatu", value: "VU", searchImportance: 304500, searchTerms: ["Vanuatu", "VU"] },
  { label: "Venezuela", value: "VE", searchImportance: 32219521, searchTerms: ["Venezuela", "VE"] },
  { label: "Viet Nam", value: "VN", searchImportance: 96208984, searchTerms: ["Viet Nam", "VN"] },
  {
    label: "Virgin Islands, British",
    value: "VG",
    searchImportance: 104578,
    searchTerms: ["Virgin Islands, British", "VG"],
  },
  { label: "Virgin Islands, U.S.", value: "VI", searchImportance: 104578, searchTerms: ["Virgin Islands, U.S.", "VI"] },
  { label: "Wallis and Futuna", value: "WF", searchImportance: 11700, searchTerms: ["Wallis and Futuna", "WF"] },
  { label: "Western Sahara", value: "EH", searchImportance: 582463, searchTerms: ["Western Sahara", "EH"] },
  { label: "Yemen", value: "YE", searchImportance: 29825968, searchTerms: ["Yemen", "YE"] },
  { label: "Zambia", value: "ZM", searchImportance: 17885422, searchTerms: ["Zambia", "ZM"] },
  { label: "Zimbabwe", value: "ZW", searchImportance: 15159624, searchTerms: ["Zimbabwe", "ZW"] },
]

export const CountrySelect: React.ComponentType<
  Omit<React.ComponentPropsWithRef<typeof Select>, "options" | "placeholder" | "title" | "enableSearch">
> = (props) => (
  <Select options={COUNTRY_SELECT_OPTIONS} placeholder="Select country" title="Country" enableSearch {...props} />
)
