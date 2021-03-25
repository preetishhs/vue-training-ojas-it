<template>
  <button @click="emitEvt">Emit to Article</button>
</template>
<script>
import eventbus from '@/eventbus'
export default {
  props: {
    id: {
      required: true,
      type: Number,
    },
  },
  methods: {
    emitEvt() {
      eventbus.$emit('pass-message', {
        title: 'Pass this article name',
        id: this.id,
      })
    },
  },
}
</script>
