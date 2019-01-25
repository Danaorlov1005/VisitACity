using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for DBAccses
/// </summary>
public static class DBAccses
{
  const string connectionString = "Host=manny.db.elephantsql.com:5432;Username=kwwwxjgg;Database=manny.db.elephantsql";

  public static List<dynamic> getTrips()
  {
    List<dynamic> trips = new List<dynamic>();
    using (var conn = new NpgsqlConnection(connectionString))
    {      conn.Open();
      // Retrieve all rows
      using (var cmd = new NpgsqlCommand("SELECT * FROM trips", conn))
      using (var reader = cmd.ExecuteReader())
        while (reader.Read())
          trips.Add(reader.GetString(0));
    }

    return trips;
  }  
}
