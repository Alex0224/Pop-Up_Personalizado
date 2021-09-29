function fecharModal() {
    let janelaModal = document.getElementById('dv-modal')

    janelaModal.style.display = 'none';
    janelaModal.style.visibility = 'hidden';
}

//---------------------------------------------------------------------------------

function abrirPagina() {
    window.location.href = 'https://www.youtube.com'
}

//---------------------------------------------------------------------------------

function verificarForm() {
    let nome = InputName.value;
    let email = InputEmail.value;
    let CPF = InputCPF.value;
    let senha = InputSenha.value;
    let anoNascimento = InputNascimento.value;
    var timeDoCoracaoselect = document.getElementById('team_id');
    var timeDoCoracao = timeDoCoracaoselect.options[timeDoCoracaoselect.selectedIndex].value;
    let arr = [];
    let inputElements = document.getElementsByClassName('sport');
    for (let i = 0; inputElements[i]; ++i) {
        if (inputElements[i].checked)
            arr.push(inputElements[i].id);
    }

    verificarCampos()

    function verificarCampos() {
        if (nome == "" || email == "" || CPF == "" || anoNascimento == "" || timeDoCoracao == "" || arr == [] || senha == "") {
            alert("Todos os campos devem ser preenchidos.");
        } else {
            verificarMenorDeIdade()
        }
    }
    function verificarMenorDeIdade() {
        let idade = 2021 - anoNascimento

        if (idade < 18) {
            alert('Apenas maiores de idade podem se cadastrar.');
        } else {
            const cadastroCliente = {
                name: nome,
                email: email,
                CPF: CPF,
                anoNascimento: anoNascimento,
                timeDoCoracao: timeDoCoracao,
                interesseDeEsportes: arr
            }

            alert("Retornaremos um JSON")
            alert(JSON.stringify(cadastroCliente))
        }
    }
}







