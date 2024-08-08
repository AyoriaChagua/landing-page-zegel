import { useState, useEffect } from 'react';
import postApp from '../../api/post'; // Asegúrate de que la ruta sea correcta
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import getApp from '../../api/get';

interface Props {
    readonly userId?: string | null,
    readonly pageUrl: string,
}

export default function LikeButton({ userId = null, pageUrl }: Props) {
    const [liked, setLiked] = useState(false);

    const handleLike = async () => {
        if (userId) {
            if (liked) {
                await postApp.removeLike(userId, pageUrl);
                setLiked(false);
            } else {
                await postApp.addLike({ user_id: userId, page_url: pageUrl });
                setLiked(true);
            }
        }
    };

    useEffect(() => {
        (async () => {
            const resLiked = await getApp.hasUserLiked(userId!, pageUrl);
            setLiked(resLiked);
        })();
    }, []);

    return (
        <button
            onClick={handleLike}
            className={`p-2 rounded-full transition-colors duration-300 ${liked ? 'text-red-600' : 'text-gray-400'}`}
        >
            {liked ? <HeartFilled className='text-red-500 text-2xl' size={24} /> : <HeartOutlined className='text-red-500 text-2xl' size={24} />}
        </button>
    );
};

