import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DataTracker } from '../utils/types';
import postApp from '../api/post';
import getApp from '../api/get';

export const useApp = () => {
    const [userId, setUserId] = useState<null | string>(null);
    const [dataTracker, setDataTracker] = useState<DataTracker>();

    const [isTracked, setIsTracked] = useState(false);
    const isInitialMount = useRef(true);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [hasLiked, setHasLiked] = useState(false);

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
                const pageUrl = window.location.pathname;

                if (!storedUserId) {
                    storedUserId = uuidv4();
                    await postApp.addVisit({
                        page_url: pageUrl,
                        user_id: storedUserId
                    });
                    localStorage.setItem('userId', storedUserId);
                }
                setUserId(storedUserId);
                const likes = await getApp.getTotalLikes(pageUrl);
                const visits = await getApp.getTotalVisits(pageUrl);
                setDataTracker({
                    likes: likes!,
                    visits: visits!
                });
                const liked = await getApp.hasUserLiked(storedUserId, pageUrl);
                setHasLiked(liked);
                setIsTracked(true);
            })();
        }
    }, []);

    return {
        userId,
        dataTracker,
        isModalOpen,
        showModal,
        handleOk,
        handleCancel,
        hasLiked
    };
};
