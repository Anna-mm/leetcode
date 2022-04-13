function A () {
    this.aa = 'bb';
  }

  const a = new A();
  a.aa // throw Error