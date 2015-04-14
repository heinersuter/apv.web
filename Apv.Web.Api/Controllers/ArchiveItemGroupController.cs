namespace Apv.Web.Api.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Http;
    using Apv.Web.Api.Models;
    using Apv.Web.Api.Services;
    using Apv.Web.DataAccess.Model;
    using Apv.Web.DataAccess.Service;

    [RoutePrefix("api/ArchiveItemGroup")]
    public class ArchiveItemGroupController : ApiController
    {
        private readonly IArchiveItemGroupsConfigService _service;
        private readonly FileSystemService _fileSystem;

        public ArchiveItemGroupController(IArchiveItemGroupsConfigService service)
        {
            _service = service;
            _fileSystem = new FileSystemService();
        }

        [Authorize]
        [Route("")]
        [HttpGet]
        public IEnumerable<ArchiveItemGroup> GetAllArchiveItemGroups()
        {
            // Debug local: http://localhost:49538/api/ArchiveItemGroup
            var groupConfigs = _service.GetAll().ToList();

            var directories = _fileSystem.GetGroupDirectories();
            var archiveItemGroups = MergeDirectoriesWithConfigs(directories, groupConfigs);

            return archiveItemGroups;
        }

        private static IEnumerable<ArchiveItemGroup> MergeDirectoriesWithConfigs(IEnumerable<string> directories, List<ArchiveItemGroupConfig> groupConfigs)
        {
            // TODO: Clean up danglig configs
            var archiveItemGroups = new List<ArchiveItemGroup>();
            foreach (var directory in directories)
            {
                var archiveItemGroup = new ArchiveItemGroup(directory);
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
