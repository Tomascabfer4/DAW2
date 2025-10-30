# 10. Escribir un programa que pregunte por consola por los productos de una cesta de la compra,
# separados por comas, y muestre por pantalla cada uno de los productos en una línea distinta.
lista_productos = input("Introduzca todos los productos de la cesta de la compra separados en comas:")
productos = lista_productos.split(',')
for producto in productos:
     print(producto)


    