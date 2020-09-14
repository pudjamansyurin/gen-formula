export const Role = {
    id: -1,
    name: ""
};

export const User = {
    id: -1,
    name: "",
    email: "",
    role: Role
};

export const Matter = {
    id: -1,
    name: ""
};

export const MaterialStory = {
    id: -1,
    price: 0,
    updated_at: null
};

export const Material = {
    id: -1,
    name: "",
    matter_id: -1,
    price: 0
};

export const Formula = {
    id: -1,
    name: "",
    description: "",
    user: User,
    portions: []
};
