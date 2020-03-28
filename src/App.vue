<template>
  <div class="form-group">
    <input
      @focus="showItems = true"
      @blur="showItems=false"
      :placeholder="placeholder"
      v-model="filterText"
      class="form-control-plaintext"
      :id="componentId + 'autocomplete-label'"
    />
    <div :class="`list-group collapse  ${showItems == true ? 'show' : ''}`">
      <button
        @click="onSelectItem(item)"
        v-for="(item,index) in filteredList"
        v-bind:key="index"
        class="list-group-item-action list-group-item"
      >{{item}}</button>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { validate, getId } from './utility'
export default {
  props: {
    placeholder: {
      type: String
    },
    dataList: {
      type: Array || Object,
      required: true
    },
    onSelect: {
      type: Function,
      required: true
    }
  },
  data: function () {
    return {
      filterText: '',
      componentId: getId(),
      showItems: false
    }
  },
  methods: {
    onSelectItem: function (item) {
      this.showItems = false
      this.$props.onSelect(item)
    }
  },
  computed: {
    showLabel: function () {
      return validate(this.$props.label)
    },
    filteredList: function () {
      return _.pickBy(this.$props.dataList, (v, k) =>
        _.includes(_.toLower(k), _.toLower(this.filterText))
      )
    }
  }
}
</script>

<style scoped>
</style>
