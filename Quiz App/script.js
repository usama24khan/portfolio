const ques = [
    {
        que: "what is your name",
        option1:'usama',
        option2:'afsar',
        option3:'bilal',
        option4:'hamza',
        correct:'usama'
    },{
        que: "what is your father name",
        option1:'sherin',
        option2:'nasir',
        option3:'salam',
        option4:'bashir',
        correct:'sherin'
    },{
        que: "what is your brother name",
        option1:'haider',
        option2:'hamza',
        option3:'sultan',
        option4:'sana',
        correct:'hamza'
    },{
        que: "what is your friend's name",
        option1:'afsar',
        option2:'saqlain',
        option3:'haider',
        option4:'azmat',
        correct:'afsar'
    }
]

let nextBtn = document.getElementById('btn')
let questionBox= document.getElementById('question')
let option1 = document.getElementById('option1')
let option2 = document.getElementById('option2')
let option3 = document.getElementById('option3')
let option4 = document.getElementById('option4')


showQue();
// -------------------showQuestions-funstion-------------------
score = 0;  
nextBtn.style.cursor = "not-allowed"





function showQue(){
    nextBtn.disabled = true;
    index = 0;
    questionBox.innerHTML = index+1 +" "+ques[index].que+"?";
    option1.innerHTML+= ques[index].option1
    option2.innerHTML+= ques[index].option2
    option3.innerHTML+= ques[index].option3
    option4.innerHTML+= ques[index].option4
    // -----------------OptionBtn-------------------------------

let optionBtns = document.querySelectorAll('.options')
optionBtns.forEach((optionbtn)=>{
    
    optionbtn.addEventListener('click',()=>{
        nextBtn.disabled = false;
        nextBtn.style.cursor = "pointer"
        disableFunc()
        optionbtn.classList.add('selected')
        
     if(optionbtn.textContent == ques[index].correct){
        score++;
        console.log(score);
       console.log(ques[index].correct)
       console.log(optionbtn.textContent);
    }else{
        console.log(score)
        console.log( ques[index].correct)
        console.log(optionbtn.textContent);
     }


     })
     
})
}


// -----------------------NextBtn-------------------------------
nextBtn.addEventListener('click',()=>{
    
    if(index < 3){

        let optionBtns = document.querySelectorAll('.options')
        optionBtns.forEach(btn=>{
            btn.disabled= false;
            btn.classList.remove('selected')
        })
        
        
        nextBtn.style.cursor = "not-allowed"
        nextBtn.disabled = true;
      index++;
        questionBox.innerHTML = index+1+" "+ ques[index].que +"?"
        option1.innerHTML = ``
        option1.innerHTML+= ques[index].option1
        option2.innerHTML = ``
        option2.innerHTML+= ques[index].option2
        option3.innerHTML = ``
        option3.innerHTML+= ques[index].option3
        option4.innerHTML = ``
        option4.innerHTML+= ques[index].option4
        
    }else{
        nextBtn.disabled = false;
        nextBtn.style.cursor = "pointer"
        showScore()
       
    }
    
})
function showScore(){
    let quizApp= document.getElementById('quiz-app')
    quizApp.classList.add('score')
    quizApp.innerHTML = `
    <h2> Your Score is ${score} Out of 4</h1>
    `
    
    nextBtn.disabled = false
    nextBtn.style.cursor = "pointer"
nextBtn.innerHTML = "Restart the Quiz"
nextBtn.classList.add('restart')
let restart = document.querySelector('.restart')
restart.addEventListener('click',()=>{
    window.location.reload()
})
}           
// -------------disable function--------------------------                                                                                                                                                                                                                                                            
function disableFunc(){
    let optionBtns = document.querySelectorAll('.options')
optionBtns.forEach(btn=>{
    btn.disabled = true
})}