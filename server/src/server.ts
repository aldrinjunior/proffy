import express from "express";

const app = express();
//recurso da rota se chama users, agora o require é o que o front informa e response é a resposta do retorno do backend
app.get("/users", (require, response) => {
  const users = [
    { name: "aldrin", age: "20" },
    { name: "fulano", age: "20" },
  ];
  return response.json(users);
});

//localhost:3333/users

app.listen(3333);
