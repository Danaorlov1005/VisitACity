using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BesTravel.DAL
{
  public static class userDAL
  {
    public static dynamic getUserData(int id)
    {
      dynamic userData = "";

      using (var conn = new NpgsqlConnection(DBAccsesConsts.connectionString))
      {
        conn.Open();
        // Retrieve all rows
        var cmd = new NpgsqlCommand("SELECT * FROM \"public\".\"Users\" us WHERE us.\"id\" = '" + id.ToString() + "'", conn);
        using (var reader = cmd.ExecuteReader())
        {
          while (reader.Read())
          {
            userData = reader.GetString(0);
          }
        }

        return userData;
      }
    }
  }
}
