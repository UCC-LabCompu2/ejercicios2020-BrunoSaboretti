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
   if(isNaN(valor)){
       alert("se ingreso un valor no valido, ingrese numeros"+id)
       document.LasUnidades.unid_metro.value= "";document.LasUnidades.unid_pulgada.value = " ";
       document.LasUnidades.unid_pie.value = " ";
       document.LasUnidades.unid_yarda.value = " " ;
   }else if (id=="metro"){
       document.LasUnidades.unid_pulgada.value = 39.3701*valor;
       document.LasUnidades.unid_pie.value = 3.28084*valor;
       document.LasUnidades.unid_yarda.value = 1.09361*valor;
   }else if (id=="pulgada"){
      document.LasUnidades.unid_metro.value = 0.0254*valor;
     document.LasUnidades.unid_pie.value = 0.0833333*valor;
    document.LasUnidades.unid_yarda.value = 0.0277778*valor;
   }else if (id=="yarda"){
      document.LasUnidades.unid_metro.value = 0.9144*valor;
      document.LasUnidades.unid_pie.value = 3*valor;
     document.LasUnidades.unid_pulgada.value = 36*valor;
   }else if(id=="pie"){
    document.LasUnidades.unid_metro.value = 0.3048*valor;
    document.LasUnidades.unid_pulgada.value = 12*valor;
    document.LasUnidades.unid_yarda.value = 0.333333*valor;
}
}

function convertirGR(id) {
var grad, rad;
  if(id=="grados"){
      grad = document.getElementById(elementid: "grados").value;
      rad = (grad*Math.PI)/180;
  }else if(id=="radianes"){
      rad = document.getElementById(elementid "radianes").value;
      grad = (rad*180)/Math.PI;
  }
  document.getElementById(elementid "grados").value = grad;
    document.getElementById(elementid "radianes").value = grad;
}