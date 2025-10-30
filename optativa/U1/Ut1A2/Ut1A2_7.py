# 7. Escribir un programa que pida al usuario dos números enteros y muestre por pantalla la <n>
# entre  <m>  da  un  cociente  <c>  y  un  resto  <r> donde  <n> y  <m> son  los  números
# introducidos por el usuario, y  <c> y  <r> son el cociente y el resto de la división entera
# respectivamente.
n = int(input("Ingrese el primer número entero (n): "))
m = int(input("Ingrese el segundo número entero (m): "))
c = n // m
r = n % m # El operador %(Modulo) calcula el resto de la división entera.
print(f"{n} entre {m} da un cociente {c} y un resto {r}")