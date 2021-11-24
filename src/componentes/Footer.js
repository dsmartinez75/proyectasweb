import { Link, NavLink } from "react-router-dom";
import React from "react";


export const Footer = () => {
  return (
      <footer>
        <div className="container-fluid pie_pagina">
            <div className="row-header">
              <div className="log-footer">
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link login"
                  exact
                  to="/Home"
                >
                  <img className="log-jk" src="/img/jk-logo.png" alt="" />
                </NavLink>
              </div>
              <div className="row_contact">
                <div className="row-shear-2">
                  <div className="contac_info"> Contactos y Sedes:</div>
                  <div className="contac_info2">
                    Bogotá Avenida Caracas # 46 -72<br></br>
                    Bogotá Carrera 13 # 47 – 30<br></br>
                    Bogotá Diagonal 46 A # 15 B – 10<br></br>
                    Bogotá Calle 47 # 13 - 54<br></br>
                  </div>
                  <div className="contac_info2">
                    (60 1) 3 27 73 00<br></br>
                    (60 1) 3 27 73 33
                  </div>
                </div>
              </div>
              <div className="log-footer2" align="center">
                <div>
                    <a href="https://www.facebook.com/9707JK" target="_blank">    
                      <div class="social"><img src="https://i.imgur.com/PY2EPRW.png"/></div>
                    </a>
                    <a href="https://twitter.com/JkGutiM" target="_blank">   
                      <div class="social"> <img src="https://i.imgur.com/ny0pyqt.png"/> </div>
                    </a>
                    <a href="https://www.instagram.com/jk_g_m" target="_blank">    
                      <div class="social"> <img src="https://i.imgur.com/tZZG2zQ.png"/></div>
                    </a>
                </div>
              </div>
            </div>
        </div>
      </footer>
  );
};