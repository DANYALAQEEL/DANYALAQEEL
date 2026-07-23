'use client'
import { useEffect, useState } from 'react';

type UseWebSocketProps = {
    url: string;
    onMessage: (message: string) => void;
};

const useWebSocket = ({ url, onMessage }: UseWebSocketProps): void => {
    useEffect(() => {
        let socket: WebSocket;

        const connect = () => {
            socket = new WebSocket(url);

            socket.onopen = () => {
                console.log('WebSocket connection opened');
            };

            socket.onmessage = (event) => {
                console.log('Message from server: ', event.data);
                onMessage(event.data);
            };

            socket.onerror = (error) => {
                console.error('WebSocket error', error);
            };
        };

        connect();

        return () => {
            socket.close();
        };
    }, [url, onMessage]);
};

export default useWebSocket;
