

//Business logic

let str = "143231";
function beep(digit){
  const strSplit = str.split("");
  for (let i = 0; i < digit.length; i++){
    if (i === 1){
      str.replace(i, "Beep!"); 
    }else{
      return str;
    }
  }
}