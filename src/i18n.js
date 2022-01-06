import i18n from 'i18next';
import { initReactI18next} from 'react-i18next';


const resources = {
    question:{
        translation: {
            "Welcome": "Is dev a good situation?"
        }
    },
    en: {
      translation: {
        "Welcome": "You know, I don't believe that there is a good or bad situation. If I had to sum up my life with you today, I would say that it's abose all meetings. People who reached out to me, perhaps at a time when I couldn't, when I was alone at home. And it's quite curious to think that chance meetings forge a destiny... Because when you have a taste for things, when you have a taste for well done things, for beautiful gestures, sometimes you don't find the person opposite, I would say, the mirror that helps you to move forward. This is not my case, as I was saying, because I, on the contrary, have been able to; and I say thank you to life, I say thank you to it, I sing life, I dance life... I am only love! And finally, when people say to me « But how do you manage to have this humanity? », I answer them very simply that it is this taste for love, this taste which pushed me today to engaged a mechanical construction... but tomorrow who knows? Maybe simply to put myself at the service of the community, to make the gift, the gift of myself."
      }
    },
    fr:{
      translation: {
        "Welcome": "Vous savez, moi je ne crois pas qu'il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd'hui avec vous, je dirais que c'est d'abord des rencontres. Des gens qui m'ont tendu la main, peut-être à un moment où je ne pouvais pas, où j'étais seul chez moi. Et c'est assez curieux de se dire que les hasards, les rencontres forgent une destinée... Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois on ne trouve pas l'interlocuteur en face je dirais, le miroir qui vous aide à avancer. Alors ça n'est pas mon cas, comme je disais là, puisque moi au contraire, j'ai pu ; et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie... je ne suis qu'amour ! Et finalement, quand des gens me disent « Mais comment fais-tu pour avoir cette humanité ? », je leur réponds très simplement que c'est ce goût de l'amour, ce goût donc qui m'a poussé aujourd'hui à entreprendre une construction mécanique... mais demain qui sait ? Peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi."
      }
    }
  }
  
  i18n
    .use(initReactI18next)
    .init({
      resources, 
      lng: "question",
      interpolation: { escapeValue: false },
    });

    export default i18n;