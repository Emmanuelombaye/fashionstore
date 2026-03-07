import { RouterProvider } from 'react-router';
import { Toaster } from 'sonner';
import { router } from './routes';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" richColors />
    </CartProvider>
  );
}
