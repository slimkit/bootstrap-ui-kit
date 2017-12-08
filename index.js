import Button from './src/Button'; 
import Loading from './src/Loading';
import OffsetPaginator from './src/OffsetPaginator';
import ProcessClickButton from './src/ProcessClickButton';

export default {
  ['bootstrap-ui-kit:'+Button.name]: Button,
  ['bootstrap-ui-kit:'+Loading.name]: Loading,
  ['bootstrap-ui-kit:'+OffsetPaginator.name]: OffsetPaginator,
  ['bootstrap-ui-kit:'+ProcessClickButton.name]: ProcessClickButton,
};
