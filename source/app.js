import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js"; 

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


// con app.engine() inicio el motor y le paso el motor y luego lo instancio
app.engine("handlebars", handlebars.engine()
)


//seteamos e manera estatica la carpeta public
app.use(express.static(__dirname + "/public"))

// ahora con app.set(views, ruta) tenemos que decir en qué parte del proyecto van a estar las vistas
app.set("views", __dirname + "/views")

// por ultimo con app.engine("view engine", "handlebars") indicamos que el motor que inicializamos arriba
//es el que queremos usar. es importante que cuando el servidor vaya a renderizar le digamos qué motor usar.
// en este caso el motor de handlebars
app.set("view engine", "handlebars")



const users = [
     {
        name: "mariana",
        apellido: "minoni",
        edad:33,
        email:"marianaminoni@gmail.com",
        tel:1125646788,
        role: "admin"
    },
    {
        name: "matias",
        apellido: "minoni",
        edad:23,
        email:"matiminoni@gmail.com",
        tel:11112233,
        role: "usuario"

    },
    {
        name: "magali",
        apellido: "minoni",
        edad:28,
        email:"magaminoni@gmail.com",
        tel:112568452,
        role: "usuario"

    },
    {
        name: "jorgelina",
        apellido: "minoni",
        edad:53,
        email:"jorr2011@gmail.com",
        tel:115522664,
        role: "usuario"

    }

]

const food = [
    {
       name: "banana",
       price: 15
    },
    {
        name: "manzana",
        price: 20
     },
     {
        name: "pera",
        price: 25
     },
     {
        name: "naranja",
        price: 10
     },

]



app.get("/", (req, res) => {
    let numRamdom = Math.floor(Math.random() * users.length);
    let currentUser =users[numRamdom]
    res.render("index", {user:currentUser , isAdmin: currentUser.role === "admin", food });
});




app.listen(8080, () =>{
    console.log("servidor funcionando en puerto 8080");

})
