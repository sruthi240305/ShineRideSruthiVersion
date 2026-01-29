export const useAuth = () => {
    const userStr = localStorage.getItem('user');
    const user = userStr ? JSON.parse(userStr) : null;
    return {
        user,
        isLoading: false
    };
};

export default useAuth;
