export const userValidation = {
    body: {
        properties: {
            profilePicture: { type: "string",  minLength: 5 },
            bio: { type: "string", minLength: 8 },
        },
    },
};
