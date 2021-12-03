async function isCandidate() {

    const Uid = sessionStorage.getItem('Uid');
    const password = sessionStorage.getItem('password');

    await axios.get("http://localhost:3000/users/")
        .then((res) => {

            var userLogged = false
            res.data.forEach(user => {
                /* if candidate */
                if (user.Uid == Uid && user.password == password && user.role == "candidate") {
                    userLogged = true
                }
            })
            if (!userLogged) {
                sessionStorage.clear();
                document.location.href = './login.html'
            }
        })

}

isCandidate();