# import os

# pokemon = ['04_charmander.mp3', '05_charmeleon.mp3']
# txts = [i[:-3:] + "txt" for i in pokemon]
# print(txts)
# parent_dir = "C:/Users/t2tra/Documents/CHI-Project4"
# path = os.path.join(parent_dir, "pokemon_txt")
# # os.mkdir(path)
# for i in txts:
#     filePath = os.path.join(path, i)
#     f = open(filePath, "x")
#     f.close()

pokemon = ['01_bulbasaur.mp3', '02_ivysaur.mp3', '03_venusaur.mp3', '04_charmander.mp3', '05_charmeleon.mp3', '06_charizard.mp3', '07_squirtle.mp3', '08_wartortle.mp3', '09_blastoise.mp3', '10_caterpie.mp3', '11_metapod.mp3', '12_butterfree.mp3', '13_weedle.mp3', '14_kakuna.mp3', '15_beedrill.mp3', '16_pidgey.mp3', '17_pidgeotto.mp3', '18_pidgeot.mp3', '19_rattata.mp3', '20_raticate.mp3']
crys = [i[:-3:] + "txt" for i in pokemon]
print(crys)
