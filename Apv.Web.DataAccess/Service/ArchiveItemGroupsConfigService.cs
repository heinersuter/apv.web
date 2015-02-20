namespace Apv.Web.DataAccess.Service
{
    using System.Collections.Generic;
    using System.Linq;
    using Apv.Web.DataAccess.Model;

    public class ArchiveItemGroupsConfigService : IArchiveItemGroupsConfigService
    {
        public IEnumerable<ArchiveItemGroupConfig> GetAll()
        {
            using (var db = new ArchiveContext())
            {
                // TODO: Keep context open and don't use ToList()
                return db.ArchiveItemGroupConfigs.ToList();
            }

        }
    }
}
