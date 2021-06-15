document.getElementById('formulario').addEventListener('submit', cadastrarCurso)

function cadastrarCurso(e){
    nomeCurso = document.getElementById('form_nome').value
    dataIncioCurso = document.getElementById('form_dataInicio').value
    dataFimCurso = document.getElementById('form_dataFim').value
    duracaoCurso = document.getElementById('form_duracao').value
    descricaoCurso = document.getElementById('form_desc').value

    //verificando campo vazios
    if(!nomeCurso || !dataIncioCurso || !dataFimCurso || !duracaoCurso || !descricaoCurso){
        alert("Preencha os campos")
        
    }

    //verificação da data
    if(dataFimCurso < dataIncioCurso){
        alert("Data não permitida")
        
    }
    
    //limpando campos
    /*document.getElementById('formulario').reset()*/

    var curso = {
        nome: nomeCurso,
        dataInicio: dataIncioCurso,
        dataFinal: dataFimCurso,
        duracao: duracaoCurso,
        descricao: descricaoCurso
    }

    //salva os dados no navegador
    if(localStorage.getItem('listaCursos') === null){
        var cursos = []
        cursos.push(curso)
        localStorage.setItem('listaCursos', JSON.stringify(cursos))
    }else{
        var cursos = JSON.parse(localStorage.getItem('listaCursos'))
        cursos.push(curso)
        localStorage.setItem('listaCursos', JSON.stringify(cursos))
    }

    e.preventDefault()
    mostrarCadastros()
}


function mostrarCadastros(){
    var cursos = JSON.parse(localStorage.getItem('listaCursos'))
    var listaResultados = document.getElementById('resultado')

    listaResultados.innerHTML = '';

    for(var i = 0; i < cursos.length; i++){
        var nome = cursos[i].nome;
        var inicio = cursos[i].dataInicio;
        var fim = cursos[i].dataFinal;
        var duracao = cursos[i].duracao;
        var descricao = cursos[i].descricao;

        listaResultados.innerHTML += '<tr><td>' + nome +
                                    '</td><td>' + duracao + '</td><td>' + inicio +
                                    '</td><td>' + fim +
                                    '</td></tr>'
    }
}