/*
(function () {
    var Question = function (ques, answers, ans) {
        this.question = ques,
            this.answers = answers,
            this.answer = ans
    }

    answers = ['Yes', 'Nahh..']
    instructors = ['Jose Portila', 'Jonas', 'Kim']
    var qOne = new Question('Is JavaScript the best prgramming language ?', answers, 0)
    var qTwo = new Question('Is UVSinghK the best ?', answers, 0)
    var qThree = new Question('Who is the instructor of this course ?', instructors, 1)

    var questions = [qOne, qTwo, qThree]

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans) {
        if (ans == this.answer) {
            console.log("Correct answer..");
        } else {
            console.log("Wrong Answer !!");
        }
    }

    var q = Math.floor(Math.random() * questions.length);

    questions[q].displayQuestion();
    var ans = prompt("What's the answer ?");
    questions[q].checkAnswer(ans);
})();
*/


(function () {
    var Question = function (ques, answers, ans) {
        this.question = ques,
            this.answers = answers,
            this.answer = ans
    }

    answers = ['Yes', 'Nahh..']
    instructors = ['Jose Portila', 'Jonas', 'Kim']
    var qOne = new Question('Is JavaScript the best prgramming language ?', answers, 0)
    var qTwo = new Question('Is UVSinghK the best ?', answers, 0)
    var qThree = new Question('Who is the instructor of this course ?', instructors, 1)

    var questions = [qOne, qTwo, qThree]

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    // closure function
    function score (){
        var sc = 0;
        return function(correct){
            if(correct){
                sc++;
            } return sc;
        }
    }
    
    var keepScore = score();  // Keeping instance of score function to keep sc variable
    
    Question.prototype.checkAnswer = function (ans, callback) {
        var sc;
        if (ans == this.answer) {
            console.log("Correct answer..");
            sc = callback(true);
        } else {
            console.log("Wrong Answer !!");
            sc = callback(false);
        }
        this.displayScore(sc);
    }
    

    Question.prototype.displayScore = function (score) {
        console.log("Score is : ", score);
        console.log("------------------------------------------");
    }
    
    function run () {
            var q = Math.floor(Math.random() * questions.length);
            questions[q].displayQuestion();
            var ans = prompt("What's the answer ?");
            
            if(ans != 'exit'){    
                questions[q].checkAnswer(ans, keepScore);
                run();
            }
    }; 
    
    run();
    
    
})();