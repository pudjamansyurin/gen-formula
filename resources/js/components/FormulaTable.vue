<template>
  <table class="table table-striped table-sm">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Creator</th>
        <th>Created At</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.user.name }}</td>
        <td>{{ product.created_at }}</td>
        <td>
          <!-- <a
            class="btn btn-small btn-success"
            href="{{ url('product/' . product.id) }}"
            >Show</a
          >
          <a
            class="btn btn-small btn-info"
            href="{{ url('product/' . product.id . '/edit') }}"
            >Edit</a
          > -->
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
    export default {
        props: {
            products: Array,
        },
        mounted() {
            console.log('FormulaTable.vue')
        }
    }
</script>
