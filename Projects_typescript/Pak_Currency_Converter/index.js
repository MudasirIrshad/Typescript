import inquirer from "inquirer";
console.log("WELCOME TO MY PAKISTAN CURRENCY CONVERTER");
async function converter() {
    do {
        let pak_currency = await inquirer.prompt([
            {
                type: "number",
                message: "Please enter Currency in Rupees",
                name: "pakCur"
            },
            {
                type: "list",
                message: "Slect Countries to convert Pak currency into there currency",
                name: "country",
                choices: ["USA", "India", "China", "Germany", "UAE", "Saudia", "Afghanistan", "Bangladesh", "kuwait", "---> EXIT <---"]
            }
        ]);
        if (pak_currency.country == "USA") {
            let calculated_currency = (pak_currency.pakCur / 290.73);
            console.log(`${pak_currency.pakCur} Rs. in USD = ${calculated_currency} $`);
        }
        else if (pak_currency.country == "India") {
            let calculated_currency = (pak_currency.pakCur / 3.49);
            console.log(`${pak_currency.pakCur} Rs. in Indian Rupees = ${calculated_currency} `);
        }
        else if (pak_currency.country == "China") {
            let calculated_currency = (pak_currency.pakCur / 39.77);
            console.log(`${pak_currency.pakCur} Rs. in Chinese Yuan = ${calculated_currency} `);
        }
        else if (pak_currency.country == "Germany") {
            let calculated_currency = (pak_currency.pakCur / 305.04);
            console.log(`${pak_currency.pakCur} Rs. in German Euros = ${calculated_currency} `);
        }
        else if (pak_currency.country == "UAE") {
            let calculated_currency = (pak_currency.pakCur / 79.15);
            console.log(`${pak_currency.pakCur} Rs. in UAE Dirhams = ${calculated_currency} `);
        }
        else if (pak_currency.country == "Saudia") {
            let calculated_currency = (pak_currency.pakCur / 77.51);
            console.log(`${pak_currency.pakCur} Rs. in Saudi Riyal = ${calculated_currency} `);
        }
        else if (pak_currency.country == "Afghanistan") {
            let calculated_currency = (pak_currency.pakCur / 3.78);
            console.log(`${pak_currency.pakCur} Rs. in Afghani = ${calculated_currency} `);
        }
        else if (pak_currency.country == "Bangladesh") {
            let calculated_currency = (pak_currency.pakCur / 2.63);
            console.log(`${pak_currency.pakCur} Rs. in Bangali takka = ${calculated_currency} `);
        }
        else if (pak_currency.country == "kuwait") {
            let calculated_currency = (pak_currency.pakCur / 939.78);
            console.log(`${pak_currency.pakCur} Rs. in Kuwaiti Dinar = ${calculated_currency} `);
        }
        else {
            console.log("THANKS FOR USING THIS CONVERTER.... GOOD BYE!");
            break;
        }
    } while (true);
}
converter();
