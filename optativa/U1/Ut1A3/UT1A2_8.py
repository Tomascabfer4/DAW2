# 8. Escribir un programa que pregunte por consola el precio de un producto en euros con dos
# decimales y muestre por pantalla el número de euros y el número de céntimos del precio
# introducido.
import math

precio = input("Introduce el precio de un producto con dos decimales: ")
centimos, euros = math.modf(float(precio))
print(f"Los centimos del producto son {round(centimos, 2)}")
print(f"Los euros del producto son {euros}")
