//type annotation examples below



// directly bewlow is example of Type infeence
let apples = 9;

apples = 7

let speed = 'yellow'

let hasName = true
let nothingMuch:null = null
let nothing: undefined = undefined

//built in objects

let now: Date= new Date()
let colors: string[] = ['red', 'green']
let myNumbers: number[] = [1,2,3]

//classes

class Car {

}

let car: Car = new Car()

//object literal

let point: { x: number; y: number} = {
  x: 10,
  y: 20
}
// array

let colorsArray: string[] = ['red', 'green', 'blue']

let newNumbers: number[] = [1,2,3]

let truths: boolean[] = [true,true,false]

// function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}
 
