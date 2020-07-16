import React, { Component } from 'react';
import './PxCatalog.css';

class PxCatalog extends Component {
  render() {
    return (
        <div className="PxCatalog_Container">

          {/* PX Catalog goes here */}
          <ul className="PxCatalog_List">
            <li>
              Caset — Sumergido — 12 formas de alejarse de todo
            </li>

            <li>
              Caset — Varios — Nuevos sonidos vol.1
            </li>

            <li>
              Caset — Audiodélica — MXS
            </li>

            <li>
              PXCD001 — Varios — Planeta X
            </li>

            <li>
              PXCD002 — Sumergido — 12 formas de alejarse de todo
            </li>

            <li>
              PXCD003 — Audiodélica — 1993/97 - 1998
            </li>
  
            <li>
              PXCD004 — Martim Arce — Detonador
            </li>

          </ul>
          
        </div>
    );
  }
}

export default PxCatalog;
