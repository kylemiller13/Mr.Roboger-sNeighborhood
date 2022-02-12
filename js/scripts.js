

//Business logic

function rogers(num){
  let orginalArray = [];
  for (let i = 0; i <= num; i++){
    orginalArray.push(i);
  };
  const newArray = [];
  orginalArray.forEach(function(num) {
    if (num.toString().includes(3)){
      newArray.push("Won't you be my neighbor?");
    }else if (num.toString().includes(2)) {
      newArray.push("Bloop!");
    } else if (num.toString().includes(1)){
      newArray.push("Beep!")
    }else{
      newArray.push(num);
    }
  });
  return newArray;
}