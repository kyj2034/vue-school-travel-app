<template>
  <div>
    <h1>Greetings, {{username}}</h1>
    <button>Logout</button>
  </div>
</template>

<script>
  export default {
    data: () => ({
      username : window.user
    })
  }
</script>
