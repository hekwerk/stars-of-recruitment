<template>
  <div class="hall-of-fame-item" :class="{ big: size === 'big' }">
    <div class="star">{{ amountVotes }}</div>
    <div class="name">{{ name }}</div>
  </div>
</template>

<style lang="scss" scoped>
.hall-of-fame-item {
  display: flex;
  align-items: center;
}

.star {
  color: black;
  margin-right: 24px;
  padding: 1em;
  position: relative;
  background-color: yellow;
  clip-path: polygon(
    50% 0%,
    69% 26%,
    98% 35%,
    79% 61%,
    79% 91%,
    50% 78%,
    21% 91%,
    22% 58%,
    2% 35%,
    33% 28%
  );
}

.big {
  font-size: 3em;
}

.medium {
  font-size: 2.5em;
}

.third-prize {
  font-size: 2em;
}
</style>

<script>
export default {
  name: 'HallOfFameItem',
  components: {},
  props: {
    amountVotes: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {}
  },
  computed: {
    size() {
      return 'big'
    }
  }
}
</script>
