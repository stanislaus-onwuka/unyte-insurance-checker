import React from "react";
import UnyteLogo from "../../assets/unyte-logo.svg";
import ArrowUpRight from "../../assets/icons/arrow-up-right.svg";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="flex justify-between px-7 py-[30px] md:px-11">
      <Link to="/">
        <div className="flex items-center gap-[10px]">
          <img src={UnyteLogo} alt="Unyte Logo" />
          <h3 className="font-semibold text-lg">Unyte</h3>
        </div>
      </Link>
      <a href="https://ng.unyte.africa/company/contact" target="_blank" className="bg-base-green flex items-center gap-[10px] rounded-[40px] py-2 px-[14px] md:py-3 md:px-[18px]" rel="noreferrer">
        <h3 className="font-body text-base font-medium text-base-white md:text-lg">Get Started</h3>
        <img src={ArrowUpRight} alt="Unyte Logo" className="md:w-3" />
      </a>
    </nav>
  );
}

export default Navigation;
