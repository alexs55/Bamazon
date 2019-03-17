# Bamazon

Bamazon is a Node base application that allows users to purchase items from a list pulled from a MySql database.

It uses the bamazoncustomer.js to start the application using Node

To start, simply type "node bamazoncustomer.js" using terminal.
    -Be sure to be on the same directory where the .js file is located when doing this.


After the app has been launched, the customer is given a list of items available for sale like in the next example:

https://drive.google.com/open?id=1aLgKwr8TJ5ULuqeti5ATglsRGjPYDo3F

The customer can choose a specific item from the list in order to make a purchase. If there is available quantity, the total amount for the items will be display and the connection will end. This will also update the Mysql databes accordingly.

https://drive.google.com/open?id=1NkgRzVJDuZ3D2w7crmkEoXd9i5V49J_G

Lastly, if the item quantity is not available when checking on the database, the purchase will be interrupted and the customer will be disconnected and asked to come again.

In this example, the user attempted to buy 10 of an item that had 9 remaining.

https://drive.google.com/open?id=17DQS4kMQlUm25eVk6bmUAy-LGgwPETV2
