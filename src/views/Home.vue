/* eslint-disable */
<template>
  <div class="home">
    <Input class="input"/>
  </div>
</template>

<script>

// import HelloWorld from '@/components/HelloWorld'

import Input from '@/components/Input'

export default {
  name: 'Home',
  components: {
    Input
  }
}
</script>

<style lang="scss" scoped>

.input {
  margin-top: 30px;
}

</style>
