import { Router } from 'express'
import categorys from "../categorys.json" with {type :"json"}

export const categorysRoute = Router()

categorysRoute.get('/', (req, res) => {
  res.json(categorys)
})
