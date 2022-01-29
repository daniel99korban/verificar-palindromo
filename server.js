const express = require("express");
const app = express();
const path = require("path");// modulo para manipulação de arquivos em diretórios

// public
    app.use(express.static(path.join(__dirname, "assets")));// pasta de arquivos estáticos
// rotas
    app.get("/", (request, response)=>{// rota principal
        response.sendFile(__dirname + "/index.html");
    });

// O numero de porta PORT da heroku é uma variavel de ambiente que contem o numero correto de onde irra rodar.
const PORT = process.env.PORT || 5000;// const PORT = 5000; poderei testar localmente usando localhost:5000
app.listen(PORT, ()=>{
    console.log("Ouvindo na porta: " + PORT);
});