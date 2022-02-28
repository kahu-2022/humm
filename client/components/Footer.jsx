import React, { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import Image from 'react-bootstrap/Image'

function Footer() {
  const sendUp = () => {
    window.scrollTo(0, 0)
  }
  
  return (
    <>
      <div className="container">
        <footer className="row row-cols-5 py-5 my-5 border-top">
          <div className="col">
            <Button variant="outline-secondary" onClick={sendUp}>
              {" "}
              <Image src='./images/back-to-top-icon.png' title='return to top' fluid='true' className='arrow' /> Return to top of page
            </Button>
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-dark text-decoration-none"
            >
              <svg className="bi me-2" width="40" height="32">
                {/* Add logo */}
              </svg>
            </a>
            <p className="text-muted">&copy; 2022</p>
          </div>



          <div className="col"></div>
          <div className="col">
            <h5>Mental Health</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Book counselling
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Browse counselling
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Group Therapy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Emergency resources
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>Other</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Community activities
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Food
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Report an issue
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Volunteering
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>About us </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
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
