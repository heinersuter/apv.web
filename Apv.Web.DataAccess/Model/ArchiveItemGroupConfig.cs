namespace Apv.Web.DataAccess.Model
{
    using System.IO;

    public class ArchiveItemGroupConfig
    {
        public int ArchiveItemGroupConfigId { get; set; }

        public string FolderPath { get; set; }

        public string Name { get; set; }

        public string Note { get; set; }

        public string Directory
        {
            get { return Path.GetFileName(FolderPath.TrimEnd(Path.DirectorySeparatorChar)); }
        }
    }
}
