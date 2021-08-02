(function () {

    "use strict";

    var myImages = ['p1.jpg', 'p2.jpg', 'p3.jpg', 'p4.jpg'];

    var currentImage = 0;

    // document.getElementById('next').onclick = nextPhoto;

    document.getElementById('next').addEventListener('click', nextPhoto);

    function nextPhoto() {
        currentImage++;
        if (currentImage > myImages.length - 1) {
            currentImage = 0;
        }
        document.getElementById('myimage').src = myImages[currentImage];
    }


    document.getElementById('previous').onclick = previousPhoto;

    function previousPhoto() {
        currentImage--;
        if (currentImage < 0) {
            currentImage = myImages.length - 1;
        }
        document.getElementById('myimage').src = myImages[currentImage];
    }



})();


