import React, {
  Component
} from 'react';
import * as emailjs from 'emailjs-com';
import ReactDOM from 'react-dom';
import countryList from 'react-select-country-list';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import crypt from 'crypto-js';
//import Select from 'react-select';ncncnncncnc
import Layout from '../components/Layout';
import {
  Form,
  Button,
  Input,
  Dropdown,
  Modal,
  Icon,
  Header,
  Menu,
  Radio,
  Message,
  Item,
  Segment,
  Checkbox,
  Confirm
} from 'semantic-ui-react';
import {
  DateInput
} from 'semantic-ui-calendar-react';
import trackpass from '../ethereum/trackpass';
import web3 from '../ethereum/web3';
export default class Verify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      hist:[]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendemail = this.sendemail.bind(this);
  }
  
  sendemail (event)  {
    event.preventDefault();
    const {id} = this.state
    let templateParams = {
      from_name: "Airlines",
      to_name: id,
      subject: "Enquiry regarding Symptoms of COVID-19",
      message_html: "This is just to ask you whether you have any symptoms of COVID-19 like dry cough,sore throat,nausea,fatigue,cold etc.If its there, please don't panic we are there to help you so that we can come to your house and take you for test.If its not there,we strongly suggest you to be home quarantined for atleast 14 days.",
     }
     emailjs.send(
      'gmail',
      'template_MWuommQC',
       templateParams,
      'user_MzfXZ4xwzDu7AxOElDZID'
     )
     this.resetForm()
  }
  resetForm() {
    this.setState({
      id:'',hist:[]
    })
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    let perm;


      try {

          const accounts = await web3.eth.getAccounts();
          perm = await trackpass.methods.gethistory((this.state.id).toString()).call({
            from: accounts[0]
          });
          var res = perm.split(" ");
          this.setState({hist:res});

        } catch (err) {
            console.log(err);
        }



  }




  handleChange = (event, {
    name,
    value
  }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({
        [name]: value
      });
    }
  }



  render() {
    return ( <
      Segment inverted color = 'black'>
      <
      Layout >
      <
      h1 > <font color="white">Airline's Portal</font> < /h1> <
      Segment inverted color = "grey" >
      <
      Message attached header = 'Welcome!'
      content = 'Check the travel history of the passenger here.'
      icon = "searchengin"
      color = 'black' /
      >
      
      <
      Form >
      
      
      <br/>
      <
      Form.Field >
      <
      Input label = "Aadhar Id"
      fluid ref = {
        (input) => {
          this.id = input;
        }
      }
      value = {
        this.state.id
      }
      onChange = {
        event => this.setState({
          id: event.target.value
        })
      }
      /> <
      /Form.Field>
      
      <
        Button
        disabled = {
          this.state.id==''
        }
        primary onClick = {
          this.handleSubmit
        }
         > Check < /Button>
         <br/>
         <h1><font color="black">Passenger's Travel History</font></h1>
         <Item.Group>
    
        
      {this.state.hist.map(item => (<div><Item><Item.Image size='tiny' src='/static/download.jpg' /><Item.Content verticalAlign='middle'>
        <Item.Header as='a'><h3><font color="black">{item}</font></h3></Item.Header>
        </Item.Content></Item><br/><br/></div>
        
        
      ))}
      
      
    </Item.Group>
    <
    Button
    disabled = {
      this.state.id==''
    }
    primary onClick = {
      this.sendemail
    }
     > Send Email to ask for symptoms< /Button>


      <
      /Form> <
      /Segment> <
      /Layout> <
      /Segment>
    );
  }
}
