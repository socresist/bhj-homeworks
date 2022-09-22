const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItems = Array.from(document.querySelectorAll(".dropdown__item"));

function ShowClassList() {
	dropdownList.classList.toggle("dropdown__list_active");
};

dropdownValue.addEventListener("click", ShowClassList);

function valueChange(event) {
	event.preventDefault();
	let result = event.target;
	dropdownList.classList.remove("dropdown__list_active");
	dropdownValue.textContent = result.textContent;
	return false;
};

dropdownItems.forEach(elem => {
	elem.addEventListener("click", valueChange);
});