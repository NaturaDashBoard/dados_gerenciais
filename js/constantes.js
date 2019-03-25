const API_KEY = '0de440ba54e6508dc14e6475784d3c6a';

const TOKEN = '91f423c958d2a819f90a871bfb54bcd87a128b7c5612ef2014097947b2f110b9';

const ID_BOARD_GESTAO_DEMANDAS_NATURA = '5b688404339eca3b994948c1';
const ID_BOARD_QUADRO_TESTES_DASHBOARD_NATURA = '5beb929f5c13a07903fd5df0';

const TEMPLATE_URL_BOARD_ACTIONS = 'https://api.trello.com/1/boards/[BOARD_ID]/actions/?key=' + API_KEY + '&token=' + TOKEN;
const TEMPLATE_URL_CARD_ACTIONS = 'https://api.trello.com/1/cards/[CARD_ID]/actions?limit=1000&key=' + API_KEY + '&token=' + TOKEN;
const TEMPLATE_URL_BOARD_CAMPOS_PERSONALIZADOS = 'https://api.trello.com/1/boards/[BOARD_ID]/customFields?key=' + API_KEY + '&token=' + TOKEN;
const TEMPLATE_URL_CARDS = 'https://api.trello.com/1/boards/[BOARD_ID]/cards?customFieldItems=true&attachments=true&actions=all&key=' + API_KEY + '&token=' + TOKEN;
const TEMPLATE_URL_LISTAS = 'https://api.trello.com/1/boards/[BOARD_ID]/lists?cards=all&card_fields=all&filter=open&fields=all&key=' + API_KEY + '&token=' + TOKEN;
const TEMPLATE_URL_CAMPOS_PERSONALIZADOS_CARD = 'https://api.trello.com/1/card/[CARD_ID]/?fields=name&customFieldItems=true&key=' + API_KEY + '&token=' + TOKEN;
const TEMPLATE_URL_ANEXOS_CARD = 'https://api.trello.com/1/cards/[CARD_ID]/attachments?key=' + API_KEY + '&token=' + TOKEN;

const URL_RELATORIO_CARDS_TRELLO = 'https://naturadashboard.github.io/relatorio_cards_trello/';
const URL_RELATORIO_DASHBOARD 	 = 'https://naturadashboard.github.io/ad/';

const TIPO_REQ_AJAX_GET = 'get';

const TIPO_DADO_AJAX_JSON = 'json';

const NOME_LABEL_CCM = 'CCM';
const NOME_LABEL_DEBUG = 'Debug';
const NOME_LABEL_FD = 'FD';
const NOME_LABEL_SMALL_ENHANCEMENT = 'Small Enhancement';
const NOME_LABEL_ESTIMATIVA = 'Estimativa';
const NOME_LABEL_SIR_FM = 'SIR FM';
const NOME_LABEL_FM = 'FM';
const NOME_LABEL_SIR_ERRO = 'SIR ERRO';

const NOME_CARD_TICKET_EXEMPLO = 'Ticket Exemplo';
const NOME_CARD_SIR_EXEMPLO = 'SIR-NXX- WPYY';

const INICIO_NOME_ANEXO_EF = 'EF_';

const NOME_LISTA_BACKLOG_DEMANDAS = 'Backlog Demandas';
const NOME_LISTA_BACKLOG_SIR = 'Backlog SIR';
const NOME_LISTA_EM_ATENDIMENTO = 'Em Atendimento';
const NOME_LISTA_PENDENCIAS_REPROVADOS = 'Pendências / Reprovados';
const NOME_LISTA_EM_REVISAO = 'Em Revisão';
const NOME_LISTA_ENTREGUE = 'Entregue';

const NOME_CAMPO_PERSONALIZADO_FIM_CONSTRUCAO = 'Fim Construção';
const NOME_CAMPO_PERSONALIZADO_DATA_EF = 'Data EF';
const NOME_CAMPO_PERSONALIZADO_ABAP = 'ABAP';
const NOME_CAMPO_PERSONALIZADO_HORAS_ABAP = 'Horas ABAP';
const NOME_CAMPO_PERSONALIZADO_TICKET_NUMBER = 'Ticket Number';
const NOME_CAMPO_PERSONALIZADO_PROJETO = 'Projeto';
const NOME_CAMPO_PERSONALIZADO_DATA_RELEASE = 'Data Release';
const NOME_CAMPO_PERSONALIZADO_PENDENCIA_REPROVACAO = 'Pendência / Reprovação';

const PENDENCIA_REPROVACAO_ABAP = 'Abap';
const PENDENCIA_REPROVACAO_BASIS = 'Basis';
const PENDENCIA_REPROVACAO_FUNCIONAL = 'Funcional';

const TIPO_ACTION_COMMENT_CARD = 'commentCard';
const TIPO_ACTION_UPDATE_CARD = 'updateCard';
const TIPO_ACTION_UPDATE_CUSTOM_FIELD_ITEM = 'updateCustomFieldItem';

const OPCAO_FILTRO_TODOS = 'Todos';
