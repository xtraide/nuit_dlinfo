/* 
    fonction pour switch des css (defi theme n°392)
*/
function defi_theme() {
    //togle une classe 
    document.body.classList.toggle("first");

    document.body.classList.toggle("second");
}


document.addEventListener('DOMContentLoaded', function () {
  const pointerZone = document.getElementById('pointer-zone');

  document.addEventListener('mousemove', function (e) {
    const x = (e.clientX - 200);
    const y = (e.clientY - 200);

    pointerZone.style.left = `${x}px`;
    pointerZone.style.top = `${y}px`;
  });
});
