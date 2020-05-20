<template>
  <v-layout column>
    <h1 class="display-2">Vote for your star</h1>

    <ul>
      <li v-for="(rank, index) in ranksToShow">
        <HallOfFameItem
          :rank="index"
          :amountVotes="rank.votes"
          :name="rank.name"
        ></HallOfFameItem>
      </li>
    </ul>
    <v-btn text small color="primary" @click="showMore">Toon meer</v-btn>
    <v-btn color="primary">Vote for YOUR star</v-btn>
  </v-layout>
</template>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>

<script>
import HallOfFameItem from '../components/HallOfFameItem.vue'

export default {
  data() {
    return {
      rankListing: [
        {
          name: 'Mica Wilder',
          votes: 36
        },
        {
          name: 'Martyn Mcdougall',
          votes: 20
        },
        {
          name: 'Duncan Dominguez',
          votes: 8
        },
        {
          name: 'The rest',
          votes: 7
        },
        {
          name: 'The rest',
          votes: 7
        },
        {
          name: 'The rest',
          votes: 7
        },
        {
          name: 'The rest',
          votes: 7
        },
        {
          name: 'The rest',
          votes: 7
        },
        {
          name: 'The rest',
          votes: 7
        },
        {
          name: 'The rest',
          votes: 7
        },
        {
          name: 'The rest',
          votes: 7
        },
        {
          name: 'The rest',
          votes: 7
        },
        {
          name: 'The rest',
          votes: 7
        },
        {
          name: 'The rest',
          votes: 7
        },
        {
          name: 'The rest',
          votes: 7
        },
        {
          name: 'The rest',
          votes: 7
        },
        {
          name: 'The rest',
          votes: 7
        },
        {
          name: 'The rest',
          votes: 7
        },
        {
          name: 'The rest',
          votes: 7
        },
        {
          name: 'The rest',
          votes: 7
        }
      ],
      amountToShow: 8,
      showStepSize: 3
    }
  },
  components: {
    HallOfFameItem
  },
  computed: {
    ranksToShow() {
      return this.rankListing.slice(0, this.amountToShow)
    }
  },
  methods: {
    showMore() {
      this.amountToShow += this.showStepSize
    }
  }
}
</script>
