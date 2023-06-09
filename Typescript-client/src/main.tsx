import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ProductProvider } from './context/ProductContext/ProductContext.tsx'
import { CartProvider } from './context/CartContext/CartContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import { BottomNavigationProvider } from './context/BottomNavigationContext/BottomNavigationContext.tsx'
import { AuthProvider } from './context/AuthContext/AuthContext.tsx'
import { FavouritesProvider } from './context/FavoritesContext/FavoritesContext.tsx'
import { NotificationProvider } from './context/NotificationContext/NotificationContext.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <ProductProvider>
    <AuthProvider>
      <CartProvider>
        <FavouritesProvider>
          <BottomNavigationProvider>
            <NotificationProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </NotificationProvider>
          </BottomNavigationProvider>
        </FavouritesProvider>
      </CartProvider>
    </AuthProvider>
  </ProductProvider>

)
