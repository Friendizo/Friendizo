document.addEventListener("DOMContentLoaded", () => {
    const sidePanel = document.getElementById("side-panel");
    const menuBtn = document.getElementById("menu-btn");
    const subscriptionPopup = document.getElementById("subscription-popup");
    const closePopupBtn = document.getElementById("close-popup");
    const messageButtons = document.querySelectorAll(".message-btn");
  
    // Toggle Side Panel
    menuBtn.addEventListener("click", () => {
      sidePanel.classList.toggle("active");
    });
  
    // Show Subscription Popup
    messageButtons.forEach((button) => {
      button.addEventListener("click", () => {
        subscriptionPopup.classList.add("active");
      });
    });
  
    // Close Subscription Popup
    closePopupBtn.addEventListener("click", () => {
      subscriptionPopup.classList.remove("active");
    });
  });
  