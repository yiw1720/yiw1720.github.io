// this is where I store data for curriculumns

//////////////////////////////////////// Lesson data /////////////////////////////////

const lessonData = {
  courseTitle: "Calculus",
  lessonLabel: "Mathera · Unit 1",
  lessonTitle: "Lesson 1: Limits",
  lessonSubtitle: "Understand what a function approaches and why limits begin the language of calculus.",

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
      content: "A limit describes the value a function approaches as the input gets closer and closer to a certain number."
    },
    {
      heading: "Why It Matters",
      content: "Limits help us study behavior near a point, even when direct substitution does not immediately help."
    },
    {
      heading: "Mindmap Connection",
      content: "Limits connect algebra, graph behavior, continuity, and derivatives."
    }
  ],

  quiz: [
    {
      heading: "Quick Check",
      content: "What does a limit describe?"
    },
    {
      heading: "Think About This",
      content: "Why might the value at a point be different from the limit near that point?"
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
};
/////////////////////////////////// Fill ///////////////////////////////////////////

document.getElementById("course-title").textContent = lessonData.courseTitle;
document.getElementById("lesson-label").textContent = lessonData.lessonLabel;
document.getElementById("lesson-title").textContent = lessonData.lessonTitle;
document.getElementById("lesson-subtitle").textContent = lessonData.lessonSubtitle;

///////////////////////////////////// build the side bar /////////////////////////

const unitList = document.getElementById("unit-list");

lessonData.units.forEach((unit) => {
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

    lessonLi.appendChild(lessonLink);
    lessonUl.appendChild(lessonLi);
  });

  unitBlock.appendChild(unitTitle);
  unitBlock.appendChild(lessonUl);
  unitList.appendChild(unitBlock);
});


/////////////////////////////////////////// Quiz / review version //////////////////////////////////

function fillSection(sectionId, dataArray) {
  const section = document.getElementById(sectionId);

  dataArray.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("content-card");

    const heading = document.createElement("h2");
    heading.textContent = item.heading;

    const paragraph = document.createElement("p");
    paragraph.textContent = item.content;

    card.appendChild(heading);
    card.appendChild(paragraph);
    section.appendChild(card);
  });
}

fillSection("learn", lessonData.learn);
fillSection("quiz", lessonData.quiz);
fillSection("review", lessonData.review);

//////////////////////////////////////////////// model switch button //////////////////////////////////////

const buttons = document.querySelectorAll(".mode-btn");
const sections = document.querySelectorAll(".mode-section");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedMode = button.dataset.mode;

    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    sections.forEach((section) => {
      section.classList.remove("active-section");
    });

    button.classList.add("active");
    document.getElementById(selectedMode).classList.add("active-section");
  });
});