import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/tokenStorageService/token-storage.service';
import { ConnectionService } from "src/app/services/connection/connection.service";

@Component({
  selector: 'app-add-connection',
  templateUrl: './add-connection.component.html',
  styleUrls: ['./add-connection.component.css']
})
export class AddConnectionComponent implements OnInit {

  constructor( private tokenStorage: TokenStorageService, private connection: ConnectionService ) { }

  ngOnInit(): void {
  }

  userId: String;

  addConnection(connectionType){
   // alert("inside addCOnnection"+this.tokenStorage.getUser().email)
   alert("Application Generated");
    this.connection.addConnection(this.tokenStorage.getUser().email, connectionType)
  }

}
