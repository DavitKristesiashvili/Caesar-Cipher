function encodeShift() {
    var str = document.getElementById("stringEncode").value;
    var code = parseInt(document.getElementById("encode").value);
    var ans = "";
    var allPoss = [];
    var table = document.getElementById("datas");
    table.innerHTML = "";
    var tr = "";
    for (let i = 0; i < str.length; i++) {
        var cmn = str.charCodeAt(i);
        if (cmn >= 65 && cmn <= 90) {
            if (str.charCodeAt(i) - code >= 65) {
                ans = ans + String.fromCharCode(parseInt(str.charCodeAt(i)) - code);
            }
            else {
                ans = ans + String.fromCharCode(parseInt(str.charCodeAt(i)) + 26 - code);
            }
        } 
        else if (cmn >= 97 && cmn <= 122) {
            if (str.charCodeAt(i) - code >= 97) {
                ans = ans + String.fromCharCode(parseInt(str.charCodeAt(i)) - code);
            }
            else {
                ans = ans + String.fromCharCode(parseInt(str.charCodeAt(i)) + 26 - code);
            }
        }
        else ans = ans + String.fromCharCode(parseInt(str.charCodeAt(i)));

    }
    allPoss[0] = [code, ans];
    allPoss.forEach(allPoss => {
        tr += '<tr>';
        tr += '<td class="left">' + allPoss[0] + '</td>' + '<td>' + allPoss[1] + '</td>'
        tr += '</tr>'

    })
    table.innerHTML += tr;

} 

function encodeNoShift() {
    var str = document.getElementById("stringEncode").value;
    var code = 0;
    var ans = "";
    var allPoss = [];
    var table = document.getElementById("datas");
    table.innerHTML = "";
    var tr = "";
    for (let j = 0; j < 25; j++) {
        code++;
        for (let i = 0; i < str.length; i++) {
            var cmn = str.charCodeAt(i);
            if (cmn >= 65 && cmn <= 90) {
                if (str.charCodeAt(i) - code >= 65) {
                    ans = ans + String.fromCharCode(parseInt(str.charCodeAt(i)) - code);
                }
                else {
                    ans = ans + String.fromCharCode(parseInt(str.charCodeAt(i)) + 26 - code);
                }
            }
            else if (cmn >= 97 && cmn <= 122) {
                if (str.charCodeAt(i) - code >=97) {
                    ans = ans + String.fromCharCode(parseInt(str.charCodeAt(i)) - code);
                }
                else {
                    ans = ans + String.fromCharCode(parseInt(str.charCodeAt(i)) + 26 - code);
                }
            }
            else ans = ans + String.fromCharCode(parseInt(str.charCodeAt(i)));

        }
        allPoss[j] = [code, ans];
        ans = "";
    } 
        allPoss.forEach(allPoss => {
            tr += '<tr>';
            tr += '<td class="left">' + allPoss[0] + '</td>' + '<td>' + allPoss[1] + '</td>'
            tr += '</tr>'

        })
        table.innerHTML += tr;

    
} 
 