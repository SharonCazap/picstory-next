// pages/404.js

export default function Custom404() {
  const myStyleDiv = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "90vh",
    textAlign: "center",
    margin: "0 auto",
    
  };
  const myStyleImg = {
    width: "90%",
    padding: "0",
    margin: "0 auto"
  };
  const myStyleA = {
    color: "rgb(239, 97, 119)",
    margin: "0 auto"
  };
  return (
    <div style={myStyleDiv}>
      <figure style={{margin: "0 auto"}}>
        <img src='/images/logo_grande.png' alt='Picstory' style={myStyleImg}/>
      </figure>
      <h1>P&aacute;gina no encontrada</h1>
      <h4 style={myStyleA}><a href="/home">Volver a la home</a></h4>
    </div>
  )
}