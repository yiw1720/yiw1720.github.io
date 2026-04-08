const mindmapData = {
  singleVariableCalculus: {
    limits: {
      label: "18.06 · Unit 1",
      title: "Lecture 1: The geometry of linear equations",
      subtitle: "Visualize Linear equations and construct the picture of Linear Algebra",

      layers: [
        [
          { id: "matrix", label: "Matrix Form\nAx = b" }
        ],
        [
          { id: "rowpic", label: "Row Picture" },
          { id: "colpic", label: "Column Picture" }
        ],
        [
          { id: "intersection", label: "Find Intersection" },
          { id: "lincomb", label: "Linear Combination" }
        ]
      ],

      edges: [
        { from: "matrix", to: "rowpic", text: "Interpret the matrix through equations." },
        { from: "matrix", to: "colpic", text: "Interpret the matrix through columns." },
        { from: "rowpic", to: "intersection", text: "The row picture leads to solving by intersections." },
        { from: "colpic", to: "lincomb", text: "The column picture leads to linear combinations." }
      ],

      nodeContent: {
        matrix: "Convert linear equations into matrix form Ax = b.",
        rowpic: "The row picture interprets each equation geometrically.",
        colpic: "The column picture interprets the columns as vectors.",
        intersection: "Solutions appear as intersections.",
        lincomb: "Solutions can be understood through combinations of columns."
      }
    }
  }
};