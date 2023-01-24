const Tagline = ({ text }) => {
  return (
    <h1
      style={{
        color: 'white',
        fontFamily: 'serif',
        fontWeight: 'normal',
        letterSpacing: '3px',
        lineHeight: '35px',
        padding: '50px',
        maxWidth: '1000px',
        textAlign: 'left',
        userSelect: 'none'
      }}
    >
      {text}
    </h1>
  )
}

export default Tagline