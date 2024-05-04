import express from "express";
import cors from "cors";

const app = express(); 
const PUERTO = 8080;
import "./database.js"; 
import juguetesRouter from "./routes/juguetes.router.js";


//Middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"));
app.use(cors());

//rutas
app.use("/juguetes", juguetesRouter)
//listen
app.listen(PUERTO, () => {
    console.log(`Conectado a http://localhost:${PUERTO}`);
})