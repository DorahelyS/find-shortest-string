function findShortestString(arr) {
  // I have an array ['cat','apple','dog','animal']
  // need to scan through each word aka element with for loop
  // starting at index 0 - first and iterate/loop through each word(el or i) until hitting the end & then move on to the next word
  // how do I spot the shortest word? can set it to the first index
  let shortestString = arr[0]
  for (i = 0; i < arr.length; i++) {
    // starting condition that determines how to find the shortest word
    // can do this by keeping track of previous word and current word ??
    // previous word is being tracked in line 6 so now only need to keep track of current word
    // arr[i] - keep track of the actual word while just i keeps track of only the index
    currentWord = arr[i]
    // if current word is shorter than the previous word  update shortestString to be currentWord
    if (currentWord.length < shortestString.length) {
      shortestString = currentWord
    }

  }
  return shortestString
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'test'");
  console.log("=>", findShortestString(['testtest','apple','notaword','animal', 'test']));

  //console.log("");

  //console.log("Expecting: 'hi'");
  //console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  //console.log("");

  //console.log("Expecting: 'lily'");
  //console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
