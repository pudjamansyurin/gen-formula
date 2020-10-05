export const Role = {
    id: -1,
    name: ""
};

export const User = {
    id: -1,
    name: "",
    email: "",
    role_id: -1,
    role: Role
};

export const Pack = {
    id: -1,
    name: "",
    packer_id: -1
};

export const Packer = {
    id: -1,
    name: "",
    packs: []
};

export const Package = {
    id: -1,
    name: "",
    unit_id: -1,
    capacity: null
};

export const Matter = {
    id: -1,
    name: ""
};

export const Material = {
    id: -1,
    name: "",
    matter_id: -1,
    rev: {
        price: null
    }
};

export const MaterialRev = {
    id: -1,
    price: 0,
    updated_at: null
};

export const Formula = {
    id: -1,
    name: "",
    // description: "",
    main: null,
    density: null,
    shrink: null
};

export const Sale = {
    id: -1,
    name: "",
    rev: {
        filled: null,
        price: null
    },
    _products: [
        {
            // package_id: null,
            package: null,
            // formula_id: null,
            formula: null,
            ratio: 1
        }
    ]
};
