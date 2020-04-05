 
function verifyHigher(array) {
    let higher = 0;
    for (index in array) {
      if (array[index] > higher) higher = index;
    }
    return higher;
  }
  let arrTest = [2, 3, 6, 7, 10,1];
  console.log(verifyHigher(arrTest));