<template>
  <div>
    <component :key='builtComponent.name' :is='builtComponent.name' v-bind='builtComponent.props' v-for=' builtComponent in builtComponents' />
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

    const builtComponents = await Promise.all(config.components.map(async (componentConfig) => {
      const loadedComponent = (await import(`../components/${componentConfig.name}`)).default
      Vue.component(componentConfig.name, loadedComponent)

      return {
        name: componentConfig.name,
        props: componentConfig.props
      }
    }))

    return {
      builtComponents
    }
  }
}
</script>
