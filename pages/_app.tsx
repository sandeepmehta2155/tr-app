import '../styles/globals.scss'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAt, faHome, faPhoneAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import Home from "./HomeContainer.tsx"
import React, { Component } from "react";
import Chatbot from "./Chatbot";

library.add(
faPhoneVolume,
faHome,
faAt,
faPhoneAlt
);

const MyApp = ({ Component, pageProps}) => (
  <>
  <Component {...pageProps} />
  <Chatbot />
  </>
)

export default MyApp;