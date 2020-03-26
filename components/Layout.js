import React from 'react';
import { Form, Radio,Button,Input,Image,Container} from 'semantic-ui-react'

export default props => {
  return (
     <
    div   >
  <
    link rel = "stylesheet"
    href = "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" / >
    <
    center ><table>
    <tr><td><Image src="/static/images.jpg" className="team" height="50%"/></td><td>
     <div style={{color:'#000000'}}>--------</div> </td><td>
     <div style={{fontSize:'80px', fontFamily:'Algerian',color:'#FFFFFF'}}>TrackPass</div> </td></tr>
    </table>
    </center >

    {
     props.children
   }
    <
    /div>
  );
}
