namespace Apv.Web.Api.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Diagnostics;
    using System.IO;
    using System.Web.Hosting;
    using System.Web.Http;
    using Models;

    public class ArchiveItemGroupController : ApiController
    {
        // Debug local: http://localhost:49538/api/ArchiveItemGroup
        public IEnumerable<ArchiveItemGroup> GetAllArchiveItemGroups()
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
            var archiveItemGroups = new List<ArchiveItemGroup>();
            foreach (var directory in directories)
            {
                archiveItemGroups.Add(new ArchiveItemGroup { Path = directory });
            }
            return archiveItemGroups;
        }
    }
}
