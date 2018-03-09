
        var kurs = '';
        // set time out 2 seconds for php server engine checking internet connection
        setTimeout(() => {
            kurs = '<?php echo $currencies_base_idr; ?>'; // echo  php variable and re-assign as js var (kurs)
        }, 2000);

        // error input value 
        $(document).ready(function () {
            //called when key is pressed in textbox
            $("#input_base").keypress(function (e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    $("#errmsg").html("Digits Only").show().fadeOut("slow");
                        return false;
                }
            });

            // called when x in modal clicked
            $('.closespan').click(function(){
                $('#select_curr_modal').modal('hide');
            });
        });
        console.log('asdasd');

        // new Vue Object
        var vo = new Vue({
            el: '#app',
            data: {
                base: 'IDR',
                base_country_name: 'Indonesia',
                currencies: [
                    // { abbre: 'IDR', show: false, explain: 'indonesia rupiah', icon: 'Rp.', conv_res: 0, }, // comment as base currency
                    { abbre: 'AUD', show: false, explain: 'australian dollar', icon: '$.', conv_res: 0, },
                    { abbre: 'BGN', show: false, explain: 'bulgaria lev', icon: 'лв.', conv_res: 0, },
                    { abbre: 'BRL', show: false, explain: 'brazil real', icon: 'R$.', conv_res: 0, },
                    { abbre: 'CAD', show: false, explain: 'canada dollar', icon: '$.', conv_res: 0, },
                    { abbre: 'CHF', show: false, explain: 'switzerland franc', icon: 'CHF.', conv_res: 0, },
                    { abbre: 'CNY', show: false, explain: 'china yuan', icon: '¥.', conv_res: 0, },
                    { abbre: 'CZK', show: false, explain: 'czech_repulik koruna', icon: 'Kč.', conv_res: 0, },
                    { abbre: 'DKK', show: false, explain: 'denmark krone', icon: 'kr.', conv_res: 0, },
                    { abbre: 'GBP', show: false, explain: 'united_kingdom poundsterling', icon: '£.', conv_res: 0, },
                    { abbre: 'HKD', show: false, explain: 'hoengkong dollar', icon: '$.', conv_res: 0, },
                    { abbre: 'HRK', show: false, explain: 'croatia kuna', icon: 'kn.', conv_res: 0, },
                    { abbre: 'HUF', show: false, explain: 'hungary forint', icon: 'Ft.', conv_res: 0, },
                    { abbre: 'ILS', show: false, explain: 'israel shekel', icon: '₪.', conv_res: 0, },
                    { abbre: 'INR', show: false, explain: 'india rupee', icon: '₹.', conv_res: 0, },
                    { abbre: 'JPY', show: false, explain: 'japan yen', icon: '¥.', conv_res: 0, },
                    { abbre: 'KRW', show: false, explain: 'korea won', icon: '₩.', conv_res: 0, },
                    { abbre: 'MXN', show: false, explain: 'mexico peso', icon: '$.', conv_res: 0, },
                    { abbre: 'MYR', show: false, explain: 'malaysia ringgit', icon: 'RM.', conv_res: 0, }, 
                    { abbre: 'NOK', show: false, explain: 'norway krone', icon: 'kr.', conv_res: 0, },
                    { abbre: 'NZD', show: false, explain: 'new_zealand dollar', icon: '$.', conv_res: 0, },
                    { abbre: 'PHP', show: false, explain: 'philipines pesso', icon: '₱.', conv_res: 0, },
                    { abbre: 'PLN', show: false, explain: 'poland zloty', icon: 'zł.', conv_res: 0, },
                    { abbre: 'RON', show: false, explain: 'romania Leu', icon: 'lei.', conv_res: 0, },
                    { abbre: 'RUB', show: false, explain: 'russia ruble', icon: '₽.', conv_res: 0, },
                    { abbre: 'SEK', show: false, explain: 'sweden krona', icon: 'kr.', conv_res: 0, },
                    { abbre: 'SGD', show: false, explain: 'singapore dollar', icon: '$.', conv_res: 0, },
                    { abbre: 'THB', show: false, explain: 'thailand baht', icon: '฿.', conv_res: 0, },
                    { abbre: 'TRY', show: false, explain: 'turkey lira', icon: null, conv_res: 0, },
                    { abbre: 'ZAR', show: false, explain: 'soutch_africa rand', icon: 'R.', conv_res: 0, },
                    { abbre: 'EUR', show: false, explain: 'euro_member countries', icon: '€.', conv_res: 0, },
                    { abbre: 'USD', show: false, explain: 'united_states dollar', icon: '$.', conv_res: 0, },
                    ],
                selected : []
            },
            computed: {
                convertion: {
                    get: function(){
                        console.log('a');
                    },
                    set: function(params){
                        var val_on_base = kurs.rates.params;
                    },
                }
            }
        });