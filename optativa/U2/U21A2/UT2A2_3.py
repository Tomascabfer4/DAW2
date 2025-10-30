# Escribir   un   programa   que   pida   al   usuario   un   número   entero   y   muestre   por   pantalla   un
# triángulo rectángulo como el de más abajo.
# 1
# 3 1
# 5 3 1
# 7 5 3 1
# 9 7 5 3 1
numeroTriangulo = int(input("Introduce la altura del triangulo :"))
for i in range(1, numeroTriangulo + 1):
    impar_inicial = 2 * i - 1
    for j in range(impar_inicial, 0, -2):
        print(j, end=" ") # Para que no haga salto de linea al escribir los asteriscos en una fila.
    print() # Para que haga salto de linea entre fila y fila