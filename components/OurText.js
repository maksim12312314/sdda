import React from "react";
import { Text } from "react-native";
import { useTranslation } from "react-i18next";

const OurText = (props) =>
{
    const { style, children, translate, params } = props;
    const { t } = useTranslation();
    return (
        <Text style={style}
              allowFontScaling={false}>{(translate || params) ? t(children, params) : children}</Text>
    );
};

export default OurText;