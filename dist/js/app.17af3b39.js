(function(){"use strict";var t={6100:function(t,n,e){var o=e(5130),r=e(6768);function i(t,n,e,o,i,l){const s=(0,r.g2)("SudokuApp");return(0,r.uX)(),(0,r.Wv)(s)}var l=e(4232),s="data:image/png;base64,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";const u={class:"container"},a=(0,r.Lk)("img",{src:s,alt:"Sudoku Image",class:"logo"},null,-1),c={class:"sudoku"},d=["onUpdate:modelValue","readonly","onInput"];function p(t,n,e,i,s,p){const f=(0,r.g2)("StyledButton");return(0,r.uX)(),(0,r.CE)("div",u,[a,(0,r.Lk)("div",c,[(0,r.Lk)("table",null,[(0,r.Lk)("tbody",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.board,((t,n)=>((0,r.uX)(),(0,r.CE)("tr",{key:n},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(t,((t,e)=>((0,r.uX)(),(0,r.CE)("td",{key:e,class:(0,l.C4)(p.getCellClass(n,e))},[(0,r.bo)((0,r.Lk)("input",{type:"text","onUpdate:modelValue":t=>s.board[n][e]=t,readonly:""!==s.initialBoard[n][e],onInput:t=>p.checkInput(n,e),class:(0,l.C4)({"readonly-input":""!==s.initialBoard[n][e]})},null,42,d),[[o.Jo,s.board[n][e]]])],2)))),128))])))),128))])]),(0,r.bF)(f,{onclick:p.clearBoard,text:"Clear"},null,8,["onclick"]),(0,r.bF)(f,{onclick:p.checkWinCondition,text:"Submit"},null,8,["onclick"]),(0,r.bF)(f,{onclick:p.solution,text:"Solution"},null,8,["onclick"])])])}e(4114);var f=e(9309);function h(t,n,e,o,i,s){return(0,r.uX)(),(0,r.CE)("button",{class:(0,l.C4)(s.computedClasses),onClick:n[0]||(n[0]=(...t)=>s.handleClick&&s.handleClick(...t))},(0,l.v_)(e.text),3)}var v={name:"StyledButton",props:{onclick:{type:Function,required:!1},classes:{type:String,default:""},text:{type:String,default:"button"}},computed:{computedClasses(){return`styled-button ${this.classes}`}},methods:{handleClick(){this.onclick()}}},g=e(1241);const A=(0,g.A)(v,[["render",h]]);var k=A,y={data(){return{board:[["5","3","","","7","","","",""],["6","","","1","9","5","","",""],["","9","8","","","","","6",""],["8","","","","6","","","","3"],["4","","","8","","3","","","1"],["7","","","","2","","","","6"],["","6","","","","","2","8",""],["","","","4","1","9","","","5"],["","","","","8","","","7","9"]],initialBoard:[["5","3","","","7","","","",""],["6","","","1","9","5","","",""],["","9","8","","","","","6",""],["8","","","","6","","","","3"],["4","","","8","","3","","","1"],["7","","","","2","","","","6"],["","6","","","","","2","8",""],["","","","4","1","9","","","5"],["","","","","8","","","7","9"]],gameOver:!1}},components:{StyledButton:k},methods:{clearBoard(){this.board=this.initialBoard},checkWinCondition(){const t=(0,f.useToast)({position:"top-right"});this.isSudokuSolved()?(this.gameOver=!0,t.success("Congratulations! You've completed the Sudoku puzzle correctly!")):t.error("There are some mistakes in the Sudoku puzzle. Please check again.")},isSudokuSolved(){for(let t=0;t<9;t++)for(let n=0;n<9;n++)if(""===this.board[t][n]||!this.isValidCell(t,n))return!1;return!0},isValidCell(t,n){const e=this.board[t][n];for(let i=0;i<9;i++)if(i!==t&&this.board[i][n]===e||i!==n&&this.board[t][i]===e)return!1;const o=3*Math.floor(t/3),r=3*Math.floor(n/3);for(let i=o;i<o+3;i++)for(let o=r;o<r+3;o++)if(i!==t&&o!==n&&this.board[i][o]===e)return!1;return!0},checkInput(t,n){let e=this.board[t][n];""!==e&&(isNaN(e)||e<1||e>9)&&(this.board[t][n]="")},solution(){const t=[["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]];this.board=t},getCellClass(t,n){const e=[];return t%3===0&&0!==t&&e.push("top-border"),n%3===0&&0!==n&&e.push("left-border"),e.join(" ")}}};const b=(0,g.A)(y,[["render",p]]);var V=b,m={name:"App",components:{SudokuApp:V}};const C=(0,g.A)(m,[["render",i]]);var O=C;(0,o.Ef)(O).mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o].call(i.exports,i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,i){if(!o){var l=1/0;for(c=0;c<t.length;c++){o=t[c][0],r=t[c][1],i=t[c][2];for(var s=!0,u=0;u<o.length;u++)(!1&i||l>=i)&&Object.keys(e.O).every((function(t){return e.O[t](o[u])}))?o.splice(u--,1):(s=!1,i<l&&(l=i));if(s){t.splice(c--,1);var a=r();void 0!==a&&(n=a)}}return n}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[o,r,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,i,l=o[0],s=o[1],u=o[2],a=0;if(l.some((function(n){return 0!==t[n]}))){for(r in s)e.o(s,r)&&(e.m[r]=s[r]);if(u)var c=u(e)}for(n&&n(o);a<l.length;a++)i=l[a],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(c)},o=self["webpackChunksudoku"]=self["webpackChunksudoku"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[504],(function(){return e(6100)}));o=e.O(o)})();
//# sourceMappingURL=app.17af3b39.js.map