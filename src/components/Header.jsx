/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '../../config/website';
import HegLogo from '../images/heg-logo-portal.png';
import ADHBLogo from '../images/adhb-logo.png';

export default function Header() {
  return (
    <React.Fragment>
      <Helmet>
        <html lang={config.siteLanguage} />
        <title>Horizon</title>
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicons/fav.png" />
        <meta name="msapplication-TileColor" content="#b710a1" />
        <meta name="msapplication-config" content="browserconfig.xml" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossOrigin="anonymous"
        />
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" />
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.bundle.min.js" />
      </Helmet>

      <nav className="navbar navbar-expand-md navbar-light bg-light static-top border-bottom shadow">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={HegLogo} alt="HEG logo" />
          </a>
          <a className="navbar-brand" href="#">
            <img height="74" width="auto" src={ADHBLogo} alt="ADHB logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item pt-md-3 pt-2 pr-4">
                <a href="/" className="text-dark">
                  Home
                </a>
              </li>
              <li className="nav-item pt-md-3 pt-2 pr-4">
                <a href="/app/reactiveJobs" className="text-dark">
                  Reactive Jobs
                </a>
              </li>
              <li className="nav-item pt-2 pr-4">
                <a href="/app/login" className="btn btn-outline-secondary">
                  Login
                </a>
              </li>
              <li className="nav-item pt-2 pr-4 ">
                <a href="/app/logout" className="btn btn-outline-secondary">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
