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
podskazka.innerText = "Windows OS\nIt works only with the Russian layout, small letters.\nAlso check the caps on your computer, when the caps are included, it also does not work"
podskazka.className = "podskazka"

document.body.appendChild(tittle)
document.body.appendChild(pole)
document.body.appendChild(klava)
document.body.appendChild(podskazka)



import {rus1, rus2, rus_up, rus_low, eng1, eng2, eng_up, eng_low, other, knopochki} from "./keycaps.js"

var active_now = rus1

var buttons = document.getElementsByTagName("button")

function knopka_add(){
    for (let i = 0; i < 64; ++i){
        buttons[i].innerText=active_now[i]
    }
}
knopka_add()

var text = document.querySelector(".pole_dlya_texta")

var body = document.body
body.addEventListener("keydown", (e) => {
    e.preventDefault()
        console.log(e.key,e.location);
    if(e.location<1&&e.key.substr(0,5)!='Arrow'&&!other.includes(e.key)){
        buttons[active_now.indexOf(e.key)].classList.add("active")
        if(e.key.length==1){
            var cursor = text.selectionEnd
            text.value = text.value.substr(0,text.selectionEnd)+e.key+text.value.substr(text.selectionEnd)
            text.setSelectionRange(cursor+1,cursor+1)
        }  
        }else{
            if(e.key=="CapsLock")buttons[29].classList.toggle("active")
            if(e.key=="Shift")buttons[42].classList.toggle("active")
            if(e.key=="Tab")buttons[14].classList.toggle("active")
            if(e.key=="Backspace")buttons[13].classList.toggle("active")
            if(e.key=="Enter")buttons[41].classList.toggle("active")
            if(e.key=="Delete")buttons[28].classList.toggle("active")
            if(e.key=="ArrowLeft")buttons[60].classList.toggle("active")
            if(e.key=="ArrowDown")buttons[61].classList.toggle("active")
            if(e.key=="ArrowRight")buttons[62].classList.toggle("active") 
            if(e.key=="ArrowUp")buttons[53].classList.toggle("active")
            if(e.key==" ")buttons[58].classList.add("active")
            if(e.key=="Alt")buttons[57].classList.add("active")
            if(e.key=="Control")buttons[55].classList.add("active")
    }    
},)    

body.addEventListener("keyup", (e) => {
    if(e.location<1&&e.key!="Delete"&&e.key.substr(0,5)!='Arrow'&&e.key!='CapsLock'&&e.key!=' '){
        buttons[active_now.indexOf(e.key)].classList.remove("active")
        }else{
            if(e.key==" ")buttons[58].classList.remove("active")
            if(e.key=="Alt")buttons[57].classList.remove("active")
            if(e.key=="Shift")buttons[42].classList.remove("active")
            if(e.key=="Delete")buttons[28].classList.remove("active")
            if(e.key=="Control")buttons[55].classList.remove("active")
            if(e.key=="ArrowLeft")buttons[60].classList.remove("active")
            if(e.key=="ArrowDown")buttons[61].classList.remove("active")
            if(e.key=="ArrowRight")buttons[62].classList.remove("active")
            if(e.key=="ArrowUp")buttons[53].classList.remove("active")
            if(e.key=="CapsLock")buttons[29].classList.remove("active")
    }
    e.preventDefault()
});

for (let i = 0; i<buttons.length;++i){
    buttons[i].addEventListener("mousedown",()=>{ 
        if(i==54||i==63||i==59){
            body.dispatchEvent(new KeyboardEvent("keydown",{"key": active_now[i],"location": 2}))
        }else{
            if(i==42||i==55||i==58){
                body.dispatchEvent(new KeyboardEvent("keydown",{"key": active_now[i],"location": 1}))
            }else{
                body.dispatchEvent(new KeyboardEvent("keydown",{"key": active_now[i]}))
            }
        }
    })
}

for (let i = 0; i<buttons.length;++i){
    buttons[i].addEventListener("mouseup",()=>{ 
        if(i==54||i==63||i==59){
            body.dispatchEvent(new KeyboardEvent("keyup",{"key": active_now[i],"location": 2}))
        }else{
            if(i==42||i==55||i==58){
                body.dispatchEvent(new KeyboardEvent("keyup",{"key": active_now[i],"location": 1}))
            }else{
                body.dispatchEvent(new KeyboardEvent("keyup",{"key": active_now[i]}))
            }
        }
    })
}
