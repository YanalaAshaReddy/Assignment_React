import React from 'react';
import RouterConfig from "./RouterConfig";
import { BrowserRouter } from "react-router-dom";
import { createContext } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const SUPABASE_URL = "https://your-supabase-url.supabase.co"; // Replace with your URL
const SUPABASE_KEY = "your-supabase-api-key"; // Replace with your Key
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Create a context for Supabase
export const SupabaseContext = createContext();

function App() {
  return (
    <SupabaseContext.Provider value={supabase}>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </SupabaseContext.Provider>
  );
}

export default App;
