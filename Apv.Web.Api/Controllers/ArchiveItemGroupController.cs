namespace Apv.Web.Api.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;
    using Models;

    public class ArchiveItemGroupController : ApiController
    {
        private readonly ArchiveItemGroup[] _archiveItemGroups =
        {
            new ArchiveItemGroup {Name = "Test 1", Description = "This is my first Folder", Path = "items/2011_Pfadis_SoLa"},
            new ArchiveItemGroup {Name = "Test 2", Description = "This is my second Folder", Path = "items/1979_Wölfe_PfiLa"},
        };

        public IEnumerable<ArchiveItemGroup> GetAllArchiveItemGroups()
        {
            return _archiveItemGroups;
        }
    }
}
