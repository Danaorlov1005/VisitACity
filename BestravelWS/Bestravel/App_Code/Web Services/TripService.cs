using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Web;

/// <summary>
/// Summary description for TripService
/// </summary>
/// 
public class TripService : ITripService
{
    public TripService()
    {
        //
        // TODO: Add constructor logic here
        //
    }

    public Trip[] GetTrips(string username)
    {
        throw new NotImplementedException();
    }
}


[ServiceContract]
public interface ITripService
{
    [OperationContract]
    [WebGet]
    Trip[] GetTrips(string username);

}