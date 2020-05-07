import React from 'react';

import './Card.css';
import 'tachyons'

// class Card extends Component{
//     render(){
//         return (
//             <div className=" tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5 ">
//                 <img src={`https://robohash.org/${this.props.id}?size=200x200`} alt="robots" />
//                 <div>
//                     <h2>{this.props.name}</h2>
//                     <p>{this.props.email}</p>
//                 </div>
//             </div>
//         )
//     }
// }

const Card = ({id,name,email})=>{
    return(
        <div className=" tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5 ">
                <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
                <div>
                    <h3>{name}</h3>
                    <p>{email}</p>
                </div>
        </div>
    )
}

export default Card;