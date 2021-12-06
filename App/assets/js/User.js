export default class User {
    constructor(lName, fName, email, Uid, password) {
        this.lName = lName;
        this.fName = fName;
        this.email = email;
        this.Uid = Uid;
        this.password = password;
        this.role = "candidate";
        this.passTest = false;
    }

    async login() {
        await axios.get("http://localhost:3000/users/")
        .then((res) => {
            var userLogged = false
            var responsibleLogged = false
            res.data.forEach(user => {
                /* if candidate */
                if ( user.Uid == this.Uid && user.password == this.password && user.role == "candidate" ){
                    userLogged = true
                    sessionStorage.setItem('Uid', this.Uid);
                    sessionStorage.setItem('password', this.password)
                } 
                /* if responsible */
                else if ( user.Uid == this.Uid && user.password ==this.password && user.role == "responsible" ){
                    responsibleLogged = true
                    sessionStorage.setItem('Uid', this.Uid);
                    sessionStorage.setItem('password', this.password)
                }

            })
            /* redirect to the desired page Or just show an alert as data not valid */
            if (userLogged) {
                location.href = 'test.html';
            } else if (responsibleLogged) {
                location.href = 'responsible/main.html';
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Data not valid',

                })
            }
        })

    }

    logout() {
        sessionStorage.clear();
    }

    async getUserPassTest () {
        let users = []
        await axios.get("http://localhost:3000/users/")
        .then((res) => {
            res.data.forEach((user) => {
                if(user.passTest == true){

                    users.push(user)
                }
            })

        })
        return users ;
    }

}