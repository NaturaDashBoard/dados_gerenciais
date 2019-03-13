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
