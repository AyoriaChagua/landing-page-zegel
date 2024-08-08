export interface VisitData {
    user_id: string;
    page_url: string;
}

export interface LikeData {
    user_id: string;
    page_url: string;
}

export interface TrackerModalProps {
    readonly isModalOpen: boolean;
    readonly handleOk: () => void;
    readonly handleCancel: () => void;
    readonly dataTracker?: DataTracker
}

export interface UserLogin {
    readonly username: string;
    readonly password: string
}

export interface DataTracker {
    readonly visits: bigint;
    readonly likes: bigint;
}

export interface TotalVisitsResponse {
    total_visits: bigint;
}

export interface TotalLikesResponse {
    total_likes: bigint;
}
