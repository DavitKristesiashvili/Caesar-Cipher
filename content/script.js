function checking() {
    if (document.getElementById('knowing').checked) {
        document.getElementById("results").onclick = function () { decodeShift() };
    }
    else {
        document.getElementById("results").onclick = function () { decodeNoShift() };
        document.getElementById("code").value = " ";
    }  
}


function checkingEncode() {
    if (document.getElementById('knowingEncode').checked) {
        document.getElementById("resultsEncode").onclick = function () { encodeShift() };
    }
    else {
        document.getElementById("resultsEncode").onclick = function () { encodeNoShift() };
        document.getElementById("encode").value = " ";
    }

} 