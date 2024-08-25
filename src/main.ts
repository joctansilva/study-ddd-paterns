import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order_item";

let customer = new Customer("123", "João");
const address = new Address("Rua 2", 2, "1234-123", "São Paulo");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 100, "p1", 2);
const item2 = new OrderItem("2", "Item 2", 200, "p2", 2);
const item3 = new OrderItem("3", "Item 3", 300, "p3", 2);

const order = new Order("1", "123", [item1, item2, item3]);
