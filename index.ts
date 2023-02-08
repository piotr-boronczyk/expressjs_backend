import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import routes from './routes/post'
import { errorConverter, errorHandler } from './middlewares/errorHandling'



const app = express()

app.use(express.json())

app.use('/', routes)

app.use(errorConverter)
app.use(errorHandler)

const port = process.env.PORT

app.listen(port || 3000, () => {
    console.log('Your app is listening on port: ', port)
})