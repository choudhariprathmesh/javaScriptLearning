const bill = {  
    age: 22,
    city: "pune"   
  };  
  const freezeValue = Object.freeze(bill);  
  freezeValue.age = 33;  
  console.log(freezeValue.age);  