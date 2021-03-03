const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`)
  } else {
    console.log(`❌❌❌Assertion failed: ${actual} !=== ${expected}`)
  }
}

const tail = (arr) => {
  return arr.slice(1);
}

const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words);
assertEqual(words.length, 3)
// assertEqual('Lighthouse Labs', 'Bootcamp');
// assertEqual(1, 1);