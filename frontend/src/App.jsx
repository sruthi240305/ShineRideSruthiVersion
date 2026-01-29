import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { useAuth } from '@/hooks/useAuth';
import Layout from '@/components/Layout';
import LandingPage from '@/pages/LandingPage';
import LoginPage from '@/components/forms/loginandsigninforms/Login';
import SignupPage from '@/components/forms/loginandsigninforms/Signup';
import CustomerDashboard from '@/pages/customer/CustomerDashboardPage';
import StaffDashboard from '@/pages/staff/StaffDashboard';
import AdminPage from '@/pages/AdminPage';
import ProductGrid from '@/components/ProductGrid';
import TradesTable from '@/components/TradesTable';
import StaggeredMenu from '@/components/Navigation/StaggeredMenu';
import YourProfilePage from '@/pages/customer/YourProfilePage';
import GaragePage from '@/pages/GaragePage';
import YourOrdersPage from '@/pages/YourOrdersPage';
import TrackOrderPage from '@/pages/TrackOrderPage';
import OrderDetailsPage from '@/pages/OrderDetailsPage';
import ChatPage from '@/pages/ChatPage';
import YourAddressPage from '@/pages/customer/YourAddressPage';

// import WriteReview from '@/components/WriteReview';
import FeedbackForm from '@/components/forms/FeedbackForm';
import NotFoundPage from '@/pages/NotFoundPage';
import UnusedComponentsDemo from '@/pages/UnusedComponentsDemo';
import './App.css';
import AddVehicleCard from '@/components/AddVehicleCard';
import AddVehicleForm from '@/components/forms/VehicleFroms/AddVehicleForm';
import EditVehicleForm from '@/components/forms/VehicleFroms/EditVehicleForm';
import PaymentPage from '@/pages/customer/PaymentPage';

import LoginSecurityPage from '@/pages/customer/LoginSecurityPage';
import ChangeYourName from '@/components/forms/CustomerProfileChangeForms/ChangeYourName';
import ChangeEmailAddress from '@/components/forms/CustomerProfileChangeForms/ChangeEmailAddres';
import Breadcrumbs from '@/components/Breadcrumbs';
import AddressForm from '@/components/forms/AddressForm';
import EditAddressForm from '@/components/forms/EditAddressForm';

import CustomerServiceChat from '@/components/CustomerServiceChat';
import ChangePhone from '@/components/forms/CustomerProfileChangeForms/ChangePhone';
import ChangePassword from '@/components/forms/CustomerProfileChangeForms/ChangePassword';
import ContactUsPage from '@/pages/ContactUsPage';
import AddAddressPage from '@/pages/customer/AddAddressPage';
import EditAddressPage from '@/pages/customer/EditAddressPage';
import AddVehiclePage from '@/pages/customer/AddVehiclePage';
import EditVehiclePage from '@/pages/customer/EditVehiclePage';

import DashboardLayout from '@/components/DashboardLayout';

/* =========================
   Protected Route
========================= */
const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: '#fff'
      }}>
        Loading...
      </div>
    );
  }

  if (!user) return <Navigate to="/login" />;

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

/* =========================
   App Routes
 ========================= */
const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>

      {/* -------- AUTH ROUTES (NO NAVBAR) -------- */}
      <Route
        path="/login"
        element={
          !user ? (
            <LoginPage />
          ) : (
            user.role === 'customer' ? (
              <Navigate to="/customer-dashboard" />
            ) : user.role === 'staff' ? (
              <Navigate to="/staff-dashboard" />
            ) : user.role === 'admin' ? (
              <Navigate to="/admin-dashboard" />
            ) : (
              <Navigate to="/" />
            )
          )
        }
      />

      <Route
        path="/signup"
        element={!user ? <SignupPage /> : <Navigate to="/" />}
      />

      {/* -------- ROUTES WITH NAVBAR -------- */}
      <Route
        path="/"
        element={
          <Layout>
            <LandingPage />
          </Layout>
        }
      />

      <Route
        path="/contact"
        element={<ContactUsPage />}
      />

      {/* -------- PROTECTED CUSTOMER DASHBOARD (NO NAVBAR) -------- */}
      <Route
        path="/customer-dashboard"
        element={
          <ProtectedRoute requiredRole="customer">
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<CustomerDashboard />} />
        <Route path="services" element={<ProductGrid />} />
        <Route path="payment" element={<PaymentPage />} />

        {/* Your Profile Section */}
        <Route path="yourprofile" element={<YourProfilePage />} />
        <Route path="yourprofile/login-security" element={<LoginSecurityPage />} />
        <Route path="yourprofile/change-name" element={<ChangeYourName />} />
        <Route path="yourprofile/change-email" element={<ChangeEmailAddress />} />
        <Route path="yourprofile/change-phone" element={<ChangePhone />} />
        <Route path="yourprofile/change-password" element={<ChangePassword />} />
        <Route path="yourprofile/garage" element={<GaragePage />} />
        <Route path="yourprofile/garage/add-vehicle" element={<AddVehiclePage />} />
        <Route path="yourprofile/garage/edit-vehicle" element={<EditVehiclePage />} />
        <Route path="yourprofile/addresses" element={<YourAddressPage />} />
        <Route path="yourprofile/addresses/add" element={<AddAddressPage />} />
        <Route path="yourprofile/addresses/:id/edit" element={<EditAddressPage />} />
        <Route path="yourprofile/orders" element={<YourOrdersPage />} />
        <Route path="yourprofile/orders/track" element={<TrackOrderPage />} />
        <Route path="yourprofile/orders/details" element={<OrderDetailsPage />} />

        <Route path="yourprofile/chat" element={<CustomerServiceChat />} />
      </Route>

      {/* -------- PROTECTED STAFF DASHBOARD -------- */}
      <Route
        path="/staff-dashboard"
        element={
          <ProtectedRoute requiredRole="staff">
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<StaffDashboard />} />
        {/* Add more staff sub-routes here if needed */}
      </Route>

      {/* -------- PROTECTED ADMIN DASHBOARD -------- */}
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute requiredRole="admin">
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminPage />} />
        {/* Sub-routes logic for Admin is handled inside AdminPage tab switching */}
      </Route>

      {/* -------- MISC ROUTES -------- */}
      <Route path="/trades" element={<Layout><TradesTable /></Layout>} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/unused-components" element={<UnusedComponentsDemo />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
