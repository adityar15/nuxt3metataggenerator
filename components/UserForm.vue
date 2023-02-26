<template>
  <form v-bind="$attrs" class="w-full flex flex-col space-y-3" @submit.prevent="processForm">
    <FormGroup v-if="formProps.type == 'signup'" label="Full Name" v-model="userForm.name" type="text" :errorMessage="errorBag.name" />

    <FormGroup label="Email" v-model="userForm.email" type="email" :errorMessage="errorBag.email" />
    <FormGroup label="Password" v-model="userForm.password" type="password" :errorMessage="errorBag.password" />

    <div class="text-center">
      <Button class="bg-blue-500 text-white w-56" type="submit">
        {{ formProps.type == "signin" ? "Login" : "Register" }}
      </Button>
    </div>
  </form>
</template>

<script setup>
const formProps = defineProps({
  type: {
    type: String,
    validator: (value) => ["signin", "signup"].includes(value),
  },
})

const userForm = reactive({
  name: "",
  email: "",
  password: "",
})

const { errorBag, login, signUp } = useAuth()

function processForm() {
  if (formProps.type == "signin") login(userForm)
  else signUp(userForm)
}
</script>
