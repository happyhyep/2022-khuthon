import React, { useEffect, useState } from 'react';
import TopMenu from '../Layout/TopMenu';
import styles from '../assets/styles.module.css';
import { useLocation } from "react-router-dom"
import Background from '../Layout/Backgroud';

const BaseLayout = (props) => {

    return (
    <div >
       <TopMenu/>
        {/* <div className={styles.mainContainer}> */}
            {/* <SideMenu/> */}
            {/* <main className={styles.main}>{props.children}</main>: */}
        {/* </div> */}

    </div>
    );
};

export default BaseLayout;