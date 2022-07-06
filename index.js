const ans = document.getElementById("ans")
// ans.value = 11
const val = document.getElementById("val")
// input.addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         document.getElementById("+").click();
//     }
// });

temp = ""
fir = ""
sec = ""
function on9() {
    if (temp != "") sec += 9
    else fir += 9
    val.value += 9
    // ans.value += 9
}
function on8() {
    if (temp != "") sec += 8
    else fir += 8
    val.value += 8
    // ans.value += 8
}
function on7() {
    if (temp != "") sec += 7
    else fir += 7
    val.value += 7
    // ans.value += 7
}
function on6() {
    if (temp != "") sec += 6
    else fir += 6
    val.value += 6
    // ans.value += 6
}
function on5() {
    if (temp != "") sec += 5
    else fir += 5
    val.value += 5
    // ans.value += 5
}
function on4() {
    if (temp != "") sec += 4
    else fir += 4
    val.value += 4
    // ans.value += 4
}
function on3() {
    if (temp != "") sec += 3
    else fir += 3
    val.value += 3
    // ans.value += 3
}
function on2() {
    if (temp != "") sec += 2
    else fir += 2
    val.value += 2
    // ans.value += 2
}
function on1() {
    if (temp != "") sec += 1
    else fir += 1
    val.value += 1
    // ans.value += 1
}
function on0() {
    if (temp != "") sec += 0
    else fir += 0
    val.value += 0
    // ans.value += 0
}
function onC() {
    val.value = ""
    fir = ""
    sec = ""
    temp = ""
}
function onAC() {
    ans.value = ""
    onC()
}
function calc(temp) {
    console.log("calc called")
    if (temp === "+") {
        val.value = parseInt(fir) + parseInt(sec)
    }
    if (temp === "-") {
        val.value = parseInt(fir) - parseInt(sec)
    }
    if (temp === "*") {
        val.value = parseInt(fir) * parseInt(sec)
    }
    else if (temp === "/") {
        val.value = parseInt(fir) / parseInt(sec)
    }

    fir = val.value
    sec = ""
    ans.value = val.value
}
const onplus = document.getElementById("+");
// onpl.onKeyPress = {
//     (ev) => {
//     if (ev.key === "Enter") {
//         onpl()
//     }
// }
// }
onplus.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        onplus.click();
    }
})
function onpl() {
    if (temp != "") {
        calc(temp)
    }
    else
        ans.value = ""
    val.value += "+"
    temp = "+"
}
function onmin() {
    if (temp != "") {
        calc(temp)
    }
    else
        ans.value = ""
    val.value += "-"
    temp = "-"
}
function onmul() {
    if (temp != "") {
        calc(temp)
    }
    else
        ans.value = ""
    val.value += "*"
    temp = "*"
}
function ondiv() {
    if (temp != "") {
        calc(temp)
    }
    else
        ans.value = ""
    val.value += "/"
    temp = "/"
}
function oneq() {
    calc(temp)
    val.value = ""
    temp = ""
}
document.onkeypress = function (e) {
    if (e.which == 43) {
        onpl();
    } else if (e.ctrlKey && e.which == 67) {
        alert("Ctrl + B shortcut combination was pressed");
    } else if (e.ctrlKey && e.altKey && e.which == 89) {
        alert("Ctrl + Alt + Y shortcut combination was pressed");
    } else if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
        alert("Ctrl + Alt + Shift + U shortcut combination was pressed");
    }
};