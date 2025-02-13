import './leaders.css'

const Leaders = ({ nome, tipo, foto, insignia, titulo }) => {    
  return (
    <div className="card">
      <img src={foto} alt={nome} />
      <div className="description">
        <h2 className="nome">
          {nome},<span className="title"> {titulo}</span>
        </h2>
        <p>
          <span className={`tipo ${tipo}`}>Tipo:</span> {tipo}
        </p>
        <img src={insignia} alt={`${insignia}'s badge`} />
      </div>
    </div>
  );
}

export default Leaders;
