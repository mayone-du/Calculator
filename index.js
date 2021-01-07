(() => {


  class Calculator {
    constructor($prevOperand, $currOperand) {
      this.$prevOperand = $prevOperand;
      this.$currOperand = $currOperand;
    }

    clear() {
      this.$prevOperand.textContent = "";
      this.$currOperand.textContent = "";
    }

    delete() {
      this.$currOperand.textContent = this.$currOperand.textContent.slice(0, -1);
    }

    appendNumber(number) {
      // 小数点がクリックされ、かつすでに含まれていたら処理を中断する
      if (number === "." && this.$currOperand.textContent.includes(".")) return;
      // 0がクリックされ、currOperandの1文字目が0かつ、小数点が含まれていないければ処理を中断する
      if (number === "0" && this.$currOperand.textContent.slice(0,1) === "0" && !this.$currOperand.textContent.includes(".")) return;
      this.$currOperand.textContent = this.$currOperand.textContent + number;
    }

    chooseOpration(operation) {
      if (this.$currOperand.textContent === "") return;

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

  // DELボタンを押したときの処理
  $delBtn.addEventListener("click", function() {
    calculator.delete();
  })

  // 数字のボタンを押したときの処理
  $numBtns.forEach(button => {
    button.addEventListener("click", function() {
      calculator.appendNumber(button.textContent);
    })
  })

  // 四則演算のボタンを押したときの処理
  $opeBtns.forEach(button => {
    button.addEventListener("click", function() {
      calculator.chooseOpration(button.textContent);
    })
  })



})();