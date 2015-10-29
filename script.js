var acert ;


$(document).ready(function(){
    function tomaTexto(){
        $.ajax({url: "http://www.swolebrain.com:4004/riddles",success:function(resp){
                $("#box").html("");
                $("#box").html("<p>"+resp.riddleText+"</p>");
                acert = resp;


            }
        });
   }
    
    tomaTexto();
    
    $("#botton1").on("click",function(){
        if ($(".res").val() == acert.answer){
          $("#box1").html("<p>"+"Correcto"+"</p>");
        }
        else{
            $("#box1").html("<p>"+"Incorrecto, la respuesta es: "+"<br>"+acert.answer+"</p>");  
        
        }
                    
        });
    
    $("#box1").html("");
    
    
});
    
    
    
    
    
    


