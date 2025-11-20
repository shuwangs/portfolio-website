/*
  TODOS:
  1. search the string in the webpage that contains the input string.- highligh it
  2. Form Validation for contact me form
*/
// document.querySelector(".search_form").addEventListener('submit', (event) =>{
//   let query = document.getElementById('search_input').value.trim();
//   if (query !== "") {
//     let content = document.querySelectorAll(body).innerHTML;

//   }

// })


// 3. toggle light button
document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("theme-toggle");
  const body = document.body;

  if (!themeBtn) {
    return;
  }

  themeBtn.addEventListener("click", () => {
    if (body.classList.contains("theme-dark")) {
      body.classList.remove("theme-dark");
      body.classList.add("theme-light");
      themeBtn.innerHTML = `<i class="bi bi-moon-fill"></i>`;
    } else{
      body.classList.remove("theme-light");
      body.classList.add("theme-dark");
      themeBtn.innerHTML = `<i class="bi bi-sun-fill"></i>`;
    }
  })
})


