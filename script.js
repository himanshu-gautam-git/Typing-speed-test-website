const setOfWords = ["Clothes make the man. Naked people have little or no influence on society. - Mark Twain",
    "But what is the difference between literature and journalism? Journalism is unreadable and literature is not read. - Oscar Wilde",
    "Be careful about reading health books. You may die of a misprint. - Mark Twain",
    "To die for an idea;it is unquestionably noble.But how much nobler it would be if men died for ideas that were true! - H. L. Mencken",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. - Gandhi",
    "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better. - Samuel Beckett",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn. - Benjamin Franklin",
    "It doesn't matter how slowly you go as long as you do not stop. - Confucius",
    "Be the change that you wish to see in the world.- Mahatma Gandhi",
    "Always forgive your enemies; nothing annoys them so much. - Oscar Wilde"]

const msg = document.getElementById('msg');
const typedwords = document.getElementById('myWords'); 
const btn = document.getElementById('btn');  
let startTime, endTime;

typedwords.disabled = true;

const startType = () =>{
    typedwords.value = '';
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText=setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText= 'Done';
}

const stopType = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);
    let totalStr=typedwords.value;
    let wordCount = wordCounter(totalStr);
    let speed = Math.round((wordCount/totalTime)*60); 
    let finalMsg = " You typed total "+speed+" words per minute. ";
    finalMsg+=compareWords(msg.innerText, totalStr);
    msg.innerText= finalMsg;
}

const compareWords = (str1,str2) =>{
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let cnt=0;

  words1.forEach(function (item, index){
      if(item==words2[index])
      {
          cnt++;
      }
  })
  let errorWords = (words1.length - cnt);
  return (cnt + " are correct out of " + words1.length + " words and the total number of errors are "+ errorWords + " . " );
}
const wordCounter = (str) =>{
    let response = str.split(" ").length;
    return response;
}

btn.addEventListener('click', function () {
    if(this.innerText == 'Start')
    {
       typedwords.disabled = false;
       startType();
    }
    else if(this.innerText == 'Done')
    {
        typedwords.disabled = true;
        stopType();
        btn.innerText= 'Start';
    }
})
