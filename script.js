document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section.content');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            sections.forEach(section => {
                if (section.classList.contains('active')) {
                    section.classList.remove('active');
                    setTimeout(() => {
                        section.style.display = 'none';
                    }, 500);
                }
            });

            const target = document.querySelector(this.getAttribute('href'));
            setTimeout(() => {
                target.style.display = 'block';
                setTimeout(() => {
                    target.classList.add('active');
                }, 50);
            }, 500);
        });
    });
});
