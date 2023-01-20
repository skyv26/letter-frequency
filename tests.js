const letterFrequency = require('./letter-frequency')
const assert = require('assert')

describe('Tests', function () {
  it('letterFrequency should be a function.', function () {
    assert(typeof letterFrequency === 'function')
  })
  it('letterFrequency("Not all that Mrs. Bennet, however") should return an array.', function () {
    assert(Array.isArray(letterFrequency('Not all that Mrs. Bennet, however')))
  })
  it('letterFrequency("Not all that Mrs. Bennet, however") should return [[" ", 5], [", ", 1], [".", 1], ["B", 1], ["M", 1], ["N", 1], ["a", 2], ["e", 4], ["h", 2], ["l", 2], ["n", 2], ["o", 2], ["r", 2], ["s", 1], ["t", 4], ["v", 1], ["w", 1]].', function () {
    assert.deepEqual(letterFrequency('Not all that Mrs. Bennet, however'), [
      [' ', 5],
      [',', 1],
      ['.', 1],
      ['B', 1],
      ['M', 1],
      ['N', 1],
      ['a', 2],
      ['e', 4],
      ['h', 2],
      ['l', 2],
      ['n', 2],
      ['o', 2],
      ['r', 2],
      ['s', 1],
      ['t', 4],
      ['v', 1],
      ['w', 1]
    ])
  })
  it('letterFrequency("daughters, could ask on the ") should return [[" ",5],[",",1],["a",2],["c",1],["d",2],["e",2],["g",1],["h",2],["k",1],["l",1],["n",1],["o",2],["r",1],["s",2],["t",2],["u",2]].', function () {
    assert.deepEqual(letterFrequency('daughters, could ask on the '), [
      [' ', 5],
      [',', 1],
      ['a', 2],
      ['c', 1],
      ['d', 2],
      ['e', 2],
      ['g', 1],
      ['h', 2],
      ['k', 1],
      ['l', 1],
      ['n', 1],
      ['o', 2],
      ['r', 1],
      ['s', 2],
      ['t', 2],
      ['u', 2]
    ])
  })
  it('letterFrequency("husband any satisfactory description") should return [[" ", 3], ["a", 4], ["b", 1], ["c", 2], ["d", 2], ["e", 1], ["f", 1], ["h", 1], ["i", 3], ["n", 3], ["o", 2], ["p", 1], ["r", 2], ["s", 4], ["t", 3], ["u", 1], ["y", 2]].', function () {
    assert.deepEqual(letterFrequency('husband any satisfactory description'), [
      [' ', 3],
      ['a', 4],
      ['b', 1],
      ['c', 2],
      ['d', 2],
      ['e', 1],
      ['f', 1],
      ['h', 1],
      ['i', 3],
      ['n', 3],
      ['o', 2],
      ['p', 1],
      ['r', 2],
      ['s', 4],
      ['t', 3],
      ['u', 1],
      ['y', 2]
    ])
  })
  it('letterFrequency("in various ways--with barefaced") should return [[" ", 3], ["-", 2], ["a", 4], ["b", 1], ["c", 1], ["d", 1], ["e", 2], ["f", 1], ["h", 1], ["i", 3], ["n", 1], ["o", 1], ["r", 2], ["s", 2], ["t", 1], ["u", 1], ["v", 1], ["w", 2], ["y", 1]].', function () {
    assert.deepEqual(letterFrequency('in various ways--with barefaced'), [
      [' ', 3],
      ['-', 2],
      ['a', 4],
      ['b', 1],
      ['c', 1],
      ['d', 1],
      ['e', 2],
      ['f', 1],
      ['h', 1],
      ['i', 3],
      ['n', 1],
      ['o', 1],
      ['r', 2],
      ['s', 2],
      ['t', 1],
      ['u', 1],
      ['v', 1],
      ['w', 2],
      ['y', 1]
    ])
  })
  it('letterFrequency("distant surmises; but he eluded") should return [[" ", 4], ["; ", 1], ["a", 1], ["b", 1], ["d", 3], ["e", 4], ["h", 1], ["i", 2], ["l", 1], ["m", 1], ["n", 1], ["r", 1], ["s", 4], ["t", 3], ["u", 3]].', function () {
    assert.deepEqual(letterFrequency('distant surmises; but he eluded'), [
      [' ', 4],
      [';', 1],
      ['a', 1],
      ['b', 1],
      ['d', 3],
      ['e', 4],
      ['h', 1],
      ['i', 2],
      ['l', 1],
      ['m', 1],
      ['n', 1],
      ['r', 1],
      ['s', 4],
      ['t', 3],
      ['u', 3]
    ])
  })
  it('letterFrequency("last obliged to accept the second-hand,") should return [[" ", 5], [", ", 1], ["-", 1], ["a", 3], ["b", 1], ["c", 3], ["d", 3], ["e", 4], ["g", 1], ["h", 2], ["i", 1], ["l", 2], ["n", 2], ["o", 3], ["p", 1], ["s", 2], ["t", 4]].', function () {
    assert.deepEqual(letterFrequency('last obliged to accept the second-hand,'), [
      [' ', 5],
      [',', 1],
      ['-', 1],
      ['a', 3],
      ['b', 1],
      ['c', 3],
      ['d', 3],
      ['e', 4],
      ['g', 1],
      ['h', 2],
      ['i', 1],
      ['l', 2],
      ['n', 2],
      ['o', 3],
      ['p', 1],
      ['s', 2],
      ['t', 4]
    ])
  })
})
