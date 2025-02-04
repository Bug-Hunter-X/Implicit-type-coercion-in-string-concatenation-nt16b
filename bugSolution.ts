function combineStrings(str1: string, str2: string): string {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new Error('Both arguments must be strings');
  }
  return str1 + str2;
}

// Example usage:

try {
  let combined = combineStrings("hello", "world");
  console.log(combined); //Output: helloworld
  let combined2 = combineStrings(123, "hello"); //Throws an error
} catch (error) {
  console.error(error.message); // Output: Both arguments must be strings
}

//Alternative Solution using template literals to prevent this issue
function combineStringsWithTemplateLiterals(str1: any, str2: any): string {
  return `${str1}${str2}`;
}
console.log(combineStringsWithTemplateLiterals(123, "hello")); //Output: 123hello
console.log(combineStringsWithTemplateLiterals("hello", "world")); //Output: helloworld