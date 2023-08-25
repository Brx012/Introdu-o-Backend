import express from "express";
import dotenv from "dotenv";
dotenv.config();   // Requisição do pacote do express
import roteadorUsuario from "./routes/usuario.js";
import roteadorLogin from "./routes/login.js";
   
//index.js
import { selectUsuarios, selectUsuario, insertUsuario, deleteUsuario, updateUsuario } from "./db/index.js";



const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(roteadorUsuario);
app.use(roteadorLogin);
app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  res.json({
    nome: "Bernardo Rafael Sales Saraiva",      // Substitua pelo seu nome
  });
  console.log("Rota / solicitada");
});



app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});
