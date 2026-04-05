const params = new URLSearchParams(window.location.search);
const currentCourseKey = params.get("course") || "singleVariableCalculus";
const currentLessonId = params.get("lesson") || "limits";

const currentMapData = mindmapData[currentCourseKey]?.[currentLessonId];

const stage = document.getElementById("mindmap-stage");
const root = document.getElementById("mindmap-root");
const svg = document.getElementById("mindmap-svg");

const labelEl = document.getElementById("mindmap-label");
const titleEl = document.getElementById("mindmap-title");
const subtitleEl = document.getElementById("mindmap-subtitle");

const infoTitle = document.getElementById("info-title");
const infoText = document.getElementById("info-text");

function renderHeader() {
  if (!currentMapData) {
    labelEl.textContent = "";
    titleEl.textContent = "Mind map not found";
    subtitleEl.textContent = "Check the URL parameters.";
    return;
  }

  labelEl.textContent = currentMapData.label;
  titleEl.textContent = currentMapData.title;
  subtitleEl.textContent = currentMapData.subtitle;
}

function renderNodes(mapData) {
  root.innerHTML = "";

  const totalLayers = mapData.layers.length;

  mapData.layers.forEach((layer, layerIndex) => {
    const yPercent = ((layerIndex + 1) / (totalLayers + 1)) * 100;

    layer.forEach((node, nodeIndex) => {
      const xPercent = ((nodeIndex + 1) / (layer.length + 1)) * 100;

      const el = document.createElement("div");
      el.className = "mindmap-node";
      el.dataset.id = node.id;
      el.innerHTML = node.label.replace(/\n/g, "<br>");

      el.style.left = `${xPercent}%`;
      el.style.top = `${yPercent}%`;

      el.addEventListener("click", () => {
        document.querySelectorAll(".mindmap-node").forEach((n) => {
          n.classList.remove("active-node");
        });

        el.classList.add("active-node");
        infoTitle.textContent = node.label.replace(/\n/g, " ");
        infoText.textContent = mapData.nodeContent[node.id] || "No content yet.";
      });

      root.appendChild(el);
    });
  });
}

function getNodeCenter(nodeEl, stageEl) {
  const nodeRect = nodeEl.getBoundingClientRect();
  const stageRect = stageEl.getBoundingClientRect();

  return {
    x: nodeRect.left - stageRect.left + nodeRect.width / 2,
    y: nodeRect.top - stageRect.top + nodeRect.height / 2,
    width: nodeRect.width,
    height: nodeRect.height
  };
}

function drawEdges(mapData) {
  svg.innerHTML = "";

  mapData.edges.forEach((edge) => {
    const fromEl = root.querySelector(`[data-id="${edge.from}"]`);
    const toEl = root.querySelector(`[data-id="${edge.to}"]`);

    if (!fromEl || !toEl) return;

    const p1 = getNodeCenter(fromEl, stage);
    const p2 = getNodeCenter(toEl, stage);

    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist === 0) return;

    const ux = dx / dist;
    const uy = dy / dist;

    const r1 = Math.min(p1.width, p1.height) * 0.38;
    const r2 = Math.min(p2.width, p2.height) * 0.38;

    const startX = p1.x + ux * r1;
    const startY = p1.y + uy * r1;
    const endX = p2.x - ux * r2;
    const endY = p2.y - uy * r2;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", startX);
    line.setAttribute("y1", startY);
    line.setAttribute("x2", endX);
    line.setAttribute("y2", endY);
    line.setAttribute("stroke", "#222");
    line.setAttribute("stroke-width", "3");

    svg.appendChild(line);

    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;

    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    dot.setAttribute("cx", midX);
    dot.setAttribute("cy", midY);
    dot.setAttribute("r", "8");
    dot.setAttribute("fill", "white");
    dot.setAttribute("stroke", "#222");
    dot.setAttribute("stroke-width", "3");
    dot.classList.add("edge-dot");

    dot.addEventListener("click", () => {
      infoTitle.textContent = "Logic Connection";
      infoText.textContent = edge.text || "No explanation yet.";
    });

    svg.appendChild(dot);
  });
}

function renderMindmap(mapData) {
  if (!mapData) {
    root.innerHTML = "<p>Mind map data not found.</p>";
    return;
  }

  renderNodes(mapData);

  requestAnimationFrame(() => {
    drawEdges(mapData);
  });
}

window.addEventListener("resize", () => {
  if (currentMapData) {
    renderMindmap(currentMapData);
  }
});

renderHeader();
renderMindmap(currentMapData);