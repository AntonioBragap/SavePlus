// scripts.js

/**
 * Função para exibir os horários dos medicamentos cadastrados
 */
function viewMedications() {
  // Lógica para exibir os horários dos medicamentos cadastrados
  alert("Exibindo horários dos medicamentos cadastrados.");
}

/**
 * Função para cadastrar um novo medicamento
 */
function addMedication() {
  // Lógica para cadastrar um novo medicamento
  alert("Cadastrar novo medicamento.");
}

/**
 * Função para anotar a pressão arterial e batimento cardíaco
 */
function logBloodPressure() {
  // Lógica para anotar a pressão arterial e batimento cardíaco
  alert("Anotar pressão arterial e batimento cardíaco.");
}

/**
 * Função para enviar uma mensagem de emergência via WhatsApp
 */
function sendEmergency() {
  // Verifica se o número de contato de emergência está salvo no local storage
  const phoneNumber = localStorage.getItem("emergencyContact");
  if (!phoneNumber) {
    alert("Por favor, cadastre um contato de emergência primeiro.");
    return;
  }

  // Mensagem de emergência
  const message = encodeURIComponent("Emergência! Preciso de ajuda.");
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
  window.open(whatsappUrl, "_blank");
}

/**
 * Função para salvar o número de contato de emergência no local storage
 */
document
  .getElementById("emergency-contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const emergencyNumber = document.getElementById("emergency-number").value;
    localStorage.setItem("emergencyContact", emergencyNumber);
    alert("Contato de emergência salvo com sucesso!");
  });

/**
 * Função para rolar a página até o topo
 */
document.getElementById("voltar-topo").onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
