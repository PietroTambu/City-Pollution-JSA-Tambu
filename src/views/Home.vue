/* eslint-disable */
<template>
  <div class="home">
    <ComponentPollution class="input"/>
  </div>
</template>

<script>

import ComponentPollution from '@/components/ComponentPollution'

export default {
  name: 'Home',
  components: {
    ComponentPollution
  }
}
</script>

<style lang="scss" scoped>

.input {
  margin-top: 30px;
  width: 100%;
}

</style>
