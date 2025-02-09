db.sales.aggregate([
    {
      "$unwind": "$items" // Unwind the items array to become separate documents with the same store and date
    },
    {
      "$group": {
        "_id": {
          "store": "$store", // Group by store and date
          "year": { "$year": "$date" },
          "month": { "$month": "$date" }
        },
        "totalRevenue": {
          "$sum": { "$multiply": ["$items.quantity", "$items.price"] } // Calculate the total revenue for each store and date
        },
        "averagePrice": { "$avg": "$items.price" } // Calculate the average price for each store and date
      }
    },
    {
      "$project": { // Project the desired fields
        "_id": 0,
        "store": "$_id.store",
        "month": {
          "$dateToString": { "format": "%Y-%m", "date": { "$dateFromParts": { "year": "$_id.year", "month": "$_id.month" } } } // Format the month as YYYY-MM
        },
        "totalRevenue": 1,
        "averagePrice": 1
      }
    },
    {
      "$sort": {
        "store": 1, // Sort by store and month
        "month": 1
      }
    }
  ])