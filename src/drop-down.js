const navGroupTitles = Array.from(document.querySelectorAll('.drop-down > li'));

function createDropDownEvents() {
    navGroupTitles.forEach((title) => {
        title.addEventListener('mouseover', () => {
            showDropDown(title);
        });
        title.parentNode.addEventListener('mouseleave', () => {
            hideDropDown(title);
        });
    });
}

function showDropDown(title) {
    const dropDownList = title.nextElementSibling;
    dropDownList.classList.remove('hidden');
}

function hideDropDown(title) {
    const dropDownList = title.nextElementSibling;
    dropDownList.classList.add('hidden');
}

export { createDropDownEvents };
