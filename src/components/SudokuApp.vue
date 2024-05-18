<template>
  <div class="container">
    <img src="../assets/logo.png" alt="Sudoku Image" class="logo" />
    <div class="sudoku">
      <table>
        <tbody>
          <tr v-for="(row, rowIndex) in board" :key="rowIndex">
            <td v-for="(cell, colIndex) in row" :key="colIndex" :class="getCellClass(rowIndex, colIndex)">
              <input type="text" 
                v-model="board[rowIndex][colIndex]" 
                :readonly="initialBoard[rowIndex][colIndex] !== ''"
                @input="checkInput(rowIndex, colIndex)"
                :class="{ 'readonly-input': initialBoard[rowIndex][colIndex] !== '' }"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <StyledButton :onclick="clearBoard" text="Clear"/>
      <StyledButton :onclick="checkWinCondition" text="Submit"/>
      <StyledButton :onclick="solution" text="Solution"/>
    </div>
  </div>
</template>

<script>
import { useToast } from 'vue-toast-notification';
import StyledButton from './StyledButton.vue'

export default {
  data() {
    return {
      board: [
        ["5", "3", "", "", "7", "", "", "", ""],
        ["6", "", "", "1", "9", "5", "", "", ""],
        ["", "9", "8", "", "", "", "", "6", ""],
        ["8", "", "", "", "6", "", "", "", "3"],
        ["4", "", "", "8", "", "3", "", "", "1"],
        ["7", "", "", "", "2", "", "", "", "6"],
        ["", "6", "", "", "", "", "2", "8", ""],
        ["", "", "", "4", "1", "9", "", "", "5"],
        ["", "", "", "", "8", "", "", "7", "9"]
      ]
      ,
      // read-only
      initialBoard: [
        ["5", "3", "", "", "7", "", "", "", ""],
        ["6", "", "", "1", "9", "5", "", "", ""],
        ["", "9", "8", "", "", "", "", "6", ""],
        ["8", "", "", "", "6", "", "", "", "3"],
        ["4", "", "", "8", "", "3", "", "", "1"],
        ["7", "", "", "", "2", "", "", "", "6"],
        ["", "6", "", "", "", "", "2", "8", ""],
        ["", "", "", "4", "1", "9", "", "", "5"],
        ["", "", "", "", "8", "", "", "7", "9"]
      ]
      ,
      gameOver: false
    };
  },
  components: {
    StyledButton
  },
  methods: {
    clearBoard() {
      this.board = this.initialBoard
    },
    checkWinCondition() {
      const toast = useToast({
        position: 'top-right'
      });

      if (this.isSudokuSolved()) {
        this.gameOver = true;
        toast.success("Congratulations! You've completed the Sudoku puzzle correctly!");
      } else {
        toast.error("There are some mistakes in the Sudoku puzzle. Please check again.");
      }
    },

    isSudokuSolved() {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (this.board[i][j] === '' || !this.isValidCell(i, j)) {
            return false;
          }
        }
      }
      return true;
    },

    isValidCell(row, col) {
      const value = this.board[row][col];
      // Check row and column
      for (let i = 0; i < 9; i++) {
        if ((i !== row && this.board[i][col] === value) || (i !== col && this.board[row][i] === value)) {
          return false;
        }
      }
      // Check 3x3 grid
      const startRow = Math.floor(row / 3) * 3;
      const startCol = Math.floor(col / 3) * 3;
      for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
          if (i !== row && j !== col && this.board[i][j] === value) {
            return false;
          }
        }
      }
      return true;
    },

    checkInput(rowIndex, colIndex) {
      let inputValue = this.board[rowIndex][colIndex];
      if (inputValue !== '' && (isNaN(inputValue) || inputValue < 1 || inputValue > 9)) {
        this.board[rowIndex][colIndex] = ''; // Clear invalid input
      }
    },

    solution() {
      const solvedBoard = [
        ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
        ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
        ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
        ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
        ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
        ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
        ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
        ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
        ["3", "4", "5", "2", "8", "6", "1", "7", "9"]
      ];
      this.board = solvedBoard;
    },

    getCellClass(rowIndex, colIndex) {
      const classes = [];
      if (rowIndex % 3 === 0 && rowIndex !== 0) {
        classes.push('top-border');
      }
      if (colIndex % 3 === 0 && colIndex !== 0) {
        classes.push('left-border');
      }
      return classes.join(' ');
    }
  },

};

</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  width: 200px;
  height: auto;
  margin-bottom: 20px;
}

.sudoku {
  margin: 20px;
}

table {
  margin-bottom: 10px;
}

tr {
  height: 60px;
}

td {
  width: 60px;
  height: 60px;
  margin: 0;
  padding: 0;
}

input {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 24px;
  margin: 0;
  padding: 0;
  outline: transparent;
  color:blue
}

.readonly-input {
  pointer-events: none;
  user-select: none;
  color: black;
  font-weight: lighter;
}

.sudoku .top-border {
  border-top: 2px solid transparent;
}

.sudoku .left-border {
  border-left: 2px solid transparent;
}

/* Override toast css */
.v-toast__item--success, 
.v-toast__item--error {
    background-color: #0a0a0a67 !important
}
</style>
