import { Request, Response } from "express";
import Product from "../models/Product.model";
import { check, validationResult } from "express-validator";


export const createProduct = async (req: Request, res: Response) => {
  const { name, price, availability } = req.body;

  await check('name').notEmpty().withMessage('El nombre del producto no puede ir vacío').run(req);
  await check('price')
    .notEmpty().withMessage('El precio del producto no puede ir vacío')
    .isNumeric().withMessage('Valor no válidoo')
    .custom(value => value > 0).withMessage('Precio no válido')
    .run(req);

  let errors = validationResult(req);









  .

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const product = await Product.create(req.body);

  res.json({ data: product });
}
