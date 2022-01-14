function compute()
{
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    
    let interest = parseInt(principal) * parseInt(rate) *parseInt(years)/ 100;
    let amount = parseInt( principal) + parseInt(interest);
    let year = new Date().getFullYear() + parseInt(years);
    
    if (parseInt(principal) <= 0){
        alert("Enter a positive number");
    }else{
        document.getElementById("result").innerHTML = 
            `If you deposit <mark> ${principal}</mark>,<br>
            at an interest rate of  <mark> ${rate}%</mark><br>
            You will receive an amount of  <mark> ${amount}</mark>,<br>
            in the year  <mark> ${year}</mark><br>`;
    }
    document.getElementById("principal").focus();
}

function updateRate()
{
    document.getElementById("rateValue").innerText=document.getElementById("rate").value + "%";
   // compute();
}

function fillTheBlanks(){
    document.getElementById("principal").innerText = "100";
}