<template>
  <v-div>
    <v-data-table
      :headers="parameterHeaders"
      :items="parameterItems"
      :pagination.sync="pagination"
      hide-actions
    >
      <template v-slot:items="props">
        <td>
          <v-edit-dialog
            :return-value.sync="props.item.parameterName"
            lazy
            @save="save"
            @cancel="cancel"
            @open="open"
            @close="close"
          > {{ props.item.parameterName }}
            <template v-slot:input>
              <v-text-field
                v-model="props.item.parameterName"
                label="Edit"
                single-line
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </td>
        <td class="text-xs-right">
          <v-edit-dialog
            :return-value.sync="props.item.parameterValue"
            lazy
            @save="save"
            @cancel="cancel"
            @open="open"
            @close="close"
          >
            <div>{{ props.item.parameterValue }}</div>
            <template v-slot:input>
              <div class="mt-3 title">Update Parameter Value</div>
            </template>
            <template v-slot:input>
              <v-text-field
                v-model="props.item.parameterValue"
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
            @click="deleteItem(props.item)"
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
    >
      <v-icon>add</v-icon>
    </v-btn>
  </v-div>
</template>

<script>
export default {
  props: ['testparam', 'options', 'onChange'],
  data () {
    return {
      testprop: 0,
      pagination: {rowsPerPage: -1},
      parameterHeaders: [
        { text: 'Name', align: 'left', value: 'parameterName' },
        { text: 'Value', value: 'parameterValue' }
      ],
      parameterItems: this.$store.state.parameterItems
    }
  },
  methods: {
    save () {
      console.log('save')
    },
    cancel () {
      console.log('cancel')
    },
    open () {
      console.log('open')
    },
    close () {
      console.log('Dialog closed')
    },
    deleteItem (item) {
      const index = this.headerItems.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.headerItems.splice(index, 1)
    },
  }
}
</script>