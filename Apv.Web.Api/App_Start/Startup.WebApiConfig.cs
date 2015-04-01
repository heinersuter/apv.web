namespace Apv.Web.Api
{
    using System.Web.Http;
    using System.Web.Http.Cors;

    public partial class Startup
    {
        private HttpConfiguration ConfigureWebApi()
        {
            var config = new HttpConfiguration();
            Register(config);
            return config;
        }

        private void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
