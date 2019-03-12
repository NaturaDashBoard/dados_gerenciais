function inicializarBotoes()
{
	botaoIrParaRelatorio.click
	(
		function ()
		{
			window.location.href = URL_RELATORIO_CARDS_TRELLO;
		}
	);
	
	botaoIrParaDashboard.click
	(
		function ()
		{
			window.location.href = URL_RELATORIO_DASHBOARD;
		}
	);
}

function inicializarTextAreas()
{
	campoTextoMes[0].oninput = atualizarElementosTela;
	campoTextoAno[0].oninput = atualizarElementosTela;
}

function inicializarSelectOptions()
{
	selectProjeto.change( atualizarElementosTela );
	
	selectRelease.change( atualizarElementosTela );
}

function inicializarInputs()
{
	inicializarBotoes();
	
	inicializarTextAreas();
	
	inicializarSelectOptions();
}

function carregarAssincDadosTrello()
{
	carregarAssincCamposPersonalizados( idBoardDadosCarregados );
}

function documentReady()
{
	inicializarInputs();
	
	carregarAssincDadosTrello();
}

$( document ).ready( documentReady );
