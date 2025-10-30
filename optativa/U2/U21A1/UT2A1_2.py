# Los tramos impositivos para la declaración de la renta en un determinado país son los
# siguientes:
# Renta Tipo impositivo
# Menos de 10000€ 5%
# Entre 10000€ y 20000€ 15%
# Entre 20000€ y 35000€ 20%
# Entre 35000€ y 60000€ 30%
# Mas de 60000€ 45%
# Escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el tipo 
# impositivo que le corresponde.
rentaAnual = int(input("Por favor, introduce tu renta anual: "))
if (rentaAnual <= 10000):
    print ("El tipo de impositivo que le corresponde es del 5%")
elif (rentaAnual > 10000 and rentaAnual <= 20000):
    print("El tipo impositivo que le corresponde es del 15%")
elif( rentaAnual > 20000 and rentaAnual <= 35000):
    print("El tipo impositivo que le corresponde es del 20%")
elif( rentaAnual > 35000 and rentaAnual <= 60000):
    print("El tipo de impositivo que le corresponde es del 30%")
elif( rentaAnual >= 60000):
    print("El tipo de impositivo que le corresponde es del 54%")