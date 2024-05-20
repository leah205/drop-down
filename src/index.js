import './style.css';
import createDropDownEvents from '@leah205/dynamic-dropdown/index.js';

const navGroupTitles = Array.from(document.querySelectorAll('.drop-down > li'));
createDropDownEvents(navGroupTitles);

/*function createDropDownEvents(titles) {
    titles.forEach((title) => {
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

export { createDropDownEvents };*/
