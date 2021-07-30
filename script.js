        }
    if (principal > 0) {
            document.getElementById("result").innerText=(
                "If you deposit " + principal + ",\nat an interest rate of " + rate + ".\nYou will recieve an amount of " + interest + ",\nin the year " + year
                );
        }

}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}    
