const BROWSER_DEFAULT = 'BROWSER_DEFAULT';

const languages = {
  BROWSER_DEFAULT: {
    name: 'Browser default',
    nativeName: 'Browser default',
  },
  ab: {
    name: 'Abkhaz',
    nativeName: 'аҧсуа',
  },
  aa: {
    name: 'Afar',
    nativeName: 'Afaraf',
  },
  af: {
    name: 'Afrikaans',
    nativeName: 'Afrikaans',
  },
  ak: {
    name: 'Akan',
    nativeName: 'Akan',
  },
  sq: {
    name: 'Albanian',
    nativeName: 'Shqip',
  },
  am: {
    name: 'Amharic',
    nativeName: 'አማርኛ',
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية',
  },
  an: {
    name: 'Aragonese',
    nativeName: 'Aragonés',
  },
  hy: {
    name: 'Armenian',
    nativeName: 'Հայերեն',
  },
  as: {
    name: 'Assamese',
    nativeName: 'অসমীয়া',
  },
  av: {
    name: 'Avaric',
    nativeName: 'авар мацӀ, магӀарул мацӀ',
  },
  ae: {
    name: 'Avestan',
    nativeName: 'avesta',
  },
  ay: {
    name: 'Aymara',
    nativeName: 'aymar aru',
  },
  az: {
    name: 'Azerbaijani',
    nativeName: 'azərbaycan dili',
  },
  bm: {
    name: 'Bambara',
    nativeName: 'bamanankan',
  },
  ba: {
    name: 'Bashkir',
    nativeName: 'башҡорт теле',
  },
  eu: {
    name: 'Basque',
    nativeName: 'euskara, euskera',
  },
  be: {
    name: 'Belarusian',
    nativeName: 'Беларуская',
  },
  bn: {
    name: 'Bengali',
    nativeName: 'বাংলা',
  },
  bh: {
    name: 'Bihari',
    nativeName: 'भोजपुरी',
  },
  bi: {
    name: 'Bislama',
    nativeName: 'Bislama',
  },
  bs: {
    name: 'Bosnian',
    nativeName: 'bosanski jezik',
  },
  br: {
    name: 'Breton',
    nativeName: 'brezhoneg',
  },
  bg: {
    name: 'Bulgarian',
    nativeName: 'български език',
  },
  my: {
    name: 'Burmese',
    nativeName: 'ဗမာစာ',
  },
  ca: {
    name: 'Catalan; Valencian',
    nativeName: 'Català',
  },
  ch: {
    name: 'Chamorro',
    nativeName: 'Chamoru',
  },
  ce: {
    name: 'Chechen',
    nativeName: 'нохчийн мотт',
  },
  ny: {
    name: 'Chichewa; Chewa; Nyanja',
    nativeName: 'chiCheŵa, chinyanja',
  },
  zh: {
    name: 'Chinese',
    nativeName: '中文 (Zhōngwén), 汉语, 漢語',
  },
  cv: {
    name: 'Chuvash',
    nativeName: 'чӑваш чӗлхи',
  },
  kw: {
    name: 'Cornish',
    nativeName: 'Kernewek',
  },
  co: {
    name: 'Corsican',
    nativeName: 'corsu, lingua corsa',
  },
  cr: {
    name: 'Cree',
    nativeName: 'ᓀᐦᐃᔭᐍᐏᐣ',
  },
  hr: {
    name: 'Croatian',
    nativeName: 'hrvatski',
  },
  cs: {
    name: 'Czech',
    nativeName: 'česky, čeština',
  },
  da: {
    name: 'Danish',
    nativeName: 'dansk',
  },
  dv: {
    name: 'Divehi; Dhivehi; Maldivian;',
    nativeName: 'ދިވެހި',
  },
  nl: {
    name: 'Dutch',
    nativeName: 'Nederlands, Vlaams',
  },
  en: {
    name: 'English',
    nativeName: 'English',
  },
  eo: {
    name: 'Esperanto',
    nativeName: 'Esperanto',
  },
  et: {
    name: 'Estonian',
    nativeName: 'eesti, eesti keel',
  },
  ee: {
    name: 'Ewe',
    nativeName: 'Eʋegbe',
  },
  fo: {
    name: 'Faroese',
    nativeName: 'føroyskt',
  },
  fj: {
    name: 'Fijian',
    nativeName: 'vosa Vakaviti',
  },
  fi: {
    name: 'Finnish',
    nativeName: 'suomi, suomen kieli',
  },
  fr: {
    name: 'French',
    nativeName: 'français, langue française',
  },
  ff: {
    name: 'Fula; Fulah; Pulaar; Pular',
    nativeName: 'Fulfulde, Pulaar, Pular',
  },
  gl: {
    name: 'Galician',
    nativeName: 'Galego',
  },
  ka: {
    name: 'Georgian',
    nativeName: 'ქართული',
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch',
  },
  el: {
    name: 'Greek, Modern',
    nativeName: 'Ελληνικά',
  },
  gn: {
    name: 'Guaraní',
    nativeName: 'Avañeẽ',
  },
  gu: {
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
  },
  ht: {
    name: 'Haitian; Haitian Creole',
    nativeName: 'Kreyòl ayisyen',
  },
  ha: {
    name: 'Hausa',
    nativeName: 'Hausa, هَوُسَ',
  },
  he: {
    name: 'Hebrew (modern)',
    nativeName: 'עברית',
  },
  hz: {
    name: 'Herero',
    nativeName: 'Otjiherero',
  },
  hi: {
    name: 'Hindi',
    nativeName: 'हिन्दी, हिंदी',
  },
  ho: {
    name: 'Hiri Motu',
    nativeName: 'Hiri Motu',
  },
  hu: {
    name: 'Hungarian',
    nativeName: 'Magyar',
  },
  ia: {
    name: 'Interlingua',
    nativeName: 'Interlingua',
  },
  id: {
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
  },
  ie: {
    name: 'Interlingue',
    nativeName: 'Originally called Occidental; then Interlingue after WWII',
  },
  ga: {
    name: 'Irish',
    nativeName: 'Gaeilge',
  },
  ig: {
    name: 'Igbo',
    nativeName: 'Asụsụ Igbo',
  },
  ik: {
    name: 'Inupiaq',
    nativeName: 'Iñupiaq, Iñupiatun',
  },
  io: {
    name: 'Ido',
    nativeName: 'Ido',
  },
  is: {
    name: 'Icelandic',
    nativeName: 'Íslenska',
  },
  it: {
    name: 'Italian',
    nativeName: 'Italiano',
  },
  iu: {
    name: 'Inuktitut',
    nativeName: 'ᐃᓄᒃᑎᑐᑦ',
  },
  ja: {
    name: 'Japanese',
    nativeName: '日本語 (にほんご／にっぽんご)',
  },
  jv: {
    name: 'Javanese',
    nativeName: 'basa Jawa',
  },
  kl: {
    name: 'Kalaallisut, Greenlandic',
    nativeName: 'kalaallisut, kalaallit oqaasii',
  },
  kn: {
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
  },
  kr: {
    name: 'Kanuri',
    nativeName: 'Kanuri',
  },
  ks: {
    name: 'Kashmiri',
    nativeName: 'कश्मीरी, كشميري‎',
  },
  kk: {
    name: 'Kazakh',
    nativeName: 'Қазақ тілі',
  },
  km: {
    name: 'Khmer',
    nativeName: 'ភាសាខ្មែរ',
  },
  ki: {
    name: 'Kikuyu, Gikuyu',
    nativeName: 'Gĩkũyũ',
  },
  rw: {
    name: 'Kinyarwanda',
    nativeName: 'Ikinyarwanda',
  },
  ky: {
    name: 'Kirghiz, Kyrgyz',
    nativeName: 'кыргыз тили',
  },
  kv: {
    name: 'Komi',
    nativeName: 'коми кыв',
  },
  kg: {
    name: 'Kongo',
    nativeName: 'KiKongo',
  },
  ko: {
    name: 'Korean',
    nativeName: '한국어 (韓國語), 조선말 (朝鮮語)',
  },
  ku: {
    name: 'Kurdish',
    nativeName: 'Kurdî, كوردی‎',
  },
  kj: {
    name: 'Kwanyama, Kuanyama',
    nativeName: 'Kuanyama',
  },
  la: {
    name: 'Latin',
    nativeName: 'latine, lingua latina',
  },
  lb: {
    name: 'Luxembourgish, Letzeburgesch',
    nativeName: 'Lëtzebuergesch',
  },
  lg: {
    name: 'Luganda',
    nativeName: 'Luganda',
  },
  li: {
    name: 'Limburgish, Limburgan, Limburger',
    nativeName: 'Limburgs',
  },
  ln: {
    name: 'Lingala',
    nativeName: 'Lingála',
  },
  lo: {
    name: 'Lao',
    nativeName: 'ພາສາລາວ',
  },
  lt: {
    name: 'Lithuanian',
    nativeName: 'lietuvių kalba',
  },
  lu: {
    name: 'Luba-Katanga',
    nativeName: 'Luba-Katanga',
  },
  lv: {
    name: 'Latvian',
    nativeName: 'latviešu valoda',
  },
  gv: {
    name: 'Manx',
    nativeName: 'Gaelg, Gailck',
  },
  mk: {
    name: 'Macedonian',
    nativeName: 'македонски јазик',
  },
  mg: {
    name: 'Malagasy',
    nativeName: 'Malagasy fiteny',
  },
  ms: {
    name: 'Malay',
    nativeName: 'bahasa Melayu, بهاس ملايو‎',
  },
  ml: {
    name: 'Malayalam',
    nativeName: 'മലയാളം',
  },
  mt: {
    name: 'Maltese',
    nativeName: 'Malti',
  },
  mi: {
    name: 'Māori',
    nativeName: 'te reo Māori',
  },
  mr: {
    name: 'Marathi (Marāṭhī)',
    nativeName: 'मराठी',
  },
  mh: {
    name: 'Marshallese',
    nativeName: 'Kajin M̧ajeļ',
  },
  mn: {
    name: 'Mongolian',
    nativeName: 'монгол',
  },
  na: {
    name: 'Nauru',
    nativeName: 'Ekakairũ Naoero',
  },
  nv: {
    name: 'Navajo, Navaho',
    nativeName: 'Diné bizaad, Dinékʼehǰí',
  },
  nb: {
    name: 'Norwegian Bokmål',
    nativeName: 'Norsk bokmål',
  },
  nd: {
    name: 'North Ndebele',
    nativeName: 'isiNdebele',
  },
  ne: {
    name: 'Nepali',
    nativeName: 'नेपाली',
  },
  ng: {
    name: 'Ndonga',
    nativeName: 'Owambo',
  },
  nn: {
    name: 'Norwegian Nynorsk',
    nativeName: 'Norsk nynorsk',
  },
  no: {
    name: 'Norwegian',
    nativeName: 'Norsk',
  },
  ii: {
    name: 'Nuosu',
    nativeName: 'ꆈꌠ꒿ Nuosuhxop',
  },
  nr: {
    name: 'South Ndebele',
    nativeName: 'isiNdebele',
  },
  oc: {
    name: 'Occitan',
    nativeName: 'Occitan',
  },
  oj: {
    name: 'Ojibwe, Ojibwa',
    nativeName: 'ᐊᓂᔑᓈᐯᒧᐎᓐ',
  },
  cu: {
    name: 'Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic',
    nativeName: 'ѩзыкъ словѣньскъ',
  },
  om: {
    name: 'Oromo',
    nativeName: 'Afaan Oromoo',
  },
  or: {
    name: 'Oriya',
    nativeName: 'ଓଡ଼ିଆ',
  },
  os: {
    name: 'Ossetian, Ossetic',
    nativeName: 'ирон æвзаг',
  },
  pa: {
    name: 'Panjabi, Punjabi',
    nativeName: 'ਪੰਜਾਬੀ, پنجابی‎',
  },
  pi: {
    name: 'Pāli',
    nativeName: 'पाऴि',
  },
  fa: {
    name: 'Persian',
    nativeName: 'فارسی',
  },
  pl: {
    name: 'Polish',
    nativeName: 'polski',
  },
  ps: {
    name: 'Pashto, Pushto',
    nativeName: 'پښتو',
  },
  pt: {
    name: 'Portuguese',
    nativeName: 'Português',
  },
  qu: {
    name: 'Quechua',
    nativeName: 'Runa Simi, Kichwa',
  },
  rm: {
    name: 'Romansh',
    nativeName: 'rumantsch grischun',
  },
  rn: {
    name: 'Kirundi',
    nativeName: 'kiRundi',
  },
  ro: {
    name: 'Romanian, Moldavian, Moldovan',
    nativeName: 'română',
  },
  ru: {
    name: 'Russian',
    nativeName: 'русский язык',
  },
  sa: {
    name: 'Sanskrit (Saṁskṛta)',
    nativeName: 'संस्कृतम्',
  },
  sc: {
    name: 'Sardinian',
    nativeName: 'sardu',
  },
  sd: {
    name: 'Sindhi',
    nativeName: 'सिन्धी, سنڌي، سندھی‎',
  },
  se: {
    name: 'Northern Sami',
    nativeName: 'Davvisámegiella',
  },
  sm: {
    name: 'Samoan',
    nativeName: 'gagana faa Samoa',
  },
  sg: {
    name: 'Sango',
    nativeName: 'yângâ tî sängö',
  },
  sr: {
    name: 'Serbian',
    nativeName: 'српски језик',
  },
  gd: {
    name: 'Scottish Gaelic; Gaelic',
    nativeName: 'Gàidhlig',
  },
  sn: {
    name: 'Shona',
    nativeName: 'chiShona',
  },
  si: {
    name: 'Sinhala, Sinhalese',
    nativeName: 'සිංහල',
  },
  sk: {
    name: 'Slovak',
    nativeName: 'slovenčina',
  },
  sl: {
    name: 'Slovene',
    nativeName: 'slovenščina',
  },
  so: {
    name: 'Somali',
    nativeName: 'Soomaaliga, af Soomaali',
  },
  st: {
    name: 'Southern Sotho',
    nativeName: 'Sesotho',
  },
  es: {
    name: 'Spanish; Castilian',
    nativeName: 'español, castellano',
  },
  su: {
    name: 'Sundanese',
    nativeName: 'Basa Sunda',
  },
  sw: {
    name: 'Swahili',
    nativeName: 'Kiswahili',
  },
  ss: {
    name: 'Swati',
    nativeName: 'SiSwati',
  },
  sv: {
    name: 'Swedish',
    nativeName: 'svenska',
  },
  ta: {
    name: 'Tamil',
    nativeName: 'தமிழ்',
  },
  te: {
    name: 'Telugu',
    nativeName: 'తెలుగు',
  },
  tg: {
    name: 'Tajik',
    nativeName: 'тоҷикӣ, toğikī, تاجیکی‎',
  },
  th: {
    name: 'Thai',
    nativeName: 'ไทย',
  },
  ti: {
    name: 'Tigrinya',
    nativeName: 'ትግርኛ',
  },
  bo: {
    name: 'Tibetan Standard, Tibetan, Central',
    nativeName: 'བོད་ཡིག',
  },
  tk: {
    name: 'Turkmen',
    nativeName: 'Türkmen, Түркмен',
  },
  tl: {
    name: 'Tagalog',
    nativeName: 'Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔',
  },
  tn: {
    name: 'Tswana',
    nativeName: 'Setswana',
  },
  to: {
    name: 'Tonga (Tonga Islands)',
    nativeName: 'faka Tonga',
  },
  tr: {
    name: 'Turkish',
    nativeName: 'Türkçe',
  },
  ts: {
    name: 'Tsonga',
    nativeName: 'Xitsonga',
  },
  tt: {
    name: 'Tatar',
    nativeName: 'татарча, tatarça, تاتارچا‎',
  },
  tw: {
    name: 'Twi',
    nativeName: 'Twi',
  },
  ty: {
    name: 'Tahitian',
    nativeName: 'Reo Tahiti',
  },
  ug: {
    name: 'Uighur, Uyghur',
    nativeName: 'Uyƣurqə, ئۇيغۇرچە‎',
  },
  uk: {
    name: 'Ukrainian',
    nativeName: 'українська',
  },
  ur: {
    name: 'Urdu',
    nativeName: 'اردو',
  },
  uz: {
    name: 'Uzbek',
    nativeName: 'zbek, Ўзбек, أۇزبېك‎',
  },
  ve: {
    name: 'Venda',
    nativeName: 'Tshivenḓa',
  },
  vi: {
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt',
  },
  vo: {
    name: 'Volapük',
    nativeName: 'Volapük',
  },
  wa: {
    name: 'Walloon',
    nativeName: 'Walon',
  },
  cy: {
    name: 'Welsh',
    nativeName: 'Cymraeg',
  },
  wo: {
    name: 'Wolof',
    nativeName: 'Wollof',
  },
  fy: {
    name: 'Western Frisian',
    nativeName: 'Frysk',
  },
  xh: {
    name: 'Xhosa',
    nativeName: 'isiXhosa',
  },
  yi: {
    name: 'Yiddish',
    nativeName: 'ייִדיש',
  },
  yo: {
    name: 'Yoruba',
    nativeName: 'Yorùbá',
  },
  za: {
    name: 'Zhuang, Chuang',
    nativeName: 'Saɯ cueŋƅ, Saw cuengh',
  },
};

(function() {
  tinymce.PluginManager.add('language', function(editor) {
    // Depending on the current location of the cursor, replace the current node with
    // the HTML in `lang`
    const replaceText = function(lang) {
      const selectedNode = editor.selection.getNode();
      const newText = editor.selection.getContent({ format: 'text' });
      const contents = newText || '&#65279';
      const newSpanText = lang === BROWSER_DEFAULT ? `<span id="new_span">${contents}</span>` : `<span lang="${lang}" id="new_span">${contents}</span>`;
      if (selectedNode.nodeName === 'SPAN') {
        if (selectedNode.lang) { // may be in the middle of the span, so split it into two
          editor.execCommand('mceReplaceContent', false, `</span>${newSpanText}<span lang="${selectedNode.lang}">`);
        } else {
          editor.execCommand('mceReplaceContent', false, `</span>${newSpanText}<span>`);
        }
      } else { // conservatively insert HTML
        editor.execCommand('mceReplaceContent', false, newSpanText);
      }
      const newSpan = editor.dom.get('new_span');
      editor.selection.select(newSpan);
      editor.selection.collapse(false); // moves cursor to end of selection
      newSpan.removeAttribute('id');
    };

    const updateButtonText = function(lang) {
      const button = editor.dom.select(`button#lang-button-${editor.id}`, editor.targetElm.nextElementSibling)[0];
      if (!lang || lang === BROWSER_DEFAULT) {
        button.innerText = 'Browser default language';
      } else {
        button.innerText = languages[lang].nativeName;
      }
    };

    const openDialog = function(buttonApi) {
      const selectedNode = editor.selection.getNode();
      const currentLang = selectedNode.lang ? selectedNode.lang : BROWSER_DEFAULT;
      editor.windowManager.open({
        title: 'Language plugin',
        body: {
          type: 'panel',
          items: [
            {
              type: 'htmlpanel',
              html: `<div>Current language: ${languages[currentLang].nativeName}</div>`,
            },
            {
              type: 'selectbox',
              name: 'language',
              label: 'Language',
              items: Object.keys(languages).map(lang => ({
                value: lang,
                text: languages[lang].nativeName,
              })),
            },
          ],
        },
        buttons: [
          {
            type: 'cancel',
            text: 'Close',
          },
          {
            type: 'submit',
            text: 'Save',
            primary: true,
          },
        ],
        onSubmit: function(api) {
          const data = api.getData();
          editor.focus();
          editor.undoManager.transact(() => {
            replaceText(data.language);
            buttonApi.setActive(data.language !== BROWSER_DEFAULT);
            updateButtonText(data.language);
          });
          api.close();
        },
      });
    };

    editor.ui.registry.addToggleButton('language', {
      text: 'Browser default language',
      onAction: function(buttonApi) {
        openDialog(buttonApi);
      },
      onSetup: function(buttonApi) {
        // add an id attribute to the button so its text can be modified later
        // might be able to improve if https://github.com/tinymce/tinymce/issues/5040 gets resolved
        editor.dom.select('button', editor.targetElm.nextElementSibling).filter(b => b.innerText === 'Browser' +
            ' default language')[0].setAttribute('id', `lang-button-${editor.id}`);
        editor.addShortcut('Meta+L', 'Switch to default language', () => {
          const selectedNode = editor.selection.getNode();
          const currentLang = selectedNode.lang ? selectedNode.lang : BROWSER_DEFAULT;
          if (currentLang !== BROWSER_DEFAULT) {
            editor.undoManager.transact(() => {
              replaceText(BROWSER_DEFAULT);
              buttonApi.setActive(false);
            });
          }
        });
        const updateCurrentLanguage = function() {
          // update button state (disabled: default, enabled: other) and button text
          const selectedNode = editor.selection.getNode();
          let selectedLang;
          if (selectedNode.nodeName === 'SPAN' && !selectedNode.dataset.mceBogus) {
            // TinyMCE inserts bogus span that have no meaning for language
            if (selectedNode.lang) {
              buttonApi.setActive(true);
            } else {
              buttonApi.setActive(false);
            }
            selectedLang = selectedNode.lang;
          } else if (selectedNode.nodeName === 'P') {
            // we never add a lang attribute to a p tag
            buttonApi.setActive(false);
            selectedLang = null;
          } else {
            // might be inside another tag such as <b> or <a>
            const parentSpan = tinymce.DOM.getParent(selectedNode, n => n.nodeName === 'SPAN' && !n.dataset.mceBogus);
            if (parentSpan) {
              if (parentSpan.lang) {
                buttonApi.setActive(true);
              } else {
                buttonApi.setActive(false);
              }
              selectedLang = parentSpan.lang;
            } else {
              buttonApi.setActive(false);
              selectedLang = null;
            }
          }
          updateButtonText(selectedLang);
        };
        editor.on('keyup', updateCurrentLanguage);
        editor.on('click', updateCurrentLanguage);
        return () => {
          // remove event listeners on teardown
          editor.off('keyup', updateCurrentLanguage);
          editor.off('click', updateCurrentLanguage);
        };
      },
    });

    return {
      getMetadata: function() {
        return {
          name: 'Language plugin',
        };
      },
    };
  });
})();
