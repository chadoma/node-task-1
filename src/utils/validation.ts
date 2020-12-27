export const isValidEmail = (email: string): boolean => {
    const emailReg = /^[a-zA-Z0-9.!#$%&'*+\n/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailReg.test(email);
};

export const isValidPassword = (password: string, confirmPassword: string): boolean => {
    return (password === confirmPassword && password.length >= 7);
};

export const isValidInput = (username: string, email: string, password: string, confirmPassword: string): boolean => {
    return (username !== '' && email !== '' && password !== '' && confirmPassword !== '');
};

