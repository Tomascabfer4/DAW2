# La pizzería Bella Napoli ofrece pizzas vegetarianas  y no vegetarianas a sus clientes. Los
# ingredientes para cada tipo de pizza aparecen a continuación.

# •Ingredientes vegetarianos: Pimiento y tofu.
# •Ingredientes no vegetarianos: Peperoni, Jamón y Salmón.

# Escribir un programa que pregunte al  usuario  si quiere  una pizza vegetariana o no, y en
# función de su respuesta le muestre un menú con los ingredientes disponibles para que elija.
# Solo se puede eligir un ingrediente además de la mozzarella y el tomate que están en todas
# la pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana o no y todos
# los ingredientes que lleva.

while True:
    print ("Por favor, indique si desea pizza vegetariana o no: ")
    vegetarianaONo = int(input("Vegetariana (1) / Clasica (2): "))
    if ( vegetarianaONo == 1 ):
        print ("Has elegido pizza vegetariana")
        while True:
            print ("Indique uno de los siguientes ingredientes")
            ingredienteVegetariana = int(input("Pimiento (1) / Tofu (2)"))
            if ( ingredienteVegetariana == 1):
                print ("Has elegido la pizza vegetariana con mozzarella, tomate y pimiento")
                break
            elif ( ingredienteVegetariana == 2):
                print ("Has elegido la pizza vegetariana con mozzarella, tomate y tofu")
                break
            else:
                print("No has introducido un ingrediente valido")
        break
    elif ( vegetarianaONo == 2 ):
        print("Has elegido pizza clasica")
        while True:
            print ("Indique uno de los siguientes ingredientes")
            ingredienteClasica = int(input("Peperoni (1) / Jamón (2) / Salmón (3)"))
            if ( ingredienteClasica == 1):
                print ("Has elegido la pizza Clasica con mozzarella, tomate y peperoni")
                break
            elif ( ingredienteClasica == 2):
                print ("Has elegido la pizza Clasica con mozzarella, tomate y jamón")
                break
            elif ( ingredienteClasica == 3):
                print ("Has elegido la pizza Clasica con mozzarella, tomate y salmón")
                break
            else:
                print("No has introducido un ingrediente valido")
        break
    else:
        print("No has introducido un numero de pizza valida")

