// to inform users of the info to input in the email section
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');

  emailInput.addEventListener('input', () => {
    if (!isValidEmail(emailInput.value)) {
      emailError.textContent = 'Please enter a valid email address';
    } else {
      emailError.textContent = 'Correct data received ✔';
    }
  });

  function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  document.getElementById('contactForm').addEventListener('submit', (event) => {
    if (!isValidEmail(emailInput.value)) {
      emailError.textContent = 'Please enter a valid email address';
      event.preventDefault(); // Prevent form submission
    }
  });


//   js for name input

const nameInput = document.getElementById('name');
const nameError = document.getElementById('nameError');

nameInput.addEventListener('input', () => {
  if (nameInput.value.trim() === '') {
    nameError.textContent = "Name can't be empty.";
  } else if (!isValidName(nameInput.value)) {
    nameError.textContent = 'Name should only contain letters and spaces.';
  } else {
    nameError.textContent = 'Correct data received ✔';
  }
});

function isValidName(name) {
  const nameRegex = /^[A-Za-z\s]+$/;
  return nameRegex.test(name);
}