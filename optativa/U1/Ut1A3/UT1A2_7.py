# 7. Escribir un programa que pregunte el correo electrónico del usuario en la consola y muestre
# por pantalla otro correo electrónico con el mismo nombre (la parte delante de la arroba @)
# pero con dominio ceu.es.
correo = input("Introduce tu correo electronico: ")
partes = correo.split('@')
if len(partes) != 2:
        print("El formato del correo electrónico no es válido.")
nombre_usuario = partes[0]
correo_modificado = nombre_usuario + '@' + "ceu.es"

print(f"El nuevo correo es {correo_modificado}")
