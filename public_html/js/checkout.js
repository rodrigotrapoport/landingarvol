function ShowSelected(){
    var cod = document.getElementById("amount_arvol").value;
     
    htmlgt = document.getElementById("gateway")
    if (cod==1){ 
        htmlgt.innerHTML = `<div class="col-12 text-center">
                <a href="https://mpago.la/1xo45zQ" target="_blank" rel="noopener noreferrer"><img src="images/mercadopago.png" alt=""></a>
                <br><br><br>
              </div>
              <div class="col-12  text-center">
                <form action="https://www.coinpayments.net/index.php" method="post">
                  <input type="hidden" name="cmd" value="_pay_simple">
                  <input type="hidden" name="reset" value="1">
                  <input type="hidden" name="merchant" value="95346314138105be146a6c059c7030a7">
                  <input type="hidden" name="item_name" value="Arvol">
                  <input type="hidden" name="item_desc" value="1 token Arvol.">
                  <input type="hidden" name="currency" value="USD">
                  <input type="hidden" name="amountf" value="5.00000000">
                  <input type="hidden" name="want_shipping" value="0">
                  <input type="hidden" name="success_url" value="arvol.io/success.html">
                  <input type="hidden" name="cancel_url" value="arvol.io/cancel.html">
                  <input type="image" src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                    alt="Comprar ahora con CoinPayments.net">
                </form>
              </div>`
    } else if (cod == 2) {
        htmlgt.innerHTML = `<div class="col-12 text-center">
                <a href="https://mpago.la/268fH5t" target="_blank" rel="noopener noreferrer"><img src="images/mercadopago.png" alt=""></a>
                <br><br><br>
              </div>
              <div class="col-12  text-center">
                <form action="https://www.coinpayments.net/index.php" method="post">
                  <input type="hidden" name="cmd" value="_pay_simple">
                  <input type="hidden" name="reset" value="1">
                  <input type="hidden" name="merchant" value="95346314138105be146a6c059c7030a7">
                  <input type="hidden" name="item_name" value="Arvol">
                  <input type="hidden" name="item_desc" value="2 tokens Arvol.">
                  <input type="hidden" name="currency" value="USD">
                  <input type="hidden" name="amountf" value="15.00000000">
                  <input type="hidden" name="want_shipping" value="0">
                  <input type="hidden" name="success_url" value="arvol.io/success.html">
                  <input type="hidden" name="cancel_url" value="arvol.io/cancel.html">
                  <input type="image" src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                    alt="Comprar ahora con CoinPayments.net">
                </form>
              </div>`
    } else if (cod == 3) {
        htmlgt.innerHTML = `<div class="col-12 text-center">
                <a href="https://mpago.la/1JaaADo" target="_blank" rel="noopener noreferrer"><img src="images/mercadopago.png" alt=""></a>
                <br><br><br>
              </div>
              <div class="col-12  text-center">
                <form action="https://www.coinpayments.net/index.php" method="post">
                  <input type="hidden" name="cmd" value="_pay_simple">
                  <input type="hidden" name="reset" value="1">
                  <input type="hidden" name="merchant" value="95346314138105be146a6c059c7030a7">
                  <input type="hidden" name="item_name" value="Arvol">
                  <input type="hidden" name="item_desc" value="3 tokens Arvol.">
                  <input type="hidden" name="currency" value="USD">
                  <input type="hidden" name="amountf" value="15.00000000">
                  <input type="hidden" name="want_shipping" value="0">
                  <input type="hidden" name="success_url" value="arvol.io/success.html">
                  <input type="hidden" name="cancel_url" value="arvol.io/cancel.html">
                  <input type="image" src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                    alt="Comprar ahora con CoinPayments.net">
                </form>
              </div>`
    } else if (cod == 4) {
        htmlgt.innerHTML = `<div class="col-12 text-center">
                <a href="https://mpago.la/1bziqKi" target="_blank" rel="noopener noreferrer"><img src="images/mercadopago.png" alt=""></a>
                <br><br><br>
              </div>
              <div class="col-12  text-center">
                <form action="https://www.coinpayments.net/index.php" method="post">
                  <input type="hidden" name="cmd" value="_pay_simple">
                  <input type="hidden" name="reset" value="1">
                  <input type="hidden" name="merchant" value="95346314138105be146a6c059c7030a7">
                  <input type="hidden" name="item_name" value="Arvol">
                  <input type="hidden" name="item_desc" value="4 tokens Arvol.">
                  <input type="hidden" name="currency" value="USD">
                  <input type="hidden" name="amountf" value="20.00000000">
                  <input type="hidden" name="want_shipping" value="0">
                  <input type="hidden" name="success_url" value="arvol.io/success.html">
                  <input type="hidden" name="cancel_url" value="arvol.io/cancel.html">
                  <input type="image" src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                    alt="Comprar ahora con CoinPayments.net">
                </form>
              </div>`
    } else if (cod == 5) {
        htmlgt.innerHTML = `<div class="col-12 text-center">
                <a href="https://mpago.la/32pK9Qn" target="_blank" rel="noopener noreferrer"><img src="images/mercadopago.png" alt=""></a>
                <br><br><br>
              </div>
              <div class="col-12  text-center">
                <form action="https://www.coinpayments.net/index.php" method="post">
                  <input type="hidden" name="cmd" value="_pay_simple">
                  <input type="hidden" name="reset" value="1">
                  <input type="hidden" name="merchant" value="95346314138105be146a6c059c7030a7">
                  <input type="hidden" name="item_name" value="Arvol">
                  <input type="hidden" name="item_desc" value="5 tokens Arvol.">
                  <input type="hidden" name="currency" value="USD">
                  <input type="hidden" name="amountf" value="25.00000000">
                  <input type="hidden" name="want_shipping" value="0">
                  <input type="hidden" name="success_url" value="arvol.io/success.html">
                  <input type="hidden" name="cancel_url" value="arvol.io/cancel.html">
                  <input type="image" src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                    alt="Comprar ahora con CoinPayments.net">
                </form>
              </div>`
    } else if (cod == 10) {
        htmlgt.innerHTML = `<div class="col-12 text-center">
                <a href="https://mpago.la/2ZRJ6hi" target="_blank" rel="noopener noreferrer"><img src="images/mercadopago.png" alt=""></a>
                <br><br><br>
              </div>
              <div class="col-12  text-center">
                <form action="https://www.coinpayments.net/index.php" method="post">
                  <input type="hidden" name="cmd" value="_pay_simple">
                  <input type="hidden" name="reset" value="1">
                  <input type="hidden" name="merchant" value="95346314138105be146a6c059c7030a7">
                  <input type="hidden" name="item_name" value="Arvol">
                  <input type="hidden" name="item_desc" value="10 tokens Arvol.">
                  <input type="hidden" name="currency" value="USD">
                  <input type="hidden" name="amountf" value="50.00000000">
                  <input type="hidden" name="want_shipping" value="0">
                  <input type="hidden" name="success_url" value="arvol.io/success.html">
                  <input type="hidden" name="cancel_url" value="arvol.io/cancel.html">
                  <input type="image" src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                    alt="Comprar ahora con CoinPayments.net">
                </form>
              </div>`
    } else if (cod == 20) {
        htmlgt.innerHTML = `<div class="col-12 text-center">
                <a href="https://mpago.la/2krVMBo" target="_blank" rel="noopener noreferrer"><img src="images/mercadopago.png" alt=""></a>
                <br><br><br>
              </div>
              <div class="col-12  text-center">
                <form action="https://www.coinpayments.net/index.php" method="post">
                  <input type="hidden" name="cmd" value="_pay_simple">
                  <input type="hidden" name="reset" value="1">
                  <input type="hidden" name="merchant" value="95346314138105be146a6c059c7030a7">
                  <input type="hidden" name="item_name" value="Arvol">
                  <input type="hidden" name="item_desc" value="20 tokens Arvol.">
                  <input type="hidden" name="currency" value="USD">
                  <input type="hidden" name="amountf" value="100.00000000">
                  <input type="hidden" name="want_shipping" value="0">
                  <input type="hidden" name="success_url" value="arvol.io/success.html">
                  <input type="hidden" name="cancel_url" value="arvol.io/cancel.html">
                  <input type="image" src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                    alt="Comprar ahora con CoinPayments.net">
                </form>
              </div>`
    } else if (cod == 50) {
        htmlgt.innerHTML = `<div class="col-12 text-center">
                <a href="https://mpago.la/1X6wLRM" target="_blank" rel="noopener noreferrer"><img src="images/mercadopago.png" alt=""></a>
                <br><br><br>
              </div>
              <div class="col-12  text-center">
                <form action="https://www.coinpayments.net/index.php" method="post">
                  <input type="hidden" name="cmd" value="_pay_simple">
                  <input type="hidden" name="reset" value="1">
                  <input type="hidden" name="merchant" value="95346314138105be146a6c059c7030a7">
                  <input type="hidden" name="item_name" value="Arvol">
                  <input type="hidden" name="item_desc" value="50 tokens Arvol.">
                  <input type="hidden" name="currency" value="USD">
                  <input type="hidden" name="amountf" value="250.00000000">
                  <input type="hidden" name="want_shipping" value="0">
                  <input type="hidden" name="success_url" value="arvol.io/success.html">
                  <input type="hidden" name="cancel_url" value="arvol.io/cancel.html">
                  <input type="image" src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                    alt="Comprar ahora con CoinPayments.net">
                </form>
              </div>`
    } else if (cod == 100) {
        htmlgt.innerHTML = `<div class="col-12 text-center">
                <a href="https://mpago.la/2PxFcdf" target="_blank" rel="noopener noreferrer"><img src="images/mercadopago.png" alt=""></a>
                <br><br><br>
              </div>
              <div class="col-12  text-center">
                <form action="https://www.coinpayments.net/index.php" method="post">
                  <input type="hidden" name="cmd" value="_pay_simple">
                  <input type="hidden" name="reset" value="1">
                  <input type="hidden" name="merchant" value="95346314138105be146a6c059c7030a7">
                  <input type="hidden" name="item_name" value="Arvol">
                  <input type="hidden" name="item_desc" value="100 tokens Arvol.">
                  <input type="hidden" name="currency" value="USD">
                  <input type="hidden" name="amountf" value="500.00000000">
                  <input type="hidden" name="want_shipping" value="0">
                  <input type="hidden" name="success_url" value="arvol.io/success.html">
                  <input type="hidden" name="cancel_url" value="arvol.io/cancel.html">
                  <input type="image" src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                    alt="Comprar ahora con CoinPayments.net">
                </form>
              </div>`
    } else if (cod == 200) {
        htmlgt.innerHTML = `<div class="col-12 text-center">
                <a href="https://mpago.la/1GJY6c9" target="_blank" rel="noopener noreferrer"><img src="images/mercadopago.png" alt=""></a>
                <br><br><br>
              </div>
              <div class="col-12  text-center">
                <form action="https://www.coinpayments.net/index.php" method="post">
                  <input type="hidden" name="cmd" value="_pay_simple">
                  <input type="hidden" name="reset" value="1">
                  <input type="hidden" name="merchant" value="95346314138105be146a6c059c7030a7">
                  <input type="hidden" name="item_name" value="Arvol">
                  <input type="hidden" name="item_desc" value="200 tokens Arvol.">
                  <input type="hidden" name="currency" value="USD">
                  <input type="hidden" name="amountf" value="1000.00000000">
                  <input type="hidden" name="want_shipping" value="0">
                  <input type="hidden" name="success_url" value="arvol.io/success.html">
                  <input type="hidden" name="cancel_url" value="arvol.io/cancel.html">
                  <input type="image" src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                    alt="Comprar ahora con CoinPayments.net">
                </form>
              </div>`
    } else if (cod == 500) {
        htmlgt.innerHTML = `<div class="col-12 text-center">
                <a href="https://mpago.la/2efT4TT" target="_blank" rel="noopener noreferrer"><img src="images/mercadopago.png" alt=""></a>
                <br><br><br>
              </div>
              <div class="col-12  text-center">
                <form action="https://www.coinpayments.net/index.php" method="post">
                  <input type="hidden" name="cmd" value="_pay_simple">
                  <input type="hidden" name="reset" value="1">
                  <input type="hidden" name="merchant" value="95346314138105be146a6c059c7030a7">
                  <input type="hidden" name="item_name" value="Arvol">
                  <input type="hidden" name="item_desc" value="500 tokens Arvol.">
                  <input type="hidden" name="currency" value="USD">
                  <input type="hidden" name="amountf" value="2500.00000000">
                  <input type="hidden" name="want_shipping" value="0">
                  <input type="hidden" name="success_url" value="arvol.io/success.html">
                  <input type="hidden" name="cancel_url" value="arvol.io/cancel.html">
                  <input type="image" src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                    alt="Comprar ahora con CoinPayments.net">
                </form>
              </div>`
    } else if (cod == 1000) {
        htmlgt.innerHTML = `<div class="col-12 text-center">
                <a href="https://mpago.la/1J4p3nF" target="_blank" rel="noopener noreferrer"><img src="images/mercadopago.png" alt=""></a>
                <br><br><br>
              </div>
              <div class="col-12  text-center">
                <form action="https://www.coinpayments.net/index.php" method="post">
                  <input type="hidden" name="cmd" value="_pay_simple">
                  <input type="hidden" name="reset" value="1">
                  <input type="hidden" name="merchant" value="95346314138105be146a6c059c7030a7">
                  <input type="hidden" name="item_name" value="Arvol">
                  <input type="hidden" name="item_desc" value="1000 tokens Arvol.">
                  <input type="hidden" name="currency" value="USD">
                  <input type="hidden" name="amountf" value="5000.00000000">
                  <input type="hidden" name="want_shipping" value="0">
                  <input type="hidden" name="success_url" value="arvol.io/success.html">
                  <input type="hidden" name="cancel_url" value="arvol.io/cancel.html">
                  <input type="image" src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                    alt="Comprar ahora con CoinPayments.net">
                </form>
              </div>`
    } else  {
        console.log("Make the chooise!");
    }
}
/*  

                                                                                                                                                                                    5 Arvol
                                                                                                                                                                                    MP https://mpago.la/32pK9Qn
                                                                                                                                                                                    CP
                                                                                                                                                                                    <form action="https://www.coinpayments.net/index.php" method="post">
                                                                                                                                                                                        <input type="hidden" name="cmd" value="_pay_simple">
                                                                                                                                                                                            <input type="hidden" name="reset" value="1">
                                                                                                                                                                                                <input type="hidden" name="merchant" value="95346314138105be146a6c059c7030a7">
                                                                                                                                                                                                    <input type="hidden" name="item_name" value="Arvol">
                                                                                                                                                                                                        <input type="hidden" name="item_desc" value="5 tokens Arvol.">
                                                                                                                                                                                                            <input type="hidden" name="currency" value="USD">
                                                                                                                                                                                                                <input type="hidden" name="amountf" value="25.00000000">
                                                                                                                                                                                                                    <input type="hidden" name="want_shipping" value="0">
                                                                                                                                                                                                                        <input type="hidden" name="success_url" value="arvol.io/success.html">
                                                                                                                                                                                                                            <input type="hidden" name="cancel_url" value="arvol.io/cancel.html">
                                                                                                                                                                                                                                <input type="image" src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                                                                                                                                                                                                                                    alt="Comprar ahora con CoinPayments.net">
                                                                                                                                                                                                                                </form>

                                                                                                                                                                                                                                10 Arvol
                                                                                                                                                                                                                                MP https://mpago.la/2ZRJ6hi
                                                                                                                                                                                                                                CP
                                                                                                                                                                                                                                <form action="https://www.coinpayments.net/index.php" method="post">
                                                                                                                                                                                                                                    <input type="hidden" name="cmd" value="_pay_simple">
                                                                                                                                                                                                                                        <input type="hidden" name="reset" value="1">
                                                                                                                                                                                                                                            <input type="hidden" name="merchant" value="95346314138105be146a6c059c7030a7">
                                                                                                                                                                                                                                                <input type="hidden" name="item_name" value="Arvol">
                                                                                                                                                                                                                                                    <input type="hidden" name="item_desc" value="10 tokens Arvol.">
                                                                                                                                                                                                                                                        <input type="hidden" name="currency" value="USD">
                                                                                                                                                                                                                                                            <input type="hidden" name="amountf" value="50.00000000">
                                                                                                                                                                                                                                                                <input type="hidden" name="want_shipping" value="0">
                                                                                                                                                                                                                                                                    <input type="hidden" name="success_url" value="arvol.io/success.html">
                                                                                                                                                                                                                                                                        <input type="hidden" name="cancel_url" value="arvol.io/cancel.html">
                                                                                                                                                                                                                                                                            <input type="image" src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                                                                                                                                                                                                                                                                                alt="Comprar ahora con CoinPayments.net">
                                                                                                                                                                                                                                                                            </form>

                                                                                                                                                                                                                                                                            20 Arvol
                                                                                                                                                                                                                                                                            MP https://mpago.la/2krVMBo
                                                                                                                                                                                                                                                                            CP
                                                                                                                                                                                                                                                                            <form action="https://www.coinpayments.net/index.php" method="post">
                                                                                                                                                                                                                                                                                <input type="hidden" name="cmd" value="_pay_simple">
                                                                                                                                                                                                                                                                                    <input type="hidden" name="reset" value="1">
                                                                                                                                                                                                                                                                                        <input type="hidden" name="merchant" value="95346314138105be146a6c059c7030a7">
                                                                                                                                                                                                                                                                                            <input type="hidden" name="item_name" value="Arvol">
                                                                                                                                                                                                                                                                                                <input type="hidden" name="item_desc" value="20 tokens Arvol.">
                                                                                                                                                                                                                                                                                                    <input type="hidden" name="currency" value="USD">
                                                                                                                                                                                                                                                                                                        <input type="hidden" name="amountf" value="100.00000000">
                                                                                                                                                                                                                                                                                                            <input type="hidden" name="want_shipping" value="0">
                                                                                                                                                                                                                                                                                                                <input type="hidden" name="success_url" value="arvol.io/success.html">
                                                                                                                                                                                                                                                                                                                    <input type="hidden" name="cancel_url" value="arvol.io/cancel.html">
                                                                                                                                                                                                                                                                                                                        <input type="image" src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                                                                                                                                                                                                                                                                                                                            alt="Comprar ahora con CoinPayments.net">
                                                                                                                                                                                                                                                                                                                        </form>

                                                                                                                                                                                                                                                                                                                        50 Arvol
                                                                                                                                                                                                                                                                                                                        MP https://mpago.la/1X6wLRM
                                                                                                                                                                                                                                                                                                                        CP
                                                                                                                                                                                                                                                                                                                        <form action="https://www.coinpayments.net/index.php" method="post">
                                                                                                                                                                                                                                                                                                                            <input type="hidden" name="cmd" value="_pay_simple">
                                                                                                                                                                                                                                                                                                                                <input type="hidden" name="reset" value="1">
                                                                                                                                                                                                                                                                                                                                    <input type="hidden" name="merchant" value="95346314138105be146a6c059c7030a7">
                                                                                                                                                                                                                                                                                                                                        <input type="hidden" name="item_name" value="Arvol">
                                                                                                                                                                                                                                                                                                                                            <input type="hidden" name="item_desc" value="50 tokens Arvol.">
                                                                                                                                                                                                                                                                                                                                                <input type="hidden" name="currency" value="USD">
                                                                                                                                                                                                                                                                                                                                                    <input type="hidden" name="amountf" value="250.00000000">
                                                                                                                                                                                                                                                                                                                                                        <input type="hidden" name="want_shipping" value="0">
                                                                                                                                                                                                                                                                                                                                                            <input type="hidden" name="success_url" value="arvol.io/success.html">
                                                                                                                                                                                                                                                                                                                                                                <input type="hidden" name="cancel_url" value="arvol.io/cancel.html">
                                                                                                                                                                                                                                                                                                                                                                    <input type="image" src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                                                                                                                                                                                                                                                                                                                                                                        alt="Comprar ahora con CoinPayments.net">
                                                                                                                                                                                                                                                                                                                                                                    </form>

                                                                                                                                                                                                                                                                                                                                                                    100 Arvol
                                                                                                                                                                                                                                                                                                                                                                    MP https://mpago.la/2PxFcdf
                                                                                                                                                                                                                                                                                                                                                                    CP
                                                                                                                                                                                                                                                                                                                                                                    <form action="https://www.coinpayments.net/index.php" method="post">
                                                                                                                                                                                                                                                                                                                                                                        <input type="hidden" name="cmd" value="_pay_simple">
                                                                                                                                                                                                                                                                                                                                                                            <input type="hidden" name="reset" value="1">
                                                                                                                                                                                                                                                                                                                                                                                <input type="hidden" name="merchant" value="95346314138105be146a6c059c7030a7">
                                                                                                                                                                                                                                                                                                                                                                                    <input type="hidden" name="item_name" value="Arvol">
                                                                                                                                                                                                                                                                                                                                                                                        <input type="hidden" name="item_desc" value="100 tokens Arvol.">
                                                                                                                                                                                                                                                                                                                                                                                            <input type="hidden" name="currency" value="USD">
                                                                                                                                                                                                                                                                                                                                                                                                <input type="hidden" name="amountf" value="500.00000000">
                                                                                                                                                                                                                                                                                                                                                                                                    <input type="hidden" name="want_shipping" value="0">
                                                                                                                                                                                                                                                                                                                                                                                                        <input type="hidden" name="success_url" value="arvol.io/success.html">
                                                                                                                                                                                                                                                                                                                                                                                                            <input type="hidden" name="cancel_url" value="arvol.io/cancel.html">
                                                                                                                                                                                                                                                                                                                                                                                                                <input type="image" src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                                                                                                                                                                                                                                                                                                                                                                                                                    alt="Comprar ahora con CoinPayments.net">
                                                                                                                                                                                                                                                                                                                                                                                                                </form>

                                                                                                                                                                                                                                                                                                                                                                                                                200 Arvol
                                                                                                                                                                                                                                                                                                                                                                                                                MP https://mpago.la/1GJY6c9
                                                                                                                                                                                                                                                                                                                                                                                                                CP
                                                                                                                                                                                                                                                                                                                                                                                                                <form action="https://www.coinpayments.net/index.php" method="post">
                                                                                                                                                                                                                                                                                                                                                                                                                    <input type="hidden" name="cmd" value="_pay_simple">
                                                                                                                                                                                                                                                                                                                                                                                                                        <input type="hidden" name="reset" value="1">
                                                                                                                                                                                                                                                                                                                                                                                                                            <input type="hidden" name="merchant" value="95346314138105be146a6c059c7030a7">
                                                                                                                                                                                                                                                                                                                                                                                                                                <input type="hidden" name="item_name" value="Arvol">
                                                                                                                                                                                                                                                                                                                                                                                                                                    <input type="hidden" name="item_desc" value="200 tokens Arvol.">
                                                                                                                                                                                                                                                                                                                                                                                                                                        <input type="hidden" name="currency" value="USD">
                                                                                                                                                                                                                                                                                                                                                                                                                                            <input type="hidden" name="amountf" value="1000.00000000">
                                                                                                                                                                                                                                                                                                                                                                                                                                                <input type="hidden" name="want_shipping" value="0">
                                                                                                                                                                                                                                                                                                                                                                                                                                                    <input type="hidden" name="success_url" value="arvol.io/success.html">
                                                                                                                                                                                                                                                                                                                                                                                                                                                        <input type="hidden" name="cancel_url" value="arvol.io/cancel.html">
                                                                                                                                                                                                                                                                                                                                                                                                                                                            <input type="image" src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                alt="Comprar ahora con CoinPayments.net">
                                                                                                                                                                                                                                                                                                                                                                                                                                                            </form>

                                                                                                                                                                                                                                                                                                                                                                                                                                                            500 Arvol
                                                                                                                                                                                                                                                                                                                                                                                                                                                            MP https://mpago.la/2efT4TT
                                                                                                                                                                                                                                                                                                                                                                                                                                                            CP
                                                                                                                                                                                                                                                                                                                                                                                                                                                            <form action="https://www.coinpayments.net/index.php" method="post">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                <input type="hidden" name="cmd" value="_pay_simple">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <input type="hidden" name="reset" value="1">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <input type="hidden" name="merchant" value="95346314138105be146a6c059c7030a7">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <input type="hidden" name="item_name" value="Arvol">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <input type="hidden" name="item_desc" value="500 tokens Arvol.">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <input type="hidden" name="currency" value="USD">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <input type="hidden" name="amountf" value="2500.00000000">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <input type="hidden" name="want_shipping" value="0">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <input type="hidden" name="success_url" value="arvol.io/success.html">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <input type="hidden" name="cancel_url" value="arvol.io/cancel.html">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <input type="image" src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            alt="Comprar ahora con CoinPayments.net">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </form>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        1000 Arvol
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        MP https://mpago.la/1J4p3nF
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        CP
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <form action="https://www.coinpayments.net/index.php" method="post">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <input type="hidden" name="cmd" value="_pay_simple">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <input type="hidden" name="reset" value="1">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <input type="hidden" name="merchant" value="95346314138105be146a6c059c7030a7">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <input type="hidden" name="item_name" value="Arvol">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <input type="hidden" name="item_desc" value="1000 tokens Arvol.">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <input type="hidden" name="currency" value="USD">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <input type="hidden" name="amountf" value="5000.00000000">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <input type="hidden" name="want_shipping" value="0">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <input type="hidden" name="success_url" value="arvol.io/success.html">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <input type="hidden" name="cancel_url" value="arvol.io/cancel.html">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <input type="image" src="https://www.coinpayments.net/images/pub/buynow-blue2.png"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        alt="Comprar ahora con CoinPayments.net">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </form>
            

           </input> */