const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');

menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active');
}

const section = document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top > offset && top < offset + height) {
            sec.classList.add('start-animation');
            navlink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    var header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active');
}

// Function to display phone number in a modal
function displayPhone() {
    var modal = document.getElementById("phoneModal");
    modal.style.display = "block"; // Show the modal
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("phoneModal");
    modal.style.display = "none"; // Hide the modal
}

// Close the modal if the user clicks anywhere outside the modal content
window.onclick = function(event) {
    var modal = document.getElementById("phoneModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
