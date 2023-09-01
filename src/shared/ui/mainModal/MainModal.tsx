import React from 'react';
import { Modal } from 'antd';
import styles from './MainModal.module.scss';

interface MainModalProps {
  width?: string | number;
  isOpen: boolean;
  closeHandler: () => void;
  children: React.ReactNode;
}

export const MainModal = ({ width = 'auto', isOpen, closeHandler, children }: MainModalProps) => (
  <Modal
    className={styles.modal}
    closeIcon={
      <span className={styles.close}>
        <span />
      </span>
    }
    width={width}
    title=""
    centered
    footer={null}
    open={isOpen}
    onOk={closeHandler}
    onCancel={closeHandler}>
    {children}
  </Modal>
);
