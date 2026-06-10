<script setup>
import { onSlideEnter, onSlideLeave, useNav, useSlideContext } from '@slidev/client'
import { computed, nextTick, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  interval: {
    type: Number,
    default: 1400,
  },
  startDelay: {
    type: Number,
    default: 900,
  },
})

const nav = useNav()
const { $renderContext } = useSlideContext()

let timer = null

const canRun = computed(() => {
  return $renderContext.value === 'slide' || $renderContext.value === 'presenter'
})

function stop() {
  if (!timer)
    return

  window.clearTimeout(timer)
  timer = null
}

function schedule(delay = props.interval) {
  stop()

  if (!canRun.value)
    return

  timer = window.setTimeout(async () => {
    timer = null

    if (!canRun.value)
      return

    if (nav.clicks.value < nav.clicksTotal.value) {
      await nav.go(nav.currentSlideNo.value, nav.clicks.value + 1)
      schedule()
    }
  }, delay)
}

async function start() {
  stop()
  await nextTick()

  if (nav.clicks.value < nav.clicksTotal.value)
    schedule(props.startDelay)
}

onSlideEnter(start)
onSlideLeave(stop)
onBeforeUnmount(stop)

watch(
  () => [nav.currentSlideNo.value, nav.clicksTotal.value, canRun.value],
  () => start(),
)
</script>

<template></template>
