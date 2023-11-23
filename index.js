// 1 задание
// function checkAge(age) {
//     if (age >= 18) {
//       alert( 'Доступ получен' )
//     }else  {
//        alert( 'Доступ закрыт' )
//     }
//   }

//   let age = prompt('Сколько вам лет?');

//   checkAge(age) 



// 2 задание
// let a = prompt('число а')
// let b = prompt('число b')
// let oper = prompt('/  *  -  + ')
// let z 

// function calculate(num) {
//     if (oper == '/') {
//         z = num(a) / num(b)
//         alert()
//     } else if (oper == '*') {
//         z = num(a) * num(b)
//         alert('otwet' + z)
//     } else if (oper == '-') {
//         z = num(a) - num(b)
//         alert('otwet' + z)
//     } else if (oper == '+') {
//         z = num(a) + num(b)
//         alert('otwet' + z)
//     }
// }

// далер ака я не понимаю что тут не правильно, я старалась


//3 задание
// function max_name(name1, name2, name3) {
//     let max = name1
//     if (name2.length > max.length) {
//       max=name2
//     }
//     if (name3.length > max.length) {
//       max=name3
//     }
//     return max
//   }
//   console.log(max_name('Alex', 'George', 'Michael'))


//4 задание 
//...

// 5 задание
// function proportcii(a, b, c) {
//     return (a / b) * c
//   } 
//   console.log( proportcii(20, 100, 50))



// //21.11.2023
// function fibonacci(k) {
//     let a = [1, 2]
//     if (k <= 2) {
//         return a.slice(1, k)
//     }
//     for (let i = 2; i < k; i++) {
//         let next = a[i - 1] + a[i - 2]
//         a.push(next)
//     }
//     return a
// }
// let num = prompt('введиту число')
// let b = fibonacci(num)
// console.log(b);

function sort(arr) {

    let sorted = false

    while (!sorted) {
      sorted = true
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          sorted = false
        }
      }
    }
    return arr
  }

  let numbers = [5, 2, 8, 1, 9 , 33]
  console.log(sort(numbers))




function names(a,b) {
  let email =`${a.toLowerCase()}${b.toLowerCase()}@emaile.com;`
  return email

}
  let name1 = prompt('Введите имя')
  let name2 = prompt('Введите фамилию')
  let email = names(name1, name2)
  console.log(email)
  names()
