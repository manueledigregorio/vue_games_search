<script>
export default {
  name: "Hero",
};
</script>

<template>
  <div
    class="bg-[url('../../../public/bg_gta_VI.jpeg')] h-[300px] sm:h-[550px] bg-center bg-cover object-scale-down"
  ></div>
  <div class="separator absolute"></div>
</template >

<style lang="scss" scoped>
.separator {
  width: 0;
  height: 0;
  border-right: 100vw solid transparent;
  border-bottom: 5.8vw solid #272727;
  margin-top: -5.7vw;
}
</style>