
/* bulding 10 florr
2 lift 
test lift 


*/

// bilding a application  filter datbase with differeent age

// need to filter based on age. 

// 

//  const arr=[10, 20, 50, 40, 50, 60, 22]
//  function filter(age){
//     if(age>60){
//         console.log('elder than 50 yrs ')
//     }
//     else if (age<60){
//         console.log('elder than 50 yrs ')
//     }
//  }

//  arr.map(filter()).filter


// Sample user data
const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 35 }
  ];
  
  // Page function that takes users and a filter function
  function page(users, filterFunction) {
    return users.filter(filterFunction);
  }
  
  // Filter function to filter users by age
  function filterByAge(minAge) {
    return function(user) {
      return user.age >= minAge;
    };
  }
  
  // Using the page function with a filter to get users 30 years or older
  const filteredUsers = page(users, filterByAge(30));
  
  console.log(filteredUsers);
  // Output: [{ name: 'Jane', age: 30 }, { name: 'Bob', age: 35 }]
 //  ------------------

// Page function that takes an array of ages and a filter function
function filterAges(ages, filterFunction) {
    return ages.filter(filterFunction);
  }
  
  // Filter function to filter ages by a minimum age
  function filterByMinAge(minAge) {
    return function(age) {
      return age >= minAge;
    };
  }
  
  // Example usage:
  // User passes an array of ages
  const ages = [18, 25, 30, 14, 40, 17];
  
  // User passes a filter function that filters ages 18 and older
  const filteredAges = filterAges(ages, filterByMinAge(18));
  
  console.log(filteredAges);
  // Output: [18, 25, 30, 40]
  