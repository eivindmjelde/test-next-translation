import React, { useEffect } from "react";

export function GoogleTranslate() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
    // @ts-ignore
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  function googleTranslateElementInit() {
    console.log("googleTranslateElementInit");
    // @ts-ignore
    new window.google.translate.TranslateElement(
      { pageLanguage: "no" }
      // "google_translate_element"
    );
  }
  return null;
}
