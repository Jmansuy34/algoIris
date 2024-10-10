// a. hello function
function hello(): string {
    return "Hello World!";
}

// b. add function
function add(a: number, b: number): number {
    return a + b;
}

// c. mult function
function mult(a: number, b: number): number {
    return a * b;
}

// d. max_nb function
function max_nb(a: number, b: number): number {
    return a > b ? a : b;
}

// e. min_nb function
function min_nb(a: number, b: number): number {
    return a < b ? a : b;
}

// f. is_even function
function is_even(n: number): boolean {
    return n % 2 === 0;
}

// g. is_div function
function is_div(a: number, b: number): boolean {
    return a % b === 0;
}

// h. is_leap function
function is_leap(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// i. delta function
function delta(a: number, b: number, c: number): number {
    return b * b - 4 * a * c;
}

// j. root function
function root(a: number, b: number, c: number): number[] {
    const d = delta(a, b, c);
    if (d < 0) {
        return [];
    } else if (d === 0) {
        return [-b / (2 * a)];
    } else {
        return [
            (-b - Math.sqrt(d)) / (2 * a),
            (-b + Math.sqrt(d)) / (2 * a)
        ];
    }
}

// Appel de la fonction hello
console.log(hello());  

// Appel de la fonction add
console.log(add(5, 3));  

// Appel de la fonction mult
console.log(mult(5, 3));  

// Appel de la fonction max_nb
console.log(max_nb(5, 10));  

// Appel de la fonction min_nb
console.log(min_nb(5, 10));  

// Appel de la fonction is_even
console.log(is_even(4));  
console.log(is_even(7));  

// Appel de la fonction is_div
console.log(is_div(10, 5));  
console.log(is_div(10, 3));  

// Appel de la fonction is_leap
console.log(is_leap(2024));  
console.log(is_leap(2023));  

// Appel de la fonction delta
console.log(delta(1, -3, 2));  

// Appel de la fonction root
console.log(root(1, -3, 2));  
console.log(root(1, 2, 5));   
