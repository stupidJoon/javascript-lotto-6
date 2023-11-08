class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 중복되면 안됩니다.');
    }
  }

  join(seperator) {
    return this.#numbers.join(seperator);
  }

  includes(number) {
    return this.#numbers.includes(number);
  }

  compare(winningLotto, bonus) {
    const lottoMatch = this.#numbers.filter(
      (lottoNumber) => winningLotto.includes(lottoNumber),
    ).length;

    if (lottoMatch === 5 && this.#numbers.includes(bonus)) {
      return '5-b';
    }

    return lottoMatch;
  }
}

export default Lotto;
