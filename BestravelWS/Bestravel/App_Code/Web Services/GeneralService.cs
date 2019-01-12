using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

// NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "GeneralService" in code, svc and config file together.
public class GeneralService : IGeneralService
{
  public void GetMap()
  {
    GlobalAPI.GetMap();
  }
}

[ServiceContract]
public interface IGeneralService
{
  [OperationContract]
  [WebGet]
  void GetMap();
}
