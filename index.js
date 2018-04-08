import Button from './src/Button'; 
import Loading from './src/Loading';
import OffsetPaginator from './src/OffsetPaginator';
import ProcessClickButton from './src/ProcessClickButton';

export default {install (Vue) {
  Vue.component('b-'+Button.name, Button);
  Vue.component('b-'+Loading.name, Loading);
  Vue.component('b-'+OffsetPaginator.name, OffsetPaginator);
  Vue.component('b-'+ProcessClickButton.name, ProcessClickButton);
}};
