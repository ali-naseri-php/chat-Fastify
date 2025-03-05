export const valid = {
    body: {
        properties: {
            email: { type: "string", format: "email", minLength: 5 },
            password: { type: "string", minLength: 8 },
        },
        required: ["email", "password"],
    },
};
