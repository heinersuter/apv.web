namespace Apv.Web.Api.Models
{
    using System.IO;

    public class ArchiveItem
    {
        public ArchiveItem(string filePath)
        {
            FilePath = filePath;

            var fileName = Path.GetFileName(FilePath);
            if (fileName != null)
            {
                FileName = fileName.Replace('.', '/');
            }
            ArchiveItemGroup = Path.GetFileName(Path.GetDirectoryName(FilePath));
        }

        public string FilePath { get; private set; }

        public string FileName { get; private set; }

        public string ArchiveItemGroup { get; private set; }
    }
}