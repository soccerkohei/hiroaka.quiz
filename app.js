const quiz = [
  {
    question: '昔からこの校訓が大嫌いだったよ！このセリフを言ったのは誰？',
    answers: [
      'オールマイト',
      'デク',
      'イレイザーヘッド',
      'エンデヴァー'
   ],
    correct: 'エンデヴァー'
  },{
    question:'君の！力じゃないか！！このセリフを言ったのは誰？',
    answers:['緑谷出久',
             '轟焦凍',
             '爆豪勝己',
             '東方仗助'
     ],
    correct:'緑谷出久'
  },{
    question:'全ては正しき社会の為に！このセリフを言ったのは誰？',
    answers:['死柄木弔',
             'ステイン',
             'トガヒミコ',
             '黒霧'
   ],
    correct:'ステイン'
  }
];
const quizLength = quiz.length;
let quizIndex =0;
let score =0;

//定数を定める
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
  
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex =0;
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength){
      $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
      buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解!');
    score++;
  } else{
    window.alert('不正解!');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //もし問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

let handlerIndex =0
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
handlerIndex++;
}
