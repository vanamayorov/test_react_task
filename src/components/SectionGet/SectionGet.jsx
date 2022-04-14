import { Section } from '../Section/';
import { Button } from '../UI/Button';
import { ButtonRow } from '../UI/ButtonRow';
import { Heading } from '../UI/Heading';
import { UsersList } from '../UsersList/UsersList';
import { useSelector } from 'react-redux';
import { Preloader } from '../UI/Preloader';
import { useDispatch } from 'react-redux';
import { loadMoreUsers } from '../../store/userSlice';



const SectionGet = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const status = useSelector(state => state.users.status);
  const totalPages = useSelector(state => state.users.totalPages);
  const currentPage = useSelector(state => state.users.page);

  const loadUsers = () => {
    dispatch(loadMoreUsers());
  }


  return (
    <Section id="get">
      <Heading>Working with GET request</Heading>
      {!users.length
        ?
        <p style={{ textAlign: 'center' }}>No users...</p>
        :
        <>
          <UsersList users={users} />
          {status && <Preloader />}

          {currentPage < totalPages &&
            <ButtonRow>
              <Button
                wide={true}
                onClick={loadUsers}
              >
                Show more
              </Button>
            </ButtonRow>
          }

        </>
      }
    </Section>
  )
}

export default SectionGet;