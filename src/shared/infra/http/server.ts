import express from 'express'
import "reflect-metadata";
import getConnection from "../typeorm/index"
import { routes } from './routes'

getConnection()

const app = express()
const port = 3333

app.use(routes)

app.listen(port, () => {
  console.log("Server running on port " + port)
})