const body=document.body;
const budget_cont=document.getElementById("budget_cont");
const display=document.getElementById("display");
const balance_display=document.getElementById("balance_display");
const income_display=document.getElementById("income_display");
const expense_display=document.getElementById("expense_display");

const input_container=document.getElementById("input_container"); 
const income_form=document.getElementById("income_form");
const expense_form=document.getElementById("expense_form");

budget_cont.classList.add("budget_cont");
display.classList.add("display");
income_display.classList.add("income_display");
balance_display.classList.add("balance_display");
expense_display.classList.add("expense_display");
input_container.classList.add("input_container");
income_form.classList.add("income_form");
expense_form.classList.add("expense_form");




display.append(income_display,balance_display,expense_display);
input_container.append(income_form,expense_form);
budget_cont.append(display,input_container);
body.appendChild(budget_cont);


let income_t=[{
        "t_id":1213,
        "inc_desc":"",
        "amount":0,
        "type":"income"

        // "t_id":1213,
        // "inc_desc":"From Dad",
        // "amount":34,
        // "type":"income"
        
    }];

let expense_t=[{
        "t_id":12334,
        "exp_desc":"",
        "amount":0,
        "type":"expense"
    }];

let i_data={};
let e_data={};
let total_inc=0;
let total_exp=0;
let balance=0;  


income_form.addEventListener("submit",function(e){
    e.preventDefault();
    // console.log(e.target.inc_amt.value);
    i_data={t_id:Math.floor(Math.random()*10010),inc_desc:e.target.inc_desc.value,amount:e.target.inc_amt.value,type:"income"};
    income_t.push(i_data);
    console.log("Income_t_Array",income_t);
    balance_calc();
})

expense_form.addEventListener("submit",function(e){
    e.preventDefault();
    // console.log(e.target.exp_amt.value);
    e_data={t_id:Math.floor(Math.random()*10010),exp_desc:e.target.exp_desc.value,amount:e.target.exp_amt.value,type:"expense"};
    expense_t.push(e_data);
    console.log("Expense_t_Array",expense_t);
    balance_calc();
})
function balance_calc(){
    // total_inc=0 
//     for (let i=0;i< income_t.length; i++) {
//         // console.log(income_t[i].amount);
//     total_inc+= Number(income_t[i].amount);
// }
// console.log("total_Income:",total_inc);
    //  total_exp=0
    //      for (let i=0;i< expense_t.length; i++) {
        //         total_exp+= Number(expense_t[i].amount);
        //     }
        // console.log("total_Expense:",total_exp);
        // const income_value=total_inc
        // const expense_value=total_exp;
        const income_value=income_calc();
        const expense_value=expense_calc();
    console.log("Income_value:",income_value);
    console.log("Expense_value:",expense_value);
    balance=income_value-expense_value;
    console.log("Balance",balance);
    balance_display.textContent=balance;

}

//Stage 2
function income_calc(){
    total_inc=0 
    for (let i=0;i< income_t.length; i++) {
    total_inc+= Number(income_t[i].amount);
}
console.log("total_Income:",total_inc);
income_display.textContent=total_inc;
return total_inc;
}

function expense_calc(){
    total_exp=0 
    for (let i=0;i< expense_t.length; i++) {
       total_exp+= Number(expense_t[i].amount);
   }
console.log("total_Expense:",total_exp);
expense_display.textContent=total_exp;
return total_exp;
}