function inicializarInputs()
{
	
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
