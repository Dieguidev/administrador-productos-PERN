import { Router } from "express";
import { createProduct } from "./handlers/product";


export const router = Router();

router.get("/", (req, res) => {
  res.json("Hello, World!");
});

router.post("/products", createProduct);
