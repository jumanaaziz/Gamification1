document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('addServiceForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const servname = document.getElementById('serviceName').value;
        const des = document.getElementById('description').value;
        const img = document.getElementById('imageUrl').value;
        const lnk = document.getElementById('companyLink').value;

        localStorage.setItem('service-name', servname);
        localStorage.setItem('description', des);
        localStorage.setItem('image-url', img);
        localStorage.setItem('company-link', lnk);

    
        window.location.href = "index.html";
    });
});
