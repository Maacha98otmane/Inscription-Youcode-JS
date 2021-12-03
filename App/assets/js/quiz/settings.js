import Quiz from './quiz.js';

class Settings {
  constructor() {
    this.quizElement = document.querySelector('.quiz');
    this.settingsElement = document.querySelector('.settings');
    this.numberOfQuestions = document.querySelector('#questions');
    this.startButton = document.querySelector('#start');

    this.quiz = {};

    this.startButton.addEventListener('click', this.startQuiz.bind(this));
  }

  async startQuiz() {
    try {
      const amount = "7";
      const categoryId = "21";
      const difficulty = "easy";

      const url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}&type=multiple`;

      let data = await this.fetchData(url);
      this.toggleVisibility();
      this.quiz = new Quiz(this.quizElement, amount, data.results);
    } catch (error) {
      alert(error);
    }
  }

  toggleVisibility() {
    this.settingsElement.style.visibility = 'hidden';
    this.quizElement.style.visibility = 'visible';
  }

  async fetchData(url) {
    const response = await fetch(url);
    const result = await response.json();

    return result;
  }


}

export default Settings;