// For 1
// let k, n;
// for(let i=1; i<=n; i++){
//     console.log(k);
// }

// For 2
// let a, b, s=0;
// for(let i=a; i<=b; i++){
//     console.log(i);
//     s++;
// }
// console.log(`a dan b gacha ${s} ta son bor(a va b bilan birga)`);

// For 3
// let a, b, s = 0;
// for (let i = b - 1; i > a; i--) {
//     console.log(i);
//     s++;
// }
// console.log(`a dan b gacha ${s} ta son bor(a va b dan tashqari)`);

// For 4
// let kanfet_narxi, vazni=10, s=1;
// for(let i=1; i<=vazni; i++){
//     s=i*kanfet_narxi;
//     console.log(`${i} kg kanfet ${s} so'm turadi`);
// }

// For 5
// let kanfet_narxi=100, vazni=1, s=1;
// for(let i=0.1; i<=vazni; i+=0.1){
//     s=i*kanfet_narxi;
//     console.log(`${i} kg kanfet ${s} so'm turadi`);
// }

// For 6
// let kanfet_narxi, vazni=2, s=1;
// for(let i=1.2; i<=vazni; i+=0.2){
//     s=i*kanfet_narxi;
//     console.log(`${i} kg kanfet ${s} so'm turadi`);
// }

// For 7
// let a,b,sum=0;
// for(let i=a; i<=b; i++){
//     sum+=i;
// }
// console.log(`${a} dan ${b} gacha butun sonlar yig'indisi ${sum} ga teng!`);

// For 8
// let a=1,b=4,p=1;
// for(let i=a; i<=b; i++){
//     p*=i;
// }
// console.log(`${a} dan ${b} gacha butun sonlar ko'paytmasi ${p} ga teng!`);

// For 9
// let a=1, b=3, sum = 0;
// for (let i = a; i <= b; i++) {
//     sum += i**2;
// }
// console.log(`${a} dan ${b} gacha butun sonlar kvadratining yig'indisi ${sum} ga teng!`);

// For 10
// let n, sum=0;
// for (let i = 1; i <= n; i++) {
//     sum += 1 / i;
// }
// console.log(sum);

// For 11
// let n=2, sum=0;
// for(let i=n; i<=2*n; i++){
//     sum+=i**2;
// }
// console.log(sum);

// For 12
// let n, p=0, q=1;
// for(let i=1; i<=n; i++){
//     p=(1+i/10);
//     q*=p;
// }
// console.log(q);

// For 13
// let n, p=0, q=0;
// for(let i=1; i<=n; i+=2){
//     p+=(1+i/10);
// }
// for(let j=2; j<=n; j+=2){
//     q+=(-1-j/10);
// }
// console.log(p+q);

// For 14
// let n, sum=0;
// for(let i=1; i<=(2*n-1); i+=2){
//     sum+=i;
//     console.log(sum);
// }

// For 15
// let n, a, s=1;
// for(let i=1; i<=n; i++){
//     s*=a;
// }
// console.log(s);

// For 16
// let n, a, s = 1;
// for(let i=0; i<=n; i++){
//     s*=a;
//     console.log(s);
// }

// For 17
// let n, a, s = 1, sum = 0;
// for (let i = 0; i <= n; i++) {
//     s *= a;
//     sum+=s;
//     console.log(s);
// }
// console.log(sum + `  Yig'indi`);

// For 18
// let n, a, s = 1, sum = 0;
// for (let i = 0; i <= n; i++) {
//     s *= a;
//     sum+=((-1)**i)*s;
//     console.log(s);
// }
// console.log(sum + `  Yig'indi`);

// For 19
// let n=3, fa=1;
// for(let i=1; i<=n; i++){
//     fa*=i;
// }
// console.log(`${n} faktorial ${fa} soniga teng`);

// For 20
// let n=3, fa=1, sum=0;
// for(let i=1; i<=n; i++){
//     fa*=i;
//     sum+=fa;
// }
// console.log(sum);

// For 21
// let n=3, fa=1, sum=0;
// for(let i=1; i<=n; i++){
//     fa*=i;
//     sum+=1/fa;
// }
// console.log(sum);

// For 22


//! Geometrik figuralar

//? Kvadrat

// let n=5;
// let str=" ";
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//         str += "*";
//         str += " ";
//     }
//     console.log(str);
//     str = " ";
// }

//? Ramka markazida "A" harfi bor

// let n=7, str="";
// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//         if(i===1||i===n){
//             str+="*";
//         }
//         else {
//             if(j===1||j===n){
//                 str+="*";
//             }
//             else {
//                 if(i===n/2+0.5 && j===n/2+0.5){
//                     str+="A";
//                 }
//                 else {
//                     str+=" ";
//                 }
//             }
//         }
//     }
//     console.log(str);
//     str="";
// }

//? Diogonal 1

// let  str = "";
// for (let i = 1; i <= 6; i++) {
//     for (let j = 1; j <= 6; j++) {
//         if (i === 1 || i === 6) {
//             str += "*";
//         }
//         else if (i === 2) {
//             if (j === 1 || j === 5 || j === 6) {
//                 str += "*";
//             } else {
//                 str += " ";
//             }
//         }
//         else if(i===3){
//             if(j===1||j===4||j===6){
//                 str+="*";
//             }else{
//                 str+=" ";
//             }
//         }
//         else if(i===4){
//             if(j===1||j===3||j===6){
//                 str+="*";
//             }else{
//                 str+=" ";
//             }
//         }
//         else if(i===5){
//             if(j===1||j===2||j===6){
//                 str+="*";
//             }else{
//                 str+=" ";
//             }
//         }
//     }
//     console.log(str);
//     str="";
// }

//? Diogonal 2

// let  str = "";
// for (let i = 1; i <= 7; i++) {
//     for (let j = 1; j <= 7; j++) {
//         if (i === 1 || i === 7) {
//             str += "*";
//         }
//         else if (i === 2||i===6) {
//             if (j === 1 || j === 2 || j === 6||j===7) {
//                 str += "*";
//             } else {
//                 str += " ";
//             }
//         }
//         else if(i===3||i===5){
//             if(j===1||j===3||j===5||j===7){
//                 str+="*";
//             }else{
//                 str+=" ";
//             }
//         }
//         else if(i===4){
//             if(j===1||j===4||j===7){
//                 str+="*";
//             }else{
//                 str+=" ";
//             }
//         }
//     }
//     console.log(str);
//     str="";
// }

//? Archa 

// let str = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 7; j++) {
//         if (i === 1) {
//             if (j === 4) {
//                 str += "*";
//             }
//             else {
//                 str += " ";
//             }
//         }
//         else if (i === 2) {
//             if (j >= 3 && j <= 5) {
//                 str += "*";
//             }
//             else {
//                 str += " ";
//             }
//         }
//         else if (i === 3) {
//             if (j >= 2 && j <= 6) {
//                 str += "*";
//             }
//             else {
//                 str += " ";
//             }
//         }
//         else if (i === 4) {
//             if (j >= 1 && j <= 7) {
//                 str += "*";
//             }
//             else {
//                 str += " ";
//             }
//         }
//         else {
//             if (j >= 3 && j <= 5) {
//                 str += "*";
//             }
//             else {
//                 str += " ";
//             }
//         }
//     }
//     console.log(str);
//     str = "";
// }

//? Teskari piramida

// let str = "";
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 7; j++) {
//         if (i === 1) {
//             if (j >= 1 && j <= 7) {
//                 str += " ";
//             }
//             else {
//                 str += "*";
//             }
//         }
//         else if (i === 2) {
//             if (j >= 2 && j <= 6) {
//                 str += " ";
//             }
//             else {
//                 str += "*";
//             }
//         }
//         else if (i === 3) {
//             if (j >= 3 && j <= 5) {
//                 str += " ";
//             }
//             else {
//                 str += "*";
//             }
//         }
//         else if (i === 4) {
//             if (j === 4) {
//                 str += " ";
//             }
//             else {
//                 str += "*";
//             }
//         }
//     }
//     console.log(str);
//     str = "";
// }