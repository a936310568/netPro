<template>
  <div>
    <Swiper />
    <HomeContent />
  </div>
</template>

<script>
// @ is an alias to /src
// import HeadMenu from '@/components/home/HeadMenu'
import Swiper from '@/components/home/Swiper.vue'
import HomeContent from '@/components/home/HomeContent.vue'

export default {
  name: 'Home',
  components: {
    Swiper,
    HomeContent
  }
}
</script>
