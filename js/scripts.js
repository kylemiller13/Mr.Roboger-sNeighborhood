

//Business logic

let str = "18963232";
function beep(str){
  const strSplit = str.split("");
  const newArray = [];
  // const firstResult =  str.replace(1,"Beep!")
  for (let i = 0; i < str.length; i++){
    str[i].replace(1, "Beep!");
    str[i].replace(2, "Bloop!");
    str[i].replace(3 || 32, "Won't you be my neighbor!");
  }
}