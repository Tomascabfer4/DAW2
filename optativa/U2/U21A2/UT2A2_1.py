# 1.Escribir   un   programa   que   pida   al   usuario   un   número   entero   y   muestre   por   pantalla   un
# triángulo rectángulo como el de más abajo, de altura el número introducido.
# *
# **
# ***
# ****

numeroTriangulo = int(input("Introduce la altura del triangulo :"))
for i in range(numeroTriangulo + 1):
    for j in range(i):
        print("*", end="") # Para que no haga salto de linea al escribir los asteriscos en una fila.
    print() # Para que haga salto de linea entre fila y fila
