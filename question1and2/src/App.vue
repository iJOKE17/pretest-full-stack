<template>
  <v-app>
    <v-main>
      <template>
        <v-card color="basil">
          <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold text-h2">Section 2</h1>
          </v-card-title>

          <v-tabs
            v-model="tab"
            background-color="transparent"
            color="basil"
            grow
          >
            <v-tab v-for="item in items" :key="item">
              {{ item }}
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item">
              <v-card color="basil" flat>
                <component v-bind:is="item"></component>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </template>
    </v-main>
  </v-app>
</template>

<script>
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";

export default {
  name: "App",

  components: {
    Question1,
    Question2,
  },

  data() {
    return {
      tab: null,
      items: ["Question1", "Question2"],
    };
  },
};
</script>

<style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
</style>
