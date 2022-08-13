const ans = document.getElementById("input")

function on9() {
    ans.textContent += 9
}
function on8() {
    ans.textContent += 8
}
function on7() {
    ans.textContent += 7
}
function on6() {
    ans.textContent += 6
}
function on5() {
    ans.textContent += 5
}
function on4() {
    ans.textContent += 4
}
function on3() {
    ans.textContent += 3
}
function on2() {
    ans.textContent += 2
}
function on1() {
    ans.textContent += 1
}
function on0() {
    ans.textContent += 0
}
function onper() {
    ans.textContent += '.'
}
function onAC() {
    ans.textContent = ""
}

function onpl() {
    if (ans.textContent === "") return
    let temp = ans.textContent
    temp = eval(temp)
    temp += "+"
    ans.textContent = temp
}

function onpl() {
    if (ans.textContent === "") return
    let temp = ans.textContent
    temp = eval(temp)
    temp += "+"
    ans.textContent = temp
}

function onmin() {
    if (ans.textContent === "") return
    let temp = ans.textContent
    temp = eval(temp)
    temp += "-"
    ans.textContent = temp
}

function onmul() {
    if (ans.textContent === "") return
    let temp = ans.textContent
    temp = eval(temp)
    temp += "*"
    ans.textContent = temp
}

function ondiv() {
    if (ans.textContent === "") return
    let temp = ans.textContent
    temp = eval(temp)
    temp += "/"
    ans.textContent = temp
}

function onmod() {
    if (ans.textContent === "") return
    let temp = ans.textContent
    temp = eval(temp)
    temp += "%"
    ans.textContent = temp
}

function oneq() {
    if (ans.textContent === "") return
    let temp = ans.textContent
    temp = eval(temp)
    ans.textContent = temp
}

function ondel() {
    let temp = ans.textContent
    temp = temp.slice(0, -1)
    ans.textContent = temp
}

document.onkeydown = (event) => {
    if (event.key == "1")
        on1()
    if (event.key == "2")
        on2()
    if (event.key == "3")
        on3()
    if (event.key == "4")
        on4()
    if (event.key == "5")
        on5()
    if (event.key == "6")
        on6()
    if (event.key == "7")
        on7()
    if (event.key == "8")
        on8()
    if (event.key == "9")
        on9()
    if (event.key == "0")
        on0()
    if (event.key == ".")
        onper()
    if (event.key == "+")
        onpl()
    if (event.key == "-")
        onmin()
    if (event.key == "*")
        onmul()
    if (event.key == "/")
        ondiv()
    if (event.key == "Escape")
        onAC()
    if (event.key == "Enter")
        oneq()
    if (event.key == "Backspace") {
        ondel()
    }
}