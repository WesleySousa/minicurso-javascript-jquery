$(function(){
	var incr = 1;
	var pessoas = [{}];
	$('#pessoa').submit(function(event){
		event.preventDefault();
		let dados = $(this).serializeArray();	
		
		let idade = 21;
		let pessoa = {id: incr, nome: dados[0].value, email: dados[1].value};
		pessoas.push(pessoa);
		incr++;

		$('table tbody').append(
				$('<tr/>')
					.append(
						$('<td/>').append(pessoa.id)
					)
					.append(
						$('<td/>').append(pessoa.nome)
					)
					.append(
						$('<td/>').append(pessoa.email)
					)
					.append(
						$('<td/>').append(
								$('<button/>').addClass('rm').text('Remover')

							)
					)
			);

		$('[name=nome]').val('');
		$('[name=email]').val('');
		$('[name=nome]').focus();
	});

	$(document).on('click', '.rm', function(event){
		$(this).parent().parent().remove();
	});

});
