$(function(){
	$('#pessoa').submit(function(event){
		event.preventDefault();
		let dados = $(this).serializeArray();	
		console.log(dados);

		let pessoa = {nome: '', email: ''};
		let pessoas;


		console.log(pessoas);
	});
});
