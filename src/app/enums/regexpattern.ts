export enum RegexPattern {
    // 	40.9	0	0	0	0	0	0	 		40.9 / 40.9
    // dressage | XC | SJ | jumpoff | final total / jumpoff final total
    EventingOlympicJO = '^\\t?([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+(.*?)$',

    // 	38	0	2.4	0	1	100,000 GBP		41.4
    // dressage | XC | SJ | prize money | final total
    Eventing = '^\\t?([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d\\.]*?)\\s+([\\d,\\.]*?\\s[A-Z]{3})?\\s+\\s+(.*?)$',

    // 77.900	78.200	77.100	76.300	77.800		77.460
    // 5 letter judges | final average
    // does not include start of line, so accommodates extra judges or prize money
    Dressage = '\\s+[\\d\\.]*?\\s+[\\d\\.]*?\\s+[\\d\\.]*?\\s+[\\d\\.]*?\\s+[\\d\\.]*?\\s+([\\d\\.]*?)$',

    // 125,000 EUR		4/73.60/0/39.80
    // prize money, optional | scores
    Jumping = '([\\d,]*\\s[A-Z]{3})?\\t\\t(.*)$'
}
