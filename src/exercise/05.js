// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

// const commonStyles = {
//   fontStyle: 'italic',
// }

// const smallBox = (
//   <div
//     className="box box--small"
//     style={{
//       ...commonStyles,
//       backgroundColor: 'lightblue',
//     }}
//   >
//     small lightblue box
//   </div>
// )
// const mediumBox = (
//   <div
//     className="box box--medium"
//     style={{
//       ...commonStyles,
//       backgroundColor: 'pink',
//     }}
//   >
//     medium pink box
//   </div>
// )
// const largeBox = (
//   <div
//     className="box box--large"
//     style={{
//       ...commonStyles,
//       backgroundColor: 'orange',
//     }}
//   >
//     large orange box
//   </div>
// )

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

// extra 1
// function mergeClassName(c1, c2) {
//   const bothProvided = c1 && c2
//   const noneProvided = !c1 && !c2

//   if (noneProvided) return undefined

//   const separator = bothProvided ? ' ' : ''
//   return c1 + separator + c2
// }

// function Box(props) {
//   const {className, style, ...otherProps} = props

//   const boxStyle = {
//     fontStyle: 'italic',
//     ...style,
//   }

//   const boxClassName = mergeClassName('box', className)

//   return <div style={boxStyle} className={boxClassName} {...otherProps} />
// }

// function App() {
//   return (
//     <div>
//       <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
//         small lightblue box
//       </Box>

//       <Box className="box--medium" style={{backgroundColor: 'pink'}}>
//         medium pink box
//       </Box>

//       <Box className="box--large" style={{backgroundColor: 'orange'}}>
//         large orange box
//       </Box>
//     </div>
//   )
// }

// extra 2
function mergeClassNames(...classNames) {
  const filteredClassNames = classNames.filter(Boolean)
  // className not set
  if (!filteredClassNames.length) return undefined
  // Join by empty space
  return filteredClassNames.join(' ')
}

const boxSizes = ['small', 'medium', 'large']
function getBoxSizeClass(size) {
  if (!size) return undefined

  if (!boxSizes.includes(size)) {
    throw new Error(`Size '${size}' is not supported`)
  }

  return `box--${size}`
}

function Box(props) {
  const {className, style, size, ...otherProps} = props

  const boxStyle = {
    fontStyle: 'italic',
    ...style,
  }

  const boxClassName = mergeClassNames('box', getBoxSizeClass(size), className)

  return <div style={boxStyle} className={boxClassName} {...otherProps} />
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>

      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>

      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
