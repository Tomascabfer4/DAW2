# 1. Escribir un programa que pregunte el nombre del usuario en la consola y un número entero e
# imprima por pantalla en líneas distintas el nombre del usuario tantas veces como el número
# introducido.
print("Ingrese el nombre de usuario:")
usuario = str(input())
print("Ingresa un numero entero:")
entero = int(input())
for i in range (0,entero):
    print(f"{usuario}")