// Get references to the form elements
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');

// Get references to the switch links
const showSignUpLink = document.getElementById('showSignUp');
const showSignInLink = document.getElementById('showSignIn');

// --- Form Switching Logic ---

// Function to switch to the Sign Up form
showSignUpLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent link from navigating
    signInForm.classList.add('hidden');
    signUpForm.classList.remove('hidden');
});

// Function to switch to the Sign In form
showSignInLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent link from navigating
    signUpForm.classList.add('hidden');
    signInForm.classList.remove('hidden');
});


// --- Form Submission Handlers (Client-side Simulation) ---

signInForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop the form from submitting normally

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // In a real application, you would send this data to your server
    console.log('--- Sign In Attempt ---');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    alert('Sign In successful! (Simulated)');

    // Optional: Clear form after successful submission
    signInForm.reset();
});

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Stop the form from submitting normally

    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // In a real application, you would send this data to your server
    console.log('--- Sign Up Attempt ---');
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    alert('Account created! (Simulated)');

    // Optional: Clear form after successful submission
    signUpForm.reset();
    
    // Optional: Automatically switch back to sign-in after sign-up
    signUpForm.classList.add('hidden');
    signInForm.classList.remove('hidden');
});