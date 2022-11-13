function solution(n) {
    let sifir_bir = (n == 0) ? None:
        (n == 1) ? 1:
        (Math.pow(n, 2) + Math.pow((n-1), 2));
    return sifir_bir
}
solution(3)