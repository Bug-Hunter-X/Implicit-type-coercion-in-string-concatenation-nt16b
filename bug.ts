function combineStrings(str1: string, str2: string): string {
  return str1 + str2;
}

let combined = combineStrings(123, "hello"); //No error from TS compiler
console.log(combined); //Output: 123hello