const user={name:"Ansal",age:25}
console.log(`hi, my name is ${user.name} and I'm ${user.age}` )
let a='hi hello'
let b=12
let c=true
console.log(a,b,c)
const person={
    name:"Rahul",
    age:45,
    isStudent:false
}
for (let key in person) {
    console.log(key+":"+person[key])
}
console.log(person)
console.log(person.name,person.age,person.isStudent)
const fruits=['apple','banan','cherry']
for (let fruit of fruits){
    console.log(fruit)
}
for (let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}
console.log(fruits.length)
fruits.push("mango")
fruits.unshift("orange")
console.log(fruits[0])
fruits.pop()
fruits.shift()
console.log(fruits[0])
console.log(fruits)
const users=[{name:"riya"},{name:"sara"}]
console.log(users[1].name)
const add=(a,b)=>a+b
console.log(add(3,4))
function greet(name){
    return `Hello, ${name}!`
}
console.log(greet("your_name"))
const greet1=(name)=>{
    return `Hey,${name}`
}
console.log(greet1("ram"))
const greet2=name=>`Hey, ${name}`
console.log(greet2(" hello"))