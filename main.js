$("#transactions_choose_show_2").hide(0)
$("#transactions_choose_show_3").hide(0)
$("#icon_walet").hide(0)
$("#icon_card").hide(0)
$("#icon_bill").hide(0)
$("#icon_settings").hide(0)
$("#icon_transaction").hide(0)
$("#icon_house").hide(0)

$("#Dashboard").click(function() {

	$("#Dashboard").addClass("page_choose_item_active")
	$("#Wallet").removeClass("page_choose_item_active")
	$("#Payment").removeClass("page_choose_item_active")
	$("#Invoice").removeClass("page_choose_item_active")
	$("#Setting").removeClass("page_choose_item_active")
	$("#Transactions").removeClass("page_choose_item_active")

	$("#page_choose_title_1").addClass("page_choose_item_title_white")
	$("#page_choose_title_2").removeClass("page_choose_item_title_white")
	$("#page_choose_title_3").removeClass("page_choose_item_title_white")
	$("#page_choose_title_4").removeClass("page_choose_item_title_white")
	$("#page_choose_title_5").removeClass("page_choose_item_title_white")
	$("#page_choose_title_6").removeClass("page_choose_item_title_white")

	$("#icon_house").hide(0)
	$("#icon_walet").hide(0)
	$("#icon_card").hide(0)
	$("#icon_bill").hide(0)
	$("#icon_settings").hide(0)
	$("#icon_transaction").hide(0)
	$("#icon_walet_disactive").show(0)
	$("#icon_card_disactive").show(0)
	$("#icon_bill_disactive").show(0)
	$("#icon_settings_disactive").show(0)
	$("#icon_transaction_disactive").show(0)
	$("#icon_house_disactive").show(0)

})

$("#Wallet").click(function() {

	$("#Dashboard").removeClass("page_choose_item_active")
	$("#Wallet").addClass("page_choose_item_active")
	$("#Payment").removeClass("page_choose_item_active")
	$("#Invoice").removeClass("page_choose_item_active")
	$("#Setting").removeClass("page_choose_item_active")
	$("#Transactions").removeClass("page_choose_item_active")

	$("#page_choose_title_1").removeClass("page_choose_item_title_white")
	$("#page_choose_title_2").addClass("page_choose_item_title_white")
	$("#page_choose_title_3").removeClass("page_choose_item_title_white")
	$("#page_choose_title_4").removeClass("page_choose_item_title_white")
	$("#page_choose_title_5").removeClass("page_choose_item_title_white")
	$("#page_choose_title_6").removeClass("page_choose_item_title_white")

	$("#icon_walet").show(0)
	$("#icon_card").hide(0)
	$("#icon_bill").hide(0)
	$("#icon_settings").hide(0)
	$("#icon_transaction").hide(0)
	$("#icon_walet_disactive").hide(0)
	$("#icon_card_disactive").show(0)
	$("#icon_bill_disactive").show(0)
	$("#icon_settings_disactive").show(0)
	$("#icon_transaction_disactive").show(0)
	$("#icon_house").show(0)
	$("#icon_house_disactive").hide(0)

})

$("#Payment").click(function() {

	$("#Dashboard").removeClass("page_choose_item_active")
	$("#Wallet").removeClass("page_choose_item_active")
	$("#Payment").addClass("page_choose_item_active")
	$("#Invoice").removeClass("page_choose_item_active")
	$("#Setting").removeClass("page_choose_item_active")
	$("#Transactions").removeClass("page_choose_item_active")

	$("#page_choose_title_1").removeClass("page_choose_item_title_white")
	$("#page_choose_title_2").removeClass("page_choose_item_title_white")
	$("#page_choose_title_3").addClass("page_choose_item_title_white")
	$("#page_choose_title_4").removeClass("page_choose_item_title_white")
	$("#page_choose_title_5").removeClass("page_choose_item_title_white")
	$("#page_choose_title_6").removeClass("page_choose_item_title_white")

	$("#icon_walet").hide(0)
	$("#icon_card").show(0)
	$("#icon_bill").hide(0)
	$("#icon_settings").hide(0)
	$("#icon_transaction").hide(0)
	$("#icon_walet_disactive").show(0)
	$("#icon_card_disactive").hide(0)
	$("#icon_bill_disactive").show(0)
	$("#icon_settings_disactive").show(0)
	$("#icon_transaction_disactive").show(0)
	$("#icon_house").show(0)
	$("#icon_house_disactive").hide(0)

})

$("#Invoice").click(function() {

	$("#Dashboard").removeClass("page_choose_item_active")
	$("#Wallet").removeClass("page_choose_item_active")
	$("#Payment").removeClass("page_choose_item_active")
	$("#Invoice").addClass("page_choose_item_active")
	$("#Setting").removeClass("page_choose_item_active")
	$("#Transactions").removeClass("page_choose_item_active")

	$("#page_choose_title_1").removeClass("page_choose_item_title_white")
	$("#page_choose_title_2").removeClass("page_choose_item_title_white")
	$("#page_choose_title_3").removeClass("page_choose_item_title_white")
	$("#page_choose_title_4").addClass("page_choose_item_title_white")
	$("#page_choose_title_5").removeClass("page_choose_item_title_white")
	$("#page_choose_title_6").removeClass("page_choose_item_title_white")

	$("#icon_walet").hide(0)
	$("#icon_card").hide(0)
	$("#icon_bill").show(0)
	$("#icon_settings").hide(0)
	$("#icon_transaction").hide(0)
	$("#icon_walet_disactive").show(0)
	$("#icon_card_disactive").show(0)
	$("#icon_bill_disactive").hide(0)
	$("#icon_settings_disactive").show(0)
	$("#icon_transaction_disactive").show(0)
	$("#icon_house").show(0)
	$("#icon_house_disactive").hide(0)

})

$("#Setting").click(function() {

	$("#Dashboard").removeClass("page_choose_item_active")
	$("#Wallet").removeClass("page_choose_item_active")
	$("#Payment").removeClass("page_choose_item_active")
	$("#Invoice").removeClass("page_choose_item_active")
	$("#Setting").addClass("page_choose_item_active")
	$("#Transactions").removeClass("page_choose_item_active")

	$("#page_choose_title_1").removeClass("page_choose_item_title_white")
	$("#page_choose_title_2").removeClass("page_choose_item_title_white")
	$("#page_choose_title_3").removeClass("page_choose_item_title_white")
	$("#page_choose_title_4").removeClass("page_choose_item_title_white")
	$("#page_choose_title_5").addClass("page_choose_item_title_white")
	$("#page_choose_title_6").removeClass("page_choose_item_title_white")

	$("#icon_walet").hide(0)
	$("#icon_card").hide(0)
	$("#icon_bill").hide(0)
	$("#icon_settings").show(0)
	$("#icon_transaction").hide(0)
	$("#icon_walet_disactive").show(0)
	$("#icon_card_disactive").show(0)
	$("#icon_bill_disactive").show(0)
	$("#icon_settings_disactive").hide(0)
	$("#icon_transaction_disactive").show(0)
	$("#icon_house").show(0)
	$("#icon_house_disactive").hide(0)

})

$("#Transactions").click(function() {

	$("#Dashboard").removeClass("page_choose_item_active")
	$("#Wallet").removeClass("page_choose_item_active")
	$("#Payment").removeClass("page_choose_item_active")
	$("#Invoice").removeClass("page_choose_item_active")
	$("#Setting").removeClass("page_choose_item_active")
	$("#Transactions").addClass("page_choose_item_active")

	$("#page_choose_title_1").removeClass("page_choose_item_title_white")
	$("#page_choose_title_2").removeClass("page_choose_item_title_white")
	$("#page_choose_title_3").removeClass("page_choose_item_title_white")
	$("#page_choose_title_4").removeClass("page_choose_item_title_white")
	$("#page_choose_title_5").removeClass("page_choose_item_title_white")
	$("#page_choose_title_6").addClass("page_choose_item_title_white")

	$("#icon_walet").hide(0)
	$("#icon_card").hide(0)
	$("#icon_bill").hide(0)
	$("#icon_settings").hide(0)
	$("#icon_transaction").show(0)
	$("#icon_walet_disactive").show(0)
	$("#icon_card_disactive").show(0)
	$("#icon_bill_disactive").show(0)
	$("#icon_settings_disactive").show(0)
	$("#icon_transaction_disactive").hide(0)
	$("#icon_house").show(0)
	$("#icon_house_disactive").hide(0)

})

$("#transactions_choose_1").click(function() {

	$("#transactions_choose_1").addClass("transactions_place_choose_item_active")
	$("#transactions_choose_2").removeClass("transactions_place_choose_item_active")
	$("#transactions_choose_3").removeClass("transactions_place_choose_item_active")

	$("#transactions_choose_show_1").show(0)
	$("#transactions_choose_show_2").hide(0)
	$("#transactions_choose_show_3").hide(0)

})

$("#transactions_choose_2").click(function() {

	$("#transactions_choose_1").removeClass("transactions_place_choose_item_active")
	$("#transactions_choose_2").addClass("transactions_place_choose_item_active")
	$("#transactions_choose_3").removeClass("transactions_place_choose_item_active")

	$("#transactions_choose_show_2").show(0)
	$("#transactions_choose_show_1").hide(0)
	$("#transactions_choose_show_3").hide(0)

})

$("#transactions_choose_3").click(function() {

	$("#transactions_choose_1").removeClass("transactions_place_choose_item_active")
	$("#transactions_choose_2").removeClass("transactions_place_choose_item_active")
	$("#transactions_choose_3").addClass("transactions_place_choose_item_active")

	$("#transactions_choose_show_3").show(0)
	$("#transactions_choose_show_1").hide(0)
	$("#transactions_choose_show_2").hide(0)

})

$("#balance_place_squares_item_1").click(function() {

	$("#balance_place_squares_item_1").addClass("balance_place_squares_item_active")
	$("#balance_place_squares_item_2").removeClass("balance_place_squares_item_active")
	$("#balance_place_squares_item_3").removeClass("balance_place_squares_item_active")
	$("#balance_place_squares_item_4").removeClass("balance_place_squares_item_active")

	$("#sections_text_square_1").css("color", "#fff")
	$("#sections_text_square_2").css("color", "#72757A")
	$("#sections_text_square_3").css("color", "#72757A")
	$("#sections_text_square_4").css("color", "#72757A")

	$("#square_price_1").css("color", "#fff")
	$("#square_price_2").css("color", "#000")
	$("#square_price_3").css("color", "#000")
	$("#square_price_4").css("color", "#000")

})

$("#balance_place_squares_item_2").click(function() {

	$("#balance_place_squares_item_1").removeClass("balance_place_squares_item_active")
	$("#balance_place_squares_item_2").addClass("balance_place_squares_item_active")
	$("#balance_place_squares_item_3").removeClass("balance_place_squares_item_active")
	$("#balance_place_squares_item_4").removeClass("balance_place_squares_item_active")

	$("#sections_text_square_2").css("color", "#fff")
	$("#sections_text_square_1").css("color", "#72757A")
	$("#sections_text_square_3").css("color", "#72757A")
	$("#sections_text_square_4").css("color", "#72757A")

	$("#square_price_2").css("color", "#fff")
	$("#square_price_1").css("color", "#000")
	$("#square_price_3").css("color", "#000")
	$("#square_price_4").css("color", "#000")

})

$("#balance_place_squares_item_3").click(function() {

	$("#balance_place_squares_item_1").removeClass("balance_place_squares_item_active")
	$("#balance_place_squares_item_2").removeClass("balance_place_squares_item_active")
	$("#balance_place_squares_item_3").addClass("balance_place_squares_item_active")
	$("#balance_place_squares_item_4").removeClass("balance_place_squares_item_active")

	$("#sections_text_square_3").css("color", "#fff")
	$("#sections_text_square_2").css("color", "#72757A")
	$("#sections_text_square_1").css("color", "#72757A")
	$("#sections_text_square_4").css("color", "#72757A")

	$("#square_price_3").css("color", "#fff")
	$("#square_price_2").css("color", "#000")
	$("#square_price_1").css("color", "#000")
	$("#square_price_4").css("color", "#000")

})

$("#balance_place_squares_item_4").click(function() {

	$("#balance_place_squares_item_1").removeClass("balance_place_squares_item_active")
	$("#balance_place_squares_item_2").removeClass("balance_place_squares_item_active")
	$("#balance_place_squares_item_3").removeClass("balance_place_squares_item_active")
	$("#balance_place_squares_item_4").addClass("balance_place_squares_item_active")

	$("#sections_text_square_4").css("color", "#fff")
	$("#sections_text_square_2").css("color", "#72757A")
	$("#sections_text_square_3").css("color", "#72757A")
	$("#sections_text_square_1").css("color", "#72757A")

	$("#square_price_4").css("color", "#fff")
	$("#square_price_2").css("color", "#000")
	$("#square_price_3").css("color", "#000")
	$("#square_price_1").css("color", "#000")

})

let card = 0

$("#card").click(function() {

	if (card === 0) {

		$(".card_front").css("transform", "rotateY(180deg)")
		$(".card_back").css("transform", "rotateY(360deg)")

		card = 1

	} else if (card === 1) {

		$(".card_front").css("transform", "rotateY(360deg)")
		$(".card_back").css("transform", "rotateY(180deg)")

		card = 0

	}

})

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
    	labels: ["1,5", "2", "2,5", "3", "3.5", "4"],
        datasets: [{
            label: '',
            data: [275, 950, 650, 375, 500, 625],
            backgroundColor: [
                '#FF684D',
                '#00D171',
                '#FF684D',
                '#FF684D',
                '#FF684D',
                '#FF684D'
            ],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctz = document.getElementById('myChart_two').getContext('2d');
const myChart_two = new Chart(ctz, {
    type: 'bar',
    data: {
    	labels: ["Sun", "Mon", "Tue"],
        datasets: [{
            label: '',
            data: [175, 225, 150],
            backgroundColor: [
                '#00D171',
                '#FF684D',
                '#01BEFF'
            ],
            borderRadius: 50
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const cty = document.getElementById('myChart_three').getContext('2d');
const myChart_three = new Chart(cty, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            label: '',
            data: [0, 5, 3, 10, 8, 15],
            backgroundColor: [
                '#FF684D',
                '#FF684D',
                '#FF684D',
                '#FF684D',
                '#FF684D',
                '#FF684D'
            ],
            fill: false,
            tension: 0.5
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

VanillaTilt.init(document.querySelector(".card"), {
	max: 25,
	speed: 300,
});