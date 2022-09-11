import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  HomeScreen,
  SearchScreen,
  WatchScreen,
  SubscriptionsScreen,
  LoginScreen,
  ChannelScreen,
} from "./screens";
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

      <Route
        path="/liked"
        element={
          <Layout>
            <h2>Liked</h2>
          </Layout>
        }
      />

      <Route
        path="/history"
        element={
          <Layout>
            <h2>History</h2>
          </Layout>
        }
      />

      <Route
        path="/library"
        element={
          <Layout>
            <h2>Library</h2>
          </Layout>
        }
      />
      <Route path="/auth" element={<LoginScreen />} />
    </Routes>
  );
};

export default App;
