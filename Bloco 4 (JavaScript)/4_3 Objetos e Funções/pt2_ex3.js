 
function verifyLower(array) {
    let lower = 0;
    for (index in array) {
      if (array[index] < lower) lower = index;
    }
    return index;
  }
  let arrTest = [2, 4, 6, 7, -10, 0, -3];
  console.log(verifyLower(arrTest));