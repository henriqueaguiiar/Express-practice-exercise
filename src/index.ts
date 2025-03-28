import  express from "express";
import dotenv from "dotenv";
dotenv.config();

const server = express();


server.get("/home", (request, reply)=>{
    const message:string = 
            `Olá, seja bem-vindo ao servidor!\n
            Para somar dois números, acesse /somar\n
            Para subtrair dois números, acesse /subtrair\n
            Para multiplicar dois números, acesse /multiplicar\n
            Para dividir dois números, acesse /dividir`;            
    reply.send(message);
});

server.get("/somar", (request, response)=>{
    const num1 = parseFloat(process.env.NUM_1 || "0");
    const num2 = parseFloat(process.env.NUM_2 || "0");
    const result = num1 + num2;
    response.send(`Resultado: ${result.toString()} `);
});

server.get("/subtrair", (request, response)=>{
    const num1 = parseFloat(process.env.NUM_1 || "0");
    const num2 = parseFloat(process.env.NUM_2 || "0");
    const result = num1 - num2;
    response.send(`Resultado: ${result.toString()} `);
});

server.get("/dividir", (request, response)=>{
    const num1 = parseFloat(process.env.NUM_1 || "0");
    const num2 = parseFloat(process.env.NUM_2 || "0");
    const result = num1 / num2;
    response.send(`Resultado: ${result.toString()} `);
});

server.get("/multiplicar", (request, response)=>{
    const num1 = parseFloat(process.env.NUM_1 || "0");
    const num2 = parseFloat(process.env.NUM_2 || "0");
    const result = num1 * num2;
    response.send(`Resultado: ${result.toString()} `);
});

server.listen({
    port: process.env.PORT || 8000,
    log: console.log(`Servidor rodando na porta ${process.env.PORT || 8000}`)
});

