<template>
  <div>
    <component :key='componentName' :is='componentName' v-for=' componentName in componentNames' />
  </div>
</template>

<script>
import Vue from 'vue'

const configs = {
  hoge: {
    name: 'Eyecatch',
    components: [
      { name: 'Eyecatch', props: { 'title': 'kore ha title' } }
    ]
  }
}

export default {
  async asyncData({ route }) {
    const routePath = route.params.slug
    const config = configs[routePath]
    const loadedComponent = (await import(`../components/${config.name}`)).default
    Vue.component(config.name, loadedComponent)

    return {
      componentNames: [config.name]
    }
  }
}
</script>
