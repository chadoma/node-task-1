import { Request, Response } from "express";


class UserController {

    getRegister = (req: Request, res: Response) => {
        res.render('register');
    };

    getLogin = (req: Request, res: Response) => {
        res.render('index');
    };

    getHome = (req: Request, res: Response) => {
        console.log(req.body.userName);
        res.render('home');
    };

}


export default UserController;
