const params = new URLSearchParams(window.location.search);
const currentCourseKey = params.get("course") || "singleVariableCalculus";
const currentLessonId = params.get("lesson");

const courseData = coursesData[currentCourseKey] || coursesData.singleVariableCalculus;

const courseTitleEl = document.getElementById("course-title");
const lessonLabelEl = document.getElementById("lesson-label");
const lessonTitleEl = document.getElementById("lesson-title");
const lessonSubtitleEl = document.getElementById("lesson-subtitle");
const unitList = document.getElementById("unit-list");
const startBtn = document.getElementById("start-btn");
const lessonMain = document.querySelector(".lesson-main");

function getStartLessonId() {
  if (currentLessonId && courseData.lessons[currentLessonId]) {
    return currentLessonId;
  }
  return courseData.units[0].lessons[0].id;
}

function renderOverview() {
  const oldOverview = document.getElementById("lesson-overview-card");
  if (oldOverview) {
    oldOverview.remove();
  }

  const overviewCard = document.createElement("div");
  overviewCard.classList.add("content-card");
  overviewCard.id = "lesson-overview-card";

  let headingText = "";
  let bodyText = "";
  let powerPoints = [];

  if (currentLessonId && courseData.lessons[currentLessonId]) {
    const lessonData = courseData.lessons[currentLessonId];

    lessonLabelEl.textContent = "Mathera · Lesson Overview";
    lessonTitleEl.textContent = lessonData.title;
    lessonSubtitleEl.textContent = lessonData.subtitle;

    headingText = lessonData.overview.heading;
    bodyText = lessonData.overview.text;
    powerPoints = lessonData.powerPoints;
  } else {
    lessonLabelEl.textContent = "Mathera · Course Overview";
    lessonTitleEl.textContent = courseData.courseTitle;
    lessonSubtitleEl.textContent = courseData.courseIntro.text;

    headingText = courseData.courseIntro.heading;
    bodyText = courseData.courseIntro.text;
    powerPoints = [];
  }

  const heading = document.createElement("h2");
  heading.textContent = headingText;

  const text = document.createElement("p");
  text.textContent = bodyText;

  overviewCard.appendChild(heading);
  overviewCard.appendChild(text);

  if (powerPoints.length > 0) {
    const powerPointsHeading = document.createElement("h2");
    powerPointsHeading.textContent = "Power Points";

    const powerPointsList = document.createElement("ul");

    powerPoints.forEach((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      powerPointsList.appendChild(li);
    });

    overviewCard.appendChild(powerPointsHeading);
    overviewCard.appendChild(powerPointsList);
  }

  lessonMain.appendChild(overviewCard);
}

//////////////////// sidebar

function buildSidebar() {
  courseTitleEl.textContent = courseData.courseTitle;
  unitList.innerHTML = "";

  // create back link
  const backWrapper = document.createElement("div");
  backWrapper.classList.add("sidebar-back");

  const backLink = document.createElement("a");
  backLink.href = "../ld_home.html";
  backLink.textContent = "← Learner Dashboard";
  backLink.classList.add("sidebar-back-link");

  backWrapper.appendChild(backLink);

  // insert it ABOVE the course title
  courseTitleEl.parentNode.insertBefore(backWrapper, courseTitleEl);

  courseData.units.forEach((unit) => {
    const unitBlock = document.createElement("div");
    unitBlock.classList.add("unit-block");

    const unitTitle = document.createElement("h3");
    unitTitle.textContent = unit.unitName;

    const lessonUl = document.createElement("ul");

    unit.lessons.forEach((lesson) => {
      const lessonLi = document.createElement("li");
      const lessonLink = document.createElement("a");

      lessonLink.href = `course_template.html?course=${currentCourseKey}&lesson=${lesson.id}`;
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

courseTitleEl.addEventListener("click", () => {
  window.location.href = `course_template.html?course=${currentCourseKey}`;
});

// this is the start button that leads to mindmap_template
startBtn.addEventListener("click", () => {
  let firstLessonId = "";

  if (currentCourseKey === "singleVariableCalculus") {
    firstLessonId = "limits";
  } else if (currentCourseKey === "linearAlgebra") {
    firstLessonId = "vectors";
  } else if (currentCourseKey === "multivariableCalculus") {
    firstLessonId = "vectors3D";
  } else {
    firstLessonId = "limits"; // fallback
  }

// this means you are manually listing the first lesson for all the courses

  window.location.href = `./mindmap_template.html?course=${currentCourseKey}&lesson=${firstLessonId}`;
});

buildSidebar();

// make the sidebar foldable
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("sidebarToggle");

if (sidebar && toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");

    if (sidebar.classList.contains("collapsed")) {
      toggleBtn.textContent = "❯";
    } else {
      toggleBtn.textContent = "❮";
    }
  });
}


renderOverview();