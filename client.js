const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

// let atticus = employees[0];
// getEmployeeBonus(atticus);

for(let employee of employees){
  // employee = { name: 'Mayella', employeeNumber: 'asdfds', ...}
  let bonusInfo = getEmployeeBonus(employee);
  console.log(bonusInfo);
}

function getEmployeeBonus(object){
  // console.log(object)
  let newObject = {
  name: object.name,
  bonusPercentage: 
 
  }
  
  return newObject;
}



// add(3, 5);

// function add(n1, n2) {
//   console.log(n1, n2)
// }

// for (employee of employees){


 

  function calculateBonus(){
    let bonusPercentage = 0;
    
    
    if(reviewRating <= 2){
      console.log('no bonus')
  }
    else if(reviewRating === 3){
      bonusPercentage = 0.04
  }
    else if(reviewRating === 4){
      bonusPercentage = 0.06
  }
    else if(reviewRating === 5){
      bonusPercentage = 0.1
  }  
    
  if(employeeNumber.length === 4){
      bonusPercentage += 0.05
    }
  
  if(annualSalary> 65,000){
    bonusPercentage = 0.01
  }
  if (bonusPercentage > .13 || bonusPercentage < 0){
    bonusPercentage = 0;
  }
  return bonusPercentage
}
// }
