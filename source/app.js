import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js"; 
import router from "./routes/views.router.js";
import { Server } from "socket.io";


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/", router)


// con app.engine() inicio el motor y le paso el motor y luego lo instancio
app.engine("handlebars", handlebars.engine()
)

//seteamos de manera estatica la carpeta public8
app.use(express.static(__dirname + "/public"))

// ahora con app.set(views, ruta) tenemos que decir en qué parte del proyecto van a estar las vistas
app.set("views", __dirname + "/views")

// por ultimo con app.engine("view engine", "handlebars") indicamos que el motor que inicializamos arriba
//es el que queremos usar. es importante que cuando el servidor vaya a renderizar le digamos qué motor usar.
// en este caso el motor de handlebars
app.set("view engine", "handlebars")


const httpServer = app.listen(8080, () =>{
    console.log("servidor funcionando en puerto 8080");

})

const socketServer = new Server (httpServer);

const mssges = [];

socketServer.on("connection", socket => {
    console.log("nuevo cliente conectado");

    socket.on("message", data =>{
        mssges.push({userName : user, mssges : data});
        console.log(data);
        socketServer.emit("message", data);
        socketServer.emit("messages", mssges);

    })

    socket.emit("messages", mssges);

})

