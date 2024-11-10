import React from "react";
import { FaPython, FaJava, FaJs, FaHtml5 } from "react-icons/fa";
import { SiCplusplus, SiCsharp, SiGo, SiJavascript } from "react-icons/si";

const languages = [
  {
    id: "c",
    name: "C",
    icon: <SiCplusplus />,
    template: `// Online C compiler to run C program online
#include <stdio.h>

int main() {
    // Write C code here
    printf("Hello, World!");
    return 0;
}`,
  },
  {
    id: "csharp",
    name: "C#",
    icon: <SiCsharp />,
    template: `using System;

class Program {
    static void Main(string[] args) {
        // Write C# code here
        Console.WriteLine("Hello, World!");
    }
}`,
  },
  {
    id: "cpp",
    name: "C++",
    icon: <SiCplusplus />,
    template: `#include <iostream>

int main() {
    // Write C++ code here
    std::cout << "Hello, World!";
    return 0;
}`,
  },
  {
    id: "go",
    name: "Go",
    icon: <SiGo />,
    template: `package main

import "fmt"

func main() {
    // Write Go code here
    fmt.Println("Hello, World!")
}`,
  },
  {
    id: "html",
    name: "HTML",
    icon: <FaHtml5 />,
    template: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello, World!</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>`,
  },
  {
    id: "java",
    name: "Java",
    icon: <FaJava />,
    template: `public class Main {
  public static void main(String[] args) {
    // Write Java code here
    System.out.println("Hello, World!");
  }
}`,
  },
  {
    id: "js",
    name: "JavaScript",
    icon: <FaJs />,
    template: `console.log("Hello, World!");`,
  },
  {
    id: "python",
    name: "Python",
    icon: <FaPython />,
    template: `# Write Python code here
print("Hello, World!")`,
  },
];

const Sidebar = ({
  selectedLanguage,
  onSelectLanguage,
  theme,
  toggleTheme,
}) => {
  return (
    <div
      className={`p-4 h-full border rounded-lg ${
        theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      {languages.map((lang) => (
        <div
          key={lang.id}
          className={`flex items-center space-x-3  p-3 border mt-4 cursor-pointer hover:bg-gray-600 transition-colors ${
            selectedLanguage === lang.id ? "bg-gray-700" : ""
          }`}
          onClick={() => onSelectLanguage(lang.name)}
        >
          <div className="border border-white p-2 rounded-full bg-white text-blue-500">
            {lang.icon}
          </div>
          <span
            className={`${
              theme === "dark"
                ? "bg-black text-white"
                : "bg-gray-100 text-black"
            }`}
          >
            {lang.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
export { languages };
