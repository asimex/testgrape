import { FC, MouseEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { Menu, Dropdown ,Avatar,message,notification} from "antd";
import {
  UserOutlined,
  DownOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import axios from "axios";
import Image from 'next/image';
import Styles from "./header.module.css";
import Link from "next/link";
import { Radio, Select, Space } from 'antd';
import axiosClient from "../../utils/axiosClient";



const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const Header: FC = () => {
  const router = useRouter();
  const [userRole, setUserRole] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLogout = async () => {
    setIsLoading(true);
  
    try {

  
      const response = await axiosClient.post('/auth/logout', {});
  
      if (
        response.status === 200 &&
        response.data.message === "Logout successful"
      ) {
        localStorage.clear(); // Clear all items from local storage
        sessionStorage.clear();
  
        await router.push("/login");
      } else {
        // console.error("Error:", response.status, response.data.error);
      }
    } catch (error) {
      // console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  

  const menuItems = useMemo(
    () => (
      <Menu>
        <Menu.Item key="features" onClick={() => router.push("/features")}>
          Features
        </Menu.Item>
        <Menu.Item key="careers" onClick={() => router.push("/careers")}>
          Careers
        </Menu.Item>
        <Menu.Item key="contactus" onClick={() => router.push("/contactus")}>
          Contact Us
        </Menu.Item>
      </Menu>
    ),
    [router]
  );

  const userMenu = useMemo(
    () => () => {
      router.push("/login");
    },
    [router]
  );

  const changePasswordMenu = useMemo(
    () => () => {
      if (user && user.role) {
        router.push("/changepassword");
      } else {
        router.push("/login");
      }
    },
    [router, user]
  );




 

 
  const navigateToHome = (event: MouseEvent<HTMLHeadingElement>): void => {

      router.push("/login");
  
  };
 





  return (
    <header className={`${Styles["enkindl-header-container"]}`}>
      <div className={`${Styles["enkindl-header-content"]}`}>
        <h1 className={Styles["header-title"]} onClick={navigateToHome}>
          E.
        </h1>
        <nav className={`${Styles["header-nav"]}`}>
          <ul className={`${Styles["enkindl-header-ul"]}`}>
      
          </ul>
        </nav>
      </div>

 
  {isMobile ? (
      <nav>
        <ul className={`${Styles["enkindl-header-ul-user"]}`}>
          <li>
            {isMobile && !userRole && !isLoading && (
              <a className={`${Styles["header-link"]}`} onClick={userMenu}>
                <UserOutlined
                  style={{ fontSize: "20px", marginRight: "5px" }}
                />
              </a>
            )}
            {!userRole && !isMobile && !isLoading && (
              <a
                className={`${Styles["header-link-login"]}`}
                onClick={() => router.push("/login")}
              >
                Login
              </a>
            )}
          </li>

          {!userRole && !isMobile && !isLoading && (
            <li>
              <a
                className={`${Styles["header-link-signup"]}`}
                onClick={() => router.push("/signup")}
              >
                Sign Up
              </a>
            </li>
          )}
          {userRole !== ""  && !isLoading && (
            <li style={{ listStyle: "none" }}>{profileAvatar}</li>
          )}
        </ul>
      </nav>
           ) : (
            <p></p>
          )}
    </header>
  );
};

export default Header;
