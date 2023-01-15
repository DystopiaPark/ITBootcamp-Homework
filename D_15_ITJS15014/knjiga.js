class Knjiga {
  // Constructor
  constructor(naslov, autor, godIzdanja, brojStrana, cena) {
    this.naslov = naslov;
    this.autor = autor;
    this.godIzdanja = godIzdanja;
    this.brojStrana = brojStrana;
    this.cena = cena;
  }
  // NASLOV GET/SET
  get naslov() {
    return this._naslov;
  }
  set naslov(n) {
    if (n.length > 0) {
      this._naslov = n;
    } else {
      this._naslov = `Bez naslova`;
    }
  }
  // AUTOR GET/SET
  get autor() {
    return this._autor;
  }
  set autor(a) {
    if (a.length > 0) {
      this._autor = a;
    } else {
      this._autor = `Nepoznato`;
    }
  }
  // GODINA IZDANJA GET/SET
  get godIzdanja() {
    return this._godIzdanja;
  }
  set godIzdanja(g) {
    if (g > 0) {
      this._godIzdanja = g;
    } else if (g < 0) {
      this._godIzdanja = `${Math.abs(g)} p.n.e.`;
    } else {
      this._godIzdanja = 0;
    }
  }
  // BROJ STRANA GET/SET

  get brojStrana() {
    return this._brojStrana;
  }
  set brojStrana(b) {
    if (b > 0) {
      this._brojStrana = b;
    } else {
      this._brojStrana = 0;
    }
  }
  // CENA GET/SET
  get cena() {
    return this._cena;
  }
  set cena(c) {
    if (c > 0) {
      this._cena = c;
    } else {
      this._cena = 0;
    }
  }
  // STAMPAJ METOD
  stampaj() {
    console.log(this);
  }
  // OBIMNA METOD
  obimna() {
    if (this.brojStrana > 600) {
      return true;
    } else {
      return false;
    }
  }
  // SKUPA METOD
  skupa() {
    if (this.cena > 8000) {
      return true;
    } else {
      return false;
    }
  }
  // DUGACKO IME METOD
  dugackoIme() {
    if (this.autor.length > 18) {
      return true;
    } else {
      return false;
    }
  }
}

// export
export { Knjiga };
