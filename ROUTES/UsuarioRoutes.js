const express = require("express");
const rutaUsuario = express.Router();

const UsuarioController = require("../SRC/UsuarioControllers");
const usuario = new UsuarioController();

rutaUsuario.get("/consultar", (req, res) => {
    usuario.consultarUsuarios(req, res);
});

rutaUsuario.post("/registrar", (req, res) => {
    usuario.registrarUsuario(req, res);
});

module.exports = rutaUsuario;