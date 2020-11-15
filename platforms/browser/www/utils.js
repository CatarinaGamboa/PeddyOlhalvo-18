function hide(id){
	document.getElementById(id).style.display = 'none';
}
function show(id){
	document.getElementById(id).style.display = 'block';
}


/*Hides e Shows para cada ecra */
function menuPercursos (){
    hide("welcoming"); show("menuPercursos");
	hide('detalhes'); hide('resultados');hide('desporto');
	hide('p1back'); hide('concluir');show('p1next');
	hide('infoPercursos');hide('valoresDesporto');
	escreverValores();
}
function menuPerguntas(){
	hide('menuPercursos');hide('confirmarSaidaPerguntas');
	hide('infoPercursos');
}
function menuResultados(){
	hide ('percurso1'); show('resultados');
	document.getElementById('passFimPercurso').value = ''; hide('erroPassFimPerc');
}
function menuDetalhes(num){
	hide('resultados'); 
	show('detalhes'); detalhes(num);
}
function menuInfoPercurso(){
	hide('menuPercursos'); show('infoPercursos');
	escreveInfoPercurso(numeroPercAtual);
}
function menuDesporto(){
	hide('menuPercursos');
	show('desporto');
}
function continuarParaDesporto(){
  	show('valoresDesporto');
  	hide('desporto');
  }
/*Final hides e shows*/

var equipa;
var passWelc = "olf18";
var passFimPerc;
var listaPergPercursoAtual;
var listaIndicPercursoAtual;
var numeroPercAtual;

function entrarEmPercurso(){
	pergAtual = 0;
	pontuacao = 0;
	var tamanho = listaPergPercursoAtual.length;
	resultadosFinais = new Array(tamanho);
	respostasInseridas = new Array (tamanho);
	perguntasRespostas = new Array (tamanho);
    escreveIndice(tamanho);
	escrevePergunta(listaPergPercursoAtual, listaIndicPercursoAtual);
	passFimPerc = passPercursos[numeroPercAtual];
}

  function nextWelcome(){
    equipa = document.getElementById("equipa").value;
    tempoPercursos = new Array (passPercursos.length);
	pontosPercursos = new Array (passPercursos.length);
	var passWelInserida = document.getElementById("passWelcoming").value;
    if (passWelInserida == passWelc){
        menuPercursos();
    }else
        show('erroWelc');
	document.getElementById('teamName').innerHTML='<h4 id="equipaNome">&nbsp&nbsp&nbsp&nbsp'+equipa+'<br>&nbsp&nbsp&nbsp&nbsp<span id="pontTot">'+totalPontos()+'</span> pontos</h4>';
	
  }

  function p1(){
	numeroPercAtual = 0;
	listaPergPercursoAtual = listasPergPercurso1;
	listaIndicPercursoAtual = listaIndicacoesPercurso1;
	menuInfoPercurso();

  }
  function continuarParaPercurso(){
	start();
	menuPerguntas();
	entrarEmPercurso();
    show('percurso1');

  }
  function p2(){
	numeroPercAtual = 1;
	listaPergPercursoAtual = listasPergPercurso2;
	listaIndicPercursoAtual = listaIndicacoesPercurso2;
	menuInfoPercurso();

  }
  function p3(){
	numeroPercAtual = 2;
	listaPergPercursoAtual = listasPergPercurso3;
	listaIndicPercursoAtual = listaIndicacoesPercurso3;
	menuInfoPercurso();
  }
  function p4(){
  	menuDesporto();
  }
  
 /* 
  function p1next(){
    inserirResposta (pergAtual, document.getElementById("resposta"+pergAtual).value);
    pergAtual++;
	if (pergAtual == listaPergPercursoAtual.length-1){
		hide('p1next'); show('concluir');
		document.getElementById('p1back').style.top='0pt';
		document.getElementById('concluir').style.top='-100pt';
	}else if (pergAtual == 1){
		show('p1back');
		document.getElementById('concluir').style.top='-90pt'; 
	}else
		document.getElementById('concluir').style.top='-90pt'; 
	escrevePergunta(listaPergPercursoAtual, listaIndicPercursoAtual);
	
  }
  
  function p1back(){
	  inserirResposta (pergAtual, document.getElementById("resposta"+pergAtual).value);
	  if (pergAtual == 1){
		hide('p1back');
		document.getElementById('concluir').style.top='10pt'; 
	  }else if(pergAtual == listaIndicPercursoAtual.length-1){
		show('p1next');
		document.getElementById('p1back').style.top='-100pt';
		document.getElementById('concluir').style.top='-90pt';
	  }else
		document.getElementById('concluir').style.top='-90pt';
	  
	  
	pergAtual--;
	escrevePergunta(listaPergPercursoAtual, listaIndicPercursoAtual);
	 
	
  }
*/
	function p1back(){
		trocaParaPergunta(pergAtual-1);
	}

	function p1next(){
		trocaParaPergunta(pergAtual+1);
	}
	

  
  function concluir(){
	inserirResposta (pergAtual, document.getElementById("resposta"+pergAtual).value);
	respondeuATodas();
	show('confirmarSaidaPerguntas');
  }
  
  function continuarResultados(){
	 show('passFinalPerc');
  }
  function continuarResultadosPass(){
	var passFimInserida = document.getElementById("passFimPercurso").value;
	if (passFimInserida == passFimPerc){
		end();resultados();menuResultados();
		imprimirResultados();
		
	}else
		show('erroPassFimPerc');
  }
 
  function terminarResponder(){
	hide('confirmarSaidaPerguntas');
  }
  function sairDetalhes(){
	hide('detalhes'); show('resultados');
  }


  /////////////////////////////CORDOVA STUFF
  // Call onDeviceReady when Cordova is loaded.
    //
    // At this point, the document has loaded but cordova-1.7.0.js has not.
    // When Cordova is loaded and talking with the native device,
    // it will call the event `deviceready`.
    //
  /*  function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // Cordova is loaded and it is now safe to call Cordova methods
    //
    function onDeviceReady() {
        // Register the event listener
        document.addEventListener("backbutton", onBackKeyDown, false);
    }

    // Handle the back button
    //
    function onBackKeyDown() {

    }
*/
