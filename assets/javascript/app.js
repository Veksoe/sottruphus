// Dialog boks - metoder 
//Åbn dialogen ved at lytte til click på kortet. 
// Fanger data-dialog værdien og sammenligner den med dialogens data-id. Hvis de matcher, åbnes den tilhørende dialogboks 
document.querySelectorAll('.metoder').forEach(kort => {
    kort.addEventListener('click', () => {
      const targetId = kort.dataset.dialog;
      const dialog = document.querySelector(`.metode-dialog[data-id="${targetId}"]`);
      if (dialog) dialog.showModal();
    });
  });
  
  // Luk dialogen, når der klikkes på lukkeknappen
  document.querySelectorAll('.metode-dialog .close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('dialog').close();
    });
  });