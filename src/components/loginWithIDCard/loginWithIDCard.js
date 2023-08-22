import React from "react";
import { useTranslation } from "react-i18next";
import { TTNewButton, Text } from "taltech-styleguide";
import "./loginWithIDCard.css";
import { getCurrentLanguage } from "../../localization/i18n.config";
import { useDispatch } from "react-redux";
import { actionCreator } from "../../redux/actions/common.actions";
import { SET_LOGIN } from "../../redux/actions/types";
const LoginWithIDCard = () => {
  const { t } = useTranslation();
  const currentLanguage = getCurrentLanguage();
  const dispatch = useDispatch();
  const onContinue = () => {
    dispatch(actionCreator(SET_LOGIN, true));
  };
  return (
    <div className="login-option-container">
      <Text as="h4">{t("id-card")}</Text>
      {currentLanguage === "est" ? (
        <Text
          color={"primary"}
          as="p"
          className="login-option-description-text"
        >
          Teenusesse{" "}
          <Text as="span" className="bold-text" color={"primary"}>
            TalTech ja autentimise teenus{" "}
          </Text>
          sisselogimiseks vajate kaardilugejat ja kehtivat ID-kaarti. Sisestage
          ID-kaart kaardilugejasse ja vajutage "Jätka".
        </Text>
      ) : (
        <Text
          color={"primary"}
          as="p"
          className="login-option-description-text"
        >
          Teenusesse{" "}
          <Text as="span" className="bold-text" color={"primary"}>
            TalTech ja autentimise teenus{" "}
          </Text>
          sisselogimiseks vajate kaardilugejat ja kehtivat ID-kaarti. Sisestage
          ID-kaart kaardilugejasse ja vajutage "Jätka".
        </Text>
      )}
      <TTNewButton
        onClick={onContinue}
        className="login-continue-button"
        variant="secondary"
      >
        {t("continue")}
      </TTNewButton>
    </div>
  );
};

export default LoginWithIDCard;
