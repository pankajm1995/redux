import Home from '../Component/Home';
import {connect} from 'react-redux'
import {ADD_TO_CART} from '../Services/Constains'

const mapstateToProps= state=>({

})
const mapDispatchToProps=dispatch=>({
    addTocardHandler:data=>dispatch(ADD_TO_CART(data))
})
export default connect(mapstateToProps,mapDispatchToProps)(Home)