import os

pokemon = ['04_charmander.mp3', '05_charmeleon.mp3']
txts = [i[:-3:] + "txt" for i in pokemon]
print(txts)
parent_dir = "C:/Users/t2tra/Documents/CHI-Project4"
path = os.path.join(parent_dir, "pokemon_txt")
# os.mkdir(path)
for i in txts:
    filePath = os.path.join(path, i)
    f = open(filePath, "x")
    f.close()
