"use strict";
var auth = auth || {};
auth = (()=>{
	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
	let _,ctx, js, css, img, auth_vue_js,trading_vue_js,s_admin_vue_js,notice_vue_js,notice_js,s_admin_jsjs,trading_js
	let init =()=> {
		_=''
		ctx=''
		js='/js'
		css='/css'
		img='/img'
		auth_vue_js=js+'/vue/auth_vue.js'
		trading_vue_js=js+'/vue/trading_vue.js'
		s_admin_vue_js=js+'/vue/s_admin01_vue.js'
		notice_vue_js=js+'/vue/notice_vue.js'
		notice_js=js+'/cmm/notice.js'
		s_admin_jsjs=js+'/cmm/s_admin.js'
		trading_js=js+'/cmm/trading.js'
	}
	
	let onCreate =()=>{
		init();
		$.when(
			$.getScript(auth_vue_js),
			$.getScript(trading_vue_js),
			$.getScript(trading_js),
			$.getScript(s_admin_vue_js),
			$.getScript(s_admin_jsjs),
			$.getScript(notice_vue_js),
			$.getScript(notice_js)
		).done(()=>{
			setContentView()
			$('#btn_main').click(e=>{
				e.preventDefault()
				$('body').empty()
				.html(auth_vue.auth_body({ css, img}))
				onCreate()
			})
			$('#btn_trading').click(e=>{
				e.preventDefault()
				$('#body_main').empty()
				.html(trading_vue.trading_mainbody({css, img}))
				.appendTo('#body_main')
				trading.onCreate()
			})
			$('#btn_notice').click(e=>{
				e.preventDefault()
				$('#body_main').empty()
				.html(notice_vue.notice_body({css, img}))
				.appendTo('#body_main')
				notice.onCreate()
			})
			$('#btn_admin').click(e=>{
				e.preventDefault()
				$('#body_main').empty()
				.html(s_admin01_vue.admin01_body({css, img, ctx}))
				.appendTo('#body_main')
				s_admin.onCreate()
			})
			
		})
	}
		
	let setContentView =()=>{
		$('body').html(auth_vue.auth_body({css, img}))
	}

	return {onCreate}	
	
})();