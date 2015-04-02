namespace Apv.Web.Api.Auth
{
    using System.Threading.Tasks;

    public class AuthRepository
    {
        public async Task<string> RegisterUser(string userName)
        {
            return userName;
        }

        public async Task<bool> FindUser(string username, string password)
        {
            return username == "h" && password == "s";
        }
    }
}