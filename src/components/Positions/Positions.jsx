import React, { useEffect, useState } from 'react';
import { RadioBtn } from '../UI/RadioBtn';
import styles from './Positions.module.scss';
import axios from 'axios';
import { FETCH_URL_POS } from '../../config/config';
import { Preloader } from '../UI/Preloader';

const Positions = ({ register, error }) => {
    const [positions, setPositions] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        try {
            setStatus(true);
            fetchPositions();
        } catch (e) {
            setStatus(false);
            console.log(e);
        } finally {
            setStatus(false);
        }
    }, []);

    const fetchPositions = async () => {
        const { data } = await axios.get(FETCH_URL_POS);
        setPositions(data.positions);
    }

    return (
        <div className={styles.positions_wrapper}>
            <p className={styles.positions_subtitle}>Select your position</p>
            {status
                ? <Preloader />
                :
                <>
                    <ul className={styles.positions_list}>
                        {positions.map(i => (
                            <li className={styles.positions_list_item} key={i.id}>
                                <RadioBtn register={register} value={i.id}>{i.name}</RadioBtn>
                            </li>
                        ))}
                    </ul>

                    <p className={styles.positions_error}>
                        {error?.message}
                    </p>
                </>

            }

        </div>
    );
};

export { Positions };