// const { response } = require("express")

console.log('Client side javascript file is loading')

fetch('https://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

