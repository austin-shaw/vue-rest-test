<template>
  <v-data-table
    :headers="headerHeaders"
    :items="headerItems"
  >
    <template v-slot:items="props">
      <td>
        <v-edit-dialog
          :return-value.sync="props.item.headerName"
          lazy
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        > {{ props.item.headerName }}
          <template v-slot:input>
            <v-text-field
              v-model="props.item.headerName"
              label="Edit"
              single-line
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </td>
      <td class="text-xs-right">
        <v-edit-dialog
          :return-value.sync="props.item.headerValue"
          lazy
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          <div>{{ props.item.headerValue }}</div>
          <template v-slot:input>
            <div class="mt-3 title">Update Header Value</div>
          </template>
          <template v-slot:input>
            <v-text-field
              v-model="props.item.headerValue"
              label="Edit"
              single-line
              autofocus
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: ['testparam', 'options', 'onChange'],
  data () {
    return {
      testprop: 0,
      headerHeaders: [
        { text: 'Header Name', align: 'left', value: 'headerName' },
        { text: 'Header Value', value: 'headerValue' }
      ],
      headerItems : this.$store.state.headerItems
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
    }
  }
}
</script>