const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(express.json())
app.use(cors())
// npm i cors

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

    if (!req.body.model || !req.body.maxSpeed) return res.send("Missing parameters")

    const newCar = {
        ...req.body,
        id: cars.length + 1,
    }
    cars.push(newCar)
    res.send("DONE")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
