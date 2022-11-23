function solution(statues) {
    
    statues.sort((a, b) => a - b )
    sonuc = 0
    for (let i=0; i < statues.length - 1; i ++){
        if(statues[i + 1] - statues[i] != 1){
            sonuc += statues[i + 1] - statues[i] - 1
        }
    }
    
    return sonuc   
}

solution([6, 2, 3, 8])
