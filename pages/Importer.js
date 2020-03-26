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
  Button,
  Input,
  Dropdown,
  Modal,
  Icon,
  Header,
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
import safegold from '../ethereum/safegold1';
import web3 from '../ethereum/web3';
export default class Importing extends Component {
  constructor(props) {
    super(props);
    this.options = countryList().getData();
    this.state = {
      id:'',
      quant:'',
      toc:'',
      fromc:'',
      expl:'',
      impl:'',
      text1:'',
      text2:'',
      options:this.options,
      value:null,
      modalOpen:false,
      defcheck:false,
      open:false,
      give:false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClose = () => {
    this.setState({ modalOpen: false });
    if(this.state.give==true)
    {
      this.setState({ open: true });
    }
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    if (!this.state.quant.match(/^(0|[1-9][0-9]*)$/)) {
      //alert("Quantity should be numeric");
      this.setState({
        loading: false,
        modalOpen:true,
        text2:"Error in Details",
        text1:"Quantity should be numeric",
        give:false
      });
      this.quant.focus()
    }
    else{
      //alert("else me gaya");
      let reacth;
      let quantity;
      let reacth1;
      let test;
      try {
        //alert("in else");
          test=(this.state.id + this.state.toc + this.state.fromc + this.state.expl+this.state.quant).toString();
          test = test.toLowerCase();
          console.log(test);
          reacth1 = crypt.SHA256(test).toString();
          console.log(reacth1);
          const accounts = await web3.eth.getAccounts();
          reacth = await safegold.methods.getgolddet((this.state.id).toString()).call({
            from: accounts[0]
          });
          quantity=await safegold.methods.getgoldquant((this.state.id).toString()).call({
            from: accounts[0]
          });
          this.setState({
            loading: false
          });
          if((this.state.quant).toString()!=quantity)
          {
            this.setState({
              modalOpen:true,
              text2:"Mismatch in Quantity",
              text1:"Alert!Some Gold may have been smuggled",
              give:false
            });
          }
          else if(reacth!=reacth1)
          {
            this.setState({
              modalOpen:true,
              text2:"Error in Details",
              text1:"Your details do not match with that of Exporter.Alert!Check for smuggling",
              give:false
            });
          }
          else {
            this.setState({
              modalOpen:true,
              text2:"Successfull Validation",
              text1:"The details are successfully verified.Give permit for trade",
              give:true
            });
          }
        } catch (err) {
          this.setState({
            loading: false,
            open: false
          });
        }



  }
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
    //console.log(this.state.id + this.state.toc + this.state.fromc + this.state.expl+this.state.quant+this.state.billamt+this.state.defcheck);
    try {
      const accounts = await web3.eth.getAccounts();
      await safegold.methods.givepermit((this.state.id).toString(),(this.state.toc).toString(),(this.state.fromc).toString(),(this.state.impl).toString()).send({
        from: accounts[0]
      });
      this.setState({
        loading: false,
        id:'',
        quant:'',
        toc:'',
        fromc:'',
        expl:'',
        impl:'',
        defcheck:false
      });
    } catch (err) {
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
      Segment inverted color = 'blue'>
      <
      Layout >
      <
      h1 > <font color="white">Importer's Portal</font> < /h1> <
      Segment inverted color = "orange" >
      <
      Message attached header = 'Welcome to Importing Form!'
      content = 'Fill out the form below to verify details and import the gold.'
      icon = "searchengin"
      color = 'black' /
      >
      <
      Form >
      <
      br / >
      <
      Form.Field >
      <
      Input label = "Importer License"
      fluid ref = {
        (input) => {
          this.impl= input;
        }
      }
      //  labelPosition=""
      value = {
        this.state.impl
      }
      onChange = {
        event => this.setState({
          impl: event.target.value
        })
      }
      /> <
      /Form.Field><br/>

      <Form.Group widths='equal'>
      <
      Form.Field >
      <
      Input label = "Manufacture ID"
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
      Input label = "Quantity(in kg)"

      fluid ref = {
        (input) => {
          this.quant = input;
        }
      }
      //labelPosition=""
      value = {
        this.state.quant
      }
      onChange = {
        event => this.setState({
          quant: event.target.value
        })
      }
      /> <
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
          <Form.Group widths='equal'>
      <
      Form.Field >
      <
      Input label = "Exporting License of Exporter"
      fluid ref = {
        (input) => {
          this.expl = input;
        }
      }
      value = {
        this.state.expl
      }
      onChange = {
        event => this.setState({
          expl: event.target.value
        })
      }
      /> <
      /Form.Field>

      </Form.Group>

      <
      br / >
      <Form.Field>
      <
      Checkbox label = 'I agree that all the information input is correct.'
      onChange = {
        event => this.setState({
          defcheck: true
        })
      }
      /> <
      /Form.Field> <
      br / >

       <
      Confirm open = {
        this.state.open
      }
      cancelButton = 'Go Back'
      confirmButton = "Give Permit to trade in the country"
      onCancel = {
        this.handleCancel
      }
      onConfirm = {
        this.handleconf
      }
      />
      <Modal
        trigger={<
        Button loading = {
          this.state.loading
        }
        disabled = {
          this.state.id=='' || this.state.quant=='' || this.state.toc=='' || this.state.fromc=='' || this.state.expl==''  ||this.state.defcheck==false || this.state.impl==''
        }
        primary onClick = {
          this.handleSubmit
        }
         > Verify Goods< /Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='browser' content={this.state.text2} />
        <Modal.Content>
          <h3>{this.state.text1}</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>


      <
      /Form> <
      /Segment> <
      /Layout> <
      /Segment>
    );
  }
}
