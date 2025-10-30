# 6. Escribir un programa que pida al usuario que introduzca una frase en la consola y una vocal,
# y después muestre por pantalla la misma frase pero con la vocal introducida en mayúscula.
frase = input("Introduce cualquier frase: ")
vocal = input("Introduce cualquier vocal: ")
vocal_mayuscula = vocal.upper()
frase_modificada = frase.replace(vocal,vocal_mayuscula)
print(f"{frase_modificada} con la {vocal} en mayuscula")
