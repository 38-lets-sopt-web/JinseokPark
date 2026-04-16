export const header = () => {
  const refreshBtn = document.querySelector(".header__refresh-button");

  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      window.location.reload();
    });
  }
};
