# 10. Imagina que acabas de abrir una nueva cuenta de ahorros que te ofrece el 4% de interés al
# año. Estos ahorros debido a intereses, que no se cobran hasta finales de año, se te añaden al
# balance  final  de  tu  cuenta  de  ahorros.  Escribir  un  programa  que  comience  leyendo  la
# cantidad de dinero depositada en la cuenta de ahorros, introducida por el usuario. Después el
# programa debe calcular y mostrar por pantalla la cantidad de ahorros tras el primer, segundo
# y tercer años. Redondear cada cantidad a dos decimales.
print("Introduce la cantidad de dinero depositada en la cuenta de ahorros:")
cantidad = float(input())
interes = 0.04
for anio in range(3):
    cantidad += cantidad * interes
    print(f"Cantidad tras el año {anio + 1}: {cantidad:.2f}€")