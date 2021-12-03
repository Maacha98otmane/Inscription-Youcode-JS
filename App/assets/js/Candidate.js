import User from './User.js';

export default class Candidate extends User {
    constructor(cin, age, lName, fName, email, Uid, password) {
        super(lName, fName, email, Uid, password)
        // this.lName = lName
        this.cin = cin;
        this.age = age
        this.lName = lName
    }

    async register() {


        /* check email if alredy exist */
        var emailExist = false

        await axios.get("http://localhost:3000/users/")
            .then((res) => {
                res.data.forEach(user => {

                    if (user.email == email) {
                        emailExist = true

                    }

                });

            })
        if (emailExist) {
            Swal.fire('You Can\'t Register', 'Your alredy register', 'warning')
        } else {
            /* generate random login and password */
            this.Uid = `${Math.random()
                .toString(36)
                .substr(3, 4)}`;
            this.password = `${Math.random()
                .toString(36)
                .substr(2, 6)}`;

            /* return data as object */
            let obj = {
                cin: this.cin,
                age: this.age,
                lName: this.lName,
                fName: this.fName,
                email: this.email,
                Uid: this.Uid,
                password: this.password,
                role: this.role
            }
            /* ask user if really want to register */
            Swal.fire({
                title: 'Do you want to save your info?',
                html: `Your Login :${this.Uid}<br>Your Password:${this.password}`,
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
            }).then((result) => {
                /* confirmed */
                if (result.isConfirmed) {
                    /* send data */

                    axios.post("http://localhost:3000/users/", obj)
                        .then(
                            //register successfuly
                            Swal.fire({
                                title: 'Please Remember Your Login?',
                                html: `Your Login : <strong>${this.Uid}</strong><br>Your Password: <strong>${this.password}</strong>`,
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'I saved it!'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    Swal.fire('Saved!', ``, 'success')
                                    location.href = 'login.html';
                                }
                            })
                        );
                    /* Not confirmed */
                } else if (result.isDenied) {
                    Swal.fire('Infos are not saved', '', 'info')
                }
            })
        }
    }
}