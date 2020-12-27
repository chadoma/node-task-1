import express from "express";

import userRoutes from './routes/userRoutes';


const app = express();


app.set("view engine", "ejs");

app.use("/public", express.static(__dirname + "/public/"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
const port = 3000;


app.use('', userRoutes);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
