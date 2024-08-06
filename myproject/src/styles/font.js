function FONT({ weight, size }) {
  return `
          font-family: Pretendard, sans-serif;
          font-size: ${size}rem;
          font-weight: ${weight};
          `;
}

const font = {
  // 10px = 1rem
  //   (예시) thin(1), extralight(2), light(3), regular(4), medium(5), semibold(6), bold(7), extrabold(8), black(9)
  //   title: FONT({ weight: 300, size: 1.7 }),
  //   regular_10: FONT({ weight: 400, size: 1.0 }),
  //   base_16: FONT({ weight: 600, size: 1.6 }),
  regular_16: FONT({ weight: 400, size: 1.6 }),
  semibold_20: FONT({ weight: 600, size: 2.0 }),
  test_100: FONT({ weight: 900, size: 10.0 }),
};

export default font;
