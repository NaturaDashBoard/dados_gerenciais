/* ATUALIZAÇÃO DE ELEMENTOS DE TELA */

function atualizarFTRABAP( cards )
{	
	var idListaEntregue = obterIDLista( NOME_LISTA_ENTREGUE, listasCarregadas );
	
	var quantidadeTicketsFDFMListaEntregue = obterQuantidadeTicketsFDFMLista( idListaEntregue, cards );
	
	var quantidadeTicketsFTRABAPListaEntregue = obterQuantidadeTicketsFTRABAPLista( idListaEntregue, cards );
	
	var percentualTicketsFTRABAPListaEntregue = obterPercentual( quantidadeTicketsFTRABAPListaEntregue, quantidadeTicketsFDFMListaEntregue );
	
	var percentualTicketsFTRABAPListaEntregueArredondado = Math.round( percentualTicketsFTRABAPListaEntregue );
	
	ftrABAP.html( percentualTicketsFTRABAPListaEntregueArredondado.toString() + '%' );
}

function atualizarOTDABAP( cards )
{
	var idListaEntregue = obterIDLista( NOME_LISTA_ENTREGUE, listasCarregadas );
	
	var quantidadeTicketsFDFMListaEntregue = obterQuantidadeTicketsFDFMLista( idListaEntregue, cards );
	
	var quantidadeTicketsOTDABAPListaEntregue = obterQuantidadeTicketsOTDABAPLista( idListaEntregue, cards, camposPersonalizadosCarregados );
	
	var percentualTicketsOTDABAPListaEntregue = obterPercentual( quantidadeTicketsOTDABAPListaEntregue, quantidadeTicketsFDFMListaEntregue );
	
	var percentualTicketsOTDABAPListaEntregueArredondado = Math.round( percentualTicketsOTDABAPListaEntregue );
	
	otdABAP.html( percentualTicketsOTDABAPListaEntregueArredondado.toString() + '%' );
}

function atualizarFTRFUNC( cards )
{
	var idListaEntregue = obterIDLista( NOME_LISTA_ENTREGUE, listasCarregadas );
	
	var quantidadeTicketsFDFMListaEntregue = obterQuantidadeTicketsFDFMLista( idListaEntregue, cards );
	
	var quantidadeTicketsFTRFUNCListaEntregue = obterQuantidadeTicketsFTRFUNCLista( idListaEntregue, cards );
	
	var percentualTicketsFTRFUNCListaEntregue = obterPercentual( quantidadeTicketsFTRFUNCListaEntregue, quantidadeTicketsFDFMListaEntregue );
	
	var percentualTicketsFTRFUNCListaEntregueArredondado = Math.round( percentualTicketsFTRFUNCListaEntregue );
	
	ftrFUNC.html( percentualTicketsFTRFUNCListaEntregueArredondado.toString() + '%' );		
}

function atualizarOTDFUNC( cards )
{
	var idListaEntregue = obterIDLista( NOME_LISTA_ENTREGUE, listasCarregadas );
	
	var quantidadeTicketsFDFMListaEntregue = obterQuantidadeTicketsFDFMLista( idListaEntregue, cards );
	
	var quantidadeTicketsOTDFUNCListaEntregue = obterQuantidadeTicketsOTDFUNCLista( idListaEntregue, cards, camposPersonalizadosCarregados );
	
	var percentualTicketsOTDFUNCListaEntregue = obterPercentual( quantidadeTicketsOTDFUNCListaEntregue, quantidadeTicketsFDFMListaEntregue );
	
	var percentualTicketsOTDFUNCListaEntregueArredondado = Math.round( percentualTicketsOTDFUNCListaEntregue );
	
	otdFUNC.html( percentualTicketsOTDFUNCListaEntregueArredondado.toString() + '%' );		
}

function atualizarQuantidadeSIRsErro( cards )
{
	var quantidadeSIRsErro = obterQuantidadeSIRsErro( cards );
	
	sirErro.html( quantidadeSIRsErro );
}

function atualizarQuantidadeSIRsFM( cards )
{
	var quantidadeSIRsFM = obterQuantidadeSIRsFM( cards );
	
	sirFM.html( quantidadeSIRsFM );	
}

function atualizarQuantidadeSIRs( cards )
{
	atualizarQuantidadeSIRsErro( cards );
	atualizarQuantidadeSIRsFM( cards );
}

function atualizarTotalHorasABAPContabilizaveis( cards )
{
	totalHorasABAPContabilizaveis.html
	(
		obterQuantidadeHorasContabilizaveisTicketsFDFM
		(
			cards,
			camposPersonalizadosCarregados
		)
	);
}

function atualizarFiltroProjeto()
{
	var valorSelecionado = selectProjeto.val();
	
	selectProjeto.html( obterProjetosParaFiltro( camposPersonalizadosCarregados ) );
	
	selectProjeto.val( valorSelecionado );
}

function atualizarFiltroRelease()
{
	var valorSelecionado = selectRelease.val();
	
	selectRelease.html
	(
		obterReleasesParaFiltro
		(
			cardsCarregados,
			camposPersonalizadosCarregados
		)
	);
	
	selectRelease.val( valorSelecionado );
}

function atualizarElementosTela()
{
	var nomeProjeto = obterNomeProjetoSelecionado();
	
	var dataRelease = obterDataReleaseSelecionada();
	
	var mes = Number( campoTextoMes.val() );
	
	var ano = Number( campoTextoAno.val() );
	
	var cardsFiltrados = obterCardsFiltrados
	(
		cardsCarregados,
		listasCarregadas,
		camposPersonalizadosCarregados,
		nomeProjeto,
		dataRelease,
		mes,
		ano
	);
	
	atualizarFTRABAP( cardsFiltrados );
	
	atualizarOTDABAP( cardsFiltrados );
	
	atualizarFTRFUNC( cardsFiltrados );
	
	atualizarOTDFUNC( cardsFiltrados );
	
	atualizarQuantidadeSIRs( cardsFiltrados );
	
	atualizarTotalHorasABAPContabilizaveis( cardsFiltrados )
	
	atualizarFiltroProjeto();
	
	atualizarFiltroRelease();
}
