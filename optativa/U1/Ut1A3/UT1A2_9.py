# 9. Escribir  un  programa  que  pregunte  al  usuario  la  fecha  de  su  nacimiento  en  formato
# dd/mm/aaaa y muestra por pantalla, el día, el mes y el año. Adaptar el programa anterior
# para que también funcione cuando el día o el mes se introduzcan con un solo carácter.
while True:
        fecha = input("Introduce la fecha de tu nacimiento en el formato dd/mm/aaaa: ")
        partes = fecha.split('/')
        if len(partes) != 3:
            print("\nError: El formato debe ser dd/mm/aaaa (o d/m/aaaa).")
            continue
        try:
            dia = int(partes[0].strip()) 
            mes = int(partes[1].strip())
            anho = int(partes[2].strip())
        except ValueError:
            print("\nError: Asegúrate de que el día, mes y año sean números válidos.")
            continue
        if dia < 1 or dia > 31:
            print("\nError: Un día debe estar entre 1 y 31.")
        elif mes < 1 or mes > 12:
            print("\nError: Un año tiene un máximo de 12 meses.")
        else:
            print("\n--- Fecha Desglosada ---")
            print(f"Día: {dia}")
            print(f"Mes: {mes}")
            print(f"Año: {anho}")
            break

    