<template>
  <div>
    <v-data-table
      :headers="headerHeaders"
      :items="headerItems"
      :pagination.sync="pagination"
      hide-actions
    >
      <template v-slot:items="gridItems">
        <td>
          <v-edit-dialog large :return-value.sync="gridItems.item.headerName">
            {{ gridItems.item.headerName }}
            <template v-slot:input>
              <v-text-field
                v-model="gridItems.item.headerName"
                label="Edit"
                single-line
                autofocus
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </td>
        <td class="text-xs-right">
          <v-edit-dialog large :return-value.sync="gridItems.item.headerValue" >
            {{ gridItems.item.headerValue }}

            <template v-slot:input>
              <v-text-field
                v-model="gridItems.item.headerValue"
                label="Edit"
                single-line
                autofocus
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            @click="deleteItem(gridItems.item)"
          >
            fas fa-times
          </v-icon>
        </td>
      </template>
    </v-data-table>
    <v-btn
      outline
      fab
      small
      color="primary"
      @click="addItem()"
    >
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pagination: { rowsPerPage: -1 },
      headerHeaders: [
        { text: 'Name', align: 'left', sortable: false, value: 'headerName' },
        { text: 'Value', sortable: false, value: 'headerValue' }
      ],
      headerItems: this.$store.state.headerItems
    }
  },
  methods: {
    deleteItem (item) {
      const index = this.headerItems.indexOf(item)
      this.headerItems.splice(index, 1)
    },
    addItem () {
      this.headerItems.push({})
    }
  }
}
</script>
