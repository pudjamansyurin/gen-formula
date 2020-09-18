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

export const Pack = {
    id: -1,
    name: "",
    packer_id: -1
};

export const Packer = {
    id: -1,
    name: ""
};

export const Package = {
    id: -1,
    name: "",
    unit_id: -1,
    capacity: 0
};

export const Matter = {
    id: -1,
    name: ""
};

export const Material = {
    id: -1,
    name: "",
    matter_id: -1,
    price: 0
};

export const MaterialStory = {
    id: -1,
    price: 0,
    updated_at: null
};

export const Formula = {
    id: -1,
    name: "",
    description: "",
    user: User,
    portions: []
};
