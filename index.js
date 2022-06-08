require("dotenv").config();
let message = "";
const express = require("express");
const path = require("path");
//Utilizando biblioteca "path" do express para acessar index.js e style.css

const app = express();
//Variável que está recebendo o express
const routes = require('./src/routes/routes')

app.set("view engine", "ejs");
//Fala para o servidor que a view engine (motor que vai renderizar) é o ejs.

app.use(express.static(path.join(__dirname, "public")));
//Arquivos estáticos (index.js e style.css).

app.use(express.urlencoded());
//Cliente envia info do input através de JSON. e URLENCODED recebe
app.use(routes)



const port = process.env.PORT || 3000;

app.listen(port, () => 
  // Porta em que o servidor está rodando
  console.log(`${port}`)
);
  