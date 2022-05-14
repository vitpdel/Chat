"use strict";
exports.__esModule = true;
var express = require("express");
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var App = /** @class */ (function () {
    function App() {
        this.httpServer = http_1.createServer(this.app);
        this.PORT = 8000;
        this.routes();
        this.ServerCreate;
        this.sockets();
        this.listen();
        this.works();
    }
    App.prototype.routes = function () {
        this.app = express();
        this.app.route("/").get(function (req, res) {
            res.sendFile(__dirname + "/index1.html");
        });
    };
    App.prototype.ServerCreate = function () {
        this.httpServer.listen(this.server);
    };
    App.prototype.sockets = function () {
        this.io = new socket_io_1.Server(this.httpServer);
    };
    App.prototype.listen = function () {
        this.io.on("connection", function (socket) {
            console.log("A user connected");
            socket.on('chat message', function (msg) {
                console.log("message: " + msg);
            });
        });
    };
    App.prototype.works = function () {
        console.log("Everything's working!");
        console.log("URL: http://localhost:" + this.PORT + "/index.html");
    };
    return App;
}());
exports["default"] = new App();
