# Búsqueda del tesoro 2
# Para ello vamos a utilizar una matriz de 100 X 100. La forma mas fácil es utilizando la librería
# Numpy.
# Instalación: pip install numpy
# import numpy as np
# matriz = np.zeros((100, 100),dtype=int)
# print(matriz.shape) # Imprime (100, 100) para verificar las dimensiones
# matriz[1, 2]=2 # Modifico el valor [1,2]
# print(matriz[1, 2]) # Imprimo el valor
# Realizar el programa que realice lo siguiente:
# •Tenemos 10 intentos.
# •Nos cree la matriz  con ceros como lo hemos visto anteriormente.
# •Genere la fila y columna donde se esconderá el tesoro.
# •Muestre la matriz con 10 filas y 10 columnas. La primera vez serán todos 0.
# •Pedir al usuario la fila y columna:
# ◦Si ha acertado donde esta mostrar “Has encontrado el Tesoro”.
# ◦Si no, introducir en esa casilla un 1, he indicar si el tesoro está al Norte, Sur, Este u
# Oeste.
# ◦Mostrar la matriz.
# •Continuar hasta encontrar Tesoro o acabar con los 10 intentos.

import numpy as np
import random

matriz = np.zeros((100, 100), dtype=int)
tesoroFila = random.randint(0, 99)
tesoroColumna = random.randint(0, 99)

def mostrarMatriz(m):
    print(m[:10, :10])

print("¡Bienvenido a la Búsqueda del Tesoro!")
print("Tienes 10 intentos para encontrarlo.")
print("Las coordenadas van de 0 a 99 (filas y columnas).")
print()
mostrarMatriz(matriz)
for intento in range(1, 11):
    print(f"\nIntento {intento}/10")
    try:
        fila = int(input("Introduce la fila (0-99): "))
        columna = int(input("Introduce la columna (0-99): "))
    except ValueError:
        print("Entrada no válida. Usa solo números enteros.")
        continue
    if not (0 <= fila < 100 and 0 <= columna < 100):
        print("Coordenadas fuera de rango. Intenta de nuevo.")
        continue
    if fila == tesoroFila and columna == tesoroColumna:
        print("¡Has encontrado el Tesoro!")
        break
    else:
        matriz[fila, columna] = 1
        direccion = []
        # Usamos append para añadir las direccion al vector de direccion
        if fila > tesoroFila:
            direccion.append("Norte")
        elif fila < tesoroFila:
            direccion.append("Sur")
        if columna > tesoroColumna:
            direccion.append("Oeste")
        elif columna < tesoroColumna:
            direccion.append("Este")
        # Usamos join para unir las direcciones con " y "
        print("💨 El tesoro está hacia el " + " y ".join(direccion))
        mostrarMatriz(matriz)

else:
    print("\n💀 Se acabaron los intentos.")
    print(f"El tesoro estaba en la posición: ({tesoroFila}, {tesoroColumna})")

print("\nFin del juego.")
