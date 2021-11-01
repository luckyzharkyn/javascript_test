"use strict"

function show(name) {
    console.log(name);
}

//Скрытый код. Работа с переменными
{
    // Задача. Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к
    // отдельным символам этой строки выведите на экран символ 'a', символ 'b',
    // символ 'e'.

    function abcde() {
        let str = 'abcde';
        return str[0] + " " + str[1] + " " + str[4];

        //Задача. Напишите скрипт, который считает количество секунд в часе.

        function second(hour) {
            let seconds = hour * 60 * 60;
            return seconds;
        }

        // Переделайте приведенный код так, чтобы в нем использовались операции +=, -=,
        // *=, /=, ++, --. Количество строк кода при этом не должно измениться. Код для
        // переделки:

        function increment() {
            var num = 3;
            return num += 12;
            // num -= 14; num *= 5; num /= 7; num++; num --;
        }

        // Создайте переменную num и присвойте ей значение 3. Выведите значение этой
        // переменной на экран с помощью метода alert.
        function show_figure(figure) {
            return alert(figure);
        }
        // Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность,
        // произведение и частное (результат деления).
        function math_operations() {
            let a = 10,
                b = 2;
            show(a + b);
            show(a - b);
            show(a * b);
            show(a / b);
        }

        // Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте
        // переменной result. Выведите на экран значение переменной result.
        function plus(c, d) {
            let result = c + d;
            return result;
        }

        //Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.
        function summ(a, b, c) {
            return a + b + c;
        }
        // Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат
        // присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7.
        // Сложите переменные c и d, а результат запишите в переменную result. Выведите
        // на экран значение переменной result.
        function different(a, b, d) {
            let c = a + b;
            let result = c + d;
            return result;
        }

    }
}
//Скрытый код. Работа со строками
{
    // Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите
    // значение этой переменной на экран.
    function HelloWorld() {
        return "Hello World";
    }
    // Создайте переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных
    // и операции сложения строк выведите на экран фразу 'Привет, Мир!'.
    function HelloWorld2(str1, str2) {
        return str1 + str2;
    }
    // Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу
    // 'Привет, %Имя%!'.
    function YourName(name) {
        return "Привет, " + name;
    }
    // Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне
    // %Возраст% лет!'.
    function Your_Age(age) {
        return "I'm old is " + age;
    }

}

//Скрытый код. Функция prompt
{
    // Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert
    // сообщение 'Ваше имя %имя%'.
    function Prompt_Name() {
        alert("your name is " + prompt("What is your name?"));
    }

    //Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.
    function double_figure() {
        let a = prompt("enter a figure");
        alert(a * a);
    }
}

//Скрытый код. Обращение к символам строки
{
    // Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к
    // отдельным символам этой строки выведите на экран символ 'a', символ 'c',
    // символ 'e'.
    function Stroka2(str) {
        return str[0] + " " + str[2] + " " + str[4];
    }
    // Создайте переменную num и присвойте ей значение '12345'. Найдите произведение
    // (умножение) цифр этого числа.
    function Summ_numbers(num) {
        let summ = 0;
        for (let i = 0; i < num.length; i++) {
            summ += num[i];
        }
        return summ;
    }

}

//Скрытый код. Работа с временем
{
    //Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
    function Hour_Days_Month(hour, days, month) {
        hour = hour * 60 * 60;
        days = days * 24 * 60 * 60;
        month = month * 30 * 24 * 60 * 60;
        return "hour: " + hour + "\ndays: " + days + "\nmonth: " + month;
    }

    const Hour_Days_Month2 = (hour, days, month) => {
        hour = hour * 60 * 60;
        days = days * 24 * 60 * 60;
        month = month * 30 * 24 * 60 * 60;
        return "hour: " + hour + "\ndays: " + days + "\nmonth: " + month;
    }
    // show(Hour_Days_Month2(7, 5, 6)) Создайте три переменные - час, минута,
    // секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.
    function Now_Time() {
        let data = new Date();
        return data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
    }
}

//Скрытый код. Работа с массивами
{

    //Сортировка массива по возрастанию
    function massiv() {
        var numbers = [
            146,
            154,
            158,
            160,
            162,
            5,
            7,
            8,
            9,
            10,
            11,
            12,
            14,
            16,
            17,
            98,
            100,
            102,
            104,
            120,
            126,
            18,
            20,
            22,
            24,
            28,
            50,
            51,
            61,
            63,
            65
        ];
        numbers.sort(function (a, b) {
            return a - b;
        });
        console.log(numbers); // [1, 2, 3, 4, 5]
    }

    // Дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо вывести на экран фразу 'Привет, мир!'.
    function showMassiv() {
        let str = ['Привет, ', 'мир', "!"];
        show(str[0] + str[1] + str[2]);
    }

    // Решим немного другую задачу: дан массив с элементами 'Привет, ', 'мир' и '!'.
    // Необходимо записать в переменную text фразу 'Привет, мир!', а затем вывести
    // на экран содержимое этой переменной.
    function textMassiv() {
        let str = ['Привет, ', 'мир', "!"];
        let text = str[0] + str[1] + str[2];
        show(text);
    }

    // Дан массив ['Привет, ', 'мир', '!']. Необходимо записать в нулевой элемент
    // этого массива слово 'Пока, ' (то есть вместо слова 'Привет, ' будет 'Пока,').
    function instead_Massiv() {
        let str = ['Привет, ', 'мир', '!'];
        str[0] = 'пока';
        show(str);
    }

    // Создайте ассоциативный массив (объект) заработных плат obj. Выведите на экран
    // зарплату Пети и Коли. Этот объект дан:
    function assosiative_Massiv() {
        var obj = {
            'Коля': '1000',
            'Вася': '500',
            'Петя': '200'
        };
        show(obj['Коля']);
        show(obj.Петя)
    }

    //Создайте массив arr с элементами 1, 2, 3, 4, 5 двумя различными способами.
    function create_massiv() {
        let arr = [1, 2, 3, 4, 5];
        let arr2 = Array(1, 3, 5, 6);
        arr[0] = 3;
        arr[4] = 9;
        show(arr);
    }
    // create_massiv(); 
    
    //Дан многомерный массив arr Выведите с его помощью слово
    // 'голубой'
    function Lots_Of_Massiv() {
        var arr = {
            'ru': [
                'голубой', 'красный', 'зеленый'
            ],
            'en': ['blue', 'red', 'green']
        };
        show(arr['ru'][0]);
    }
    // Lots_Of_Massiv(); 
    
    //Создайте массив arr = ['a', 'b', 'c']. Выведите его на
    // экран с помощью функции alert.
    function mass1() {
        let arr = ['a', 'b', 'c'];
        //alert(arr);
    }
    // mass1(); 
    
    //С помощью массива arr из предыдущего номера выведите на экран
    // содержимое первого, второго и третьего элементов.
    function mass2() {
        let arr = ['a', 'b', 'c'];
        show(arr[0] + arr[1] + arr[2]);
    }
    // mass2(); 
    
    //Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите
    // на экран строку 'a+b, c+d'.
    function mass3(arr) {
        show(arr[0] + "+" + arr[1] + ", " + arr[2] + "+" + arr[3]);
    }
    const mass4 = (arr) => show(
        arr[0] + "+" + arr[1] + ", " + arr[2] + "+" + arr[3]
    );
    // mass3(['a', 'b', 'c', 'd']); 
    //mass4(['a', 'b', 'c', 'd']); 

    //Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий
    // элемент на четвертый. Результаты сложите, присвойте переменной result.
    // Выведите на экран значение этой переменной.
    const mass5 = (arr) => (arr[0] * arr[1]) + (arr[2] * arr[3]);
    // show(mass5([2, 5, 3, 9])); Создайте объект obj. Выведите на экран элемент с
    // ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:
    function obj1() {
        var obj = {
            a: 1,
            b: 2,
            c: 3
        };
        show(obj.c);
        show(obj['c']);
    }
    // obj1(); Создайте массив заработных плат obj. Выведите на экран зарплату Пети
    // и Коли.
    const obj2 = (obj) => obj.Коля + " " + obj.Петя;
    // show(obj2({Коля: '1000', Вася: '500', Петя: '200'})) Создайте объект с днями
    // недели. Ключами в нем должны служить номера дней от начала недели
    // (понедельник - первый и т.д.). Выведите на экран текущий день недели.
    function weeks() {
        let obj = {
            1: 'Monday',
            2: 'Tuesday',
            3: 'Wednesday',
            4: 'Trusday',
            5: 'Friday',
            6: 'Saturday',
            7: 'Sunday'
        }
        show(obj[1]);
    }
    // weeks(); 
    
    //Пусть теперь номер дня недели хранится в переменной day, например
    // там лежит число 3. Выведите день недели, соответствующий значению переменной
    // day.
    function weeks2() {
        let day = 3;
        let obj = {
            1: 'Monday',
            2: 'Tuesday',
            3: 'Wednesday',
            4: 'Trusday',
            5: 'Friday',
            6: 'Saturday',
            7: 'Sunday'
        }
        show(obj[day]);
    }
    // weeks2(); 
    
    //Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран
    // цифру 4 из этого массива.
    function mass6() {
        let arr = [
            [
                1, 2, 3
            ],
            [
                4, 5, 6
            ],
            [
                7, 8, 9
            ]
        ];
        show(arr[1][0]);
    }
    // mass6(); 
    
    //Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}.
    // Выведите с его помощью слово 'jQuery'.
    function mass7() {
        let obj = {
            js: [
                'jQuery', 'Angular'
            ],
            php: 'hello',
            css: 'world'
        }
        show(obj['js'][0]);
    }
    // mass7(); 
    
    //Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'.
    // Пусть первый ключ содержит элемент, являющийся массивом названий дней недели
    // по-русски, а второй - по-английски. Выведите с помощью этого массива
    // понедельник по-русски и среду по английски (пусть понедельник - это нулевой
    // день).

    function double_massiv() {
        let arr = {
            ru: [
                "Понидельник",
                "Вторник",
                "Среда",
                "Четверг",
                "Пятница",
                "Субота",
                "Воскресенье"
            ],
            en: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Trusday",
                "Friday",
                "Saturday",
                "Sunday"
            ]
        }
        show(arr.ru[0]);
        show(arr["en"][2]);
    }
    // double_massiv(); 
    
    //Пусть теперь в переменной lang хранится язык (она принимает
    // одно из значений или 'ru', или 'en' - либо то, либо то), а в переменной day -
    // номер дня. Выведите словом день недели, соответствующий переменным lang и
    // day. То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.

    function last_massiv() {
        let lang = ['ru', 'en'];
        let day = [
            0,
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7
        ];
        var array = {
            'ru': [
                'Понидельник',
                "Вторник",
                "Среда",
                "Четверг",
                "Пятница",
                "Субота",
                "Воскресенье"
            ],
            'en': [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Trusday",
                "Friday",
                "Saturday",
                "Sunday"
            ]
        };
        show(array[lang[0]][day[3]]);
    }
    //last_massiv();

}

// Скрытый код. If, else, switch, case 
{
//Если переменная a равна 10, то выведите
// 'Верно', иначе выведите 'Неверно'.
function ravno1() {
    let a = 10;
    if (a == 10) 
        return true;
    else 
        return false;
    }
// show(ravno1()); 

//В переменной min лежит число от 0 до 59. Определите в какую
// четверть часа попадает это число (в первую, вторую, третью или четвертую).
function ravno2() {
    let min = 0;
    if (min < 20) 
        return 1;
    else if (min >= 20 && min < 35) 
        return 2;
    else if (min >= 35 && min < 45) 
        return 3;
    else 
        return 4;
    }
// show(ravno2()); 

//Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', 
//то в переменную arr запишем массив дней недели на
// русском языке, а если имеет значение 'en' – то на английском. Решите задачу
// через 2 if, через switch-case и через многомерный массив без ифов и switch.
function ravno3(lang) {
    let arr;
    if (lang == 'ru') {
        return arr = [
            "Понидельник",
            "Вторник",
            "Среда",
            "Четверг",
            "Пятница",
            "Субота",
            "Воскресенье"
        ];
    } else if (lang == 'en') {
        return arr = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Trusday",
            "Friday",
            "Saturday",
            "Sunday"
        ];
    }
}
//show(ravno3('en'));
function ravno3_switch(lang) {
    let arr;
    switch (lang) {
        case 'ru':
            return arr = [
                "Понидельник",
                "Вторник",
                "Среда",
                "Четверг",
                "Пятница",
                "Субота",
                "Воскресенье"
            ];
            break;
        case 'en':
            return arr = [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Trusday",
                "Friday",
                "Saturday",
                "Sunday"
            ];
            break;
        default:
            return "error";
            break;
    }
}
// show(ravno3_switch('en')); 

//Если переменная a равна нулю, то выведите 'Верно',
// иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
function ravno4(a) {
    if (a == 0) {
        return "right";
    } else 
        return "incorrect1";
    }
// show(ravno4(1)); 

//Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу
// скрипта при a, равном 'test', 'тест', 3. 
function ravno5(a) {
    if(a == "test"){
        return "right";
    } else {
        return "incorrect";
    }
}
//show( ravno5("test") );

function if_else_logic(test){
    
    //Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. 
//Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
    if(test == true){
        return "right";
    } else {
        return false;
    }
    if(test == true) return "right"; 
    else return "incorrect";

    //show(if_else_logic(true));


//Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. 
//Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

    if(test != true) return 'right'; else 'incorrect';

}

function or_and(a){
    //Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

   // if(a > 0 && a < 5) return "right"; 
   // else return "incorrect";

    // Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. 
    //Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

    if(a == 0 || a == 2) return a + 7;
    else return a/10;
}
//show( or_and(2) );

function switch_1(num){
    let result;
    //Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', 
    //то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case. 
    switch (num) {
        case 1:
            result = "winter";
            break;
        case 2:
            result = "spring";
            break;
        case 3:
            result = "summer";
            break;
        case 4:
            result = "autumn";
            break;
        default:
            break;
    }
    return result;
}
//show(switch_1(3));

function if_else_tasks(){
    //В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

    // let day = 20;
    // if(day >= 1 && day <= 10) return "first";
    // else if (day >= 10 && day <= 20) return "second";
    // else if(day >= 21 && day <= 31) return "third";
    // else return "fourth";

    // В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

    // let month = 9;
    // switch (month) {
    //     case 1:
    //             return "January";
    //         break;
    //     case 2:
    //             return "February";
    //         break;
    //     case 3:
    //             return "March";
    //     break;
    //     case 4:
    //             return "April";
    //         break;
    //     case 5:
    //             return "May";
    //         break;
    //     case 6:
    //             return "June";
    //         break;
    //     case 7:
    //             return "July";
    //         break;
    //     case 8:
    //             return "August";
    //         break;
    //     case 9:
    //             return "September";
    //         break;   
    //     case 10:
    //             return "October";
    //         break; 
    //     case 11:
    //             return "November";
    //         break; 
    //     case 12:
    //             return "December";
    //         break;   
    //     default:
    //         break;
    // }

    // let month = {
    //     1 : "January", 
    //     2 : "February",
    //     3 : "March",
    //     4 : "April", 
    //     5 : "May",
    //     6 : "June",
    //     7 : "July",
    //     8 : "August",
    //     9 : "September",
    //     10 : "October", 
    //     11 : "November",
    //     12 : "December"
    // }
    // return month[number];

    // Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. 
    //Если это так - выведите 'да', в противном случае выведите 'нет'.

    // let char = 'abcde';
    // if(char[0] == 'a'){
    //     return "right";
    // } else {
    //     return "incorrect";
    // }
    
    // Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. 
    //Если это так - выведите 'да', в противном случае выведите 'нет'.

    // let figure_1 = "12345";
    // if(figure_1[0] == 1 || figure_1[0] == 2 || figure_1[0] == 3){
    //     return "right";
    // } else {
    //     return "incorrect";
    // }

    // Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

    //let figure_2 = "356";
    //return parseInt(figure_2[0]) + parseInt(figure_2[1]) + parseInt(figure_2[2]);

    // Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. 
    //Если это так - выведите 'да', в противном случае выведите 'нет'.

    let figure_3 = "542452";
    if(q(figure_3[0]) + q(figure_3[1]) + q(figure_3[2]) == q(figure_3[3]) + q(figure_3[4]) + q(figure_3[5])){
        return "right";
    } else {
        return "incorrect";
    }
    function q(name){
        return parseInt(name);
    }
    
}
//show(if_else_tasks());
}

//Скрытый код. Циклы While, for
function while_for(){
    //Выведите столбец чисел от 1 до 50. 

    // for(let i = 1; i <= 30; i++){
    //     console.log(i);
    // }

    // let i = 1;
    // while(i <= 50){
    //     console.log(i);
    //     i++;
    // }

    //Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран. 

    // let arr3 = [1, 2, 3, 4, 5];
    // for(let i = 0; i < arr3.length; i++){
    //     console.log(arr3[i]);
    // }

    //Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива. 
    
    // let arr4 = [2, 3, 4, 5];
    // let sum = 1;
    // for(let i = 0; i < arr4.length; i++){
    //     sum *= arr4[i];
    // }
    // return sum;

    //	Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. 
    //С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'. 
    
    //let c = ['Minsk', 'Moscow', 'Kiev']
    /*
    let obj = {
        'Minsk' : 'Belarus',
        'Moscow' : 'Russia',
        'Kiev' : 'Ukraine'
    };
    
    for (var key in obj) {
        console.log(key + ' - this is a ' + obj[key]);
    }
    */
    // for(let i = 0; i < c.length; i++){
    //     console.log(obj[c[i]]);
    // }

    //Выведите столбец чисел от 1 до 100.
    /*
    let num = 1;
    while(num < 100){
        console.log(num);
        num++;
    }
    */

    // Выведите столбец чисел от 11 до 33.
    /*
    for(let i = 11; i < 33; i++){
        console.log(i);
    }
    */

    // Выведите столбец четных чисел в промежутке от 0 до 100.
    /*
    let num = 0;
    while(num < 100){
        if(num % 2 == 0){
            num++;
        }
        else {
            console.log(num);
            num++;
        }
    }
    */
    // С помощью цикла найдите сумму чисел от 1 до 100.
    /*
    let sum = 0;
    for(let i = 1; i <= 100; i++){
        sum += i;
    }
    console.log(sum);
    */

    // Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
    /*
    var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}

    for(var key in obj){
        console.log(key + " " + obj[key]);
    }
    */

    // Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. 
    // С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.
    /*
    let obj = {
        "Коля" : 200,
        "Вася" : 300,
        "Петя" : 400,
    }

    for(var key in obj){
        console.log(key + " - salary is " + obj[key]);
    }
    */

    // Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, 
    //которые больше 3-х, но меньше 10.
    /*
    let arr5 = [2, 5, 9, 15, 0, 4];
    for(let i = 0; i < arr5.length; i++) {
        if(arr5[i] > 3 && arr5[i] < 10) {
            console.log(arr5[i]);
        }
    }
    */
    // Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
    /*
    let arr6 = [3, 6, 3, -3, 5, -6, 1, 42, -4];
    let sum = 0;
    for(let i = 0; i < arr6.length; i++) {
        if(arr6[i] > 0) {
            sum += arr6[i];
        }
    }
    console.log(sum);
    */
    // Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, 
    //равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
    /*
    let arr7 = [1, 2, 5, 9, 4, 13, 4, 10];
    for(let i = 0; i < arr7.length; i++) {
        if(arr7[i] == 4) {
            console.log("Have");
            break;
        }
    }
    */

    // Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
    //???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
    //???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
    //???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
    // let arr8 = [10, 20, 30, 50, 235, 3000];

    // for(let i = 0; i < arr8.length; i++) {
    //     if(arr8[0] == 10){
    //         console.log(arr8[0]);
    //     }
        
    //     if(arr8[i] == '1' || arr8[i] == '5' || arr8[i] == '2') {
    //         console.log(arr8[i]);
    //     }
    // }

    // Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
    /*
    let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let s = "";
    for(let i = 0; i < arr9.length; i++) {
        s = s + "-" + arr9[i];
    }
    console.log(s);
    */

    // Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
    /*
    let weeks3 = ['Monday', 'Tuesday', 'Wednesday', 'Trusday', 'Friday', 'Saturday', 'Sunday'];

    for(let i = 0; i <= 4; i++) {
        console.log(weeks3[i]);
    }
    console.log(weeks3[5].bold());
    console.log(weeks3[6].bold());

    */

    // Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. 
    //Текущий день должен храниться в переменной day.
    
    /*
    let weeks3 = ['Monday', 'Tuesday', 'Wednesday', 'Trusday', 'Friday', 'Saturday', 'Sunday'];
    
    let day = weeks3[0];

    for(let i = 0; i < weeks3.length; i++) {
        if(day == weeks3[i]) {
            console.log(weeks3[i].italics());
        } else {
        console.log(weeks3[i]);
        }
    }
    */

    // Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? 
    //Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

    let n = 1000;
    let num = 0;
    while(n < 50) {
        n = n / 2;
        n = num;
    }
    return num;
}
show(while_for());
