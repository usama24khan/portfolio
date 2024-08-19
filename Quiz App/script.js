const ques = [
    {
        que: "Which planet in our solar system is known as the 'Red Planet'",
        option1:'Venus',
        option2:'Mars',
        option3:'Jupiter',
        option4:'Saturn',
        correct:'Mars'
    },{
        que: "Who is the current Prime Minister of United Kingdom",
        option1:'Boris Johnson',
        option2:'Theresa May',
        option3:'David Cameron',
        option4:'Tony Blair',
        correct:'Boris Johnson'
    },{
        que: "Which country is the largest producer of coffe in the world",
        option1:'Brazil',
        option2:'Colombia',
        option3:'Ethiopia',
        option4:'Vietnam',
        correct:'Brazil'
    },{
        que: "What is the capital of Australia",
        option1:'Sydney',
        option2:'Melbourne',
        option3:'Canberra',
        option4:'Perth',
        correct:'Canberra'
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
    questionBox.innerHTML = index+1 +":"+ques[index].que+"?";
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
        questionBox.innerHTML = index+1+":"+ ques[index].que +"?"
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