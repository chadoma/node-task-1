import { Router } from "express";


const router = Router();
import AuthController from "../controller/authController";
import UserController from "../controller/userController";


const authController = new AuthController();
const userController = new UserController();

router
    .post('/register', authController.register);


router
    .get('/login', userController.getLogin)
    .get('/register', userController.getRegister)
    .get('/home', userController.getHome);


export default router;
