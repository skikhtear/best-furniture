import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../component/hooks/useAdmin';
import Loading from '../../component/Pages/Shared/Loading/Loading';
import { AuthContext } from '../../Context/AuthProvider';




const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;