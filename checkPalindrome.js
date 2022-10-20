function solution(inputString) {
    
    let  rever = inputString.toLowerCase().split('').reverse().join('');
    
    if (inputString == rever){
        return true;
    }
    else {
        return false;
    }
 }
 
 solution("aabaa")
 