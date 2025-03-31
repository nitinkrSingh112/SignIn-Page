function signIn() {
            const email = document.getElementById('email').value;
            const mobile = document.getElementById('mobile').value;
            const password = document.getElementById('password').value;

            if (email || mobile && password) {
                alert(`Signed in with ${email}, Mobile: ${mobile}`);
            } else {
                alert('Please fill in all fields!');
            }
        }

        function register() {
            alert('Redirecting to registration page...');
        }

        function forgotPassword() {
            alert('Redirecting to password recovery...');
        }