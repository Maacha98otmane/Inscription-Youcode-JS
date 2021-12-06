import Candidate from "./Candidate.js";
import Result from "./Result.js";
import User from "./User.js"

const testForm = document.querySelector('.test2')
if (testForm) {
    testForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const seriousGame = testForm.Serious.value;
        const motivationTest = testForm.Motivation.value;
        const administrationTest1 = testForm.Administration1.value;
        const administrationTest2 = testForm.Administration2.value;
        const administrationTest3 = testForm.Administration3.value;
        const technicalTest = testForm.tech.value;
        /* check data if null */

        if (seriousGame == "" || motivationTest == "" || administrationTest1 == "" || administrationTest2 == "" || administrationTest3 == "" || technicalTest == "") {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Incomplete information!',

            })

        } else {
            /* brining the user ID and check if it logged */
            const Uid = sessionStorage.getItem('Uid');
            const password = sessionStorage.getItem('password')
            const candidate = new Candidate();
            const idUser = await candidate.getId(Uid, password)
            if (idUser == undefined) {
                return document.location.href = './login.html'
            }

            Swal.fire({
                title: 'Do you want to save your info?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
            }).then(async (result) => {
                /* confirmed */
                if (result.isConfirmed) {
                    /* send data */
                    const result = new Result(idUser, true, seriousGame, motivationTest, administrationTest1, administrationTest2, administrationTest3, technicalTest)
                    result.add()
                    candidate.changeAttrPassTest(idUser)
                    /* Not confirmed */
                } else if (result.isDenied) {
                    Swal.fire('Infos are not saved', '', 'info')
                }
            })
        }

    });

}



/*  */
const candidateTemp = document.getElementById('candidateTemp')
if (candidateTemp) {
    fetchCandidatePassTest();
}
async function fetchCandidatePassTest() {
    const users = await new User().getUserPassTest()
    let tbody = document.getElementById('tbody')
    users.forEach(user => {
        tbody.innerHTML += `<tr onclick="downloadPdf(${user.id})">
            <th scope="row">${user.id}</th>
            <td>${user.fName}</td>
            <td>${user.lName}</td>
            <td>${user.email}</td>
            <td>${user.cin}</td>
            <td>${user.age}</td>
        </tr>`
    });
};


