namespace Apv.Web.Api
{
    using System.Diagnostics;
    using System.Reflection;
    using Apv.Web.DataAccess.Mock;
    using Apv.Web.DataAccess.Service;
    using Ninject;

    public partial class Startup
    {

        private StandardKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            kernel.Load(Assembly.GetExecutingAssembly());
            RegisterServices(kernel);
            return kernel;
        }

        private void RegisterServices(IKernel kernel)
        {
            //if (Debugger.IsAttached)
            //{
                //kernel.Bind<IArchiveItemGroupsConfigService>()
                //    .To<ArchiveItemGroupsConfigMockService>()
                //    .InSingletonScope();
            //}
            //else
            //{
            kernel.Bind<IArchiveItemGroupsConfigService>()
                .To<ArchiveItemGroupsConfigService>()
                .InSingletonScope();
            //}
        }
    }
}