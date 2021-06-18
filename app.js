"use strict";
//alert("hej")
document.addEventListener("DOMContentLoaded", function () {
    var _a;
    var a;
    var b;
    var c;
    var d;
    var e;
    // let summa = a + b;
    //console.log(summa);
    (_a = document.querySelector("#summera")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        a = document.querySelector("#a").value;
        b = document.querySelector("#b").value;
        var summa = (parseInt(a) * parseInt(b) / 2);
        var svar = document.querySelector("#summa").textContent = summa.toString();
    });
});
