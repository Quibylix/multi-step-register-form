import "./style.css";
import { validateEmail, validateName, validateTopics } from "./validators";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const formStep1 = $(".step-1-form") as HTMLFormElement;
const formStep2 = $(".step-2-form") as HTMLFormElement;
const formStep3 = $(".step-3-form") as HTMLFormElement;
const labelsStep2 = $$(".step-2-form__label") as NodeListOf<HTMLLabelElement>;
const nameResult = $(".step-3-form__name") as HTMLSpanElement;
const emailResult = $(".step-3-form__email") as HTMLSpanElement;
const topicsResult = $(".step-3-form__list") as HTMLUListElement;

const userData = {
  name: "",
  email: "",
  topics: [] as string[],
};

changeStep(1);

formStep1.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();

  const formData = new FormData(formStep1);

  const nameError = validateName(formData.get("name"));
  const emailError = validateEmail(formData.get("email"));

  nameError && alert(nameError);
  emailError && alert(emailError);

  if (nameError || emailError) {
    return;
  }

  userData.name = formData.get("name") as string;
  userData.email = formData.get("email") as string;

  changeStep(2);
});

labelsStep2.forEach(label => {
  label.querySelector("input")!.addEventListener("change", () => {
    label.classList.toggle("step-2-form__label--checked");
  });
});

formStep2.addEventListener("submit", e => {
  e.preventDefault();

  const formData = new FormData(formStep2);

  const topics = formData.getAll("topic");

  const topicsError = validateTopics(topics);

  if (topicsError) {
    alert(topicsError);
    return;
  }

  userData.topics = topics as string[];

  nameResult.textContent = userData.name;
  emailResult.textContent = userData.email;
  topicsResult.innerHTML = userData.topics
    .map(topic => `<li>${topic}</li>`)
    .join("");

  changeStep(3);
});

formStep3.addEventListener("submit", e => {
  e.preventDefault();

  alert("✅ Success");

  changeStep(1);
});

function changeStep(step: number) {
  switch (step) {
    case 1:
      formStep1.classList.remove("hidden");
      formStep2.classList.add("hidden");
      formStep3.classList.add("hidden");
      break;
    case 2:
      formStep1.classList.add("hidden");
      formStep2.classList.remove("hidden");
      formStep3.classList.add("hidden");
      break;
    case 3:
      formStep1.classList.add("hidden");
      formStep2.classList.add("hidden");
      formStep3.classList.remove("hidden");
      break;
  }
}
