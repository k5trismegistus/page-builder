<template>
  <div>
    {{ text1 }}, {{ text2 }}
  </div>
</template>
<script>
export default {
  name: 'CompTwo',
  props: ['text1', 'text2']
}
</script>