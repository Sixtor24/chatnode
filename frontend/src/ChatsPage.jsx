import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    return (
        <div className="background">
            <PrettyChatWindow
                projectId="1dd6994a-dade-4e6c-a73c-16ce59c9882c"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%'}}
            />
        </div>
    );
};

export default ChatsPage;