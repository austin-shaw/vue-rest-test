<template>
  <div>
    <v-data-table
      :headers="parameterHeaders"
      :items="parameterItems"
      :pagination.sync="pagination"
      hide-actions
    >
      <template v-slot:items="gridItems">
        <td>
          <v-edit-dialog large :return-value.sync="gridItems.item.parameterName">
            {{ gridItems.item.parameterName }}
            <template v-slot:input>
              <v-text-field
                v-model="gridItems.item.parameterName"
                label="Edit"
                single-line
                autofocus
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </td>
        <td class="text-xs-right">
          <v-edit-dialog large :return-value.sync="gridItems.item.parameterValue">
            <div>{{ gridItems.item.parameterValue }}</div>
            <template v-slot:input>
              <div class="mt-3 title">Update Parameter Value</div>
            </template>
            <template v-slot:input>
              <v-text-field
                v-model="gridItems.item.parameterValue"
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
      parameterHeaders: [
        { text: 'Name', align: 'left', sortable: false, value: 'parameterName' },
        { text: 'Value', sortable: false, value: 'parameterValue' }
      ],
      parameterItems: this.$store.state.parameterItems
    }
  },
  methods: {
    deleteItem (item) {
      const index = this.parameterItems.indexOf(item)
      this.parameterItems.splice(index, 1)
    },
    addItem () {
      this.parameterItems.push({})
    }
  }
}
</script>
