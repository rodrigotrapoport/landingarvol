

    function calcular(){
        const av_price = 5;
        const usd = document.getElementById("myInvestment").value;
        const total_av = usd/av_price;
        const carbon_anual = usd*0.0122;
        const carbon_credits_anual = carbon_anual*11;
        const returns_harvest = usd*0.2;
        const land_appreciation = usd*0.09;
        const in_5 = usd*0.5;
        const in_2 = usd*0.2;
        const in_1 = usd*0.1;
        
    //Obtienes el ids
        
        const total_amount_arvol= document.getElementById('total_amount_arvol');
        const carbon_capture= document.getElementById('carbon_capture');
        const carbon_credits_annual = document.getElementById('carbon_credits_annual');
   
        const returns_harvest_annual = document.getElementById('returns_harvest_annual');
        const land_appreciation_annual = document.getElementById('land_appreciation_annual');
        const inv_50 = document.getElementById('inv_50');
        const inv_w = document.getElementById('inv_w');
        const inv_c = document.getElementById('inv_c');
        const inv_o = document.getElementById('inv_o');


         //agrega los resultados al DOM
        let n1 = parseFloat(total_av.toFixed(2));
        total_amount_arvol.innerHTML = n1.toLocaleString("en-IN");
        let n2 = parseFloat(carbon_anual.toFixed(2));
        carbon_capture.innerHTML =  n2.toLocaleString("en-IN");

        let n3 = parseFloat(carbon_credits_anual.toFixed(2));
        carbon_credits_annual.innerHTML = n3.toLocaleString("en-IN");
        let n4 = parseFloat(returns_harvest.toFixed(2));
        returns_harvest_annual.innerHTML = n4.toLocaleString("en-IN");
        let n5 = parseFloat(land_appreciation.toFixed(2));
        land_appreciation_annual.innerHTML = n5.toLocaleString("en-IN");
        let n6 =  parseFloat(in_5.toFixed(2));
        inv_50.innerHTML = n6.toLocaleString("en-IN");
        let n7 = parseFloat(in_2.toFixed(2));
        inv_w.innerHTML = n7.toLocaleString("en-IN");
        let n8 = parseFloat(in_2.toFixed(2));
        inv_c.innerHTML = n8.toLocaleString("en-IN");
        let n9 = parseFloat(in_1.toFixed(2));
        inv_o.innerHTML = n9.toLocaleString("en-IN");
    }