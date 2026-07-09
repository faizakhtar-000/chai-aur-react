import { useState } from "react";
import Card from "./components/Card";

import "./App.css";

function App() {
  return (
    <>
      <div className="bg-black min-h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold text-red-500">Tailwind is Working</h1>
      </div>
      <Card title="Chai And Code" />
      <Card title="Faiz Akhtar" />
    </>
  );
}

export default App;
