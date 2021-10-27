/*
	Измените функцию так, чтобы можно было передать разное количество чисел,
	а не только три (с помощью rest parameter).
	Насчет 'reduce()' можете прочитать тут: https://link.medium.com/b9CwK73AU3
 */
 
const sum = (...numbers) => {
    const args = [...numbers];
    return args.reduce((a, b) => a + b, 0);
  }
  console.log(sum(1, 2, 3, 5, 8, 23)); // 6
  

