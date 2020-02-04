import { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export interface PortalProps {
  container?: any;
  children?: any;
  onRendered?: () => void;
}

const resolveRef = (ref: any) => {
  if (typeof document === 'undefined') return undefined;
  if (ref == null) return document.body;
  if (typeof ref === 'function') ref = ref();

  if (ref && ref.current) ref = ref.current;
  if (ref && ref.nodeType) return ref;

  return null;
};

function useWaitForDOMRef(ref: any, onResolved: any) {
  const [resolvedRef, setRef] = useState(() => resolveRef(ref));

  if (!resolvedRef) {
    const earlyRef = resolveRef(ref);
    if (earlyRef) setRef(earlyRef);
  }

  useEffect(() => {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);

  useEffect(() => {
    const nextRef = resolveRef(ref);
    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);

  return resolvedRef;
}

const Portal = ({ container, children, onRendered }: PortalProps) => {
  const resolvedContainer = useWaitForDOMRef(container, onRendered);

  return resolvedContainer ? ReactDOM.createPortal(children, resolvedContainer) : null;
};

Portal.propTypes = {
  container: PropTypes.any,
  onRendered: PropTypes.func,
};

export default Portal;
