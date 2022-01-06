import './App.css';
import { useTranslation, withTranslation } from 'react-i18next';

function MyComponent() {

  const {t, i18n} = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
      <div className='traduction'>
      <h1 className='traductionTitle'>{t("fact")}</h1>
        <div className='traductionInputs'>    
          <button className='traductionInput' type="button" onClick={() => changeLanguage('fr')}>
            {t("language1")}
          </button>
          <button className='traductionInput' type="button" onClick={() => changeLanguage('en')}>
            {t("language2")}
          </button>
          <button className='traductionInput' type="button" onClick={() => changeLanguage('pl')}>
            {t("language3")}
          </button>
          <button className='traductionInput' type="button" onClick={() => changeLanguage('es')}>
            {t("language4")}
          </button>
          <button className='traductionInput' type="button" onClick={() => changeLanguage('sw')}>
            {t("language5")}
          </button>
        </div>
          
        <p className='traductionText'>{t("Welcome")}</p>

        <button className='traductionInput' type="button" onClick={() => changeLanguage('question')}>Reset</button>
      </div>
  );
}


export default withTranslation()(MyComponent);
