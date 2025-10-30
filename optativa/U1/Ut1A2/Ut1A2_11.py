# 11. Una panadería vende barras de pan a 3.49€ cada una. El pan que no es el día tiene un
# descuento  del  60%.  Escribir  un  programa  que  comience  leyendo  el  número  de  barras
# vendidas que no son del día. Después el programa debe mostrar el precio habitual de una
# barra de pan, el descuento que se le hace por no ser fresca y el coste final total.
num_barras = int(input("Ingrese el número de barras de pan vendidas que no son del día: "))
precio_habitual = 3.49
descuento = 0.60
precio_con_descuento = precio_habitual * (1 - descuento)
costo_total = num_barras * precio_con_descuento
print(f"Precio habitual de una barra de pan: {precio_habitual:.2f}€")
print(f"Descuento por no ser fresca: {descuento * 100:.0f}%")
print(f"Coste final total por {num_barras} barras de pan: {costo_total:.2f}€")