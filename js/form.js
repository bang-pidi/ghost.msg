// import pkg
import { info } from "./util.js";
// fungsi form
export async function form() {
  document.getElementById("form").addEventListener("submit", async e => {
    e.preventDefault();

    // jeda tombol submit
    let btnSubmit = document.querySelector(`#submit`);
    btnSubmit.disabled = true;
    setTimeout(function () {
      btnSubmit.disabled = false;
    }, 2000);
    // tampilkan tunggu
    info("#efad44", "Tunggu Sebentar");

    // ambil data
    let jeneng = document.getElementById("jeneng").value.trim();
    const pesan = document.getElementById("pesan").value.trim();
    let form = document.getElementById("form");

    // set nama jika kosong
    if (jeneng.length == 0) {
      jeneng = "tanpa nama";
    }

    // Validasi input tidak kosong atau hanya berisi spasi
    if (pesan.length == 0) {
      // getarkan
      navigator.vibrate(100);
      // tampilkan input kosong
      info("#efdc44", "Masih kosong tuh");
      // reset form
      form.reset();
      return;
    } else if (pesan.length <= 10) {
      // tampilkam jikanterlalu singkt
      info("#efdc44", `singkat banget cuman ${pesan.length} huruf doang`);
      return;
    }else{
            // reset form jika terkirim
      form.reset();
    }
    // API
    const url =
      "https://script.google.com/macros/s/AKfycbwWXHBbFIu3QLmPfCEglZG0k9vl2YtK0EqT-wqgL3_wwAshHxvvcSA1PLkixXC1Vnc/exec";

    // ambil tanggal sekarang
    let tggl = new Date();
    // buskus data
    const payload = new URLSearchParams({
      tanggal: tggl.toLocaleString(),
      jeneng: jeneng,
      pesan: pesan,
      tanda: navigator.userAgent
    });

    // cek try catch
    try {
      const response = await fetch(url, {
        method: "POST",
        body: payload
      });
      // tampilkan pesan terkirim
      info("#44ef78", "Terkirim");
    } catch (error) {
      // tampilkan jika tidak terkirim
      info("#ef4444", "Kesalahan terjadi mungkin server / koneksi");
    }
  });
}
