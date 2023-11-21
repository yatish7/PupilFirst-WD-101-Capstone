const dob = document.getElementById('dob');
        
dob.addEventListener('input', function() {
    const entryDate = new Date(dob.value);
    const maximum = new Date();
    maximum.setFullYear(maximum.getFullYear() - 18);
    const minimum = new Date(maximum);
    minimum.setFullYear(maximum.getFullYear() - 55);

    if (entryDate > maximum || entryDate < minimum) {
        dob.setCustomValidity('Date should be between 18 and 55 years');
    } else {
        dob.setCustomValidity('');
    }
});


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const dob = document.querySelector('input[name="DOB"]').value;
    const acceptedTerms = document.querySelector('input[name="terms"]').checked ? 'Accepted' : 'Not Accepted';
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('dob', dob);
    localStorage.setItem('acceptedTerms', acceptedTerms);
    document.getElementById('Name').innerText = name;
    document.getElementById('Email').innerText = email;
    document.getElementById('Password').innerText = password;
    document.getElementById('DOB').innerText = dob;
    document.getElementById('AcceptedTerms').innerText = acceptedTerms;
});