import  express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const server = express();


server.get("/home", (request: Request, response: Response)=>{
    const message:string = 
            `Olá, seja bem-vindo ao servidor!\n
            Para somar dois números, acesse /somar\n
            Para subtrair dois números, acesse /subtrair\n
            Para multiplicar dois números, acesse /multiplicar\n
            Para dividir dois números, acesse /dividir`;            
            response.send(message);
});

const num1: number = parseFloat(process.env.NUM_1 || "0");
const num2: number = parseFloat(process.env.NUM_2 || "0");

server.get("/somar", (request: Request, response: Response)=>{
    const result: number = num1 + num2;
    response.send(`Resultado: ${result.toString()} `);
});

server.get("/subtrair", (request: Request, response: Response)=>{
    const result: number = num1 - num2;
    response.send(`Resultado: ${result.toString()} `);
});

server.get("/dividir", (request: Request, response: Response)=>{
    const result: number = num1 / num2;
    response.send(`Resultado: ${result.toString()} `);
});

server.get("/multiplicar", (request: Request, response: Response)=>{
    const result: number = num1 * num2;
    response.send(`Resultado: ${result.toString()} `);
});

server.listen({
    port: process.env.PORT || 8000,
    log:  console.log(`Servidor rodando na porta ${process.env.PORT || 8000}`)
});

