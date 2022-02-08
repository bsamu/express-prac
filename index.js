const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

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
})

app.post('/api/cars', (req, res) => {
    console.log(req.body);

    if (!req.body.name || !req.body.speed) return res.send("Missing parameters")

    const newCar = {
        id: cars.length + 1,
        model: req.body.name,
        maxSpeed: req.body.speed
    }
    cars.push(newCar)
    res.send("DONE")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
