export const User = {
    id: -1,
    name: "",
    email: "",
    role: null
};

export const Product = {
    id: -1,
    name: "",
    description: "",
    user: User
};

export const ProductPrice = {
    id: -1,
    product_id: -1,
    price: 0,
    product: Product,
    user: User
};
