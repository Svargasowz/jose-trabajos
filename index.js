function calcular(){
    var cantidad1 = document.getElementById('cantidad1').value;
    var precio1 = document.getElementById('precio1').value;
    var total1 = precio1 * cantidad1;
    document.getElementById('total1').innerText = total1;

    var cantidad2 = document.getElementById('cantidad2').value;
    var precio2 = document.getElementById('precio2').value;
    var total2 = cantidad2 * precio2;
    document.getElementById('total2').innerText = total2;
    calcularTotal(total1, total2);

    var selectProduct1 = document.getElementById("productos1");
    var valor1 = selectProduct1.options[selectProduct1.selectedIndex].value;
    var inputPrecio1 = document.getElementById("precio1");
    inputPrecio1.value = valor1;

    var selectProduct2 = document.getElementById("productos2");
    var valor2 = selectProduct2.options[selectProduct2.selectedIndex].value;
    var inputPrecio2 = document.getElementById("precio2");
    inputPrecio2.value = valor2;
}

function calcularTotal(valor1, valor2) {
    document.getElementById('totalAbsoluto').innerText = parseInt(valor1) + parseInt(valor2);
}


function getFactura() {
    var selectProducto1 = document.getElementById('productos1');
    var nomProducto1 = selectProducto1.options[selectProducto1.selectedIndex].innerText;

    var selectProducto2 = document.getElementById('productos2');
    var nomProducto2 = selectProducto2.options[selectProducto2.selectedIndex].innerText;

    var cantidad1 = document.getElementById('cantidad1').value;
    var cantidad2 = document.getElementById('cantidad2').value;

    var valor2 = document.getElementById('valor2')
    var valor1 = document.getElementById('valor1')
    var selectProduct1 = document.getElementById("productos1");
    var valor1 = selectProduct1.options[selectProduct1.selectedIndex].value;
    var inputPrecio1 = document.getElementById("precio1");
    inputPrecio1.value = valor1;

    var selectProduct2 = document.getElementById("productos2");
    var valor2 = selectProduct2.options[selectProduct2.selectedIndex].value;
    var inputPrecio2 = document.getElementById("precio2");
    inputPrecio2.value = valor2;


    var factura = document.getElementById('factura');
    factura.innerHTML += `<hr><p><li>${nomProducto1}</p><p>${cantidad1}</p><p>${valor1}</li></p>`;
    factura.innerHTML += `<p><li>${nomProducto2}</p><p>${cantidad2}</p><p>${valor2}</p></li>`;
    factura.innerHTML += `<p><li>Total</p><p>${(valor1 * cantidad1) + (valor2 * cantidad2)}</p></li>`;
}