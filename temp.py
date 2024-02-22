import os

pokemon = ['01_bulbasaur.png', '02_ivysaur.png', '03_venusaur.png', '06_charizard.png', '07_squirtle.png', '08_wartortle.png', '09_blastoise.png', '10_caterpie.png', '11_metapod.png', '12_butterfree.png', '13_weedle.png', '14_kakuna.png', '15_beedrill.png', '16_pidgey.png', '17_pidgeotto.png', '18_pidgeot.png', '19_rattata.png', '20_raticate.png']
txts = [i[:-3:] + "txt" for i in pokemon]
print(txts)
parent_dir = "C:/Users/t2tra/Documents/CHI-Project4"
path = os.path.join(parent_dir, "pokemon_txt")
os.mkdir(path)
for i in txts:
    filePath = os.path.join(path, i)
    f = open(filePath, "x")
    f.close()
