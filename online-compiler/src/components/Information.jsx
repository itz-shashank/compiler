import React from "react";
import { compilerInfo } from "./compilerInfo";

function Information({ theme, toggleTheme, language }) {
  return (
    <div
      className={`mt-0 px-20 py-5 border rounded ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="font-bold text-5xl mb-8">
        {language} Compiler Information
      </h2>
      <p className="text-2xl mb-5">
        {compilerInfo[language]?.info ||
          "No information available for this language."}
      </p>

      {compilerInfo[language]?.sections && (
        <div>
          <div className="space-y-4 px-20">
            {Object.keys(compilerInfo[language].sections).map((sectionKey) => (
              <div key={sectionKey}>
                <h4 className="font-semibold text-4xl mb-8">{sectionKey}</h4>
                <p className="text-xl mt-5">
                  {compilerInfo[language].sections[sectionKey]}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <h3 className="mt-4 font-semibold text-5xl mt-20 mb-10">
        Frequently Asked Questions
      </h3>
      <ul className="list-disc pl-6 text-2xl">
        {compilerInfo[language]?.faqs ? (
          compilerInfo[language].faqs.map((faq, index) => (
            <li key={index} className="mt-5 text-2xl">
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </li>
          ))
        ) : (
          <p>No FAQs available for this language.</p>
        )}
      </ul>
    </div>
  );
}

export default Information;
