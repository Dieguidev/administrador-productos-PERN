
import { Request, Response } from "express";
import Product from "../models/Product.model";



export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.create(req.body);

    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
}

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll({
      order: [["price", "DESC"]],
      attributes: { exclude: ["createdAt", "updatedAt"] }
    });
    res.json({ data: products });
  } catch (error) {
    console.log(error);
  }
}

export const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    await product.update(req.body);
    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
}

export const updateProductAvailability = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.availability = !product.dataValues.availability;
    await product.save();

    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.destroy();

    res.json({ message: "Product deleted" });
  } catch (error) {
    console.log(error);
  }
}
