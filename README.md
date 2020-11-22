[preview](PREVIEW.png)

# EXPRESS APPLICATION SERVER - Node example.

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

## Installation

Instalar dependencias del proyecto:

```bash
npm install
```

Generar dist/:

```bash
tsc
```

## Usage

Consola, levantar servicio:

```bash
npm start
```

Navegador:

[home]
(http://localhost:5500/)

[test]
(http://localhost:5500/test)
