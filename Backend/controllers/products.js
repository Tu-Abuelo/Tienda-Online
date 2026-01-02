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
}
