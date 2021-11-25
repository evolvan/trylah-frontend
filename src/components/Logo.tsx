// material
import { useTheme } from '@mui/material/styles'
import { Box, BoxProps } from '@mui/material'

// ----------------------------------------------------------------------

export default function Logo({ sx }: BoxProps) {
  const theme = useTheme()
  const PRIMARY_LIGHT = theme.palette.primary.light
  const PRIMARY_MAIN = theme.palette.primary.main
  const PRIMARY_DARK = theme.palette.primary.dark

  return (
    <Box sx={{ width: 30, height: 30, ...sx }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 514.31 512.59"
      >
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>
        <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
          <path
            fill="url(#BG1)"
            d="M306.93,69.16c-14.62,82.39-28.05,155.47-40.29,228.94Q260.1,338.39,253,391.42T243.53,477q-1.2,17.19-14.22,26.37t-31.41,9.18q-19.54,0-30.22-9.48T157,478.23q0-14.22,4.44-47.11t10.37-69q6.53-36.13,10.08-62.81,6.51-45,14.81-89.47t16.59-84.14q1.77-8.88,4.15-20.44a311.16,311.16,0,0,0,5.33-35.48Z"
          />
          <path
            fill="url(#BG1)"
            d="M222.79,71.69q-58.08,1.78-91.25,9.48T84.43,102.8q-13.92,13.94-13.92,35.85,0,20.16,11.85,38.51a17.75,17.75,0,0,1,2.37,8.89q0,11.26-13.33,21t-27.55,9.77q-10.08,0-16.59-5.92Q15.4,200.88,7.7,182.2T0,139.83Q0,89.48,32.89,59T133,14.22Q200.27,0,305.74,0q65.17,0,104,2.37t67.84,7.7q18.36,3.56,27.56,12.44t9.18,20.74q0,19.56-11,28.44T468.69,78.8q-53.34-4.12-83.25-5.62T306.93,71.1Z"
          />
        </g>
      </svg>
    </Box>
  )
}
