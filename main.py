estados = ["inicial", "binario", "octal", "decimal", "hexadecimal"]

estado = "inicial"

binario = ["0", "1"]
octal = [str(i) for i in range(0, 8)]
decimal = [str(i) for i in range(0, 10)]
hexadecimal = [str(i) for i in range(0, 10)]
for i in range(97, 103):
    hexadecimal.append(chr(i))
    hexadecimal.append(chr(i - 32))

error = False

numero = input("numero: ")

for c in numero:

    if c in binario:
        if estado == "inicial":
            estado = "binario"
        # Omitir lo siguiente?:
        elif estado == "binario":
            pass
        elif estado == "octal":
            pass
        elif estado == "decimal":
            pass
        elif estado == "hexadecimal":
            pass

    elif c in octal:
        if estado == "inicial":
            estado = "octal"
        elif estado == "binario":
            estado = "octal"
        # Omitir lo siguiente?:
        elif estado == "octal":
            pass
        elif estado == "decimal":
            pass
        elif estado == "hexadecimal":
            pass

    elif c in decimal:
        if estado == "inicial":
            estado = "decimal"
        elif estado == "binario":
            estado = "decimal"
        elif estado == "octal":
            estado = "decimal"
        # Omitir lo siguiente?:
        elif estado == "decimal":
            pass
        elif estado == "hexadecimal":
            pass

    elif c in hexadecimal:
        if estado == "inicial":
            estado = "hexadecimal"
        elif estado == "binario":
            estado = "hexadecimal"
        elif estado == "octal":
            estado = "hexadecimal"
        elif estado == "decimal":
            estado = "hexadecimal"
        # Omitir lo siguiente?:
        elif estado == "hexadecimal":
            pass

    else:
        error = True
        break

if error:
    print("Error")
else:
    print(f"{numero} pertenece a los siguientes sistemas:")
    for i in range(estados.index(estado), len(estados)):
        print(estados[i])
