document.addEventListener('input', function (e) {
    if (e.target.value === '@') e.target.value = 'francois.bare@gmail.com';
}, true);

document.addEventListener('focusin', function (e) {
    if (e.target.tagName === 'INPUT' && e.target.type === 'password' && e.target.value === '') {
        const domain = document.location.hostname.split('.')[1]
        e.target.value = domain[0].toUpperCase() + '@4' + domain[1].toLowerCase() + 'me?8192';
    } 
}, true);
