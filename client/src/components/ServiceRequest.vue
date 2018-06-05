<template>
    <b-table striped hover :items='items' :fields='fields'>
      <template slot='street' slot-scope='row'>
        <app-address-field></app-address-field>
        <!-- <b-form-input autocomplete="true" v-model="row.item.street"
          type="text" placeholder="Entre com o endereço"></b-form-input> -->
      </template>
      <template slot='number' slot-scope='row'>
        <b-form-input v-model="row.item.number" type="number"
          placeholder="Entre com o numero da casa"></b-form-input>
      </template>
      <template slot='note' slot-scope='row'>
        <b-form-textarea v-model="row.item.note"
          placeholder="Entre com alguma observação">
        </b-form-textarea>
      </template>
    </b-table>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      items: [
        { street: "Rua Busca Aqui", number: 1, note: "Casa B" },
        { street: "Rua Leva Aqui", number: 2, note: null }
      ],
      fields: [
        { key: "street", label: "Rua" },
        { key: "number", label: "Número" },
        { key: "note", label: "Observação" }
      ]
    };
  }
};
</script>

<style scoped>
.b-table {
  width: 50%;
}
</style>
