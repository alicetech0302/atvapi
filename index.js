require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db");

app.use(express.json());

app.get("/PRODUTO",(request, response) => {
    response.json(db.consultaProdutos());
});

app.get("/clientes/:id",(request, response)=>{
    const id = request.params.id;
    response.json(db.consultaProduto(id));
});


app.post("/PRODUTO",(request,response) =>{
    const cliente = request.body;
    db.inserirProduto(cliente);
    response.sendStatus(201);
});

app.patch("/PRODUTO/:id",(request, response)=>{
    const id = request.params.id;
    const dadoscliente = request.body;
    db.alteraCliente(id, dadoscliente);
    response.sendStatus(200);

});

app.delete("/PRODUTO/:id",(request, response)=>{
    const id = request.params.id;
    db.deletarProduto(id);
    response.sendStatus(204);
});

app.get("/",(request, response) => {
    response.json(
        {
            message:"Rota do da Loja está OK!!"
        }
    )
});

app.listen(process.env.PORT, () => { 
    console.log("Oi servidor  estar no AR!!");
} );
