const params = new URLSearchParams(window.location.search);
const currentCourseKey = params.get("course") || "singleVariableCalculus";
const currentLessonId = params.get("lesson") || "limits";

const courseData = coursesData[currentCourseKey] || coursesData.singleVariableCalculus;
const lessonData =
  courseData.lessons[currentLessonId] ||
  courseData.lessons[Object.keys(courseData.lessons)[0]];

// lesson header
const courseTitleEl = document.getElementById("course-title");
const unitList = document.getElementById("unit-list");

const lessonLabelEl = document.getElementById("lesson-label");
const lessonTitleEl = document.getElementById("lesson-title");
const lessonSubtitleEl = document.getElementById("lesson-subtitle");


function renderLessonPage() {
  lessonLabelEl.textContent = lessonData.label;
  lessonTitleEl.textContent = lessonData.title;
  lessonSubtitleEl.textContent = lessonData.subtitle;

}


function buildSidebar() {
  courseTitleEl.textContent = courseData.courseTitle;
  courseTitleEl.style.cursor = "pointer";

  courseTitleEl.addEventListener("click", () => {
    window.location.href = `course_template.html?course=${currentCourseKey}`;
  });

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

      lessonLink.href = `lesson_template.html?course=${currentCourseKey}&lesson=${lesson.id}`;
      lessonLink.textContent = lesson.title;

      if (lesson.id === currentLessonId) {
        lessonLink.classList.add("selected-lesson");
      }

      lessonLi.appendChild(lessonLink);
      lessonUl.appendChild(lessonLi);
    });

    unitBlock.appendChild(unitTitle);
    unitBlock.appendChild(lessonUl);
    unitList.appendChild(unitBlock);
  });
}


buildSidebar();
renderLessonPage();
