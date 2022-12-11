import React from "react";
import css from './Notification.module.css';

const Notification = ({ message }) => {
    return (
            <h2 className={css.message}>{message}</h2>
    )
};

export default Notification;