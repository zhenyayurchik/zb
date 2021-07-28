import React from 'react'
import logo from 'mock/logo.svg'
import cards from 'mock/cards.png'
import trackButton from 'mock/trackButton.svg'
import { headers, tableData } from 'mock/data'
import styles from './MainLayout.module.scss'
import { CarNumber } from '../../components/CarNumber/CarNumber'
import { InitiateButton } from '../../components/InitiateButton/InitiateButton'

export const MainLayout = () => {
    return (
        <div className={styles.mainLayout}>
            <div className={styles.topWrapper}>
                <div className={styles.topWrapper__description}>
                    <img src={logo} alt="logo" />
                    <h3>Pay as you drive</h3>
                    <p>
                        {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has `}
                    </p>
                </div>
                <div className={styles.topWrapper__picture}>
                    <img src={cards} alt="cards" />
                </div>
            </div>
            <div className={styles.table}>
                <table>
                    <thead>
                        <tr>
                            <td colSpan={2} />
                            <th style={{ paddingLeft: '450px' }}>{'Driver'}</th>
                            <th style={{ paddingLeft: '192px' }}>
                                {'Add Date'}
                            </th>
                            <th style={{ paddingLeft: '162px' }}>
                                {'Expense'}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <img src={trackButton} alt="trackButton" />
                                </td>
                                <td style={{ paddingLeft: '27px' }}>
                                    <CarNumber number={item.carNumber} />
                                </td>
                                <td style={{ paddingLeft: '166px' }}>
                                    {item.driver}
                                </td>
                                <td style={{ paddingLeft: '155px' }}>
                                    {item.addDate}
                                </td>
                                <td style={{ paddingLeft: '155px' }}>
                                    {item.expense}
                                </td>
                                <td style={{ paddingLeft: '218px' }}>
                                    <InitiateButton />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
