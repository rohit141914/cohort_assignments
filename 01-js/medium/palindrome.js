/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let i=0;
  let e=(str.length)-1;
  while(i<e){
    let a=str.charCodeAt(i);
    let b=str.charCodeAt(e);
    if(((a>=65 && a<91)||(a>96 &&a<123))&&((b>=65 && b<91)||(b>96 && b<123))){
      if(str[i].toLowerCase()!=str[e].toLowerCase()){
        return false;
      }
      i++;
      e--;
    }
    else if(!((a>=65 && a<91)||(a>96 &&a<123))){
      i++;
    }
    else{
      e--;
    }
  }
  return true;
}
module.exports = isPalindrome;
