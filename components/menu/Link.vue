<template>
     <NuxtLink class="link" :to="href" v-if="!isLoggedIn">
        <slot />
     </NuxtLink>
</template>

<script setup>
defineProps({
    href: String,
})
</script>

<style scoped>
.link {
  @apply text-gray-50 font-semibold text-xl;
}
</style>
