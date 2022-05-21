

    function calcular(){
        var av_price = 5.001;
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
        total_amount_arvol.innerHTML = Number(total_av.toFixed(2));
        carbon_capture.innerHTML =  Number(carbon_anual.toFixed(2));
        carbon_credits_annual.innerHTML = Number(carbon_credits_anual.toFixed(2));
        returns_harvest_annual.innerHTML = Number(returns_harvest.toFixed(2));
        land_appreciation_annual.innerHTML = Number(land_appreciation.toFixed(2)); 
    
    }