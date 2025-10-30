# 4. Escribir un programa que pregunte al usuario por el número de horas trabajadas y el coste
# por hora. Después debe mostrar por pantalla la paga que le corresponde.
print("Ingrese el número de horas trabajadas:")
horas_trabajadas = int(input())
print("Ingrese el coste por hora:")
coste_por_hora = int(input())
paga_total = horas_trabajadas * coste_por_hora
print(f"La paga que le corresponde es {paga_total}€")