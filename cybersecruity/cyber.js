let menuBtn = document.querySelector(".menu");
let menuIcon = document.querySelector(".menu i");
let sideContainer = document.querySelector(".sideContainer");

let menuClick = true;
menuBtn.addEventListener("click",()=>{
    if(menuClick){
        sideContainer.style.display = "block";
        menuBtn.innerHTML = `<i class="fa-solid fa-circle-arrow-up"></i>`
        menuClick = false;
    }
    else{
        sideContainer.style.display = "none";
        menuBtn.innerHTML = `<i class="fa-solid fa-circle-arrow-down"></i>`
        menuClick = true;
    }
})

// code for target div

document.addEventListener('DOMContentLoaded', function() {
    // Select all anchor tags with the data-target attribute
    var anchorTags = document.querySelectorAll('.sideContainerRoot a[data-target]');

    // Add click event listener to each anchor tag
    anchorTags.forEach(function(anchorTag) {
      anchorTag.addEventListener('click', function(event) {
        // Prevent default behavior of anchor tag
        event.preventDefault();

        // Get the target div id from the data-target attribute
        var targetId = anchorTag.getAttribute('data-target');

        // Find the corresponding div element
        var targetDiv = document.getElementById(targetId);

        // Apply margin to the target div
        if (targetDiv) {
          targetDiv.style.paddingTop = '70px';
        }

        // Optional: Scroll to the target div
        targetDiv.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
