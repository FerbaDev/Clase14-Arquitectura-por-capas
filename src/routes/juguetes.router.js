import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hola, estoy progrmando")
})

export default router;