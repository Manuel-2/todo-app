import React from "react";

const loadStateEnum = {
  loading: "loading",
  complete: "complete",
  error: "error",
};

function useLocalStorage(itemKey, defaultValue) {
  const [item, setItem] = React.useState(defaultValue);
  const [loadState, setLoadState] = React.useState(loadStateEnum.loading);

  // simulating delay
  React.useEffect(() => {
    setTimeout(() => {
      try {
        let itemValue = JSON.parse(localStorage.getItem(itemKey));
        if (itemValue == null) {
          itemValue = defaultValue;
        }
        setItem(itemValue);
        setLoadState(loadStateEnum.complete);
      } catch (error) {
        setLoadState(loadStateEnum.error);
      }
    }, 2000);
  }, []);

  return { item, setItem, loadState };
}

export { useLocalStorage, loadStateEnum };
