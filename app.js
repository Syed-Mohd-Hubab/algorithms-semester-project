const express = require('express')
const bodyParser=require('body-parser')
const dotenv = require('dotenv')
const morgan = require('morgan')
/*  initializing packages   */

//requiring routes
const algoRoutes = require('./routes/algo')
const basicRoutes = require('./routes/basic')

//initializing app
const app = express()

//body-parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//setting view engine
app.set('view engine', 'ejs')

//setting public directory
app.use(express.static(__dirname + '/public'))

//requiring env variables in process.env
dotenv.config({ path: './config/config.env' })

//declaring variables
const PORT = process.env.PORT || 6000
const NODE_ENV = process.env.NODE_ENV

//setting morgan dev if we are in development mode
if(NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//routing all request
app.use('/', basicRoutes) 
app.use('/algorithms', algoRoutes)

app.listen(
    PORT,
    () => { console.log(`Server started at ${PORT} in ${NODE_ENV} mode.`) } // use tilde ` to parse ${variable}
)