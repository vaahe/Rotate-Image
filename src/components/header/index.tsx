import { NextPage } from "next";
import Image from "next/image";
import { FiShare2 } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";

import styles from "@styles/Header.module.css";

const Header: NextPage = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.leftTools}>
        <Image
          src="/assets/quickTool.png"
          alt="quick tools"
          width={175}
          height={42}
        />
        <ul className={styles.navLink}>
          <li>
            Convert <HiChevronDown className={styles.arrowDown} />
          </li>
          <li>
            Images <HiChevronDown className={styles.arrowDown} />
          </li>
          <li>
            PDF <HiChevronDown className={styles.arrowDown} />
          </li>
          <li>
            Text <HiChevronDown className={styles.arrowDown} />
          </li>
          <li>
            Videos <HiChevronDown className={styles.arrowDown} />
          </li>
          <li>
            Design <HiChevronDown className={styles.arrowDown} />
          </li>
          <li>
            Color <HiChevronDown className={styles.arrowDown} />
          </li>
        </ul>
      </div>
      <div className={styles.headerRightTools}>
        <form className={styles.form}>
          <input
            type="search"
            className={styles.searchBar}
            placeholder="Search"
          />
          <CiSearch className={styles.searchIcon} />
        </form>
        <FiShare2 className={styles.shareIcon} />
      </div>
    </nav>
  );
};

export default Header;
