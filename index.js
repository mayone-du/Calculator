(() => {


  class Calculator {
    constructor($prevOperand, $currOperand) {
      this.$prevOperand = $prevOperand;
      this.$currOperand = $currOperand;
    }

    clear() {
      this.$prevOperand.innerText = "";
      this.$currOperand.innerText = "";
    }

    delete() {

    }

    chooseOpration() {

    }

    updateDisplay() {

    }


  }

  const $doc = document;
  const $acBtn = $doc.querySelector("[data-clear]");
  const $delBtn = $doc.querySelector("[data-delete]");
  const $equalbtn = $doc.querySelector("[data-equal");
  const $opeBtns = $doc.querySelectorAll("[data-operation]");
  const $numBtns = $doc.querySelectorAll("[data-number]");
  const $prevOperand = $doc.querySelector(".bl_output_prevOperand");
  const $currOperand = $doc.querySelector(".bl_output_currOperand");



  const calculator = new Calculator($prevOperand, $currOperand);



  // ACボタンを押したときの処理
  $acBtn.addEventListener("click", function() {
    calculator.clear();
  })




})();