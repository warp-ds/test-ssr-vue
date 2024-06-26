<script setup>
import { ref } from 'vue'
import { wAttention, wBox, wButton } from '@warp-ds/vue'
import IconInfo16 from '@warp-ds/icons/vue/info-16'

defineProps({
  msg: String,
})

const tooltipTarget = ref(null)
const tooltipResetTarget = ref(null)
const popoverTarget = ref(null)
const dismissiblePopoverTarget = ref(null)
const popoverIconTarget = ref(null)
const highlightTarget = ref(null)
const dismissibleHighlightTarget = ref(null)

const tooltipShowing = ref(false)
const tooltipResetShowing = ref(false)
const calloutShowing = ref(true)
const popoverShowing = ref(false)
const dismissiblePopoverShowing = ref(false)
const popoverIconTargetShowing = ref(false)
const highlightShowing = ref(false)
const dismissibleHighlightShowing = ref(false)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div>
    <div class="space-y-16">
      <div>
        <h2>Tooltip</h2>
        <w-box
          neutral
          as="h4"
          ref="tooltipTarget"
          @mouseenter="tooltipShowing = true"
          @mouseleave="tooltipShowing = false"
          @keydown.escape="tooltipShowing = false"
          @focus="tooltipShowing = true"
          @blur="tooltipShowing = false"
          tabindex="0"
        >
          <button
            aria-describedby="tooltip-bubbletext"
            aria-expanded="true"
            type="button"
            class="bg-transparent"
          >
            Hover over me
          </button>
        </w-box>
        <w-attention
          tooltip
          placement="bottom"
          :target-el="tooltipTarget ? tooltipTarget.$el : null"
          v-model="tooltipShowing"
          @focus="tooltipShowing = true"
          @blur="tooltipShowing = false"
        >
          <p id="tooltip-bubbletext">Hello Warp!</p>
        </w-attention>
      </div>
      <div>
        <h2>Tooltip with resetted role and aria-label attributes</h2>
        <w-box
          neutral
          as="h4"
          ref="tooltipResetTarget"
          @mouseenter="tooltipResetShowing = true"
          @mouseleave="tooltipResetShowing = false"
          @keydown.escape="tooltipResetShowing = false"
          @focus="tooltipResetShowing = true"
          @blur="tooltipResetShowing = false"
          tabindex="0"
        >
          <button
            aria-describedby="tooltip-reset-bubbletext"
            aria-expanded="true"
            type="button"
            class="bg-transparent"
          >
            Hover over me
          </button>
        </w-box>
        <w-attention
          tooltip
          placement="bottom"
          role=""
          aria-label=""
          :target-el="tooltipResetTarget ? tooltipResetTarget.$el : null"
          v-model="tooltipResetShowing"
          @focus="tooltipResetShowing = true"
          @blur="tooltipResetShowing = false"
        >
          <p id="tooltip-reset-bubbletext">
            Tooltip with the message Hello Warp! pointing up
          </p>
        </w-attention>
      </div>
      <div>
        <h2>Callout</h2>
        <div class="flex flex-col items-center">
          <w-box neutral as="h4" aria-details="callout-bubbletext" tabindex="0" class='w-[300px]'>
            I am a box full of info
            </w-box>
            <w-attention
              callout
              placement="bottom-start"
              v-model="calloutShowing"
              class="mr-8"
            >
              <p id="callout-bubbletext" class='w-[200px]'>Hello Warp! This thing is new!</p>
            </w-attention>
        </div>
      </div>
      <div>
        <h2>Popover</h2>
        <w-button
          :aria-expanded="popoverShowing"
          aria-controls="popover-example"
          type="button"
          ref="popoverTarget"
          @click="() => (popoverShowing = !popoverShowing)"
        >
          Open popover
        </w-button>
        <w-attention
          popover
          placement="bottom"
          flip
          :target-el="popoverTarget ? popoverTarget.$el : null"
          v-model="popoverShowing"
        >
          <p>Hello Warp!</p>
        </w-attention>
      </div>
      <div>
        <h2>Dismissible Popover</h2>
        <w-button
          :aria-expanded="dismissiblePopoverShowing"
          aria-controls="dismissiblePopoverAttentionExample"
          aria-details="dismissiblePopoverContent"
          ref="dismissiblePopoverTarget"
          @click="dismissiblePopoverShowing = !dismissiblePopoverShowing"
          >Click me</w-button
        >
        <w-attention
          id="dismissiblePopoverAttentionExample"
          popover
          placement="bottom"
          can-close
          @dismiss="dismissiblePopoverShowing = false"
          :target-el="
            dismissiblePopoverTarget ? dismissiblePopoverTarget.$el : null
          "
          v-model="dismissiblePopoverShowing"
        >
          <p id="dismissiblePopoverContent">I'm a dismissible popover</p>
        </w-attention>
      </div>
      <div>
        <h2>Popover with icon as target element</h2>
        <w-button
          :aria-expanded="popoverIconTargetShowing"
          aria-controls="popover-icon-target-example"
          type="button"
          utility
          quiet
          ref="popoverIconTarget"
          @click="() => (popoverIconTargetShowing = !popoverIconTargetShowing)"
        >
          <icon-info16 />
        </w-button>
        <w-attention
          popover
          placement="right-end"
          :distance="-6"
          :skidding="15"
          :target-el="popoverIconTarget ? popoverIconTarget.$el : null"
          v-model="popoverIconTargetShowing"
        >
          <p>Hello Warp!</p>
        </w-attention>
      </div>
      <div>
        <h2>Dismissible Highlight</h2>
        <w-button
          :aria-expanded="dismissibleHighlightShowing"
          aria-controls="dismissibleHighlightAttentionExample"
          aria-details="dismissibleHighlightedContent"
          ref="dismissibleHighlightTarget"
          @click="dismissibleHighlightShowing = !dismissibleHighlightShowing"
          >Click me</w-button
        >
        <w-attention
          id="dismissibleHighlightAttentionExample"
          highlight
          placement="bottom"
          flip
          can-close
          @dismiss="dismissibleHighlightShowing = false"
          :target-el="
            dismissibleHighlightTarget ? dismissibleHighlightTarget.$el : null
          "
          v-model="dismissibleHighlightShowing"
        >
          <p id="dismissibleHighlightedContent">I'm a dismissible highlight</p>
        </w-attention>
      </div>
      <div>
        <h2>Highlight</h2>
        <w-button
          :aria-expanded="highlightShowing"
          aria-controls="highlightAttentionExample"
          aria-details="highlightedContent"
          ref="highlightTarget"
          @click="highlightShowing = !highlightShowing"
          >Click me</w-button
        >
        <w-attention
          id="highlightAttentionExample"
          highlight
          placement="right"
          flip
          :fallback-placements="['left', 'bottom', 'top']"
          :target-el="highlightTarget ? highlightTarget.$el : null"
          v-model="highlightShowing"
        >
          <p id="highlightedContent">Hello Warp!</p>
        </w-attention>
      </div>
    </div>
  </div>
</template>
