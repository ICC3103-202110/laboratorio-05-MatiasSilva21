function Tip_creator(bill_amount,percentaje){
    return (percentaje/100)*bill_amount
}
function Total_bill(bill_amount,Tip){
    return (parseInt(bill_amount)+parseInt(Tip))
}
function view(bill_amount,Tip_percentaje,Tip,Total){
    const { printTable } = require('console-table-printer');
    const testCases = [
        { "Bill Amount": '$'+bill_amount , "Tip(%)": '%'+Tip_percentaje, 'Tip': '$'+Tip, "Total":'$'+Total },
  
    ];
    printTable(testCases);

}    

function app(bill_amount){
    var bill_antes_tip = bill_amount;
    var tip_percentaje=0;
    var Tip=0;
    var Total=0;
    var prompt =require('prompt-sync')();
    var testCases;
    while (true){
        testCases = view(bill_antes_tip,tip_percentaje,Tip,Total)
        bill_antes_tip= prompt('Bill Amount? ')
        tip_percentaje =prompt('Tip(%)? ')
        Tip= Tip_creator(bill_antes_tip,tip_percentaje)
        Total= Total_bill(bill_antes_tip,Tip)
    
        if (bill_antes_tip == 'no'){
            break
        }
        console.clear()
    }
    

}

app(0)