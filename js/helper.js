// esse evento é executando assim que é carregada pela página.
$(function() {
	/*
	* Usando uma 'class' do css para aplicar um evento de 'click'
	* no 'button'.
	*/
	$('.msg').click(function(event){
		console.log($(this).text() === 'Click' ? $(this).text('Clicked') : $(this).text('Click'));
	});

	/*
	* Trocando o background de uma ul->li para vermelho.
	* Nesse caso todas as li ficaram vermelhas.
	*/
	$('ul li').css({
		background: 'red',
	});

	/*
	* Trocando o background de uma ul->li para azul.
	* Nesse caso, só a ultima li ficará azul.
	*/
	$('ul li:last').css({
		background: 'blue',
	});

	/*
	* Trocando o background de uma ul->li para amarelo.
	* Nesse caso, só a li de indice 1 ficará amarelo.
	*/
	$('ul li:eq(1)').css({
		background: 'yellow',
	});

	/*
	* Adicionando uma 'class' css na 'ul'
	*/
	$('ul').addClass('formatacao');

	/*
	* Adicionado um evento de 'click' em cada 'li' para quando a li
	* for clicada ela desaparece em 1 segundo.
	*/
	$('ul li').click(function(event){
		$(this).hide('1000');
	});

	/*
	* Pegando um 'button' pelo id e adicionando um evento de 'click'
	* para mostrar/esconder todas as 'li'.
	*/
	$('#toggle-list').click(function(event){
		//$('ul').toggle('1000'); // com animação
		//$('ul').toggle('fast'); // com animação
		$('ul li').toggle('slow'); // com animação
		// $('ul').toggle();  // sem animação
	});

	/*
	* Pegando um 'button' pelo id e adicionando um evento de 'click'
	* para mostrar todas as 'li'.
	*/
	$('#restore-list').click(function(event){
		$('ul li').show('1000'); // com animação
		// $('ul').toggle();  // sem animação
	});

	/*
	* Pegando um 'button' pelo id e adicionando um evento de 'click'
	* para remover a 'li' de indice um.
	*/
	$('#remove-li-1').click(function(event){
		$('ul li:eq(1)').remove(); // com animação
		// $('ul').toggle();  // sem animação
	});

});
