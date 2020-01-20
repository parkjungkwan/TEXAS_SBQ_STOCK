"use strict";
var notice = notice || {};
notice = (()=>{
	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
	let _, js, css, img,notice_vue_js
	let init =()=> {
		_=''
		ctx=''
		js='/js'
		css='/css'
		img='/img'
		notice_vue_js=js+'/vue/notice_vue.js'
	}

	let onCreate = ()=>{
		init();
		$.when(
			$.getScript(notice_vue_js)
		)
		.done(()=>{
			$('#btn_noticeqna').click(e=>{
				e.preventDefault()
				$('#body_main').empty()
				.html(notice_vue.noticeqna_body({css: $.css(), img: $.img()}))
				.appendTo('#body_main')
				onCreate()
			})
			$('#btn_noticecus').click(e=>{
				e.preventDefault()
				$('#body_main').empty()
				.html(notice_vue.noticecus_body({css: $.css(), img: $.img()}))
				.appendTo('#body_main')
				onCreate()
			})
			$('#btn_noticeinquiry').click(e=>{
				e.preventDefault()
				$('#body_main').empty()
				.html(notice_vue.noticeinquiry_body({css: $.css(), img: $.img()}))
				.appendTo('#body_main')
				onCreate()
			})
			$('#btn_notice').click(e=>{
				e.preventDefault()
				$('#body_main').empty()
				.html(notice_vue.notice_body({css: $.css(), img: $.img()}))
				.appendTo('#body_main')
				onCreate()
			})
		})
		
	}
	return {onCreate}
})();