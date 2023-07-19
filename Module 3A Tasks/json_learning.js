//How to convert JS to JSON
const myObject ={
    name: 'vehicle',
    type: 'car',
    color: 'black'
 }

 const json =JSON.stringify(myObject)
 console.log(json)


  //How to convert JSON to JS
  
 console.log(JSON.parse(json))