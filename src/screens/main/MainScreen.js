import React from 'react'
import styles from './MainScreen.module.scss'
import { SideBarLayout } from 'layouts/sideBar/SideBarLayout'
import { MainLayout } from 'layouts/main/MainLayout'

export const MainScreen = () => {
    return (
        <div className={styles.mainScreen}>
            <SideBarLayout />
            <MainLayout />
        </div>
    )
}
