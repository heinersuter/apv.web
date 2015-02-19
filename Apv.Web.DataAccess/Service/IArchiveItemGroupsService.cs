namespace Apv.Web.DataAccess.Service
{
    using System.Collections.Generic;
    using Apv.Web.DataAccess.Model;

    public interface IArchiveItemGroupsService
    {
        IEnumerable<ArchiveItemGroupConfig> GetAll();
    }
}