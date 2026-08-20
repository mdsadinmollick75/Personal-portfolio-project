form.addEventListener('submit', event => {
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
    form.classList.add('was-validated')
  } else (" Thank You")


}, false)


function cat() {
  let now = new Date();

  document.getElementById("time").innerHTML = now.toLocaleString();
}

cat();
setInterval(cat, 1000);
