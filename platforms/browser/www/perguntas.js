function Pergunta (codigo, texto){
	this.codigo = codigo;
	this.texto = texto;
}

function PergResposta (pergunta, resposta){
    this.pergunta = pergunta;
    this.resposta = resposta;
}

function NumeroPergResp (numero, pr){
    this.numero = numero;
    this.pr = pr;
}

function Resultados (numero, pergunta, respostaReal, respostaDada, certo){
	this.numero = numero;
	this.pergunta = pergunta;
	this.respostaDada = respostaDada;
	this.respostaReal = respostaReal;
	this.certo = certo;
}
function Percurso(texto, tempo, partida, chegada){
	this.texto = texto;
	this.tempo = tempo;
	this.partida = partida;
	this.chegada = chegada;
}

var pergAtual = 0;

var passPercursos = new Array("fim111","fim222","fim333");

var infoPerc = new Array (new Percurso('Neste percurso ficamos pelo largo da Igreja para desvendar alguns dos seus segredos', '30min', 'Largo da Igreja', 'Largo da Igreja'),
						  new Percurso('Neste percurso iremos descer a aldeia e descobrir algumas das suas curiosidades', '30min', 'Largo da Igreja', 'Largo da Igreja'),
						  new Percurso('Neste percurso iremos subir a aldeia de Olhalvo e descobrir a vista do alto do antigo moinho', '40min', 'Largo da Igreja', 'Largo da Igreja')
						  )
var tempoPercursos;//::Array numeros (talvez mudar para string e fazer 1h30min0s)
var pontosPercursos;//::Array numeros

var perguntasRespostas;//vetor de PergResposta onde guardamos as perguntas feitas e as respostas certas
var respostasInseridas;//vetor de Resposta (string) onde guardamos as respostas dadas
var resultadosFinais;//:: Resultados
var pontuacao = 0;

function escreveInfoPercurso(num){
	var inf = infoPerc[num];
	var tex ='<br>'+ inf.texto + '<br><br><br><span style="text-align:left"> Tempo aproximado: '+inf.tempo+' <br>Partida: '+ inf.partida +
			  '<br> Chegada: '+inf.chegada+ '</span>';
	if (tempoPercursos[num]!=null)
		tex = tex + '<br><span style="color:red">Atenção se recomeçar, perderá os valores do percurso realizado anteriormente</span>';
	document.getElementById('textoInforPerc').innerHTML = tex;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function escreveIndice(tam){
	var add = '';
	for (i = 0; i < tam ; i++){
		add = add + '<button id = "indice'+i+'" class="indices" onclick="trocaParaPergunta('+i+');">'+(i+1)+'</button>'
	}	 
	document.getElementById('indice').innerHTML = add;
	
}
function trocaParaPergunta (num){
	inserirResposta (pergAtual, document.getElementById("resposta"+pergAtual).value);

	pergAtual = num;
	escrevePergunta(listaPergPercursoAtual,listaIndicPercursoAtual);
	botoesPerguntas(num);
}

function escrevePergunta (listaPer, listaIndic){
	var perg;
	var respostaJaInserida;
	if (perguntasRespostas[pergAtual]==null){
		var alPerg = getRndInteger(0, listaPer[pergAtual].length-1); 
		perg = listaPer[pergAtual][alPerg].pergunta.texto;
		perguntasRespostas [pergAtual] = listaPer[pergAtual][alPerg];
		respostaJaInserida = "onfocus=''";
	}else{
		perg = perguntasRespostas[pergAtual].pergunta.texto;   
		if (respostasInseridas[pergAtual]==null)
			respostaJaInserida = "onfocus=''";
		else
			respostaJaInserida = "value = '"+ respostasInseridas[pergAtual]+"'";
	}
	
	var incluir = "<p id='indicacao'>"+listaIndic[pergAtual]+"</p>"+
                  "<p id='pergunta'>"+perg+"</p>"+
                  "<input type='text' class='respostas' id='resposta"+pergAtual+"'"+respostaJaInserida+">";
    document.getElementById("pergunta").innerHTML = incluir;
	
	//colocar cor no indice onde estamos
	assinalarIndice (pergAtual);

}

function assinalarIndice (ind){
	for(i=0; i < listaPergPercursoAtual.length; i++)
		document.getElementById('indice'+i).style.backgroundColor = 'white';
	document.getElementById('indice'+ind).style.backgroundColor = '#2b9afa';
}

 //<input type="text" name="firstname" value="Mickey">
function inserirResposta (numeroPerg, resp){
	respostasInseridas[numeroPerg] = resp;
	if (resp!=''){
		document.getElementById('indice'+numeroPerg).style.border='solid 3pt';
		document.getElementById('indice'+numeroPerg).style.borderColor='green';

	}
}

function resultados (){
	for (i = 0; i < perguntasRespostas.length; i++){
		var rC= perguntasRespostas[i].resposta;
		var rCerta =rC.toLowerCase();
		var rIn = respostasInseridas[i].toLowerCase().replace(/\s/g, '');
		var certo = rIn != null && (rCerta == rIn || rIn.includes(rCerta));
		if (certo) pontuacao+=10;
		resultadosFinais[i] = new Resultados (i, perguntasRespostas[i].pergunta, perguntasRespostas[i].resposta, respostasInseridas[i], certo);
	}
}

function imprimirResultados(){
	var tableRef = document.getElementById('tabelaResGerais').getElementsByTagName('tbody')[0];
	//com innerHTML
	var includeTotal='';
	for (i = 0; i < resultadosFinais.length; i++){
		var classificacao = resultadosFinais[i].certo?'Certa':'Errada';
		var cor = resultadosFinais[i].certo?'green':'red';
		var includePerRow = '<tr><td onclick="menuDetalhes('+i+')" style="background-color:'+cor+';">'+(resultadosFinais[i].numero+1)+
							'</td><td onclick="menuDetalhes('+i+')" style="background-color:'+cor+';">'+classificacao + '</span></td></tr>' ;
		includeTotal = includeTotal + includePerRow;
	}
	tableRef.innerHTML = includeTotal;
	var a = document.getElementById('pontos').innerHTML = 'Pontuação: ' + pontuacao+ '/'+listaPergPercursoAtual.length*10+'pontos';
	pontosPercursos[numeroPercAtual] = pontuacao;
	printTempoFinalPerc(tempoPercursos[numeroPercAtual]);
}

function respondeuATodas(){
	var count = '';
	var num = 0;
	for(i= 0; i < respostasInseridas.length;i++){
		if (respostasInseridas[i]==''){
			count= count + ' '+ (i+1);
			num++;
		}
	}
	var t = 'Já respondeu a todas as questões';
	if (num != 0){
		t = 'Ainda não respondeu a '+ num+' questões ('+count+')';
	}
	document.getElementById('mensTerminar').innerHTML = t;
}

function detalhes(numero){
	var res = resultadosFinais[numero];
	var cor = res.certo?'#03ff03':'#ff4f4f';
	var a = '<span style="color:'+cor+';font-weight: bold;font-size: 20pt;">Pergunta '+(numero+1)+'<br></span>'+ 
			'<br><span id="detPergunta" style="font-size: 20pt;">'+ res.pergunta.texto +'</span>'+
			'<br><span id="detCodigo" style="font-size: 15pt;position: relative;left: -82pt;">(cod:'+ res.pergunta.codigo +')</span>'+
			'<br><br><span id="detRespSua">A sua resposta: <span style="color: #2b9afa;;">'+res.respostaDada+'</span></span>'+
			'<br><span id="detRespCerta">A resposta correta: <span style="color: #2b9afa;">'+res.respostaReal+'</span></span>';
	document.getElementById('textoDetalhes').innerHTML =  a;
}

function botoesPerguntas(num){
	show('p1back'); show ('p1next'); hide('concluir');
	if (num == 0){//primeira questão
		hide('p1back');
		document.getElementById('p1back').style.top='-41pt';
		document.getElementById('concluir').style.top='10pt'; 
	}else if (num == listaPergPercursoAtual.length-1){//ultima questao
		hide('p1next');
		document.getElementById('p1back').style.top='0pt';
		document.getElementById('concluir').style.top='-41pt'; 
	}else{
		document.getElementById('p1back').style.top='-41pt';
		document.getElementById('concluir').style.top='-36pt'; 
	}
	//concluir
	var todas = perguntasEstaoCompletas();
	if (todas)
		show('concluir');
}
/**
	Retorna valor de verdade true se estiverem completas e false cc
*/
function perguntasEstaoCompletas(){
	var esta = true;
	for(i = 0; i < perguntasRespostas.length && esta; i++){
		esta = perguntasRespostas[i]!=null;
	}
	return esta;
}


//Tempo do percurso
var startTime, endTime;
function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;
  // get seconds 
  var timeMin = Math.floor(timeDiff/60);
  var seconds = Math.round((timeDiff) - (timeMin*60));
  tempoPercursos[numeroPercAtual] = timeMin + 'm '+seconds+'s';
}
function printTempoFinalPerc(temp){
	document.getElementById('tempo').innerHTML = 'Tempo: '+ temp;
}

function escreverValores(){
	var count = 0;
	for (i=0; i < tempoPercursos.length; i++){
		if (tempoPercursos[i]!= null){
			var a = document.getElementById("valoresObtidos"+(i+1));
			var b = pontosPercursos[i];
			a.innerHTML = b+" pts;  " + tempoPercursos[i];
			a.style.display='block';
			count+=b;
		}
	}
	if(count!=0)
	document.getElementById('pontTot').innerHTML=count;
}

function totalPontos(){
	var count = 0;
	for (i = 0; i < pontosPercursos.length; i++){
		if (pontosPercursos[i]!=null)
			count+=pontosPercursos[i];
	}
	return count;
}