# El programa hay que realizarlo mediante funciones. 
# •10 intentos.
# •Función: para generar un número aleatorio entre el 1 y el 100. El siguiente código muestra
# como se genera un numero aleatorio entre un rango.
# import random
# numero_aleatorio = random.randint(1, 100)
# •Función: pedir numero al usuario.
# •Función: para indicar si es el numero es mayor o menor. Y mostrar además el número de
# intentos.
# •Función: para indicar que hemos acertado el número o hemos perdido.
import random

def main():
    print("Empieza el juego")
    numeroAleatorio = generarNumeroAleatorio()
    for i in range(10):
        numeroUsuario = pedirNumeroUsuario()
        numeroEsMayoroMenor(numeroUsuario, numeroAleatorio)
        if (numeroAcertado(numeroUsuario,numeroAleatorio) == True):
            break
        elif (i == 9):
            print("Te has quedado sin intentos, el numero era el", numeroAleatorio)
        
def generarNumeroAleatorio():
    return random.randint(1,100)

def pedirNumeroUsuario():
    while True:
        try:
            return int(input("Introduce un número entre 1 y 100: "))
        except ValueError:
            print("Entrada no válida. Por favor, introduce un número entero.")

def numeroEsMayoroMenor(numeroUsuario, numeroAleatorio):
    if (numeroUsuario > numeroAleatorio):
        print("El número es menor")
    elif (numeroUsuario < numeroAleatorio):
        print("El número es mayor")

def numeroAcertado(numeroUsuario, numeroAleatorio):
    if (numeroUsuario == numeroAleatorio):
        print("¡Has acertado el número!")
        print("El número era" , numeroAleatorio)
        return True
    
if __name__=='__main__':
    main()