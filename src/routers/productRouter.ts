import { Router } from 'express';
import { getProducts, postProduct, deleteProduct, updateProduct } from '../controllers/productController.js';
import { validateProduct } from '../middlewares/productValidator.js';

const productRouter = Router();

productRouter.get("/products", getProducts);
productRouter.post("/products", validateProduct, postProduct);
productRouter.delete("/products/:productId", deleteProduct);
productRouter.post("/products/:productId", updateProduct);

export default productRouter;