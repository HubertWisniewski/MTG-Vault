import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image, Button, Popup, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import red from '../../img/redmana.svg'
import blue from '../../img/bluemana.svg'
import black from '../../img/blackmana.svg'
import white from '../../img/whitemana.svg'
import green from '../../img/greenmana.svg'
import one from '../../img/numbers/1.svg'
import two from '../../img/numbers/2.svg'
import three from '../../img/numbers/3.svg'
import four from '../../img/numbers/4.svg'
import five from '../../img/numbers/5.svg'
import six from '../../img/numbers/6.svg'
import seven from '../../img/numbers/7.svg'
import eight from '../../img/numbers/8.svg'
import nine from '../../img/numbers/9.svg'
import ten from '../../img/numbers/10.svg'
import eleven from '../../img/numbers/11.svg'
import twelve from '../../img/numbers/12.svg'
import thirteen from '../../img/numbers/13.svg'
import fourteen from '../../img/numbers/14.svg'
import fifteen from '../../img/numbers/15.svg'
import sixteen from '../../img/numbers/16.svg'
import seventeen from '../../img/numbers/17.svg'
import eighteen from '../../img/numbers/18.svg'
import nineteen from '../../img/numbers/19.svg'
import twenty from '../../img/numbers/20.svg'


const symbolFilter = (symbol) => {
    switch (symbol) {
        case 'R':
        return <img src={red} alt='Red' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case 'U': 
        return <img src={blue} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case 'W': 
        return <img src={white} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case 'B': 
        return <img src={black} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case 'G': 
        return <img src={green} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case '1':
        return <img src={one} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case '2':
        return <img src={two} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case '3':
        return <img src={three} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case '4':
        return <img src={four} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case '5':
        return <img src={five} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case '6':
        return <img src={six} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case '7':
        return <img src={seven} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case '8':
        return <img src={eight} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case '9':
        return <img src={nine} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case '10':
        return <img src={ten} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case '11':
        return <img src={eleven} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case '12':
        return <img src={twelve} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case '13':
        return <img src={thirteen} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case '14':
        return <img src={fourteen} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case '15':
        return <img src={fifteen} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case '16':
        return <img src={sixteen} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case '17':
        return <img src={seventeen} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case '18':
        return <img src={eighteen} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case '19':
        return <img src={nineteen} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case '20':
        return <img src={twenty} alt='Blue' style={{width: 20, marginRight: 10, marginTop: 10, marginLeft: 10}}/>
        case '{':
        return ' '
        case '}':
        return ' '
        default:
            return symbol    }
    }
     

class CollectionItem extends Component {
  render() {
    return (
    
          this.props.collection.map(card => (
            <div className='collection'>
              <ul style={{ listStyleType: "none" }}>
                <li key={card.id}>
                <Segment inverted style={{fontSize: 15}}>
                {card.cost.map(symbol => (
                    symbolFilter(symbol)
                    
                ))}
                
                  <Link to={`/card/${card.id}`}>
                    <Popup
                      trigger={<Button>{card.name}</Button>}
                      content={<Image src={card.img} />}
                      
                      horizontalOffset={400}
                      position='center right'
                      basic
                    />
                  </Link>
                  {card.set}
                  </Segment>
                </li>
              </ul>
            </div>
          ))
       
    );
  }
}

export default CollectionItem;
