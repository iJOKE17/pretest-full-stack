<template>
  <v-container>
    <section class="question pa-2">
      Please create a web application following below specs.
      <ul>
        <li>
          Angular framework is preferred, but you can also use your preferred
          framework, or pure javascript/HTML5
        </li>
        <li>
          Page consist of 3 columns, first column has fixed width of 200px, last
          column has fixed width of 300px, the middle column expand/shrink to
          fill the remaining space of the page, and should be at least 100px. If
          window is smaller than 600px, show the scrollbar.
        </li>
        <li>
          In the first column, create an input field, where user can enter any
          number. If the value entered by users are not integer, round it to the
          nearest integer. If user enter negative values, replace it with 1.
        </li>
        <li>
          In the second column, show a drop down, which user can choose what
          calculation between “isPrime” and “isFibonacci” he wants to calculate,
          default the value to isPrime.
        </li>
        <li>
          isPrime: calculate whether the input is a prime number, show true in
          Col3 if the number is prime, and false in the other case
        </li>
        <li>
          IsFibanacci: calculate whether the input is a fibonacci number, show
          true in Col3 if the number is a fibonacci number, and false in the
          other case.
        </li>
        <li>
          Whenever the value in input box in column1, or the dropdown in column2
          changes, execute the calculation accordingly, and show the result in
          column 3.
        </li>
      </ul>
    </section>
    <v-data-table
      :headers="headers"
      :items="items"
      :disable-pagination="true"
      hide-default-footer
    >
      <template v-slot:item.inputNumber="{ item }">
        <v-text-field
          class="pa-2"
          v-model="item.inputNumber"
          outlined
          type="number"
          @input="changeInputNumber"
        ></v-text-field>
      </template>
      <template v-slot:item.calculation="{ item }">
        <v-select
          :items="calculationOptions"
          v-model="item.calculation"
          @change="changeCalculation"
        ></v-select>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      calculationOptions: ["isPrime", "isFibonacci"],
      headers: [
        {
          text: "Input",
          sortable: false,
          value: "inputNumber",
          width: "200px",
        },
        { text: "Calculation", sortable: false, value: "calculation" },
        { text: "Result", sortable: false, value: "result", width: "300px" },
      ],
      items: [
        {
          inputNumber: 0,
          calculation: "isPrime",
          result: false,
        },
      ],
    };
  },
  methods: {
    changeCalculation(value) {
      this.items[0].calculation = value;
      this.calculateNumber();
    },
    changeInputNumber(value) {
      let replaceNumber = value.replace(/[^0-9 ]/g, "");
      replaceNumber = replaceNumber < 0 ? 1 : replaceNumber;
      this.items[0].inputNumber = replaceNumber;

      if (!isNaN(Number(replaceNumber))) {
        this.calculateNumber();
      }
    },
    calculateNumber() {
      let result = 0;
      const { calculation, inputNumber } = this.items[0];

      if (calculation === "isPrime") {
        result = this.isPrime(inputNumber);
      } else if (calculation === "isFibonacci") {
        result = this.isFibonacci(inputNumber);
      }
      this.items[0].result = result;
    },
    isPrime(num) {
      for (let i = 2; i < num; i++) if (num % i === 0) return false;
      return num > 1;
    },
    isFibonacci(n) {
      return (
        this.isPerfectSquare(5 * n * n + 4) ||
        this.isPerfectSquare(5 * n * n - 4)
      );
    },
    isPerfectSquare(x) {
      let s = parseInt(Math.sqrt(x));
      return s * s == x;
    },
  },
};
</script>
<style></style>
