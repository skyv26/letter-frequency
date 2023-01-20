# Letter Frequency

Given a string, calculate the frequency of each character.

All characters should be counted. This includes lower and upper case letters, digits, whitespace, special characters, or any other distinct characters.

Write a function to count the occurrences of each character in a given string.

The function should return a 2D array with each of the elements in the following form: `['char', freq]`. The character should be a string with a length of 1, and frequency is a number denoting the count.

For example, given the string "ab", your function should return `[['a', 1], ['b', 1]]`.

Submit a pull request to the main branch with your solution. Do not modify the tests. Once you have created a PR with passing tests, then you have successfully completed the exercise.

const string = 'My name is Aakash';
Output: [['M': 1], ['y': 1], ['n': 1], ['a': 3], ['m': 1], ['e': 1], ['i': 1], ['s': 2], ['A': 1], ['k': 1], ['h': 1], [' ': 3]]

PseudoCode:

1. Create an empty object like {}.
2. I will iterate over the string and create an object of characters in string.
3. Iterate over the array and increment the count of the characters in array.
4. 'ABCAB' {'A': 2, 'B': 2, 'C': 1, }
5. as a output: [['A': 2], ['B': 2], ['C': 1]]