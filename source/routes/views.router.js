import express from "express"

const router = express.Router()


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



router.get("/", (req, res) => {
   let numRamdom = Math.floor(Math.random() * users.length);
   let currentUser =users[numRamdom]
   res.render("index", {
    user:currentUser , 
    style: "index.css",
    isAdmin: currentUser.role === "admin", 
    food });
});

router.get("/register", (req,res) => {
    console.log(users);
    res.render("register")

})

router.post("/user", (req,res) =>{
    const {nombre, email, pass} = req.body;
    console.log({nombre,email,pass});
    users.push({nombre, email, pass})

    res.render("register" , {registroExitoso: true})
})


router.get("/chat", (req,res) =>{
    res.render("index")
})

router.post("/chat", (req,res) =>{

})


export default router;