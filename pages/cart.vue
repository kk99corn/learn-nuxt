<template>
  <div>
    <h1>카트 페이지입니다</h1>
    <div>
      <ul>
        <li v-for="cartItem in $store.state.cartItems" :key="cartItem.id">
          {{ cartItem }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>
