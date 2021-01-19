//Función anónima autoejecutable
(function(){
    console.log("Las funciones donde se ejecutan tan pronto como se definen.");
})();
//Los segundos paréntesis es el paso de parametros
(function(d, w, c){
    c.log(d);
    c.log(w);
    c.log('Puedo usar c por el alias que le dí en esta función, uwu');
})(document, window, console);

//Existen otras Formatos

//Formato Crockford
((function () {
    console.log('Propuesta de Douglas Crockford, autor de Javascript The Good Parts');
})());

//Formato Unario
+function() {
    console.log('Formato Unario');
}();

//Formato de Facebook
!function(){
    console.log('Formato de Facebook');
}();