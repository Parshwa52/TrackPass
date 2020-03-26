import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import countryList from 'react-select-country-list';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import crypt from 'crypto-js';
//import Select from 'react-select';
import Layout from '../components/Layout';
import {
  Form,
  Modal,
  Header,
  Icon,
  Button,
  Input,
  Dropdown,
  Menu,
  Radio,
  Message,
  Segment,
  Checkbox,
  Confirm
} from 'semantic-ui-react';
import {
  DateInput
} from 'semantic-ui-calendar-react';
import trackpass from '../ethereum/trackpass';
import web3 from '../ethereum/web3';
export default class GoldSafe extends Component {
  constructor(props) {
    super(props);
    this.options = countryList().getData();
    this.state = {
      id:'',
      fno:'',
      toc:'',
      fromc:'',
      tno:'',
      date:'',
      emailid:'',
      options:this.options,
      value:null,
      defcheck:false,
      open:false,
      modalOpen:false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //handleClose = () => this.setState({ modalOpen: false })
  handleSubmit = async (event) => {
    event.preventDefault();
    if(this.state.id.length!=12  || isNaN(this.state.id)===true)
    {
      //this.setState({anoerror:true,loading:false});
      alert("Aadhar no. should be of valid length");
      this.id.focus()
    }
    else if(!this.state.emailid.match(/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/))
          {
            //this.setState({mnameerror:true,loading:false});
            alert("Enter proper email id");
            this.emailid.focus()
          }
    else{
    this.setState({open:true,loading:true});}
    console.log(this.state.id + this.state.toc + this.state.fromc + this.state.fno+this.state.tno+this.state.date+this.state.defcheck+this.state.emailid);
  }

  handleCancel = () => this.setState({
    open: false,
    loading: false
  });
  handleconf = async (event) => {
    event.preventDefault();
    this.setState({
      open: false
    });
    //console.log(parseInt(this.state.quant)+10);
    console.log(this.state.id + this.state.toc + this.state.fromc + this.state.fno+this.state.tno+this.state.date+this.state.defcheck+this.state.emailid);
    try {
      //let reacth;
      let travel;
      //test = (this.state.id + this.state.toc + this.state.fromc + this.state.expl+this.state.quant).toString();
      //test = test.toLowerCase();
      //console.log(test);
      //reacth = crypt.SHA256(test).toString();
      //console.log(reacth);
      const accounts = await web3.eth.getAccounts();
      console.log(accounts[0]);
      //await trackpass.methods.storegold(reacth,(this.state.id).toString(),(this.state.quant).toString(),(this.state.toc).toString(),(this.state.fromc).toString(),(this.state.expl).toString(),parseInt(this.state.billamt)).send({
        //from: accounts[0]
      //});
      travel=await trackpass.methods.gethistory((this.state.id).toString()).call({
        from: accounts[0]
      });

      if(travel.toString()=="")
      {
        travel=(this.state.fromc).toString()+"-"+(this.state.toc).toString()+"("+(this.state.date).toString()+")";
      }
      else
      {
        travel=travel+" "+(this.state.fromc).toString()+"-"+(this.state.toc).toString()+"("+(this.state.date).toString()+")";
      }
      console.log(travel);
      await trackpass.methods.departure((this.state.id).toString(),(this.state.fno).toString(),(this.state.toc).toString(),(this.state.fromc).toString(),(this.state.date).toString(),(this.state.tno).toString(),(this.state.emailid).toString(),travel.toString()).send({
        from: accounts[0]
      });
      

      this.setState({
        loading: false,
        id:'',
        fno:'',
        toc:'',
        fromc:'',
        tno:'',
        date:'',
        emailid:'',
        defcheck:false
      });
    } catch (err) {
      console.log(err);
      this.setState({
        loading: false,
        open: false
      });
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
  selectCountry =(val)=> {
    this.setState({ toc: val });
  }
  selectCountry2 =(val)=> {
    this.setState({ fromc: val });
  }
  

  render() {
    return ( <
      Segment inverted color = 'black'>
      <
      Layout >
      <
      h1 > <font color="white">Departure's Portal</font> < /h1> <
      Segment inverted color = "grey" >
      <
      Message attached header = 'Welcome to Departure Side!'
      content = 'Fill out the form below to fill details of passenger departed!'
      icon = "searchengin"
      color = 'black' /
      >
      <
      Form >
      <
      br / >


      <Form.Group widths='equal'>
      <
      Form.Field >
      <
      Input label = "AAdhar No."
      fluid ref = {
        (input) => {
          this.id = input;
        }
      }
      //  labelPosition=""
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
      Form.Field >
      <
      Input label = "Flight No."

      fluid ref = {
        (input) => {
          this.fno = input;
        }
      }
      //labelPosition=""
      value = {
        this.state.fno
      }
      onChange = {
        event => this.setState({
          fno: event.target.value
        })
      }
      /> 
      <
      /Form.Field>

      </Form.Group>
      <h2><font color="black">From:</font></h2>
      <CountryDropdown
          value={this.state.fromc}
          onChange={(val) => this.selectCountry2(val)} />
          <h2><font color="black">To:</font></h2>
      <CountryDropdown

          value={this.state.toc}
          onChange={(val) => this.selectCountry(val)} /><br/>


          <br/>
          <Form.Field>
          <label color="black" style={{fontSize:'20px'}}> Date of Journey </label>
          </Form.Field>

            <Segment inverted>
          <DateInput
            name="date"
            placeholder="Date of Journey"
            value={this.state.date}
            iconPosition="left"
            onChange={this.handleChange}
          />
          </Segment>
          <br/>
          <Form.Group widths='equal'>
      <
      Form.Field >
      <
      Input label = "PNR No."
      fluid ref = {
        (input) => {
          this.tno = input;
        }
      }
      //  labelPosition=""
      value = {
        this.state.tno
      }
      onChange = {
        event => this.setState({
          tno: event.target.value
        })
      }
      /> <
      /Form.Field>
      <
      Form.Field >
      <
      Input label = "E-mail ID"
      fluid ref = {
        (input) => {
          this.emailid = input;
        }
      }
      //  labelPosition=""
      value = {
        this.state.emailid
      }
      onChange = {
        event => this.setState({
          emailid: event.target.value
        })
      }
      /> <
      /Form.Field>
      </Form.Group>

      <
      br / >
      <Form.Field>
      <
      Checkbox label = 'I agree that all the information is correct and properly verified.'
      onChange = {
        event => this.setState({
          defcheck: true
        })
      }
      /> <
      /Form.Field> <
      br / >
      <
      Button loading = {
        this.state.loading
      }
      disabled = {
        this.state.id=='' || this.state.fno=='' || this.state.toc=='' || this.state.fromc=='' || this.state.tno==''||this.state.date=='' || this.state.emailid=='' ||this.state.defcheck==false
      }
      primary onClick = {
        this.handleSubmit
      }
       > Submit < /Button>
       <
      Confirm open = {
        this.state.open
      }
      cancelButton = 'Go Back'
      confirmButton = "Confirm"
      onCancel = {
        this.handleCancel
      }
      onConfirm = {
        this.handleconf
      }
      />
      
      <
      /Form> <
      /Segment> <
      /Layout> <
      /Segment>
    );
  }
}
