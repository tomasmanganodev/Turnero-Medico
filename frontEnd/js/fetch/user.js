import call from "./postGet.js";

async function getMedicTypeData() {
  const medicType = await call.getData(
    "http://localhost:3333/admin/list/medicType"
  );
  const data = await medicType;
  console.log(data.list);
  return data.list;
}

async function setMedicTypeDom() {
  const medicSelect = document.getElementById("medicListType");

  const list = await getMedicTypeData();
  for (const option of list) {
    const medicOption = document.createElement("option");
    medicSelect.appendChild(medicOption);
    medicOption.textContent = option.specialization;
    medicOption.value = option.id;
  }
}

function postUser() {
  const USER_API_URL = "http://localhost:3333/auth/signup";
  const user = document.getElementById("formUser");

  user.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    call.postData(USER_API_URL, data);
  });
}

function postMedic() {
  const USER_API_URL = "http://localhost:3333/auth/signup1";
  const user = document.getElementById("formUser1");

  user.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    call.postData(USER_API_URL, data);
  });
}

setMedicTypeDom();
postMedic();
