function promediodeEdad (users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  }
  
  let Carlos = { name: "Carlos", age: 25 };
  let Fernando = { name: "Fernando", age: 30 };
  let Sarai = { name: "Sarai", age: 29 };
  
  let arr = [ Carlos, Fernando, Sarai ];
  
  console.log( promediodeEdad (arr) ); // 28