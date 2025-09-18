# mongoose-laprida-fernando
Elegi un modelo de una consecionaria, donde deseo guardar los datos de un Automovil, sus componentes y llevar registro de sus mantenimientos:

Automovil,Pieza y Motor:

*A un Automovil se le enbede los detalles (los detalles mismos del auto: color,marca,etc.)

*Automovil tiene un solo motor, a pezar de que se puede considerar como una pieza, decidi agregarlo como "Motor" ya que lo considero una parte vital del vehiculo. (1:1)

*Un Automovil puede tener muchas revisiones, que estas pueden ser adjudicadas al vehiculo a lo largo de su vida util, es decir, que sean agregadas sobre el tiempo. (embedidos o tambien en otra coleccion si fuese necesario)

*Un Automovil puede tener muchas piezas, y una pieza puede estar en muchos autos. (N:M)
