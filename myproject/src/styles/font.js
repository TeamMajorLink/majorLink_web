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

  light_20: FONT({ weight: 300, size: 2.0 }),
  
  regular_12: FONT({ weight: 400, size: 1.2 }),
  regular_14: FONT({ weight: 400, size: 1.4 }),
  regular_15: FONT({ weight: 400, size: 1.5 }),
  regular_16: FONT({ weight: 400, size: 1.6 }),
  regular_18: FONT({ weight: 400, size: 1.8 }),
  regular_20: FONT({ weight: 400, size: 2.0 }),
  regular_22: FONT({ weight: 400, size: 2.2 }),
  regular_24: FONT({ weight: 400, size: 2.4 }),
  regular_28: FONT({ weight: 400, size: 2.8 }),
  regular_32: FONT({ weight: 400, size: 3.2 }),
  medium_14: FONT({ weight: 500, size: 1.4 }),
  medium_16: FONT({ weight: 500, size: 1.6 }),
  medium_18: FONT({ weight: 500, size: 1.8 }),
  medium_20: FONT({ weight: 500, size: 2.0 }),
  semibold_16: FONT({ weight: 600, size: 1.6 }),
  semibold_18: FONT({ weight: 600, size: 1.8 }),
  semibold_20: FONT({ weight: 600, size: 2.0 }),
  semibold_22: FONT({ weight: 600, size: 2.2 }),
  semibold_24: FONT({ weight: 600, size: 2.4 }),
  semibold_28: FONT({ weight: 600, size: 2.8 }),
  semibold_32: FONT({ weight: 600, size: 3.2 }),
  semibold_36: FONT({ weight: 600, size: 3.6 }),
  semibold_40: FONT({ weight: 600, size: 4.0 }),
  semibold_48: FONT({ weight: 600, size: 4.8 }),
  bold_20: FONT({ weight: 700, size: 2.0 }),
  bold_24: FONT({ weight: 700, size: 2.4 }),

  test_100: FONT({ weight: 900, size: 10.0 }),
  mypage: FONT({ weight: 500, size: 1.8 }),
  title: FONT({ weight: 600, size: 3.0 }),

  profilecard: FONT({ weight: 700, size: 1.323}),
};

export default font;
