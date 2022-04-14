import { Banner } from "../Banner";
import { useEffect, lazy } from 'react';
import { fetchUsers } from '../../store/userSlice';
import { useDispatch } from 'react-redux';

const SectionGet = lazy(() => import("../SectionGet/SectionGet"));
const SectionPost = lazy(() => import("../SectionPost/SectionPost"));

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <main>
            <Banner />
            <SectionGet />
            <SectionPost />
        </main>
    );
}

export { Main };