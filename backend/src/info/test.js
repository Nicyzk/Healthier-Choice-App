const pool = require("../../db");

const url = "https://data.gov.sg/api/action/datastore_search?resource_id=d3b2447d-0a42-4510-9859-9be85511de8a&limit=1"

const query = "INSERT INTO buffer (productid, productname) VALUES "

  async function buffer() {
    let response = await fetch(url)
    let users = await response.json()
    let data = users.result.records
    //console.log(data)

    endlist = []

    for (let i in data) {
        endlist.push(data[i].brand_and_product_name + " " + data[i].package_size) 
    }
    //console.log(endlist)

    for (let i in endlist) {
       //pool.query(query + "(" + i + "," + endlist[i] + ")", [i,endlist[i]])
        //console.log(endlist[i]);
        console.log(query + "(" + i + "," + endlist[i] + ")")
    }
    // console.log('I reached.')
}




buffer()