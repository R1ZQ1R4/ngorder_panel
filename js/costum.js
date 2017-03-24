$(document).ready(function () {
	//	inisialisasi variabel-----------------------------------------------
	var accord = $('#accordion').find('li .btn-collapse'),
		cartJual = document.getElementById('cart-penjualan'),
		cartIncome = document.getElementById('cart-pengeluaran-pemasukan'),
		cartRekap = document.getElementById('cart-rekap'),
		cartPesanan = document.getElementById('cart-pesanan'),

		//		fungsi handler-----------------------------------------------
		func = {
			resize: function () {
				w = $(window).width();
				if (w < 768) {
					$('main').removeClass('push');
					$('.side-menu').addClass('hide');
				} else {
					$('main').addClass('push');
					$('.side-menu').removeClass('hide');
				}

			},

			default: function (e) {
				e.preventDefault();
			},

			stop: function (e) {
				e.stopPropagation();
			},

			accord: function (e) {
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
	$('.scrollbar-inner, .scrollbar-macosx').scrollbar({
		"ignoreMobile": true,
		"disableBodyScroll": true
	});
	$('.btn-chat').click(function () {
		$('.side-chat').toggleClass('show');
		$(func.resize);
	});
	$('.btn-search-nav').click(function (e) {
		$('.search-nav').toggleClass('show');
		e.stopPropagation();
	});

	$('.btn-apps-nav').click(function (e) {
		$('.apps-nav').fadeIn(275);
		e.stopPropagation();
	});
	$('.back-icon').click(function () {
		$(".search-nav").removeClass('show');
		$('.apps-nav').fadeOut(225);
	});

	$('.search-nav, .side-menu, .side-chat, .btn-chat').on('click', func.stop);

	$(document).click(function () {
		$(".search-nav").removeClass('show');
		$('.apps-nav').fadeOut(225);
		$('.side-chat').removeClass('show');
		var w = $(window).width();
		if (w < 768) {
			$('main').removeClass('push');
			$('.side-menu').addClass('hide');
		}
	});
	//	prevent default a
	$('.default').on('click', func.default);

	//auto resize mobile version
	$(func.resize);
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
	$('#toggle-show').click(function () {
		$('.click-toggle').toggleClass("hidden-xs-down animated fadeInUp");
		$(this).toggleClass('hide');
	});

	//smooth scroll top
	$('.scroll-top').hide();

	$(window).scroll(function () {
		if ($(this).scrollTop() < 100) {
			$('.scroll-top').fadeOut();
		} else {
			$('.scroll-top').fadeIn();
		}
	});

	$('.scroll-top').click(function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 325);
		return false;
	});

	//burger menu side toggle
	$('.nav-icon').click(function (e) {
		w = $(window).width();
		if (w < 768) {
			$('.side-chat').removeClass('show');
		}
		$('main').toggleClass('push');
		$('.side-menu').toggleClass('hide');
		e.stopPropagation();
	});

	//	chart js
	var myChart = new Chart(cartJual, {
		type: 'line',
		data: {
			labels: ['11 Maret', '12 Maret', '13 Maret', '14 Maret', '15 Maret', '16 Maret', '17 Maret'],
			datasets: [{
				fill: true,
				lineTension: 0.4,
				backgroundColor: "rgba(89, 72, 255, 0.50)",
				borderColor: "#384784",
				borderCapStyle: 'butt',
				type: 'line',
				pointBackgroundColor: "#384784",
				pointBorderWidth: 5,
				pointHoverBorderColor: "#fff",
				pointHoverBackgroundColor: "#ec2534",
				pointHoverBorderWidth: 1,
				pointHitRadius: 15,
				label: 'Produk terjual',
				data: [104, 162, 133, 217, 186, 169, 145],
				}]
		},
		options: {
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

	var myChart = new Chart(cartRekap, {
		type: 'line',
		data: {
			labels: ['26 Februari', '27 Februari', '28 Februari', '1 Maret', '2 Maret', '3 Maret', '4 Maret', '5 Maret', '6 Maret', '7 Maret', '8 Maret', '9 Maret', '10 Maret', '11 Maret', '12 Maret', '13 Maret', '14 Maret', '15 Maret', '16 Maret', '17 Maret'],
			datasets: [{
				lineTension: 0,
				fill: false,
				borderColor: "#384784",
				backgroundColor: "#384784",
				borderCapStyle: 'butt',
				type: 'line',
				pointBackgroundColor: "#384784",
				pointBorderWidth: 5,
				pointHoverBorderColor: "#fff",
				pointHoverBackgroundColor: "#ec2534",
				pointHoverBorderWidth: 1,
				pointHitRadius: 15,
				label: 'Produk terjual',
				data: [98, 87, 121, 174, 263, 74, 237, 163, 281, 130, 231, 129, 116, 104, 162, 133, 217, 186, 169, 145],
				}, {
				lineTension: 0,
				fill: false,
				borderColor: "rgba(89, 72, 255, 0.8)",
				borderCapStyle: 'butt',
				type: 'line',
				backgroundColor: "rgba(89, 72, 255, 0.8)",
				pointBackgroundColor: "rgba(237, 226, 44, 0.7)",
				pointBorderWidth: 5,
				pointHoverBorderColor: "#fff",
				pointHoverBackgroundColor: "#ec2534",
				pointHoverBorderWidth: 1,
				pointHitRadius: 15,
				label: 'Pesanan',
				data: [82, 37, 31, 75, 63, 75, 37, 63, 21, 30, 31, 28, 16, 05, 12, 33, 27, 26, 68, 55],
				}]
		},
		options: {
			legend: {
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

	var myDoughnutChart = new Chart(cartIncome, {
		type: 'doughnut',
		data: {
			labels: ["Pemasukan", "Pengeluaran"],
			datasets: [{
				data: [325000, 147000],
				backgroundColor: [
						"rgba(89, 72, 255, 0.7)",
						"rgba(237, 226, 44, 0.7)"
					],
				hoverBackgroundColor: [
						"rgba(89, 72, 255, 0.8)",
						"rgba(237, 226, 44, 0.8)"
					]
				}]

		},
		options: {
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
					backgroundColor: 'rgba(89, 72, 255, 0.8)',
					borderWidth: 1,
					data: [65, 59, 80, 81, 56, 55, 40],
				}, {
					label: "Sukses",
					backgroundColor: '#66BB6A',
					borderWidth: 1,
					data: [49, 47, 75, 64, 40, 55, 37],
				},
				{
					label: "Batal",
					backgroundColor: '#EF5350',
					borderWidth: 1,
					data: [16, 12, 5, 17, 16, 0, 3],
				},
						  ]
		},
		options: {
			legend: {
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
