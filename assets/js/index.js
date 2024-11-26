// Scroll to Top Button
const scrollTop = document.createElement('button');
scrollTop.textContent = "↑ Top";
scrollTop.classList.add('scroll-top');
document.body.appendChild(scrollTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTop.style.display = 'block';
    } else {
        scrollTop.style.display = 'none';
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// PDF Generation Button
const downloadButton = document.createElement('button');
downloadButton.textContent = "Download PDF";
downloadButton.classList.add('download-pdf');
document.body.appendChild(downloadButton);

const areaCv = document.querySelector("#area-cv");
const generatePdf = () => {
    const options = {
        margin: 0,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 4 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(options).from(areaCv).save();
};

downloadButton.addEventListener("click", generatePdf);

// Cool Features
// Add typing animation to the resume's heading
const heading = document.querySelector('.resume__heading');
const text = heading ? heading.textContent : '';
if (heading) {
    heading.textContent = ''; // Clear the text to prepare for the typing effect
    let index = 0;
    const typeEffect = () => {
        if (index < text.length) {
            heading.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Adjust typing speed here
        }
    };
    typeEffect();
}


// Add interactive progress bars for skills
const skills = document.querySelectorAll('.skill-bar');
skills.forEach((skill) => {
    const level = skill.getAttribute('data-level'); // Example: 80%
    skill.style.width = 0;
    setTimeout(() => {
        skill.style.transition = 'width 2s ease';
        skill.style.width = level;
    }, 500); // Delay to start animation
});
