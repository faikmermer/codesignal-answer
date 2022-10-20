function solution(year) {
    yy = parseInt( year / 100);
    while (year >= 1){
        if (year % 100 == 0) {
            return yy
        } 
        else{
        return yy += 1
        }
    } 
    return yy;
}

solution(1905)