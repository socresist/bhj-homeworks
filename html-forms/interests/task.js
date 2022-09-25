const interestCheck = Array.from(document.getElementsByClassName('interest__check'));

function parentsOnChecked(e) {
    
    let check = e.target;

    if (!interestCheck.indexOf(check)) {
        return;
    } else {
        while (check) {
            const ancestor = check.closest('ul').parentElement.querySelector('input');
            const heir = Array.from((ancestor.closest('li').querySelector('ul')).querySelectorAll('input'));
            const checkStatus = heir.map(elem => elem.checked === true);
            const every = checkStatus.every(elem => elem === true);
            const some = checkStatus.some(elem => elem === true);
            ancestor.checked = every;

            if (!every && every !== some) {
                ancestor.indeterminate = true;
            } else {
                ancestor.indeterminate = false;
            };

            if (check != parent) {
                check = parent;
            } else {
                check = 0;
            };
        };
    }
}

function onCheckedHeirs(e) {

    const heirs = e.target.closest('.interest').querySelectorAll('input');
    
    if (this.checked === true) {
        for (let index of heirs) {
            index.checked = true;
        };
    } else {
        for (let index of heirs) {
            index.checked = false;
        };
    }
}

for (let index of interestCheck) {
    index.addEventListener('change', onCheckedHeirs);
    index.addEventListener('change', parentsOnChecked);
};