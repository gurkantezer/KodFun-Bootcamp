// const time = document.getElementById("saat")
// time.textContent = new Date()

function saatiGoster() {
  const zaman = new Date();
  const divSaat = document.getElementById("saat");
  divSaat.textContent = zaman.toLocaleTimeString("tr");
}

saatiGoster();

setInterval(saatiGoster, 1000);
