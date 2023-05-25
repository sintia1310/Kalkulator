function calculateSquare() {
  const length = parseFloat(document.getElementById("length").value);
  const area = length * length;
  const perimeter = 4 * length;

  displayOutput(area, perimeter);
}

function calculateRectangle() {
  const length = parseFloat(document.getElementById("length").value);
  const width = parseFloat(document.getElementById("width").value);
  const area = length * width;
  const perimeter = 2 * (length + width);

  displayOutput(area, perimeter);
}

function displayOutput(area, perimeter) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `<p>Area: ${area}</p><p>Perimeter: ${perimeter}</p>`;
}
