function print_int(n: number): void {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
print_int(5); // Affiche 1 à 5

function sum_int(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sum_int(5)); 

function mult_table(n: number): void {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
mult_table(3); 


function factorial(n: number): number {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); 

function power(x: number, n: number): number {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}
console.log(power(2, 3)); 

function sum_even(n: number): number {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(sum_even(10)); 

function is_prime(n: number): boolean {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(is_prime(13)); 
console.log(is_prime(12));  



function pgcd(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
console.log(pgcd(24, 32)); 

function is_perfect(n: number): boolean {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
}
console.log(is_perfect(6)); 


