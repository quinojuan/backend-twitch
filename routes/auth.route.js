import express from "express";
const router = express.Router();

router.get("/login", (req, res) => {
  res.json({ ok: "login" });
});

router.post("/register", (req, res) => {
  res.json({ ok: true });
});

export default router; // la gracia del default es que cuando lo importo lo puedo llamar con el nombre que quiero
