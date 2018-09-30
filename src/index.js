class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.stackOperations = [];
    this.stackResult = [initialValue];
  }

  add(number) {
    // your implementation
    this.stackOperations.push("+");
    this.stackResult.push(number);
    return this;
  }
  
  subtract(number) {
    // your implementation
    this.stackOperations.push("-");
    this.stackResult.push(number);
    return this;
  }

  multiply(number) {
    // your implementation
    this.stackOperations.push("*");
    this.stackResult.push(number);
    return this;
  }

  devide(number) {
    this.stackOperations.push("/");
    this.stackResult.push(number);
    return this;
  }

  pow(number) {
    this.stackOperations.push("^");
    this.stackResult.push(number);
    return this;
  }

  run(){
    let length = this.stackOperations.length;
    for(let i = length - 1; i >= 0; i--){
      if(this.stackOperations[i] === "^") {
        this.stackResult[i+1] = Math.pow(this.stackResult[i], this.stackResult[i+1]);
        this.stackOperations.splice(i, 1);
        this.stackResult.splice(i, 1);
		    i++;
      }
    }
    for(let i = 0; i < length; i++){
      if(this.stackOperations[i] === "*") {
        this.stackResult[i+1] = this.stackResult[i] * this.stackResult[i+1];
        this.stackOperations.splice(i, 1);
        this.stackResult.splice(i, 1);
		    i--;
      }
      if(this.stackOperations[i] === "/") {
        this.stackResult[i+1] = this.stackResult[i] / this.stackResult[i+1];
        this.stackOperations.splice(i, 1);
        this.stackResult.splice(i, 1);
		    i--;
      }
    }
    for(let i = 0; i < length; i++){
      let current = this.stackResult[i];
      let next = this.stackResult[i+1];
      if(this.stackOperations[i] === "+") {
        this.stackResult[i+1] = current + next;
        this.stackOperations.splice(i, 1);
        this.stackResult.splice(i, 1);
		    i--;
      }
      if(this.stackOperations[i] === "-"){
        this.stackResult[i+1] = current - next;
        this.stackOperations.splice(i, 1);
        this.stackResult.splice(i, 1);
		    i--;
      }
    }
    return this.stackResult[0];
  }

  valueOf(){
	  return this.run();
  }
}

module.exports = SmartCalculator;