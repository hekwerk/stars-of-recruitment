<template>
    <v-row dense>
      <v-col
        v-for="(rank, index) in ranksToShow"
        key="i"
        cols="12"
      >
        <HallOfFameItem
          :rank="index"
          :votes="rank.votes"
          :name="rank.name"
          :avatar="rank.avatar"
          :agency="rank.agency"
          :color="rank.color"
        >
        </HallOfFameItem>
      </v-col>
      <v-btn text small color="primary" @click="showMore">Toon meer</v-btn>
    </v-row>
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
          agency: 'Recruitment Company',
          votes: 36,
          avatar: 'https://api.adorable.io/avatars/200/'+Math.ceil(Math.random() * 10)+'.png',
          color: '#cc0000'
        },
        {
          name: 'Martyn Mcdougall',
          agency: 'Recruitment Company',
          votes: 20,
          avatar: 'https://api.adorable.io/avatars/200/'+Math.ceil(Math.random() * 10)+'.png',
          color: '#dd6e6e'
        },
        {
          name: 'Duncan Dominguez',
          agency: 'Recruitment Company',
          votes: 8,
          avatar: 'https://api.adorable.io/avatars/200/'+Math.ceil(Math.random() * 10)+'.png',
          color: '#cccccc'
        },
        {
          name: 'The rest',
          agency: 'Recruitment Company',
          votes: 7,
          avatar: 'https://api.adorable.io/avatars/200/'+Math.ceil(Math.random() * 10)+'.png',
          color: '#176dae'
        },
        {
          name: 'The rest',
          agency: 'Recruitment Company',
          votes: 7,
          avatar: 'me.jpg',
          color: '#032f60'
        },
        {
          name: 'The rest',
          agency: 'Recruitment Company',
          votes: 7,
          avatar: 'me.jpg',
          color: '#032f60'
        },
        {
          name: 'The rest',
          agency: 'Recruitment Company',
          votes: 7,
          avatar: 'me.jpg',
          color: '#032f60'
        },
        {
          name: 'The rest',
          agency: 'Recruitment Company',
          votes: 7,
          avatar: 'me.jpg',
          color: '#032f60'
        },
        {
          name: 'The rest',
          agency: 'Recruitment Company',
          votes: 7,
          avatar: 'me.jpg',
          color: '#032f60'
        },
        {
          name: 'The rest',
          agency: 'Recruitment Company',
          votes: 7,
          avatar: 'me.jpg',
          color: '#032f60'
        },
        {
          name: 'The rest',
          agency: 'Recruitment Company',
          votes: 7,
          avatar: 'me.jpg',
          color: '#032f60'
        },
        {
          name: 'The rest',
          agency: 'Recruitment Company',
          votes: 7,
          avatar: 'me.jpg',
          color: '#032f60'
        },
        {
          name: 'The rest',
          agency: 'Recruitment Company',
          votes: 7,
          avatar: 'me.jpg',
          color: '#032f60'
        },
        {
          name: 'The rest',
          agency: 'Recruitment Company',
          votes: 7,
          avatar: 'me.jpg',
          color: '#032f60'
        },
        {
          name: 'The rest',
          agency: 'Recruitment Company',
          votes: 7,
          avatar: 'me.jpg',
          color: '#032f60'
        },
        {
          name: 'The rest',
          agency: 'Recruitment Company',
          votes: 7,
          avatar: 'me.jpg',
          color: '#032f60'
        },
        {
          name: 'The rest',
          agency: 'Recruitment Company',
          votes: 7,
          avatar: 'me.jpg',
          color: '#032f60'
        },
        {
          name: 'The rest',
          agency: 'Recruitment Company',
          votes: 7,
          avatar: 'me.jpg',
          color: '#032f60'
        },
        {
          name: 'The rest',
          agency: 'Recruitment Company',
          votes: 7,
          avatar: 'me.jpg',
          color: '#032f60'
        },
        {
          name: 'The rest',
          agency: 'Recruitment Company',
          votes: 7,
          avatar: 'me.jpg',
          color: '#032f60'
        }
      ],
      amountToShow: 4,
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
