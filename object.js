// 1
//1
// const user1 = {
//   name: "Ivan",
//   hobby: "reading",
//   premium: true,
// };
// user1.mood = "happy";
// user1.hobby = "skydiving";
// user1.premium = false;

// for (const key of Object.keys(user1)) {
//   const { [key]: value } = user1;
//   console.log(`${key}: ${value}`);
// }

// 2
// const user2 = {
//   name: "John",
//   age: 30,
//   hobby: "reading",
//   premium: true,
// };

// function countProps(obj) {

//   return Object.keys({ name, age, hobby, premium, ...rest }).length;
// }
// console.log(countProps(user2));

//3
// const team = {
//     ivan: 74,
//     max: 66,
//     fin: 53,
//     Oleg: 23,
//   };

//   function findBestEmployee(employees) {
//     let maxTasks = 0;
//     let bestEmployee = '';

//     for (const [name, tasks] of Object.entries(rest)) {
//       if (tasks > maxTasks) {
//         maxTasks = tasks;
//         bestEmployee = name;
//       }
//     }
//     return `${bestEmployee}: ${maxTasks}`;
//   }
//   console.log(findBestEmployee(team));

//4
// const sallery = {
//     fir: 100,
//     fog: 2430,
//     fiv: 1000,
//     fran: 4412,
//     wincs: 3123,
//   };

//   function countTotalSalary(employees) {
//     let total = 0;
//     const { ...salaryValues } = employees;
//     const values = Object.values(salaryValues);
//     for (const price of values) {
//       total += price;
//     }
//     return total;
//   }
//   console.log(countTotalSalary(sallery));

//   const result = Object.values(sallery).reduce((acc, item) => acc + item, 0);
//   console.log(result);

// 5

// function getAllPropValues(arr, prop) {
//     const newArray = [];
//     for (const item of arr) {
//       const { [prop]: value } = item;
//       if (value !== undefined) {
//         newArray.push(value);
//       }
//     }
//     return newArray;
//   }

//   const products = [
//     {
//       name: "Apple",
//       price: 50,
//       category: "Fruits",
//     },
//     {
//       name: "Carrot",
//       price: 20,
//       category: "Vegetables",
//     },
//     {
//       name: "Banana",
//       price: 30,
//       category: "Fruits",
//     },
//     {
//       name: "Potato",
//       price: 15,
//       category: "Vegetables",
//     },
//   ];

//   console.log(getAllPropValues(products, "name"));
//   console.log(getAllPropValues(products, "price"));
//   console.log(getAllPropValues(products, "category"));

// 6
// const productsList = [
//     { name: "мондорін", price: 10, quantity: 5 },
//     { name: "банан", price: 5, quantity: 10 },
//     { name: "яблуко", price: 10, quantity: 3 },
//   ];

//   function calculateTotalPrice(allProducts, productName) {
//     let totalPrice = 0;
//     for (const { name, price, quantity } = {} of allProducts) {
//       if (name === productName) {
//         totalPrice += price * quantity;
//       }
//     }
//     return totalPrice;
//   }

//   const totalApplePrice = calculateTotalPrice(productsList, "яблуко");
//   console.log(totalApplePrice);

// 2
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Кожна транзакція - це об'єкт з властивостями: id, type і amount
//  */
// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій

//   transactions: [],
//   /*
//    * Метод створює і повертає об'єкт транзакції.
//    * Приймає суму і тип транзакції.
//    */
//   id: 1,
//   createTransaction(amount, type) {
//     const newTransaction = {
//       amount: amount,
//       type: type,
//       id: this.id,
//     };
//     this.id += 1;
//     return newTransaction;
//   },
//   /*
//    * Метод відповідає за додавання суми до балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій
//    */
//   deposit(amount) {
//     this.balance += amount;
//     const transactions = this.createTransaction(
//       amount,
//       Transactions.DEPOSIT
//     );
//     this.transactions.push(transactions);
//     return `Внесено на рахунок ${amount} грн.`;
//   },

//   /*
//    * Метод відповідає за зняття суми з балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій.
//    *
//    * Якщо amount більше, ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливо, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       return "недостатньо грошей на на вашому рахунку";
//     }
//     this.balance -= amount;
//     const transactions = this.createTransaction(
//       amount,
//       Transactions.DEPOSIT
//     );
//     this.transactions.push(transactions);
//     return `зняли ${amount} з рахунку`;
//   },
//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return (
//       "на  рахунку знаходиться " +
//       this.balance +
//       " грн."
//     );
//   },
//   /*
//    * Метод шукає і повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     for (const element of this.transactions) {
//       if (element.id === id) {
//         return element;
//       }
//     }
//     return "такого id немає";
//   },

//   /*

//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     let total = 0;
//     for (const element of this.transactions) {
//       if (type === element.type) {
//         total += element.amount;
//       }
//     }
//     return `загальна сума ${type} транзакцій: ${total} грн.`;
//   },
// };
