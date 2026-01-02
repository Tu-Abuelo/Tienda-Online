import products from "../products.json" with {type: "json"}


export class ProductModel {
  static async getAll ({limit}) {
    if (limit) {
        return products.slice(0, limit)
    }
  return products
  }
}
