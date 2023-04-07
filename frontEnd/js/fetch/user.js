async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get data");
  }
}

async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to post data");
  }
}

async function getMedicTypeData() {
  const medicType = await getData("http://localhost:3333/admin/list/medicType");
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
    postData(USER_API_URL, data);
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
    postData(USER_API_URL, data);
  });
}

setMedicTypeDom();
postMedic();
