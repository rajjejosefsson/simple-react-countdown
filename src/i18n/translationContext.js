import React, { Component } from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import locale_en from "react-intl/locale-data/en";
import locale_sv from "react-intl/locale-data/sv";

import messages_sv from "./sv.json";
import messages_en from "./en.json";
import languages from "./countries.json";

addLocaleData([...locale_en, ...locale_sv]);

const messages = {
  sv: messages_sv,
  en: messages_en
};

const TranslationContext = React.createContext();
const TranslationConsumer = TranslationContext.Consumer;

class TranslationProvider extends Component {
  setLanguage = language => {
    this.setState({ language });
  };

  state = {
    language: navigator.language.split(/[-_]/)[0],
    countryList: languages,
    setLanguage: this.setLanguage
  };

  render() {
    const { language } = this.state;
    return (
      <TranslationContext.Provider value={this.state}>
        <IntlProvider locale={language} messages={messages[language]}>
          {this.props.children}
        </IntlProvider>
      </TranslationContext.Provider>
    );
  }
}

export { TranslationProvider, TranslationConsumer };
