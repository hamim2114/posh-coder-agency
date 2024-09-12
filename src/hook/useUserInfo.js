import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../utils/axiosReq';
import { useAuth } from '../context/AuthProvider';

export const useUserInfo = () => {
    const {token} = useAuth()
    const { data, error,refetch } = useQuery({
        queryKey: ['me'],
        queryFn: () => axiosReq.get('/auth/me',{headers:{Authorization: token}}).then(res => res.data),
        // retry: false,
        // refetchOnWindowFocus: false,
    });
    const userData = {
        userInfo: data,
        error: error?.response?.data
    }
    
    return userData
};
