const socialBtn = document.querySelector(".btn-social");

const socials = document.querySelector(".socials");

socialBtn.addEventListener("click", () => {
  socials.classList.toggle("hide");
});
