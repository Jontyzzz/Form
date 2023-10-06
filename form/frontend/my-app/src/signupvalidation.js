function validation(values) {
    let errors = {};

    // Name validation
    if (!values.name.trim()) {
        errors.name = "Name is required";
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(values.name)) {
        errors.name = "Name must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number";
    }
    // Email validation
    if (!values.email.trim()) {
        errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email format";
    }

    // Password validation
    if (!values.password.trim()) {
        errors.password = "Password is required";
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(values.password)) {
        errors.password = "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number";
    }

    return errors;
}

export default validation;
