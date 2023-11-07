import "./style.css";

const $ = document.querySelector.bind(document);

const formStep1 = $(".step-1-form") as HTMLFormElement;
const formStep2 = $(".step-2-form") as HTMLFormElement;

changeStep(1);

formStep1.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();

  changeStep(2);
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
