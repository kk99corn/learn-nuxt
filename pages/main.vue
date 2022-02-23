<template>
  <div>
    <p>메인 페이지 입니다</p>
    <div>
        <ul>
          <li v-for="product in products" :key="product.id">
            <img :src="product.imageUrl" :alt="product.name" />
            <p>{{ product.name }}</p>
            <p>{{ product.price }}</p>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// import ProductList from "~/components/ProductList";

export default {
  async asyncData() {
    const res = await axios.get('http://localhost:3000/products')
    const products = res.data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    }))
    return { products }
  },
}
</script>
