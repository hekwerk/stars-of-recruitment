<template>
  <v-card
    :color="color"
    dark
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title
          class="headline"
          :v-text="name"
        >{{ name }}</v-card-title>
        <v-card-subtitle v-text="">{{ agency }}</v-card-subtitle>
        <v-chip
           class="ma-3"
           color="orange"
           text-color="white"
         >
           {{ votes }}
           <v-icon right>mdi-star</v-icon>
        </v-chip>
      </div>

      <v-avatar
        class="ma-3 star"
        size="125"
        tile
      >
        <v-img :src="avatar"></v-img>
      </v-avatar>
    </div>
    <v-card-actions>
      <v-btn text>Vote</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" scoped>
.hall-of-fame-item {
  display: flex;
  align-items: center;
}

@mixin star-size($size: default) {
  $star-border-size: 10px;

  @if ($size == default) {
    $star-border-size: 6px;
    width: 80px;
    height: 80px;
  } @else if($size == xxl) {
    $star-border-size: 15px;
    width: 200px;
    height: 200px;
  } @else if($size == xl) {
    $star-border-size: 12px;
    width: 160px;
    height: 160px;
  } @else if($size == l) {
    $star-border-size: 10px;
    width: 120px;
    height: 120px;
  }

  .image-depth {
    left: $star-border-size;
    top: $star-border-size;
    width: calc(100% - #{$star-border-size} * 2);
    height: calc(100% - #{$star-border-size} * 2);

    &::before {
      box-shadow: inset 0 0 20px $star-border-size rgba(0, 0, 0, 0.5);
    }
  }
}

.star {
  @include star-size(default);
  color: black;
  margin-right: 24px;
  position: relative;
  background-color: yellow;
  background: linear-gradient(
    230deg,
    #bf953f,
    #fcf6ba,
    #b38728,
    #fbf5b7,
    #aa771c
  );

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

  .image-depth {
    position: relative;
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

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    > img {
      width: 100%;
      height: 100%;
    }
  }
}

.lead {
  font-size: 3em;
  .star {
    @include star-size(xxl);
  }
}

.running-candidate {
  font-size: 2.5em;
  .star {
    @include star-size(xl);
  }
}

.almost-there {
  font-size: 2em;
  .star {
    @include star-size(l);
  }
}
</style>

<script>
export default {
  name: 'HallOfFameItem',
  components: {},
  props: {
    rank: {
      type: Number,
      required: true
    },
    votes: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    agency: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {}
  },
  computed: {
    rankClass() {
      if (this.rank === 0) {
        return 'lead'
      }

      if (this.rank < 3) {
        return 'running-candidate'
      }

      if (this.rank < 6) {
        return 'almost-there'
      }

      return ''
    }
  }
}
</script>
