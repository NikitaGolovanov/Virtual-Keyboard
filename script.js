var tittle = document.createElement("h1")
tittle.innerText = "RSS Virtual Keyboard"
tittle.className = "Task_Name"

var pole = document.createElement("textarea")
pole.className = "pole_dlya_texta"
pole.rows = 20
pole.cols = 200

var klava = document.createElement("div")
klava.className = "klaviatura"

var row_one = document.createElement("div")
row_one.className = "row_one"

var row_two = document.createElement("div")
row_two.className = "row_two"

var row_three = document.createElement("div")
row_three.className = "row_three"

var row_four = document.createElement("div")
row_four.className = "row_four"

var row_five = document.createElement("div")
row_five.className = "row_five"

var knopki = []
for (let i = 0; i < 57; ++i){
   knopki[i] = document.createElement("button")
   knopki[i].className = "knopka"
}

var tab = document.createElement("button")
tab.className = "tab"

var caps = document.createElement("button")
caps.className = "caps"

var shift_l = document.createElement("button")
shift_l.className = "shift-l"

var space = document.createElement("button")
space.className = "space"

var backspace = document.createElement("button")
backspace.className = "backspace"

var enter = document.createElement("button")
enter.className = "enter"

var shift_r = document.createElement("button")
shift_r.className = "shift-r"

for (let i = 0; i < 13; ++i){
    row_one.appendChild(knopki[i])
}
row_one.appendChild(backspace)
klava.appendChild(row_one)

row_two.appendChild(tab)
for (let i = 13; i < 27; ++i){
    row_two.appendChild(knopki[i])
}
klava.appendChild(row_two)

row_three.appendChild(caps)
for (let i = 27; i < 38; ++i){
    row_three.appendChild(knopki[i])
}
row_three.appendChild(enter)
klava.appendChild(row_three)

row_four.appendChild(shift_l)
for (let i = 38; i < 49; ++i){
    row_four.appendChild(knopki[i])
}
row_four.appendChild(shift_r)
klava.appendChild(row_four)

for (let i = 49; i < 52; ++i){
    row_five.appendChild(knopki[i])
}
row_five.appendChild(space)
for (let i = 52; i < 57; ++i){
    row_five.appendChild(knopki[i])
}
klava.appendChild(row_five)

var podskazka = document.createElement("h2")
podskazka.innerText = "Windows OS\nTo switch language {Left Shift + Left Alt}"
podskazka.className = "podskazka"

document.body.appendChild(tittle)
document.body.appendChild(pole)
document.body.appendChild(klava)
document.body.appendChild(podskazka)

