const scriptURL = 'https://script.google.com/macros/s/AKfycbysSiv4B1-vAoMTsEATzX1ByBFpreEmXWnEygvdsfkFqy6x3m7DoQdePLmrfczMNYrQTg/exec';
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById("msg");
  const inp = document.querySelector("input");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => 
        {
            msg.style.display = "block";
            setTimeout(() => {
               msg.innerHTML = "";
               form.reset();
            }, 5000);

            
        }
    )
      .catch(error => console.error('Error!', error.message))
  })