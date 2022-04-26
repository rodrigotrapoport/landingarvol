

    function calcular(){
        var av_price = 1.8299;
        var usd = document.getElementById("myInvestment").value;
        var total_av = usd/av_price;
        var carbon_anual = usd*0.0122;
        var carbon_credits_anual = carbon_anual*11;
        var returns_harvest = usd*0.2;
        var land_appreciation = usd*0.09;
    //Obtienes el ids
        
        var total_amount_arvol= document.getElementById('total_amount_arvol');
        var carbon_capture= document.getElementById('carbon_capture');
        var carbon_credits_annual = document.getElementById('carbon_credits_annual');
   
        var returns_harvest_annual = document.getElementById('returns_harvest_annual');
        var land_appreciation_annual = document.getElementById('land_appreciation_annual');


         //agrega los resultados al DOM
        total_amount_arvol.innerHTML = total_av;
        carbon_capture.innerHTML =  carbon_anual;
        carbon_credits_annual.innerHTML = carbon_credits_anual;
        returns_harvest_annual.innerHTML = returns_harvest;
        land_appreciation_annual.innerHTML = land_appreciation; 
    
    }