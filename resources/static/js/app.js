"use strict";
var app = app || {};

app = (()=>{
	
	const WHEN_ERR = '호출하는 js 파일을 찾을 수 없습니다.';
	let _, js, authjs;
	let run = () => onCreate();
	let init =()=>{
					_='';
					js='/js';
					authjs=js+'/cmm/auth.js';
				  }
	let onCreate =()=>{
		init();
		$.when(
				$.getScript(authjs)
		 )
		 .done(()=>{
			 auth.onCreate()
			}
		 )
		 .fail(()=>{alert(WHEN_ERR)}
		 )
	}
	return {run}
})();