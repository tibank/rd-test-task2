import React, { Children, Dispatch, FC, SetStateAction } from 'react';

type ModalProps = {
  children?: React.ReactNode;
  visible: Boolean;
  setVisible: Dispatch<SetStateAction<Boolean>>;
};

const ModalNote: FC<ModalProps> = ({ children, visible, setVisible }) => {
  const rootClasses: String[] = ['modal-note__layer'];
  if (visible) {
    rootClasses.push('active');
  }
  return (
    <div className={rootClasses.join(' ')}>
      <div className='modal-note__content'>{children}</div>
    </div>
  );
};

export default ModalNote;
