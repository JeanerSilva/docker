class Valores{
    constructor (id, value) {
    this.id = id;
    this.value = value;
  }

  get Id () {
      return this.id
  }

  get Value () {
      return this.value;
  }

  set Value (v) {
      this.value = v
  }

  get ValorDobrado () {
      return this.value * 2;
  }

}
  export default Valores;
