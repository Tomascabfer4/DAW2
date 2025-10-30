# Crea el programa en Python a partir del siguiente código en Java
n = 10
for i in range(n):
    for j in range(1, n - i + 1):
        print(" ", end="")
    print("*", end="")
    for k in range(i):
        print("|", end="")
    for j in range(i):
        print("|", end="")
    print("*", end="")
    print()