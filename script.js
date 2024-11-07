document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos do formulário
    const name = document.getElementById("name").value;
    const observation = document.getElementById("observation").value;
    const phone = document.getElementById("phone").value;

    // Formata a mensagem para o WhatsApp (usando %0A para quebra de linha)
    const message = `Olá! Me interessei no que vi :%0A%0ANome: ${name}%0AObservação: ${observation}%0ATelefone: ${phone}`;

    // Substitua "SEUNUMERO" pelo número de WhatsApp (formato internacional)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5515996080660&text=${message}`;

    // Abre o WhatsApp com a mensagem preenchida
    window.open(whatsappUrl, "_blank");
});
