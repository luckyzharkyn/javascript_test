"use strict"
Main();

function Main() {

  {
    //abcde();
    //show(second(3));
    //show(increment());
    // show_figure(3);
    //math_operations();
    //show(plus(15, 2));
    //show(summ(10, 2, 5));
    //show(different(17, 10, 7));
    //show(HelloWorld());
    // show(HelloWorld2("Привет, ", "Мир!"));
    //show(YourName(prompt()));
    //show(Your_Age(prompt()));

    // Prompt_Name();
    //double_figure();
    //show(Stroka2("abcde"));
    //show(Summ_numbers([1, 2, 3, 4, 5]));
    // show(Hour_Days_Month(3, 5, 2));
    //show(Now_Time());
    //show(massiv());
    // showMassiv();
    //textMassiv();
    //instead_Massiv();
    //assosiative_Massiv();
  }

}

function show(name) {
  console.log(name);
}

//Скрытый код. Работа с переменными
{
  //Задача. Создайте переменную str и присвойте ей значение 'abcde'.
  //Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.

  function abcde() {
    let str = 'abcde';
    return str[0] + " " + str[1] + " " + str[4];


    //Задача. Напишите скрипт, который считает количество секунд в часе.

    function second(hour) {
      let seconds = hour * 60 * 60;
      return seconds;
    }

    //Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --.
    //Количество строк кода при этом не должно измениться. Код для переделки:

    function increment() {
      var num = 3;
      return num += 12;
      // num -= 14;
      //num *= 5;
      //num /= 7;
      //num++;
      //num --;
    }

    // Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.
    function show_figure(figure) {
      return alert(figure);
    }
    //Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
    function math_operations() {
      let a = 10,
        b = 2;
      show(a + b);
      show(a - b);
      show(a * b);
      show(a / b);
    }




    // Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.
    function plus(c, d) {
      let result = c + d;
      return result;
    }




    //Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.
    function summ(a, b, c) {
      return a + b + c;
    }
    // Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c.
    //Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result.
    //Выведите на экран значение переменной result.
    function different(a, b, d) {
      let c = a + b;
      let result = c + d;
      return result;
    }

  }
}
//Скрытый код. Работа со строками
{
  //Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран.
  function HelloWorld() {
    return "Hello World";
  }
  //  Создайте переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.
  function HelloWorld2(str1, str2) {
    return str1 + str2;
  }
  //  Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.
  function YourName(name) {
    return "Привет, " + name;
  }
  //  Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.
  function Your_Age(age) {
    return "I'm old is " + age;
  }

}

//Скрытый код. Функция prompt
{
  //Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.
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
  //Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.
  function Stroka2(str) {
    return str[0] + " " + str[2] + " " + str[4];
  }
  //Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.
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
  // show(Hour_Days_Month2(7, 5, 6))

  //Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.
  function Now_Time() {
    let data = new Date();
    return data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
  }
}

//Скрытый код. Работа с массивами
{


  //Сортировка массива по возрастанию
  function massiv() {
    var numbers = [146, 154, 158, 160, 162, 5, 7, 8, 9, 10, 11, 12, 14, 16, 17, 98, 100, 102, 104, 120, 126, 18, 20, 22, 24, 28, 50, 51, 61, 63, 65];
    numbers.sort(function(a, b) {
      return a - b;
    });
    console.log(numbers); // [1, 2, 3, 4, 5]
  }

  //Дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо вывести на экран фразу 'Привет, мир!'.
  function showMassiv() {
    let str = ['Привет, ', 'мир', "!"];
    show(str[0] + str[1] + str[2]);
  }

  //Решим немного другую задачу: дан массив с элементами 'Привет, ', 'мир' и '!'.
  //Необходимо записать в переменную text фразу 'Привет, мир!', а затем вывести на экран содержимое этой переменной.
  function textMassiv() {
    let str = ['Привет, ', 'мир', "!"];
    let text = str[0] + str[1] + str[2];
    show(text);
  }

  //Дан массив ['Привет, ', 'мир', '!']. Необходимо записать в нулевой элемент этого массива слово 'Пока, ' (то есть вместо слова 'Привет, ' будет 'Пока, ').
  function instead_Massiv() {
    let str = ['Привет, ', 'мир', '!'];
    str[0] = 'пока';
    show(str);
  }

  //Создайте ассоциативный массив (объект) заработных плат obj. Выведите на экран зарплату Пети и Коли.

  //Этот объект дан:
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
  //create_massiv();

  //Дан многомерный массив arr
  //Выведите с его помощью слово 'голубой'
  function Lots_Of_Massiv() {
    var arr = {
      'ru': ['голубой', 'красный', 'зеленый'],
      'en': ['blue', 'red', 'green'],
    };
    show(arr['ru'][0]);
  }
  //Lots_Of_Massiv();

  //Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.
  function mass1() {
    let arr = ['a', 'b', 'c'];
    //alert(arr);
  }
  //mass1();

  //С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.
  function mass2() {
    let arr = ['a', 'b', 'c'];
    show(arr[0] + arr[1] + arr[2]);
  }
  //mass2();

  //Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'.
  function mass3(arr) {
    show(arr[0] + "+" + arr[1] + ", " + arr[2] + "+" + arr[3]);
  }
  const mass4 = (arr) => show(arr[0] + "+" + arr[1] + ", " + arr[2] + "+" + arr[3]);
  //mass3(['a', 'b', 'c', 'd']);
  //mass4(['a', 'b', 'c', 'd']);

  //Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый.
  //Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
  const mass5 = (arr) => (arr[0] * arr[1]) + (arr[2] * arr[3]);
  //show(mass5([2, 5, 3, 9]));


  //Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:
  function obj1() {
    var obj = {
      a: 1,
      b: 2,
      c: 3
    };
    show(obj.c);
    show(obj['c']);
  }
  // obj1();

  //Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли.
  const obj2 = (obj) => obj.Коля + " " + obj.Петя;
  //show(obj2({Коля: '1000', Вася: '500', Петя: '200'}))

  //Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.).
  //Выведите на экран текущий день недели.
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
  //weeks();

  //Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.
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
  //weeks2();

  //Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
  function mass6() {
    let arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    show(arr[1][0]);
  }
  //mass6();


  //Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.
  function mass7() {
    let obj = {
      js: ['jQuery', 'Angular'],
      php: 'hello',
      css: 'world'
    }
    show(obj['js'][0]);
  }
  //mass7();

  //Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски,
  //а второй - по-английски. Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день).

  function double_massiv() {
    let arr = {
      ru: ["Понидельник", "Вторник", "Среда", "Четверг", "Пятница", "Субота", "Воскресенье"],
      en: ["Monday", "Tuesday", "Wednesday", "Trusday", "Friday", "Saturday", "Sunday"]
    }
    show(arr.ru[0]);
    show(arr["en"][2]);
  }
  // double_massiv();

  // Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то), а в переменной day - номер дня.
  // Выведите словом день недели, соответствующий переменным lang и day. То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.

  function last_massiv() {
    let lang = ['ru', 'en'];
    let day = [0, 0, 1, 2, 3, 4, 5, 6, 7];
    var array = {
      'ru': ['Понидельник', "Вторник", "Среда", "Четверг", "Пятница", "Субота", "Воскресенье"],
      'en': ["Monday", "Tuesday", "Wednesday", "Trusday", "Friday", "Saturday", "Sunday"],
    };
    show(array[lang[0]][day[3]]);
  }
  //last_massiv();


}

//Скрытый код. If, else, switch, case

//Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
function ravno1() {
  let a = 10;
  if (a == 10) return true;
  else return false;
}
// show(ravno1());

//В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
function ravno2() {
  let min = 0;
  if (min < 20) return 1;
  else if (min >= 20 && min < 35) return 2;
  else if (min >= 35 && min < 45) return 3;
  else return 4;
}
// show(ravno2());

// Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru',
// то в переменную arr запишем массив дней недели на русском языке, а если имеет значение 'en' – то на английском.
// Решите задачу через 2 if, через switch-case и через многомерный массив без ифов и switch.
function ravno3(lang) {
  let arr;
  if (lang == 'ru') {
    return arr = ["Понидельник", "Вторник", "Среда", "Четверг", "Пятница", "Субота", "Воскресенье"];
  } else if (lang == 'en') {
    return arr = ["Monday", "Tuesday", "Wednesday", "Trusday", "Friday", "Saturday", "Sunday"];
  }
}
//show(ravno3('en'));
function ravno3_switch(lang) {
  let arr;
  switch (lang) {
    case 'ru':
      return arr = ["Понидельник", "Вторник", "Среда", "Четверг", "Пятница", "Субота", "Воскресенье"];
      break;
    case 'en':
      return arr = ["Monday", "Tuesday", "Wednesday", "Trusday", "Friday", "Saturday", "Sunday"];
      break;
    default:
      return "error";
      break;
  }
}
//show(ravno3_switch('en'));

//Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
function ravno4(a) {
  if (a == 0) {
    return "right";
  } else return "incorrect";
}

show(ravno4(1));
