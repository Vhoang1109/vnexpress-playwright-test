export type LoginData = {
    email: string;
    password: string;
};

export const loginData: Record<string, LoginData> = {
    validUser: {
        email: "vhoang1192@gmail.com",
        password: "@Hoang1109",
    },

    invalidUser: {
        email: "vhoang1192@gmail.com",
        password: "wrong_password",
    },

    emptyPassword: {
        email: "vhoang1192@gmail.com",
        password: "",
    },

    emptyEmail: {
        email: "",
        password: ""
    },
};