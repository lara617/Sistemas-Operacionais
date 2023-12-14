function toggleVisibility(id) {
    var informacaoDiv = document.getElementById(id);
    if (informacaoDiv.style.display === "none") {
      informacaoDiv.style.display = "block";
    } else {
      informacaoDiv.style.display = "none";
    }
  }
  

  document.addEventListener('mousemove', (e) => {
    const rastro = document.querySelector('.rastro');
    const x = e.pageX;
    const y = e.pageY;
  
    // Atualiza a posição do rastro
    rastro.style.left = x - 12 + 'px'; /* Ajuste para centralizar o rastro no cursor */
    rastro.style.top = y - 12 + 'px'; /* Ajuste para centralizar o rastro no cursor */
  
    // Exibe o rastro com uma pequena animação de escala
    rastro.style.transform = 'scale(1)';
  });
  
  document.addEventListener('mouseleave', () => {
    const rastro = document.querySelector('.rastro');
  
    // Esconde o rastro ao sair da área da janela
    rastro.style.transform = 'scale(0)';
  });
  
//
  //document.addEventListener('DOMContentLoaded', () => {
  //  const canvas = document.createElement('canvas');
  //  const ctx = canvas.getContext('2d');

 //   canvas.width = window.innerWidth;
  //  canvas.height = window.innerHeight;
  //  document.body.appendChild(canvas);

//    const positions = [];

  // document.addEventListener('mousemove', (e) => {
   //     const xPos = e.clientX;
   //     const yPos = e.clientY;

    //    positions.push({ x: xPos, y: yPos });

   //     drawPath();
 //   });

  //  function drawPath() {
   //     ctx.clearRect(0, 0, canvas.width, canvas.height);
   //     ctx.beginPath();
   //     ctx.moveTo(positions[0].x, positions[0].y);

   //     for (const pos of positions) {
   //         ctx.lineTo(pos.x, pos.y);
    //    }

    //    ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
    //    ctx.lineWidth = 5; // Largura da linha
    //    ctx.stroke();
  //  }

    // Adiciona um temporizador para diminuir gradualmente a opacidade
   // document.addEventListener('mouseout', () => {
    //    setTimeout(() => {
    //        positions.length = 0; // Limpa as posições
    //        ctx.clearRect(0, 0, canvas.width, canvas.height);
   //     }, 100);
  //  });
//});

//function toggleVisibility(id) {
 //   var informacaoDiv = document.getElementById(id);
 //   if (informacaoDiv.style.display === "none") {
 //       informacaoDiv.style.display = "block";
   // } else {
 //       informacaoDiv.style.display = "none";
//    }
//}
