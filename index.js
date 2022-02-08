const express = require('express')
const app = express()
const port = 3000
app.use(express.json)
// ez mindig kell, ha valahonnan egy json típusú dolog érkezik, alapból felparseolja, belerakja req.bodyba

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
    // if (!req.query.name || !req.query.speed) return res.send("Missing parameters") // ha így csinálom, kell return res.send elé, így a szebb, de lehetne if-else, akkor nem kell return
    // const newCar = {
    //     id: cars.length + 1,
    //     model: req.query.name,
    //     maxSpeed: req.query.speed
    // }
    if (!req.body.name || !req.body.speed) return res.send("Missing parameters") // ha így csinálom, kell return res.send elé, így a szebb, de lehetne if-else, akkor nem kell return
    if (!req.body.name || !req.body.speed) return res.send("Missing parameters") // ha így csinálom, kell return res.send elé, így a szebb, de lehetne if-else, akkor nem kell return
    const newCar = {
        id: cars.length + 1,
        model: req.body.name,
        maxSpeed: req.body.speed
    }
    // const newCar = {
    //     id: cars.length + 1,
    //     model: req.query.name,
    //     maxSpeed: req.query.speed
    // }
    cars.push(newCar)
    // vagy úgy push, hogy cars.push({ide a key-valuek})
    res.send("DONE")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
