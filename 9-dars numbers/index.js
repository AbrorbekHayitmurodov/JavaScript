// Random Generator
// const getGenerator = (min, max)=>{
//     let number=(Math.random()*(max-min+1))+min;
//     console.log(parseInt(number));
// }
// getGenerator(10, 34);

// cbrt
// const myCbrt= (n) => console.log(n ** (1/3));
// myCbrt(8);

// pow
// let s=1;
// const myPow=(n, m)=> {
//     for (let i=1; i<=m; i++){
//         s*=n;
//     };
//     console.log(s);
// }
// myPow(2, 6);

// abs
// const myAbs=(n)=> {
//     if (n<0 || n == -0) {
//         n= -n;
//         console.log(n);
//     }
//     else console.log(n);
// }
// myAbs(-0);

// sign
// const mySign=(n)=>{
//     if (n<0) console.log(-1);
//     else if(n=-0) console.log(-0);
//     else if(n=0) console.log(n);
//     else if (n>0) console.log(1);
// }
// mySign(-0);    // -0 ni chiqarmayapti!

// floor
// const myFloor= (n) => console.log(parseInt(n));
// myFloor(2.6);

// ceil
// const myCeil= (n) => console.log(parseInt(n)+1);
// myCeil(2.6);

// round
// const myRound=(n)=>{
//     let a=parseInt(n);
//     if(n>0){
//     b=n-a;
//     if(b<0.5) console.log(a);
//     else console.log(a+1);}
//     else {
//         b=(-n)+a;
//         if(b<0.5) console.log(a);
//         else console.log(a-1);
//     }
// }
// myRound(2.55); // 3
// myRound(2.4); // 2
// myRound(-2.55); // -3
// myRound(-2.4); // -2


// Numbers

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// Format
// let n=1_000_000;
// console.log(n);

// Daraja
// let n=1000;
// let m=1e3;
// console.log(n);
// console.log(m);

// parseInt // parseFloat

// istalgan sanoq tizimi => 10  (2 => 36)
// let n=17;
// n=parseInt(n, 16);
// console.log(n);

// 10 => istalgan sanoq tizimiga o'tish
// let n=12;
// n=+n.toString(2);
// console.log(n);

// Yaxlitlash
// toFixed, toPrecision
// let n=124.56548;
// n=n.toFixed(3);
// n=n.toPrecision(3);
// console.log(n);

// Issue
// console.log(0.3+0.5);
// console.log(0.1+0.2);

// Object is => ===
// let n=12, m=12;
// console.log(Object.is(n, m));

// isNaN  => NaN likka tekshirish
// console.log(isNaN(NaN)); // true
// console.log(isNaN(13)); // false
// console.log(isNaN(true)); // false
// console.log(isNaN(null)); // false
// console.log(isNaN(undefined)); // true
// console.log(isNaN("webbrain")); // true
// console.log(isNaN({ name: "webbrain" })); // true
// console.log(isNaN(["webbrain"])); // true

// Math => PI, E, LN2, log, sqrt, pow, abs, sin, cos, tan, 1/tan, floor, ceil, trunc, round, random [0; 1), min, max, sign
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.LN2);
// console.log(Math.abs(-5));
// console.log(Math.sqrt(16));
// console.log(Math.cos(30));
// console.log(Math.min(2,1,-3,-2));
// console.log(Math.max(2,1,-3,-1,-3));
// console.log(Math.sin(30));
// console.log(Math.ceil(2.1));
// console.log(Math.floor(2.9));
// console.log(Math.trunc(2.8));
// console.log(Math.round(2.55));
// console.log(Math.round(2.45));
// console.log(Math.sign(-55));
// console.log(Math.sign(55));
// console.log(Math.sign(0));
// console.log(Math.sign(-0));

// Random [0; 1)

// console.log(Math.random());

// [0; 20]
// console.log(parseInt(Math.random()*21));

// [10; 30]
// console.log(parseInt(Math.random()*21+10));