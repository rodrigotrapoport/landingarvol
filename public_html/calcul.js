

    function calcular(){
        var av_price = 2;
        var usd = document.getElementById("myInvestment").value;
        var total_av = usd/av_price;
        var carbon_anual = usd*0.0122;
        var carbon_credits_anual = carbon_anual*11;
        var returns_harvest = usd*0.2;
        var land_appreciation = usd*0.09;
        var in_5 = usd*0.5;
        var in_2 = usd*0.2;
        var in_1 = usd*0.1;
        
    //Obtienes el ids
        
        var total_amount_arvol= document.getElementById('total_amount_arvol');
        var carbon_capture= document.getElementById('carbon_capture');
        var carbon_credits_annual = document.getElementById('carbon_credits_annual');
   
        var returns_harvest_annual = document.getElementById('returns_harvest_annual');
        var land_appreciation_annual = document.getElementById('land_appreciation_annual');
        var inv_50 = document.getElementById('inv_50');
        var inv_w = document.getElementById('inv_w');
        var inv_c = document.getElementById('inv_c');
        var inv_o = document.getElementById('inv_o');


         //agrega los resultados al DOM
        total_amount_arvol.innerHTML = total_av.toFixed(2);
        carbon_capture.innerHTML =  carbon_anual.toFixed(2);
        carbon_credits_annual.innerHTML = carbon_credits_anual.toFixed(2);
        returns_harvest_annual.innerHTML = returns_harvest.toFixed(2);
        land_appreciation_annual.innerHTML = land_appreciation.toFixed(2); 
        inv_50.innerHTML = in_5.toFixed(2);
        inv_w.innerHTML = in_2.toFixed(2);
        inv_c.innerHTML = in_2.toFixed(2);
        inv_o.innerHTML = in_1.toFixed(2);
    }