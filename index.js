const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransitions() {
  // active-btn toggle function
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelector(".active-btn");
      currentBtn.className = currentBtn.className.replace("active-btn", "");
      this.className += " active-btn";
    });
  }

  // show/hide sections
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  // ligth/dark mode btn
  const modeBtn = document.querySelector('.theme-btn')
  modeBtn.addEventListener('click', () =>{
    let bodyPage = document.body
    bodyPage.classList.toggle('dark-mode')
  })

  // submit message
  const form = document.querySelector('#form')
  const buttonMailto = document.querySelector('#buttonMailto')

  form.addEventListener('submit', handleSubmit)
  function handleSubmit(e) {
    e.preventDefault()
    const formSubmit = new FormData(this)
    buttonMailto.setAttribute('href', `mailto:your.email@gmail.com?subject=${formSubmit.get('subject')} // ${formSubmit.get('name')} - ${formSubmit.get('email')}&body=${formSubmit.get('message')}`)
    buttonMailto.click()
  }

}

pageTransitions();
