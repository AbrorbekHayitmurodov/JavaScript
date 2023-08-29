// Rectangle

// let rectangle = {
//     width: 10,
//     height: 15,
//     getPerimetr () {
//         console.log(2*(rectangle.width+rectangle.height));
//     },
//     getArea () {
//         console.log(rectangle.width * rectangle.height);
//     }
// }
// rectangle.getPerimetr();
// rectangle.getArea();

// Circle

// let circle = {
//     r: 10,
//     getArea () {
//         console.log(Math.PI*circle.r**2);
//     },
//     getCircumference () {
//         console.log(Math.PI*circle.r*2);
//     }
// }
// circle.getArea();
// circle.getCircumference();

// Task 1

// let user = {
// };
// user.name="John";
// user.surname="Smith";
// console.log(user);
// user.name="Pate";
// console.log(user["name"]);
// delete user.name;
// console.log("name" in user);

// Task 2

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pate: 130
// }
// let sum=0;
// for (let key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum);

// Task 3

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// console.log(menu);

// let sum = 0;
// let menu2 = menu;

// function multiplyNumber(menu) {
//     for (let keys in menu) {
//         if (typeof menu[keys] === "number") {
//             menu[keys] *= 2;
//             menu2[keys] = menu[keys];
//         }
//         else menu2[keys] = menu[keys];
//     }
//     console.log(menu2);
// }
// multiplyNumber(menu);