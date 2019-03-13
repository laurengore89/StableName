export enum RegexPattern {
    // 	40.9	0	0	0	0	0	0	 		40.9 / 40.9
    // dressage | XC | SJ | jumpoff | final total / jumpoff final total
    Olympic = '^\\t?([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+(.*?)$',

    // 	38	0	2.4	0	1	100,000 GBP		41.4
    // dressage | XC | SJ | prize money | final total
    Badminton = '^\\t?([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d,\\.]*?\\s[GBPEUR])?\\s+\\s+(.*?)$',

    //  85.100	84.500	86.900	86.800	85.300	82.900	84.000		85.071
    // 7 letter judges | final average
    OlympicGP2016 = '^\\s?\\t?([\\d\\.]*?)\\t([\\d\\.]*?)\\t([\\d\\.]*?)\\t([\\d\\.]*?)\\t([\\d\\.]*?)\\t([\\d\\.]*?)\\t([\\d\\.]*?)\\s\\s(.*?)$',

    //  75.625	76.667	75.000	77.083	77.708		76.417
    // 5 letter judges | final average
    OlympicGP2008 = '^\\s?\\t?([\\d\\.]*?)\\t([\\d\\.]*?)\\t([\\d\\.]*?)\\t([\\d\\.]*?)\\t([\\d\\.]*?)\\s\\s(.*?)$',

    // 2,700 EUR	77.900	78.200	77.100	76.300	77.800		77.460
    // prize money | 5 letter judges | final average
    GrandPrixDressage = '^\\s*[\\d\\.]*?\\s[GBPEUR]*\\s+[\\d\\.]*?\\s+[\\d\\.]*?\\s+[\\d\\.]*?\\s+[\\d\\.]*?\\s+[\\d\\.]*?\\s+([\\d\\.]*?)$'
}
