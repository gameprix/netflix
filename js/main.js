// Get all tab items and content items
const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Function to handle tab selection
function selectItem(e) {
  removeBorder(); // Remove the 'tab-border' class from all tabs
  removeShow();   // Hide all tab content sections

  // Add border to the clicked tab
  this.classList.add("tab-border");

  // Select the content item corresponding to the clicked tab
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  
  // Add 'show' class to the corresponding content section to display it
  tabContentItem.classList.add("show");
}

// Remove border from all tabs
function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}

// Remove the 'show' class from all content items (hide them)
function removeShow() {
  tabContentItems.forEach(item => item.classList.remove("show"));
}

// Listen for a click event on each tab
tabItems.forEach(item => item.addEventListener("click", selectItem));
