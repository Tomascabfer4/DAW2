# Escribir un programa que muestre por pantalla la tabla de multiplicar del 1 al 10.

# Pongo 11 porque el bucle empieza en 0 y quiero que llegue a 10
for (i) in range(11):
    print ("Tabla de multiplicar del ", i)
    for j in range(11):
        print(i * j)
    print() # Para que haga salto de linea entre fila y fila
