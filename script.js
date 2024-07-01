document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM content loaded. Script is running.');

  var images = document.querySelectorAll('.post img');

  images.forEach(function (image) {
    image.addEventListener('click', function () {
      this.classList.toggle('expanded');
      console.log('Image clicked.');
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const imageLink = document.querySelector('.post a[href$=".png"]');

  if (imageLink) {
    imageLink.addEventListener("click", function(event) {
      event.preventDefault();
      window.open(this.href, "_blank");
    });
  }
});
  