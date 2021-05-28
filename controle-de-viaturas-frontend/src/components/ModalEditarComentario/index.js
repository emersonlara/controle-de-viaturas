import { useState } from 'react';
import './styles.css';

function ModalEditarComentario({ viatura = {}, setEditandoComentario }) {
  const [comentario, setComentario] = useState(viatura.comentario);

  function salvarComentario() {
    viatura.setComentario(comentario);
    setEditandoComentario(false);
  }

  return (
    <div className="modal-editar-comentario">
      <span className="titulo">
        Adicione uma observação sobre a viatura <span style={{ fontFamily: 'OswaldRegular' }}>{viatura.prefixo}</span>
      </span>

      <textarea
        autoFocus
        value={comentario}
        onChange={event => setComentario(event.target.value)}
        placeholder="Sem observações">
      </textarea>

      <div className="btn-salvar" onClick={salvarComentario}>
        <span>Salvar</span>
      </div>
    </div>
  );
}

export default ModalEditarComentario;