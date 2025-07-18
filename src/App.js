import { ThemeProvider } from "@emotion/react";
import Header1 from "./Components/Header/Header1";
import Header2 from "./Components/Header/Header2";
import Header3 from "./Components/Header/Header3";
import { CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import { ColorModeContext, useMode } from "./theam";
import ScrollToTop from "./Components/scroll/ScrollToTop";
import Home from "./pages/Home";
import Footer from "./Components/footer/Footer";
import { Outlet, Route, Routes } from "react-router-dom";
import ShpingCartProvider from "./context/ShoppingCartContext";
import DrawerProvider from "./context/DrawerContext";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Review from "./pages/Review";
import Cart from "./pages/Cart";
import CheckoutAlternativee from "./pages/CheckoutAlternativee";
import Order from "./Components/Revue/Order/Order";
import WichLest from "./Components/Revue/Wishlist/WichLest";
import ProfileInfo from "./Components/Revue/profilInfo/ProfileInfo";
import Addresses from "./Components/Revue/Addresses";
import PaymentMethods from "./Components/Revue/paymentMethods";
import SupportTickets from "./Components/Revue/support/SupportTickets";
import DrawerRevueContextProvider from "./context/DrawerRevueContext";
import ShoppingStages from "./Components/shoppingCart/ShoppingStages";
import Login from "./Components/Authentification/Login";
import Register from "./Components/Authentification/Register";
import Reset from "./Components/Authentification/Reset";
import FixedHeaderNavBar from "./Components/Header/FixedHeaderNavBar";

function MainLayout() {

  const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.down('lg'));
  

  return (
    <>
      <Header1 />
      <Header2 />
      <Header3 />
      <Outlet />


      {

        matches && <FixedHeaderNavBar />
      }

      
      <Footer />
      <ScrollToTop />
    </>
  );
}

function AuthLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

function Other() {
  return (
    <>
      <Outlet />
    </>
  );
}
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DrawerRevueContextProvider>
          <DrawerProvider>
            <ShpingCartProvider>
              <Routes>
                <Route element={<MainLayout />}>
                  <Route path="/" element={<Home />} />

                  <Route
                    path="/checkout-alternative"
                    element={<CheckoutAlternativee />}
                  />
                  <Route path="/cart" element={<ShoppingStages />}>
                    <Route index element={<Cart />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="payment" element={<Payment />} />
                  </Route>

                  <Route path="/review" element={<Review />}>
                    <Route index element={<Order />} />
                    <Route path="wishlist" element={<WichLest />} />
                    <Route
                      path="support-tickets"
                      element={<SupportTickets />}
                    />
                    <Route path="profile-info" element={<ProfileInfo />} />
                    <Route path="addresses" element={<Addresses />} />
                    <Route
                      path="payment-methods"
                      element={<PaymentMethods />}
                    />
                  </Route>
                </Route>

                <Route element={<AuthLayout />}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/reset" element={<Reset />} />
                </Route>

                <Route element={<Other />}>
                  <Route path="*" element={<h1>Not Page Found</h1>} />
                </Route>
              </Routes>
            </ShpingCartProvider>
          </DrawerProvider>
        </DrawerRevueContextProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
