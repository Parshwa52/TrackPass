pragma solidity >=0.4.21 <0.7.0;
contract TrackPassenger
{
    event departured(string id,string fno,string toc,string fromc,string date,string tno,string email);
    mapping(string=>string) travelhistory;
    mapping(string=>string) passemail;
    
    function departure(string memory id,string memory fno,string memory toc,string memory fromc,string memory date,string memory tno,string memory email,string memory travel) public
    {
        travelhistory[id]=travel;
        passemail[id]=email;
        emit departured(id,fno,toc,fromc,date,tno,email);
    }
    
    function gethistory(string memory id)public view returns(string memory)
    {
        return travelhistory[id];
    }
    function getemail(string memory id)public view returns(string memory)
    {
        return passemail[id];
    }
    
   
}