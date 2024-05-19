const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let maxdis = mpg * fuelLeft;
  if (maxdis >= distanceToPump) {
    return true
  }else {
    return false
  }
};

function findAverage(array) {
    let sum = 0;
    if (array.length == 0 ) {
      return 0;
    }
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
      
    }
    let number = sum / array.length;
      return number;
}