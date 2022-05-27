console.log('hello world')
// const hello = ('heading')
// hello.innerHTML = ":)"
//Asynchronous Javascript:
// fetch() function


// fetch("https://api.randomuser.me/?nat=US&results=1")
//     .then(res=>res.json())
//     .then(json =>json.results)
//     .then(console.log)
//     .catch(console.error)

const getPerson = async ()=>{
    try{
        let res = await fetch("https://api.randomuser.me/?nat=US&results=1")
        let results  = res.json()
        console.log(results)
    }catch(error){
        console.log(error)
    }

}

getPerson()

//build a promises

//Functional Programming
const messages = [
    message => console.log(message),
    message => console.log(message)
]

messages[0]("Hi guys")
messages[1](messages[0])
// wtf??
// Declarative programming is a style of
// programming where applications are structured in a way that prioritizes
// describing what should happen over defining how it should happen.

const sentence = "Germany is a destination"
// Regular expression / /g
console.log(sentence.replace(/ /g,"-"))
//Imperative vs Declarative Programming page 75