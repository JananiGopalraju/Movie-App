import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white mt-700">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 text-yellow-300">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          </svg>
          <p className="font-bold">MovieMaze <br />"Your Gateway to the Cinematic World"</p>
        </div>

        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transform transition-transform hover:scale-125">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8"
              viewBox="0 0 24 24">
              <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.57 2.163-2.724-.949.564-2 .974-3.127 1.195a4.514 4.514 0 00-7.691 4.115 12.797 12.797 0 01-9.29-4.711 4.49 4.49 0 00-.61 2.27c0 1.563.796 2.942 2.007 3.75a4.503 4.503 0 01-2.045-.566v.057c0 2.18 1.551 4.003 3.604 4.42a4.533 4.533 0 01-2.037.078 4.52 4.52 0 004.215 3.13 9.039 9.039 0 01-5.595 1.93c-.363 0-.72-.021-1.074-.063a12.805 12.805 0 006.926 2.029c8.313 0 12.85-6.876 12.85-12.849 0-.196-.004-.392-.014-.586A9.176 9.176 0 0024 4.557z" />
            </svg>
          </a>

          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transform transition-transform hover:scale-125">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8"
              viewBox="0 0 24 24">
              <path d="M22.675 0H1.326C.594 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.326 24H12.82V14.706h-3.32v-3.593h3.32V8.41c0-3.292 2.007-5.083 4.941-5.083 1.404 0 2.611.105 2.962.151v3.433h-2.03c-1.591 0-1.898.757-1.898 1.866v2.444h3.797l-.494 3.593h-3.303V24h6.462c.732 0 1.326-.593 1.326-1.326V1.326C24 .593 23.406 0 22.675 0z" />
            </svg>
          </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transform transition-transform hover:scale-125">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8"
              viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.17.054 1.97.24 2.428.41a4.92 4.92 0 011.75 1.14 4.924 4.924 0 011.141 1.748c.17.458.356 1.258.41 2.428.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.054 1.17-.24 1.97-.41 2.428a4.92 4.92 0 01-1.14 1.75 4.924 4.924 0 01-1.748 1.141c-.458.17-1.258.356-2.428.41-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.054-1.97-.24-2.428-.41a4.92 4.92 0 01-1.75-1.14 4.924 4.924 0 01-1.141-1.748c-.17-.458-.356-1.258-.41-2.428-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.054-1.17.24-1.97.41-2.428a4.92 4.92 0 011.14-1.75 4.924 4.924 0 011.748-1.141c.458-.17 1.258-.356 2.428-.41C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.742 0 8.332.013 7.052.072 5.757.131 4.608.323 3.642.667a6.996 6.996 0 00-2.574 1.657A6.992 6.992 0 00.667 4.876C.323 5.842.131 6.992.072 8.287.013 9.568 0 9.978 0 12s.013 2.432.072 3.712c.059 1.295.251 2.445.595 3.411a6.996 6.996 0 001.658 2.574 6.992 6.992 0 002.574 1.658c.966.344 2.116.536 3.411.595C8.332 23.987 8.742 24 12 24s3.668-.013 4.948-.072c1.295-.059 2.445-.251 3.411-.595a6.996 6.996 0 002.574-1.657 6.992 6.992 0 001.657-2.574c.344-.966.536-2.116.595-3.411C23.987 15.668 24 15.258 24 12s-.013-2.432-.072-3.712c-.059-1.295-.251-2.445-.595-3.411a6.996 6.996 0 00-1.657-2.574 6.992 6.992 0 00-2.574-1.657c-.966-.344-2.116-.536-3.411-.595C15.668.013 15.258 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.161a3.999 3.999 0 110-7.999 3.999 3.999 0 010 7.999zm6.406-10.845a1.44 1.44 0 11-2.879 0 1.44 1.44 0 012.879 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



