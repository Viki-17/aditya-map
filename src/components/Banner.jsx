const Banner = ({ text }) => {

  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '2px',
        padding: '20px',
        margin: '20px'
      }}
    >
      <h2
        style={{
          fontWeight: '200',
          letterSpacing: '5px',
          textAlign: 'center',
          userSelect: 'none'
        }}
      >{text}</h2>
    </div>
  )

}

export default Banner