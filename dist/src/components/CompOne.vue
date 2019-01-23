<template>
  <div>
    {{ text1 }}, {{ text2 }}
  </div>
</template>
<script>
export default {
  name: 'CompOne',
  props: ['text1', 'text2']
}
</script>