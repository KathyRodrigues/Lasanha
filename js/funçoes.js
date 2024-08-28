function clearFields(){
	document.getElementById('erro').innerHTML = "";
	document.getElementById('situacao').innerHTML = "";
}

function autenticacao(event){

    event.preventDefault()
 
	var email = document.getElementById("email")
	if(email.value == ''){
		document.getElementById("erro").innerHTML = "Favor preencher o campo: E-mail"
		email.focus()
		return false
	}
	else{
	var password = document.getElementById("password")
	if(password.value == ''){
		document.getElementById("erro").innerHTML = "Favor preencher o campo: Senha"
		password.focus()
		return false
		
	}

    if(email == "kathy@gmail.com" && password == "0312"){
		document.getElementById("situacao").innerHTML = "Autenticação realizada com sucesso!";
	}
	else{
		document.getElementById("erro").innerHTML = "Erro na autenticação"
    }
}}
document.getElementById('login').addEventListener('submit', function(event) {
    autenticacao(event);
    
})