import { Elysia } from "elysia";
let data = [
  {name:"top" , email:"test@gmail.com"},
  {name:"top" , email:"test@gmail.com"},
  {name:"top" , email:"test@gmail.com"},
  {name:"top" , email:"test@gmail.com"},
]
const app = new Elysia()
.post("/user" , (body) => {
    return body;
})
.get("/user-list" ,()=>{
    return data;
})
.get("/", () => "Hello top")
.listen(4000);
console.log(
  `hi 🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
