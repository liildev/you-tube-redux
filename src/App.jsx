import React, { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";

import { Route, Routes, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import WatchScreen from "./screens/WatchScreen/WatchScreen";
import SearchScreen from "./screens/SearchScreen/SearchScreen";
import SubscriptionsScreen from "./screens/SubscriptionsScreen/SubscriptionsScreen";
import ChannelScreen from "./screens/ChannelScreen/ChannelScreen";
import Layout from "./components/Layout/Layout";

import "./libs/scss/_app.scss";

const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/auth");
    }
  }, [accessToken, loading, navigate]);

  return (
    <Routes>
      <Route
        path="/"
        index
        element={
          <Layout>
            <HomeScreen />
          </Layout>
        }
      />

      <Route
        path="/search/:query"
        element={
          <Layout>
            <SearchScreen />
          </Layout>
        }
      />

      <Route
        path="/watch/:id"
        element={
          <Layout>
            <WatchScreen />
          </Layout>
        }
      />

      <Route
        path="/feed/subscriptions"
        element={
          <Layout>
            <SubscriptionsScreen />
          </Layout>
        }
      />

      <Route
        path="/channel/:channelId"
        element={
          <Layout>
            <ChannelScreen />
          </Layout>
        }
      />

      <Route path="/auth" element={<LoginScreen />} />
    </Routes>
  );
};

export default App;
