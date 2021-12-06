export default class Result {
    constructor(idUser, onlineTest, seriousGame, motivationTest, administrationTest1, administrationTest2, administrationTest3, technicalTest) {
        this.idUser = idUser;
        this.onlineTest = onlineTest;
        this.seriousGame = seriousGame;
        this.motivationTest = motivationTest;
        this.administrationTest1 = administrationTest1;
        this.administrationTest2 = administrationTest2;
        this.administrationTest3 = administrationTest3;
        this.technicalTest = technicalTest;

    }

    add () {
        const obj = {
            idUser: this.idUser,
            onlineTest: this.onlineTest,
            seriousGame: this.seriousGame,
            motivationTest: this.motivationTest,
            administrationTest1: this.administrationTest1,
            administrationTest2: this.administrationTest2,
            administrationTest3: this.administrationTest3,
            technicalTest: this.technicalTest,
        }
        
        axios.post("http://localhost:3000/result/", obj)
        .then((res) => {

        }
        );
    }

}