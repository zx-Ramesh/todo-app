"use client";

import { Provider } from "react-redux";

import { ReactNode } from "react";
import { store } from "@/app/redux/store";
// import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

interface ProvidersProps {
  children: ReactNode;
}
let persistor = persistStore(store)

const Providers = ({ children }: ProvidersProps) => {
  return <Provider store={store}>
    <PersistGate persistor={persistor}>
    {children}
    </PersistGate>
    </Provider>;
};

export default Providers;
