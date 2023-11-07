import { useContext } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { Navigate } from 'react-router-dom';
import { BookWaveContext } from '../Providers/UserProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(BookWaveContext)
    if (loading) {
        return <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <p>
                <Skeleton count={3} />
            </p>
        </SkeletonTheme>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;