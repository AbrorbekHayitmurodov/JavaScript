// let s, p;
// const getTriangle = (a, b, c) => {
//     if (a < 0 || b < 0 || c < 0) return "Nomanfiy son kiriting!";
//     p = (a + b + c) / 2;
//     s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//     return s;
// };

// let l;
// const getCircle = (r) => {
//     if (r < 0) return "Musbat son kiriting!";
//     l = 2 * Math.PI * r;
//     return `Aylana uzunligi ${l} ga teng!`
// }
// let natija = getCircle(5);
// console.log(natija);

// let s;
// const getCircleS = (r) => {
//     if (r<0) return "Musbat son kiriting!";
//     s=Math.PI*r**2;
//     return `Doira yuzi ${s} ga teng`;
// }
// let natija = getCircleS(10);
// console.log(natija);

// let k = 0, n;
// const getMurakkab_son = (n) => {
//     if (n<0) return "Musbat son kiriting!";
//     if (n>0){
//         for(let i=1; i<=n; i++){
//             if(n%i==0) k++;
//         }
//     }
//     if (k>=3) return `${n} soni murakkab son!`;
//     return `${n} soni murakkab son emas!`
// }
// let natija=getMurakkab_son(6);
// console.log(natija);

// const getFizzBuzz = (n) => {
//     for (let i = 1; i <= n; i++) {
//         if (i % 15 == 0) console.log("FizzBuzz");
//         else if (i % 3 == 0) console.log("Fizz");
//         else if (i % 5 == 0) console.log("Buzz");
//         else console.log(i);
//     }
// }
// getFizzBuzz(30);