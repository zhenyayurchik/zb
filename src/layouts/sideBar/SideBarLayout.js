import React from 'react'
import avatarSrc from 'mock/avatar.png'
import starIcon from 'mock/starIcon.svg'
import doneIcon from 'mock/doneIcon.svg'
import turnOffIcon from 'mock/turnOffIcon.svg'
import settingsIcon from 'mock/settingsIcon.svg'
import styles from './SideBarLayout.module.scss'

export const SideBarLayout = () => {
    return (
        <div className={styles.sideBar}>
            <div className={styles.sideBar__status}>S</div>
            <div className={styles.sideBar__buttonsWrapper}>
                <img
                    src={starIcon}
                    className={styles.sideBar__iconButton}
                    alt="starIcon"
                />
                <img
                    src={doneIcon}
                    className={styles.sideBar__iconButton}
                    alt="doneIcon"
                />
                <img
                    src={settingsIcon}
                    className={styles.sideBar__iconButton}
                    alt="settingsIcon"
                />{' '}
                <img
                    src={turnOffIcon}
                    className={styles.sideBar__iconButton}
                    alt="turnOffIcon"
                />
            </div>
            <img
                className={styles.sideBar__avatar}
                src={avatarSrc}
                alt="avatar"
            />
        </div>
    )
}
