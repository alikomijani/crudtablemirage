import { createServer, Model } from "miragejs";
import { Response } from 'miragejs';


export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    models: {
      user: Model,
    },

    seeds(server) {
      server.create("user", {
        id: 1,
        first_name: "ali",
        lastName: "komijani",
        email: "akpa125@gmail.com",
        phone: "09396854785",
        role: "Teacher",
      });
      server.create("user", {
        id: 2,
        first_name: "alireza",
        lastName: "mosavi",
        email: "s.alireza.m8@gmail.com",
        phone: "09385479824",
        role: "Teacher assistant",
      });
    },

    routes() {
      this.namespace = "api";
      this.post("/accounts/login", (schema, request) => {
        const { username, password } = JSON.parse(request.requestBody);
        if ((username === "ali", password === "123")) {
          const data = {
            username: "ali",
            token: "123456",
            refreshToken: "987654",
          };
          return data;
        }else{
          return new Response(400, { }, { errors: [ 'invalid username or password'] });
        }
      });
      this.get("/users", (schema, request) => {
        const { first_name, lastName } = request.queryParams;
        console.log(first_name, lastName);
        return schema.users.all();
      });
      this.post("/users", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.users.create(attrs);
      });
      this.get("/users/:id", (schema, request) => {
        let id = request.params.id;
        return schema.users.find(id);
      });
    },
  });

  return server;
}
