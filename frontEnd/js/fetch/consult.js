import { getData, postData } from "./postGet.js";

export async function postConsult() {
  const FormAddTurn = document.getElementById("FormAddTurn");
  const CONSTUL_API_URL = "http://localhost:3333/addConsult";
  const doc_id = document.getElementById("selectMed");

  FormAddTurn.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(FormAddTurn);
    formData.append("medic", doc_id.value);
    const data = Object.fromEntries(formData);
    console.log(data);
    postData(CONSTUL_API_URL, data);
  });
}

export async function getConsults(id_medic, date_start, end_date) {
 
  const API_CONSULTS = `http://localhost:3333/consults/week/${date_start}/${end_date}/${id_medic}`;
  const ListTurn = await getData(API_CONSULTS);
  return ListTurn;
}
