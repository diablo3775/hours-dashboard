const ProgressBar = (props) => {
    const { bgcolor, completed,ltcolor } = props;
  
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: ltcolor,
      borderRadius: 50,
      margin: '1.5rem 0 0 0',
    //   margin: 50
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;