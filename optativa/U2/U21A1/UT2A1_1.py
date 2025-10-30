# Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo al sexo y el
# nombre. El grupo A esta formado por las mujeres con un nombre anterior a la M y los
# hombres con un nombre posterior a la N y el grupo B por el resto. Escribir un programa que
# pregunte al usuario su nombre y sexo, y muestre por pantalla el grupo que le corresponde.
nombre = input("Por favor, introduce tu nombre: ").strip().upper()
sexo_input = input("Por favor, introduce tu sexo (M/H): ").strip().upper()
if sexo_input in ('M', 'F'):
    sexo = 'M' 
elif sexo_input in ('H', 'V'):
    sexo = 'H'
else:
    print("Error: Sexo no reconocido. Por favor, usa M o H.")
    exit()
inicial = nombre[0]
grupo = ''
if (sexo == 'M' and inicial < 'M') or \
   (sexo == 'H' and inicial > 'N'):
    grupo = 'A'
else:
    grupo = 'B'
print(f"\nHola, {nombre}. Tu sexo es {'Mujer' if sexo == 'M' else 'Hombre'}.")
print(f"La letra inicial de tu nombre es '{inicial}'.")
print(f"Te corresponde el **Grupo {grupo}**.")
