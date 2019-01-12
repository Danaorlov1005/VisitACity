using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

// NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service" in code, svc and config file together.



public class UserService : IUserService
{
	public User Login(string username, string password)
	{
        // שליפה של משתמש

        return new User("","");
	}
    
}


[ServiceContract]
public interface IUserService
{
    [OperationContract]
    [WebGet]
    User Login(string username, string password);

}