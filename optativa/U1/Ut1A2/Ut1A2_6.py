# 6. Escribir un programa que pida al usuario su peso (en kg) y estatura (en metros), calcule el
# índice de masa corporal y lo almacene en una variable, y muestre por pantalla la frase Tu
# índice de masa corporal es <imc> donde  <imc> es el índice de masa corporal calculado
# redondeado con dos decimales
peso = float(input("Ingrese su peso en kg: "))
estatura = float(input("Ingrese su estatura en metros: "))
imc = peso / (estatura ** 2)
print(f"Tu índice de masa corporal es {imc:.2f}") #.2f para redondear a dos decimales, 
# si pones por ejemplo .3f redondea a tres decimales y debes poner antes : para indicar que es formato.