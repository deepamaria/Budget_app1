const body=document.body;
const budget_container=document.getElementById("budget_container");
const input_container=document.getElementById("input_container");
const income_container=document.getElementById("income_container");
const expense_container=document.getElementById("expense_container");
const log_container=document.getElementById("log_container");
const income_log_container=document.getElementById("income_log_container");
const expense_log_container=document.getElementById("expense_log_container");

//adding classes to containers
body.classList.add("body");
budget_container.classList.add("budget_container");
input_container.classList.add("input_container");
income_container.classList.add("income_container");
expense_container.classList.add("expense_container");
log_container.classList.add("log_container");
income_log_container.classList.add("income_log_container");
expense_log_container.classList.add("expense_log_container");

// accessing btns and income and expense inputs in variables
const Rec_btn=document.getElementById("receive_btn")
const Pay_btn=document.getElementById("pay_btn")
const income=document.getElementById("income");
const expense=document.getElementById("expense");
const inc_desc=document.getElementById("inc_desc");
const exp_desc=document.getElementById("exp_desc");

//adding classes
Rec_btn.classList.add("Rec_btn");
Pay_btn.classList.add("Pay_btn");
income.classList.add("income");
expense.classList.add("expense");
inc_desc.classList.add("inc_desc");
exp_desc.classList.add("exp_desc");


const display=document.getElementById("display");

const balance_display=document.getElementById("balance_display");
const income_display=document.getElementById("income_display");
const expense_display=document.getElementById("expense_display");

//adding classes to displays
balance_display.classList.add("balance_display");
income_display.classList.add("income_display");
expense_display.classList.add("expense_display");

// creating new p in display to print values
const balance_display_p=document.createElement("p");
const income_display_p=document.createElement("p");
const expense_display_p=document.createElement("p");

body.appendChild(budget_container);
budget_container.append(display,input_container,log_container);

// balance_display.appendChild(balance_display_p);
display.append(balance_display,income_display,expense_display);
input_container.append(income_container,expense_container);
log_container.append(income_log_container,expense_log_container);

balance_display.appendChild(balance_display_p);
income_display.appendChild(income_display_p);
expense_display.appendChild(expense_display_p);

balance_display_p.textContent="0";
income_display_p.textContent="500";
expense_display_p.textContent="500";



Rec_btn.addEventListener("click",function(){
    income_display_p.textContent=Number(income_display_p.textContent)+Number(income.value);
    balance_display_p.textContent=Number(income_display_p.textContent)-Number(expense_display_p.textContent);

    const income_log_div=document.createElement("div");
    income_log_div.classList.add("income_log_div");
    const income_log_p=document.createElement("p");
    income_log_p.classList.add("income_log_p");
    income_log_p.textContent=inc_desc.value +" "+ income.value;

    const delBtn=document.createElement("button");
    delBtn.textContent="X";
    income_log_div.append(income_log_p,delBtn);
    income_log_container.appendChild(income_log_div);
    inc_desc.value="";
    income.value="";
})

Pay_btn.addEventListener("click",function(){
    expense_display_p.textContent=Number(expense_display_p.textContent)-Number(expense.value);
    balance_display_p.textContent=Number(income_display_p.textContent)-Number(expense_display_p.textContent);

    const expense_log_div=document.createElement("div");
    expense_log_div.classList.add("expense_log_div");
    const expense_log_p=document.createElement("p");
    expense_log_p.classList.add("expense_log_p");
    expense_log_p.textContent=exp_desc.value +" "+ expense.value;

    const delBtn=document.createElement("button");
    delBtn.textContent="X";
    expense_log_div.append(expense_log_p,delBtn);
    expense_log_container.appendChild(expense_log_div);
    exp_desc.value="";
    expense.value="";
})