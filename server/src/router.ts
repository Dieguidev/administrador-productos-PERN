import { Router } from "express";
import { body, param } from "express-validator";
import { createProduct, getProductById, getProducts } from "./handlers/product";
import { handleInputErrors } from "./middlewares";


export const router = Router();

router.get("/products", getProducts);

router.post("/products",
  body('name').notEmpty().withMessage('El nombre del producto no puede ir vacío'),
  body('price')
    .notEmpty().withMessage('El precio del producto no puede ir vacío')
    .isNumeric().withMessage('Valor no válidoo')
    .custom(value => value > 0).withMessage('Precio no válido'),
    handleInputErrors,
  createProduct);

router.get("/products/:id",
  param('id').isNumeric().withMessage('El id debe ser un número'),
  handleInputErrors,
  getProductById);
