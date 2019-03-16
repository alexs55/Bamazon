var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Rayquazayuna8703",
    database: 'bamazon_DB'
});

var itemsarr = [];

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
                itemsarr.push(res[i].itemid);


            }


        }
        itemList();

        

        console.log("\nWelcome to Bamazon. Listed above are the items available for sale.")
        inquirer.prompt([
            {
                name: "itemID",
                message: "What item would you like to buy?",
                type: "list",
                choices: ["BAM232", "BAM233", "BAM234", "BAM235", "BAM236", "BAM237", "BAM238", "BAM239", "BAM240", "BAM241"]
        
            },
            {
                name: "quantity",
                message: "How many would you like to buy?",
                type: "list",
                choices: ["1","2","3","4","5","6","7","8","9","10"]
            }
        
            
        ]).then(function (answers) {

            var query = connection.query("SELECT quantity,price From items WHERE itemid = " + "'" +  answers.itemID + "'" , function (err, res) {
                if (err) throw err;

                console.log(res[0].quantity)
                if( answers.quantity > res[0].quantity){
                    console.log("Insufficient quantity!, Please connect again. Goodbye!")
                    connection.end();
    
                }else{
                    var purchase = res[0].quantity - answers.quantity
                    console.log(purchase)
                    var iditem = "" + answers.itemID + ""
                    decreaseProduct(purchase,iditem);
                    console.log("\nThe total for your purchase was $" + (res[0].price * answers.quantity));
                    console.log("\nIt will be deducted from the payment method associated from your account");
                    console.log("\nPlease come again!");
                    connection.end();

                }
                
            })



        
        
        })
        


    })
})


function decreaseProduct(amount,item) {
        console.log("Thank you for your Purchase of item ID: " + item);
        var query = connection.query(
            "UPDATE items SET ? WHERE ? ",  [
                {
                  quantity: amount
                },
                {
                  itemid: item
                }
              ],
              function(err, res) {
                  console.log(res.affectedRows + " Item quantity updated!")
              }
        )
    }