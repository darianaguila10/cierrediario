var myTable = document.getElementById('myTable');
if(myTable){
var p = JSON.stringify(productos)
var arg = JSON.parse(p)
upgrade();
}
function upgrade() {
    for (let i = 0; i < arg.length; i++) {


        var tr = document.createElement("tr");
        var th = document.createElement("th");
        var th_text = document.createTextNode(i + 1);

        th.setAttribute("scope", "row");
        th.appendChild(th_text)
        tr.appendChild(th);

        var td1 = document.createElement("td");
        var text = document.createTextNode(arg[i].nombre);
        td1.appendChild(text);
        tr.appendChild(td1);

        var td2 = document.createElement("td");
        var td_input1 = document.createElement("input");
        td_input1.setAttribute("type", "number");
        td_input1.setAttribute("id", "cantRU");
        td_input1.setAttribute("name", "cantU");
        td2.appendChild(td_input1);
        tr.appendChild(td2);

        var td3 = document.createElement("td");
        var td_input2 = document.createElement("input");
        td_input2.setAttribute("type", "number");
        td_input2.setAttribute("id", "cantRP");
        td_input2.setAttribute("name", "cantP");
        td3.appendChild(td_input2);
        tr.appendChild(td3);

        myTable.appendChild(tr);


    }
}

function Calcular() {
    var VentaT = 0;
    var InversionT = 0;
    var GananciaT = 0;


    if (document.getElementById('ventaT').childNodes.length > 1) {
        var nodech = document.getElementById('ventaT').childNodes[1];
        document.getElementById('ventaT').removeChild(nodech);

        var nodech = document.getElementById('inversionT').childNodes[1];
        document.getElementById('inversionT').removeChild(nodech);

        var nodech = document.getElementById('gananciaT').childNodes[1];
        document.getElementById('gananciaT').removeChild(nodech);

    }

    var long = document.getElementsByName("cantU").length
    for (let i = 0; i < long; i++) {
        var cantU = document.getElementsByName("cantU")[i].value;
        var cantP = document.getElementsByName("cantP")[i].value;
        VentaT += cantU * arg[i].precioVU + cantP * arg[i].precioVP;
        InversionT += cantU * arg[i].precioCU + cantP * arg[i].precioCP;
        GananciaT += cantU * arg[i].gananciaU + cantP * arg[i].gananciaP;
    }


    var nodeVT = document.createTextNode(VentaT + " CUP / " + VentaT / 25 + " CUC");
    document.getElementById('ventaT').appendChild(nodeVT)

    var nodeIT = document.createTextNode(InversionT + " CUP / " + InversionT / 25 + " CUC");
    document.getElementById('inversionT').appendChild(nodeIT)

    var nodeGT = document.createTextNode(GananciaT + " CUP / " + GananciaT / 25 + " CUC");
    document.getElementById('gananciaT').appendChild(nodeGT)

}

function Borrar() {
    var long = document.getElementsByName("cantU").length
    for (let i = 0; i < long; i++) {
        document.getElementsByName("cantU")[i].value = "";
        document.getElementsByName("cantP")[i].value = "";

    }
    if (document.getElementById('ventaT').childNodes.length > 1) {
        var nodech = document.getElementById('ventaT').childNodes[1];
        document.getElementById('ventaT').removeChild(nodech);

        var nodech = document.getElementById('inversionT').childNodes[1];
        document.getElementById('inversionT').removeChild(nodech);

        var nodech = document.getElementById('gananciaT').childNodes[1];
        document.getElementById('gananciaT').removeChild(nodech);

    }

}

function CalcularP() {
    if (document.getElementById('ventaT').childNodes.length > 1) {
        var nodech = document.getElementById('ventaT').childNodes[1];
        document.getElementById('ventaT').removeChild(nodech);

        var nodech = document.getElementById('inversionT').childNodes[1];
        document.getElementById('inversionT').removeChild(nodech);

        var nodech = document.getElementById('gananciaT').childNodes[1];
        document.getElementById('gananciaT').removeChild(nodech);

    }

    var cantU = document.getElementById('cantU').value
    var cantP = document.getElementById('cantP').value
    var precioVU = document.getElementById('precioVU').value
    var precioVP = document.getElementById('precioVP').value
    var precioCU = document.getElementById('precioCU').value
    var precioCP = document.getElementById('precioCP').value
    var gananciaU = document.getElementById('gananciaU').value
    var gananciaP = document.getElementById('gananciaP').value

    VentaT = cantU * precioVU + cantP * precioVP;
    InversionT = cantU * precioCU + cantP * precioCP;
    GananciaT = cantU * gananciaU + cantP * gananciaP;



    var nodeVT = document.createTextNode(VentaT + " CUP / " + VentaT / 25 + " CUC");
    document.getElementById('ventaT').appendChild(nodeVT)

    var nodeIT = document.createTextNode(InversionT + " CUP / " + InversionT / 25 + " CUC");
    document.getElementById('inversionT').appendChild(nodeIT)

    var nodeGT = document.createTextNode(GananciaT + " CUP / " + GananciaT / 25 + " CUC");
    document.getElementById('gananciaT').appendChild(nodeGT)

}

function BorrarP() {
    var long = document.getElementsByName("calcularV").length
    for (let i = 0; i < long; i++) {
        document.getElementsByName("calcularV")[i].value = "";
        document.getElementsByName("calcularV")[i].value = "";
    }
    if (document.getElementById('ventaT').childNodes.length > 1) {
        var nodech = document.getElementById('ventaT').childNodes[1];
        document.getElementById('ventaT').removeChild(nodech);

        var nodech = document.getElementById('inversionT').childNodes[1];
        document.getElementById('inversionT').removeChild(nodech);

        var nodech = document.getElementById('gananciaT').childNodes[1];
        document.getElementById('gananciaT').removeChild(nodech);

    }
}