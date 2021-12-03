async function isResponsible() {

    const Uid = sessionStorage.getItem('Uid');
    const password = sessionStorage.getItem('password');

    await axios.get("http://localhost:3000/users/")
        .then((res) => {

            var responsibleLogged = false
            res.data.forEach(user => {
                /* if responsible */
                if (user.Uid == Uid && user.password == password && user.role == "responsible") {
                    responsibleLogged = true
                }
            })
            if (!responsibleLogged) {
                sessionStorage.clear();
                document.location.href = '../login.html'
            }
        })

}

isResponsible();