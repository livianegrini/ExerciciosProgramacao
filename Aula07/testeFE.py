# print ("Digite um número: ")
# celsius = float(input())

# if ((celsius >= 0) and (celsius <= 1000)):
#     fahrenheit = (celsius * 1.80) + 32.00
#     kelvin = celsius + 273.15

#     ans = [float(format(kelvin,".5f")), float(format(fahrenheit, ".5f"))]

# print (ans)


celsius = float(input())

if ((celsius >= 0) and (celsius <= 1000)):
    fahrenheit = (celsius * 1.80) + 32.00
    kelvin = celsius + 273.15

    ans = [float(kelvin), float(fahrenheit)]

    print(f"{ans[0]:.5f}, {ans[1]:.5f}")




