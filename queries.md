# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT products.productName ,categories.categoryName FROM products
JOIN categories
ON/WHERE products.categoryId= categories.categoryID


### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
select orders.orderID, orders.orderDate ,shippers.shipperName from orders
join shippers
where orders.shipperID =shippers.shipperID
order by orderDate 

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT products.productName,products.unit FROM products
  JOIN OrderDetails 
ON products.productID= OrderDetails.productID
WHERE orderID=10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT orders.orderID,customers.CustomerName,Employees.LastName FROM orders
  JOIN  Customers 
ON orders.CustomerID= customers.CustomerID
JOIN Employees LIMIT 196
### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 