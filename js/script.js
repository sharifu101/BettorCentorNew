var headers = document.querySelectorAll('.box .toggle-tab ul li .header');

function toggleAccordion() {
    var body = this.nextElementSibling;
    headers.forEach(function(header) {
        // Close all accordions except the one clicked
        if (header !== this) {
            header.nextElementSibling.style.display = 'none';
        }
    });

    // Toggle the display of the clicked accordion
    body.style.display = (body.style.display === 'none') ? 'block' : 'none';
}

// Add click event listener to each accordion header
headers.forEach(function(header) {
    header.addEventListener('click', toggleAccordion);
});


// Time

const displayTime = document.querySelector(".display-time");
// Time
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
  setTimeout(showTime, 1000);
}

showTime();