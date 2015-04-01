[assembly: Microsoft.Owin.OwinStartup(typeof(Apv.Web.Api.Startup))]
namespace Apv.Web.Api
{
    using Ninject.Web.Common.OwinHost;
    using Ninject.Web.WebApi.OwinHost;
    using Owin;

    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureOAuth(app);

            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);

            var config = ConfigureWebApi();
            app.UseNinjectMiddleware(CreateKernel).UseNinjectWebApi(config);
        }
    }
}