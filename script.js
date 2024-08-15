// Select the controls
const box = document.querySelector(".box");
const content = document.querySelector(".content");
const marginRange = document.getElementById("margin");
const marginValue = document.getElementById("marginValue");
const paddingRange = document.getElementById("padding");
const paddingValue = document.getElementById("paddingValue");

// Add event listeners to update margin and padding
marginRange.addEventListener("input", function () {
    box.style.margin = `${this.value}px`;
    marginValue.textContent = `${this.value}px`;
});

paddingRange.addEventListener("input", function () {
    content.style.padding = `${this.value}px`;
    paddingValue.textContent = `${this.value}px`;
});
