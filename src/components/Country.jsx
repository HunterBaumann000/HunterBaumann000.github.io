import React, { Component } from 'react';

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

class Country extends Component {

    state = {
        name: this.props.country.name,
        goldMedalCount: this.props.country.goldMedalCount,
      }

      addToCounter() {
          this.setState({ goldMedalCount: this.state.goldMedalCount + 1 });
      } 

      removeFromCounter(){
        if(this.state.goldMedalCount > 0) {
            this.setState({ goldMedalCount: this.state.goldMedalCount - 1 })
        }
      }
     

    render() { 
        return (
                    
        <div style={{float: 'left'}}>  
            <Card style={{padding:'5em', marginLeft: '1em'}} sx={{ maxWidth: 300 }}> 
            <CardContent>
            
                <div className="titleFont">
                    { this.state.name }
                    <hr/>
                </div>

                <div>

                    <div className="smallTextFont">
                        <EmojiEventsIcon/> &nbsp; Gold Medals: &nbsp; <EmojiEventsIcon/>
                    </div>

                    <div className="numberFont">
                        { this.state.goldMedalCount }
                    </div>
                </div>


                <ButtonGroup style={{marginTop:'.5em'}}>
                <Button
                    color="secondary"
                    aria-label="reduce"
                    onClick={() => {
                        this.removeFromCounter()
                        }
                    }>
                    <RemoveIcon fontSize="small" />
                </Button>

                <Button
                    color="secondary"
                    aria-label="increase"
                    onClick={() => {
                        this.addToCounter()
                        }
                    }>

                    <AddIcon fontSize="small" />
                </Button>
                </ButtonGroup>
            </CardContent>
            
            </Card>   
        </div>           
    );
  }
}

export default Country