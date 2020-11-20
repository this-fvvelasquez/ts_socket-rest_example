import { Request, Response } from "express";
import path from "path";

// Definimos los métodos que manejan las peticiones configuradas en el Router express.
// =====================
class MainRoutes {
	// =====================
	test(request: Request, response: Response): void {
		// Esta respuesta sugiere que se debe crear un método de clase por cada EndPoint
		// que queramos hacer disponible, y después agregarlo al Router en 'units/server.unit'
		// Tal y como se hace para este método: 'test(request: Request, response: Response): void '
		response.json({
			status: "ok",
			operation: "test",
			message: "listo para implementar. Vease en: 'routes/main.routes'",
		});
		// ----------------------------
	}
	chat(request: Request, response: Response): void {
		// Se sirve un html que hace de cliente CHAT.
		// El html implementa un cliente socket y genera un emit cuando se escribe un mensaje en el formulario mostrado.
		// Para más detalles, ver 'views/chat.html' en la sección <script> al final del <body>
		const CHAT: string = path.normalize(
			__dirname + "/../../views/chat.html"
		);
		console.log(CHAT);
		response.sendFile(CHAT);
		// ----------------------------
	}
}
// export
export default new MainRoutes();
// ----------------------------
