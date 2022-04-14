import { Card } from '../Card/Card';
import styles from './UsersList.module.scss';

const UsersList = ({ users = [] }) => {

    return (
        <ul className={styles.users_list}>
            {users.map(i => (
                <li className={styles.users_list__item} key={i.id}>
                    <Card
                        name={i.name}
                        email={i.email}
                        phone={i.phone}
                        position={i.position}
                        photo={i.photo}
                    />
                </li>
            ))}
        </ul>
    );
}

export { UsersList };