import express from 'express'
import routes from './routes/post'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(express.json())

app.use('/', routes)

const port = process.env.PORT

app.listen(port || 3000, () => {
    console.log('Your app is listening on port: ', port)
})