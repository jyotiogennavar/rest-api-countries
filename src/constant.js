export const COLORS ={
  white : 'hsl(0, 0%, 100%)',
  lightGray : 'hsl(0, 0%, 98%)',
  gray : 'hsl(0, 0%, 52%)',
  blue : {
    100 :'hsl(209, 23%, 22%)',
    200 :'hsl(207, 26%, 17%)',
    300 :'hsl(200, 15%, 8%)',
  }
}

export const FONT_WEIGHTS = {
  light : '300',
  semiBold : '600',
  bold : '800',
}

export const FONT_FAMILY = {
  body : 'Nunito Sans',
}

export const PADDING_INLINE = {
  paddingInline : '4rem'
}

export const lightTheme = {
  background: COLORS.lightGray,
  text: COLORS.blue[300],
  cardBackground: COLORS.white,

};

export const darkTheme = {
  background: COLORS.blue[300],
  text: COLORS.white,
  cardBackground: COLORS.blue[100],
};
