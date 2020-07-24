var input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];

for (let i = 0; i < input.length; i++){
  for (let j = 0; j < vowels.length; j++){
    if (input[i] === vowels[j]) {
        if (input[i] === 'e') {
          resultArray.push('e'); 
          }  if (input[i] === 'u') {
           resultArray.push('uu');
      } else { resultArray.push(input[i]);
    }
  } 
}
};
console.log(resultArray.join('').toUpperCase());
