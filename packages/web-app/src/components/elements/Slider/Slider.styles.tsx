// Theme
import { SaladTheme } from '../../../SaladTheme'

export const styles = (theme: SaladTheme) => ({
  slideContainer: {
    width: '100%'
  },

  slider: {
    background: theme.lightGreen,
    appearance: 'none',
    width: '100%',
    height: 15,
    borderRadius: 5,
    outline: 'none',
    opacity: 0.7,
    transition: 'opacity .2s',

    '&::-webkit-slider-thumb': {
      background: theme.darkGreen,
      appearance: 'none',
      width: 25,
      height: 25,
      borderRadius: '50%',
      cursor: 'pointer',
    }
  }
})
