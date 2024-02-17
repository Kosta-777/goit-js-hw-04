function calcAverageCalories(days) {
  
  let sum = 0;
  
 
  console.log(days);


for (const key of days) {
sum += key.calories / days.length;}
  
  
  return sum;




}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

