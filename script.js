const cards = document.querySelectorAll('.card');
const content = document.getElementById('content');
const textContent = document.getElementById('text-content');
const closeBtn = document.querySelector('.close-btn');
const clickSound = document.getElementById('click-sound');
const ambientSound = document.getElementById('ambient-sound');

// Conteúdos para cada tópico
const topics = {
  conexao: `<h2>Sobre a Conexão</h2><p>A conexão entre campo e cidade é essencial para o desenvolvimento sustentável. Ela promove o intercâmbio de cultura, tecnologia e trabalho, fortalecendo a economia e a qualidade de vida de ambos os ambientes.</p>`,
  tecnologia: `<h2>Tecnologia no Agro</h2><p>O uso de tecnologias avançadas no campo, como sensores, drones e aplicativos, aumenta a produtividade e a sustentabilidade, tornando o agro mais eficiente e inovador.</p>`,
  eventos: `<h2>Eventos do Agro</h2><p>Feiras como a Agrishow e a ExpoLondrina reúnem produtores, empresas e pesquisadores, mostrando o que há de mais moderno no setor agropecuário.</p><video width="100%" controls><source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm">Seu navegador não suporta o vídeo.</video>`,
  campocidade: `<h2>Campo e Cidade</h2><p>Campo e cidade são interdependentes, compartilhando recursos, cultura e pessoas. Essa parceria é fundamental para o equilíbrio social e ambiental.</p>`,
  galeria: `<h2>Galeria</h2><p>Confira fotos e vídeos que retratam a beleza e a conexão entre o campo e a cidade.</p><img src="https://cdn.pixabay.com/photo/2016/04/01/09/08/farm-1300875_1280.jpg" alt="Campo" style="width:100%;border-radius:10px;margin-top:10px;">`
};

cards.forEach(card => {
  card.addEventListener('click', () => {
    clickSound.play();
    textContent.innerHTML = topics[card.dataset.topic];
    content.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  content.style.display = 'none';
});

// Tocar som ambiente ao carregar
window.onload = () => {
  ambientSound.volume = 0.2;
  ambientSound.play().catch(() => {
    // Para navegadores que bloqueiam autoplay, o som só tocará após interação
  });
};
