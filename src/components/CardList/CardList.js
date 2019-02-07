import React, { Component } from "react";
import { Image, Button, Popup, Icon, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import red from '../../img/redmana.svg'
import blue from '../../img/bluemana.svg'


const colorFilter = {
     'Red': <img src={red} alt='Red' style={{width: 20, marginRight: 20}}/>,
     'Blue': <img src={blue} alt='Blue' style={{width: 20, marginRight: 20}}/>
    
}

class CardList extends Component{
    render() {
        return (
            this.props.results.map(result => (
           
                <div>
                        
           
            <ul style={{listStyleType: 'none'}}>            
              <li key={result.id} style={{marginTop: 20}}>
              <Segment inverted>
                {" "}
                
                {result.colors.map(color => (
                    colorFilter[color] 
                ))}
                     
                <Link to={`/card/${result.id}`}>
                  <Popup
                    trigger={<Button>{result.name}</Button>}
                    content={<Image src={result.img} alt='no image' />}
                    horizontalOffset={500}
                    position='bottom right'
                    basic
                    
                  />
                </Link>{" "}
                {result.set}
                

                
                <Button style={{marginLeft: 20}} basic color='red' animated onClick={() => this.addToCollection(result)}>
                <Button.Content visible>Add to collection</Button.Content>
                <Button.Content hidden><Icon name='arrow right' /></Button.Content>
                 
                </Button>
                </Segment>
              </li>
              </ul>
              
              </div>
              
            ))
        )
    }
}

export default CardList;