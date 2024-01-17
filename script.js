document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.post img');
  
    images.forEach(function (image) {
      image.addEventListener('click', function () {
        this.classList.toggle('expanded');
      });
    });
  });