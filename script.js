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

  document.addEventListener('DOMContentLoaded', function () {
    var footnotes = document.querySelectorAll('.footnote');
    
    footnotes.forEach(function (footnote) {
      var referenceId = footnote.getAttribute('id');
  
      var referenceLinks = document.querySelectorAll('a[href="#' + referenceId + '"]');
      
      referenceLinks.forEach(function (referenceLink) {
        referenceLink.addEventListener('click', function (event) {
          event.preventDefault();
          scrollToFootnote(referenceId);
        });
      });
    });
  
    function scrollToFootnote(id) {
      var footnoteElement = document.getElementById(id);
  
      if (footnoteElement) {
        footnoteElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
  