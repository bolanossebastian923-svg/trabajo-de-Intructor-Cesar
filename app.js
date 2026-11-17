const express = require("express");
const cors = require("cors");

const app = express();

const rutaUsuario = require("./ROUTES/UsuarioRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/usuarios", rutaUsuario);

app.get("/", (req, res) => {
    res.send("API funcionando correctamente");
});

app.listen(3000, () => {
    console.log("Servidor funcionando en el puerto 3000");
});