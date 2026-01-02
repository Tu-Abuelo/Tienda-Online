import { Router } from 'express'
import { ProductControllers } from '../controllers/products.js'
import { ProductModel } from '../models/product.js'

export const productRoute = Router()

const productControllers = new ProductControllers({ productModel: ProductModel })

productRoute.get('/', productControllers.getAll)
