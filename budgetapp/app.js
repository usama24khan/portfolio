let des = document.getElementById('des');
let value = document.getElementById('value');
let addBtn = document.getElementById('add-btn');
let options = document.querySelectorAll('.options');
let incomeList = document.getElementById('income-list');
let expenseList = document.getElementById('expense-list');
let totalIncome = document.querySelector('.total-income');
let totalExpense = document.querySelector('.total-expense');
let totalBudg = document.querySelector('.total-budget');
let currentIncome = 0;
let currentExpense = 0;
// ---------------Income updating----------------
function updateBudgetIncome(num){
     currentIncome += num;
     totalIncome.innerHTML = `${currentIncome}`;
     
}

// ---------------Expense updating----------------
function updateBudgetExpense(num){
     currentExpense += num;
     totalExpense.innerHTML = `${currentExpense}`;

}
// ------------------------deleting income------------------

function deleteIncome(){
     let incomeValuesNode =document.querySelectorAll('.income-value')
     let incomValues = Array.from(incomeValuesNode)
     totalIncome.innerText = " "
     totalRemValues= 0;
     incomValues.forEach((val)=>{
          delval = parseInt(val.innerText)
          totalRemValues+= delval
     
     })
     totalIncome.innerHTML= `${totalRemValues}`
  
  updateTotalBudget()
  }
  // -------------------deleting expense---------------------------------
  function deleteExpense(){
       let expenseValueNode= document.querySelectorAll('.expense-value')
       let expenseValues = Array.from(expenseValueNode)
       totalExpense.innerText = " "
     totalRemValues= 0;
       expenseValues.forEach((val)=>{
          delval = parseInt(val.innerText)
          totalRemValues+= delval
       })
       totalExpense.innerHTML= `${totalRemValues}`
       updateTotalBudget()
  }
// ---------------------Total Budget updating -------------------
function updateTotalBudget(){
     totalIncomeVal = parseInt(totalIncome.innerHTML)
     totalExpenseVal = parseInt(totalExpense.innerHTML)
     if(isNaN(totalExpenseVal)){
         totalExpenseVal = 0
         console.log('working')
         totalBudg.innerHTML = totalIncomeVal
     }else{

          totalBudgetValue = totalIncomeVal - totalExpenseVal
          totalBudg.innerHTML = `${totalBudgetValue}`
     }
      
}


addBtn.addEventListener('click', () => {
     let description = des.value;
     let numVal = parseFloat(value.value);
     options.forEach(val => {
          if (val.selected) {
               if (val.value == '+') {
                    document.querySelector('.budget-plus').style.display= " block"
                    document.querySelector('.income-lable').style.display = 'block'
                 updateBudgetIncome(numVal)
                    let li = document.createElement('li');
                    let span = document.createElement('span');
                    span.classList.add('income-value')
                    let deleteButton = document.createElement('button')
                    deleteButton.classList.add('del-btn')
                    deleteButton.addEventListener('click',()=>{
                         let parent = deleteButton.parentElement
                         let val = parseInt(parent.lastChild.innerText)
                         parent.remove()
                         deleteIncome()
                    })
                    incomeList.appendChild(li);
                    deleteButton.innerText = 'X'
                    li.innerHTML = description;
                    li.appendChild(deleteButton)
                    li.appendChild(span);
                    span.innerHTML = ` ${numVal}`;
                    
                    des.value = "";
                    value.value = "";
               } else {
                    document.querySelector('.expense-lable').style.display = 'block'
                    updateBudgetExpense(numVal)
                    let li = document.createElement('li');
                    let span = document.createElement('span');
                    span.classList.add('expense-value')
                    expenseList.appendChild(li);
                    let deleteButton = document.createElement('button')
                    deleteButton.classList.add('del-btn')
                    deleteButton.addEventListener('click',()=>{
                         let parent = deleteButton.parentElement
                         let val = parseInt(parent.lastChild.innerText)
                         parent.remove()
                         deleteExpense()
                         // updateBudget(val)
                    })
                    expenseList.appendChild(li);
                    deleteButton.innerText = 'X'
                    li.innerHTML = description;
                    li.appendChild(deleteButton)
                    li.appendChild(span);
                    span.innerHTML = ` ${numVal}`;

                    des.value = "";
                    value.value = "";
               }
                    
               let totalBudgetValue = currentIncome - currentExpense;
               updateTotalBudget(currentIncome,currentExpense)
               
          }
     });

     
});

// ------------------design ------------
  des.addEventListener('click',()=>{
     optionsArr = Array.from(options)
     console.log('input par click huwa')
optionsArr.forEach((val)=>{
          if(val.selected){
               if(val.value == "+"){
               document.getElementById('des').style.border = '2px solid lightgreen'
               value.style.border = "2px solid lightgreen"
               }else{
                    document.getElementById('des').style.border = '2px solid red'
                    value.style.border = '2px solid red'
               }
          }


    
     
     

})
  } )
