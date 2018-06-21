console.log("PAGINA LISTA")
var SERVICE_URL = "https://jsonplaceholder.typicode.com/"
var Person = {
    "name": "Pippo",
    "age": 37,
    "children": [{
            "name": "Pipino",
            "age": 3
        }, {
            "name": "Gigino",
            "age": 2
        }

    ],
    "partner": {
        "name": "Bilbo",
        "age": 28
    }
}
console.log(Person.name, Person.children[0].name)