/**
 * Fiery Sky Color Palette
 * Explosive crimson and pure white crash into midnight blue 
 * for an audacious, dramatic, dynamic blend.
 */

export const colors = {
  // Reds & Crimsons
  darkWine: '#800016',      // Smoky and rich like vintage merlot
  rubyRed: '#a0001c',       // Deep, luscious and dramatic
  brickRed: '#c00021',      // Warm, reliable, reminiscent of weathered bricks
  racingRed: '#ff002b',     // Blazing, high-octane shade

  // Whites
  white: '#ffffff',         // Brilliant and absolute

  // Blues
  steelBlue: '#407ba7',     // Strong, cool blue tempered with steel gray
  duskBlue: '#004e89',      // Elegant blend of twilight blues
  imperialBlue: '#002962',  // Powerful, classic blue
  deepNavy: '#00043a',      // Profound, shadowy indigo
};

export const theme = {
  primary: colors.racingRed,
  secondary: colors.imperialBlue,
  accent: colors.duskBlue,
  highlight: colors.rubyRed,
  background: colors.deepNavy,
  surface: colors.darkWine,
  text: colors.white,
  muted: colors.steelBlue,
};

export const gradients = {
  primary: `linear-gradient(135deg, ${colors.racingRed} 0%, ${colors.rubyRed} 100%)`,
  dramatic: `linear-gradient(135deg, ${colors.racingRed} 0%, ${colors.imperialBlue} 100%)`,
  dark: `linear-gradient(135deg, ${colors.deepNavy} 0%, ${colors.darkWine} 100%)`,
  cool: `linear-gradient(135deg, ${colors.duskBlue} 0%, ${colors.steelBlue} 100%)`,
};

export const cssVariables = `
  :root {
    --color-dark-wine: ${colors.darkWine};
    --color-ruby-red: ${colors.rubyRed};
    --color-brick-red: ${colors.brickRed};
    --color-racing-red: ${colors.racingRed};
    --color-white: ${colors.white};
    --color-steel-blue: ${colors.steelBlue};
    --color-dusk-blue: ${colors.duskBlue};
    --color-imperial-blue: ${colors.imperialBlue};
    --color-deep-navy: ${colors.deepNavy};

    --primary: ${colors.racingRed};
    --secondary: ${colors.imperialBlue};
    --accent: ${colors.duskBlue};
    --highlight: ${colors.rubyRed};
    --background: ${colors.deepNavy};
    --surface: ${colors.darkWine};
    --text: ${colors.white};
    --muted: ${colors.steelBlue};

    --gradient-primary: ${gradients.primary};
    --gradient-dramatic: ${gradients.dramatic};
    --gradient-dark: ${gradients.dark};
    --gradient-cool: ${gradients.cool};
  }
`;
