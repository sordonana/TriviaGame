$(document).ready(function () {

// counter----------------------------------------------------->
var quest =0;
run();
var aciertos = 0;
var errores= 0;
var clk = 0;


// counter----------------------------------------------------->
    var number = 30;
    var intervalId;
    var res2="";

    function run (){
    
    intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        number--;
        var p = $("<p>")
        $(p).attr("class", "counter");
        p.html(number);
        $(".trivia").html(p);
    
        if (number === 0) {
    
            errores++;
            $(".reset").remove();
            stop();
            clk++;
            quest++;
            var anun = $("<h4>");
            $(anun).attr("class" , "anuncio reset2");
            $(anun).attr("style" , "color:red ; background-color:white" )
            $(anun).animate({height: '100px', opacity: '0.9'}, "slow");
            $(anun).html("TIMES UP!!! the correct answer was: " + res2);
            $(".anuncios").prepend(anun);
            questions(quest);

    
        }
    }
    
    function stop() {
    
        clearInterval(intervalId);
        number = 30;
        run();
    }


    
//API Questions
function questions(quest){



queryURL= "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";

$.ajax({
    type: "GET",
    url: queryURL,
    success: function (response) {
    console.log(response);
    
    var ndiv = $("<div>");
    $(ndiv).attr("class" , "row");
    var preg = $("<p>");

    var r1=response.results[quest].correct_answer;
    var r2= response.results[quest].incorrect_answers[0];
    var r3= response.results[quest].incorrect_answers[1];
    var r4= response.results[quest].incorrect_answers[2];
    
    var rr=[r1,r2,r3,r4];
    //controlador de no repeticion de opciones
    var opciones = [];
    var i=0;
    while (i<4){
    var number = Math.floor((Math.random() * 4))
    if (!opciones.includes(number)){
        opciones.push(number);
        i++;
    }
    }

    var respuestas =[];
    for (h=0;h<4;h++){
        respuestas[h]=rr[opciones[h]];
    }

    //termina el controlador    
    var opcion1 = $("<button>");
    $(opcion1).attr("class" , "btn btn-success botones reset");
    $(opcion1).attr("value" , respuestas[0]);
    var opcion2 = $("<button>");
    $(opcion2).attr("class" , "btn btn-success botones reset");
    $(opcion2).attr("value" , respuestas[1]);
    var opcion3 = $("<button>");
    $(opcion3).attr("class" , "btn btn-success botones reset");
    $(opcion3).attr("value" , respuestas[2]);
    var opcion4 = $("<button>");
    $(opcion4).attr("class" , "btn btn-success botones reset");
    $(opcion4).attr("value" , respuestas[3]);
    var br= $("<br>");
    $(preg).attr("class" , "reset preg")
    $(preg).html(response.results[quest].question);
    $(preg).append(ndiv);
    $(".question").append(preg);

    $(opcion1).html(respuestas[0]);
    $(opcion2).html(respuestas[1]);
    $(opcion3).html(respuestas[2]);
    $(opcion4).html(respuestas[3]);


    $(opcion1).append(ndiv);
    $(".question").append(opcion1);
    $(opcion2).append(ndiv);
    $(".question").append(opcion2);
    $(opcion3).append(ndiv);
    $(".question").append(opcion3);
    $(opcion4).append(ndiv);
    $(".question").append(opcion4);

    var respuesta_correcta= rr[0];
    res2 = respuesta_correcta;
    var pressed="";   
    
    function reset (){
        $(".reset").remove();
        stop();
        
    }

    var anun = $("<h4>");
    $(anun).attr("class" , "anuncio reset2");

    if (clk<9){

        $(opcion1).on("click", function () {
            pressed = opcion1.val();
            if (pressed==respuesta_correcta){
                reset();
                quest++;
                clk++;
                aciertos++;
                $(anun).attr("style" , "color:green ; background-color:white")
                $(anun).animate({height: '100px', opacity: '0.9'}, "slow");
                $(anun).html("Your answer was correct");
                $(".anuncios").prepend(anun);
                questions(quest);
                
            }else{
                errores++;
                reset();
                clk++;
                quest++;
                $(anun).attr("style" , "color:red ; background-color:white" )
                $(anun).animate({height: '100px', opacity: '0.9'}, "slow");
                $(anun).html("Your answer was incorrect, the correct answer was: " + respuesta_correcta);
                $(".anuncios").prepend(anun);
                questions(quest);

            }
            console.log(pressed);
            console.log(respuesta_correcta);

        })
        $(opcion2).on("click", function () {
            pressed = opcion2.val();
            if (pressed==respuesta_correcta){
                reset();
                clk++;
                quest++;
                aciertos++;
                $(anun).attr("style" , "color:green ; background-color:white")
                $(anun).animate({height: '100px', opacity: '0.9'}, "slow");
                $(anun).html("Your answer was correct");
                $(".anuncios").prepend(anun);
                questions(quest);
            }else{
                errores++;
                reset();
                clk++;
                quest++;
                $(anun).attr("style" , "color:red ; background-color:white" )
                $(anun).animate({height: '100px', opacity: '0.9'}, "slow");
                $(anun).html("Your answer was incorrect, the correct answer was: " + respuesta_correcta);
                $(".anuncios").prepend(anun);
                questions(quest);
            }
            console.log(pressed);
            console.log(respuesta_correcta);

        })
        $(opcion3).on("click", function () {
            pressed = opcion3.val();
            if (pressed==respuesta_correcta){
                reset();
                clk++;
                quest++;
                aciertos++;
                $(anun).attr("style" , "color:green ; background-color:white")
                $(anun).animate({height: '100px', opacity: '0.9'}, "slow");
                $(anun).html("Your answer was correct");
                $(".anuncios").prepend(anun);
                questions(quest);
            }else{
                errores++;
                reset();
                clk++;
                quest++;
                $(anun).attr("style" , "color:red ; background-color:white" )
                $(anun).animate({height: '100px', opacity: '0.9'}, "slow");
                $(anun).html("Your answer was incorrect, the correct answer was: " + respuesta_correcta);
                $(".anuncios").prepend(anun);
                questions(quest);
            }
            console.log(pressed);
            console.log(respuesta_correcta);

        })
        $(opcion4).on("click", function () {
            pressed = opcion4.val();
            if (pressed==respuesta_correcta){
                reset();
                clk++;
                quest++;
                aciertos++;
                $(anun).attr("style" , "color:green ; background-color:white")
                $(anun).animate({height: '100px', opacity: '0.9'}, "slow");
                $(anun).html("Your answer was correct");
                $(".anuncios").prepend(anun);
                questions(quest);
            }else{
                errores++;
                reset();
                clk++;
                quest++;
                $(anun).attr("style" , "color:red ; background-color:white" )
                $(anun).animate({height: '100px', opacity: '0.9'}, "slow");
                $(anun).html("Your answer was incorrect, the correct answer was: " + respuesta_correcta);
                $(".anuncios").prepend(anun);
                questions(quest);

            }
            console.log(pressed);
            console.log(respuesta_correcta);

        })

    }else{
        reset();
        clearInterval(intervalId);
        var heads = $("<h3>");
        var acr = $("<p>")
        var err = $("<p>")
        $(heads).html("TUS RESULTADOS SON: ");
        $(heads).attr("class" , "reset2");
        $(acr).html("Aciertos: " + aciertos );
        $(acr).attr("class" , "reset2");
        $(err).html("Errores: " + errores );
        $(err).attr("class" , "reset2");
        $(".question").append(heads);
        $(".question").append(acr);
        $(".question").append(err);
        var nButt = $("<button>");
        $(nButt).html("REINICIAR JUEGO");
        $(nButt).attr("class" , "btn btn-success reset2" );
        $(".question").append(nButt);

        $(nButt).on("click" , function(){
            $(".reset2").remove();
            quest =0;
            aciertos = 0;
            errores= 0;
            clk = 0;
            run();
            questions(quest);


        })


        



        
        
    }
        













    
    

    
    }


});

}

questions(quest);







    
});
