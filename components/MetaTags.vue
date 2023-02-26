<template>
    <Head>
        <Title>Our App | {{ title }}</Title>
        <Meta name="description" :content="description" />
        <Meta property="og:title" :content="title" />
        <Meta property="og:description" :content="description" />
        <Meta property="og:url" :content="url || 'http://localhost:3000'" />
        <Meta property="og:type" content="website" />
        <Meta property="og:site_name" content="My App" />
        <!-- <Meta property="og:image" content="/images/og-image.png" /> -->
    </Head>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    url: String
})
</script>

