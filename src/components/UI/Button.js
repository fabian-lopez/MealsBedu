import styles from "./Button.module.css";
import React from 'react';

const estilosBoton = {
    aceptar: styles.acceptButton,
    cancelar: styles.cancelButton,
    salvar: styles.entryButton,
    peligro: styles.dangerButton
}

function Button({ buttonType, buttonStyle, onClick, children }) {
  return (
    <React.Fragment>
      <button
        type={buttonType || "button"}
        className={estilosBoton[buttonStyle] || styles.acceptButton}
        onClick={onClick}
      >
        {children}
      </button>
    </React.Fragment>
  );
}

export default Button;
