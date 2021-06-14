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
        return false
    }

    //verificação da data
    if(dataFimCurso < dataIncioCurso){
        alert("Data não permitida")
        return false
    }
    
    //limpando campos
    document.getElementById('formulario').reset()

    var curso = {
        nome: nomeCurso,
        dataInicio: dataIncioCurso,
        dataFinal: dataFimCurso,
        duracao: duracaoCurso,
        descricao: descricaoCurso
    }

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
}