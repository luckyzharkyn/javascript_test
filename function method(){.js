"use strict"

let show = (name) => console.log(name); // console.log сокращенный

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
    numbers.sort(function(a, b) {
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
    if (a == "test") {
      return "right";
    } else {
      return "incorrect";
    }
  }
  //show( ravno5("test") );

  function if_else_logic(test) {

    //Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.
    //Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
    if (test == true) {
      return "right";
    } else {
      return false;
    }
    if (test == true) return "right";
    else return "incorrect";

    //show(if_else_logic(true));


    //Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'.
    //Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

    if (test != true) return 'right';
    else 'incorrect';

  }

  function or_and(a) {
    //Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

    // if(a > 0 && a < 5) return "right";
    // else return "incorrect";

    // Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10.
    //Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

    if (a == 0 || a == 2) return a + 7;
    else return a / 10;
  }
  //show( or_and(2) );

  function switch_1(num) {
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

  function if_else_tasks() {
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
    if (q(figure_3[0]) + q(figure_3[1]) + q(figure_3[2]) == q(figure_3[3]) + q(figure_3[4]) + q(figure_3[5])) {
      return "right";
    } else {
      return "incorrect";
    }

    function q(name) {
      return parseInt(name);
    }

  }
  //show(if_else_tasks());
}

//Скрытый код. Циклы While, for
function while_for() {
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

  /*
  let arr8 = [10, 20, 30, 50, 235, 3000];

  for(let i = 0; i < arr8.length; i++) {

      arr8[i] = '' + arr8[i];
      if(arr8[i][0] == '1' || arr8[i][0] == '5' || arr8[i][0] == '2') {
           console.log(arr8[i]);
      }
  }
  */

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
  /*
  let n = 1000;
  let num = 0;
  while(n > 50) {
      n = n / 2;
      num++;
  }
  console.log(n + " " + num);
  */
}

//Скрытый код. математические операции
function math_op() {

  //Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
  /*
      let a = 10, b = 3;
      console.log(a % b);
  */
  //Даны переменные a и b. Проверьте, что a делится без остатка на b.
  //Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.
  /*
      let a = 10, b = 3;
      if(a%b != 0) {
          console.log("Делится с остатком " + a%b)
      } else {
          console.log("Делится " + a/b)
      }
  */

  //Возведите 2 в 10 степень. Результат запишите в переменную st.
  /*
  let st = Math.pow(2, 10);
  console.log(st);
  */
  //Найдите квадратный корень из 245.

  //console.log(Math.sqrt(245));

  //Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
  /*
  let arr10 = [4, 2, 5, 19, 13, 0, 10];
  let summ = 0;

  for(let i = 0; i < arr10.length; i++) {
      summ += Math.pow(arr10[i], 3);
  }
  summ = Math.sqrt(summ);
  console.log(summ);
  */

  //Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
  /*
  let number1 = Math.sqrt(379);
  console.log(Math.floor(number1));
  console.log(number1.toFixed(1));
  console.log(number1.toFixed(2));
  */

  //Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны,
  //запишите результаты округления в объект с ключами 'floor' и 'ceil'.
  /*

  let number2 = Math.sqrt(587);
      //console.log(Math.ceil(number2));
     // console.log(Math.floor(number2));
      let obj3 = {};
      obj3["floor"] = Math.floor(number2);
      obj3['ceil'] = Math.ceil(number2);
      console.log(obj3);

  */

  //	Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
  //let arr11 = [4, -2, 5, 19, -130, 0, 10];
  // console.log(Math.max.apply(null, arr11));
  // console.log(Math.max(4, -2, 5, 25, -130, 0, 10));
  //console.log(Math.min.apply(null, arr11));


  //Выведите на экран случайное целое число от 1 до 100.
  /*

  function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
   }

   //getRandomInt(10, 20);

   */

  //Заполните массив 10-ю случайными целыми числами
  /*
  let arr12 = [];
  for(let i = 0; i < 10; i++) {
  arr12[i] = getRandomInt(10, 20);
  }
  console.log(arr12);

  */

  //Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
  /*
     let a = -30;
     let b = -12;
     console.log(Math.abs(b), Math.abs(a));
  */
  //Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c.
  //Сделайте так, чтобы в любом случае в переменную c записалось положительное значение.
  //Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.
  /*
     let a = 1;
     let b = 6;
     let c;
     console.log(Math.abs(c = a - b));
  */

  //Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
  /*
  let arr13 = [12, 15, 20, 25, 59, 79];
  let sum = 0;
  for(let i = 0; i < arr13.length; i++) {
       sum += arr13[i];
  }
  sum = sum/arr13.length
  console.log(sum)
  */
  //Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел,
  //меньше данного, и его самого. Например, 4! = 1*2*3*4.

  /*
  function factorial(nub) {
      let sum = 1;
      for(let i = 1; i <= nub; i++){
          sum *= i;
      }
      return sum;
  }
  console.log(factorial(8));
  */

}

//Скрытый код. Задачи на функции работы со строками в JavaScript
function stroki() {

  //Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.
  /*
  let str1 = 'aaa@bbb@ccc';
  console.log(str1.replace(/@/g, "!"));
  */

  //Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
  /*
  let str1 = 'aaa bbb ccc';
  console.log(str1.substr(4, 3));
  console.log(str1.substring(4, 7));
  console.log(str1.slice(4, 3));
  */

  //В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'
  /*
  let date = '2025-12-31';
  console.log(date.substr(8, 2) + "/" + date.substring(5, 7) + "/" + date.slice(0, 4));
  */

  //Дана строка 'js'. Сделайте из нее строку 'JS'.
  /*
  let str1 = 'js';
  console.log(str1.toUpperCase());
  */

  //Дана строка 'JS'. Сделайте из нее строку 'js'.
  /*
  let str1 = 'JS';
  console.log(str1.toLowerCase());
  */

  //Pабота с length, substr, substring, slice. Работа с indexOf

  //Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
  /*
  let str1 = 'я учу javascript!';
  console.log(str1.length);
  */

  // Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
  /*
  let str1 = 'я учу javascript!';
  console.log(str1.substr(2, 3) + " " + str1.substring(6, 16));
  console.log(str1.slice(6, 16));
  */

  // Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
  /*
  let str1 = 'я учу javascript! учу';
  console.log(str1.indexOf('учу', 5));
  */

  // Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу:
  //если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов
  //строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.
  /*
  let result;
  if(stroka3.length > n) {
      return result = stroka3.slice(0, n+1) + "...";
  } else {
      return result = stroka3;
  }

  show(stroki("hello world mother", 12));
  */

  //Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
  /*
  let str1 = 'Я-учу-javascript!';
  console.log(str1.replace(/-/g, "!"));
  */

  //Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
  /*
  let str1 = 'я учу javascript!';
  console.log(str1.split(" "));
  */

  // Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
  /*
  let str1 = 'я учу javascript!';
  console.log(str1.split(""));
  */

  // В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.
  //let date = '2025-12-31';
  //date = date.split("-");
  //console.log(date[2] + "." + date[1] + "." + date[0]);

  //Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'
  /*
  let arr14 = ['я', 'учу', 'javascript', '!'];
  console.log(arr14.join("+"));
  */
  
  //Преобразуйте первую букву строки в верхний регистр.
  /*
  let str1 = 'hello world';
  console.log(str1[0].toUpperCase() + str1.slice(1));
  */

  // Преобразуйте первую букву каждого слова строки в верхний регистр.
  /*
  let str1 = 'hello world';
  let str1_massiv = str1.split(" ");
  str1 = str1_massiv[0][0].toUpperCase() + str1_massiv[0].slice(1) + " " + str1_massiv[1][0] + str1_massiv[1].slice(1);
  console.log(str1);
  */

  // Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
  /*
  let str1 = 'var_test_text';
  let str2 = str1.split("_");
  for(let i = 0; i < str2.length; i++) {
    str2[i] = str2[i][0].toUpperCase() + str2[i].slice(1);
  }
  str1 = str2.join(" ");
  console.log(str1);
  */
}

//Скрытый код. Задачи на функции работы с массивами
function massivi(){

  //Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе. 
  /*
  let arr1 = ['a', 'b', 'c'];
  let arr2 = [1, 2, 3];
  console.log(arr1.concat(arr2));
  */

  //Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3. 
  /*
  let what = ['a', 'b', 'c'];
  what.push(1, 2, 3);
  console.log(what);
  //console.log(arr1.concat(1, 2, 3));
  */

  //Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе. 
  /*
  let ar1 = [1, 2, 3];
  let ar2 = [4, 5, 6];
  console.log(ar1.concat(ar2));
  */

  //Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]. 
  /*
  let ar1 = [1, 2, 3];
  console.log(ar1.reverse());
  */

  //Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
  /*
  let ar1 = [1, 2, 3];
  ar1.push(4, 5, 6);
  console.log(ar1);
  */

  //Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
  /*
  let ar1 = [1, 2, 3];
  ar1.unshift(4, 5, 6);
  console.log(ar1);
  */

  //	Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
  /*
  let arr1 = ['js', 'css', 'jq'];
  console.log(arr1.shift());
  */

  // //Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
  /*
   console.log(arr1.pop());
  */

  //Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
  /*
  let arr1 = [1, 2, 3, 4, 5];
  
    let new_1 = arr1.slice(0, 3);
  //console.log(new_1);

  //Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

  new_1 = arr1.slice(3);
  console.log(new_1);
  */

  //Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
  /*
  arr1.splice(1, 2);
  console.log(arr1);
  */

  // Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
  /*
  let new_1 = arr1.splice(1, 3);
  console.log(new_1);
  */

  // Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
  /*
  arr1.splice(3, 0, 'a', 'b', 'c');
  console.log(arr1);
  */

  // Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
  /*
  arr1.splice(1, 0, 'a', 'b');
  arr1.splice(6, 0, 'c');
  arr1.splice(8, 0, 'e');
  console.log(arr1);
  */

  //	Дан массив [3, 4, 1, 2, 7]. Отсортируйте его. 
  /*
  let arr1 = [3, 4, 1, 2, 7];
  console.log(arr1.sort());
  */

  //Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей. 
  /*
  let obj4 = {js:'test', jq: 'hello', css: 'world'};
  console.log(Object.keys(obj4));
  */
}

//Скрытый код. Обработки стандартных функции JS
const revise = () => {
  //Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.
  /*
  let str1 = 'hello world again';
  //return str1[0].toUpperCase() + str1.slice(1);

  str1 = str1.split("");
  str1[0] = str1[0].toUpperCase();
  return str1.join("");
  */

  //Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл
  /*
  let str1 = '123456';
  return str1.split('').reverse().join("");
  */

  //Проверьте, что строка начинается на http://.
  /*
  if(site.substr(0, 7) != 'http://') {
    return 'error'
  } else return 'right'
  */

  //Проверьте, что строка заканчивается на .html.
  /*
  if(site.substr(-5) != '.html') {
    return 'error';
  } else return 'right';
  */

  
}

//Скрытый код. Фукнции
function func(){
  //Сделайте функцию, которая возвращает куб числа. Число передается параметром. 
  /*
  let func1 = (name) => {
    return name * name * name;
  }
  show(func1(3));
  */

  //Сделайте функцию, которая возвращает квадрат числа. Число передается параметром. 
  //let func1 = (name) => name * name;
  
  //Сделайте функцию, которая возвращает сумму двух чисел.
  // let func1 = (name) => name + name;

  // Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
  //let func1 = (name, name1, name2) => (name - name1)/name2;

  //Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
  /*
  let arr16 = [1, 2, 3, 4, 5, 6, 7];

  let obj5 = {
    1: "понидельник",
    2: "вторник",
    3: "среда",
    4: "четверг",
    5: "пятница",
    6: "субота", 
    7: "воскресенье"
  };
  
  let func1 = (name) => {
    let result = 0;
    for(let i = 0; i < arr16.length; i++) {
      if(name == arr16[i]){
        return obj5[arr16[i]];
      }
  }
}
  
  show(func1(3));
  */


}

//Скрытый код. Флаги(bool)
function flag(){
  //Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.
  /*
  let arr17 = [2, 3, 4, 5, 6, 7];
  let boolean = false;
  for(let i = 0; i < arr17.length; i++){
    if(arr17[i] == 5) {
      boolean = true;
    } 
  }
  if(boolean) {
    console.log('have');
  } else {
    console.log('do not have');
  }
  */

  // Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. 
  //То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. Если число не делится - выведите 'false', 
  //а если делится - выведите 'true'.
  /*
  let delenie = (name) => {
    for(let i = 2; i < name; i++) {
      for(let j = 2; j < name; j++){
        if(name / i == j) {
        return j;
      }
    }
    }
    return false;
    
  }
  show(delenie(51));
  */
  // Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.
  /*
  let arr18 = [1, 2, 3, 4, 5, 6, 7, 2];
  let odinokovi = () => {
    for(let i = 0; i < arr18.length - 1; i++) {
      for(let j = i + 1; j < arr18.length; j++) {
        if(arr18[i] == arr18[j]) {
          return arr18[i] + " " + arr18[j];
        }
      }
    }
    return "false";
  }
  show(odinokovi());
  */
}

//Скрытый код. Work on logic means
function logic_means(){

//	Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
/*
let ravno6 = (name, name1) => name == name1;

show(ravno6(5, 6));
*/
// Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
/*
let ravno7 = (name, name1) => name + name1 > 10;

show(ravno7(6, 5));
*/
// Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. 
//Если отрицательное - пусть функция вернет true, а если нет - false.
/*
let ravno8 = (name) => name < 0;
show(ravno8(32));
*/

}

//скрытый код. Пирамидка. цикл в цикле
function piramida(){
//С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.
/*
let str = '';
for(let i = 1; i < 10; i++) {
  str += i;
}
console.log(str);
*/

// С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.
/*
let str = '';
for(let i = 9; i > 0; i--) {
  str += i;
}
console.log(str);
*/

// С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.
/*
let str = '';
for(let i = 1; i < 10; i++) {
  str += "-" + i;
}
console.log(str);
*/

// Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5
/*
let str = '';
for(let i = 1; i <= 20; i++){
  str = '';
  for(let j = 1; j <= i; j++) {
    str += 'x';
  }
  console.log(str);
}
*/

//С помощью двух вложенных циклов нарисуйте следующую пирамидку:
/*
1
22
333
4444
55555
666666
7777777
88888888
999999999
*/
/*
let str = '';
for(let i = 1; i <=9; i++) {
  str = '';
  for(let j = 1; j <= i; j++) {
    str += i;
  }
  console.log(str);
}
*/

//Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:
/*
xx
xxxx
xxxxxx
xxxxxxxx
xxxxxxxxxx
*/
/*
let str = '';
for(let i = 1; i <= 5; i++){
  str += 'xx';
  console.log(str);
}
*/
}

//скрытый код. Приемы работа с массивами
const massiv_prieme = () => {
  //Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее. 
  /*
  let mass = [];
  let str = '';
  for(let i = 0; i < 10; i++) {
    str = '';
    for(let j = 0; j <= i; j++) {
      str += 'x';
    }
    mass[i] = str;
  }
  console.log(mass);
  */

  //	Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее. 
  /*
  let mass = [];
  let str = '';
  for(let i = 0; i < 10; i++) {
    
    str = '';
    for(let j = 0; j <= i; j++) {
      str += i;
    }
    mass[i] = str;
  }
  console.log(mass);
  */

  //Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. 
  // Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. 
  // Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
  /*
  let arrayFill = (name, name1) => {
    let mass = [];
    for(let i = 0; i < name1; i++) {
      mass.push(name);
    }
    return mass;
  }
  show(arrayFill('x', 4));
  */

  //Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. 
  /*
  let count_more_ten = () => {
  let mass = [1, 2, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let str = 0;
  let count = 0;
  for(let i = 0; i < mass.length; i++) {
    str += mass[i];
    count++;
    if(str > 10) {
      console.log(str);
      return count;
    }
  }
}
  show(count_more_ten());
  */

  //Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке. 
  /*
  let mass = [5, 6, 7, 8, 9];
  let result = [];
  
  for(let i = mass.length - 1; i >= 0; i--) {
    result.push(mass[i]);
  }
  console.log(result);
  */

  //Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. 
  //Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным
  /*
  let mass = [[1, 2, 3], [4, 5], [6]];
  let summ = 0;
  
  for(let i = 0; i < mass.length; i++) {
    for(let j = 0; j < mass[i].length; j++){
      summ += mass[i][j];
    }
  }
  console.log(summ);
  */

  //Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. 
  //Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным
  /*
  let mass = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
  let summ = 0;

  for(let i = 0; i < mass.length; i++) {
    for(let j = 0; j < mass[i].length; j++) {
      for(let k = 0; k < mass[i][j].length; k++) {
        summ += mass[i][j][k];
      }
    }
  }
  console.log(summ);
  */
}

//скрытый код. Правильное использование пользовательских функции
const right_func = () => {

  //Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. 
  // Создайте для этого вспомогательную функцию isPositive(), 
  // которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное. 

  let polozhitelnie_figures = (mass) => {
    let result = [];
    for(let i = 0; i < mass.length; i++) {
      if(isPositive(mass[i])) result.push(mass[i]);
    }
    return result;
  }

  let isPositive = (figure) => {
    if(figure >= 0) {
      return true;
    } else return false;
  }

  show(polozhitelnie_figures([1, 2, -2, 4, 3, -6, -1, -4, 544, -2]));

}

//скрытый код. Практика на работу с пользовательскими функциями
const practica_func = () => {
  //реализуйте функцию inArray, которая будет проверять, есть ли в массиве элемент с таким значением или нет. 
  // Первым параметром функция должна принимать значение, а вторым - массив. 
  // Если такой элемент есть - функция должна вернуть true, а если нет - false. 

  const inArray = (name, name1) => {
    let str = String(name1).split(',');

    for(let i = 0; i < str.length; i++) {
      if(name == Number(str[i])) {
        return true;
      }
    }
    return false;
  }

  // реализуйте функцию isSimple, которая параметром будет принимать число и проверять, простое оно или нет. 
  // Простое число - это число, которое не делится ни на одно другое число (кроме как на 1 и на само себя - на это делятся все числа). 
  // Если число простое - функция должна вернуть true, в противном случае false. 
  const isSimple = (name) => {
    for(let i = 2; i < name; i++) {
      if(name%i == 0) 
      return true;
    }
    return false;
  }
  
  //реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, 
  // то есть чисел, на которое делится наше число. 
  // К примеру, если мы передадим число 24 - мы должны получить массив [1, 2, 3, 4, 6, 12, 24]. 
  const getDivisors = (name) => {
    let mass = [];

    for(let i = 1; i <= name; i++) {
      if(name%i == 0) {
        mass.push(i);
      }
    }
    return mass;
  }

  //реализуйте функцию getIntersection, которая параметрами будет принимать два массива и возвращать массив элементов, 
  // которые есть и в одном, и во втором массиве (это называется пересечение массивов). 
  // К примеру, getIntersection([1, 2, 3], [2, 3, 4]) должно вернуть [2, 3]. 
  const getIntersection = (mass, mass1) => {
    let newMass = [];

    for(let i = 0; i < mass.length; i++) {
      if(inArray(mass[i], mass1)){
        if(inArray(mass[i], newMass)) {
        } else {
        newMass.push(mass[i]);
        }
      }
    }
    return newMass;
  }

  // реализуйте функцию getGreatestCommonDivisor, которая параметрами будет принимать два числа и возвращать 
  // наибольший общий делитель (НОД) этих двух чисел. К примеру, для чисел 12 и 18 НОД равен 6. 
  const getGreatestCommonDivisor = (name, name1) => {
    let mass = getIntersection(getDivisors(name), getDivisors(name1));
    return mass[mass.length - 1];
  }


  // Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, 
  //которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

  const ucfirst = (str) => {
    return String(str[0].toUpperCase() + str.slice(1));
  }

  const WordsUpper = (str) => {
    let mass = [];
    let str1 = str.replace(/_/g, ' ').split(' ');
    for(let i = 0; i < str1.length; i++) {
      mass.push(ucfirst(str1[i]));
    }

    return mass.join(' ');
  }

  // Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

  const wordsTogether = (text) => {
     return WordsUpper(text);
  }

  // Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. 
  //Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. 
  //Функция должна возвращать true или false.

  const inArray2 = (text, mass) => {
    for(let i = 0; i < mass.length; i++) {
      if(text == mass[i]) return true;
    }
    return false;
  }

}

//скрытый код. Продвинутая работа с пользовательскими фукнциями
const prodvinut_func = () => {

  //Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.
  //let mass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function rec1(mass) {
    console.log(mass[0]);
    mass.splice(0, 1);
    if(mass.length > 0) {
      rec1(mass);
    }
  }

  // Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. 
  //И так, пока сумма не станет однозначным числом (9 и менее). 

/*
  let summ = 0;
  function lessNine(text) {
    text = text.split('');
    summ += text
  }
*/
}
prodvinut_func();