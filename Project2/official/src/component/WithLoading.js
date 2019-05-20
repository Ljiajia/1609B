import React from 'react'
import Loading from '@/assets/loading.gif'
import styles from './WithLoading.scss';

// export default Component=>{
//     return class extends React.Component{
//         render(){
//             return <div>
//                 <Component {...this.props}></Component>
//                 <div className={styles.loading}>
//                     <img src={Loading} alt=""/>
//                 </div>
//             </div>
//         }
//     }
// }

export default Component=>{
    return class extends Component{
        constructor(props){
            super(props);
        }

        render(){
            // console.log('this.props.state.................', this.props);
            // console.log('this.state', this.state, super., Component.prototype);
            
            return <div>
                {super.render()}
                {this.state.loading?
                <div className={styles.loading}>
                    <img src={Loading} alt=""/>
                </div>: null}
            </div>
        }
    }
}