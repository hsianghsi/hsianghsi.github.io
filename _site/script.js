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

  