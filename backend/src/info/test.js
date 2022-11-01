console.log("Testing 123");

/*
nesteddata = callAPIfunction
data2 = nesteddata.result.records (an array of jsons)
endlist = []
for i in data2:
  endlist.append(i.brand_and_product_name + " " + i.package_size)
for i in endlist:
  Query: INSERT INTO buffertable('productname') VALUES (i)


Big questions:
1. Where to put this
2. Where to run this
3. How to call the API into nesteddata
*/