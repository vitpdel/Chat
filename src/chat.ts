import  *   as  express from "express";
import { createServer} from 'http';
import  *   as  socket  from    "socket.io"
import { Server } from 'socket.io';

class   App{
    public  app!:    express.Application
    public  server!: Server
    public  httpServer  =   createServer(this.app)
    private io!: socket.Server
    public  PORT:number =   8000

    constructor(){
        this.routes()
        this.ServerCreate
        this.sockets()
        this.listen()
        this.works()
    }
      
    routes(){
        this.app    =   express()
        this.app.route("/").get((req,   res)    =>{
            res.sendFile(__dirname+"/index1.html")
        })
    }

    private ServerCreate():void{
        this.httpServer.listen(this.server)
    }

    private sockets():void{
        this.io =   new Server(this.httpServer)
    }

    private listen():void{
        this.io.on("connection",(socket)=>{
            console.log("A user connected")
        
            socket.on('chat message',(msg:string)=>{
            console.log(`message: ${msg}`)
            })
        })
    }

    private works():void{
        console.log("Everything's working!")
        console.log(`URL: http://localhost:${this.PORT}/index.html`)
    }
}

export  default new App()