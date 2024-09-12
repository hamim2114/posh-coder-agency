import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../utils/axiosReq';

export const useUserInfo = () => {
    const { data, error,refetch } = useQuery({
        queryKey: ['me'],
        queryFn: () => axiosReq.get('/auth/me').then(res => res.data),
        // retry: false,
        // refetchOnWindowFocus: false,
    });
    const userData = {
        userInfo: data,
        error: error?.response?.data
    }
    
    return userData
};
