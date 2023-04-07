const formMedType = document.getElementById("formMedicType");
console.log(formMedType);

formMedType.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(formMedType);
  const data = Object.fromEntries(formData);

  fetch("http://localhost:3333/admin/medicType/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});

//
