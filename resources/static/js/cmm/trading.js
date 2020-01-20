"use strict";
var trading = trading || {}
trading = (()=>{
	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
	let _, js, css, img,trading_vue_js
	let init =()=> {
		_=''
		ctx=''
		js='/js'
		css='/css'
		img='/img'
		trading_vue_js=js+'/vue/trading_vue.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(trading_vue_js)
		)
		.done(()=>{
			setContentView()
		})
		.fail()
	}
	let setContentView =()=>{
		$('#btn_mystock').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_mystock())
			.appendTo('#d_one')
			onCreate()
		})
		$('#btn_lead').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_lead())
			.appendTo('#d_one')
			onCreate()
		})
		$('#btn_rank').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_rank())
			.appendTo('#d_one')
			onCreate()
		})
		$('#btn_balance').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_balance())
			.appendTo('#d_one')
			onCreate()
		})
		$('#btn_da').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_da())
			.appendTo('#d_one')
			onCreate()
		})
		$('#btn_log').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_log())
			.appendTo('#d_one')
			onCreate()
		})
		$('#btn_time').click(e=>{
			e.preventDefault()
			$('#tab3').empty()
			.html(trading_vue.trading_time())
			.appendTo('#d_three')
			onCreate()
		})
		$('#btn_day').click(e=>{
			e.preventDefault()
			$('#tab3').empty()
			.html(trading_vue.trading_day())
			.appendTo('#d_three')
			onCreate()
		})
		$('#btn_buy').click(e=>{
			e.preventDefault()
			$('#tab3').empty()
			.html(trading_vue.trading_buy())
			.appendTo('#d_three')
			onCreate()
		})
		$('#btn_sell').click(e=>{
			e.preventDefault()
			$('#tab3').empty()
			.html(trading_vue.trading_sell())
			.appendTo('#d_three')
			onCreate()
		})
		$('#btn_correction').click(e=>{
			e.preventDefault()
			$('#tab3').empty()
			.html(trading_vue.trading_correction())
			.appendTo('#d_three')
			onCreate()
		})
		$('#btn_cancle').click(e=>{
			e.preventDefault()
			$('#tab3').empty()
			.html(trading_vue.trading_cancle())
			.appendTo('#d_three')
			onCreate()
		})
		$('#btn_attention').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_attention())
			.appendTo('#d_one')
			onCreate()
		})
		$('#btn_lmystock').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_mystock())
			.appendTo('#d_one')
			onCreate()
		})


	}

	return {onCreate}
})();