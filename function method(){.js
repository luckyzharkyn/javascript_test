"use strict"
Main();

function Main(){
    
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
        }
        
       
        
        }

function show(name){
    console.log(name);
}

//Скрытый код. Работа с переменными
{
//Задача. Создайте переменную str и присвойте ей значение 'abcde'. 
//Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'b', символ 'e'.

function abcde(){
    let str = 'abcde';
    return str[0] + " " + str[1] + " " + str[4];


//Задача. Напишите скрипт, который считает количество секунд в часе.

function second(hour){
    let seconds = hour * 60 * 60;
    return seconds;
}

//Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --. 
//Количество строк кода при этом не должно измениться. Код для переделки:

function increment(){
   var num = 3;
   return num += 12;
    // num -= 14;
    //num *= 5;
    //num /= 7;
    //num++;
    //num --;
}

// Создайте переменную num и присвойте ей значение 3. Выведите значение этой переменной на экран с помощью метода alert.
function show_figure(figure){
    return alert(figure);
}
//Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).
function math_operations(){
    let a = 10, b = 2;
    show(a+b);
    show(a - b);
    show(a * b);
    show(a / b);
}




// Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. Выведите на экран значение переменной result.
function plus(c, d){
    let result = c + d;
    return result;
}



 
//Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.
function summ(a, b, c){
    return a + b + c;
}
// Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. 
//Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. 
//Выведите на экран значение переменной result.
function different(a, b, d){
    let c = a + b;
    let result = c + d;
    return result;
}

}
}
//Скрытый код. Работа со строками
{
    //Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран.
    function HelloWorld(){
        return "Hello World";
    }
//  Создайте переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.
    function HelloWorld2(str1, str2){
        return str1 + str2;
    }
//  Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.
    function YourName(name){
        return "Привет, " + name;
    }
//  Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.
    function Your_Age(age){
        return "I'm old is " + age;
    }

}

//Скрытый код. Функция prompt
{
 //Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.
    function Prompt_Name(){
        alert("your name is " + prompt("What is your name?"));
    }
    
 //Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.
 function double_figure(){
    let a = prompt("enter a figure");
    alert(a * a);
 }
}

//Скрытый код. Обращение к символам строки
{
//Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.
    function Stroka2(str){
        return str[0] + " " + str[2] + " " + str[4];
    }
 //Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.
    function Summ_numbers(num){
        let summ = 0;
        for(let i = 0; i < num.length; i++){
            summ += num[i];
        }
        return summ;
    }

}

//Скрытый код. Работа с временем
{ 
    //Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
function Hour_Days_Month(hour, days, month){
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
    function Now_Time(){
        let data = new Date();
        return data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
    }
}