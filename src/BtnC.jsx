import React, { useEffect, useRef } from "react";

import { APP_COLORS, APP_FONTS } from "./consts/colorConsts";

const BtnC = ({
    children,
    primary,
    secondary,
    danger,
    disabled,
    filled,
    outlined,
    dashed,
    xSmall,
    small,
    large,
    xLarge,
    icon,
    sharpEdge,
    opt,
    ...otherProps
}) => {
    const btnCRef = useRef();

    let btnBackgroundColor;
    let btnColor;
    let btnTxtColor;

    useEffect(() => {
        btnCRef.current.style.width = "10rem";
        btnCRef.current.style.height = "4rem";

        btnCRef.current.style.fontSize = APP_FONTS.FONT_SIZE_300;

        btnCRef.current.style.border = "none";
        btnCRef.current.style.borderRadius = "3px";

        btnCRef.current.style.color = "#000";

        if (primary) {
            btnBackgroundColor = APP_COLORS.COLOR_PRIMARY;
            btnColor = APP_COLORS.COLOR_PRIMARY;
        }

        if (secondary) {
            btnBackgroundColor = APP_COLORS.COLOR_SECONDARY;
            btnColor = APP_COLORS.COLOR_SECONDARY;
        }

        if (danger) {
            btnBackgroundColor = APP_COLORS.COLOR_DANGER;
            btnColor = APP_COLORS.COLOR_DANGER;
            btnTxtColor = "#fff";
        }

        if (disabled) {
            btnBackgroundColor = APP_COLORS.COLOR_DISABLED;
            btnColor = APP_COLORS.COLOR_DISABLED_TEXT;
            btnTxtColor = APP_COLORS.COLOR_DISABLED_TEXT;

            btnCRef.current.style.cursor = "not-allowed";
        }

        if (filled) {
            btnCRef.current.style.backgroundColor = btnBackgroundColor;
            btnCRef.current.style.color = btnTxtColor;
        }

        if (outlined) {
            btnCRef.current.style.backgroundColor = "transparent";
            btnCRef.current.style.border = `2px solid ${btnColor}`;
            btnCRef.current.style.color = btnColor;
        }

        if (dashed) {
            btnCRef.current.style.backgroundColor = "transparent";
            btnCRef.current.style.border = `2px dashed ${btnColor}`;
            btnCRef.current.style.color = btnColor;
        }

        if (xSmall) {
            btnCRef.current.style.width = "6rem";
            btnCRef.current.style.height = "2rem";
        }

        if (small) {
            btnCRef.current.style.width = "8rem";
            btnCRef.current.style.height = "3rem";
        }

        if (large) {
            btnCRef.current.style.width = "12rem";
            btnCRef.current.style.height = "5rem";
        }

        if (xLarge) {
            btnCRef.current.style.width = "14rem";
            btnCRef.current.style.height = "6rem";
        }

        if (sharpEdge) {
            btnCRef.current.style.borderRadius = "0";
        }

        if (icon) {
            btnCRef.current.style.display = "flex";
            btnCRef.current.style.alignItems = "center";
            btnCRef.current.style.justifyContent = "center";
            btnCRef.current.style.gap = "5px";
        }
    }, []);

    return (
        <button className="btn-c" ref={btnCRef} style={opt} {...otherProps}>
            {children}
            {icon}
        </button>
    );
};

export default BtnC;
