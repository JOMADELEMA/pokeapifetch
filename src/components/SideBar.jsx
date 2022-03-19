import React from "react";
import "./SideBar.css";
import * as BootComp from "react-bootstrap";

function SideBar() {
  return (
    <>
      {/* <!-- Side navigation --> */}
      <div class="sidenav">

        <BootComp.Accordion defaultActiveKey="0" className="acordion">
          <BootComp.Accordion.Item eventKey="0" className="dark"> 
            <BootComp.Accordion.Header>Header 1</BootComp.Accordion.Header>
            <BootComp.Accordion.Body className="dark">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique ad placeat facere, accusantium molestias tenetur porro
              sunt recusandae quibusdam ipsam aspernatur quam officiis, facilis
              atque consequuntur, nisi delectus et in.
            </BootComp.Accordion.Body>
          </BootComp.Accordion.Item>
          <BootComp.Accordion.Item eventKey="1">
            <BootComp.Accordion.Header>Header 1</BootComp.Accordion.Header>
            <BootComp.Accordion.Body>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique ad placeat facere, accusantium molestias tenetur porro
              sunt recusandae quibusdam ipsam aspernatur quam officiis, facilis
              atque consequuntur, nisi delectus et in.
            </BootComp.Accordion.Body>
          </BootComp.Accordion.Item>
        </BootComp.Accordion>
      </div>

      {/* <!-- Page content --> */}

      {/* <div class="flex-shrink-0 p-3 bg-white" >
        <a
          href="/"
          class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
        >
          <span class="fs-5 fw-semibold">Collapsible</span>
        </a>
        <ul class="list-unstyled ps-0">
          <li class="mb-1">
            <button
              class="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="true"
            >
              Home
            </button>
            <div class="collapse show" id="home-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" class="link-dark rounded">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Updates
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Reports
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="mb-1">
            <button
              class="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              Dashboard
            </button>
            <div class="collapse" id="dashboard-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" class="link-dark rounded">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Weekly
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Monthly
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Annually
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="mb-1">
            <button
              class="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              Orders
            </button>
            <div class="collapse" id="orders-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" class="link-dark rounded">
                    New
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Processed
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Shipped
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Returned
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="border-top my-3"></li>
          <li class="mb-1">
            <button
              class="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#account-collapse"
              aria-expanded="false"
            >
              Account
            </button>
            <div class="collapse" id="account-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="#" class="link-dark rounded">
                    New...
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" class="link-dark rounded">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div> */}
    </>
  );
}

export default SideBar;
