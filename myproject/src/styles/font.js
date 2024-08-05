function FONT({ weight, size }) {
  return `
          font-family: Pretendard, sans-serif;
          font-size: ${size}rem;
          font-weight: ${weight};
          `;
}

const font = {
  // 10px = 1rem
  //   (예시) thin, extralight, light, regular, medium, semibold, bold, extrabold, black
  //   title: FONT({ weight: 300, size: 1.7 }),
  //   regular_10: FONT({ weight: 400, size: 1.0 }),
  //   base_16: FONT({ weight: 600, size: 1.6 }),
  semibold_20: FONT({ weight: 600, size: 2.0 }),
};

export default font;
