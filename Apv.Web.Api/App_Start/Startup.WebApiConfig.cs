namespace Apv.Web.Api
{
    using System.Web.Http;

    public partial class Startup
    {
        private HttpConfiguration ConfigureWebApi()
        {
            var config = new HttpConfiguration
            {
                IncludeErrorDetailPolicy = IncludeErrorDetailPolicy.Always
            };

            config.MapHttpAttributeRoutes();

            return config;
        }
    }
}
