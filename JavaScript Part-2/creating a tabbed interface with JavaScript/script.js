(function () {
    'use script';
    const tabs = document.querySelectorAll('#tabs > ul > li > a');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', selectTab);
    });

    function selectTab(event) {
        event.preventDefault;

        tabs.forEach(function (tab) {
            tab.removeAttribute('class');
        });

        event.target.className = 'active';

        const thisTab = event.target.getAttribute('href');
        const thisContent = document.querySelector(thisTab);
        const oldContent = document.querySelector('.visible');

        oldContent.className = 'visuallyhidden';
        oldContent.addEventListener('transitionend', function () {
            oldContent.className = 'hidden';
            thisContent.className = 'visible visuallyhidden';


            setTimeout(function () {
                thisContent.classList.removeAttribute('visuallyhidden');
            }, 20);
        }, { capture: false, once: true, passive: false });



    }

})();