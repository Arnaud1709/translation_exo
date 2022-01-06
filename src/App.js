import './App.css';
import { useTranslation, withTranslation } from 'react-i18next';

function MyComponent() {

  const {t, i18n} = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
      <div className='traduction'>
        <div className='traductionInputs'>
        <button className='traductionInput' type="button" onClick={() => changeLanguage('question')}>Reset</button>
        <button className='traductionInput' type="button" onClick={() => changeLanguage('fr')}>Français</button>
        <button className='traductionInput' type="button" onClick={() => changeLanguage('en')}>English</button>
        </div>
          

        <p>{t("Welcome")}</p>
      </div>
  );
}


export default withTranslation()(MyComponent);
