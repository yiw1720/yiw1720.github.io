// coursesData = all courses
// courseData = the one currently loaded into the template

/////////////////////////////// course data for college math courses

// shared data for course page + lesson page

const coursesData = {
  singleVariableCalculus: {
    courseTitle: "18.01 Single Variable Calculus",

    courseIntro: {
        heading: "Welcome to Calculus",
        text: "This course introduces limits, continuity, derivatives, and how mathematical ideas connect into a system of thinking."
    },

    units: [
      {
        unitName: "Unit 1",
        lessons: [
          { id: "limits", title: "Lesson 1: Limits" },
          { id: "continuity", title: "Lesson 2: Continuity" }
        ]
      },

      {
          unitName: "Unit 2",
          lessons: [
            { id: "derivatives", title: "Lesson 3: Derivatives" },
            { id: "applications", title: "Lesson 4: Applications" }
          ]
      }
    ],

    lessons: {
        limits: {
          label: "18.01 · Unit 1",
          title: "Lesson 1: Limits",
          subtitle: "Understand what a function approaches and why limits begin the language of calculus.",
          overview: {
            heading: "Lesson Overview",
            text: "In this lesson, you will learn what a limit means, how approach behavior works, and why limits are the foundation of calculus."
          },
          powerPoints: [
            "A limit describes what a function approaches.",
            "The value at a point and the limit near a point can be different.",
            "Limits connect directly to continuity and derivatives."
          ]        
        
        },

        continuity: {
          label: "18.01 · Unit 1",
          title: "Lesson 2: Continuity",
          subtitle: "See how limits help us decide whether a function behaves smoothly at a point.",
          overview: {
            heading: "Lesson Overview",
            text: "In this lesson, you will study continuity and learn how limits describe whether a function has breaks, holes, or jumps."
          },
          powerPoints: [
            "Continuity means no break at a point.",
            "A function can fail continuity in different ways.",
            "Limits are the main tool for testing continuity."
          ]
        },  

        derivatives: {
          label: "18.01 · Unit 2",
          title: "Lesson 3: Derivatives",
          subtitle: "Discover how calculus describes instantaneous change.",
          overview: {
            heading: "Lesson Overview",
            text: "In this lesson, you will see how derivatives arise from limits and how they measure rate of change."
          },
          powerPoints: [
            "A derivative measures instantaneous rate of change.",
            "Derivatives come from limit thinking.",
            "They connect slopes, motion, and local behavior."
          ],
        },  

        applications: {
          label: "18.01 · Unit 2",
          title: "Lesson 4: Applications",
          subtitle: "Use derivatives to analyze graphs, motion, and optimization.",
          overview: {
            heading: "Lesson Overview",
            text: "In this lesson, you will apply derivatives to real mathematical questions like increasing/decreasing behavior and maximum values."
          },
          powerPoints: [
            "Derivatives help interpret graph behavior.",
            "They reveal increasing, decreasing, and extreme values.",
            "Applications turn abstract concepts into tools."
          ]  
        }
      }
    },

    multivariableCalculus: {
      courseTitle: "18.02 Multivariable Calculus",

      courseIntro: {
        heading: "Welcome to Multivariable Calculus",
        text: "This course extends calculus into higher dimensions and studies functions of several variables."
      },

      units: [
        {
          unitName: "Unit 1",
          lessons: [
            { id: "surfaces", title: "Lesson 1: Surfaces" },
            { id: "partials", title: "Lesson 2: Partial Derivatives" }
          ]
        }
      ],

      lessons: {
        surfaces: {
          label: "18.02 · Unit 1",
          title: "Lesson 1: Surfaces",
          subtitle: "Visualize graphs in three dimensions.",
          overview: {
            heading: "Lesson Overview",
            text: "This lesson introduces surfaces and the geometry of multivariable functions."
          },
          powerPoints: [
            "Multivariable graphs form surfaces.",
            "Input dimension changes the geometry.",
            "Visualization becomes more important."
          ],
        },

        partials: {
          label: "18.02 · Unit 1",
          title: "Lesson 2: Partial Derivatives",
          subtitle: "Measure change in one direction at a time.",
          overview: {
            heading: "Lesson Overview",
            text: "This lesson studies how functions change with respect to one variable while holding others fixed."
          },
          powerPoints: [
            "Partial derivatives isolate one variable.",
            "They extend derivative ideas to many variables.",
            "They prepare for gradients and optimization."
          ]
        }
      }
    },

    linearAlgebra: {
      courseTitle: "18.06 Linear Algebra",

      courseIntro: {
        heading: "Welcome to Linear Algebra",
        text: "This course studies vectors, matrices, systems, and the structures behind modern mathematics."
      },

      units: [
        {
          unitName: "Unit 1",
          lessons: [
            { id: "vectors", title: "Lesson 1: Vectors" },
            { id: "matrices", title: "Lesson 2: Matrices" }
          ]
        }
      ],

      lessons: {
        vectors: {
          label: "18.06 · Unit 1",
          title: "Lesson 1: Vectors",
          subtitle: "Understand vectors as objects with magnitude and direction.",
          overview: {
            heading: "Lesson Overview",
            text: "This lesson introduces vectors and the language of linear algebra."
          },
          powerPoints: [
            "Vectors represent direction and magnitude.",
            "They can be added and scaled.",
            "They are the building blocks of linear algebra."
          ]
          },

        matrices: {
          label: "18.06 · Unit 1",
          title: "Lesson 2: Matrices",
          subtitle: "See matrices as transformations and systems tools.",
          overview: {
            heading: "Lesson Overview",
            text: "This lesson introduces matrices and how they organize linear relationships."
          },
          powerPoints: [
            "Matrices can encode systems.",
            "Matrices can represent transformations.",
            "They organize linear information."
          ]
        }
      }
    }


}; // the end of course data