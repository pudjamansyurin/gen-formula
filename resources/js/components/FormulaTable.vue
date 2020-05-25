<template>
    <table class="table table-hover table-sm">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Creator</th>
                <th>Created At</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="product in products"
                :key="product.id"
                @click="show(product.id)"
            >
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.user.name }}</td>
                <td>{{ product.created_at }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        products: Array
    },
    methods: {
        show: function(id) {
            window.location.href = `${Laravel.base_url}/product/${id}`;
        }
    }
};
</script>
