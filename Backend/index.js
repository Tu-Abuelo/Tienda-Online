import express, { json } from 'express'
import { productRoute } from './routes/productsRoutes.js'
import { categorysRoute } from './routes/categorysRoute.js'
import { productsCors } from './middelwares/cors.js'

const app = express()
app.disable('x-powered-by')

const desiredPort = process.env.PORT ?? 1234

app.use(json())
app.use(productsCors())

app.use('/products', productRoute)
app.use('/categorys', categorysRoute)

app.use((req, res) => {
  res.status(404).send('error 404')
})

app.listen(desiredPort, () => {
  console.log(`Server activo en http://localhost:${desiredPort}`)
})
