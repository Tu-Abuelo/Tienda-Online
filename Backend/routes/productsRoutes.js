import { Router } from 'express'
import { ProductControllers } from '../controllers/products.js'
import { ProductModel } from '../models/product.js'

export const productRoute = Router()

const productControllers = new ProductControllers({ productModel: ProductModel })

productRoute.get('/', productControllers.getAll)
<<<<<<< HEAD
=======
productRoute.post('/', productControllers.createProuct)
>>>>>>> 2eb196bf955bf4de9144c7b119cc28a9ac473df7
