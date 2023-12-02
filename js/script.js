document.getElementById('botaoEnviar').addEventListener('click', function() {
  // Obter os dados do formulário
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const confirmeSenha = document.getElementById('confirmeSenha').value;
  
   

  // Validar se os campos não estão vazios
  if (nome.trim() === '' || email.trim() === '' || senha.trim() === '' || confirmeSenha.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
  }

  // Criar um objeto com os dados
  const dados = { nome, email ,senha,confirmeSenha };

  // Armazenar os dados no localStorage
  localStorage.setItem('dadosUsuario', JSON.stringify(dados));

  // Limpar os campos do formulário
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('senha').value = '';
  document.getElementById('confirmeSenha').value = '';  
  
    

  alert('Dados enviados e armazenados com sucesso!');
});

//


