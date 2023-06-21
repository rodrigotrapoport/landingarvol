

    function calcular(){
        var av_price = 5.001;
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
        var n1 = parseFloat(total_av.toFixed(2));
        total_amount_arvol.innerHTML = n1.toLocaleString("en-IN");
        var n2 = parseFloat(carbon_anual.toFixed(2));
        carbon_capture.innerHTML =  n2.toLocaleString("en-IN");
        var n3 = parseFloat(carbon_credits_anual.toFixed(2));
        carbon_credits_annual.innerHTML = n3.toLocaleString("en-IN");
        var n4 = parseFloat(returns_harvest.toFixed(2));
        returns_harvest_annual.innerHTML = n4.toLocaleString("en-IN");
        var n5 = parseFloat(land_appreciation.toFixed(2));
        land_appreciation_annual.innerHTML = n5.toLocaleString("en-IN");
        var n6 =  parseFloat(in_5.toFixed(2));
        inv_50.innerHTML = n6.toLocaleString("en-IN");
        var n7 = parseFloat(in_2.toFixed(2));
        inv_w.innerHTML = n7.toLocaleString("en-IN");
        var n8 = parseFloat(in_2.toFixed(2));
        inv_c.innerHTML = n8.toLocaleString("en-IN");
        var n9 = parseFloat(in_1.toFixed(2));
        inv_o.innerHTML = n9.toLocaleString("en-IN");
    }