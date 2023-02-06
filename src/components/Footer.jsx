import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} krishnaa2902@gmail.com</p>
    </footer>
  );
}

export default Footer;
