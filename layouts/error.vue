<template>
  <div>
    <h1>404 페이지</h1>
    <p>페이지를 찾을 수 없습니다.</p>
    {{error.statusCode}}
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog'
}
</script>
