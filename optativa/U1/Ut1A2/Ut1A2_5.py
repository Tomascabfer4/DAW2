# 5. Escribir un programa que lea un entero positivo, n introducido por el usuario y después
# muestre en pantalla la suma de todos los enteros desde 1 hasta n. La suma de los primeros
# enteros positivos puede ser calculada de la siguiente forma:
print("Introduce un número entero positivo:")
n = int(input())
verdadero = False
while verdadero == False:
    if n > 0:
        suma = (n * (n + 1)) // 2
        print("La suma de los enteros desde 1 hasta", n, "es:", suma)
        verdadero = True
    else:
        print("Debes introducir un numero positivo")
        n = int(input())
