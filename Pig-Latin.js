function translatePigLatin(str) {
    // Declare vars
    var str1stChar = str.substr(0, 1);
    var str1st3Chars = str.substr(0, 3);
    var str1st2Chars = str.substr(0, 2);
    var strSplit;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var twoCharConsonantClusters = ['bl', 'br', 'sc', 'sk', 'cl', 'cr', 'dr', 'sm', 'fl', 'fr', 'sn', 'gl', 'gr', 'sp', 'pl', 'pr', 'sl', 'tr', 'th'];
    var threeCharConsonantClusters = ['scr', 'spl', 'spr', 'str', 'sch', 'scr', 'sph'];
    // Check str first character for a vowel and handle
    if (vowels.indexOf(str1stChar) !== -1) {
        str = str + "way";
        return str;
        // Check str first 3 characters for a 3 char consonant cluster and handle
    } else if (threeCharConsonantClusters.indexOf(str1st3Chars) !== -1) {
        strSplit = str.split(str1st3Chars);
        strSplit.push(str1st3Chars + "ay");
        str = strSplit.join('');
        return str;
        // Check str first 2 characters for a 2 char consonant cluster and handle
    } else if (twoCharConsonantClusters.indexOf(str1st2Chars) !== -1) {
        strSplit = str.split(str1st2Chars);
        strSplit.push(str1st2Chars + "ay");
        str = strSplit.join('');
        return str;
        // Handle single consonant
    } else {
        strSplit = str.split(str1stChar);
        strSplit.push(str1stChar + "ay");
        str = strSplit.join('');
        return str;
    }
}
// Examples
translatePigLatin("algorithm"); // returns "algorithmway"
translatePigLatin("consonant"); // returns "onsonantcay"
translatePigLatin("glove"); // returns "oveglay"
translatePigLatin("string"); // returns "ingstray"