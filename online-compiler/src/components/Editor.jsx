import { Maximize2, Moon, RotateCw, Share2 } from "lucide-react";
import React from "react";

const Editor = ({
  code,
  setCode,
  language,
  input,
  setInput,
  output,
  runCode,
  editorExpanded,
  toggleEditor,
  handleReset,
  theme,
  toggleTheme,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col h-screen ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`flex items-center justify-between p-4 border-b ${
          theme === "dark"
            ? "border-black bg-black"
            : "border-gray-300 bg-white"
        }`}
      >
        <div className="font-large">{language} Online Compiler</div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleReset}
            className="p-2 hover:bg-gray-700 rounded"
          >
            <RotateCw className="w-5 h-5" />
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-gray-700 rounded"
          >
            <Moon className="w-5 h-5" />
          </button>

          <button
            onClick={toggleEditor}
            className="p-2 hover:bg-gray-700 rounded"
          >
            <Maximize2 className="w-5 h-5" />
          </button>

          {}
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </div>

          {}
          <button
            onClick={runCode}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Run Code
          </button>
        </div>
      </div>

      <div
        className={`flex flex-1 ${theme === "dark" ? "bg-black" : "bg-white"}`}
      >
        <div className="w-3/4 border-r">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className={`w-full ${
              editorExpanded ? "h-full" : "h-64"
            } p-2 border rounded mb-4 ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-gray-100 text-black"
            }`}
            placeholder="Write your code here"
          ></textarea>
        </div>

        {}
        <div className="w-1/4">
          <div className="p-4">
            <h3 className="font-bold">Input</h3>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className={`w-full h-32 p-2 border rounded mb-4 ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-black"
              }`}
              placeholder="Enter input here"
            ></textarea>

            <h3 className="font-bold">Output</h3>
            <pre
              className={`w-full h-32 p-2 border rounded ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              {output}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
