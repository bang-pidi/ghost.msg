export function textarea() {
  let inputArea = document.getElementById("pesan");
  inputArea.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  });
}

export function info(warna, teks) {
  let info = document.querySelector(".info");

  info.classList.add("infoStyle");
  info.querySelector("#teks").innerHTML = teks;
  info.style.backgroundColor = warna
  setTimeout(function () {
    info.classList.remove("infoStyle");
  }, 4000);
}
