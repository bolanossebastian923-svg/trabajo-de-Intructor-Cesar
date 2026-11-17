const mysql = require("mysql2");

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1728Benavides",
    database: "trabajo"
});

conexion.connect((error) => {
    if (error) {
        console.log("Error al conectar con MySQL:", error);
    } else {
        console.log("Conexión a MySQL exitosa");
    }
});

module.exports = conexion;