export interface UserTracker {
    readonly id_usuario: string,
    readonly me_gusta: boolean
}

export interface TrackerModalProps {
    readonly isModalOpen: boolean;
    readonly handleOk: () => void;
    readonly handleCancel: () => void;
    readonly userTracker?: UserTracker[]

}

export interface UserLogin {
    readonly username: string;
    readonly password: string
}