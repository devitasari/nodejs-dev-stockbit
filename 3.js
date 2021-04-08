// only refactor code without revise logic

function findFirstStringInBracket(str) {
  let indexFirstBracketFound = str.indexOf("(");
  let wordsAfterFirstBracket = str.substr(indexFirstBracketFound + 1);
  let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
  if (
    str.length > 0 &&
    indexFirstBracketFound >= 0 &&
    wordsAfterFirstBracket &&
    indexClosingBracketFound >= 0
  ) {
    return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
  }
  return "";
}

console.log(findFirstStringInBracket(`q(stmj)er`)); //output: stmj
console.log(findFirstStringInBracket(`q(stmjer`)); //output: ''
console.log(findFirstStringInBracket(`qstm)jer`)); //output: ''
console.log(findFirstStringInBracket(`q()stmjer`)); //output: ''


// another solution IF function should have output ONLY the first string/abjad in bracket
function findFirstStringInBracket2(str) {
  let indexFirstBracketFound = str.indexOf("(");
  let wordsAfterFirstBracket = str.substr(indexFirstBracketFound + 1);
  let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
  if (
    str.length > 0 &&
    indexFirstBracketFound >= 0 &&
    wordsAfterFirstBracket &&
    indexClosingBracketFound >= 0
  ) {
    return wordsAfterFirstBracket.substring(0, indexClosingBracketFound)[0];
  }
  return "";
}

console.log(findFirstStringInBracket2(`q(stmj)er`)); //output: s
console.log(findFirstStringInBracket(`q(stmjer`)); //output: ''
console.log(findFirstStringInBracket(`qstm)jer`)); //output: ''
console.log(findFirstStringInBracket(`q()stmjer`)); //output: ''
console.log(findFirstStringInBracket(`q( )stmjer`)); //output: ' '
