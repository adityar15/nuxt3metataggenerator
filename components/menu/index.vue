<template>
  <header class="w-full h-20 bg-gray-900 px-6 py-1 flex items-center justify-between">
    <div class="flex justify-between items-center">
      <p class="text-2xl font-semibold text-slate-50">Our App</p>
    </div>

    <div class="flex space-x-4 items-center">
      <MenuLink href="/" v-if="!isLoggedIn">Sign In</MenuLink>
      <MenuLink to="/signup" v-if="!isLoggedIn">Sign Up</MenuLink>
      <MenuLink to="/dashboard" v-if="isLoggedIn">Dashboard</MenuLink>
    </div>
  </header>
</template>

<script setup>


const isLoggedIn = useState("loginState", () => false)

if (process.server) {
  const authCookie = useCookie("authCookie")
  isLoggedIn.value = authCookie.value ? true : false
}
else {
  const {user} = useAuth()
  watch(user, (newValue)=>{
    isLoggedIn.value = newValue ? true : false
  })
}
</script>
