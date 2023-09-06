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
