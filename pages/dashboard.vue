<template>
  <MetaTags title="Dashboard" description="This is the dashboard page, have fun!" />
  <NuxtLayout name="dashboardlayout">
    <h1 class="text-2xl text-center font-semibold my-9">Nuxt 3 Meta Tag Generator</h1>

    <div class="grid grid-cols-2 gap-6 w-full">
      <form class="flex flex-col space-y-4" @submit.prevent="generate">
        <FormGroup type="text" label="Site name" v-model="form.site" />
        <FormGroup type="text" label="What is it?" placeholder="website, article, blog" v-model="form.type" />
        <FormGroup type="text" label="Enter page title" v-model="form.title" />
        <FormGroup type="text" label="Enter description.. upto 155 characters is a optimum one" v-model="form.description" />
        <FormGroup type="url" label="Enter canonical url" v-model="form.url" />
        <div class="text-center">
          <Button type="submit" class="text-gray-50 bg-slate-900 w-56">Generate</Button>
        </div>
      </form>

      <div class="relative" v-show="code.actual">
        <button @click="copyCode" class="absolute top-6 right-0 bg-slate-700 text-gray-50 px-2 py-1 rounded-l-md">
          {{ buttonText }}
        </button>
        <pre>
            <code ref="codeele" class="hljs rounded-md">
                <div v-html="code.highlighted"></div>
            </code>
        </pre>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import highlightjs from "highlight.js"
const form = reactive({
  title: "",
  site: "",
  type: "",
  description: "",
  url: "",
})

const codeele = ref()

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github-dark.min.css",
      integrity: "sha512-rO+olRTkcf304DQBxSWxln8JXCzTHlKnIdnMUwYvQa9/Jd4cQaNkItIUj6Z4nvW1dqK0SKXLbn9h4KwZTNtAyw==",
      crossorigin: "anonymous",
      referrerpolicy: "no-referrer",
    },
  ],
})

const code = reactive({
  actual: "",
  highlighted: "",
})

const buttonText = ref("Copy")

function generate() {
  code.actual = `
      <Head>
        <Title>${form.title} </Title>
        <Meta name="description" content="${form.description}" />
        <Meta property="og:title" content="${form.title}" />
        <Meta property="og:description" content="${form.description}" />
        <Meta property="og:url" content="${form.url}" />
        <Meta property="og:type" content="${form.type}" />
        <Meta property="og:site_name" content="${form.site}" />
    </Head>`
  code.highlighted = highlightjs.highlight(code.actual, { language: "html" }).value
}

function copyCode() {
  navigator.clipboard.writeText(code.actual)
  buttonText.value = "Copied"
  setTimeout(() => {
    buttonText.value = "Copy"
  }, 3000)
}
</script>
