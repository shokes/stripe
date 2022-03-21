import React, { useState, useContext } from 'react'

// creating global context
const AppContext = React.createContext()

// creating provider

export const AppProvider = function ({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const openSubmenu = () => {
    setIsSubmenuOpen(true)
  }

  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// creating custom hook

export const useGlobalContext = function () {
  return useContext(AppContext)
}
