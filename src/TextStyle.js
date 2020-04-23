import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
 
const saeInput = (
  <Sae
    label={'Email Address'}
    iconClass={FontAwesomeIcon}
    iconName={'pencil'}
    iconColor={'white'}
    // TextInput props
    autoCapitalize={'none'}
    autoCorrect={false}
  />
);