import mongoose from "mongoose";

import configObject from "./config/config.js";
const { mongo_url } = configObject;

mongoose.connect(mongo_url)
.then(() => {console.log("Conectado a Mongo DB");})
.catch((error) => {console.log("Error de conexión a Mongo DB" + error);})
//Ahora importamos mongoConfig en app.js