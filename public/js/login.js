//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', evt => {
	evt.preventDefault();

	//get user info
	const email = signupForm['signup-email'].value;
	const password = signupForm['signup-password'].value;

	//sign up the user
	auth.createUserWithEmailAndPassword(email, password)
		.then(cred => {
			return db.collection(cred.user.uid).doc(cred.user.uid);
		})
		.then(() => {
			const modal = document.querySelector('#modal-signup');
			M.Modal.getInstance(modal).close();
			signupForm.reset();
			signupForm.querySelector('.error').innerHTML = '';
		})
		.catch(err => {
			signupForm.querySelector('.error').innerHTML = err.message;
		});
});

//logout user
const logout = document.querySelector('#logout');
logout.addEventListener('click', evt => {
	evt.preventDefault();
	auth.signOut()
		.then(() => console.log('User signed out'))
		.catch(err => console.log(err.message));
	window.location.reload();
});

// login user
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', evt => {
	evt.preventDefault();
	const email = loginForm['login-email'].value;
	const password = loginForm['login-password'].value;
	auth.signInWithEmailAndPassword(email, password)
		.then(cred => {
			const modal = document.querySelector('#modal-login');
			M.Modal.getInstance(modal).close();
			loginForm.reset();
			loginForm.querySelector('.error').innerHTML = '';
		})
		.catch(err => {
			loginForm.querySelector('.error').innerHTML = err.message;
		});
});
