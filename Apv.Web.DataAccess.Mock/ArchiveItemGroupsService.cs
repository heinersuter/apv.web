namespace Apv.Web.DataAccess.Mock
{
    using System.Collections.Generic;
    using Apv.Web.DataAccess.Model;
    using Apv.Web.DataAccess.Service;

    public class ArchiveItemGroupsService : IArchiveItemGroupsService
    {
        public IEnumerable<ArchiveItemGroupConfig> GetAll()
        {
            return new List<ArchiveItemGroupConfig>
                {
                       new ArchiveItemGroupConfig
                       {
                           FolderPath = @"D:\Inetpub\vhosts\heinersuter.ch\httpdocs\archiveItems\1979_Wölfe_PfiLa_Kirchlerau",
                           Name = "Mock PfiLa",
                           Note="",
                       },
                       new ArchiveItemGroupConfig
                       {
                           FolderPath = @"D:\Inetpub\vhosts\heinersuter.ch\httpdocs\archiveItems\2002_Pfadis_SoLa_Thun",
                           Name = "Mock SoLa",
                           Note="",
                       },
                };
        }
    }
}
