/*
-   ============================
-   SOCKET_IO, EXPRESS, HTTP, TS.
-   ts_socket-rest_example, chat
-   ============================
*/

/**
 * =====================
 * SERVER UNIT
 * fvvelasquez, this.fvvelasquez@gmail.com
 * =====================
 *
 * Encapsulamos el procedimiento básico para levantar un Servidor Express-Socket REST.
 * Lo hacemos de manera didáctica para tener claridad en cada uno de los procesos.
 * En una aplicación real deberemos considerar el patrón de diseño que convenga a nuestras necesidades.
 *
 */

// EXPRESS:
import express from "express";
import { Router } from "express";
// Traemos los listeners que van a responder a los endpoints REST disponibles:
import mainRoutes from "../routes/main.routes";
// ----------------------------

// SOCKET / HTTP:
import http from "http";
import socketIO from "socket.io";
// ----------------------------

// =====================
class ServerUnit {
	// =====================

	// EXPRESS:
	private expressApplication: express.Application;
	private router: express.Router;
	// ----------------------------

	// SOCKET / HTTP:
	private http_server: http.Server;
	private socket_io_server: socketIO.Server;
	// ----------------------------

	constructor(public PORT: number) {
		// Traemos express application y un router para mapear los endpoints REST
		this.expressApplication = express();
		this.router = Router();
		// ----------------------------
		// Creamos un http server a partir del express application
		// Este http server nos va a servir de puente para trabajar express y socket io en el mismo servidor.
		this.http_server = new http.Server(this.expressApplication);
		this.socket_io_server = require("socket.io")(this.http_server);
		// ----------------------------
	}

	routesInit() {
		// Endpoints disponibles, serán atendidos por los métodos creados en mainRoutes.
		this.router.get("/", mainRoutes.chat);
		this.router.get("/chat", mainRoutes.chat);
		this.router.get("/test", mainRoutes.test);
		// ----------------------------
	}
	middlewaresInit() {
		// MIDDELWARES:
		// Indicamos el router que va a menjar las rutas solicitadas.
		this.expressApplication.use("/", this.router);
		// ----------------------------
	}
	socket_io_on() {
		// SOCKET EVENTS:
		// Es buena idea considerar una clase que aglutine los 'listener'
		// de cada evento definido a continuación, ya que este código va a crecer rapidamente.
		// De momento, se ha dejado directamente en 'arrow functions' por ser sólo un ejemplo.
		this.socket_io_server
			// ----------------------------ON CONNECTION:
			.on("connection", (socket) => {
				console.log("-- user connected!");

				// ----------------------------ON DISCONNECT:
				socket.on("disconnect", () => {
					console.log("-- user dis-connected!");
				});
				// ----------------------------ON CHAT MESSAGE:
				socket.on("chat message", (message: string) => {
					console.log("message: " + message);
					// Por simplicidad, se prefiere 'emit' sobre 'broadcast'.
					this.socket_io_server.emit("chat message", message);
				});
				// ----------------------------
			});
		// ----------------------------
		// ----------------------------
	}

	// SERVER:
	// Levantamos el servidor.
	// En este caso, http_server, ya que sobre este estamos manejando la unión de socket con express.
	start(callback: () => void) {
		this.routesInit();
		this.middlewaresInit();
		this.socket_io_on();
		this.http_server.listen(this.PORT, callback);
	}
}

// =====================
import { SERVER_PORT } from "../configs/environment.config";
export default new ServerUnit(SERVER_PORT);
// =====================
