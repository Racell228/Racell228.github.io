var _click = function () {
        var b = 1;
        return function (c) {
            var a = document.getElementById("item" + b);
            c == b && (a.className = "" == a.className ? "max" : "");
            c != b && (a.className = "", a = document.getElementById("item" + c), a.className = "max", b = c)
        }
    }();
window.onload = function() {
    _click(1)
 }
