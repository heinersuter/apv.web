[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(Apv.Web.Api.NinjectWebCommon), "Start")]
[assembly: WebActivatorEx.ApplicationShutdownMethodAttribute(typeof(Apv.Web.Api.NinjectWebCommon), "Stop")]

namespace Apv.Web.Api
{
    using System;
    using System.Diagnostics;
    using System.Web;
    using Apv.Web.DataAccess.Mock;
    using Apv.Web.DataAccess.Service;
    using Microsoft.Web.Infrastructure.DynamicModuleHelper;
    using Ninject;
    using Ninject.Web.Common;

    public static class NinjectWebCommon
    {
        private static readonly Bootstrapper _bootstrapper = new Bootstrapper();

        public static void Start()
        {
            DynamicModuleUtility.RegisterModule(typeof(OnePerRequestHttpModule));
            DynamicModuleUtility.RegisterModule(typeof(NinjectHttpModule));
            _bootstrapper.Initialize(CreateKernel);
        }

        public static void Stop()
        {
            _bootstrapper.ShutDown();
        }

        private static IKernel CreateKernel()
        {
            var kernel = new StandardKernel();
            try
            {
                kernel.Bind<Func<IKernel>>().ToMethod(ctx => () => new Bootstrapper().Kernel);
                kernel.Bind<IHttpModule>().To<HttpApplicationInitializationHttpModule>();

                RegisterServices(kernel);
                return kernel;
            }
            catch
            {
                kernel.Dispose();
                throw;
            }
        }

        private static void RegisterServices(IKernel kernel)
        {
            if (Debugger.IsAttached)
            {
                kernel.Bind<IArchiveItemGroupsConfigService>()
                    .To<ArchiveItemGroupsConfigMockService>()
                    .InSingletonScope();
            }
            else
            {
                kernel.Bind<IArchiveItemGroupsConfigService>()
                    .To<ArchiveItemGroupsConfigService>()
                    .InSingletonScope();
            }
        }
    }
}
