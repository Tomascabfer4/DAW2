# 11. Escribir un programa que pregunte el nombre el un producto, su precio y un número de
# unidades y muestre por pantalla una cadena con el nombre del producto seguido de su precio
# unitario con 6 dígitos enteros y 2 decimales, el número de unidades con tres dígitos y el
# coste total con 8 dígitos enteros y 2 decimales.
nombre = input("Introduce el nombre del producto: ")

while True:
    try:
        precio = float(input("Introduce el precio unitario (ej: 12.34): "))
        break
    except ValueError:
        print("Error: El precio debe ser un número válido.")
while True:
    try:
        unidades = int(input("Introduce el número de unidades: "))
        break
    except ValueError:
        print("Error: Las unidades deben ser un número entero.")
coste_total = precio * unidades  
cadena_formateada = f"""
Nombre: {nombre}
Precio Unitario: {precio:09.2f} € 
Unidades: {unidades:03d} uds
Coste Total: {coste_total:011.2f} €
"""
print("-" * 40)
print(cadena_formateada)
print("-" * 40)