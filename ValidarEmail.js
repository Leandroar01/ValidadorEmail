var padrao = /^([\w-]+(\.[\w-]+)*)@(([\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\.[a-z]{2})?)$/i;

function validarEmail(){
    var email = document.forms[0].elements[0].value;
    if (padrao.test(email)){
        alert('Parabéns ! E-mail valido');
    }else{
        alert ('E-mail invalido! Tente outra vez...');
    
    }

}
