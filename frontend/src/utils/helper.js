export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Please enter a valid email address';
    return '';
};

export const validatePassword = (password) => {
    if (!password) return 'Password is required';

    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < minLength)
        return `Password must be at least ${minLength} characters long`;
    if (!uppercaseRegex.test(password))
        return 'Password must contain at least one uppercase letter';
    if (!lowercaseRegex.test(password))
        return 'Password must contain at least one lowercase letter';
    if (!numberRegex.test(password))
        return 'Password must contain at least one number';
    if (!specialCharRegex.test(password))
        return 'Password must contain at least one special character';

    return '';
};
