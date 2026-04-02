
//////////////////////////////////////////////////////////// Page state //////////////////////////////////////////////////////////

// coursesData = all courses
// courseData = the one currently loaded into the template

// architecture : data.js --> course_template.js --> lesson_template.js


const params = new URLSearchParams(window.location.search);
const currentCourseKey = params.get("course") || "singleVariableCalculus";

const courseData = coursesData[currentCourseKey] || coursesData.singleVariableCalculus;

// default selected lesson = first lesson in first unit
let selectedLessonId = courseData.units[0].lessons[0].id;

const courseTitleEl = document.getElementById("course-title");
const lessonLabelEl = document.getElementById("lesson-label");
const lessonTitleEl = document.getElementById("lesson-title");
const lessonSubtitleEl = document.getElementById("lesson-subtitle");
const unitList = document.getElementById("unit-list");
const startBtn = document.getElementById("start-btn");
const lessonMain = document.querySelector(".lesson-main");

function getSelectedLessonData() {
  return courseData.lessons[selectedLessonId];
}

function renderOverview() {
  const lessonData = getSelectedLessonData();

  lessonLabelEl.textContent = "Mathera · Course Overview";
  lessonTitleEl.textContent = lessonData.title;
  lessonSubtitleEl.textContent = lessonData.subtitle;

  // remove old dynamic overview block if it exists
  const oldOverview = document.getElementById("lesson-overview-card");
  if (oldOverview) {
    oldOverview.remove();
  }

  const overviewCard = document.createElement("div");
  overviewCard.classList.add("content-card");
  overviewCard.id = "lesson-overview-card";

  const overviewHeading = document.createElement("h2");
  overviewHeading.textContent = lessonData.overview.heading;

  const overviewText = document.createElement("p");
  overviewText.textContent = lessonData.overview.text;

  const powerPointsHeading = document.createElement("h2");
  powerPointsHeading.textContent = "Power Points";

  const powerPointsList = document.createElement("ul");

  lessonData.powerPoints.forEach((point) => {
    const li = document.createElement("li");
    li.textContent = point;
    powerPointsList.appendChild(li);
  });

  overviewCard.appendChild(overviewHeading);
  overviewCard.appendChild(overviewText);
  overviewCard.appendChild(powerPointsHeading);
  overviewCard.appendChild(powerPointsList);

  lessonMain.appendChild(overviewCard);
}

function buildSidebar() {
  courseTitleEl.textContent = courseData.courseTitle;
  unitList.innerHTML = "";

  courseData.units.forEach((unit) => {
    const unitBlock = document.createElement("div");
    unitBlock.classList.add("unit-block");

    const unitTitle = document.createElement("h3");
    unitTitle.textContent = unit.unitName;

    const lessonUl = document.createElement("ul");

    unit.lessons.forEach((lesson) => {
      const lessonLi = document.createElement("li");
      const lessonLink = document.createElement("a");

      lessonLink.href = "#";
      lessonLink.textContent = lesson.title;
      lessonLink.dataset.lessonId = lesson.id;

      if (lesson.id === selectedLessonId) {
        lessonLink.classList.add("selected-lesson");
      }

      lessonLink.addEventListener("click", (event) => {
        event.preventDefault();
        selectedLessonId = lesson.id;

        document.querySelectorAll(".lesson-sidebar a").forEach((link) => {
          link.classList.remove("selected-lesson");
        });

        lessonLink.classList.add("selected-lesson");
        renderOverview();
      });

      lessonLi.appendChild(lessonLink);
      lessonUl.appendChild(lessonLi);
    });

    unitBlock.appendChild(unitTitle);
    unitBlock.appendChild(lessonUl);
    unitList.appendChild(unitBlock);
  });
}

startBtn.addEventListener("click", () => {
  window.location.href = `lesson_template.html?course=${currentCourseKey}&lesson=${selectedLessonId}`;
});

buildSidebar();
renderOverview();