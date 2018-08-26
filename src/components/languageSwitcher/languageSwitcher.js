import React, { Component } from "react";
import { TranslationConsumer } from "../../i18n/translationContext";

export class LanguageSwticher extends Component {
  state = { language: null };

  onChangeLanguage = (setLanguage, selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  render() {
    return (
      <TranslationConsumer>
        {({ setLanguage, language, countryList }) => (
          <select
            value={this.state.language || language}
            onChange={({ target: { value } }) =>
              this.onChangeLanguage(setLanguage, value)
            }
          >
            {countryList.map(country => (
              <option key={country.locale} value={country.locale}>
                {country.language}
              </option>
            ))}
          </select>
        )}
      </TranslationConsumer>
    );
  }
}
