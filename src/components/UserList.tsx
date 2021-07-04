import React, {FC} from 'react';
import {useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";

const UserList: FC = () => {
    const {users, error, loading} = useTypedSelector((state) => state.users)

    return (
        <div>

        </div>
    );
};

export default UserList;
