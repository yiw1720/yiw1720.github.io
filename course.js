// this is where I store data for curriculums

//////////////////////////////////////////////////////////// Page state //////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////// Course + lesson data //////////////////////////////////////////////////////////

const coursesData = {
singleVariableCalculus: {
    courseTitle: "18.01 Singe Variable Calculus",

    courseIntro: {
        heading: "Welcome to Calculus",
        text: "This course introduces limits, continuity, derivatives, and how mathematical ideas connect into a system of thinking."
    },

    lessonLabel: "18.01 · Unit 1",
    lessonTitle: "Lesson 1: Limits",
    lessonSubtitle:
        "Understand what a function approaches and why limits begin the language of calculus.",

    units: [
        {
        unitName: "Unit 1",
        lessons: ["Lesson 1: Limits", "Lesson 2: Continuity"]
        },
        {
        unitName: "Unit 2",
        lessons: ["Lesson 3: Derivatives", "Lesson 4: Applications"]
        }
    ],

    learn: [
        {
        heading: "Concept Overview",
        content:
            "A limit describes the value a function approaches as the input gets closer and closer to a certain number."
        },
        {
        heading: "Why It Matters",
        content:
            "Limits help us study behavior near a point, even when direct substitution does not immediately help."
        },
        {
        heading: "Mindmap Connection",
        content:
            "Limits connect algebra, graph behavior, continuity, and derivatives."
        }
    ],

    quiz: [
        {
        heading: "Quick Check",
        content: "What does a limit describe?"
        },
        {
        heading: "Think About This",
        content:
            "Why might the value at a point be different from the limit near that point?"
        }
    ],

    review: [
        {
        heading: "Summary",
        content: "A limit studies approach behavior, not just exact value."
        },
        {
        heading: "Key Connection",
        content: "Limits prepare you for continuity and derivatives."
        }
    ]
},// end of 18.01

// 18.06

linearAlgebra: {
    courseTitle: "18.01 Singe Variable Calculus",

    courseIntro: {
        heading: "Welcome to Calculus",
        text: "This course introduces limits, continuity, derivatives, and how mathematical ideas connect into a system of thinking."
    },

    lessonLabel: "18.01 · Unit 1",
    lessonTitle: "Lesson 1: Limits",
    lessonSubtitle:
        "Understand what a function approaches and why limits begin the language of calculus.",

    units: [
        {
        unitName: "Unit 1",
        lessons: ["Lesson 1: Limits", "Lesson 2: Continuity"]
        },
        {
        unitName: "Unit 2",
        lessons: ["Lesson 3: Derivatives", "Lesson 4: Applications"]
        }
    ],

    learn: [
        {
        heading: "Concept Overview",
        content:
            "A limit describes the value a function approaches as the input gets closer and closer to a certain number."
        },
        {
        heading: "Why It Matters",
        content:
            "Limits help us study behavior near a point, even when direct substitution does not immediately help."
        },
        {
        heading: "Mindmap Connection",
        content:
            "Limits connect algebra, graph behavior, continuity, and derivatives."
        }
    ],

    quiz: [
        {
        heading: "Quick Check",
        content: "What does a limit describe?"
        },
        {
        heading: "Think About This",
        content:
            "Why might the value at a point be different from the limit near that point?"
        }
    ],

    review: [
        {
        heading: "Summary",
        content: "A limit studies approach behavior, not just exact value."
        },
        {
        heading: "Key Connection",
        content: "Limits prepare you for continuity and derivatives."
        }
    ]
}// end of 18.01

}; ////////////////////////////////////////////////////////end of coursesData

// coursesData = all courses
// courseData = the one currently loaded into the template

const params = new URLSearchParams(window.location.search);
const currentCourseKey = params.get("course") || "calculus";

let courseData = coursesData[currentCourseKey];
let currentView = "course"; // default page is the course intro page


//////////////////////////////////////////////////////////// Grab important elements once //////////////////////////////////////////////////////////

const courseTitleEl = document.getElementById("course-title");
const lessonLabelEl = document.getElementById("lesson-label");
const lessonTitleEl = document.getElementById("lesson-title");
const lessonSubtitleEl = document.getElementById("lesson-subtitle");

const unitList = document.getElementById("unit-list");

const learnSection = document.getElementById("learn");
const quizSection = document.getElementById("quiz");
const reviewSection = document.getElementById("review");

const buttons = document.querySelectorAll(".mode-btn");
const sections = document.querySelectorAll(".mode-section");

//////////////////////////////////////////////////////////// Small helper functions //////////////////////////////////////////////////////////

function clearSections() {
  learnSection.innerHTML = "";
  quizSection.innerHTML = "";
  reviewSection.innerHTML = "";
}

function resetModeButtons() {
  buttons.forEach((btn) => btn.classList.remove("active"));
  sections.forEach((section) => section.classList.remove("active-section"));

  document.querySelector('[data-mode="learn"]').classList.add("active");
  learnSection.classList.add("active-section");
}

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

/////////////////////////////////////////////////////////// Render functions //////////////////////////////////////////////////////////

function renderCourseIntro() {
  lessonLabelEl.textContent = "Mathera · Course";
  lessonTitleEl.textContent = coursesData.courseTitle;
  lessonSubtitleEl.textContent = coursesData.courseIntro.text;

  clearSections();
  resetModeButtons();

  const introCard = document.createElement("div");
  introCard.classList.add("content-card");

  const heading = document.createElement("h2");
  heading.textContent = coursesData.courseIntro.heading;

  const text = document.createElement("p");
  text.textContent = coursesData.courseIntro.text;

  introCard.appendChild(heading);
  introCard.appendChild(text);

  learnSection.appendChild(introCard);
}

function renderLesson() {
  lessonLabelEl.textContent = coursesData.lessonLabel;
  lessonTitleEl.textContent = coursesData.lessonTitle;
  lessonSubtitleEl.textContent = coursesData.lessonSubtitle;

  clearSections();
  resetModeButtons();

  fillSection(learnSection, coursesData.learn);
  fillSection(quizSection, coursesData.quiz);
  fillSection(reviewSection, coursesData.review);
}

function renderPage() {
  if (currentView === "course") {
    renderCourseIntro();
  } else if (currentView === "lesson") {
    renderLesson();
  }
}

//////////////////////////////////////////////////////////// Build sidebar //////////////////////////////////////////////////////////

function buildSidebar() {
  courseTitleEl.textContent = coursesData.courseTitle;
  courseTitleEl.style.cursor = "pointer";

  courseTitleEl.addEventListener("click", () => {
    currentView = "course";
    renderPage();
  });

  unitList.innerHTML = "";

  coursesData.units.forEach((unit) => {
    const unitBlock = document.createElement("div");
    unitBlock.classList.add("unit-block");

    const unitTitle = document.createElement("h3");
    unitTitle.textContent = unit.unitName;

    const lessonUl = document.createElement("ul");

    unit.lessons.forEach((lesson) => {
      const lessonLi = document.createElement("li");
      const lessonLink = document.createElement("a");

      lessonLink.href = "#";
      lessonLink.textContent = lesson;

      lessonLink.addEventListener("click", (event) => {
        event.preventDefault();
        currentView = "lesson";
        renderPage();
      });

      lessonLi.appendChild(lessonLink);
      lessonUl.appendChild(lessonLi);
    });

    unitBlock.appendChild(unitTitle);
    unitBlock.appendChild(lessonUl);
    unitList.appendChild(unitBlock);
  });
}

//////////////////////////////////////////////////////////// Mode switch buttons //////////////////////////////////////////////////////////

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedMode = button.dataset.mode;

    buttons.forEach((btn) => btn.classList.remove("active"));
    sections.forEach((section) => section.classList.remove("active-section"));

    button.classList.add("active");
    document.getElementById(selectedMode).classList.add("active-section");
  });
});

//////////////////////////////////////////////////////////// Start page //////////////////////////////////////////////////////////

buildSidebar();
renderPage();