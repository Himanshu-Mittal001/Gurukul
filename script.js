// Toggle Navigation Menu for Mobile/Tablet View
function toggleMenu() {
  const navList = document.getElementById("navList");
  navList.classList.toggle("active");
}

// Toggle Dark/Light Mode
function toggleMode() {
  document.body.classList.toggle("dark-mode");
  const modeText = document.body.classList.contains("dark-mode") ? "Switch to Light Mode" : "Switch to Dark Mode";
  document.getElementById("toggleMode").textContent = modeText;
}

// Handle form submissions for Customer, Vendor, Worker records
// Add dynamic entries to the page

// Load Transactions based on Category Selection
function loadTransactions(category) {
  // Populate the table with the selected category data
}

// Handle transaction form submission and display success popup
document.getElementById("transactionForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const transactionDate = document.getElementById("transactionDate").value;
  if (!transactionDate) {
    alert('Date is required!');
    return;
  }
  // Add transactions to table
  alert('Entries Saved Successfully!');
});
