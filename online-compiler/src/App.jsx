import axios from "axios";
import React, { useState } from "react";
import Editor from "./components/Editor";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Information from "./components/Information";

const templates = {
  C: `#include <stdio.h>\n\nint main() {\n    // Write your code here\n    printf("Hello, World!\\n");\n    return 0;\n}`,
  "C++": `#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your code here\n    cout << "Hello, World!" << endl;\n    return 0;\n}`,
  "C#": `using System;\n\nnamespace HelloWorld {\n    class Program {\n        static void Main(string[] args) {\n            // Write your code here\n            Console.WriteLine("Hello, World!");\n        }\n    }\n}`,
  Go: `package main\nimport "fmt"\n\nfunc main() {\n    // Write your code here\n    fmt.Println("Hello, World!")\n}`,
  HTML: `<!DOCTYPE html>\n<html>\n<head>\n    <title>Hello World</title>\n</head>\n<body>\n    <!-- Write your code here -->\n    <h1>Hello, World!</h1>\n</body>\n</html>`,
  Java: `public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n        System.out.println("Hello, World!");\n    }\n}`,
  JavaScript: `// Write your code here\nconsole.log("Hello, World!");`,
  Python: `# Write your code here\nprint("Hello, World!")`,
};

function App() {
  const [language, setLanguage] = useState("C");
  const [code, setCode] = useState(templates["C"]);
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [editorExpanded, setEditorExpanded] = useState(false);
  const [theme, setTheme] = useState("dark");

  
  const runCode = async () => {
    try {
      const response = await axios.post(
        "https://api.compiler-service.com/execute",
        {
          language,
          code,
          input,
        }
      );
      setOutput(response.data.output || "No output");
    } catch (error) {
      setOutput("Error running code");
    }
  };

  
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setCode(
      templates[newLanguage] || "// No template available for this language"
    );
    setOutput("");
  };

  const handleReset = () => {
    setCode(templates[language]);
    setInput(""); 
    setOutput(""); 
  };

  const toggleEditor = () => {
    setEditorExpanded(!editorExpanded);
  };

  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`h-screen flex flex-col ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Navbar  className="h-20"  theme={theme}
        toggleTheme={toggleTheme}/>
      <div className="flex flex-grow">
        <Sidebar
        theme={theme}
        toggleTheme={toggleTheme}
          selectedLanguage={language}
          onSelectLanguage={handleLanguageChange}
        />
       
       
          <Editor
            code={code}
            setCode={setCode}
            language={language}
            input={input}
            setInput={setInput}
            output={output}
            runCode={runCode}
            theme={theme} 
            toggleTheme={toggleTheme} 
            editorExpanded={editorExpanded}
            toggleEditor={toggleEditor}
            handleReset={handleReset}
          />
       
      </div>

      <Information
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
      />

      <Footer theme={theme} toggleTheme={toggleTheme}/>
    </div>
  );
}

export default App;
