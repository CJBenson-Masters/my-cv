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
downloadButton.textContent = "Download";
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

// Modal for language selection
const modal = document.getElementById('language-modal');
const downloadBtn = document.getElementById('download-button');
const closeModalButton = document.getElementById('close-modal');
const englishButton = document.getElementById('english-button');
const frenchButton = document.getElementById('french-button');
const resumename = document.getElementById('resume-name');
const myname = document.getElementById('myname');
const loader = document.getElementById('loader');

// Show modal when download button is clicked
downloadButton.addEventListener('click', function () {
    modal.style.display = 'flex'; // Show the modal 
    resumename.style.display = 'none';
    myname.style.display = 'flex'; 
});

// Close modal when close button is clicked
closeModalButton.addEventListener('click', function () {
    modal.style.display = 'none'; // Hide the modal
    resumename.style.display = 'none';
    myname.style.display = 'flex'; 
});

// Download PDF after language selection
function delayedDownload(language) {
    // Show loader
    loader.style.display = 'block';
    // Translate content to selected language
    translateContent(language);

    // Wait for 5 seconds before downloading the PDF
    setTimeout(() => {
        generatePdf();
        // Hide loader after download
        loader.style.display = 'none';
    }, 4000); // Delay to allow translation
}

englishButton.addEventListener('click', function () {
    delayedDownload('en');
    modal.style.display = 'none'; // Close the modal after selecting language
});

frenchButton.addEventListener('click', function () {
    delayedDownload('fr');
    modal.style.display = 'none'; // Close the modal after selecting language
});