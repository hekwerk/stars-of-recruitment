<template>
  <v-layout column>
    <h1 class="display-2">Vote for your star</h1>

    <v-text-field v-model="vote1" label="Vote 1: linkedIn url"></v-text-field>
    <v-btn
      v-if="testimonial1IsVisible === false"
      text
      small
      color="primary"
      @click="showTestimonial1"
      >Add testimonial</v-btn
    >
    <v-textarea
      v-if="testimonial1IsVisible"
      name="testimonial1"
      v-model="testimonial1"
      label="Testimonial for your star of recruitment"
    ></v-textarea>

    <v-text-field v-model="vote2" label="Vote 2: linkedIn url"></v-text-field>
    <v-btn
      v-if="!testimonial2IsVisible"
      text
      small
      color="primary"
      @click="showTestimonial2"
      >Add testimonial</v-btn
    >
    <v-textarea
      v-if="testimonial2IsVisible"
      name="testimonial2"
      v-model="testimonial2"
      label="Testimonial for your star of recruitment"
    ></v-textarea>

    <v-btn color="primary">Bring out your votes!</v-btn>
  </v-layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      vote1: '',
      testimonial1: '',
      testimonial1IsVisible: false,
      vote2: '',
      testimonial2: '',
      testimonial2IsVisible: false
    }
  },
  methods: {
    showTestimonial1() {
      this.testimonial1IsVisible = true
    },
    showTestimonial2() {
      this.testimonial2IsVisible = true
    }
  }
}
</script>
