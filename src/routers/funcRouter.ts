import { Router } from 'express';
import { validateFuncionario } from '../middlewares/productValidator.js';
import { getFuncionarios, postFuncionarios, deleteFuncionario, updateFuncionario } from '../controllers/funcionarioController.js';

const funcRouter = Router();

funcRouter.get("/funcionarios", getFuncionarios);
funcRouter.post("/funcionarios", validateFuncionario, postFuncionarios);
funcRouter.delete("/funcionarios/:funcionarioId", deleteFuncionario);
funcRouter.post("/funcionarios/:funcionarioId", updateFuncionario);

export default funcRouter;