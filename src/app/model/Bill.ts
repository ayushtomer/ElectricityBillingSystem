export class Bill
{
  billID:number;
  connectionId:number;
  billingDate:Date;
  previousReading:number;
  currentReading:number;
  unitsConsumed:number;
  dueDate:Date;
  chargesPerUnit:number;
  amount:number;
  billStatus:String;

  constructor(billID:number,connectionId:number,billStatus:String,billingDate:Date,previousReading:number,currentReading:number,unitsConsumed:number,dueDate:Date,chargesPerUnit:number,amount:number)
  {
    this.billID=billID;
    this.connectionId=connectionId;
    this.billingDate=billingDate;
    this.previousReading=previousReading;
    this.currentReading=currentReading;
    this.unitsConsumed=unitsConsumed;
    this.dueDate=dueDate;
    this.chargesPerUnit=chargesPerUnit;
    this.amount=amount;
    this.billStatus=billStatus;
  }
}


