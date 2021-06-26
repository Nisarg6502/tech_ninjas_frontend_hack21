var display = document.getElementById('display');
var ft = document.getElementById('ft');
var hc = document.getElementById('hc');
var sm = document.getElementById('sm');
var ba = document.getElementById('ba');
var va = document.getElementById('va');
function add1() {
    display.innerHTML += `<br>Fitness Tracker added`;
    ft.disabled = true;
}
function add2() {
    display.innerHTML += `<br>Health Care added`;
    hc.disabled = true;
}
function add3() {
    display.innerHTML += `<br>Schedule Module added`;
    sm.disabled = true;
}
function add4() {
    display.innerHTML += `<br>Biometric Authentication added`;
    ba.disabled = true;
}
function add5() {
    display.innerHTML += `<br>Voice Assistant added`;
    va.disabled = true;
}
//# sourceMappingURL=Customizations.js.map