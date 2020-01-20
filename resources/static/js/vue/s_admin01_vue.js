"use strict";
var s_admin01_vue = s_admin01_vue || {}
s_admin01_vue = {
		admin01_body : x=>{
			return `<body>
        <!-- Begin page -->
        <div id="wrapper">
        
            <div class="left side-menu">
                    <!--- Sidemenu -->
                    <div id="sidebar-menu" class="active">
                        <!-- Left Menu Start -->
                        <ul class="metismenu in" id="side-menu">
                            <li class="menu-title">ADMIN MENU</li>
                            <li>
                                <a id="s_admin_m1" href="#"><i class="fi-briefcase"></i> <span> DashBoard </span> <span class="menu-arrow"></span></a>
                            </li>
                            <li>
                                <a id="s_admin_m2" href="#"><i class="fi-box"></i><span> TODO List </span> <span class="menu-arrow"></span></a>
                            </li>
                            <li>
                                <a id="s_admin_m3" href="#"><i class="fi-bar-graph-2"></i><span> System Monitoring </span> <span class="menu-arrow"></span></a>
                            </li>
                            <li>
                                <a id="s_admin_m4" href="#"><i class="fi-mail"></i><span> Q&A Mangement </span> <span class="menu-arrow"></span></a>
                            </li>
                		</ul>
					</div>	<!-- Sidebar-menu end -->
            </div>	<!-- Left Sidebar End -->
            <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== -->
            
            <div id="s_body_div01" class="content-page">
                
                <div class="content">	<!-- Start content -->
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <h4 class="page-title float-left">Dashboard</h4>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>	<!-- end row -->
                        <div class="row">
                            <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                                <div class="card-box tilebox-one">
                                    <i class="dripicons-graph-bar float-right"></i>
                                    <h5 class="text-muted text-uppercase mb-3">거래현황 (금액/건수)</h5>
                                    <h4 class="mb-3" data-plugin="counterup">1,587</h4>
                                    <span class="badge badge-primary"> +11% </span> <span class="text-muted ml-2 vertical-middle">From previous period</span>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                                <div class="card-box tilebox-one">
                                    <i class="fi-layers float-right"></i>
                                    <h5 class="text-muted text-uppercase mb-3">매수현황 (금액/건수)</h5>
                                    <h4 class="mb-3">$<span data-plugin="counterup">46,782</span></h4>
                                    <span class="badge badge-primary"> -29% </span> <span class="text-muted ml-2 vertical-middle">From previous period</span>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                                <div class="card-box tilebox-one">
                                    <i class="fi-tag float-right"></i>
                                    <h5 class="text-muted text-uppercase mb-3">매도 현황(금액/건수)</h5>
                                    <h4 class="mb-3">$<span data-plugin="counterup">15.9</span></h4>
                                    <span class="badge badge-primary"> 0% </span> <span class="text-muted ml-2 vertical-middle">From previous period</span>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-6 col-xl-3">
                                <div class="card-box tilebox-one">
                                    <i class="mdi mdi-alarm-light float-right"></i>
                                    <h5 class="text-muted text-uppercase mb-3">이상거래 건수(미확인/전체)</h5>
                                    <h4 class="mb-3" data-plugin="counterup">1,890</h4>
                                    <span class="badge badge-primary"> +89% </span> <span class="text-muted ml-2 vertical-middle">Last year</span>
                                </div>
                            </div>
                        </div>	<!-- end row -->
                        <div class="row">
                            <div class="col-xl-7">
                                <div class="card-box"><div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                                    <h4 class="header-title">Transactions History</h4>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="text-center mt-3">
                                                <h6 class="font-normal text-muted font-14">Conversion Rate</h6>
                                                <h6 class="font-18"><i class="mdi mdi-arrow-up-bold-hexagon-outline text-success"></i> <span class="text-dark">1.78%</span> <small></small></h6>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="text-center mt-3">
                                                <h6 class="font-normal text-muted font-14">Average Order Value</h6>
                                                <h6 class="font-18"><i class="mdi mdi-arrow-up-bold-hexagon-outline text-success"></i> <span class="text-dark">25.87</span> <small>USD</small></h6>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="text-center mt-3">
                                                <h6 class="font-normal text-muted font-14">Total Wallet Balance</h6>
                                                <h6 class="font-18"><i class="mdi mdi-arrow-up-bold-hexagon-outline text-success"></i> <span class="text-dark">87,4517</span> <small>USD</small></h6>
                                            </div>
                                        </div>
                                    </div>		<!-- end row -->
                                    <canvas id="transactions-chart" height="252" class="mt-4 chartjs-render-monitor" width="481" style="display: block; height: 202px; width: 385px;"></canvas>
                                </div>
                            </div>
                            <div class="col-xl-5">
                                <div class="card-box"><div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                                    <h4 class="header-title">Sales History</h4>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="text-center mt-3">
                                                <h6 class="font-normal text-muted font-14">Conversion Rate</h6>
                                                <h6 class="font-18"><i class="mdi mdi-arrow-up-bold-hexagon-outline text-success"></i> <span class="text-dark">3.94%</span> <small></small></h6>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="text-center mt-3">
                                                <h6 class="font-normal text-muted font-14">Average Sales</h6>
                                                <h6 class="font-18"><i class="mdi mdi-arrow-down-bold-hexagon-outline text-danger"></i> <span class="text-dark">16.25</span> <small>USD</small></h6>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="text-center mt-3">
                                                <h6 class="font-normal text-muted font-14">Total Sales</h6>
                                                <h6 class="font-18"><i class="mdi mdi-arrow-up-bold-hexagon-outline text-success"></i> <span class="text-dark">124,858.67</span> <small>USD</small></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <canvas id="sales-history" height="370" class="mt-4 chartjs-render-monitor" width="481" style="display: block; height: 296px; width: 385px;"></canvas>
                                </div>
                            </div>
                        </div>
                         
                        <div class="row">
				<div class="col-lg-4">
					<div class="card-box">
						<h4 class="header-title mb-4">Messages</h4>
						<div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 437.6px;">
						<div class="inbox-widget slimscroll" style="max-height: 370px; overflow: hidden; width: auto; height: 437.6px;">
                        <a href="#">                																																																																																																																<a href="#">
                            <div class="inbox-item">
                                <div class="inbox-item-img"><img src="resources/img/users/avatar-1.jpg" class="rounded-circle bx-shadow-lg" alt=""></div>
                                <p class="inbox-item-author">Chadengle</p>
                                <p class="inbox-item-text">Hey! there I'm available...</p>
                                <p class="inbox-item-date">13:40 PM</p>
                            </div>
                        </a>
                        <a href="#">
                            <div class="inbox-item">
                                <div class="inbox-item-img"><img src="resources/img/users/avatar-2.jpg" class="rounded-circle bx-shadow-lg" alt=""></div>
                                <p class="inbox-item-author">Tomaslau</p>
                                <p class="inbox-item-text">I've finished it! See you so...</p>
                                <p class="inbox-item-date">13:34 PM</p>
                            </div>
                        </a>
                        <a href="#">
                            <div class="inbox-item">
                                <div class="inbox-item-img"><img src="resources/img/users/avatar-3.jpg" class="rounded-circle bx-shadow-lg" alt=""></div>
                                <p class="inbox-item-author">Stillnotdavid</p>
                                <p class="inbox-item-text">This theme is awesome!</p>
                                <p class="inbox-item-date">13:17 PM</p>
                            </div>
                        </a>
                        <a href="#">
                            <div class="inbox-item">
                                <div class="inbox-item-img"><img src="resources/img/users/avatar-4.jpg" class="rounded-circle bx-shadow-lg" alt=""></div>
                                <p class="inbox-item-author">Kurafire</p>
                                <p class="inbox-item-text">Nice to meet you</p>
                                <p class="inbox-item-date">12:20 PM</p>
                            </div>
                        </a>
                        <a href="#">
                            <div class="inbox-item">
                                <div class="inbox-item-img"><img src="resources/img/users/avatar-5.jpg" class="rounded-circle bx-shadow-lg" alt=""></div>
                                <p class="inbox-item-author">Shahedk</p>
                                <p class="inbox-item-text">Hey! there I'm available...</p>
                                <p class="inbox-item-date">10:15 AM</p>
                            </div>
                        </a>
                        <a href="#">
                            <div class="inbox-item">
                                <div class="inbox-item-img"><img src="resources/img/users/avatar-6.jpg" class="rounded-circle bx-shadow-lg" alt=""></div>
                                <p class="inbox-item-author">Adhamdannaway</p>
                                <p class="inbox-item-text">This theme is awesome!</p>
                                <p class="inbox-item-date">9:56 AM</p>
                            </div>
                        </a>
                        <a href="#">
                            <div class="inbox-item">
                                <div class="inbox-item-img"><img src="resources/img/users/avatar-8.jpg" class="rounded-circle bx-shadow-lg" alt=""></div>
                                <p class="inbox-item-author">Arashasghari</p>
                                <p class="inbox-item-text">Hey! there I'm available...</p>
                                <p class="inbox-item-date">10:15 AM</p>
                            </div>
                        </a>
                        <a href="#">
                            <div class="inbox-item">
                                <div class="inbox-item-img"><img src="resources/img/users/avatar-9.jpg" class="rounded-circle bx-shadow-lg" alt=""></div>
                                <p class="inbox-item-author">Joshaustin</p>
                                <p class="inbox-item-text">I've finished it! See you so...</p>
                                <p class="inbox-item-date">9:56 AM</p>
                            </div>
                        </a>														
                                    </div><div class="slimScrollBar" style="background: rgb(158, 165, 171); width: 8px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 253.989px;"></div><div class="slimScrollRail" style="width: 8px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card-box">
                                    <h4 class="header-title mb-4">Latest Comments</h4>
                                    <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 437.6px;"><div class="comment-list slimscroll" style="max-height: 370px; overflow: hidden; width: auto; height: 437.6px;">
                                        <a href="#">
                                            <div class="comment-box-item">
                                                <div class="badge badge-pill badge-success">Ubold - Admin</div>
                                                <p class="commnet-item-date">1 month ago</p>
                                                <h6 class="commnet-item-msg">Do you have any plans to add a vertical menu?</h6>
                                                <p class="commnet-item-user">Ubold User</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div class="comment-box-item">
                                                <div class="badge badge-pill badge-warning">Adminox - Admin</div>
                                                <p class="commnet-item-date">1 month ago</p>
                                                <h6 class="commnet-item-msg">Hello, what is your plan to upgrade Bootstrap 4 versions? Beta or wait for stable?</h6>
                                                <p class="commnet-item-user">Ubold User</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div class="comment-box-item">
                                                <div class="badge badge-pill badge-primary">Staro - Landing</div>
                                                <p class="commnet-item-date">1 month ago</p>
                                                <h6 class="commnet-item-msg">Hi coderthemes – do you have PSD for this admin UI? I could really use it.</h6>
                                                <p class="commnet-item-user">Ubold User</p>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div class="comment-box-item">
                                                <div class="badge badge-pill badge-dark">Ubold - Admin</div>
                                                <p class="commnet-item-date">1 month ago</p>
                                                <h6 class="commnet-item-msg">Do you have any plans to add a vertical menu?</h6>
                                                <p class="commnet-item-user">Ubold User</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="slimScrollBar" style="background: rgb(158, 165, 171); width: 8px; position: absolute; top: 65px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 305.58px;">
                                    </div>
                                    <div class="slimScrollRail" style="width: 8px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;">
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card-box">
                                    <h4 class="header-title mb-4">Last Transactions</h4>
                                    <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 437.6px;"><ul class="list-unstyled transaction-list slimscroll mb-0" style="max-height: 370px; overflow: hidden; width: auto; height: 437.6px;">
                                        <li>
                                            <i class="dripicons-arrow-down text-success"></i>
                                            <span class="tran-text">Advertising</span>
                                            <span class="pull-right text-success tran-price">+$230</span>
                                            <span class="pull-right text-muted">07/09/2017</span>
                                            <span class="clearfix"></span>
                                        </li>
                                        <li>
                                            <i class="dripicons-arrow-up text-danger"></i>
                                            <span class="tran-text">Support licence</span>
                                            <span class="pull-right text-danger tran-price">-$965</span>
                                            <span class="pull-right text-muted">07/09/2017</span>
                                            <span class="clearfix"></span>
                                        </li>
                                        <li>
                                            <i class="dripicons-arrow-down text-success"></i>
                                            <span class="tran-text">Extended licence</span>
                                            <span class="pull-right text-success tran-price">+$830</span>
                                            <span class="pull-right text-muted">07/09/2017</span>
                                            <span class="clearfix"></span>
                                        </li>
                                        <li>
                                            <i class="dripicons-arrow-down text-success"></i>
                                            <span class="tran-text">Advertising</span>
                                            <span class="pull-right text-success tran-price">+$230</span>
                                            <span class="pull-right text-muted">05/09/2017</span>
                                            <span class="clearfix"></span>
                                        </li>
                                        <li>
                                            <i class="dripicons-arrow-up text-danger"></i>
                                            <span class="tran-text">New plugins added</span>
                                            <span class="pull-right text-danger tran-price">-$452</span>
                                            <span class="pull-right text-muted">05/09/2017</span>
                                            <span class="clearfix"></span>
                                        </li>
                                        <li>
                                            <i class="dripicons-arrow-down text-success"></i>
                                            <span class="tran-text">Google Inc.</span>
                                            <span class="pull-right text-success tran-price">+$230</span>
                                            <span class="pull-right text-muted">04/09/2017</span>
                                            <span class="clearfix"></span>
                                        </li>
                                        <li>
                                            <i class="dripicons-arrow-up text-danger"></i>
                                            <span class="tran-text">Facebook Ad</span>
                                            <span class="pull-right text-danger tran-price">-$364</span>
                                            <span class="pull-right text-muted">03/09/2017</span>
                                            <span class="clearfix"></span>
                                        </li>
                                        <li>
                                            <i class="dripicons-arrow-down text-success"></i>
                                            <span class="tran-text">New sale</span>
                                            <span class="pull-right text-success tran-price">+$230</span>
                                            <span class="pull-right text-muted">03/09/2017</span>
                                            <span class="clearfix"></span>
                                        </li>
                                        <li>
                                            <i class="dripicons-arrow-down text-success"></i>
                                            <span class="tran-text">Advertising</span>
                                            <span class="pull-right text-success tran-price">+$230</span>
                                            <span class="pull-right text-muted">29/08/2017</span>
                                            <span class="clearfix"></span>
                                        </li>
                                        <li>
                                            <i class="dripicons-arrow-up text-danger"></i>
                                            <span class="tran-text">Support licence</span>
                                            <span class="pull-right text-danger tran-price">-$854</span>
                                            <span class="pull-right text-muted">27/08/2017</span>
                                            <span class="clearfix"></span>
                                        </li>
                                    </ul><div class="slimScrollBar" style="background: rgb(158, 165, 171); width: 8px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 204.328px;"></div><div class="slimScrollRail" style="width: 8px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div>
                                </div>
                            </div>    
                            
                            
                            
                        </div>
                        </div>
                    </div> <!-- container -->
                </div> <!-- content -->
                
                
                
                <footer class="footer text-right">
                    2019 - 2020 © Goodfor. - www.Goodfor.com
                </footer>
            </div>
        </div>
	</body>`
	}
}