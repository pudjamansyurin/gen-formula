<template>
    <table class="table table-hover table-sm">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>LastLogintAt</th>
                <th>LastLogintIp</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id" @click="show(user.id)">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.role.name }}</td>
                <td>{{ user.last_logint_at }}</td>
                <td>{{ user.last_logint_ip }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        users: Array
    },
    methods: {
        show: function(id) {
            window.location.href = `${Laravel.base_url}/user/${id}`;
        }
    }
};
</script>
