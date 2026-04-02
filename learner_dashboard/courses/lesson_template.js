const lessonParams = new URLSearchParams(window.location.search);
const lessonCourseKey = lessonParams.get("course") || "singleVariableCalculus";
const lessonId = lessonParams.get("lesson") || "limits";

const lessonCourseData = coursesData[lessonCourseKey] || coursesData.singleVariableCalculus;
const lessonData = lessonCourseData.lessons[lessonId] || lessonCourseData.lessons[Object.keys(lessonCourseData.lessons)[0]];

const lessonLabelEl2 = document.getElementById("lesson-label");
const lessonTitleEl2 = document.getElementById("lesson-title");
const lessonSubtitleEl2 = document.getElementById("lesson-subtitle");

const learnSection = document.getElementById("learn");
const quizSection = document.getElementById("quiz");
const reviewSection = document.getElementById("review");

const buttons = document.querySelectorAll(".mode-btn");
const sections = document.querySelectorAll(".mode-section");

function fillSection(sectionElement, dataArray) {
  sectionElement.innerHTML = "";

  dataArray.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("content-card");

    const heading = document.createElement("h2");
    heading.textContent = item.heading;

    const paragraph = document.createElement("p");
    paragraph.textContent = item.content;

    card.appendChild(heading);
    card.appendChild(paragraph);
    sectionElement.appendChild(card);
  });
}

function renderLessonPage() {
  lessonLabelEl2.textContent = lessonData.label;
  lessonTitleEl2.textContent = lessonData.title;
  lessonSubtitleEl2.textContent = lessonData.subtitle;

  fillSection(learnSection, lessonData.learn);
  fillSection(quizSection, lessonData.quiz);
  fillSection(reviewSection, lessonData.review);
}

function switchMode(mode) {
  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });

  sections.forEach((section) => {
    section.classList.toggle("active-section", section.id === mode);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switchMode(button.dataset.mode);
  });
});

renderLessonPage();
switchMode("learn");