//Login Button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

// Deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click",function(){
    const depositNumber = getInputNumber("depositAmount");
    //Deposit span
    updateSpanText("currentDeposit",depositNumber);
    //Balance span  
    updateSpanText("currentBalance",depositNumber);

    document.getElementById("depositAmount").value = "";
})

//Withdraw button event handler.
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click",function(){
    const withdrawNumber = getInputNumber("withdrawAmount");
    //Withdraw Span
    updateSpanText("currentWithdraw",withdrawNumber);
    //Balance Span
    updateSpanText("currentBalance", -1 * withdrawNumber);

    document.getElementById("withdrawAmount").value = "";
})



function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const Number = parseFloat(Amount);
    return Number;
}


function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalNumber = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalNumber;
}