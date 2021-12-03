/* import  */
import Candidate from "./Candidate.js";
import User from "./User.js";

/* ==================Registrater =========================*/
const registerForm = document.querySelector('.register')
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = registerForm.email.value;
        const cin = registerForm.cin.value;
        const age = registerForm.age.value;
        const lName = registerForm.lName.value;
        const fName = registerForm.fName.value;
        /* check data if null */
        if (cin == "" || email == "" || age == "" || lName == "" || fName == "") {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Incomplete information!',

            })

        } else {
            /* if age valide */
            if (age >= 18 && age <= 35) {

                                    /* instance candidate module */
                                    const newCandidate = new Candidate(cin, age, lName, fName, email)
                                    /* return data as object */
                                    newCandidate.register()

            }
            /* age not valid */
            else {
                Swal.fire('You Can\'t Register', 'Your Age Must be Between 18 and 35', 'info')
            }
        }

    })
}


/* ===================== Login =================== */

const loginForm = document.querySelector('#loginForm')
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const Uid = loginForm.Uid.value;
        const password = loginForm.password.value
        if (Uid == "" || password == "") {
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Incomplete information!',
            })

        } else {
            const user = new User(null, null, null, Uid, password);
            user.login()
        }

    })
}

/* ==============logout=================== */

const logout = document.querySelector('.logout')
if (logout) {
    logout.addEventListener('click', () => {

        const user = new User();
        user.logout()
    })
}