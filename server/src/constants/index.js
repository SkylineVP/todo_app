export const LOGIN_PATTERN=/(?!^\d)^\w{6,16}$/;
export const PASSWORD_PATTERN=/^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])[a-zA-Z0-9_$%@?!#]{8,60}$/;
export const USER_NAME_PATTERN=/^[A-Za-z]{0,63}$/;

export const ACTIONS={
    CREATE:'CREATE',
    DELETE:'DELETE',
    READ:'READ',
    UPDATE:'UPDATE',
    
};