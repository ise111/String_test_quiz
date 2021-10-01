let quizIndex = 0;
let score = 0;
let damage = 0;
const h1 = document.querySelector('h1');
const intro = document.querySelector('.intro');
const ul = document.querySelector('ul');
const h2 = document.querySelector('h2');
const dammy = document.querySelector('.dammy');
const img = document.querySelector('img');
const comment = document.querySelector('.coment');
const js_question = document.querySelector('.js-question');
const result = document.querySelector('.result');
const report = document.querySelector('.report');
const btn_inv = document.querySelector('.btn-inv');
const man = document.querySelector('.man');
const true_answer = document.querySelector('.true-answer');
const quiz = string_quiz;
const quizLength = quiz.length;
let dammyAnswers = [];
for(let i = 1; i < quizLength; i++) {
  dammyAnswers.push(quiz[i].correct);
}
const shuffleDammyAnswers = Array => {
  const ary0 = Array;
  for(let i = ary0.length -1; 0 < i; i--) {
    let r = Math.floor(Math.random() * (i + 1));
    [ary0[i], ary0[r]] = [ary0[r], ary0[i]];
  }
return ary0;
}
let dammy_answers = dammyAnswers;
shuffleDammyAnswers(dammy_answers);

const shuffleQuiz = Array => {
  let ary = Array;
  for(let i = ary.length -1; 0 < i; i--) {
    let r = Math.floor(Math.random() * (i + 1));
    [ary[i], ary[r]] = [ary[r], ary[i]];
  }
return ary;
}

const finalAnswers = (Array1,Array2) => {
  let ary1 = Array1;
  const dmy_ans = Array2.slice(0, 3);
  ary1 = ary1.concat(dmy_ans);
  return ary1;
}

const shuffleQuizAnswers = Array => {
  let ary2 = Array;
  for(let i = ary2.length -1; 0 < i; i--) {
    let r = Math.floor(Math.random() * (i + 1));
    [ary2[i], ary2[r]] = [ary2[r], ary2[i]];
  }
return ary2;
}
shuffleQuiz(quiz);

const $button = document.getElementsByTagName('button');
const setupQuiz = () => {
  h1.textContent = `第${quizIndex + 1}問`;
  document.querySelector('.ques').textContent = quiz[quizIndex].question;
  document.querySelector('.bef').textContent = quiz[quizIndex].before;
  document.querySelector('.res').textContent = quiz[quizIndex].result;
  let answerNomber = 0;
  let acc_answers = [];
  for(let i = 0; i <= quizIndex; i++){
    acc_answers.push(quiz[i].correct);
  }
  console.log(quiz[quizIndex].correct);
  let filter_answers = acc_answers.concat(dammyAnswers);
  let incorrectAnswers = filter_answers.filter((answer, index, self) => {
     return self.indexOf(answer) == self.lastIndexOf(answer);
  });
  let final_answers = shuffleQuizAnswers(finalAnswers(quiz[quizIndex].answers, incorrectAnswers));
  while(answerNomber < $button.length){
    $button[answerNomber].textContent = final_answers[answerNomber];
    answerNomber++;
  }
};

function start() {
  intro.classList.add("stop");
  setupQuiz();
};
intro.addEventListener('click', start);

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    h1.classList.add("invisible");
    ul.classList.add("invisible");
    h2.classList.add("judgment");
    h2.classList.add("ok");
    h2.textContent = "正解";
    dammy.classList.add("front");
    score++;
  }else{
    h1.classList.add("invisible");
    ul.classList.add("invisible");
    h2.classList.add("judgment");
    h2.classList.add("ng");
    h2.textContent = "残念";
    true_answer.textContent = '答えは' + quiz[quizIndex].correct + 'です';
    dammy.classList.add("front");
    damage++
  }

  if(score >= 1 && score <= 3) {
    img.setAttribute('src', "images/trees-1587301_1280.jpg");
    comment.textContent =　'ハァ、ハァ、、ハァッ、、、！まだまだ道のりは長い！！';
  }else if(score >= 4 && score <= 5) {
    img.setAttribute('src', "images/mountain-547363_1280.jpg");
    comment.textContent =　'ハァ、ハァ、、ハァッ、、、！まだ折り返し！！';
  }else if(score >= 6 && score <= 7) {
    img.setAttribute('src', "images/forest-931706_1280.jpg");
    comment.textContent =　'ハァ、ハァ、、ハァッ、、、！ゴールは近いよ！！';
  }else if(score >= 8 && score <= 9) {
    img.setAttribute('src', "images/mountains-1303620_1280.jpg");
    comment.textContent =　'ハァ、ハァ、、ハァッ、、、！もうほぼゴールみたいなもん！！';
  }else if(score == 10) {
    img.setAttribute('src', "images/rock-4739036_1280.jpg");
    comment.textContent =　'やったーー！！！！';
  }else {
    comment.textContent =　'そんなこともある。。。';
  }

  if(damage == 1) {
    js_question.classList.add('dmg_one');
  }else if(damage == 2) {
    js_question.classList.remove('dmg_one');
    js_question.classList.add('dmg_two');
  }else if (damage == 3) {
    js_question.classList.remove('dmg_two');
    js_question.classList.add('dmg_three');
  }else if(damage == 4) {
    h1.classList.add("invisible");
    ul.classList.add("invisible");
    h2.textContent = "";
    result.textContent = '到達出来ず、、、' + score + '/' + '10です！';
    report.classList.add("result-open");
    btn_inv.classList.add("front-last");
    dammy.classList.remove("front");
    js_question.classList.remove('dmg_three');
    js_question.classList.add('dmg_four');
    man.classList.add("ng-talk");
  }
};

let handlerIndex = 0;
while (handlerIndex < $button.length) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

function next() {
  h1.classList.remove("invisible");
  ul.classList.remove("invisible");
  h2.classList.remove("judgment");
  h2.classList.remove("ok");
  h2.classList.remove("ng");
  h2.textContent = "";
  true_answer.textContent = "";
  dammy.classList.remove("front");
  
  if(score < 10){
    quizIndex++;
    setupQuiz();
  }else{
    quizIndex++;
    h1.classList.add("invisible");
    ul.classList.add("invisible");
    h2.textContent = "";
    result.textContent = '目的地に到達おめでとう！！！得点は' + score + '/' + quizIndex + 'です！';
    report.classList.add("result-open");
    btn_inv.classList.add("front-last");
    dammy.classList.remove("front");
    man.classList.add("ok-talk");
  }
  
};
dammy.addEventListener('click', next);
