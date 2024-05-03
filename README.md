# Arquitectura por capas

inicia proyecto --------------------------------- 00:08  
juguetes json en compas mongo db ---------------- 00:28  
conectando mongo db ----------------------------- 00:30  
juguetes router --------------------------------- 00:33  
juguete model ----------------------------------- 00:39  
juguetes service -------------------------------- 00:46  
juguete controller ------------------------------ 00:56  
mejorando router -------------------------------- 00:59  
explicacion de como funciona -------------------- 01:03

desde nuestra app, nos conectamos con las rutas, en las rutas se conectan los endpoints
con los metodos del controlador. El controlador gestiona las peticiones del cliente y 
las respuestas del servidor. En el controlador se llama al service y lo que se onbtiene 
como respuesta se envia al cliente. 

repaso de como interactuan las capas del proyecto 01:21  
utils ------------------------------------------- 01:36  
modificando controller -------------------------- 01:38  
consejos para mejorar el servidor --------------- 01:42  
configrando packagejson y commander ------------- 01:48  
configurando dotenv para modo produccion o dev -- 02:35  




dejé en ------- 00:24
(req, res) => 
() => {}