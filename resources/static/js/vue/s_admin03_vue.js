"use strict";
var s_admin03_vue = s_admin03_vue || {}
s_admin03_vue = {
		admin03_body : x=>{
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
                                <a href="javascript: void(0);"><i class="fi-briefcase"></i> <span> DashBoard </span> <span class="menu-arrow"></span></a>
                            </li>
                            <li>
                                <a href="javascript: void(0);"><i class="fi-box"></i><span> Monthly Anaysis </span> <span class="menu-arrow"></span></a>
                            </li>
                            <li>
                                <a href="javascript: void(0);"><i class="fi-bar-graph-2"></i><span> System Monitoring </span> <span class="menu-arrow"></span></a>
                            </li>
                            <li>
                                <a href="javascript: void(0);"><i class="fi-mail"></i><span> Q&A Mangement </span> <span class="menu-arrow"></span></a>
                            </li>
                            
                
                </div>
                <!-- Sidebar -left -->
            </div>
            <!-- Left Sidebar End -->
            <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== -->
            <div class="content-page">
                
                <!-- Start content -->
                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <h4 class="page-title float-left">Dashboard</h4>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->
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
                        </div>
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
                                    </div>
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