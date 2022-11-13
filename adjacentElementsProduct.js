function solution(inputArray) {
    maxSonuc = inputArray[0] * inputArray[1]  
    for(let i = 0; i <= inputArray.length -1; i++){
        sonuc = inputArray[i] * inputArray[i+1]
        if(sonuc > maxSonuc) maxSonuc = sonuc
    return maxSonuc
    }
}
solution([3, 6, -2, -5, 7, 3])