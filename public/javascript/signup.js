
async function signupFormHandler(event) {
    event.preventDefault();
  
    
    const email = document.querySelector('#email-signup').value.trim();
    const firstname = document.querySelector('#firstname-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (firstname && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          email,
          firstname,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.reload();
        firstname = dbUserData.firstname;
      } else {
        alert(response.statusText);
      }
    }
  }

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);