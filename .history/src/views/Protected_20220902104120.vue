<template>
  <div>
    <h1>Greetings, {{username}}</h1>
  </div>
</template>

<script>
  export default {
    data: () => ({
      username : window.user
    })
  }
</script>
