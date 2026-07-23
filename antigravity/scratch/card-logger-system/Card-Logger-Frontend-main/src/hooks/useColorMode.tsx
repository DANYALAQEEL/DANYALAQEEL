import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

type SetValue<T> = T | ((val: T) => T);

const useColorMode = (): [string, (value: SetValue<string>) => void] => {
  const [colorMode, setColorMode] = useLocalStorage<string>("color-theme", "light");

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    colorMode === "dark"
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export type UseColorModeReturn = ReturnType<typeof useColorMode>;

export default useColorMode;
