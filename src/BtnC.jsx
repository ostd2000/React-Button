import React from "react";

import APP_COLORS from "./consts/colorConsts";

const BtnC = ({
    children,
    primary,
    primaryOutlined,
    secondary,
    secondaryOutlined,
    danger,
    dangerOutlined,
    disabled,
    xSmall,
    small,
    large,
    xLarge,
    icon,
    btnOpt,
    sharpEdge,
}) => {
    let btnStyles = {
        width: "10rem",
        height: "4rem",

        borderRadius: "5px",

        ...btnOpt,
    };

    if (primary) {
        btnStyles = {
            ...btnStyles,
            color: "#000",
            backgroundColor: APP_COLORS.COLOR_PRIMARY,
        };
    }

    if (primaryOutlined) {
        btnStyles = {
            ...btnStyles,
            color: APP_COLORS.COLOR_PRIMARY,
            backgroundColor: "transparent",
            border: `2px solid ${APP_COLORS.COLOR_PRIMARY}`,
        };
    }

    if (secondary) {
        btnStyles = {
            ...btnStyles,
            color: "#000",
            backgroundColor: APP_COLORS.COLOR_SECONDARY,
        };
    }

    if (secondaryOutlined) {
        btnStyles = {
            ...btnStyles,
            color: APP_COLORS.COLOR_SECONDARY,
            backgroundColor: "transparent",
            border: `2px solid ${APP_COLORS.COLOR_SECONDARY}`,
        };
    }

    if (danger) {
        btnStyles = {
            ...btnStyles,
            color: "#fff",
            backgroundColor: APP_COLORS.COLOR_DANGER,
        };
    }

    if (dangerOutlined) {
        btnStyles = {
            ...btnStyles,
            color: APP_COLORS.COLOR_DANGER,
            backgroundColor: "transparent",
            border: `2px solid ${APP_COLORS.COLOR_DANGER}`,
        };
    }

    if (disabled) {
        btnStyles = {
            ...btnStyles,
            color: APP_COLORS.COLOR_DISABLED_TEXT,
            backgroundColor: "transparent",
            border: `2px solid ${APP_COLORS.COLOR_DISABLED}`,
            cursor: "not-allowed",
        };
    }

    if (xSmall) {
        btnStyles = {
            ...btnStyles,
            width: "6rem",
            height: "2rem",
        };
    }

    if (small) {
        btnStyles = {
            ...btnStyles,
            width: "8rem",
            height: "3rem",
        };
    }

    if (large) {
        btnStyles = {
            ...btnStyles,
            width: "12rem",
            height: "5rem",
        };
    }

    if (xLarge) {
        btnStyles = {
            ...btnStyles,
            width: "14rem",
            height: "6rem",
        };
    }

    if (sharpEdge) {
        btnStyles = {
            ...btnStyles,
            borderRadius: "0px",
        };
    }

    if (icon) {
        btnStyles = {
            ...btnStyles,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
        };
    }

    return (
        <button style={btnStyles}>
            {children}
            {icon}
        </button>
    );
};

export default BtnC;
