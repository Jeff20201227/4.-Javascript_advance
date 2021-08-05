'use strict';

let str = '\'Eris (minor planet designation 136199 Eris) is the most mass\'ive and second-largest known dwarf planet in the Solar System\'.';
let regExp = new RegExp('\'','ig');
console.log(str.replace(/\'/ig,'\"'));     // "Eris (minor planet designation 136199 Eris) is the most mass"ive and second-largest known dwarf planet in the Solar System".

let str2 = str.replace(/\'/ig,'\"');
let str3 = str2.replace(/\b\"\b/ig,'\'');
console.log(str3);

let str4 = '\'Pluton aren\'t the nine planet in the Solar System\'.';
console.log(str4);






