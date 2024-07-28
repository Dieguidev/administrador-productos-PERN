import { Router } from "express";
import { body, param } from "express-validator";
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct, updateProductAvailability } from "./handlers/product";
import { handleInputErrors } from "./middlewares";


export const router = Router();

/**
 * @swagger
 * components:
 *     schemas:
 *         Product:
 *             type: object
 *             properties:
 *                 id:
 *                     type: integer
 *                     description: The product ID
 *                     example: 1
 *                 name:
 *                     type: string
 *                     description: The product name
 *                     example: "Laptop"
 *                 price:
 *                     type: number
 *                     description: The product price
 *                     example: 1000
 *                 availability:
 *                     type: boolean
 *                     description: The product availability
 *                     example: true
 */


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

router.put("/products/:id",
  param('id').isNumeric().withMessage('El id debe ser un número'),
  body('name').notEmpty().withMessage('El nombre del producto no puede ir vacío'),
  body('price')
    .notEmpty().withMessage('El precio del producto no puede ir vacío')
    .isNumeric().withMessage('Valor no válidoo')
    .custom(value => value > 0).withMessage('Precio no válido'),
  body('availability').isBoolean().withMessage('Valor no válido'),
  handleInputErrors,
  updateProduct);

router.patch("/products/available/:id",
  param('id').isNumeric().withMessage('El id debe ser un número'),
  updateProductAvailability)

router.delete("/products/:id",
  param('id').isNumeric().withMessage('El id debe ser un número'),
  handleInputErrors,
  deleteProduct);
