$(document).on("click", "#verificar", function(){
  var lado1 = $("#lado1").val(),
      lado2 = $("#lado2").val(),
      lado3 = $("#lado3").val();

  if(lado1 <= 0 || lado2 <=0 || lado3 <= 0){
    navigator.notification.alert("Valores de triângulo inválidos...", null, "Inválido", "Ok");
    navigator.vibrate([500, 100, 500]);
  }
  else{
    if(lado1 == lado2 && lado2 == lado3){
      $("#triangulo").html("<h3>Equilátero</h3>");
      $(".imagem").css("height","30vh");
      $(".imagem").attr("src","https://escolaeducacao.com.br/wp-content/uploads/2020/06/triangulo-equilatero.png");
    }
    if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
      $("#triangulo").html("<h3>Escaleno</h3>");
      $(".imagem").css("height","15vh");
      $(".imagem").attr("src","https://escolaeducacao.com.br/wp-content/uploads/2020/06/triangulo-escaleno-768x295.png");
    }
    if((lado1 == lado2 && lado2 != lado3) || (lado1 != lado2 && lado2 == lado3) || (lado1 == lado3 && lado1 != lado2)){
      $("#triangulo").html("<h3>Isósceles</h3>");
      $(".imagem").css("height","30vh");
      $(".imagem").attr("src","https://escolaeducacao.com.br/wp-content/uploads/2020/06/triangulo-isosceles.png");
    }
  }
});
