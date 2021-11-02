import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  connectionId : String = "  "

  constructor(private http: HttpClient) { }

    setConnectionId(connection){
      this.connectionId = connection
    }

    getConnectionId(){
      return this.connectionId
    }

    addConnection(userID, connectionType){
      //alert(connectionType +" " + userID)
      this.http.post("http://localhost:7102/addConnection",{
        "meterNumber": "",
        "connectionType": connectionType,
        "customerID": userID,
        "approvalStatus": false
      }).subscribe( i => console.log(JSON.stringify(i)))
    }

    deleteConnection(connectionId){
      alert("delted: "+connectionId)
      this.http.delete("http://localhost:7102/deleteConnection/" + connectionId).subscribe(i => alert(i))
    }

}