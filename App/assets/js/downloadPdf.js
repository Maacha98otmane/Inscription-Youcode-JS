async function downloadPdf(id) {

    let arr = [];

    await axios.get("http://localhost:3000/result?idUser=" + id)
        .then((res) => {
            arr.push(res.data)
        });
    await axios.get("http://localhost:3000/users?id=" + id)
        .then((res) => {
            arr.push(res.data)
        });
    Down(arr)


}

function Down(arr) {
    console.log(arr, arr[0][0].seriousGame)
    var sTable = `
    <table>
	<tr>
		<th>Candidat</th>
		<th>Info</th>
	</tr>
	<tr>
		<td>First Name</td>
		<td>${arr[1][0].fName}</td>
	</tr>
	<tr>
		<td>Last Name</td>
		<td>${arr[1][0].lName}</td>
	</tr>
	<tr>
		<td>Email</td>
		<td>${arr[1][0].email}</td>
	</tr>
	<tr>
		<td>CIN</td>
		<td>${arr[1][0].cin}</td>
	</tr>
	<tr>
		<td>Age</td>
		<td>${arr[1][0].age}</td>
	</tr>
</table>

                            <table style="margin-top:20px">
                            <tr>
                            <td style="background-color:#0B5ED7" colspan="2">Serious Game</td>
                            </tr>
                            <tr>
                            <td>Serious Game Question :</td>
                            <td>${arr[0][0].seriousGame}</td>
                            </tr>

                            <tr>
                            <td style="background-color:#0B5ED7" colspan="2">Administration Test</td>
                            </tr>
                            <tr>
                            <td>1- Introduce Yourself :</td>
                            <td>${arr[0][0].administrationTest1}</td>
                            </tr>
                            <tr>
                            <td>2- How do you handle stress :</td>
                            <td>${arr[0][0].administrationTest2}</td>
                            </tr>
                            <tr>
                            <td>3- What computer skills do you have :</td>
                            <td>${arr[0][0].administrationTest3}</td>
                            </tr>

                            <tr>
                            <td style="background-color:#0B5ED7" colspan="2">Motivation Test</td>
                            </tr>
                            <tr>
                            <td>why do you choose YouCode :</td>
                            <td>${arr[0][0].motivationTest}</td>
                            </tr>

                            <tr>
                            <td style="background-color:#0B5ED7" colspan="2">Technical Test</td>
                            </tr>
                            <tr>
                            <td>Ecrire un programme en <strong>langage C</strong> qui affiche le
                            quotient
                            et le reste de la division entière de deux nombres entiers entrés au clavier ainsi que
                            le
                            quotient rationnel de ces nombres :</td>
                            <td>${arr[0][0].technicalTest}</td>
                            </tr>
                
                            </table>
    `;

    var style = "<style>";
    style = style + "table {width: 100%;font: 17px Calibri;}";
    style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "</style>";

    // CREATE A WINDOW OBJECT.
    var win = window.open('', '', 'height=700,width=700');

    win.document.write('<html><head>');
    win.document.write('<title>Profile</title>'); // <title> FOR PDF HEADER.
    win.document.write(style); // ADD STYLE INSIDE THE HEAD TAG.
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(sTable); // THE TABLE CONTENTS INSIDE THE BODY TAG.
    win.document.write('</body></html>');

    win.document.close(); // CLOSE THE CURRENT WINDOW.

    win.print(); // PRINT THE CONTENTS.
}