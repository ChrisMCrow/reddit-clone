import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div id='navbar'>
      <style jsx>{`
        ul {
          list-style-type: none;
          color: black;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background-color: white;
        }

        li {
          display: inline-block;
          margin-right: 20px;
        }

        ul:first-child {
          display: block;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
        }

        li:hover {
          color: darkorange;
          cursor: pointer;
        }

        #navbar {
          display: inline-block;
        }
      `}</style>
      <ul>
        <li>Reddit</li>
        <li>Home</li>
        <li>
          <input placeholder='search'/>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
