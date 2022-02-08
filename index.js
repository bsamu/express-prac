const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(express.json())
// ez mindig kell, ha valahonnan egy json típusú dolog érkezik, alapból felparseolja, belerakja req.bodyba
app.use(cors())
// npm i cors

// insomnia (google) - insomnia.rest - requestek küldése
// terminalból request curl (google)
// thunder egy extension requestekre

const cars = [
    {
        id: 1,
        model: "BMW",
        maxSpeed: 150
    },
    {
        id: 2,
        model: "Toyota",
        maxSpeed: 120
    },
    {
        id: 3,
        model: "Tesla",
        maxSpeed: 170
    }
]

app.get('/api/cars', (req, res) => {
    res.json(cars)
    // ált nem app.send-et használunk, az generikus
})

app.post('/api/cars', (req, res) => {
    // http://localhost:3000/api/cars?name=Opel&speed=170 insomniaban post req
    // ezt később átírjuk, url http://localhost:3000/api/cars body JSON, oda a query-k objectként
    // console.log(req.query); // _ 1. paraméterként kap vmit, de nem használjuk semmire

    console.log(req.body);

    if (!req.body.model || !req.body.maxSpeed) return res.send("Missing parameters") // ha így csinálom, kell return res.send elé, így a szebb, de lehetne if-else, akkor nem kell return

    // const newCar = {
    //     id: cars.length + 1,
    //     model: req.query.name,
    //     maxSpeed: req.query.speed
    // }

    const newCar = {
        ...req.body, // így viszont ha bullshitet írnak bele frontenden, az is belekerül, lehetne model: req.body.model, ... is
        id: cars.length + 1,
    }
    cars.push(newCar) // vagy úgy push, hogy cars.push({ide a key-valuek})
    res.send("DONE")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
