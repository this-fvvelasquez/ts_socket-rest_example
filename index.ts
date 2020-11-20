/*
-   ============================
-   SOCKET_IO, EXPRESS, HTTP, TS.
-   ts_socket-rest_example, chat
-   fvvelasquez, this.fvvelasquez@gmail.com
-   ============================
-
-   Ejemplo básico para entender el uso de socket.io, express, con TypeScript, NodeJS.
-   Separamos algunas responsabilidades del código en capas, aproximandonos a MVC,
-   sin embargo, aglutinamos el proceso referente al server en la clase 'ServerUnit'
-   con fines didácticos.
-
-   Disponibles:
-   GET "/chat", "/"
-   Sirve un html que, a su vez, crea una instancia de 'socket io client' para cada navegador que solicita la ruta.
-
-   A través de un formulario tipo chat, el cliente puede emitir un evento (mensaje),
-   que es a su vez es escuchado por 'socket io server' (NodeJS).
-   Al ser escuchado dicho evento, 'socket io server' emite el mensaje recibido
-   para ser escuchado por todos los clientes conectados (Navegadores/Pestañas).
-   Y lo despliega en pantalla.
-
-
-   GET "/test",
-   Responde un JSON { "message": "listo para implementar. Vease en: 'routes/main.routes'" }.
*/

// Traemos la instancia de clase que aglutina todos los procesos referentes a
// express, htttp, socket.
import ServerUnit from "./units/server.unit";
// ----------------------------

// Levantamos el servicio:
ServerUnit.start(() => {
	console.log(`--- Listening on PORT ${ServerUnit.PORT}`);
});
// ----------------------------
