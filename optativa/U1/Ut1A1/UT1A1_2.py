entero = int(input("Introduce un entero: "))
print(entero)
print(type(entero))
booleano = bool(input("Introduce un booleano(true/false): "))
print(booleano)
print(type(booleano))
flotante = float(input("Introduce un float: "))
print (flotante)
print(type(flotante))
cadena = str(input("Introduce una cadena de texto: "))   
print(cadena)
print(type(cadena))
lista = []
for l in range(3):
    lista.append(int(input("Introduce un elemento de la lista: ")))
print(lista)
print(type(lista))
tupla = ()
for t in range(3):
    tupla += (int(input("Introduce un elemento de la tupla: ")),)
print(tupla)
print(type(tupla))
diccionario = {}
for d in range(3):
    clave = input("Introduce la clave del diccionario: ")
    valor = input("Introduce el valor del diccionario: ")
    diccionario[clave] = valor
print(diccionario)
print(type(diccionario))