class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.string = "" + initialValue;
  }

  add(number) {
    // your implementation
    this.string += "+" + number;
    return this;
  }
  
  subtract(number) {
    // your implementation
    this.string += "-" + number;
    return this;
  }

  multiply(number) {
    // your implementation
    this.string += "*" + number;
    return this;
  }

  devide(number) {
    this.string += "/" + number;
    return this;
  }

  pow(number) {
    let index = this.string.length - 1, num = "", repl = "";
    if(this.string[index] === ")"){
      let i = this.string.lastIndexOf("M");
      let subst = this.string.substr(i);
      let re = "Math.pow(" + subst + "," + number + ")";
      this.string = this.string.replace(subst, re);
      return this;
    }
    while(+this.string[index] && index >= 0){
      num += this.string[index];
      index--;
    }
    num = num.split("").reverse().join("");
    repl = "Math.pow(" + num + "," + number + ")";
    this.string = this.string.replace(num, repl);
    return this;
  }

  valueOf(){
    return eval(this.string);
  }
}

module.exports = SmartCalculator;
