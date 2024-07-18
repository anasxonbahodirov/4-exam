// Examen JavaScript Amaliy savollar 

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini

// const a = Math.round(5 / 2)
// console.log(a)
// alert(a)



// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini

// let b = Math.floor(Math.random()* 10)
// alert(b)



// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring! 

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!

// let b = 12.510
// alert(Math.trunc(b));



// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering 

// function d(){
//     let soz = "MARS IT SCHOOL"
//     let harfSayi = soz.length
//     alert(harfSayi)
// } 
// d()




// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering

// function e(){
//     for (let i = 0; i < 10; i++) {
//         console.log("MARS IT SCHOOL")
//     }
// }
// e()




// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering

// let e = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]
// console.log(e[0] + e[12] + e[0] + e[17] + e[21] + e[13] + e[12])




// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering

// let a = prompt("Yoshingizni kiriting")

// if (a > 18) {
//     console.log("Siz balag'ot yoshiga yetgansiz")
// }
// else if(a == 18) {
//     console.log("Sizni balog'ot yoshi bilan tabriklaymiz")
// }

// else if(a < 18) {
//     console.log("Siz balog'at yoshiga yetmagansiz")
// }






// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering

// let name = prompt("Ismingizni kiriting:");
// let reversedName = name.split('').reverse().join('');
// console.log(reversedName);





// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов

// let l =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let c = [];
// for (let i = 0; i < l.length; i++) {
//     if (l[i] % 2 === 0) {
//         c.push(l[i]);
//     }
// }
// console.log(c);

// Javob :Kodini yozib bering