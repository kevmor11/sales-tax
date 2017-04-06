var salesTaxRatesGlobal = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData_2016 = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  },
];

function calculateSalesTax(companySalesData, salesTaxRates) {
  var result = {};
  for (var i = 0; i < companySalesData.length; i++) {
    var salesData = 0;
    var taxData = 0;
    var company = companySalesData[i]
    for (var j = 0; j < company.sales.length; j++) {
      salesData += company.sales[j];
    }
    for (province in salesTaxRates) {
      if (province === company.province) {
        taxData = salesData * salesTaxRates[province];
        break;
      }
    }
    if (!result[company.name]) {
      result[company.name] = {
        totalSales: salesData,
        TotalTaxes: taxData,
      }
    } else {
      result[company.name].totalSales += salesData;
      result[company.name].TotalTaxes += taxData;
    }
  }
  return result;
}

var results_2016 = calculateSalesTax(companySalesData_2016, salesTaxRatesGlobal);

console.log(results_2016);