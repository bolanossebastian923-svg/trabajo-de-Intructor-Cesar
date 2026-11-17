
const conexion = require("../conexion");

class UsuarioControllers {

    consultarUsuarios(req, res) {
        conexion.query("SELECT * FROM usuarios", (error, resultado) => {
            if (error) {
                res.status(500).json({
                    mensaje: "Error al consultar usuarios"
                });
            } else {
                res.json(resultado);
            }
        });
    }

    registrarUsuario(req, res) {
        const { nombre, apellido, correo } = req.body;

        const sql = "INSERT INTO usuarios (nombre, apellido, correo) VALUES (?, ?, ?)";

        conexion.query(sql, [nombre, apellido, correo], (error, resultado) => {
            if (error) {
                res.status(500).json({
                    mensaje: "Error al registrar usuario"
                });
            } else {
                res.json({
                    mensaje: "Usuario registrado correctamente",
                    id: resultado.insertId
                });
            }
        });
    }

}

module.exports = UsuarioControllers;
