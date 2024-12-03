// List all numbers in left column and right column
// Then subtract left from right and add all numbers
//  sort? left then right?
const fs = require('fs')
// fs.readFile('./puzzleInput.txt', 'utf8', (e,d)=>{
//     const arrayOfEntries = d.split('\n');
//     const leftArray = [];
//     const rightArray = [];
//     // One loop
//     arrayOfEntries.map((e, i) => {
//         const pairOfNumbers = e.split('   ');
//         leftArray.push(Number(pairOfNumbers[0]));
//         rightArray.push(Number(pairOfNumbers[1]));
//     })
//     // Two here
//     const leftArraySorted = leftArray.sort();
//     const rightArraySorted = rightArray.sort();
//     let total = 0;
//     // Three
//     leftArraySorted.forEach((e, i)=> {
//         // console.log(rightKeysArray[i])
//         console.log(e)
//         const difference = e > rightArraySorted[i] ? e - rightArraySorted[i] : rightArraySorted[i] - e;
//         total += difference;
//     })
//     // 3n?
//     // Anyway to reduce this?
//     console.log(total);
//     // Repeated values, cant use this
// })

// Second part
fs.readFile('./puzzleInput.txt', 'utf8', (e,d)=>{
    const arrayOfEntries = d.split('\n');
    const leftArray = [];
    const rightArray = [];

    arrayOfEntries.map((e, i) => {
        const pairOfNumbers = e.split('   ');
        leftArray.push(Number(pairOfNumbers[0]));
        rightArray.push(Number(pairOfNumbers[1]));
    })

    const appearsThisMany = {};

    rightArray.forEach((e, i)=> {
        // console.log(rightKeysArray[i])
        if(!appearsThisMany[e]){
            appearsThisMany[e] = 0;
        } 
        if(leftArray.includes(e)){
            appearsThisMany[e] = appearsThisMany[e] + 1
        }
    })
    let total = 0;
    for(let key in appearsThisMany){
        total += appearsThisMany[key] * key;
    }
    console.log(total)
})
