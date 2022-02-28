import React, { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"

const arrow = {
  // cursor: pointer,
  // color: 'blue',
  // align: 'right',
}

function Footer() {
  const sendUp = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div class="container">
        <footer class="row row-cols-5 py-5 my-5 border-top">
          <div class="col">
            <Button variant="outline-secondary" style={arrow} onClick={sendUp}>
              {" "}
              ^ Return to top of page
            </Button>
            <a
              href="/"
              class="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <svg class="bi me-2" width="40" height="32">
                {/* Add logo */}
              </svg>
            </a>
            <p class="text-muted">&copy; 2022</p>
          </div>

          <div class="col"></div>

          <div class="col">
            <h5>Mental Health</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Book counselling
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Browse counselling
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Group Therapy
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Emergency resources
                </a>
              </li>
            </ul>
          </div>

          <div class="col">
            <h5>Other</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Community activities
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Food
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Report an issue
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Volunteering
                </a>
              </li>
            </ul>
          </div>

          <div class="col">
            <h5>About us </h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  About
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-muted">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
