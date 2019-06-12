<template>
  <div class="main-content">
    <Header></Header>
    <SlideOfStudent v-if="isStudent"></SlideOfStudent>
    <SlideOfAdm v-else></SlideOfAdm>
    <div class="main-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import SlideOfStudent from "@/components/common/SlideOfStudent";
import SlideOfAdm from "@/components/common/SlideOfAdm";
export default {
  name: "mianContent",
  data() {
    return {};
  },
  computed: {
    isStudent() {
      return "admin" != localStorage.getItem("userName");
    }
  },
  components: {
    Header,
    SlideOfStudent,
    SlideOfAdm
  }
};
</script>

<style scoped>
.main-view {
  position: absolute;
  top: 70px;
  bottom: 0;
  left: 200px;
  right: 0;
}
</style>
