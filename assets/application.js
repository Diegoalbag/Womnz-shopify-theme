
document.addEventListener("DOMContentLoaded", function(){
    //dom is fully loaded, but maybe waiting on images & css files
    (function log(){
        const searchIcon = document.querySelector('[search-icon]');
        searchIcon.addEventListener('click', () => {
            console.log('search');
        });
    })();
});