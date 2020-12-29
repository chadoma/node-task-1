import { Request, Response } from "express";
import { RegisterUser, UserInfo } from "../interfaces/user-interface";
import { isValidInput, isValidEmail, isValidPassword } from "../utils/validation";
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';


class AuthController {

    register = (req: Request, res: Response) => {
        const {userName, email, password, confirmPassword} = req.body as RegisterUser;
        if (
            isValidInput(userName, email, password, confirmPassword) &&
            isValidEmail(email) &&
            isValidPassword(password, confirmPassword)
        ) {
            const id = uuid();
            const hashPassword = bcrypt.hashSync(password, 12);
            const isLogin = true;

            const user: UserInfo = {id, userName, email, hashPassword, isLogin};
            res.render('home', {user});
        } else {
            console.log('error');
            res.redirect('/register');
        }
    };


}

export default AuthController;
