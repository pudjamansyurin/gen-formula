export const User = {
    id: -1,
    name: "",
    email: "",
    role: {
        id: -1,
        name: ""
    }
};

export const Material = {
    id: -1,
    name: "",
    description: "",
    user: User
};

export const Price = {
    id: -1,
    material_id: -1,
    price: 0,
    changed_at: null,
    material: Material,
    user: User
};

export const Formula = {
    id: -1,
    name: "",
    description: "",
    user: User,
    percents: []
};
