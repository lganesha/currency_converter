<?php 
/* 
    single page Js currency converter by adhitya_yosua_sanjaya , NIM 201410225005, @bhayangkara_university.
    note :
    - this source code using API from http://fixer.io/ for the latest exchange referrence if you're connected to inet (unchaching by default)
    - it use vue js v.2 for the frontend js framework 
    - and bootstrap css, and bootstrap js v.3 also JQuery
**/

/**
 * checking internet connection on apache port, (`try 443 if 80 not working`) by accessing google 
 * @param Integer port n
 * @return boolean (true) for connected (false) for not
 */
function isConnectInet ($port = 80, $second_try = false) {
    $connected = @fsockopen("https://vuejs.org", $port);
    $res = false;

    if ($connected) {
        $res = true;
    } else {
        if ($second_try) {
            $connecnted = isConnectInet(443, true);
            $res = $connecnted;
        } else {
            $res =  false;
        }
    }

    return $res;
}
if ($inet_connected = isConnectInet()) :
    // get latest currencies data from inet
    $currencies_base_idr = file_get_contents('https://api.fixer.io/latest?base=IDR');
    else :
        // if offline, currencies JSON based on idr (Indonesian Rupiah) defined manually by creating String
        // this JSON is a copy from accessing  https://api.fixer.io/latest?base=IDR on, 01 December 2017.
        $currencies_base_idr = '{"base":"IDR","date":"2017-12-01","rates":{"USD":7.3898e-05,"JPY":0.0083131,"BGN":0.00012161,"CZK":0.001587,"DKK":0.00046272,"GBP":5.4788e-05,"HUF":0.019511,"PLN":0.00026195,"RON":0.00028791,"SEK":0.00061858,"CHF":7.2692e-05,"NOK":0.00061402,"HRK":0.00046977,"RUB":0.0043336,"TRY":0.00029048,"AUD":9.7575e-05,"BRL":0.0002414,"CAD":9.5138e-05,"CNY":0.00048841,"HKD":0.00057734,"ILS":0.00025802,"INR":0.0047662,"KRW":0.080053,"MXN":0.00138,"MYR":0.00030231,"NZD":0.00010787,"PHP":0.0037228,"SGD":9.9571e-05,"THB":0.0024113,"ZAR":0.0010129,"EUR":6.2177e-05}}';
endif;
require_once('./view.html');
?>