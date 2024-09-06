"use strict";
const React = require("react");
const prefixFileUrlWithBackendUrl = (fileURL) => {
  return !!fileURL && fileURL.startsWith("/") ? `${window.strapi.backendURL}${fileURL}` : fileURL;
};
const usePrev = (value) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}
exports.prefixFileUrlWithBackendUrl = prefixFileUrlWithBackendUrl;
exports.useDebounce = useDebounce;
exports.usePrev = usePrev;
//# sourceMappingURL=useDebounce-CtcjDB3L.js.map
