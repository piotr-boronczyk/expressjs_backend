import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import routes from './routes/post'
import dotenv from 'dotenv'
import { errorConverter } from './middlewares/errorHandling'



const app = express()

app.use(express.json())

app.use('/', routes)

app.use(errorConverter)

const port = process.env.PORT

app.listen(port || 3000, () => {
    console.log('Your app is listening on port: ', port)
})