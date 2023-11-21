// Preços dos itens
const prices = {
    brioche: 3.00,
    cebola: 3.50,
    gergelim: 3.00,
    australiano: 4.00,
    patinho: 6.00,
    costela: 5.00,
    picanha: 7.00,
    linguiça: 5.50,
    pernil_suíno: 6.00,
    queijo_prato: 1.00,
    queijo_cheddar: 1.00,
    requeijao: 1.00,
    mussarela: 1.00,
    bacon: 3.00,
    cebola_caramel: 2.00,
    cebola_rx: 0.50,
    alface: 0.50,
    tomate: 0.50,
    banana_frita: 1.00,
    ovo: 1.50,
    batata: 0.50,
    cebola_crispy: 1.50,
    picles: 3.00,
    mostarda: 4.00,
    barbecue: 3.00,
    catchup: 2.00,
    maionese_alho: 3.50,
    maionese_bacon: 5.00,
};
  
  // Atualiza o total do pedido
  function updateTotal() {
    let total = 0;
  
    // Obtem todos os elementos de input e select
    const inputs = document.querySelectorAll('input');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  
    inputs.forEach(input => {
      if (input.type === 'radio' && input.checked) {
        total += prices[input.value];
      } else if (input.type === 'number') {
        total += prices[input.name] * parseFloat(input.value);
      }
    });
  
    checkboxes.forEach(checkbox => {
      total += prices[checkbox.name];
    });
  
    // Atualiza o total na página
    document.getElementById('total').innerText = total.toFixed(2);
  }
  
  // Adiciona eventos para atualizar o total quando os inputs são alterados
  document.addEventListener('change', updateTotal);
  document.addEventListener('input', updateTotal);

  function finalizeOrder() {
    // Obtém o valor total do pedido
    const totalElement = document.getElementById('total');
    const total = parseFloat(totalElement.innerText);
  
    // Exibe um popup com a mensagem
    if (isNaN(total) || total === 0.00) {
      alert('Não está com fome? Escolha algo, fique à vontade!');
    } else {
      alert('Seu pedido foi recebido e logo estará pronto! Muito obrigado.');
    }
  }