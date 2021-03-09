const express = require('express');

const app = express();

app.use(express.json());

/**
 * GET - Buscar informações dentro do servidor
 * POST - Criar um objeto / Inserir uma informação no servidor
 * PUT - Alterar uma informação no servidor
 * PATCH - Alterar uma informação específica no servidor
 * DELETE - Deletar uma informação no servidor
 */

 /**
  * Tipos de parâmetros
  * 
  * Route Params = Identificar um recurso (editar/deletar/buscar)
  * Query Params = Paginação / Filtro
  * Body Params => Objetos para inserção/alteração de um recurso (JSON)
  */

app.get("/", (request, response) => {
    // return response.send("Hello world!") // Vamos usar poucas vezes o send()
    // return response.json({ message: "Hello World Ignite - Fundamentos NodeJS!" });

    return response.json({ message: "Hello World Ignite!" });
});

app.get("/courses", (request, response) => {   
    const query = request.query;
    console.log(query);
    return response.json(["Curso 1", "Curso 2", "Curso 3"])
});

app.post("/courses", (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request, response) => {  
    const params = request.params;
    console.log(params)
    return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso 8", "Curso 2", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso 8", "Curso 2", "Curso 4"]);
});


app.listen(3333);
