# Genera la siguiente figura:
#     * 
#    * * 
#   * * * 
#  * * * * 
# * * * * * 
#  * * * * 
#   * * * 
#    * * 
#     * 
altura_maxima = 5 
for i in range(1, altura_maxima + 1):
    for s in range(altura_maxima - i):
        print(" ", end="")
    for a in range(i):
        print("* ", end="")
    print()
for i in range(altura_maxima - 1, 0, -1):
    for s in range(altura_maxima - i):
        print(" ", end="")
    for a in range(i):
        print("* ", end="")
    print()