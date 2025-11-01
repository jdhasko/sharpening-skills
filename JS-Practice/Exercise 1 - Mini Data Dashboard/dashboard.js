import { Customer, Order, customers, orders } from "./data.js";

function getCustomerTotal(customer = {}, ordersList = []) {
  var total_amount = 0;

  customer.orders.forEach((id) => {
    total_amount += ordersList.find((o) => o.id === id).amount;
  });

  return total_amount;
}

console.log(getCustomerTotal(customers[2], orders));

function getTopCustomer(customerList = [{}], orders = []) {
  var mostMoney = 0;
  var name = "No One";

  customerList.forEach((c) => {
    const customerTotal = getCustomerTotal(c, orders);

    if (customerTotal > mostMoney) {
      (mostMoney = customerTotal), (name = c.name);
    }
  });

  return { name, mostMoney };
}

const rich = getTopCustomer(customers, orders);

console.log("The top customer is " + rich.name + " with " + rich.mostMoney);
