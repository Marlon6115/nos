export const header = () => {
  const welcome = document.querySelector(".welcome");
  const userModule = document.querySelector(".user-module");
  const guestModule = document.querySelector(".guest-module");
  const tokenRecuperado = localStorage.getItem("userProfile");
  const logoutButton = document.getElementById("logout");
  if (tokenRecuperado) {
    console.log("Token de sesión:", JSON.parse(tokenRecuperado));
    userModule.style.display = "flex";
    guestModule.style.display = "none";
    welcome.textContent = `Hola, ${JSON.parse(tokenRecuperado).username}`;
  } else {
    console.log("No se encontró ningún token.");
    userModule.style.display = "none";
    guestModule.style.display = "flex";
  }
  logoutButton.onclick = () => {
    localStorage.removeItem("userProfile");
    userModule.style.display = "none";
    guestModule.style.display = "flex";
    welcome.textContent = "";
    window.location.reload();
  };

};
