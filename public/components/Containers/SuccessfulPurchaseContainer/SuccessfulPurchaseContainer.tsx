import React, {useEffect, useState} from 'react';
import styles from './SuccessfulPurchaseContainer.styles'

export const SuccessfulPurchaseContainer = () => {
  return(
    <div className={styles.container}>
      <h1 className={styles.header}>
              ¡Felicidades, tu compra fue un exito!</h1>
      <h3 className={styles.body}>
              Nuestro equipo se comunicara contigo via Email o WhatsApp segun los datos registrados en tu orden de compra.</h3>
          
  </div>
  );
};

export default SuccessfulPurchaseContainer;
