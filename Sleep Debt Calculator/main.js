//users sleep to calculate each night
const getSleepHours = day => {
  if (day === 'Monday') {
    return 3;
  } else if (day === 'Tuesday') {
    return 2.5;
  } else if (day === 'Wednesday') {
    return 4;
  } else if (day === 'Thursday') {
    return 3; 
  } else if (day === 'Friday') {
    return 5;  
  } else if (day === 'Saturday') {
    return 8;
  } else if (day === 'Sunday') {
    return 5;
  }  
};

//getting total sleep hours that user actually slept for whole week
const getActualSleepHours = () =>
  getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');
  
  
//getting ideal sleep hours per day that user prefers, multiplying by 7 to account for all days in the week
const getIdealSleepHours = () => {
  const idealHours = 10;
  return idealHours * 7;
};


//calculating sleep debt
const actualSleepHours = getActualSleepHours();
const idealSleepHours = getIdealSleepHours();

const calculateSleepDebt = () => {
    
};

//output the result to the user in hours, by comparing actualSleepHours vs. idealSleepHours
if (actualSleepHours === idealSleepHours) {
  console.log('You got the perfect amount of sleep.');
} else if (actualSleepHours > idealSleepHours) {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + 'hour(s) more sleep than needed.');
} else { (actualSleepHours < idealSleepHours) 
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. You should get some rest.');
};


//start the program
calculateSleepDebt();
