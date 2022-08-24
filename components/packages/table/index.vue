<template>
  <div :class="[`bn-table-${size}`]">
    <table>
      <thead v-if="showHeader">
      <tr>
        <th v-for="(x,n) in options.fileds" key="n">
          <div>
            {{ x.title }}
          </div>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(v,i) in options.datas" key="i">
        <td v-for="(m,j) in options.fileds" key="j">{{ options.datas[i][options.fileds[j].field] }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "bnTable"
}
</script>
<script setup>
const props = defineProps({
  showHeader: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: "default"
  },
  options: {
    type: Object,
    default: () => {
      return {
        fileds: [],
        datas: [],
      }
    }
  },
})

</script>

<style lang="scss" scoped>
@import "../../styles/table.scss";
</style>
