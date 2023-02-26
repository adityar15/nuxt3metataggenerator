<template>
  <input v-bind="$attrs" class="w-full border border-gray-200 rounded outline-none focus:ring focus:ring-purple-500
  text-gray-600 transition-all duration-150 ease-in-out p-2" autocomplete="off"
  :value="value" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script setup>
   defineProps({
    modelValue: String | Number,
    value: String | Number,
   })
    defineEmits(['update:modelValue'])
</script>

