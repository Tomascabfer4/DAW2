# 4. Los teléfonos de una empresa tienen el siguiente formato prefijo-número-extension donde el
# prefijo  es  el  código  del  país  +34,  y  la  extensión  tiene  dos  dígitos  (por  ejemplo  +34913724710-56).
# Escribir un programa que pregunte por un número de teléfono con este formato y muestre por pantalla
# el número de teléfono sin el prefijo y la extensión.

telefono_completo = input("Introduce un número de teléfono (ej. +34913724710-56): ")
partes = telefono_completo.split('-')
if len(partes) == 3:
    numero_central = partes[1]
elif len(partes) == 2:
    prefijo_y_numero = partes[0]
    numero_central = prefijo_y_numero[3:]     
else:
    print("El formato introducido no es válido. Asegúrate de usar guiones para separar el número y la extensión.")
print(f"\nEl número de teléfono sin prefijo ni extensión es: {numero_central}")
