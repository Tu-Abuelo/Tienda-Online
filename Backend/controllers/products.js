export class ProductControllers {
  constructor ({ productModel }) {
    this.productModule = productModel
  }

  getAll = async (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    const { limit } = req.query
    const products = await this.productModule.getAll({ limit })

    res.json(products)
  }
<<<<<<< HEAD
=======

  createProuct = async (req, res) => {
    const result = req.body

    const newProduct = await this.productModule.createProduct({ input: result })

    res.status(200).json(newProduct)
  }
>>>>>>> 2eb196bf955bf4de9144c7b119cc28a9ac473df7
}
