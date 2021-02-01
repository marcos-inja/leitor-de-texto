var int = 1;
function mode() {
    
    var img = document.getElementById("darkmode");
    var x = document.getElementsByClassName("botao");
    var imgInja = document.getElementById("img-inja");

    var icone = document.getElementsByClassName("icone-editar");

    if (int == 1) {
        document.getElementById("fundotxt").style.backgroundColor = "#131415";
        document.getElementById("fundotxt").style.color = "rgb(206, 206, 206)";
        document.getElementById("editar1").style.backgroundColor = "#131415";
        document.body.style.backgroundColor = "#131415";
        document.getElementById("editar1").style.borderTopColor = "rgb(63, 63, 63)";

        document.getElementById("barra-cima").style.backgroundColor = "#131415";

        document.getElementById("barra-cima").style.borderBottomColor = "rgb(63, 63, 63)";
        imgInja.style.filter = "invert(80%)";


        icone[0].style.filter = "invert(100%)";
        icone[1].style.filter = "invert(100%)";
        icone[2].style.filter = "invert(100%)";
        icone[3].style.filter = "invert(100%)";
        


        x[0].style.border = "solid rgb(92, 131, 238)";
        x[0].style.color = "rgb(92, 131, 238)"
        x[1].style.border = "solid rgb(92, 131, 238)";
        x[1].style.color = "rgb(92, 131, 238)";
        

        int = 2;
        img.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NiwwQzExNS4zOSwwLDAsMTE1LjM5LDAsMjU2czExNS4zOSwyNTYsMjU2LDI1NnMyNTYtMTE1LjM5LDI1Ni0yNTZTMzk2LjYxLDAsMjU2LDB6IiBmaWxsPSIjMDAwMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==";
    } else if (int == 2) {
        document.getElementById("fundotxt").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("fundotxt").style.color = "rgb(0, 0, 0)";
        document.getElementById("editar1").style.backgroundColor = "rgb(255, 255, 255)";
        document.body.style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("editar1").style.borderTopColor = "rgb(175, 175, 175)";

        document.getElementById("barra-cima").style.backgroundColor = "rgba(255, 255, 255)";
        document.getElementById("barra-cima").style.borderBottomColor = "rgb(175, 175, 175)";
        imgInja.style.filter = "invert(0)";

        icone[0].style.filter = "invert(0%)";
        icone[1].style.filter = "invert(0%)";
        icone[2].style.filter = "invert(0%)";
        icone[3].style.filter = "invert(0%)";

        x[0].style.border = "solid rgb(8, 46, 151)";
        x[0].style.color = "rgb(8, 46, 151)"
        x[1].style.border = "solid rgb(8, 46, 151)";
        x[1].style.color = "rgb(8, 46, 151)";


        int = 1;
        img.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMjQxLjA3MiAyNDEuMDcyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNDEuMDcyIDI0MS4wNzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMzAxMDQ7IiBkPSJNMjAyLjE2NywxNTYuODU3Yy00NC4yMzYsMC04MC4wODUtMzUuODQyLTgwLjA4NS04MC4wNzhjMC0yOS45MjMsMTYuNDMtNTUuOTUxLDQwLjczMy02OS43MDcNCgkJQzE1MC4wODgsMi40OTgsMTM2LjM3MywwLDEyMi4wODIsMEM1NS41MDYsMCwxLjUzNSw1My45NzEsMS41MzUsMTIwLjUyOGMwLDY2LjU4NCw1My45NzEsMTIwLjU0NCwxMjAuNTQ3LDEyMC41NDQNCgkJYzU3LjI2OSwwLDEwNS4xOC0zOS45MzcsMTE3LjQ1NC05My40ODVDMjI4LjM3NCwxNTMuNDg0LDIxNS42NjUsMTU2Ljg1NywyMDIuMTY3LDE1Ni44NTdMMjAyLjE2NywxNTYuODU3eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=";
    }
}


var int2 = 1;
function justif(id) {
    
    var img = document.getElementById("justificar");
    if (int2 == 1) {
        int2 = 2;
        document.getElementById("fundotxt").style.textAlign = "left";
        img.src = "data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0MDkuMjk0IDQwOS4yOTQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNDA5LjI5NCA0MDkuMjk0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGlkPSJwYXRoLTFfMzU3XyIgZD0ibTAgMTE2Ljk0MWgyOTIuMzUzdjU4LjQ3MWgtMjkyLjM1M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgNSkiLz48cGF0aCBpZD0icGF0aC0yXzI3XyIgZD0ibTAgMjMzLjg4Mmg0MDkuMjk0djU4LjQ3MWgtNDA5LjI5NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgOSkiLz48cGF0aCBpZD0icGF0aC0xXzM1Nl8iIGQ9Im0wIDM1MC44MjRoMjkyLjM1M3Y1OC40NzFoLTI5Mi4zNTN6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEzKSIvPjxwYXRoIGlkPSJwYXRoLTJfMjZfIiBkPSJtMCAwaDQwOS4yOTR2NTguNDcxaC00MDkuMjk0eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIvPjwvc3ZnPg==";
    } else if (int2 == 2) {
        int2 = 1;
        document.getElementById("fundotxt").style.textAlign = "justify";
        img.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IHk9IjE1Ljg1MiIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1NiIvPg0KPHJlY3QgeT0iMTU3LjI3NiIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1NiIvPg0KPHJlY3QgeT0iMjk4LjcwOCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1NiIvPg0KPHJlY3QgeT0iNDQwLjE0OCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1NiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=";
    }
}

var fon = 16;

function fontMa() {
    if (fon <= 20) {
        fon++;
        document.getElementById("fundotxt").style.fontSize = fon + "px";
        cont1++;
    }
}

function fontMe() {

    if (fon >= 14) {
        fon--;
        document.getElementById("fundotxt").style.fontSize = fon + "px";
    }
}


