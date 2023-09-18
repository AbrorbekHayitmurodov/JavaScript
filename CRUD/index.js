// 1-misol

// let str = "Webbrain Academy";
// const getUpperLower = (string) => {
// let Upper=0, Lower=0;
// for (let item in string) {
//     if (string.charCodeAt(item)>=65 && string.charCodeAt(item)<=90) Upper++;
//     else if(string.charCodeAt(item) == 32) ;
//     else Lower++;
// }
// console.log(`${Upper} ta katta harf, ${Lower} ta kichik harf`);
// }
// getUpperLower(str);

// 2-misol

// let str = "Webbr@in Ac@demy";
// const getKuchukcha = (string) => {
//     for (let item in string) if (string.charCodeAt(item) == 64) string=string.replace(str[item], "a");
//     console.log(string);
// }
// getKuchukcha(str);

// 3-misol

// let str = "webbbraiiin accaddemmy";
// const getDublicate = (string) => {
//     let arr=string.split("");
//     let arr2=[];
//     let smth=arr.reduce((c, v)=>{
//         if(c !== v) arr2.push(v);
//         return v;
//     }, "");
//     let str2=arr2.join("");
//     console.log(str2);
// }
// getDublicate(str);

// 4-misol

// let str = "We66ra1n Acad4my";
// const getNumberSearch = (string) => {
//     let arr=[];
//     for(let item in string){
//         // console.log(item);
//         if(string.charCodeAt(item)>=40 && string.charCodeAt(item)<=57) arr.push(string[item]); 
//     }
//     console.log(arr);
// }
// getNumberSearch(str);

// 5-misol

// let str = "webbrain academy";
// const getDublicateCreate = (string) => {
//     let str2 = "";
//     for (let item of str) {
//         for (let i=1; i<=2; i++){
//             str2+=item;
//         }
//     }
//     console.log(str2);
// }
// getDublicateCreate(str);

// 6-misol

// let str="kiyik";
// const getPolindrom=(string)=> {
//     let arr=string.split("");
//     let str2=arr.reverse().join("");
//     if(string.includes(str2)) console.log(`${string} so'zi polindrom!`);
//     else console.log(`${string} so'zi poindrom emas!`);
// }
// getPolindrom(str);