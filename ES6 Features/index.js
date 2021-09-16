// ******** FUNCTIONS

// DEFAULT PARAMETERS

const multiply = (a, b = 1) => a * b

// console.log(multiply(2,2))
// console.log(multiply(2))
// console.log(multiply(2,2))

const search = (query = "eminem") => {
    console.log("http://pexels.com/api/v1/" + query)

}

search()
search("nirvana", "queen", "eminem", "queen", "queen")

// REST PARAMETERS

const withRestParams = (param1, param2, param3, ...rest) => {
    console.log(param1)
    console.log(rest)

}

withRestParams(1,2,3,4,5,6,7,8)


// TERNARY OPERATOR

let studName = "John"

let isAdmitted

if( studName === "Robert") {
    isAdmitted = true
} else {
    isAdmitted = false
}

// console.log(isAdmitted)

const isAdmitted2 = studName === "Robert" ?  true : false
// console.log(isAdmitted2)


// this

// CONSTRUCTOR FUNCTIONS 

function Person(name, age, ...rest ) {
    this.name = name
    this.age = age
    // this.additional = rest[1]
    console.log(this)
}

let tutor1 = new Person("Stefano", 30, 41, 50)
let tutor2 = new Person("Riccardo", 32, )

// console.log(tutor1)
// console.log(tutor2)


// ARROWS CANNOT CREATE OBJECT AS A CONSTRUCTOR
// const PersonArrow = (name) => {
//     this.name = name
//     console.log(this)
// }

// let tutor3 = new PersonArrow("Diego")

// console.log(tutor3)

// let func = function() {}
// func()

const myObject = {
    name :"John",
    jobs: ["freelance", "strive teacher", "superhero", "ux designer"],
    myMethod: function () {
        console.log("OUTER THIS", this)
        this.jobs.forEach(function(job){
            console.log("INNER THIS", job)
            console.log(`${this.name} is a ${job}`)
        })
    }
}
const myObject2 = {
    name :"John",
    jobs: ["freelance", "strive teacher", "superhero", "ux designer"],
    myMethod: function () {
        console.log("OUTER THIS", this)
        this.jobs.forEach((job) => {
            console.log("INNER THIS", job)
            console.log(`${this.name} is a ${job}`)
        })
    }
}

const myObject3 = {
    name :"John",
    jobs: ["freelance", "strive teacher", "superhero", "ux designer"],
    myMethod: function () {
        console.log("OUTER THIS", this)
        
        setTimeout(function() { console.log(this) }, 1000)
        setTimeout(() => { console.log(this) }, 1000)
        
    }
}

console.log(myObject.myMethod())

console.log(myObject2.myMethod())

myObject3.myMethod()

function notAMethod() {
    console.log(this)
}

notAMethod()


myObject.anotherMethod = notAMethod

myObject.anotherMethod()


// button.addEventListener("click", function(){
//     console.log("clicked")
//     this.classList.add("d-none")
// })

// button.addEventListener("click", (e) => {
//     console.log("clicked")
//     e.target.classList.add("d-none")
// })

//DESTRUCTURING

const obj = {
    name: "Alexander",
    specialty: "sidekick"
}


// const name = obj.name
// const specialty = obj.specialty

const { name, specialty } = obj


console.log(name)
console.log(specialty)


// FACTORY FUNCTIONS

function factory (name, surname) {
    return {
        name: name,
        surname: surname
    }
}
function factory2 (name, surname) {
    return {
        name,
        surname
    }
}

console.log(factory("Stefano", "Miceli"))


const person = ({name, lastName, area: { region }}) => {
    console.log(name)
    console.log(lastName)
    // console.log(obj.area.region)
    console.log(region)
}

person({name: "Stefano", lastName: "Miceli", area: {location: "Italy", region: "FVG"}})


const randomArr = ["a", "b", "c", "d", "e"]

// const third = randomArr[2]
// const [first, second, third, fourth, fifth] = randomArr
// const [, , third, , fifth] = randomArr
const [, , third, ...rest] = randomArr

console.log(third)
// console.log(fifth)
console.log(rest)


// SPREAD OPERATOR

const student = {
    name: "Alexander",
    surname:"Ejiroghene",
    batch: "Aug21",
    
}
const student2 = {
    name: "Emilian",

    planet: "Mars"
}


// const student3 = Object.assign({ street: "grafton st." }, student, student2)

const student3 = {...student, ...student2, street: "grafton st.", planet: "Earth"}

const student4 = {...student}


delete student3.batch
console.log(student)
console.log(student3)
console.log(student4)

const sentence = ["this", "is", "so", "cool"]
console.log(...sentence)

const word = "We are at Strive School"

console.log(...word)
console.log([...word].join(""))

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, 3 ,3 ,3, ...arr2]
console.log(arr3)


// ARRAY METHODS

const letters = ["a", "b", "c", "d", "e"]
const numbs = [1,1,1,1,1,1]

console.log(letters.some(letter => letter === "c"))
console.log(numbs.every(num => num === 1))

const nestedArrays = [[1,2], 3, [4,[[5]],6]]

console.log(...nestedArrays.flat(3))
// console.log(nestedArrays[2][1][0])


const arrOfNums = [1,2,3,4,5,6,7,8,9,10] 

console.log(arrOfNums.indexOf(7))
console.log(arrOfNums.indexOf(11))


const lettersWithDupe = ["a", "b", "c", "c", "c", "c", "c", "d", "e"]

console.log(lettersWithDupe.lastIndexOf("c"))
console.log(lettersWithDupe.indexOf("c"))

console.log(lettersWithDupe.filter((elem, index, array) => array.indexOf(elem) === index))

const unique = [...new Set(lettersWithDupe)]
console.log(unique)

const uniqueWithReduce = lettersWithDupe.reduce((accumulator, currentValue) => accumulator.includes(currentValue) ? accumulator : [...accumulator, currentValue] , []) // ["a", "b", "c"]

console.log(uniqueWithReduce)


