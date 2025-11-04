function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = dataPengguna.find(
    (item) => item.email === email && item.password === password
  );

  if (user) {
    alert("Login berhasil! Selamat datang, " + user.nama);
    localStorage.setItem("userLogin", JSON.stringify(user));
    window.location.href = "dashboard.html";
  } else {
    alert("Email atau password yang anda masukkan salah!");
  }
}

function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}
