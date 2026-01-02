import products from "../products.json" with {type: "json"}
import crypto from "node:crypto"

export class ProductModel {
  static async getAll ({limit}) {
    if (limit) {
        return products.slice(0, limit)
    }
  return products
  }
  static async createProduct ({input}){
    const newProduct = {
      id:crypto.randomUUID(),
      ...input
    }
    products.push(newProduct)
    return newProduct
  }
}
