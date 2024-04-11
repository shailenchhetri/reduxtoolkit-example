// ReactotronConfig.js
import { reactotronRedux } from 'reactotron-redux'
import Reactotron from "reactotron-react-native";

const reactotron = Reactotron
    .configure({ name: 'React Native Redux Demo' })
    .use(reactotronRedux()) //  
    .connect()

export default reactotron 