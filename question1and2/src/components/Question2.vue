<template>
  <v-container>
    <section class="question pa-2">
      Create a web app with an input for using as filter and a table for display
      the result. The app need to get data from
      https://api.publicapis.org/categories for using for displaying in the
      result table.
      <br />Result table
      <ul>
        <li>By default display all data from categories</li>
      </ul>
      Filtering
      <ul>
        <li>
          When user type any text in the input box, the result table should be
          filter to display only the result that contains the text.
        </li>
      </ul>
      NOTE
      <ul>
        <li>
          The app could created with any framework but Angular is preferred
        </li>
      </ul>
    </section>
    <v-text-field
      class="pa-2"
      v-model="search"
      outlined
      filled
      dense
      background-color="white"
      @input="searchKeyword"
    ></v-text-field>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in filterCategories" :key="category">
            <td>{{ category }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  beforeMount() {
    this.fetchCategories();
  },
  data() {
    return {
      categories: [],
      filterCategories: [],
      search: "",
    };
  },
  methods: {
    searchKeyword() {
      this.filterCategories = this.categories;
      if (this.search.length === 0) {
        return;
      }

      this.filterCategories = this.filterCategories.filter((category) =>
        category.startsWith(this.search)
      );
    },
    fetchCategories() {
      fetch("https://api.publicapis.org/categories ")
        .then((response) => response.json())
        .then((data) => {
          this.categories = data;
          this.filterCategories = this.categories;
        });
    },
  },
};
</script>
