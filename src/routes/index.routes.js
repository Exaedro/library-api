import { Router } from "express";
import BooksController from "../controllers/books.js";

export const router = new Router();

router.get("/library", (req, res) => BooksController.getAll(req, res)); // Obtener todos los libros
router.get("/library/:isbn", (req, res) => BooksController.getByIsbn(req, res)); // Obtener libros por ISBN
