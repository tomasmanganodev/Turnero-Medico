import { getData, postData } from "./postGet.js";

export async function getMedicType() {
  const API_MEDIC = "http://localhost:3333/admin/list/medicType";
  const listMedic = await getData(API_MEDIC);
  console.log(listMedic.list);
  return listMedic.list;
}


export async function getMedic() {
  const API_MEDIC = "http://localhost:3333/admin/list/medics";
  const listMedic = await getData(API_MEDIC);
  console.log(listMedic.list);
  return listMedic.list;
}

export async function setMedicDom() {
  const medicSelect = document.getElementById("selectMed");
  const list = await getMedic();

  for (const option of list) {
    const medicOption = document.createElement("option");
    medicSelect.appendChild(medicOption);
    medicOption.textContent = [option.first_name, option.last_name].join(" ");
    medicOption.value = option.id;
  }
}
