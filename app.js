$(document).ready(function(){
$('button').click(function(){
const name =$('#nameid').val();

if(name==""){

    alert('Debes ingresar tu nombre');
}
else{

    $('.imgchange').attr('src',`https://joeschmoe.io/api/v1/${name}`);

}



});

});