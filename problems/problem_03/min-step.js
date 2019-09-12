const minStep = input => {
  // put your code here !!
  let minStepOddPlus = 0;
  let minStepOddMinus = 0;
  let minStepEven = 0;
  console.log(input);
  if((input % 2) == 0){
    if(input == 2){
      minStepEven += 1;
    }
    else if(input / 2 != 1){
      minStepEven += minStep(input / 2);
    }
  }
  else if (input != 1){
    minStepOddPlus += 1;
    minStepOddMinus += 1;
    minStepOddPlus += minStep((input+1) / 2);
    minStepOddMinus += minStep((input-1) / 2);
  }
  else if (input == 1){
    return 1;
  }
  if(minStepEven == 0){
    minStepEven = 9007199254740991;
  }
  if(minStepOddPlus == 0){
    minStepOddPlus = 9007199254740991;
  }
  if(minStepOddMinus == 0){
    minStepOddMinus = 9007199254740991;
  }
  return Math.min(minStepEven, minStepOddPlus, minStepOddMinus);
};
module.exports = { minStep };
