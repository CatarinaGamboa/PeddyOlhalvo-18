//ATENÇÃO -- escrever todas as respostas em letra minuscula, sem espaços
/******************************Inicio Perc 1 *******************************/
var listasPergPercurso1 = [ 
	new Array (new PergResposta(new Pergunta(111, "O que significa a palavra com dois U's?"), 'teu'),//1
			   new PergResposta(new Pergunta(112, "O que significa a palavra com dois T's?"), 'todo')),
	new Array (new PergResposta(new Pergunta(121, 'Quantos anos faz a edição do círio da próxima semana?'), '516')),//2
	new Array (new PergResposta(new Pergunta(131, 'Soma as idades dos membros do grupo, multiplica pelo número de cunhas e soma os digitos resultantes'), '9'),//3
			   new PergResposta(new Pergunta(132, 'Multiplica as almofadas da porta principal pelo número de cunhas e soma os dígitos'), '9'),
			   new PergResposta(new Pergunta(133, 'Multiplica os vidros da janela central pelo número de cunhas e soma os dígitos'), '9')),
	new Array (new PergResposta(new Pergunta(141, 'Qual a cor do vestido daquele que reza?'), 'castanho'),//4
			   new PergResposta(new Pergunta(142, 'Qual a cor da veste daquela que está ajoelhada?'), 'rosa'),
			   new PergResposta(new Pergunta(143, 'Qual a cor da veste daquele que está deitado?'), 'azul')),
	new Array (new PergResposta(new Pergunta(151, 'Quantas pessoas estão no Projeto Amigo?'), '8'),//5
			   new PergResposta(new Pergunta(152, 'Quantas senhoras se veem com bengala no Projeto Amigo?'), '1'),
			   new PergResposta(new Pergunta(153, 'Quantos botões tem o fato do Projeto Amigo?'), '7')),
	new Array (new PergResposta(new Pergunta(161, 'Descobre a palavra: 4ª, 3, 12, 17'), 'luz'),//6
			   new PergResposta(new Pergunta(162, 'Descobre a palavra: 7ª, 4, 9, 13, 18'), 'amor'),
			   new PergResposta(new Pergunta(163, 'Descobre a palavra: 9ª, 3, 7, 21, 27, 28'), 'maria'),
			   new PergResposta(new Pergunta(161, 'Descobre a palavra: 7ª, 14, 16, 17, 21, 28'), 'credo')),
	new Array (new PergResposta(new Pergunta(171, 'O que falta na torre direita do brasão?'), 'janela')),//7
	new Array (new PergResposta(new Pergunta(181, 'Qual o número depois de Deus Para o Homem?'), '400'),//8
			   new PergResposta(new Pergunta(182, 'Qual o número depois da Nação Forte e Poderosa?'), '98312')),
	new Array (new PergResposta(new Pergunta(191, 'Quantos metros tem de altitude máxima a rota da Nossa Senhora da Encarnação?'), '174'),//9
			   new PergResposta(new Pergunta(192, 'Quantos metros tem de altitude mínima a rota da Nossa Senhora da Encarnação?'), '82'),
			   new PergResposta(new Pergunta(193, 'Quantos metros tem de desnível acumulado a rota da Nossa Senhora da Encarnação?'), '324')),
	new Array (new PergResposta(new Pergunta(1101, 'Qual a cor do PEPE ao lado da Igreja?'), 'laranja')),//10
	new Array (new PergResposta(new Pergunta(1111, 'Qual o número entre π e o seu simétrico?'), '15')),//11
	new Array (new PergResposta(new Pergunta(1121, 'Tira o azul à cor da SFO, qual fica?'), 'Amarelo'))];//12
	
	
var listaIndicacoesPercurso1 = ['Aproxime-se da Igreja', '', '', '', '', //1-5
								'Dirija-se ao coreto', 'Aproxime-se da Junta de Freguesia', '', '', '', '', '']//6-12

/******************************Fim Perc 1************************************/
/****************************Início Perc 2***********************************/
var listasPergPercurso2 = [ 
	new Array (new PergResposta(new Pergunta(211, 'Qual o ano do copo meio cheio?'), '13'),//1
			   new PergResposta(new Pergunta(212, 'Qual o ano da sanita?'), '15'),
			   new PergResposta(new Pergunta(213, 'Quantos os botões do homem de 2012?'), '4')),//---rever
	new Array (new PergResposta(new Pergunta(221, 'Qual a marca do Inverter?'), 'panasonic'),//2
			   new PergResposta(new Pergunta(222, 'Qual o nome próprio por cima do obrigatório?'), 'Manuel'),
			   new PergResposta(new Pergunta(222, 'Qual o apelido por cima do obrigatório?'), 'Cunha')),
	new Array (new PergResposta(new Pergunta(231, 'Qual o nome da travessa?'), 'Piscos')),//3
	new Array (new PergResposta(new Pergunta(241, 'Que cor está fora do sítio?'), 'Amarelo')),//4
	new Array (new PergResposta(new Pergunta(251, 'Que Santa venera o Sá?'), 'Teresinha')),//5
	new Array (new PergResposta(new Pergunta(261, 'Qual o ano entre Jesus e Cristo?'), '1965'),//6
			   new PergResposta(new Pergunta(262, 'O que tem o número 5 na mão?'), 'anel')),
	new Array (new PergResposta(new Pergunta(271, 'Qual o apelido do dono da pensão?'), 'Vasques'),//7
			   new PergResposta(new Pergunta(272, 'Qual a cor do trevo de 4 folhas?'), 'Branco'),
			   new PergResposta(new Pergunta(273, 'O que vem depois do Alf?'), 'eu')),
	new Array (new PergResposta(new Pergunta(281, 'Quantas listas brancas horizontais tem a zebra?'), '6')),//8
	new Array (new PergResposta(new Pergunta(291, 'O que está entre o Jantar Bonito?'), 'H'),//9
			   new PergResposta(new Pergunta(292, 'O que está depois do Jantar de Hoje'), 'B'),
			   new PergResposta(new Pergunta(293, 'Quantas pás tem a ventoinha acima do H'), '8')),
	new Array (new PergResposta(new Pergunta(2101, 'Qual a primeira letra do que fecha o 29'), 'T')),//10
	new Array (new PergResposta(new Pergunta(2111, 'Que ave está no 44?'), 'andorinha'),//11
			   new PergResposta(new Pergunta(2112, 'Quantos buracos tem um dos respiradores de pedra?'), '5'),
			   new PergResposta(new Pergunta(2113, 'Quais as 2 primeiras letras do dono do atelier?'), 'Ca')),
	new Array (new PergResposta(new Pergunta(2121, 'A que horas é a última tiragem?'), '18')),//12
	new Array (new PergResposta(new Pergunta(2131, 'Quantos vidros tem cada janela hexágono?'), '6'),//13
			   new PergResposta(new Pergunta(2132, 'Quantas janelas hexágono se veem?'), '4')),
	new Array (new PergResposta(new Pergunta(2141, 'Qual a primeira letra do nome do Santo que está para lá do portão de roda?'), 'J')),//14
	new Array (new PergResposta(new Pergunta(2151, 'Qual o apelido do inglês que navega muito?'), 'Reis'),//15
			   new PergResposta(new Pergunta(2151, 'Qual a primeira letra do nome do inglês que navega muito?'), 'J'),
			   new PergResposta(new Pergunta(2151, 'Qual o nome do meio do inglês que navega muito?'), 'Pereira')),
	new Array (new PergResposta(new Pergunta(2161, 'Qual o ano do alvará do ESEGUR?'), '1999'))]
	//FALTA UMA QUESTÃO PARA A SFO -- INTERAÇÃO/ATIVIDADE
	

	

var listaIndicacoesPercurso2 = ['Aproxime-se do losango no ar',//1
								'Desça ao longo da parede de pedra',//2
								'Desça entre o 4 e o 6',//3
								'No fim das escadas, olha para o céu Português',//4
								'Continua a descer','',//5,6
								'No fim do Tristão vira a direita','', '', '', '',//7-11
								'Sobe a rua das Adegas', '', '', //12-14
								'No fim da subida aproxime-se da fonte', //15
								'Suba a rua à direita, a caminho da Igreja',//16
								];

/*******************************Fim Perc 2 *******************************/





//--------------------------------------LUIS VILLAR-------------------------------------------------------//
/*****************************Inicio Perc 3*******************************/
var listasPergPercurso3 = [ 
	new Array (new PergResposta(new Pergunta(311, 'Quem patrocina o café da SFO?'), 'tofa')),//1
	new Array (new PergResposta(new Pergunta(321, 'Qual o número da avó de verde?'), '600'),//2
			   new PergResposta(new Pergunta(322, 'Qual o número da Pantera Azul?'), '1365'),
			   new PergResposta(new Pergunta(323, 'Qual a cor do ovo?'), 'laranja')),
	new Array (new PergResposta(new Pergunta(331, 'Quantos animais estão entre os cavalos?'), '2'),//3
			   new PergResposta(new Pergunta(332, 'Quantos romanos vieram no dia 11?'), '8')),
	new Array (new PergResposta(new Pergunta(341, 'O que está entre os jogadores do Sporting?'), 'moinho'),//4
			   new PergResposta(new Pergunta(342, 'De que é o cantinho?'), 'novidades'),
			   new PergResposta(new Pergunta(343, 'Quantos barcos tem a família Costa?'), '3')),
	new Array (new PergResposta(new Pergunta(351, 'Quantos são os cachos de uva do HFC?'), '8'),//5
			   new PergResposta(new Pergunta(352, 'Quantas são as flores de renda do HFC?'), '22')),
	new Array (new PergResposta(new Pergunta(361, 'Qual a bebida mais fresca?'), 'ginja')),//6------------------REVER
	new Array (new PergResposta(new Pergunta(371, 'Em que ano se transformou a balança num facalhão?'), '18'),//7
			   new PergResposta(new Pergunta(372, 'Qual é a cerveja viva?'), 'imperial'),
			   new PergResposta(new Pergunta(373, 'Qual a primeira letra do que pintou as 2 cabrinhas?'), 'D')),
	new Array (new PergResposta(new Pergunta(381, 'Complete:"Bom dia uma vez por dia já são conversas"'), 'demais'),//8
			   new PergResposta(new Pergunta(382, 'Que frutos dá a maior arvore da rua?'), 'figos'),
			   new PergResposta(new Pergunta(383, 'Quantas são as mós do 15?'), '3')),
	new Array (new PergResposta(new Pergunta(391, 'Que número tem o carpinteiro em Fátima?'), '13'),//9
			   new PergResposta(new Pergunta(392, 'Quantas as peças castanhas que vestem os pastorinhos no 13?'), '3'),
			   new PergResposta(new Pergunta(393, 'Qual a cor do Primeiro Ministro do 13?'), 'verde')),
	new Array (new PergResposta(new Pergunta(3101, 'Qual o número do Sportinguista?'), '11')),//10
	new Array (new PergResposta(new Pergunta(3111, 'De que cor é o Portrial?'), 'verde'),//11
			   new PergResposta(new Pergunta(3112, 'Qual o número do Portrial?'), '19'),
			   new PergResposta(new Pergunta(3112, 'Quantas lâmpadas tem a casa do Portrial?'), '5')),
	new Array (new PergResposta(new Pergunta(3121, 'Que animal acompanha o fumador da Alice?'), 'caracol')),//12
	new Array (new PergResposta(new Pergunta(3131, 'O que é a segurança no ano 2000?'), 'top')),//13
	new Array (new PergResposta(new Pergunta(3141, 'Qual a ultima letra do 1o nome do Miranda?'), 'O'),//14
			   new PergResposta(new Pergunta(3142, 'Quantos vidros tem a janela debaixo da argola?'), '2')),
	new Array (new PergResposta(new Pergunta(3151, 'Em que número estão os Aflictos?'), '6'),//15
			   new PergResposta(new Pergunta(3152, 'O que faz par com o tilt?'), 'pan'),
			   new PergResposta(new Pergunta(3153, 'O que está por cima do sarcófago?'), 'concha')),
	new Array (new PergResposta(new Pergunta(3161, 'Que árvores estão plantadas à frente da escola?'), 'oliveiras')),//16
	new Array (new PergResposta(new Pergunta(3171, 'Qual o animal rosa às pintinhas azuis na escola?'), 'camelo'),//17
			   new PergResposta(new Pergunta(3172, 'Qual a cor do animal de barriga laranja na escola?'), 'verde')),
	new Array (new PergResposta(new Pergunta(3181, 'Qual a cor do que está entre os dois 2004?'), 'verde')),//18
	new Array (new PergResposta(new Pergunta(3191, 'Qual a primeira letra do gangue?'), 'L')),//19
	new Array (new PergResposta(new Pergunta(3201, 'De quem é o beco que acabou de atravessar?'), 'pio'))];//20
	
var listaIndicacoesPercurso3 = ['Desça as escadas à direita',//1
 								'Contorne a SFO e suba','',//2,3
 								'Suba em direção à Pocariça','',//4,5
 								'Entre na casa nº27 e faça a atividade', 'Continue a subir a rua',//6,7
 								'Segue pela rua do rei mago', //8
 								'Desce pela rua do Tely', '',//9,10
 								'No fim do frei vira à direita', '',//11,12
 								'Siga até ao final da Rua Perdigão e procura a roda de água',//13
 								'Não vás para a rua da professora, caminha até ao STOP', //14
 								'Contorna o asterisco e sobe', '', '', //15,16,17
 								'Segue até à "Azul e Rosa"', 'Segue pelo beco', ''];//18, 19, 20
 								

/***************************Fim Perc 3 ************************/