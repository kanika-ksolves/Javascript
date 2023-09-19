//map
const arr = [1,2,3,4,5,6,7,8]

const newArr = arr.map(e => e+20)
console.log(newArr)

//filter
const filterArr = arr.filter(e => e ===2 || e === 4);
console.log(filterArr)

//sort
const fruits = ["mango", "banana", "guava"]
console.log(fruits.sort())

const data = [9,3,4,12,7,5];
const asc = data.sort(function(a,b){
    return a-b;
})
console.log(asc)

const desc = data.sort(function(a,b){
    return b-a;
})
console.log(desc)

//forEach
data.forEach(e => {
    console.log(e)
})

//concat
const a1 = ["d", "q", "a"]
const a2 = ["c", "f", "p"]
console.log(a1.concat(a2))

//every
//This method checks every element in the array that passes the condition, returning true or false as appropriate.
const array = [1,2,3,4,5,6,7,8,9,0];
const greater = array.every(e => e>5);
console.log(greater)  //false
const smaller = array.every(e => e<=9);
console.log(smaller)  //true

//some 
//This method checks if at least one element in the array that passes the condition,
// returning true or false as appropriate.
const greater1 = array.some(e => e>5);
console.log(greater1) //true
const smaller1 = array.some(e => e<9);
console.log(smaller1) //true

//includes
const array1 = [1,5,3,7]
console.log(array1.includes(2)) //false
console.log(array1.includes(1)) //treue

//join
const array2 = ['k','a', 'n', 'i', 'k', 'a']
console.log(array2.join('')) //kanika

//reduce
//This method applies a function against an accumulator and
// each element in the array to reduce it to a single value.
const num = [1,2,3,4]
const sum = num.reduce(function(accumulator, currentValue){
    console.log(accumulator)
    console.log(currentValue)
    return accumulator+currentValue
},30);  //accumulator starts with initial value 0
console.log(sum)


//find
console.log(num.find(e => e>3))

//findIndex
console.log(num.findIndex(e => e === 4))
console.log(num.findIndex(e => e === 40))

//indexOf
console.log(num.indexOf(4))
console.log(num.indexOf(40))

//fill
const number = new Array(3);
number.forEach(e => {
    console.log(e)
})
console.log(number)
console.log(number.fill(10))

//push
console.log(num.push(90))
console.log(num)

//pop
console.log(num.pop())
console.log(num)
