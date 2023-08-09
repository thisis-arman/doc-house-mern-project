// Problem 1 - tasif
function cubeNumber(number) {
  const type = typeof number;

  if (number && type !== "string") {
    const cube = Math.pow(number, 3);
    return cube;
  } else {
    return "Please pass Valid Number";
  }
}
const result = cubeNumber(4);
// console.log(result);

// Problem 2 - tasif

function matchFinder(string1, string2) {
  if (!string1 || !string2) {
    return "Please Pass Both Params its required";
  }

  // If the string1 contains the string2, return true
  if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}

const matched = matchFinder("John Doe", "ohn");
// console.log(matched)

// Problem 3 - tasif

function sortMaker(array) {
  if (array.length == 1) {
    return "Invalid Input: Array must have exactly two elements.";
  }

  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number" || array[i] < 0) {
      return "Invalid Number";
    }
  }

  if (array[0] === array[1]) {
    return "Equal";
  } else {
    if (array[0] > array[1]) {
      var temp = array[0];
      array[0] = array[1];
      array[1] = temp;
    }
    return array;
  }
}

const checked = sortMaker([5, 2]);
console.log(checked);

// Problem 4 - tasif

function findAddress(obj) {
  const streetName = obj.street || ("__");
  const houseNum = obj.house || ("__");
  const societyName = obj.society || ("__");
  const concat = streetName + "," + houseNum + "," + societyName;
  return concat;

}

const myObj = {
  street: 10,
  house: "15A",
  society: "Earth Perfect",
};

const address = findAddress(myObj);
console.log(address);

// Problem 5 - tasif


function canPay(array, totalDue) {
    
    if(array.length ==0){
        return "Empty Array"
    }
    let sum =0
    
    for (let index = 0; index < array.length; index++) {
        sum += array[index]
    
    }
    if(sum >= totalDue){
        console.log("Enjoy your Chips")
        return true
       }
        else{
            console.log("uh ho! Save more money")
            return false;
        }
   
}
const chips = canPay([2,4,8],10)
console.log(chips)