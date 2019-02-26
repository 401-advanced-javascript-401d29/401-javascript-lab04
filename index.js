// people who have lab 4 complete - Eric, Rick, Skylar, H'liana
// video from monday snow night

//TODO make an array of three names
let names = ['bert', 'ernie', 'oscar'];


//TODO Split the names in the array into individual characters and converts to UTF-16 integers
let split = function(array) {
    let splitArray = [];
    let charCodeArray = [];
    for(let i = 0 ; i < array.length ; i++){
        splitArray.push(array[i].split(''));
        for(let j = 0 ; j < array[i].length ; j++){
           charCodeArray.push(array[i].charCodeAt(j));
        }
    }
    console.log(splitArray);
    console.log(charCodeArray);
}

split(names);
