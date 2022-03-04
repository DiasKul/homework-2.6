// // Домашняя работа
// // 1)	Напишите код, который находит наиболее часто используемый элемент массива.
// const arr =[7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7]
// let count, temp = 0
// arr.sort()
// for(let i = 0; i<arr.length; i++){
// 	count = 0
// 	for(let j = 0; j<arr.length; j++){
// 		if(arr[i] === arr[j]){
// 			count++
// 		}
// 	}
// 	if(temp < count){
// 		temp = count
// 	}
// }
// console.log('Наиболее часто используемый элемент массива: ' + count);

// // 2)	Напишите функцию removeItem которая  принимает коллбэк и удаляет определенный элемент из массива. 
// const arr = [1, 4, 7, 5, 2, 3, 6, 7, 12, 2, 1, 7, 2]
// console.log('Массив до удаления: ' + arr);
// const removeItem = (callback) => {
// 	let thisDelete = prompt('Введите число, которое хотите удалить?')
// 	callback(thisDelete, arr)
// }

// const elemDeleted = (index, arr) => {
// 	let elem = index - 1
// 	return arr.splice(elem, 1)
// }
// removeItem(elemDeleted)
// console.log('Массив после удаления: ' + arr)


// // 3)	Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины
// const arr  = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// let temp
// const newArr = arr.map((item, i) => {
// 	temp = arr[i].length
// 	return temp
// })
// console.log(newArr);

// // Самостоятельная работа
// // 1)	Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]
// const arr = [1, 2, 3]
// console.log('Массив до реверса: ' + arr);
// arr.reverse()
// console.log('Массив после реверса: ' + arr);


// // Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// const arr = [1, 2, 3, 4, 5]
// console.log('Массив до: ' + arr);
// arr.splice(1, 0, 'a', 'b')
// arr.splice(6, 0, 'c')
// arr.splice(8, 0, 'e')
// console.log('Массив после: ' + arr);

// // 3)	Напишите функцию  которая возвращает массив, элементы которого отсортированы по убыванию их значений 
// const numbers =[3, 8, 7, 6, 5, -4, 3, 2, 1]
// console.log('Массивв до: ' + numbers);
// function sortArr(){
// 	for(let i = 0; i<numbers.length; i++){
// 		if(numbers[i]<numbers[i+1]){
// 			let temp = numbers[i]
// 			numbers[i] = numbers[i+1]
// 			numbers[i+1] = temp
// 		}
// 	}
// }
// sortArr()
// console.log('Массивв после: ' + numbers);
