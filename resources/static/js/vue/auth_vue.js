"use strict";
var auth_vue = auth_vue || {}
auth_vue = {
	auth_body: x=>{
		return `<div id="s-header">
		
			<div class="topbar">
                <div class="topbar-left">
                    <a href="#" class="logo" id="btn_main">
                        <span>
                            GoodFor
                        </span>
                    </a>
                </div>
                <nav class="navbar-custom">
                    <ul class="list-unstyled topbar-right-menu float-right mb-0">
	                    <li class="nav-link dropdown-toggle arrow-none waves-light waves-effect">
                            <div id="btn_trading" style="display:inline-block;width:200px;color:white;font-size:15px">트레이딩</div>
                            <div id="" style="display:inline-block;width:200px;color:white;font-size:15px">주식정보</div>
							<div id="btn_notice" style="display:inline-block;width:200px;color:white;font-size:15px">공지사항</div>
							<div id="btn_admin" style="display:inline-block;width:200px;color:white;font-size:15px">관리자</div>
						</li>
                        <li class="dropdown notification-list">
                            <a class="nav-link dropdown-toggle arrow-none waves-light waves-effect" href="#">
                                <i class="fi-bell noti-icon"></i>
                            </a>
                        </li>
                        <li class="dropdown notification-list">
                            <a class="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i class="fi-speech-bubble noti-icon"></i>
                            </a>
                        </li>
                        <li class="dropdown notification-list">
                            <a class="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <span class="ml-1"> . . . . <i class="mdi mdi-chevron-down"></i> </span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right profile-dropdown" x-placement="bottom-end" style="position: absolute; transform: translate3d(130px, 70px, 0px); top: 0px; left: 0px; will-change: transform;">
                                <!-- item-->
                                <div class="dropdown-item noti-title">
                                    <h6 class="text-overflow m-0">Welcome !</h6>
                                </div>
                    <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fi-head"></i> <span>My Account</span>
                                </a>
                    <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fi-cog"></i> <span>Settings</span>
                                </a>
                    <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fi-help"></i> <span>Support</span>
                                </a>
                    <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fi-lock"></i> <span>Lock Screen</span>
                                </a>
                    <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fi-power"></i> <span>Logout</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
		</div>
        <div id="body_main" style="margin-top: 70px;">
            <div id="body_img" style=" width:auto; height:350px;">
                <img style="width:100%; height:350px;" src="https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMTdfMjM5/MDAxNTc5MjUyMjcyMDg4.dgVm7ll4JAMNs2mEY3RRRCRnlZdgyo6zGNGupfkge4Ag.rxO6NyaZWH0Au7z1I0bbRsmbaUOkNIenkcPYlJR8EcYg.JPEG/main_img6.jpg?type=w740" alt="" >            
            </div>
            <div style="margin-left: 40%; margin-top: 15px;">
                <div style="font-family: 'Nanum Pen Script', cursive; font-size: 3em;">
                                복잡한 증권사이트는 이제 그만 !! <br>
                                이제 굿포 에서 간편한 시스템을 경험하세요.<br>
                                간편하게 주식 정보를, 공인인증서 없이 주식 거래를<br>
                                한눈에 거래정보를 모두 경험하세요.
                </div>
            </div>
             <div id="body_icon" style="margin-top: 3%; margin-left: 37%;">
                <img src="https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMTZfMjAz/MDAxNTc5MTQwOTY3OTE0.95-bo0_ntpxsrIeoIqWUoHT-TVUYs0YDlNDtLZ8z92Ug.wz3LUDP5Kd0t0ekbeuTzgicMqpwGplqC_knxJrr3FL8g.PNG/account2.png?type=w740" alt="" style="width: 150px;">
                <div style="display: inline-block; width: 30px;"></div>
                <img src="https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMTZfMTM5/MDAxNTc5MTQwOTY3NjMy.mZJis_aj0h2tU1VmFFoGZnj2Xo3N-oj7BI5ULU1NbdQg.l6pSBxTuVMfj4Z_eCCRL9ND1exLMYmYVFge1qmLTqv0g.PNG/mymoney2.png?type=w740" alt="" style="width: 150px;">
                <div style="display: inline-block; width: 30px;"></div>
                <img src="https://cafeptthumb-phinf.pstatic.net/MjAyMDAxMTdfMTY0/MDAxNTc5MjUxNTcwMTkz.PfILgtr9LAgoheS-NvBQSxDoFE-Oc_4xyAroHjY_h9gg.Xt_Q5DWb61N4M_-3nn9KlwQhuvNev3s_pDkS2mA3rCAg.PNG/info.png?type=w740" alt="" style="width: 150px;">
            </div>
		</div>
		<div id="s-footer" style="margin-top: 100px;">
			<h3 style="margin-left: 37%;">2019 - 2020 © Goodfor. - www.Goodfor.com</h3>
		</div>`
    }
	
};
