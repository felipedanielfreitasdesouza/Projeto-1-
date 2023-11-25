 // Obtém dados do curso escolhido a partir dos atributos do elemento data
function cursoinfo(imgElement) {
    const cursoData = {
        curso: imgElement.parentElement.getAttribute("data-curso"),
        img: imgElement.parentElement.getAttribute("data-img"),
        status: imgElement.parentElement.getAttribute("data-status"),
        desc: imgElement.parentElement.getAttribute("data-desc"),
    };

    // Redireciona para a página 'cursos.html' passando dados do curso como parâmetro
    window.location.href = `cursos.html?cursoData=${encodeURIComponent(JSON.stringify(cursoData))}`;
}

 // Obtém parâmetros da URL, decodifica e armazena os dados do curso
 const urlParams = new URLSearchParams(window.location.search);
 const cursoDataString = urlParams.get('cursoData');
 const cursoData = JSON.parse(decodeURIComponent(cursoDataString));

 // Exibe informações do curso e botões na id curso-info
 document.getElementById('curso-info').innerHTML = `
 <img class="curso-img2" src="${cursoData.img}" alt="${cursoData.curso}">
 <div class="descrição">
     <h2>Informações do Curso</h2>
     <p>Descrição: ${cursoData.desc}</p>
</div>

<div style="color: white; padding: 20px;">
<button onclick="goToPage('principal.html')">voltar ao inicio</button>
<button onclick="goToPage('players.html')">começar aula</button>
</div>
 `;
 // Função para redirecionar para a pagina original página pela pagina dos players de video do curso
 function goToPage(page) {
    window.location.href = page;
}