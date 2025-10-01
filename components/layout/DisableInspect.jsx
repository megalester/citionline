"use client";
import { useEffect } from "react";

export default function DisableInspect({ children }) {
  useEffect(() => {
    // Disable right click
    const disableContext = (e) => {
      e.preventDefault();
      return false;
    };
    document.addEventListener("contextmenu", disableContext);

    // Disable shortcuts
    document.onkeydown = function (e) {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && [73, 74, 67].includes(e.keyCode)) || // Ctrl+Shift+I/J/C
        (e.ctrlKey && [85, 83, 67].includes(e.keyCode)) // Ctrl+U, Ctrl+S, Ctrl+C
      ) {
        e.preventDefault();
        return false;
      }
    };

    return () => {
      document.removeEventListener("contextmenu", disableContext);
    };
  }, []);

  return <>{children}</>;
}
