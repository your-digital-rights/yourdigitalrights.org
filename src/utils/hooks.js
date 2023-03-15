import { useEffect } from 'react';
import Script from 'next/script'

const useScript = url => {
  useEffect(() => {
    const script = document.createElement("Script");

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [url]);
};

export {useScript};