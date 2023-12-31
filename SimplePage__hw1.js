window.addEventListener("load", windowLoad);

function windowLoad() {
  const conteiner = document.querySelector(".main-conteiner");
  //get saved theme
  const saveUserTheme = localStorage.getItem("user-theme");
  //робота з системними налаштуваннями
  let userTheme;
  if (window.matchMedia) {
    userTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  window
    .matchMedia("(prefers-color-sheme: dark)")
    .addEventListener("change", (e) => {
      !saveUserTheme ? changeTheme() : null;
    });
  //додаємо оьробник події на кнопку зміни теми
  const toggle = document.querySelector(".header__theme-button");
  toggle.addEventListener("click", () => {
    changeTheme(true);
  });
  //зберігаємо уподобання відносно вибраної теми
  function setThemeClass() {
    if (saveUserTheme) {
      conteiner.classList.add(saveUserTheme);
    } else {
      conteiner.classList.add(userTheme);
    }
  }
  setThemeClass();

  function changeTheme(saveTheme = false) {
    let currentTheme = conteiner.classList.contains("light") ? "light" : "dark";
    let newTheme;

    if (currentTheme === "light") {
      newTheme = "dark";
    } else if (currentTheme === "dark") {
      newTheme = "light";
    }

    conteiner.classList.remove(currentTheme);
    conteiner.classList.add(newTheme);

    saveTheme ? localStorage.setItem("user-theme", newTheme) : null;
  }
}
