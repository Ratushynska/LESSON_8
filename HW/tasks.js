//  створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
/*
    function s(a,b) {
        let result = a*b;
        return result;
    }

    console.log (s(10,5))
*/

//  створити функцію яка обчислює та повертає площу кола з радіусом r
/*
    function s(r) {
        let result = Math.PI * Math.pow(r, 2);
        return result;
    }

    console.log (s(15))
*/

//  створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
/*
    function s(r,h) {
        let result = 2*Math.PI*r*h;
        return result;
    }

    console.log (s(4,6))
*/

//  створити функцію яка приймає масив та виводить кожен його елемент
/*
    let randomWords = ['picture','book','lamp','tree'];

    function f(array) {
        for (const i of array) {
            console.log(i);
        }
    }

    console.log(f(randomWords))
*/

//  створити функцію яка створює параграф з текстом. Текст задати через аргумент
/*
    function f(text) {
        document.write(`<p>${text}</p>`);
    }
    
    f('qwertyuiopasdfghjlzxcvbnm');
*/

/*  створити функцію яка створює ul з трьома елементами li. 
    Текст li задати через аргумент всім однаковий*/
/*
    function f(x) {
        document.write (`<ul>
            <li>${x}</li> 
            <li>${x}</li> 
            <li>${x}</li>
        </ul>`)
    }

    f('hello');
*/
        

/*  створити функцію яка створює ul з трьома елементами li. 
    Текст li задати через аргумент всім однаковий. 
    Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/
 /*         
    function f(x,num) {
        document.write ('<ul>');
            for (let i=0; i<num; i++) {
                document.write(`<li>${x}</li>`);
            }
        document.write ('</ul>')
    }
    
    f('hello',3);
*/

/*  створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), 
    та будує для них список*/
/*
    let mass = ['hello',1234,true];
    function f(array) {
        for (let i=0; i<array.length; i++) {
            document.write (`<li>${array[i]}</li>`);
        }
    }

    f(mass)
*/

/*  створити функцію яка приймає масив об'єктів з наступними полями id,name,age , 
    та виводить їх в документ. Для кожного об'єкту окремий блок.*/         
/*            
    let randomArray = [ {id:12345, name:'artur', age:24},
                        {id:85214, name:'anna', age:21},
                        {id:65412, name:'olga', age:23}];

    function f(array) {
        for (const i of array) {
            document.write (`<div>${i.id} ${i.name} ${i.age}</div>`);
            }
        }
    f(randomArray)
*/

//  створити функцію яка повертає найменьше число з масиву
/*
    let mass = [25,52,21,0,1];
    function f(array) {
        let minNumb = array[0];
            for (const i of array) {
                if (i < minNumb) {
                minNumb = i
            }
        }
        return minNumb
    }

    console.log (f(mass))
*/

//  створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
/*        
    let mass = [1,2,3];
        function f (array) {
            let sum = 0;
                for (const i of array) {
                    sum += i
                }
            return sum
        }

        console.log (f(mass))
*/