//const dotEnv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//Lectura del .env
//dotEnv.config();

const cors = require("cors");
const logger = require("morgan");
const chalk = require("chalk");

//Routes
const AvionRouter = require("./routes/Avion_route")
const FacturaRouter = require("./routes/Factura_route")
const HorarioRouter = require("./routes/Horario_route")
const ReservacionesRouter = require("./routes/Reservaciones_route")
const RolRouter = require("./routes/Rol_route")
const RutaRouter = require("./routes/Ruta_route")
const TipoAvionRouter = require("./routes/TipoAvion_route")
const UsuarioRouter = require("./routes/Usuario_route")
const VuelosRouter = require("./routes/Vuelos_route")

// definimos el uri de la base de datos definido en el archivo .env
const mongoDB = "mongodb+srv://admin:admin123@srlairline.gnae4.mongodb.net/SRLAirline?retryWrites=true&w=majority";
// se conecta a la base de datos
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// esta es la conexión a la base de datos la cual usaremos para detectar errores o conexiones
const db = mongoose.connection;
//  reporta un error en la conexión
db.on("error", console.error.bind(console, "MongoDB connection error"));
//  cuando se conecta a la BD monstrara este mensaje
db.once("open", () => console.log("Connected Successfully to DB " + mongoDB));
// se define el puerto que va a escuchar basado en el archivo de configuración .env
const port = 3000;
// usamos el middleware cors para aceptar llamadas cors en nuestro servidor
app.use(cors());
// este middleware nos sirve para loggear las llamadas al servidor
app.use(logger("dev"));

// middleware para manejar requests y respuestas json
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// todas las rutas las definimos aqui
app.use("/Avion/", AvionRouter);
app.use("/Factura/", FacturaRouter);
app.use("/Horario/", HorarioRouter);
app.use("/Reservaciones/", ReservacionesRouter);
app.use("/Rol/", RolRouter);
app.use("/Ruta/", RutaRouter);
app.use("/TipoAvion/", TipoAvionRouter);
app.use("/Usuario/", UsuarioRouter);
app.use("/Vuelos/", VuelosRouter);

app.listen(port, () => {
    console.log(
      `${chalk.green("✓")} App is running at ${chalk.bgGreen(
        `http://localhost:${port}`
      )}`
    );
    console.log("  Press CTRL-C to stop\n");
  });