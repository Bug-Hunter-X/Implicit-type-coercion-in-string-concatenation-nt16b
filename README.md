# Implicit Type Coercion in TypeScript String Concatenation

This example demonstrates a potential issue with implicit type coercion in TypeScript when concatenating strings.  TypeScript does not throw an error if you try to concatenate a number with a string, but this behavior may be unexpected and lead to bugs.

The `combineStrings` function is designed to concatenate two strings. However, it does not explicitly check for string types. Because of this, when you pass a number (123) and a string ("hello"), TypeScript implicitly converts the number to a string. This results in a concatenated string ("123hello") rather than a type error.

This issue can be easily missed, and the resulting behavior may not be obvious, leading to harder-to-debug problems.

The solution demonstrates how to explicitly type check the arguments and also provide a more robust solution.
