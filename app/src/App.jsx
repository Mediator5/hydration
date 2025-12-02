import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import AppLayout from "./pages/AppLayout";
import Home from "./pages/home";
import Properties from "./compoments/Properties";
import Dashboard from "./compoments/Dashboard";
import Settings from "./compoments/Settings";
import Bookings from "./compoments/Bookings";
import Favourites from "./compoments/Favourites";
import queryClient from "./services/queryClient";
import { createContext, useContext, useState } from "react";
import { FormContext } from "./context/FormContext";







export default function App() {
  const [showEditForm, setShowEditForm] = useState(false)
  const [propertyData, setPropertyData] = useState({})
  const [showForm, setShowForm] = useState(false)



  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <FormContext.Provider value={{ showEditForm, setShowEditForm, propertyData, setPropertyData, showForm, setShowForm }}>
          <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Navigate replace to={'dashboard'} />} />
                <Route path="properties" element={<Properties />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="bookings" element={<Bookings />} />
                <Route path="favourites" element={<Favourites />} />
                <Route path="settings" element={<Settings />} />
              </Route>

              <Route path="/*" />
            </Routes>
          </BrowserRouter>
        </FormContext.Provider>
        <Toaster />
      </QueryClientProvider>

    </div>
  );
}
