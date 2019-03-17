var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Rayquazayuna8703",
    database: 'bamazon_DB'
});

inquirer.prompt([
    {
        name: "action",
        message: "What action would you like to perform",
        type: "list",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory"]

    }


]).then(function (answers) {
    var result = answers.action
    switch (result) {
        case "View Products for Sale":
            availableForSale();
            connection.end();
            break;

        case "View Low Inventory":
            lowInventory();
            connection.end();
            break;

        case "Add to Inventory":
            inventoryAdd();
            
            break;

        // case "Add New Product":

        // break;
    }



})


function availableForSale() {
    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected as customer ID ", connection.threadId);

        // to query the database information

        connection.query("SELECT * FROM items", function (err, res) {
            if (err) throw err;



            var itemList = function () {
                for (var i = 0; i < res.length; i++) {
                    console.log("\n=====" + i + "=====");
                    console.log("\nItem Id: " + res[i].itemid);
                    console.log("\nItem: " + res[i].item);
                    console.log("\nDepartment: " + res[i].department);
                    console.log("\nPrice: $" + res[i].price);
                    console.log("\nQuantity remaining: " + res[i].quantity);
                    // itemsarr.push(res[i].itemid);


                }


            }
            itemList();
        })
    })
}

function lowInventory() {
    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected as customer ID ", connection.threadId);

        // to query the database information

        connection.query("SELECT * FROM items WHERE quantity <= 5", function (err, res) {
            if (err) throw err;



            var itemList = function () {
                for (var i = 0; i < res.length; i++) {
                    console.log("\n=====" + i + "=====");
                    console.log("\nItem Id: " + res[i].itemid);
                    console.log("\nItem: " + res[i].item);
                    console.log("\nDepartment: " + res[i].department);
                    console.log("\nPrice: $" + res[i].price);
                    console.log("\nQuantity remaining: " + res[i].quantity);
                    // itemsarr.push(res[i].itemid);


                }


            }
            itemList();
        })
    })
}

function inventoryAdd() {
    inquirer.prompt([
        {
            name: "itemID",
            message: "What item would you like to update the quantity of?",
            type: "list",
            choices: ["BAM232", "BAM233", "BAM234", "BAM235", "BAM236", "BAM237", "BAM238", "BAM239", "BAM240", "BAM241"]

        },
        {
            name: "quantity",
            message: "How many would you like to add?",
            type: "list",
            choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        }


    ]).then(function (answers) {

        connection.connect(function (err) {
            if (err) throw err;
            

            
            
            var query = connection.query(
                "UPDATE items SET quantity = quantity + " + answers.quantity + " WHERE ?;",[
                    {
                        itemid: answers.itemID
                    }
                ],
                 function (err, res) {
                    console.log(query.sql)
                    console.log(res)
                    connection.end();
                }
                
                
                )
                console.log("Succesfully added " + answers.quantity + " to item ID: " + answers.itemID);

        })
        
    })
    
}