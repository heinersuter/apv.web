namespace Apv.Web.Api.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Diagnostics;
    using System.IO;
    using System.Linq;
    using System.Web.Hosting;
    using System.Web.Http;
    using Apv.Web.Api.Models;
    using Apv.Web.DataAccess.Model;
    using Apv.Web.DataAccess.Service;

    [RoutePrefix("api/ArchiveItemGroup")]
    public class ArchiveItemGroupController : ApiController
    {
        private readonly IArchiveItemGroupsConfigService _service;

        public ArchiveItemGroupController(IArchiveItemGroupsConfigService service)
        {
            _service = service;
        }

        [Authorize]
        [Route("")]
        [HttpGet]
        public IEnumerable<ArchiveItemGroup> GetAllArchiveItemGroups()
        {
            // Debug local: http://localhost:49538/api/ArchiveItemGroup
            var groupConfigs = _service.GetAll().ToList();

            var directories = ReadDirectories();
            var archiveItemGroups = MergeDirectoriesWithConfigs(directories, groupConfigs);

            return archiveItemGroups;
        }

        [Authorize]
        [Route("")]
        [HttpPost]
        public void Test()
        {
            Console.WriteLine("Test");
        }

        private static IEnumerable<string> ReadDirectories()
        {
            string rootDir;
            if (Debugger.IsAttached)
            {
                rootDir = HostingEnvironment.MapPath("~/archiveItems");
            }
            else
            {
                rootDir = HostingEnvironment.MapPath("~/../archiveItems");
            }

            if (rootDir == null)
            {
                throw new Exception("The root directory for the archiveItems seems not to exist!");
            }

            var directories = Directory.GetDirectories(rootDir);
            return directories;
        }

        private static IEnumerable<ArchiveItemGroup> MergeDirectoriesWithConfigs(IEnumerable<string> directories, List<ArchiveItemGroupConfig> groupConfigs)
        {
            // TODO: Clean up danglig configs
            var archiveItemGroups = new List<ArchiveItemGroup>();
            foreach (var directory in directories)
            {
                var archiveItemGroup = new ArchiveItemGroup { FolderPath = directory };
                archiveItemGroups.Add(archiveItemGroup);
                var groupConfig = groupConfigs.FirstOrDefault(config => config.Directory == archiveItemGroup.Directory);
                if (groupConfig != null)
                {
                    archiveItemGroup.Name = groupConfig.Name;
                }
            }
            return archiveItemGroups;
        }
    }
}
