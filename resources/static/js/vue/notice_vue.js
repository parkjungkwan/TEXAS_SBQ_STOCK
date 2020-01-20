"use strict";
var notice_vue = notice_vue || {}
notice_vue = {
	noticeqna_body : x=>{
		return `<body style="width: auto; height: 900px;">
	<div id="layout">
	<ul>
		<li><a id="btn_noticeqna" href="" >자주묻는질문</a></li>
		<li><a id="btn_noticecus" href="" >고객게시판</a></li>
		<li><a id="btn_noticeinquiry" href="" >문의/제안</a></li>	
		<li><a id="btn_notice" href="" >공지사항</a></li>	
	</ul>
	<div id="content">
	<h2></h2>
	<p>
	<img src="web/resources/img/faq.png">
	</p>
	</div>
	</div>
	<div id="foot"></div>
	<style>
			 html{}
			body{margin: 0;}  
			a{color: black;
				text-decoration: none;}
			#head{
				font-size: 42px;
				text-align: center;
				border-bottom: solid 1px black;
				margin: 0;
				padding: 20px;
				height: 50px;
				background-color: #4d6c8b;
			}	
			#layout ul{
				border-right: solid 1px gray;
				padding-bottom: : 30px;
				padding-top: 30px;
			    padding-right: 30px;
			    padding-left: 30px;
			    margin: 0;
			    width: 180px;
				padding-bottom: 625px;
				list-style-type : none;	
				background-color: ;	
			}
			#layout li{
				font-size:18px;
				border: solid 1px gray;
			}				
			#layout{
				display: grid;
				grid-template-columns: 241px 1fr;
				padding-left: 0;
			}
			#content{
				padding-left: 60px;
				background-color: ;
			}
			#foot{
				border-top: solid 1px gray;			
				height: 100px;
				background-color: ;
			}
		</style>
	</body`
	},
	noticecus_body : x=>{
		return `<body style="width: auto; height: 900px;">
	<div id="layout">
	<ul>
		<li><a id="btn_noticeqna" href="" >자주묻는질문</a></li>
		<li><a id="btn_noticecus" href="" >고객게시판</a></li>
		<li><a id="btn_noticeinquiry" href="" >문의/제안</a></li>	
		<li><a id="btn_notice" href="" >공지사항</a></li>	
	</ul>
	<div id="content">
	<h2>고객게시판</h2>
	<div id="table" align="left">
	<table border="1" width="700">
		<tr>
			<th width="50">번호</th>
			<th width="250">제목</th>
			<th width="100">작성자</th>
			<th width="150">작성일</th>
			<th width="50">조회수</th>
		</tr>
		<tr align="center" height="35">
			<td width="50">1</td>
			<td width="250">1234</td>
			<td width="100">a</td>
			<td width="150">2020</td>
			<td width="50">1</td>
		</tr>
		<!-- Paging  -->
	      <tr>
	        <td colspan="5" align="center" height="20">
	          <!-- Code -->
	        </td>
	      </tr>
	</table>
	<table width="700">
	      <tr>
	        <td align="right" >
	           <button>글쓰기</button>
	        </td>
	      </tr>
	    </table>
	</div>
	</div>
	</div>
	<style>
			 html{}
			body{margin: 0;}  
			a{color: black;
				text-decoration: none;}
			#head{
				font-size: 42px;
				text-align: center;
				border-bottom: solid 1px black;
				margin: 0;
				padding: 20px;
				height: 50px;
				background-color: #4d6c8b;
			}	
			#layout ul{
				border-right: solid 1px gray;
				padding-bottom: : 30px;
				padding-top: 30px;
			    padding-right: 30px;
			    padding-left: 30px;
			    margin: 0;
			    width: 180px;
				padding-bottom: 625px;
				list-style-type : none;	
				background-color: ;	
			}
			#layout li{
				font-size:18px;
				border: solid 1px gray;
			}				
			#layout{
				display: grid;
				grid-template-columns: 241px 1fr;
				padding-left: 0;
			}
			#content{
				padding-left: 60px;
				background-color: ;
			}
			#foot{
				border-top: solid 1px gray;			
				height: 100px;
				background-color: ;
			}
		</style>
	</body`
	},
	noticeinquiry_body : x=>{
		return `<body style="width: auto; height: 900px;">
	<div id="layout">
	<ul>
		<li><a id="btn_noticeqna" href="" >자주묻는질문</a></li>
		<li><a id="btn_noticecus" href="" >고객게시판</a></li>
		<li><a id="btn_noticeinquiry" href="" >문의/제안</a></li>	
		<li><a id="btn_notice" href="" >공지사항</a></li>	
	</ul>
	<div id="content">
	<h2>문의/제안</h2>
	<div id="table" align="left">
	<table border="1" width="700">
		<tr>
			<th width="50">번호</th>
			<th width="250">제목</th>
			<th width="100">작성자</th>
			<th width="150">작성일</th>
			<th width="50">조회수</th>
		</tr>
		<tr align="center" height="35">
			<td width="50">1</td>
			<td width="250">1234</td>
			<td width="100">a</td>
			<td width="150">2020</td>
			<td width="50">1</td>
		</tr>
		<!-- Paging  -->
	      <tr>
	        <td colspan="5" align="center" height="20">
	          <!-- Code -->
	        </td>
	      </tr>
	</table>
	<table width="700">
	      <tr>
	        <td align="right" >
	           <button>글쓰기</button>
	        </td>
	      </tr>
	    </table>
	</div>
	</div>
	</div>
	<style>
			 html{}
			body{margin: 0;}  
			a{color: black;
				text-decoration: none;}
			#head{
				font-size: 42px;
				text-align: center;
				border-bottom: solid 1px black;
				margin: 0;
				padding: 20px;
				height: 50px;
				background-color: #4d6c8b;
			}	
			#layout ul{
				border-right: solid 1px gray;
				padding-bottom: : 30px;
				padding-top: 30px;
			    padding-right: 30px;
			    padding-left: 30px;
			    margin: 0;
			    width: 180px;
				padding-bottom: 625px;
				list-style-type : none;	
				background-color: ;	
			}
			#layout li{
				font-size:18px;
				border: solid 1px gray;
			}				
			#layout{
				display: grid;
				grid-template-columns: 241px 1fr;
				padding-left: 0;
			}
			#content{
				padding-left: 60px;
				background-color: ;
			}
			#foot{
				border-top: solid 1px gray;			
				height: 100px;
				background-color: ;
			}
		</style>
	</body`
	},
	notice_body : x=>{
		return `<body style="width: auto; height: 900px;">
	<div id="layout">
	<ul>
			<li><a id="btn_noticeqna" href="" >자주묻는질문</a></li>
		<li><a id="btn_noticecus" href="" >고객게시판</a></li>
		<li><a id="btn_noticeinquiry" href="" >문의/제안</a></li>	
		<li><a id="btn_notice" href="" >공지사항</a></li>	
	</ul>
	<div id="content">
	<h2>공지사항</h2>
	<div id="table" align="left">
	<table border="1" width="700">
		<tr>
			<th width="50">번호</th>
			<th width="250">제목</th>
			<th width="100">작성자</th>
			<th width="150">작성일</th>
			<th width="50">조회수</th>
		</tr>
		<tr align="center" height="35">
			<td width="50">1</td>
			<td width="250">1234</td>
			<td width="100">a</td>
			<td width="150">2020</td>
			<td width="50">1</td>
		</tr>
		<!-- Paging  -->
	      <tr>
	        <td colspan="5" align="center" height="20">
	          <!-- Code -->
	        </td>
	      </tr>
	</table>
	<table width="700">
	      <tr>
	        <td align="right" >
	           <button>글쓰기</button>
	        </td>
	      </tr>
	    </table>
	</div>
	</div>
	</div>
	<style>
			 html{}
			body{margin: 0;}  
			a{color: black;
				text-decoration: none;}
			#head{
				font-size: 42px;
				text-align: center;
				border-bottom: solid 1px black;
				margin: 0;
				padding: 20px;
				height: 50px;
				background-color: #4d6c8b;
			}	
			#layout ul{
				border-right: solid 1px gray;
				padding-bottom: : 30px;
				padding-top: 30px;
			    padding-right: 30px;
			    padding-left: 30px;
			    margin: 0;
			    width: 180px;
				padding-bottom: 625px;
				list-style-type : none;	
				background-color: ;	
			}
			#layout li{
				font-size:18px;
				border: solid 1px gray;
			}				
			#layout{
				display: grid;
				grid-template-columns: 241px 1fr;
				padding-left: 0;
			}
			#content{
				padding-left: 60px;
				background-color: ;
			}
			#foot{
				border-top: solid 1px gray;			
				height: 100px;
				background-color: ;
			}
		</style>
	</body`
	}
};