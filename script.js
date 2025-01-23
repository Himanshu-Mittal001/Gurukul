// Toggle Dark/Light Mode
function toggleMode() {
  document.body.classList.toggle("dark-mode");
  const modeText = document.body.classList.contains("dark-mode") ? "Switch to Light Mode" : "Switch to Dark Mode";
  document.getElementById("toggleMode").textContent = modeText;
}

// Function to handle personal record form submission
document.getElementById("personalRecordForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const category = document.getElementById("category").value;
  const guardianName = document.getElementById("guardianName").value;
  const contactNumbers = document.getElementById("contactNumbers").value;
  const address = document.getElementById("address").value;
  const image = document.getElementById("image").files[0];

  // Add to records (This can be saved to a database or array for now)
  const newRecord = `
    <div class="record">
      <h3>${name}</h3>
      <p>Category: ${category}</p>
      <p>Guardian: ${guardianName}</p>
      <p>Contact: ${contactNumbers}</p>
      <p>Address: ${address}</p>
      <img src="${URL.createObjectURL(image)}" alt="${name}'s image" width="100">
    </div>
  `;
  
  document.getElementById("records").innerHTML += newRecord;
  document.getElementById("personalRecordForm").reset();
});

// Download Table as PDF
document.getElementById('downloadBtn').addEventListener('click', function() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text("Your Content", 10, 10);
  doc.save("content.pdf");
});

// Other functions like adding/editing worker/vendor can be added similarly
