/**
 * Created by Agus on 6/5/2017.
 */

/**
 * conversion de unidades, de metros, yardas, pies y pulgadas.
 * Descripción
 * @method Nombre de la función
 * @param {string} id - El id de los inputs de yardas metros pies o pulgdas
 * @param {number} valor - Eñ valor de los inputs de metros, yardas, pies o pulgadas
 * @return
 */
function cambiarUnidades (id,valor) {
  if(valor.includes(",")){
   valor = valor.replace(",",".");
  }

   if(isNaN(valor)){
       alert("se ingreso un valor no valido, ingrese numeros"+id)

       metro = "";
       pulgada = "";
       pie = "";
       yarda = "";
   }else if (id=="metro"){
       metro = valor;
       pulgada = 39.3701*valor;
       pie = 3.28084*valor;
       yarda= 1.09361*valor;
   }else if (id=="pulgada"){
       pulgada = valor;
       metro = 0.0254*valor;
       pie= 0.0833333*valor;
       yarda= 0.0277778*valor;
   }else if (id=="yarda"){
       yarda = valor;
       metro= 0.9144*valor;
       pie= 3*valor;
       pulgada= 36*valor;
   }else if(id=="pie"){
       pie = valor;
       metro= 0.3048*valor;
       pulgada= 12*valor;
       yarda = 0.333333*valor;
}
   document.LasUnidades.unid_metro.value = math.round(metro*100)/100;
   document.LasUnidades.unid_pulgada.value = math.round(pulgada*100)/100;
   document.LasUnidades.unid_pie.value = math.round(pie*100)/100;
   document.LasUnidades.unid_yarda.value = math.round(yarda*100)/100;
}

function convertirGR(id) {
var grad, rad;
  if(id=="grados"){
      grad = document.getElementById("grados").value;
      rad = (grad*Math.PI)/180;
  }else if(id=="radianes"){
      rad = document.getElementById("radianes").value;
      grad = (rad*180)/Math.PI;
  }
  document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = grad;
}
function mostrar_ocultar(valorMO) {

    if (valorMO=="val_mostrar"){
    document.getElementById( "divMO").style.display = 'block';
} else if (valorMO=="val_ocultar"){
    document.getElementById("divMO").style.display = 'none';
}
}

function calcularSuma() {
    var num1, num2;
    num1= Number (document.getElementsByName("sum_num1")[0].value);
    num2= document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].value = num1 + Number(num2);
}
function calcularResta() {
    var num1, num2;
    num1= Number (document.getElementsByName("res_num1")[0].value);
    num2= document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].value = num1 - Number(num2);
}

function calcularMul() {
    var num1, num2;
    num1= Number (document.getElementsByName("mul_num1")[0].value);
    num2= document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].value = num1 * Number(num2);
}
function calcularDiv() {
    var num1, num2;
    num1= Number (document.getElementsByName("div_num1")[0].value);
    num2= document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].value = num1 / Number(num2);

}
function cargarWeb() {
var cant,unidad,urlComp;
cant = document.getElementById("distancia").value;
unidad = document.getElementsByName("unidades")[0].value;
urlComp = "segundaWeb.html#" + cant + "#" + unidad;

window.open(urlComp);
}
function cargarResultado() {
var urlComp, can, un;

urlComp = window.location.href.split("/")[5];

can = urlComp.split("#")[1];
un = urlComp.split("#")[2];

document.getElementById("dist").value = can + " " + un;

}