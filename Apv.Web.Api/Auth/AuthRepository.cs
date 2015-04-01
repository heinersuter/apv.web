namespace Apv.Web.Api.Auth
{
    using System.Threading.Tasks;

    public class AuthRepository
    {
        public async Task<string> RegisterUser(string userName)
        {
            return userName;
        }

        public async Task<string> FindUser(string userName)
        {
            return userName;
        }
    }
}