import React from 'react'
import carNumber from 'mock/carNumber.svg'
import styles from './CarNumber.module.scss'
export const CarNumber = ({ number }) => {
    return (
        <div className={styles.carNumber}>
            <img src={carNumber} alt="carNumber" />
            <div className={styles.carNumber__number}>{number}</div>
            <div className={styles.carNumber__typeOfCar}>
                IVECO EUROCARGO 2008
            </div>
        </div>
    )
}
