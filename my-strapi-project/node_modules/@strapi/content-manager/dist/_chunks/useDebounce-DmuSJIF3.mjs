import { useRef, useEffect, useState } from "react";
const prefixFileUrlWithBackendUrl = (fileURL) => {
  return !!fileURL && fileURL.startsWith("/") ? `${window.strapi.backendURL}${fileURL}` : fileURL;
};
const usePrev = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
export {
  useDebounce as a,
  prefixFileUrlWithBackendUrl as p,
  usePrev as u
};
//# sourceMappingURL=useDebounce-DmuSJIF3.mjs.map
