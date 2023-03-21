const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast')

const { title } = require('process')

const app =  express()
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

 app.get('', (req, res) => {
     res.render('index', {
        title: 'Weather App',
        name: 'Nalanda Suresh'
     })
     })

app.get('/about', (req,res) => {
    res.render('about', {
        title: 'Nature',
        name: 'Nalanda Suresh'
     })
})

app.get('/help', (req,res) => {
    res.render('help', {
        msg: 'You are such a nice person. Keep going',
        title: 'Help',
        name: 'Nalanda Suresh'
     })
})


// app.get('/help', (req, res) => {
//     res.send([{
//         name: 'Ammu',
//         age: 20
//     },{
//         name: 'Nanda',
//         age: 1
//     }])
// })

// app.get('/about', (req, res) => {
//     res.send('About')
// })

// app.get('/weather', (req, res) => {
//     res.send('Your weather perfect')
// })

// app.get('/about',(req,res) => {
//     res.send('<h1>About</h1>')
// })


app.get('/weather',(req,res) => {
    if(!req.query.address) {
        return res.send({
            error: 'You must provide an address.'
        })
    }
    res.send({
        forecast: 'It is snowing',
        location: 'Trivandrum',
        address: req.query.address
    })
})

app.get('/products', (req,res) => {
    if(!req.query.search) {
        return res.send({
            error: 'You must provide a search item'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req,res) => {
    res.render('404', {
        title: '404',
        name: 'Nalanda Suresh',
        errorMessage: 'Help article not Found.'
    })
})

app.get('*',(req,res) => {
    res.render('404', {
        title: '404',
        name: 'Nalanda Suresh',
        errorMessage: 'Page not Found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})