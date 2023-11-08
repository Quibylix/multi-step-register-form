import "./style.css";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const formStep1 = $(".step-1-form") as HTMLFormElement;
const formStep2 = $(".step-2-form") as HTMLFormElement;
const labelsStep2 = $$(".step-2-form__label") as NodeListOf<HTMLLabelElement>;

changeStep(1);

formStep1.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();

  changeStep(2);
});

labelsStep2.forEach(label => {
  label.querySelector("input")!.addEventListener("change", () => {
    label.classList.toggle("step-2-form__label--checked");
  });
});

formStep2.addEventListener("submit", e => {
  e.preventDefault();

  alert("Form submitted!");
});

function changeStep(step: number) {
  switch (step) {
    case 1:
      formStep1.classList.remove("hidden");
      formStep2.classList.add("hidden");
      break;
    case 2:
      formStep1.classList.add("hidden");
      formStep2.classList.remove("hidden");
      break;
  }
}
