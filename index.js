$.support.cors = true;

$(document).ready(
    function(){
        $('#Conteudo').load("pagina01.html")
    }
)

$('#Pg1').click(
   function (){
       $('#Conteudo').load("pagina01.html")
   }
);

$('#Pg2').click(
    function(){
        $('#Conteudo').load("pagina01.html")
    }
);
