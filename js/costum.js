$(document).ready(function() {
    //	inisialisasi variabel-----------------------------------------------
    var accord = $('#accordion').find('li .btn-collapse'),
        cartJual = document.getElementById('cart-penjualan'),
        cartIncome = document.getElementById('cart-pengeluaran-pemasukan'),
        cartRekap = document.getElementById('cart-rekap'),
        cartPesanan = document.getElementById('cart-pesanan'),

        //		fungsi handler-----------------------------------------------
        func = {
            resize: function() {
                w = $(window).width();
                if (w < 768) {
                    $('footer').removeClass('push');
                    $('main').removeClass('push');
                    $('.side-menu').addClass('hide');
                } else {
                    $('main').addClass('push');
                    $('footer').addClass('push');
                    $('.side-menu').removeClass('hide');
                }

            },

            default: function(e) {
                e.preventDefault();
            },

            stop: function(e) {
                e.stopPropagation();
            },
            masonary: function() {
                $('.grid').masonry({
                    itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
                    columnWidth: '.grid-sizer',
                    percentPosition: true,
                });
            },

            accord: function(e) {
                e.preventDefault();
                if ($(this).parent('li').hasClass('active')) {
                    $(this).next().slideUp(275);
                    $(this).parent('li').removeClass('active');
                } else {
                    accord.next().slideUp(275);
                    accord.parent('li').removeClass('active');
                    $(this).next().slideDown(275);
                    $(this).parent('li').addClass('active');
                }
            }
        };
    //	Aksi Action---------------------------------------------

    //kalender
    $('#calendar').fullCalendar({
    	header: {
        left: 'prev',
        right: 'next',
        center: 'title'
    }
    });
    $('.scrollbar-inner, .scrollbar-macosx').scrollbar({});
    $('.btn-chat').click(function() {
        $('.side-chat').toggleClass('show');
        if (w < 768) {
            $('footer').removeClass('push');
            $('main').removeClass('push');
            $('.side-menu').addClass('hide');
        }
    });
    $('.btn-search-nav').click(function(e) {
        $('.search-nav').toggleClass('show');
        e.stopPropagation();
    });

    $('.btn-apps-nav').click(function(e) {
        $('.apps-nav').fadeIn(275);
        e.stopPropagation();
    });
    $('.back-icon').click(function() {
        $(".search-nav").removeClass('show');
        $('.apps-nav').fadeOut(225);
    });

    $('.search-nav, .side-menu, .side-chat, .btn-chat').on('click', func.stop);

    $(document).click(function() {
        $(".search-nav").removeClass('show');
        $('.apps-nav').fadeOut(225);
        $('.side-chat').removeClass('show');
        var w = $(window).width();
        if (w < 768) {
            $('footer').removeClass('push');
            $('main').removeClass('push');
            $('.side-menu').addClass('hide');
        }
    });

    //	prevent default a
    $('.default').on('click', func.default);

    //auto resize mobile version
    $(func.resize);
    //masonary
    $(func.masonary);
    //accordion ul li a 
    accord.on('click', func.accord);

    //smooth scroll js
    $("html").easeScroll({
        frameRate: 40,
        animationTime: 600,
        stepSize: 100,
        pulseAlgorithm: !0,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: !0,
        arrowScroll: 50
    });

    //4 sekawan toggle
    $('#toggle-show').click(function() {
        $('.click-toggle').toggleClass("hidden-xs-down animated fadeInUp");
        $(this).toggleClass('hide');
    });

    //smooth scroll top
    $('.scroll-top').hide();

    $(window).scroll(function() {
        if ($(this).scrollTop() < 100) {
            $('.scroll-top').fadeOut();
        } else {
            $('.scroll-top').fadeIn();
        }
    });

    $('.scroll-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 325);
        return false;
    });

    //burger menu side toggle
    $('.nav-icon').click(function(e) {
        w = $(window).width();
        if (w < 768) {
            $('.side-chat').removeClass('show');
        }
        $('footer').toggleClass('push');
        $('main').toggleClass('push');
        $('.side-menu').toggleClass('hide');
        e.stopPropagation();
    });

    //	chart js
    Chart.defaults.global.defaultFontSize = 11;
    Chart.defaults.global.defaultFontColor = "#aeaeae";
    Chart.defaults.global.hover.mode = "point";
    Chart.defaults.global.hover.intesrsect = true;



    var myChart = new Chart(cartJual, {
        type: 'line',
        data: {
            labels: ['11 Maret', '12 Maret', '13 Maret', '14 Maret', '15 Maret', '16 Maret', '17 Maret'],
            // labels: ['', '', '', '', '', '', ''],
            datasets: [{
                fill: true,
                lineTension: 0.1,
                borderWidth: 1,
                backgroundColor: "rgba(2, 136, 209, 0.33)",
                borderColor: "rgba(2, 136, 209, 1)",
                borderCapStyle: 'butt',
                type: 'line',
                pointBackgroundColor: "rgba(2, 136, 209, 1)",
                pointBorderWidth: 0,
                pointHoverBorderColor: "#F44336",
                pointHoverBackgroundColor: "#F44336",
                pointHoverBorderWidth: 5,
                pointHitRadius: 30,
                label: 'Produk terjual',
                data: [104, 162, 133, 217, 186, 169, 145],
            }]
        },
        options: {
            maintainAspectRatio: false,
            defaultFontColor: '#000',
            defaultFontSize: 2,
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });



    var myDoughnutChart = new Chart(cartIncome, {
        type: 'doughnut',
        data: {
            labels: ["Pemasukan", "Pengeluaran"],
            datasets: [{
                data: [325000, 147000],
                backgroundColor: [
                    "rgba(2, 136, 209, 0.8)",
                    "rgba(255, 202, 40, 0.8)"
                ],
                hoverBackgroundColor: [
                    "rgba(2, 136, 209, 0.9)",
                    "rgba(255, 202, 40, 0.9)"
                ]
            }]

        },
        options: {
            maintainAspectRatio: false,
            legend: {
                position: 'top',
                labels: {
                    boxWidth: 24,

                }
            },
            animation: {
                animateScale: true
            }
        }
    });

    var data3 = new Chart(cartPesanan, {
        type: 'bar',
        data: {
            labels: ['11 Maret', '12 Maret', '13 Maret', '14 Maret', '15 Maret', '16 Maret', '17 Maret'],
            datasets: [{
                label: "Pesanan",
                backgroundColor: 'rgba(2, 136, 209, 0.8)',
                borderWidth: 1,
                data: [65, 59, 80, 81, 56, 55, 40],
            }, {
                label: "Sukses",
                backgroundColor: 'rgba(67, 160, 71, 0.8)',
                borderWidth: 1,
                data: [49, 47, 75, 64, 40, 55, 37],
            }, {
                label: "Batal",
                backgroundColor: 'rgba(244, 67, 54, 0.8)',
                borderWidth: 1,
                data: [16, 12, 5, 17, 16, 0, 3],
            }, ]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false,
                position: 'top',
                labels: {
                    boxWidth: 24,

                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});
