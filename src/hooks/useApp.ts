import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { UserTracker } from '../utils/types';
import postApp from '../api/post';
import getApp from '../api/get';

export const useApp = () => {
    const [userId, setUserId] = useState<null | string>(null);
    const [userTracker, setUserTracker] = useState<UserTracker[]>([]);

    const [isTracked, setIsTracked] = useState(false);
    const isInitialMount = useRef(true);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            (async () => {
                if (isTracked) return;
                let storedUserId = localStorage.getItem('userId');
                if (!storedUserId) {
                    storedUserId = uuidv4();
                    await postApp.userTracking({
                        id_usuario: storedUserId,
                        me_gusta: false
                    });
                    localStorage.setItem('userId', storedUserId);
                }
                setUserId(storedUserId);
                const dataUserTracker = await getApp.userTracking();
                setUserTracker(dataUserTracker);
                setIsTracked(true);
            })();
        }
    }, []);

    return {
        userId,
        userTracker,
        isModalOpen,
        showModal,
        handleOk,
        handleCancel
    };
};
