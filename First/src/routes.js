import {createStackNavigator} from 'react-navigation';
import Main from './pages/main';
import Product from './pages/product';

export default createStackNavigator({
    Main,
    Product
}, {
    navigationOptions: {
        headerStyle:{
            backgroundColor: "#da552f",
            
        },
        headerTintColor: "#FFF",
        headerTitleStyle: {
            // fontWeight: 'bold',
            fontFamily: 'American Typewriter',
            textAlign: 'center',
            flexGrow:1,
            alignSelf:'center',
        },
        
    },
});