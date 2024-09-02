"use client"

import React, { createContext, useState, useEffect, useRef, ReactNode, useContext } from 'react';

interface WebsocketContextProps {
  isReady: boolean;
  val: any;
  send: (data: string) => void;
}

const WebsocketContext = createContext<WebsocketContextProps | undefined>(undefined);

export const WebsocketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const [val, setVal] = useState<any>(null);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:5003");

    socket.onopen = () => setIsReady(true);
    socket.onclose = () => setIsReady(false);
    socket.onmessage = (event) => setVal(event.data);

    ws.current = socket;

    return () => {
      socket.close();
    };
  }, []);

  const send = (data: string) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(data);
    }
  };

  return (
    <WebsocketContext.Provider value={{ isReady, val, send }}>
      {children}
    </WebsocketContext.Provider>
  );
};

export const useWebsocket = (): WebsocketContextProps => {
  const context = useContext(WebsocketContext);
  if (!context) {
    throw new Error('useWebsocket must be used within a WebsocketProvider');
  }
  return context;
};
