import Typography from 'typography';

const typography = Typography({
  googleFonts: [
    {
      name: 'Nunito',
      styles: ['400', '700'],
    },
    {
      name: 'Open Sans',
      styles: ['400'],
    },
  ],
  headerFontFamiliy: ['Nunito', 'Helvetica', 'sans-serif'],
  bodyFontFamiliy: ['Open Sans', 'Helvetica', 'sans-serif'],
  includeNomalize: false,
});

export default typography.toString();
