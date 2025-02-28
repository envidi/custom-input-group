import { ReactNode, useRef } from 'react';
import { useResize } from '../../hooks';
import './styles/index.css';

interface Props {
  children: ReactNode;
  className?: string;
}

export function Resizable({ children, className = '' }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { dimensions, startResize, reset } = useResize({ ref: wrapperRef });

  return (
    <div
      ref={wrapperRef}
      className={`wrapper`}
      style={{
        width: dimensions.width,
        height: dimensions.height,
      }}
    >
      {children}

      <div
        onMouseDown={(e) => startResize(e, 'horizontal')}
        onDoubleClick={() => reset('horizontal')}
        // className={styles.rightHandle}
        className="rightHandle"
      >
        <div className="handle horizontal">
          <div className="indicator" />
        </div>
      </div>

      <div
        className="bottomHandle"
        onMouseDown={(e) => startResize(e, 'vertical')}
        onDoubleClick={() => reset('vertical')}
        // className={styles.bottomHandle}
      >
        <div className="handle vertical">
          <div className="indicator" />
        </div>
      </div>
    </div>
  );
}

export default Resizable;
