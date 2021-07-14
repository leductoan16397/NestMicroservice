// import VNLang from './entries/vn-VN';
// import EnLang from './entries/en-US';
import EnMessage from './locales/en_US';
import VnMessage from './locales/vi_VN';

interface MessagesInterface {
  [key: string]: any
}

const Messages: MessagesInterface = {
  en: EnMessage,
  vi: VnMessage,
};

export default Messages;
