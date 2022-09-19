const loginArea = document.getElementById('login-area'),
   dashboard = document.getElementById('dashbord'),
   deposit = document.getElementById('deposit'),
   withdraw = document.getElementById('withdraw'),
   balance = document.getElementById('balance'),
   depositInput = document.getElementById('deposit-input'),
   depositBtn = document.getElementById('deposit-btn'),
   withdrawInput = document.getElementById('withdraw-input'),
   withdrawBtn = document.getElementById('withdraw-btn'),
   submitBtn = document.getElementById('submit-btn');


   submitBtn.addEventListener('click', () => {
    loginArea.style.display = 'none';
    dashboard.classList.remove('d-none');
   })

   depositBtn.addEventListener('click', () => {
    const value = depositInput.value;
    alert("Transcation Successful");
    const depositValue = Number(deposit.innerText) + Number(value);
    const balanceValue = Number(balance.innerText) + Number(value);
    deposit.innerText = depositValue;
    balance.innerText = balanceValue;
    depositInput.value = '';
   })

   withdrawBtn.addEventListener('click', () => {
    const value = withdrawInput.value;
    if(Number(value) == 0){
        alert("Insufficent Balance!!!");
    }else if (Number(value) > Number(balance.innerText)){
        alert("insufficent Balance!!!");
    }else{
        const withdrawValue = Number(withdraw.innerText) + Number(value);
    const balanceValue = Number(balance.innerText) - Number(value);
    withdraw.innerText = withdrawValue;
    balance.innerText = balanceValue;
    withdrawInput.value = '';
    }
   })