import React from 'react';

const AdminComponent = () => {
  return (
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
      <aside className="left-sidebar">
        <div className="scroll-sidebar" data-simplebar>
          <div className="d-flex mb-4 align-items-center justify-content-between">
            <a href="#" className="text-nowrap logo-img ms-0 ms-md-1"></a>
            <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
              <i className="ti ti-x fs-8"></i>
            </div>
          </div>
          <nav className="sidebar-nav">
            <ul id="sidebarnav" className="mb-4 pb-2">
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-5"></i>
                <span className="hide-menu">Quay lại</span>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link sidebar-link primary-hover-bg" href="/admin/home" aria-expanded="false">
                  <span className="aside-icon p-2 bg-light-primary rounded-3">
                    <i className="ti ti-layout-dashboard fs-7 text-primary"></i>
                  </span>
                  <span className="hide-menu ms-2 ps-1">Trang chủ</span>
                </a>
              </li>
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-5"></i>
                <span className="hide-menu">Các chức năng</span>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link sidebar-link warning-hover-bg" href="/admin/user" aria-expanded="false">
                  <span className="aside-icon p-2 bg-light-warning rounded-3">
                    <i className="ti ti-article fs-7 text-warning"></i>
                  </span>
                  <span className="hide-menu ms-2 ps-1">Users</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link sidebar-link danger-hover-bg" href="/admin/product" aria-expanded="false">
                  <span className="aside-icon p-2 bg-light-danger rounded-3">
                    <i className="ti ti-alert-circle fs-7 text-danger"></i>
                  </span>
                  <span className="hide-menu ms-2 ps-1">Products</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link sidebar-link success-hover-bg" href="/admin/brand" aria-expanded="false">
                  <span className="aside-icon p-2 bg-light-success rounded-3">
                    <i className="ti ti-cards fs-7 text-success"></i>
                  </span>
                  <span className="hide-menu ms-2 ps-1">Brands</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <div className="body-wrapper">
        <header className="app-header">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
              <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                <li className="nav-item dropdown">
                  <a className="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown" aria-expanded="false"></a>
                  <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                    <div className="message-body">
                      <a href="#" className="btn btn-outline-primary mx-3 mt-2 d-block shadow-none">Logout</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              {/* Nội dung của trang admin */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminComponent;
