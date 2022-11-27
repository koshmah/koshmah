const arabic = document.getElementById('arabic');
const english = document.getElementById('english');
const fallback = 'en';


function setLanguage(language) {
    switch (language) {
        case 'arabic':
            localStorage.setItem('language', 'arabic');
            // switch to rtl
            document.body.classList.add('rtl');
            break;
        case 'english':
            localStorage.setItem('language', 'english');
            // switch to ltr
            document.body.classList.remove('rtl');
            break;
        default:
            localStorage.setItem('language', fallback);
            // switch to ltr
            document.body.classList.remove('rtl');
    }

    loadContent();
}

arabic.addEventListener('click', function() {
    setLanguage('arabic');
});

english.addEventListener('click', function() {
    setLanguage('english');
    loadContent();
});

function loadContent() {

    const language = localStorage.getItem('language') || fallback;

    if (language == "arabic") {
        menu.innerHTML = "المنيو 🥙";
        link.innerHTML = "لا تنسى تقيمنا &#128205;";
        phone.innerHTML = "للطلب &#128241;";
    } else if (language == "english") {
        menu.innerHTML = "🥙 Menu";
        link.innerHTML = "&#128205; Rate us";
        phone.innerHTML = "&#128241; Contact Us";
    }
}

