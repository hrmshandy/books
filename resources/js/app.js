// Import modules...
import { createApp} from 'vue';
import App from './App.vue';
import router from './router'
import store from "./store";
import globalComponents from "./global-components";
import utils from "./utils";
import "./libs";

const el = document.getElementById('app');

const app = createApp(App)
  .use(store)
  .use(router)

globalComponents(app);
utils(app);

app.mount(el);
